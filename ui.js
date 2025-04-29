const input = document.getElementById('latex-input');
const preview = document.getElementById('preview');
const btn = document.getElementById('render-btn');

function renderLaTeX() {
  const tex = input.value;
  try {
    const svg = katex.renderToString(tex, { output: 'svg', throwOnError: false });
    preview.innerHTML = svg;
    return svg;
  } catch (err) {
    preview.textContent = 'Error: ' + err.message;
    return null;
  }
}

// Live preview
input.addEventListener('input', renderLaTeX);

// On button click, render and send to Penpot
btn.addEventListener('click', () => {
  const svg = renderLaTeX();
  if (svg) {
    // Send message to Penpot to insert SVG
    window.parent.postMessage({ pluginMessage: { type: 'insert-svg', svg } }, '*');
  }
});

// Listen for responses (optional)
window.addEventListener('message', (event) => {
  const msg = event.data;
  if (msg && msg.pluginMessage && msg.pluginMessage.type === 'insert-svg-response') {
    console.log('SVG inserted:', msg.pluginMessage.success);
  }
});
