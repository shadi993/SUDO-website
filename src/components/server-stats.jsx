import { ChartContainer } from "./ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Bar, BarChart, Rectangle, XAxis } from "recharts";
import { TEAM } from "./team-members";

const serverInfo = [
  {
    key: "members",
    unit: "members",
    title: "Members Count",
    description: "Our community is growing every day.",
    amount: "300+",
  },
  {
    key: "channels",
    unit: "channels",
    title: "Channels Count",
    description:
      "We are constantly adding new channels and open to suggestions.",
    amount: "20",
  },
  {
    key: "staff",
    unit: "staff members",
    title: "Staff Members",
    description: "Our growing, friendly staff team is here to help.",
    amount: TEAM.length,
  },
];

function ServerStat() {
  return (
    <div>
      <h1 className="text-foreground font-bold text-4xl text-center mb-16 mt-16">
        Server Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {serverInfo.map((stat) => (
          <Card className="max-w-full md:max-w-sm flex flex-col h-full">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="font-bold">{stat.title}</CardTitle>
              <CardDescription>{stat.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between p-4 pt-2">
              <div className="flex flex-row items-baseline gap-4 mt-auto">
                <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                  {stat.amount}
                  <span className="text-sm font-normal text-muted-foreground">
                    {stat.unit}
                  </span>
                </div>
                <ChartContainer
                  config={{
                    members: {
                      label: "members",
                      color: "hsl(var(--accent))",
                    },
                    channels: {
                      label: "channels",
                      color: "hsl(var(--primary))",
                    },
                    staff: {
                      label: "staff",
                      color: "hsl(var(--accent))",
                    },
                  }}
                  className="ml-auto w-[80px]"
                >
                  <BarChart
                    accessibilityLayer
                    margin={{
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    }}
                    data={[
                      {
                        date: "2024-01-01",
                        [stat.key]: 100,
                      },
                      {
                        date: "2024-01-02",
                        [stat.key]: 200,
                      },
                      {
                        date: "2024-01-03",
                        [stat.key]: 300,
                      },
                      {
                        date: "2024-01-04",
                        [stat.key]: 500,
                      },
                      {
                        date: "2024-01-05",
                        [stat.key]: 500,
                      },
                      {
                        date: "2024-01-06",
                        [stat.key]: 456,
                      },
                      {
                        date: "2024-01-07",
                        [stat.key]: 600,
                      },
                    ]}
                  >
                    <Bar
                      dataKey={stat.key}
                      fill={`var(--color-${stat.key})`}
                      radius={2}
                      fillOpacity={0.2}
                      activeIndex={6}
                      activeBar={<Rectangle fillOpacity={0.8} />}
                    />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={4}
                      hide
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default ServerStat;
