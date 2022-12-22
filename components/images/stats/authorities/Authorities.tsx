import Image from "next/image";
import AuthDetailsDark from "./auth-details-dark.png";
import AuthDetailsLight from "./auth-details-light.png";
import AuthPageDark from "./auth-page-dark.png";
import AuthPageLight from "./auth-page-light.png";
import AuthTableDark from "./authorities-dark.png";
import AuthTableLight from "./authorities-light.png";
import ThresholdDark from "./thresholds-dark.png";
import ThresholdLight from "./thresholds-light.png";
import UpcomingDark from "./upcoming-dark.png";
import UpcomingLight from "./upcoming-light.png";

export const AuthPage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={AuthPageLight} alt="keys page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={AuthPageDark} alt="keys page dark" />
      </div>
    </>
  );
};

export const AuthDetailsPage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={AuthDetailsLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={AuthDetailsDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const AuthTable = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={AuthTableLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={AuthTableDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const Thresholds = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ThresholdLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ThresholdDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const UpcomingThresholds = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={UpcomingLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={UpcomingDark} alt="keys detail page dark" />
      </div>
    </>
  );
};
