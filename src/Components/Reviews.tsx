import React from "react"
import { CardCarousel } from "@/Components/ui/card-carousel"

const Reviews = () => {
  const images = [
    { src: "apple.png", alt: "Image 1" },
    { src: "youtube.png", alt: "Image 2" },
    { src: "netflix.png", alt: "Image 2" },
    
  ]

  return (
    <div className="w-full relative">
       
      {/* blur effect */}
      <div className='h-0 w-[80vw] max-w-[640px] absolute top-[20%] right-[-5%] shadow-[0_0_900px_40px_#270A84] -rotate-[20deg] -z-10' />
      
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default Reviews
