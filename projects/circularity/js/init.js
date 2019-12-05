var init = function(window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        var circle;
        var circles = [];
        
        var numCircles = 0;
        var allCircles = 500;
        


        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, false, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
        }
        
        for (var numCircles = 0; numCircles <= 100; numCircles++) {
            drawCircle();
        }

        view.addChild(fps);
        app.addUpdateable(fps);
    
        game.checkCirclePosition = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            if (circle.x > canvas.width){
                circle.x = 0;
            }
            
            else if( circle.x < 0){
                circle.x = canvas.width;
            }
            
            if(circle.y > canvas.height){
                circle.y = 0;
            }
            
            else if(circle.y < 0){
                circle.y = canvas.height;
            }
        }
    
        function update() {

            
            for (var i = 0; i < circles.length; i++) {
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }
            
            var eachValue = circles[i];
            
            

            // TODO 5 : Call game.checkCirclePosition on your circles.
       
           

            // TODO 8 : Iterate over the array
           

        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}

