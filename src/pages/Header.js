import React from 'react';
import Pepsi from '../images/pepsiTransparent.png';
import headPic from '../images/headerImage.jpeg';
import companyLogo from '../images/companyLogo.png';
import orderSheet from '../files/Order_Sheet_VIP_CODE.pdf';
import Aos from 'aos';
const Header = () => {
  Aos.init({
    offset: 200,
    duration: 1600,
    disable: 'mobile',
    throttleDelay: 99,
    debounceDelay: 50,
  });
  return (
    <>
      <div
        className='isolate bg-no-repeat object-cover'
        style={{
          backgroundImage: `url(${headPic})`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      >
        <div className='w-full h-auto px-6 pt-6 lg:px-8 bg-[rgba(0,0,0,0.4)]'>
          <div>
            <nav
              className='w-full flex h-auto items-center justify-between'
              aria-label='Global'
            >
              <div
                className='hidden lg:flex lg:min-w-0 lg:flex-1'
                aria-label='Global'
              >
                <a href='#home' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Brand Logo</span>
                  <img className='h-[100px]' src={Pepsi} alt='Brand logo' />
                </a>
              </div>
              {/* handburger menu */}
              <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end'>
                <a href='#home' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Brand Logo</span>
                  <img
                    className='h-[100px]'
                    src={companyLogo}
                    alt='Brand logo'
                  />
                </a>
              </div>
            </nav>
            <div role='dialog' aria-modal='true'>
              <div focus='true' className='inset-0 z-10 lg:hidden md:h-auto'>
                <div className='flex h-9 items-center justify-between'>
                  <div className='flex'>
                    <a href='#home' className='-m-1.5 p-1.5'>
                      <span className='sr-only'>Brand Logo</span>
                      <img className='h-8' src={Pepsi} alt='pepsi logo' />
                    </a>
                  </div>
                  <div className='flex'>
                    <div className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                      <a href='#home' className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Brand Logo</span>
                        <img
                          className='h-8'
                          src={companyLogo}
                          alt='pepsi logo'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main */}
        <main className='w-full h-auto bg-[rgba(0,0,0,0.4)]'>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40 flex justify-center items-center flex-wrap flex-col gap-y-[12px]'>
              <h1
                className='text-2xl font-bold tracking-tight text-center md:text-6xl text-white mb-[16px]'
                // data-aos-anchor-placement='top-center'
                data-aos='flip-right'
                data-aos-offset='100'
                data-aos-duration='1700'
              >
                {' '}
                WALIC Beverages Distributor
              </h1>
              <h1
                className='text-2lg font-bold tracking-bold text-center md:text-md text-white'
                data-aos='fade-right'
                data-aos-offset='100'
                data-aos-duration='1800'
              >
                {' '}
                Our Brand Products are the best.
              </h1>

              <div className='flex gap-x-[12px] justify-center items-center w-full h-full'>
                <a
                  href={orderSheet}
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
                <a
                  href='#contact'
                  className='inline-block rounded-[3px] border border-white  px-8 py-2.5 text-base font-bolder leading-7 text-white shadow-[20px] text-[23px] hover:cursor-pointer'
                  data-aos='fade-left'
                  data-aos-offset='100'
                  data-aos-duration='1700'
                >
                  Contact Us
                  <span className='text-white px-[2px]' aria-hidden='true'>
                    &darr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Header;
