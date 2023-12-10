import {Store} from '../Redux.js'
import { render } from '../h.js'
export function Header(context) {
    let appName;
    const click = () => {
        console.log('click')
        Store.changeState('AppName', 'hello')
    }
    Store.getState('AppName').subscribe(v => {
        appName = v;
        render({type: 'h3', props: {onClick: click}, children: [appName]}, context);
    });
    render({type: 'h3', props: {onClick: click}, children: [appName]}, context);
}

export const type = 'HeaderComponent';
