const {app, BrowserWindow, Menu} = require('electron');
const url = require ('url');
const path = require ('path'); 


let mainWindow
let newProductWindow
if(process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
    });
  }

app.on('ready', () => {
   mainWindow = new BrowserWindow ({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/Prueba2.html'),
        protocol: 'file',
        slashes: true
    }))
    const mainMenu= Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('close', () => {
        app.quit();
    })
});


function createNewProductWindow() {
    newProductWindow = new BrowserWindow({
        width: 400,
        height: 330,
        tittle: 'Add A New Product'
    });
    newProductWindow.setMenu(null);
    newProductWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/new-product.html'),
        protocol: 'file',
        slashes: true
    }))

    newProductWindow.on('close', () => {
        newProductWindow = null;
    })
}
const templateMenu = [
    {
        label: 'File', 
        submenu: [
            {
                label: 'New Product',
                accelerator: 'Ctrl+N',
                click(){
                    createNewProductWindow();
                }
            }, {
                label: 'Remove All Products',
                click() {
                    
                }
    
        },{
                label: 'Exit',
                accelerator: process.plataform == 'darwin' ? 'command+Q':'Ctrl+Q',
                click() {
                    app.quit();
                }
        }
        ]
    }, 
];