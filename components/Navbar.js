import Link from 'next/link'; // Import Link component from Next.js for client-side navigation

/**
 * Navbar component that displays navigation links for the application.
 * @returns {JSX.Element} - The rendered navbar component with navigation links.
 */

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
              <a className="text-white hover:text-gray-400">Movies List</a>
            </Link>
          </li>
          <li>
            <Link href="/add-movie">
              <a className="text-white hover:text-gray-400">Add Movie</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white hover:text-gray-400">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-gray-400">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
