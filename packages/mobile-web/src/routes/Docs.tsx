import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import Block from '../components/Block';
import FullCard from '../components/FullCard';
import MobileHeader from '../components/Header';
import { getDataById } from '../lib/data';

export const docsLoader: LoaderFunction = async ({ request }) => {
  const path = new URL(request.url).pathname.split('/');
  const docsId = path[path.length - 1];
  return { docsId };
};

interface LoaderResult {
  docsId: number | string;
}

function Docs() {
  const { docsId } = useLoaderData() as LoaderResult;
  const data = getDataById(Number(docsId));

  return (
    <>
      <MobileHeader title={<div>Docs</div>} />
      <Block>
        <FullCard>
          {docsId}. {data.title}
          <Outlet />
        </FullCard>
      </Block>
    </>
  );
}

export default Docs;
