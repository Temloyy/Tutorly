import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function TutorDashboard() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--neutral)' }}>Tutor Dashboard</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/tutor/availability">
            <Button variant="secondary">Manage Availability</Button>
          </Link>
          <Button>View Public Profile</Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
        <Card>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Earnings (This Month)</p>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary)' }}>$450.00</h2>
          <span style={{ fontSize: '14px', color: '#10b981' }}>+ 12% from last month</span>
        </Card>
        <Card>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Upcoming Sessions</p>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--neutral)' }}>12</h2>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Next session in 2 hours</span>
        </Card>
        <Card>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>Profile Rating</p>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--neutral)' }}>4.9 <span style={{ fontSize: '20px', color: '#f59e0b' }}>★</span></h2>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Based on 45 reviews</span>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Main Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <Card>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--neutral)' }}>Today's Schedule</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Session 1 */}
              <div style={{ display: 'flex', gap: '16px', border: '1px solid var(--border-color)', padding: '16px', borderRadius: '8px' }}>
                <div style={{ borderRight: '1px solid var(--border-color)', paddingRight: '16px', minWidth: '100px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--neutral)' }}>2:00 PM</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>60 mins</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'var(--neutral)', marginBottom: '4px' }}>Advanced Calculus</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Student: James L.</div>
                </div>
                <div>
                  <Button size="default">Join Room</Button>
                </div>
              </div>

              {/* Session 2 */}
              <div style={{ display: 'flex', gap: '16px', border: '1px solid var(--border-color)', padding: '16px', borderRadius: '8px' }}>
                <div style={{ borderRight: '1px solid var(--border-color)', paddingRight: '16px', minWidth: '100px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--neutral)' }}>4:30 PM</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>30 mins (Trial)</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: 'var(--neutral)', marginBottom: '4px' }}>Python Introduction</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Student: Maria G.</div>
                </div>
                <div>
                  <Button variant="secondary">View Details</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Card>
            <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: 'var(--neutral)' }}>Action Required</h3>
            
            {/* Empty State adhering to skills/empty-state.md */}
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ fontSize: '32px', color: '#10b981', marginBottom: '12px' }}><i className="ph ph-check-circle"></i></div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>All caught up!</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                You have no pending requests or messages requiring your attention.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
