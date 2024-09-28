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

export class HtmlElement {
    public type: string
    public attributes: Record<string, string>[] = []
    public classes: string[] = []
    public children: HtmlElement[] = []
    
    constructor(type: string) {
        this.type = type;
    }
}