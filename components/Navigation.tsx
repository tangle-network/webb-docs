import { useRouter } from "next/router";
import { Navbar } from "nextra-theme-docs";

function Navigation(props) {
  const router = useRouter();

  /*
    Inject a dynamic docs link when NOT on root
    1. Points to /repo/docs when on /repo
    2. Points to /pack/docs when on /pack
  */
  const leadingItem = props.items[0];
  if (leadingItem?.id !== "contextual-docs") {
    props.items.unshift({
      title: "Docs",
      type: "page",
      route: `/webb/docs`,
      id: "contextual-docs",
      key: "contextual-docs",
    });
  }

  // items last to override the default
  return <Navbar {...props} />
}

export default Navigation;
