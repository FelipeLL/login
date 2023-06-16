export const ErrorAlert = ({ error }) => {
  return (
    <div
      className='bg-slate-50 border border-slate-500 text-red-500 px-3 py-2 mb-4 rounded-md relative'
      role='alert'
    >
      <span className='block sm:inline'>{error}</span>
    </div>
  )
}
