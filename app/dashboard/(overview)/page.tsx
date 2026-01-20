// app/dashboard/page.tsx
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '../../lib/data'; //<RevenueChart/> 컴포넌트를 위해 data를 fetch하기 위함
import { fetchLatestInvoices, fetchCardData } from '../../lib/data'; // fetchRevenue 삭제
import { Suspense } from 'react'; // Suspense
import { RevenueChartSkeleton } from '@/app/ui/skeletons'; // RevenueChartSkeleton 

export default async function Page() {
  //const revenue = await fetchRevenue(); //<RevenueChart/> 컴포넌트를 위해 data를 fetch하기 위함, fetchRevenue 삭제
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData(); // 비동기 함수가 반환한 객체(object)를 구조분해 할당해서 변수로 꺼내는 코드

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}