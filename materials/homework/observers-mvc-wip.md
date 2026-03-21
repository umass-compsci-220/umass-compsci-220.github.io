# Model-View-Controller (MVC)

- In this assignment, you will implement a simple but extensible graphical simulation by following the Model-View-Controller pattern.
This specification is longer and more detailed than for other homework assignments in this course. 
Refer to [How to Complete this Project](#how-to-complete-this-project) for guidance on how to navigate it and plan 
your development process.
- Please download the project [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/06-observers-mvc-wip.zip).

## Due Dates:
- Checkpoint due **Wednesday, March 25.** To receive full credit for the checkpoint, your code must have a score of at least 40% on the autograder. 
  See [How to Complete this Project](#how-to-complete-this-project) for guidance on how to achieve this.
  - The checkpoint counts as a full homework assignment towards your course grade.
- Full assignment due **Wednesday, April 15**. Note that we do not expect you to be working on this assignment the weeks of HW7 or Midterm 2. The scale of this assignment and our schedule of topics necessitate this split approach. Additionally, it is good practice to work on a codebase, step away from it, then pick it up again. 
  - The full assignment submission counts as one full homework assignment towards your course grade.

## Learning Objectives
Model-View-Controller is the backbone of graphical user interface (GUI) systems.
Practically every UI framework, web framework, and game engine follows some version of this pattern, sometimes with modifications to better suit the domain of those kinds of applications.

This assignment aims to help **deepen your understanding of MVC so that you can more quickly understand other applications and frameworks that follow it or implement one of its variations.** 

* Practice setting up Model-View-Controller infrastructure using only built-in TypeScript and browser libraries.
  No 3rd-party libraries are needed.
* Understand which parts of the MVC pattern are **decoupled** from each other and how that makes it easier to add functionality to or **extend** the program.
* Part 2 of this assignment will have you take advantage of the extensibility gained by using this pattern.

## How to Complete this Project
1. Skim the specification and make a list of what the high-level tasks are.
1. Consider which parts of the system are **decoupled** from others according to the MVC pattern.
   Start to think about which parts can be implemented first and which parts depend on others.
1. Choose one part of the system that isn't dependent on anything else that needs to be implemented.
   1. Add just enough functionality that will let you start to implement the next part of the system.
   1. Repeat these steps for the next part of the system.
1. Fill in the rest of the derived class functionality until your simulation works as specified in this document.
1. If you're unsure of where to start after spending some time on those steps, most of the location & movement functionality in the simulation object hierarchy can be implemented before other parts of the system.

## The Simulation at a High Level

When the simulation starts running, it progresses in units of time called "ticks".
The frequency of each tick is determined by our call to `setInterval` in `main.ts`.
Once per tick, every simulation object updates its state (which may trigger other updates to be broadcast), and the primary view is re-drawn to the screen.

This version of our simulation is very simple.
`main.ts` will create a few simulation objects & register them with the model, instantiate our `MainSimulationView` & attach it to the model, and start the simulation tick loop.
Below is a GIF of what the simulation should look like once you've implemented all the requirements (the movement will look smoother in the actual running).

![A screen capture of the simulation with a few lobsters moving around the screen](./simulation-demo.gif)

### Running the Simulation

Note that a significant amount of the MVC architecture has to be in place before you can view the running simulation.
To build and run the simulation, use the following command:
```
npm run bundle && npm run serve
```
The `npm run serve` command will print a URL to the screen (`http://localhost:3000` by default). Visit this URL in your browser to run the full simulation.

## General Design Requirements
Your code must follow all the design requirements stated in this specification.
This section and its subsections contains general requirements your implementation must follow.

- Methods and attributes you add should have the minimum necessary visibility (i.e., public, protected, private).
- Methods and attributes you add should be no higher in the class hierarchy than necessary. For example, if a method is only needed by `Agents`, do not declare it in the `SimulationObject` class.
- The model should be **decoupled** from the View. That is, it should only be aware of the methods/attributes declared in the `View` base class and not know about or depend on any implementation details of the derived view classes.
- The view classes should not store or be aware of any details about the `SimulationObject` or its derived classes beyond those it needs to render the scene.
- Model operations must be as efficient as possible in terms of runtime complexity. For example, if your implementation of `Model.getAgent()` takes O(n) time but a different choice of data structure would result in a better complexity, use that approach instead. Consult the [MDN Built-In Objects documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) to discover what data structures are available in JS/TS.
- Think critically about what functionality is shared between the various classes that derive from `SimulationObject`. Reuse functionality, but don't over-complicate your design. Design for the current requirements in a way that isn't overly restrictive and that doesn't over-anticipate potential future extensions.

### The YAGNI Principle (You Aren't Going to Need It)

No design is infinitely extensible. 
That is, it's impossible to come up with one design that will let you address all possible future requirements without ever changing the design.
As it turns out, trying to over-plan and over-design for potential future requirements can result in systems that are harder to understand and harder to maintain.

This specification aims to guide you towards a design that allows for extensibility in certain areas (namely, adding new kinds of simulation objects and new kinds of views) but that does not try to over-abstract for changes we might or might not make.
We want to strike a balance between having a system that is easy to understand and maintain in its current form and that is easy to extend.

## Simulation Object Class Hierarchy

You will implement all of the classes and factories described below.

As you read these sections, sketch a class hierarchy diagram.
You do not need to submit this diagram, but making it will help you keep track of things as you think about your design.

### `SimulationObject` Base Class (`simulation_object.ts`)

The simulation object class hierarchy starts with an abstract base class `SimulationObject`.
It should have the following public methods.
You must decide which ones should be marked as `abstract`.
Other than that decision, you must use these exact signatures.
```typescript
// Returns the current location of the simulation object
getLocation(): Coordinate;

// This method should be called on every simulation object
// each "tick" of the simulation.
nextTick(): void;

// When called, the simulation object should notify
// the model of its initial state.
broadcastInitialState(): void;
```

Any other methods or attributes you add to `SimulationObject` must be non-public.

### `Agent` Class (`agent.ts`)

Agents are a type of simulation object that can move towards a destination and exist in different states.

The `Agent` class has one additional public method, `startMoving`, with the following signature:
```typescript
// Sets this agent's velocity to move towards the 
// specified destination at the given speed.
startMoving(destination: Coordinate, speed: number);
```

You may add a constructor to the `Agent` class and override any base class methods you need to override.
Any other methods or attributes you add to `Agent` must be non-public.

### `SimpleLobster` Class

Simple lobsters are a type of agent that can be directed to move to a destination.
Once they reach that destination, they stop moving.
Implement this class in `agent.ts`.

The simple lobster should be rendered as a sprite with the image ID `lobsterRegular` at scale `0.4`;

Add/override whatever methods and attributes you think you need.
The `SimpleLobster` type should not be visible outside of `agent.ts`.

### `SleepyLobster` Class

Sleepy lobsters are like simple lobsters in that they can be directed to move to a destination.
Sleepy lobsters also are initially rendered with the same sprite image & scale as simple lobsters.
Once a sleepy lobster reaches the destination it was directed to move towards, it falls asleep.
When a sleepy lobster is asleep, it is rendered as a sprite with the image ID `lobsterSleeping` at scale `0.25`.
Once a sleepy lobster has fallen asleep, it ignores instructions for it to move towards a new destination.

To add this "sprite changing" behavior, you may modify the `View` base class.
This and any other changes you make to support this behavior must follow the MVC structure and principles.
Additionally, changes you make to the public members of the `View` base class **must not require any changes to public or protected members of classes that inherit from `View`**.
In other words, if we test your code with our own hidden class that derives from `View`, our class should still work even after you make your changes.

Implement the `SleepyLobster` class in `agent.ts`.
Add/override whatever methods and attributes you think you need.
The `SleepyLobster` type should not be visible outside of `agent.ts`.

Add a comment just before your `SleepyLobster` class definition explaining the modifications to the application you made so that you could implement the behaviors of this class.

### `agentFactory` Function

Implement the `agentFactory` function so that it creates a `SimpleLobster` when passed the string `"simple_lobster"` as its `type` parameter.
It should also create a `SleepyLobster` when passed the string `"sleepy_lobster"` as its `type` parameter.
If `type` is any other value, throw an `Error` with the message `"unsupported agent type: " + type`.
The created lobster should start at the specified initial location.

### `Structure` Class (`structure.ts`)

Structures are simulation objects that stay at their initial location and do not move.

You may add a constructor to the `Structure` class and override any base class methods you need to override.
Any other methods or attributes you add to `Structure` must be non-public.

### `House` Class

`House`s are a simple type of structure that exist at a location but have no other functionality.
Implement this class in `structure.ts`.

The house should be rendered as a sprite with the image ID `simpleHouse` at the default scale.

Add/override whatever methods and attributes you think you need.
The `House` type should not be visible outside of `structure.ts`.

### `structureFactory` Function

Implement the `structureFactory` function so that it creates a `House` when passed the string `"house"` as its `type` parameter.
If `type` is any other value, throw an `Error` with the message `"unsupported structure type: " + type`.
The created house should be placed at the specified location.

## Controller (`main.ts`)

For this assignment, our controller will do very little. 
It will:
- Create one house and add it to the simulation
- Create a few lobsters & set some of them moving towards a destination
- Create the main simulation view and attach it to the model
- Run the simulation loop, which calls `nextTick` on the model and re-draws the main view

This version of the controller will not accept any input from the user.

The starter file `main.ts` contains placeholder comments for these tasks. 
Update the file as instructed by those comments.

## `View` Class Hierarchy

### `View` Abstract Base Class (`view.ts`)

**You may not modify this class other than in the ways specified in this section and elsewhere in this document.**

This class contains abstract `updateX` methods by which the view(s) can receive updates from the model.
Notice how **we haven't defined an interface called `Observer`**. 
Instead, the `View` abstract base class fills that role.
This is the difference between the definition of a pattern and its implementation.
The pattern does not necessarily prescribe specific type definitions.
Instead, it tells us **how the parts of our system interact with each other.**

### `MainSimulationView` (`view.ts`)

This derived view class is responsible for rendering our simulation to the screen.
To do this, it keeps track of the **minimum information needed** about the simulation objects to draw them to the screen.
The `draw` method itself and a member variable for keeping track of the information needed to render the scene are provided for you.

Add/override whatever methods or attributes you need to receive updates from the model and draw the scene.
Any attributes/methods that do not need to be public should not be public.

## `Model` Class (`model.ts`)

You will implement the `Model` class using the Singleton pattern as seen in class.
Stubs for the required public methods of `Model` are in the `model.ts` starter file.

Any other attributes or methods you add must have the appropriate visibility level in keeping with the MVC structure.
That is, if a model method you add doesn't need to be public, mark it as private.

**Do not** store a reference to the model instance in any variables.
Only access the model by calling `getInstance`.

### "Separate Containers" Approach for storing `Agent`s and `Structure`s

Your `Model` implementation should use the "Separate Containers" approach for storing `Agent`s and `Structure`s.
Refer to the lecture content for more information about this approach.

### Singleton Pattern vs. Other Approaches
Other MVC-based applications and frameworks use other approaches for managing the central application state and "business logic".
For example, web applications usually load data from a database or REST API (you'll interact with a REST API in a future assignment), often using a dedicated library, ORM, or SQL queries to interact with those sources.

Some frameworks use a strategy called "dependency injection" to make the model or other non-local state available to the parts of the application that need it.

The static `getInstance()` approach we take to implementing our singleton is relatively uncommon in modern applications, but it is also simpler to implement than a full dependency injection system, so it suits our purposes for this assignment well enough.

## Starter Files
The following starter files can be found in starter.zip:
- `geometry.ts`: Provides a `Coordinate` class and some geometric functions for computing movement.
- `movement.ts`: The `Movement` class is used to add basic movement to certain kinds of simulation objects using a "has-a" relationship (i.e., composition) 
- `assert.ts`: A simple implementation of `assert`.
- `sprite.ts`: A data-only class that describes how a simulation object should be displayed.
- `view.ts`: Contains the `View` base class and starter code for the `MainSimulationView`.
- `model.ts`: Contains some starter code for the `Model` singleton class.
- `main.ts`: Entrypoint that creates a few simulation objects and starts the simulation. Some of this is provided for you.
- `simulation_object/simulation_object.ts`: Contains some starter code for the simulation object class hierarchy.
- `simulation_object/agent.ts`: Starter code for the `Agent` class hierarchy.
- `simulation_object/structure.ts`: Starter code for the `Structure` class hierarchy.
- `public`: This directory contains the `index.html` file that lets us run the simulation in a browser. Also contains image files we use to display simulation objects.
- `starter.test.ts`: Contains a very minimal test case for you to add to.

## Sprites

"Sprites" are a way to describe how entities in a game or simulation should be displayed visually. 
For our purposes (see `sprite.ts`), a sprite consists of two things:
1. The ID of an image to render (the three choices in the starter code are "lobsterRegular", "lobsterSleeping", and "simpleHouse").
1. The "scale" of the image. A value of `1` will render the image at its original size. Smaller values will render a smaller version of the image.

## Submission & Grading

### Checkpoint

Checkpoint scores will be computed by taking the percent score on our instructor test suite on Gradescope and dividing it by 40.
That is, a score of 40% or higher will receive full credit for the checkpoint.
There is no manual grading for the checkpoint.

### Full Assignment

Scores for the full submission will consist of the following parts:
- 70%: Automated instructor test suite score
- 10%: Manual correctness grading of the final top-level simulation
- 20%: Manual grading of whether the design requirements were followed

# (Optional) Further Tasks

The architecture you've designed and implemented in this class is meant to be extensible.
Here are some ideas for ways you can turn this simulation into something more sophisticated.

In no particular order:
- Add a way for the user to tell lobsters to start moving again. Use the coupled ViewController approach and some minimal HTML to display the location of each lobster and let the user enter coordinates and direct a lobster to start moving to those coordinates.
- Add more views. Add a "spotlight" view that focuses on a single lobster as it does whatever it does.
- Add more agents or structures with different states. Add a view that displays some kind of summary about what states the agents/structures are in.
- Add more sophisticated lobster animations. Draw or find some open-source sprites that, when rendered in sequence, add some kind of "movement" or other animation. Try to do this without adding any 3rd-party libraries.
- Make an entirely different simulation! Come up with your own theme, simulation object types, and views, and implement it.
- Add collision detection. Use a simpler O(n^2) algorithm at first, and set up infrastructure so that when two objects collide, an "update_collided_with" method is called. From there you might decide to add collision resolution (so that objects don't move through each other) or let objects interact with each other in some way.
- Add more sophisticated re-rendering logic. Add different "layers" for different visual parts (e.g., background, moving objects). Only re-draw the parts of the HTML Canvas that have actually changed each frame.
- Anything else you can think of!

# Acknowledgements

Special thanks to Jon Juett for drawing the Lobster and giving us permission to use it in this assignment.
