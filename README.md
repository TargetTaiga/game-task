# Game task

### General description

The game consists of the game field, player’s unit, enemy units, and bonus units. The player’s objective is to destroy all enemy units or complete other objectives (up to the developer, but the presence of enemies and bonuses is mandatory).

### Acceptance criteria

* The player’s unit should be controlled by a keyboard or combination of mouse + keyboard.
* The player should have the ability to start and restart the game using UI controls.
* The game should have a losing scenario. 
* The losing scenario should lead to restart UI.

### Technical requirements

* The game should be implemented in JS.
* The view should be implemented using any possible combination of Canvas, SVG and DOM elements.
* The view should not be coupled with the game model remaining a possibility to change rendering technology at any time.
* The usage of any frameworks and libraries is strictly prohibited (exceptions are possible only in case if the need has been prooved and confirmed by mentors).

### Instructions

*  Use `` npm start `` to run the application locally.

* Do not add ``script`` tags into html. Remain _index.js_ connected and import other modules using ES6 ``import`` keyword from your _index.js_ file.
_index.js_ is used as an entry-point to the application, other project's files and folders are up to you.

* _/src_ folder should only contain javascript files, to add a non-javascript file to the project - place it into the _/public_ folder. Paths to files in the _/public_ folder will be relative to the _index.html_.

* _index.html_ file is not watched by bundler, in order build its changes - restart the ``npm start`` task. 