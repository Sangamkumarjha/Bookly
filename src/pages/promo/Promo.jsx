// PromoSection.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MyContext from '../../context/data/myContext';

const books = [
  { id: 1, title: 'Bhagvat gita', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlE2gZwgYbnGksGIlnW6EOjt8vtC_WnRApYdaCQV7p9jdAewIae4aYQ65TxX7EJANvRVWVxBWX4F9BuaiTpK0qvXBiikeqFUKhZemnxW5PkE2nZyw_CKVjrw&usqp=CAE' },
  { id: 2, title: 'Do It Today', image: 'https://m.media-amazon.com/images/I/41ACElFKjiL._SY445_SX342_.jpg' },
  { id: 3, title: 'Who Will Cry When You Die', image: 'https://m.media-amazon.com/images/I/41do3PRTypS._SY445_SX342_.jpg' },
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
    <div className="bg-gray-300 py-4 "style={{backgroundColor:mode==='dark'?'#282c34':'', color:mode==='dark'?'white':''}}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800" style={{color:mode==='dark'?'white':''}}>Special Offer</h2>
        <p className="text-gray-600 mt-4">
          Get 20% off on selected books this week! Use code: SPECIAL20
        </p>
        <Slider {...sliderSettings} className="mt-8">
          {books.map((book) => (
            <div key={book.id} className="p-4">
              <img src={book.image} alt={book.title} className="mx-auto mb-4  " />
              <p className="text-lg font-semibold p-2 text-purple-800">{book.title}</p>
              
              <Link to={'/allproducts'}  className="text-sm font-medium text-gray-900 bg-red-500 m-2 p-1.5 rounded-full " style={{ color: mode === 'dark' ? 'white' : '', }}>
                   View Details
                  </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Promo;
