const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('omega', {
    slate: {
        loadState: () => ipcRenderer.invoke('slate:loadState'),
        saveState: (state) => ipcRenderer.send('slate:saveState', state),
        hide: () => ipcRenderer.send('slate:hide')
    }
});
