import Image from "next/image";
import AvailableNotesManageDark from "./available-notes-manage-dark.png";
import AvailableNotesManageLight from "./available-notes-manage-light.png";
import AvailableNotesQuickDark from "./available-notes-quick-dark.png";
import AvailableNotesQuickLight from "./available-notes-quick-light.png";
import AvailableSpendNotesDark from "./available-spend-notes-dark.png";
import AvailableSpendNotesLight from "./available-spend-notes-light.png";
import ShieldedAssetsDark from "./shielded-assets-dark.png";
import ShieldedAssetsLight from "./shielded-assets-light.png";

export const AvailableNotesManage = (props) => {
  return (
    <>
      <div className="block dark:hidden">
        <Image
          src={AvailableNotesManageLight}
          height={props.height}
          alt="available notes manager"
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src={AvailableNotesManageDark}
          height={props.height}
          alt="available notes manager"
        />
      </div>
    </>
  );
};

export const AvailableNotesQuick = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image
          src={AvailableNotesQuickLight}
          alt="available notes quick action"
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src={AvailableNotesQuickDark}
          alt="available notes quick action"
        />
      </div>
    </>
  );
};

export const AvailableSpendNotes = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={AvailableSpendNotesLight} alt="available spend notes" />
      </div>
      <div className="hidden dark:block">
        <Image src={AvailableSpendNotesDark} alt="available spend notes" />
      </div>
    </>
  );
};

export const ShieldedAssets = () => {
  return (
    <>
      <div className="block dark:hidden">
        <Image src={ShieldedAssetsLight} alt="shielded assets" />
      </div>
      <div className="hidden dark:block">
        <Image src={ShieldedAssetsDark} alt="shielded assets" />
      </div>
    </>
  );
};
