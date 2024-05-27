import React from 'react';

const GroceryItemCard =React.memo(({ item , assignItemPrice,setItemPrice}) => {
  console.log("Grocery Item Component");
  
  let image = require('./Assets/Groceries.png');
  return (
    <div
      onClick={() => {assignItemPrice(item.name)}}
      className="p-2 w-24 sm:w-24 md:w-30 lg:w-40 xl:w-40 h-auto max-w-xs text-center justify-center overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <div className="h-14 sm:h-14 md:h-18 lg:h-24 xl:h-28 w-full overflow-hidden">
        <img src={item?.image ? item?.image : image} className="w-full h-full object-contain" alt="Item" />
      </div>
      {item?.name && (
        <div className="h-10 sm:h-10 md:h-14 lg:h-14 xl:h-14 text-center font-bold flex justify-center items-center">
          <span className="line-clamp-2 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-appThemeColorVeryDark leading-tight">
            {item?.name}
          </span>
        </div>
      )}
      {item?.sellingPrice && (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between">
          <div className="text-left my-1 sm:mb-0">
            <span className="text-black text-sm sm:text-sm md:text-md lg:text-md xl:text-md font-bold mr-1">₹{item?.sellingPrice}</span>
            <span className="text-black text-xs line-through">₹{item?.mrp}</span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setItemPrice(item.sellingPrice) }}
            className="w-full lg:w-16 bg-appThemeColorVeryDark text-white text-center flex justify-center items-center rounded-sm mt-1 sm:mt-0"
          >
            Click Me
          </button>
        </div>
      )}
    </div>
  );
});

export default GroceryItemCard;
