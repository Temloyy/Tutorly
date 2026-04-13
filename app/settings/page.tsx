import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div style={{ padding: '0 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--sys-neutral-colour-role)', letterSpacing: '-0.02em' }}>Account Settings</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '48px' }}>
          
          <aside>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '16px 24px', backgroundColor: 'var(--sys-primary-colour-role)', color: 'var(--sys-on-primary-colour-role)', borderRadius: '12px', fontWeight: 600 }}>Personal Info</div>
              <div style={{ padding: '16px 24px', color: 'var(--text-muted)', fontWeight: 600, cursor: 'pointer', borderRadius: '12px', transition: 'background-color 0.2s' }}>Security</div>
              <div style={{ padding: '16px 24px', color: 'var(--text-muted)', fontWeight: 600, cursor: 'pointer', borderRadius: '12px', transition: 'background-color 0.2s' }}>Notifications</div>
              <div style={{ padding: '16px 24px', color: 'var(--text-muted)', fontWeight: 600, cursor: 'pointer', borderRadius: '12px', transition: 'background-color 0.2s' }}>Payment Methods</div>
            </nav>
          </aside>

          <main style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Card>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--neutral)', marginBottom: '32px' }}>Personal Information</h2>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: '40px' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--sys-primary-colour-role)', color: 'var(--sys-on-primary-colour-role)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', fontWeight: 800 }}>J</div>
                <div>
                  <Button variant="secondary" style={{ marginBottom: '8px' }}>Change Avatar</Button>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>JPG, GIF or PNG. Max size of 800K.</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <Input label="First Name" defaultValue="John" />
                <Input label="Last Name" defaultValue="Doe" />
              </div>

              <Input label="Email Address" type="email" defaultValue="john.doe@example.com" style={{ marginBottom: '24px' }} />
              
              <div>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--sys-neutral-colour-role)', marginBottom: '12px', display: 'block' }}>Timezone</label>
                <select style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--sys-color-grey03)', outline: 'none', backgroundColor: 'var(--sys-on-primary-colour-role)', fontSize: '16px' }}>
                  <option>(GMT-05:00) Eastern Time</option>
                  <option>(GMT-08:00) Pacific Time</option>
                  <option>(GMT+01:00) Central European Time</option>
                </select>
              </div>

              <div style={{ marginTop: '48px', borderTop: '1px solid var(--border-color)', paddingTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button>Save Changes</Button>
              </div>
            </Card>

            <Card style={{ border: '1px solid #ef4444', backgroundColor: '#fef2f2' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ef4444', marginBottom: '12px' }}>Danger Zone</h2>
              <p style={{ color: '#991b1b', marginBottom: '24px', fontSize: '15px' }}>Once you delete your account, there is no going back. Please be certain.</p>
              <Button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none' }}>Delete Account</Button>
            </Card>
          </main>

        </div>
      </div>
    </div>
  );
}
