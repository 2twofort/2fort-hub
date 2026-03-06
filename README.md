# 2Fort Hub

Welcome to 2Fort Hub! A fully static and easily deployable website on which you can build HTML games to access and play at any time. 
**AI was heavily used in this project as I'm not a coder**, but the idea is mine. So feel free to bully me or something, haha.

---

## Folder Structure

```
gamevault/
├── index.html       ← Never touch this
├── config.js        ← Only file you edit
├── assets/
│   └── logo.png
├── games/
│   ├── snake.html           ← single-file game
│   ├── tetris/
│   │   └── index.html       ← multi-file game
│   └── geometry-dash/
│       ├── index.html
│       └── assets/...
└── apps/
    └── calculator.html
```

---

## Adding a Game

1. **Drop the game file(s)** into `games/`
   - Single file → `games/mygame.html`
   - Multi-file → `games/mygame/index.html` (with its own assets folder)

2. **Open `config.js`** and add one block inside `games > items`:

```js
{
  title:    'My Game',
  category: 'arcade',           // shows as a filter pill
  file:     'games/mygame.html',// path from repo root
  emoji:    '🎮',               // shown if no thumbnail
  color:    '#1a3d1a',          // card background tint
},
```

With a thumbnail:
```js
{
  title:    'My Game',
  category: 'action',
  file:     'games/mygame/index.html',
  emoji:    '🎯',
  color:    '#1a1a3d',
  thumb:    'assets/thumbs/mygame.png',  // 16:9 image
},
```

3. Push to GitHub. Done.

---

## Adding a Tab (e.g. Emulators)

In `config.js`:

```js
// 1. Add the tab button
tabs: [
  { id: 'games',     label: 'Games'     },
  { id: 'apps',      label: 'Apps'      },
  { id: 'emulators', label: 'Emulators' }, // ← add this
],

// 2. Add the matching section
sections: {
  // ...existing sections...
  emulators: {
    subtitle: 'Classic consoles in your browser.',
    items: [
      {
        title:    'GBA',
        category: 'nintendo',
        file:     'emulators/gba.html',
        emoji:    '🕹️',
        color:    '#3d1a2b',
      },
    ],
  },
},
```

---

## Deploy to GitHub Pages

1. Create a GitHub repo
2. Upload all files (keep the folder structure)
3. Go to **Settings → Pages → Source** → `main` branch, `/ (root)`
4. Site goes live at `https://yourusername.github.io/repo-name`

> Name the repo `yourusername.github.io` to get a clean root URL.

---

## Open Mode

Change how games open in `config.js`:

```js
openMode: 'aboutblank',  // opens in about:blank (hides URL) ← default
openMode: 'newtab',      // opens directly in a new tab
openMode: 'modal',       // fullscreen overlay on the page
```
