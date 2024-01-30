import Header from '../../Components/Header-Footer/Header';
import Footer from '../../Components/Header-Footer/Footer';
import { ParallaxBanner } from 'react-scroll-parallax';
import img1 from '../../Assets/home1.jpg';
import img2 from '../../Assets/welcome.png'

export const Dashboard = () => {
  return (
    <div className="grid  grid-cols h-[1500px] w-screen overflow-x-hidden">
      <ParallaxBanner
      layers={[
        { image: img1, speed: -20 },
        { image: img2, speed: -10 },
      ]}
      className="aspect-[2/1]"
    >
        <Header/>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-thin">Hello World!!</h1>
      </div>
    </ParallaxBanner>
        <div className='home bg-violet-500 h-[800px] flex justify-center items-center' >
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
        <Footer/>
        </div>
      </div>
  )
}
