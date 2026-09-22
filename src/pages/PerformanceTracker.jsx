import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ROUTES, ACCENT } from '../lib/routes';

const VERTICAL_BREAKDOWN = [
  { label: 'Listing', value: 18, pct: '53%', color: '#F97316' },
  { label: 'Buying', value: 34, pct: '100%', color: '#22C55E' },
  { label: 'Lending', value: 26, pct: '76%', color: ACCENT },
];

const TOP_SOURCES = [
  { initials: 'CW', name: 'Connie White', role: 'Internal BDM', count: 22, bg: '#EAF0FF', color: ACCENT },
  { initials: 'VU', name: 'Veterans United Realty', role: 'Partner', count: 15, bg: '#EAF5F4', color: '#0EA5A4' },
  { initials: 'HM', name: 'Heritage Mortgage', role: 'Partner', count: 11, bg: '#EAF5F4', color: '#0EA5A4' },
];

const MONTHLY_VOLUME = [
  { month: 'Apr', value: 14, height: 63, bg: '#D7E2FF' },
  { month: 'May', value: 19, height: 86, bg: '#D7E2FF' },
  { month: 'Jun', value: 22, height: 99, bg: '#D7E2FF' },
  { month: 'Jul', value: 20, height: 90, bg: '#D7E2FF' },
  { month: 'Aug', value: 27, height: 122, bg: '#B7C7FF' },
  { month: 'Sep', value: 31, height: 140, bg: ACCENT },
];

export default function PerformanceTracker() {
  return (
    <Layout active="resources">
      <div style={{ flexGrow: 1, padding: '56px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 28, overflow: 'visible' }}>

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

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <h1 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>Performance Tracker</h1>
            <p style={{ margin: 0, fontSize: 15, color: '#5B6472' }}>Alex Rivera · Q3 2026 · illustrative data</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, padding: '8px 16px', borderRadius: 999 }}>This Quarter</span>
            <span style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#5B6472', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, padding: '8px 16px', borderRadius: 999 }}>This Year</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 20 }}>

          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '22px 24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Total Referrals (YTD)</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 30, color: '#101B42' }}>132</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#22C55E' }}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#22C55E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
              +18% vs last quarter
            </span>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '22px 24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Active Pipeline</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 30, color: '#101B42' }}>41</span>
            <span style={{ fontSize: 12, color: '#9AA3AF' }}>across Listing, Buying &amp; Lending</span>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '22px 24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Closed This Quarter</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 30, color: '#101B42' }}>27</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: '#22C55E' }}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#22C55E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
              +6 vs last quarter
            </span>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '22px 24px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Total Volume</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 30, color: '#101B42' }}>$9.4M</span>
            <span style={{ fontSize: 12, color: '#9AA3AF' }}>closed + in escrow</span>
          </div>

        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20, alignItems: 'stretch' }}>

          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '24px 28px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>Referrals by Vertical</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {VERTICAL_BREAKDOWN.map((item) => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: '#101B42', marginBottom: 6 }}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div style={{ height: 10, borderRadius: 5, background: '#F2F3F5', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: item.pct, borderRadius: 5, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>

            <p style={{ margin: 0, fontSize: 12, color: '#9AA3AF', lineHeight: 1.5 }}>
              Lending only ever arrives as a connected action under a Buying referral, which is why its count tracks below Buying's.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '24px 28px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>Top Referral Sources</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {TOP_SOURCES.map((source) => (
                <div key={source.initials} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: source.bg, color: source.color, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {source.initials}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, color: '#101B42' }}>{source.name}</div>
                    <div style={{ fontSize: 11, color: '#9AA3AF' }}>{source.role}</div>
                  </div>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: '#101B42' }}>{source.count}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '24px 28px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>Monthly Referral Volume</span>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, height: 140, padding: '0 8px', boxSizing: 'border-box' }}>
            {MONTHLY_VOLUME.map((bar, i) => {
              const isLast = i === MONTHLY_VOLUME.length - 1;
              return (
                <div key={bar.month} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexGrow: 1 }}>
                  {isLast ? (
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#FFFFFF', background: ACCENT, padding: '2px 8px', borderRadius: 999 }}>{bar.value}</span>
                  ) : (
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#101B42' }}>{bar.value}</span>
                  )}
                  <div style={{ width: '100%', maxWidth: 44, height: bar.height, borderRadius: '6px 6px 0 0', background: bar.bg }} />
                  {isLast ? (
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#101B42' }}>{bar.month}</span>
                  ) : (
                    <span style={{ fontSize: 11, color: '#9AA3AF' }}>{bar.month}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Layout>
  );
}
