import {BsArrowRight} from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
      <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
        <img className="w-full h-full object-cover rounded-lg" src="https://celebwell.com/wp-content/uploads/sites/2/2024/03/shutterstock_1096038863.jpg?quality=82&strip=all&w=640" alt="hero image"/>
        <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y- [50%] sm:space-y-4">
<p className="text-3x1 hidden sm:block" >100% Original Dry Fruits </p>
<h2 className="text-2x1 sm:text-4x] md: text-6x1 font-bold">Dried Fruits Best Healthy
</h2>
<p className="Eltext-gray-500 text-xl pt-4 sm:pt-8"> Starting At</p>
<div className="font-medium Otext-red-600 text-2x1 sm:text-4x1 pb-4 sm: pb-8">
$18.36
</div>
<div className="bg-accentDark _hover: bg-accent _text-white rounded-full w-fit flex items-center
gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
Shop Now <BsArrowRight />
</div>
</div>
</div>
      </div>
      </div>
  )
  }

export default Hero
