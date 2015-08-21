JavaScript BootCamp Lite. Day 4.
--------------------------------
--------------------------------

1. Why converting types?
------------------------
In JavaScript you do not declare types of variables explicitly. You only use `var` keyword and JavaScript decides what will be the type. Moreover, in JavaScript a variable can change its type on the go. It might start as a number and later become a string or an object.

What happens when you use one data type in a place where the other one is expected? How will JavaScript deal with operators that involve two different data types?

```
function avg(a, b) {
	return (a + b)/2;
}
console.log(avg(10, 20)); // prints 15
console.log(avg(0, 1)); // prints 0.5

```
As you see, while you pass number to a function, it gives back the
expected results. Things start to change quickly once function receives
strings instead of numbers. Even the fact that the strings contain 
numbers inside doesn't help much:

```
console.log(avg("10", "20")); 	// prints 510
console.log(avg("0", "1"));		// prints 0.5
```

Even though, the second line printed the right value it is more of
a coincedence rather than expected behavior. Let's look under the hood
and try to understand what just happened in this code.

To do that, let's substitute the parameter values to the function body.
What we then get is:

```
return ("10" + "20")/2;
```

The first operation that JavaScript executes is addition
because it is surrounded by parentheses (also known as "grouping operator"). Both left and right part are strings, and for strings
addition works as *concatenation* - joining the strings together.
The result of this operation is "1020", and the expression now looks
as "1020"/2.

Now, we are facing a `division` operator that works _only_ with numbers.
Since left operand is a `string`, JavaScript transforms that string 
to number 1020 and divides that by 2. Result is 510. Way too far from the average of `5` and `10`.

> **NOTE:** The operation of transforming one type to the other 
> is known as _type casting_ or _coercion_.

Why the second case worked then? Follow the same logic and you'll see that
the expression that JavaScript will have to deal with is "01"/2. Obviously, when casting to number a trailing zero is dropped and the final expression is 1/2, which is strangely enough, exactly the same
as (0 + 1) / 2.

These kind of situatoins happen quite often in web when you deal with 
user input or with the data received from server. Whenever a user
is filling a form on a page, he's typing a _text_. Even if that _text_ has
only digits inside it is still a _text_ and you have to
take special care to transform it to `number` if you plan to do math with
such argument.

Transforming values from one data type to the other is known as _type casting_. 

