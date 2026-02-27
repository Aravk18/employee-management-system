import React from 'react'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: white card, orange status badge, styled button
// Unchanged: data prop, all data access
// ─────────────────────────────────────────────────────────────────────────────

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] bg-white rounded-2xl border border-slate-100 shadow-md p-5 flex flex-col gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>

            {/* Top row */}
            <div className='flex justify-between items-center'>
                <span className='bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full'>
                    {data.category}
                </span>
                <h4 className='text-xs text-slate-400 font-medium'>{data.taskDate}</h4>
            </div>

            {/* Status badge */}
            <div>
                <span className='inline-flex items-center gap-1.5 text-xs font-semibold bg-orange-50 text-orange-500 border border-orange-100 px-2.5 py-1 rounded-full mb-2'>
                    <span className='w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse' />
                    New
                </span>
                <h2 className='text-base font-bold text-slate-800 leading-snug'>{data.taskTitle}</h2>
                <p className='text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2'>
                    {data.taskDescription}
                </p>
            </div>

            {/* Action */}
            <div className='mt-auto'>
                <button className='w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold text-xs py-2.5 rounded-xl transition-all duration-200 shadow-sm shadow-indigo-200'>
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask
