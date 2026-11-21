/* CODATHODE SHARED SHELL — THEME PERSISTENCE & COLLAPSIBLE SIDEBAR */
(function () {
  var THEME_KEY = 'codathode_theme';
  var SIDEBAR_KEY = 'codathode_sidebar_collapsed';
  var VALID_THEMES = ['green', 'dark', 'light'];

  var CATEGORIES = [
    {
      id: 'text',
      num: '01',
      title: 'Text & Writing',
      tools: [
        { num: '003', name: 'Case Converter', href: 'case-converter.html' },
        { num: '004', name: 'Word Counter', href: 'word-counter.html' },
        { num: '010', name: 'Lorem Ipsum', href: 'lorem-ipsum.html' },
        { num: '026', name: 'Reverse Text', href: 'reverse-text.html' },
        { num: '027', name: 'Remove Duplicates', href: 'remove-duplicates.html' },
        { num: '013', name: 'Text Diff Checker', href: 'diff-checker.html' }
      ]
    },
    {
      id: 'calc',
      num: '02',
      title: 'Calculators & Finance',
      tools: [
        { num: '018', name: 'Percentage Calc', href: 'percentage-calculator.html' },
        { num: '017', name: 'Age Calculator', href: 'age-calculator.html' },
        { num: '019', name: 'BMI Calculator', href: 'bmi-calculator.html' },
        { num: '014', name: 'Compound Interest', href: 'compound-interest.html' },
        { num: '020', name: 'EMI Calculator', href: 'emi-calculator.html' },
        { num: '021', name: 'Discount Calc', href: 'discount-calculator.html' },
        { num: '035', name: 'Roman Numerals', href: 'roman-numeral.html' },
        { num: '036', name: 'Temperature', href: 'temperature-converter.html' },
        { num: '043', name: 'Unit Converter', href: 'unit-converter.html' },
        { num: '048', name: 'Tip & Split Calc', href: 'tip-calculator.html' }
      ]
    },
    {
      id: 'dev',
      num: '03',
      title: 'Developer & Code',
      tools: [
        { num: '009', name: 'JSON Formatter', href: 'json-formatter.html' },
        { num: '012', name: 'Markdown Preview', href: 'markdown-previewer.html' },
        { num: '005', name: 'Base64 Codec', href: 'base64.html' },
        { num: '029', name: 'Text to Binary', href: 'text-to-binary.html' },
        { num: '031', name: 'HTML Entities', href: 'html-entity.html' },
        { num: '032', name: 'Unix Timestamp', href: 'timestamp-converter.html' },
        { num: '033', name: 'JWT Decoder', href: 'jwt-decoder.html' },
        { num: '034', name: 'Hash Generator', href: 'hash-generator.html' },
        { num: '041', name: 'CSS Minifier', href: 'css-minifier.html' },
        { num: '042', name: 'URL Encoder', href: 'url-encoder.html' },
        { num: '044', name: 'Regex Tester', href: 'regex-tester.html' },
        { num: '050', name: 'CSV ↔ JSON', href: 'csv-json.html' }
      ]
    },
    {
      id: 'design',
      num: '04',
      title: 'Design & Color',
      tools: [
        { num: '006', name: 'Color Picker', href: 'color-picker.html' },
        { num: '011', name: 'Palette Generator', href: 'palette-generator.html' },
        { num: '022', name: 'Text Shadow', href: 'text-shadow.html' },
        { num: '024', name: 'Favicon Maker', href: 'favicon-maker.html' },
        { num: '038', name: 'Color Contrast', href: 'color-contrast.html' },
        { num: '045', name: 'Aspect Ratio', href: 'aspect-ratio.html' },
        { num: '046', name: 'CSS Box Shadow', href: 'box-shadow.html' }
      ]
    },
    {
      id: 'media',
      num: '05',
      title: 'Image, Audio & PDF',
      tools: [
        { num: '001', name: 'QR Generator', href: 'qr-generator.html' },
        { num: '008', name: 'Image to Base64', href: 'image-to-base64.html' },
        { num: '023', name: 'Base64 to Image', href: 'base64-to-image.html' },
        { num: '037', name: 'Image Compressor', href: 'image-compressor.html' },
        { num: '025', name: 'Text to Speech', href: 'text-to-speech.html' },
        { num: '030', name: 'Text to PDF', href: 'text-to-pdf.html' }
      ]
    },
    {
      id: 'everyday',
      num: '06',
      title: 'Security & Everyday',
      tools: [
        { num: '007', name: 'Password Gen', href: 'password-generator.html' },
        { num: '028', name: 'Random Number', href: 'random-number.html' },
        { num: '015', name: 'Name Picker', href: 'name-picker.html' },
        { num: '016', name: 'Typing Test', href: 'typing-test.html' },
        { num: '002', name: 'IGCSE Calculator', href: 'igcse-calculator.html' },
        { num: '039', name: 'Pomodoro Timer', href: 'pomodoro-timer.html' },
        { num: '040', name: 'Stopwatch', href: 'stopwatch.html' },
        { num: '047', name: 'UUID v4 Gen', href: 'uuid-generator.html' },
        { num: '049', name: 'World Timezones', href: 'timezone-converter.html' }
      ]
    }
  ];

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

  function initShell() {
    applyTheme(getSavedTheme());
    applySidebarCollapsed(isSidebarCollapsed());

    if (document.getElementById('ct-sidebar')) return;

    var currentPage = getCurrentPage();
    var activeTheme = getSavedTheme();

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
        '<input type="search" id="ct-sb-search" class="ct-sb-search-input" placeholder="Find 50 tools..." aria-label="Filter navigation tools" autocomplete="off" />' +
      '</div>' +
      '<button type="button" class="ct-sb-search-btn" id="ct-sb-search-expand" title="Search 50 tools" aria-label="Open sidebar to search tools">' +
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
        badge: '50',
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
        toolLink.setAttribute('data-search', (tool.name + ' ' + tool.num + ' ' + cat.title).toLowerCase());
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

    // Search expand button in collapsed rail
    var searchExpandBtn = document.getElementById('ct-sb-search-expand');
    var searchInput = document.getElementById('ct-sb-search');
    if (searchExpandBtn && searchInput) {
      searchExpandBtn.addEventListener('click', function () {
        applySidebarCollapsed(false);
        setTimeout(function () { searchInput.focus(); }, 60);
      });
    }

    // Live search filtering
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
  }

  window.CodathodeShell = {
    getTheme: getSavedTheme,
    setTheme: applyTheme,
    isSidebarCollapsed: isSidebarCollapsed,
    setSidebarCollapsed: applySidebarCollapsed,
    categories: CATEGORIES
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShell);
  } else {
    initShell();
  }
})();
