
import React from "react";
import Navbar from "@/components/Navbar";
import { ComplianceDashboard } from "@/components/compliance/ComplianceDashboard";

const ComplianceDashboardPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Compliance Monitoring Dashboard</h1>
        <ComplianceDashboard />
      </main>
    </div>
  );
};
export default ComplianceDashboardPage;
