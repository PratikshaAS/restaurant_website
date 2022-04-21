import React, {useState} from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,  } from 'reactstrap'
const Header = () => {
    const [navopen, setnavopen] = useState(false);
  return (<div>
    <Navbar
      color="dark"
      expand="md"
      dark
    >
      <NavbarBrand href="/">
        Restaurant
      </NavbarBrand>
      <NavbarToggler onClick={()=>setnavopen(!navopen)} />
      <Collapse isOpen={navopen} navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/components/">
              Components
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          {/* <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        {/* <NavbarText>
          Simple Text
        </NavbarText> */}
      </Collapse>
    </Navbar>
  </div>
  )
}

export default Header