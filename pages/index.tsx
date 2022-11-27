import { Prisma } from "@prisma/client";
import { GetServerSideProps } from "next";
import { prisma } from "../src/server/db";

interface Props {
  bookInfo: Prisma.Book_infoMinAggregateOutputType;
  genesis: Prisma.NkjvMinAggregateOutputType;
}

export default function Home({ bookInfo, genesis }: Props) {
  // console.log(genesis);
  return (
    <div>
      <h1 className="text-7xl font-bold underline">Hello world!</h1>
      <pre>{JSON.stringify(genesis, null, 2)}</pre>
      <pre>{JSON.stringify(bookInfo, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const bookInfo = await prisma.book_info.findMany();
  const genesis = await prisma.nkjv.findMany({
    where: {
      book: 45,
      chapter: 5,
    },
    include: {
      book_info: {
        select: {
          title: true,
        },
      },
    },
  });

  return { props: { bookInfo, genesis } };
};
