JavaScript BootCamp Lite. Day 1.
--------------------------------
--------------------------------

1. Environment setup
--------------------
First component of our environment setup is NodeJS [http://nodejs.org/][1]. 
Download the installer from the website (the huge green button right in the
middle of a webpage does that).


Install node.js. Leave all installer defaults except for the installation path. It is better **not** to install node.js in `Program Files` in Windows, as this folder has special security restrictions. Moreover it has a space in the name which makes typing it in console and configs more problematic. To save yourself from trouble create a foler `c:\apps` and install node.js under `c:\apps\nodejs`.

To check if node.js installed correctly type 

```
> node --version
```

If everything's OK you should see the version number printed on the screen. If you see an error message instead, you might need to add the installation folder of Node to your PATH environment variable. If everything's working for you, feel free to skip the next section. Otherwise read on the troubleshooting guide.

*** 1.1. Troubleshooting Node.js installation ***
If you see a message like `node is not recognized as internal or external command` (Windows) or `command not found` (MacOS) that probably means that `PATH` variable was not successfully updated during the installation, so you'll have to do it manually.

To set `PATH` under Windows:

1. Right click `My Computer` then select `Properties` from the context menu
2. In the window that opens click `Advanced System Settings`
3. In the next window click `Environment Variables`. You'll see the window with the list of environment variables.
5. Find a variable called `PATH` in the list of user variables, or create one if it is not there. 
6. If there was a value already, put the semicolon (;) after it and insert the full path to the folder where you installed node. If the value was empty or you creating a new variable, then simply put the path to node.js folder there.

// TODO: setting PATH to node in Linux


2. Hello World
--------------
Now that we have node.js installed it is a great time to write our 
first program. According to the tradition, it is a program that 
prints text "Hello World" to the console.

Create a new text file, call it `main.js` and type the following code inside:

```
console.log("Hello World");
```

Now, save the file, open command prompt and navigate to the folder where you 
saved it. 
Type
```
> node main
```
Once you hit `Enter`, the first greeting should appear on the screen!

> **NOTE:** it is a good idea to save your source code in a folder 
> that is easy to navigate to. In windows my favorite folder for 
> sources is `c:\dev`. On MacOs I use `~/dev`. Choose whatever name looks good
> to you and keep your projects organized in that folder.


3. Installing Sublime Text
--------------------------

Install `Sublime Text` from [http://sublimetext.com/3][2]. The default installation options work fine.

In Sublime Text choose `Tools -> Build System -> New Build System`. Sublime text will open a fresh build system file. Change the contents as follows:

```
{
	"cmd": ["node", "$file"]
}
```

Now save the file in the default location under name `node.sublime-build`.

Open the `Tools->Build System` menu again and select `node` as a build system.

Now in any JavaScript file you can click `Ctrl+B` (or Command+B on Mac) and node.js will execute that file. Try that now with the hello world example!


4. Variables
------------
Variables allow to store some data in memory and then use it later in the other parts of your program. 

In JavaScript you create new variables using keyword `var`. Here's an example:

```
var a = "Hello";
var b = 20;

console.log(a, b);
```

In this listing we've created two variables. Variable `a` holds text `"Hello"`, 
and variable b holds number `20`. In the last line we print values of both variables
to the console.

Variable can change its value during the execution of a program. 

```
var a = 10;

console.log("a is", a);	

a = 20;

console.log("and now a is", a);
```

This program prints

```
a is 10
and now a is 20
```

> **NOTE:** if you assign a new value to an existing variable there's no need 
> to use `var` again. You only use `var` when you first _define_ the
> variable.


4. Variable types
-----------------
You noticed alredy that JavaSript variables can store different kinds of information. 
We've seen how to save number and text to a variable:

```
var a = 10;
var b = "Hello";
```

The kind of information that is stored in a variable is known as its *data type*. Or
simply the *type* of variable. In the example above the type of `a` is `Number` and
type of `b` is `String`.  `String` is a standard type for working with text. 

There's an easy way to find what's the type of a variable. Use `typeof` operator for that:

```
var a = 10;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);
```
This program prints

```
Number
String
```

In JavaScript there are 6 data types:

* Number
* String
* Boolean
* Object
* Null
* Undefined

> **NOTE:** For now we'll be working with first three data types
> `Number`, `String` and `Boolean`. We'll leave the other four
> 'till later.


5. Numbers
----------
`Number` is a type to hold numbers (sure, you did not expect that). There are many ways to express a number in JavaScript. Here are some:

```
var a = -12.8;	// Normal, decimal
var b = 0xFF;	// Hexadecimal
var c = 5e10;	// Scientific or exponential, rarely used
```

In JavaScript there's no difference between kinds of numbers: both floating point and integer, signed and unsigned are treated as a type `Number`.

### 4.1. Operations with numbers ###
Common sense and normal logic are widely applied to operations with numbers. 

```
var a = 5.2 + 0.2;	// Addition, result is 5.4
var b = 4 - 7;		// Subtraction, result is -3
var c = 2*2;		// Multiplication, result is 4
var d = 10/3;		// Division, result is 3.33333(3)
```
There's also a `Remainder` operator that returns the remainder of division:

```
var z = 5%2; 	// z is now 1, because the remainder
				// of an integer division is 1
```

5. Strings
----------
String is a data type to store text. For example, here's how I would store a book title as a string:

```
var title = 'The Time Machine';
```

There are two ways to create a string: using single quotation marks or double quotation marks:

```
var a = "This is a string";
var b = 'This is also a string';
```

There's no difference between two representations, choose which one you like better, and stick to that. 

If you used single quotation marks then double quotes can be used as a normal character, and vice versa:

```
var textA = 'I like "The Time Machine" - fiction classics';
var textB = "I'm quite anxious to buy a new watches";
```

JavaScript strings can have international symbols in it, so you should not worry about Russian or Chinese:

```
var textA = 'Русский текст будет работать';
var textB = '强烈热带气旋乔伊';
```


6. Booleans
-----------
`Boolean` is the type that can have just two values: `true` or `false`. It is often
used to answer a yes/no question. For example, to answer a question "is there sugar in my coffee" I can create a variable and assign value `true` to it, meaning `yes`.

```
var coffeeHasSugar = true;
```
The opposite of `true` is `false`, meaning `no`. 

For example, here's a variable `preferDecaf` that is initialized to boolean `false`

```
var preferDecaf = false;
```

TASK
----

Create five variables to store information about your favorite 
book. Think, what will be the types of those variables. Assign proper 
values to each variable and then check their types with the help of 
`typeof` operator.

* bookTitle
* authorName
* numberOfPages
* isFiction
* publishingYear


8. If statement
---------------
`if` - is basic conditonal statement that selects the block of code to execute. 

```
var coffeeHasSugar = true;
if (coffeeHasSugar) {
	console.log("You like sweet coffee.");
}
console.log("We have some!");
```

The `if` block in the code above will first check the value of `coffeeHasSugar` variable. If the value is `true`, then it will execute the code between curly braces.`coffeeHasSugar` is indeed `true` so the code prints both lines:

```
You like sweet coffee.
We have some!
```

Try changing the variable value to `false` and see what happens. Only the second line will appear in the console. 

Let's make this program a bit more advanced and print "you like" message for both cases: when `coffeeHasSugar` is `true` and when it is `false`. Do do that we'll use `if-else`:

```
var coffeeHasSugar = false;
if (coffeeHasSugar) {
	console.log("You like sweet coffee.");
} else {
	console.log("You like bitter coffee.");
}
console.log("We have some!");
```

The new `else` block executes only when the *condition* is `false` (the code between parentheses in `if` is called a *condition*). The code above prints:

```
console.log("You like bitter coffee.");
console.log("We have some!");
```

9. Comparing values
-------------------

`if` statement can be much more useful once you know how to compare numbers and strings! In JavaScript there is a number of `comparison` operators that compare values. It is fairly easy to check if two numbers or strings are the same, one is bigger than the other or smaller than the other.

Comparison operators produce `Boolean` values, exactly what we need to use with `if`!

Here's few examples:

```
console.log(10 < 20);	// 'ten is less than 20' prints true
console.log(10 > 20);	// 'ten is more than 20' prints false
console.log(10 <= 10);	// 'ten is less than or equal to ten' prints true
console.log(10 >= 5);	// 'ten is more than or equal to ten' prints true
console.log(10 == 10);	// 'ten is equal to ten' true
console.log(10 != 10);	// 'ten is *not* equal to ten' false

```

Comparison operators work with any data types! You can compare Strings and
even Booleans the same way you compare numbers.

```
console.log('abc' == "abc");	// true, string declaration style doesn't matter
console.log('ABC' == 'abc');	// false, string case matters

```

You can also perform 'less than' and 'greater than' checks for strings, even though
it is mostly required when you want to sort something in alphabetical order.

```
console.log('a' < 'b');		// true
console.log('aa' > 'b');	// false, compares like a phonebooks, 
							// so 'aa' comes before 'b'
```

The result of any comparison can be saved in a variable:

```
var numberOfCups = 5;
var isEnoughCoffee = numberOfCups > 2; // assign the result of comparison to var

console.log(typeof isEnoughCoffee, 	   // prints 'boolean false'
		isEnoughCoffee); 
```

Obviously, the type of the result is always boolean.

## Using Comparison in `if`

## Assignment vs comparison ##

It is very important to understand the difference between
assignment operator (`=`) and comparison operator (`==`). 

The first  one assigns the value from the right part to the 
variable at the left part. 

```
var a = 10;
a = 5 + 3; 
```

The *result* of assignment is the value that has been assigned:

```
var a = 10;
var b = a = 5; 
```

In line the code above JavaScript first executes `a = 5`. The result of this 
operator is `5` (because that's the value that has been writted to a).
Next, this value is assigned to `b`.

The comparison operator (`==`) checks if the values on the left and on the right are the same. 
It does not *change* the variables. The result, as we mentioned before is `true` or `false`
depending on whether the values are same indeed.

```
var a = 10;
var b = a == 15; // b is now false
```

Now a quick test for you. What will be the values of `c` and `d`?

```
var a = true;
var b = false;
var c = a = b;
var d = a == b;
console.log(c, d);
```

Try to figure out the answer without running the code, then run it and see if you were right. Don't read the explanation before you try!

Here's how the code is executed:
```
var a = true;		
var b = false;
var c = a = b;		// a gets the value of b (false), then the same
					// value is assigned to c. So c now is also false

var d = a == b;		// a == b, they both are false. Comparison returns true, 
					// value true is assigned to d. 

console.log(c, d);  // This code is printing false true
```


TASK
----

Write a program that prints the book recommendations. The program should read a value from variable `genre` print the recommended book:

* for 'fiction' the program prints 'I Robot' 
* for 'novel' it prints 'Pride and Prejudice'
* for 'biography' it prints 'The Twelve Caesars'
* for all other values it prints 'Introduction to Quantum Mechanics'



[1]: http://nodejs.org/
[2]: http://sublimetext.com/3