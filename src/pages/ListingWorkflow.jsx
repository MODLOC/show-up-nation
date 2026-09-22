import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../lib/routes';
import Layout from '../components/Layout';

const SEED_NOTES = [
  {
    id: 1,
    author: 'Jordan Kim',
    role: 'Buyer',
    initials: 'JK',
    date: 'Sep 12',
    text: 'I’d really like to be under contract before the end of the month so I’m not carrying two mortgages once we find our next place.',
  },
];

const SEED_TICKETS = [];

const SEED_MESSAGES = [
  { id: 1, author: 'Alex Rivera', date: 'Sep 18', text: 'Sent the updated listing photos over to Jordan for approval.' },
];

const STATUS_COLORS = {
  Open: { bg: '#EAF0FF', color: '#2F5FE9' },
  'Needs Response': { bg: '#FFF3EA', color: '#F97316' },
  Resolved: { bg: '#EAFBF0', color: '#22C55E' },
};

const STAGES = [
  {
    title: 'Listing Agreement Signed',
    description: 'Jordan signed the listing agreement to sell their current home.',
    status: 'Complete',
    state: 'done',
  },
  {
    title: 'Prep & Staging',
    description: 'The home was prepped, staged, and photographed for the listing.',
    status: 'Complete',
    state: 'done',
  },
  {
    title: 'Active on Market',
    description: 'The listing went live and started receiving interest.',
    status: 'Complete',
    state: 'done',
  },
  {
    title: 'Showings & Offers',
    description: 'Buyers toured the home and submitted offers.',
    status: 'Complete',
    state: 'done',
  },
  {
    title: 'Under Contract',
    description: 'An offer was accepted and the sale agreement is signed.',
    status: 'In Progress',
    state: 'current',
  },
  {
    title: 'Closed',
    description: "The sale closes and proceeds are available toward Jordan's next home.",
    status: 'Upcoming',
    state: 'upcoming',
  },
];

const VERT_COLOR = '#F97316';
const VERT_TINT_BG = '#FFF3EA';
const TAB_ACTIVE = { bg: VERT_COLOR, color: '#FFFFFF' };
const TAB_INACTIVE = { bg: '#F2F3F5', color: '#5B6472' };

