---
name: RULLY PANJI M.P. - Civil Works Site
description: The portfolio as a monitored construction site. Ledge beams carry each section, hazard-splice rails mark boundaries, concrete panels carry plates, every datum reads as a register cell. Hard lines, one safety accent, bilingual ID/EN copy, sharp corners, no framework.
colors:
  light:
    paper: "#e9e6df"
    paper-2: "#dedacf"
    ink: "#1b1a17"
    ink-soft: "#55524b"
    line: "#1b1a17"
    line-soft: "rgba(27,26,23,.34)"
    accent: "#f25c05"
    accent-ink: "#a33c00"
    card: "#f1eee6"
    concrete: "#e0dccf"
  dark:
    paper: "#12110e"
    paper-2: "#1b1915"
    ink: "#e7e4dc"
    ink-soft: "#9b968a"
    line: "#e7e4dc"
    line-soft: "rgba(231,228,220,.30)"
    accent: "#ff7a1a"
    accent-ink: "#ff9a4d"
    card: "#1e1b17"
    concrete: "#211e1a"
  roles:
    accent: "One signal color. Only as signals: led dots, stamps, arrows, focus, hover marks, hazard-splice stripes. Never a full-surface fill."
    accent-ink: "Accent-derived text holding 4.5:1 on paper: headline highlights, section tags, stamps, readouts."
    line: "The ruling: borders, buttons, spec cells, card frames, ledge beams."
    ink-soft: "Secondary text, meta, English annotations."
    concrete: "Panel fills behind plates and ledges. The physical material of the site."
typography:
  display:
    fontFamily: "'Chakra Petch', 'Segoe UI', Tahoma, sans-serif"
    size: "clamp(2.4rem, 6vw, 4.1rem) hero; clamp(1.7rem, 4.6vw, 3rem) sections"
    weight: 700
    transform: uppercase
    tracking: ".01em"
    lineHeight: 1.02
  body:
    fontFamily: "'Chakra Petch', 'Segoe UI', Tahoma, sans-serif"
    size: "1.02-1.12rem"
    lineHeight: 1.6-1.72
    maxWidth: "62ch"
  label:
    fontFamily: "'Share Tech Mono', Consolas, monospace"
    size: ".7-.82rem"
    transform: uppercase
    tracking: ".1-.18em"
    role: "All meta, tags, readouts, kickers, spec dt, stamps, footnotes, navigation."
  language:
    rule: "Copy is bilingual. Bahasa Indonesia is primary voice; English is the annotation voice, mono and ink-soft, marked with lang='en'. Long prose stays Indonesian; every structured label (nav, ledger dt, stamps, register) carries ID + EN together."
  notes:
    - "Two voices only: Chakra Petch for prose and headlines, Share Tech Mono for every small label and readout."
    - "English is an annotation register, not a second column of prose. ID = the spoken copy; EN = the label readout."
rounded:
  all: "0px"
  rule: "Sharp corners everywhere is the shape lock. No pill, no 8px cards, no radius on any surface."
spacing:
  gutters: "22px (main), 14px (mobile)"
  sheetPad: "34px top / 64px bottom (ledge on top)"
  gridGaps: "18px"
  ledgers: "13-15px row padding"
motion:
  level: 4
  spec:
    - "Scroll reveals via IntersectionObserver: .reveal translateY(18px)->none over .55s, eased cubic-bezier(.2,.7,.2,1)."
    - "Staggered grids: nth-child delays of 60ms per index."
    - "Modal pop: translateY(12px) scale(.98) over .22s."
    - "Hard-state tactile feedback: buttons shift 1px on :active, cards shift -3px,-3px on hover with a fresh accent corner-frame."
    - "No infinite loops, no marquee, no parallax, no scroll listener. Reduced-motion collapses everything to static + instant."
  reduced:
    - "All transitions and reveal offsets disabled under prefers-reduced-motion."
    - "Observer never runs; content is immediately visible."
theme:
  mode: "Default light. Manual GELAP/TERANG toggle in toolbar, persisted to localStorage."
  locked: "One theme per session, applied at body[data-scheme]. No in-page flipping."
  system: "honors prefers-color-scheme only through stored choice; no auto-follow by default."
focus:
  rule: "Global :focus-visible outline 3px solid accent. Form fields additionally get 4px offset shadow when focused."
