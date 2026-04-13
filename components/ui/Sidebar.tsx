'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

type Role = 'student' | 'tutor';

interface NavItemProps {
  href: string;
  label: string;
  icon: string;
}

const STUDENT_NAV: NavItemProps[] = [
  { href: '/student/dashboard', label: 'Dashboard', icon: 'ph-house' },
  { href: '/student/discover', label: 'Discover Tutors', icon: 'ph-magnifying-glass' },
  { href: '/student/sessions', label: 'My Sessions', icon: 'ph-calendar-check' },
  { href: '/student/messages', label: 'Messages', icon: 'ph-chat-circle' },
  { href: '/student/saved', label: 'Saved Tutors', icon: 'ph-heart' },
];

const TUTOR_NAV: NavItemProps[] = [
  { href: '/tutor/dashboard', label: 'Dashboard', icon: 'ph-house' },
  { href: '/tutor/sessions', label: 'My Sessions', icon: 'ph-calendar-check' },
  { href: '/tutor/availability', label: 'Availability', icon: 'ph-clock' },
  { href: '/tutor/earnings', label: 'Earnings', icon: 'ph-currency-dollar' },
  { href: '/tutor/messages', label: 'Messages', icon: 'ph-chat-circle' },
];

const SECONDARY_NAV: NavItemProps[] = [
  { href: '/settings', label: 'Settings', icon: 'ph-gear' },
  { href: '/support', label: 'Help / Support', icon: 'ph-question' },
];

export function Sidebar({ role }: { role: Role }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = role === 'student' ? STUDENT_NAV : TUTOR_NAV;

  // Handle responsiveness via hydration effect if needed, but CSS handles layout best.
  // We can default tablet to collapsed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024 && window.innerWidth > 768) {
        setIsCollapsed(true);
      } else if (window.innerWidth > 1024) {
         setIsCollapsed(false);
      }
    };
    
    // Set initial
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      <div className={styles.mobileTrigger} onClick={toggleMobile}>
        <i className="ph ph-list" style={{ fontSize: '24px' }}></i>
      </div>

      <div className={`${styles.overlay} ${isMobileOpen ? styles.mobileOpen : ''}`} onClick={toggleMobile}></div>

      <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : styles.expanded} ${isMobileOpen ? styles.mobileOpen : ''}`}>
        
        {/* Header */}
        <div className={`${styles.header} ${isCollapsed ? styles.headerCollapsed : ''}`}>
          {isCollapsed ? (
            <Link href="/" className={styles.brandIcon}>T</Link>
          ) : (
             <Link href="/" className={styles.brand}>Tutorly</Link>
          )}
          <button onClick={toggleCollapse} className={styles.toggleBtn} aria-label="Toggle Sidebar">
            <i className={`ph ${isCollapsed ? 'ph-caret-right' : 'ph-caret-left'}`} style={{ fontSize: '20px' }}></i>
          </button>
        </div>

        {/* Primary Nav */}
        <nav className={styles.navSection} aria-label="Primary Navigation">
          {navItems.map(item => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`${styles.navItem} ${isCollapsed ? styles.navItemCollapsed : ''} ${isActive ? styles.active : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <i className={`ph ${item.icon} ${styles.navIcon} ${isActive ? 'ph-fill' : ''}`}></i>
                {!isCollapsed && <span>{item.label}</span>}
                {isCollapsed && <div className={styles.tooltip}>{item.label}</div>}
              </Link>
            )
          })}
        </nav>

        {/* Secondary Nav */}
        <nav className={styles.secondaryNav} aria-label="Secondary Navigation">
          {SECONDARY_NAV.map(item => {
             const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
             return (
               <Link 
                 key={item.href} 
                 href={item.href} 
                 className={`${styles.navItem} ${isCollapsed ? styles.navItemCollapsed : ''} ${isActive ? styles.active : ''}`}
               >
                 <i className={`ph ${item.icon} ${styles.navIcon} ${isActive ? 'ph-fill' : ''}`}></i>
                 {!isCollapsed && <span>{item.label}</span>}
                 {isCollapsed && <div className={styles.tooltip}>{item.label}</div>}
               </Link>
             )
          })}
        </nav>

        {/* User Profile */}
        <div className={`${styles.userSection} ${isCollapsed ? styles.userSectionCollapsed : ''}`}>
          <div className={styles.avatar}>{role === 'student' ? 'S' : 'T'}</div>
          {!isCollapsed && (
            <>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{role === 'student' ? 'Student View' : 'Dr. Jenkins'}</span>
                <span className={styles.userRole}>{role}</span>
              </div>
              <i className={`ph ph-caret-down ${styles.userDropdown}`}></i>
            </>
          )}
          {isCollapsed && <div className={styles.tooltip}>Profile Options</div>}
        </div>

      </aside>
    </>
  );
}
