class Security {

    constructor(){

        this.access1 = createInput("Código 1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Verificar');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Código 1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Verificar');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Código 1")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Verificar');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey'); 

        //this.button3 = createInput('Verificar');
        //this.button3.position(100,320);
        //this.button3.style('background', 'lightgrey'); 

        //this.button3 = createButton('Verificar');
        //this.button3.position(x,30);
        //this.button3.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                //this.hide();
                //this.hide();
                //score++;

                //this.button3(hide)();
                //this.access3(hide)();
                //score++;

                this.button3.hide();
                this.access3.hide();
                score++;

                //this.button3.hidden();
                //this.access3.hidden();
                //score++;
            }
        });

    }
}
