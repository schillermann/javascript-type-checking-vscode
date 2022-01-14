# JavaScript Type Checking in VS Code Without TypeScript

For larger projects, static typing is a must have for good maintainability of the project.
One possibility is TypeScript from Microsoft.
However, this involves overhead. TypeScript is not a "standalone" language and always requires the TypeScript compiler to run the program.
This requires additional time to compile typescript into javascript for each code change.

The question is, whether this is the only way to get type checking support in for instance VS Code? No, the alternative is called JSDoc and it works very well.

Here some examples, how JSDoc can be used with type checking in VS Code.

## VS Code Implicit Type Check

In this [example](implicit-type-check.js), we give the new object a number instead of a name.
We can only recognize the error, if we move the mouse over the object.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/implicit-type-check-1.jpg" alt="Person Object Type Error" width="300">

But we want VS Code to underline the error in red.
To achieve this we have to search for implicit in VS Code under settings and enable it.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/implicit-type-check-2.jpg" alt="Enable Implicit Check JS" width="600">

After we have enabled the type check, we also get the error shown in red.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/implicit-type-check-3.jpg" alt="Person Object Type Error Details" width="400">

## Private Class Property
Here is an [example](class-private-properties.js) with a private class property with a static type.
The property name is underlined in red by VS Code, because a string type is expected here.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/class-private-property-1.jpg" alt="Private Class Property Error" width="260">

There is also a detailed error message when you mouse over.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/class-private-property-2.jpg" alt="Private Class Property Error Details" width="500">

## Interface

In this [example](class-interface.js) we have created an interface of the type DogInterface. the class GermanShepherd inherits from the interface. Now all methods of the interface and the class GermanShepherd are available in myDog variable. As soon as we call a method from the interface that has not yet been implemented, an error message is thrown at runtime. The error message allows us to see exactly where a method is still missing.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/class-interface-1.jpg" alt="Class Interface with available methods" width="400">

Next we create a dog school and give him an object from the class FakeDog. We can see that VS Code is complaining here.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/class-interface-2.jpg" alt="Class Interface Type Error" width="400">

If we move the mouse over the error, we see that an object with the DogInterface is expected here.
Only GermanShepherd can fulfill this in our example.

<img src="https://raw.githubusercontent.com/schillermann/javascript-type-checking-vscode/main/images/class-interface-3.jpg" alt="Class Interface Type Error Details" width="500">

## Conclusion
We could seen that it is possible to get type errors in VS Code without TypeScript.