$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 700, 100, 10, "red")
createPlatform(100, 600, 100, 10, "orange")
createPlatform(200, 500, 100, 10, "yellow")
createPlatform(300, 400, 100, 10, "green")
createPlatform(400, 300, 100, 10, "blue")
createPlatform(500, 200, 100, 10, "indigo")
createPlatform(600, 100, 100, 10, "violet")
createPlatform(700, 200, 100, 10, "indigo")
createPlatform(800, 300, 100, 10, "blue")
createPlatform(900, 400, 100, 10, "green")
createPlatform(1000, 500, 100, 10, "yellow")
createPlatform(1100, 600, 100, 10, "orange")
createPlatform(1200, 700, 100, 10, "red")
    // TODO 3 - Create Collectables
createCollectable("database",30, 630, 0, 0)
createCollectable("database", 330, 330, 0, 0)
createCollectable("database", 630, 30, 0, 0)
createCollectable("database", 930, 330, 0, 0)
createCollectable("database", 1230, 630, 0, 0)

    
    // TODO 4 - Create Cannons
createCannon("bottom", 200, 1000)
createCannon("bottom", 400, 1300)
createCannon("right", 800, 0.1)
createCannon("bottom", 800, 1300)
createCannon("bottom", 600, 1600)
createCannon("bottom", 1000, 1000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
