JavaScript BootCamp Lite. Day 2.
--------------------------------
--------------------------------

Welcome to the day 2!

1. Boolean Logic
----------------
`if` statements that we discovered in the previous session were quite
simple. We only applied some very basic checks, like "do something if
number is greater than 5". Let's refresh our memory and look at a simple
`if` statement once again.

```
var waterTemp = 30;

if (waterTemp > 25) {
	console.log("Water is warm, let's go swim");
}

```

In the listing above we check if the water temperature is more than 
25 degrees and if it is, we print a message that water is warm and it is OK
to go and do some water sports.

Let's make this code a little bit more advanced by adding `else` statement:


```
var waterTemp = 30;

if (waterTemp > 25) {
	console.log("Water is warm, let's go swim");
} else {
	console.log("Water is too cold for swimming");
}
```

Now for every value of temperature which is less than 25 our code prints
"Water is too cold for swimming".

In the real life, however, there might be much more factors that contribute
to our decision. We might not go for swimming if the waves are too big. How to express that idea in the code?

Before answering that question, let's write this condition in plain English:
"If the water temperature is above 25 **AND** the waves are lower than one meter, we go swimming". I capitalized **AND** inentionally, in plain English we use this word to stress that **both** condition must be true to satisfy
our swimming preferences. 

JavaScript has an operator that expresses the same idea. It is called 
`logical and` and it is represented by two ampersands `&&` in the code. Let's
translate the same expression from English to JavaScript:


```
var waterTemp = 30;
var waveHeight = 0.8;

if (waterTemp > 25 && waveHeight < 1) {
	console.log("Good weather for swimming");
} else {
	console.log("Not a good time for swimming");
}
```

More formally, `&&` returns `true` if and only if both left and right 
parts are `true`. 

Try to experiment with this code. Change the `waveHeight` to `1.5` and see
how output changes. If at least one part of `&&` is `false`, the whole expression
becomes `false`.


Swimming in colder water might be also quite fun! And there are special 
swimsuites made for those who enjoy staying in the water at any weather.
That adds a whole different aspect to our decision making process. If we
have a wetsuit, we can swim in colder water. How to express this in English?

"I will go swimming if the water is warm enough **OR** if I got a wetsuite". 

This expression is different from the last one. This time, it is enough to
satisfy just one of two conditions to go swimming: either I have a wetsuite,
or the water is warm. Once again, there's an operator to express it JavaScript,
it is called `logical or` and it is represented by two vertical bars in code: `||`:

```
var waterTemp = 30;
var waveHeight = 0.8;
var gotWetsuite = true;

if (waterTemp > 25 || gotWetsuite) {
	console.log("Good weather for swimming");
} else {
	console.log("Not a good time for swimming");
}
```

More formally, `logical or` operator returns `true` if and only if at least one
of the operands is `true`. In other words, `||` returns `false` only when both 
left and right parts are `false`, all other combinations return `true`.

But wait! We forgot about waves. We don't want to swim in a storm in a wetsuite. 
Let's add the expression back:

```
if (waterTemp > 25 || gotWetsuite && waveHeight < 1) {
	console.log("Good weather for swimming");
} else {
	console.log("Not a good time for swimming");
}
```

This application will work, however the code is not perfect. First, it is hard
to read an expression, just too much information in one line. We could simplify
the code by adding two extra variables just to improve readability:

```
var isWarm = waterTemp > 25;
var isCalm = waveHeight < 1;

if (isWarm || gotWetsuite && isCalm) {
	console.log("Good weather for swimming");
} else {
	console.log("Not a good time for swimming");
}
```
Looks good? Well, not quite. It is completely unobvious how JavaScript will 
evaluate the expression

2. Loops
--------



[1]: http://nodejs.org/
[2]: http://sublimetext.com/3