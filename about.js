import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-2">
          Welcome to IMR Company, your premier destination for movie rentals.
          Our mission is to provide an extensive collection of movies for you to
          enjoy from the comfort of your home.
        </p>
        <p className="mb-2">
          Founded in 2023, we have quickly grown to become a trusted name in the
          movie rental industry. Our team is dedicated to offering top-notch customer
          service and the latest movie releases.
        </p>
        <p className="mb-2">
          Contact us at <a href="mailto:support@imrcompany.com" className="text-blue-500">support@imrcompany.com</a> or visit us at
          123 Movie Lane, Filmtown, CA 90210.
        </p>
      </div>
    </Layout>
  );
};

export default About;
