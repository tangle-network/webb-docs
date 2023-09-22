import { Navbar } from "nextra-theme-docs";

function Navigation(props) {
  // items last to override the default
  return <Navbar {...props} />;
}

export default Navigation;
