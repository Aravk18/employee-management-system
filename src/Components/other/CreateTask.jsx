import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: white card, modern form layout, styled inputs, styled button
// Unchanged: ALL state, ALL handlers, AuthContext, submitHandler logic
// ─────────────────────────────────────────────────────────────────────────────

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    const inputCls = 'w-full text-sm py-2.5 px-3.5 rounded-xl outline-none bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200'
    const labelCls = 'block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5'

    return (
        <div className='bg-white rounded-2xl shadow-md border border-slate-100 p-6 transition-all duration-300 hover:shadow-xl'>

            {/* Section header */}
            <div className='flex items-center gap-3 mb-5'>
                <div className='w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center'>
                    <svg className='w-4 h-4 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M12 4v16m8-8H4' />
                    </svg>
                </div>
                <h3 className='text-base font-bold text-slate-800'>Create New Task</h3>
            </div>

            <form
                onSubmit={(e) => { submitHandler(e) }}
                className='flex flex-wrap w-full items-start justify-between gap-y-0'
            >
                {/* Left column */}
                <div className='w-full md:w-1/2 pr-0 md:pr-5 flex flex-col gap-3'>
                    <div>
                        <label className={labelCls}>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => { setTaskTitle(e.target.value) }}
                            className={inputCls}
                            type="text"
                            placeholder='e.g. Make a UI design'
                        />
                    </div>
                    <div>
                        <label className={labelCls}>Date</label>
                        <input
                            value={taskDate}
                            onChange={(e) => { setTaskDate(e.target.value) }}
                            className={inputCls}
                            type="date"
                        />
                    </div>
                    <div>
                        <label className={labelCls}>Assign to</label>
                        <input
                            value={asignTo}
                            onChange={(e) => { setAsignTo(e.target.value) }}
                            className={inputCls}
                            type="text"
                            placeholder='Employee first name'
                        />
                    </div>
                    <div>
                        <label className={labelCls}>Category</label>
                        <input
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                            className={inputCls}
                            type="text"
                            placeholder='design, dev, etc'
                        />
                    </div>
                </div>

                {/* Right column */}
                <div className='w-full md:w-[45%] flex flex-col mt-4 md:mt-0'>
                    <label className={labelCls}>Description</label>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => { setTaskDescription(e.target.value) }}
                        className={`${inputCls} h-44 resize-none`}
                        name=""
                        id=""
                    />
                    <button
                        className='mt-3 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300 flex items-center justify-center gap-2 w-full'
                    >
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M12 4v16m8-8H4' />
                        </svg>
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask
