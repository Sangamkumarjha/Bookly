// PromoSection.js

import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyContext from '../../context/data/myContext';

const books = [
  { id: 1, title: 'Bookly', image: 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg' },
  { id: 2, title: 'Bookly', image: 'https://m.media-amazon.com/images/I/41ACElFKjiL._SY445_SX342_.jpg' },
  { id: 3, title: 'Bookly', image: 'https://m.media-amazon.com/images/I/41do3PRTypS._SY445_SX342_.jpg' },
];

const Promo = () => {
    const context=useContext(MyContext)
    const {mode}=context;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-300 py-16 "style={{backgroundColor:mode==='dark'?'#282c34':'', color:mode==='dark'?'white':''}}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800" style={{color:mode==='dark'?'white':''}}>Special Offer</h2>
        <p className="text-gray-600 mt-4">
          Get 20% off on selected books this week! Use code: SPECIAL20
        </p>
        <Slider {...sliderSettings} className="mt-8">
          {books.map((book) => (
            <div key={book.id} className="p-4">
              <img src={book.image} alt={book.title} className="mx-auto mb-4 w-4/5 " />
              <p className="text-lg font-semibold">{book.title}</p>
              <button className="bg-blue-500  px-4 py-2 rounded-md hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Promo;
