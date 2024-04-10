
function customRender(reactElement, container) {
    
    // Issue with setAttribute (need to write again and again and if no attribute, it mess up)
    /*
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.children
    element.setAttribute('href',reactElement.props.href)
    element.setAttribute('target',reactElement.props.target)

    container.appendChild(element)
    */

    // Better way with loop
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        element.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(element)
}


const reactElement = {
    type: "a",
    props: {
        href: "google.com",
        target: "_blank",
    },
    children: "Click to visit google.com"
}

const container = document.getElementById('root')

customRender(reactElement, container)