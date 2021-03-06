import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import MetaData from '../components/MetaData';

const Index = ({ title, description }) => {
  const router = useRouter();

  return (
    <>
      <MetaData title={title} description={description} />
      <div className="flex justify-center pt-4">
        <p className="text-lg text-bold text-accent-1 text-bold">
          <Link href="https://twitter.com/tongedev"> Twitter </Link>—
          <Link href="https://instagram.com/tomb.dev"> Instagram </Link>—
          <Link href="https://dev.to/tombenevides"> Dev.to </Link>—
          <Link href="https://patreon.com/tombenevides"> Patreon </Link>—
          <Link href="https://github.com/tombenevides"> Github </Link>
        </p>
      </div>
      <h1 className="text-center text-2xl font-bold text-accent-1 mb-6 md:text-4xl lg:text-5xl py-8">
        Cogitare.Press
      </h1>
      <div className="w-screen flex place-items-auto bg-gray-100 py-8">
        <div className="w-full mx-auto">
          <div className="mx-auto my-5 flex flex-col rounded-md items-center lg:w-2/5 py-8">
            <div className="w-full text-center mx-auto">
              <button
                type="button"
                onClick={() => router.push('/tecnologia')}
                className="border border-accent-1 bg-accent-1 text-white text-xl text-bold rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-accent-1-darker focus:outline-none focus:shadow-outline"
              >
                Tecnologia
              </button>
              <button
                type="button"
                onClick={() => router.push('/dicas')}
                className="border border-accent-1 bg-accent-1 text-white text-xl rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-accent-1-darker focus:outline-none focus:shadow-outline"
                // className="border border-gray bg-gray text-white text-xl rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
              >
                Dicas
              </button>
              <button
                type="button"
                // onClick={() => router.push('/reflexoes')}
                // className="border border-accent-1 bg-accent-1 text-white text-xl rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-accent-1-darker focus:outline-none focus:shadow-outline"
                className="border border-gray bg-gray text-white text-xl rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline"
              >
                Outros assuntos legais
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  return {
    props: {
      title: 'Blog - cogitare.press',
      description: 'Um simples blog para compartilhar conhecimento'
    }
  };
}
