import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { LoaderFunction, Outlet, useLoaderData } from 'react-router-dom';
import Block from '../components/Block';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { data } from '../lib/data';

export const todoLoader: LoaderFunction = async ({ request }) => {
  return { data };
};

interface LoaderResult {
  data: [] | null;
}

function Todo() {
  const { data } = useLoaderData() as LoaderResult;
  const navigate = useNavigate();

  const goDocs = (i: number) => {
    navigate(`/docs/${i}`);
  };

  return (
    <>
      <MobileHeader title={<div>Todo</div>} />
      <Block>
        {data ? (
          data?.map((d, i) => (
            <Card key={i}>
              {d}
              <button css={docsButtonStyle} onClick={() => goDocs(i)}>
                Docs
              </button>
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

const docsButtonStyle = css`
  padding: 0.4rem;
  color: gainsboro;
  border-radius: 6px;
  background-color: slategray;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px rgb(0 0 0 / 30%);
  }
  &:active {
    background-color: #708090e5;
  }
`;

export default Todo;
