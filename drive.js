AFRAME.registerComponent("drive",{
    init: function(){
        var gameStateValue = this.el.getAttribute("gameState");
        if(gameStateValue == "play"){
            this.driveCar();
        }
    },

    isVelocityActive: function(){
        return(Math.random()<0.25);
        
    },

    driveCar: function(){
        var multiply = 10;
        var wheelRotation = 0;
    }
})