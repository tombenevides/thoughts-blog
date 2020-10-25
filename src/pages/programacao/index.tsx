import React from 'react';
import Head from 'next/head';
import matter from 'gray-matter';
import Link from 'next/link';
import fs from 'fs';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Programacao = ({ data, title, description }) => {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
      <Navbar hrefReturn="/" articleMetaData={{ title: 'Programação' }} />
      <div className="flex flex-col justify-between py-16">
        <div className="py-5 px-2">
          <h1 className="text-center text-2xl font-bold text-accent-1 mb-6 md:text-4xl lg:text-5xl">
            Programação
          </h1>
          {ListItems.map((blog, i) => (
            <div
              key={i}
              className="bg-gray-light mx-auto my-5 rounded shadow-lg flex flex-wrap items-start lg:w-3/5"
            >
              <div
                className="w-full md:w-1/4 h-40 rounded md:rounded"
                style={{
                  backgroundImage: `url('/images/image.png')`,
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className="card-rounded-detail w-full md:hidden"></div>

              <div className="md:w-3/5 p-4 md:h-40">
                <div className="mb-8">
                  <div className="text-accent-1 font-bold text-xl mb-2">
                    <Link href={`/programacao/${blog.slug}`}>{blog.title}</Link>
                  </div>
                  <p className="text-accent-1-darker text-base">
                    {blog.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="/avatar/profile.jpg"
                    alt="Avatar of Tom Benevides"
                  />
                  <div className="text-sm">
                    <p className="text-sadgreen-dark leading-none">
                      {blog.author}
                    </p>
                    <p className="text-sadgreen-darker">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programacao;

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/programacao`, 'utf-8');

  const blogs = files.filter((fn) => fn.endsWith('.md'));
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/programacao/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: 'utf-8'
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      title: 'NextJS Blog',
      description: 'A Simple Markdown Content NextJS Blog'
    }
  };
}
