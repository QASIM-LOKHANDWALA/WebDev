const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit GOOGLE!'
}

// NOT FESABLE FOR ELEMENTS WITH MORE ATTRIBUTE OR COMPLEX STRUCTURE
/*
function customRender(reactElem,Container){
    const domElem = document.createElement(reactElem.type);
    domElem.innerHTML = reactElem.children;
    domElem.setAttribute('href',reactElem.props.href);
    domElem.setAttribute('target',reactElem.props.target);

    Container.appendChild(domElem);
}
*/

// A BIT BETTER APPROACH
function customRender(reactElem,Container){
    const domElem = document.createElement(reactElem.type);
    domElem.innerHTML = reactElem.children;
    for(const prop in reactElem.props){
        if(prop == 'children') continue;
        domElem.setAttribute(prop,reactElem.props[prop]);
    }
    Container.appendChild(domElem);
}

const mainContainer = document.querySelector('#root');

customRender(reactElem,mainContainer);

