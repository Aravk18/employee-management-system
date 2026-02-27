import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: white card, modern table layout, status badges with proper colors
// Unchanged: AuthContext, userData.map logic, all data access
// ─────────────────────────────────────────────────────────────────────────────

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

  return (
    <div className='bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl'>

      {/* Card header */}
      <div className='flex items-center gap-3 px-6 py-4 border-b border-slate-100'>
        <div className='w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center'>
          <svg className='w-4 h-4 text-violet-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
          </svg>
        </div>
        <h3 className='text-base font-bold text-slate-800'>Team Task Overview</h3>
        <span className='ml-auto text-xs text-slate-400 font-medium bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100'>
          {userData.length} employees
        </span>
      </div>

      {/* Table header */}
      <div className='bg-slate-50 border-b border-slate-100 grid grid-cols-5 gap-4 px-6 py-3'>
        <h2 className='text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5'>Employee Name</h2>
        <h3 className='text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5'>New Task</h3>
        <h5 className='text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5'>Active Task</h5>
        <h5 className='text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5'>Completed</h5>
        <h5 className='text-xs font-semibold text-slate-500 uppercase tracking-wide w-1/5'>Failed</h5>
      </div>

      {/* Rows */}
      <div className='divide-y divide-slate-50'>
        {userData.map(function(elem,idx){
            return (
              <div key={idx} className='grid grid-cols-5 gap-4 px-6 py-3.5 items-center hover:bg-slate-50/60 transition-colors duration-150'>
                {/* Name */}
                <div className='flex items-center gap-2.5 w-1/5'>
                  <div className='w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0'>
                    {elem.firstName.charAt(0)}
                  </div>
                  <h2 className='text-sm font-semibold text-slate-700'>{elem.firstName}</h2>
                </div>
                {/* New */}
                <h3 className='w-1/5'>
                  <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-lg text-xs font-bold bg-orange-100 text-orange-600'>
                    {elem.taskCounts.newTask}
                  </span>
                </h3>
                {/* Active */}
                <h5 className='w-1/5'>
                  <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-lg text-xs font-bold bg-blue-100 text-blue-600'>
                    {elem.taskCounts.active}
                  </span>
                </h5>
                {/* Completed */}
                <h5 className='w-1/5'>
                  <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-lg text-xs font-bold bg-green-100 text-green-600'>
                    {elem.taskCounts.completed}
                  </span>
                </h5>
                {/* Failed */}
                <h5 className='w-1/5'>
                  <span className='inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-lg text-xs font-bold bg-red-100 text-red-600'>
                    {elem.taskCounts.failed}
                  </span>
                </h5>
              </div>
            )
        })}
      </div>

    </div>
  )
}

export default AllTask
