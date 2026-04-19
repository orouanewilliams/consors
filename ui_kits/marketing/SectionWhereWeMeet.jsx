function SectionWhereWeMeet() {
  const places = 'London · Manchester · Dublin · Edinburgh · Glasgow · Dubai · Las Vegas';
  return (
    <section style={{ background: TOKENS.alabaster, color: TOKENS.obsidian,
                      padding: '128px 0' }}>
      <Container style={{ textAlign: 'center', maxWidth: 720 }}>
        <Eyebrow on="light">WE'RE EVERYWHERE YOU ARE</Eyebrow>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 22, lineHeight: '33px',
          margin: '40px auto 22px', maxWidth: 620,
        }}>{places}</p>
        <div style={{ width: 30, borderTop: `0.5px solid ${TOKENS.oxblood}`,
                      margin: '22px auto' }}/>
        <p style={{
          fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
          margin: '0 auto', color: TOKENS.stone, maxWidth: 460,
        }}>Anywhere your travels take you.</p>
      </Container>
    </section>
  );
}
window.SectionWhereWeMeet = SectionWhereWeMeet;
