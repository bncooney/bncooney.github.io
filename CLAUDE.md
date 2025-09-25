# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

Minimal static blog for GitHub Pages:
- `index.html` - Blog with tag filtering, copy buttons
- `styles.css` - Dark theme with code highlighting styles
- `syntax.js` - C# syntax highlighter
- `.github/workflows/static.yml` - Auto-deployment

## Design Constraints

- **Size limit**: Keep under 14KB (currently ~7KB, not including binary content)
- **Dark theme**: #0a0a0a background, #f5f5f5 text
- **No frameworks**: Pure HTML/CSS/JS
- **Safari compatible**: Uses legacy clipboard API

## Code Blocks

Use `<pre><button class="copy" onclick="copy(this)"><i class="fa">&#xf0c5;</i> Copy</button><code>...</code></pre>` for C# examples. Auto-highlighted on load.

## FontAwesome

Uses v4 Unicode points directly to avoid including complete fa css: `<i class="fa">&#xf000;</i>`. Common icons: copy `&#xf0c5;`, check `&#xf00c;`, home `&#xf015;`.