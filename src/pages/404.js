// Components==============
import { Container, flexUnit } from "mixins";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
// =========================

const Smiley = styled.p`
  ${flexUnit(2.4, 40, 50, "vw", "font-size")}
  margin-top: ${({ theme: { spacing } }) => spacing.s3};;
`;

const Container404 = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export default function notFound() {
  return (
    <Layout>
      <Head
        title="404 NOT FOUND"
        description="Could not found the page you where looking for"
        keywords="404, unavailable, not found"
      />
      <Container404>
        <h2>I could not find what you where looking for</h2>
        {/* eslint-disable-next-line */}
        <Smiley>😟</Smiley>
      </Container404>
    </Layout>
  );
}
