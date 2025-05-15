
import React from "react";
import { AlertTriangle, Bell, CalendarCheck, Info, Shield } from "lucide-react";
import { ComplianceAlert } from "@/types/compliance";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockAlerts: ComplianceAlert[] = [
  {
    id: "1",
    type: "critical",
    message:
      "Data breach response plan document is missing! Please upload to meet GDPR requirements.",
    framework: "GDPR",
    time: "2 mins ago",
    resolved: false,
  },
  {
    id: "2",
    type: "warning",
    message: "ISO 27001 Risk Assessment is overdue by 10 days.",
    framework: "ISO 27001",
    time: "30 mins ago",
    resolved: false,
  },
  {
    id: "3",
    type: "info",
    message:
      "New NIS2 supplier management regulation added. Review the checklist.",
    framework: "NIS2",
    time: "1 hour ago",
    resolved: false,
  },
];

const getAlertColor = (type: ComplianceAlert["type"]) => {
  switch (type) {
    case "critical":
      return "text-red-600";
    case "warning":
      return "text-yellow-700";
    case "info":
      return "text-blue-600";
    default:
      return "text-gray-600";
  }
};

interface ComplianceAlertCenterProps {
  selectedFramework: string | null;
}

export const ComplianceAlertCenter: React.FC<ComplianceAlertCenterProps> = ({
  selectedFramework,
}) => {
  const filtered = selectedFramework
    ? mockAlerts.filter((a) => a.framework === selectedFramework)
    : mockAlerts;
  return (
    <Card className="mt-4 shadow border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-yellow-500" />
          Compliance Alerts & Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        {filtered.length === 0 && (
          <div className="text-muted-foreground text-center text-sm">
            No alerts for this framework. All green!
          </div>
        )}
        <ul className="space-y-3">
          {filtered.map((alert) => (
            <li key={alert.id} className="flex items-center p-3 bg-gray-100 rounded">
              {alert.type === "critical" ? (
                <AlertTriangle className="mr-2 text-red-500" />
              ) : alert.type === "warning" ? (
                <CalendarCheck className="mr-2 text-yellow-500" />
              ) : (
                <Info className="mr-2 text-blue-500" />
              )}
              <span className="flex-1">{alert.message}</span>
              <span className="ml-4 text-xs text-muted-foreground">{alert.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
