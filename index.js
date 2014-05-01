/*
 * THIS FILE IS AUTO GENERATED FROM 'index.kep'
 * DO NOT EDIT
*/
"use strict";
var x0, y0, x1, len = 0,
    index = 0,
    input = "",
    interval, worker = new(Worker)("worker.js"),
    x = JSON.parse,
    y = (function(x0) {
        if (x0.error) {} else {
            $("#word-count")
                .text(x0.value);
        }
    });
(worker.onmessage = (function(z) {
    var z0 = z.data;
    return y(x(z0));
}));
var post = ((x0 = JSON.stringify), (y0 = worker.postMessage.bind(worker)), (function(z) {
    return y0(x0(z));
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
    postProvide = ((x1 = post), (function(z) {
        return x1(({
            type: "provide",
            input: z
        }));
    })),
    finish = (function() {
        clearInterval(interval);
        postFinish();
    }),
    provide = (function() {
        var end = (index + 20),
            next = Array.prototype.slice.call(input, index, end)
                .join("");
        (index = end);
        postProvide(next);
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
        (interval = setInterval(provide, $("#timeout")
            .val()));
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