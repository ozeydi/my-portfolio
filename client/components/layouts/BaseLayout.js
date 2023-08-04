import Header from "../shared/Header";

const BaseLayout = (props) => {
  const { className, children, navbarClass = "with-bg", user, loading } = props;
  return (
    <div className="layout-container">
      <Header className={navbarClass} user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
