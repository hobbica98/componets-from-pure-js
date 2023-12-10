import { render } from '../h.js'
import {type as HeaderType} from "./Header.js";
export function Home(context) {
    render({
        type: 'div',
        props: { name: HeaderType },
    }, context);
}

export const type = 'HomeComponent';
