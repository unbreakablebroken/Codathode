/* CODATHODE SHARED SHELL — THEME PERSISTENCE, SIDEBAR, CTRL+K PALETTE & PWA */
(function () {
  var THEME_KEY = 'codathode_theme';
  var SIDEBAR_KEY = 'codathode_sidebar_collapsed';
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
        { num: '062', name: 'robots.txt / .gitignore', href: 'robots-gitignore.html', keywords: 'seo crawler disallow gitignore node python ignore' }
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
    var sbPwaWrap = document.getElementById('ct-sb-pwa-wrap');
    var sbPwaBtn = document.getElementById('ct-sb-pwa-btn');
    var sbPwaLabel = document.getElementById('ct-sb-pwa-label');

    if (sbPwaWrap && sbPwaBtn) {
      if (isInstalledApp) {
        sbPwaWrap.classList.remove('is-visible');
      } else if (deferredInstallPrompt) {
        sbPwaWrap.classList.add('is-visible');
        if (sbPwaLabel) sbPwaLabel.textContent = 'INSTALL APP';
        sbPwaBtn.title = 'Install Codathode for 100% offline use';
      } else if (isIOSDevice) {
        sbPwaWrap.classList.add('is-visible');
        if (sbPwaLabel) sbPwaLabel.textContent = 'INSTALL ON iOS';
        sbPwaBtn.title = 'How to install Codathode on iPhone or iPad';
      } else {
        sbPwaWrap.classList.remove('is-visible');
      }
    }

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

    var btns = document.querySelectorAll('.ct-sb-theme-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('is-active', btns[i].getAttribute('data-ct-theme') === next);
    }

    try {
      window.dispatchEvent(new CustomEvent('codathode:themechange', { detail: { theme: next } }));
    } catch (e) {}
    return next;
  }

  function isSidebarCollapsed() {
    try {
      return localStorage.getItem(SIDEBAR_KEY) === '1';
    } catch (e) {
      return false;
    }
  }

  function applySidebarCollapsed(collapsed) {
    if (collapsed) {
      document.documentElement.setAttribute('data-sidebar', 'collapsed');
    } else {
      document.documentElement.removeAttribute('data-sidebar');
    }
    try {
      localStorage.setItem(SIDEBAR_KEY, collapsed ? '1' : '0');
    } catch (e) {}

    var toggle = document.getElementById('ct-sb-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      toggle.setAttribute('title', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
    }

    try {
      window.dispatchEvent(new CustomEvent('codathode:sidebarchange', { detail: { collapsed: !!collapsed } }));
    } catch (e) {}
  }

  function getCurrentPage() {
    var path = window.location.pathname || '/';
    var seg = path.split('/').pop();
    if (!seg || seg === '') return 'index.html';
    return seg.toLowerCase();
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
        ? '64 TOOLS · WORKSPACE'
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

  function initShell() {
    applyTheme(getSavedTheme());
    applySidebarCollapsed(isSidebarCollapsed());

    if (document.getElementById('ct-sidebar')) return;

    var currentPage = getCurrentPage();
    var activeTheme = getSavedTheme();
    var isMac = /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent || '');
    var shortcutLabel = isMac ? '⌘K' : 'CTRL K';

    // Backdrop for mobile drawer
    var backdrop = createEl('div', 'ct-sidebar-backdrop');
    backdrop.id = 'ct-sidebar-backdrop';

    var aside = createEl('aside', 'ct-sidebar');
    aside.id = 'ct-sidebar';
    aside.setAttribute('aria-label', 'Codathode navigation');

    // Top bar
    var top = createEl('div', 'ct-sidebar-top');
    top.innerHTML =
      '<a href="index.html" class="ct-sb-brand">' +
        '<img src="favicon.png" alt="" class="ct-sb-brand-icon" />' +
        '<span>CODA<span class="faded">THODE.</span></span>' +
      '</a>' +
      '<button type="button" class="ct-sb-toggle" id="ct-sb-toggle" title="' +
        (isSidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar') +
      '" aria-expanded="' + (isSidebarCollapsed() ? 'false' : 'true') + '" aria-label="Toggle navigation sidebar">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<polyline points="15 18 9 12 15 6"></polyline>' +
        '</svg>' +
      '</button>';
    aside.appendChild(top);

    // Search wrap
    var searchWrap = createEl('div', 'ct-sb-search-wrap');
    searchWrap.innerHTML =
      '<div class="ct-sb-search-box">' +
        '<svg class="ct-sb-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
        '<input type="search" id="ct-sb-search" class="ct-sb-search-input has-kbd" placeholder="Find 64 tools..." aria-label="Filter navigation tools" autocomplete="off" />' +
        '<button type="button" id="ct-sb-kbd-trigger" class="ct-sb-kbd-btn" title="Open Command Palette (' + shortcutLabel + ')">' + shortcutLabel + '</button>' +
      '</div>' +
      '<button type="button" class="ct-sb-search-btn" id="ct-sb-search-expand" title="Command Palette (' + shortcutLabel + ')" aria-label="Open quick tool search">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
      '</button>';
    aside.appendChild(searchWrap);

    // Scroll body
    var scroll = createEl('div', 'ct-sb-scroll');

    // Primary nav section
    var pagesLabel = createEl('div', 'ct-sb-section-label', 'Workspace');
    scroll.appendChild(pagesLabel);

    var primaryNav = createEl('nav', 'ct-sb-nav-list');
    var corePages = [
      {
        href: 'index.html',
        label: 'All Utilities',
        badge: '64',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'
      },
      {
        href: 'settings.html',
        label: 'Settings & Themes',
        badge: null,
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'
      },
      {
        href: 'about.html',
        label: 'About',
        badge: null,
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
      },
      {
        href: 'privacy.html',
        label: 'Privacy Policy',
        badge: null,
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
      }
    ];

    for (var c = 0; c < corePages.length; c++) {
      var p = corePages[c];
      var a = createEl('a', 'ct-sb-link' + (currentPage === p.href ? ' is-active' : ''));
      a.href = p.href;
      a.title = p.label;
      a.innerHTML =
        p.icon +
        '<span class="ct-sb-link-text">' + p.label + '</span>' +
        (p.badge ? '<span class="ct-sb-badge">' + p.badge + '</span>' : '');
      primaryNav.appendChild(a);
    }
    scroll.appendChild(primaryNav);
    scroll.appendChild(createEl('div', 'ct-sb-divider'));

    var toolsLabel = createEl('div', 'ct-sb-section-label', 'Tool Categories');
    scroll.appendChild(toolsLabel);

    var catList = createEl('div', 'ct-sb-cats');
    catList.style.display = 'flex';
    catList.style.flexDirection = 'column';
    catList.style.gap = '4px';

    var activeCatFound = false;
    var catEls = [];

    for (var i = 0; i < CATEGORIES.length; i++) {
      var cat = CATEGORIES[i];
      var containsActive = false;
      for (var t = 0; t < cat.tools.length; t++) {
        if (cat.tools[t].href === currentPage) {
          containsActive = true;
          activeCatFound = true;
        }
      }

      var shouldOpen = containsActive || (!activeCatFound && currentPage === 'index.html' && i === 0);
      var catDiv = createEl('div', 'ct-sb-cat' + (shouldOpen ? ' is-open' : '') + (containsActive ? ' has-active' : ''));
      catDiv.setAttribute('data-cat-id', cat.id);

      var btn = createEl('button', 'ct-sb-cat-btn');
      btn.type = 'button';
      btn.title = cat.num + ' · ' + cat.title + ' (' + cat.tools.length + ')';
      btn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      btn.innerHTML =
        '<span class="ct-sb-cat-left">' +
          '<span class="ct-sb-cat-num">' + cat.num + '</span>' +
          '<span class="ct-sb-cat-name">' + cat.title + '</span>' +
        '</span>' +
        '<svg class="ct-sb-cat-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';

      var toolsContainer = createEl('div', 'ct-sb-cat-tools');
      for (var j = 0; j < cat.tools.length; j++) {
        var tool = cat.tools[j];
        var toolLink = createEl('a', 'ct-sb-tool-link' + (currentPage === tool.href ? ' is-active' : ''));
        toolLink.href = tool.href;
        toolLink.setAttribute('data-search', (tool.name + ' ' + tool.num + ' ' + cat.title + ' ' + (tool.keywords || '')).toLowerCase());
        toolLink.innerHTML =
          '<span>' + tool.name + '</span>' +
          '<span class="ct-sb-tool-num">' + tool.num + '</span>';
        toolsContainer.appendChild(toolLink);
      }

      catDiv.appendChild(btn);
      catDiv.appendChild(toolsContainer);
      catList.appendChild(catDiv);
      catEls.push(catDiv);
    }

    var emptySearch = createEl('div', 'ct-sb-empty', 'No matching utilities.');
    scroll.appendChild(catList);
    scroll.appendChild(emptySearch);
    aside.appendChild(scroll);

    // PWA Install Button Wrapper in Sidebar
    var sbPwaWrap = createEl('div', 'ct-sb-pwa-wrap');
    sbPwaWrap.id = 'ct-sb-pwa-wrap';
    sbPwaWrap.innerHTML =
      '<button type="button" class="ct-sb-pwa-btn" id="ct-sb-pwa-btn">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
        '<span class="ct-sb-pwa-label" id="ct-sb-pwa-label">INSTALL APP</span>' +
      '</button>';
    aside.appendChild(sbPwaWrap);

    // Footer Quick Theme Switcher
    var sbFooter = createEl('div', 'ct-sb-footer');
    sbFooter.innerHTML =
      '<div class="ct-sb-theme-label">' +
        '<span>THEME</span>' +
        '<a href="settings.html" style="color:inherit;text-decoration:none;opacity:0.85;">SETTINGS →</a>' +
      '</div>' +
      '<div class="ct-sb-theme-pills" role="group" aria-label="Quick theme switcher">' +
        '<button type="button" class="ct-sb-theme-btn' + (activeTheme === 'green' ? ' is-active' : '') + '" data-ct-theme="green" title="Green Theme (Default)">' +
          '<span class="ct-swatch-dot" style="background:#165448;"></span><span class="ct-sb-theme-name">Green</span>' +
        '</button>' +
        '<button type="button" class="ct-sb-theme-btn' + (activeTheme === 'dark' ? ' is-active' : '') + '" data-ct-theme="dark" title="Dark / Black Theme">' +
          '<span class="ct-swatch-dot" style="background:#050505;"></span><span class="ct-sb-theme-name">Dark</span>' +
        '</button>' +
        '<button type="button" class="ct-sb-theme-btn' + (activeTheme === 'light' ? ' is-active' : '') + '" data-ct-theme="light" title="Light Theme">' +
          '<span class="ct-swatch-dot" style="background:#F3F6F4;"></span><span class="ct-sb-theme-name">Light</span>' +
        '</button>' +
      '</div>';
    aside.appendChild(sbFooter);

    document.body.insertBefore(aside, document.body.firstChild);
    document.body.insertBefore(backdrop, aside.nextSibling);

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
          '<span id="ct-cmd-count">64 TOOLS · WORKSPACE</span>' +
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
          '<span>3. Tap <strong>Add</strong> to launch all 64 tools 100% offline.</span>' +
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

    // Inject Mobile Header Menu Toggle into existing <header>
    var header = document.querySelector('header');
    if (header) {
      var brand = header.querySelector('.brand');
      if (brand && !document.getElementById('ct-mobile-toggle')) {
        var wrap = createEl('div', 'ct-header-left');
        var mobileBtn = createEl('button', 'ct-mobile-toggle');
        mobileBtn.id = 'ct-mobile-toggle';
        mobileBtn.type = 'button';
        mobileBtn.setAttribute('aria-label', 'Open navigation menu');
        mobileBtn.innerHTML =
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<line x1="3" y1="6" x2="21" y2="6"></line>' +
            '<line x1="3" y1="12" x2="21" y2="12"></line>' +
            '<line x1="3" y1="18" x2="21" y2="18"></line>' +
          '</svg>';
        header.insertBefore(wrap, brand);
        wrap.appendChild(mobileBtn);
        wrap.appendChild(brand);

        mobileBtn.addEventListener('click', function () {
          var isOpen = aside.classList.toggle('is-mobile-open');
          backdrop.classList.toggle('is-open', isOpen);
        });
      }
    }

    function closeMobile() {
      aside.classList.remove('is-mobile-open');
      backdrop.classList.remove('is-open');
    }

    backdrop.addEventListener('click', closeMobile);

    var sbPwaBtnEl = document.getElementById('ct-sb-pwa-btn');
    if (sbPwaBtnEl) {
      sbPwaBtnEl.addEventListener('click', triggerInstall);
    }

    var iosCloseBtn = document.getElementById('ct-ios-close');
    if (iosCloseBtn) iosCloseBtn.addEventListener('click', closeIOSGuide);
    iosModal.addEventListener('click', function (e) {
      if (e.target === iosModal) closeIOSGuide();
    });

    // Command palette interactions
    var kbdTrigger = document.getElementById('ct-sb-kbd-trigger');
    if (kbdTrigger) {
      kbdTrigger.addEventListener('click', function () {
        openCommandPalette('');
      });
    }
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

    // Global Ctrl+K / Cmd+K shortcut
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && String(e.key).toLowerCase() === 'k') {
        e.preventDefault();
        if (cmdBackdrop.classList.contains('is-open')) {
          closeCommandPalette();
        } else {
          openCommandPalette('');
        }
      } else if (e.key === 'Escape') {
        if (cmdBackdrop.classList.contains('is-open')) {
          closeCommandPalette();
        } else if (iosModal.classList.contains('is-open')) {
          closeIOSGuide();
        }
      }
    });

    // Toggle collapse / expand
    var toggleBtn = document.getElementById('ct-sb-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        if (window.innerWidth <= 960) {
          closeMobile();
        } else {
          applySidebarCollapsed(!isSidebarCollapsed());
        }
      });
    }

    // Category accordion buttons (on collapsed rail, click expands sidebar & opens that category)
    for (var k = 0; k < catEls.length; k++) {
      (function (catEl) {
        var btn = catEl.querySelector('.ct-sb-cat-btn');
        btn.addEventListener('click', function () {
          if (window.innerWidth > 960 && isSidebarCollapsed()) {
            applySidebarCollapsed(false);
            catEl.classList.add('is-open');
            btn.setAttribute('aria-expanded', 'true');
            return;
          }
          var open = catEl.classList.toggle('is-open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      })(catEls[k]);
    }

    // Search expand button in collapsed rail opens Command Palette directly
    var searchExpandBtn = document.getElementById('ct-sb-search-expand');
    var searchInput = document.getElementById('ct-sb-search');
    if (searchExpandBtn) {
      searchExpandBtn.addEventListener('click', function () {
        openCommandPalette('');
      });
    }

    // Live sidebar search filtering
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = searchInput.value.trim().toLowerCase();
        var anyVisible = false;

        for (var m = 0; m < catEls.length; m++) {
          var catEl = catEls[m];
          var links = catEl.querySelectorAll('.ct-sb-tool-link');
          var catMatchCount = 0;

          for (var n = 0; n < links.length; n++) {
            var hay = links[n].getAttribute('data-search') || '';
            var match = !q || hay.indexOf(q) !== -1;
            links[n].style.display = match ? 'flex' : 'none';
            if (match) catMatchCount++;
          }

          catEl.style.display = catMatchCount > 0 ? 'flex' : 'none';
          if (q && catMatchCount > 0) {
            catEl.classList.add('is-open');
          }
          if (catMatchCount > 0) anyVisible = true;
        }

        emptySearch.style.display = anyVisible ? 'none' : 'block';
      });
    }

    // Quick theme switcher buttons
    var themeBtns = aside.querySelectorAll('.ct-sb-theme-btn');
    for (var b = 0; b < themeBtns.length; b++) {
      themeBtns[b].addEventListener('click', function () {
        applyTheme(this.getAttribute('data-ct-theme'));
      });
    }

    // Close mobile drawer when clicking a link
    aside.addEventListener('click', function (e) {
      if (e.target && e.target.closest && e.target.closest('a') && window.innerWidth <= 960) {
        closeMobile();
      }
    });

    // Scroll active link into view cleanly
    var activeItem = aside.querySelector('.ct-sb-tool-link.is-active, .ct-sb-link.is-active');
    if (activeItem && activeItem.scrollIntoView) {
      setTimeout(function () {
        activeItem.scrollIntoView({ block: 'nearest' });
      }, 60);
    }

    // Keep tabs synced if user changes theme/sidebar in another tab
    window.addEventListener('storage', function (e) {
      if (e.key === THEME_KEY) applyTheme(getSavedTheme());
      if (e.key === SIDEBAR_KEY) applySidebarCollapsed(isSidebarCollapsed());
    });

    notifyPWAState();
  }

  window.CodathodeShell = {
    getTheme: getSavedTheme,
    setTheme: applyTheme,
    isSidebarCollapsed: isSidebarCollapsed,
    setSidebarCollapsed: applySidebarCollapsed,
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
