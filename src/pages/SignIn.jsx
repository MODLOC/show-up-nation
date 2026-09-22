import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES, ACCENT } from '../lib/routes';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();
    navigate(ROUTES['Main.dc.html']);
  }

  return (
    <div style={{ width: 1440, height: 940, boxSizing: 'border-box', display: 'flex', background: '#FFFFFF', fontFamily: "'Inter', system-ui, sans-serif", overflow: 'hidden' }}>

      <div style={{ width: 620, flexShrink: 0, padding: '64px 72px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: 38, lineHeight: 1 }}>
            <span style={{ fontWeight: 500, color: ACCENT }}>Show Up</span><span style={{ fontWeight: 800, color: '#101B42' }}> Nation</span>
          </div>
          <p style={{ margin: '10px 0 0', fontSize: 14, color: '#8B93A1' }}>Your all-in-one client referral network.</p>
        </div>

        <h1 style={{ margin: '48px 0 0', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>Sign in</h1>

        <p style={{ margin: '14px 0 32px', fontSize: 14, color: '#5B6472' }}>
          Don't have an account? <Link to={ROUTES['CreateAccount.dc.html']} className="link" style={{ color: ACCENT, textDecoration: 'underline' }}>Create now.</Link>
        </p>

        <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="signin-email" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: '#101B42', marginBottom: 8 }}>Enter your email:</label>
          <div className="field-wrap" style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px solid #E5E7EB', borderRadius: 10, padding: '13px 16px', boxSizing: 'border-box', marginBottom: 24 }}>
            <span style={{ fontWeight: 700, color: ACCENT, fontSize: 15 }}>@</span>
            <input
              id="signin-email"
              type="email"
              className="field-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: 14, color: '#101B42', background: 'transparent', width: '100%' }}
            />
          </div>

          <label htmlFor="signin-password" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: '#101B42', marginBottom: 8 }}>Enter your password:</label>
          <div className="field-wrap" style={{ display: 'flex', alignItems: 'center', gap: 10, border: '1px solid #E5E7EB', borderRadius: 10, padding: '13px 16px', boxSizing: 'border-box', marginBottom: 28 }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="4"></circle><path d="M10.5 12.5 20 3"></path><path d="M17 6l3 3"></path><path d="M14 9l2.5 2.5"></path></svg>
            <input
              id="signin-password"
              type={showPassword ? 'text' : 'password'}
              className="field-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: 14, color: '#101B42', background: 'transparent', width: '100%' }}
            />
            <button
              type="button"
              className="eye-btn"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((v) => !v)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#9AA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>

          <button
            type="submit"
            className="signin-btn"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: ACCENT, color: '#FFFFFF', border: 'none', borderRadius: 999, padding: 14, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, cursor: 'pointer', width: 220, boxSizing: 'border-box', textDecoration: 'none' }}
          >
            Sign In
          </button>
        </form>

        <a href="#" className="link" style={{ display: 'block', marginTop: 40, fontSize: 14, width: 'fit-content', color: ACCENT, textDecoration: 'underline' }}>{/* TODO: no route for forgot-password */}Forgot Password?</a>

      </div>

      <div style={{ flexGrow: 1, background: '#101B42', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '56px 40px 0', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>

        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <h2 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: 1.25, color: '#FFFFFF' }}>Every referral, organized in one place.</h2>
          <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.6, color: '#C7D0E8' }}>See new leads the moment they land, and walk every client from first contact to keys in hand.</p>
        </div>

        <div style={{ width: 300, height: 610, background: '#FFFFFF', borderRadius: 40, boxShadow: '0 30px 60px rgba(0,0,0,0.4)', padding: 10, boxSizing: 'border-box', position: 'relative', marginTop: 32, flexShrink: 0 }}>

          <div style={{ width: '100%', height: '100%', borderRadius: 30, overflow: 'hidden', position: 'relative', background: '#F6F7F5' }}>

            <div style={{ position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)', width: 78, height: 5, background: '#D9DEE8', borderRadius: 3, zIndex: 3 }}></div>

            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 76, background: '#101B42', boxSizing: 'border-box', padding: '22px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 0.4, color: '#FFFFFF' }}>Show Up Nation</span>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JK</div>
            </div>

            <div style={{ position: 'absolute', top: 76, left: 0, right: 0, bottom: 56, padding: 14, boxSizing: 'border-box', overflow: 'hidden' }}>

              <h3 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: '#101B42' }}>Referrals</h3>

              <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 12, padding: 10, boxShadow: '0 2px 6px rgba(16,27,66,0.06)', position: 'relative', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, paddingRight: 14 }}>
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"></path><circle cx="12" cy="9.5" r="2.2"></circle></svg>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 9.5, color: '#101B42' }}>New referral in Denver, CO</span>
                </div>
                <button type="button" style={{ marginTop: 8, width: '100%', background: ACCENT, color: '#FFFFFF', border: 'none', borderRadius: 999, padding: 7, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 10.5, cursor: 'pointer' }}>Claim Now</button>
              </div>

              <div style={{ margin: '-5px 0 0', borderRadius: 14, overflow: 'hidden', border: '1px solid #ECEEF1', boxShadow: '0 10px 22px rgba(16,27,66,0.14)', background: '#FFFFFF', position: 'relative', zIndex: 2 }}>
                <div style={{ background: ACCENT, padding: '7px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 9.5, color: '#FFFFFF' }}>Listing</span>
                  <span style={{ fontSize: 8.5, color: '#E4EBFF' }}>Heritage Mortgage Referral</span>
                </div>
                <div style={{ padding: '10px 12px 12px', boxSizing: 'border-box' }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 11.5, color: '#101B42', marginBottom: 5 }}>Jordan Kim</div>
                  <div style={{ display: 'flex', gap: 5, marginBottom: 8 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#101B42', color: '#FDBA3B', fontSize: 8, fontWeight: 600, padding: '3px 7px', borderRadius: 999 }}>
                      <svg viewBox="0 0 24 24" width="8" height="8" fill="#FDBA3B"><path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z"></path></svg>Air Force
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#EAF0FF', color: ACCENT, fontSize: 8, fontWeight: 600, padding: '3px 7px', borderRadius: 999 }}>
                      <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z"></path></svg>Active-Duty
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: '#EAF0FF', color: ACCENT, fontSize: 8, fontWeight: 600, padding: '3px 7px', borderRadius: 999 }}>
                      <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="9" rx="1"></rect><path d="M3 10 12 4l9 6"></path><path d="M7 19v-5M12 19v-5M17 19v-5"></path></svg>Heritage Mortgage
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 600, color: '#101B42' }}><span>LISTING: Under Contract</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>5/6</span></div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 3 }}>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#F97316' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 600, color: '#101B42', marginTop: 8 }}><span>BUYING: Touring Homes</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/6</span></div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 3 }}>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 600, color: '#101B42', marginTop: 8 }}><span>LENDING: Pre-Approved</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/8</span></div>
                  <div style={{ display: 'flex', gap: 3, marginTop: 3 }}>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: ACCENT }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: ACCENT }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                    <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 8, borderRadius: 14, border: '1px solid #ECEEF1', boxShadow: '0 2px 6px rgba(16,27,66,0.06)', background: '#FFFFFF', padding: '10px 12px', boxSizing: 'border-box' }}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 10.5, color: '#101B42', marginBottom: 6 }}>Morgan &amp; Alex Lee</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, fontWeight: 600, color: '#101B42' }}><span>BUYING: Under Contract</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>5/6</span></div>
                <div style={{ display: 'flex', gap: 3, marginTop: 3 }}>
                  <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#22C55E' }}></div>
                  <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#22C55E' }}></div>
                  <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#22C55E' }}></div>
                  <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#22C55E' }}></div>
                  <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#22C55E' }}></div>
                  <div style={{ flexGrow: 1, height: 4, borderRadius: 2, background: '#E5E7EB' }}></div>
                </div>
              </div>

            </div>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 56, background: '#FFFFFF', borderTop: '1px solid #ECEEF1', display: 'flex', alignItems: 'center', justifyContent: 'space-around', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: ACCENT }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7"></path><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"></path></svg>
                <span style={{ fontSize: 8, fontWeight: 600 }}>Home</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#9AA3AF' }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>
                <span style={{ fontSize: 8, fontWeight: 600 }}>Clients</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#9AA3AF' }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5"></path><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path></svg>
                <span style={{ fontSize: 8, fontWeight: 600 }}>Resources</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#9AA3AF' }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 3.5"></path><circle cx="12" cy="16.5" r="0.6" fill="#9AA3AF" stroke="none"></circle></svg>
                <span style={{ fontSize: 8, fontWeight: 600 }}>Help</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
