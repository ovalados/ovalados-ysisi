/* share-table.js — Compartir tabla de posiciones como imagen */
(function () {
  function init() {
    var section = document.getElementById('posiciones');
    if (!section) return;

    var btn = document.createElement('button');
    btn.className = 'share-table-btn';
    btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>Compartir tabla';
    btn.addEventListener('click', shareTable);

    var subtitle = section.querySelector('.page-subtitle');
    if (subtitle) {
      subtitle.insertAdjacentElement('afterend', btn);
    } else {
      section.insertAdjacentElement('afterbegin', btn);
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src="' + src + '"]')) { resolve(); return; }
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function getTournamentName() {
    var h = document.querySelector('.page-subtitle');
    if (h) return h.textContent.trim();
    var t = document.querySelector('.sub-label strong');
    if (t) return t.textContent.trim();
    return 'Ovalados';
  }

  async function shareTable() {
    var btn = this;
    var section = document.getElementById('posiciones');

    btn.disabled = true;
    btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px;animation:spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" opacity=".25"/><path d="M21 12a9 9 0 0 1-9 9"/></svg>Generando...';

    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');

      /* Watermark temporal */
      var wm = document.createElement('div');
      wm.className = 'share-watermark';
      wm.innerHTML = '<span>ovalados.com</span>';
      section.appendChild(wm);

      /* Ocultar el botón en la captura */
      btn.style.display = 'none';

      var canvas = await window.html2canvas(section, {
        backgroundColor: '#070a08',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        windowWidth: 860,
      });

      section.removeChild(wm);
      btn.style.display = '';

      var filename = 'tabla-ovalados.png';

      canvas.toBlob(async function (blob) {
        var file = new File([blob], filename, { type: 'image/png' });

        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              title: 'Tabla de posiciones — Ovalados',
              text: getTournamentName(),
              files: [file]
            });
          } catch (e) {
            if (e.name !== 'AbortError') fallbackDownload(blob, filename);
          }
        } else {
          fallbackDownload(blob, filename);
        }
      }, 'image/png');

    } catch (e) {
      console.error('share-table:', e);
      alert('No se pudo generar la imagen. Intentá hacer captura de pantalla.');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>Compartir tabla';
    }
  }

  function fallbackDownload(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
