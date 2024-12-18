import React from 'react'
import  men from '../assets/man.jpeg'
import women from '../assets/women.jpeg'
import kids from '../assets/kid.jpeg'

const CategorySection = () => {
    const categories = [
        {
            title:'Man',
            imageUrl:men
        },
        {
            title:'Women',
            imageUrl:women
           
        },
        {
            title:'Kids',
            imageUrl:kids
        }
    ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap 6 cursor pointer'>
        {categories.map((category,index)=>(
            <div key={index} className='relative h-64  tranform transition-transform duration-300 hover:scale-105 '>
                <img src={category.imageUrl} alt="images" className='h-fit w-fit justify-items-center ml-[4rem]' />
                <div className='absolute top-20  left-[5rem] '>
                    <p className='text-xl font-bold'>{category.title}</p>
                    <p className='text-gray-600'>View All</p>
                </div>

                </div>
        ))}
    </div>
  )
}

export default CategorySection