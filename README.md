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
![Person object with wrong argument type](/images/implicit-type-check-1.jpg)

But we want VS Code to underline the error in red.
To achieve this we have to search for implicit in VS Code under settings and enable it.
![Enable implicit check js](/images/implicit-type-check-2.jpg)

After we have enabled the type check, we also get the error shown in red.
![Enable implicit check js](/images/implicit-type-check-3.jpg)

## Private Class Property
Here is an [example](class-private-properties.js) with a private class property with a static type.
The property name is underlined in red by VS Code, because a string type is expected here.
![Private Class Property Error](/images/class-private-property-1.jpg)

There is also a detailed error message when you mouse over.
![Private Class Property Error Details](/images/class-private-property-2.jpg)

## Interface

In this [example](class-interface.js) we have created an interface of the type DogInterface. the class GermanShepherd inherits from the interface. Now all methods of the interface and the class GermanShepherd are available in myDog variable. As soon as we call a method from the interface that has not yet been implemented, an error message is thrown at runtime. The error message allows us to see exactly where a method is still missing. 
![Class Interface offered methods](/images/class-interface-1.jpg)

Next we create a dog school and give him an object from the class FakeDog. We can see that VS Code is complaining here.
![Class Interface Type Error](/images/class-interface-2.jpg)

If we move the mouse over the error, we see that an object with the DogInterface is expected here.
Only GermanShepherd can fulfill this in our example.
![Class Interface Type Error Details](/images/class-interface-3.jpg)

## Conclusion
We could seen that it is possible to get an type error in VS Code without TypeScript.