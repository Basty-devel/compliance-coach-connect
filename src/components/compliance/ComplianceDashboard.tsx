
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge, Users, CalendarCheck } from "lucide-react";
import { ComplianceStatus } from "@/types/compliance";
import { ComplianceAlertCenter } from "./ComplianceAlertCenter";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for compliance stats
const frameworks: ComplianceStatus[] = [
  { framework: "GDPR", percent: 89, status: "compliant" },
  { framework: "ISO 27001", percent: 76, status: "warning" },
  { framework: "NIS2", percent: 44, status: "non-compliant" },
];

const getColor = (status: string) => {
  switch (status) {
    case "compliant":
      return "#34d399"; // green
    case "warning":
      return "#fbbf24"; // yellow
    case "non-compliant":
      return "#f87171"; // red
    default:
      return "#8E9196";
  }
};

export const ComplianceDashboard: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {frameworks.map((fw) => (
          <Card
            key={fw.framework}
            className={`flex-1 shadow-md cursor-pointer hover:scale-105 transition-transform border-2 ${
              selectedFramework === fw.framework
                ? "border-primary"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedFramework(fw.framework)}
          >
            <CardHeader className="flex flex-row items-center gap-2">
              <Gauge className="text-primary" />
              <CardTitle>{fw.framework}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={130}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Compliance", value: fw.percent },
                      { name: "Remaining", value: 100 - fw.percent },
                    ]}
                    dataKey="value"
                    innerRadius={35}
                    outerRadius={55}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill={getColor(fw.status)} />
                    <Cell fill="#F3F3F3" />
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-2">
                <span
                  className={`font-bold text-lg ${
                    fw.status === "compliant"
                      ? "text-green-500"
                      : fw.status === "warning"
                      ? "text-yellow-600"
                      : "text-red-500"
                  }`}
                >
                  {fw.percent}%
                </span>
                <span className="text-gray-500 ml-2">Status: {fw.status}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ComplianceAlertCenter selectedFramework={selectedFramework} />
    </section>
  );
};
