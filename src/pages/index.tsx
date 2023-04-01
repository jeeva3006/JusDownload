import Head from 'next/head';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState, dispatch } from '~/state/store';
import { fetchPosts } from '~/state/duck/post';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const { posts, loading } = useSelector((state: AppState) => state.posts);
  useEffect(() => { dispatch(fetchPosts(3)); }, []);

  return (
    <>
      <Head>
        <title>JusDownload</title>
        <meta name='description' content='JusDownload' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <h1 className='text-3xl font-bold underline'>
          Hello Build
        </h1>
        {loading ? <>Loading...</> : <>{posts?.title}</>}
        <div>
          <button onClick={() => dispatch(fetchPosts(6))}>click</button>
        </div>
      </main>
    </>
  );
};

export default memo(Home);