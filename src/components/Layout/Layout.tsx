"use client";

import { PropsWithChildren, ReactNode, Suspense } from "react";
import { Footer, Header, Navbar, Spinner } from "..";
import { theme } from "../../store/theme/selectors";
import { createStructuredSelector } from "reselect";
import { connect, ConnectedProps } from "react-redux";

interface Props extends Connector {
  children: ReactNode;
}

// interface Props extends PropsWithChildren {}

const Layout: React.FC<Props> = ({ children, theme }) => {
  return (
    <Suspense fallback={<Spinner isLoading={true} />}>
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
    </Suspense>
  );
};

const mapStateToProps = createStructuredSelector({
  theme: theme,
});

const connector = connect(mapStateToProps);
type Connector = ConnectedProps<typeof connector>;

export default connector(Layout);
