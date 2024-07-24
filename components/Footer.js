import React from 'react'; // Import React library

/**
 * Footer component that displays company information and contact details.
 * @returns {JSX.Element} - The rendered footer component.
 */

const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4 text-center text-white">
        <div className="container mx-auto">
          <p>&copy; 2023 Internet Movies Rental Company</p>
        </div>
        <div className="mb-4 text-left">
            <p>
                <p className='font-bold'>Address:</p>
                123 Movie Lane, Filmtown<br />
                Calgary, AB, T1K 1L3
            </p>
        </div>
        <div className="mb-4 text-left">
            <p>
                <p className='font-bold'>Contact Information:</p>
                Phone: (338) 456-7890<br />
                Email: <a href="mailto:support@imrcompany.com" className='text-white hover:text-blue-500'>support@imrcompany.com</a>
            </p>
        </div>
        <div>
            <p>
                Follow Us:<br />
                <a href="https://facebook.com/abchighschool" className="text-white hover:text-blue-500 ml-2">Facebook</a>, 
                <a href="https://twitter.com/abchighschool" className="text-white hover:text-blue-500 ml-2">Twitter</a>, 
                <a href="https://instagram.com/abchighschool" className="text-white hover:text-blue-500 ml-2">Instagram</a>
            </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
