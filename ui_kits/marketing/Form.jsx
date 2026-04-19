// Shared form controls for sign-in and apply pages. Dark surfaces only.
// All fields follow the spec's restraint: no filled backgrounds, hairline
// bottom rule, 0.5px Gold border on focus, uppercase label above.

function Field({
  label, type = 'text', name, required, value, onChange,
  placeholder, autoComplete, as = 'input', rows = 4,
}) {
  const [focus, setFocus] = React.useState(false);
  const sharedLabelStyle = {
    display: 'block',
    fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
    letterSpacing: '0.3em', textTransform: 'uppercase',
    color: TOKENS.stone, marginBottom: 10,
  };
  const sharedInputStyle = {
    width: '100%', background: 'transparent',
    border: 0, borderBottom: `0.5px solid ${focus ? TOKENS.gold : TOKENS.gold + '59'}`,
    color: TOKENS.alabaster,
    fontFamily: 'var(--sans)', fontSize: 15, lineHeight: '27px',
    padding: '8px 0', outline: 'none', borderRadius: 0,
    transition: 'border-color 200ms',
    fontStyle: 'inherit', resize: 'none',
  };
  return (
    <label style={{ display: 'block', marginBottom: 28 }}>
      <span style={sharedLabelStyle}>{label}{required && <span style={{color: TOKENS.gold}}> ·</span>}</span>
      {as === 'textarea' ? (
        <textarea name={name} rows={rows} value={value} onChange={onChange}
                  placeholder={placeholder} autoComplete={autoComplete}
                  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                  style={sharedInputStyle}/>
      ) : (
        <input type={type} name={name} value={value} onChange={onChange}
               placeholder={placeholder} autoComplete={autoComplete}
               onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
               style={sharedInputStyle}/>
      )}
    </label>
  );
}

function Fieldset({ title, children }) {
  return (
    <fieldset style={{
      border: 0, padding: 0, margin: '0 0 72px',
    }}>
      <legend style={{
        fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 22,
        lineHeight: '27px', color: TOKENS.alabaster,
        padding: 0, marginBottom: 8,
      }}>{title}</legend>
      <div style={{ width: 24, borderTop: `0.5px solid ${TOKENS.gold}`,
                    marginBottom: 40 }}/>
      {children}
    </fieldset>
  );
}

// Segmented-style single-select rendered as two hairline-framed pills.
function ChoicePills({ label, options, value, onChange }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <span style={{
        display: 'block',
        fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
        letterSpacing: '0.3em', textTransform: 'uppercase',
        color: TOKENS.stone, marginBottom: 14,
      }}>{label}</span>
      <div style={{ display: 'flex', gap: 0 }}>
        {options.map((o, i) => {
          const selected = o.value === value;
          return (
            <button type="button" key={o.value}
                    onClick={() => onChange(o.value)}
                    style={{
                      flex: 1,
                      padding: '14px 22px',
                      background: selected ? TOKENS.gold : 'transparent',
                      color: selected ? TOKENS.obsidian : TOKENS.alabaster,
                      border: `0.5px solid ${TOKENS.gold}${selected ? '' : '59'}`,
                      borderLeft: i === 0 ? `0.5px solid ${TOKENS.gold}${selected ? '' : '59'}` : 0,
                      borderRadius: 0,
                      fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
                      letterSpacing: '0.28em', textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 180ms cubic-bezier(0.2,0,0,1)',
                    }}>
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Telephone field with a dropdown of country dialling codes.
// A very short list — the full brand palette of cities covers these nicely.
const DIAL_CODES = [
  ['+44', 'United Kingdom'],
  ['+353','Ireland'],
  ['+33', 'France'],
  ['+49', 'Germany'],
  ['+34', 'Spain'],
  ['+39', 'Italy'],
  ['+41', 'Switzerland'],
  ['+31', 'Netherlands'],
  ['+46', 'Sweden'],
  ['+47', 'Norway'],
  ['+45', 'Denmark'],
  ['+351','Portugal'],
  ['+43', 'Austria'],
  ['+32', 'Belgium'],
  ['+352','Luxembourg'],
  ['+377','Monaco'],
  ['+1',  'United States / Canada'],
  ['+971','United Arab Emirates'],
  ['+974','Qatar'],
  ['+966','Saudi Arabia'],
  ['+852','Hong Kong'],
  ['+65', 'Singapore'],
  ['+81', 'Japan'],
  ['+852','Hong Kong'],
  ['+61', 'Australia'],
];

function TelField({ code, onCodeChange, number, onNumberChange, required }) {
  const [focus, setFocus] = React.useState(false);
  const border = `0.5px solid ${focus ? TOKENS.gold : TOKENS.gold + '59'}`;
  const sharedText = {
    background: 'transparent', border: 0, color: TOKENS.alabaster,
    fontFamily: 'var(--sans)', fontSize: 15, lineHeight: '27px',
    padding: '8px 0', outline: 'none', borderRadius: 0,
  };
  return (
    <label style={{ display: 'block', marginBottom: 28 }}>
      <span style={{
        display: 'block',
        fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
        letterSpacing: '0.3em', textTransform: 'uppercase',
        color: TOKENS.stone, marginBottom: 10,
      }}>Mobile {required && <span style={{color: TOKENS.gold}}> ·</span>}</span>
      <div style={{
        display: 'grid', gridTemplateColumns: '130px 1fr',
        gap: 16, borderBottom: border,
        transition: 'border-color 200ms',
      }}>
        <select value={code} onChange={e => onCodeChange(e.target.value)}
                style={{
                  ...sharedText,
                  appearance: 'none', WebkitAppearance: 'none',
                  paddingRight: 18,
                  backgroundImage:
                    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cpath d='M1 1l3 3 3-3' stroke='%23B08D57' stroke-width='0.75' fill='none'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 2px center',
                }}>
          {DIAL_CODES.map(([c, n], i) => (
            <option key={i} value={c} style={{ background: TOKENS.obsidian, color: TOKENS.alabaster }}>
              {c} · {n}
            </option>
          ))}
        </select>
        <input type="tel" autoComplete="tel-national"
               value={number} onChange={e => onNumberChange(e.target.value)}
               onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
               placeholder="7700 900000"
               style={{ ...sharedText, width: '100%' }}/>
      </div>
    </label>
  );
}

window.Field = Field;
window.Fieldset = Fieldset;
window.ChoicePills = ChoicePills;
window.TelField = TelField;
