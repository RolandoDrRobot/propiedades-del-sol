import React from "react";
import { Link } from "react-router-dom";

import { propertiesLand } from "./data";
import { LiaCompressArrowsAltSolid, BiBed, LiaBathSolid } from "../../assets/icons/vander"

export default function Property() {

  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">¿Cuándo es el mejor momento para comprar una inversión? <br />Antes que lleguen al mercado </h3>
          <p className="text-slate-400 max-w-xl mx-auto">Encontramos oportunidades exclusivas y filtradas, solo para inversioninstas</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-2 gap-[30px]">
          {propertiesLand.map((item, index) => (
            <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500" key={index}>
              <div className="relative property-pic">
                <img src={item.image} alt="" />
                {/* 
                  <div className="absolute top-4 end-4">
                      <Link to="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                  </div> 
                */}
              </div>

              <div className="p-6">
                <div className="pb-6">
                  <Link to={`/land-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>
                </div>

                <ul className="border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                  <li className="flex items-center me-4">
                    <LiaCompressArrowsAltSolid className="text-2xl me-2 text-green-600" /><i ></i>
                    <span>{item.square} mts2</span>
                  </li>

                  <li className="flex items-center me-4">
                    <BiBed className="text-2xl me-2 text-green-600" />
                    <span>{item.beds}</span>
                  </li>

                  <li className="flex items-center">
                    <LiaBathSolid className="text-2xl me-2 text-green-600" />
                    <span>{item.baths}</span>
                  </li>
                </ul>

                <ul className="pt-6 flex justify-between items-center list-none">
                  <li>
                    <span className="text-slate-400">Precio</span>
                    <p className="text-lg font-medium">${item.price}</p>
                  </li>

                  <li>
                    <span className="text-slate-400">Valoración</span>
                    <ul className="text-lg font-medium text-amber-400 list-none">
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                      <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
