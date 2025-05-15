
export type ComplianceFramework = "GDPR" | "ISO 27001" | "NIS2";

export interface ComplianceStatus {
  framework: ComplianceFramework;
  percent: number;
  status: "compliant" | "warning" | "non-compliant";
}

export interface ComplianceAlert {
  id: string;
  type: "critical" | "warning" | "info";
  message: string;
  framework: ComplianceFramework;
  time: string;
  resolved: boolean;
}

export interface DepartmentCompliance {
  department: string;
  status: ComplianceStatus[];
}
