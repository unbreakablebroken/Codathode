/* CODATHODE SHARED SHELL — THEME PERSISTENCE, CTRL+K PALETTE & PWA */
(function () {
  var THEME_KEY = 'codathode_theme';
  var VALID_THEMES = ['green', 'dark', 'light'];
  var THEME_COLORS = {
    green: '#041E1D',
    dark: '#050505',
    light: '#F3F6F4'
  };

  var CATEGORIES = [
    {
      id: 'text',
      num: '01',
      title: 'Text & Writing',
      tools: [
        { num: '003', name: 'Case Converter', href: 'case-converter.html', keywords: 'uppercase lowercase title camel snake kebab text format' },
        { num: '004', name: 'Word Counter', href: 'word-counter.html', keywords: 'character sentence paragraph reading time count metrics' },
        { num: '010', name: 'Lorem Ipsum', href: 'lorem-ipsum.html', keywords: 'placeholder dummy text paragraphs words sentences generator' },
        { num: '026', name: 'Reverse Text', href: 'reverse-text.html', keywords: 'flip backwards mirror string reverse lines words' },
        { num: '027', name: 'Remove Duplicates', href: 'remove-duplicates.html', keywords: 'unique lines deduplicate clean list sort trim' },
        { num: '013', name: 'Text Diff Checker', href: 'diff-checker.html', keywords: 'compare difference merge changes side by side' },
        { num: '051', name: 'Reading Level Analyzer', href: 'reading-level.html', keywords: 'flesch kincaid readability fog smog syllables grade' },
        { num: '052', name: 'Extractive Summarizer', href: 'extractive-summarizer.html', keywords: 'summarize summary bullets key sentences frequency' },
        { num: '053', name: 'Anagram Solver', href: 'anagram-solver.html', keywords: 'unscramble letters word finder dictionary puzzle' },
        { num: '054', name: 'Script Formatter', href: 'script-formatter.html', keywords: 'screenplay dialogue int ext cue print pdf' },
        { num: '055', name: 'Confusable Words', href: 'confusable-words.html', keywords: 'homophones spelling grammar their there affect effect' }
      ]
    },
    {
      id: 'calc',
      num: '02',
      title: 'Calculators & Finance',
      tools: [
        { num: '018', name: 'Percentage Calc', href: 'percentage-calculator.html', keywords: 'percent change increase decrease ratio math' },
        { num: '017', name: 'Age Calculator', href: 'age-calculator.html', keywords: 'birthday dob years months days exact age' },
        { num: '019', name: 'BMI Calculator', href: 'bmi-calculator.html', keywords: 'body mass index health weight height metric imperial' },
        { num: '014', name: 'Compound Interest', href: 'compound-interest.html', keywords: 'savings investment wealth apr yield apy finance' },
        { num: '020', name: 'EMI Calculator', href: 'emi-calculator.html', keywords: 'loan mortgage amortization monthly payment interest' },
        { num: '021', name: 'Discount Calc', href: 'discount-calculator.html', keywords: 'sale price tax savings off markdown retail' },
        { num: '035', name: 'Roman Numerals', href: 'roman-numeral.html', keywords: 'latin numbers I V X L C D M convert' },
        { num: '036', name: 'Temperature', href: 'temperature-converter.html', keywords: 'celsius fahrenheit kelvin weather heat units' },
        { num: '043', name: 'Unit Converter', href: 'unit-converter.html', keywords: 'length weight volume speed data bytes metric imperial' },
        { num: '048', name: 'Tip & Split Calc', href: 'tip-calculator.html', keywords: 'bill split restaurant gratuity people per person' }
      ]
    },
    {
      id: 'dev',
      num: '03',
      title: 'Developer & Code',
      tools: [
        { num: '009', name: 'JSON Formatter', href: 'json-formatter.html', keywords: 'json pretty print beautify minify validate lint parse' },
        { num: '012', name: 'Markdown Preview', href: 'markdown-previewer.html', keywords: 'md readme html live render headings syntax' },
        { num: '005', name: 'Base64 Codec', href: 'base64.html', keywords: 'encode decode utf8 ascii string binary transfer' },
        { num: '029', name: 'Text to Binary', href: 'text-to-binary.html', keywords: 'bits 0101 ascii utf8 binary encoder decoder' },
        { num: '031', name: 'HTML Entities', href: 'html-entity.html', keywords: 'escape unescape tags xss lt gt amp quotes' },
        { num: '032', name: 'Unix Timestamp', href: 'timestamp-converter.html', keywords: 'epoch date iso utc milliseconds seconds unix time' },
        { num: '033', name: 'JWT Decoder', href: 'jwt-decoder.html', keywords: 'json web token header payload claims auth bearer' },
        { num: '034', name: 'Hash Generator', href: 'hash-generator.html', keywords: 'md5 sha1 sha256 sha512 checksum crypto digest' },
        { num: '041', name: 'CSS Minifier', href: 'css-minifier.html', keywords: 'compress stylesheet strip comments whitespace optimize' },
        { num: '042', name: 'URL Encoder', href: 'url-encoder.html', keywords: 'percent encode decode query string uri component' },
        { num: '044', name: 'Regex Tester', href: 'regex-tester.html', keywords: 'regular expression match groups flags pattern' },
        { num: '050', name: 'CSV ↔ JSON', href: 'csv-json.html', keywords: 'spreadsheet table delimiter json convert export' },
        { num: '061', name: 'Git Commit Builder', href: 'git-commit.html', keywords: 'conventional commits feat fix scope breaking message' },
        { num: '062', name: 'robots.txt / .gitignore', href: 'robots-gitignore.html', keywords: 'seo crawler disallow gitignore node python ignore' },
        { num: '065', name: 'XML Sitemap Gen', href: 'xml-sitemap.html', keywords: 'xml sitemap auto crawl spider seo urlset lastmod changefreq priority indexeddb browser storage' }
      ]
    },
    {
      id: 'design',
      num: '04',
      title: 'Design & Color',
      tools: [
        { num: '006', name: 'Color Picker', href: 'color-picker.html', keywords: 'hex rgb hsl swatch eyedropper colour' },
        { num: '011', name: 'Palette Generator', href: 'palette-generator.html', keywords: 'color scheme harmony complementary shades themes' },
        { num: '022', name: 'Text Shadow', href: 'text-shadow.html', keywords: 'css typography glow blur offset shadow' },
        { num: '024', name: 'Favicon Maker', href: 'favicon-maker.html', keywords: 'icon 64x64 png browser tab resize' },
        { num: '038', name: 'Color Contrast', href: 'color-contrast.html', keywords: 'wcag aa aaa accessibility ratio foreground background' },
        { num: '045', name: 'Aspect Ratio', href: 'aspect-ratio.html', keywords: '16:9 4:3 screen dimensions video scale resize' },
        { num: '046', name: 'CSS Box Shadow', href: 'box-shadow.html', keywords: 'elevation blur spread rgba inset css generator' },
        { num: '056', name: 'CSS Gradient Studio', href: 'css-gradient.html', keywords: 'linear radial conic stops angle color css background' },
        { num: '057', name: 'Flexbox Playground', href: 'flexbox-playground.html', keywords: 'css flex justify align direction wrap gap layout' },
        { num: '058', name: 'CSS Grid Builder', href: 'css-grid.html', keywords: 'css grid columns rows span template gap layout' },
        { num: '059', name: 'Easing Visualizer', href: 'easing-visualizer.html', keywords: 'cubic bezier transition timing animation curve motion' },
        { num: '060', name: 'SVG Wave / Blob', href: 'svg-wave-blob.html', keywords: 'vector shape path section divider organic svg' }
      ]
    },
    {
      id: 'media',
      num: '05',
      title: 'Image, Audio & PDF',
      tools: [
        { num: '001', name: 'QR Generator', href: 'qr-generator.html', keywords: 'qr code barcode url link scan png svg' },
        { num: '008', name: 'Image to Base64', href: 'image-to-base64.html', keywords: 'data uri png jpg webp encode inline css' },
        { num: '023', name: 'Base64 to Image', href: 'base64-to-image.html', keywords: 'decode data url preview png jpg image' },
        { num: '037', name: 'Image Compressor', href: 'image-compressor.html', keywords: 'shrink optimize resize quality jpeg webp canvas' },
        { num: '025', name: 'Text to Speech', href: 'text-to-speech.html', keywords: 'tts voice speak read aloud synthesis audio' },
        { num: '030', name: 'Text to PDF', href: 'text-to-pdf.html', keywords: 'print document save pdf notes plain text' },
        { num: '063', name: 'Canvas Image Studio', href: 'canvas-image-studio.html', keywords: 'meme caption privacy pixelate censor pixel art png' }
      ]
    },
    {
      id: 'everyday',
      num: '06',
      title: 'Security & Everyday',
      tools: [
        { num: '007', name: 'Password Gen', href: 'password-generator.html', keywords: 'password strong random passphrase entropy security symbols' },
        { num: '028', name: 'Random Number', href: 'random-number.html', keywords: 'rng dice roll integer min max lottery' },
        { num: '015', name: 'Name Picker', href: 'name-picker.html', keywords: 'wheel raffle winner random selection list' },
        { num: '016', name: 'Typing Test', href: 'typing-test.html', keywords: 'wpm speed accuracy keyboard practice' },
        { num: '002', name: 'IGCSE Calculator', href: 'igcse-calculator.html', keywords: 'grades cambridge exam score percentage' },
        { num: '039', name: 'Pomodoro Timer', href: 'pomodoro-timer.html', keywords: 'focus 25 minutes countdown alarm beep study' },
        { num: '040', name: 'Stopwatch', href: 'stopwatch.html', keywords: 'lap timer milliseconds track time' },
        { num: '047', name: 'UUID v4 Gen', href: 'uuid-generator.html', keywords: 'guid unique id v4 crypto random' },
        { num: '049', name: 'World Timezones', href: 'timezone-converter.html', keywords: 'utc gmt est pst ist clock meeting time' },
        { num: '064', name: 'Cornell & Meeting Notes', href: 'notes-builder.html', keywords: 'study cues summary agenda markdown print pdf' }
      ]
    }
  ];

  // Build flat searchable list for Command Palette
  var ALL_SEARCH_ITEMS = [];
  for (var ci = 0; ci < CATEGORIES.length; ci++) {
    var category = CATEGORIES[ci];
    for (var ti = 0; ti < category.tools.length; ti++) {
      var item = category.tools[ti];
      ALL_SEARCH_ITEMS.push({
        num: item.num,
        name: item.name,
        href: item.href,
        category: category.title,
        keywords: item.keywords || '',
        searchBlob: (item.num + ' ' + item.name + ' ' + category.title + ' ' + (item.keywords || '')).toLowerCase()
      });
    }
  }
  ALL_SEARCH_ITEMS.push(
    { num: 'CFG', name: 'Settings & Themes', href: 'settings.html', category: 'Workspace', keywords: 'green dark black light theme sidebar install pwa offline', searchBlob: 'cfg settings themes green dark black light sidebar install pwa offline' },
    { num: 'DOC', name: 'About Codathode', href: 'about.html', category: 'Workspace', keywords: 'info offline architecture zero telemetry', searchBlob: 'doc about codathode info offline architecture zero telemetry' },
    { num: 'SEC', name: 'Privacy Policy', href: 'privacy.html', category: 'Workspace', keywords: 'privacy local storage cookies tracking security', searchBlob: 'sec privacy policy local storage cookies tracking security' }
  );

  // PWA State
  var deferredInstallPrompt = null;
  var isInstalledApp =
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
    window.navigator.standalone === true;
  var isIOSDevice = /iphone|ipad|ipod/i.test(window.navigator.userAgent || '');

  function notifyPWAState() {
    try {
      window.dispatchEvent(new CustomEvent('codathode:pwastatechange', {
        detail: {
          isInstallable: !!deferredInstallPrompt,
          isInstalled: !!isInstalledApp,
          isIOS: !!isIOSDevice
        }
      }));
    } catch (e) {}
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredInstallPrompt = e;
    notifyPWAState();
  });

  window.addEventListener('appinstalled', function () {
    isInstalledApp = true;
    deferredInstallPrompt = null;
    notifyPWAState();
  });

  function openIOSGuide() {
    var modal = document.getElementById('ct-ios-modal');
    if (modal) modal.classList.add('is-open');
  }

  function closeIOSGuide() {
    var modal = document.getElementById('ct-ios-modal');
    if (modal) modal.classList.remove('is-open');
  }

  function triggerInstall() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      return deferredInstallPrompt.userChoice.then(function (choice) {
        if (choice && choice.outcome === 'accepted') {
          isInstalledApp = true;
          deferredInstallPrompt = null;
          notifyPWAState();
          return true;
        }
        return false;
      });
    }
    if (isIOSDevice) {
      openIOSGuide();
    }
    return Promise.resolve(false);
  }

  function getSavedTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (VALID_THEMES.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return 'green';
  }

  function applyTheme(theme) {
    var next = VALID_THEMES.indexOf(theme) !== -1 ? theme : 'green';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}

    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', THEME_COLORS[next] || '#041E1D');
    }

    try {
      window.dispatchEvent(new CustomEvent('codathode:themechange', { detail: { theme: next } }));
    } catch (e) {}
    return next;
  }

  function createEl(tag, cls, html) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html !== undefined) el.innerHTML = html;
    return el;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Global Command Palette state
  var cmdBackdrop = null;
  var cmdInput = null;
  var cmdList = null;
  var cmdMetaCount = null;
  var cmdFiltered = ALL_SEARCH_ITEMS.slice();
  var cmdSelectedIdx = 0;

  function renderCommandList() {
    if (!cmdList) return;
    if (cmdMetaCount) {
      cmdMetaCount.textContent = cmdFiltered.length === ALL_SEARCH_ITEMS.length
        ? '65 TOOLS · WORKSPACE'
        : cmdFiltered.length + (cmdFiltered.length === 1 ? ' MATCH' : ' MATCHES');
    }

    if (cmdFiltered.length === 0) {
      cmdList.innerHTML = '<div class="ct-cmd-empty">No matching utility found. Try keywords like &ldquo;JSON&rdquo;, &ldquo;password&rdquo;, &ldquo;PDF&rdquo;, or &ldquo;bezier&rdquo;.</div>';
      return;
    }

    var html = '';
    for (var i = 0; i < cmdFiltered.length; i++) {
      var item = cmdFiltered[i];
      var selectedCls = i === cmdSelectedIdx ? ' is-selected' : '';
      html +=
        '<a href="' + item.href + '" class="ct-cmd-item' + selectedCls + '" data-cmd-idx="' + i + '">' +
          '<div class="ct-cmd-item-left">' +
            '<span class="ct-cmd-num">' + escapeHtml(item.num) + '</span>' +
            '<div class="ct-cmd-title-wrap">' +
              '<span class="ct-cmd-title">' + escapeHtml(item.name) + '</span>' +
              '<span class="ct-cmd-sub">' + escapeHtml(item.keywords) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="ct-cmd-item-right">' +
            '<span class="ct-cmd-cat">' + escapeHtml(item.category) + '</span>' +
            '<span class="ct-cmd-arrow">→</span>' +
          '</div>' +
        '</a>';
    }
    cmdList.innerHTML = html;

    var activeRow = cmdList.querySelector('.ct-cmd-item.is-selected');
    if (activeRow && activeRow.scrollIntoView) {
      activeRow.scrollIntoView({ block: 'nearest' });
    }
  }

  function filterCommandPalette(query) {
    var q = (query || '').trim().toLowerCase();
    if (!q) {
      cmdFiltered = ALL_SEARCH_ITEMS.slice();
    } else {
      var terms = q.split(/\s+/);
      var exactMatches = [];
      var otherMatches = [];
      for (var i = 0; i < ALL_SEARCH_ITEMS.length; i++) {
        var item = ALL_SEARCH_ITEMS[i];
        var ok = true;
        for (var t = 0; t < terms.length; t++) {
          if (item.searchBlob.indexOf(terms[t]) === -1) {
            ok = false;
            break;
          }
        }
        if (ok) {
          if (item.name.toLowerCase().indexOf(q) !== -1) {
            exactMatches.push(item);
          } else {
            otherMatches.push(item);
          }
        }
      }
      cmdFiltered = exactMatches.concat(otherMatches);
    }
    cmdSelectedIdx = 0;
    renderCommandList();
  }

  function openCommandPalette(initialQuery) {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.add('is-open');
    if (cmdInput) {
      if (typeof initialQuery === 'string') {
        cmdInput.value = initialQuery;
      }
      filterCommandPalette(cmdInput.value);
      setTimeout(function () {
        cmdInput.focus();
        cmdInput.select();
      }, 20);
    }
  }

  function closeCommandPalette() {
    if (!cmdBackdrop) return;
    cmdBackdrop.classList.remove('is-open');
  }

  var globalListenersBound = false;

  function removeExistingShellElements() {
    var ids = ['ct-sidebar', 'ct-sidebar-backdrop', 'ct-mobile-toggle', 'ct-cmd-backdrop', 'ct-ios-modal', 'ct-offline-banner'];
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }
  }

  function initShell() {
    applyTheme(getSavedTheme());
    document.documentElement.removeAttribute('data-sidebar');
    removeExistingShellElements();

    var isMac = /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent || '');
    var shortcutLabel = isMac ? '⌘K' : 'CTRL K';

    // Inject Global Command Palette Modal
    cmdBackdrop = createEl('div', 'ct-cmd-backdrop');
    cmdBackdrop.id = 'ct-cmd-backdrop';
    cmdBackdrop.setAttribute('role', 'dialog');
    cmdBackdrop.setAttribute('aria-modal', 'true');
    cmdBackdrop.setAttribute('aria-label', 'Quick tool launcher');
    cmdBackdrop.innerHTML =
      '<div class="ct-cmd-dialog">' +
        '<div class="ct-cmd-head">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
          '<input type="search" id="ct-cmd-input" class="ct-cmd-input" placeholder="Jump to any tool or keyword (e.g. JSON, password, bezier, PDF)..." autocomplete="off" spellcheck="false" />' +
          '<button type="button" id="ct-cmd-esc" class="ct-cmd-esc">ESC</button>' +
        '</div>' +
        '<div class="ct-cmd-meta">' +
          '<span>INSTANT COMMAND PALETTE</span>' +
          '<span id="ct-cmd-count">65 TOOLS · WORKSPACE</span>' +
        '</div>' +
        '<div class="ct-cmd-list" id="ct-cmd-list"></div>' +
        '<div class="ct-cmd-foot">' +
          '<div class="ct-cmd-hints">' +
            '<span>↑↓ NAVIGATE</span>' +
            '<span>↵ LAUNCH</span>' +
            '<span>ESC CLOSE</span>' +
          '</div>' +
          '<span>SHORTCUT: ' + shortcutLabel + '</span>' +
        '</div>' +
      '</div>';
    document.body.appendChild(cmdBackdrop);

    cmdInput = document.getElementById('ct-cmd-input');
    cmdList = document.getElementById('ct-cmd-list');
    cmdMetaCount = document.getElementById('ct-cmd-count');
    var cmdEscBtn = document.getElementById('ct-cmd-esc');

    // Inject iOS Install Guide Modal
    var iosModal = createEl('div', 'ct-ios-modal');
    iosModal.id = 'ct-ios-modal';
    iosModal.setAttribute('role', 'dialog');
    iosModal.setAttribute('aria-modal', 'true');
    iosModal.innerHTML =
      '<div class="ct-ios-card">' +
        '<span class="ct-ios-kicker">OFFLINE APP · iOS SAFARI</span>' +
        '<h3 class="ct-ios-title">Install Codathode on iPhone / iPad</h3>' +
        '<div class="ct-ios-steps">' +
          '<span>1. Tap the <strong>Share</strong> icon in Safari&rsquo;s toolbar.</span>' +
          '<span>2. Scroll down and choose <strong>Add to Home Screen</strong>.</span>' +
          '<span>3. Tap <strong>Add</strong> to launch all 65 tools 100% offline.</span>' +
        '</div>' +
        '<button type="button" class="ct-ios-close" id="ct-ios-close">GOT IT</button>' +
      '</div>';
    document.body.appendChild(iosModal);

    // Inject Offline Mode Banner
    var offlineBanner = createEl('div', 'ct-offline-banner');
    offlineBanner.id = 'ct-offline-banner';
    offlineBanner.innerHTML = '<span class="ct-offline-dot" aria-hidden="true"></span><span>OFFLINE MODE · RUNNING FROM CACHE</span>';
    document.body.appendChild(offlineBanner);

    function syncOnlineStatus() {
      offlineBanner.classList.toggle('is-visible', navigator.onLine === false);
    }
    window.addEventListener('online', syncOnlineStatus);
    window.addEventListener('offline', syncOnlineStatus);
    syncOnlineStatus();

    var iosCloseBtn = document.getElementById('ct-ios-close');
    if (iosCloseBtn) iosCloseBtn.addEventListener('click', closeIOSGuide);
    iosModal.addEventListener('click', function (e) {
      if (e.target === iosModal) closeIOSGuide();
    });

    if (cmdEscBtn) cmdEscBtn.addEventListener('click', closeCommandPalette);
    cmdBackdrop.addEventListener('click', function (e) {
      if (e.target === cmdBackdrop) closeCommandPalette();
    });

    if (cmdInput) {
      cmdInput.addEventListener('input', function () {
        filterCommandPalette(cmdInput.value);
      });
      cmdInput.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (cmdFiltered.length > 0) {
            cmdSelectedIdx = (cmdSelectedIdx + 1) % cmdFiltered.length;
            renderCommandList();
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (cmdFiltered.length > 0) {
            cmdSelectedIdx = (cmdSelectedIdx - 1 + cmdFiltered.length) % cmdFiltered.length;
            renderCommandList();
          }
        } else if (e.key === 'Enter') {
          if (cmdFiltered.length > 0 && cmdFiltered[cmdSelectedIdx]) {
            e.preventDefault();
            window.location.href = cmdFiltered[cmdSelectedIdx].href;
          }
        } else if (e.key === 'Escape') {
          e.preventDefault();
          closeCommandPalette();
        }
      });
    }

    if (cmdList) {
      cmdList.addEventListener('mousemove', function (e) {
        var row = e.target && e.target.closest ? e.target.closest('.ct-cmd-item') : null;
        if (!row) return;
        var idx = parseInt(row.getAttribute('data-cmd-idx'), 10);
        if (!isNaN(idx) && idx !== cmdSelectedIdx) {
          var prev = cmdList.querySelector('.ct-cmd-item.is-selected');
          if (prev) prev.classList.remove('is-selected');
          cmdSelectedIdx = idx;
          row.classList.add('is-selected');
        }
      });
    }

    if (!globalListenersBound) {
      globalListenersBound = true;
      document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && String(e.key).toLowerCase() === 'k') {
          e.preventDefault();
          if (cmdBackdrop && cmdBackdrop.classList.contains('is-open')) {
            closeCommandPalette();
          } else {
            openCommandPalette('');
          }
        } else if (e.key === 'Escape') {
          var iosEl = document.getElementById('ct-ios-modal');
          if (cmdBackdrop && cmdBackdrop.classList.contains('is-open')) {
            closeCommandPalette();
          } else if (iosEl && iosEl.classList.contains('is-open')) {
            closeIOSGuide();
          }
        }
      });

      window.addEventListener('storage', function (e) {
        if (e.key === THEME_KEY) applyTheme(getSavedTheme());
      });
    }

    notifyPWAState();
  }

  window.CodathodeShell = {
    getTheme: getSavedTheme,
    setTheme: applyTheme,
    openCommandPalette: openCommandPalette,
    closeCommandPalette: closeCommandPalette,
    categories: CATEGORIES,
    searchItems: ALL_SEARCH_ITEMS,
    pwa: {
      isInstallable: function () { return !!deferredInstallPrompt; },
      isInstalled: function () { return !!isInstalledApp; },
      isIOS: function () { return !!isIOSDevice; },
      install: triggerInstall,
      openIOSGuide: openIOSGuide
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShell);
  } else {
    initShell();
  }
})();
