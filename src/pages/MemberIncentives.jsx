import { useState } from 'react';
import Layout from '../components/Layout';
import { ACCENT } from '../lib/routes';

const CATEGORIES = [
  {
    id: 'builders',
    name: 'Home Builders',
    tag: 'New Construction',
    tagBg: '#FFF1E6',
    tagColor: '#F97316',
    iconInner: '<path d="M3 10.5 12 3l9 7.5"></path><path d="M5 9v11h14V9"></path><path d="M9.5 20v-6h5v6"></path>',
    incentive: 'Partner builders offer buyers up to $28K in closing cost or upgrade credits.',
    companies: [
      { id: 'drb-anderson', name: 'DRB Homes', location: 'Anderson, SC', blurb: 'DRB Homes is offering buyers up to $28K for their Single-Family Homes Communities.', phone: '864-555-0131', email: 'sc@drbhomes.com', rep: 'DRB Homes New Home Team', detail: 'Up to $28K in closing cost or design credits on select Single-Family Home communities.' },
      { id: 'drhorton-charleston', name: 'DR Horton', location: 'Charleston, SC', blurb: 'DR Horton is offering buyers up to 6% of purchase price.', phone: '843-738-1750', email: 'N/A', rep: 'Any DR Horton Rep or Online Sales Team', detail: 'DR Horton is offering buyers up to 6% of purchase price toward closing costs or a rate buy-down.' },
      { id: 'century-greenville', name: 'Century Complete', location: 'Greenville, SC', blurb: 'Century Complete is offering buyers incentives that may vary by home.', phone: '864-555-0119', email: 'greenville@centurycomplete.com', rep: 'Century Complete Sales Team', detail: 'Incentives vary by home — reach out directly to confirm what’s available on active listings.' },
      { id: 'drb-greenville', name: 'DRB Homes', location: 'Greenville, SC', blurb: 'DRB Homes is offering buyers up to $28K for their Single-Family Homes Communities.', phone: '864-555-0142', email: 'sc@drbhomes.com', rep: 'DRB Homes New Home Team', detail: 'Up to $28K in closing cost or design credits on select Single-Family Home communities.' },
      { id: 'lennar-myrtle', name: 'Lennar', location: 'Myrtle Beach, SC', blurb: 'Lennar is offering buyers up to $5K in closing cost assistance.', phone: '843-555-0164', email: 'myrtlebeach@lennar.com', rep: 'Lennar New Home Consultant', detail: 'Up to $5K in closing cost assistance on select inventory homes.' },
      { id: 'drb-seneca', name: 'DRB Homes', location: 'Seneca, SC', blurb: 'DRB Homes is offering buyers up to $28K for their Single-Family Homes Communities.', phone: '864-555-0177', email: 'sc@drbhomes.com', rep: 'DRB Homes New Home Team', detail: 'Up to $28K in closing cost or design credits on select Single-Family Home communities.' },
    ],
  },
  {
    id: 'insurance',
    name: 'Home & Auto Insurance',
    tag: 'Insurance',
    tagBg: '#E9F9F1',
    tagColor: '#22C55E',
    iconInner: '<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z"></path>',
    incentive: 'Bundle home and auto with a partner carrier for up to 15% off first-year premiums.',
    companies: [
      { id: 'palmetto-columbia', name: 'Palmetto Mutual Insurance', location: 'Columbia, SC', blurb: 'Bundle home and auto for up to 15% off your first-year premium.', phone: '803-555-0148', email: 'partners@palmettomutual.com', rep: 'Palmetto Mutual Partner Desk', detail: 'Clients who bundle home and auto coverage save up to 15% on their first-year premium.' },
    ],
  },
  {
    id: 'title',
    name: 'Title & Escrow',
    tag: 'Title & Escrow',
    tagBg: '#E8F6FA',
    tagColor: '#0EA5A4',
    iconInner: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M9 13h6"></path><path d="M9 17h6"></path>',
    incentive: 'Partner title companies waive the settlement fee for referred clients.',
    companies: [
      { id: 'lowcountry-title', name: 'Lowcountry Title & Escrow', location: 'Charleston, SC', blurb: 'Settlement fee waived for clients referred through Show Up Nation.', phone: '843-555-0193', email: 'closings@lowcountrytitle.com', rep: 'Lowcountry Title Coordinator', detail: 'Referred clients have their settlement fee waived when closing through Lowcountry Title & Escrow.' },
    ],
  },
  {
    id: 'moving',
    name: 'Moving Services',
    tag: 'Moving',
    tagBg: '#F3F0FF',
    tagColor: '#7C3AED',
    iconInner: '<rect x="1" y="7" width="13" height="10" rx="1"></rect><path d="M14 10h4l3 3v4h-7z"></path><circle cx="5.5" cy="18.5" r="1.5"></circle><circle cx="17.5" cy="18.5" r="1.5"></circle>',
    incentive: 'Partner movers offer a flat 20% discount on local moves.',
    companies: [],
  },
  {
    id: 'warranty',
    name: 'Home Warranty',
    tag: 'Home Warranty',
    tagBg: '#FCEFF3',
    tagColor: '#DB2777',
    iconInner: '<path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z"></path><path d="m9 12 2 2 4-4"></path>',
    incentive: 'First year of home warranty coverage included free through partner providers.',
    companies: [],
  },
];

