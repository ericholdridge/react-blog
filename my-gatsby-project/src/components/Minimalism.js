import { StaticQuery } from "gatsby";
import React from "react";
import Container from "./ReusableComponents/Container";
import Heading from "./ReusableComponents/Heading";

const Minimalism = () => {
  return (
    // <StaticQuery
    //   query={graphql`
    //     query {

    //     }
    //   `}
    // />
    <section className="minimalism">
      <Container>
        <Heading title="Minimalism" />
      </Container>
    </section>
  );
};

export default Minimalism;