export default function ListingWorkflow() {
  const [notes, setNotes] = useState(SEED_NOTES);
  const [tickets, setTickets] = useState(SEED_TICKETS);
  const [messages, setMessages] = useState(SEED_MESSAGES);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [widgetTab, setWidgetTab] = useState('notes');

  const isNotesTab = widgetTab === 'notes';
  const isTicketsTab = widgetTab === 'tickets';
  const isMessagesTab = widgetTab === 'messages';

  const openTickets = tickets.filter((t) => t.status !== 'Resolved');
  const hasUrgent = openTickets.some((t) => t.urgent);
  const hasNeedsResponse = openTickets.some((t) => t.status === 'Needs Response');
  let ticketBadgeBg, ticketBadgeColor;
  if (hasUrgent) {
    ticketBadgeBg = '#DC2626';
    ticketBadgeColor = '#FFFFFF';
  } else if (hasNeedsResponse) {
    ticketBadgeBg = '#F97316';
    ticketBadgeColor = '#FFFFFF';
  } else {
    ticketBadgeBg = '#EAF0FF';
    ticketBadgeColor = '#2F5FE9';
  }
  const hasTickets = tickets.length > 0;
  const noTickets = tickets.length === 0;
  const hasOpenTickets = openTickets.length > 0;
  const openTicketCount = openTickets.length;
  const ticketCountLabel = openTicketCount === 1 ? 'Ticket' : 'Tickets';

  const verticalLabel = 'Listing';
  const stageLabel = 'Step 5 of 6';
  const repLine = 'Listing Agent: Alex Rivera';

  const addNote = () =>
    setNotes((prev) => [
      ...prev,
      { id: Date.now(), author: 'Alex Rivera', role: 'Agent', initials: 'AR', date: 'Just now', text: 'Checking in on this — will update once I hear back.' },
    ]);

  const addTicket = () =>
    setTickets((prev) => [
      ...prev,
      { id: Date.now(), title: 'New task request', from: 'Alex Rivera (Listing Agent)', to: 'Jordan Kim (Seller)', status: 'Open', urgent: false },
    ]);

  const resolveTicket = (id) =>
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, status: 'Resolved' } : t)));

  const addMessage = () =>
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), author: 'Alex Rivera', date: 'Just now', text: 'Checking in — will follow up shortly.' },
    ]);

  const toggleWidget = () => setWidgetOpen((v) => !v);
  const closeWidget = () => setWidgetOpen(false);

  return (
    <Layout active="clients">
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
          to={ROUTES['ClientDetail.dc.html']}
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
          Back to Jordan Kim
        </Link>

        <div>
          <span
            style={{
              display: 'inline-block',
              background: '#F97316',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              padding: '5px 12px',
              borderRadius: 999,
              marginBottom: 12,
            }}
          >
            Listing
          </span>
          <h1 style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 28, color: '#101B42' }}>Listing Workflow</h1>
          <p style={{ margin: '6px 0 0', fontSize: 14, color: '#8B93A1' }}>Jordan Kim — currently on step 5 of 6</p>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: '#9AA3AF' }}>Connected by Connie White · Listing Agent: Alex Rivera</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42' }}>Notes</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                type="button"
                onClick={addNote}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  border: '1px solid #E5E7EB',
                  background: '#FFFFFF',
                  borderRadius: 999,
                  padding: '5px 12px',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  color: '#5B6472',
                  cursor: 'pointer',
                }}
              >
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#5B6472" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Add Note
              </button>
              {hasOpenTickets && (
                <a
                  href="#tickets"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: ticketBadgeBg,
                    color: ticketBadgeColor,
                    borderRadius: 999,
                    padding: '6px 14px',
                    textDecoration: 'none',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={ticketBadgeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a2 2 0 0 0-2-2 2 2 0 0 1 0-4V4H5v2a2 2 0 0 1 0 4 2 2 0 0 0 0 4 2 2 0 0 1 0 4v2h14v-2a2 2 0 0 1 0-4Z" />
                  </svg>
                  {openTicketCount} {ticketCountLabel}
                </a>
              )}
            </div>
          </div>
          {notes.map((note) => (
            <div
              key={note.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid #ECEEF1',
                borderRadius: 12,
                padding: '14px 16px',
                display: 'flex',
                gap: 12,
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: '#FFF3EA',
                  color: '#F97316',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {note.initials}
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 13, color: '#101B42' }}>{note.author}</span>
                  <span style={{ fontSize: 11, color: '#9AA3AF' }}>
                    {note.role} · {note.date}
                  </span>
                </div>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: '#3F4757', lineHeight: 1.5 }}>{note.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="tickets" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42' }}>Tickets</span>
            <button
              type="button"
              onClick={addTicket}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                border: '1px solid #E5E7EB',
                background: '#FFFFFF',
                borderRadius: 999,
                padding: '5px 12px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: '#5B6472',
                cursor: 'pointer',
              }}
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#5B6472" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
              New Ticket
            </button>
          </div>
          {hasTickets &&
            tickets.map((ticket) => {
              const statusStyle = STATUS_COLORS[ticket.status] || STATUS_COLORS.Open;
              return (
                <div
                  key={ticket.id}
                  style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 12, padding: '14px 16px', boxSizing: 'border-box' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a2 2 0 0 0-2-2 2 2 0 0 1 0-4V4H5v2a2 2 0 0 1 0 4 2 2 0 0 0 0 4 2 2 0 0 1 0 4v2h14v-2a2 2 0 0 1 0-4Z" />
                      </svg>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 14, color: '#101B42' }}>{ticket.title}</span>
                      {ticket.urgent && (
                        <span style={{ background: '#FDECEC', color: '#DC2626', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>
                          Urgent
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        background: statusStyle.bg,
                        color: statusStyle.color,
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: 999,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <p style={{ margin: '8px 0 10px 23px', fontSize: 12, color: '#9AA3AF' }}>
                    {ticket.from} → {ticket.to}
                  </p>
                  <button
                    type="button"
                    onClick={() => resolveTicket(ticket.id)}
                    style={{ marginLeft: 23, border: 'none', background: 'none', color: '#F97316', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, cursor: 'pointer', padding: 0 }}
                  >
                    Mark Resolved
                  </button>
                </div>
              );
            })}
          {noTickets && (
            <div style={{ background: '#FFFFFF', border: '1px dashed #E5E7EB', borderRadius: 12, padding: '14px 16px', boxSizing: 'border-box', fontSize: 13, color: '#9AA3AF' }}>
              No open tickets on the listing side.
            </div>
          )}
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #ECEEF1', borderRadius: 16, padding: '28px 32px', boxSizing: 'border-box' }}>
          {STAGES.map((stage, i) => {
            const isLast = i === STAGES.length - 1;
            return (
              <div key={stage.title} style={{ display: 'flex', gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {stage.state === 'done' && (
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                  )}
                  {stage.state === 'current' && (
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#FFFFFF', border: '3px solid #F97316', flexShrink: 0 }} />
                  )}
                  {stage.state === 'upcoming' && (
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#FFFFFF', border: '2px solid #E5E7EB', flexShrink: 0 }} />
                  )}
                  {!isLast && (
                    <div
                      style={{
                        flexGrow: 1,
                        width: 2,
                        background: stage.state === 'upcoming' ? '#E5E7EB' : '#F97316',
                        margin: '2px 0',
                      }}
                    />
                  )}
                </div>
                <div style={{ flexGrow: 1, paddingBottom: isLast ? 0 : 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 15, color: stage.state === 'upcoming' ? '#9AA3AF' : '#101B42' }}>
                      {stage.title}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: stage.state === 'upcoming' ? '#9AA3AF' : '#F97316',
                        background: stage.state === 'upcoming' ? '#F2F3F5' : '#FFF3EA',
                        padding: '3px 10px',
                        borderRadius: 999,
                      }}
                    >
                      {stage.status}
                    </span>
                  </div>
                  <p style={{ margin: '6px 0 0', fontSize: 13, color: stage.state === 'upcoming' ? '#B0B6C1' : '#8B93A1', lineHeight: 1.5 }}>
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={toggleWidget}
        aria-label="Notes, tickets & messages"
        className="fab-btn"
        style={{
          position: 'absolute',
          bottom: 28,
          right: 28,
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: VERT_COLOR,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 24px rgba(16,27,66,0.28)',
          zIndex: 20,
        }}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" fill="#FFFFFF" stroke="none" />
          <path d="M8.3 8.3a5.2 5.2 0 0 0 0 7.4" strokeDasharray="2 3" />
          <path d="M15.7 8.3a5.2 5.2 0 0 1 0 7.4" strokeDasharray="2 3" />
          <path d="M5.3 5.3a9.5 9.5 0 0 0 0 13.4" strokeDasharray="2 3" />
          <path d="M18.7 5.3a9.5 9.5 0 0 1 0 13.4" strokeDasharray="2 3" />
        </svg>
        {hasOpenTickets && (
          <span
            style={{
              position: 'absolute',
              top: -2,
              right: -2,
              minWidth: 18,
              height: 18,
              padding: '0 4px',
              borderRadius: 999,
              background: '#DC2626',
              color: '#FFFFFF',
              fontSize: 10,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #F6F7F5',
              boxSizing: 'border-box',
            }}
          >
            {openTicketCount}
          </span>
        )}
      </button>

      {widgetOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: 96,
            right: 28,
            width: 400,
            maxHeight: 640,
            background: '#FFFFFF',
            borderRadius: 20,
            boxShadow: '0 24px 60px rgba(16,27,66,0.35)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 21,
          }}
        >
          <div style={{ background: `linear-gradient(165deg, ${VERT_COLOR} 0%, #101B42 150%)`, padding: '22px 22px 40px', position: 'relative', flexShrink: 0 }}>
            <button
              type="button"
              onClick={closeWidget}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                border: 'none',
                background: 'rgba(255,255,255,0.18)',
                borderRadius: '50%',
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.75)', letterSpacing: 0.5, marginBottom: 10 }}>
              SHOW UP NATION
            </span>
            <span style={{ display: 'block', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 20, color: '#FFFFFF', lineHeight: 1.3 }}>Hi Alex 👋</span>
            <span style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>Everything on Jordan's {verticalLabel} case.</span>
          </div>

          <div
            style={{
              margin: '-24px 16px 0',
              background: '#FFFFFF',
              border: '1px solid #ECEEF1',
              borderRadius: 14,
              padding: '12px 16px',
              boxShadow: '0 6px 16px rgba(16,27,66,0.1)',
              position: 'relative',
              zIndex: 1,
              flexShrink: 0,
              boxSizing: 'border-box',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: '#101B42' }}>{verticalLabel} · Jordan Kim</span>
              <span style={{ background: VERT_TINT_BG, color: VERT_COLOR, fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                {stageLabel}
              </span>
            </div>
            <span style={{ display: 'block', fontSize: 11, color: '#9AA3AF', marginTop: 4 }}>Connected by Connie White · {repLine}</span>
          </div>

          <div style={{ display: 'flex', gap: 6, padding: '16px 16px 0', flexShrink: 0 }}>
            <button
              type="button"
              onClick={() => setWidgetTab('notes')}
              style={{
                flex: 1,
                border: 'none',
                borderRadius: 999,
                padding: '8px 0',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
                background: isNotesTab ? TAB_ACTIVE.bg : TAB_INACTIVE.bg,
                color: isNotesTab ? TAB_ACTIVE.color : TAB_INACTIVE.color,
              }}
            >
              Notes
            </button>
            <button
              type="button"
              onClick={() => setWidgetTab('tickets')}
              style={{
                flex: 1,
                border: 'none',
                borderRadius: 999,
                padding: '8px 0',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
                background: isTicketsTab ? TAB_ACTIVE.bg : TAB_INACTIVE.bg,
                color: isTicketsTab ? TAB_ACTIVE.color : TAB_INACTIVE.color,
              }}
            >
              Tickets
              {hasOpenTickets && (
                <span style={{ marginLeft: 4, background: '#DC2626', color: '#FFFFFF', fontSize: 9, fontWeight: 700, borderRadius: 999, padding: '1px 5px' }}>
                  {openTicketCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setWidgetTab('messages')}
              style={{
                flex: 1,
                border: 'none',
                borderRadius: 999,
                padding: '8px 0',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
                background: isMessagesTab ? TAB_ACTIVE.bg : TAB_INACTIVE.bg,
                color: isMessagesTab ? TAB_ACTIVE.color : TAB_INACTIVE.color,
              }}
            >
              Messages
            </button>
          </div>

          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {isNotesTab && (
              <>
                {notes.map((note) => (
                  <div key={note.id} style={{ background: '#F9FAFB', border: '1px solid #ECEEF1', borderRadius: 12, padding: '12px 14px', boxSizing: 'border-box' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, color: '#101B42' }}>{note.author}</span>
                      <span style={{ fontSize: 10, color: '#9AA3AF' }}>
                        {note.role} · {note.date}
                      </span>
                    </div>
                    <p style={{ margin: '4px 0 0', fontSize: 12, color: '#3F4757', lineHeight: 1.5 }}>{note.text}</p>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addNote}
                  style={{ border: '1px dashed #D8DEEC', background: '#FFFFFF', borderRadius: 10, padding: 9, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, color: '#5B6472', cursor: 'pointer' }}
                >
                  + Add Note
                </button>
              </>
            )}

            {isTicketsTab && (
              <>
                {hasTickets &&
                  tickets.map((ticket) => {
                    const statusStyle = STATUS_COLORS[ticket.status] || STATUS_COLORS.Open;
                    return (
                      <div key={ticket.id} style={{ background: '#F9FAFB', border: '1px solid #ECEEF1', borderRadius: 12, padding: '12px 14px', boxSizing: 'border-box' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, color: '#101B42' }}>{ticket.title}</span>
                          <span
                            style={{
                              background: statusStyle.bg,
                              color: statusStyle.color,
                              fontSize: 10,
                              fontWeight: 700,
                              padding: '2px 8px',
                              borderRadius: 999,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {ticket.status}
                          </span>
                        </div>
                        <p style={{ margin: '6px 0 8px', fontSize: 11, color: '#9AA3AF' }}>
                          {ticket.from} → {ticket.to}
                        </p>
                        <button
                          type="button"
                          onClick={() => resolveTicket(ticket.id)}
                          style={{ border: 'none', background: 'none', color: VERT_COLOR, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 11, cursor: 'pointer', padding: 0 }}
                        >
                          Mark Resolved
                        </button>
                      </div>
                    );
                  })}
                {noTickets && (
                  <div style={{ background: '#F9FAFB', border: '1px dashed #E5E7EB', borderRadius: 12, padding: '12px 14px', fontSize: 12, color: '#9AA3AF', boxSizing: 'border-box' }}>
                    No open tickets.
                  </div>
                )}
                <button
                  type="button"
                  onClick={addTicket}
                  style={{ border: '1px dashed #D8DEEC', background: '#FFFFFF', borderRadius: 10, padding: 9, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, color: '#5B6472', cursor: 'pointer' }}
                >
                  + New Ticket
                </button>
              </>
            )}

            {isMessagesTab && (
              <>
                {messages.map((msg) => (
                  <div key={msg.id} style={{ background: '#F9FAFB', border: '1px solid #ECEEF1', borderRadius: 12, padding: '12px 14px', boxSizing: 'border-box' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, color: '#101B42' }}>{msg.author}</span>
                      <span style={{ fontSize: 10, color: '#9AA3AF' }}>{msg.date}</span>
                    </div>
                    <p style={{ margin: '4px 0 0', fontSize: 12, color: '#3F4757', lineHeight: 1.5 }}>{msg.text}</p>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addMessage}
                  style={{ border: '1px dashed #D8DEEC', background: '#FFFFFF', borderRadius: 10, padding: 9, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12, color: '#5B6472', cursor: 'pointer' }}
                >
                  + New Message
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
