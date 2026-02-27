import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/createTask'
import AllTask from '../other/AllTask'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: light background, max-width container, vertical spacing
// Unchanged: all props and component structure
// ─────────────────────────────────────────────────────────────────────────────

const AdminDashboard = (props) => {
    return (
        <div className='min-h-screen w-full bg-slate-50'>
            <Header changeUser={props.changeUser} />
            <div className='max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6'>
                <div>
                    <h2 className='text-xl font-bold text-slate-800'>Admin Dashboard</h2>
                    <p className='text-sm text-slate-500 mt-0.5'>Assign tasks and monitor your team's progress</p>
                </div>
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard
