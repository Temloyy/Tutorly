import React from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Card>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--neutral)', marginBottom: '8px' }}>Welcome back</h1>
        <p style={{ color: 'var(--text-muted)' }}>Enter your details to access your account.</p>
      </div>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} action="/student/dashboard">
        <Input label="Email address" type="email" placeholder="you@example.com" required />
        <div>
          <Input label="Password" type="password" placeholder="••••••••" required />
          <div style={{ textAlign: 'right', marginTop: '8px' }}>
            <a href="#" style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 500 }}>Forgot password?</a>
          </div>
        </div>
        
        <Button type="submit" size="large" style={{ marginTop: '8px' }}>Log In</Button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '15px' }}>
        <span style={{ color: 'var(--text-muted)' }}>Don't have an account? </span>
        <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: 600 }}>Sign up</Link>
      </div>
    </Card>
  );
}
