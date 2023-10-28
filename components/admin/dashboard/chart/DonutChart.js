import { Card, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 6359800,
  },
  // ...
  {
    name: "Zurich",
    sales: 7541398,
  },
  {
    name: "Singapore",
    sales: 3541398,
  },
  {
    name: "Europe",
    sales: 9681398,
  },
  {
    name: "Africa",
    sales: 6455398,
  },
  {
    name: "Australia",
    sales: 4331398,
  },
];

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const customTooltip = ({ payload, active }) => {
  if (!active || !payload) return null;
  const categoryPayload = payload?.[0];
  if (!categoryPayload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      <div className="flex flex-1 space-x-2.5">
        <div className={`w-1.5 flex flex-col bg-${categoryPayload?.color}-500 rounded`} />
        <div className="w-full">
          <div className="flex items-center justify-between space-x-8">
            <p className="text-right text-tremor-content whitespace-nowrap">
              {categoryPayload.name}
            </p>
            <p className="font-medium text-right whitespace-nowrap text-tremor-content-emphasis">
              {categoryPayload.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DonutChartCustomTooltip = () => {
  return (
    <>
      <Card className="mx-auto">
        <DonutChart
          className="mt-6"
          data={cities}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          customTooltip={customTooltip}
        />
      </Card>
    </>
  );
};
