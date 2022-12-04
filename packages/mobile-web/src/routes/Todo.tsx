import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import Block from '../components/Block';
import Button from '../components/Button';
import Card from '../components/Card';
import Footer from '../components/Footer';
import GoDocsButton from '../components/GoDocsButton';
import MobileHeader from '../components/Header';
import { data, DataType } from '../lib/data';

export const todoLoader: LoaderFunction = async ({ request }) => {
  return { data };
};

interface LoaderResult {
  data: DataType[];
}

function Todo() {
  const { data } = useLoaderData() as LoaderResult;

  return (
    <>
      <MobileHeader title={<div>Todo</div>} />
      <Block>
        {data ? (
          data?.map(d => (
            <Card key={d.id}>
              {d.title}
              <GoDocsButton id={d.id} />
            </Card>
          ))
        ) : (
          <Outlet />
        )}
      </Block>
      <Footer />
    </>
  );
}

export default Todo;
