import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function StudentSessions() {
  return (
    <div style={{ padding: '0 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--neutral)', letterSpacing: '-0.02em' }}>My Sessions</h1>
        <div style={{ display: 'flex', gap: '8px', padding: '4px', backgroundColor: 'var(--bg-gray)', borderRadius: '100px' }}>
          <Button variant="secondary" style={{ borderRadius: '100px', border: 'none', backgroundColor: 'transparent' }}>Past</Button>
          <Button style={{ borderRadius: '100px' }}>Upcoming</Button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Active Booking Entry */}
        <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px' }}>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', padding: '16px', backgroundColor: 'rgba(4, 102, 200, 0.05)', borderRadius: '16px', minWidth: '100px' }}>
              <div style={{ fontWeight: 800, fontSize: '32px', color: 'var(--primary)', lineHeight: 1 }}>14</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginTop: '4px' }}>Oct</div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ padding: '6px 12px', backgroundColor: '#ecfdf5', color: '#059669', fontSize: '12px', fontWeight: 800, borderRadius: '100px', textTransform: 'uppercase' }}>Upcoming</span>
                <span style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: 600 }}>2:00 PM • 60 Minutes</span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>Calculus Exam Prep</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="ph-fill ph-chalkboard-teacher" style={{ color: 'var(--primary)', fontSize: '20px' }}></i> Dr. Sarah Jenkins
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button variant="secondary" style={{ borderRadius: '100px', padding: '12px 24px' }}>Reschedule</Button>
            <Button style={{ borderRadius: '100px', padding: '12px 24px' }}>Join Session</Button>
          </div>
        </Card>

        {/* Completed Style Record */}
        <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '32px', opacity: 0.7 }}>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', padding: '16px', backgroundColor: 'var(--bg-gray)', borderRadius: '16px', minWidth: '100px' }}>
              <div style={{ fontWeight: 800, fontSize: '32px', color: 'var(--neutral)', lineHeight: 1 }}>28</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--neutral)', textTransform: 'uppercase', marginTop: '4px' }}>Sep</div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ padding: '6px 12px', backgroundColor: 'var(--bg-gray)', color: 'var(--text-muted)', fontSize: '12px', fontWeight: 800, borderRadius: '100px', textTransform: 'uppercase' }}>Completed</span>
                <span style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: 600 }}>4:30 PM • 30 Min Trial</span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '8px' }}>Intro to Physics</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="ph-fill ph-chalkboard-teacher" style={{ fontSize: '20px' }}></i> Michael Chen
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button variant="secondary" style={{ borderRadius: '100px', padding: '12px 24px' }}>Leave Review</Button>
            <Button variant="secondary" style={{ borderRadius: '100px', padding: '12px 24px' }}>Book Again</Button>
          </div>
        </Card>

      </div>
    </div>
  );
}
