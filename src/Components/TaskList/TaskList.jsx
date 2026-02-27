import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: section title, container padding, styled empty state
// Unchanged: ALL mapping logic, ALL conditional rendering, ALL key props
// ─────────────────────────────────────────────────────────────────────────────

const TaskList = ({ data }) => {
    return (
        <div className='bg-white rounded-2xl shadow-md border border-slate-100 p-5 transition-all duration-300 hover:shadow-xl'>

            {/* Section header */}
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2.5'>
                    <div className='w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center'>
                        <svg className='w-3.5 h-3.5 text-slate-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                        </svg>
                    </div>
                    <h3 className='text-sm font-bold text-slate-700'>My Tasks</h3>
                </div>
                <span className='text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100'>
                    {data.tasks.length} total
                </span>
            </div>

            <div id='tasklist' className='h-[50%] overflow-x-auto flex items-stretch justify-start gap-4 flex-nowrap w-full py-1 mt-2 pb-2'>
                {data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />
                    }
                })}

                {data.tasks.length === 0 && (
                    <div className='flex-1 flex flex-col items-center justify-center py-12 text-center text-slate-400'>
                        <div className='w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-3'>
                            <svg className='w-6 h-6 text-slate-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                            </svg>
                        </div>
                        <p className='text-sm font-medium'>No tasks yet</p>
                        <p className='text-xs mt-0.5 text-slate-300'>Tasks assigned to you will appear here</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TaskList
