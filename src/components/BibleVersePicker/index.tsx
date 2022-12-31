import { trpc } from "../../utils/trpc";
import AutoSelectWithData from "../AutoSelectDropDown/AutoSelectWithData";

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
