const template = document.createElement("template");

class story extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name-page')
    }
    static observedAttributes(){
        return ['name-page']
    }
}
export {story}