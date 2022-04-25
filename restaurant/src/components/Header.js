import React, {useState} from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,  } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const nav = useNavigate();
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
            <NavLink onClick={()=>nav('/about')}>
              About 
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={()=>nav('/contact')}>
              Contact
            </NavLink>
          </NavItem>
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