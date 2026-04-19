// The verified credential member card.
function MemberCard() {
  return (
    <div style={{
      width: 360, aspectRatio: '1.586 / 1',
      background: TOKENS.obsidian, borderRadius: 8,
      border: `0.5px solid ${TOKENS.gold}59`, /* 35% alpha */
      padding: '16px 20px',
      display: 'grid', gridTemplateRows: 'auto 1fr auto',
      color: TOKENS.alabaster,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start' }}>
        <div>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: 14,
            letterSpacing: '0.2em', color: TOKENS.alabaster,
          }}>CONSORS</div>
          <div style={{ width: 20, borderTop: `0.5px solid ${TOKENS.gold}`,
                        marginTop: 6 }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="11" height="11" viewBox="0 0 16 16">
            <path d="M3.5 8.2 L6.5 11 L12.5 4.5" stroke={TOKENS.gold}
                  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span style={{
            fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
            letterSpacing: '0.2em', color: TOKENS.gold,
          }}>VERIFIED</span>
        </div>
      </div>
      <div style={{ alignSelf: 'center' }}>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: TOKENS.stone, marginBottom: 8,
        }}>Member</div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 22,
                      lineHeight: 1.1, color: TOKENS.alabaster }}>
          Henry Ashworth
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-end' }}>
        <div>
          <div style={{
            fontFamily: 'var(--sans)', fontSize: 11, color: TOKENS.stone,
            letterSpacing: '0.22em', textTransform: 'uppercase',
          }}>N° MMMCXLII · MMXXVI</div>
        </div>
        <img src="../../assets/consors-signet.svg" alt=""
             width="24" height="24" style={{ display: 'block' }}/>
      </div>
    </div>
  );
}

function SectionCredential() {
  const steps = [
    ['I',   'Apply',            'A brief application, reviewed within seven days.'],
    ['II',  'The conversation', 'A private call to understand your desires, and tailor your membership to suit.'],
    ['III', 'Verification',     'Identity confirmed privately, via a trusted third party.'],
    ['IV',  'The card',         'Your digital credential, issued and carried at will.'],
  ];
  return (
    <section style={{ background: TOKENS.obsidian, color: TOKENS.alabaster,
                      padding: '128px 0' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
                      gap: 72, alignItems: 'center' }}>
          <div>
            <Eyebrow on="dark">THE CREDENTIAL</Eyebrow>
            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 32, lineHeight: '38px',
              margin: '22px 0 22px', maxWidth: 420,
            }}>
              A verified identity, privately held
            </h2>
            <p style={{
              fontFamily: 'var(--sans)', fontSize: 15, lineHeight: '27px',
              color: TOKENS.alabaster, maxWidth: 480, margin: 0,
            }}>
              Every member carries an independently verified digital credential —
              confirmed once, held privately, shared only at your initiation. For
              companions, it is the end of first-meeting uncertainty. For the
              circle, it is the standard we keep.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MemberCard/>
          </div>
        </div>

        <div style={{ marginTop: 128 }}>
          <div style={{ textAlign: 'center' }}>
            <Eyebrow on="dark">OUR APPLICATION PROCESS</Eyebrow>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                        marginTop: 72 }}>
            {steps.map(([n, t, d], i) => (
              <div key={n} style={{
                padding: '0 28px',
                borderLeft: i === 0 ? 0 : `0.5px solid ${TOKENS.gold}2E`,
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: 22, color: TOKENS.gold,
                }}>No. {n}.</div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontWeight: 400,
                  fontSize: 22, lineHeight: '27px', margin: '14px 0 22px',
                }}>{t}</h3>
                <p style={{
                  fontFamily: 'var(--sans)', fontSize: 14, lineHeight: '25px',
                  color: TOKENS.alabaster, margin: 0,
                }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
window.MemberCard = MemberCard;
window.SectionCredential = SectionCredential;
