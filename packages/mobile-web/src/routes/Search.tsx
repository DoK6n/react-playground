import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import {
  LoaderFunction,
  Outlet,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import Block from '../components/Block';
import Footer from '../components/Footer';
import MobileHeader from '../components/Header';
import { searchData } from '../lib/data';
import useDebounce from '../lib/hooks/useDebounce';

export const searchLoader: LoaderFunction = async ({ request }) => {
  return { searchData: searchData };
};

interface LoaderResult {
  searchData: (qs: string) => [];
}

function Search() {
  const [data, setData] = useState([]);
  const { searchData } = useLoaderData() as LoaderResult;
  const [searchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get('q') ?? '');
  const navigate = useNavigate();
  const [debouncedSearchText] = useDebounce(searchText, 500);

  useEffect(() => {
    navigate(`/search?q=${debouncedSearchText}`);
    setData(searchData(debouncedSearchText));
  }, [debouncedSearchText, navigate]);

  return (
    <>
      <MobileHeader
        title={
          <input
            css={inputStyle}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        }
      />
      <Block>
        {data ? (
          data?.map((d, i) => (
            <div css={cardStyle} key={i}>
              {d}
            </div>
          ))
        ) : (
          <Outlet />
        )}
      </Block>
      <Footer />
    </>
  );
}

const inputStyle = css`
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: 0;
  outline: none;

  width: 60vw;
  padding-left: 2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.625rem 0.75rem;
  background-size: 1rem;
  position: relative;

  &:hover {
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  }
`;

const cardStyle = css`
  width: 100%;
  height: 4rem;
  border-radius: 12px;
  min-height: 84px;
  box-shadow: 0 0 3px rgb(0 0 0 / 15%);
  display: block;
  margin-bottom: 16px;
  padding: 2rem;
`;

export default Search;
