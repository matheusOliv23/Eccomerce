import type { GetServerSideProps } from "next";
import Head from "next/head";
import CardProduct from "../components/CardProduct/CardProduct";
import { ProductsRequest } from "../models/Products";
import { api } from "../services/api";
import styles from "../styles/Home.module.scss";

interface Products {
  products: ProductsRequest;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const service = await api.get("/products");
  const products = await service.data;

  return {
    props: { products },
  };
};

const Home = ({ products }: Products) => {
  return (
    <>
      <Head>
        <title>My Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {products.products.map((product, index) => (
          <div key={index}>
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
