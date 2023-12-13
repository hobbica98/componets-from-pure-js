import {render} from '../h.js'
import {Header} from "./Header.js";
import {Store} from "../Redux.js";

export function Home(context) {
    render({
        type: 'div',
        props: {style: 'display: flex; flex-direction: column; height: 100vh; width: 100vw'},
        children: [
            {
                type: Header,
                props: {style: 'background-color: #422331;flex:1'}
            },
            {
                type: 'div', props: {style: 'background-color: #422331;flex:1'},
                children: [
                    'Home'
                ]
            },
            {
                type: 'input',
                props: {
                    onChange: (e) => {
                        Store.changeState('AppName', e.target.value)
                    }
                }
            }
        ]
    }, context);
}
