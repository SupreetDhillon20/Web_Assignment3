

const About = () => {
  return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        
        {/* Company Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Company Overview</h2>
          <p className="mb-4">
            Welcome to IMR Company, your premier destination for movie rentals. Our mission is to provide an extensive collection of movies for you to enjoy from the comfort of your home.
          </p>
          <p className="mb-4">
            Founded in 2023, we have quickly grown to become a trusted name in the movie rental industry. Our team is dedicated to offering top-notch customer service and the latest movie releases.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            At IMR Company, our mission is to revolutionize the movie rental experience by providing an easy-to-use platform with a vast selection of films. We strive to exceed customer expectations through exceptional service and a commitment to excellence.
          </p>
        </section>

        {/* Our Team */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">John Doe - CEO</h3>
              <p className="mb-2">
                John has over 20 years of experience in the entertainment industry and is passionate about delivering high-quality movie experiences to our customers.
              </p>
            </div>
            <div className="border rounded-md p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Jane Smith - COO</h3>
              <p className="mb-2">
                Jane oversees daily operations and ensures that our services run smoothly. Her attention to detail and dedication to customer satisfaction are key to our success.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">What Our Customers Say</h2>
          <div className="border rounded-md p-4 shadow-lg mb-4">
            <p className="italic">
              "IMR Company has transformed the way I watch movies. The selection is fantastic, and the service is unparalleled!" - Alex Johnson
            </p>
          </div>
          <div className="border rounded-md p-4 shadow-lg">
            <p className="italic">
              "I love the convenience of renting movies online. IMR Company makes it easy to find and enjoy my favorite films." - Emily Davis
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-2">
            Contact us at <a href="mailto:support@imrcompany.com" className="text-blue-500">support@imrcompany.com</a> or visit us at
            123 Movie Lane, Filmtown, CA 90210.
          </p>
        </section>
      </div>
  );
};

export default About;

