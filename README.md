# 2Fort Hub 🎮

2Fort Hub is a fully static gaming website you can deploy pretty much anywhere. Built for the 2Fort Google Website project as the main site to play games on. Evergreen Public Schools students are more than welcome to become a part of the 2Fort project!
Oh, and by the way, **AI was heavily included in this project as I'm not anywhere near a coder,** but the idea is mine. 

**Join the community today → https://discord.gg/Q5c3cxyDDF**

---

## Getting Started

Download the latest release, extract it, and upload the contents to your GitHub repo. Enable GitHub Pages in your repo settings and you're live. That's it.

---

## Adding Games

Drop your game file into the `games/` folder, then open `config.js` and add it to the list. The site picks it up automatically — no other files need to be touched.

If your game is a single file, just place it directly in `games/`. If it comes with its own folder and assets, drop the whole folder in.

---

## Adding New Tabs

Want a section for Apps, Emulators, or anything else? Open `config.js`, add a tab and a matching section, and it'll show up in the navigation bar right away.

---

## Open Modes

You can control how games launch by changing one line in `config.js`:

- **about:blank** — hides the URL bar, feels clean and native *(default)*
- **New tab** — opens the game directly in a new tab
- **Modal** — plays the game in a fullscreen overlay without leaving the page

---

## Deploying

Works on GitHub Pages, Netlify, Vercel, Cloudflare Pages — anywhere that serves static files. Just make sure `index.html` is at the root of your deployment.

---

*Made with ♥ for the 2Fort project.*
