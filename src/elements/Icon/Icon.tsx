import React, { FC, SVGProps } from "react";

import { ReactComponent as BankNote } from "@/assets/icons/bank-note.svg";
import { ReactComponent as Bike } from "@/assets/icons/bike.svg";
import { ReactComponent as Check } from "@/assets/icons/check-circle.svg";
import { ReactComponent as Cross } from "@/assets/icons/cross.svg";
import { ReactComponent as Decline } from "@/assets/icons/decline-icon.svg";
import { ReactComponent as Dropdown } from "@/assets/icons/dropdown.svg";
import { ReactComponent as EmptySearch } from "@/assets/icons/empty-search.svg";
import { ReactComponent as Exit } from "@/assets/icons/exit.svg";
import { ReactComponent as Google } from "@/assets/icons/google.svg";
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
import { ReactComponent as Map } from "@/assets/icons/map.svg";
import { ReactComponent as Users } from "@/assets/icons/outline-users.svg";


const ICONS_HASH_MAP: Record<string, React.ComponentType<SVGProps<SVGSVGElement>>> = {
  google: Google,
  bike: Bike,
  success: Check,
  decline: Decline,
  emptySearch: EmptySearch,
  dropdown: Dropdown,
  cross: Cross,
  map: Map,
  logo: Logo,
  users: Users,
  exit: Exit,
  bankNote: BankNote
};

interface IIconProps extends SVGProps<SVGSVGElement> {
  icon: keyof typeof ICONS_HASH_MAP;
}

export const Icon: FC<IIconProps> = ({ icon, ...rest }) => {
  const IconComponent = ICONS_HASH_MAP[icon];

  return <IconComponent {...rest} />;
};
