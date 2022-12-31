import { trpc } from "../../utils/trpc";
import AutoSelectDropDown from "../AutoSelectDropDown";

export default function Example() {
  const { data: bookInfo } = trpc.bible.getAllBookInfo.useQuery();

  if (!bookInfo) {
    return (
      <div>
        <p className="text-sm font-medium text-gray-900">loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Find a verse from the Bible
          </h3>
          <form action="">
            <AutoSelectDropDown />
          </form>
        </div>
        <div className="mt-4 max-w-xl text-md text-gray-700">
          <p>Change the email address you want associated with your account.</p>
        </div>
      </div>
    </div>
  );
}
