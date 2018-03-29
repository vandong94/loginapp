/**
 * cac bien duoc khai bao global.xxx se truy xuat duoc o bat cu dau trong project
 */
const {resolve} = require('path');
global.PATH = {
    ROOT: resolve('./'),
};
PATH = {
    ...PATH,
    CONTROL: resolve(PATH.ROOT, 'control'),
    MODEL: resolve(PATH.ROOT, 'model'),
    ROUTE: resolve(PATH.ROOT, 'route'),
    CONFIG: resolve(PATH.ROOT, 'config'),
    DATABASE: resolve(PATH.ROOT, 'database'),
}