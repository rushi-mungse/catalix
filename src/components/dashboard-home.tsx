import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AnalyticsCard } from "./cards/analytics-card";
import { QuotationCard } from "./cards/quotation-card";
import { ITableData, quotations, tableData } from "../constants";
import { Table } from "antd";
import type { TableProps } from "antd";

const columns: TableProps<ITableData>["columns"] = [
  {
    title: "Page",
    dataIndex: "page",
    key: "page",
  },
  {
    title: "Pageviews",
    dataIndex: "pageviews",
    key: "pageviews",
  },
  {
    title: "Unique pageviews",
    dataIndex: "uniquePageviews",
    key: "uniquePageviews",
  },
  {
    title: "Avg. time on page",
    dataIndex: "avgTimeOnPage",
    key: "avgTimeOnPage",
  },
  {
    title: "Extrances",
    dataIndex: "extrances",
    key: "extrances",
  },
  {
    title: "% Exit",
    dataIndex: "exit",
    key: "exit",
  },
  {
    title: "Page value",
    dataIndex: "pageValue",
    key: "pageValue",
  },
];

export const DashboardHome = () => {
  return (
    <div>
      <Card>
        <div className="flex items-center justify-between">
          <Button
            icon={<PlusOutlined />}
            type="primary"
            className="px-8 rounded-full"
          >
            Create Report
          </Button>
          <Button className="px-8 rounded-full"> Share this dashboard</Button>
          <Button className="px-8 rounded-full"> Select Duration</Button>
          <Button className="px-8 rounded-full"> Compare with Duration</Button>
        </div>
      </Card>

      <div className="mt-8 grid grid-cols-4 gap-3">
        <AnalyticsCard
          title="Efficiency"
          description="Lorem Ipsum"
          val={1.1921}
          isProfitable={true}
          analytics="+0.0015 (+0.13%)"
          finance="0.00 USD"
          className="bg-gradient-to-r from-cyan-500 to-blue-500"
        />

        <AnalyticsCard
          title="time to market"
          description="Lorem Ipsum"
          val={327176}
          isProfitable={false}
          analytics="-97,914.00 (-23.03%)"
          finance="131,040,723,108 JPY"
          className="bg-gradient-to-r from-pink-500 to-indigo-500"
        />

        <AnalyticsCard
          title="Tech debt"
          description="Lorem Ipsum"
          val={1.1763}
          isProfitable={true}
          analytics="+0.0015 (+0.13%)"
          finance="0.00 USD"
          className="bg-gradient-to-r from-sky-500 to-green-500"
        />

        <AnalyticsCard
          title="Predictability"
          description="Lorem Ipsum"
          val={0.0031301}
          isProfitable={true}
          analytics="-0.00050430(-13.88%)"
          finance="1,566 BTC"
          className="bg-gradient-to-r from-orange-500 to-pink-500"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 mb-8">
        {quotations.map((q) => (
          <QuotationCard
            key={q.title}
            title={q.title}
            quotation={q.quatation}
            isGreenFlag={q.isGreenFlag}
          />
        ))}
      </div>

      <Table columns={columns} dataSource={tableData} />
    </div>
  );
};
