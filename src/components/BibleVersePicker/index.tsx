import { trpc } from "../../utils/trpc";
import AutoSelectDropDown, { AutoSelectItem } from "../AutoSelectDropDown";
import AutoSelectWIthData from "../AutoSelectDropDown/AutoSelectWIthData";
import useAutoSelectDropDown from "../AutoSelectDropDown/useAutoSelectDropDown";

export default function BibleVersePicker() {
  const { data: bookInfo } = trpc.bible.getAllBookInfo.useQuery();

  if (!bookInfo) {
    return (
      <div>
        <p className="text-sm font-medium text-gray-900">loading...</p>
      </div>
    );
  }

  return <AutoSelectWIthData bookInfo={bookInfo} />;
}
