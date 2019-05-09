// Recta - muro 
let wall;
let ray;
let particle;
let walls = []

function setup() {
    // Crea un plano 400 ancho * 400 largo de color negro
    createCanvas(400, 400)

    // Array que contiene objetos wall
    walls = [
        new Wall(Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0))),
        new Wall(Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0))),
        new Wall(Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0))),
        new Wall(Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)))
    ]

    // posición primer vector: x1 = random y1 = random
    // posición segundo vector: x2 = random y2 = random
    // wall = new Wall(Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)))
    // ray = new Ray(200, 200, Math.floor(Math.random() * (400 - 0)), Math.floor(Math.random() * (400 - 0)))
    // wall = new Wall(300, 100, 300, 300)
    particle = new Particle()
}

// No para de dibujar
function draw() {
    background(0)

    walls.forEach(wall => {
        wall.show()
    })

    particle.show()

    walls.forEach(wall => {
        particle.look(wall)
    })
}