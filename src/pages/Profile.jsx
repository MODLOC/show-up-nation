import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ROUTES, ACCENT } from '../lib/routes';

// Styles that lived in the source .dc.html's own <style> block (not part of
// global.css, which only carries the shared shell/hover classes). Reproduced
// here as inline style objects so the page keeps its exact look.
const fieldLabelStyle = { display: 'block', fontSize: 12, fontWeight: 700, color: '#101B42', marginBottom: 6 };
const fieldInputStyle = { width: '100%', boxSizing: 'border-box', padding: '10px 12px', border: '1px solid #D8DEEC', borderRadius: 8, fontFamily: 'inherit', fontSize: 13, color: '#101B42' };
const fieldInputDisabledStyle = { ...fieldInputStyle, background: '#F6F7F5', color: '#9AA3AF' };
const chipStyle = { display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EAF0FF', color: ACCENT, fontSize: 12, fontWeight: 600, padding: '5px 10px 5px 12px', borderRadius: 999 };
const chipXStyle = { border: 'none', background: 'none', cursor: 'pointer', padding: 2, display: 'flex', color: ACCENT };
const saveBtnStyle = { border: 'none', borderRadius: 999, padding: '10px 24px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, cursor: 'pointer', background: ACCENT, color: '#FFFFFF' };
const sectionHeadStyle = { width: '100%', boxSizing: 'border-box', border: 'none', background: 'none', padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', cursor: 'pointer' };
const sectionCardStyle = { background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 14, overflow: 'hidden', boxSizing: 'border-box' };
const sectionTitleStyle = { fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' };
const chevronSvgStyle = (open) => ({ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' });
const radioLabelStyle = { display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#101B42' };

const ChevronIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={chevronSvgStyle(open)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const SelectChevronIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ChipXIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="M6 6l12 12" />
  </svg>
);

const COVERAGE_ZIPS = [
  { label: '29445 Goose Creek' },
  { label: '29464 Mount Pleasant' },
  { label: '29406 North Charleston' },
  { label: '29403 Charleston' },
];

export default function Profile() {
  // Pause Referrals toggle
  const [paused, setPaused] = useState(false);
  const pauseLabel = paused ? 'Paused' : 'Pause';
  const pauseBg = paused ? '#F2F3F5' : ACCENT;
  const pauseColor = paused ? '#5B6472' : '#FFFFFF';

  // Accordion open/closed state, keyed by section
  const [open, setOpen] = useState({});
  const isOpen = (key) => !!open[key];
  const toggle = (key) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  // Contact Information
  const [ext, setExt] = useState('');

  // Agent Details
  const [militaryAffiliation, setMilitaryAffiliation] = useState('None');

  // Shipping Address
  const [streetAddress1, setStreetAddress1] = useState('220 Meeting Street');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('Charleston');
  const [shippingState, setShippingState] = useState('South Carolina');
  const [zip, setZip] = useState('29401');

  // Brokerage Information
  const [pocName, setPocName] = useState('');
  const [pocEmail, setPocEmail] = useState('');

  // Coverage Area
  const [addZip, setAddZip] = useState('');

  // Licensing and Certifications
  const [licenseState, setLicenseState] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [certification, setCertification] = useState('');
  const [mlsAffiliation, setMlsAffiliation] = useState('');

  return (
    <Layout active="profile">
      <div style={{ flexGrow: 1, padding: '48px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20, overflow: 'visible', maxWidth: 760 }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28, color: '#101B42' }}>Profile</h1>
          <Link to={ROUTES['SignIn.dc.html']} className="logout-link" style={{ border: 'none', background: 'none', cursor: 'pointer', color: ACCENT, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'underline', padding: 0 }}>
            Log Out
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '20px 24px', boxSizing: 'border-box' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              AR
            </div>
            <button type="button" aria-label="Change photo" style={{ position: 'absolute', bottom: -4, right: -4, width: 26, height: 26, borderRadius: '50%', background: '#101B42', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </button>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: '#101B42' }}>Pause Referrals</div>
            <div style={{ fontSize: 13, color: '#8B93A1' }}>Step back from new referrals for a while — you can turn them back on anytime.</div>
          </div>
          <button type="button" onClick={() => setPaused((v) => !v)} style={{ border: 'none', borderRadius: 999, padding: '10px 20px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, cursor: 'pointer', background: pauseBg, color: pauseColor, whiteSpace: 'nowrap' }}>
            {pauseLabel}
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Contact Information */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('contact')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>Contact Information</span>
              <ChevronIcon open={isOpen('contact')} />
            </button>
            {isOpen('contact') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>First Name</label>
                    <input className="field-input" style={fieldInputStyle} type="text" defaultValue="Alex" readOnly />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Last Name</label>
                    <input className="field-input" style={fieldInputStyle} type="text" defaultValue="Rivera" readOnly />
                  </div>
                </div>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>Email Address</label>
                  <input className="field-input" style={fieldInputDisabledStyle} type="text" defaultValue="alex.rivera@showupnation.com" disabled />
                  <span style={{ display: 'block', fontSize: 11, color: '#9AA3AF', marginTop: 4 }}>This is your login email for Show Up Nation.</span>
                </div>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Mobile</label>
                    <input className="field-input" style={fieldInputStyle} type="text" defaultValue="(843) 555-0142" readOnly />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Business</label>
                    <input className="field-input" style={fieldInputStyle} type="text" defaultValue="(843) 555-0142" readOnly />
                  </div>
                  <div style={{ width: 90 }}>
                    <label className="field-label" style={fieldLabelStyle}>Ext.</label>
                    <input className="field-input" style={fieldInputStyle} type="text" placeholder="Ext." value={ext} onChange={(e) => setExt(e.target.value)} />
                  </div>
                </div>
                <button type="button" className="save-btn" style={{ ...saveBtnStyle, alignSelf: 'flex-start' }}>Save</button>
              </div>
            )}
          </div>

          {/* Agent Details */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('agent')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>Agent Details</span>
              <ChevronIcon open={isOpen('agent')} />
            </button>
            {isOpen('agent') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>NRDS Number</label>
                  <input className="field-input" style={fieldInputStyle} type="text" defaultValue="512478930" readOnly />
                </div>
                <div>
                  <span className="field-label" style={fieldLabelStyle}>Full or Part Time</span>
                  <div style={{ display: 'flex', gap: 20, marginTop: 4 }}>
                    <label style={radioLabelStyle}><input type="radio" name="fptime" defaultChecked /> Full Time</label>
                    <label style={radioLabelStyle}><input type="radio" name="fptime" /> Part Time</label>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Agent Since</label>
                    <input className="field-input" style={fieldInputStyle} type="text" defaultValue="3/4/2019" readOnly />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Average Referrals Closed per Year</label>
                    <input className="field-input" style={fieldInputStyle} type="text" defaultValue="8" readOnly />
                  </div>
                </div>
                <div>
                  <label className="field-label" htmlFor="military-affiliation" style={fieldLabelStyle}>Military Affiliation</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="military-affiliation"
                      className="field-input"
                      style={{ ...fieldInputStyle, appearance: 'none', WebkitAppearance: 'none', paddingRight: 36, cursor: 'pointer' }}
                      value={militaryAffiliation}
                      onChange={(e) => setMilitaryAffiliation(e.target.value)}
                    >
                      <option>None</option>
                      <option>Active Duty</option>
                      <option>Veteran</option>
                      <option>Reserves/National Guard</option>
                      <option>Retired</option>
                      <option>Spouse</option>
                      <option>Military Parent</option>
                    </select>
                    <SelectChevronIcon />
                  </div>
                </div>
                <div>
                  <span className="field-label" style={fieldLabelStyle}>Languages</span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8, marginTop: 4 }}>
                    <label style={radioLabelStyle}><input type="checkbox" /> Spanish</label>
                    <label style={radioLabelStyle}><input type="checkbox" /> Chinese (Mandarin)</label>
                    <label style={radioLabelStyle}><input type="checkbox" /> French</label>
                    <label style={radioLabelStyle}><input type="checkbox" /> Tagalog</label>
                    <label style={radioLabelStyle}><input type="checkbox" /> Korean</label>
                    <label style={radioLabelStyle}><input type="checkbox" /> German</label>
                  </div>
                </div>
                <button type="button" className="save-btn" style={{ ...saveBtnStyle, alignSelf: 'flex-start' }}>Save</button>
              </div>
            )}
          </div>

          {/* Shipping Address */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('shipping')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>Shipping Address</span>
              <ChevronIcon open={isOpen('shipping')} />
            </button>
            {isOpen('shipping') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>Street Address 1</label>
                  <input className="field-input" style={fieldInputStyle} type="text" value={streetAddress1} onChange={(e) => setStreetAddress1(e.target.value)} />
                </div>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>Street Address 2</label>
                  <input className="field-input" style={fieldInputStyle} type="text" placeholder="Enter street address 2" value={streetAddress2} onChange={(e) => setStreetAddress2(e.target.value)} />
                </div>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>City</label>
                  <input className="field-input" style={fieldInputStyle} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ flex: 2 }}>
                    <label className="field-label" htmlFor="shipping-state" style={fieldLabelStyle}>State</label>
                    <div style={{ position: 'relative' }}>
                      <select
                        id="shipping-state"
                        className="field-input"
                        style={{ ...fieldInputStyle, appearance: 'none', WebkitAppearance: 'none', paddingRight: 36, cursor: 'pointer' }}
                        value={shippingState}
                        onChange={(e) => setShippingState(e.target.value)}
                      >
                        <option>South Carolina</option>
                        <option>Georgia</option>
                        <option>North Carolina</option>
                        <option>Virginia</option>
                        <option>Florida</option>
                      </select>
                      <SelectChevronIcon />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>ZIP</label>
                    <input className="field-input" style={fieldInputStyle} type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
                  </div>
                </div>
                <button type="button" className="save-btn" style={{ ...saveBtnStyle, alignSelf: 'flex-start' }}>Save</button>
              </div>
            )}
          </div>

          {/* Brokerage Information */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('brokerage')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>Brokerage Information</span>
              <ChevronIcon open={isOpen('brokerage')} />
            </button>
            {isOpen('brokerage') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>Brokerage Name</label>
                  <input className="field-input" style={fieldInputStyle} type="text" defaultValue="Lowcountry Realty Group" readOnly />
                </div>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>Broker Name</label>
                  <input className="field-input" style={fieldInputStyle} type="text" defaultValue="Alex Rivera" readOnly />
                </div>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>Broker Email Address</label>
                  <input className="field-input" style={fieldInputStyle} type="text" defaultValue="alex.rivera@showupnation.com" readOnly />
                </div>
                <div style={{ display: 'flex', gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Point of Contact Name</label>
                    <input className="field-input" style={fieldInputStyle} type="text" placeholder="Optional" value={pocName} onChange={(e) => setPocName(e.target.value)} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Point of Contact Email</label>
                    <input className="field-input" style={fieldInputStyle} type="text" placeholder="Optional" value={pocEmail} onChange={(e) => setPocEmail(e.target.value)} />
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: 11, color: '#9AA3AF', lineHeight: 1.5 }}>Brokerage changes are confirmed by the Show Up Nation team before they go live, so updates here won't apply immediately.</p>
                <button type="button" className="save-btn" style={{ ...saveBtnStyle, alignSelf: 'flex-start' }}>Save</button>
              </div>
            )}
          </div>

          {/* Coverage Area */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('coverage')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>Coverage Area</span>
              <ChevronIcon open={isOpen('coverage')} />
            </button>
            {isOpen('coverage') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label className="field-label" style={fieldLabelStyle}>Primary ZIP</label>
                  <input className="field-input" style={fieldInputDisabledStyle} type="text" defaultValue="29401" disabled />
                  <span style={{ display: 'block', fontSize: 11, color: '#9AA3AF', marginTop: 4 }}>To change your primary ZIP, reach out to your Show Up Nation team.</span>
                </div>
                <div>
                  <span className="field-label" style={fieldLabelStyle}>Additional Coverage Areas</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
                    {COVERAGE_ZIPS.map((z, i) => (
                      <span className="chip" style={chipStyle} key={i}>
                        {z.label}
                        <button type="button" className="chip-x" style={chipXStyle} aria-label="Remove"><ChipXIcon /></button>
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
                  <div style={{ flexGrow: 1 }}>
                    <label className="field-label" style={fieldLabelStyle}>Add an Additional ZIP Code</label>
                    <input className="field-input" style={fieldInputStyle} type="text" placeholder="29403" value={addZip} onChange={(e) => setAddZip(e.target.value)} />
                  </div>
                  <button type="button" className="save-btn" style={{ ...saveBtnStyle, padding: '10px 20px' }}>Add</button>
                </div>
              </div>
            )}
          </div>

          {/* Licensing and Certifications */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('licensing')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>Licensing and Certifications</span>
              <ChevronIcon open={isOpen('licensing')} />
            </button>
            {isOpen('licensing') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42', marginBottom: 8 }}>Licensing</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <span className="chip" style={chipStyle}>
                      SC - 84213
                      <button type="button" className="chip-x" style={chipXStyle} aria-label="Remove"><ChipXIcon /></button>
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
                    <div style={{ flex: 1 }}>
                      <label className="field-label" style={fieldLabelStyle}>State</label>
                      <input className="field-input" style={fieldInputStyle} type="text" placeholder="Select a state" value={licenseState} onChange={(e) => setLicenseState(e.target.value)} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label className="field-label" style={fieldLabelStyle}>License Number</label>
                      <input className="field-input" style={fieldInputStyle} type="text" placeholder="Enter license number" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />
                    </div>
                    <button type="button" className="save-btn" style={{ ...saveBtnStyle, padding: '10px 20px', whiteSpace: 'nowrap' }}>Add</button>
                  </div>
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42', marginBottom: 8 }}>Certifications</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <span className="chip" style={chipStyle}>
                      Military Relocation Professional
                      <button type="button" className="chip-x" style={chipXStyle} aria-label="Remove"><ChipXIcon /></button>
                    </span>
                    <span className="chip" style={chipStyle}>
                      Seller Representative Specialist
                      <button type="button" className="chip-x" style={chipXStyle} aria-label="Remove"><ChipXIcon /></button>
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
                    <div style={{ flexGrow: 1 }}>
                      <label className="field-label" style={fieldLabelStyle}>Add a Certification</label>
                      <input className="field-input" style={fieldInputStyle} type="text" placeholder="Select a certification" value={certification} onChange={(e) => setCertification(e.target.value)} />
                    </div>
                    <button type="button" className="save-btn" style={{ ...saveBtnStyle, padding: '10px 20px', whiteSpace: 'nowrap' }}>Add</button>
                  </div>
                </div>
                <div>
                  <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42', marginBottom: 8 }}>MLS Affiliations</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <span className="chip" style={chipStyle}>
                      Charleston Trident MLS
                      <button type="button" className="chip-x" style={chipXStyle} aria-label="Remove"><ChipXIcon /></button>
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
                    <div style={{ flexGrow: 1 }}>
                      <label className="field-label" style={fieldLabelStyle}>Add an MLS Affiliation</label>
                      <input className="field-input" style={fieldInputStyle} type="text" placeholder="Select an MLS" value={mlsAffiliation} onChange={(e) => setMlsAffiliation(e.target.value)} />
                    </div>
                    <button type="button" className="save-btn" style={{ ...saveBtnStyle, padding: '10px 20px', whiteSpace: 'nowrap' }}>Add</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CRM Connections */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('crm')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>CRM Connections</span>
              <ChevronIcon open={isOpen('crm')} />
            </button>
            {isOpen('crm') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#F9FAFB', border: '1px solid #ECEEF1', borderRadius: 12, padding: '16px 18px', boxSizing: 'border-box' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EAF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 14, color: '#101B42' }}>Modloc Core</div>
                    <div style={{ fontSize: 11, color: '#9AA3AF' }}>The centralized CRM behind Show Up Nation, Real Estate, and Lending. Mocked in this prototype — no live integration yet.</div>
                  </div>
                  <span style={{ background: '#EAFBF0', color: '#22C55E', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999, whiteSpace: 'nowrap' }}>Connected</span>
                  <button type="button" className="save-btn" style={{ ...saveBtnStyle, padding: '9px 18px', fontSize: 12, whiteSpace: 'nowrap' }}>Manage</button>
                </div>
              </div>
            )}
          </div>

          {/* Account Management */}
          <div style={sectionCardStyle}>
            <button type="button" className="section-head" onClick={() => toggle('account')} style={sectionHeadStyle}>
              <span style={sectionTitleStyle}>Account Management</span>
              <ChevronIcon open={isOpen('account')} />
            </button>
            {isOpen('account') && (
              <div style={{ padding: '0 22px 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42', marginBottom: 6 }}>Account Help</span>
                  <p style={{ margin: 0, fontSize: 13, color: '#5B6472', lineHeight: 1.6 }}>
                    Need a hand with your account? Reach out through the chat widget or email <span style={{ color: ACCENT, fontWeight: 600 }}>support@showupnation.com</span>.
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #ECEEF1', paddingTop: 18 }}>
                  <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#DC2626', marginBottom: 8 }}>Delete Account</span>
                  <p style={{ margin: '0 0 8px', fontSize: 12, color: '#5B6472', lineHeight: 1.6 }}>Before you delete your account, know that:</p>
                  <ul style={{ margin: '0 0 12px', paddingLeft: 18, fontSize: 12, color: '#5B6472', lineHeight: 1.7 }}>
                    <li>You'll no longer be part of the Show Up Nation referral network.</li>
                    <li>You'll no longer be eligible to receive new referrals.</li>
                    <li>Any clients you're actively working with will be reassigned to another operating partner.</li>
                    <li>A Show Up Nation team member will reach out to confirm the details and collect feedback.</li>
                  </ul>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: '#101B42', marginBottom: 14 }}>
                    <input type="checkbox" style={{ marginTop: 2 }} /> I understand I will no longer be eligible to receive referrals if I delete my account.
                  </label>
                  <button type="button" style={{ border: 'none', borderRadius: 999, padding: '10px 22px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, cursor: 'pointer', background: '#FDECEC', color: '#DC2626' }}>Delete Account</button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </Layout>
  );
}
