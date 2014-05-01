# Bennu Web Worker Example

## About
Demonstrates running a [Bennu][bennu] parser on a webworker and getting incremental
feedback during parsing.

### Install

```
$ git clone https://github.com/mattbierner/bennu-webworker-example.git
$ cd bennu-webworker-example
$ git submodule update --init
```

### Overview
`index.html` shows a simple application that uses a webworker to incrementally determine
the word count of some input with a Bennu parser (obviously using
parser combinators to get word count is a bit crazy).

The input to be parser can be provided incrementally and async (perhaps in response
to UI events or from a websocket) without stalling the main thread.

The main thread passes chunks of input to the worker and requests a status update
after each chunk is parsed. This allows realtime feedback during parsing. The
worker can only give an update after a chunk is completely parsed, but smaller chunk sizes
enable the thread to get finer grained feedback during parsing.

### Other Notes
Example code is written in [Khepri][khepri].

Almost any Bennu parser can be run incrementally without modification.

The project shows how to correctly catch parser errors in the worker, but the
word count parser should not actually generate any errors.

### Files
* `index.html` - Main page.
* `index.kep` - Main thread javascript. Gets input and simulates partial input.
  Feeds data to the worker and requests incremental status updates.
* `worker.kep` - Worker thread. Does all the actual parsing and provides updates
  as individual chunks complete parsing.

[bennu]: http://github.com/mattbierner/bennu
[khepri]: http://github.com/mattbierner/khepri