import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: sticky top nav bar with glassmorphism, styled logout button
// Unchanged: logOutUser function, all props, commented code kept as-is
// ─────────────────────────────────────────────────────────────────────────────

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){\
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  const displayName = props.data ? props.data.firstName : 'Admin'
  const isAdmin = !props.data

  return (
    <div className='sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm'>

      {/* Left: greeting */}
      <div className='flex items-center gap-3'>
        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-200 flex-shrink-0'>
          {displayName.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className='text-xs text-slate-400 font-medium'>Hello,</p>
          <h1 className='text-sm font-bold text-slate-800 flex items-center gap-1.5'>
            username 👋
            {isAdmin && (
              <span className='text-[10px] font-semibold bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full'>Admin</span>
            )}
          </h1>
        </div>
      </div>

      {/* Right: logout */}
      <button
        onClick={logOutUser}
        className='flex items-center gap-2 bg-red-50 hover:bg-red-100 active:scale-95 text-red-600 text-sm font-semibold px-4 py-2 rounded-xl border border-red-100 transition-all duration-200'
      >
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
        </svg>
        Log Out
      </button>
    </div>
  )
}

export default Header
