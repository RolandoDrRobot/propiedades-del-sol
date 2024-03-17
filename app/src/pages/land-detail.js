import React, { useState } from "react";
import { Link } from "react-router-dom";

import { propertiesLand } from "../component/Properties/data";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Switcher from "../component/Switcher";
import Footer from "../component/Footer";

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

import { BsTelephone, AiOutlineCamera, LiaCompressArrowsAltSolid, LiaNewspaperSolid, MdOutlineWaterDrop, GoLightBulb, GiRoad, CiLocationOn } from "../assets/icons/vander";

function LandDetail(props) {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const property = propertiesLand.find((user) => user.id === parseInt(props.params.id));

  const Image1 = property?.detail[0];
  const Image2 = property?.detail[1];
  const Image3 = property?.detail[2];
  const Image4 = property?.detail[3];
  const Image5 = property?.detail[4];

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
  ];

  const handleCLick = (index) => {
    setActiveIndex(index)
    setOpen(true);
  }

  function GoogleMapsURLToEmbedURL(GoogleMapsURL) {
    console.log(GoogleMapsURL)
    var coords = /\@([0-9\.\,\-a-zA-Z]*)/.exec(GoogleMapsURL);
    if (coords != null) {
      var coordsArray = coords[1].split(',');
      return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d" + coordsArray[1] + "!3d" + coordsArray[0] + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098";
    }
  }

  return (
    <>
      <Navbar />
      {/* <!-- Hero Start --> */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
          <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group details relative overflow-hidden">
                <img src={Image1} alt="" />
                <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                  <Link to="#" onClick={() => handleCLick(0)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group details sub relative overflow-hidden">
                    <img src={Image2} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(1)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group details sub relative overflow-hidden">
                    <img src={Image3} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(2)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/2 p-1">
                  <div className="group details sub relative overflow-hidden">
                    <img src={Image4} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(3)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-1">
                  <div className="group details sub relative overflow-hidden">
                    <img src={Image5} alt="" />
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                      <Link to="#" onClick={() => handleCLick(4)} className="btn btn-icon bg-green-600 hover:bg-green-700 text-white rounded-full lightbox"><AiOutlineCamera className="text-lg" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:mt-24 mt-10">
          <div className="md:flex">
            <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
              <h4 className="text-2xl font-medium">{property?.name}</h4>

              <ul className="py-6 flex items-center list-none  flex-wrap">
                <li className="flex items-center lg:me-6 me-4 mb-4">
                  <LiaCompressArrowsAltSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.square} mts2</span>
                </li>

                <li className="flex items-center lg:me-6 me-4 me-4 mb-4">
                  <LiaNewspaperSolid className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.legalConsiderations.titleIssues}</span>
                </li>

                <li className="flex items-center lg:me-6 me-4 me-4 mb-4">
                  <MdOutlineWaterDrop className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.utilityInformation.waterSource}</span>
                </li>

                <li className="flex items-center lg:me-6 me-4 me-4 mb-4">
                  <GoLightBulb className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.utilityInformation.electricitySource}</span>
                </li>

                <li className="flex items-center lg:me-6 me-4 me-4 mb-4">
                  <GiRoad className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.terrainFeatures.accessibility}</span>
                </li>

                <li className="flex items-center lg:me-6 me-4 me-4 mb-4">
                  <CiLocationOn className="lg:text-3xl text-2xl me-2 text-green-600" />
                  <span className="lg:text-xl">{property?.address}, {property?.state}</span>
                </li>
              </ul>

              <p className="text-slate-400">{property?.description}</p>

              <div className="w-full leading-[0] border-0 shadow dark:shadow-gray-700">
                <iframe title="iframe" src={GoogleMapsURLToEmbedURL(property?.googleMapsLink)} style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
              <div className="sticky top-20">
                <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                  <div className="p-6">
                    <h5 className="text-2xl font-medium">Precio:</h5>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-medium">$ {property?.price}</span>

                      <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">En Venta</span>
                    </div>

                    <ul className="list-none mt-4">
                      <li className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Días en Propiedades del Sol</span>
                        <span className="font-medium text-sm">5 Días</span>
                      </li>

                      {/* <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">Price per sq ft</span>
                        <span className="font-medium text-sm">$ 186</span>
                      </li>

                      <li className="flex justify-between items-center mt-2">
                        <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                        <span className="font-medium text-sm">$ 1497/Monthly</span>
                      </li> */}
                    </ul>
                  </div>

                  {/* <div className="flex">
                    <div className="p-1 w-1/2">
                      <Link to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Llama ahora</Link>
                    </div>
                    <div className="p-1 w-1/2">
                      <Link to="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"></Link>
                    </div>
                  </div> */}

                  <div className="text-center mb-6">
                    <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">¿Tienes preguntas?<br /> Contacta a Nuestro Agente de Confianza</h3>

                    <div className="mt-6">
                      <Link to={`https://wa.me/${property?.phone}`} className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"><BsTelephone className="align-middle me-2" /> Whatsapp</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
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

      <Footer />
      <Switcher />
    </>
  );

}

export default withRouter(LandDetail);
