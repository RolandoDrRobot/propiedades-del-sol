import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import property1 from '../assets/images/property/single/1.jpg'
import property2 from '../assets/images/property/single/2.jpg'
import property3 from '../assets/images/property/single/3.jpg'
import property4 from '../assets/images/property/single/4.jpg'
import property5 from '../assets/images/property/single/5.jpg'

import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';

import { propertiesData } from "../data/data";

export default function PropertyDetail(){

    let params = useParams();
    let id = params.id;
    let data = propertiesData.find((property) => property.id === parseInt(id));

    let images = [property1, property2, property3, property4, property5];
    let [isOpen, setIsOpen] = useState(false);

    let [photoIndex, setActiveIndex] = useState(0);

    let handleCLick = (index) => {
        setActiveIndex(index)
        setIsOpen(true);
    }
    return(
        <div className="container-fluid relative px-3">
            <div className="layout-specing">
                <div className="md:flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Starter Page</h5>

                    <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                        <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Link to="index.html">Hously</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">Starter Page</li>
                    </ul>
                </div>

                <div className="md:flex mt-4">
                    <div className="lg:w-1/2 md:w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                            <img src={property1} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                <Link to="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-1/2">
                        <div className="flex">
                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={property2} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={property3} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={property4} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-1/2 p-1">
                                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                                    <img src={property5} alt=""/>
                                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                                        <Link to="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><i className="mdi mdi-camera-outline"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() =>setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setActiveIndex((photoIndex + images.length - 1) % images.length,
                            )
                        }
                        onMoveNextRequest={() =>
                            setActiveIndex((photoIndex + 1) % images.length,
                            )
                        }
                    />
                )}

                <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-6 mt-6">
                    <div className="lg:col-span-8">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow dark:shadow-gray-700">
                            <h4 className="text-2xl font-medium">{data?.name ? data.name :'10765 Hillshire Ave, Baton Rouge, LA 70810, USA'}</h4>

                            <ul className="py-6 flex items-center list-none">
                                <li className="flex items-center lg:me-6 me-4">
                                    <i className="mdi mdi-arrow-expand-all lg:text-3xl text-2xl me-2 text-green-600"></i>
                                    <span className="lg:text-xl">{data?.sqf ? data.sqf : '8000sqf'}</span>
                                </li>

                                <li className="flex items-center lg:me-6 me-4">
                                    <i className="mdi mdi-bed lg:text-3xl text-2xl me-2 text-green-600"></i>
                                    <span className="lg:text-xl">{data?.beds ? data.beds : '4 Beds'}</span>
                                </li>

                                <li className="flex items-center">
                                    <i className="mdi mdi-shower lg:text-3xl text-2xl me-2 text-green-600"></i>
                                    <span className="lg:text-xl">{data?.baths ? data.baths : '4 Baths'}</span>
                                </li>
                            </ul>

                            <p className="text-slate-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <p className="text-slate-400 mt-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                            <p className="text-slate-400 mt-4">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                        
                            <div className="w-full leading-[0] border-0 mt-6">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} title="hously" className="w-full h-[500px]" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700">
                            <div className="p-6">
                                <h5 className="text-2xl font-medium">Price:</h5>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-medium">$ 45,231</span>

                                    <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">For Sale</span>
                                </div>

                                <ul className="list-none mt-4">
                                    <li className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">Days on Hously</span>
                                        <span className="font-medium text-sm">124 Days</span>
                                    </li>

                                    <li className="flex justify-between items-center mt-2">
                                        <span className="text-slate-400 text-sm">Price per sq ft</span>
                                        <span className="font-medium text-sm">$ 186</span>
                                    </li>

                                    <li className="flex justify-between items-center mt-2">
                                        <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                        <span className="font-medium text-sm">$ 1497/Monthly</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex">
                                <div className="p-1 w-1/2">
                                    <Link to="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Book Now</Link>
                                </div>
                                <div className="p-1 w-1/2">
                                    <Link to="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Offer Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                            <div className="mt-6">
                                <Link to="contact.html" className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"><i className="mdi mdi-phone align-middle me-2"></i> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}