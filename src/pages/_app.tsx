import { AppProps } from "next/app";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={open_sans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
