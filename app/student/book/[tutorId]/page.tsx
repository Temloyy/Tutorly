import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function BookingFlow({ params }: { params: Promise<{ tutorId: string }> }) {
  const { tutorId } = await params;
  return (
    <div style={{ padding: '0 24px' }}>
      <Link href={`/student/tutor/${tutorId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '32px', fontWeight: 600 }}>
        <i className="ph ph-arrow-left"></i> Back to profile
      </Link>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
           <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '12px', letterSpacing: '-0.02em' }}>Book a Session</h1>
           <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Schedule your learning time with <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Dr. Sarah Jenkins</span></p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Card>
              <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: 'var(--neutral)' }}>1. Select Session Type</h2>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, border: '2px solid var(--primary)', borderRadius: '16px', padding: '24px', backgroundColor: 'rgba(4, 102, 200, 0.05)', cursor: 'pointer', textAlign: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '8px', color: 'var(--neutral)' }}>Standard</div>
                  <div style={{ fontSize: '15px', color: 'var(--primary)', fontWeight: 600 }}>60 minutes • $45</div>
                </div>
                <div style={{ flex: 1, border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', cursor: 'pointer', textAlign: 'center', opacity: 0.8 }}>
                  <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '8px', color: 'var(--neutral)' }}>Intro Trial</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: 600 }}>30 minutes • $15</div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: 'var(--neutral)' }}>2. Choose Date & Time</h2>
              <div style={{ padding: '32px', textAlign: 'center', border: '1px dashed var(--border-color)', borderRadius: '16px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ padding: '12px 24px', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '100px', fontWeight: 600 }}>Today</div>
                  <div style={{ padding: '12px 24px', border: '1px solid var(--border-color)', borderRadius: '100px', cursor: 'pointer', fontWeight: 600 }}>Tomorrow</div>
                  <div style={{ padding: '12px 24px', border: '1px solid var(--border-color)', borderRadius: '100px', cursor: 'pointer', fontWeight: 600 }}>Select Date</div>
                </div>
                
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '16px', textAlign: 'left' }}>Available Times (EST)</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer', fontWeight: 600 }}>2:00 PM</div>
                  <div style={{ padding: '16px', border: '2px solid var(--primary)', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '12px', cursor: 'pointer', fontWeight: 800 }}>4:30 PM</div>
                  <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer', fontWeight: 600 }}>6:00 PM</div>
                  <div style={{ padding: '16px', border: '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer', fontWeight: 600, opacity: 0.4 }}>7:30 PM</div>
                </div>
              </div>
            </Card>
          </div>

          <div style={{ position: 'sticky', top: '32px' }}>
            <Card style={{ backgroundColor: 'var(--bg-gray)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '32px', color: 'var(--neutral)' }}>Summary</h2>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '16px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Session Type</span>
                <span style={{ fontWeight: 700 }}>Standard (60 min)</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '16px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Date & Time</span>
                <span style={{ fontWeight: 700, textAlign: 'right' }}>Today<br/>4:30 PM EST</span>
              </div>

              <div style={{ borderTop: '2px dashed var(--border-color)', margin: '24px 0' }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
                <span style={{ fontWeight: 700, fontSize: '18px' }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: '32px', color: 'var(--primary)', lineHeight: 1 }}>$45</span>
              </div>

              <Link href="/session/123" style={{ textDecoration: 'none' }}>
                <Button size="large" style={{ width: '100%', borderRadius: '12px', fontSize: '18px', padding: '16px' }}>Confirm Booking</Button>
              </Link>
              <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', marginTop: '16px' }}>You won't be charged until the session starts.</p>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
