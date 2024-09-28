// Module aliases for Matter.js
const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      World = Matter.World;

// Create an engine
const engine = Engine.create();

// Create a renderer to display the physics simulation
const render = Render.create({
  element: document.body,    // Attach to the body element
  engine: engine,            // Connect to the physics engine
  options: {
    width: window.innerWidth,  // Full-width canvas
    height: window.innerHeight, // Full-height canvas
    wireframes: false,          // Render filled shapes instead of wireframes
  }
});

// Create a simple box that will fall due to gravity
const box = Bodies.rectangle(200, 200, 80, 80, {
  isStatic: false,          // The box can move (not static)
  restitution: 0.8,
  render: {
    fillStyle: 'green'        // Color of the box
  }
});

let stack = Matter.Composites.stack(200,200,10,10,0,0,function(x,y){
  return Matter.Bodies.rectangle(x,y,40,40);
});

// Create a static ground so the box has something to collide with
const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 50, window.innerWidth, 60, {
  isStatic: true,           // Ground is static, it won't move
  render: {
    fillStyle: 'black'      // Color of the ground
  }
});

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  stiffness: 0.2,  // This controls how stiff the constraint is
    angularStiffness: 0.2, // Controls the angular stiffness
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;
// Add the box and ground to the world
World.add(engine.world, [stack, ground, mouseConstraint]);

// Run the engine
Matter.Runner.run(engine);

// Run the renderer
Render.run(render);

// Handle window resizing
window.addEventListener('resize', () => {
  render.canvas.width = window.innerWidth;
  render.canvas.height = window.innerHeight;
  Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight - 50 });
});