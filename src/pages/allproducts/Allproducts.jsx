import React,{useContext} from "react"

import MyContext from "../../context/data/myContext"
import Layout from "../../component/layout/Layout";


const products = [
  {
    id: 1,
    name: 'Built Don`t Talk',
    href: '/product/:id',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQoMg81EoMBNVxRctF1puEf_Jn6LIoxBBmedpcCkCS3P5nXRRJmSRUuj2zD0fZq8L0zGADISHi1Q7GBwfoKuDeNY1DtQtjjdAuR23yrmFhXN5aRzGiIdYBC2A&usqp=CAE',
    imageAlt: "Books.",
    price: '$35',
    color: 'Raj Shamani',
  },
  {
    id: 2,
    name: 'Bhagavad Gita Yatharoop(hindi)',
    href: '/product/:id',
    imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlE2gZwgYbnGksGIlnW6EOjt8vtC_WnRApYdaCQV7p9jdAewIae4aYQ65TxX7EJANvRVWVxBWX4F9BuaiTpK0qvXBiikeqFUKhZemnxW5PkE2nZyw_CKVjrw&usqp=CAE',
    imageAlt: "images",
    price: '$50',
    color: 'Loaading...',
  },
  {
    id: 3,
    name: 'THE POWER OF YOUR SUBCONCIOUS MIND ',
    href: '/nopage',
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjuzU2dHb85SouHPCTtjQGYP_WZfPSD1h8U0T-1MGKVafOyrea5yOj5jIoulYkOcYfVWdt2RvtGEd41F7C6j6RzW9KBNPOZPMV9emzi_k&usqp=CAE',
    imageAlt: "images",
    price: '$35',
    color: 'DR Joseph Murphy',
  },
  {
    id: 4,
    name: 'Think And Grow Rich',
    href: '/nopage',
    imageSrc: 'https://m.media-amazon.com/images/I/61NKtm0nlNL._SY342_.jpg',
    imageAlt: "images",
    price: '$15',
    color: 'Napoleon Hill',
  },
   {
    id: 5,
    name: 'Who will Cry when You Die?',
    href: '/nopage',
    imageSrc: 'https://m.media-amazon.com/images/I/41do3PRTypS._SY445_SX342_.jpg',
    imageAlt: "image",
    price: '$20',
    color: 'Robin Sharma',
  },
  {
    id: 6,
    name: 'Do It Today',
    href: '/nopage',
    imageSrc: 'https://m.media-amazon.com/images/I/41ACElFKjiL._SY445_SX342_.jpg',
    imageAlt: "image",
    price: '$20',
    color: 'Darius Forous',
  },
  {
    id: 7,
    name: 'The 5 AM Club',
    href: '/nopage',
    imageSrc: 'https://m.media-amazon.com/images/I/410SBqmsPdL._SY445_SX342_.jpg',
    imageAlt: "image",
    price: '$30',
    color: 'Robin Sharma',
  },
  {
    id: 8,
    name: '  The Pivot Year',
    href: '/product/:id',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/81OvOzDu3fL._AC_UL127_SR127,127_.jpg',
    imageAlt: "Books.",
    price: '$40',
    color: 'Raj Shamani',
  },
  {
    id: 9,
    name: 'The 48 Law Of Power',
    href: '/nopage',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL127_SR127,127_.jpg',
    imageAlt: "images",
    price: '$50',
    color: 'Loaading...',
  },
  {
    id: 10,
    name: 'Things We Never Got Over ',
    href: '/nopage',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/81WklxcuSZL._AC_UL254_SR254,254_.jpg',
    imageAlt: "images",
    price: '$35',
    color: 'Bookly',
  },
  {
    id: 11,
    name: 'Twisted Love',
    href: '/nopage',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/71aXWhr9tTL._AC_UL254_SR254,254_.jpg',
    imageAlt: "images",
    price: '$15',
    color: 'Ana Huang',
  },
  {
    id: 11,
    name: 'You Can',
    href: '/nopage',
    imageSrc: 'https://m.media-amazon.com/images/I/41AnbvGOT3L._SY445_SX342_.jpg',
    imageAlt: "images",
    price: '$15',
    color: 'George Matthew Adams',
  },
  

  // More products...
]

export default function Allproducts() {
  const context=useContext(MyContext);
  const {mode} = context;
  

  return (
  <Layout>
    <div className="bg-white" style={{backgroundColor: mode==='dark'?'#282c34':'', color: mode==='dark'?'white':''}}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:scale-110 transition-scale-110  duration-300 ease-in-out lg:h-80 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href} style={{ color: mode === 'dark' ? 'white' : '' }}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500" style={{ color: mode === 'dark' ? 'white' : '' }}>{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  )
}