In JavaScript there are 6 data types, and we've seen four so far:
- string
- number
- boolean
- object
- null (haven't seen yet)
- undefined (haven't seen yet)

It only makes sense to cast variables to first three types: `string`, `number` and `boolean`. As you'll see a little later casting things
to `object`, `null` and `undefined` doesn't have any sense.

In the rest of this chapter we will speak about the details of type casting.

2. Detecting a type
-------------------
Detecting types in JavaScript is easy, most of the times `typeof` operator will give you the right answer:

```
console.log(typeof 'Hello'); 	// string
console.log(typeof 1);			// number
console.log(typeof false);		// boolean
console.log(typeof {});			// object
```
There are two noticeable exceptions that rarely affect your programs: 
1. `null` is reported as `object` for legacy reasons. In reality, 
`null` is a separate data type.
2. All functions reported as a `'function'` while the right data type
would be `'object'`.

Both differences are more of an academical interest, and second point
is actually useful. 

Knowing that it is easy to build type checking code for your function:

```
function avg(a, b) {
	if (typeof a == 'string') {
		// do something
	} else if (typeof a == 'number') {
		// do something else
	}

	...
}
```

Now that you can determine the type of a variable we will learn how
to convert it to whatever your function expects.

3. Converting to Boolean
------------------------

Conversion to `boolean` happens when JavaScript expects boolean value and finds something else. The usual case is 'if' block:

```
if (value) {
	
}
```
If value is not boolean, JavaScript VM will coerce it to `boolean`. Here are the rules:

Any number except for `0`, and special value `NaN` is true.

```
if (5) {
	console.log('true');
} else {
	console.log('false');
}
```
> **NOTE:** `NaN` is _Not a Number_, a special value that you 
> get as a result of illegal mathematical operation. 
> For example `0/0` is `NaN`. 

The code above prints `true`, but if you replace `5` with `0` it 
will print `false`.

If a value is a `string`, then any string except for zero-length string is `true`:

```
if ('Hello') {
	console.log('true');
} else {
	console.log('false');
}
```

An important case that is worth mentioning. A string that contains `'0'` 
will not be coerced to `number` first. So while `0` as Number is `false`, 
`'0'` as a `string` is `true`. Same for string `'false'`. Even though it says 'false', its coerced boolean value is true, since it is **not**
 an empty string.

Both null and undefined are `false`. No surprises here.

All objects are `true`, no matter if there are any defined properties. Since an array is a special type of object, empty array is also `true`.

This means that if you want to quickly check if a value has a non-zero, non-empty and non-null value, you can simply write:

if (value) {
	// do something
}

Sometimes you need to force cast to boolean, without waiting for JavaScript to do it. There are two ways to do that. First is to call a function called `Boolean` (starts from an upper-case letter)

```
Boolean(value)
```

This method is rarely used even though it is quite explicit. In practice most people prefer a shorthand, putting two boolean NOT operators before the value:

```
!!value
```

What this code does? The first exclamation mark is boolean `not`. To 
apply this operator to the value, JavaScript runtime needs to cast 
`value` to boolean. This is done according to the rules above. 
Since `not` will revert the value of operand, you need to apply 
another `not` to bring it back. Here's an example: boolean for `1` 
is true. `!1` is false, and `!!1` is `!false`, meaning - `true`.


2. Conversion to String
-----------------------

Conversion to string is very simple. `null` becomes string `'null'`,
 same for `undefined` and `boolean` values. Number is rendered as a string also without big surprises. As for objects, by default 
 JavaScript will print something like this:

```
[object Object]
```

There is a way to change this default behavior that we'll learn later. 

To force conversion to string you can use a function or a shortcut,
just like with other types. Here's a function example:

```
var value = String(12); // results in string '12'
```

The shorter and much more popular way to achieve the same result 
is a concatenation expression: 

```
'' + value
```

Empty string will not change the result, because it is empty. However  JavaScript will need to cast value to string to perform a concatenation 
which is just what we want.


4. Conversion to Number
-----------------------

Conversion to number is usually happening when you need to perform 
a mathematical operation like subtraction or multiplication. 

String is converted to number using the rules of common sense. 
Of course the exact rules are defined in ECMA specification, 
but for now it is OK to treat is as a rules of common sense.

```
'24'*2
```

Note that if string is not a number, the result of such conversion 
is `NaN` - Not a Number, and any operation with `NaN` 
results in `NaN`.

```
'two dogs'*2 // NaN
```

In this example, `'two dogs'` is converted to `NaN`, then `NaN`
 multiplied by two is still `NaN`. So the overall result of an 
 expression is `NaN`.

The grammar that defines string-to-number conversions permits 
white spaces around a number as well as hexidecimal values. 
So the example below will work:

```
' 0xFF '*2 
```

and result is 30

Empty string is considered to be zero.

For boolean values it is trivial. `false` is `0`, `true` is `1`.

`undefined` gets translated to `NaN`, while `null` is `0`.

Converting object to number does not usually make sense and will result in `NaN`. There is a way to make object produce meaningful number 
conversion, but this is an advanced subject and is outside of the scope
of this course. 

To force conversion to number, you can use function `Number` (notice the upper case):

```
Number('12')
```

or force a conversion by adding unary plus before the value:

```
var numValue = +value;
```

there are two more convenience functions that allow parsing strings 
that _start_ with the number. This is often useful when you need to 
parse a string with measurement units:

```
parseInt('12.57 dogs');	 // results - 12
parseFloat('12.57 dogs') // results - 12.57
```

5. Functions as objects
-----------------------
Functions in JavaScript are special kind of objects. This is 
a very important fact that lays the ground for many typical 
JavaScript code patterns.

Everything that you can do with the object can also be done
with the function. Let's illustrate this behavior with few
examples. First, let's declare a function:

```
function average(a, b) {
	return (a + b)/2;
}
```

Since function is an object, you can add properties to it:

```
average.greeting = 'Hello World';
average.numTimesCalled = 0;
```

The properties that you add this way can later be used like
usual object properties:

```
console.log(average.greeting); 	// prints "Hello World"
```

You can even use properties of a function from within the 
function itself. For example, the code below keeps track on
how many times the function was called:

```
function average(a, b) {
	average.numTimesCalled++;
	console.log("Function is called", average.numTimesCalled,
		"time(s).");
	return (a + b)/2;
}
```

Just like an object, a function can be assigned to the other
variable, and then _that_ variable becomes a function too:

```
var avg = average; 			// avg is shorter to write
console.log(avg(10, 20));	// prints 15
```

You can do the same with the existing functions:

```
var print = console.log;
print('Hello');
```

In the listing above we create a variable `print` and assign
a function `log` from object `console` to it. Now we can use
`print`, because it refers the _same_ function as `console`.

It is important to notice a difference between a function _call_ 
and _referening_ a function. To call a function, you add parentheses
after its name (you might pass some parameters too).

To _refer_ the function (to use the function as an object), you
_don't_ write parentheses after the name. Here's this idea illustrated:

```
function one() {
	returns 1;
}

console.log(typeof one);	// function, referred as object
console.log(typeof one());	// number, the return value 
```

6. Reading user input in Node.js 
--------------------------------

Now that we've learned more about how functions work, we're ready
to add some more action to our code! Let's add some interactivity
to our programs by allowing user to enter values from the console.

To do that, we will use a global object `process` that is available
to all Node.js applications.

> **NOTE:** process is not a standard JavaScript object, it is
> specific to Node.js. If you try to use it in a browser you
> will get an error.

The first thing to do, is to tell node.js that we are waiting for
the console input form a user, and that the input will be a text
in UTF-8 encoding. To do that, write:

```
process.stdin.setEncoding('utf-8');
process.stdin.resume();
```

If you run the program now, you'll see that it doesn't complete the 
execution, but stays open. You can try to type something, and you'll
see that the characters appear on the screen.

Now we need to get those input from the user and do something with it
in our program. To do that we need to register an _event listener_ -
a function that is called by node.js runtime when there's new input
to read.

First, let's create that function:

```
function onInput(input) {
	console.log(input);
}
```

This function simply prints the input back to the user. The last line
would register the input as an event listener:

```
process.stdin.on('data', onInput);
```

Notice that we _refer_ a function, not _calling_ it. The complete
code of our program should now look like this:

```
process.stdin.setEncoding('utf-8');
process.stdin.resume();
process.stdin.on('data', onInput);

function onInput(input) {
	console.log(input);
}
```

Run the program and try to type few phrases. Once you hit `return`
you'll see that your text immediately duplicated on the screen. This
is exactly what our `onInput()` does.

7. First command
----------------
// TODO
// Explain how to parse the 'exit' command and how to trim a 
// text to get the 'normalized' input

8. Saving useful data
---------------------
// TODO
// explain how to read book title from console and store it
// in a variable

9. Program state
----------------
// TODO
// Explain how to track program state and read more values

10. Checking errors
-------------------
// TODO
// Explain how to validate input and print feedback

11. Home assignment
-------------------
// TODO
Complete the program that stores the data about your favorite book (band, game, etc). Write the code that reads at least 5 parameters describing your favorite item. Make sure that a user receives an instruction, what exactly should be entered on each step. Once all parameters are added, print the item using the function from the previous home assignment. Make sure that your favourite item has at least one nested object, and at least one type of data that we studied so far (number, boolean, string). 

Make sure you check the invalid input and ask user to re-enter the data! Try to make your program “industrial grade” - as friendly and helping as possible.

To complete the task you will have to use internet and MDN to search some more information about JavaScript. For example, it is left to you to figure out how to check that the number is invalid, and cannot be parsed as a number. 

Use creativity! 

The emphasis of this task is organising your code and working with a bit bigger sources. Write the code in a way that it is readable by your teammates!

Here is an example session of a program:

```
   ========================
   = Welcome to Book Worm =
   ========================
(input 'exit' at any time to quit)

What is the title of your favorite book?
> The Time Machine

What is a genre of the book?
> Fiction

How many pages does it have?
> qq

Error, qq is not a number
How many pages does it have?
>

Error, you did not enter anything!
How many pages does it have?
> 0
Book with no pages? Don't think so!

How many pages does it have?
> 12

What is the name of the author?
> Herbert Wells

Where he lived?
> England

Thank you! 
Your favorite book is "The Time Machine" by Herbert Wells (England). This book has 12 pages. Type 'exit' to quit or 'again' to enter the data again.

> exit

bye!
```
