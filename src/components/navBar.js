import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';

export default () => (
    <div>
  <Navbar
  fixed="null"
  active="true"
>
  <Navbar.Brand>
    <Navbar.Item renderAs="a" href="#">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        alt="Bulma: a modern CSS framework based on Flexbox"
        width="112"
        height="28"
        />
    </Navbar.Item>
    <Navbar.Burger
      active="open"
      onClick={() =>
        this.setState(state => {
            // open: !state.open;
        })
    }
    />
  </Navbar.Brand>
  <Navbar.Menu active="">
    <Navbar.Container>
      <Navbar.Item href="#">Second</Navbar.Item>
      <Navbar.Item href="#">Third</Navbar.Item>
      <Navbar.Item href="#">Fourth</Navbar.Item>
      <Navbar.Item href="#">Fifth</Navbar.Item>
    </Navbar.Container>
    <Navbar.Container position="end">
      <Navbar.Item href="#">Contact Us</Navbar.Item>
    </Navbar.Container>
  </Navbar.Menu>
</Navbar>
    </div>
)