// ============================================================
//  GAMEVAULT CONFIG
//  This is the ONLY file you need to edit to add content.
//  Drop your game HTML files into the games/ folder,
//  then add an entry here. That's it.
// ============================================================

const CONFIG = {

  // ── Site settings ────────────────────────────────────────
  siteName: 'GameVault',

  // How games open:
  //   'aboutblank' → opens in about:blank (hides the URL) ← recommended
  //   'newtab'     → opens directly in a new tab
  //   'modal'      → fullscreen overlay on this page
  openMode: 'aboutblank',


  // ── Tabs ─────────────────────────────────────────────────
  // Add or remove tabs here. The 'id' must match a key in 'sections' below.
  tabs: [
    { id: 'games', label: 'Games'  },
    { id: 'apps',  label: 'Apps'   },
    // { id: 'emulators', label: 'Emulators' },
    // { id: 'tools',     label: 'Tools'     },
  ],


  // ── Sections ─────────────────────────────────────────────
  sections: {

    // ── GAMES ───────────────────────────────────────────────
    games: {
      subtitle: 'Click any game to launch.',
      items: [

        // HOW TO ADD A GAME:
        // 1. Put your game file(s) in the games/ folder
        //    e.g. games/snake/index.html  or  games/tetris.html
        // 2. Copy one of the blocks below and fill it in.
        //
        // Fields:
        //   title    – display name
        //   category – used for filter pills (arcade, puzzle, action, strategy…)
        //   file     – path relative to this repo root  e.g. 'games/snake/index.html'
        //   emoji    – shown on the card if no thumb image is set
        //   color    – hex color tint for the card background
        //   thumb    – (optional) path to a preview image  e.g. 'assets/thumbs/snake.png'
        //
        // Example:
        // {
        //   title:    'Snake',
        //   category: 'arcade',
        //   file:     'games/snake/index.html',
        //   emoji:    '🐍',
        //   color:    '#1a3d1a',
        //   thumb:    'assets/thumbs/snake.png',
        // },

      ],
    },


    // ── APPS ────────────────────────────────────────────────
    apps: {
      subtitle: 'Web apps and utilities.',
      items: [

        // Same format as games — just put app files in apps/ folder.
        //
        // {
        //   title:    'Calculator',
        //   category: 'utilities',
        //   file:     'apps/calculator.html',
        //   emoji:    '🧮',
        //   color:    '#1a2a3d',
        // },

      ],
    },


    // ── Add more sections here to match new tabs ─────────────
    // emulators: {
    //   subtitle: 'Classic consoles in your browser.',
    //   items: [],
    // },

  },

};
