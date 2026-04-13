import React from 'react';
import { Sidebar } from '@/components/ui/Sidebar';

export default function TutorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-gray)' }}>
      <Sidebar role="tutor" />
      <main style={{ flex: 1, padding: '48px', overflowX: 'hidden' }}>
        {children}
      </main>
    </div>
  );
}
