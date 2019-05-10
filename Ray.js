class Ray {
    constructor(pos, angle) {
        this.pos = pos
        this.dir = p5.Vector.fromAngle(angle)
    }

    // Dibuja una línea entre ambos puntos
    show() {
        stroke('rgba(255, 255, 255, 0.125)')
        push()
        translate(this.pos.x, this.pos.y)
        line(0, 0, this.dir.x, this.dir.y)
        pop()
    }

    // Calcula la intersección entre dos rectas 
    // Source: https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
    cast(wall) {
        const x1 = wall.a.x
        const y1 = wall.a.y
        const x2 = wall.b.x
        const y2 = wall.b.y

        const x3 = this.pos.x
        const y3 = this.pos.y
        const x4 = this.pos.x + this.dir.x
        const y4 = this.pos.y + this.dir.y

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

        // si el denominador es igual a 0 es porque las rectas son paralelas y nunca van a chocar
        if (den === 0) {
            return
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den

        if ((t > 0 && t < 1) && u > 0) {
            // Punto de intersección
            const pt = createVector()
            pt.x = x1 + t * (x2 - x1)
            pt.y = y1 + t * (y2 - y1)
            return pt
        } else {
            // No colisiona
            return
        }
    }



}   
