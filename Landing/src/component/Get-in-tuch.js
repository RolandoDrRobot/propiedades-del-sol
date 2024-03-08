import React from 'react'
import { Link } from "react-router-dom";
import { FiPhone } from "../assets/icons/vander"
import {BsTelephone,MdMailOutline,FiMapPin, FiHexagon} from "../assets/icons/vander"

export default function GetInTuch() {
  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 text-center">
        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <BsTelephone className="text-3xl" />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Phone</h5>
                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                <div className="mt-5">
                  <Link to="tel:+152534-468-854" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">+152 534-468-854</Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <MdMailOutline className="text-3xl" />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Email</h5>
                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

                <div className="mt-5">
                  <Link to="mailto:contact@example.com" className="btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">contact@example.com</Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                  <FiMapPin className="text-3xl" />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-xl font-medium">Location</h5>
                <p className="text-slate-400 mt-3">Barreal, Torres de Heredia <br /> Apart. A701, <br /> Heredia, Costa Rica 506</p>

                {/* <div className="mt-5">
                  <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    data-type="iframe" className="video-play-icon read-more lightbox btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500">View on Google map</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-6">
                    <Link to="/contact" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"><FiPhone  className="align-middle me-2"/> Contact us</Link>
                </div> */}
      </div>
    </div>
  )
}
