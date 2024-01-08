class GetRandom {
    static getRandom(node) {
        let result = 0;
        {
            const comp = RandomMultipleComp.getComponent(node);
            if (comp) {
                result = comp.getRandomMultiple();
            }
        }
        {
            const comp = RandomInArrayComp.getComponent(node);
            if (comp) {
                result = comp.getRandomInArray();
            }
        }
        {
            const comp = RandomBetweenComp.getComponent(node);
            if (comp) {
                result = comp.getRandomBetween();
            }
        }
        return result;
    }
}

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class RandomBetweenComp {
    constructor(gameObject) {
        this.gameObject = gameObject;
        gameObject["__RandomBetweenComp"] = this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__RandomBetweenComp"];
    }
    gameObject;
    min = 0;
    max = 1000;
    /* START-USER-CODE */
    getRandomBetween() {
        return Phaser.Math.Between(this.min, this.max);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class RandomInArrayComp {
    constructor(gameObject) {
        this.gameObject = gameObject;
        gameObject["__RandomInArrayComp"] = this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__RandomInArrayComp"];
    }
    gameObject;
    options = [];
    /* START-USER-CODE */
    getRandomInArray() {
        return Phaser.Utils.Array.GetRandom(this.options);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class RandomMultipleComp {
    constructor(gameObject) {
        this.gameObject = gameObject;
        gameObject["__RandomMultipleComp"] = this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__RandomMultipleComp"];
    }
    gameObject;
    multiple = 10;
    min = 0;
    max = 1000;
    /* START-USER-CODE */
    getRandomMultipleInRange(min, max, multiple) {
        // Calculate the range of numbers between min and max
        const range = max - min + 1;
        // Generate a random number within the range
        const randomOffset = Math.floor(Math.random() * range);
        // Find the closest multiple within the chosen range
        const randomMultiple = min + randomOffset - ((min + randomOffset) % multiple);
        return randomMultiple;
    }
    getRandomMultiple() {
        return this.getRandomMultipleInRange(this.min, this.max, this.multiple);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetRandomXActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        const newValue = GetRandom.getRandom(this);
        obj.x = AssignOpComp.computeValue(this, obj.x, newValue);
    }
}
/* END OF COMPILED CODE */
// You can write more code here

// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
class SetRandomYActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        const obj = this.getActionTargetObject(args);
        const newValue = GetRandom.getRandom(this);
        obj.y = AssignOpComp.computeValue(this, obj.y, newValue);
    }
}
/* END OF COMPILED CODE */
// You can write more code here


