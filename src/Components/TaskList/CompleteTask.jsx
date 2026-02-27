import React from 'react'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: white card with green accent, proper Completed badge, styled button
// Unchanged: data prop, all data access
// ─────────────────────────────────────────────────────────────────────────────

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-white rounded-2xl border border-green-100 shadow-md p-5 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>

        {/* Top row */}
        <div className='flex justify-between items-center'>
            <span className='bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full'>
                {data.category}
            </span>
            <h4 className='text-xs text-slate-400 font-medium'>{data.taskDate}</h4>
        </div>

        {/* Status + content */}
        <div>
            <span className='inline-flex items-center gap-1.5 text-xs font-semibold bg-green-50 text-green-600 border border-green-100 px-2.5 py-1 rounded-full mb-2'>
                <svg className='w-3 h-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
                </svg>
                Completed
            </span>
            <h2 className='text-base font-bold text-slate-800 leading-snug'>{data.taskTitle}</h2>
            <p className='text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2'>
                {data.taskDescription}
            </p>
        </div>

        <div className='mt-auto'>
            <button className='w-full bg-green-100 text-green-700 font-semibold text-xs py-2.5 rounded-xl cursor-default flex items-center justify-center gap-1.5'>
                <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
                </svg>
                Complete
            </button>
        </div>
    </div>
  )
}

export default CompleteTask
