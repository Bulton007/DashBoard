import { ArrowDownRight, ArrowUpRight, DollarSign, Eye, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const stats = [
  {
    title : "Total Revenue", 
    value : "$124,563", 
    change : "+12.5%", 
    trend : "up", 
    icon : DollarSign, 
    color : "from-emerald-500 to-teal-600", 
    bgcolor_white : "bg-emerald-50",
    bgcolor_dark : "bg-emerald-900/20",
    textColor_white : "text-emerald-600",
    textColor_dark : "text-emerald-400", 
  },
  {
    title : "Active Users", 
    value : "8,453", 
    change : "+8.2%", 
    trend : "up", 
    icon : Users, 
    color : "from-blue-500 to-indigo-600", 
    bgcolor_white : "bg-blue-50",
    bgcolor_dark : "bg-blue-900/20",
    textColor_white : "text-blue-600",
    textColor_dark : "text-blue-400", 
  }, 
  {
    title : "Total Orders", 
    value : "45,892", 
    change : "+15.3%", 
    trend : "up", 
    icon : ShoppingCart, 
    color : "from-purple-500 to-pink-600", 
    bgcolor_white : "bg-purple-50",
    bgcolor_dark : "bg-purple-900/20",
    textColor_white : "text-purple-600",
    textColor_dark : "text-purple-400",
  },
  {
    title : "Page View", 
    value : "2,876", 
    change : "-2.1%", 
    trend : "down", 
    icon : Eye, 
    color : "from-orange-500 to-red-600", 
    bgcolor_white : "bg-orange-50",
    bgcolor_dark : "bg-orange-900/20",
    textColor_white : "text-orange-600",
    textColor_dark : "text-orange-400", 
  },
]


const StartGrid = ({DarkMode}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
      {stats.map((stats, index) => {
        return (
          <div 
            key={index}
            className={`${DarkMode 
              ? "bg-slate-900/80 border-slate-700/50 hover:shadow-slate-900/20" 
              : "bg-white/80 border-slate-200/50 hover:shadow-slate-200/20"} 
              hover:shadow-xl backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 group`}
          >
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <p className={`text-sm font-medium ${DarkMode ? "text-slate-400" : "text-slate-600"} mb-2`}>
                  {stats.title}
                </p>
                <p className={`text-3xl font-bold ${DarkMode ? "text-white" : "text-slate-800"} mb-4`}>
                  {stats.value}
                </p>
                <div className='flex items-center space-x-2'>
                  {stats.trend === "up" 
                    ? (<ArrowUpRight className='w-4 h-4 text-emerald-500'/>) 
                    : (<ArrowDownRight className='w-4 h-4 text-red-500 dark:text-red-400'/>)
                  }
                  <span className={`text-sm font-semibold ${stats.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                    {stats.change}
                  </span>
                  <span className={`text-sm ${DarkMode ? "text-slate-400" : "text-slate-500"}`}>
                    vs Last Month
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-300 ${DarkMode ? stats.bgcolor_dark : stats.bgcolor_white}`}>
                <stats.icon className={`w-6 h-6 ${DarkMode ? stats.textColor_dark : stats.textColor_white}`} />
              </div>
            </div>

            {/* Progress bar */}
            <div className={`mt-4 h-2  ${DarkMode ? "bg-slate-800" : "bg-slate-100"} rounded-full overflow-hidden`}>
              <div 
                className={`h-full bg-gradient-to-r rounded-full transition-all duration-100 ${stats.color}`} 
                style={{width: stats.trend === "up" ? "75%" : "45%"}}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StartGrid
