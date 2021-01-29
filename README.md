---
module: fundamentals

level: 0

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# Xmas Tree

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

This project is all about setting up your machine for JavaScript programmes.

## Learning Outcomes

- Install `npm` dependencies with `yarn`
- Run a script with `yarn`
- Write tests in JavaScript with Jest

## Exercise -1: Preparing to run JavaScript and install project dependencies

### Installing `node` via `nvm`

JavaScript [originated as a browser-based language](https://www.springboard.com/blog/history-of-javascript), but it can also now be run outside browsers as a backend (server-side) language, most popularly through the [Node.js](https://nodejs.dev/learn/a-brief-history-of-nodejs) environment.

Whilst we could run JavaScript just in the browser, in order to explore the full power of modern JavaScript (and, soon, TypeScript) we'll be using Node.js to run JavaScript e.g. through our terminals.

Node.js comes in different versions - so we'll use something called Node Version Manager (or `nvm`), because this will make it easier for us to sswitch between Node.js versions if we want to later.

[Here's the `nvm` documentation](https://github.com/nvm-sh/nvm). It has instructions on installation, verifying installation and troubleshooting common problems.

Once you've installed `nvm` (and verified its installation), follow the `nvm` docs on installing the latest version of Node.js.

### Running JavaScript in the terminal

Now that we've got `node` installed, we can open up an interactive JavaScript console in our terminal simply with:

```bash
node
```

Here are some of the things you could try in the JavaScript shell:

- `2 + 2`
- `"Hello, world!"`
- `["Roses are red", "Violets are blue", "Python is fun", "JS is too!"]`

Feel free to experiment!

Once you are satisfied, you can exit the JavaScript console and return to your normal shell with `Ctrl + C`.

## Exercise 0: Installing and running your first JavaScript project

This repository contains a JavaScript project written following TDD principles.

To start with, we'll clone the repository and run the existing tests to check the existing state of the code.

### Clone and inspect the repository

Let's clone the repository:

```bash
cd ~/Developer/Academy # or wherever you're storing Academy repos
git clone https://github.com/WeAreAcademy/mark-fundamentals-proj--js-xmas-tree.git
```

and now note a few files:

- `yarn.lock` - let's ignore this for now
- `xmas-tree.js` - this has our main code
- `xmas-tree.spec.js` - this has our tests
- `package.json` - let's look at this now!

### Reading `package.json`

`package.json` is a file which sits in the root folder of most JavaScript/TypeScript projects.

It has different fields - which you can [read about in more detail in the `npm` docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) - but two will be of particular interest to us in this project: `scripts` and `dependencies`.

We'll come back to `scripts` later in this project. For now, if you look at `dependencies`, you will see that there is one direct _dependency_ listed: `jest`, a [JavaScript testing library](https://jestjs.io/).

(The `"^26.6.3"` tells us about which versions of Jest are consistent with the project. Don't worry too much about that right now.)

> ⚠️ Normally, we would see `jest` under `devDependencies`, but we'll learn about why in another project.

## Exercise 1: Installing and demoing

**Success criterion:** playing a few games of Hangman on your local machine by running the TypeScript programme written.

Firstly, clone this repository to your local machine in some sensible place, for example:

```bash
cd ~/Development/Academy # or wherever you're organising everything
git clone https://github.com/WeAreAcademy/mark-fundamentals-proj--ts-hangman.git
```

Then, change into the new directory and install the files:

```bash
cd mark-fundamentals-proj--ts-hangman
yarn
```

Finally, run the programme!

```bash
yarn start
```

## Exercise 2: Reading, understanding and documenting

> 🎯 **Success criterion:** a document which outlines how you think this TypeScript programme works. You don't have to achieve a theory which explains 100%, but you should strive to explain as much as possible.

(N.B.: The _correctness_ of your theory is **much less important** than the _process_ of forming this document. [Forming a prediction, and then discovering it was wrong, is an effective way to learn](https://www.sciencedirect.com/science/article/abs/pii/S0959475217303468)!)

Steps that we have previously suggested as a learning exercise (and suggest again) include:

1. Take some time to read and digest the code
2. Google things that you don't understand
3. Experiment with changing things
4. Produce a narrative document

A good narrative document for this game would walk through at least one game of Hangman and explain how the programme code is leading to the terminal output. (Screenshots of the terminal and/or snippets of programme code are likely to be helpful here.)

## Exercise 3: TypeScript-specific notes

> 🎯 **Success criterion:** a document which outlines how this Hangman game uses some TypeScript features that don't exist in JavaScript.

The basic principles of variable assignment, control flow and functions are the same between TypeScript and JavaScript (and also Python).

TypeScript does introduce some additional things, though:

| Item | JavaScript example | TypeScript example |
| --- | --- | --- |
| Variable declaration | <pre>let counter = 10</pre> | <pre>let counter: number = 10</pre> |
| Function declaration | <pre>function printCounterValue() { <br /> &nbsp;console.log(counter); <br /> }</pre> | <pre>function printCounterValue(): void { <br /> &nbsp;console.log(counter); <br />}</pre> |
| Parameter declaration | <pre>function incrementCounter(n) { <br /> &nbsp;counter += n; <br /> &nbsp;return counter; <br /> }</pre> | <pre>function incrementCounter(n: number): number { <br /> &nbsp;counter += n; <br /> &nbsp;return counter; <br /> }</pre> |
| Interfaces | N/A | <pre>interface FootballMatch { <br/>&nbsp;homeGoals: number; <br/>&nbsp;awayGoals: number; <br/>&nbsp;teamNames: string[]; <br/>&nbsp;isFullTime: boolean; <br/>}</pre> |
| Types | N/A | <pre>type FootballPosition = 'striker' <br/>&nbsp;&#124; 'midfielder' <br/>&nbsp;&#124; 'defender' <br/>&nbsp;&#124; 'goalkeeper'</pre> |
| Type Assertion | N/A | <pre>const substituteBench = [<br/>&nbsp;'goalkeeper', <br/>&nbsp;'defender', <br/>&nbsp;'defender', <br/>&nbsp;'midfielder', <br/>&nbsp;'midfielder', <br/>&nbsp;'striker' <br/>] as FootballPosition[]</pre> |

Produce a document which explains:

- How do each of these things work?
- How are they used in the Hangman project?

If you are a bit baffled by TypeScript, you might want to [try this 1 hour course](https://scrimba.com/learn/intrototypescript).

## Exercise 4: Check your understanding

> 🎯 **Success criterion:** a conversation with a Faculty member and amended comments.

Talk to a member of Faculty about your understanding of the game and of TypeScript.

Amend your notes for any important points that come out of the conversation.

## Exercise 5: Extend the game

> 🎯 **Success criterion:** a game which can be play-tested and which satisfies the specified requirements for each extension.

### Extension 1: Handle uppercase guesses

Try guessing an uppercase letter, an uppercase word or a word with a mixture of cases in it - the game probably doesn't behave how players would expect.

Produce some acceptance criteria for a fix, and then try to implement a fix to pass those acceptance criteria.

(Acceptance criteria are really helpful here because there are at least two fundamentally different ways you could handle the user inputting a guess in uppercase (or in a mixture of upper and lowercase): require them to try again with only lowercase, or process the uppercase in a sensible way.)

### Extension 2: Hangman animation

The game currently prints out a slightly boring 'Lives remaining' message. Extend the game to print unicode symbols such as hearts or stars indicating the number of lives remaining. As an example, a singular snowflake (❄) could be logged via `console.log("\u2744")`.

## Exercise 6: Commentary and reflection

**Success criterion:** documented reflections.
