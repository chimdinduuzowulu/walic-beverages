import React, { useEffect, useState } from 'react';
import schwepsPic from '../images/schwepsBg.jpeg';
import mtnDew from '../images/mtnDew.jpeg';
import Header from './Header';
import products from './Products';
import Footer from './Footer';
import BrandsAvatar from './BrandsAvatar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact';

const Home = () => {
  const [isproductClicked, setisproductClicked] = useState(false);
  const [ClickedProduct, setClickedProduct] = useState('');
  const [showProductClassOption, setshowProductClassOption] =
    useState('hidden');
  const clickProduct = (e) => {
    setisproductClicked(true);
    setshowProductClassOption('block');
    setClickedProduct(e.target.id);
  };
  const handelShowChange = () => {
    setshowProductClassOption('hidden');
    setisproductClicked(false);
  };
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      disable: 'mobile',
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      {/* brands Static image */}
      <div
        className='w-full h-[360px] bg-no-repeat object-cover flex justify-center items-center'
        style={{
          backgroundImage: `url(${schwepsPic})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex gap-x-[12px] justify-center items-center bg-[rgba(0,0,0,0.5)] w-full h-full'>
          <a
            href='#brands'
            className='inline-block rounded-[3px] border border-white  px-8 py-2.5 text-base font-bolder leading-7 text-white shadow-[20px] text-[23px] hover:cursor-pointer'
            data-aos='fade-left'
            data-aos-offset='100'
            data-aos-duration='1700'
          >
            View Brands
            <span className='text-white' aria-hidden='true'>
              &rarr;
            </span>
          </a>
        </div>
      </div>
      {/* products display container */}
      <div
        className='w-[100%] flex justify-center items-center p-[20px] max-sm:p-[4px] sm:-[6px] bg-white h-[auto] flex-wrap'
        id='brands'
      >
        {products.map((product) => (
          <div
            className='w-[23%] h-[330px] max-sm:w-[95%] sm:w-[46%] md:w-[31%] lg:w-[32%] xl:w-[23%]   bg-[#ffffff] mr-[8px] mb-[8px] flex justify-center items-center flex-wrap rounded border z-index-1 shadow-sm shadow-black hover:bg-[#f5f4f0] hover:cursor-pointer hover:shadow-inner'
            data-aos='fade-up'
            data-aos-anchor-placement='top-center'
            onClick={clickProduct}
            id={product.productName}
            key={product.productName}
          >
            <img
              src={product.productImage}
              alt={product.productName}
              className='w-[200px] h-[200px]'
              onClick={clickProduct}
              id={product.productName}
            />
            {/* <p>{product.productName}</p> */}
          </div>
        ))}
      </div>

      {/* drop down */}
      {isproductClicked ? (
        <div
          className={`relative z-10 ${showProductClassOption} w-[100%] m-auto`}
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity w-[inherit]'></div>
          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 '>
              <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full'>
                  <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
                    <div className='px-4 py-5 sm:px-6'>
                      <h3 className='text-lg font-medium leading-6 text-black'>
                        Brand Information
                      </h3>
                      <p className='mt-1 max-w-2xl text-sm text-black'>
                        Brand details and products.
                      </p>
                    </div>
                    <div className='border-t border-gray-200'>
                      <dl>
                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-[16px] font-medium text-black font-bold'>
                            Brand name
                          </dt>
                          <dd className='mt-1 text-sm text-black sm:col-span-2 sm:mt-0'>
                            {ClickedProduct}
                          </dd>
                        </div>
                        <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-[16px] font-medium text-black font-bold'>
                            Brand Category
                          </dt>
                          <dd className='mt-1 text-sm text-black sm:col-span-2 sm:mt-0'>
                            {ClickedProduct}
                          </dd>
                        </div>
                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-[16px] font-medium text-black font-bold'>
                            Product Price
                          </dt>
                          <dd className='mt-1 text-sm text-black sm:col-span-2 sm:mt-0'>
                            $ 2000000
                          </dd>
                        </div>
                        {/* <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-sm font-medium text-gray-500'>
                            Energy Level
                          </dt>
                          <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                            Full energy Drink
                          </dd>
                        </div> */}
                        <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                          <dt className='text-[16px] font-medium text-black font-bold'>
                            Product Description
                          </dt>
                          {products.map((item) => {
                            if (item.productName === ClickedProduct) {
                              return (
                                <dd
                                  key={item.productName}
                                  className='mt-1 text-[16px] font-medium text-black sm:col-span-2 sm:mt-0'
                                >
                                  {item.productDescription}
                                </dd>
                              );
                            }
                          })}
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-red-500 bg-red-500 px-4 py-2 text-white shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-[14px]'
                    onClick={handelShowChange}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* footer area */}
      <div
        className='w-full h-[360px] bg-no-repeat object-cover flex justify-center items-center'
        style={{
          backgroundImage: `url(${mtnDew})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex gap-x-[12px] justify-center items-center bg-[rgba(0,0,0,0.5)] w-full h-full'>
          <a
            href='../files/Order Sheet VIP CODE_1.pdf'
            className='inline-block rounded-[3px] border border-white  px-8 py-2.5 text-base font-bolder leading-7 text-white shadow-[20px] text-[23px] hover:cursor-pointer'
            data-aos='fade-right'
            data-aos-offset='100'
            data-aos-duration='1700'
            download={true}
          >
            Download Order Sheet
            <span className='text-white' aria-hidden='true'>
              &darr;
            </span>
          </a>
        </div>
      </div>
      <BrandsAvatar />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
