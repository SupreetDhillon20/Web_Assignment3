import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">IMR Company</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/movies">
              <span className="text-white hover:text-gray-400">Movies List</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-white hover:text-gray-400">About Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
