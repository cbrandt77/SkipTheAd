export class InspectorDetails {
    public html: HtmlElement[] = []
    public js: string[] = []
    public css: CssBlock[] = []
    
    public clear() {
        this.html.length = 0;
        this.js.length = 0;
        this.css.length = 0;
    }
}

export class CssBlock {
    public name: string
    public selector: "#" | "." | ""
    public attributes: Record<string, string>[] = []
    
    constructor(name: string, selector: "#" | "." | "") {
        this.name = name;
        this.selector = selector;
    }
}

export interface HtmlElementOptions {
    attributes?: Record<string, string>,
    classes?: string[],
    children?: HtmlElement[]
}

export interface AttributeOptions {
    value: string,
    editable: boolean
}

export class HtmlElement {
    public type: string
    public attributes: Record<string, string | AttributeOptions> = {}
    public classes: string[] = []
    public children: HtmlElement[] = []
    
    constructor(type: string, options: HtmlElementOptions = {}) {
        this.type = type
        this.attributes = options.attributes || {}
        this.classes = options.classes || []
        this.children = options.children || []
    }
}