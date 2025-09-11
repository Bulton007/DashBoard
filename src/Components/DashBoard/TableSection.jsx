import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const recentOrder = [
    {
        id : "#3847", 
        customer : "John Smith", 
        product : "MacBook Pro 16", 
        amount : "$2,399", 
        status : "completed", 
        date : "2024-01-05"
    },
    {
        id : "#3848", 
        customer : "Sarah Johnson", 
        product : "iPhone 17 Pro Max", 
        amount : "$1,999", 
        status : "pending", 
        date : "2024-01-05"
    }, 
    {
        id : "#3849", 
        customer : "John Wick", 
        product : "AirPods Pro", 
        amount : "$249", 
        status : "completed", 
        date : "2024-01-05"
    }, 
    {
        id : "#3850", 
        customer : "The Rock", 
        product : "iPad Pro", 
        amount : "$1,249", 
        status : "cancelled", 
        date : "2024-01-05"
    }
] 

const topProducts = [
    {
        name : "MacBook Pro 16", 
        sales : 1247, 
        revenue : "$2,987,530", 
        trend : "up", 
        change : "+12%"
    }, 
    {
        name : "iPhone 17 Pro Max", 
        sales : 2156, 
        revenue : "$2,587,044", 
        trend : "up", 
        change : "+8%"
    }, 
    {
        name : "AirPods Pro", 
        sales : 3421, 
        revenue : "$852,530", 
        trend : "down", 
        change : "-3%"
    }, 
    {
        name : "iPad Pro", 
        sales : 987, 
        revenue : "$591,210", 
        trend : "up", 
        change : "+15%"
    }
]

const TableSection = ({DarkMode}) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "completed" : 
            return DarkMode ? "bg-emerald-900/30 text-emerald-400" : "bg-emerald-100 text-emerald-700"; 
            case "pending" : 
            return DarkMode ? "bg-yellow-900/30 text-yellow-400" : "bg-yellow-100 text-yellow-700";
            case "cancelled" : 
            return DarkMode ? "bg-red-900/30 text-red-400" : "bg-red-100 text-red-700"; 
            default : 
            return DarkMode ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-700";
        }
    }
  return (
    <div className='space-y-6'>
        <div className={` ${DarkMode ? "bg-slate-900/80 border-slate-700/50 " : "bg-white/80 border-slate-200/50 "} border backdrop-blur-xl rounded-b-2xl overflow-hidden`}>
            <div className={`p-6 border-b ${DarkMode ? "border-slate-700/50" : "border-slate-200/50 "}`}>
                <div className={`flex items-center justify-between`}>
                    <div>
                        <h3 className={`text-lg font-bold ${DarkMode ? "text-white" : "text-slate-800"}`}>
                            Recent Orders
                        </h3>
                        <p className={`text-sm ${DarkMode ? "text-slate-400" : "text-slate-800"}`}>
                            Latest Customer Orders
                        </p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                        View All
                    </button>
                </div>
            </div>
            {/* Table */}
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                Order ID
                            </th>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                Customers
                            </th>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                Product
                            </th>
                            <th className='text-left p-4 text-sm font-semibold text-slate-600'>
                                Amount
                            </th>
                            <th className='text-left p-7 text-sm font-semibold text-slate-600'>
                                Status
                            </th>
                            <th className='text-left p-7 text-sm font-semibold text-slate-600'>
                                Date
                            </th>
                        </tr>
                    </thead>    
                        <tbody>
                        {recentOrder.map((order, index) => {
                            return(
                                <tr className={`border-b ${DarkMode ? "border-slate-700/50 hover:bg-slate-800/50" : "border-slate-200/50 hover:bg-slate-50/50"} transition-colors`}>
                            <td className='p-4'> 
                                <span className={`text-sm ${DarkMode ? "text-white" : "text-slate-800"}`}   >
                                    {order.id}
                                </span>
                            </td>
                            <td className='p-4'>
                                <span className={`text-sm ${DarkMode ? "text-white" : "text-slate-800"}`}>
                                    {order.customer}
                                </span>
                            </td>
                            <td className='p-4'>
                                <span className={`text-sm ${DarkMode ? "text-white" : "text-slate-800"}`}>
                                    {order.product}
                                </span>
                            </td>
                            <td className='p-4'>
                                <span className={`text-sm ${DarkMode ? "text-white" : "text-slate-800"}`}>
                                    {order.amount}
                                </span>
                            </td>
                            <td className='p-4'>
                                <span className={`text-xs font-medium px-3 py-1 rounded-full ${DarkMode ? "text-white" : "text-slate-800"}`}>
                                    {order.status}
                                </span>
                            </td>
                            <td className='p-4'>
                                <span className={`text-xs font-medium px-3 py-1 rounded-full ${DarkMode ? "text-white" : "text-slate-800"} ${getStatusColor(order.status)}`}>
                                    {order.date}
                                </span>
                            </td>
                            <td className='p-4'>
                                <span className={`text-sm ${DarkMode ? "text-white" : "text-slate-800"}`}>
                                    <MoreHorizontal className='w-4 h-4'/>
                                </span>
                            </td>
                        </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Top Products */}
        <div className={`${DarkMode ? "bg-slate-900/80 border-slate-700/50" : "bg-white/80 border-slate-200/50"} backdrop-blur-xl rounded-2xl border overflow-hidden`}>
            <div className={`p-6 border-b ${DarkMode ? "border-slate-700/50" : "border-slate-200/50"}`}>
                <div className='flex items-center justify-between'>
                    <div className={`text-lg ${DarkMode ?  " text-white" : "text-slate-800"} font-bold`}>
                        <h3 className={`text-lg font-bold ${DarkMode ? "text-white" : "text-slate-800"}`}>
                            Top Product
                        </h3>
                    </div>
                    <p className={`text-sm ${DarkMode ? "text-slate-400" : "text-slate-500"}`}>
                        Best Performing Products
                    </p>
                </div>
                <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                        View All
                </button>
            </div>
            {/* Dynamic Data */}
            <div className='p-6 space-y-4'>
                {topProducts.map((product, index) => {
                    return(
                        <div className={`flex items-center justify-between p-4 rounded-xl transition-colors ${DarkMode? "hover:bg-slate-800/50" : "hover:bg-slate-50"}`}>
                    <div className={`flex-1`}>
                        <h4 className={`text-sm font-semibold ${DarkMode ? "text-white" : "text-slate-800"}`}>
                            {product.name}
                        </h4>
                        <p className={`text-xs ${DarkMode ? "text-slate-400" : "text-slate-500"}`}>
                            {product.sales}
                        </p>
                    </div>
                    <div className='text-right'>
                        <p className={`text-sm font-semibold ${DarkMode ? "text-white" : "text-slate-800"}`}>
                            {product.revenue}
                        </p>
                        <div className='flex items-center space-x-1'>
                            {product.trend === "up" ? (<TrendingUp className='w-3 h-3 text-emerald-500'/>) : (<TrendingDown className='w-3 h-3 text-red-500'/>)}
                            <span className={`text-xs font-medium ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>
                                {product.change}
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

export default TableSection