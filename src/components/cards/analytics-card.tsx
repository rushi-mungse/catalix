import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { cn } from "../../lib/utils";

interface AnalyticsCardProps {
  className?: string;
  title: string;
  description: string;
  val: number;
  analytics: string;
  finance: string;
  isProfitable: boolean;
}

export const AnalyticsCard = ({
  className,
  title,
  description,
  val,
  isProfitable,
  analytics,
  finance,
}: AnalyticsCardProps) => {
  return (
    <div
      className={cn(
        "border border-gray-300 rounded-lg p-6 text-white",
        className
      )}
    >
      <div className="flex flex-col">
        <span className="text-lg font-bold uppercase">{title}</span>
        <span>{description}</span>
      </div>

      <div className="relative">
        <div className="mt-2 flex items-center space-x-8">
          <span className="text-4xl font-bold">{val}</span>
          <span>
            {isProfitable ? (
              <CaretUpOutlined style={{ fontSize: 30 }} />
            ) : (
              <CaretDownOutlined style={{ fontSize: 30 }} />
            )}
          </span>
        </div>
        <span className="italic tracking-wider">{analytics}</span>
      </div>

      <div className="mt-5">
        <span>{finance}</span>
      </div>
    </div>
  );
};
