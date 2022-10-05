import "bootstrap/dist/css/bootstrap.min.css";
import "assets/styles/main.css";
import MainLayout from "layout/MainLayout/MainLayout";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
