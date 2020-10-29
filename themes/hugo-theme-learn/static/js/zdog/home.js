// z-shape
// Made with Zdog
var BokehShape = Zdog.Shape.subclass({
    bokehSize: 5,
    bokehLimit: 64,
  });
  
  BokehShape.prototype.updateBokeh = function() {
    // bokeh 0 -> 1
    this.bokeh = Math.abs( this.sortValue ) / this.bokehLimit;
    this.bokeh = Math.max( 0, Math.min( 1, this.bokeh ) );
    return this.bokeh;
  };
  
  BokehShape.prototype.getLineWidth = function() {
    return this.stroke + this.bokehSize * this.bokeh * this.bokeh;
  };
  
  BokehShape.prototype.getBokehAlpha = function() {
    var alpha = 1 - this.bokeh;
    alpha *= alpha;
    return alpha * 0.8 + 0.2;
  };
  
  BokehShape.prototype.renderCanvasDot = function( ctx ) {
    this.updateBokeh();
    ctx.globalAlpha = this.getBokehAlpha(); // set opacity
    Zdog.Shape.prototype.renderCanvasDot.apply( this, arguments );
    ctx.globalAlpha = 1; // reset
  };
  
  BokehShape.prototype.renderPath = function( ctx, renderer ) {
    this.updateBokeh();
    // set opacity
    if ( renderer.isCanvas ) {
      ctx.globalAlpha = this.getBokehAlpha();
    }
    Zdog.Shape.prototype.renderPath.apply( this, arguments );
    // reset opacity
    if ( renderer.isCanvas ) {
      ctx.globalAlpha = 1;
    }
  };


let illo = new Zdog.Illustration({
    element: '.illo',
    resize: 'fullscreen',
    // zoom: 1.1,
    dragRotate: true,
});

var TAU = Zdog.TAU;

var badColor = {
    skin: '#435',
    hair: '#D4B',
    parkaLight: '#85A',
    parkaDark: '#527',
    tight: '#412',
    eye: '#D02',
  };
  

// z-shape
new Zdog.Shape({
    addTo: illo,
    path: [
    // machine learning
    // start M
    { y: 40 },
    { y:  -40 },
    { x: 50, y: 40 },  
    { x: 100, y: -40 },  
    {x: 100, y: 40 },
    {x: 100, y:  -40 },
    // Start A
    { move: { x: 170, y:20 }},
    {x:220, y:20},
    { move: { x: 150, y:40 }},
    { x: 190, y: -40 }, 
    { x: 230, y: 40 },
    // start C
    { move: { x: 280, y:40 }},
    {x:280, y:-40 },
    {x:340, y:-40 },
    { move: { x: 340,  y:40 }},
    {x:280, y:40},
    // start H
    { move: { x: 395, y:40 }},
    {x:395, y:-40 },
    
    { move: { x: 395, y:0 }},
    {x:455, y:0 },

    { move: { x: 460, y:40 }},
    {x:460, y:-40 },

    
    ],
    closed: false,
    stroke: 20,
    color: '#0B379B',
});

// (function () {
//     var dotCount = 64;

//     for (var i = 0; i < dotCount; i++) {
//         var yRotor = new Zdog.Anchor({
//             addTo: illo,
//             rotate: { y: TAU / dotCount * i },
//         });

//         new BokehShape({
//             path: [
//                 {x:220, z: 40 * (1 - Math.random() * Math.random()) + 32 },
//             ],
//             addTo: yRotor,
//             rotate: { x: (Math.random() * 2 - 1) * TAU * 3 / 16 },
//             color: badColor.skin,
//             stroke: 1 + Math.random(),
//             bokehSize: 6,
//             bokehLimit: 74,
//         });
//     }

// })();

// var then = new Date() - 1/60;
// var isSpinning = true;
// var rotateSpeed = -TAU/60;



// function update() {
//   var now = new Date();
//   var delta = now - then;
//   // auto rotate
//   if ( isSpinning ) {
//     var theta = rotateSpeed/60 * delta * -1;
//     illo.rotate.y += theta;
//     xClock += theta/4;
//     illo.rotate.x = Math.sin( xClock ) * TAU/12;
//   }

//   illo.updateGraph();

//   then = now;
// }

function animate() {
    // update();
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();
      // { x: 40, y: -32 },
      // { x: 32, y: 40 }, 
      // { x: -40, y: -32 }, 
      // { x: -40, y:  40},
