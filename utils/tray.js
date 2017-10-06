const { Menu, Tray } = require('electron');
const path = require('path');

const createTrayIcon = (win) => {
  const iconPath = path.join(__dirname, '..', 'logo.png');
  const trayIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Item1',
      type: 'radio',
      icon: iconPath
    },
    {
      label: 'Item2',
      submenu: [
        { label: 'submenu1' },
        { label: 'submenu2' }
      ]
    },
    {
      label: 'Item3',
      type: 'radio',
      checked: true
    },
    {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() {
        win.show();
        win.toggleDevTools();
      }
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  trayIcon.setToolTip('This is my application.');
  trayIcon.setContextMenu(contextMenu);
  return trayIcon;
}

module.exports = {
  createTrayIcon
};
