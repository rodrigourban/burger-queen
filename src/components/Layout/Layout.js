import React from "react";
import Aux from "../../hoc/Auxi";
import styled from "styled-components";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Content = styled.main`
  margin-top: 72px;
`;

class Layout extends React.Component {
  state = {
    sideDrawer: false
  };

  toggleDrawer = () => {
    this.setState(prevState => {
      return { sideDrawer: !prevState.sideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.toggleDrawer} />
        <SideDrawer open={this.state.sideDrawer} toggle={this.toggleDrawer} />
        <Content>{this.props.children}</Content>
      </Aux>
    );
  }
}

export default Layout;
