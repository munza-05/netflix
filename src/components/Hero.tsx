import {BsArrowRight} from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
      <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
    <img className="w-full h-full object-cover rounded-lg" src="https://celebwell.com/wp-content/uploads/sites/2/2024/03/shutterstock_1096038863.jpg?quality=82&strip=all&w=640" alt="hero image"/>
    <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 text-left">
        <p className="text-[20px] hidden sm:block">100% Original Dry Fruits</p>
        <h2 className="text-2xl sm:text-[45px] md:text-6xl font-bold">Dried Fruits Best Healthy</h2>
        <p className="text-gray-500 text-xl pt-4 sm:pt-4">Starting At</p>
        <div className="font-bold text-red-600 text-3xl sm:text-4xl pb-4 sm:pb-8">$18.36</div>
        <div className="bg-[#00563f] hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer mr-[20px]">
            Shop Now <BsArrowRight />
        </div>
    </div>
</div>

<div className="relative">
  <img className="w-full h-full rounded-lg object-cover" src="https://th.bing.com/th/id/R.3c49c2cd0ca588e105a90991824a599b?rik=cXtm88xiTvVWuw&riu=http%3a%2f%2fthehouseandhomemagazine.com%2fdownloads%2f248%2fdownload%2fiStock-184340300.jpg%3fcb%3d0edd4dc04c871b3b015b9b957aa78dd9%26w%3d1200&ehk=98%2bzMVkgvHhkoqkryX%2bLZxBTWmZjWr3O4B4Rmd02cXo%3d&risl=&pid=ImgRaw&r=0" alt="hero1"/>
  <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[60%] -translate-y-[50%] sm:space-y-4 text-left">
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">Best Yummy Pizza</h2>
    <p className="text-lg sm:text-xl pt-2 sm:pt-2">Starting At</p>
    <div className="font-bold text-red-600 text-xl sm:text-2xl pb-2 sm:pb-4">$25</div>
    <div className="bg-[#3cb371] hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-1 text-[14px] cursor-pointer">
      Shop Now <BsArrowRight />
    </div>
  </div>
</div>


   
   <div className="relative">
   <img className="w-full h-full rounded-lg object-cover" src="https://www.pacagemockup.com/wp-content/uploads/2020/10/2-728x582.jpg" alt="hero2"/>
   <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[60%] -translate-y-[50%] sm:space-y-4 text-left">
    <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold">Best Yummy Chips</h2>
    <p className="text-lg sm:text-xl pt-2 sm:pt-2">Starting At</p>
    <div className="font-bold text-red-600 text-xl sm:text-2xl pb-2 sm:pb-4">$10</div>
    <div className="bg-[#3cb371] hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-1 text-[14px] cursor-pointer">
      Shop Now <BsArrowRight />
    </div>
  </div>
   </div>
      </div>
      </div>
  )
  }

export default Hero;
