import { UserProvider } from "@auth0/nextjs-auth0/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

export default function App({ Component, pageProps }) {
  console.log(process.env.AUTH0_CLIENT_ID);
  return (
    <UserProvider>
      <Component {...pageProps} />{" "}
    </UserProvider>
  );
}
