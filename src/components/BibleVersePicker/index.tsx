import { book_info } from "@prisma/client";
import { trpc } from "../../utils/trpc";
import AutoSelectWithData from "./AutoSelectWithData";

export default function BibleVersePicker() {
  const { data: bookInfo } = trpc.bible.getAllBookInfo.useQuery();

  if (!bookInfo) {
    return (
      <div>
        <p className="text-sm font-medium text-gray-900">loading...</p>
      </div>
    );
  }

  return <AutoSelectWithData bookInfo={bookInfo} />;
}
