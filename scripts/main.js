import {Home} from './components/Home.js'
import {Header} from './components/Header.js'
import { render } from './h.js'
document.addEventListener('DOMContentLoaded', domLoader);
window.addEventListener('popstate', domLoader);
const routes = {
    ['#home']: Home,
    ['#header']: Header,
};

window.location.hash = 'home';

function domLoader() {
    const context = document.getElementById('root');
    if (document.location.hash != null && document.location.hash !== '') {
        const comp = routes[document.location.hash];
        if (comp != null) {
                render({
                    type: comp
                }, context);
        }
    }
}

