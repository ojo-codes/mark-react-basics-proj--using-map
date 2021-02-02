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

# TS FizzBuzz

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

This project is all about comparing a TS programme to a JS programme, using [previous work on FizzBuzz in JavaScript as inspiration](https://github.com/WeAreAcademy/mark-fundamentals-proj--js-fizzbuzz).

## Learning Outcomes

- Annotate the type of a function's parameter(s)
- Annotate the return type of a function

## Exercise 0: Cloning, inspecting code and running tests

> 🎯 **Success criterion:** you have all tests passing on your local machine

Whilst this may not be explicitly spelled out in future projects, this is a pretty good way to begin orienting yourself in an unknown codebase.

```bash
cd ~/Academy/Mark
git clone https://github.com/WeAreAcademy/mark-fundamentals-proj--ts-fizzbuzz
cd mark-fundamentals-proj--ts-fizzbuzz
yarn # install dependencies
yarn test # run tests
```

## Exercise 1: Understanding the extra TypeScript parts

> 🎯 **Success criterion:** you can explain all the additional TypeScript syntax in `fizzbuzz.ts` (relative to its JavaScript equivalent)

Have a look at the code in `src/fizzbuzz.ts`. You'll see it looks _pretty similar_ to code that you've seen before in our JavaScript fizzbuzz solution, just with some extra parts.

We'll try to understand this by looking at a few examples (not from this codebase).

### Annotating function parameters

Consider the below function:

```js
function findLowestCommonMultiple(numOne, numTwo) {
  // details omitted - unimportant
  ...
  return lowestCommonMultiple // assume we declared and found this above
}
```

It looks like this function is intended to find and return the [lowest common multiple](https://www.bbc.co.uk/bitesize/guides/z9hb97h/revision/5) of two numbers, for example:

```js
// some cases we might test
findLowestCommonMultiple(3, 5); // => 15
findLowestCommonMultiple(3, 6); // => 6
findLowestCommonMultiple(6, 15); // => 30
```

but what should our function return in the following cases?

```js
// some, uh, weird cases
findLowestCommonMultiple(true, 12); // => ???
findLowestCommonMultiple("me", "you", "blue"); // => ???
findLowestCommonMultiple({ firstName: "Richard", lastName: "Ng" }); // => ???
```

These would all be _really silly things_ to run. It simply doesn't make sense to ask for the lowest common multiple of `"me"`, `"you"` and `"blue"`.

But... JavaScript will let you run this.

There's an example you can check out in `src/examples/lcm.js`, and run with `yarn start:lcm:js` (check out `package.json` scripts for details).

If you run it, you'll actually get trapped in an infinite `while` loop - exit out of this with `Ctrl + C` in your terminal where it's running.

On the other hand, consider the below TypeScript type annotations:

```ts
function findLowestCommonMultiple(numOne: number, numTwo: number) {
  // details omitted - unimportant
  ...
  return lowestCommonMultiple // assume we declared and found this above
}
```

This adds in some type restrictions: both `numOne` and `numTwo` need to be numbers - and TypeScript won't let us compile it (and therefore blocks us from running it) if we pass in different types.

```ts
findLowestCommonMultiple(true, 12); // Argument of type 'boolean' is not assignable to parameter of type 'number'.
```

You can check out this example at `src/examples/lcm.ts`, and run it with `yarn start:lcm:ts` (again, see `package.json` for details).

**Try un-commenting the silly examples** - you'll see (in VS Code) that TypeScript errors get underlined, and that we're blocked from running `yarn start:lcm:ts` (which is saving us from silly output).

We suggest you play around with the code and try to test the TypeScript compiler / error checker. (You'll notice that a single line can have multiple problems with it - both the number of arguments, as well as their types - which all need fixing before the line is permissible.)
