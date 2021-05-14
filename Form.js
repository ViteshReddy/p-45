class Form {

    constructor() {
      
      this.button1 = createButton('Police');
      this.button2 = createButton("Thief")
      this.title = createElement('h2');
      }
    hide(){
      this.button1.hide();
        this.button2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Welcome to Chor Police");
      this.title.position(displayWidth/2 - 50, 0);
  
     
      this.button1.position(displayWidth/2 + 30, displayHeight/2);
      this.button2.position(displayWidth/2 -30, displayHeight/2);
        this.button1.mousePressed(()=>
    
    text("Press space to start", 600,400)
    
    
      );

      this.button2.mousePressed(()=>
    
    text("Press Right Arrow to start", 600,400)
    
    
     );
  
    }
  } 
  