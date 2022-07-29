import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { GetServerSideProps } from "next";
import CardProduct from "../../components/CardProduct/CardProduct";
import Header from "../../components/Header";
import MaxContainer from "../../components/layout/MaxContainer";

import { ProductsRequest } from "../../models/Products";
import { api } from "../../services/api";
import { theme } from "../../styles/theme";

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

export default function index({ products }: Products) {
  return (
    <>
      <Header />
      <MaxContainer>
        <Grid
          sx={{
            padding: "0 2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          container
        >
          {products.products.map((product, index) => (
            <div key={index}>
              <CardProduct product={product} />
            </div>
          ))}
        </Grid>
      </MaxContainer>
    </>
  );
}
