
"use client";
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">バイオインフォマティクス技術者認定試験対策サイト</h1>
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link href="#" className="hover:text-gray-400">過去問解説</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">過去問道場</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">ログイン</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">サインイン</Link>
          </li>
          <li>
            <Image src="/path/to/account/image.jpg" alt="Account" width={32} height={32} className="rounded-full"/>
          </li>
        </ul>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars className="text-2xl"/>
          </button>
        </div>
      </nav>
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600">過去問解説</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600">過去問道場</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600">ログイン</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600">サインイン</Link>
            </li>
            <li>
              <Image src="/path/to/account/image.jpg" alt="Account" width={32} height={32} className="rounded-full mx-4 my-2"/>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
