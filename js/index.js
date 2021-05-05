import Model from './model.js';
import View from './view.js';
//const View = require('./view');

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const view = new View();

    model.setView(view);
    view.setModel(model);
    view.render();
});



