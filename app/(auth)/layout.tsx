import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tutorly | Authentication',
  description: 'Log in or sign up for Tutorly.',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-gray)' }}>
      <header style={{ padding: '24px', textAlign: 'center' }}>
        <Link href="/" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)', textDecoration: 'none' }}>
          Tutorly
        </Link>
      </header>
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
