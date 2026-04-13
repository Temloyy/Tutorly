import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function TutorProfileManager() {
  return (
    <div style={{ padding: '0 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <div>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--sys-neutral-colour-role)', letterSpacing: '-0.02em', marginBottom: '8px' }}>Edit Profile</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Manage how you appear to students looking to book sessions.</p>
        </div>
        <Button>Save Profile</Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Card>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--sys-neutral-colour-role)', marginBottom: '32px' }}>Basic Details</h2>
          
          <div style={{ marginBottom: '32px' }}>
             <Input label="Headline" defaultValue="PhD Student in Applied Mathematics" />
          </div>

          <div>
             <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--sys-neutral-colour-role)', marginBottom: '12px', display: 'block' }}>About You</label>
             <textarea 
                defaultValue="I've been tutoring calculus, linear algebra, and physics for over 5 years. Let's make math easy!"
                style={{ width: '100%', minHeight: '160px', padding: '16px', borderRadius: '12px', border: '1px solid var(--sys-color-grey03)', backgroundColor: 'var(--sys-on-primary-colour-role)', outline: 'none', fontFamily: 'inherit', fontSize: '16px' }}
             />
          </div>
        </Card>

        <Card>
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--sys-neutral-colour-role)', marginBottom: '32px' }}>Teaching & Pricing</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div>
               <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--sys-neutral-colour-role)', marginBottom: '12px', display: 'block' }}>Subjects</label>
               <input type="text" defaultValue="Mathematics, Physics" style={{ width: '100%', padding: '16px', border: '1px solid var(--sys-color-grey03)', borderRadius: '12px', backgroundColor: 'var(--sys-on-primary-colour-role)', outline: 'none', fontSize: '16px' }} />
            </div>
            
            <div>
              <Input label="Hourly Rate (USD)" type="number" defaultValue="45" />
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
