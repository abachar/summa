import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const reportId = context.params?.reportId;

  return {
    props: {},
  };
};

export default function ReportList({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>Note de frais</h1>
    </main>
  );
}
