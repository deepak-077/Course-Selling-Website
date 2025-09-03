import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 

function Landing3(){

    useEffect(()=>{
            AOS.init({
                duration:1500,
                once:true
            })
        },[])
    
    return(
        // see the mt on dual screen
        <main className="flex mt-8 sm:mt-10 md:mt-20 lg:mt-36 flex-col-reverse sm:flex-row items-center justify-between">

            {/* left component */}
            <div className='flex flex-col items-center w-1/2 ml-[5%]'>

                {/* gradient border button */}
                <div className='relative text-xs sm:text-sm md:text-lg sm:max-w-[220px] w-full h-12 bg-gradient-to-t from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <img className='size-5' src="/diamond.png" alt="diamond image" />
                        Book Your Slots Now
                    </div>

                </div>

                {/* Main heading */}
                <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-semibold tracking-wider text-center my-4 sm:my-6 md:my-8">
                    Start Your Web and Web3 Journey
                    <br />
                    With Us
                </h1>

                {/* description */}
                <p className="text-base text-center sm:text-2xl text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
                    Join Our courses and get the firsthand knowldege about web and web3
                </p>

                {/* buttons */}
                <div className="flex justify-center gap-5 mt-8 sm:mt-10 md:mt-12">
                
                    <a className=" flex items-center gap-1 border border-[#2a2a2a] px-2 py-2 sm:py-3 xs:px-8 sm:px-10 rounded-full text-xs xs:text-sm md:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white" href="#">
                        View Courses
                        <img className='size-3 sm:size-5' src="degree.png" alt="" />
                    </a>
                </div>

            </div>

            {/* right component */}
            <div className='relative w-full md:w-1/2 h-[350px] sm:h-[400px] md:static overflow-hidden'>
                <Spline data-aos="zoom-in" data-aos-duration='2000' className='absolute md:top-[7%] top-0 bottom-0 sm:left-[-2%] md:left-[25%]  h-full  sm:h-[350px]' scene="https://prod.spline.design/QX5BCzfuWlnTeMDy/scene.splinecode" />
            </div>

            </main>
        )


}

export default Landing3;