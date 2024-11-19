const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
	getTasks: () => {
		console.log('Get tasks method Client');
		electron.ipcRenderer.invoke('get-tasks');
	},
} satisfies Window['electron']);
