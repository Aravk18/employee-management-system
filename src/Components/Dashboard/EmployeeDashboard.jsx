import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: light background, welcome banner, max-width container, vertical spacing
// Unchanged: all props, data flow
// ─────────────────────────────────────────────────────────────────────────────

const EmployeeDashboard = (props) => {

  return (
    <div className='min-h-screen w-full bg-slate-50'>
      <Header changeUser={props.changeUser} data={props.data}/>

      <div className='max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6'>

        {/* Welcome Banner */}
        <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-7 text-white shadow-lg shadow-indigo-200'>
          <div className='absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full bg-white/10 blur-3xl' />
          <div className='absolute bottom-[-40px] left-[40%] w-48 h-48 rounded-full bg-violet-400/20 blur-2xl' />
          <div className='relative z-10'>
            <p className='text-indigo-200 text-sm font-medium mb-1'>Employee Portal</p>
            <h2 className='text-2xl font-bold'>Good day, {props.data?.firstName}! 👋</h2>
            <p className='text-indigo-200 text-sm mt-1.5'>
              You have <span className='text-white font-bold'>{props.data?.taskCounts?.active ?? 0}</span> active task{props.data?.taskCounts?.active !== 1 ? 's' : ''} in progress.
            </p>
          </div>
        </div>

        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
