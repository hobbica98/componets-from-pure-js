import {render} from '../h.js'
import {type as HeaderType} from "./Header.js";

export function Home(context) {
    render({
        type: 'div',
        props: {style: 'display: flex; flex-direction: column; height: 100vh; width: 100vw'},
        children: [
            {
                type: 'div', props: {name: HeaderType},
            },
            {
                type: 'div', props: {style: 'background-color: #422331;flex:1'},
                children: [
                    'Home'
                ]
            }
        ]
    }, context);
}

export const type = 'HomeComponent';
