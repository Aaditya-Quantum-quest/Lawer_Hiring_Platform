import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

const DashboardPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-slate-200"></div>
                <div>
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">Client Account</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <nav className="flex flex-col space-y-2">
            <a href="#" className="rounded-md bg-[var(--color-primary)]/10 px-3 py-2 text-sm font-medium text-[var(--color-primary)]">Overview</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-slate-100 hover:text-slate-900">My Appointments</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-slate-100 hover:text-slate-900">Settings</a>
          </nav>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-slate-200 p-8 text-center bg-slate-50">
                <p className="text-[var(--color-text-secondary)]">No upcoming appointments scheduled yet.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
