"use client";

import { PropsWithChildren, ReactNode } from "react";
import { Footer, Header, Navbar } from "..";
import { theme } from "../../store/theme/selectors";
import { createStructuredSelector } from "reselect";
import { connect, ConnectedProps } from "react-redux";

interface Props extends Connector {
  children: ReactNode;
}

// interface Props extends PropsWithChildren {}

const Layout: React.FC<Props> = ({ children, theme }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <>
        <Header />
        <Navbar />
      </>
      <div
        className={`flex-auto ${
          theme === "light" ? "layout__light" : "layout__dark"
        }`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  theme: theme,
});

const connector = connect(mapStateToProps);
type Connector = ConnectedProps<typeof connector>;

export default connector(Layout);
