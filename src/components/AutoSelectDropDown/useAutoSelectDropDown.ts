import { useEffect, useState } from "react";
import { type AutoSelectItem } from ".";

type Props = {
  items: AutoSelectItem[];
  initiallySelected?: AutoSelectItem;
  valueKey: string;
};

export default function useAutoSelectDropDown({
  items,
  initiallySelected,
  valueKey,
}: Props) {
  const [selectedItem, setSelectedItem] = useState<AutoSelectItem>(
    initiallySelected ?? items[0]
  );

  useEffect(() => {
    setSelectedItem(initiallySelected ?? items[0]);
  }, [items]);

  return {
    items,
    selectedItem,
    setSelectedItem,
    valueKey,
  };
}
