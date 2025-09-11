import React from 'react'
import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun, Moon } from 'lucide-react'
import MyPro from "../../assets/Profile.jpg";

const Header = ({ slideBarCollaped, onToggleSlidebar, DarkMode, SetDarkMode }) => {
  return (
    <div className={`backdrop-blur-xl border-b px-4 sm:px-6 py-3 sm:py-4 ${
        DarkMode
          ? "bg-slate-900/80 border-slate-700/50"
          : "bg-white/80 border-slate-200/50"
      }`} >
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button 
            onClick={onToggleSlidebar}
            className={`p-2 rounded-lg transition-colors ${DarkMode ? "text-slate-300 hover:bg-slate-800 " : "text-slate-600 bg-slate-100"}`}
          >
            <Menu className="w-5 h-5"/>
          </button>
          <div className="hidden md:block">
            <h1 className={`text-xl sm:text-2xl font-black ${DarkMode ?  "text-white" : " text-slate-800 "}`}>Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              Welcome Back, Bulton!
            </p>
          </div>
        </div>

        {/* Center Search */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-8">
          <div className={`flex items-center ${DarkMode ? "bg-slate-100 border-slate-200 " : " bg-slate-800 border border-slate-700"}   rounded-xl px-2 sm:px-3 py-1.5 sm:py-2.5 focus-within:ring-2 focus-within:ring-blue-500 transition-all`}>
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              className={`hidden sm:block flex-1 bg-transparent border-none outline-none px-2 sm:px-3 ${DarkMode ? " text-slate-800 " : "text-white" } placeholder-slate-500 text-sm sm:text-base`}
            />
            <button className={`p-1 text-slate-400 ${DarkMode ? "hover:text-slate-600" : "hover:text-slate-300"}  `}>
              <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">

          {/* Quick Action */}
          <button className="hidden lg:flex items-center space-x-2 py-1.5 sm:py-2 px-3 sm:px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
            <Plus className="w-4 h-4"/>
            <span className="text-xs sm:text-sm font-medium">New</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => SetDarkMode(!DarkMode)}
            className={`p-2 sm:p-2.5 rounded-xl   ${DarkMode ? "text-slate-600 hover:bg-slate-800" :  "text-slate-300 hover:bg-slate-800"}   transition-colors`}
          >
            {DarkMode ? (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
            ) : (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            )}
          </button>

          {/* Notifications */}
          <button className={`relative p-2 sm:p-2.5 rounded-xl ${DarkMode ? "text-slate-300 hover:bg-slate-800" : "text-slate-900 hover:bg-slate-800 hover:text-slate-50"}  transition-colors`}>
            <Bell className="w-4 h-4 sm:w-5 sm:h-5"/>
            <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center">3</span>
          </button>

          {/* Settings */}
          <button className={`p-2 sm:p-2.5 rounded-xl ${DarkMode ? "text-slate-300 hover:bg-slate-800" : "text-slate-900 hover:bg-slate-800 hover:text-slate-50"}  transition-colors`} >
            <Settings className="w-4 h-4 sm:w-5 sm:h-5"/>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 sm:space-x-3 pl-2 sm:pl-3 cursor-pointer md:hidden lg:flex ">
            <img src={MyPro} alt="Profile" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-2 ring-blue-500" />
            <div className="hidden md:block">
              <p className={`text-sm font-medium ${DarkMode ? "text-white " : "text-slate-800"} `} >Deluch Ratanak Bulton</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
