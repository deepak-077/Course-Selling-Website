import { useState } from 'react';

function Header(){
    const [clicked,setClicked]= useState(false);

    function handleClick(){
        setClicked(prev=>!prev)
    }
    return(
        <header className="flex justify-between items-center px-2 py-2 sm:py-4 sm:px-4 lg:px-20">
            <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-light m-0">
                100XDevs
            </h1>

            {/* navbar */}
            <nav className="hidden md:flex items-center gap-12 ">
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">COMPANY</a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">FEATURES</a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">RESOURCES</a>
                <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">DOCS</a>
            
            </nav>

            <div className='flex gap-4'>
                <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">SIGN UP</button>
                <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">LOG IN</button>
            </div>
           
            {/* moibile menu button */}
            <button onClick={handleClick} className='md:hidden text-3xl p-2 z-50'>
                <img src="/menu.png" alt="" />
            </button>

            {/* mobile navbar */}
            {clicked &&
            <div id="mobileMenu" className='fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md'>    
                <nav className='flex flex-col gap-6 items-center'>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">COMPANY</a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">FEATURES</a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">RESOURCES</a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="">DOCS</a>
                </nav>
            </div>
            }
            

        </header>
    )

}
export default Header;