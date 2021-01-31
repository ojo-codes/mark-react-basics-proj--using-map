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

# JS FizzBuzz

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

This project is all about setting up your machine for JavaScript programmes, using our previous work on FizzBuzz as inspiration.

## Learning Outcomes

- Install `npm` dependencies with `yarn`
- Run a script with `yarn`
- Write tests in JavaScript with Jest
- Declare a variable in JavaScript with `let`
- Write a function with a function expression in JavaScript
- Write an `if`/`else` statement in JavaScript
- Write a `for` loop in JavaScript

## Exercise -1: Preparing to run JavaScript projects on your machine

> 🎯 **Success criterion:** you can verify that you have `nvm` and `yarn` installed, and you can open up a JavaScript console in the terminal with `node`

### Installing `node` via `nvm`

JavaScript [originated as a browser-based language](https://www.springboard.com/blog/history-of-javascript), but it can also now be run outside browsers as a backend (server-side) language, most popularly through the [Node.js](https://nodejs.dev/learn/a-brief-history-of-nodejs) environment.

Whilst we could run JavaScript just in the browser, in order to explore the full power of modern JavaScript (and, soon, TypeScript) we'll be using Node.js to run JavaScript e.g. through our terminals.

Node.js comes in different versions - so we'll use something called Node Version Manager (or `nvm`), because this will make it easier for us to switch between Node.js versions if we want to later.

[Here's the `nvm` documentation](https://github.com/nvm-sh/nvm). It has instructions on installation, verifying installation and troubleshooting common problems. Note: you may need to restart your terminal in order to use `nvm` / verify that it is installed.

Once you've installed `nvm` (and verified its installation), [follow the `nvm` docs on installing the latest version of Node.js](https://github.com/nvm-sh/nvm#usage).

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

### Installing `yarn`

The JavaScript ecosystem has lots of pre-written 'libraries' of code that we can plug into, like [React](https://reactjs.org/) (which we'll use in a later week).

We'll need a way to grab the code of these libraries (or 'install' them).

There are two common 'package managers' used in the JavaScript ecosystem:

- `npm`, automatically bundled with `node`;
- `yarn`, an alternative to `npm` [built and open-sourced by Facebook](https://engineering.fb.com/2016/10/11/web/yarn-a-new-package-manager-for-javascript/)

All our examples will use `yarn` commands (on the basis that the commands are slightly more concise and [it benchmarks slightly better in speed](https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet)), but there are [equivalent `npm` commands](https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet) for everything.

Because `yarn` isn't bundled with `node` by default, we'll have to install it... ironically, therefore, we'll be installing it using `npm`!

Look at [the Yarn docs on installation here](https://classic.yarnpkg.com/en/docs/install/), and follow the docs to verify that you have successfully installed it.

## Exercise 0: Installing and running your first JavaScript project

> 🎯 **Success criterion:** you are able to run the tests for this project locally and see the output in your terminal (hopefully all passing tests!).

This repository contains a JavaScript project written following TDD principles.

To start with, we'll clone the repository and run the existing tests to check the existing state of the code.

### Clone and inspect the repository

Let's clone the repository:

```bash
cd ~/Developer/Academy # or wherever you're storing Academy repos
git clone https://github.com/WeAreAcademy/mark-fundamentals-proj--js-fizzbuzz.git
```

and now note a few files:

- `yarn.lock` - let's ignore this for now
- `fizzbuzz.js` - this has our main code
- `fizzbuzz.spec.js` - this has our tests
- `package.json` - let's look at this now!

### Reading `package.json`

`package.json` is a file which sits in the root folder of most JavaScript/TypeScript projects.

It has different fields - which you can [read about in more detail in the `npm` docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) - but two will be of particular interest to us in this project: `scripts` and `dependencies`.

We'll come back to `scripts` later in this project. For now, if you look at `dependencies`, you will see that there is one direct _dependency_ listed: `jest`, a [JavaScript testing library](https://jestjs.io/) (which, as it happens, has also been open-sourced by Facebook).

(The `"^26.6.3"` tells us about which versions of Jest are consistent with the project. Don't worry too much about that right now.)

> ⚠️ Normally, we would see `jest` under `devDependencies`, but we'll learn about why in another project.

### Installing the dependencies

To install all dependencies required for the project, ensure that you are in the same directory as the project's `package.json`, and run the following command.

```bash
yarn # this is equivalent to npm install
```

After this finishes running, you will see a `node_modules` folder appear as a subdirectory... _and it's pretty big_.

It has a bunch of its own subdirectories, including:

- `import-local`
- `pkg-dir`
- `find-up`

Where did they all come from? What does it mean?

### Tracing the dependency tree

`node_modules` holds all the code of libraries that we need for this JavaScript project (outside of the code which we write ourselves).

This includes both _direct dependencies_ and _indirect dependencies_.

If you scour the `node_modules` folder, you'll see a `jest` folder - let's take a look at that.

The `node_modules/jest` folder has its _own_ `package.json`. It has more fields than what is in our project's root `package.json`, but some shared ones - in particular, _`jest` has its own dependencies_:

- `@jest/core`
- `import-local`
- `jest-cli`

These aren't direct dependencies of our root project - but, as dependencies of a direct dependency (`jest`), they are _indirect_ dependencies.

This means that you will be able to find another folder, `node_modules/import-local` - which, again, has its own `package.json`, and its own dependencies, e.g. `pkg-dir`, which has its own dependencies...

It's by tracing out this dependency tree that we end up with the huge massive `node_modules` folder. (This is a bit of a meme in JavaScript-land - you can use your favourite search engine and look at "node modules meme"...)

Now that you have installed the dependencies, you'll be able to run the following command to execute the project tests:

```bash
yarn test
```

You'll see `jest` pop up in the terminal, followed by the test output. Congratulations, you've run your first JavaScript tests!

### Returning to `scripts` in `package.json`

The reason why `jest` pops up goes back to our `scripts` in `package.json` - you'll see that we have a script called `test` which is set to `"jest"`.

Try replacing `"jest"` with `"pwd"`, then execute `yarn test` again. You'll see that it prints your working directory.

Now, try replacing `"test"` with `"pick-avocados"` (a deliberately silly name chosen for demonstration purposes).

When you try to run `yarn test`, you'll see that it'll tell you that it can't find the command - but `yarn pick-avocados` will execute the `pwd` command and print your working directory.

We won't often be adding to our `scripts`, but it's helpful to understand what's going on when we run a command like `yarn test` - it does what we specified in our `package.json`.

Finally, let's revert to `"test": "jest"` as we had before, and confirm that this work with another `yarn test`.

## Exercise 1: Reading, understanding and documenting

> 🎯 **Success criterion:** a document which outlines your understanding so far of how this JavaScript programme works. You don't have to achieve a theory which explains 100%, but you should strive to explain as much as possible.

(N.B.: The _correctness_ of your theory is **much less important** than the _process_ of forming this document. [Forming a prediction, and then discovering it was wrong, is an effective way to learn](https://www.sciencedirect.com/science/article/abs/pii/S0959475217303468)!)

We think that you will be able to work out lots about JavaScript just by bringing in your existing ideas from Python, although you might want to look at some of the following readings for specific things:

- [JavaScript variables](https://javascript.info/variables)
- [JavaScript `for` loops](https://www.programiz.com/javascript/for-loop)

As a _learning exercise_ in reading and thinking about code, here are some steps that we _suggest_ (not as a strict sequential ordering):

### a) Take some time to read and digest the code.

Focus on forming a theory about how the programme is meant to work, through the lens of _ideas_ rather than the _syntax_.

You won't understand everything straight away. That's okay! It is a different syntax to Python. However, the _ideas_ are very similar.

### b) Add comments for the parts you understand.

At this point in time, you're trying to make sense of the code, and hold a lot of things together in your head.

It will help your learning to take some of those things out of your head and put them down in writing, so we suggest that you begin documenting your understanding of the code by adding comments that explain what is happening.

For example, here is how you might try to document your understanding of a line of code within a function:

```js
function printGreeting(name) {
  /**
   * I think console.log is printing
   *  out the message we pass to it.
   *  This message comes from joining
   *  together three parts into a single
   *  combined message.
   */
  console.log("Hi there, " + name + "!");
}
```

... but you have the freedom to document in whatever way seems helpful or sensible to you.

(Unsure of the syntax for adding comments in JavaScript? Google it!)

_(N.B. This documenting exercise is suggested as a learning tool rather than a production codebase best practice.)_

### c) Google things you don't understand.

We expect that there are things in the code which you won't immediately fathom (e.g. `Object.values).

Google them and see if you can make sense of them!

### d) Experiment with changing things.

A great way to test your understanding of things is to experiment, change things, and see what breaks.

Things you might try doing:

- You have a theory about a variable - try doing a `console.log` of it to get some _visibility_ on its value
- You have a theory about the flow of a function - try moving things around inside it and see whether it breaks as you expect

## Exercise 2: JavaScript-specific notes

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
