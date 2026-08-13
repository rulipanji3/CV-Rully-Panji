/* ============================================================
   RULLY PANJI M.P. - civil works site / vanilla JS
   Reduced-motion aware. No frameworks. No scroll listeners.
   ============================================================ */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------- theme ---------------- */
    var storedTheme = null;
    try { storedTheme = localStorage.getItem('rp-theme'); } catch (e) {}
    var scheme = storedTheme || 'light';
    applyScheme(scheme);

    var themeBtn = document.getElementById('themeBtn');
    var themeLabel = document.querySelector('.theme-label');

    function applyScheme(s) {
        document.body.dataset.scheme = s;
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', s === 'dark' ? '#12110e' : '#e9e6df');
        if (themeLabel) themeLabel.textContent = s === 'dark' ? 'TERANG' : 'GELAP';
    }

    themeBtn.addEventListener('click', function () {
        var next = document.body.dataset.scheme === 'dark' ? 'light' : 'dark';
        applyScheme(next);
        try { localStorage.setItem('rp-theme', next); } catch (e) {}
    });

    /* ---------------- active route on scroll ---------------- */
    var routes = Array.prototype.slice.call(document.querySelectorAll('.route'));
    var sections = routes.map(function (r) {
        return document.getElementById(r.dataset.sec);
    }).filter(Boolean);

    var activeMap = {};
    routes.forEach(function (r) { activeMap[r.dataset.sec] = r; });

    var observer;
    if ('IntersectionObserver' in window && !reduceMotion) {
        observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    routes.forEach(function (r) { r.removeAttribute('aria-current'); });
                    var sec = sections.find(function (s) { return s === en.target; });
                    if (sec && activeMap[sec.id]) activeMap[sec.id].setAttribute('aria-current', 'page');
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        sections.forEach(function (s) { if (s) observer.observe(s); });
    }

    /* ---------------- scroll reveals ---------------- */
    var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

    var roObserver;
    if ('IntersectionObserver' in window && !reduceMotion) {
        roObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    en.target.classList.add('is-in');
                    roObserver.unobserve(en.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { roObserver.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('is-in'); });
    }

    /* ---------------- project modal ---------------- */
    var DATA = {
        0: {
            meta: 'PL-A · IDENTITAS MEREK - BRANDING',
            title: 'IDENTITAS MEREK: KOPI LOKAL',
            desc: 'Rangkaian identitas visual untuk merek kopi lokal: logo, palet, kemasan, dan penerapannya. Studi latihan untuk menunjukkan proses riset hingga eksekusi visual.',
            en: 'A local coffee brand identity: logo, palette, packaging, and applications. A study of process from research to visual execution.',
            note: 'STUDI CONTOH / SAMPLE STUDY. BUKAN KARYA KLIEN. NOT CLIENT WORK.'
        },
        1: {
            meta: 'PL-B · EDITORIAL - LAYOUT',
            title: 'TATA LETAK EDITORIAL MAJALAH',
            desc: 'Sistem grid, tipografi, dan tata letak halaman untuk majalah lifestyle. Fokus pada hierarki baca dan ritme visual antar halaman.',
            en: 'Grid system, typography, and page layout for a lifestyle magazine. Focused on reading hierarchy and visual rhythm across spreads.',
            note: 'STUDI CONTOH / SAMPLE STUDY. BUKAN KARYA KLIEN. NOT CLIENT WORK.'
        },
        2: {
            meta: 'PL-C · UI/UX - WIREFRAME - WEB',
            title: 'ANTARMUKA PRODUK DIGITAL',
            desc: 'Wireframe dan antarmuka produk digital dari riset kebutuhan hingga alur pengguna. Menunjukkan bagaimana desain diterjemahkan menjadi struktur yang bisa dibangun.',
            en: 'Wireframes and interfaces for a digital product, from needs research to user flow. Shows how design becomes a buildable structure.',
            note: 'STUDI CONTOH / SAMPLE STUDY. BUKAN KARYA KLIEN. NOT CLIENT WORK.'
        }
    };

    var modal = document.getElementById('modal');
    var modalMeta = document.getElementById('modalMeta');
    var modalTitle = document.getElementById('modalTitle');
    var modalDesc = document.getElementById('modalDesc');
    var modalEn = document.getElementById('modalEn');
    var modalNote = document.getElementById('modalNote');
    var modalArt = document.getElementById('modalArt');
    var modalClose = document.getElementById('modalClose');
    var modalFrame = modal.querySelector('.modal-frame');
    var lastTrigger = null;
    var mainEl = document.getElementById('main');
    var toolbarEl = document.getElementById('nav');

    function openModal(key) {
        var d = DATA[key];
        if (!d) return;
        lastTrigger = document.activeElement;
        modalMeta.textContent = d.meta;
        modalTitle.textContent = d.title;
        modalDesc.textContent = d.desc;
        modalEn.textContent = d.en;
        modalNote.textContent = d.note;
        var artMap = { 'PL-A': 'art-coffee', 'PL-B': 'art-edit', 'PL-C': 'art-web' };
        var cls = artMap[d.meta.slice(0, 4)];
        modalArt.innerHTML = '';
        var wrap = document.createElement('div');
        wrap.className = 'modal-art-inner';
        modalArt.appendChild(wrap);
        var source = cls ? document.querySelector('svg.' + cls) : null;
        if (source) {
            wrap.innerHTML = source.outerHTML;
        }
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        if (mainEl) mainEl.setAttribute('inert', '');
        if (toolbarEl) toolbarEl.setAttribute('inert', '');
        modalClose.focus();
        modalFrame.classList.remove('modal-pop');
        void modalFrame.offsetWidth;
        modalFrame.classList.add('modal-pop');
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = '';
        if (mainEl) mainEl.removeAttribute('inert');
        if (toolbarEl) toolbarEl.removeAttribute('inert');
        if (lastTrigger) lastTrigger.focus();
    }

    function trapFocus(e) {
        if (e.key !== 'Tab') return;
        var focusables = modalFrame.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    document.querySelectorAll('.card[data-open]').forEach(function (card) {
        card.addEventListener('click', function () { openModal(card.dataset.open); });
    });
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
        if (modal.hidden) return;
        if (e.key === 'Escape') closeModal();
        else trapFocus(e);
    });

    /* ---------------- contact form ---------------- */
    var form = document.getElementById('kontakForm');
    var fNama = document.getElementById('f-nama');
    var fEmail = document.getElementById('f-email');
    var fIsi = document.getElementById('f-isi');
    var formNote = document.getElementById('formNote');

    function clearErr(field) {
        var err = document.getElementById(field.id + '-err');
        if (err) err.remove();
        field.removeAttribute('aria-invalid');
    }
    function showErr(field, msg) {
        var err = document.getElementById(field.id + '-err');
        if (!err) {
            err = document.createElement('p');
            err.id = field.id + '-err';
            err.className = 'field-err';
            field.parentNode.appendChild(err);
        }
        err.textContent = msg;
        field.setAttribute('aria-invalid', 'true');
        field.focus();
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formNote.hidden = true;
        [fNama, fEmail, fIsi].forEach(clearErr);

        var bad = false;
        if (!fNama.value.trim()) { showErr(fNama, '- NAMA WAJIB DIISI / NAME REQUIRED'); bad = true; }
        if (!/^\S+@\S+\.\S+$/.test(fEmail.value.trim())) { showErr(fEmail, '- EMAIL TIDAK VALID / INVALID EMAIL'); bad = true; }
        if (!fIsi.value.trim()) { showErr(fIsi, '- PESAN WAJIB DIISI / MESSAGE REQUIRED'); bad = true; }
        if (bad) return;

        var nama = encodeURIComponent(fNama.value.trim());
        var email = encodeURIComponent(fEmail.value.trim());
        var isi = encodeURIComponent(fIsi.value.trim());

        var wa = 'https://wa.me/6285810405551?text=' +
            encodeURIComponent('Halo Rully Panji, saya / I am ') + nama +
            encodeURIComponent(' (') + email + encodeURIComponent(').\n\n') + isi;

        var mail = 'mailto:rulipanji474@gmail.com?subject=' +
            encodeURIComponent('Pesan dari portofolio / Portfolio message') +
            '&body=' + encodeURIComponent('Nama / Name: ') + nama +
            encodeURIComponent('\nEmail: ') + email +
            encodeURIComponent('\n\n') + isi;

        formNote.hidden = false;
        formNote.textContent = 'PESAN SIAP / MESSAGE READY. BUKA MELALUI WHATSAPP ATAU EMAIL DI BAWAH.';
        var oldBtn = form.querySelector('button[type="submit"]');
        if (oldBtn) oldBtn.disabled = true;

        var actions = document.createElement('div');
        actions.className = 'form-actions';
        var aWa = document.createElement('a');
        aWa.className = 'btn btn-solid'; aWa.href = wa;
        aWa.target = '_blank'; aWa.rel = 'noopener';
        aWa.textContent = 'KIRIM VIA WHATSAPP';
        var aMail = document.createElement('a');
        aMail.className = 'btn btn-line'; aMail.href = mail;
        aMail.textContent = 'KIRIM VIA EMAIL';
        actions.appendChild(aWa);
        actions.appendChild(aMail);
        form.appendChild(actions);
        aWa.focus();
    });

})();