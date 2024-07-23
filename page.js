import '../globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import Layout from '../components/Layout';

const Page = () => {
  return (
    <Layout>
      {/* Your page content */}
    </Layout>
  );
};

export default Page;

