function SectionMembership() {
  const pillars = [
    ['I',   'The Content',
      'A luxury adult lifestyle publication for distinguished gentlemen. Exclusive interviews with companions, considered portraiture, inspiration, and adult lifestyle features.'],
    ['II',  'The Companions',
      'A curated selection of the world’s finest companions. There’s someone for everyone and every occasion. Personal introductions upon request.'],
    ['III', 'The Concierge',
      'Looking for something specific? Our concierge team will help you realise any experience you desire.'],
  ];
  return (
    <section style={{ background: TOKENS.white, color: TOKENS.obsidian,
                      padding: '128px 0' }}>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <Eyebrow on="white">YOUR MEMBERSHIP</Eyebrow>
          <p style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic',
            fontSize: 22, lineHeight: '33px',
            margin: '40px auto 0', maxWidth: 620,
          }}>
            Everything we do is in service of one thing — sourcing and curating
            private experiences, between you and the company you desire.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 72, marginTop: 72 }}>
          {pillars.map(([n, t, d]) => (
            <div key={n}>
              <div style={{
                fontFamily: 'var(--serif)', fontStyle: 'italic',
                fontSize: 22, color: TOKENS.gold,
              }}>No. {n}.</div>
              <h3 style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 22, lineHeight: '27px', margin: '14px 0 0',
              }}>{t}</h3>
              <div style={{ width: 24, borderTop: `0.5px solid ${TOKENS.oxblood}`,
                            margin: '22px 0' }}/>
              <p style={{
                fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
                margin: 0,
              }}>{d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
window.SectionMembership = SectionMembership;
