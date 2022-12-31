import { Dispatch, SetStateAction, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { classNames } from "../../utils/tailwindHelpers";

export type AutoSelectItem = {
  id: number;
  [key: string]: any;
};

type Props = {
  items: AutoSelectItem[];
  valueKey: string;
  selectedItem: AutoSelectItem;
  setSelectedItem: Dispatch<SetStateAction<AutoSelectItem>>;
  label: string;
};

export default function AutoSelectDropDown({
  label,
  items,
  selectedItem,
  setSelectedItem,
  valueKey,
}: Props) {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? items
      : items.filter((item) => {
          return item[valueKey].toLowerCase().includes(query.toLowerCase());
        });

  console.log(label);

  return (
    <Combobox as="div" value={selectedItem} onChange={setSelectedItem}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-dcRed-200 focus:outline-none focus:ring-1 focus:ring-dcRed-200 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item: AutoSelectItem) => item[valueKey]}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((item) => (
              <Combobox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-dcRed-400 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {item[valueKey]}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-dcRed-400"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
