import Link from "next/link"



function Store_page() {
  return (
    <div className='flex flex-col bg-slate-500 m-4 p-20'>
      Store_page
    
    <div className='text-sm'><Link href={'/add'}>Add</Link></div>
    </div>
  )
}

export default Store_page