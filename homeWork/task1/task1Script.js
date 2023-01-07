class Render {
    tagName;
    tabIdentifier;
    tagText;
    content;
    constructor(inputTagName, inputTabIdentifier,inputTagText,inputContent) {
        this.tagName = inputTagName;
        this.tabIdentifier = inputTabIdentifier;
        this.tagText = inputTagText;
        this.content = inputContent;
    }
    printElement() {
        let div = document.getElementById('container');
        let element = document.createElement(this.tagName);
        element.id = this.tabIdentifier;
        let text = document.createTextNode(this.tagText);
        element.appendChild(text);
        div.appendChild(element);
    }
    addEvent(inputTabIdentifier) {
       let element = document.getElementById(inputTabIdentifier);
       element.addEventListener('click',()=> {
           alert('Hi')
        })
    }
}

let newElement = new Render('h1','mainHeader','OOPtask1','Lesson25');
console.log(newElement);
newElement.printElement();
let newElement2 = new Render('p','mainHeader','OOPtask2','Lesson25');
newElement2.printElement();


