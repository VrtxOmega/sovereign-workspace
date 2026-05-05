const input = document.getElementById('slate-input');

// Focus input whenever the window becomes visible
window.addEventListener('focus', () => {
    input.focus();
});

// Handle Escape and clear shortcut
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.omega.slate.hide();
    }
    // Purge shortcut: Ctrl + Delete
    if (e.ctrlKey && e.key === 'Delete') {
        clearSlate();
    }
});

// Purge button listener
document.getElementById('slate-clear').addEventListener('click', clearSlate);

function clearSlate() {
    input.value = '';
    window.omega.slate.saveState({ content: '' });
    input.focus();
}

// State synchronization loop
let saveTimeout;
input.addEventListener('input', () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        window.omega.slate.saveState({ content: input.value });
    }, 500); // 500ms debounce
});

// Load state initially
async function init() {
    try {
        const state = await window.omega.slate.loadState();
        if (state && state.content !== undefined) {
            input.value = state.content;
        }
    } catch (e) {
        console.error('Failed to load initial state', e);
    }
    input.focus();
}

init();
