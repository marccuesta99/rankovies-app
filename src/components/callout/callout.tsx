export default function Callout ({ children }: {children:string}) {
  return (
    <div className='flex justify-center p-2 w-100 bg-gray-100/40 '>
      <p className='text-yellow-600'>{children}</p>
    </div>
  )
}
