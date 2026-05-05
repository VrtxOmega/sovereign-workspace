const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

// Determine state storage path
const userDataPath = app.getPath('userData');
const statePath = path.join(userDataPath, 'slate-state.json');

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        show: false, // Hidden by default
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    mainWindow.loadFile('index.html');
    mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

    // Ensure it cannot be minimized or lost
    mainWindow.on('blur', () => {
        // Option: we could auto-hide on blur, but let's leave it explicit for now.
    });
}

function toggleWindow() {
    if (!mainWindow) return;
    if (mainWindow.isVisible()) {
        mainWindow.hide();
    } else {
        mainWindow.show();
        // On Windows sometimes we need to bring it aggressively
        mainWindow.setAlwaysOnTop(true, 'floating');
        mainWindow.focus();
    }
}

app.whenReady().then(() => {
    createWindow();

    // Register global hotkey
    const ret = globalShortcut.register('CommandOrControl+Shift+Space', () => {
        toggleWindow();
    });

    if (!ret) {
        console.error('Registration failed for shortcut');
    }

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
    // Keep running in background on Windows since it's a global hotkey app
    if (process.platform === 'darwin') {
        app.quit();
    }
});

// === IPC Handlers ===

ipcMain.handle('slate:loadState', () => {
    if (fs.existsSync(statePath)) {
        try {
            return JSON.parse(fs.readFileSync(statePath, 'utf-8'));
        } catch (e) {
            console.error('Failed to load state', e);
        }
    }
    return { content: '' };
});

ipcMain.on('slate:saveState', (event, state) => {
    try {
        fs.writeFileSync(statePath, JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save state', e);
    }
});

ipcMain.on('slate:hide', () => {
    if (mainWindow) mainWindow.hide();
});
