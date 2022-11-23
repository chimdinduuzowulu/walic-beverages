import React from 'react';
import companyLogo from '../images/companyLogo2.png';
import pepsiLogo from '../images/pepsi.png';

const Footer = () => {
  return (
    <div className='w-full h-[auto] bg-[#0f3667] flex justify-between items-center border-t  border-dashed border-white flex-wrap'>
      <p className='text-white p-8 flex justify-space-around w-auto items-center gapx-6'>
        <span>
          {' '}
          <img
            className='h-8 rounded-[10px]'
            src={companyLogo}
            alt='Walic logo missing'
          />
        </span>
        <span className='ml-4'> WALIC Beverages Distributor </span>
      </p>
      <p className='text-white p-8'>Copyright &copy; 2022</p>
      <p className='text-white p-8 flex justify-space-around w-auto items-center gapx-6'>
        <span>
          {' '}
          <img
            className='h-8 rounded-[8px]'
            src={pepsiLogo}
            alt='pepsi logo missing'
          />
        </span>
        <span className='ml-4'> Pepsi Beverages </span>
      </p>
    </div>
  );
};

export default Footer;
