import React from 'react'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const infoSection = () => {
    const infoItems =[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:'Free Shipping',
            description : 'Get your Orders  delivered with no extra cost '

        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:'Suppoort 24/7',
            description : 'We are here to assist you anytime '

        },
        {
            icon:<FaMoneyBill1Wave className='text-3xl text-red-600'/>,
            title:'100% Money Back ',
            description : 'Full refund if your not satisfied '

        },
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:'Payment Secure',
            description : 'your payment information will save with us '

        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:'Discounts',
            description : 'Enjoy the best prices on our products '

        },


    ]
  return (
    <div>infoSection</div>
  )
}

export default infoSection