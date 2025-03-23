import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <NavLink>
              <Link to={"/shop"}>
                Shop
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to={'/services'}>
                Services
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to={"/subscriptions"}>Subscriptions</Link>
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>
          <Link to={'/cart'}>Cart</Link>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
}

export default Header;