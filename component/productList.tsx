"use client"

import React from "react"
import Link from "next/link";
import Image from "next/image";

import { Props } from "react-select";

 type Product= {
        id: string | number;
        name?:string;
        description?:string;
        image?:string;
        Image?:string;
    }

    type props ={
        products:Product[];
        user_id:string;
    }

// Add fallback image constant
const FALLBACK_IMAGE = "/images/fallback-image.jpg";

export function ProducList({products =[],user_id}:Props){

    // Dummy products data
    const dummyProducts: Product[] = [
        {
            id: 1,
            name: "Household Refrigerating Appliances Regulations",
            description: "High-quality sound with noise cancellation feature. Perfect for music lovers and professionals.",
            image: "light.webp"
        },
        {
            id: 2,
            name: "Room Air Conditioners Regulations",
            description: "Track your heart rate, steps, and sleep patterns with this advanced fitness tracker.",
            image: "refrigerator.webp"
        },
        {
            id: 3,
            name: "Motors Regulations",
            description: "Freshly roasted organic coffee beans from sustainable farms. Rich flavor and aroma.",
            image: "motor.webp"
        },
        {
            id: 4,
            name: "Fan Regulations",
            description: "High-resolution lens for professional photography. Crystal clear images every time.",
            image: "fan.webp"
        }
    ];

    // Use dummy products if no products are provided
    const displayProducts = products.length > 0 ? products : dummyProducts;

    return (
        <div>
            <div className="w-11/12 mx-auto sm:px-[40px] px-[20px] lg:px-[40px] xl:px-[50px] md:px-[30px] mt-[4px] bg-white rounded-[10px] py-7 shadow-2xl">
                <div className="w-full max-h-[600px] overflow-y-auto wide-scrollbar overflow-x-hidden">
                    {/* start mapping here  */}
                    {displayProducts.length === 0?(
                         <p className="text-center text-gray-500">No products found.</p>
                    ):(
          displayProducts.map((product) => {
            const imageName = product.image?.trim() || "";
            const localImagePath = `/images/${imageName}`;

            return (
              <Link
                // href={getProductLink(product, user_id)}
                href="/protected/stepper/agreement"
                key={product.id}
                className="block hover:scale-105 transition-transform duration-300 my-4"
              >
                <div className="bg-white rounded-md relative flex w-full">
                  <Image
                    alt={product.name || "Product"}
                    className="lg:w-[635.46px] cursor-pointer object-cover xl:w-[720px] h-[149px] rounded-[11px] md:w-[500px] sm:w-[360px] w-[360px] pl-8"
                    src={localImagePath}
                    width={360}
                    height={149}
                    onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
                  />
                  <div className="absolute shadow-md cursor-pointer lg:w-[445px] h-[151px] bg-[#e8e6e6] md:right-[35px] md:w-[400px] sm:w-[335px] w-[250px] right-0 rounded-bl-[16px] rounded-r-[11px] flex flex-col items-center justify-center text-center px-3">
                    <h1 className="font-poppins font-semibold text-[#F76300] text-[12px] md:text-[22px] mb-2">
                      {product.name || "Unnamed Product"}
                    </h1>
                    <p className="text-[10px] md:text-[14px] text-gray-700 leading-[16px] font-poppins font-normal">
                      {product.description || "No description available for this product."}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        )
                    }
                    
                </div>

            </div>
            
        </div>
    )
}