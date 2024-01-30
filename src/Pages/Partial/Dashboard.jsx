import Header from '../../Components/Header-Footer/Header';
import Footer from '../../Components/Header-Footer/Footer';
import { FaTruckFast } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";

export const Dashboard = () => {
  return (
    <div className="grid  grid-cols h-[1500px] w-screen overflow-x-hidden">
      <Header />
      <div className='home bg-violet-500 h-[800px] flex flex-col justify-center' >
        <div className='flex flex-col'>
          <div className='bg-transparent flex flex-col ml-[90px]'>
            <span className='font-serif font-bold text-[50px] text-white'>Order Food</span>
            <span className='font-serif font-bold text-[50px] text-white'>The Easy Way</span>
            <span className='text-white mb-[25px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam odio error quidem! Libero, voluptate officiis. Ab nulla!</span>
            <div>
              <input type="text" placeholder='Enter your street and house number' className='h-[55px] rounded-[15px] w-[500px] p-5 mr-[25px] text-[20px] focus:outline-none focus:shadow-none' />
              <span className='bg-red-500 p-3 rounded-[10px] text-[20px] text-white'>Find Food</span>
            </div>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className='bg-white p-[20px] w-screen' >
        <div className='grid grid-cols-4 gap-14 h-[400px] mx-[20px] p-[10px]'>
          <div className='rounded-[30px] flex flex-col justify-center items-center bg-white'>
            <FaTruckFast className='h-[50px] w-[60px]' />
            <span>Fast Delivery</span>
            <span className='border-t-[5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum, asperiores eligendi, enim laboriosam doloremque saepe numquam beatae aperiam possimus debitis dolorem est reiciendis corporis. Dolore recusandae natus impedit quia.</span>
          </div>
          <div className='rounded-[30px] flex flex-col justify-center items-center bg-white '>
            <IoFastFoodOutline className='h-[50px] w-[60px]' />
            <span>Dine-In</span>
            <span className='border-t-[5px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, totam libero laborum quo voluptatibus ullam, necessitatibus blanditiis est, architecto odio magnam dicta. Sunt, iusto ipsam! Eos dolores quibusdam nisi. Minima?</span>
          </div>
          <div className='rounded-[30px] flex flex-col justify-center items-center bg-white '>
            <FaTruckFast className='h-[50px] w-[60px]' />
            <span>Pick-Up</span>
            <span className='border-t-[5px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus sint voluptates vero assumenda corporis esse earum omnis rerum, quam, quos distinctio eius nemo perspiciatis, facere velit ipsam! Unde, similique?</span>
          </div>
          <div className='rounded-[30px] flex flex-col justify-center items-center bg-white '>
            <FaTruckFast className='h-[50px] w-[60px]' />
            <span>Smooth Transaction</span>
            <span className='border-t-[5px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa beatae nemo corrupti amet impedit ab perferendis esse error maiores enim, at commodi earum similique molestias sed, asperiores deleniti porro nostrum?</span>
          </div>
        </div>
      </div>
      {/* Image here */}
      <div className=" bg-sky-500 h-[773px] p-6 ">
        {/* //grid start here */}
        <div className="grid grid-cols-4 gap-5 h-[600px] w-[1490px] mx-[20px] mb-[20px] p-[20px] mt-[90px]">
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Best Seller</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Family Meals</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Breakfast</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Chickenjoy</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Burgers</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Jolly Spaghetti</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Burger steak</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Super Meals</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Chicken Sandwhich</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Spaghetti</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Desserts</span>
          </div>
          <div className="rounded-[30px] flex flex-col justify-center items-center bg-slate-500 ">
            <span>Beverages</span>
          </div>
        </div>
      </div>
      <div className='grid grid-col '>
        <Footer />
      </div>
    </div>
  )
}
