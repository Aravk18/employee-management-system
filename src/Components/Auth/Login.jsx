import React, { useState } from 'react'

// ─── UI only ─────────────────────────────────────────────────────────────────
// Changed: full split-screen layout, glassmorphism card, styled inputs & button
// Unchanged: all state, submitHandler, handleLogin prop
// ─────────────────────────────────────────────────────────────────────────────

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='min-h-screen w-screen flex bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900'>

      {/* ── Left decorative panel ── */}
      <div className='hidden lg:flex lg:w-1/2 flex-col items-center justify-center px-16 relative overflow-hidden'>
        {/* Background orbs */}
        <div className='absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] top-[-100px] left-[-100px]' />
        <div className='absolute w-[400px] h-[400px] rounded-full bg-violet-600/15 blur-[100px] bottom-[-80px] right-[-80px]' />

        <div className='relative z-10 text-center'>
          {/* Logo mark */}
          <div className='flex items-center justify-center gap-3 mb-10'>
            <div className='w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/40'>
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </div>
            <span className='text-2xl font-bold text-white tracking-tight'>WorkForce</span>
          </div>

          <h1 className='text-4xl font-bold text-white leading-tight mb-4'>
            Manage your team<br />
            <span className='text-indigo-400'>effortlessly.</span>
          </h1>
          <p className='text-slate-400 text-base leading-relaxed max-w-xs mx-auto'>
            Assign tasks, track progress, and keep your entire team aligned — all in one place.
          </p>

          {/* Feature pills */}
          <div className='flex flex-wrap gap-2 justify-center mt-8'>
            {['Task Assignment', 'Progress Tracking', 'Team Overview', 'Real-time Updates'].map(f => (
              <span key={f} className='px-3 py-1.5 rounded-full bg-white/10 text-slate-300 text-xs font-medium border border-white/10'>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right login panel ── */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-6'>
        <div className='w-full max-w-md'>

          {/* Card */}
          <div className='bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl'>

            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-white mb-1'>Welcome back</h2>
              <p className='text-slate-400 text-sm'>Sign in to your account to continue</p>
            </div>

            <form
              onSubmit={(e)=>{ submitHandler(e) }}
              className='flex flex-col gap-4'
            >
              {/* Email */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>Email</label>
                <input
                  value={email}
                  onChange={(e)=>{ setEmail(e.target.value) }}
                  required
                  type="email"
                  placeholder='admin@me.com'
                  className='w-full bg-white/[0.07] border border-white/10 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200'
                />
              </div>

              {/* Password */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>Password</label>
                <input
                  value={password}
                  onChange={(e)=>{ setPassword(e.target.value) }}
                  required
                  type="password"
                  placeholder='••••••••'
                  className='w-full bg-white/[0.07] border border-white/10 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200'
                />
              </div>

              {/* Hint */}
              <div className='bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-3 text-xs text-indigo-300'>
                <span className='font-semibold'>Demo:</span> admin@me.com / 123 &nbsp;·&nbsp; e@e.com / 123
              </div>

              <button
                type='submit'
                className='mt-1 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40'
              >
                Sign in →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
