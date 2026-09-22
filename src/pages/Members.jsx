import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ROUTES, ACCENT } from '../lib/routes';

const membersRaw = [
  { id: 'jordan-kim', name: 'Jordan Kim', initials: 'JK', pillar: 'military', pillarLabel: 'Air Force', type: 'client', typeLabel: 'Client', connectedById: 'connie-white', connectedByLabel: null, status: '3 active cases · Listing, Buying, Lending', memberSince: 'Sep 2026' },
  { id: 'connie-white', name: 'Connie White', initials: 'CW', pillar: null, type: 'connector', typeLabel: 'Connector', connectedById: null, connectedByLabel: null, status: '2 active referrals in your network', memberSince: 'Jan 2026' },
  { id: 'marcus-webb', name: 'Marcus Webb', initials: 'MW', pillar: 'medical', pillarLabel: 'Medical', type: 'community', typeLabel: 'Community Member', connectedById: 'connie-white', connectedByLabel: null, status: 'No active case', memberSince: 'Jun 2026' },
  { id: 'priya-anand', name: 'Priya Anand', initials: 'PA', pillar: 'education', pillarLabel: 'Education', type: 'past_client', typeLabel: 'Past Client', connectedById: null, connectedByLabel: 'Alex Rivera', status: 'Buying case closed Aug 2026', memberSince: 'Mar 2026' },
  { id: 'derek-coleman', name: 'Derek Coleman', initials: 'DC', pillar: 'first_responders', pillarLabel: 'First Responders', type: 'referral_source', typeLabel: 'Referral Source', connectedById: null, connectedByLabel: null, status: '1 referral pending', memberSince: 'Aug 2026' },
  { id: 'sam-patel', name: 'Sam Patel', initials: 'SP', pillar: null, type: 'partner', typeLabel: 'Lender · Heritage Mortgage', connectedById: null, connectedByLabel: null, status: 'Active lender on Jordan Kim’s case', memberSince: 'Feb 2026' },
];

const pillarStyle = {
  military: {
    bg: '#101B42',
    color: '#FDBA3B',
    icon: <path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z" />,
  },
  medical: {
    bg: '#FDECEC',
    color: '#DC2626',
    icon: <path d="M12 3v18M3 12h18" />,
  },
  first_responders: {
    bg: '#FFF3EA',
    color: '#EA580C',
    icon: <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />,
  },
  education: {
    bg: '#EEF0FF',
    color: '#4F46E5',
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      </>
    ),
  },
};

const typeStyle = {
  client: { bg: '#EAF0FF', color: ACCENT },
  connector: { bg: '#F3EBFE', color: '#7C3AED' },
  community: { bg: '#EAF5F4', color: '#0EA5A4' },
  past_client: { bg: '#F2F3F5', color: '#9AA3AF' },
  referral_source: { bg: '#F3EBFE', color: '#7C3AED' },
  partner: { bg: '#FFF7ED', color: '#B45309' },
};

const categoryDefs = [
  { key: 'all', label: 'All' },
  { key: 'military', label: 'Military' },
  { key: 'medical', label: 'Medical' },
  { key: 'first_responders', label: 'First Responders' },
  { key: 'education', label: 'Education' },
  { key: 'connectors', label: 'Connectors' },
  { key: 'lending', label: 'Lending Partners' },
];

function countFor(key) {
  if (key === 'all') return membersRaw.length;
  if (key === 'connectors') return membersRaw.filter((m) => !m.pillar && m.type === 'connector').length;
  if (key === 'lending') return membersRaw.filter((m) => !m.pillar && m.type === 'partner').length;
  return membersRaw.filter((m) => m.pillar === key).length;
}

