<script lang="ts">
    import { onMount } from "svelte";
    import { cssColor } from "../../utils/cssToTS";

    const pushStrength = 0.1;

    let mouseTracker: HTMLDivElement;
    let canvas: HTMLCanvasElement; //wordt gebonden met bind:this in de html
    //(enige manier waarop het binden wilde werken, getElementById vond Svelte niet leuk...)
    //Svelte gaat ook huilen als er klassen (Particle klas) wordt gedefinieerd in de onMount, want het is niet de hoogste scope
    //Daardoor wordt de Particle klas buiten onMount gedefinieerd
    //Daardoor moeten variabelen die van het canvas afhangen en in de Particle klas worden gebruikt, hier worden gemaakt worden ze pas later een waarde gegeven
    //frustratie.......
    let context2d: CanvasRenderingContext2D | null = null;
    let mouse: {
        x: number;
        y: number;
        radius: number;
    };

    let particles: Array<Particle>;
    class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        color: string;
        vmin: number;
        vmax: number;

        constructor(
            x: number,
            y: number,
            vx: number,
            vy: number,
            size: number,
            color: string,
            vmin: number,
            vmax: number,
        ) {
            this.x = x;
            this.y = y;
            this.vx = vx;
            this.vy = vy;
            this.size = size;
            this.color = color;
            this.vmin = vmin;
            this.vmax = vmax;
        }

        draw() {
            if (!context2d) return;
            context2d?.beginPath();
            context2d?.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            context2d.fillStyle =  cssColor("--bg-secondary");
            context2d?.fill();
        }

        update() {
            //turn velocity around when reaching the wall
            if (this.x + this.size > canvas.width && this.vx > 0) {
                this.vx = -this.vx;
            }
            if (this.x - this.size < 0 && this.vx < 0) {
                this.vx = -this.vx;
            }
            if (this.y + this.size > canvas.height && this.vy > 0) {
                this.vy = -this.vy;
            }
            if (this.y - this.size < 0 && this.vy < 0) {
                this.vy = -this.vy;
            }

            //mouse-particle collision checking (circle)
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy); //Pythagoras

            //change position directly if the mouse is close
            if (distance < mouse.radius + this.size) {
                if (
                    mouse.x < this.x &&
                    this.x < canvas.width - this.size * pushStrength
                ) {
                    this.vx += pushStrength;
                }
                if (mouse.x > this.x && this.x > this.size * pushStrength) {
                    this.vx -= pushStrength;
                }
                if (
                    mouse.y < this.y &&
                    this.y < canvas.height - this.size * pushStrength
                ) {
                    this.vy += pushStrength;
                }
                if (mouse.y > this.y && this.y > this.size * pushStrength) {
                    this.vy -= pushStrength;
                }
            }

            //change velocity when the mouse is close
            if (distance < (mouse.radius + 5) + this.size && distance > 0) {
                const force = (mouse.radius - distance) / mouse.radius * 0.1;

                this.vx += (dx / distance) * force * pushStrength;
                this.vy += (dy / distance) * force * pushStrength;
            }

            //add friction
            this.vx *= 0.99;
            this.vy *= 0.99;

            //keep a low minimum speed (to combat the friction)
            if (Math.abs(this.vx) < this.vmin) {
                this.vx = Math.sign(this.vx) * this.vmin;
            }
            if (Math.abs(this.vy) < this.vmin) {
                this.vy = Math.sign(this.vy) * this.vmin;
            }

            //move the particle with its current speed
            this.x += this.vx;
            this.y += this.vy;
        }
    }

    function init() {
        particles = [];
        let particleAmount = (canvas.height * canvas.width) / 10000;

        for (let i = 0; i < particleAmount; i++) {
            let size = Math.random() * 20 + 10;
            let x = Math.random() * (window.innerWidth - size * 4) + size * 2;
            let y = Math.random() * (window.innerHeight - size * 4) + size * 2;
            let vx = (Math.random() * 2 - 1) * 0.02; //give a x velocity of -1 to 1
            let vy = (Math.random() * 2 - 1) * 0.02; //give a y velocity of -1 to 1
            let color = "#000000";

            let vmin = Math.random() * 0.1;
            let vmax = (Math.random() * 2 - 1) * 0.05;

            particles.push(new Particle(x, y, vx, vy, size, color, vmin, vmax));
        }
    }

    function animate() {
        if (!context2d) {return};
        requestAnimationFrame(animate);

        //leave the dots with a trail effect (buggy, keeps colored lines in the background)
        /*
        context2d.fillStyle = "rgba(0, 0, 0, 0.25)";
        context2d.globalCompositeOperation = "destination-out";
        context2d.fillRect(0, 0, canvas.width, canvas.height);
        context2d.globalCompositeOperation = "source-over";
        */

        context2d.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
    }

    onMount(() => {
        if (canvas == null) {
            return;
        }

        mouse = {
            x: 0,
            y: 0,
            radius: (canvas.width / 100) * (canvas.height / 100),
        };

        window.addEventListener("mousemove", function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        context2d = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", function (event) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        init();
        animate();
    });
</script>

<!--------------------------HTML STARTS HERE-------------------------------->

<canvas bind:this={canvas} id="home-screen-canvas"></canvas>

<!--------------------------CSS STARTS HERE-------------------------------->

<style>
    #home-screen-canvas {
        background-color: rgb(var(--bg));
        z-index: -1;

        position: fixed;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
    }
</style>
