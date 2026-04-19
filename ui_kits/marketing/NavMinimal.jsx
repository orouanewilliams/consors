// Dark, narrow nav used on sign-in and apply pages. Wordmark left,
// "Return to the website" right — no CTA clutter.
function NavMinimal() {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: TOKENS.obsidian, color: TOKENS.alabaster,
      borderBottom: `0.5px solid ${TOKENS.gold}40`,
    }}>
      <Container style={{ display: 'flex', justifyContent: 'center',
                          alignItems: 'center', padding: '20px 24px' }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="../../assets/consors-wordmark-light.svg"
            alt="Consors"
            style={{ height: 12, display: 'block' }}
          />
        </a>
      </Container>
    </div>
  );
}
window.NavMinimal = NavMinimal;
