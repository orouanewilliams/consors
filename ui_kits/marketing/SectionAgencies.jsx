function SectionAgencies() {
  return (
    <section style={{ background: TOKENS.obsidian, color: TOKENS.alabaster,
                      padding: '128px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
                      gap: 72, alignItems: 'start' }}>
          <div>
            <Eyebrow on="dark">PARTNER WITH US</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 32, lineHeight: '38px',
              margin: '22px 0 0', maxWidth: 420,
            }}>
              For agencies and representatives
            </h2>
          </div>
          <div style={{
            background: '#1A1A1D', borderRadius: 8,
            border: `0.5px solid ${TOKENS.gold}33`,
            padding: 32,
          }}>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
              margin: '0 0 22px', color: TOKENS.alabaster,
            }}>
              Consors is a private publication with a concierge wing — not a
              booking platform. We vet clientele. You represent companions. We
              take no commission, no markup, and no claim on the relationships
              you have built.
            </p>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
              margin: '0 0 22px', color: TOKENS.alabaster,
            }}>
              What we offer, in return, is a quieter door — and a better calibre
              of guest. Every Consors member is identity-verified, references
              considered, and held to an editorial standard before any
              introduction is made.
            </p>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
              margin: 0, color: TOKENS.alabaster,
            }}>
              We partner with a considered number of agencies, managers and
              independent representatives worldwide.
            </p>
            <div style={{
              marginTop: 40, paddingTop: 22,
              borderTop: `0.5px solid ${TOKENS.gold}33`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{
                fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: TOKENS.stone,
              }}>Partnership enquiries</span>
              <SecondaryBtn on="dark">Partner with us</SecondaryBtn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
window.SectionAgencies = SectionAgencies;
