import Image from "next/image";
import ExampleConfigLight from "./example_config_light.png";
import ExampleConfigDark from "./example_config_dark.png";

export default function RelayerExampleConfig(props) {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ExampleConfigLight} alt="Example Config" />
      </div>
      <div className="hidden dark:block">
        <Image src={ExampleConfigDark} alt="Example Config" />
      </div>
    </>
  );
}
