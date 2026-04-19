function ForgotPasswordPage() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0',
                    maxWidth: 560, margin: '0 auto' }}>
        <img src="../../assets/consors-signet.svg" alt="" width="44" height="44"
             style={{ display: 'inline-block', marginBottom: 40 }}/>
        <Eyebrow on="dark">A LINK IS ON ITS WAY</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 32, lineHeight: '38px',
          margin: '40px auto 22px', maxWidth: 480, color: TOKENS.alabaster,
        }}>Check your inbox</h2>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 20, lineHeight: '30px', color: TOKENS.goldLight,
          margin: '0 auto 40px', maxWidth: 480,
        }}>
          If an account exists for <span style={{ color: TOKENS.alabaster }}>{email}</span>,
          we have sent a link to reset your password. It will expire in thirty minutes.
        </p>
        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13,
          color: TOKENS.stone,
        }}>
          <a href="signin.html" style={{ color: TOKENS.stone, border: 0 }}>
            ← Return to sign in
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 440, margin: '0 auto', padding: '120px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow on="dark">A MOMENT'S FORGETFULNESS</Eyebrow>
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 32, lineHeight: '38px',
          margin: '40px 0 22px', color: TOKENS.alabaster,
        }}>Reset your password</h1>
        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 16, lineHeight: '26px', color: TOKENS.goldLight,
          margin: '0 auto', maxWidth: 400,
        }}>
          Enter the email address on your account. We shall send you a link
          to set a new one.
        </p>
      </div>

      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
        <Field label="Email" type="email" name="email" autoComplete="email"
               required value={email} onChange={e => setEmail(e.target.value)}/>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <PrimaryBtn>Send reset link</PrimaryBtn>
        </div>

        <div style={{
          marginTop: 40, textAlign: 'center',
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13,
          color: TOKENS.stone,
        }}>
          <a href="signin.html" style={{ color: TOKENS.stone, border: 0 }}>
            Return to sign in
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
window.ForgotPasswordPage = ForgotPasswordPage;