---

# Design System: RULLY PANJI M.P. - Civil Works Site

## Overview

**Creative North Star: "The Site That Reads"**

RULLY PANJI M.P. presents the portfolio as a monitored civil construction site,
not a website about a person. Every section is a structures in progress: a ledge
beam carries the section identity, a hazard-splice rail closes the slab, concrete
panels hold the plates, and every datum is entered into a ruled register cell. The
visitor reads a construction file: a surveyor's ledger, honest sample plates stamped
CONTOH, an installed-machinery report, and a work-order form, all in two languages
because a real field file in Indonesia is filled out in Bahasa Indonesia and read by
contractors who annotate it in English.

**Why civil-works:** the previous ledger world was a drafting table viewed from
above; this is the site itself viewed from the ground. The audience is unchanged, two:
dev recruiters who can smell a bootstrap template, and Indonesian SME clients who want
proof of craft. Engineers read this instantly: beams, splices, registers, plates, work
orders. Sharp lines, ruled cells, one mechanism (the ledge + register) repeated with
discipline, mono annotation, and zero ornamental shadow communicate "built by hand,
standards-first" — now with a physical materiality (concrete) instead of a paper one.

**Key characteristics:**
- The ledge is the section spine: a protruding concrete beam at the top of every sheet, 2px ruling (4px bottom), a solid ref slab on the left (01 through 05), the section name in mono, and a diagonal hazard-splice rail closing the right end.
- The register is the data atom. Dossier rows, highlight rows, contact lines, module tags all follow ledger cell grammar: `border: 2px line`, internal 1px `line-soft` rows, mono label left, value right. Data sits in ruled cells like entries in a site register.
- Concrete panels (`concrete`) carry plates: hero portrait, card art, modal art all sit on concrete fills behind their 2px rulings.
- Hazard splices appear exactly twice: the ledge's right rail (×5) and the footer rail. Diagonal accent/lines stripes read as site tape, not decoration. The one accent color carries them.
- Copy is bilingual: Bahasa Indonesia is the spoken voice (hero, prose, descriptions); English is the annotation voice (every label, register row, stamp, and footnote carries ID + EN together, EN in mono ink-soft). Honest CONTOH / SAMPLE stamps mark all three study plates.
- Bilingual honesty system: the article "IDENTITAS MEREK: KOPI LOKAL" is stamped `CONTOH / SAMPLE`; the gallery note and modal footnote say the plates are study samples in both languages.

## Colors

A restrained builder palette: concrete-grey paper, near-black ink, and one safety
accent. The light theme is a daytime site survey; the dark theme is the night shift.

**Light scheme:** paper #e9e6df (porous concrete), paper-2 #dedacf (recessed strip),
ink #1b1a17 (ruling and headlines), ink-soft #55524b (prose, meta, EN annotations),
accent #f25c05 (signals), accent-ink #a33c00 (text on paper), card #f1eee6 (sheet
fills), concrete #e0dccf (panel fills behind plates).

**Dark scheme:** paper #12110e, paper-2 #1b1915, ink #e7e4dc, ink-soft #9b968a,
accent #ff7a1a, accent-ink #ff9a4d, card #1e1b17, concrete #211e1a. Values chosen for
contrast parity, not inversion.

### Named Rules

**The One-Accent Rule.** Safety orange is the only chromatic color. It appears as text
only through `accent-ink` variants clearing 4.5:1 on their surface; the raw accent is
reserved for marks, frames, focus, hover, and the hazard-splice stripes.

**The Ruling Rule.** Borders are the shadow system. 2px `line` rulings define sheets,
cards, buttons, spec cells, and ledge beams; 1px `line-soft` rulings separate rows
inside them. No drop shadows, no glow, no inner bevels.

**The Ledge Rule.** Every section opens with a ledge beam: solid ref slab + mono name +
hazard-splice rail. This replaces decorative eyebrows; the ledge is the filing
reference (02 / PROFIL), a structural element, not a label.

**The Hazard-Splice Limit.** Diagonal accent stripes appear exactly twice per page:
the ledge rails and the footer rail. Any third occurrence is a violation.

**The Bilingual Register Rule.** Structured copy is always written ID + EN together
("NAMA / NAME", "CONTOH / SAMPLE", "DESAIN / DESIGN"). Prose stays Indonesian; English
is the recording voice rendered in mono ink-soft.

