export const Login = () => {
  return (
    <section className='bg-slate-900 h-screen flex flex-col justify-center items-center'>
      <div className='flex gap-2 text-white mb-5'>
        <img src='/vscode.svg' alt='Icon of enterprise' className='w-7' />
        <h2 className='text-2xl font-medium'>Enterprise</h2>
      </div>
      <div className='max-w-md w-full p-8 border rounded-md bg-slate-800 text-white border-slate-700'>
        <h2 className='mb-6 text-xl font-semibold'>Sign in to your account</h2>
        <form>
          <div className='flex flex-col gap-y-1.5 mb-4'>
            <label className='text-sm font-medium'>Your email</label>
            <input
              type='text'
              placeholder='name@company.com'
              className='rounded-lg p-2.5 bg-gray-700 border border-slate-600 text-gray-300 sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
            />
          </div>
          <div className='flex flex-col gap-y-1.5 mb-4'>
            <label className='text-sm font-medium'>Password</label>
            <input
              type='password'
              placeholder='password'
              className='rounded-lg p-2.5 bg-gray-700 border border-slate-600 text-gray-300 sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
            />
          </div>
          <div className='flex justify-between mb-4'>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input type='checkbox' className='w-4 h-4 rounded-lg' />
              </div>
              <div className='ml-2 text-sm'>
                <label
                  htmlFor='remember'
                  className='text-gray-500 dark:text-gray-300'
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a
                href='#'
                className='text-sm font-medium text-blue-500 hover:underline '
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button className='w-full py-2 mb-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white'>
            Sign in
          </button>
        </form>
        <p className='text-sm'>
          Don't have an account?{' '}
          <a href='#' className='text-blue-500 hover:underline'>
            Sign up
          </a>
        </p>
      </div>
    </section>
  )
}
