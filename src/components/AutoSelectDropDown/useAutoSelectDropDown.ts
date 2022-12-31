import { useState } from "react";
import { type AutoSelectItem } from ".";

type Props = {
  items: AutoSelectItem[];
  initiallySelected?: AutoSelectItem;
};

export default function useAutoSelectDropDown({
  items,
  initiallySelected = items[0],
}: Props) {
  const [selectedItem, setSelectedItem] =
    useState<AutoSelectItem>(initiallySelected);

  return {
    items,
    selectedItem,
    setSelectedItem,
  };
}
