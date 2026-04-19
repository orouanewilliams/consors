// Persistent top navigation.
function Nav() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: TOKENS.obsidian, color: TOKENS.alabaster,
      borderBottom: `0.5px solid ${TOKENS.gold}40`,
    }}>
      <Container style={{ display: 'flex', justifyContent: 'space-between',
                          alignItems: 'center', padding: '20px 24px', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="../../assets/consors-wordmark-light.svg"
            alt="Consors"
            style={{ height: 12, display: 'block' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="signin.html" style={{
            fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.3em', color: TOKENS.alabaster, border: 0,
            cursor: 'pointer',
          }}>SIGN IN</a>
          <a href="apply.html" style={{
            fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            padding: '10px 22px', background: TOKENS.gold,
            color: TOKENS.obsidian, border: 0, borderRadius: 2,
            cursor: 'pointer', textDecoration: 'none',
            transition: 'background 200ms cubic-bezier(0.2,0,0,1)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#A1814F'}
          onMouseLeave={e => e.currentTarget.style.background = TOKENS.gold}>
            Apply for membership
          </a>
        </div>
      </Container>
    </div>
  );
}
window.Nav = Nav;
