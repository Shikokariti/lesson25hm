let computers = [];
class Computer {
    processor;
    graphicCard;
    ram;
    hardDisk;
    screenName;
    marketingName;
    constructor(inputProcessor,inputGraphicCard,inputRam,inputHardDisk,inputScreenName,inputMarketingName) {
        this.processor = inputProcessor;
        this.graphicCard = inputGraphicCard;
        this.ram = inputRam;
        this.hardDisk = inputHardDisk;
        this.screenName = inputScreenName;
        this.marketingName = inputMarketingName;
    }
}

let hp1 = new Computer('Intel','NVIDIA® GeForce® MX350, with 2GB GDDR5 VRAM','8GB','512GB','Anti-Glare micro-edge','HP1');
let hp2 = new Computer('Intel','NVIDIA® GeForce® MX250, with 3GB GDDR5','12GB','256GB','micro-edge','HP2');
let hp3 = new Computer('AMD','NVIDIA® GeForce® MX550','8GB','512GB','Anti-Glare','HP3');
computers.push(hp1,hp2,hp3);
computers.forEach((element) => {
    let button = document.createElement('button');
    let text = document.createTextNode(element.marketingName);
    button.id = element.marketingName;
    let div = document.getElementById('computers');
    button.appendChild(text);
    div.appendChild(button);
    button.addEventListener('click',()=>{
        let newDetails = new Render(element);
        newDetails.printDetails();
    });
});
class Render {
    computer;
    constructor(inputComputer) {
        this.computer = inputComputer;
    }
    printDetails() {
        let div = document.getElementById('computerDetails');
        let header = document.createElement('h1');
        let text = document.createTextNode(`${this.computer.marketingName} ${this.computer.ram} ${this.computer.hardDisk} ${this.computer.graphicCard} ${this.computer.screenName} ${this.computer.processor}`)
        header.appendChild(text);
        div.appendChild(header);
    }
}


