import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, ACCENT } from '../lib/routes';
import Layout from '../components/Layout';

const MEMBER_COURSES = [
  {
    key: 'referral-handoffs',
    iconBg: '#EAF0FF',
    stroke: ACCENT,
    icon: (
      <path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5" />
    ),
    icon2: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />,
    title: 'Referral Handoffs 101',
    meta: '4 lessons · 35 min',
    statusLabel: 'Complete',
    statusBg: '#EAFBF0',
    statusColor: '#22C55E',
  },
  {
    key: 'listing-buying',
    iconBg: '#FFF3EA',
    stroke: '#F97316',
    icon: <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />,
    title: 'Working the Listing → Buying Connection',
    meta: '6 lessons · 50 min',
    statusLabel: 'In Progress',
    statusBg: '#FFF3EA',
    statusColor: '#F97316',
  },
  {
    key: 'military-relocation',
    iconBg: '#EAF0FF',
    stroke: ACCENT,
    icon: <path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z" />,
    title: 'Military Relocation Essentials',
    meta: '5 lessons · 40 min',
    statusLabel: 'Not Started',
    statusBg: '#F2F3F5',
    statusColor: '#9AA3AF',
  },
  {
    key: 'notes-vs-tickets',
    iconBg: '#EAF0FF',
    stroke: ACCENT,
    icon: <path d="M21 12a2 2 0 0 0-2-2 2 2 0 0 1 0-4V4H5v2a2 2 0 0 1 0 4 2 2 0 0 0 0 4 2 2 0 0 1 0 4v2h14v-2a2 2 0 0 1 0-4Z" />,
    title: 'Notes vs. Tickets: Working a Case',
    meta: '3 lessons · 25 min',
    statusLabel: 'Not Started',
    statusBg: '#F2F3F5',
    statusColor: '#9AA3AF',
  },
  {
    key: 'building-referral-network',
    iconBg: '#EAF0FF',
    stroke: ACCENT,
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </>
    ),
    title: 'Building Your Referral Network',
    meta: '4 lessons · 30 min',
    statusLabel: 'Not Started',
    statusBg: '#F2F3F5',
    statusColor: '#9AA3AF',
  },
];

const PARTNER_COURSES = [
  {
    key: 'partner-onboarding',
    iconBg: '#EAF5F4',
    stroke: '#0EA5A4',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    title: 'Partner Onboarding Guide',
    meta: '3 lessons · 20 min',
    statusLabel: 'Complete',
    statusBg: '#EAFBF0',
    statusColor: '#22C55E',
  },
  {
    key: 'ticket-sla',
    iconBg: '#FFF3EA',
    stroke: '#F97316',
    icon: <path d="M21 12a2 2 0 0 0-2-2 2 2 0 0 1 0-4V4H5v2a2 2 0 0 1 0 4 2 2 0 0 0 0 4 2 2 0 0 1 0 4v2h14v-2a2 2 0 0 1 0-4Z" />,
    title: 'Ticket & Response SLAs',
    meta: '4 lessons · 30 min',
    statusLabel: 'In Progress',
    statusBg: '#FFF3EA',
    statusColor: '#F97316',
  },
  {
    key: 'co-marketing',
    iconBg: '#EAF5F4',
    stroke: '#0EA5A4',
    icon: (
      <>
        <rect x="3" y="10" width="18" height="9" rx="1" />
        <path d="M3 10 12 4l9 6" />
        <path d="M7 19v-5M12 19v-5M17 19v-5" />
      </>
    ),
    title: 'Co-Marketing Guidelines',
    meta: '5 lessons · 35 min',
    statusLabel: 'Not Started',
    statusBg: '#F2F3F5',
    statusColor: '#9AA3AF',
  },
  {
    key: 'referral-chain',
    iconBg: '#EAF5F4',
    stroke: '#0EA5A4',
    icon: (
      <>
        <path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      </>
    ),
    title: 'Understanding the Referral Chain',
    meta: '4 lessons · 30 min',
    statusLabel: 'Not Started',
    statusBg: '#F2F3F5',
    statusColor: '#9AA3AF',
  },
];

function CourseCard({ course }) {
  return (
    <div
      className="course-card"
      style={{
        background: '#FFFFFF',
        border: '1px solid #ECEEF1',
        borderRadius: 16,
        padding: 20,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: course.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={course.stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {course.icon}
          {course.icon2}
        </svg>
      </div>
      <div>
        <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42', marginBottom: 4 }}>
          {course.title}
        </div>
        <div style={{ fontSize: 12, color: '#9AA3AF' }}>{course.meta}</div>
      </div>
      <span
        style={{
          alignSelf: 'flex-start',
          background: course.statusBg,
          color: course.statusColor,
          fontSize: 11,
          fontWeight: 700,
          padding: '3px 10px',
          borderRadius: 999,
        }}
      >
        {course.statusLabel}
      </span>
    </div>
  );
}

export default function NetworkLearningCenter() {
  const [tab, setTab] = useState('members');
  const isMembers = tab === 'members';
  const isPartners = tab === 'partners';

  const membersTabBg = isMembers ? ACCENT : '#EAF0FF';
  const membersTabColor = isMembers ? '#FFFFFF' : ACCENT;
  const partnersTabBg = isPartners ? '#0EA5A4' : '#EAF5F4';
  const partnersTabColor = isPartners ? '#FFFFFF' : '#0EA5A4';

  return (
    <Layout active="resources">
      <div style={{ flexGrow: 1, padding: '56px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24, overflow: 'visible' }}>

        <Link
          to={ROUTES['Artboard-kjhi.dc.html']}
          className="back-link"
          style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#5B6472', fontSize: 14, fontWeight: 600, textDecoration: 'none', width: 'fit-content' }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Resources
        </Link>

        <div>
          <h1 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>
            Network Learning Center
          </h1>
          <p style={{ margin: 0, fontSize: 15, color: '#5B6472', maxWidth: 640, lineHeight: 1.5 }}>
            Training and playbooks for everyone in the Show Up Nation network — the members who work referrals every day, and the partners who receive them.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            type="button"
            onClick={() => setTab('members')}
            className="tab-btn"
            style={{ border: 'none', borderRadius: 999, padding: '10px 22px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', background: membersTabBg, color: membersTabColor }}
          >
            For Members
          </button>
          <button
            type="button"
            onClick={() => setTab('partners')}
            className="tab-btn"
            style={{ border: 'none', borderRadius: 999, padding: '10px 22px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', background: partnersTabBg, color: partnersTabColor }}
          >
            For Partners
          </button>
        </div>

        {isMembers && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20, maxWidth: 1000 }}>
            {MEMBER_COURSES.map((course) => (
              <CourseCard key={course.key} course={course} />
            ))}
          </div>
        )}

        {isPartners && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20, maxWidth: 1000 }}>
            {PARTNER_COURSES.map((course) => (
              <CourseCard key={course.key} course={course} />
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
}
