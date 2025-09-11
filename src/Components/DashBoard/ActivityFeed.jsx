import { Bell, Clock, CreditCard, DiscAlbum, Settings, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const activities = [
    {
        id : 1, 
        type : "user", 
        icon : User, 
        title : "New User Registered", 
        description :   "John Smith Create An Account", 
        time : "2 minutes ago", 
        color : "text-blue-500", 
        bgcolor_white : "bg-blue-100", 
        bgcolor_dark : "bg-blue-900/30"
    }, 
    {
        id : 2, 
        type : "order", 
        icon : ShoppingCart, 
        title : "New Order Received", 
        description : "Order #3847 for $2,399", 
        time : "5 minutes ago", 
        color : "text-emerald-500", 
        bgcolor_white : "bg-emerald-100", 
        bgcolor_dark : "bg-emerald-900/30"
    },
    {
        id : 3, 
        type : "paymeny", 
        icon : CreditCard, 
        title : "Payment Processes", 
        description : "Payment of $1,999 Completed", 
        time : "12 minutes ago", 
        color : "text-purple-500", 
        bgcolor_white : "bg-purple-100", 
        bgcolor_dark : "bg-purple-900/30"
    }, 
    {
        id : 4, 
        type : "system", 
        icon : Settings, 
        title : "System Update", 
        description : "Database Backup Completed", 
        time : "1 hour ago", 
        color : "text-orange-500", 
        bgcolor_white : "bg-orange-100", 
        bgcolor_dark : "bg-orange-900/30"
    }, 
    {
        id : 5, 
        type : "notification", 
        icon : Bell, 
        title : "Low Stock Alert", 
        description : "iPhone 15 Pro Stock is Low ", 
        time : "2 hours ago", 
        color : "text-red-500", 
        bgcolor_white : "bg-red-100", 
        bgcolor_dark : "bg-red-900/30"
    }

]

const ActivityFeed = ({DarkMode}) => {
  return (
    <div className={`${DarkMode ? " bg-slate-900/80 border-slate-700/50" : "bg-white/80 border-slate-200/50 "} backdrop-blur-xl rounded-2xl border `}>
        <div className={`p-6 border-b ${DarkMode ? "border-slate-700/50" : "border-slate-200/50"}`}>
            <div>
                <h3 className={`text-lg font-bold ${DarkMode ? "text-white" : "text-slate-800"}`}>
                Activity Feed
                </h3>
                <p className={`text-sm ${DarkMode ? "text-slate-400" : "text-slate-800"}`}>
                    Recent System Activities
                </p>
            </div>
                <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                            View All
                </button>
        </div>
        <div className='p-6'>
            <div className='space-y-4 '>
                {activities.map((activity) => {
                    return (
                        <div className={`flex items-start space-x-4 p-3 rounded-xl ${DarkMode  ? "hover:bg-slate-800/50" :  "hover:bg-slate-50"} transition-colors`}>
                            <div className={`p-2 rounded-lg ${DarkMode ? activity.bgcolor_dark : activity.bgcolor_white}`}>
                                <activity.icon className={`w-4 h-4 ${activity.color}`}/>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h4 className={`text-sm font-semibold ${DarkMode ? "text-white" : "text-slate-800"}`}>
                                    {activity.title}
                                </h4>
                                <p className={`text-sm  ${DarkMode ? "text-slate-400" : "text-slate-600"} truncate`}>
                                    {activity.description}
                                </p>
                                <div className='flex items-center-safe space-x-1 mt-1'>
                                    <Clock className='w-3 h-3 text-slate-400'/>
                                    <span className={`text-xs ${DarkMode ? "text-slate-400" : "text-slate-500"}`}>
                                        {activity.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default ActivityFeed