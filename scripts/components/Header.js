import {Store} from '../Redux.js'
import {render} from '../h.js'

export function Header(context, props) {
    let appName = 'App Name';
    const draw = () => {
        render({type: 'h3', props: {onClick: click}, children: [appName]}, context);
    }
    const click = () => {
        console.log('click')
        appName = 'New Name';
        draw()
    }

    Store.getState('AppName').subscribe(v => {
        appName = v;
        draw();
    });

    draw();
}

