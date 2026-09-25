# dsmans0021.github.io

```
dsmans0021@bash:~$ whoami
Mohamed Abdelaziz — Computer & Systems Engineering student at Minya University.
Indie game dev, cyber tinkerer, member of the machine.
```

This repo is my little corner of the internet. No frameworks, no build step,
no bloat — just hand-written HTML, CSS and vanilla JS. It's the place where my
games, security tools and random experiments get a second home next to my name.

Currently live at **[dsmans0021.com](https://dsmans0021.com)**, with
[dsmans0021.github.io](https://dsmans0021.github.io) as the always-on mirror.

## What's in here

- **Portfolio** (`index.html`) — who I am, what I build, and why I keep breaking things.
- **Toolbox** (`tools.html`) — small utilities that don't deserve their own apps yet.
- A **terminal** you can actually use — the site is a TUI you can walk around in.

## The terminal

Hit the terminal button (or just press <kbd>`</kbd>) and type `help`. Some of my favorites:

```
whoami    who are you, really
neofetch  the usual ASCII flex
snake     yes, Snake, playable in a terminal. WASD/arrows.
morse     say something in morse
matrix    wake up, DsMans…
sudo      try it. i dare you.
42        got it? then you've been paying attention
konami    ↑↑↓↓←→←→BA
```

## Easter eggs (yes, even on mobile)

- **Konami code** anywhere on the page → confetti + credits.
- **Secret words** — type `dsmans`, `matrix`, `party`, `coffee`… mid-sentence. The toast knows.
- **Triple-tap** anywhere on mobile → disco.
- **Long-press the avatar** → matrix rain.
- Open DevTools and poke at `dsmans.*` in the console. There are credits for that too.
- Press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd> or <kbd>D</kbd> for shortcuts.

Getting easter eggs right counts as **hacker credits**. Rack them up and see your rank.

## Projects that keep themselves fresh

I got tired of updating the projects grid by hand, so it doesn't need me anymore:
the page pulls the repo list straight from the GitHub API, keeps the descriptions
I wrote by hand, and auto-categorizes new repos. Old ones stick around as an
offline fallback. Stargazers, forks and activity get re-synced quietly in the background.

## Small things I care about

- **English / العربية** — the whole site flips languages from one button.
- **Email that bots can't read** — the address is assembled in JS at runtime, and the
  contact form carries a honeypot for the robots that can't read.
- **CSP + strict referrer policy** — because static pages deserve a seatbelt too.
- **PWA** — installable, offline-capable, tiny manifest + service worker.
- **No trackers by default** — there's an opt-in spot for GoatCounter (privacy-friendly)
  left empty until I decide to add one.
- **Keyboard first** — most of the site works without touching the mouse.

## Running it locally

```bash
python -m http.server 8000
# or: npx serve .
```

Open `http://localhost:8000` and play. That's the whole install process.

## Stuff to keep in mind

- All content is mine unless stated otherwise. No formal license file has landed yet —
  if you want to borrow something you love, just ask first.
- The source is intentionally readable. Hiding it in this case would be theater anyway.

_— Mohamed (DsMans0021). Building, breaking, and occasionally fixing things since the STEM days._