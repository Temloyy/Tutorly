'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './messages.module.css';

type Message = {
  id: string;
  body: string;
  sender: 'me' | 'them';
  time: string;
  status: 'sent' | 'delivered' | 'read';
};

type Conversation = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  role: string;
};

const MOCK_CONVERSATIONS: Conversation[] = [
  { id: '1', name: 'Dr. Sarah Jenkins', avatar: 'SJ', lastMessage: 'See you at 4 PM!',       time: '2h ago',      unread: 2, role: 'Math & Physics' },
  { id: '2', name: 'Marcus Chen',       avatar: 'MC', lastMessage: 'Check out this resource…', time: 'Yesterday',   unread: 0, role: 'Computer Science' },
  { id: '3', name: 'Elena Rodriguez',   avatar: 'ER', lastMessage: 'Great session today.',     time: 'Mon',         unread: 0, role: 'Languages' },
];

const MOCK_MESSAGES: Record<string, Message[]> = {
  '1': [
    { id: 'm1', body: 'Hi! Looking forward to our session tomorrow.',   sender: 'them', time: '10:30 AM', status: 'read' },
    { id: 'm2', body: 'Yes, me too! Should I prepare anything?',         sender: 'me',   time: '10:32 AM', status: 'read' },
    { id: 'm3', body: 'Just review chapter 5 on derivatives.',           sender: 'them', time: '10:35 AM', status: 'read' },
    { id: 'm4', body: 'Got it! See you at 4 PM!',                       sender: 'them', time: '10:36 AM', status: 'read' },
  ],
  '2': [
    { id: 'm5', body: 'Hey, do you have any resources on Big O?',        sender: 'me',   time: 'Yesterday', status: 'read' },
    { id: 'm6', body: "Check out this resource…",                        sender: 'them', time: 'Yesterday', status: 'delivered' },
  ],
  '3': [
    { id: 'm7', body: 'Great session today.',                            sender: 'them', time: 'Mon',       status: 'read' },
  ],
};

export default function MessagesPage() {
  const [activeId, setActiveId] = useState<string>('1');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Record<string, Message[]>>(MOCK_MESSAGES);
  const bottomRef = useRef<HTMLDivElement>(null);

  const active = MOCK_CONVERSATIONS.find(c => c.id === activeId)!;
  const thread = messages[activeId] ?? [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeId, thread.length]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const msg: Message = {
      id: `msg-${Date.now()}`,
      body: input.trim(),
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    };
    setMessages(prev => ({ ...prev, [activeId]: [...(prev[activeId] ?? []), msg] }));
    setInput('');
  };

  return (
    <div className={styles.layout}>
      {/* Conversation List */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h1 className={styles.sidebarTitle}>Messages</h1>
          <button className={styles.newChatBtn} title="New conversation">
            <i className="ph-bold ph-pencil-simple-line"></i>
          </button>
        </div>

        <div className={styles.searchWrap}>
          <i className="ph ph-magnifying-glass" style={{ color: 'var(--sys-color-grey04)', fontSize: '16px' }}></i>
          <input type="text" className={styles.searchInput} placeholder="Search messages…" />
        </div>

        <div className={styles.conversationList}>
          {MOCK_CONVERSATIONS.map(c => (
            <button
              key={c.id}
              className={`${styles.convItem} ${activeId === c.id ? styles.convItemActive : ''}`}
              onClick={() => setActiveId(c.id)}
            >
              <div className={styles.convAvatar}>{c.avatar}</div>
              <div className={styles.convInfo}>
                <div className={styles.convTopRow}>
                  <span className={styles.convName}>{c.name}</span>
                  <span className={styles.convTime}>{c.time}</span>
                </div>
                <div className={styles.convBottomRow}>
                  <span className={styles.convLast}>{c.lastMessage}</span>
                  {c.unread > 0 && <span className={styles.unreadBadge}>{c.unread}</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat Window */}
      <main className={styles.chatMain}>
        {/* Chat Header */}
        <div className={styles.chatHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className={styles.chatAvatar}>{active.avatar}</div>
            <div>
              <h2 className={styles.chatName}>{active.name}</h2>
              <p className={styles.chatRole}>{active.role}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className={styles.chatAction} title="Video call">
              <i className="ph ph-video-camera" style={{ fontSize: '20px' }}></i>
            </button>
            <button className={styles.chatAction} title="View profile">
              <i className="ph ph-user-circle" style={{ fontSize: '20px' }}></i>
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className={styles.thread}>
          <div className={styles.dateSep}>Today</div>
          {thread.map(m => (
            <div key={m.id} className={`${styles.bubble} ${m.sender === 'me' ? styles.bubbleMe : styles.bubbleThem}`}>
              <div className={styles.bubbleBody}>{m.body}</div>
              <div className={styles.bubbleMeta}>
                <span className={styles.bubbleTime}>{m.time}</span>
                {m.sender === 'me' && (
                  <i className={`ph-fill ${m.status === 'read' ? 'ph-checks' : 'ph-check'}`} style={{ fontSize: '13px', opacity: 0.7 }}></i>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Composer */}
        <div className={styles.composer}>
          <button className={styles.composerAction} title="Attach file">
            <i className="ph ph-paperclip" style={{ fontSize: '20px' }}></i>
          </button>
          <input
            type="text"
            className={styles.composerInput}
            placeholder="Type a message…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button
            className={`${styles.sendBtn} ${input.trim() ? styles.sendBtnActive : ''}`}
            onClick={sendMessage}
            disabled={!input.trim()}
            title="Send"
          >
            <i className="ph-fill ph-paper-plane-tilt" style={{ fontSize: '18px' }}></i>
          </button>
        </div>
      </main>
    </div>
  );
}
