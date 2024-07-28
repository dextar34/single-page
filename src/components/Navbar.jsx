import React from 'react'
import Container from './Container'
import Logo from '/images/fashion-hub.jpg'
import Bag from '/images/bag.png'
import Bell from '/images/bell.png'
import People from '/images/people.jpg'
import Pic from './layer/Pic'
import List from './layer/List'

const Navbar = () => {
return (
<div className='nav border-b border-[#EDEDED]  py-5 '>
    <Container>
        <div className="main flex justify-between items-center">
            <div className="left flex gap-x-16 items-center">
                <div className="logo">
                    <Pic href='/' src={Logo} className={' ml-10 md:ml-0 mt-2 md:mt-0'} />
                </div>
                <div className="navMenu text-base font-medium text-[#1D364D] w-full">
                    <ul className='flex gap-x-6 md:gap-x-[50px] '>
                        <List href='/products' item='Products' className={' hover:underline transition-all duration-500'} />
                        <List href='/brand' item='Brand' className={' hover:underline transition-all duration-500'} />
                        <List href='/contact' item='Contact' className={' hover:underline transition-all duration-500'} />
                    </ul>
                </div>
            </div>
            <div className="userInfo hidden md:flex justify-between items-center w-[324px]">
                <div className="pic flex gap-x-4">
                    <div className="cart roundIcon w-[50px] h-[50px] rounded-3xl bg-[#F5F1EE] relative">
                        <span className=' absolute -top-[3px] left-7 translate-x-1/2 w-5 h-5 bg-[#1D364D] rounded-xl flex flex-col items-center justify-center gap-2.5 text-white border-[1.5px] border-white '>3</span>
                        <Pic className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' href='/cart' src={Bag}/>
                    </div>
                    <div className="cart roundIcon w-[50px] h-[50px] rounded-3xl bg-[#EEEFF8] relative">
                        <span className=' absolute top-[1px] left-8 translate-x-1/2 w-2.5 h-2.5 bg-[#D75951] rounded-xl flex flex-col items-center justify-center gap-2.5 text-white border-[1.5px] border-white '></span>
                        <Pic className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' href='/cart' src={Bell}/>
                    </div>
                    
                    <div className="roundIcon w-[50px] h-[50px] rounded-3xl bg-[#F5F1EE] relative">
                        <Pic href='/user' src={People} className='rounded-full'/>
                    </div>
                </div>
                <div className="txt ">
                    <p className=' text-[#C0C3C6] text-[12px] font-medium '>Good Morning!</p>
                    <p className=' text-[#1D364D] text-base font-semibold '>Scarlet Johnson</p>
                </div>
            </div>
        </div>
    </Container>
</div>
)
}

export default Navbar