  function D(selector) {
        if (!(this instanceof D)) {
            return new D(selector);
        }
        if (!selector) {
            return this;
        }
        if (selector instanceof D) {
            return selector;
        }
        if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        }
        if (typeof selector === 'string') {
            return push.apply(this, slice.call(document.querySelectorAll(selector)));
        }
        if (typeof selector === 'function') {
            return D(document).ready(selector);
        }
    }
    var Error = {
        session: function() {
            console.log("Could not establish a connection session.");
            alert("Could not establish a connection session.");
        }
    };
    D.prototype = {
        length: 0,
        ready: function(callback) {
            if (/t/.test(document.readyState)) {
                callback(D);
            } else {
                document.addEventListener('DOMContentLoaded', function() {
                    callback(D);
                }, false);
            }
        }
    }
    
