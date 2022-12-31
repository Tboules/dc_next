import { Prisma } from "@prisma/client";

import BibleVersePicker from "../src/components/BibleVersePicker";

interface Props {
  bookInfo: Prisma.Book_infoMinAggregateOutputType;
  romans: Prisma.NkjvMinAggregateOutputType;
}

export default function Home() {
  return (
    <div>
      <BibleVersePicker />
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
