
/**
 * Compliance Data Models & Types for Demo Version
 */

// --- Frameworks
export type ComplianceFramework = "GDPR" | "ISO 27001" | "NIS2";

// --- User Roles
export type UserRole = "admin" | "teacher" | "parent" | "student" | "guest";

// --- User
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// --- Compliance Task
export type ComplianceTaskStatus = "pending" | "in-progress" | "completed" | "overdue";

export interface ComplianceTask {
  id: string;
  title: string;
  description: string;
  framework: ComplianceFramework;
  department?: string;
  assignedTo?: string; // user id
  dueDate: string;
  status: ComplianceTaskStatus;
}

// --- Compliance Alert
export type ComplianceAlertType = "critical" | "warning" | "info";

export interface ComplianceAlert {
  id: string;
  type: ComplianceAlertType;
  message: string;
  framework: ComplianceFramework;
  time: string; // ISO timestamp
  resolved: boolean;
}

// --- Compliance Recommendation
export interface ComplianceRecommendation {
  id: string;
  framework: ComplianceFramework;
  message: string;
  severity: "high" | "medium" | "low";
  resourceLink?: string;
}
