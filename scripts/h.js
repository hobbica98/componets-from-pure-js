// The render function takes a virtual dom object and returns a dom object.
// The render function is recursive.
function render(vdom, context) {
    context.innerHTML = ''
    if(vdom == null) return
    if (typeof vdom === 'string') {
       context.appendChild( document.createTextNode(vdom))
        return;
    }
    const dom = document.createElement(vdom.type);
    for (let name in vdom.props) {
        if (name.startsWith('on')) {
            dom.addEventListener(name.substring(2).toLowerCase(), vdom.props[name]);
        }
        else {
            dom.setAttribute(name, vdom.props[name]);
        }
    }
    vdom.children?.forEach(child => render(child, dom));
    context.appendChild(dom);
    return dom;
}
// The render function is called in the populate function.
// The populate function is recursive.
export { render };