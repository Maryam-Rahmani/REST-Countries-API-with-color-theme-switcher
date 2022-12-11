import React from "react";

import { LayoutProps } from "../../types/types";
import Navbar from "../navbar/index";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};
export default React.memo(Layout);