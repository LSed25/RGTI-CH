import { Application } from '../../common/engine/Application.js';
import { WebGL } from '../../common/engine/WebGL.js';
import { GUI } from '../../lib/dat.gui.module.js';

class App extends Application {

    start() {

    }

    render() {

    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const app = new App(canvas);
    const gui = new GUI();
});
