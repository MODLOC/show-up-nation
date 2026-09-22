import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';

const TIMELINE_STEPS = [
  {
    title: 'Link Clicked',
    status: 'Complete',
    description: "Morgan opened Alex's affiliate link from a text message.",
    complete: true,
  },
  {
    title: 'Account Created',
    status: 'Complete',
    description: 'Morgan created a Show Up Nation account through the link.',
    complete: true,
  },
  {
    title: 'Profile & Verification',
    status: 'Complete',
    description: 'Profile details confirmed and military status verified.',
    complete: true,
  },
  {
    title: 'Connected to Agent',
    status: 'In Progress',
    description: 'Being matched and introduced to Alex Rivera as the referring agent.',
    complete: false,
    current: true,
  },
  {
    title: 'First Referral Started',
    status: 'Upcoming',
    description: 'Once Morgan starts a Listing, Buying, or Lending referral, this workflow hands off to that pipeline.',
    complete: false,
    current: false,
  },
];

export default function AffiliateLinkWorkflow() {
  return (
    <Layout active="resources">
      <div
        style={{
          flexGrow: 1,
          padding: '48px 64px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          overflow: 'visible',
          maxWidth: 720,
        }}
      >
        <Link
          to={ROUTES['ReferNewClient.dc.html']}
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
          Back to Refer a New Client
        </Link>

        <div>
          <span
            style={{
              display: 'inline-block',
              background: '#7C3AED',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              padding: '5px 12px',
              borderRadius: 999,
              marginBottom: 12,
            }}
          >
            Affiliate Link
          </span>
          <h1 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28, color: '#101B42' }}>
            Affiliate Link Workflow
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: 14, color: '#8B93A1' }}>
            Morgan Lee — signed up through your link, currently on step 4 of 5
          </p>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: '#9AA3AF' }}>
            Connected by Alex Rivera · showupnation.com/join/alexrivera
          </p>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '28px 32px', boxSizing: 'border-box' }}>
          {TIMELINE_STEPS.map((step, i) => {
            const isLast = i === TIMELINE_STEPS.length - 1;
            return (
              <div key={step.title} style={{ display: 'flex', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {step.complete ? (
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        background: '#7C3AED',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                  ) : step.current ? (
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '3px solid #7C3AED',
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        background: '#FFFFFF',
                        border: '2px solid #E5E7EB',
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {!isLast && (
                    <div
                      style={{
                        flexGrow: 1,
                        width: 2,
                        background: step.complete ? '#7C3AED' : '#E5E7EB',
                        margin: '2px 0',
                      }}
                    />
                  )}
                </div>
                <div style={{ flexGrow: 1, paddingBottom: isLast ? 0 : 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: 15,
                        color: step.complete || step.current ? '#101B42' : '#9AA3AF',
                      }}
                    >
                      {step.title}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: step.complete || step.current ? '#7C3AED' : '#9AA3AF',
                        background: step.complete || step.current ? '#F3EBFE' : '#F2F3F5',
                        padding: '3px 10px',
                        borderRadius: 999,
                      }}
                    >
                      {step.status}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: '6px 0 0',
                      fontSize: 13,
                      color: step.complete || step.current ? '#8B93A1' : '#B0B6C1',
                      lineHeight: 1.5,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
