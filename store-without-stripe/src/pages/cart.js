import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@layout/navbar/Navbar';
import Link from 'next/link';
import Cart from "@components/cart/Cart";
const CartPage = () => {

  return (
    <div>
      <Navbar />
      <Cart />
      <div className="container">
        <div class="bg-green-100 min-h-screen flex items-center justify-center p-6 mb-12">
          <div className='bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl'>
            <div>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-t border-b border-gray-200">
                  <thead>
                    <tr class="text-gray-600 uppercase text-sm">
                      <th class="py-2">Product</th>
                      <th class="py-2">Price</th>
                      <th class="py-2">Quantity</th>
                      <th class="py-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t border-gray-200">
                      <td class="py-4 flex items-center space-x-4">
                        <button class="text-gray-400 hover:text-red-500">
                          ✕
                        </button>
                        <Image
                          width={130}
                          height={130}
                          className="w-16 h-16 rounded-md border"
                          alt="logo"
                          src="/order-now/liquid-1.jpg"
                        />

                        <div>
                          <p class="font-semibold text-black">BLACK MAITAKE PROTHERA ™ MC LIQUID”</p>
                        </div>
                      </td>
                      <td class="py-4">$150</td>
                      <td class="py-4">
                        <input
                          type="number"
                          className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
                        />
                      </td>
                      <td class="py-4 font-semibold text-black">$150</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr class="border-t border-gray-200">
                      <td class="py-4 flex items-center space-x-4">
                        <button class="text-gray-400 hover:text-red-500">
                          ✕
                        </button>
                        <Image
                          width={130}
                          height={130}
                          className="w-16 h-16 rounded-md border"
                          alt="logo"
                          src="/order-now/liquid-1.jpg"
                        />

                        <div>
                          <p class="font-semibold text-black">BLACK MAITAKE PROTHERA ™ MC LIQUID”</p>
                        </div>
                      </td>
                      <td class="py-4">$150</td>
                      <td class="py-4">
                        <input
                          type="number"
                          className="w-[78px] px-4 py-2 border border-gray-300 rounded-md text-black 2xl:text-2xl text-lg"
                        />
                      </td>
                      <td class="py-4 font-semibold text-black">$150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <div class="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    class="border border-gray-300 rounded-md px-4 py-2 text-sm text-grey1"
                  />
                  <button class="bg-green text-white rounded-md px-4 py-2 hover:bg-green-700 transition">
                    <p>Apply Coupon</p>
                  </button>
                </div>

                <button class="bg-green text-white rounded-md px-6 py-2 hover:bg-green-700 transition">
                  <p>Update cart</p>
                </button>
              </div>
            </div>

            <button class="bg-green text-white rounded-md px-6 py-2 hover:bg-green-700 transition my-8 mx-auto block">
              <p>Proceed to checkout</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
