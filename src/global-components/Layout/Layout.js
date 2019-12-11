// Components==============
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../style/GlobalStyles";
import { OverFlowFix } from "../../style/Mixins";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

export default function Layout({ children, waardePunten, contactVoorkeur }) {
  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <OverFlowFix>
        <Nav />
        {children}
        <Footer waardePunten={waardePunten} contactVoorkeur={contactVoorkeur} />
      </OverFlowFix>
      <GlobalStyles />
    </ThemeProvider>
  );
}
