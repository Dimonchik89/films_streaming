import { PropsWithChildren } from "react";
import { Container, Footer, Header, Navbar } from "..";

interface Props extends PropsWithChildren {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <>
        <Header />
        <Navbar />
      </>
      <div className="flex-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
