import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import bannerRosa from '../../public/images/home/banner_rosa.jpg';
import Home2 from '../components/Home2';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="mb-4">
        <Image alt="banner rosa" src={bannerRosa} />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
        <h1 className="text-white text-7xl font-bold">Hacemos que tus finanzas no</h1>
        <h1 className="text-white text-7xl font-bold">te quiten el sueño</h1>
        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Botón 1</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Botón 2</button>
        </div>
      </div>
      <Home2 />
    </div>
  );
}
