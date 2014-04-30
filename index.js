/*
 * THIS FILE IS AUTO GENERATED FROM 'index.kep'
 * DO NOT EDIT
*/
"use strict";
var x, y, len = 0,
    index = 0,
    input = "",
    interval, worker = new(Worker)("worker.js");
(worker.onmessage = (function(x) {
    $("#word-count")
        .text(x.data);
}));
var post = ((x = JSON.stringify), (y = worker.postMessage.bind(worker)), (function(z) {
    return y(x(z));
})),
    postBegin = post.bind(null, ({
        type: "begin"
    })),
    postStatus = post.bind(null, ({
        type: "status"
    })),
    postFinish = post.bind(null, ({
        type: "finish"
    })),
    finish = (function() {
        clearInterval(interval);
        postFinish();
    }),
    provide = (function() {
        var end = (index + 100),
            next = Array.prototype.slice.call(input, index, end)
                .join("");
        (index = end);
        post(({
            type: "provide",
            input: next
        }));
        if ((end >= len)) {
            finish();
        } else {
            postStatus();
        }
    }),
    begin = (function(i) {
        (len = i.length);
        (index = 0);
        (input = i);
        postBegin();
        clearInterval(interval);
        (interval = setInterval(provide, 0));
    });
$((function() {
    $("#count-button")
        .click((function() {
            return begin($("#input")
                .val());
        }));
    $("#stop-button")
        .click(finish);
}));