## Typography

Two voices. Chakra Petch (self-hosted) owns prose and headlines; Share Tech Mono
(self-hosted) owns every label below ~0.85rem: kickers, ledge names, spec dt, stamps,
readouts, metadata, footnotes, form labels, button labels, the toolbar, and all
English annotations.

**Hierarchy:**
- **Hero display** (700, clamp 2.4-4.1rem, uppercase, lh 1.02): one idea per line. "DESAIN + KODE / DALAM SATU TANGAN", second line accented.
- **Section title** (700, clamp 1.7-3rem, uppercase, lh 1.06, max 22ch): each sheet carries one; `.hl` span takes accent-ink.
- **Prose** (Chakra 400, 1.02-1.12rem, lh 1.6-1.72, max 62ch): Indonesian, sentence case, in ink-soft.
- **Annotation** (Share Tech Mono, .7-.82rem, uppercase, tracking .1-.18em): mono owns labels and all English readouts.

### Named Rules

**The Two-Voice Rule.** Chakra Petch speaks; Share Tech Mono annotates. A readout is
never set in Chakra Petch, a headline is never set in mono.

**The Sentence-Case Rule.** Only long prose drops case. Everything else is uppercase.

**The Bilingual-Label Rule.** Structured labels pair ID + EN inline: "NAMA / NAME",
"BERANDA / HOME", "STUDI CONTOH / SAMPLE STUDY". Prose is not doubled; only labels.

## Layout

One column of sheets down the page (max-width 1180px), each sheet opened by its ledge
beam and closed by a 2px ruling. Content flows in explicit grids:

- **Hero ledger:** two columns (1.15fr / .85fr) at >960px: left is kicker, headline,
  ID sub, EN annotation, three register rows, and CTAs; right is the framed grayscale
  portrait plate on a concrete panel with a hazard-clip corner and a monotone caption.
- **PROFIL:** two columns (1.1fr / .9fr): a manifesto split left, a REGISTER / DATA
  DOSSIER spec frame right (5 bilingual rows).
- **KARYA:** three card buttons in a 1fr/1fr/1fr row, collapsing to 2 then 1. Each card
  has a 16/11 concrete plate with a plaque reference (PL-A, PL-B, PL-C), a CONTOH /
  SAMPLE stamp, bilingual title + meta.
- **MODUL:** two columns of machine modules (five, the last spanning full width): a
  mono tag, name, one-line description, mono tag chips on paper.
- **KONTAK:** two columns: left a register of five ruled links (WA/EMAIL, WHATSAPP,
  INSTAGRAM, LINKEDIN, GITHUB), right the work-order form.
- Footer is a full-width ink band under a hazard rail: name · line · "DESAIN + KODE,
  SATU TANGAN / DESIGN + CODE, ONE HAND" · "DIBANGUN MANUAL TANPA FRAMEWORK".

Mobile collapse is explicit at 960px (hero/split/contact single column; karya to 2;
modul to 1) and at 720px (karya to 1; toolbar routes scroll on a second row; cline rows
reflow; policy collisions resolved; spec rows shorten to 138px columns) and at 380px
(spec rows fully stack). All except media queries are declared in this file; JS uses no
layout math.

## Elevation & Depth

There is no elevation. Depth comes from ruling and physical-state travel:

- Ledge beams sit proud: a 4px bottom rule reads as the beam's thickness against the
  sheet below.
- Cards shift `-3px, -3px` on hover (safe transform) with a fresh accent frame via
  ::after; pressing pushes them flush.
- Buttons shift `1px, 1px` on :active.
- Focus is a 3px accent outline; form fields get an extra 4px offset shadow.

### Named Rule

**The No-Lift Rule.** Nothing is shadowed or blurred. "More important" is answered
with ruling weight, beam thickness, or accent, never a drop shadow.

## Shapes

Sharp everywhere. Radius is 0 for every surface, button, frame, input, ledge, and
concrete panel. The only rounding is display-font glyph shaping. Solid ref slabs and
hazard splices are sharp-edged.

## Components

### Ledge beam
Concrete fill, 2px ruling (4px bottom edge for thickness), right-aligned 96px hazard
splice rail, left solid ref slab (01-05, ink slab with paper numeral; dark scheme
inverts). Mono section name + EN annotation centered-left of the beam.

