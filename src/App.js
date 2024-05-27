import GroceryItemCard from './GroceryItemCard';
import React, { useState } from 'react';

function App() {
  const [GroceryItems,setGroceryItems] = useState([
    {
      "itemId": "1",
      "name": "Kappa 1 KG",
      "description": "Kappa",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/1_kappa_ukolbn.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/1_kappa_ukolbn.jpg"
      ],
      "mrp": 50,
      "sellingPrice": 36,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 36
        },
        {
          "customerType": 1,
          "sellingPrice": 33
        }
      ],
      "discount": null,
      "sortOrder": 1,
      "itemType": null,
      "skuId": "1"
    },
    {
      "itemId": "14",
      "name": "Chemb",
      "description": "Chemb",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Chemb_jo4rj8.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Chemb_jo4rj8.jpg"
      ],
      "mrp": 64,
      "sellingPrice": 64,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 64
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 13,
      "itemType": null,
      "skuId": "14"
    },
    {
      "itemId": "13",
      "name": "Chena",
      "description": "Chena",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679064/Products/Chena_pbdc0v.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679064/Products/Chena_pbdc0v.jpg"
      ],
      "mrp": 59,
      "sellingPrice": 59,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 59
        },
        {
          "customerType": 1,
          "sellingPrice": 56
        }
      ],
      "discount": null,
      "sortOrder": 14,
      "itemType": null,
      "skuId": "13"
    },
    {
      "itemId": "36",
      "name": "Mango",
      "description": "Mango",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712908306/Mango_sspjrn.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712908306/Mango_sspjrn.jpg"
      ],
      "mrp": 130,
      "sellingPrice": 47,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 47
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 20,
      "itemType": null,
      "skuId": "36"
    },
    {
      "itemId": "17",
      "name": "Ginger",
      "description": "Ginger",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Ginger_avdqf3.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Ginger_avdqf3.jpg"
      ],
      "mrp": 135,
      "sellingPrice": 135,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 135
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 21,
      "itemType": null,
      "skuId": "17"
    },
    {
      "itemId": "40",
      "name": "Chakka Pacha",
      "description": "Chakka Pacha",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923681/Products/Chakka-Pacha_1_jpdlio.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923681/Products/Chakka-Pacha_1_jpdlio.jpg"
      ],
      "mrp": 35,
      "sellingPrice": 35,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 35
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 22,
      "itemType": null,
      "skuId": "40"
    },
    {
      "itemId": "7",
      "name": "Nendra Pazham 1 KG",
      "description": "Nendra Pazham 1 KG",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/nendra_pazham_1kg_x8odao.webp",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/nendra_pazham_1kg_x8odao.webp"
      ],
      "mrp": 46,
      "sellingPrice": 46,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 46
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 30,
      "itemType": null,
      "skuId": "7"
    },
    {
      "itemId": "24",
      "name": "Pavakka",
      "description": "Pavakka",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/Pavakka_wso7qy.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/Pavakka_wso7qy.jpg"
      ],
      "mrp": 61,
      "sellingPrice": 61,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 61
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 36,
      "itemType": null,
      "skuId": "24"
    },
    {
      "itemId": "30",
      "name": "Nadan Elavan",
      "description": "Nadan Elavan",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712913462/Nadan_Elavan_tkqf4t.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712913462/Nadan_Elavan_tkqf4t.jpg"
      ],
      "mrp": 50,
      "sellingPrice": 20,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 20
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 47,
      "itemType": null,
      "skuId": "30"
    },
    {
      "itemId": "33",
      "name": "vellari",
      "description": "vellari",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712908389/vellari_wmmw2m.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712908389/vellari_wmmw2m.jpg"
      ],
      "mrp": 75,
      "sellingPrice": 16,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 16
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 50,
      "itemType": null,
      "skuId": "33"
    },
    {
      "itemId": "11",
      "name": "Njali Poovan Pacha",
      "description": "Njali Poovan Pacha",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679064/Products/Njali_Poovan_Pacha_u6yeby.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679064/Products/Njali_Poovan_Pacha_u6yeby.jpg"
      ],
      "mrp": 60,
      "sellingPrice": 41,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 41
        },
        {
          "customerType": 1,
          "sellingPrice": 38
        }
      ],
      "discount": null,
      "sortOrder": 52,
      "itemType": null,
      "skuId": "11"
    },
    {
      "itemId": "32",
      "name": "Mathan",
      "description": "Mathan",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712908873/Mathan_w1osvz.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712908873/Mathan_w1osvz.jpg"
      ],
      "mrp": 35,
      "sellingPrice": 29,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 29
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 53,
      "itemType": null,
      "skuId": "32"
    },
    {
      "itemId": "15",
      "name": "Kachil",
      "description": "Kachil",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679064/Products/Kachil_tdduye.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679064/Products/Kachil_tdduye.jpg"
      ],
      "mrp": 60,
      "sellingPrice": 59,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 59
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 56,
      "itemType": null,
      "skuId": "15"
    },
    {
      "itemId": "37",
      "name": "Fruit Mango M",
      "description": "Fruit Mango M",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712909622/Fruit_Mango_M_kicade.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712909622/Fruit_Mango_M_kicade.jpg"
      ],
      "mrp": 70,
      "sellingPrice": 65,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 65
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 58,
      "itemType": null,
      "skuId": "37"
    },
    {
      "itemId": "3",
      "name": "Nendra Pacha 1 KG",
      "description": "Nendra Pacha 1 KG",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/Nendra_Pacha_1_kg_zzgwuj.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/Nendra_Pacha_1_kg_zzgwuj.jpg"
      ],
      "mrp": 48,
      "sellingPrice": 45,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 45
        },
        {
          "customerType": 1,
          "sellingPrice": 40
        }
      ],
      "discount": null,
      "sortOrder": 61,
      "itemType": null,
      "skuId": "3"
    },
    {
      "itemId": "23",
      "name": "Kandhari",
      "description": "Kandhari",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/Kandhari_prdlml.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679063/Products/Kandhari_prdlml.jpg"
      ],
      "mrp": 450,
      "sellingPrice": 300,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 300
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 69,
      "itemType": null,
      "skuId": "23"
    },
    {
      "itemId": "5",
      "name": "Irukaya Pazham",
      "description": "Irukaya Pazham",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712912141/Irukaya_Pazham_trqhhi.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712912141/Irukaya_Pazham_trqhhi.jpg"
      ],
      "mrp": 46,
      "sellingPrice": 28,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 28
        },
        {
          "customerType": 1,
          "sellingPrice": 25
        }
      ],
      "discount": null,
      "sortOrder": 71,
      "itemType": null,
      "skuId": "5"
    },
    {
      "itemId": "25",
      "name": "Payar",
      "description": "Payar",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Payar_j4hggq.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Payar_j4hggq.jpg"
      ],
      "mrp": 95,
      "sellingPrice": 57,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 57
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 88,
      "itemType": null,
      "skuId": "25"
    },
    {
      "itemId": "12",
      "name": "Chenkathali Pacha",
      "description": "Chenkathali Pacha",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Chenkathali_Pacha_mui6od.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Chenkathali_Pacha_mui6od.jpg"
      ],
      "mrp": 58,
      "sellingPrice": 58,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 58
        },
        {
          "customerType": 1,
          "sellingPrice": 55
        }
      ],
      "discount": null,
      "sortOrder": 133,
      "itemType": null,
      "skuId": "12"
    },
    {
      "itemId": "9",
      "name": "Palayan Kodan Pacha",
      "description": "Palayan Kodan Pacha",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Palayan_Kodan_Pacha_txkxuc.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Palayan_Kodan_Pacha_txkxuc.jpg"
      ],
      "mrp": 38,
      "sellingPrice": 33,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 33
        },
        {
          "customerType": 1,
          "sellingPrice": 30
        }
      ],
      "discount": null,
      "sortOrder": 172,
      "itemType": null,
      "skuId": "9"
    },
    {
      "itemId": "18",
      "name": "Vazha Poov",
      "description": "Vazha Poov",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Vazha_Poov_gd19x0.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Vazha_Poov_gd19x0.jpg"
      ],
      "mrp": 18,
      "sellingPrice": 11,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 11
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 190,
      "itemType": null,
      "skuId": "18"
    },
    {
      "itemId": "38",
      "name": "Fruit Mango P",
      "description": "Fruit Mango P",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923759/Products/Fruit_Mango_p_gh6ps2.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923759/Products/Fruit_Mango_p_gh6ps2.jpg"
      ],
      "mrp": 125,
      "sellingPrice": 125,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 125
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 312,
      "itemType": null,
      "skuId": "38"
    },
    {
      "itemId": "35",
      "name": "Butter Fruit",
      "description": "Butter Fruit",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923592/Products/Butter_Fruit_xwpnys.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923592/Products/Butter_Fruit_xwpnys.jpg"
      ],
      "mrp": 245,
      "sellingPrice": 245,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 245
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 319,
      "itemType": null,
      "skuId": "35"
    },
    {
      "itemId": "31",
      "name": "Sunami Elavan",
      "description": "Sunami Elavan",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923456/Products/Sunami_Elavan_ve7m2k.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923456/Products/Sunami_Elavan_ve7m2k.jpg"
      ],
      "mrp": 45,
      "sellingPrice": 20,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 20
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 327,
      "itemType": null,
      "skuId": "31"
    },
    {
      "itemId": "20",
      "name": "Papaya",
      "description": "Papaya",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Papaya_edokof.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712679062/Products/Papaya_edokof.jpg"
      ],
      "mrp": 29,
      "sellingPrice": 22,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 22
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 411,
      "itemType": null,
      "skuId": "20"
    },
    {
      "itemId": "34",
      "name": "Passion Fruit",
      "description": "Passion Fruit",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923537/Products/Passion_Fruit_pedmzx.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923537/Products/Passion_Fruit_pedmzx.jpg"
      ],
      "mrp": 105,
      "sellingPrice": 105,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 105
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 453,
      "itemType": null,
      "skuId": "34"
    },
    {
      "itemId": "28",
      "name": "Pacha manjal",
      "description": "Pacha manjal",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923341/Products/Pacha_manjal_vxd8n4.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923341/Products/Pacha_manjal_vxd8n4.jpg"
      ],
      "mrp": 48,
      "sellingPrice": 45,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 45
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 573,
      "itemType": null,
      "skuId": "28"
    },
    {
      "itemId": "29",
      "name": "Ginger Mango",
      "description": "Ginger Mango",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923397/Products/Ginger_Mango_ic3mng.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923397/Products/Ginger_Mango_ic3mng.jpg"
      ],
      "mrp": 57,
      "sellingPrice": 55,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 55
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 776,
      "itemType": null,
      "skuId": "29"
    },
    {
      "itemId": "26",
      "name": "Padavalam",
      "description": "Padavalam",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712920063/Padavalam_r8qyjj.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712920063/Padavalam_r8qyjj.jpg"
      ],
      "mrp": 70,
      "sellingPrice": 32,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 32
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 805,
      "itemType": null,
      "skuId": "26"
    },
    {
      "itemId": "27",
      "name": "Vaduka Puli",
      "description": "Vaduka Puli",
      "image": "https://res.cloudinary.com/nrootsdev/image/upload/v1712923213/Products/Vaduka_Puli_buubz1.jpg",
      "images": [
        "https://res.cloudinary.com/nrootsdev/image/upload/v1712923213/Products/Vaduka_Puli_buubz1.jpg"
      ],
      "mrp": 55,
      "sellingPrice": 50,
      "prices": [
        {
          "customerType": 0,
          "sellingPrice": 50
        },
        {
          "customerType": 1,
          "sellingPrice": 0
        }
      ],
      "discount": null,
      "sortOrder": 821,
      "itemType": null,
      "skuId": "27"
    }
  ])

  console.log("App Component")

  const [itemName,setItemName] = useState("Item Name")
  const [itemPrice,setItemPrice] = useState("Item Price")
  const [bgColor,setbgColor] = useState(false)

  const getItemPrice = React.useMemo(()=>{
    console.log("Getting Item Price")
    for(let i=0;i<10000;i++){}
    return itemPrice
  },[itemPrice])
  
  const assignItemPrice = React.useCallback((ItemName)=>{
    console.log("Assigning item name")
    for(let i=0;i<10000;i++){}
    setItemName(ItemName)
  },[])

  return (
    <div className="App px-15p py-2p bg-appThemeColorVeryLight">
      <text className='text-3xl font-bold text-appThemeColorVeryDark '> Grocery App</text>
      <div className="flex justify-center items-center my-1p" onClick={()=>setbgColor(!bgColor)}>
        <div className="w-70p flex p-1 px-5 bg-white m-1 justify-between items-center rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{backgroundColor:bgColor?'#e8f9de':'white'}}>
          <div className="h-10 sm:h-10 md:h-14 lg:h-14 xl:h-14 text-center font-bold flex justify-center items-center">
            <span className="line-clamp-2 text-xs sm:text-xs md:text-sm lg:text-xl xl:text-xl text-appThemeColorVeryDark leading-tight">
              {itemName}
            </span>
          </div>
          <div className="h-10 sm:h-10 md:h-14 lg:h-14 xl:h-14 text-center font-bold flex justify-center items-center">
            <span className="line-clamp-2 text-xs sm:text-xs md:text-sm lg:text-xl xl:text-xl text-appThemeColorVeryDark leading-tight">
            ₹{getItemPrice}
            </span>
          </div>
        </div>
      </div>


      <div className='flex flex-wrap justify-center'>
          {GroceryItems.map((item, index) => (
            <div className='bg-white m-1 rounded-lg cursor-pointer'>
              <GroceryItemCard item={item} assignItemPrice={assignItemPrice} setItemPrice={setItemPrice} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
