import React, { useState, useRef } from 'react';

const ChooseColor = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const colorRefs = useRef([]);

  const handleClick = (index) => {
    setSelectedIndex(prevIndex => prevIndex == index ? null : index);
  };

  const colorSets = [
    ['#ECDECC', '#ECDECC'],
    ['#BBD278', '#BBD278'],
    ['#BBC1F8', '#BBC1F8'],
    ['#FFD3F8', '#FFD3F8'],
    ['#8A2BE2', '#DEB887']
  ];

  return (
    <div className='color py-7 border-b border-gray-300'>
      <h3 className="text-base pb-3 text-gray-400">
        Choose a Color
      </h3>
      <div className="picColor pt-3 flex gap-x-3 items-center">
        {colorSets.map((colors, index) => (
          <div key={index} className="placeHolder w-16 h-16 ">
            <div 
              className="relative w-[50px] h-[50px] p-1 rounded-full"
              ref={el => colorRefs.current[index] = el}
              onClick={() => handleClick(index)}
              style={{
                background: `linear-gradient(to left, ${colors[0]} 50%, ${colors[1]} 50%)`  ,
                transform: 'rotate(90deg)',
                 
              }}
            >
              <div
                className="outer-div absolute w-[65px] h-[65px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 rounded-full"
                style={{
                  border: selectedIndex == index ? `3px solid ${colors[0]}` : 'none'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseColor;
