// ============================================================
//  2FORT-HUB CONFIG
//  This is the ONLY file you need to edit to add content.
//  Drop your game HTML files into the games/ folder,
//  then add an entry here. That's it.
// ============================================================

const CONFIG = {

  // ── Site settings ────────────────────────────────────────
  siteName: '2Fort Hub',

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

        {
  title:    'Basket Bros',
  category: 'arcade',
  file:     'games/basket-bros.html',
  emoji:    '🏀',
  color:    '#1a3d1a',
},

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
