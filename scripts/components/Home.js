import {render} from '../h.js'
import {Header} from "./Header.js";

export function Home(context) {
    render({
        type: 'div',
        props: {style: 'display: flex; flex-direction: column; height: 100vh; width: 100vw'},
        children: [
            {
                type: Header,
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

