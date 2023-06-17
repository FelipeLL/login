import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { loginSchema } from '../schemas/schemas'
import { loginUser } from '../utils/auth.api'
import { useState } from 'react'
import { ErrorAlert } from './ErrorAlert'
import { useAuth } from '../context/AuthContext'

export const Login = () => {
  const [error, setError] = useState(null)
  const { setCurrentUser } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async values => {
      try {
        const user = await loginUser(values)
        setCurrentUser(user)
      } catch (error) {
        setError(error.message)
        setTimeout(() => {
          setError(null)
        }, 3000)
      }
    }
  })

  return (
    <section className='bg-slate-900 h-screen flex flex-col justify-center items-center'>
      <div className='flex gap-2 text-white mb-5'>
        <img src='/vscode.svg' alt='Icon of enterprise' className='w-7' />
        <h2 className='text-2xl font-medium'>Enterprise</h2>
      </div>
      <div className='max-w-md w-full p-8 border rounded-md bg-slate-800 text-white border-slate-700'>
        {error && <ErrorAlert error={error} />}
        <h2 className='mb-6 text-xl font-semibold'>Sign in to your account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-y-1.5 mb-4'>
            <label className='text-sm font-medium'>Your email</label>
            <input
              type='text'
              placeholder='name@company.com'
              className='rounded-lg p-2.5 bg-gray-700 border border-slate-600 text-gray-300 sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              name='email'
            />
            {formik.touched.email && formik.errors.email && (
              <p className='text-xs text-red-500'>{formik.errors.email}</p>
            )}
          </div>
          <div className='flex flex-col gap-y-1.5 mb-4'>
            <label className='text-sm font-medium'>Password</label>
            <input
              type='password'
              placeholder='password'
              className='rounded-lg p-2.5 bg-gray-700 border border-slate-600 text-gray-300 sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name='password'
            />
            {formik.touched.password && formik.errors.password && (
              <p className='text-xs text-red-500'>{formik.errors.password}</p>
            )}
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
          <button
            type='submit'
            className='w-full py-2 mb-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white'
          >
            Sign in
          </button>
        </form>
        <p className='text-sm'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-500 hover:underline'>
            Sign up
          </Link>
        </p>
      </div>
    </section>
  )
}
