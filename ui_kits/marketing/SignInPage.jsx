function SignInPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0' }}>
        <img src="../../assets/consors-signet.svg" alt="" width="44" height="44"
             style={{ display: 'inline-block', marginBottom: 40 }}/>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 32, lineHeight: '38px', margin: '0 auto 22px', maxWidth: 480,
          color: TOKENS.alabaster,
        }}>Check your inbox</h2>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 20, lineHeight: '30px', color: TOKENS.goldLight,
          margin: '0 auto', maxWidth: 480,
        }}>
          We have sent a sign-in link to <span style={{ color: TOKENS.alabaster }}>{email}</span>. It will expire in fifteen minutes.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 440, margin: '0 auto', padding: '120px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
        <Eyebrow on="dark">MEMBERS' ENTRANCE</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 32, lineHeight: '38px',
          margin: '40px 0 0', color: TOKENS.alabaster,
        }}>Sign in</h1>
      </div>

      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
        <Field label="Email" type="email" name="email" autoComplete="email"
               required value={email} onChange={e => setEmail(e.target.value)}/>
        <Field label="Password" type="password" name="password"
               autoComplete="current-password" required
               value={password} onChange={e => setPassword(e.target.value)}/>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <PrimaryBtn>Continue</PrimaryBtn>
        </div>

        <div style={{
          marginTop: 40, textAlign: 'center',
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13,
          color: TOKENS.stone,
        }}>
          <a href="forgot-password.html" style={{ color: TOKENS.stone, border: 0, cursor: 'pointer' }}>
            Forgotten password
          </a>
          <span style={{ margin: '0 10px' }}>·</span>
          <a href="apply.html" style={{ color: TOKENS.stone, border: 0 }}>
            Apply for membership
          </a>
        </div>
      </form>
    </div>
  );
}
window.SignInPage = SignInPage;
