import { useRouter } from "next/router";
import { Navbar } from "nextra-theme-docs";

function Navigation(props) {
  const router = useRouter();

  // items last to override the default
  return <Navbar {...props} />;
}

export default Navigation;
