import { useEffect, useRef, useState } from "react";
import Logo from "../assets/ICON.png";
import Logo_2 from "../assets/ICON_2.png";
import { Link } from "react-router-dom";
import MAIN_SOAP from "./../assets/soap_11.jpg";
import PUBLICITY from "./../assets/soap_10.jpg";
import PRODUCT_1 from "./../assets/soap_3.jpg";
import PRODUCT_2 from "./../assets/soap_7.jpg";
import PRODUCT_3 from "./../assets/soap_6.jpg";
import TEXTURE_2 from "./../assets/texture_2.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { ImQuotesLeft } from "react-icons/im";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Box from "../components/Box";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
function Home() {
  const swiperRef = useRef();

  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("http://localhost:5000/utilisateurs");
    console.log(res);
    setTestimonials(res.data);
  };
  return (
    <>
      <section className="header">
        <div className="header__navbar">
          <div className="header__navbar--wrapper">
            <img src={Logo} alt="" />
          </div>
          <div className="header__navbar--wrapper">
            <ul className="header__navbar--list">
              <li className="header__navbar--item">
                <a href="#">Home</a>
              </li>
              <li className="header__navbar--item">
                <a href="#">Product</a>
              </li>
              <li className="header__navbar--item">
                <a href="#">About Us</a>
              </li>
            </ul>
            <button className="header__navbar--button">Your Cart</button>
          </div>
        </div>
        <div className="header__center">
          <div className="header__center--wrapper">
            <img src={MAIN_SOAP} alt={MAIN_SOAP} />
          </div>
          <div className="header__center--wrapper">
            <h1 className="header__center--title">
              <span className="header__center--span">Soap</span>
             
              For Your Health
            </h1>
            <p className="header__center--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est
              cupiditate repudiandae id reiciendis assumenda laudantium atque,
              aperiam impedit aliquam? Qui maxime pariatur a assumenda ratione
              eius quibusdam aperiam voluptatibus!
            </p>
            <div className="header__center--bottom">
              <button className="header__center--button">Learn More</button>
              <p className="header__center--ping">Send Ping</p>
            </div>
          </div>
        </div>
      </section>
      <section className="publicity">
        <div className="publicity__wrapper">
          <h4>100 Recyclable</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            aperiam expedita, voluptates molestias temporibus maxime minus neque
            nobis rerum voluptatem quasi minima, dolore ex amet accusamus
            facilis deleniti optio blanditiis.
          </p>
        </div>
        <div className="publicity__wrapper">
          <img src={PUBLICITY} alt={PUBLICITY} />
        </div>
      </section>
      <section className="categories">
        <h1>The type of soap we provide for your health</h1>

        <div className="categories__wrapper">
          <div className="categories__wrapper--content">
            <img src={PRODUCT_1} alt="" />
            <h3>Bath Soap</h3>
            <p>46 Items</p>
          </div>
          <div className="categories__wrapper--content">
            <img src={PRODUCT_2} alt="" />
            <h3>Bath Soap</h3>
            <p>46 Items</p>
          </div>
          <div className="categories__wrapper--content">
            <img src={PRODUCT_3} alt="" />
            <h3>Bath Soap</h3>
            <p>46 Items</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="testimonials__wrapper">
          <div className="testimonials__header">
            <h3>The type of Soap we provide for your health</h3>
            <div className="testimonials__arrow">
              <span
                className="testimonials__arrow--left"
                onClick={() => swiperRef.current.slidePrev()}
              >
                <HiArrowLongLeft />
              </span>
              <span
                className="testimonials__arrow--right"
                onClick={() => swiperRef.current.slideNext()}
              >
                <HiArrowLongRight />
              </span>
            </div>
          </div>
          <div className="testimonials__content">
            <div className="testimonials__box">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={2}
                spaceBetween={0}
                autoplay={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide>
                    <Box {...testimonial} />;
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper--row">
            <img src={Logo_2} className="footer__header" alt="" />
      
          </div>
          <div className="footer__wrapper--row">
            <h4 className="footer__header" alt="">
              Contacts
            </h4>
            <ul className="footer__list">
              <li className="footer__item">
                Elliott Ave, Parkville VIC 3052, Melbourne Canada
              </li>
              <li className="footer__item">Phone: +31 85 964 47 25</li>
              <li className="footer__item">Email: support@helpo.org</li>
            </ul>
          </div>
          <div className="footer__wrapper--row">
            <h4 className="footer__header" alt="">
              Menu & Liens
            </h4>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Accueil
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  A Propos
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Cause
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Temoignages
                </Link>
              </li>
              <li className="footer__item">
                <Link to="#" className="footer__item--link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__wrapper--row">
            <h4 className="footer__header" alt="">
              Dons
            </h4>
            <ul className="footer__list">
              <li className="footer__item">
                Help Us Change the Lives of Children in World
              </li>
              <li className="footer__item">
                <button className="footer__item--button">Faire un don</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Regalcakes</p>

          <span>© Tous droits reservés</span>
        </div>
      </section>
    </>
  );
}

export default Home;
