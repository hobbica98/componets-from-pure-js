// The render function takes a virtual dom object and returns a dom object.
// The render function is recursive.
function render(vdom, context) {
    context.innerHTML = '';
    const renderComponentRecursive = (vdom, context) => {
        if (vdom == null) return
        if (typeof vdom === 'string') {
            context.appendChild(document.createTextNode(vdom))
            return;
        }
        if (typeof vdom.type === 'function') {
            const dom = document.createElement('div');
            dom.setAttribute('name', vdom.type.name);
            context.appendChild(dom);
            vdom.type(dom, vdom.props);
            return;
        }
        const dom = document.createElement(vdom.type);
        for (let name in vdom.props) {
            if (name.startsWith('on')) {
                dom.addEventListener(name.substring(2).toLowerCase(), vdom.props[name]);
            } else {
                dom.setAttribute(name, vdom.props[name]);
            }
        }
        vdom.children?.forEach(child => renderComponentRecursive(child, dom));
        context.appendChild(dom);
        return dom;
    }
    return renderComponentRecursive(vdom, context);
}

// The render function is called in the populate function.
// The populate function is recursive.
export {render};