export default function MemberIncentives() {
  const [view, setView] = useState('grid'); // 'grid' | 'category'
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [openCompanyId, setOpenCompanyId] = useState(null);
  const [partnerLinkCopied, setPartnerLinkCopied] = useState(false);

  const openCategory = (catId) => {
    setView('category');
    setActiveCategoryId(catId);
    setOpenCompanyId(null);
  };

  const backToGrid = () => {
    setView('grid');
    setActiveCategoryId(null);
    setOpenCompanyId(null);
  };

  const openContact = (coId) => setOpenCompanyId(coId);
  const closeContact = () => setOpenCompanyId(null);
  const togglePartnerCopied = () => setPartnerLinkCopied(true);

  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId) || null;
  const isCategoryView = view === 'category' && !!activeCategory;
  const isGridView = !isCategoryView;

  const companies = activeCategory ? activeCategory.companies : [];
  const companyCount = companies.length;
  const companyResultLabel = companyCount === 1 ? 'result' : 'results';
  const hasCompanies = companyCount > 0;
  const noCompanies = companyCount === 0;

  const activeCompany = activeCategory
    ? activeCategory.companies.find((co) => co.id === openCompanyId) || null
    : null;
  const isContactModalOpen = !!activeCompany;

  const activeCategoryTagBg = activeCategory ? activeCategory.tagBg : '#EAF0FF';
  const activeCategoryTagColor = activeCategory ? activeCategory.tagColor : ACCENT;
  const activeCategoryIconInner = activeCategory ? activeCategory.iconInner : '';

  const partnerCopyBg = partnerLinkCopied ? '#22C55E' : '#101B42';
  const partnerCopyLabel = partnerLinkCopied ? 'Copied!' : 'Copy Link';
  const partnerCopyIconPath = partnerLinkCopied
    ? '<path d="M20 6 9 17l-5-5"></path>'
    : '<rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15V5a2 2 0 0 1 2-2h10"></path>';

  return (
    <Layout active="resources">
      <div
        style={{
          flexGrow: 1,
          padding: '56px 64px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
          overflow: 'visible',
        }}
      >
        {isCategoryView && (
          <>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                backToGrid();
              }}
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
              All Incentives
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  borderRadius: 12,
                  background: activeCategoryTagBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke={activeCategoryTagColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: activeCategoryIconInner }}
                />
              </div>
              <div>
                <h1 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28, color: '#101B42' }}>
                  {activeCategory ? activeCategory.name : ''}
                </h1>
                <span
                  style={{
                    display: 'inline-flex',
                    marginTop: 4,
                    padding: '3px 10px',
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    background: activeCategoryTagBg,
                    color: activeCategoryTagColor,
                  }}
                >
                  {activeCategory ? activeCategory.tag : ''}
                </span>
              </div>
            </div>

            <span style={{ fontSize: 13, color: '#9AA3AF' }}>
              {companyCount} {companyResultLabel} for South Carolina
            </span>

            {hasCompanies && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
                {companies.map((co) => (
                  <div
                    key={co.id}
                    className="company-card"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #ECEEF1',
                      borderRadius: 16,
                      boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
                      padding: 22,
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: '#101B42' }}>
                      {co.name}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#9AA3AF' }}>
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {co.location}
                    </span>
                    <p style={{ margin: '4px 0 8px', fontSize: 13, color: '#5B6472', lineHeight: 1.5, flexGrow: 1 }}>
                      {co.blurb}
                    </p>
                    <button
                      type="button"
                      className="detail-btn"
                      onClick={() => openContact(co.id)}
                      style={{
                        border: `1.5px solid ${ACCENT}`,
                        background: '#FFFFFF',
                        color: ACCENT,
                        borderRadius: 999,
                        padding: '10px 0',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                      }}
                    >
                      See Details
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {noCompanies && (
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px dashed #D8DEEC',
                  borderRadius: 16,
                  padding: '36px 40px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 10,
                  maxWidth: 620,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: activeCategoryTagBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 6,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke={activeCategoryTagColor}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dangerouslySetInnerHTML={{ __html: activeCategoryIconInner }}
                  />
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 17, color: '#101B42' }}>
                  No {activeCategory ? activeCategory.name : ''} partners in South Carolina yet
                </span>
                <p style={{ margin: 0, fontSize: 13, color: '#8B93A1', lineHeight: 1.5, maxWidth: 440 }}>
                  Invite a local business to join Show Up Nation as a partner — once they're on board, this incentive shows up here for your clients.
                </p>

                <div style={{ width: '100%', maxWidth: 420, marginTop: 14, textAlign: 'left' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4 }}>
                    Invite a Partner
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                    <div
                      style={{
                        flexGrow: 1,
                        background: '#F6F7F5',
                        border: '1px solid #E5E7EB',
                        borderRadius: 10,
                        padding: '12px 16px',
                        boxSizing: 'border-box',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#101B42',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      showupnation.com/partner-invite/alexrivera
                    </div>
                    <button
                      type="button"
                      onClick={togglePartnerCopied}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        border: 'none',
                        borderRadius: 10,
                        padding: '12px 16px',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: 'pointer',
                        background: partnerCopyBg,
                        color: '#FFFFFF',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: partnerCopyIconPath }}
                      />
                      {partnerCopyLabel}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {isGridView && (
          <>
            <div>
              <h1 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 32, color: '#101B42' }}>
                Member Incentives
              </h1>
              <p style={{ margin: 0, fontSize: 15, color: '#5B6472', lineHeight: 1.5 }}>
                Browse incentive categories from our partner network, then drill in to see who's active in your area.
              </p>
            </div>

            <span style={{ fontSize: 13, color: '#9AA3AF' }}>{CATEGORIES.length} partner categories</span>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="incentive-card"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #ECEEF1',
                    borderRadius: 16,
                    boxShadow: '0 1px 2px rgba(16,27,66,0.04)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      height: 92,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#FAFAFB',
                      borderBottom: '1px solid #F0F1F3',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: cat.tagBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke={cat.tagColor}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        dangerouslySetInnerHTML={{ __html: cat.iconInner }}
                      />
                    </div>
                  </div>
                  <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', gap: 10, flexGrow: 1 }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: '#101B42' }}>
                      {cat.name}
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        width: 'fit-content',
                        padding: '4px 10px',
                        borderRadius: 999,
                        fontSize: 11,
                        fontWeight: 700,
                        background: cat.tagBg,
                        color: cat.tagColor,
                      }}
                    >
                      {cat.tag}
                    </span>
                    <p style={{ margin: 0, fontSize: 13, color: '#5B6472', lineHeight: 1.5, flexGrow: 1 }}>
                      {cat.incentive}
                    </p>
                    <button
                      type="button"
                      className="detail-btn"
                      onClick={() => openCategory(cat.id)}
                      style={{
                        marginTop: 4,
                        border: `1.5px solid ${ACCENT}`,
                        background: '#FFFFFF',
                        color: ACCENT,
                        borderRadius: 999,
                        padding: '10px 0',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 6,
                      }}
                    >
                      See Details
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ margin: 0, fontSize: 12, color: '#9AA3AF', lineHeight: 1.5 }}>
              This covers partners outside of lending and real estate agents — those already have their own workflow pages. More categories are added as new relationships come online.
            </p>
          </>
        )}
      </div>

      {isContactModalOpen && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(16,27,66,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: 460,
              background: '#FFFFFF',
              borderRadius: 20,
              padding: '36px 36px 30px',
              boxSizing: 'border-box',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(16,27,66,0.35)',
            }}
          >
            <button
              type="button"
              onClick={closeContact}
              aria-label="Close"
              style={{ position: 'absolute', top: 18, right: 18, border: 'none', background: 'none', cursor: 'pointer', padding: 4 }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#101B42" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: activeCategoryTagBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                  fill="none"
                  stroke={activeCategoryTagColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  dangerouslySetInnerHTML={{ __html: activeCategoryIconInner }}
                />
              </div>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: '#101B42', textAlign: 'center' }}>
                {activeCompany ? activeCompany.name : ''}
              </span>
              <span style={{ fontSize: 12, color: '#9AA3AF' }}>{activeCompany ? activeCompany.location : ''}</span>
            </div>

            <div style={{ height: 1, background: '#ECEEF1', marginBottom: 18 }} />

            <h2 style={{ margin: '0 0 6px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: '#101B42', textAlign: 'center' }}>
              Contact {activeCompany ? activeCompany.name : ''}
            </h2>
            <p style={{ margin: '0 0 18px', fontSize: 13, color: '#5B6472', textAlign: 'center', lineHeight: 1.5 }}>
              Register your client with the partner rep to secure their incentive.
            </p>

            <div style={{ height: 1, background: '#ECEEF1', marginBottom: 18 }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <div>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>
                  Phone
                </span>
                <span style={{ fontSize: 14, color: ACCENT, fontWeight: 600 }}>{activeCompany ? activeCompany.phone : ''}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>
                  Email
                </span>
                <span style={{ fontSize: 14, color: '#101B42' }}>{activeCompany ? activeCompany.email : ''}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>
                  Partner Rep
                </span>
                <span style={{ fontSize: 14, color: '#101B42' }}>{activeCompany ? activeCompany.rep : ''}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#9AA3AF', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 4 }}>
                  Incentive
                </span>
                <span style={{ fontSize: 14, color: '#101B42', lineHeight: 1.4 }}>{activeCompany ? activeCompany.detail : ''}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
