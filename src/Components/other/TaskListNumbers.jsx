import React from 'react'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: grid layout, gradient cards with icons, responsive
// Unchanged: data prop, taskCounts access
// ─────────────────────────────────────────────────────────────────────────────

const TaskListNumbers = ({data}) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

      {/* New Task */}
      <div className='rounded-2xl p-5 bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md shadow-orange-200 hover:shadow-xl hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5'>
        <div className='flex items-start justify-between mb-3'>
          <div className='w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
            </svg>
          </div>
          <span className='text-3xl font-bold'>{data.taskCounts.newTask}</span>
        </div>
        <h3 className='text-sm font-semibold text-white/90'>New Task</h3>
      </div>

      {/* Completed Task */}
      <div className='rounded-2xl p-5 bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-md shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5'>
        <div className='flex items-start justify-between mb-3'>
          <div className='w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <span className='text-3xl font-bold'>{data.taskCounts.completed}</span>
        </div>
        <h3 className='text-sm font-semibold text-white/90'>Completed Task</h3>
      </div>

      {/* Accepted Task */}
      <div className='rounded-2xl p-5 bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-md shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5'>
        <div className='flex items-start justify-between mb-3'>
          <div className='w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
            </svg>
          </div>
          <span className='text-3xl font-bold text-black'>{data.taskCounts.active}</span>
        </div>
        <h3 className='text-sm font-semibold text-black/80'>Accepted Task</h3>
      </div>

      {/* Failed Task */}
      <div className='rounded-2xl p-5 bg-gradient-to-br from-red-400 to-rose-500 text-white shadow-md shadow-red-200 hover:shadow-xl hover:shadow-red-200 transition-all duration-300 hover:-translate-y-0.5'>
        <div className='flex items-start justify-between mb-3'>
          <div className='w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>
          <span className='text-3xl font-bold'>{data.taskCounts.failed}</span>
        </div>
        <h3 className='text-sm font-semibold text-white/90'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
