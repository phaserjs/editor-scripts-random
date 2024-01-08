declare class GetRandom {
    static getRandom(node: ScriptNode): number;
}

declare class RandomBetweenComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomBetweenComp;
    private gameObject;
    min: number;
    max: number;
    getRandomBetween(): number;
}

declare class RandomInArrayComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomInArrayComp;
    private gameObject;
    options: number[];
    getRandomInArray(): number;
}

declare class RandomMultipleComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): RandomMultipleComp;
    private gameObject;
    multiple: number;
    min: number;
    max: number;
    private getRandomMultipleInRange;
    getRandomMultiple(): number;
}

declare class SetRandomXActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}

declare class SetRandomYActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    execute(...args: any[]): void;
}


