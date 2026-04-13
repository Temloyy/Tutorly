import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function ReviewSession({ params }: { params: Promise<{ bookingId: string }> }) {
  const { bookingId } = await params;
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-gray)', padding: '24px' }}>
      
      <Card style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>Session Complete</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>How was your session with Dr. Sarah Jenkins?</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          {[1,2,3,4,5].map(star => (
            <i key={star} className="ph-fill ph-star" style={{ fontSize: '40px', color: star <= 0 ? 'var(--sys-color-grey03)' : '#f59e0b', cursor: 'pointer' }}></i>
          ))}
        </div>

        <div style={{ textAlign: 'left', marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--sys-neutral-colour-role)', marginBottom: '8px' }}>Leave a comment (Optional)</label>
          <textarea 
            placeholder="Sarah was great! She helped me understand integrals perfectly."
            style={{ width: '100%', minHeight: '120px', padding: '12px', borderRadius: '6px', border: '1px solid var(--sys-color-grey03)', backgroundColor: 'var(--sys-neutral-container-colour-role)', color: 'var(--sys-on-neutral-container-colour-role)', outline: 'none', fontFamily: 'inherit' }}
          ></textarea>
        </div>

        <Link href="/student/dashboard" style={{ textDecoration: 'none' }}>
           <Button size="large" style={{ width: '100%' }}>Submit Feedback</Button>
        </Link>
        <div style={{ marginTop: '16px' }}>
          <Link href="/student/dashboard" style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500, textDecoration: 'none' }}>Skip for now</Link>
        </div>
      </Card>

    </div>
  );
}
