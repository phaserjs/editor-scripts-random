# Phaser Editor v4 Random Scripts (library)

**Warning: This project is deprecated. It is now part of the [@phaserjs/editor-scripts-quick](https://www.npmjs.com/package/@phaserjs/editor-scripts-quick) library.**

This project contains Phaser Editor scripts for configuring random actions.

These script nodes are very basic and may fit on any Phaser Editor project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

This package depends on the following packages:

- `@phaserjs/editor-scripts-core`

To install this in your game you have to install dependencies too:

```
npm install @phaserjs/editor-scripts-core
npm install @phaserjs/editor-scripts-random
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": [
        "@phaserjs/editor-scripts-core",
        "@phaserjs/editor-scripts-random"
    ]
}
```

## Installing (vanilla JavaScript)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phaserjs_editor_scripts_random.js` file.

## Summary

This library provides a few actions for using random values in your game. You can configure the domain of the random values by using the configuration components.

As a reminder, an action is executed by an event script or another action.

The actions:

* **Set Random X Action** - Set a random value to the object's X.
* **Set Random Y Action** - Set a random value to the object's X.

The configuration components:

* **Random Between Config** - To select an integer random value between two numbers.
* **Random Multiple Config** - To select an integer random multiple between two numbers.
* **Random In Array Config** - To pick a random value in an array of options.

## Set Random X Action

*Class: SetRandomXActionScript*

This action sets a random X value to the game object. It requires that you add to this node one of the random configuration components.

It allows 

## Set Random Y Action

*Class: SetRandomYActionScript*

This action sets a random Y value to the game object. It requires that you add to this node one of the random configuration components.

## Random Between Config

This user component contains the configuration for generating random integer values between the given parameters **Min** and **Max**.

## Random Multiple Config

This user component contains the configuration for generating random integer values between the given parameters **Min** and **Max**, but it is also a multiple of the **Multiple** parameters.

Eg., with a multiple of 10, the possible values between 10 and 30 are 10, 20, and 30.

## Random In Array Config

This user component contains the parameters for picking a random number from an array of options. You can write the array in the **Options** parameters, following a JSON array format. Like this: `[10, 34, 2, 89, 20]`.