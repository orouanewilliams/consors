// Edit-mode defaults. Keys are merged back to disk by the host.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "quoteFontSize": 32,
  "quoteLineHeight": 46,
  "quoteMaxWidth": 720,
  "underCtaAlign": "center"
}/*EDITMODE-END*/;

function useTweaks() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [open, setOpen] = React.useState(false);
  const [available, setAvailable] = React.useState(false);

  React.useEffect(() => {
    function onMsg(e) {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode')   { setOpen(true); setAvailable(true); }
      if (d.type === '__deactivate_edit_mode') { setOpen(false); }
    }
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const set = React.useCallback((patch) => {
    setTweaks(t => ({ ...t, ...patch }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  }, []);

  return { tweaks, set, open, available };
}

function TweaksPanel({ tweaks, set, open }) {
  if (!open) return null;
  const row = { display: 'grid', gridTemplateColumns: '120px 1fr', gap: 10,
                alignItems: 'center', padding: '8px 0',
                borderBottom: '0.5px solid #ffffff14' };
  const label = { fontFamily: 'var(--sans)', fontSize: 10, fontWeight: 500,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: '#B08D57' };
  return (
    <div style={{
      position: 'fixed', right: 20, bottom: 20, width: 300,
      background: '#0E0E10', color: '#F4F0E8',
      border: '0.5px solid #B08D5759', borderRadius: 8,
      padding: 18, zIndex: 1000,
      fontFamily: 'var(--sans)', fontSize: 12,
    }}>
      <div style={{
        fontFamily: 'var(--serif)', fontSize: 16, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: '#F4F0E8',
        borderBottom: '0.5px solid #B08D57', paddingBottom: 10, marginBottom: 10,
      }}>Tweaks</div>

      <div style={row}>
        <span style={label}>Quote size</span>
        <input type="range" min="16" max="56" value={tweaks.quoteFontSize}
               onChange={e => set({ quoteFontSize: +e.target.value,
                                    quoteLineHeight: Math.round(+e.target.value * 1.45) })}/>
      </div>
      <div style={row}>
        <span style={label}>Quote width</span>
        <input type="range" min="420" max="900" step="20" value={tweaks.quoteMaxWidth}
               onChange={e => set({ quoteMaxWidth: +e.target.value })}/>
      </div>
      <div style={row}>
        <span style={label}>Under-CTA</span>
        <select value={tweaks.underCtaAlign}
                onChange={e => set({ underCtaAlign: e.target.value })}
                style={{
                  background: '#1A1A1D', color: '#F4F0E8',
                  border: '0.5px solid #B08D5759', padding: '6px 8px',
                  fontFamily: 'var(--sans)', fontSize: 12,
                }}>
          <option value="center">Center</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
    </div>
  );
}

window.useTweaks = useTweaks;
window.TweaksPanel = TweaksPanel;
