import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ROUTES, ACCENT } from '../lib/routes';

export default function Dashboard() {
  return (
    <Layout active="clients">
      <div style={{ flexGrow: 1, padding: '56px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 32, overflow: 'visible' }}>

        <div>
          <h1 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>Hey, Alex 👋</h1>
          <p style={{ margin: '8px 0 0', fontSize: 16, color: '#5B6472' }}>Here's what's happening in your network.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, color: '#101B42' }}>Referrals</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>

            <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, boxSizing: 'border-box' }}>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path d="M36 8c14 0 25 11 25 22H11c0-11 11-22 25-22Z" fill="#DCE6FF" />
                <path d="M36 8c14 0 25 11 25 22H36V8Z" fill="#EAF0FF" />
                <line x1="36" y1="8" x2="36" y2="58" stroke="#2F5FE9" strokeWidth="2.5" />
                <path d="M20 58c4 6 10 6 16 0 6 6 12 6 16 0" stroke="#101B42" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="58" cy="16" r="5" fill="#FDBA3B" />
              </svg>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 16, color: '#101B42' }}>Nothing new yet</div>
              <div style={{ fontSize: 14, color: '#8B93A1', textAlign: 'center' }}>Check back soon for a fresh referral.</div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: 24, display: 'flex', gap: 14, alignItems: 'flex-start', boxSizing: 'border-box' }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42', marginBottom: 4 }}>Refer a New Client</div>
                <div style={{ fontSize: 13, color: '#8B93A1', lineHeight: 1.5 }}>Send business to one of our lending partners — no fees on your end.</div>
              </div>
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, borderBottom: '1px solid #E5E7EB', paddingBottom: 14 }}>
            <button type="button" className="tab-btn" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: ACCENT, borderBottom: `2px solid ${ACCENT}`, paddingBottom: 14, marginBottom: -15 }}>Active</button>
            <button type="button" className="tab-btn" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#9AA3AF' }}>Nurture</button>
            <div style={{ flexGrow: 1 }} />
            <div className="search-wrap" style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: 10, padding: '9px 14px' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#9AA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
              <label htmlFor="client-search" className="sr-only">Search clients</label>
              <input id="client-search" type="text" className="search-input" placeholder="Search by name, phone, email, or property" style={{ border: 'none', fontFamily: 'inherit', fontSize: 14, color: '#101B42', background: 'transparent', width: 280 }} />
            </div>
            <button type="button" className="icon-btn" aria-label="Sort clients" style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid #E5E7EB', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#5B6472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 15l5 5 5-5" /><path d="M7 9l5-5 5 5" /></svg>
            </button>
            <button type="button" className="icon-btn" aria-label="Filter clients" style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid #E5E7EB', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#5B6472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
            </button>
          </div>
          <p style={{ margin: '12px 0 0', fontSize: 13, color: '#8B93A1' }}>Showing 1 Active Client</p>
        </div>

        <Link to={ROUTES['ClientDetail.dc.html']} className="res-card" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 14, padding: '16px 20px', textDecoration: 'none', boxSizing: 'border-box' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JK</div>
            <div title="Pillar: Military — Air Force" style={{ position: 'absolute', bottom: -2, right: -2, width: 18, height: 18, borderRadius: '50%', background: '#101B42', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
              <svg viewBox="0 0 24 24" width="9" height="9" fill="#FDBA3B"><path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z" /></svg>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>Jordan Kim</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#FDECEC', color: '#DC2626', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>
                <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="#DC2626" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                Urgent
              </span>
            </div>
            <div style={{ fontSize: 11, color: '#9AA3AF', marginTop: 2 }}>Connected by Connie White</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 5 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#101B42', color: '#FDBA3B', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 999 }}>
                <svg viewBox="0 0 24 24" width="9" height="9" fill="#FDBA3B"><path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z" /></svg>
                Air Force
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#EAF0FF', color: ACCENT, fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 999 }}>
                <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z" /></svg>
                Active-Duty
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#EAF0FF', color: ACCENT, fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 999 }}>
                <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="9" rx="1" /><path d="M3 10 12 4l9 6" /><path d="M7 19v-5M12 19v-5M17 19v-5" /></svg>
                Heritage Mortgage
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }} aria-label="Listing, Buying, and Lending referrals active">
            <span style={{ width: 22, height: 22, borderRadius: 6, background: '#F97316', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Listing">L</span>
            <span style={{ width: 22, height: 22, borderRadius: 6, background: '#22C55E', color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Buying">B</span>
            <span style={{ width: 22, height: 22, borderRadius: 6, background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Lending">$</span>
          </div>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
        </Link>

      </div>

      <button type="button" className="fab-btn" aria-label="Chat with support" style={{ position: 'absolute', bottom: 32, right: 32, width: 56, height: 56, borderRadius: '50%', background: ACCENT, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 20px rgba(47,95,233,0.35)' }}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
      </button>
    </Layout>
  );
}
