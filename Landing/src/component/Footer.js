import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/images/logo-dark.png";
import { HiOutlineEnvelope, BsPencil, MdKeyboardArrowRight, BiLogoBehance, FiMapPin, FiMail, FiPhone, FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from "../assets/icons/vander"


export default function Footer() {

  return (
    <>
      <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              {/* <!-- Subscribe --> */}
              <div className="relative w-full">
                {/* <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                        <div className="md:text-start text-center z-1">
                                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Subscribe to Newsletter!</h3>
                                            <p className="text-slate-400 max-w-xl mx-auto">Subscribe to get latest updates and information.</p>
                                        </div>

                                        <div className="subcribe-form z-1">
                                            <form className="relative max-w-lg md:ms-auto">
                                                <input type="email" id="subcribe" name="email" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" placeholder="Enter your email :" />
                                                <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-full">Subscribe</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="absolute -top-5 -start-5">
                                        <HiOutlineEnvelope  className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"/>
                                    </div>

                                    <div className="absolute -bottom-5 -end-5">
                                        <BsPencil className="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"/>
                                    </div>
                                </div> */}

                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                  <div className="lg:col-span-4 md:col-span-12">
                    <div className="flex">
                      <Link to="#" className="text-[22px] focus:outline-none">
                        <img src={LogoLight} alt="" />
                      </Link>
                      <h1
                        style={{
                          margin: '0 0 0 10px',
                          fontSize: '1.5rem',
                          fontWeight: '600',
                          textTransform: 'capitalize',
                        }}
                        className="inline-block"
                      >Propiedades del Sol</h1>
                    </div>
                    <p className="mt-6 text-gray-300">Nuestro marketplace te conecta con propiedades premium antes de que aparezcan en el mercado, brindándote una ventaja distintiva en tus decisiones de inversión.</p>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Compañía</h5>
                    <ul className="list-none footer-list mt-6">
                      <li className="mt-[10px]"><Link to="/terms" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl" />Términos y Condiciones</Link></li>
                      <li className="mt-[10px]"><Link to="/privacy" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl" /> Política de Privacidad</Link></li>
                      <li className="mt-[10px]" ><Link to="/aboutus" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl" /> Quiénes Somos</Link></li>
                      {/* <li className="mt-[10px]"><Link to="/features" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Services</Link></li>
                          <li className="mt-[10px]"><Link to="/pricing" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Pricing</Link></li>
                          <li className="mt-[10px]"><Link to="/blog" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Blog</Link></li>
                          <li className="mt-[10px]"><Link to="/auth-login" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Login</Link></li> */}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Links Útiles</h5>
                    <ul className="list-none footer-list mt-6">
                      <li className="mt-[10px]"><Link to="/" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl" /> Oportunidades</Link></li>
                      <li className="mt-[10px]"><Link to="/sell" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl" /> Quiero Vender</Link></li>
                      {/* <li><Link to="/terms" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Terms of Services</Link></li>
                                            <li className="mt-[10px]"><Link to="/privacy" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Privacy Policy</Link></li> */}
                      {/* <li className="mt-[10px]"><Link to="/listing-one" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Listing</Link></li> */}
                      {/* <li className="mt-[10px]"><Link to="/contact" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><MdKeyboardArrowRight className="me-1 text-xl"/> Contact</Link></li> */}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Contacto</h5>
                    <div className="flex mt-6">
                      <FiMapPin className="w-5 h-5 text-green-600 me-3" />
                      <div className="">
                        <h6 className="text-gray-300 mb-2">Barreal, Torres de Heredia <br /> Apart. A701, <br /> Heredia, Costa Rica 506</h6>
                        {/* <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox">View on Google map</Link> */}
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <FiMail className="w-5 h-5 text-green-600 me-3" />
                      <div className="">
                        <Link to="mailto:contact@example.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">contact@example.com</Link>
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <FiPhone className="w-5 h-5 text-green-600 me-3" />
                      <div className="">
                        <Link to="tel:+506 7161 2344" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+506 7161 2344</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Subscribe --> */}
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="md:text-start text-center">
                <p className="mb-0 text-gray-300">© <script type="text/javascript" id="www-widgetapi-script" src="https://www.youtube.com/s/player/d87d581f/www-widgetapi.vflset/www-widgetapi.js"></script><script id="iframe_api" src="https://www.youtube.com/iframe_api"></script>{(new Date().getFullYear())}{" "} Propiedades del Sol <i className="mdi mdi-heart text-red-600"></i></p>
              </div>

              <ul className="list-none md:text-end text-center">
                <li className="inline ms-1"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiFacebook className="h-4 w-4" /></Link></li>
                <li className="inline ms-1"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiInstagram className="h-4 w-4" /></Link></li>
                <li className="inline ms-1"><Link to="https://twitter.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiTwitter className="h-4 w-4" /></Link></li>
                <li className="inline ms-1"><Link to="mailto:support@shreethemes.in" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiMail className="h-4 w-4" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
