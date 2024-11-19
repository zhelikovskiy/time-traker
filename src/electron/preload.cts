const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
	getTasks: () => {
		electron.ipcRenderer.invoke('get-tasks');
	},
} satisfies Window['electron']);
