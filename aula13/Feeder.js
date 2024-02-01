export default class Feeder {

    view;

    #intervalID = null;
    #level = 0;
    #color = "#00ff00";
    constructor() {

        this.view = document.createElement("div");
        this.view.className = "feeder";

        this.#intervalID = setInterval(() => {
            this.#loop();
        }, 1000);
    }

    #loop() {
        this.view.style.backgroundColor = this.#lerpColor(this.#level);
        this.#level += 0.1;
        if(this.#level > 1) {
            clearInterval(this.#intervalID);
            this.#intervalID = null;
        }
    }

    reset() {
        this.#level = 0;
        this.#color = "#00ff00";
        this.view.style.backgroundColor = this.#color;
        if(!this.#intervalID) {
            this.#intervalID = setInterval(() => {
                this.#loop();
            }, 1000);
        }
    }

    #lerpColor(t) {

        const hexToRgb = (hex) => {
            const bigint = parseInt(hex.substring(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return [r, g, b];
        }
    
        // Convert RGB to hex color
        const rgbToHex = (rgb) => {
            return `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1)}`;
        }
    
        // Convert start and end colors to RGB
        const startRgb = hexToRgb(this.#color);
        const endRgb = hexToRgb("#ff0000");
    
        // Interpolate RGB values
        const lerpedRgb = startRgb.map((startValue, index) => {
            const endValue = endRgb[index];
            return Math.round(startValue + t * (endValue - startValue));
        });
    
        // Convert the lerped RGB back to hex color
        return rgbToHex(lerpedRgb);
    }
}