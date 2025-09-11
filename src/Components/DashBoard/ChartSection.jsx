import React from 'react'
import RevenueChart from './RevenueChart'
import SalesChart from './SalesChart'

const ChartSection = ({DarkMode}) => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
            <RevenueChart DarkMode={DarkMode} />
        </div>
        <div className='space-y-6'>
            <SalesChart DarkMode={DarkMode}/> 
        </div>
    </div>
  )
}

export default ChartSection