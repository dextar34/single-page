import React from 'react'
import Container from './Container'
import Pic from './layer/Pic'
import Hero from '../../public/images/main-product-pic.jpg'

const ProductMenu = () => {
  return (
    <div className='pt-10'>
      <Container>
      <div className="main">
          <div className="left">
            <div className="bigPic w-[587px] h-[691px] border-[#EDF0F8] rounded-2xl">
                <Pic src={Hero}/>
            </div>
          </div>
          <div className="right"></div>
            
        </div>
      </Container>
    </div>
  )
}

export default ProductMenu
