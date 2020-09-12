import React from "react";

import Footer from "./styles";
import LinkGF from "../../components/LinkGF";
import LogoGF from "../../components/LogoGF";

const FooterGF = () => (
  <Footer>
    <LogoGF />
    <p>
      Projeto criado por
      <LinkGF
        href="https://github.com/DaviQuental"
        target="_blank"
        aria-label="name"
      >
        Davi Quental
      </LinkGF>
    </p>
  </Footer>
);

export default FooterGF;
