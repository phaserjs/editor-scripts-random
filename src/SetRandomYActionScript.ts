
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phasereditor2d/scripts-core";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { AssignOpComp } from "@phasereditor2d/scripts-core";
import GetRandom from "./GetRandom";
/* END-USER-IMPORTS */

export default class SetRandomYActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	execute(...args: any[]): void {

		const obj = this.getActionTargetObject(args) as Phaser.GameObjects.Sprite;

		const newValue = GetRandom.getRandom(this);

		obj.y = AssignOpComp.computeValue(this, obj.y, newValue);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
