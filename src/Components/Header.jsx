import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar {...args}>
        <NavbarBrand href="/">MyMealPlan</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Subscriptions</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Cart</NavbarText>
        </Collapse>
      </Navbar>
  );
}

export default Header;