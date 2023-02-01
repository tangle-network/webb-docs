import Image from "next/image";
import KeysPageLight from "./keys-page-light.png";
import KeysPageDark from "./keys-page-dark.png";
import KeysDetailDark from "./keys-detail-dark.png";
import KeysDetailLight from "./keys-detail-light.png";
import ActiveKeyDark from "./active-key-dark.png";
import ActiveKeyLight from "./active-key-light.png";
import KeygenTableDark from "./keygen-table-dark.png";
import KeygenTableLight from "./keygen-table-light.png";

export const KeysPage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={KeysPageLight} alt="keys page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={KeysPageDark} alt="keys page dark" />
      </div>
    </>
  );
};

export const KeysDetailsPage = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={KeysDetailLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={KeysDetailDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const ActiveKey = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ActiveKeyLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={ActiveKeyDark} alt="keys detail page dark" />
      </div>
    </>
  );
};

export const KeygenTable = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={KeygenTableLight} alt="keys detail page light" />
      </div>
      <div className="hidden dark:block">
        <Image src={KeygenTableDark} alt="keys detail page dark" />
      </div>
    </>
  );
};
