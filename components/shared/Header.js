import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="about/" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/portfolios" legacyBehavior>
        <a>Portfolios</a>
      </Link>
      <Link href="/blogs" legacyBehavior>
        <a>Blogs</a>
      </Link>
      <Link href="/cv" legacyBehavior>
        <a>Cv</a>
      </Link>
    </>
  );
};

export default Header;
