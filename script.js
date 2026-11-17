function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    frameRate(24);
}

function draw() {
    background(2, 2, 6, 40);

    stroke(255, 51, 85, random(20, 80));
    strokeWeight(random(0.5, 1.5));
    
    let x1 = random(width);
    let y1 = random(height);
    line(x1, y1, x1 + random(-50, 50), y1 + random(-50, 50));

    if (frameCount % 30 === 0) {
        noFill();
        stroke(150, 50, 200, 30);
        strokeWeight(1);
        ellipse(random(width), random(height), random(50, 200), random(50, 200));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}