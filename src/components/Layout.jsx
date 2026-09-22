import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, ACCENT } from '../lib/routes';

const NAV_ITEMS = [
  {
    key: 'clients',
    label: 'Clients',
    to: ROUTES['Main.dc.html'],
    icon: (stroke) => (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M23 20v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    key: 'members',
    label: 'Members',
    to: ROUTES['Members.dc.html'],
    icon: (stroke) => (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="5" cy="19" r="2.5" />
        <circle cx="19" cy="19" r="2.5" />
        <path d="M12 7.5v3.2" />
        <path d="M10.3 12.2 6.8 16.6" />
        <path d="M13.7 12.2l3.5 4.4" />
      </svg>
    ),
  },
  {
    key: 'resources',
    label: 'Resources',
    to: ROUTES['Artboard-kjhi.dc.html'],
    icon: (stroke) => (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      </svg>
    ),
  },
  {
    key: 'profile',
    label: 'Profile',
    to: ROUTES['Profile.dc.html'],
    icon: (stroke) => (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
];

/**
 * Shared app shell: navy sidebar with primary nav + the account menu popover
 * (support code, view profile, switch accounts, referral links, sign out).
 * Ported from the identical block that appeared across every authenticated
 * artboard in the original canvas prototype (Main.dc.html, Profile.dc.html, etc).
 *
 * `active` is one of 'clients' | 'members' | 'resources' | 'profile' | null.
 */
export default function Layout({ active = null, children, width = 1440 }) {
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);
  const accountSupportCode = 'SUN-482715';

  return (
    <div
      style={{
        minHeight: '100vh',
        maxWidth: width,
        margin: '0 auto',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        background: '#F6F7F5',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <nav
        style={{
          width: 260,
          flexShrink: 0,
          background: '#101B42',
          display: 'flex',
          flexDirection: 'column',
          padding: '32px 20px',
          boxSizing: 'border-box',
        }}
        aria-label="Primary"
      >
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 19, color: '#FFFFFF', letterSpacing: 1, lineHeight: 1.3 }}>
            SHOW UP
          </div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 19, color: '#FFFFFF', letterSpacing: 2, lineHeight: 1.3 }}>
            NATION
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                to={item.to}
                className={`navitem${isActive ? ' active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 16px',
                  borderRadius: 10,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  textAlign: 'left',
                  width: '100%',
                  boxSizing: 'border-box',
                  background: isActive ? ACCENT : 'transparent',
                  color: isActive ? '#FFFFFF' : '#AEB8D6',
                  textDecoration: 'none',
                }}
              >
                {item.icon(isActive ? '#FFFFFF' : '#AEB8D6')}
                {item.label}
              </Link>
            );
          })}
        </div>

        <div style={{ flexGrow: 1 }} />

        <div style={{ position: 'relative' }}>
          {isAccountMenuOpen && (
            <div
              style={{
                position: 'absolute',
                bottom: 64,
                left: 0,
                width: 300,
                background: '#FFFFFF',
                borderRadius: 14,
                boxShadow: '0 16px 40px rgba(16,27,66,0.35)',
                overflow: 'hidden',
                zIndex: 20,
                boxSizing: 'border-box',
              }}
            >
              <div style={{ padding: '18px 20px 16px', borderBottom: '1px solid #ECEEF1', position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setAccountMenuOpen(false)}
                  aria-label="Close account menu"
                  style={{ position: 'absolute', top: 12, right: 12, border: 'none', background: 'none', cursor: 'pointer', padding: 4 }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#9AA3AF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>Alex Rivera</div>
                <div style={{ fontSize: 12, color: '#9AA3AF', marginTop: 2 }}>Support code: {accountSupportCode}</div>
                <Link to={ROUTES['Profile.dc.html']} style={{ display: 'inline-block', marginTop: 6, fontSize: 12, fontWeight: 600, color: ACCENT, textDecoration: 'underline' }}>
                  View Profile
                </Link>
              </div>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid #ECEEF1' }}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: '#101B42', marginBottom: 4 }}>Priority Support</div>
                <div style={{ fontSize: 13, color: '#5B6472' }}>Phone: 1 (843) 555-0199</div>
              </div>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid #ECEEF1' }}>
                <label htmlFor="switch-accounts-select" style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: '#101B42', marginBottom: 6 }}>
                  Switch Accounts
                </label>
                <div style={{ position: 'relative' }}>
                  <select
                    id="switch-accounts-select"
                    style={{
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '9px 32px 9px 11px',
                      border: '1px solid #D8DEEC',
                      borderRadius: 8,
                      fontFamily: 'inherit',
                      fontSize: 13,
                      color: '#101B42',
                      cursor: 'pointer',
                      background: '#FFFFFF',
                    }}
                  >
                    <option>All Verticals</option>
                    <option>Military</option>
                    <option>Medical</option>
                    <option>First Responders</option>
                    <option>Education</option>
                  </select>
                  <svg
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid #ECEEF1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: '#101B42' }}>Referral Rewards</span>
                  <span style={{ background: '#F3EBFE', color: '#7C3AED', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>New</span>
                </div>
                <p style={{ margin: '0 0 10px', fontSize: 12, color: '#8B93A1', lineHeight: 1.5 }}>
                  Share your links to grow your referral, partner, and revenue-share networks.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { label: 'Referral Network', url: 'showupnation.com/join/alexrivera' },
                    { label: 'Partner Network', url: 'showupnation.com/partner/alexrivera' },
                    { label: 'Revenue Share Network', url: 'showupnation.com/sponsor/alexrivera' },
                  ].map((link) => (
                    <div
                      key={link.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 8,
                        background: '#F6F7F5',
                        borderRadius: 8,
                        padding: '8px 10px',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#101B42' }}>{link.label}</div>
                        <div style={{ fontSize: 11, color: '#9AA3AF' }}>{link.url}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => navigator.clipboard && navigator.clipboard.writeText(link.url).catch(() => {})}
                        style={{
                          border: '1px solid #D8DEEC',
                          background: '#FFFFFF',
                          borderRadius: 999,
                          padding: '5px 12px',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: 11,
                          color: '#5B6472',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: '10px 20px 16px', display: 'flex', flexDirection: 'column' }}>
                <button type="button" style={{ border: 'none', background: 'none', textAlign: 'left', padding: '8px 0', fontSize: 13, fontWeight: 600, color: '#101B42', cursor: 'pointer' }}>
                  Help Center
                </button>
                <Link
                  to={ROUTES['SignIn.dc.html']}
                  style={{ display: 'block', boxSizing: 'border-box', border: 'none', background: 'none', textAlign: 'left', padding: '8px 0', fontSize: 13, fontWeight: 600, color: '#DC2626', cursor: 'pointer', textDecoration: 'none' }}
                >
                  Sign Out
                </Link>
              </div>
            </div>
          )}
          <button
            type="button"
            className="profilebtn"
            onClick={() => setAccountMenuOpen((v) => !v)}
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10, borderRadius: 12, background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%', boxSizing: 'border-box' }}
          >
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              AR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#FFFFFF', fontSize: 14, fontWeight: 600 }}>Alex Rivera</span>
              <span style={{ color: '#8290BE', fontSize: 12 }}>Agent</span>
            </div>
          </button>
        </div>
      </nav>

      <main style={{ flexGrow: 1, boxSizing: 'border-box', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>{children}</main>
    </div>
  );
}
