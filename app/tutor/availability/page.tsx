import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AvailabilityManager() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div style={{ padding: '0 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--neutral)', letterSpacing: '-0.02em', marginBottom: '8px' }}>Availability</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Students will only be able to book within these slots.</p>
        </div>
        <Button size="large" style={{ borderRadius: '100px', padding: '16px 32px' }}>Save Changes</Button>
      </div>

      <Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {days.map((day, idx) => (
            <div key={day} style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', paddingBottom: '32px', borderBottom: idx < days.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
              <div style={{ width: '150px', paddingTop: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={idx < 5} style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
                  <span style={{ fontWeight: 700, color: 'var(--neutral)', fontSize: '18px' }}>{day}</span>
                </label>
              </div>

              {idx < 5 ? (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <select style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--sys-color-grey03)', outline: 'none', backgroundColor: 'var(--sys-on-primary-colour-role)', fontSize: '16px', fontWeight: 600 }}>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                    </select>
                    <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>to</span>
                    <select style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--sys-color-grey03)', outline: 'none', backgroundColor: 'var(--sys-on-primary-colour-role)', fontSize: '16px', fontWeight: 600 }}>
                      <option>05:00 PM</option>
                      <option>06:00 PM</option>
                    </select>
                    <button style={{ backgroundColor: 'var(--bg-gray)', border: 'none', color: '#ef4444', cursor: 'pointer', marginLeft: '8px', padding: '16px', borderRadius: '50%' }}>
                        <i className="ph ph-trash" style={{ fontSize: '20px' }}></i>
                    </button>
                  </div>
                  <button style={{ alignSelf: 'flex-start', border: 'none', background: 'none', color: 'var(--primary)', fontWeight: 700, fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
                    <i className="ph-bold ph-plus"></i> Add Hours
                  </button>
                </div>
              ) : (
                <div style={{ flex: 1, paddingTop: '12px', color: 'var(--text-muted)', fontSize: '16px', fontStyle: 'italic' }}>
                  Unavailable
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}
