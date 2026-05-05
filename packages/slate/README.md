<div align="center">
  <img src="https://raw.githubusercontent.com/VrtxOmega/Gravity-Omega/master/omega_icon.png" width="100" alt="OMEGA SLATE" />
  <h1>OMEGA SLATE</h1>
  <p><strong>Minimalist Scratchpad for Sovereign Operators — Electron Desktop Notes</strong></p>
</div>

<div align="center">

![Status](https://img.shields.io/badge/Status-ACTIVE-success?style=for-the-badge&labelColor=000000&color=d4af37)
![Version](https://img.shields.io/badge/Version-v1.0.0-informational?style=for-the-badge&labelColor=000000&color=d4af37)
![Stack](https://img.shields.io/badge/Stack-Electron%20%2B%20Vanilla%20JS-informational?style=for-the-badge&labelColor=000000)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&labelColor=000000)

</div>

---

Omega Slate is a zero-friction scratchpad for the sovereign operator. One window. One textarea. No cloud sync, no accounts, no formatting toolbars — just a dark obsidian surface where thoughts go until they're ready to be promoted into the Vault. It is the thinking surface before the thinking becomes structured.

---

## Ecosystem Canon

Within the VERITAS & Sovereign Ecosystem, not every thought deserves a structured entry. Some are fragments, half-formed hypotheses, temporary logs, or scratch calculations that will be refined later. Omega Slate exists for this exact case — it is the pre-capture surface: the place where ideas land before they are classified by the Archivist, ingested into the Vault, or discarded. It enforces zero structure so the operator is not slowed by metadata entry. When a note is ready, it is manually promoted to the Vault. Until then, it lives in the Slate.

---

## Overview

Omega Slate is an Electron desktop application presenting a single fullscreen textarea. It is designed for:

- Temporary notes and scratch calculations
- Command output pastes during terminal sessions
- Quick thought capture without the cognitive overhead of structured entry
- A staging area before Vault ingestion

The window opens instantly, stays on top optionally, and purges with a keyboard shortcut (Ctrl+Del) when the operator is done.

---

## Features

| Capability | Detail |
|---|---|
| Instant Launch | Electron window opens in <100ms with no loading screens |
| Fullscreen Textarea | Distraction-free writing surface occupying the entire window |
| Purge Shortcut | `Ctrl+Del` clears the slate instantly — no confirmation dialogs |
| Minimal Footprint | No cloud dependency, no account, no telemetry |
| Always-on-Top Mode | Optional window pinning for reference material visibility |
| VERITAS Dark Theme | Obsidian background with gold cursor — integrated into the ecosystem palette |

---

## Architecture

```
+---------------------------------------------------------------+
|  ELECTRON MAIN (main.js)                                      |
|   - Window creation                                           |
|   - IPC bridge for purge command                              |
|   - Always-on-top toggle                                      |
+----------------------------+----------------------------------+
                             |
                             v
+-------------------------------+-------------------------------+
|  PRELOAD (preload.js)                                        |
|   - Secure contextBridge exposing safe APIs                   |
+-------------------------------+-------------------------------+
                             |
                             v
+-------------------------------+-------------------------------+
|  RENDERER (renderer.js)                                     |
|   - Textarea handling                                         |
|   - LocalStorage persistence (optional)                       |
|   - Ctrl+Del purge listener                                   |
+-------------------------------+-------------------------------+
                             |
                             v
+-------------------------------+-------------------------------+
|  CONTENT (index.html + styles.css)                            |
|   - Fullscreen textarea layout                                |
|   - VERITAS gold-and-obsidian styling                         |
+---------------------------------------------------------------+
```

---

## Quickstart

### Prerequisites

- **Node.js** 20+
- **npm** or **yarn**

### Install and Run

```bash
git clone https://github.com/VrtxOmega/omega-slate.git
cd omega-slate
npm install
npm start
```

### Usage

1. Launch the application
2. Type freely in the slate surface
3. Press `Ctrl+Del` to clear when finished
4. Close the window — no prompts, no saves

---

## Configuration

Omega Slate intentionally has no configuration file. The only persistent state is:

| State | Storage | Default |
|---|---|---|
| Window dimensions | Electron window state | 800x600 |
| Always-on-top | IPC toggle | Off |

If you need persistence, copy content to the Veritas Vault.

---

## Security & Sovereignty

- **No network access**: The application does not make any outbound HTTP requests.
- **No data persistence**: Content is not saved to disk unless explicitly copied to Vault.
- **No telemetry**: No crash reporting, no analytics, no update checks.
- **Minimal attack surface**: The renderer has no Node.js API access beyond the narrow contextBridge surface.

---

## Roadmap

| Milestone | Status |
|---|---|
| Core scratchpad window | Complete |
| Ctrl+Del purge | Complete |
| VERITAS dark theme | Complete |
| Always-on-top toggle | Complete |
| Vault integration (export button) | Planned |
| Multi-slate tabs | Planned |

---

## Omega Universe

| Repository | Role |
|---|---|
| [veritas-vault](https://github.com/VrtxOmega/veritas-vault) | Permanent knowledge retention — destination for promoted notes |
| [Gravity-Omega](https://github.com/VrtxOmega/Gravity-Omega) | Desktop AI platform for advanced processing |
| [omega-brain-mcp](https://github.com/VrtxOmega/omega-brain-mcp) | Governance and skill approval when notes become actions |

---

## License

Released under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built by <a href="https://github.com/VrtxOmega">RJ Lopez</a> &nbsp;|&nbsp; VERITAS &amp; Sovereign Ecosystem &mdash; Omega Universe</sub>
</div>
