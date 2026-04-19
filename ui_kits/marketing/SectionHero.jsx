function SectionHero({ underCtaAlign = 'center' }) {
  return (
    <section style={{
      background: TOKENS.obsidian, color: TOKENS.alabaster,
      padding: '128px 0',
    }}>
      <Container style={{ textAlign: 'center' }}>
        <Eyebrow on="dark">EST. MMXXVI · BY INVITATION</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 46, lineHeight: '51px', letterSpacing: '-0.01em',
          margin: '40px auto 22px', maxWidth: 620,
        }}>
          Where distinguished men find private companionship
        </h1>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 22, lineHeight: '33px', color: TOKENS.goldLight,
          margin: '0 auto 40px', maxWidth: 620,
        }}>
          We curate private experiences between you and the company you most
          desire — wherever you are in the world.
        </p>
        <PrimaryBtn href="apply.html">Apply for membership</PrimaryBtn>
        <p style={{
          fontFamily: 'var(--sans)', fontSize: 13, color: TOKENS.stone,
          margin: '22px auto 0', letterSpacing: '0.02em',
          textAlign: underCtaAlign, maxWidth: 460,
        }}>Membership terms discussed privately, upon application.</p>
      </Container>
    </section>
  );
}
window.SectionHero = SectionHero;
