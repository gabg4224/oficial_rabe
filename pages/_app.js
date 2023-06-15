import ContextWrapper from "@/components/contextWrapper";
import "@/styles/globals.css";
import MainLayout from "./MainLayout";
import "styles/menu.css"
export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextWrapper>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ContextWrapper>
    </>
  );
}
