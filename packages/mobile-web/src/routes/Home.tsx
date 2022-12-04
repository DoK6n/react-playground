import { LoaderFunction, Outlet } from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';

export const homeLoader: LoaderFunction = async ({ request }) => {
  // const url = new URL(request.url);
  return {};
};

function Home() {
  return (
    <>
      <MobileHeader title={<div>Home</div>} />
      <Block>
        <Outlet />
      </Block>
      <Footer />
    </>
  );
}

export default Home;