### Toolbar
Sticky, 60px (54px mobile), paper background, 2px bottom ruling. Left: wordmark (drawn
30px line mark + "RULLY PANJI M.P." accent "M.P."). Center-right: five bilingual mono
routes ("BERANDA / HOME" with EN in ink-soft). Far-right: the GELAP/TERANG toggle (14px
square glyph with accent fill + mono label). Active route gets `aria-current="page"`
as a paper-2 cell with ruling; routes highlight on hover with a 1px ruling.

### Highlight Group (hero)
A 3-row register under the hero sub-line: mono "DESAIN / DESIGN", "KODE / CODE",
"STANDAR / STANDARD" labels in accent-ink, extended values in ink-soft, 1px
`line-soft` rulings between rows.

### Buttons
Sharp 2px-ruled blocks, 15px/26px padding. Solid: ink fill, paper text (dark scheme
inverts the slab); hover becomes the dark accent with paper text. Line: transparent
with ink ruling; hover fills ink. Both shift 1px,1px on active. The solid CTA "LIHAT
KARYA" carries a small stroke arrow.

### Card (KARYA)
2px-ruled button, card fill, vertical stack: concrete plate (16/11, ink scheme art on
concrete) with a plaque reference (PL-A/B/C) pinned top-left / body (CONTOH / SAMPLE
stamp row, bilingual title, mono meta). Hover shifts -3/-3, overlays an accent frame;
press flushes. Click opens the modal.

### Spec / Register
2px ruling around a card fill; mono head strip (ink fill, paper text); rows of `dt`
accent-ink bilingual mono label + `dd` value, separated by 1px `line-soft`. Used for
the DATA DOSSIER (05 rows).

### Module frame
2px-ruled block on card fill, mono tag in a ruled box, body: name (Chakra 700
uppercase) + desc (ink-soft) + mono tag chips (1px-ruled on paper).

### Contact register
2px-ruled frame of five anchor rows: mono label (accent-ink, 130px column) / value
(medium weight) / arrow. Hover fills paper-2 and turns the arrow accent.

### Work-order form
Card fill, 2px ruling. Fields: bilingual label above (mono, ink-soft), input ruled
1.5px on paper, focus = accent border + 4px offset shadow. Errors appear below fields
as mono accent-ink lines with a leading dash, bilingual. Submit validates, then swaps
the button for two channel links: KIRIM VIA WHATSAPP (solid wa.me with encoded text)
and KIRIM VIA EMAIL (line mailto), plus a mono receipt note in both languages. No
backend, no API.

### Signature: the Plate Modal
Fixed overlay at z-160 over a dim scrim. Frame: paper, 2px ruling, sticky ink bar with
a plate reference left (PL-A/B/C) and TUTUP [X] right, 16/9 concrete plate, accent-ink
mono meta line, bilingual title, ID description, mono EN annotation, and a mono note
stamping CONTOH / SAMPLE STUDY in both languages. Opens with a .22s pop; closes on X,
scrim click, Escape, returning focus to the opening card. Body and toolbar are inert
while open.

## Do's and Don'ts

**Do:**
- Do give every section a ledge beam: ref slab + mono name + hazard-splice rail.
- Do keep every surface sharp (radius 0) and border-ruled; no shadows.
- Do stamp placeholder work CONTOH / SAMPLE and explain it in a footnote; never fake
  client work.
- Do keep the portrait grayscale and framed on concrete like a survey datum.
- Do obey the one-accent rule: safety orange only as signal; accent-ink for text.
- Do write structured labels bilingually ("NAMA / NAME") and keep prose in Indonesian.
- Do limit hazard splices to ledge rails and the footer rail.

**Don't:**
- Don't round corners, add drop shadows, glows, gradients, or backdrop blur.
- Don't add eyebrows as decoration; the ledge is the section's filing reference.
- Don't repeat the register three times per sheet; a sheet gets one ledger pattern max.
- Don't use em-dashes anywhere in copy; a dash is a form separator or arithmetic line.
- Don't animate more than the reveal/pop pair; no marquees, no infinite loops, no parallax.
- Don't let the page flip theme mid-scroll; the toggle applies the whole page once.
- Don't double prose in English; double only the labels.