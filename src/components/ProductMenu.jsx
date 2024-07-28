import React, { useState } from 'react'
import Container from './Container'
import ProductDetails from './layer/ProductDetails'
import ImageGallery from './layer/ImageGallery'
import ChooseColor from './layer/ChooseColor'


const ProductMenu = () => {

const images = [
    "/images/img5.jpg",
    "/images/img7.jpg",
    "/images/img6.jpg",
    "/images/img8.jpg",
]
    
    


return (
<div className='pt-10'>
    <Container>
        <div className="main flex  justify-between">
            <ImageGallery images={images} />
            <div className="right">
                <p className='text-2xl'>BreadCrumb</p>
                <ProductDetails productName='Embrace Sideboard' studioName='Teixeira Design Studio'/>
                <ChooseColor/>

            </div>

        </div>
    </Container>
</div>
)
}

export default ProductMenu