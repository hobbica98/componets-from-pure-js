import {Home, type as HomeType} from './components/Home.js'
import {Header, type as HeaderType} from './components/Header.js'
import { render } from './h.js'
document.addEventListener('DOMContentLoaded', domLoader);
window.addEventListener('popstate', domLoader);
const routes = {
    ['#home']: HomeType,
    ['#header']: HeaderType,
};

window.location.hash = 'home';

function domLoader() {
    const context = document.getElementById('root');
    if (document.location.hash != null && document.location.hash !== '') {
        const comp = routes[document.location.hash];
        if (comp != null) {
                render({
                    type: 'div',
                    props: { name: comp },
                }, context);
        }
    }
    populate(context);
}

function populate(context) {
    if (context.children != null) {
        Array.from(context.children).forEach(child => {
            if (child.attributes.name != null)
                switch (child.attributes.name.value) {
                    case HomeType:
                        if (child.innerHTML === '')
                            Home(child);
                        break;
                    case HeaderType:
                        if (child.innerHTML === '')
                            Header(child);
                        break;
                    default:
                        break;
                }
            populate(child)
        })
    }
}

