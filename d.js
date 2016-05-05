'use strict';
var _mainLoaded = false;

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
D.prototype = {
    length: 0,
    Main: function(callback) {
        _mainLoaded = true;
        if (/t/.test(document.readyState)) {
            callback(D);
        } else {
            document.addEventListener('DOMContentLoaded', function() {
                callback(D);
            }, false);
        }
    }

}
var D = D.prototype;

function int(name, integer) {
    if (_mainLoaded == true) {
        if (typeof integer == 'number') {
            window[name] = integer;
        } else {
            throw new Error("Invalid type for integer.")
        }
    } else {
        throw new Error("No main method.")
    }
}

function string(name, string) {
    if (_mainLoaded == true) {
        if (typeof string == 'string') {
            window[name] = integer;
        } else {
            throw new Error("Invalid type for string.")
        }
    } else {
        throw new Error("No main method.")
    }
}

function char(name, char) {
    if (_mainLoaded == true) {
        if (typeof string == 'string') {
            if(char.length == 1){
            window[name] = char.toUpperCase();
            } else {
                throw new Error("Invalid length for char")
            }
        } else {
            throw new Error("Invalid type for string.")
        }
    } else {
        throw new Error("No main method.")
    }
}

