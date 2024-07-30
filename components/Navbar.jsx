// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-white text-xl font-bold">MySite</a>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <a className="text-gray-300 hover:text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-300 hover:text-white">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-300 hover:text-white">Contact</a>
          </Link>
        </div>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
