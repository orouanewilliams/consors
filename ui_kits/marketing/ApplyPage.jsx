function ApplyPage() {
  const [form, setForm] = React.useState({
    title: 'Mr', forename: '', surname: '',
    contactPref: 'email',
    email: '', dialCode: '+44', telephone: '',
    city: '', nationality: '',
    introduction: '',
    referred: '',
    notes: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const setKey = (k, v) => setForm({ ...form, [k]: v });

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0', maxWidth: 620, margin: '0 auto' }}>
        <img src="../../assets/consors-signet.svg" alt="" width="44" height="44"
             style={{ display: 'inline-block', marginBottom: 40 }}/>
        <Eyebrow on="dark">APPLICATION RECEIVED</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 32, lineHeight: '38px',
          margin: '40px auto 22px', maxWidth: 480, color: TOKENS.alabaster,
        }}>Thank you, {form.forename || 'we will be in touch'}</h2>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 20, lineHeight: '30px', color: TOKENS.goldLight,
          margin: '0 auto', maxWidth: 520,
        }}>
          An editor will review your application within seven days and write to
          you at <span style={{ color: TOKENS.alabaster }}>
            {form.contactPref === 'email'
              ? form.email
              : `${form.dialCode} ${form.telephone}`}
          </span>.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '120px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <Eyebrow on="dark">BY APPLICATION</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 46, lineHeight: '51px', letterSpacing: '-0.01em',
          margin: '40px auto 22px', maxWidth: 520, color: TOKENS.alabaster,
        }}>Apply for membership</h1>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 20, lineHeight: '30px', color: TOKENS.goldLight,
          margin: '0 auto', maxWidth: 520,
        }}>
          Every application is dealt with by a real human being. No bots.
          Absolute discretion is assured.
        </p>
      </div>

      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
        <Fieldset title="About you">
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: 24 }}>
            <Field label="Title" value={form.title} onChange={set('title')}/>
            <Field label="Forename" value={form.forename} onChange={set('forename')} required/>
            <Field label="Surname" value={form.surname} onChange={set('surname')} required/>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <Field label="City of residence" value={form.city} onChange={set('city')} required/>
            <Field label="Nationality" value={form.nationality} onChange={set('nationality')}/>
          </div>

          <ChoicePills
            label="How shall we contact you"
            value={form.contactPref}
            onChange={(v) => setKey('contactPref', v)}
            options={[
              { value: 'email',  label: 'Email' },
              { value: 'mobile', label: 'Mobile' },
            ]}/>

          {form.contactPref === 'email' ? (
            <Field label="Email" type="email" autoComplete="email" required
                   value={form.email} onChange={set('email')}/>
          ) : (
            <TelField required
                      code={form.dialCode}
                      onCodeChange={(v) => setKey('dialCode', v)}
                      number={form.telephone}
                      onNumberChange={(v) => setKey('telephone', v)}/>
          )}
        </Fieldset>

        <div style={{ textAlign: 'center' }}>
          <PrimaryBtn>Begin application process</PrimaryBtn>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: 13, color: TOKENS.stone,
            margin: '22px auto 0', maxWidth: 460, letterSpacing: '0.02em',
          }}>
            Your application is held in confidence. Membership terms are
            discussed privately, by correspondence.
          </p>
        </div>
      </form>
    </div>
  );
}
window.ApplyPage = ApplyPage;
