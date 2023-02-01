import Image from "next/image";
import ProposalPageDark from "./proposals-page-dark.png";
import ProposalPageLight from "./proposals-page-light.png";
import ProposalDetailsDark from "./proposal-details-dark.png";
import ProposalDetailsLight from "./proposal-details-light.png";
import ProposalStatusDark from "./proposal-status-dark.png";
import ProposalStatusLight from "./proposal-status-light.png";
import ProposalChartDark from "./proposals-chart-dark.png";
import ProposalChartLight from "./proposals-chart-light.png";
import ProposalsTableDark from "./all-proposals-dark.png";
import ProposalsTableLight from "./all-proposals-light.png";

export const ProposalsPage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ProposalPageLight} alt="keys page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ProposalPageDark} alt="keys page dark" />
      </div>
    </>
  );
};

export const ProposalsDetailsPage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ProposalDetailsLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ProposalDetailsDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const ProposalsTable = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ProposalsTableLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ProposalsTableDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const ProposalsChart = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ProposalChartLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ProposalChartDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const ProposalStatus = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ProposalStatusLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ProposalStatusDark} alt="keys detail page dark" />
      </div>
    </>
  );
};
