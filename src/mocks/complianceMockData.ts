
import {
  ComplianceFramework,
  User,
  ComplianceTask,
  ComplianceAlert,
  ComplianceRecommendation,
  UserRole,
} from "@/types/complianceModels";

// -- Mock users
export const mockUsers: User[] = [
  {
    id: "u1",
    name: "Alice Admin",
    email: "alice@school.com",
    role: "admin",
  },
  {
    id: "u2",
    name: "Tom Teacher",
    email: "tom@school.com",
    role: "teacher",
  },
  {
    id: "u3",
    name: "Peter Parent",
    email: "peter@home.com",
    role: "parent",
  },
  {
    id: "u4",
    name: "Sally Student",
    email: "sally@student.com",
    role: "student",
  },
];

// -- Mock compliance frameworks
export const mockFrameworks: ComplianceFramework[] = [
  "GDPR",
  "ISO 27001",
  "NIS2",
];

// -- Mock tasks
export const mockTasks: ComplianceTask[] = [
  {
    id: "t1",
    title: "Update Privacy Policy",
    description: "Review and update the privacy policy for GDPR compliance.",
    framework: "GDPR",
    department: "HR",
    assignedTo: "u2",
    dueDate: new Date(Date.now() + 86400000).toISOString(), // tomorrow
    status: "in-progress",
  },
  {
    id: "t2",
    title: "ISO Self-assessment",
    description: "Complete self-assessment for ISO 27001 documentation.",
    framework: "ISO 27001",
    department: "IT",
    assignedTo: "u1",
    dueDate: new Date(Date.now() + 3 * 86400000).toISOString(),
    status: "pending",
  },
  {
    id: "t3",
    title: "Vendor Risk Inventory",
    description: "Add new vendors to NIS2 risk inventory checklist.",
    framework: "NIS2",
    department: "Procurement",
    assignedTo: "u1",
    dueDate: new Date(Date.now() - 2 * 86400000).toISOString(), // 2 days ago
    status: "overdue",
  },
];

// -- Mock alerts
export const mockAlerts: ComplianceAlert[] = [
  {
    id: "a1",
    type: "critical",
    message: "Data breach response plan document missing.",
    framework: "GDPR",
    time: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hr ago
    resolved: false,
  },
  {
    id: "a2",
    type: "warning",
    message: "ISO 27001 Risk Assessment overdue by 10 days.",
    framework: "ISO 27001",
    time: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hrs ago
    resolved: false,
  },
  {
    id: "a3",
    type: "info",
    message: "NIS2 regulation update: third-party supplier checklist.",
    framework: "NIS2",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    resolved: true,
  },
];

// -- Mock recommendations
export const mockRecommendations: ComplianceRecommendation[] = [
  {
    id: "r1",
    framework: "GDPR",
    message: "Implement regular data privacy training for all staff.",
    severity: "high",
    resourceLink: "https://gdpr-info.eu/"
  },
  {
    id: "r2",
    framework: "ISO 27001",
    message: "Schedule annual ISMS audits.",
    severity: "medium",
  },
  {
    id: "r3",
    framework: "NIS2",
    message: "Review critical infrastructure supply chain dependencies.",
    severity: "high",
    resourceLink: "https://www.enisa.europa.eu/"
  }
];

