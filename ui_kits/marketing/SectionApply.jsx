function SectionApply() {
  return (
    <section style={{ background: TOKENS.obsidian, color: TOKENS.alabaster,
                      padding: '128px 0' }}>
      <Container style={{ textAlign: 'center', maxWidth: 720 }}>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 32, lineHeight: '38px',
          margin: '0 auto 22px', maxWidth: 560,
        }}>
          Join by invitation, or by application
        </h2>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 20, lineHeight: '30px',
          color: TOKENS.goldLight, margin: '0 auto 40px',
        }}>Applications are reviewed within seven days.</p>
        <PrimaryBtn href="apply.html">Apply for membership</PrimaryBtn>

        <div style={{ marginTop: 72, display: 'flex',
                      justifyContent: 'center' }}>
          <img src="../../assets/consors-signet.svg" alt=""
               width="36" height="36" style={{ display: 'block' }}/>
        </div>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: TOKENS.stone, marginTop: 22,
        }}>Consors · MMXXVI</div>

        <div style={{
          marginTop: 40,
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13,
          color: TOKENS.stone,
        }}>
          {['Privacy','Terms','Editorial','Discretion','Partners'].map((l, i, arr) => (
            <span key={l}>
              <a style={{ border: 0, color: TOKENS.stone }}>{l}</a>
              {i < arr.length - 1 && <span style={{ margin: '0 10px' }}>·</span>}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
window.SectionApply = SectionApply;
