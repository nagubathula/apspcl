// pages/index.js
import Head from "next/head";
// import TenderTable from "../components/TenderTable";
import ApspclTable from '@/components/ApspclTable';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tender Notifications</title>
      </Head>
      <main>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">APSPCL Tenders</h1>
          <ApspclTable />
        </div>
      </main>
    </div>
  );
}
