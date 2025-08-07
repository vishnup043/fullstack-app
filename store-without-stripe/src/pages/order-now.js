import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@layout/navbar/Navbar';
import Footer from '@layout/footer/Footer';
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
        <div className="product-list grid grid-cols-2 py-28 border-b">
          <div className="product-box">
            <h5 className="text-greyblack 2xl:text-5xl text-3xl">Shogun Black Maitake</h5>
            <h2 className="text-[80px] leading-none">Prothera</h2>
            <h3 className="text-greyblack 2xl:text-5xl text-3xl">
              Liquid <span className="block">$ 150</span>
            </h3>

            <div className="relative inline-block text-left">
              <p className="2xl:text-xl text-lg pt-8">Select The Product Bundle Type</p>
              <div className="space-y-4">
                {/* Onetime Purchase Option */}
                <label className="flex items-start gap-4 border-b py-4 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="purchaseOption"
                      value="onetime"
                    />
                  </div>
                  <div className="block rounded">
                    <p className="2xl:text-xl text-lg text-black">
                      Price $150 / Bottle (140 ml)
                      <span className="block">(Onetime Purchase)</span>
                      <span className="block">$150</span>
                    </p>
                  </div>
                </label>

                {/* Subscription Option */}
                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="purchaseOption"
                      value="subscription"
                    />
                  </div>
                  <div className="block rounded">
                    <p className="2xl:text-xl text-lg text-black">
                      Price $120.00 / Bottle (140 ml) (2 Bottles/Mo)
                      <span className="block">Monthly auto ship subscription</span>
                      <span className="block">$2,800.00</span>
                    </p>
                  </div>
                </label>
              </div>

              {/* Quantity & Total */}
              <div className="flex items-center gap-8 mt-6">
                <p className="2xl:text-xl text-lg text-black">
                  Options Amount <span className="block">$0</span>
                </p>
                <input
                  type="number"
                  className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
                />
                <button className="w-[178px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg">
                  <p>Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Swiper className='rounded-3xl'
              slidesPerView={1}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}

            >
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/prothera1.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/prothera2.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/prothera3.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/prothera4.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/prothera5.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/prothera6.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/prothera7.jpg"
                />
              </SwiperSlide>
            </Swiper>
            <div className='combotherappy w-max mx-auto mt-6'>
              <div className="w-[178px] p-1 text-center rounded-xl text-white 2xl:text-2xl text-lg bg-green">
                <p>Combo Theraphy</p>
              </div>
              <div className='w-[178px] p-3 combo-panel bg-offwhite rounded-xl mt-4'>
                <p>Shogun Black Maitake Ex Tablets + Shogun Black Maitake Prothera</p>
                <button className="w-[154px] p-1 text-center rounded-xl text-white 2xl:text-2xl text-lg bg-green">
                  <p>$ 220</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-list grid grid-cols-2 py-28 border-b">
          <div className="product-box">
            <h5 className="text-greyblack 2xl:text-5xl text-3xl">Shogun Black Maitake</h5>
            <h2 className="text-[80px] leading-none">EX <span>TABLETS</span></h2>
            <h3 className="text-greyblack 2xl:text-5xl text-3xl">$ 120
            </h3>

            <div className="relative inline-block text-left">
              <p className="2xl:text-xl text-lg pt-8">Select The Product Bundle Type</p>
              <div className="space-y-4">
                {/* Onetime Purchase Option */}
                <label className="flex items-start gap-4 border-b py-4 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="purchaseOption"
                      value="onetime"

                    />
                  </div>
                  <div className="block rounded">
                    <p className="2xl:text-xl text-lg text-black">
                      Price $150 / Bottle (140 ml)
                      <span className="block">(Onetime Purchase)</span>
                      <span className="block">$150</span>
                    </p>
                  </div>
                </label>

                {/* Subscription Option */}
                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="purchaseOption"
                      value="subscription"

                    />
                  </div>
                  <div className="block rounded">
                    <p className="2xl:text-xl text-lg text-black">
                      Price $120.00 / Bottle (140 ml) (2 Bottles/Mo)
                      <span className="block">Monthly auto ship subscription</span>
                      <span className="block">$2,800.00</span>
                    </p>
                  </div>
                </label>
              </div>

              {/* Quantity & Total */}
              <div className="flex items-center gap-8 mt-6">
                <p className="2xl:text-xl text-lg text-black">
                  Options Amount <span className="block">$0</span>
                </p>
                <input
                  type="number"
                  className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
                />
                <button className="w-[178px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg">
                  <p>Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Swiper className='rounded-3xl'
              slidesPerView={1}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}

            >
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/ex-1.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/ex-2.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/ex-3.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/ex-4.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/ex-5.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/ex-6.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/ex-7.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="product-list grid grid-cols-2 py-28">
          <div className="product-box">
            <h5 className="text-greyblack 2xl:text-5xl text-3xl">Shogun Black Maitake</h5>
            <h2 className="text-[80px] leading-none">Synergy Extract</h2>
            <h3 className="text-greyblack 2xl:text-5xl text-3xl">
              capsule <span className="block">$ 139.99</span>
            </h3>

            <div className="relative inline-block text-left">
              <p className="2xl:text-xl text-lg pt-8">Select The Product Bundle Type</p>
              <div className="space-y-4">
                {/* Onetime Purchase Option */}
                <label className="flex items-start gap-4 border-b py-4 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="purchaseOption"
                      value="onetime"
                    />
                  </div>
                  <div className="block rounded">
                    <p className="2xl:text-xl text-lg text-black">
                      Price $ 139.99 / Bottle (60 Capsules & 200 mg)
                      <span className="block">(Onetime Purchase)</span>
                      <span className="block">$ 139.99</span>
                    </p>
                  </div>
                </label>

                {/* Subscription Option */}
                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="purchaseOption"
                      value="subscription"
                    />
                  </div>
                  <div className="block rounded">
                    <p className="2xl:text-xl text-lg text-black">
                      Price $ 130.00 / Bottle (60 Capsules & 200 mg)
                      <span className="block">(Monthly auto ship subscription)</span>
                      <span className="block">$ 1,560.00</span>
                    </p>
                  </div>
                </label>
              </div>

              {/* Quantity & Total */}
              <div className="flex items-center gap-8 mt-6">
                <p className="2xl:text-xl text-lg text-black">
                  Options Amount <span className="block">$0</span>
                </p>
                <input
                  type="number"
                  className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
                />
                <button className="w-[178px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg">
                  <p>Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Swiper className='rounded-3xl'
              slidesPerView={1}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}

            >
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/synergy-1.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/synergy-2.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/synergy-3.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/synergy-4.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/synergy-5.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/synergy-6.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1500}
                  height={1500}
                  className="w-full"
                  alt="logo"
                  src="/order-now/synergy-7.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className='bg-limebg'>
        <div className='container'>
          <div className="product-list grid grid-cols-2 py-28 ">
            <div className="product-box">
              <h5 className="text-greyblack 2xl:text-5xl text-3xl">Shogun Black Maitake</h5>
              <h2 className="text-[80px] leading-none">Synergy Extract</h2>
              <h3 className="text-greyblack 2xl:text-5xl text-3xl">
                liquid <span className="block">$ 109.99</span>
              </h3>
              <div className="relative inline-block text-left">
                <p className="2xl:text-xl text-lg pt-8">Select The Product Bundle Type</p>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 border-b py-4 cursor-pointer">
                    <div className="relative">
                      <input
                        type="radio"
                        name="purchaseOption"
                        value="onetime"
                      />
                    </div>
                    <div className="block rounded">
                      <p className="2xl:text-xl text-lg text-black">
                        Price $ 109.99 / Bottle (140 ml)
                        <span className="block">(Onetime Purchase)</span>
                        <span className="block">$ 109.99</span>
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start gap-4 cursor-pointer">
                    <div className="relative">
                      <input
                        type="radio"
                        name="purchaseOption"
                        value="subscription"
                      />
                    </div>
                    <div className="block rounded">
                      <p className="2xl:text-xl text-lg text-black">
                        Price $ 100.00 / Bottle (140 ml) (2 Bottles /Mo
                        <span className="block">Monthly auto ship subscription)</span>
                        <span className="block">$ 2,400.00</span>
                      </p>
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-8 mt-6">
                  <p className="2xl:text-xl text-lg text-black">
                    Options Amount <span className="block">$0</span>
                  </p>
                  <input
                    type="number"
                    className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
                  />
                  <button className="w-[178px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg">
                    <p>Add to Cart</p>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Swiper className='rounded-3xl'
                slidesPerView={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

              >
                <SwiperSlide>
                  <Image
                    width={1500}
                    height={1500}
                    className="w-full"
                    alt="logo"
                    src="/order-now/liquid-1.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={1500}
                    height={1500}
                    className="w-full"
                    alt="logo"
                    src="/order-now/liquid-2.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={1500}
                    height={1500}
                    className="w-full"
                    alt="logo"
                    src="/order-now/liquid-3.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={1500}
                    height={1500}
                    className="w-full"
                    alt="logo"
                    src="/order-now/liquid-4.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={1500}
                    height={1500}
                    className="w-full"
                    alt="logo"
                    src="/order-now/liquid-5.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={1500}
                    height={1500}
                    className="w-full"
                    alt="logo"
                    src="/order-now/liquid-6.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    width={1500}
                    height={1500}
                    className="w-full"
                    alt="logo"
                    src="/order-now/liquid-7.jpg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OrderNow;
