import { Link } from 'react-router-dom';
import { ROUTES, ACCENT } from '../lib/routes';

export default function Hero() {
  return (
    <div style={{ width: 1440, height: 1200, boxSizing: 'border-box', background: '#101B42', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '88px 40px 0', overflow: 'hidden', position: 'relative', fontFamily: "'Inter', system-ui, sans-serif" }}>

      <div style={{ textAlign: 'center', maxWidth: 640 }}>
        <h1 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, color: '#FFFFFF' }}>Every referral, organized in one place.</h1>
        <p style={{ margin: '18px 0 0', fontSize: 18, lineHeight: 1.6, color: '#C7D0E8' }}>See new leads the moment they land, and walk every client from first contact to keys in hand.</p>
      </div>

      <Link to={ROUTES['SignIn.dc.html']} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: ACCENT, color: '#FFFFFF', borderRadius: 999, padding: '15px 34px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Get Started</Link>

      <div style={{ width: 340, height: 700, background: '#FFFFFF', borderRadius: 46, boxShadow: '0 40px 80px rgba(0,0,0,0.4)', padding: 12, boxSizing: 'border-box', position: 'relative', marginTop: 44, flexShrink: 0 }}>

        <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', position: 'relative', background: '#F6F7F5' }}>

          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 90, height: 5, background: '#D9DEE8', borderRadius: 3, zIndex: 3 }}></div>

          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 88, background: '#101B42', boxSizing: 'border-box', padding: '26px 18px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 0.4, color: '#FFFFFF' }}>Show Up Nation</span>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JK</div>
          </div>

          <div style={{ position: 'absolute', top: 88, left: 0, right: 0, bottom: 64, padding: 16, boxSizing: 'border-box', overflow: 'hidden' }}>

            <h3 style={{ margin: '0 0 10px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: '#101B42' }}>Referrals</h3>

            <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 14, padding: 12, boxShadow: '0 2px 6px rgba(16,27,66,0.06)', position: 'relative', boxSizing: 'border-box' }}>
              <button type="button" aria-label="Dismiss" style={{ position: 'absolute', top: 8, right: 8, width: 18, height: 18, padding: 0, border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#9AA3AF" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingRight: 16 }}>
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"></path><circle cx="12" cy="9.5" r="2.2"></circle></svg>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 11, color: '#101B42' }}>New referral in Denver, CO 80202</span>
              </div>
              <button type="button" style={{ marginTop: 10, width: '100%', background: ACCENT, color: '#FFFFFF', border: 'none', borderRadius: 999, padding: 9, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>Claim Now</button>
            </div>

            <div style={{ margin: '-6px 0 0', borderRadius: 16, overflow: 'hidden', border: '1px solid #ECEEF1', boxShadow: '0 10px 22px rgba(16,27,66,0.14)', background: '#FFFFFF', position: 'relative', zIndex: 2 }}>
              <div style={{ background: ACCENT, padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 11, color: '#FFFFFF' }}>Listing</span>
                <span style={{ fontSize: 10, color: '#E4EBFF' }}>Heritage Mortgage Referral</span>
              </div>
              <div style={{ padding: '12px 14px 14px', boxSizing: 'border-box' }}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42', marginBottom: 6 }}>Jordan Kim</div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#101B42', color: '#FDBA3B', fontSize: 9, fontWeight: 600, padding: '3px 8px', borderRadius: 999 }}><svg viewBox="0 0 24 24" width="9" height="9" fill="#FDBA3B"><path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z"></path></svg>Air Force</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#EAF0FF', color: ACCENT, fontSize: 9, fontWeight: 600, padding: '3px 8px', borderRadius: 999 }}><svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z"></path></svg>Active-Duty</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#EAF0FF', color: ACCENT, fontSize: 9, fontWeight: 600, padding: '3px 8px', borderRadius: 999 }}><svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="9" rx="1"></rect><path d="M3 10 12 4l9 6"></path><path d="M7 19v-5M12 19v-5M17 19v-5"></path></svg>Heritage Mortgage</span>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 600, color: '#101B42' }}><span>LISTING: Under Contract</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>5/6</span></div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 4 }}>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                  </div>
                </div>
                <div style={{ marginTop: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 600, color: '#101B42' }}><span>BUYING: Touring Homes</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/6</span></div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 4 }}>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                  </div>
                </div>
                <div style={{ marginTop: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 600, color: '#101B42' }}><span>LENDING: Pre-Approved</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/8</span></div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 4 }}>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: ACCENT }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: ACCENT }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 10, borderRadius: 16, border: '1px solid #ECEEF1', boxShadow: '0 2px 6px rgba(16,27,66,0.06)', background: '#FFFFFF', padding: '12px 14px', boxSizing: 'border-box' }}>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: '#101B42', marginBottom: 8 }}>Morgan &amp; Alex Lee</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 600, color: '#101B42' }}><span>BUYING: Under Contract</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>5/6</span></div>
              <div style={{ display: 'flex', gap: 3, marginTop: 4 }}>
                <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#22C55E' }}></div>
                <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#22C55E' }}></div>
                <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#22C55E' }}></div>
                <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#22C55E' }}></div>
                <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#22C55E' }}></div>
                <div style={{ flexGrow: 1, height: 5, borderRadius: 3, background: '#E5E7EB' }}></div>
              </div>
            </div>

          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 64, background: '#FFFFFF', borderTop: '1px solid #ECEEF1', display: 'flex', alignItems: 'center', justifyContent: 'space-around', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: ACCENT }}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7"></path><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"></path></svg>
              <span style={{ fontSize: 9, fontWeight: 600 }}>Home</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#9AA3AF' }}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>
              <span style={{ fontSize: 9, fontWeight: 600 }}>Clients</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#9AA3AF' }}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5"></path><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path></svg>
              <span style={{ fontSize: 9, fontWeight: 600 }}>Resources</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#9AA3AF' }}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 3.5"></path><circle cx="12" cy="16.5" r="0.6" fill="#9AA3AF" stroke="none"></circle></svg>
              <span style={{ fontSize: 9, fontWeight: 600 }}>Help</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
