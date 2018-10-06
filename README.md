# Your First React App - Exercises

This is a collection of exercises associated with my "Building Your First React App" workshop.

## Setup

Start by reading the [Setup instructions](./SETUP.md). 

If you are unable to complete [Setup](./SETUP.md), please raise your hand (if in-person), or create an issue in this repository (if not in-person). 


## Troubleshooting

If a command isn't working, use the following checklist to try to identify the problem.

* Did you install Node, NPM, and git? If not, [start here](/module-0/README.md).
* Are there any error messages in the command window that identify the problem? Take a closer look - sometimes the error messages are there, but surrounded by noise.
* If you're having trouble with a module that uses the browser, are there any error messages in the JavaScript console? These might help you identify the problem.

If you still can't figure out why things aren't working, raise your hand if in-person, or create an issue against this repository.

## Common issues

### `fsevents`/`watchman` error on Mac

You might need to manually install watchman on a Mac. Do this with homebrew (brew install watchman). 

Even after installing, sometimes it seems to fail at linking. You might need to do this manually, too (`brew link watchman`).

A possibly related issue is here - https://github.com/expo/expo/issues/854.
