import React from "react";
import Aux from "../../hoc/Auxi";
import styled from "styled-components";

const Content = styled.main`
  margin-top: 16px;
`;

const Layout = props => {
  return (
    <Aux>
      <div>Nav y otras cosas</div>
      <Content>{props.children}</Content>
    </Aux>
  );
};

export default Layout;
