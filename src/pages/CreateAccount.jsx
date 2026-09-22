import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, ACCENT } from '../lib/routes';

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [office, setOffice] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('Select a state');
  const [license, setLicense] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div style={{ width: '1440px', height: '1900px', boxSizing: 'border-box', display: 'flex', background: '#FFFFFF', fontFamily: "'Inter', system-ui, sans-serif", overflow: 'hidden', position: 'relative' }}>

      <div style={{ width: '720px', flexShrink: 0, padding: '56px 72px 64px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

        <div>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '34px', lineHeight: 1 }}>
            <span style={{ fontWeight: 500, color: ACCENT }}>Show Up</span><span style={{ fontWeight: 800, color: '#101B42' }}> Nation</span>
          </div>
          <p style={{ margin: '10px 0 0', fontSize: '14px', color: '#8B93A1' }}>Your all-in-one client referral network.</p>
        </div>

        <h1 style={{ margin: '40px 0 28px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '30px', color: '#101B42' }}>Create an Account</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="ca-first" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>First Name*</label>
            <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
              <input id="ca-first" type="text" className="field-input" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="ca-last" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>Last Name*</label>
            <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
              <input id="ca-last" type="text" className="field-input" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <label htmlFor="ca-email" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>Email Address*</label>
          <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
            <input id="ca-email" type="email" className="field-input" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="ca-mobile" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>Mobile Phone*</label>
            <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
              <input id="ca-mobile" type="tel" className="field-input" placeholder="(000) 000-0000" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="ca-office" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>Office Phone</label>
            <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
              <input id="ca-office" type="tel" className="field-input" placeholder="(000) 000-0000" value={office} onChange={(e) => setOffice(e.target.value)} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', width: '220px' }}>
          <label htmlFor="ca-zip" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>Primary Zip*</label>
          <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
            <input id="ca-zip" type="text" className="field-input" placeholder="12345" value={zip} onChange={(e) => setZip(e.target.value)} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <label htmlFor="ca-state" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>License Information*</label>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box', width: '200px' }}>
              <select id="ca-state" className="field-select" value={state} onChange={(e) => setState(e.target.value)}>
                <option>Select a state</option>
                <option>California</option>
                <option>Texas</option>
                <option>New York</option>
                <option>Florida</option>
              </select>
            </div>
            <div className="field-wrap" style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box', flexGrow: 1 }}>
              <label htmlFor="ca-license" className="sr-only">License Number</label>
              <input id="ca-license" type="text" className="field-input" placeholder="License Number" value={license} onChange={(e) => setLicense(e.target.value)} />
            </div>
            <button type="button" className="add-btn" style={{ background: ACCENT, color: '#FFFFFF', border: 'none', borderRadius: '999px', padding: '0 26px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Add</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <label htmlFor="ca-password" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>Password*</label>
          <div className="field-wrap" style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
            <input id="ca-password" type={showPassword ? 'text' : 'password'} className="field-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="button" className="eye-btn" aria-label="Show password" onClick={() => setShowPassword(!showPassword)}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#9AA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
          <label htmlFor="ca-confirm" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '13px', color: '#101B42', marginBottom: '8px' }}>Confirm Password*</label>
          <div className="field-wrap" style={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 14px', boxSizing: 'border-box' }}>
            <input id="ca-confirm" type={showConfirmPassword ? 'text' : 'password'} className="field-input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="button" className="eye-btn" aria-label="Show password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#9AA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#101B42' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#E14D4D" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
            At least 8 characters
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#101B42' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#E14D4D" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
            A lowercase letter
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#101B42' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#E14D4D" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
            An uppercase letter
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#101B42' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#E14D4D" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
            A number
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#101B42' }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#E14D4D" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>
            Re-type your password exactly
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '15px', color: '#101B42', marginBottom: '10px' }}>Consent &amp; Electronic Signature</div>
          <div style={{ background: '#EAF0FF', borderRadius: '12px', padding: '18px 20px', fontSize: '13px', lineHeight: 1.6, color: '#3C465E', boxSizing: 'border-box' }}>
            By creating a Show Up Nation account, you agree to receive calls, texts, and emails from Show Up Nation about referral opportunities and platform updates, including autodialed or automated messages. Message and data rates may apply, and you can opt out at any time. You also agree to our <a href="#" className="link">Terms and Conditions</a> and Privacy Policy.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to={ROUTES['SignIn.dc.html']} className="cancel-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', color: '#101B42', border: '1px solid #101B42', borderRadius: '999px', padding: '14px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '15px', width: '160px', textDecoration: 'none', boxSizing: 'border-box' }}>Cancel</Link>
          <Link to={ROUTES['Main.dc.html']} className="create-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: ACCENT, color: '#FFFFFF', border: 'none', borderRadius: '999px', padding: '14px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '15px', width: '200px', textDecoration: 'none', boxSizing: 'border-box' }}>Create Account</Link>
        </div>

      </div>

      <div style={{ width: '720px', flexShrink: 0, background: '#FFFFFF', position: 'relative' }}>
        <div style={{ width: '100%', background: '#101B42', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '56px 40px 60px', boxSizing: 'border-box' }}>

          <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <h2 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '30px', lineHeight: 1.25, color: '#FFFFFF' }}>Every referral, organized in one place.</h2>
            <p style={{ margin: '14px 0 0', fontSize: '14px', lineHeight: 1.6, color: '#C7D0E8' }}>See new leads the moment they land, and walk every client from first contact to keys in hand.</p>
          </div>

          <div style={{ width: '300px', height: '610px', background: '#FFFFFF', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', padding: '10px', boxSizing: 'border-box', position: 'relative', marginTop: '32px', flexShrink: 0 }}>

            <div style={{ width: '100%', height: '100%', borderRadius: '30px', overflow: 'hidden', position: 'relative', background: '#F6F7F5' }}>

              <div style={{ position: 'absolute', top: '9px', left: '50%', transform: 'translateX(-50%)', width: '78px', height: '5px', background: '#D9DEE8', borderRadius: '3px', zIndex: 3 }}></div>

              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '76px', background: '#101B42', boxSizing: 'border-box', padding: '22px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '11px', letterSpacing: '0.4px', color: '#FFFFFF' }}>Show Up Nation</span>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: ACCENT, color: '#FFFFFF', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JK</div>
              </div>

              <div style={{ position: 'absolute', top: '76px', left: 0, right: 0, bottom: '56px', padding: '14px', boxSizing: 'border-box', overflow: 'hidden' }}>

                <h3 style={{ margin: '0 0 8px', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '12px', color: '#101B42' }}>Referrals</h3>

                <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: '12px', padding: '10px', boxShadow: '0 2px 6px rgba(16,27,66,0.06)', position: 'relative', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', paddingRight: '14px' }}>
                    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"></path><circle cx="12" cy="9.5" r="2.2"></circle></svg>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '9.5px', color: '#101B42' }}>New referral in Denver, CO</span>
                  </div>
                  <button type="button" style={{ marginTop: '8px', width: '100%', background: ACCENT, color: '#FFFFFF', border: 'none', borderRadius: '999px', padding: '7px', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '10.5px', cursor: 'pointer' }}>Claim Now</button>
                </div>

                <div style={{ margin: '-5px 0 0', borderRadius: '14px', overflow: 'hidden', border: '1px solid #ECEEF1', boxShadow: '0 10px 22px rgba(16,27,66,0.14)', background: '#FFFFFF', position: 'relative', zIndex: 2 }}>
                  <div style={{ background: ACCENT, padding: '7px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '9.5px', color: '#FFFFFF' }}>Listing</span>
                    <span style={{ fontSize: '8.5px', color: '#E4EBFF' }}>Heritage Mortgage Referral</span>
                  </div>
                  <div style={{ padding: '10px 12px 12px', boxSizing: 'border-box' }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '11.5px', color: '#101B42', marginBottom: '5px' }}>Jordan Kim</div>
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '8px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: '#101B42', color: '#FDBA3B', fontSize: '8px', fontWeight: 600, padding: '3px 7px', borderRadius: '999px' }}><svg viewBox="0 0 24 24" width="8" height="8" fill="#FDBA3B"><path d="M12 2l2.6 6.6L21 9l-5 4.5L17.5 21 12 17.3 6.5 21 8 13.5 3 9l6.4-.4L12 2z"></path></svg>Air Force</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: '#EAF0FF', color: ACCENT, fontSize: '8px', fontWeight: 600, padding: '3px 7px', borderRadius: '999px' }}><svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6Z"></path></svg>Active-Duty</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: '#EAF0FF', color: ACCENT, fontSize: '8px', fontWeight: 600, padding: '3px 7px', borderRadius: '999px' }}><svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="9" rx="1"></rect><path d="M3 10 12 4l9 6"></path><path d="M7 19v-5M12 19v-5M17 19v-5"></path></svg>Heritage Mortgage</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#101B42' }}><span>LISTING: Under Contract</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>5/6</span></div>
                    <div style={{ display: 'flex', gap: '3px', marginTop: '3px' }}>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#F97316' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#F97316' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#F97316' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#F97316' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#F97316' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#101B42', marginTop: '8px' }}><span>BUYING: Touring Homes</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/6</span></div>
                    <div style={{ display: 'flex', gap: '3px', marginTop: '3px' }}>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#22C55E' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#22C55E' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#101B42', marginTop: '8px' }}><span>LENDING: Pre-Approved</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>2/8</span></div>
                    <div style={{ display: 'flex', gap: '3px', marginTop: '3px' }}>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: ACCENT }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: ACCENT }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                      <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '8px', borderRadius: '14px', border: '1px solid #ECEEF1', boxShadow: '0 2px 6px rgba(16,27,66,0.06)', background: '#FFFFFF', padding: '10px 12px', boxSizing: 'border-box' }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '10.5px', color: '#101B42', marginBottom: '6px' }}>Morgan &amp; Alex Lee</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#101B42' }}><span>BUYING: Under Contract</span><span style={{ color: '#9AA3AF', fontWeight: 500 }}>5/6</span></div>
                  <div style={{ display: 'flex', gap: '3px', marginTop: '3px' }}>
                    <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#22C55E' }}></div>
                    <div style={{ flexGrow: 1, height: '4px', borderRadius: '2px', background: '#E5E7EB' }}></div>
                  </div>
                </div>

              </div>

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '56px', background: '#FFFFFF', borderTop: '1px solid #ECEEF1', display: 'flex', alignItems: 'center', justifyContent: 'space-around', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: ACCENT }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7"></path><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"></path></svg>
                  <span style={{ fontSize: '8px', fontWeight: 600 }}>Home</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: '#9AA3AF' }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>
                  <span style={{ fontSize: '8px', fontWeight: 600 }}>Clients</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: '#9AA3AF' }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5"></path><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path></svg>
                  <span style={{ fontSize: '8px', fontWeight: 600 }}>Resources</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', color: '#9AA3AF' }}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 3.5"></path><circle cx="12" cy="16.5" r="0.6" fill="#9AA3AF" stroke="none"></circle></svg>
                  <span style={{ fontSize: '8px', fontWeight: 600 }}>Help</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
