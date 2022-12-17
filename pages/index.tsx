import { Prisma } from "@prisma/client";
import { GetServerSideProps } from "next";
import { getServerAuthSession } from "../src/server/common/get-server-auth-session";
import { prisma } from "../src/server/db";

interface Props {
  bookInfo: Prisma.Book_infoMinAggregateOutputType;
  romans: Prisma.NkjvMinAggregateOutputType;
}

const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Home() {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {people.map((person) => (
          <li key={person.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* <h1 className="text-7xl font-bold underline">Hello world!</h1>
      <pre>{JSON.stringify(romans, null, 2)}</pre>
      <pre>{JSON.stringify(bookInfo, null, 2)}</pre> */}
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = await getServerAuthSession({ req, res });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/api/auth/signin",
//         permanent: false,
//       },
//     };
//   }

//   const bookInfo = await prisma.book_info.findMany();
//   const romans = await prisma.nkjv.findMany({
//     where: {
//       book: 45,
//       chapter: 5,
//     },
//     include: {
//       book_info: {
//         select: {
//           title: true,
//         },
//       },
//     },
//   });

//   return { props: { bookInfo, romans, session } };
// };
