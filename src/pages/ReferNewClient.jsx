import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ROUTES, ACCENT } from '../lib/routes';

const FINANCE_OPTIONS = [
  { key: 'purchase', label: 'Purchase' },
  { key: 'list', label: 'List a Home' },
  { key: 'buy', label: 'Buy a Home' },
  { key: 'refinance', label: 'Refinance' },
  { key: 'other', label: 'Other' },
];

const MEMBER_OPTIONS = [
  { key: 'veteran', label: 'Member Candidate' },
  { key: 'civilian', label: 'Civilian' },
];

export default function ReferNewClient() {
  const [copied, setCopied] = useState(false);
  const [formCopied, setFormCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [financeChoices, setFinanceChoices] = useState(['purchase']);
  const [memberChoice, setMemberChoice] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [otherText, setOtherText] = useState('');

  const hasChoice = (key) => financeChoices.indexOf(key) !== -1;
  const toggleChoice = (key) => {
    setFinanceChoices((prev) =>
      prev.indexOf(key) !== -1 ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const isOther = hasChoice('other');

  const uncheckedRing = '#D8DEEC';

  return (
    <Layout active="resources">
      <div style={{ flexGrow: 1, padding: '56px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 28, overflow: 'visible', maxWidth: 760 }}>

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
          <h1 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>Refer a New Client</h1>
          <p style={{ margin: 0, fontSize: 15, color: '#5B6472', lineHeight: 1.5 }}>
            This is your personal link, tied to your login. Anyone who signs up through it is automatically connected to you as their referring agent.
          </p>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '28px 32px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 18 }}>

          <div>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Your Affiliate Link</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
              <div style={{ flexGrow: 1, background: '#F6F7F5', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px', boxSizing: 'border-box', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                showupnation.com/join/alexrivera
              </div>
              <button
                type="button"
                onClick={() => setCopied(true)}
                style={{ display: 'flex', alignItems: 'center', gap: 6, border: 'none', borderRadius: 10, padding: '12px 18px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', background: copied ? '#22C55E' : ACCENT, color: '#FFFFFF', whiteSpace: 'nowrap' }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {copied ? (
                    <path d="M20 6 9 17l-5-5" />
                  ) : (
                    <>
                      <rect x="9" y="9" width="12" height="12" rx="2" />
                      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                    </>
                  )}
                </svg>
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          <div style={{ height: 1, background: '#ECEEF1' }} />

          <div>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Share It</span>
            <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
              <button
                type="button"
                className="share-btn"
                style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #E5E7EB', background: '#FFFFFF', borderRadius: 10, padding: '10px 16px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, color: '#5B6472', cursor: 'pointer' }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#5B6472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                Email
              </button>
              <button
                type="button"
                className="share-btn"
                style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #E5E7EB', background: '#FFFFFF', borderRadius: 10, padding: '10px 16px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, color: '#5B6472', cursor: 'pointer' }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#5B6472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Text Message
              </button>
              <button
                type="button"
                className="share-btn"
                style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #E5E7EB', background: '#FFFFFF', borderRadius: 10, padding: '10px 16px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, color: '#5B6472', cursor: 'pointer' }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#5B6472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <path d="m8.6 10.5 6.8-3.9M8.6 13.5l6.8 3.9" />
                </svg>
                More
              </button>
            </div>
          </div>

        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Clicks</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>64</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Sign-Ups</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>12</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Connected to You</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>12</span>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: 12, color: '#9AA3AF', lineHeight: 1.5 }}>
          Every sign-up through this link shows up on your Clients dashboard already tagged "Connected by Alex Rivera" — the same attribution model used across the rest of the app.
        </p>

        <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '28px 32px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>Lending Referral Form</span>
            <p style={{ margin: '6px 0 0', fontSize: 13, color: '#8B93A1', lineHeight: 1.5 }}>
              A shorter, purpose-built link for when you already know the client — it drops them straight into a quick lending intake instead of full account creation.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ flexGrow: 1, background: '#F6F7F5', border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 16px', boxSizing: 'border-box', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              showupnation.com/refer/lending/alexrivera
            </div>
            <button
              type="button"
              onClick={() => setFormCopied(true)}
              style={{ display: 'flex', alignItems: 'center', gap: 6, border: 'none', borderRadius: 10, padding: '12px 18px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', background: formCopied ? '#22C55E' : '#101B42', color: '#FFFFFF', whiteSpace: 'nowrap' }}
            >
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {formCopied ? (
                  <path d="M20 6 9 17l-5-5" />
                ) : (
                  <>
                    <rect x="9" y="9" width="12" height="12" rx="2" />
                    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                  </>
                )}
              </svg>
              {formCopied ? 'Copied!' : 'Copy Link'}
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={{ border: '1px solid #E5E7EB', background: '#FFFFFF', borderRadius: 10, padding: '12px 18px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', color: '#5B6472', whiteSpace: 'nowrap' }}
            >
              Preview Form
            </button>
          </div>
        </div>

      </div>

      {isModalOpen && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,27,66,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <div style={{ width: 460, background: '#FFFFFF', borderRadius: 20, padding: '36px 36px 30px', boxSizing: 'border-box', position: 'relative', boxShadow: '0 20px 50px rgba(16,27,66,0.35)' }}>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
              style={{ position: 'absolute', top: 18, right: 18, border: 'none', background: 'none', cursor: 'pointer', padding: 4 }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#101B42" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <h2 style={{ margin: '0 0 10px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, color: '#101B42', textAlign: 'center', lineHeight: 1.3 }}>
              Let's help your client take the next step toward home.
            </h2>
            <p style={{ margin: '0 0 22px', fontSize: 13, color: '#5B6472', textAlign: 'center', lineHeight: 1.5 }}>
              A few quick details kicks off their lending journey. Referring to a lending partner is always free, no fees on your end.
            </p>

            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#101B42', marginBottom: 6 }}>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #D8DEEC', borderRadius: 8, fontFamily: 'inherit', fontSize: 13, color: '#101B42' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#101B42', marginBottom: 6 }}>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #D8DEEC', borderRadius: 8, fontFamily: 'inherit', fontSize: 13, color: '#101B42' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#101B42', marginBottom: 6 }}>State</label>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', border: '1px solid #D8DEEC', borderRadius: 8, fontSize: 13, color: '#9AA3AF' }}>
                Select State
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#101B42', marginBottom: 2 }}>What's bringing them our way?</span>
              <span style={{ display: 'block', fontSize: 11, color: '#9AA3AF', marginBottom: 8 }}>Select all that apply</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {FINANCE_OPTIONS.map((opt) => {
                  const checked = hasChoice(opt.key);
                  const ring = checked ? ACCENT : uncheckedRing;
                  const bg = checked ? ACCENT : '#FFFFFF';
                  const weight = checked ? '700' : '400';
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => toggleChoice(opt.key)}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, border: 'none', background: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span style={{ width: 18, height: 18, borderRadius: 5, border: `2px solid ${ring}`, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {checked && (
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </span>
                      <span style={{ fontSize: 13, color: '#101B42', fontWeight: weight }}>{opt.label}</span>
                    </button>
                  );
                })}
                {isOther && (
                  <input
                    type="text"
                    placeholder="Tell us what they're looking for"
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    style={{ marginLeft: 26, width: 'calc(100% - 26px)', boxSizing: 'border-box', padding: '9px 12px', border: '1px solid #D8DEEC', borderRadius: 8, fontFamily: 'inherit', fontSize: 13, color: '#101B42' }}
                  />
                )}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#101B42', marginBottom: 8 }}>Are they a Member Candidate or Civilian?</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {MEMBER_OPTIONS.map((opt) => {
                  const selected = memberChoice === opt.key;
                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setMemberChoice(opt.key)}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, border: 'none', background: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${selected ? ACCENT : uncheckedRing}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {selected && <span style={{ width: 9, height: 9, borderRadius: '50%', background: ACCENT }} />}
                      </span>
                      <span style={{ fontSize: 13, color: '#101B42' }}>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Link
              to={ROUTES['LendingWorkflow.dc.html']}
              style={{ display: 'block', textAlign: 'center', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, padding: 13, borderRadius: 999, textDecoration: 'none' }}
            >
              Continue
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
}
