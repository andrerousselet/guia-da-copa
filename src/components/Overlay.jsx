const OVERLAY_MODAL = {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: '100',
}

export default function Overlay() {
  return <div style={OVERLAY_MODAL} />
};
