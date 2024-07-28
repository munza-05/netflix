
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const cartItemCount = 0; 

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">E-commerce Store</div>
          <div className="relative w-full max-w-[400px] hidden sm:block">
            <input className="bg-[#f2f3f5] border-none outline-none px-3 py-3 rounded-[30px] w-full" type="text" placeholder="Search product..." />
            <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />
          </div>
          <div className="flex gap-4">
            <div className="icon__wrapper relative">
              <AiOutlineUser size={24} />
            </div>
            <div className="icon__wrapper relative">
              <AiOutlineShoppingCart size={24} />
              <span className="absolute top-2 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartItemCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

