import React from 'react'
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";




const ProductDetails = ({productName,studioName}) => {
  return (
    <div className="product-details py-7 border-b border-gray-300">
            <div className="details-header flex items-center justify-between w-[582px]">
                <div className="product-name">
                    <h2 className="font-semibold text-2xl">{productName}</h2>
                </div>
                <div className="icons flex items-center  justify-between gap-3">
                    <div className="icontxt text-[#D46F77] bg-[#FFF0F0] rounded-[10px]  flex gap-x-2 py-2 items-center px-2.5">
                        <CiHeart />
                        <p className='text-base font-semibold'>109</p>
                    </div>
                    <div className="bg-[#b4c2f7] rounded-[10px] px-2.5 py-2">  
                    <CiBookmark color='#3A4980' size='25'/>
                    </div>
                    <div className="bg-[#b4c2f7] rounded-[10px] px-2.5 py-2">  
                        <CiShare2 color='#3A4980' size='25' />
                    </div>
                </div>
            </div>
            <h3 className="text-base text-gray-400">{studioName}</h3>
        </div>
  )
}

export default ProductDetails
