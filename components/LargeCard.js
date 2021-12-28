import Image from 'next/image'

function LargeCard({ title, description}) {
    return (
        <section className='relative cursor-pointer py-10 items-center justify-center flex'>
           <div className='bg-gray-300 top-32 rounded-lg absolute'>
               <h3 className='text-3xl mb-4 w-40 flex'>{title}</h3>
               <p className='text-pink-500 font-serif'>{description}</p>
           </div>
        </section>
    )
}

export default LargeCard
