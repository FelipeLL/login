import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas/schemas'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { registerUser } from '../utils/auth.api'
import { ErrorAlert } from './ErrorAlert'

export const SignUp = () => {
  const [error, setError] = useState(null)
  const { currentUser, setCurrentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate('/dashboard')
    }
  }, [currentUser])

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: signUpSchema,
    onSubmit: async values => {
      try {
        const user = await registerUser(values)
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
        <h2 className='mb-6 text-xl font-semibold'>Sign up for an account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-y-1.5 mb-4'>
            <label className='text-sm font-medium'>Your name</label>
            <input
              type='text'
              placeholder='John Doe'
              className='rounded-lg p-2.5 bg-gray-700 border border-slate-600 text-gray-300 sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
              name='username'
            />
            {formik.touched.username && formik.errors.username && (
              <p className='text-xs text-red-500'>{formik.errors.username}</p>
            )}
          </div>
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
              <p className='text-xs text-red-500'> {formik.errors.email}</p>
            )}
          </div>
          <div className='flex flex-col gap-y-1.5 mb-4'>
            <label className='text-sm font-medium'>Password</label>
            <input
              type='password'
              placeholder='password'
              className='mb-3 rounded-lg p-2.5 bg-gray-700 border border-slate-600 text-gray-300 sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              name='password'
            />
            {formik.touched.password && formik.errors.password && (
              <p className='text-xs text-red-500'>{formik.errors.password}</p>
            )}
          </div>

          <button
            type='submit'
            className='w-full py-2 mb-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white'
          >
            Sign up
          </button>
        </form>
        <p className='text-sm'>
          Do you already have an account?{' '}
          <Link to='/' className='text-blue-500 hover:underline'>
            Sign in
          </Link>
        </p>
      </div>
    </section>
  )
}
