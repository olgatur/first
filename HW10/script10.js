"use strict";

class Options{
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

        createDiv() {
            let div = document.createElement('div');
            
            div.style.cssText = `width: ${this.width};
                            hight: ${this.height};
                            background-color: ${this.bg};
                            font-size: ${this.fontSize};`
                            
            div.textContent = '123';
            document.body.appendChild(div);
        }    
    }     
        
    let obj = new Options('100px', '100px', 'red', '86px', 'center');
    let obj2 = new Options('70px', '25px', 'blue', '50px', 'left');
    let obj3 = new Options('50px', '20px', 'green', '50px', 'center');

    obj.createDiv();
    obj2.createDiv();
    obj3.createDiv();
    
    console.log(obj);
    console.log(obj);
    
    
    