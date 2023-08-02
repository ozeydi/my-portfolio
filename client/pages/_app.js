import { UserProvider } from "@auth0/nextjs-auth0/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />{" "}
    </UserProvider>
  );
}
