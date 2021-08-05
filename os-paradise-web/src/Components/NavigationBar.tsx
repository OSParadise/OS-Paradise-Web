import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import logo from "../Images/logo.gif";
import { ExternalNavbarLink } from "../StyledComponents/ExternalNavbarLink";

/**
 * Render component for the navigation bar.
 */
function NavigationBar() {
  return (
    <Navbar style={{ backgroundColor: "#202225", paddingRight: "5px", paddingLeft: "20px" }} dark expand="md">
      <NavbarBrand href="/">
        <img src={logo} alt="logo" width="35px" />
      </NavbarBrand>
      <Nav className="mr-auto" style={{ flex: 1 }} navbar>
        <NavItem>
          <ExternalNavbarLink href="http://gg.gg/os-paradise">
            Discord <FontAwesomeIcon icon={faDiscord} />
          </ExternalNavbarLink>
        </NavItem>
        <NavItem className="ml-auto">
          <ExternalNavbarLink href="https://github.com/OSParadise/OS-Paradise-Web">
            GitHub Source{" "}
            <span role="img" aria-label="hacker cat">
              🐱‍💻
            </span>
          </ExternalNavbarLink>
        </NavItem>
      </Nav>
      <ExternalNavbarLink href="https://github.com/EchoFrost">
        EchoFrost{" "}
        <span role="img" aria-label="heart">
          💜
        </span>
      </ExternalNavbarLink>
    </Navbar>
  );
}

export default NavigationBar;
