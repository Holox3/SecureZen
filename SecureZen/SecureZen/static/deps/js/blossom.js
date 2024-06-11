// Define types and interfaces
type PetalRotation = {
    axis: 'X' | 'Y' | 'Z';
    value: number;
    speed: number;
    x: number;
};

interface PetalConfig {
    customClass?: string;
    x?: number;
    y?: number;
    z?: number;
    xSpeedVariation?: number;
    ySpeed?: number;
    rotation?: PetalRotation;
}

class Petal implements PetalConfig {
    el: HTMLElement;
    customClass: string;
    x: number;
    y: number;
    z: number;
    xSpeedVariation: number;
    ySpeed: number;
    rotation: PetalRotation;

    constructor(config: PetalConfig) {
        this.customClass = config.customClass || '';
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.z = config.z || 0;
        this.xSpeedVariation = config.xSpeedVariation || 0;
        this.ySpeed = config.ySpeed || 0;
        this.rotation = {
            axis: 'X',
            value: 0,
            speed: 0,
            x: 0
        };

        if (config.rotation && typeof config.rotation === 'object') {
            this.rotation.axis = config.rotation.axis || this.rotation.axis;
            this.rotation.value = config.rotation.value || this.rotation.value;
            this.rotation.speed = config.rotation.speed || this.rotation.speed;
            this.rotation.x = config.rotation.x || this.rotation.x;
        }

        this.el = document.createElement('div');
        this.el.className = 'petal ' + this.customClass;
        this.el.style.position = 'absolute';
        this.el.style.backfaceVisibility = 'visible';
    }
}

type BlossomSceneConfig = {
    id: string;
    petalsTypes: Petal[];
    numPetals?: number;
    gravity?: number; // 0~1
    windMaxSpeed?: number;
};

class BlossomScene {
    container: HTMLElement;
    numPetals: number;
    petalsTypes: Petal[];
    gravity: number;
    windMaxSpeed: number;
    private windMagnitude: number;
    private placeholder: HTMLElement;
    private petals: Petal[];
    private windDuration: number;
    private width: number;
    private height: number;
    private timer: number;

    constructor(config: BlossomSceneConfig) {
        let container = document.getElementById(config.id);
        if (container === null) {
            throw new Error('[id] provided was not found in document');
        }
        this.container = container;
        this.placeholder = document.createElement('div');
        this.petals = [];
        this.numPetals = config.numPetals || 5;
        this.petalsTypes = config.petalsTypes;
        this.gravity = config.gravity || 0.8;
        this.windMaxSpeed = config.windMaxSpeed || 4;
        this.windMagnitude = 0.2;
        this.windDuration = 0;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.timer = 0;

        this.container.style.overflow = 'hidden';
        this.placeholder.style.transformStyle = 'preserve-3d';
        this.placeholder.style.width = this.container.offsetWidth + 'px';
        this.placeholder.style.height = this.container.offsetHeight + 'px';
        this.container.appendChild(this.placeholder);
        this.createPetals();
        requestAnimationFrame(this.updateFrame.bind(this));
    }

    // Rest of the class methods...

    // Ensure to export the necessary types and classes
}

const petalsTypes = [
    new Petal({ customClass: 'petal-style1' }),
    new Petal({ customClass: 'petal-style2' }),
    new Petal({ customClass: 'petal-style3' }),
    new Petal({ customClass: 'petal-style4' })
];

const myBlossomSceneConfig: BlossomSceneConfig = {
    id: 'blossom_container',
    petalsTypes
};

const myBlossomScene = new BlossomScene(myBlossomSceneConfig);
