# Map exercises

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

This project is all about comparing a TS programme to a JS programme, using [previous work on FizzBuzz in JavaScript as inspiration](https://github.com/WeAreAcademy/mark-fundamentals-proj--js-fizzbuzz).

## Learning Outcomes

- Pass a function expression into map
- Pass an arrow function into map
- Pass an anonymous arrow function into map
- Use map of signature `T[] -> T[]`, e.g. `string[] -> string[]`
- Use map of signature `T[] -> U[]`, e.g. `string[] -> number[]`
- Use map to transform objects
- Use map to return JSX (`T[] -> JSX.Element[]`)

## Exercise 0a: Vanilla `.map` with function expressions

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/vanilla/0-exercises`, using helper function expressions

The folder `src/vanilla/0-examples` has a few examples of `.map` (both tests and passing code, which you should review together).

MDN also has good [examples of the `.map` method on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#examples).

Use these to help you to write the code needed to pass the tests in `src/vanilla/0-exercises`, _in the same style as the examples_, i.e.:

1. Defining a separate helper function using a function expression
2. Passing that function expression to the array's `.map` method

You can use [Jest's options](https://jestjs.io/docs/en/cli) to [pass through a matcher/'regex'](https://jestjs.io/docs/en/cli#jest-regexfortestfiles) for specific files/folders of tests, for example:

- `yarn test double-numbers` will run all tests that match the `double-numbers` path (i.e. `src/vanilla/0-examples/0-double-numbers.test.ts`)
- `yarn test 0-exercises` will run all tests that match the `1-exercises` path (i.e. all `.test.ts` files which have the `src/vanilla/0-exercises` directory in their path)

## Exercise 0b: Vanilla `.map` with separate arrow functions

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/vanilla/0-exercises`, using helper arrow functions

The examples in `src/vanilla/0-examples` have some commented out code with some arrow function equivalents to the function expressions:

```ts
function doubleNumber(n: number): number {
  return n * 2;
}

// const doubleNumber = (n: number): number => n * 2;
```

Comment out the function expressions and de-comment the arrow functions - the tests with `yarn test 0-examples` should all still pass. (Instead of passing in a function expression, they're passing in an arrow function.)

See if you can refactor the code in `0-exercises` to use the arrow function syntax.

## Exercise 0c: Vanilla `.map` with explicitly typed anonymous arrow function callbacks

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/vanilla/0-exercises`, using anonymous arrow functions

The examples in `src/vanilla/0-examples` have some commented out code which uses in-line arrow functions:

```ts
function doubleNumbers(numbers: number[]): number[] {
  return numbers.map(doubleNumber);
}

...

// function doubleNumbers(numbers: number[]): number[] {
//   return numbers.map((n: number) => n * 2);
//   // return numbers.map((n) => n * 2)
// }
```

Comment out the first function expressions and de-comment the latter ones.

There _should_ still be one line still commented out - when you de-comment the function expression above, you should get the following:

```ts
function doubleNumbers(numbers: number[]): number[] {
  return numbers.map((n: number) => n * 2);
  // return numbers.map((n) => n * 2)
}
```

The relevant tests should still all pass. (Instead of passing in a reference to an arrow function to `.map`, you're passing in an in-line anonymous arrow function.)

See if you can refactor the code in `0-exercises` to use this in-line arrow function expression syntax.

## Exercise 0d: Vanilla `.map` with implicitly typed anonymous arrow function callbacks

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/vanilla/0-exercises`, using anonymous arrow functions

Currently, the examples in `src/vanilla/0-exercises` are using solutions like this:

```ts
function doubleNumbers(numbers: number[]): number[] {
  return numbers.map((n: number) => n * 2);
  // return numbers.map((n) => n * 2)
}
```

Comment out the first return and de-comment the first return.

```ts
function doubleNumbers(numbers: number[]): number[] {
  // return numbers.map((n: number) => n * 2);
  return numbers.map((n) => n * 2);
}
```

The relevant tests should all still pass - and _TypeScript won't complain_.

On strict mode, TypeScript _won't_ let us define the below function (try it):

```ts
const doubleNumber = (n) => n * 2;
```

but it happily accepts the anonymous arrow function `(n) => n * 2` inside `numbers.map`.

Why?

Hover over the `n` in VS Code, and you will see that TypeScript has typed `n` as `number`.

Essentially, this is because we've typed the `numbers` parameter as `number[]` - and, when we call `.map` on a `number[]`, TypeScript knows that we're iterating over `number`s, and so the anonymous callback function's first argument _has_ to be a `number`.

(In the `shout-strings` example, if you do the equivalent exploration, you'll see that TypeScript can infer that an anonymous arrow function passed to `.map` on a `string[]` has a `string` as its first argument.)

If you make the relevant changes to all the examples, the associated tests should all still pass.

See if you can refactor the code in `0-exercises` to use this in-line arrow function expression syntax with inferred typing.

## Exercise 1: Vanilla `.map`, transforming arrays of objects

> 🎯 **Success criteria:** Tests passing for all the exercises in `src/vanilla/1-exercises`, using anonymous arrow functions

The examples in `src/vanilla/1-examples` transform arrays of objects to other formats.

There are, again, exercises in `src/vanilla/1-exercises` for you to attempt.

## Exercise 2: `.map` in React

> 🎯 **Success criteria:** You can explain how to use `.map` in a React app

`src/react` has an example of using `.map` in React.

Try playing around with the code - see if you can break it, see if you can produce your own examples - to build your understanding of how `.map` can be useful in the context of React.
