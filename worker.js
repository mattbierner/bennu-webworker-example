/*
 * THIS FILE IS AUTO GENERATED FROM 'worker.kep'
 * DO NOT EDIT
*/
"use strict";
importScripts("./resources/require.js");
requirejs.config(({
    baseUrl: ".",
    paths: ({
        "bennu": "dependencies/bennu/dist",
        "nu-stream": "dependencies/nu-stream/dist",
        "seshet": "dependencies/seshet/dist/seshet"
    })
}));
require(["bennu/parse", "bennu/text", "bennu/incremental"], (function(parse, __o, incremental) {
    var next = parse["next"],
        sequence = parse["sequence"],
        many = parse["many"],
        many1 = parse["many1"],
        match = __o["match"],
        inc = parse.modifyState((function(y) {
            return (1 + y);
        })),
        sep = many(match(/\W/m)),
        word = many1(match(/\w/m)),
        token = sequence(sep, word, inc),
        parser = next(many(token), parse.getState),
        state, begin = (function() {
            (state = incremental.runInc(parser, 0));
        }),
        provide = (function(input) {
            (state = incremental.provideString(input, state));
        }),
        finish = (function() {
            return postMessage(incremental.finish(state));
        });
    (self.onmessage = (function(e) {
        var m = JSON.parse(e.data);
        switch (m.type) {
            case "begin":
                return begin();
            case "provide":
                return provide(m.input);
            case "status":
            case "finish":
                return finish();
        }
    }));
}));