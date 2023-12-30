
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import SetRandomXActionScript from "./SetRandomXActionScript";
import RandomMultipleComp from "./RandomMultipleComp";
import SetRandomYActionScript from "./SetRandomYActionScript";
import RandomInArrayComp from "./RandomInArrayComp";
import { ActionTargetComp } from "@phasereditor2d/scripts-core";
import RandomBetweenComp from "./RandomBetweenComp";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Demo extends Phaser.Scene {

	constructor() {
		super("Demo");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// setRandomXActionScript
		const setRandomXActionScript = new SetRandomXActionScript(this);

		// setRandomYActionScript
		const setRandomYActionScript = new SetRandomYActionScript(this);

		// setRandomXActionScript_1
		const setRandomXActionScript_1 = new SetRandomXActionScript(this);

		// setRandomXActionScript (components)
		new RandomMultipleComp(setRandomXActionScript);

		// setRandomYActionScript (components)
		const setRandomYActionScriptRandomInArrayComp = new RandomInArrayComp(setRandomYActionScript);
		setRandomYActionScriptRandomInArrayComp.options = [10, 100, 200, 300, 1000];

		// setRandomXActionScript_1 (components)
		const setRandomXActionScript_1ActionTargetComp = new ActionTargetComp(setRandomXActionScript_1);
		setRandomXActionScript_1ActionTargetComp.target = "ARG_1";
		new RandomBetweenComp(setRandomXActionScript_1);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
