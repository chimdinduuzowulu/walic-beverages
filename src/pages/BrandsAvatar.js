import React from 'react';
import products from './Products';

const BrandsAvatar = () => {
  return (
    <>
      <div
        className='w-full bg-white py-24 sm:py-29 lg:py-35'
        id='brandDetails'
      >
        <div className=' px-6 lg:px-8'>
          <div className='sm:text-center'>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Brands and Details
            </p>
          </div>

          <div className='mt-20 max-w-lg sm:mx-auto md:max-w-none'>
            <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-6'>
              {/*  */}
              {products.map((product) => (
                <div
                  key={product.productName}
                  className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'
                >
                  <div
                    className='flex h-12 w-12 items-center justify-center rounded-xl bg-white text-white sm:shrink-0'
                    data-aos='fade-right'
                    data-aos-offset='10'
                    data-aos-duration='1500'
                  >
                    <img
                      className='h-[23px] w-[23px]'
                      src={product.productImage}
                      alt={product.productName + ' missing'}
                    />
                  </div>
                  <div
                    className='sm:min-w-0 sm:flex-1'
                    data-aos='fade-left'
                    data-aos-offset='10'
                    data-aos-duration='1700'
                  >
                    <p className='text-lg font-semibold leading-8 text-gray-900'>
                      {product.productName}
                    </p>
                    <p className='mt-2 text-base leading-7 text-gray-600'>
                      {product.productDescription}
                    </p>
                  </div>
                </div>
              ))}

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsAvatar;
