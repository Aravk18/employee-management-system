import React from 'react'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: white card with blue accent border, correct status badge, styled buttons
// Unchanged: console.log(), data prop, all data access
// ─────────────────────────────────────────────────────────────────────────────

const AcceptTask = ({data}) => {
    console.log();
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-white rounded-2xl border border-blue-100 shadow-md p-5 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>

        {/* Top row */}
        <div className='flex justify-between items-center'>
            <span className='bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full'>
                {data.category}
            </span>
            <h4 className='text-xs text-slate-400 font-medium'>{data.taskDate}</h4>
        </div>

        {/* Status + content */}
        <div>
            <span className='inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-50 text-blue-500 border border-blue-100 px-2.5 py-1 rounded-full mb-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse' />
                In Progress
            </span>
            <h2 className='text-base font-bold text-slate-800 leading-snug'>{data.taskTitle}</h2>
            <p className='text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2'>
                {data.taskDescription}
            </p>
        </div>

        {/* Actions */}
        <div className='flex justify-between mt-auto gap-2'>
            <button className='flex-1 bg-green-100 hover:bg-green-600 hover:text-white active:scale-95 text-green-700 font-semibold py-2 px-2 text-xs rounded-xl transition-all duration-200'>
                Mark as Completed
            </button>
            <button className='flex-1 bg-red-100 hover:bg-red-600 hover:text-white active:scale-95 text-red-600 font-semibold py-2 px-2 text-xs rounded-xl transition-all duration-200'>
                Mark as Failed
            </button>
        </div>
    </div>
  )
}

export default AcceptTask
