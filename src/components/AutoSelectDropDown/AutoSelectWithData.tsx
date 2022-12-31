import { book_info } from "@prisma/client";
import React from "react";
import AutoSelectDropDown, { type AutoSelectItem } from ".";
import useAutoSelectDropDown from "./useAutoSelectDropDown";

type Props = {
  bookInfo: book_info[];
};

const people: AutoSelectItem[] = [
  { id: 1, value: "Leslie Alexander" },
  { id: 2, value: "Tony Boules" },
];

const AutoSelectWithData = ({ bookInfo }: Props) => {
  const autoSelectProps = useAutoSelectDropDown({
    items: people,
  });

  return (
    <>
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Find a verse from the Bible
            </h3>
          </div>
          <div className="mt-4 max-w-xl text-md text-gray-700">
            <p>
              Change the email address you want associated with your account.
            </p>
          </div>
          <form action="" className="mt-6 w-60">
            <AutoSelectDropDown {...autoSelectProps} label={"hello"} />
          </form>
        </div>
      </div>
      <pre>{JSON.stringify(bookInfo, null, 2)}</pre>
    </>
  );
};

export default AutoSelectWithData;
