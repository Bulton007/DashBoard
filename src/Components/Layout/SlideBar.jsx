import React, { useState } from "react";
import { Zap, BarChart3, Bell, Calendar, ChevronDown, CreditCard, FileText, Filter, LayoutDashboard, Menu, MessagesSquare, Package, Plus, Search, Settings, ShoppingBag, Sun, Users } from 'lucide-react';
import MyPro from "../../assets/Profile.jpg";


const SlideBar = ({ collapsed, onToggle, currentPage, onPageChange, DarkMode }) => {
  const [ExpandsItems, SetExpandsItems] = useState(new Set(["analytics"]));
  const [ShowImagesFor, setShowImagesFor] = useState(null); // track menu id for hidden images

  const toggleExpand = (itemid) => {
    const NewExpands = new Set(ExpandsItems); 
    if(NewExpands.has(itemid)){
      NewExpands.delete(itemid);
    }else{
      NewExpands.add(itemid);
    }
    SetExpandsItems(NewExpands);  
  }

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", active: true, badge: "New" },
    { id: "analytics", icon: BarChart3, label: "Analytics", submenu: [
        { id: "overview", label: "Overview" },
        { id: "reports", label: "Reports" },
        { id: "insights", label: "Insights" }
      ] },
    { id: "user", icon: Users, label: "Users", count: "2.4k", submenu: [
        { id: "all-users", label: "All Users" },
        { id: "roles", label: "Roles & Permissions" },
        { id: "activity", label: "User Activity" }
      ] },
    { id: "ecommerce", icon: ShoppingBag, label: "E-commerce", submenu: [
        { id: "products", label: "Products" },
        { id: "orders", label: "Orders" },
        { id: "customers", label: "Customers" }
      ] },
    { id: "inventory", icon: Package, label: "Inventory", count: "847" },
    { id: "transitions", icon: CreditCard, label: "Transitions", badge: "12" },
    { id: "messages", icon: MessagesSquare, label: "Messages", badge: "12" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" }
  ];

  return (
    <div className={`${collapsed ? "w-20" : "w-72"} transition duration-300 ease-in-out ${DarkMode ? "bg-slate-900/80 border-slate-700/50" : "bg-white/80 border-slate-200/50"} flex flex-col relative z-10`}>
      {/* Logo */}
      <div className={`p-6 border-b ${DarkMode ? "border-slate-700/50" : "border-slate-200/50"} `}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className={`text-xl font-bold ${DarkMode ? "text-white" : "text-slate-800"} `} >Nexus</h1>
              <p className={`text-xs ${DarkMode ? "text-slate-400" : "text-slate-500"} `}>Admin Panel</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button 
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                ${currentPage === item.id || item.active ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25" : DarkMode ? "text-slate-300 hover:bg-slate-800/50" : "text-slate-600 hover:bg-slate-100"}`}
              onClick={()=>{
                if(item.submenu){
                  toggleExpand(item.id);
                } else {
                  onPageChange(item.id);
                  // toggle hidden images
                  setShowImagesFor(ShowImagesFor === item.id ? null : item.id);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                {!collapsed && (
                  <>
                    <span className="font-medium ml-2">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">{item.badge}</span>
                    )}
                    {item.count && (
                      <span className={`px-2 py-1  text-xs #${DarkMode ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}  rounded-full`}>{item.count}</span>
                    )}
                  </>
                )}
              </div>
              {!collapsed && item.submenu && <ChevronDown className="w-4 h-4 transition-transform" />}
            </button>

            {/* Submenu */}
            {item.submenu && ExpandsItems.has(item.id) && !collapsed && (
              <div className="ml-10 mt-1 space-y-1">
                {item.submenu.map((sub) => (
                  <button key={sub.id} className={`w-full text-left p-2 text-sm ${DarkMode ? " text-slate-400 hover:text-slate-200 hover:bg-slate-800/50" : "text-slate-600 hover:text-slate-800"} text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all`}>{sub.label}</button>
                ))}
              </div>
            )}

            {/* Hidden Images under item */}
            {ShowImagesFor === item.id && !collapsed && (
              <div className="ml-6 mt-3 grid grid-cols-2 gap-2">
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      {!collapsed && (
            <div className={`p-4 border-t ${DarkMode ? "border-slate-700/50" : "border-slate-200/50"}`}>
        <div className={`flex items-center space-x-3 p-3 rounded-xl ${DarkMode ? "bg-slate-800/50" : "bg-slate-50"} `}>
          <img src={MyPro} alt="Profile" className="w-10 h-10 rounded-full ring-2 ring-blue-500" />
          <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${DarkMode ? "text-white" : "text-slate-800"} truncate`}>Deluch Ratanak Bulton</p>
              <p className={`text-xs ${DarkMode ? "text-slate-400" : "text-slate-500"} truncate`}>Administrator</p>
            </div>
        </div>
      </div>
          )}
      
    </div>
  );
};

export default SlideBar;
