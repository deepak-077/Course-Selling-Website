import Spline from '@splinetool/react-spline';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 
import FlipLink from './ui/text-effect-flipper';

function ML(){

    useEffect(()=>{
            AOS.init({
                duration:1500,
                once:true
            })
        },[])
    
    return(
        // see the mt on dual screen
        <main className="relative flex mt-8 sm:mt-10 md:mt-20 lg:mt-36 flex-col-reverse sm:flex-row items-center justify-between">
            
            {/* blur effect */}
            <div className='h-0 w-[80vw] max-w-[640px] absolute top-[20%] left-[10%] shadow-[0_0_900px_40px_#270A84] -rotate-[20deg] -z-10' />
            <div className='h-0 w-[80vw] max-w-[640px] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#FFA500] -rotate-[30deg] -z-10' />
      
             
                    
            {/* left component */}
            {/* left component */}
            <div className='flex flex-col items-center w-1/2 gap-6 '>
                <div className='flex flex-col gap-4 mb-5'>
                    <FlipLink href="#"> MACHINE- LEARNING</FlipLink>
                </div>

                {/* gradient border button */}
                <div className='relative text-xs sm:text-sm md:text-lg sm:max-w-[150px] w-full h-12 bg-gradient-to-t from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                    
                        Key Features
                    </div>

                </div>

                <div className='flex flex-col gap-4'>
                    <FlipLink href="#"> Projects</FlipLink>
                </div>
            </div>

            {/* right component */}
            <div className='relative w-full md:w-1/2 h-[350px] sm:h-[400px] md:static overflow-hidden'>
                <Spline data-aos="zoom-in" data-aos-duration='2000' className='absolute  top-0 bottom-0 sm:left-[-2%] md:left-[25%]  h-full  sm:h-[350px]' scene="https://prod.spline.design/m5HNOskOhNg5qyRV/scene.splinecode" /> 
    
            </div>

            </main>
        )


}

export default ML;