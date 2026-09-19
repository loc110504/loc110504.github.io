# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Jekyll-based academic personal homepage (based on the `academic-homepage` template:
https://github.com/luost26/academic-homepage), deployed via GitHub Pages at
`loc110504.github.io`. There is no build pipeline in `.github/` — GitHub Pages builds the
Jekyll site directly on push to `main`.

## Commands

- `bundle install` — install Ruby gems (first-time setup / after Gemfile changes)
- `make run` (or `bundle exec jekyll serve`) — run the site locally with live reload
- There are no tests or linters configured for this repo.

## Architecture

- **Content is data-driven, not hardcoded in templates.** Site-wide facts (name, bio, email,
  education, awards, social links) live in `_data/profile.yml`; author metadata/links used
  across publications live in `_data/authors.yml`; nav bar entries live in
  `_data/navigation.yml`; homepage section toggles (show news / show experience / show
  selected publications, etc.) live in `_data/display.yml`. Adding a new nav page requires
  updating `_data/navigation.yml` with a `name` that matches that page's `navbar_title` front
  matter field.
- **Publications and news are Jekyll collections**, declared in `_config.yml`
  (`collections: [publications, news, showcase]`) and stored as individual Markdown files
  under `_publications/<year>/` and `_news/`. Each publication file's front matter drives
  rendering: `title`, `date`, `pub`/`pub_date`/`pub_post` (venue name/year/suffix badge),
  `selected` (shown in the homepage "Selected Publications" card), `pin_all` (pinned to top of
  `/publications` regardless of date), `cover` (image path), `authors` (list of names — cross-
  referenced against `_data/authors.yml` for bolding/linking; `admin` and `admin*` refer to
  the site owner), and `links` (map of label → URL, e.g. PDF/Code). Draft/unpublished papers
  are commented out with HTML comments (`<!-- ... -->`) rather than deleted.
  `publications.html` groups publications by `pub_date` (not `date`), sorts pinned entries
  first then by `date` descending, and renders each via
  `_includes/widgets/publication_item.html`.
  `index.html` renders a `selected: true` subset via `_includes/widgets/publication_card.html`.
- **Reusable page fragments live in `_includes/widgets/`** (profile card, experience card,
  news card, publication card/item, author list, carousel). Pages (`index.html`,
  `publications.html`) are thin — they mostly toggle and parameterize these includes based on
  `_data/display.yml` flags.
- **Two layouts**: `_layouts/default.html` is the standard site chrome (navbar + footer,
  Bootstrap 4, Font Awesome, Academicons, KaTeX for math rendering, custom
  `assets/css/global.css`, `assets/js/common.js`, `assets/js/bubble_visual_hash.js`).
  `_layouts/prompt.html` is a minimal standalone layout (no navbar/footer) used for one-off
  pages like `404.html`.
- Math in Markdown/HTML content is rendered client-side via KaTeX auto-render
  (`$...$` inline, `$$...$$` display), configured in `_layouts/default.html`.
