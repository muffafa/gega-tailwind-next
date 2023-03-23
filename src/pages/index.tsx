import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Movies from "@/components/movies";
import Matrix from "@/components/matrix";
import Blogs from "@/components/blogs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Movies />
      <Matrix />
      <Blogs />
    </>
  );
}
