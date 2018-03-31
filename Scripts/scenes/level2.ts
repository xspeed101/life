module scenes {
    export class level2 extends objects.Scene {
      // Private Instance Variables
      
      private _backButton: objects.Button;
  
      // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
  
        this.Start();
      }
  
      // Private Mathods
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
        
        this._backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
        this.Main();
      }
  
      public Update(): void {
  
      }
  
      // This is where the fun happens
      public Main(): void {
        // add the backButton to the scene
        this.addChild(this._backButton);
  
    
      }
     //nice 
    }
  }
  