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
    var sequence = parse["sequence"],
        many = parse["many"],
        many1 = parse["many1"],
        match = __o["match"],
        inc = parse.modifyState((function(y) {
            return (1 + y);
        })),
        sep = many(match(/\W/m)),
        word = many1(match(/\w/m)),
        token = sequence(word, sep, inc),
        parser = sequence(sep, many(token), parse.getState),
        state, ok = (function(x) {
            return postMessage(JSON.stringify(({
                value: x
            })));
        }),
        err = (function(x) {
            return postMessage(JSON.stringify(({
                error: true,
                value: x
            })));
        }),
        begin = (function() {
            (state = incremental.parseInc(parser, 0, ok, err));
        }),
        provide = (function(input) {
            (state = incremental.provideString(input, state));
        }),
        finish = (function() {
            return incremental.finish(state);
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