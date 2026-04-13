'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [role, setRole] = useState<'STUDENT' | 'TUTOR'>('STUDENT');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'STUDENT') {
      router.push('/onboarding/student');
    } else {
      router.push('/onboarding/tutor');
    }
  };

  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--neutral)', marginBottom: '8px' }}>Create an account</h1>
        <p style={{ color: 'var(--text-muted)' }}>Join Tutorly to start your journey.</p>
      </div>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
        <Input label="Full Name" type="text" placeholder="John Doe" required />
        <Input label="Email address" type="email" placeholder="you@example.com" required />
        <Input label="Password" type="password" placeholder="••••••••" required />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--sys-neutral-colour-role)' }}>I am signing up as a:</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button
              type="button"
              onClick={() => setRole('STUDENT')}
              style={{
                padding: '12px',
                border: role === 'STUDENT' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                backgroundColor: role === 'STUDENT' ? 'rgba(4, 102, 200, 0.05)' : 'white',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                color: 'var(--neutral)'
              }}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole('TUTOR')}
              style={{
                padding: '12px',
                border: role === 'TUTOR' ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                backgroundColor: role === 'TUTOR' ? 'rgba(4, 102, 200, 0.05)' : 'white',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                color: 'var(--neutral)'
              }}
            >
              Tutor
            </button>
          </div>
        </div>
        
        <Button type="submit" size="large" style={{ marginTop: '16px' }}>Sign Up & Continue</Button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '15px' }}>
        <span style={{ color: 'var(--text-muted)' }}>Already have an account? </span>
        <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Log in</Link>
      </div>
    </Card>
  );
}
