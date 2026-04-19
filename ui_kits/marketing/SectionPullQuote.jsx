function SectionPullQuote({ fontSize = 32, lineHeight = 46, maxWidth = 720 }) {
  return (
    <section style={{ background: TOKENS.oxblood, color: TOKENS.alabaster,
                      padding: '128px 0' }}>
      <Container style={{ textAlign: 'center', maxWidth: 880 }}>
        <div style={{
          fontFamily: 'var(--serif)', fontSize: Math.round(fontSize * 3), lineHeight: 1,
          color: TOKENS.gold, marginBottom: 14,
        }}>&ldquo;</div>
        <blockquote style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize, lineHeight: `${lineHeight}px`,
          margin: 0, color: TOKENS.alabaster,
          maxWidth, marginLeft: 'auto', marginRight: 'auto',
        }}>
          One does not find good company the way one finds a restaurant.
          Introduction matters. So does trust. So does taste. So does discretion.
          Consors has all the aforementioned in abundance.
        </blockquote>
        <div style={{ width: 30, borderTop: `0.5px solid ${TOKENS.gold}`,
                      margin: '32px auto' }}/>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: TOKENS.goldLight,
        }}>Member N° MLXXXVII</div>
      </Container>
    </section>
  );
}
window.SectionPullQuote = SectionPullQuote;
