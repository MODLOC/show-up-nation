import Layout from '../components/Layout';
import { ROUTES, ACCENT } from '../lib/routes';
import { Link } from 'react-router-dom';

const referrals = [
  {
    id: 'jordan-kim',
    name: 'Jordan Kim',
    initials: 'JK',
    typeBg: '#EAF0FF',
    typeColor: ACCENT,
    typeLabel: 'Client',
    status: '3 active cases · Listing, Buying, Lending',
    link: ROUTES['ClientDetail.dc.html'],
    hasLink: true,
  },
  {
    id: 'marcus-webb',
    name: 'Marcus Webb',
    initials: 'MW',
    typeBg: '#EAF5F4',
    typeColor: '#0EA5A4',
    typeLabel: 'Community Member',
    status: 'No active case',
    link: ROUTES['Members.dc.html'],
    hasLink: true,
  },
];

const activeCaseCount = 3;

export default function MemberProfile() {
  return (
    <Layout active="members">
      <div style={{ flexGrow: 1, padding: '48px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24, overflow: 'visible', maxWidth: 900 }}>

        <Link to={ROUTES['Members.dc.html']} className="back-link" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#5B6472', fontSize: 14, fontWeight: 600, textDecoration: 'none', width: 'fit-content' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Members
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#F3EBFE', color: '#7C3AED', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            CW
          </div>
          <div>
            <h1 style={{ margin: '0 0 6px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28, color: '#101B42' }}>Connie White</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ background: '#F3EBFE', color: '#7C3AED', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 999 }}>Connector</span>
              <span style={{ fontSize: 13, color: '#9AA3AF' }}>Member since Jan 2026</span>
            </div>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: 14, color: '#5B6472', lineHeight: 1.6, maxWidth: 680 }}>
          Connie is an internal Business Development Manager — she doesn't carry a Listing, Buying, or Lending case of her own, but everyone she's introduced into the network stays attributed to her wherever their name appears, across every vertical.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20, maxWidth: 700 }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>People Referred</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>{referrals.length}</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Active Cases</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>{activeCaseCount}</span>
            <span style={{ fontSize: 11, color: '#9AA3AF' }}>across her referrals</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Top Performer</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>Q3</span>
            <span style={{ fontSize: 11, color: '#9AA3AF' }}>most referrals this quarter</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>People Connie Has Referred</span>

          {referrals.map((r, i) => (
            r.hasLink && (
              <Link key={r.id ?? i} to={r.link} className="rel-card" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 14, padding: '16px 20px', textDecoration: 'none', boxSizing: 'border-box' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: r.typeBg, color: r.typeColor, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {r.initials}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>{r.name}</span>
                    <span style={{ background: r.typeBg, color: r.typeColor, fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 999 }}>{r.typeLabel}</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: 12, color: '#8B93A1' }}>{r.status}</p>
                </div>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </Link>
            )
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>Recent Activity</span>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 14, padding: '6px 20px', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid #F0F1F3' }}>
              <span style={{ fontSize: 12, color: '#9AA3AF', width: 64, flexShrink: 0 }}>Sep 12</span>
              <span style={{ fontSize: 13, color: '#3F4757' }}>Introduced Marcus Webb to the Medical pillar community.</span>
            </div>
            <div style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid #F0F1F3' }}>
              <span style={{ fontSize: 12, color: '#9AA3AF', width: 64, flexShrink: 0 }}>Aug 30</span>
              <span style={{ fontSize: 13, color: '#3F4757' }}>Referred Jordan Kim into the network — now active across Listing, Buying, and Lending.</span>
            </div>
            <div style={{ display: 'flex', gap: 12, padding: '14px 0' }}>
              <span style={{ fontSize: 12, color: '#9AA3AF', width: 64, flexShrink: 0 }}>Jan 8</span>
              <span style={{ fontSize: 13, color: '#3F4757' }}>Joined Show Up Nation as an internal connector.</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
