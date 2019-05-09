class Wall {
    // Cada objeto wall tendrá dos atributos, cada atributo será un vector
    constructor(x1, y1, x2, y2) {
        this.a = createVector(x1, y1)
        this.b = createVector(x2, y2)
    }

    // Dibuja una línea entre ambos vectores
    show() {
        stroke('rgba(214, 69, 65, 1)')
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }

}   