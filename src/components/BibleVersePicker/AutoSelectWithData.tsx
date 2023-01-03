import { book_info } from "@prisma/client";
import React, { useEffect, useMemo, useState } from "react";
import AutoSelectDropDown, {
  type AutoSelectItem,
} from "../AutoSelectDropDown/index";
import useAutoSelectDropDown from "../AutoSelectDropDown/useAutoSelectDropDown";

type Props = {
  bookInfo: book_info[];
};

const transformedBookInfo: (chapters: number) => AutoSelectItem[] = (
  chapters
) => {
  return Array.from({ length: chapters }, (_, i) => {
    return {
      id: i + 1,
      value: i + 1,
    };
  });
};

const AutoSelectWithData = ({ bookInfo }: Props) => {
  const [chaptersArray, setChaptersArray] = useState<AutoSelectItem[]>(
    transformedBookInfo(bookInfo[0].chapters)
  );

  const bookInfoSelectProps = useAutoSelectDropDown({
    items: bookInfo,
    valueKey: "title",
    initiallySelected: bookInfo[4],
  });

  useMemo(() => {
    setChaptersArray(
      transformedBookInfo(bookInfoSelectProps.selectedItem.chapters)
    );
  }, [bookInfoSelectProps.selectedItem]);

  const chaptersSelectProps = useAutoSelectDropDown({
    items: chaptersArray,
    valueKey: "value",
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
          <form action="" className="mt-6 gap-4 flex">
            <AutoSelectDropDown {...bookInfoSelectProps} label="Bible Books" />
            <AutoSelectDropDown {...chaptersSelectProps} label="Chapters" />
          </form>
        </div>
      </div>
      <pre>{JSON.stringify(bookInfo, null, 2)}</pre>
    </>
  );
};

export default AutoSelectWithData;
