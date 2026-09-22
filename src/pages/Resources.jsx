import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ROUTES, ACCENT } from '../lib/routes';

export default function Resources() {
  return (
    <Layout active="resources">
      <div
        style={{
          flexGrow: 1,
          padding: '56px 64px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          overflow: 'visible',
        }}
      >
        <Link
          to={ROUTES['Main.dc.html']}
          className="back-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#5B6472',
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
            width: 'fit-content',
          }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <h1 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>
          Resources
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24, maxWidth: 900 }}>
          <Link
            to={ROUTES['NetworkLearningCenter.dc.html']}
            className="res-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#FFFFFF',
              border: '1px solid #ECEEF1',
              borderRadius: 16,
              padding: '20px 24px',
              cursor: 'pointer',
              textAlign: 'left',
              boxSizing: 'border-box',
              boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
              textDecoration: 'none',
            }}
          >
            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
                <path d="M22 8v6" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>Network Academy</span>
          </Link>

          <button
            type="button"
            className="res-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#FFFFFF',
              border: '1px solid #ECEEF1',
              borderRadius: 16,
              padding: '20px 24px',
              cursor: 'pointer',
              textAlign: 'left',
              boxSizing: 'border-box',
              boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
            }}
          >
            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M9 6h6" />
                <circle cx="8.5" cy="11" r="0.9" fill={ACCENT} stroke="none" />
                <circle cx="12" cy="11" r="0.9" fill={ACCENT} stroke="none" />
                <circle cx="15.5" cy="11" r="0.9" fill={ACCENT} stroke="none" />
                <circle cx="8.5" cy="14.5" r="0.9" fill={ACCENT} stroke="none" />
                <circle cx="12" cy="14.5" r="0.9" fill={ACCENT} stroke="none" />
                <circle cx="15.5" cy="14.5" r="0.9" fill={ACCENT} stroke="none" />
                <rect x="7" y="17.3" width="10" height="2.2" rx="1" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>Mortgage Calculator</span>
          </button>

          <Link
            to={ROUTES['PerformanceTracker.dc.html']}
            className="res-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#FFFFFF',
              border: '1px solid #ECEEF1',
              borderRadius: 16,
              padding: '20px 24px',
              cursor: 'pointer',
              textAlign: 'left',
              boxSizing: 'border-box',
              boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
              textDecoration: 'none',
            }}
          >
            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-9" />
                <path d="M15 6h6v6" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>Performance Tracker</span>
          </Link>

          <Link
            to={ROUTES['MemberIncentives.dc.html']}
            className="res-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#FFFFFF',
              border: '1px solid #ECEEF1',
              borderRadius: 16,
              padding: '20px 24px',
              cursor: 'pointer',
              textAlign: 'left',
              boxSizing: 'border-box',
              boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
              textDecoration: 'none',
            }}
          >
            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12v9H4v-9" />
                <path d="M2 7h20v5H2z" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>Member Incentives</span>
          </Link>

          <Link
            to={ROUTES['ReferNewClient.dc.html']}
            className="res-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#FFFFFF',
              border: '1px solid #ECEEF1',
              borderRadius: 16,
              padding: '20px 24px',
              cursor: 'pointer',
              textAlign: 'left',
              boxSizing: 'border-box',
              boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
              textDecoration: 'none',
            }}
          >
            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11v3a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1Z" />
                <path d="M16 8a4 4 0 0 1 0 7" />
                <path d="M19 5a8 8 0 0 1 0 13" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>Refer New Client</span>
          </Link>

          <button
            type="button"
            className="res-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              background: '#FFFFFF',
              border: '1px solid #ECEEF1',
              borderRadius: 16,
              padding: '20px 24px',
              cursor: 'pointer',
              textAlign: 'left',
              boxSizing: 'border-box',
              boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
            }}
          >
            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 12, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <circle cx="8" cy="11" r="2.2" />
                <path d="M4.5 16c.6-1.8 2-2.8 3.5-2.8s2.9 1 3.5 2.8" />
                <path d="M14 9h6M14 12h4" />
                <path d="m18.3 14.6.5 1.1 1.2.1-.9.8.3 1.2-1.1-.6-1.1.6.3-1.2-.9-.8 1.2-.1Z" fill={ACCENT} />
              </svg>
            </div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>Favorite Loan Officers</span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
