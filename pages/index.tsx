import { Prisma } from "@prisma/client";
import { GetServerSideProps } from "next";
import { getServerAuthSession } from "../src/server/common/get-server-auth-session";
import { prisma } from "../src/server/db";

interface Props {
  bookInfo: Prisma.Book_infoMinAggregateOutputType;
  romans: Prisma.NkjvMinAggregateOutputType;
}

export default function Home({ bookInfo, romans }: Props) {
  return (
    <div>
      <h1 className="text-7xl font-bold underline">Hello world!</h1>
      <pre>{JSON.stringify(romans, null, 2)}</pre>
      <pre>{JSON.stringify(bookInfo, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerAuthSession({ req, res });

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  const bookInfo = await prisma.book_info.findMany();
  const romans = await prisma.nkjv.findMany({
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

  return { props: { bookInfo, romans, session } };
};
