import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@layout/navbar/Navbar';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const OrderNow = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className='w-[80%] mx-auto text-sm text-gray-700 bg-limebg p-20'>
          <p className='text-right text-greyblack2'>Free Sample Period : July 17 -21 , 2025</p>
          <h2 className='text-green text-center 2xl:text-5xl text-3xl py-20'>REQUEST APPLICATION FOR <span className='block'>FREE SHOGUN BLACK MAITAKE PROTHERA & EX TABLET SAMPLES</span></h2>
          <div className='flex justify-between items-center'>
            <h5 className='text-grey 2xl:text-4xl text-3xl'>CREATE YOUR ACCOUNT</h5>
            <p className='text-greyblack2'>*Sign-In Information *All Fields Are Required</p>
          </div>
          <form class="bg-white p-12 mt-4 mb-16 application-form">
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-1'>
                <label className='2xl:text-xl text-base'>Email</label>
              </div>
              <div className='col-span-5'>
                <input type="email" placeholder="Write your Email" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-1'>
                <label className='whitespace-nowrap'>Confirm Email</label>
              </div>
              <div className='col-span-4'>
                <input type="email" placeholder="Confirm Email" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-1'>
                <label>Password</label>
              </div>
              <div className='col-span-4'>
                <input type="password" placeholder="Write your Password" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-1'>
                <label className='whitespace-nowrap'>Confirm Password</label>
              </div>
              <div className='col-span-4'>
                <input type="password" placeholder="Confirm Password" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-1'>
                <label>Personal information</label>
              </div>
              <div className='col-span-4'>
                <input type="password" placeholder="Your personal information" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-2 items-center mb-4 gap-12">
              <div class="grid grid-cols-6 grid-flow-col items-center mb-4 gap-12">
                <div className='col-span-2'>
                  <label>First name</label>
                </div>
                <div className='col-span-4'>
                  <input type="password" placeholder="Write your First name*" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
              <div class="grid grid-cols-6 grid-flow-col items-center mb-4 gap-12">
                <div className='col-span-2'>
                  <label>Last name</label>
                </div>
                <div className='col-span-4'>
                  <input type="password" placeholder="Write your Last name" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 items-center mb-4 gap-12">
              <div class="grid grid-cols-6 grid-flow-col items-center mb-4 gap-12">
                <div className='col-span-2'>
                  <label className='whitespace-nowrap'>Date of Birth</label>
                </div>
                <div className='col-span-4'>
                  <input type="date" placeholder="" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
              <div class="grid grid-cols-6 grid-flow-col items-center mb-4 gap-12">
                <div className='col-span-2'>
                  <label>Sex</label>
                </div>
                <div className='col-span-4'>
                  <input type="text" placeholder="Write your Sex" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-2'>
                <label className='whitespace-nowrap'>Naturopath / Healthcare Practitioner</label>
              </div>
              <div className='col-span-4'>
                <input type="text" placeholder="Write Here" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-2'>
                <label className='whitespace-nowrap'>Residential Shipping address</label>
              </div>
              <div className='col-span-4'>
                <input type="text" placeholder="Write your Residential Shipping address" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <hr className='my-12'></hr>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-1'>
                <label className='whitespace-nowrap'>City</label>
              </div>
              <div className='col-span-5'>
                <input type="text" placeholder="Write your City" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-2 items-center gap-12">
              <div class="grid grid-cols-6 grid-flow-col items-center mb-4 gap-12">
                <div className='col-span-2'>
                  <label className='whitespace-nowrap'>Postal code</label>
                </div>
                <div className='col-span-4'>
                  <input type="password" placeholder="write your postal code" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
              <div class="grid grid-cols-6 grid-flow-col items-center gap-12">
                <div className='col-span-2'>
                  <label className='whitespace-nowrap'>Province / State</label>
                </div>
                <div className='col-span-4'>
                  <input type="password" placeholder="Write your Province / State" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 items-center gap-12">
              <div class="grid grid-cols-6 grid-flow-col items-center mb-4 gap-12">
                <div className='col-span-2'>
                  <label className='whitespace-nowrap'>Cancer stage</label>
                </div>
                <div className='col-span-4'>
                  <input type="password" placeholder="write your cancer stage" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
              <div class="grid grid-cols-6 grid-flow-col items-center gap-12">
                <div className='col-span-2'>
                  <label className='whitespace-nowrap'>Cancer Type</label>
                </div>
                <div className='col-span-4'>
                  <input type="password" placeholder="Write your cancer type" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-1'>
                <label className='whitespace-nowrap'>Other Treatments</label>
              </div>
              <div className='col-span-5'>
                <input type="text" placeholder="Write your Other Treatments" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
            <div class="grid grid-cols-6 items-center mb-4 gap-12">
              <div className='col-span-2'>
                <label className='whitespace-nowrap'>Other medications taking</label>
              </div>
              <div className='col-span-4'>
                <input type="text" placeholder="Write Here" class="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent" />
              </div>
            </div>
          </form>
          <p>Terms of use</p>
          <p>Shogun Maitake Canada Co., Ltd respects the importance of your privacy and protecting your personal information. As such, we want you to understand how we will use the information you provided on this registration page to create a free sample account.</p>
          <p>By clicking “I Agree” below, you acknowledge that you give authority to access the above account to allow you to request treatment samples, order educational materials, receive product information, support offerings, product news, and/or take part in additional training from Shogun Maitake Canada Co., Ltd. </p>
          <p>To create a Shogun Maitake Canada Co., Ltd free sample account, you understand that you must provide your first name, last name, email address, residential address, and medical investigation reports. Once you create an account, you have the option to enter additional information on your Shogun Maitake Canada Co., Ltd account if you so choose. Any information provided to create a Shogun Maitake Canada Co. Ltd account will not be shared with any third parties and is solely used to track requests/orders and tailor your experience.</p>
          <p>You must check the “I agree” box and click “Create account” before you can proceed. If you do not agree to the terms above, you may exit this page. You may return to this page at any time to create an account.</p>
          <div className='flex items-center mb-4 gap-6'>
            <p>I confirm that I am 18 years of age or older.</p>
            <input
              type="checkbox"
              name="purchaseOption"
              value="onetime"
            />
          </div>
          <div className='flex items-center mb-4 gap-6'>
            <p>I agree</p>
            <input
              type="checkbox"
              name="purchaseOption"
              value="onetime"
            />
          </div>
          <div className='flex items-center mt-4 gap-6'>
            <p>I endorse myself as a Cancer patient for taking PROTHERA & EX Tablet, I’m responsible for supervising myself. </p>
            <input
              type="checkbox"
              name="purchaseOption"
              value="onetime"
            />
          </div>
          <p>Ordering 1 1-month free trial</p>
          <p>SIGNATURE</p>
          <h2 className='text-center text-4xl text-green pt-28 pb-12'>PERSONAL INFORMATION PROTECTION PLEDGE</h2>
          <p>To</p>
          <p>PATIENT NAME </p>
          <p>SHOGUN MAITAKE CANADA CO.LTD. (Hereinafter referred to as “the Company”) pledges to manage and administer the personal health-related information entrusted during the free sample program as follows. </p>
          <p>1. PURPOSE OF USE</p>
          <p>The Company to verify the efficacy of SHOGUN BLACK MAITAKE PROTHERA under the consultation of a Naturopath and Healthcare Practitioner. </p>
          <p>2. CONFIDENTIALITY AND MANAGEMENT OF INFORMATION </p>
          <p>The Company sets the controls that protect confidential, sensitive, and personal information from damage, theft, or misuse. The Company agrees and follows the confidentiality agreement signed between the patient and the healthcare provider.</p>
          <p>YOSHINOBU ODAIRA <span className='block'>OWNER/PRESIDENT </span>SHOGUN MAITAKE CANADA CO., LTD. </p>
          <p>Inquires:</p>
          <p>John Jacob <span className='block'>Shogun Maitake Canada Co., Ltd.</span> 6188 Colonel Talbot Road.<span className='block'> London ON N6P 1J1 </span>TEL:519-652-5783 <span className='block'>orders@shogunmaitake.com</span></p>
        </div>
        <div className='flex justify-center py-12 gap-4'>
          <button className="text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
            <p>Upload Documents</p>
          </button>
               <button className="text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
            <p>Request</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
