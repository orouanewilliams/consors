function SectionDiscretion() {
  const paras = [
    'Consors keeps no public profiles. No photographs are indexed. No correspondence is forwarded without consent on both sides.',
    'Your verified credential is held in encrypted form and shared only at your initiation. Members’ notes written after any introduction are never published, never rated, and never named — they are read by our editors alone, and used to shape our concierge and editorial judgement.',
  ];
  return (
    <section style={{ background: TOKENS.white, color: TOKENS.obsidian,
                      padding: '128px 0' }}>
      <Container style={{ maxWidth: 720 }}>
        <div style={{ textAlign: 'center' }}>
          <Eyebrow on="white">A NOTE ON DISCRETION</Eyebrow>
        </div>
        <div style={{ marginTop: 40 }}>
          {paras.map((p, i) => (
            <p key={i} style={{
              fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
              margin: '0 auto 22px', maxWidth: 540,
            }}>{p}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
window.SectionDiscretion = SectionDiscretion;
