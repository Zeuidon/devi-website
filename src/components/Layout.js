import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
       <header className="bg-[#F4D19C] py-4 px-6 md:px-10">
       <nav className="container mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="flex justify-center items-center w-full md:w-auto">
            <Link to="/">
              <img 
                src="/devi_logo-removebg.png" 
                alt="Logo" 
                className="h-12 sm:h-18 md:h-24 lg:h-24 xl:h-28 transition-all duration-300"
              />
            </Link>
            {/* <h1 className="text-[#73320D] font-bold text-2xl">DEVI</h1> */}
          </div>
          <ul className="grid grid-cols-2 gap-4 text-center md:flex md:flex-row md:space-x-6 text-[#73320D] mt-4 md:mt-0">
            <li className="hidden md:block"><Link to="/" className="hover:text-[#6A5ACD]">Home</Link></li>
            <li><Link to="/products" className="hover:text-[#6A5ACD]">Products</Link></li>
            <li><Link to="/about" className= "hover:text-[#6A5ACD]">About</Link></li>
            <li><Link to="/comingSoon" className="hover:text-[#6A5ACD]">Stories</Link></li>
            <li><Link to="/contact" className="hover:text-[#6A5ACD]">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#A7C4BC] py-8 text-center">
        <div className="container mx-auto">
          <p className="text-[#73320D]">© 2024 DEVI. Empowering Women, Sustaining the Planet.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-[#73320D] hover:text-[#6A5ACD]">Privacy Policy</a>
            <a href="#" className="text-[#73320D] hover:text-[#6A5ACD]">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
