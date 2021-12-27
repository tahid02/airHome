import Banner from "components/home/Banner";
import Header from "components/home/Header";
import Main from "components/home/Main";
import Footer from "components/shared/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>airHome</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}
