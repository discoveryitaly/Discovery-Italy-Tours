# Discovery Italy Tours — Website Prototype

A full multi-page website prototype for Discovery Italy Tours.

## Pages

| File | Page |
|------|------|
| `index.html` | Homepage |
| `about.html` | About Us — founder story |
| `how-it-works.html` | How It Works — agent process & FAQ |
| `destinations.html` | Destinations hub — all 7 destinations |
| `sicily.html` | Sicily — full destination page |
| `partner-hub.html` | Partner Hub — academy & toolkit preview |
| `contact.html` | Contact — agent form + traveler form |

## How to deploy on GitHub Pages

1. Create a new GitHub repository (public)
2. Upload all files — keep the folder structure intact (`css/`, `js/`, logo files, all `.html` files)
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)`
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/repositoryname/`

## File structure

```
/
├── index.html
├── about.html
├── how-it-works.html
├── destinations.html
├── sicily.html
├── partner-hub.html
├── contact.html
├── logo-icon.jpg
├── logo-horizontal.jpg
├── logo-vertical.jpg
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Notes for the web agency

- Replace colored background placeholders with real photography (hero sections, destination tiles, split-image blocks)
- The font stack uses Google Fonts (Cormorant Garamond + DM Sans) — loaded via CDN, works offline with fallbacks
- All forms currently show a success message on submit — connect to your preferred form handler (Formspree, Netlify Forms, or Wix equivalent)
- The `Partner Login` button links to `partner-hub.html` — update to your actual auth URL when members area is ready
- Colors are defined as CSS variables in `css/style.css` — easy to adjust globally

## Brand colors

| Name | Hex |
|------|-----|
| Green (primary) | `#1B5C3A` |
| Green dark | `#103624` |
| Gold (accent) | `#B8965A` |
| Cream (background) | `#F8F4EE` |
| Dark (text) | `#1C1C1A` |
