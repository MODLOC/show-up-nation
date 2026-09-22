import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ROUTES, ACCENT } from '../lib/routes';

const NOTE_TEXT =
  "Hoping to be under contract before the end of the month so we're not carrying two mortgages once we find our next place.";
const NOTE_DATE = 'Sep 18';
const NOTE_AUTHOR = 'Jordan Kim · Buyer';

export default function ClientDetail() {
  const [tab, setTab] = useState('listing');
  const isListing = tab === 'listing';
  const isBuying = tab === 'buying';

  const listingTabBg = isListing ? '#F97316' : '#FFF3EA';
  const listingTabColor = isListing ? '#FFFFFF' : '#F97316';
  const buyingTabBg = isBuying ? '#22C55E' : '#EAFBF0';
  const buyingTabColor = isBuying ? '#FFFFFF' : '#22C55E';

  const primaryWorkflowLink = isListing ? ROUTES['ListingWorkflow.dc.html'] : ROUTES['BuyingWorkflow.dc.html'];

  return (
    <Layout active="clients">
      <div style={{ flexGrow: 1, padding: '48px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24, overflow: 'visible', maxWidth: 760 }}>

        <Link
          to={ROUTES['Main.dc.html']}
          className="back-link"
          style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#5B6472', fontSize: 14, fontWeight: 600, textDecoration: 'none', width: 'fit-content' }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Clients
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              JK
            </div>
            <div title="Pillar: Military — Air Force" style={{ position: 'absolute', bottom: -2, right: -2, width: 24, height: 24, borderRadius: '50%', background: '#101B42', border: '3px solid #F6F7F5', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="#FDBA3B"><path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z" /></svg>
            </div>
          </div>
          <div>
            <h1 style={{ margin: '0 0 4px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28, color: '#101B42' }}>Jordan Kim</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M23 20v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span style={{ fontSize: 13, color: '#5B6472' }}>Connected by <strong style={{ color: '#101B42', fontWeight: 700 }}>Connie White</strong></span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#101B42', color: '#FDBA3B', fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 999 }}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="#FDBA3B"><path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z" /></svg>
                Air Force
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#EAF0FF', color: ACCENT, fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 999 }}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z" /></svg>
                Active-Duty
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#EAF0FF', color: ACCENT, fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 999 }}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="10" width="18" height="9" rx="1" />
                  <path d="M3 10 12 4l9 6" />
                  <path d="M7 19v-5M12 19v-5M17 19v-5" />
                </svg>
                Heritage Mortgage
              </span>
            </div>
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderLeft: '4px solid #D8DEEC', borderRadius: 14, padding: '18px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#5B6472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
              <path d="M9 13h6M9 17h6M9 9h1" />
            </svg>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: '#101B42' }}>Latest Note</span>
          </div>
          <p style={{ margin: 0, fontSize: 14, color: '#3F4757', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{NOTE_TEXT}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <span style={{ fontSize: 12, color: '#9AA3AF' }}>{NOTE_DATE} · {NOTE_AUTHOR}</span>
            <Link to={primaryWorkflowLink} style={{ fontSize: 12, fontWeight: 600, color: ACCENT, textDecoration: 'none', whiteSpace: 'nowrap' }}>View notes &amp; tickets →</Link>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button type="button" onClick={() => setTab('listing')} className="tab-btn" style={{ border: 'none', borderRadius: 999, padding: '10px 22px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', background: listingTabBg, color: listingTabColor }}>Listing</button>
          <button type="button" onClick={() => setTab('buying')} className="tab-btn" style={{ border: 'none', borderRadius: 999, padding: '10px 22px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, cursor: 'pointer', background: buyingTabBg, color: buyingTabColor }}>Buying</button>
        </div>

        {isListing && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>

            <Link to={ROUTES['ListingWorkflow.dc.html']} className="wf-card" style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, overflow: 'hidden', boxSizing: 'border-box' }}>
              <div style={{ background: '#F97316', padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#FFFFFF' }}>Listing <span style={{ fontWeight: 500, opacity: 0.85 }}>· Alex Rivera</span></span>
              </div>
              <div style={{ padding: 18, boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: '#101B42', marginBottom: 6 }}><span>Under Contract</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>5/6</span></div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#F97316' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#F97316' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#F97316' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#F97316' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#F97316' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#F97316', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13 }}>
                  View Pipeline
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                </div>
              </div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0 6px 24px', color: '#9AA3AF', fontSize: 12, fontWeight: 600 }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></svg>
              Connected action — Jordan also needs to buy
            </div>

            <Link to={ROUTES['BuyingWorkflow.dc.html']} className="wf-card" style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, overflow: 'hidden', boxSizing: 'border-box' }}>
              <div style={{ background: '#22C55E', padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#FFFFFF' }}>Buying <span style={{ fontWeight: 500, opacity: 0.85 }}>· Alex Rivera</span></span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(255,255,255,0.25)', color: '#FFFFFF', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>1 ticket</span>
              </div>
              <div style={{ padding: 18, boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: '#101B42', marginBottom: 6 }}><span>Touring Homes</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/6</span></div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#22C55E' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#22C55E' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#22C55E', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13 }}>
                  View Pipeline
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                </div>
              </div>
            </Link>

          </div>
        )}

        {isBuying && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>

            <Link to={ROUTES['BuyingWorkflow.dc.html']} className="wf-card" style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, overflow: 'hidden', boxSizing: 'border-box' }}>
              <div style={{ background: '#22C55E', padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#FFFFFF' }}>Buying <span style={{ fontWeight: 500, opacity: 0.85 }}>· Alex Rivera</span></span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(255,255,255,0.25)', color: '#FFFFFF', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>1 ticket</span>
              </div>
              <div style={{ padding: 18, boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: '#101B42', marginBottom: 6 }}><span>Touring Homes</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/6</span></div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#22C55E' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#22C55E' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#22C55E', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13 }}>
                  View Pipeline
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                </div>
              </div>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0 6px 24px', color: '#9AA3AF', fontSize: 12, fontWeight: 600 }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></svg>
              Connected action — working with an in-house lender
            </div>

            <Link to={ROUTES['LendingWorkflow.dc.html']} className="wf-card" style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, overflow: 'hidden', boxSizing: 'border-box' }}>
              <div style={{ background: ACCENT, padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#FFFFFF' }}>Lending <span style={{ fontWeight: 500, opacity: 0.85 }}>· Sam Patel</span></span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: 'rgba(255,255,255,0.25)', color: '#FFFFFF', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>1 ticket</span>
              </div>
              <div style={{ padding: 18, boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: '#101B42', marginBottom: 6 }}><span>Pre-Approved</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/8</span></div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: ACCENT }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: ACCENT }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                  <div style={{ flexGrow: 1, height: 6, borderRadius: 3, background: '#E5E7EB' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: ACCENT, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13 }}>
                  View Pipeline
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                </div>
              </div>
            </Link>

          </div>
        )}

      </div>
    </Layout>
  );
}