export default function Members() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openMemberId, setOpenMemberId] = useState(null);

  const categories = categoryDefs.map((c) => {
    const active = activeCategory === c.key;
    return {
      key: c.key,
      label: c.label,
      count: countFor(c.key),
      bg: active ? ACCENT : '#FFFFFF',
      color: active ? '#FFFFFF' : '#5B6472',
      borderColor: active ? ACCENT : '#E5E7EB',
      select: () => setActiveCategory(c.key),
    };
  });

  const filtered = membersRaw.filter((m) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'connectors') return !m.pillar && m.type === 'connector';
    if (activeCategory === 'lending') return !m.pillar && m.type === 'partner';
    return m.pillar === activeCategory;
  });

  const buildView = (m) => {
    const ps = m.pillar ? pillarStyle[m.pillar] : null;
    const ts = typeStyle[m.type];
    const connectedByMember = m.connectedById ? membersRaw.find((x) => x.id === m.connectedById) : null;
    const connectedByLabel = connectedByMember ? connectedByMember.name : (m.connectedByLabel || '');
    return {
      ...m,
      pillarBg: ps ? ps.bg : '',
      pillarColor: ps ? ps.color : '',
      pillarIcon: ps ? ps.icon : null,
      hasPillar: !!ps,
      typeBg: ts.bg,
      typeColor: ts.color,
      hasConnectedBy: !!connectedByLabel,
      connectedByClickable: !!connectedByMember,
      connectedByStatic: !connectedByMember && !!connectedByLabel,
      connectedByLabel: connectedByLabel,
      openConnectedBy: connectedByMember ? () => setOpenMemberId(connectedByMember.id) : undefined,
      openProfile: () => setOpenMemberId(m.id),
    };
  };

  const members = filtered.map(buildView);

  const activeMemberRaw = openMemberId ? membersRaw.find((m) => m.id === openMemberId) : null;
  const activeMemberView = activeMemberRaw ? buildView(activeMemberRaw) : null;
  const isProfileOpen = !!activeMemberView;
  const activeMemberHasFullProfile = activeMemberRaw ? activeMemberRaw.id === 'connie-white' : false;

  const totalMembers = membersRaw.length;
  const newConnections = 2;
  const activeReferrals = 3;

  return (
    <Layout active="members">
      <div style={{ flexGrow: 1, padding: '56px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 24, overflow: 'visible' }}>

        <div>
          <h1 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>Members</h1>
          <p style={{ margin: 0, fontSize: 15, color: '#5B6472', maxWidth: 680, lineHeight: 1.5 }}>
            My members — everyone you've connected with, whether they're an active case, a referral source, a partner, or part of the community. Owner/Admin sees the full network; this view is scoped to you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20, maxWidth: 760 }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>My Members</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>{totalMembers}</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>New Connections</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>{newConnections}</span>
            <span style={{ fontSize: 11, color: '#9AA3AF' }}>this month</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>Active Referrals</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 26, color: '#101B42' }}>{activeReferrals}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className="chip-btn"
              onClick={cat.select}
              style={{ border: `1px solid ${cat.borderColor}`, borderRadius: 999, padding: '8px 16px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, cursor: 'pointer', background: cat.bg, color: cat.color, whiteSpace: 'nowrap' }}
            >
              {cat.label} · {cat.count}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 980 }}>
          {members.map((m) => (
            <div key={m.id} className="member-row" style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, boxSizing: 'border-box' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: m.typeBg, color: m.typeColor, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {m.initials}
              </div>

              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: '#101B42' }}>{m.name}</span>
                  <span style={{ background: m.typeBg, color: m.typeColor, fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 999, whiteSpace: 'nowrap' }}>{m.typeLabel}</span>
                  {m.hasPillar && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: m.pillarBg, color: m.pillarColor, fontSize: 10, fontWeight: 600, padding: '3px 9px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                      <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke={m.pillarColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {m.pillarIcon}
                      </svg>
                      {m.pillarLabel}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  {m.hasConnectedBy && (
                    <>
                      <span style={{ fontSize: 12, color: '#9AA3AF' }}>Connected by</span>
                      {m.connectedByClickable && (
                        <button
                          type="button"
                          className="link-btn"
                          onClick={m.openConnectedBy}
                          style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontSize: 12, fontWeight: 700, color: ACCENT, textDecoration: 'underline' }}
                        >
                          {m.connectedByLabel}
                        </button>
                      )}
                      {m.connectedByStatic && (
                        <span style={{ fontSize: 12, fontWeight: 700, color: '#101B42' }}>{m.connectedByLabel}</span>
                      )}
                    </>
                  )}
                </div>
                <p style={{ margin: '6px 0 0', fontSize: 12, color: '#8B93A1' }}>{m.status}</p>
              </div>

              <button
                type="button"
                onClick={m.openProfile}
                aria-label="View profile"
                style={{ border: '1px solid #E5E7EB', background: '#FFFFFF', borderRadius: 999, padding: '8px 16px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: '#5B6472', cursor: 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                View
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#5B6472" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>

      {isProfileOpen && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,27,66,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <div style={{ width: 440, background: '#FFFFFF', borderRadius: 20, padding: '36px 36px 30px', boxSizing: 'border-box', position: 'relative', boxShadow: '0 20px 50px rgba(16,27,66,0.35)' }}>
            <button
              type="button"
              onClick={() => setOpenMemberId(null)}
              aria-label="Close"
              style={{ position: 'absolute', top: 18, right: 18, border: 'none', background: 'none', cursor: 'pointer', padding: 4 }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#101B42" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: activeMemberView.typeBg, color: activeMemberView.typeColor, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {activeMemberView.initials}
              </div>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 19, color: '#101B42', textAlign: 'center' }}>{activeMemberView.name}</span>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ background: activeMemberView.typeBg, color: activeMemberView.typeColor, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999 }}>{activeMemberView.typeLabel}</span>
                {activeMemberView.hasPillar && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: activeMemberView.pillarBg, color: activeMemberView.pillarColor, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999 }}>
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke={activeMemberView.pillarColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {activeMemberView.pillarIcon}
                    </svg>
                    {activeMemberView.pillarLabel}
                  </span>
                )}
              </div>
            </div>

            <div style={{ height: 1, background: '#ECEEF1', marginBottom: 16 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {activeMemberView.hasConnectedBy && (
                <div>
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>Connected By</span>
                  <span style={{ fontSize: 14, color: '#101B42', fontWeight: 600 }}>{activeMemberView.connectedByLabel}</span>
                </div>
              )}
              <div>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>Member Since</span>
                <span style={{ fontSize: 14, color: '#101B42' }}>{activeMemberView.memberSince}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>Activity</span>
                <span style={{ fontSize: 14, color: '#101B42', lineHeight: 1.4 }}>{activeMemberView.status}</span>
              </div>
            </div>

            {activeMemberHasFullProfile && (
              <Link
                to={ROUTES['MemberProfile.dc.html']}
                style={{ display: 'block', textAlign: 'center', marginTop: 22, background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, padding: 12, borderRadius: 999, textDecoration: 'none' }}
              >
                View Full Profile
              </Link>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
