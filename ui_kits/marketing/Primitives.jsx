// Shared primitives + tokens for the landing page. All sizes follow section 6.
const TOKENS = {
  obsidian:  '#0E0E10',
  alabaster: '#F4F0E8',
  oxblood:   '#5A1A1F',
  gold:      '#B08D57',
  goldLight: '#C9B896',
  stone:     '#8A7F6E',
  white:     '#FFFFFF',
  container: 1120,
  pageMargin: 160,
};

function Container({ children, style }) {
  return (
    <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', ...style }}>
      {children}
    </div>
  );
}

function Eyebrow({ children, on = 'dark' }) {
  const colour = on === 'dark' ? TOKENS.gold
                : on === 'light' ? TOKENS.oxblood
                : TOKENS.stone;
  return (
    <div style={{
      fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
      letterSpacing: '0.3em', textTransform: 'uppercase',
      lineHeight: '16px', color: colour,
    }}>— {children} —</div>
  );
}

function Divider({ on = 'dark', width = 30 }) {
  const colour = on === 'dark' ? TOKENS.gold : TOKENS.oxblood;
  return <div style={{ width, borderTop: `0.5px solid ${colour}`, margin: '22px 0' }}/>;
}

function PrimaryBtn({ children, href }) {
  const style = {
    fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.28em', textTransform: 'uppercase',
    padding: '14px 34px', background: TOKENS.gold,
    color: TOKENS.obsidian, border: 0, borderRadius: 2, cursor: 'pointer',
    transition: 'background 200ms cubic-bezier(0.2,0,0,1)',
    textDecoration: 'none', display: 'inline-block',
  };
  const handlers = {
    onMouseEnter: e => e.currentTarget.style.background = '#A1814F',
    onMouseLeave: e => e.currentTarget.style.background = TOKENS.gold,
  };
  if (href) return <a href={href} style={style} {...handlers}>{children}</a>;
  return <button style={style} {...handlers}>{children}</button>;
}

function SecondaryBtn({ children, on = 'dark', href }) {
  const colour = on === 'dark' ? TOKENS.gold : TOKENS.oxblood;
  const style = {
    fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.28em', textTransform: 'uppercase',
    padding: '14px 34px', background: 'transparent',
    color: colour, border: `0.5px solid ${colour}`, borderRadius: 2, cursor: 'pointer',
    textDecoration: 'none', display: 'inline-block',
  };
  if (href) return <a href={href} style={style}>{children}</a>;
  return <button style={style}>{children}</button>;
}

function Wordmark({ colour = TOKENS.obsidian, size = 11 }) {
  return (
    <span style={{
      fontFamily: 'var(--serif)', fontWeight: 400,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      fontSize: size, color: colour,
    }}>CONSORS</span>
  );
}

function Signet({ size = 22, ring = TOKENS.gold, letter = TOKENS.gold, bg = 'transparent' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" style={{ display:'block' }}>
      <circle cx="30" cy="30" r="29.5" fill={bg} stroke={ring} strokeWidth="0.5"/>
      <circle cx="30" cy="30" r="25.5" fill="none" stroke={ring} strokeWidth="0.5"/>
      <text x="30" y="30" textAnchor="middle" dominantBaseline="central"
            fontFamily="var(--serif)" fontSize="28" fill={letter}>C</text>
    </svg>
  );
}

window.TOKENS = TOKENS;
window.Container = Container;
window.Eyebrow = Eyebrow;
window.Divider = Divider;
window.PrimaryBtn = PrimaryBtn;
window.SecondaryBtn = SecondaryBtn;
window.Wordmark = Wordmark;
window.Signet = Signet;
