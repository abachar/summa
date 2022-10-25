import { Report } from '@prisma/client';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { DataGrid, GridColumn } from '../../components/data-grid';
import { Page } from '../../components/layouts';
import { prisma } from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async () => {
  const reports = await prisma.report.findMany();

  return {
    props: {
      reports,
    },
  };
};

export default function ReportList({ reports }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Page
      heading="Note de frais"
      actions={
        <Link href="/reports/create" className="btn primary">
          <a>Ajouter une note de frais</a>
        </Link>
      }
    >
      <DataGrid rows={reports} columns={columns} />
    </Page>
  );
}

const columns: GridColumn<Report>[] = [
  { field: 'name', header: 'Nom', width: 300 },
  { field: 'approvedOn', header: "Date d'approbation", type: 'date', width: 130 },
  // { field: 'summaryExpenses', headerName: 'Dépenses' },
  // { field: 'summaryKilometricAllowances', headerName: 'Indemnités Kilométriques' },
  // { field: 'amount', headerName: 'Montant TTC', type: 'amount', width: 120 },
];
