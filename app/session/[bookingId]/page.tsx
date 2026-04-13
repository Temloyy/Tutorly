import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function SessionRoom({ params }: { params: Promise<{ bookingId: string }> }) {
  const { bookingId } = await params;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
      
      {/* Session Header */}
      <header style={{ height: '64px', borderBottom: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
          <h1 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Advanced Calculus • Dr. Sarah Jenkins</h1>
          <span style={{ padding: '4px 8px', backgroundColor: '#1e293b', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>45:12 remaining</span>
        </div>
        <Link href={`/session/${bookingId}/review`}>
          <Button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none' }}>End Session</Button>
        </Link>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Main Video Area */}
        <main style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          
          {/* Main Presenter Video */}
          <div style={{ width: '100%', height: '100%', backgroundColor: '#1e293b', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', opacity: 0.5 }}>
              <i className="ph ph-video-camera" style={{ fontSize: '64px', marginBottom: '16px' }}></i>
              <p>Tutor Video Feed</p>
            </div>
          </div>

          {/* Picture in Picture User Video */}
          <div style={{ position: 'absolute', top: '48px', right: '48px', width: '240px', height: '160px', backgroundColor: '#334155', borderRadius: '8px', border: '2px solid white', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <p style={{ fontSize: '12px', opacity: 0.5 }}>My Camera</p>
          </div>

          {/* Controls Overlay */}
          <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '12px 24px', borderRadius: '32px', display: 'flex', gap: '16px', backdropFilter: 'blur(8px)' }}>
            <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', backgroundColor: '#334155', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph-fill ph-microphone" style={{ fontSize: '20px' }}></i></button>
            <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', backgroundColor: '#334155', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph-fill ph-video-camera" style={{ fontSize: '20px' }}></i></button>
            <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', backgroundColor: '#334155', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph-fill ph-screencast" style={{ fontSize: '20px' }}></i></button>
            <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', backgroundColor: '#334155', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="ph-fill ph-chalkboard" style={{ fontSize: '20px' }}></i></button>
          </div>

        </main>

        {/* Sidebar */}
        <aside style={{ width: '320px', borderLeft: '1px solid #334155', backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', borderBottom: '1px solid #334155' }}>
            <div style={{ flex: 1, padding: '16px', textAlign: 'center', borderBottom: '2px solid var(--primary)', fontWeight: 600, cursor: 'pointer' }}>Chat</div>
            <div style={{ flex: 1, padding: '16px', textAlign: 'center', opacity: 0.6, cursor: 'pointer' }}>Notes</div>
          </div>

          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
              <span style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px', display: 'block' }}>Sarah (Tutor) • 4:32 PM</span>
              <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '8px', borderTopLeftRadius: '0', fontSize: '14px' }}>
                Hey! Are you ready to begin? I've loaded the worksheet onto the whiteboard.
              </div>
            </div>
            <div style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
               <span style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px', display: 'block', textAlign: 'right' }}>You • 4:33 PM</span>
              <div style={{ backgroundColor: 'var(--primary)', padding: '12px', borderRadius: '8px', borderTopRightRadius: '0', fontSize: '14px' }}>
                Yes, just adjusting my mic!
              </div>
            </div>
          </div>

          <div style={{ padding: '16px', borderTop: '1px solid #334155' }}>
            <div style={{ display: 'flex', backgroundColor: '#1e293b', borderRadius: '8px', overflow: 'hidden' }}>
              <input type="text" placeholder="Type a message..." style={{ width: '100%', padding: '12px', backgroundColor: 'transparent', border: 'none', color: 'white', outline: 'none' }} />
              <button style={{ backgroundColor: 'transparent', border: 'none', padding: '0 16px', color: 'var(--primary)', cursor: 'pointer' }}><i className="ph-fill ph-paper-plane-right" style={{ fontSize: '20px' }}></i></button>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
}
