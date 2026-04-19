function SectionPhilosophy() {
  return (
    <section style={{ background: TOKENS.alabaster, color: TOKENS.obsidian,
                      padding: '128px 0' }}>
      <Container style={{ textAlign: 'center', maxWidth: 720 }}>
        <Eyebrow on="light">A QUICK INTRODUCTION</Eyebrow>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 22, lineHeight: '33px',
          margin: '40px auto 22px', maxWidth: 620,
        }}>
          The Romans had a word for one’s chosen companion — <em style={{fontStyle:'normal'}}>consors</em> —
          the partner with whom one shares an evening, a table, a trip, a room.
          Two thousand years later, we have borrowed it for the same reason.
        </p>
        <div style={{ width: 30, borderTop: `0.5px solid ${TOKENS.oxblood}`, margin: '40px auto' }}/>
        <p style={{
          fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
          margin: '0 auto', maxWidth: 540,
        }}>
          Consors is a private adult lifestyle and concierge service for
          gentlemen who know what they want, but not how to make it happen.
          We inspire. We curate. We make introductions. We verify, quietly,
          who walks through our door — so that whatever follows, a dinner
          in the city, a weekend in the countryside, an intimate rendezvous,
          is arranged with absolute confidence.
        </p>
      </Container>
    </section>
  );
}
window.SectionPhilosophy = SectionPhilosophy;
