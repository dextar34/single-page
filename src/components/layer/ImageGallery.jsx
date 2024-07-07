import React, { useState } from 'react'

const ImageGallery= ({ images }) => {
    const [activeImg, setActiveImg] = useState (images[0]);

    return (
        <div className="left pb-36">
            <div className="bigPic w-[587px] h-[691px] border-[#EDF0F8] rounded-2xl">
                <img src={activeImg} alt="Active" className="w-full h-full object-cover rounded-2xl border-[#EDF0F8]" />
            </div>  
            <div className="smallPic flex gap-x-5 pt-8 w-[115px] h-[115px] object-contain">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => setActiveImg(img)}
                        className={
                            activeImg == img
                                ? 'border-[3px] border-[#3A4980] rounded-2xl'
                                : 'rounded-2xl border-[3px] border-transparent'
                        }
                        alt={`Thumbnail ${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery
