'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const navlinks = ['Home', 'Skills', 'Work Experience','Projects', 'Achievements','Contact']
  return (
    <header className="fixed top-0 left-0 w-full z-50  ">
      <nav className="backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md px-5 py-3 ml-auto mx-2 flex items-center justify-around w-15 md:w-1/2 md:max-w-1/2  md:mx-auto rounded-2xl mt-3">


    {!isOpen &&     
           (<div className="hidden gap-6 md:flex md:items-center md:justify-around ">
          {
            navlinks.map((item) =>
                {
                    return(
                <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={` px-3 p-1 rounded-3xl  text-white text-s hover:bg-primary hover:text-black transition`}
                >
                {item}
                </Link>
            )})
          }
        </div>)
    }

        <div className="flex-1 flex bg-red  md:hidden">
          <button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md p-4 flex flex-col items-center space-y-4 rounded-b-2xl">
          {navlinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-300 transition text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;