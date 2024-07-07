import React, { useState } from 'react'
import Container from './Container'
import Pic from './layer/Pic'
import ProductDetails from './layer/ProductDetails'

const ProductMenu = () => {
const [images,setImages] = useState({
img1:"../../public/images/img-1.jpg",
img2:"../../public/images/img-2.jpg",
img3:"../../public/images/img-3.jpg",
img4:"../../public/images/img-4.jpg",
})

const [activeImg, setActiveImg] = useState(images.img1)

return (
<div className='pt-10'>
    <Container>
        <div className="main flex  justify-between">
            <div className="left">
                <div className="bigPic w-[587px] h-[691px] border-[#EDF0F8] rounded-2xl">
                    <Pic src={activeImg} className="w-full h-full object-cover rounded-2xl border-[#EDF0F8] " />
                </div>
                <div className="smallPic flex gap-x-5 ">
                    <Pic src={images.img1} onClick={()=> setActiveImg(images.img1)} className={activeImg == images.img1
                        ? 'border-[3px] border-[#3A4980] rounded-2xl ' : 'rounded-2xl border-[3px] border-transparent'} />
                        <Pic src={images.img2} onClick={()=> setActiveImg(images.img2)} className={activeImg ==
                            images.img2 ? 'border-[3px] border-[#3A4980] rounded-2xl ' : 'rounded-2xl border-[3px] border-transparent '} />
                            <Pic src={images.img3} onClick={()=> setActiveImg(images.img3)}
                                className={activeImg == images.img3 ? 'border-[3px] border-[#3A4980] rounded-2xl ' :
                                'rounded-2xl border-[3px] border-transparent'} />
                                <Pic src={images.img4} onClick={()=> setActiveImg(images.img4)}
                                    className={activeImg == images.img4 ? 'border-[3px] border-[#3A4980] rounded-2xl ' :
                                    'rounded-2xl border-[3px] border-transparent'} />
                </div>
            </div>
            <div className="right">
                <p className='text-2xl'>BreadCrumb</p>
                <ProductDetails productName='Embrace Sideboard' studioName='Teixeira Design Studio' />

            </div>

        </div>
    </Container>
</div>
)
}

export default ProductMenu