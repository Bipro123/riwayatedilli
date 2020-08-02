(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/hammerjs/hammer.js":
  /*!*****************************************!*\
    !*** ./node_modules/hammerjs/hammer.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*! Hammer.JS - v2.0.7 - 2016-04-22
    * http://hammerjs.github.io/
    *
    * Copyright (c) 2016 Jorik Tangelder;
    * Licensed under the MIT license */


    (function (window, document, exportName, undefined) {
      'use strict';

      var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
      var TEST_ELEMENT = document.createElement('div');
      var TYPE_FUNCTION = 'function';
      var round = Math.round;
      var abs = Math.abs;
      var now = Date.now;
      /**
       * set a timeout with a given scope
       * @param {Function} fn
       * @param {Number} timeout
       * @param {Object} context
       * @returns {number}
       */

      function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
      }
      /**
       * if the argument is an array, we want to execute the fn on each entry
       * if it aint an array we don't want to do a thing.
       * this is used by all the methods that accept a single and array argument.
       * @param {*|Array} arg
       * @param {String} fn
       * @param {Object} [context]
       * @returns {Boolean}
       */


      function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
          each(arg, context[fn], context);
          return true;
        }

        return false;
      }
      /**
       * walk objects and arrays
       * @param {Object} obj
       * @param {Function} iterator
       * @param {Object} context
       */


      function each(obj, iterator, context) {
        var i;

        if (!obj) {
          return;
        }

        if (obj.forEach) {
          obj.forEach(iterator, context);
        } else if (obj.length !== undefined) {
          i = 0;

          while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
          }
        } else {
          for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
          }
        }
      }
      /**
       * wrap a method with a deprecation warning and stack trace
       * @param {Function} method
       * @param {String} name
       * @param {String} message
       * @returns {Function} A new function wrapping the supplied method.
       */


      function deprecate(method, name, message) {
        var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
        return function () {
          var e = new Error('get-stack-trace');
          var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
          var log = window.console && (window.console.warn || window.console.log);

          if (log) {
            log.call(window.console, deprecationMessage, stack);
          }

          return method.apply(this, arguments);
        };
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} target
       * @param {...Object} objects_to_assign
       * @returns {Object} target
       */


      var assign;

      if (typeof Object.assign !== 'function') {
        assign = function assign(target) {
          if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
          }

          var output = Object(target);

          for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];

            if (source !== undefined && source !== null) {
              for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                  output[nextKey] = source[nextKey];
                }
              }
            }
          }

          return output;
        };
      } else {
        assign = Object.assign;
      }
      /**
       * extend object.
       * means that properties in dest will be overwritten by the ones in src.
       * @param {Object} dest
       * @param {Object} src
       * @param {Boolean} [merge=false]
       * @returns {Object} dest
       */


      var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;

        while (i < keys.length) {
          if (!merge || merge && dest[keys[i]] === undefined) {
            dest[keys[i]] = src[keys[i]];
          }

          i++;
        }

        return dest;
      }, 'extend', 'Use `assign`.');
      /**
       * merge the values from src in the dest.
       * means that properties that exist in dest will not be overwritten by src
       * @param {Object} dest
       * @param {Object} src
       * @returns {Object} dest
       */

      var merge = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
      }, 'merge', 'Use `assign`.');
      /**
       * simple class inheritance
       * @param {Function} child
       * @param {Function} base
       * @param {Object} [properties]
       */

      function inherit(child, base, properties) {
        var baseP = base.prototype,
            childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;

        if (properties) {
          assign(childP, properties);
        }
      }
      /**
       * simple function bind
       * @param {Function} fn
       * @param {Object} context
       * @returns {Function}
       */


      function bindFn(fn, context) {
        return function boundFn() {
          return fn.apply(context, arguments);
        };
      }
      /**
       * let a boolean value also be a function that must return a boolean
       * this first item in args will be used as the context
       * @param {Boolean|Function} val
       * @param {Array} [args]
       * @returns {Boolean}
       */


      function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) {
          return val.apply(args ? args[0] || undefined : undefined, args);
        }

        return val;
      }
      /**
       * use the val2 when val1 is undefined
       * @param {*} val1
       * @param {*} val2
       * @returns {*}
       */


      function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
      }
      /**
       * addEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function addEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.addEventListener(type, handler, false);
        });
      }
      /**
       * removeEventListener with multiple events at once
       * @param {EventTarget} target
       * @param {String} types
       * @param {Function} handler
       */


      function removeEventListeners(target, types, handler) {
        each(splitStr(types), function (type) {
          target.removeEventListener(type, handler, false);
        });
      }
      /**
       * find if a node is in the given parent
       * @method hasParent
       * @param {HTMLElement} node
       * @param {HTMLElement} parent
       * @return {Boolean} found
       */


      function hasParent(node, parent) {
        while (node) {
          if (node == parent) {
            return true;
          }

          node = node.parentNode;
        }

        return false;
      }
      /**
       * small indexOf wrapper
       * @param {String} str
       * @param {String} find
       * @returns {Boolean} found
       */


      function inStr(str, find) {
        return str.indexOf(find) > -1;
      }
      /**
       * split string on whitespace
       * @param {String} str
       * @returns {Array} words
       */


      function splitStr(str) {
        return str.trim().split(/\s+/g);
      }
      /**
       * find if a array contains the object using indexOf or a simple polyFill
       * @param {Array} src
       * @param {String} find
       * @param {String} [findByKey]
       * @return {Boolean|Number} false when not found, or the index
       */


      function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) {
          return src.indexOf(find);
        } else {
          var i = 0;

          while (i < src.length) {
            if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
              return i;
            }

            i++;
          }

          return -1;
        }
      }
      /**
       * convert array-like objects to real arrays
       * @param {Object} obj
       * @returns {Array}
       */


      function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
      }
      /**
       * unique array with objects based on a key (like 'id') or just by the array's value
       * @param {Array} src [{id:1},{id:2},{id:1}]
       * @param {String} [key]
       * @param {Boolean} [sort=False]
       * @returns {Array} [{id:1},{id:2}]
       */


      function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;

        while (i < src.length) {
          var val = key ? src[i][key] : src[i];

          if (inArray(values, val) < 0) {
            results.push(src[i]);
          }

          values[i] = val;
          i++;
        }

        if (sort) {
          if (!key) {
            results = results.sort();
          } else {
            results = results.sort(function sortUniqueArray(a, b) {
              return a[key] > b[key];
            });
          }
        }

        return results;
      }
      /**
       * get the prefixed property
       * @param {Object} obj
       * @param {String} property
       * @returns {String|Undefined} prefixed
       */


      function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;

        while (i < VENDOR_PREFIXES.length) {
          prefix = VENDOR_PREFIXES[i];
          prop = prefix ? prefix + camelProp : property;

          if (prop in obj) {
            return prop;
          }

          i++;
        }

        return undefined;
      }
      /**
       * get a unique id
       * @returns {number} uniqueId
       */


      var _uniqueId = 1;

      function uniqueId() {
        return _uniqueId++;
      }
      /**
       * get the window object of an element
       * @param {HTMLElement} element
       * @returns {DocumentView|Window}
       */


      function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window;
      }

      var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
      var SUPPORT_TOUCH = 'ontouchstart' in window;
      var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
      var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
      var INPUT_TYPE_TOUCH = 'touch';
      var INPUT_TYPE_PEN = 'pen';
      var INPUT_TYPE_MOUSE = 'mouse';
      var INPUT_TYPE_KINECT = 'kinect';
      var COMPUTE_INTERVAL = 25;
      var INPUT_START = 1;
      var INPUT_MOVE = 2;
      var INPUT_END = 4;
      var INPUT_CANCEL = 8;
      var DIRECTION_NONE = 1;
      var DIRECTION_LEFT = 2;
      var DIRECTION_RIGHT = 4;
      var DIRECTION_UP = 8;
      var DIRECTION_DOWN = 16;
      var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
      var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
      var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
      var PROPS_XY = ['x', 'y'];
      var PROPS_CLIENT_XY = ['clientX', 'clientY'];
      /**
       * create new input type manager
       * @param {Manager} manager
       * @param {Function} callback
       * @returns {Input}
       * @constructor
       */

      function Input(manager, callback) {
        var self = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.

        this.domHandler = function (ev) {
          if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
          }
        };

        this.init();
      }

      Input.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function () {},

        /**
         * bind the events
         */
        init: function () {
          this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },

        /**
         * unbind the events
         */
        destroy: function () {
          this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
          this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
          this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
      };
      /**
       * create new input type manager
       * called by the Manager constructor
       * @param {Hammer} manager
       * @returns {Input}
       */

      function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;

        if (inputClass) {
          Type = inputClass;
        } else if (SUPPORT_POINTER_EVENTS) {
          Type = PointerEventInput;
        } else if (SUPPORT_ONLY_TOUCH) {
          Type = TouchInput;
        } else if (!SUPPORT_TOUCH) {
          Type = MouseInput;
        } else {
          Type = TouchMouseInput;
        }

        return new Type(manager, inputHandler);
      }
      /**
       * handle input events
       * @param {Manager} manager
       * @param {String} eventType
       * @param {Object} input
       */


      function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;

        if (isFirst) {
          manager.session = {};
        } // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'


        input.eventType = eventType; // compute scale, rotation etc

        computeInputData(manager, input); // emit secret event

        manager.emit('hammer.input', input);
        manager.recognize(input);
        manager.session.prevInput = input;
      }
      /**
       * extend the data with some usable properties like scale, rotate, velocity etc
       * @param {Object} manager
       * @param {Object} input
       */


      function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length; // store the first input to calculate the distance and direction

        if (!session.firstInput) {
          session.firstInput = simpleCloneInputData(input);
        } // to compute scale and rotation we need to store the multiple touches


        if (pointersLength > 1 && !session.firstMultiple) {
          session.firstMultiple = simpleCloneInputData(input);
        } else if (pointersLength === 1) {
          session.firstMultiple = false;
        }

        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input); // find the correct target

        var target = manager.element;

        if (hasParent(input.srcEvent.target, target)) {
          target = input.srcEvent.target;
        }

        input.target = target;
      }

      function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};

        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
          prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
          };
          offset = session.offsetDelta = {
            x: center.x,
            y: center.y
          };
        }

        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
      }
      /**
       * velocity is calculated every x ms
       * @param {Object} session
       * @param {Object} input
       */


      function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input,
            deltaTime = input.timeStamp - last.timeStamp,
            velocity,
            velocityX,
            velocityY,
            direction;

        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
          var deltaX = input.deltaX - last.deltaX;
          var deltaY = input.deltaY - last.deltaY;
          var v = getVelocity(deltaTime, deltaX, deltaY);
          velocityX = v.x;
          velocityY = v.y;
          velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
          direction = getDirection(deltaX, deltaY);
          session.lastInterval = input;
        } else {
          // use latest velocity info if it doesn't overtake a minimum period
          velocity = last.velocity;
          velocityX = last.velocityX;
          velocityY = last.velocityY;
          direction = last.direction;
        }

        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
      }
      /**
       * create a simple clone from the input used for storage of firstInput and firstMultiple
       * @param {Object} input
       * @returns {Object} clonedInputData
       */


      function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;

        while (i < input.pointers.length) {
          pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
          };
          i++;
        }

        return {
          timeStamp: now(),
          pointers: pointers,
          center: getCenter(pointers),
          deltaX: input.deltaX,
          deltaY: input.deltaY
        };
      }
      /**
       * get the center of all the pointers
       * @param {Array} pointers
       * @return {Object} center contains `x` and `y` properties
       */


      function getCenter(pointers) {
        var pointersLength = pointers.length; // no need to loop when only one touch

        if (pointersLength === 1) {
          return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
          };
        }

        var x = 0,
            y = 0,
            i = 0;

        while (i < pointersLength) {
          x += pointers[i].clientX;
          y += pointers[i].clientY;
          i++;
        }

        return {
          x: round(x / pointersLength),
          y: round(y / pointersLength)
        };
      }
      /**
       * calculate the velocity between two points. unit is in px per ms.
       * @param {Number} deltaTime
       * @param {Number} x
       * @param {Number} y
       * @return {Object} velocity `x` and `y`
       */


      function getVelocity(deltaTime, x, y) {
        return {
          x: x / deltaTime || 0,
          y: y / deltaTime || 0
        };
      }
      /**
       * get the direction between two points
       * @param {Number} x
       * @param {Number} y
       * @return {Number} direction
       */


      function getDirection(x, y) {
        if (x === y) {
          return DIRECTION_NONE;
        }

        if (abs(x) >= abs(y)) {
          return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }

        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
      }
      /**
       * calculate the absolute distance between two points
       * @param {Object} p1 {x, y}
       * @param {Object} p2 {x, y}
       * @param {Array} [props] containing x and y keys
       * @return {Number} distance
       */


      function getDistance(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
      }
      /**
       * calculate the angle between two coordinates
       * @param {Object} p1
       * @param {Object} p2
       * @param {Array} [props] containing x and y keys
       * @return {Number} angle
       */


      function getAngle(p1, p2, props) {
        if (!props) {
          props = PROPS_XY;
        }

        var x = p2[props[0]] - p1[props[0]],
            y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
      }
      /**
       * calculate the rotation degrees between two pointersets
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} rotation
       */


      function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
      }
      /**
       * calculate the scale factor between two pointersets
       * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
       * @param {Array} start array of pointers
       * @param {Array} end array of pointers
       * @return {Number} scale
       */


      function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
      }

      var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
      };
      var MOUSE_ELEMENT_EVENTS = 'mousedown';
      var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
      /**
       * Mouse events input
       * @constructor
       * @extends Input
       */

      function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state

        Input.apply(this, arguments);
      }

      inherit(MouseInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function MEhandler(ev) {
          var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

          if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
          }

          if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
          } // mouse must be down


          if (!this.pressed) {
            return;
          }

          if (eventType & INPUT_END) {
            this.pressed = false;
          }

          this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
          });
        }
      });
      var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
      }; // in IE10 the pointer types is defined as an enum

      var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

      };
      var POINTER_ELEMENT_EVENTS = 'pointerdown';
      var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

      if (window.MSPointerEvent && !window.PointerEvent) {
        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
      }
      /**
       * Pointer events input
       * @constructor
       * @extends Input
       */


      function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
      }

      inherit(PointerEventInput, Input, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function PEhandler(ev) {
          var store = this.store;
          var removePointer = false;
          var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
          var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
          var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
          var isTouch = pointerType == INPUT_TYPE_TOUCH; // get index of the event in the store

          var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

          if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
              store.push(ev);
              storeIndex = store.length - 1;
            }
          } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
          } // it not found, so the pointer hasn't been down (so it's probably a hover)


          if (storeIndex < 0) {
            return;
          } // update the event in the store


          store[storeIndex] = ev;
          this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
          });

          if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
          }
        }
      });
      var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
      var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Touch events input
       * @constructor
       * @extends Input
       */

      function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
      }

      inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
          var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

          if (type === INPUT_START) {
            this.started = true;
          }

          if (!this.started) {
            return;
          }

          var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

          if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);

        if (type & (INPUT_END | INPUT_CANCEL)) {
          all = uniqueArray(all.concat(changed), 'identifier', true);
        }

        return [all, changed];
      }

      var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
      };
      var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
      /**
       * Multi-user touch events input
       * @constructor
       * @extends Input
       */

      function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
      }

      inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
          var type = TOUCH_INPUT_MAP[ev.type];
          var touches = getTouches.call(this, ev, type);

          if (!touches) {
            return;
          }

          this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
          });
        }
      });
      /**
       * @this {TouchInput}
       * @param {Object} ev
       * @param {Number} type flag
       * @returns {undefined|Array} [all, changed]
       */

      function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
          targetIds[allTouches[0].identifier] = true;
          return [allTouches, allTouches];
        }

        var i,
            targetTouches,
            changedTouches = toArray(ev.changedTouches),
            changedTargetTouches = [],
            target = this.target; // get target touches from touches

        targetTouches = allTouches.filter(function (touch) {
          return hasParent(touch.target, target);
        }); // collect touches

        if (type === INPUT_START) {
          i = 0;

          while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
          }
        } // filter changed touches to only contain touches that exist in the collected target ids


        i = 0;

        while (i < changedTouches.length) {
          if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
          } // cleanup removed touches


          if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
          }

          i++;
        }

        if (!changedTargetTouches.length) {
          return;
        }

        return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
      }
      /**
       * Combined touch and mouse input
       *
       * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
       * This because touch devices also emit mouse events while doing a touch.
       *
       * @constructor
       * @extends Input
       */


      var DEDUP_TIMEOUT = 2500;
      var DEDUP_DISTANCE = 25;

      function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
      }

      inherit(TouchMouseInput, Input, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function TMEhandler(manager, inputEvent, inputData) {
          var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
              isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

          if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
          } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


          if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
          } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
          }

          this.callback(manager, inputEvent, inputData);
        },

        /**
         * remove the event listeners
         */
        destroy: function destroy() {
          this.touch.destroy();
          this.mouse.destroy();
        }
      });

      function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
          this.primaryTouch = eventData.changedPointers[0].identifier;
          setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
          setLastTouch.call(this, eventData);
        }
      }

      function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];

        if (touch.identifier === this.primaryTouch) {
          var lastTouch = {
            x: touch.clientX,
            y: touch.clientY
          };
          this.lastTouches.push(lastTouch);
          var lts = this.lastTouches;

          var removeLastTouch = function () {
            var i = lts.indexOf(lastTouch);

            if (i > -1) {
              lts.splice(i, 1);
            }
          };

          setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
      }

      function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX,
            y = eventData.srcEvent.clientY;

        for (var i = 0; i < this.lastTouches.length; i++) {
          var t = this.lastTouches[i];
          var dx = Math.abs(x - t.x),
              dy = Math.abs(y - t.y);

          if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
          }
        }

        return false;
      }

      var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
      var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined; // magical touchAction value

      var TOUCH_ACTION_COMPUTE = 'compute';
      var TOUCH_ACTION_AUTO = 'auto';
      var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

      var TOUCH_ACTION_NONE = 'none';
      var TOUCH_ACTION_PAN_X = 'pan-x';
      var TOUCH_ACTION_PAN_Y = 'pan-y';
      var TOUCH_ACTION_MAP = getTouchActionProps();
      /**
       * Touch Action
       * sets the touchAction property or uses the js alternative
       * @param {Manager} manager
       * @param {String} value
       * @constructor
       */

      function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
      }

      TouchAction.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function (value) {
          // find out the touch-action by the event handlers
          if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
          }

          if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
          }

          this.actions = value.toLowerCase().trim();
        },

        /**
         * just re-set the touchAction value
         */
        update: function () {
          this.set(this.manager.options.touchAction);
        },

        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function () {
          var actions = [];
          each(this.manager.recognizers, function (recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
              actions = actions.concat(recognizer.getTouchAction());
            }
          });
          return cleanTouchActions(actions.join(' '));
        },

        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function (input) {
          var srcEvent = input.srcEvent;
          var direction = input.offsetDirection; // if the touch action did prevented once this session

          if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
          }

          var actions = this.actions;
          var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
          var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
          var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

          if (hasNone) {
            //do not prevent defaults if this is a tap gesture
            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
              return;
            }
          }

          if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
          }

          if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
            return this.preventSrc(srcEvent);
          }
        },

        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function (srcEvent) {
          this.manager.session.prevented = true;
          srcEvent.preventDefault();
        }
      };
      /**
       * when the touchActions are collected they are not a valid value, so we need to clean things up. *
       * @param {String} actions
       * @returns {*}
       */

      function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) {
          return TOUCH_ACTION_NONE;
        }

        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning

        if (hasPanX && hasPanY) {
          return TOUCH_ACTION_NONE;
        } // pan-x OR pan-y


        if (hasPanX || hasPanY) {
          return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        } // manipulation


        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
          return TOUCH_ACTION_MANIPULATION;
        }

        return TOUCH_ACTION_AUTO;
      }

      function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) {
          return false;
        }

        var touchMap = {};
        var cssSupports = window.CSS && window.CSS.supports;
        ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
          // If css.supports is not supported but there is native touch-action assume it supports
          // all values. This is the case for IE 10 and 11.
          touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
        });
        return touchMap;
      }
      /**
       * Recognizer flow explained; *
       * All recognizers have the initial state of POSSIBLE when a input session starts.
       * The definition of a input session is from the first input until the last input, with all it's movement in it. *
       * Example session for mouse-input: mousedown -> mousemove -> mouseup
       *
       * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
       * which determines with state it should be.
       *
       * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
       * POSSIBLE to give it another change on the next cycle.
       *
       *               Possible
       *                  |
       *            +-----+---------------+
       *            |                     |
       *      +-----+-----+               |
       *      |           |               |
       *   Failed      Cancelled          |
       *                          +-------+------+
       *                          |              |
       *                      Recognized       Began
       *                                         |
       *                                      Changed
       *                                         |
       *                                  Ended/Recognized
       */


      var STATE_POSSIBLE = 1;
      var STATE_BEGAN = 2;
      var STATE_CHANGED = 4;
      var STATE_ENDED = 8;
      var STATE_RECOGNIZED = STATE_ENDED;
      var STATE_CANCELLED = 16;
      var STATE_FAILED = 32;
      /**
       * Recognizer
       * Every recognizer needs to extend from this class.
       * @constructor
       * @param {Object} options
       */

      function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null; // default is enable true

        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
      }

      Recognizer.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},

        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function (options) {
          assign(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

          this.manager && this.manager.touchAction.update();
          return this;
        },

        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function (otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
          }

          var simultaneous = this.simultaneous;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
          }

          return this;
        },

        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function (otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          delete this.simultaneous[otherRecognizer.id];
          return this;
        },

        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function (otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
          }

          var requireFail = this.requireFail;
          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

          if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
          }

          return this;
        },

        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function (otherRecognizer) {
          if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
          }

          otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
          var index = inArray(this.requireFail, otherRecognizer);

          if (index > -1) {
            this.requireFail.splice(index, 1);
          }

          return this;
        },

        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function () {
          return this.requireFail.length > 0;
        },

        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function (otherRecognizer) {
          return !!this.simultaneous[otherRecognizer.id];
        },

        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function (input) {
          var self = this;
          var state = this.state;

          function emit(event) {
            self.manager.emit(event, input);
          } // 'panstart' and 'panmove'


          if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }

          emit(self.options.event); // simple 'eventName' events

          if (input.additionalEvent) {
            // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
          } // panend and pancancel


          if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
          }
        },

        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function (input) {
          if (this.canEmit()) {
            return this.emit(input);
          } // it's failing anyway


          this.state = STATE_FAILED;
        },

        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function () {
          var i = 0;

          while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
              return false;
            }

            i++;
          }

          return true;
        },

        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function (inputData) {
          // make a new copy of the inputData
          // so we can change the inputData without messing up the other recognizers
          var inputDataClone = assign({}, inputData); // is is enabled and allow recognizing?

          if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
          } // reset when we've reached the end


          if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
          }

          this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
          // so trigger an event

          if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
          }
        },

        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function (inputData) {},
        // jshint ignore:line

        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function () {},

        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function () {}
      };
      /**
       * get a usable string, used as event postfix
       * @param {Const} state
       * @returns {String} state
       */

      function stateStr(state) {
        if (state & STATE_CANCELLED) {
          return 'cancel';
        } else if (state & STATE_ENDED) {
          return 'end';
        } else if (state & STATE_CHANGED) {
          return 'move';
        } else if (state & STATE_BEGAN) {
          return 'start';
        }

        return '';
      }
      /**
       * direction cons to string
       * @param {Const} direction
       * @returns {String}
       */


      function directionStr(direction) {
        if (direction == DIRECTION_DOWN) {
          return 'down';
        } else if (direction == DIRECTION_UP) {
          return 'up';
        } else if (direction == DIRECTION_LEFT) {
          return 'left';
        } else if (direction == DIRECTION_RIGHT) {
          return 'right';
        }

        return '';
      }
      /**
       * get a recognizer by name if it is bound to a manager
       * @param {Recognizer|String} otherRecognizer
       * @param {Recognizer} recognizer
       * @returns {Recognizer}
       */


      function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;

        if (manager) {
          return manager.get(otherRecognizer);
        }

        return otherRecognizer;
      }
      /**
       * This recognizer is just used as a base for the simple attribute recognizers.
       * @constructor
       * @extends Recognizer
       */


      function AttrRecognizer() {
        Recognizer.apply(this, arguments);
      }

      inherit(AttrRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
          /**
           * @type {Number}
           * @default 1
           */
          pointers: 1
        },

        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function (input) {
          var optionPointers = this.options.pointers;
          return optionPointers === 0 || input.pointers.length === optionPointers;
        },

        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function (input) {
          var state = this.state;
          var eventType = input.eventType;
          var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
          var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

          if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
          } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
              return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
              return STATE_BEGAN;
            }

            return state | STATE_CHANGED;
          }

          return STATE_FAILED;
        }
      });
      /**
       * Pan
       * Recognized when the pointer is down and moved in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
      }

      inherit(PanRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: 'pan',
          threshold: 10,
          pointers: 1,
          direction: DIRECTION_ALL
        },
        getTouchAction: function () {
          var direction = this.options.direction;
          var actions = [];

          if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
          }

          if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
          }

          return actions;
        },
        directionTest: function (input) {
          var options = this.options;
          var hasMoved = true;
          var distance = input.distance;
          var direction = input.direction;
          var x = input.deltaX;
          var y = input.deltaY; // lock to axis?

          if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
              direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
              hasMoved = x != this.pX;
              distance = Math.abs(input.deltaX);
            } else {
              direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
              hasMoved = y != this.pY;
              distance = Math.abs(input.deltaY);
            }
          }

          input.direction = direction;
          return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function (input) {
          return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function (input) {
          this.pX = input.deltaX;
          this.pY = input.deltaY;
          var direction = directionStr(input.direction);

          if (direction) {
            input.additionalEvent = this.options.event + direction;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Pinch
       * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
       * @constructor
       * @extends AttrRecognizer
       */

      function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(PinchRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'pinch',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function () {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function (input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function (input) {
          if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
          }

          this._super.emit.call(this, input);
        }
      });
      /**
       * Press
       * Recognized when the pointer is down for x ms without any movement.
       * @constructor
       * @extends Recognizer
       */

      function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
      }

      inherit(PressRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
          event: 'press',
          pointers: 1,
          time: 251,
          // minimal time of the pointer to be pressed
          threshold: 9 // a minimal movement is ok, but keep it low

        },
        getTouchAction: function () {
          return [TOUCH_ACTION_AUTO];
        },
        process: function (input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTime = input.deltaTime > options.time;
          this._input = input; // we only allow little movement
          // and we've reached an end event, so a tap is possible

          if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
            this.reset();
          } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function () {
              this.state = STATE_RECOGNIZED;
              this.tryEmit();
            }, options.time, this);
          } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
          }

          return STATE_FAILED;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function (input) {
          if (this.state !== STATE_RECOGNIZED) {
            return;
          }

          if (input && input.eventType & INPUT_END) {
            this.manager.emit(this.options.event + 'up', input);
          } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Rotate
       * Recognized when two or more pointer are moving in a circular motion.
       * @constructor
       * @extends AttrRecognizer
       */

      function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(RotateRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
          event: 'rotate',
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function () {
          return [TOUCH_ACTION_NONE];
        },
        attrTest: function (input) {
          return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
      });
      /**
       * Swipe
       * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
       * @constructor
       * @extends AttrRecognizer
       */

      function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
      }

      inherit(SwipeRecognizer, AttrRecognizer, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: 'swipe',
          threshold: 10,
          velocity: 0.3,
          direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
          pointers: 1
        },
        getTouchAction: function () {
          return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function (input) {
          var direction = this.options.direction;
          var velocity;

          if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
          } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
          } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
          }

          return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function (input) {
          var direction = directionStr(input.offsetDirection);

          if (direction) {
            this.manager.emit(this.options.event + direction, input);
          }

          this.manager.emit(this.options.event, input);
        }
      });
      /**
       * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
       * between the given interval and position. The delay option can be used to recognize multi-taps without firing
       * a single tap.
       *
       * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
       * multi-taps being recognized.
       * @constructor
       * @extends Recognizer
       */

      function TapRecognizer() {
        Recognizer.apply(this, arguments); // previous time and center,
        // used for tap counting

        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
      }

      inherit(TapRecognizer, Recognizer, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: 'tap',
          pointers: 1,
          taps: 1,
          interval: 300,
          // max time between the multi-tap taps
          time: 250,
          // max time of the pointer to be down (like finger on the screen)
          threshold: 9,
          // a minimal movement is ok, but keep it low
          posThreshold: 10 // a multi-tap can be a bit off the initial position

        },
        getTouchAction: function () {
          return [TOUCH_ACTION_MANIPULATION];
        },
        process: function (input) {
          var options = this.options;
          var validPointers = input.pointers.length === options.pointers;
          var validMovement = input.distance < options.threshold;
          var validTouchTime = input.deltaTime < options.time;
          this.reset();

          if (input.eventType & INPUT_START && this.count === 0) {
            return this.failTimeout();
          } // we only allow little movement
          // and we've reached an end event, so a tap is possible


          if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
              return this.failTimeout();
            }

            var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
              this.count = 1;
            } else {
              this.count += 1;
            }

            this._input = input; // if tap count matches we have recognized it,
            // else it has began recognizing...

            var tapCount = this.count % options.taps;

            if (tapCount === 0) {
              // no failing requirements, immediately trigger the tap event
              // or wait as long as the multitap interval to trigger
              if (!this.hasRequireFailures()) {
                return STATE_RECOGNIZED;
              } else {
                this._timer = setTimeoutContext(function () {
                  this.state = STATE_RECOGNIZED;
                  this.tryEmit();
                }, options.interval, this);
                return STATE_BEGAN;
              }
            }
          }

          return STATE_FAILED;
        },
        failTimeout: function () {
          this._timer = setTimeoutContext(function () {
            this.state = STATE_FAILED;
          }, this.options.interval, this);
          return STATE_FAILED;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function () {
          if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
          }
        }
      });
      /**
       * Simple way to create a manager with a default set of recognizers.
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
      }
      /**
       * @const {string}
       */


      Hammer.VERSION = '2.0.7';
      /**
       * default settings
       * @namespace
       */

      Hammer.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: false,

        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: TOUCH_ACTION_COMPUTE,

        /**
         * @type {Boolean}
         * @default true
         */
        enable: true,

        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,

        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,

        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {
          enable: false
        }], [PinchRecognizer, {
          enable: false
        }, ['rotate']], [SwipeRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }], [PanRecognizer, {
          direction: DIRECTION_HORIZONTAL
        }, ['swipe']], [TapRecognizer], [TapRecognizer, {
          event: 'doubletap',
          taps: 2
        }, ['tap']], [PressRecognizer]],

        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
          /**
           * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userSelect: 'none',

          /**
           * Disable the Windows Phone grippers when pressing an element.
           * @type {String}
           * @default 'none'
           */
          touchSelect: 'none',

          /**
           * Disables the default callout shown when you touch and hold a touch target.
           * On iOS, when you touch and hold a touch target such as a link, Safari displays
           * a callout containing information about the link. This property allows you to disable that callout.
           * @type {String}
           * @default 'none'
           */
          touchCallout: 'none',

          /**
           * Specifies whether zooming is enabled. Used by IE10>
           * @type {String}
           * @default 'none'
           */
          contentZooming: 'none',

          /**
           * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userDrag: 'none',

          /**
           * Overrides the highlight color shown when the user taps a link or a JavaScript
           * clickable element in iOS. This property obeys the alpha value, if specified.
           * @type {String}
           * @default 'rgba(0,0,0,0)'
           */
          tapHighlightColor: 'rgba(0,0,0,0)'
        }
      };
      var STOP = 1;
      var FORCED_STOP = 2;
      /**
       * Manager
       * @param {HTMLElement} element
       * @param {Object} [options]
       * @constructor
       */

      function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function (item) {
          var recognizer = this.add(new item[0](item[1]));
          item[2] && recognizer.recognizeWith(item[2]);
          item[3] && recognizer.requireFailure(item[3]);
        }, this);
      }

      Manager.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function (options) {
          assign(this.options, options); // Options that need a little more setup

          if (options.touchAction) {
            this.touchAction.update();
          }

          if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
          }

          return this;
        },

        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function (force) {
          this.session.stopped = force ? FORCED_STOP : STOP;
        },

        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function (inputData) {
          var session = this.session;

          if (session.stopped) {
            return;
          } // run the touch-action polyfill


          this.touchAction.preventDefaults(inputData);
          var recognizer;
          var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
          // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
          // if no recognizer is detecting a thing, it is set to `null`

          var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
          // or when we're in a new session

          if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
            curRecognizer = session.curRecognizer = null;
          }

          var i = 0;

          while (i < recognizers.length) {
            recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.

            if (session.stopped !== FORCED_STOP && ( // 1
            !curRecognizer || recognizer == curRecognizer || // 2
            recognizer.canRecognizeWith(curRecognizer))) {
              // 3
              recognizer.recognize(inputData);
            } else {
              recognizer.reset();
            } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer


            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
              curRecognizer = session.curRecognizer = recognizer;
            }

            i++;
          }
        },

        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function (recognizer) {
          if (recognizer instanceof Recognizer) {
            return recognizer;
          }

          var recognizers = this.recognizers;

          for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
              return recognizers[i];
            }
          }

          return null;
        },

        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function (recognizer) {
          if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
          } // remove existing


          var existing = this.get(recognizer.options.event);

          if (existing) {
            this.remove(existing);
          }

          this.recognizers.push(recognizer);
          recognizer.manager = this;
          this.touchAction.update();
          return recognizer;
        },

        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function (recognizer) {
          if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
          }

          recognizer = this.get(recognizer); // let's make sure this recognizer exists

          if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
              recognizers.splice(index, 1);
              this.touchAction.update();
            }
          }

          return this;
        },

        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function (events, handler) {
          if (events === undefined) {
            return;
          }

          if (handler === undefined) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          });
          return this;
        },

        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function (events, handler) {
          if (events === undefined) {
            return;
          }

          var handlers = this.handlers;
          each(splitStr(events), function (event) {
            if (!handler) {
              delete handlers[event];
            } else {
              handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
          });
          return this;
        },

        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function (event, data) {
          // we also want to trigger dom events
          if (this.options.domEvents) {
            triggerDomEvent(event, data);
          } // no handlers, so skip it all


          var handlers = this.handlers[event] && this.handlers[event].slice();

          if (!handlers || !handlers.length) {
            return;
          }

          data.type = event;

          data.preventDefault = function () {
            data.srcEvent.preventDefault();
          };

          var i = 0;

          while (i < handlers.length) {
            handlers[i](data);
            i++;
          }
        },

        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function () {
          this.element && toggleCssProps(this, false);
          this.handlers = {};
          this.session = {};
          this.input.destroy();
          this.element = null;
        }
      };
      /**
       * add/remove the css properties as defined in manager.options.cssProps
       * @param {Manager} manager
       * @param {Boolean} add
       */

      function toggleCssProps(manager, add) {
        var element = manager.element;

        if (!element.style) {
          return;
        }

        var prop;
        each(manager.options.cssProps, function (value, name) {
          prop = prefixed(element.style, name);

          if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
          } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
          }
        });

        if (!add) {
          manager.oldCssProps = {};
        }
      }
      /**
       * trigger dom event
       * @param {String} event
       * @param {Object} data
       */


      function triggerDomEvent(event, data) {
        var gestureEvent = document.createEvent('Event');
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
      }

      assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
      }); // this prevents errors when Hammer is loaded in the presence of an AMD
      //  style loader but by script tag, not by the loader.

      var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line

      freeGlobal.Hammer = Hammer;

      if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return Hammer;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(window, document, 'Hammer');
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <ion-text color=\"medium\" text-center>\n          <p>You joined the chat as {{ currentUser }}</p>\n          <p *ngIf=\"rooms.length!=0\">Current Room {{ currentroom }}</p>\n        </ion-text>\n\n<ion-infinite-scroll scrollX=\"true\"> \n<ion-list class=\"list-main\" *ngIf=\"rooms.length!=0\">\n <ion-item *ngFor=\"let roo of rooms\" (click)=\"changeRoom(roo)\"> \n      <ion-label *ngIf=\"currentroom!==roo\">{{roo}}</ion-label>\n      <!-- <ion-note slot=\"end\">On</ion-note> -->\n      <ion-grid *ngIf=\"currentroom===roo\" >\n        \n        <ion-row *ngFor=\"let message of messages\">\n     \n          <ion-col size=\"9\" *ngIf=\"message.user !== currentUser && message.room===roo\" class=\"message other-message\">\n            <b>{{ message.user }}</b><br>\n            <span>{{ message.msg }}</span>\n            <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n          </ion-col>\n     \n          <ion-col offset=\"3\" size=\"9\" *ngIf=\"message.user === currentUser && message.room===roo\" class=\"message my-message\">\n            <b>{{ message.user }}</b><br>\n            <span>{{ message.msg }}</span>\n            <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n          </ion-col>\n     \n        </ion-row>\n          <ion-toolbar color=\"light\">\n            <ion-row align-items-center>\n              <ion-col size=\"10\">\n                <ion-textarea auto-grow class=\"message-input\" rows=\"1\" [(ngModel)]=\"message\"></ion-textarea>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"message === ''\" class=\"msg-btn\"\n                  (click)=\"sendMessage(roo)\">\n                  <ion-icon name=\"ios-send\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <button ion-button full (click)=\"getPermission()\">Get Permission</button>\n              <button ion-button full (click)=\"startListening()\">Start Listening</button>\n              <button ion-button full (click)=\"stopListening()\">Stop Listening</button>\n            </ion-row>\n            <ion-card *ngIf=\"isRecording\"> \n              <ion-card-header>This is what I understood\n              </ion-card-header>\n                <ion-card-content>\n                  <span>Currently Listening</span>\n                  <ion-list>\n                    <ion-item *ngFor=\"let match of matches\" (click)=\"getMatch(match)\">\n                        {{match}}\n                    </ion-item>\n                  </ion-list>\n                </ion-card-content>\n            </ion-card>\n          </ion-toolbar>\n      </ion-grid>\n    </ion-item>\n\n\n</ion-list>\n\n\n<ion-fab vertical=\"end\" horizontal=\"center\" slot=\"fixed\" *ngIf=\"!textBox\" (click)=\"openTextbox()\">\n  <ion-fab-button>\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n<br/>\n<ion-fab *ngIf=\"!searchBox\" (click)=\"openSearchbox()\">\n  <ion-fab-button>\n    <ion-icon name=\"search\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-infinite-scroll>\n\n\n\n\n   <ion-toolbar color=\"light\" *ngIf=\"textBox\">\n    <ion-row align-items-center>\n      <ion-col size=\"10\">\n        <ion-textarea placeholder=\"Enter Room Name\" auto-grow class=\"message-input\" rows=\"1\" [(ngModel)]=\"roomer\"></ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"roomer === ''\" class=\"msg-btn\"\n          (click)=\"createRoom()\">\n          <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <ion-toolbar color=\"light\" *ngIf=\"searchBox\">\n    <ion-row align-items-left>\n      <ion-col size=\"10\">\n        <form (ngSubmit)=\"searchRoom()\">\n          <ion-item>\n             <ion-searchbar placeholder=\"Search Chat Room\" type=\"text\" [(ngModel)]=\"searchtext\" name=\"chatroom\"></ion-searchbar>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n  <!-- <form (ngSubmit)=\"searchRoom()\">\n      <ion-item>\n         <ion-searchbar placeholder=\"Search Chat Room\" type=\"text\" [(ngModel)]=\"searchtext\" name=\"chatroom\"></ion-searchbar>\n      </ion-item>\n    </form> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <img class=\"home_head\" src=\"../assets/icon/home_toolbar_head.png\" width=\"75px\" align=\"middle\"/>\n    \n    <!-- <img class=\"gameinfo\" src=\"../assets/icon/refresh.png\" width=\"75px\" align=\"middle\" width=\"40px\" (click)=\"doRefresh($event)\"/> -->\n    <img class=\"gameinfo\" src=\"../assets/icon/about.png\" width=\"75px\" align=\"middle\" width=\"40px\" (click)=\"presentModal(true)\"/>    \n    <!-- <ion-icon name=\"md-paper-plane\" width=\"100px\"></ion-icon> -->\n  \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n  \n<ion-content color=\"secondary\" padding >\n  <ion-slides>\n    <ion-slide>\n<ion-refresher slot=\"fixed\" *ngIf=\"pulldown\" (ionRefresh)=\"doRefresh($event)\">\n<ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n      </ion-refresher>\n           <ion-text class=\"pull_down\" *ngIf=\"pulldown\" style=\"padding-left:12.5%;\">Please pull down to refresh content</ion-text> \n           <img src=\"../assets/icon/hand.svg\" *ngIf=\"pulldown\" style=\"height:20%; padding-left:32%;\">   \n  <div id=\"game-canvas\"></div>\n  <!-- <img src=\"/assets/board.jpg\" alt=\"\" (click)=\"openCam()\" /> -->\n  <!-- <ion-button  >Open Camera</ion-button> -->\n  <!-- <img src=\"{{image}}\"> -->\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n</ion-slide>\n<ion-slide>\n    <app-chat></app-chat>\n</ion-slide>\n</ion-slides>\n</ion-content>\n\n\n\n<ion-footer class=\"footer\">\n  <ion-toolbar  class=\"footer_toolbar\" color=\"primary\" (click)=\"presentModal(false)\">\n    <div>\n      <img class=\"up_arrow\" src=\"../assets/icon/up-arrow.svg\"  height=\"20px\"  />\n      </div>\n      <div class=\"footer_para\"> \n      <ion-text color=\"tertiary\" class=\"total_write\"><p class=\"parafoot\">\n          <ion-text><b>{{classReference.postname}} : </b></ion-text><ion-text>{{classReference.postdesc}}</ion-text></p>\n      </ion-text>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/chat/chat.component.scss":
  /*!******************************************!*\
    !*** ./src/app/chat/chat.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  margin-top: 0px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n}\n\n.msg-btn {\n  --padding-start: 0.0em;\n  --padding-end: 0.0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcVXNlcnNcXFdJTlxcRGVza3RvcFxcdGVzdFxcY2FtZXJhYXBwMS9zcmNcXGFwcFxcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UscUNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxzQ0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIH1cclxuICAgXHJcbiAgLm15LW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAgXHJcbiAgLm90aGVyLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgIFxyXG4gIC50aW1lIHtcclxuICAgIGNvbG9yOiAjZGZkZmRmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcbiAgIFxyXG4gIC5tZXNzYWdlLWlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gICBcclxuICAubXNnLWJ0biB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuMGVtO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMC4wZW07XHJcbiAgfVxyXG5cclxuICAvLyAubGlzdC1tYWlue1xyXG4gICAgXHJcbiAgLy8gfSIsIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5teS1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiAjZGZkZmRmO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1zZy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuMGVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjBlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat/chat.component.ts":
  /*!****************************************!*\
    !*** ./src/app/chat/chat.component.ts ***!
    \****************************************/

  /*! exports provided: ChatComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/speech-recognition/ngx */
    "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_multiplayer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/multiplayer.service */
    "./src/app/services/multiplayer.service.ts");

    let ChatComponent = class ChatComponent {
      constructor(socket, toastCtrl, plt, speechrecog, http, multiplay) {
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.plt = plt;
        this.speechrecog = speechrecog;
        this.http = http;
        this.multiplay = multiplay;
        this.message = '';
        this.messages = [];
        this.currentUser = '';
        this.roomer = '';
        this.rooms = [];
        this.currentroom = '';
        this.textBox = false;
        this.isRecording = false;
        this.searchtext = "";
        this.searchBox = false;
      }

      ngOnInit() {
        this.socket.connect();
        let name = `user-${new Date().getTime()}`;
        this.currentUser = name;
        this.multiplay.currentusername = name;
        this.socket.emit('set-name', name);
        this.socket.emit('get-chat-room', 'all');
        this.socket.fromEvent('users-changed').subscribe(data => {
          let user = data['user'];

          if (data['event'] === 'left') {
            this.showToast('User left: ' + user);
          } else {
            this.showToast('User joined: ' + user);
          }
        });
        this.socket.fromEvent('message').subscribe(message => {
          this.messages.push(message);
        });
        this.socket.fromEvent('create-room-ack').subscribe(room => {
          console.log('it is working');
          this.roomdet = room;

          if (this.roomdet.roomdesc != "NO") {
            this.rooms.push(this.roomdet.roomdesc);
            this.showToast(this.roomdet.message);
            this.textBox = !this.textBox;
          } else {
            this.showToast(this.roomdet.roomdesc);
            this.textBox = !this.textBox;
          }
        });
        this.socket.fromEvent('join-room-ack').subscribe(room => {
          console.log('it is working');
          this.roomdet = room;

          if (this.roomdet.roomdesc != "NO") {
            this.rooms.push(this.roomdet.roomdesc);
            this.showToast(this.roomdet.message);
            this.textBox = !this.textBox;
          } else {
            this.showToast(this.roomdet.roomdesc);
            this.textBox = !this.textBox;
          }
        });
        this.socket.fromEvent('send-message-room-ack').subscribe(message => {
          this.msgforoom = message;
          console.log("ack recieved for room message");

          if (this.msgforoom.msg != "NO") {
            console.log("Room exists");
            this.messages.push(this.msgforoom);
            this.showToast("Message in roomid-" + this.msgforoom.room);
          } else {
            console.log("Room doesn't exists");
            this.showToast("No Such room exists");
          }
        });
        this.socket.fromEvent('set-move-room-ack').subscribe(message => {
          alert("Going ON ");
          this.msgforoom = message;
          console.log("ack recieved for room message");

          if (this.msgforoom.msg != "NO") {
            console.log("Room exists");
            this.messages.push(this.msgforoom);
            this.showToast("Message in roomid-" + this.msgforoom.room);
            this.showToast(this.msgforoom.msg);
          } else {
            console.log("Room doesn't exists");
            this.showToast("No Such room exists");
          }
        }); // this.socket.fromEvent('set-move-room-ack').subscribe(message => {
        //   // alert("Going ON ");
        //   // this.msgforoom=message;
        //   // console.log("ack recieved for room message");
        //   // if(this.msgforoom.msg!="NO")
        //   // {
        //   //   console.log("Room exists");
        //   //   this.messages.push(this.msgforoom);
        //   //   this.showToast("Message in roomid-"+this.msgforoom.room);
        //   //   this.showToast(this.msgforoom.msg);
        //   // }
        //   // else{
        //   //   console.log("Room doesn't exists");
        //   //   this.showToast("No Such room exists");
        //   // }
        // });

        this.socket.fromEvent('search-room-result').subscribe(response => {
          // console.log(roomname);
          this.msg = response;

          if (this.msg.msg != "NO") {
            this.rooms.push(this.msg.msg);
            this.searchBox = false;
          } else {
            this.showToast("No room found");
            this.searchBox = true;
          }
        });
        this.socket.fromEvent('list-of-room').subscribe(response => {
          console.log(response);
          this.msg = response;

          if (this.msg.msg != "NO") {
            // this.rooms.push(this.msg.msg);
            // this.searchBox=false;
            // this.msg.msg.forEach(function (value) {
            //   console.log(value.chat_room_name);
            //   this.rooms.push(value.chat_room_name);
            // });
            for (var i = this.msg.msg.length - 1; i >= 0; i--) {
              console.log(this.msg.msg[i].chat_room_name);
              this.rooms.push(this.msg.msg[i].chat_room_name);
            } // console.log("Length"+this.msg.msg.length);

          } else {
            this.showToast("No room found");
            this.searchBox = true;
          }
        });
      }

      startListening() {
        console.log("listening listening");
        let options = {
          language: 'en-US'
        };
        this.speechrecog.startListening().subscribe(matches => {
          this.showToast("Recording....");
          this.matches = matches;
        });
        this.isRecording = true;
      }

      stopListening() {
        console.log("Stop listening");
        this.speechrecog.stopListening().then(() => {
          this.showToast("Recording Stopped");
        });
      }

      getPermission() {
        console.log("getting permission");
        this.speechrecog.hasPermission().then(hasPermission => {
          console.log(hasPermission);

          if (!hasPermission) {
            this.speechrecog.requestPermission();
          }
        });
      }

      sendMessage() {
        console.log("room message is sent");
        this.socket.emit('send-message-room', {
          text: this.message,
          room: this.currentroom
        });
        this.message = '';
      }

      createRoom() {
        this.socket.emit('create-room', this.roomer);
        this.roomer = '';
      }

      ionViewWillLeave() {
        this.socket.disconnect();
      }

      showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let toast = yield this.toastCtrl.create({
            message: msg,
            position: 'top',
            duration: 2000
          });
          toast.present();
        });
      }

      changeRoom(roomid) {
        this.currentroom = roomid;
        this.multiplay.currentRoom = roomid;
      }

      openTextbox() {
        this.textBox = !this.textBox;
      }

      openSearchbox() {
        this.searchBox = !this.searchBox;
      }

      getMatch(textspeech) {
        this.message = textspeech;
        this.matches.splice(0, this.matches.length);
        this.isRecording = false;
      }

      searchRoom() {
        alert(this.searchtext);
        this.socket.emit('join-room', this.searchtext);
      }

    };

    ChatComponent.ctorParameters = () => [{
      type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }, {
      type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
    }, {
      type: _services_multiplayer_service__WEBPACK_IMPORTED_MODULE_6__["MultiplayerService"]
    }];

    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.scss */
      "./src/app/chat/chat.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_multiplayer_service__WEBPACK_IMPORTED_MODULE_6__["MultiplayerService"]])], ChatComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../modal/modal.page */
    "./src/app/modal/modal.page.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../chat/chat.component */
    "./src/app/chat/chat.component.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"], _modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]],
      entryComponents: [_modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.gamecanvas {\n  border: 3px solid black;\n}\n\n.parafoot {\n  position: fixed;\n  font-size: 0.9rem;\n  padding-left: 0.75rem;\n  padding-right: 0.85rem;\n  padding-top: 0.2rem;\n  top: 2px;\n}\n\n.home_head {\n  font-size: 0.9rem;\n  padding-top: 0.1rem;\n  padding-left: 0.75rem;\n}\n\n.gameinfo {\n  font-size: 0.9rem;\n  float: right;\n  padding-right: 0.75rem;\n}\n\n.gamerefresh {\n  font-size: 0.9rem;\n  float: right;\n  padding-right: 0.75rem;\n}\n\n.slider-slide {\n  min-height: 200px;\n}\n\n.total_write {\n  padding-bottom: 50px;\n}\n\n.up_arrow {\n  position: relative;\n  padding-left: 25.45rem;\n  padding-top: 0.1rem;\n  bottom: 19px;\n  height: 60;\n  width: 120;\n}\n\n.footer_toolbar {\n  height: 100%;\n}\n\n.footer {\n  height: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFdJTlxcRGVza3RvcFxcdGVzdFxcY2FtZXJhYXBwMS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDQSx1QkFBQTtBQ0VBOztBREFBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQ0dEOztBRERBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDSUQ7O0FEREE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0lEOztBREZBO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNLRDs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQUE7RUFDQyxvQkFBQTtBQ0dEOztBREFBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDR0Q7O0FEREE7RUFDQyxZQUFBO0FDSUQ7O0FERkE7RUFDQyxXQUFBO0FDS0QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmdhbWVjYW52YXN7XG5ib3JkZXI6M3B4IHNvbGlkIGJsYWNrO1xufVxuLnBhcmFmb290e1xuXHRwb3NpdGlvbjpmaXhlZDtcblx0Zm9udC1zaXplOiAwLjlyZW07XG5cdHBhZGRpbmctbGVmdDogMC43NXJlbTtcblx0cGFkZGluZy1yaWdodDogMC44NXJlbTtcblx0cGFkZGluZy10b3A6IDAuMnJlbTtcblx0dG9wOjJweDtcbn1cbi5ob21lX2hlYWR7XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRwYWRkaW5nLXRvcDogMC4xcmVtO1xuXHRwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59XG5cbi5nYW1laW5mb3tcblx0Zm9udC1zaXplOiAwLjlyZW07XG5cdGZsb2F0OnJpZ2h0O1xuXHRwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuLmdhbWVyZWZyZXNoe1xuXHRmb250LXNpemU6IDAuOXJlbTtcblx0ZmxvYXQ6cmlnaHQ7XG5cdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG4vLyAucHVsbGRvd257XG4vLyBcdHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLnNsaWRlci1zbGlkZSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuLnRvdGFsX3dyaXRle1xuXHRwYWRkaW5nLWJvdHRvbTo1MHB4O1xufVxuXG4udXBfYXJyb3d7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1sZWZ0OiAyNS40NXJlbTtcblx0cGFkZGluZy10b3A6IDAuMXJlbTtcblx0Ym90dG9tOjE5cHg7XG5cdGhlaWdodDo2MDsgXG5cdHdpZHRoOjEyMDtcbn1cbi5mb290ZXJfdG9vbGJhcntcblx0aGVpZ2h0OiAxMDAlO1xufVxuLmZvb3Rlcntcblx0aGVpZ2h0OiAxMCU7XHRcbn1cblxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ2FtZWNhbnZhcyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGFyYWZvb3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuODVyZW07XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gIHRvcDogMnB4O1xufVxuXG4uaG9tZV9oZWFkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmctdG9wOiAwLjFyZW07XG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbn1cblxuLmdhbWVpbmZvIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cblxuLmdhbWVyZWZyZXNoIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbn1cblxuLnNsaWRlci1zbGlkZSB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4udG90YWxfd3JpdGUge1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLnVwX2Fycm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI1LjQ1cmVtO1xuICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICBib3R0b206IDE5cHg7XG4gIGhlaWdodDogNjA7XG4gIHdpZHRoOiAxMjA7XG59XG5cbi5mb290ZXJfdG9vbGJhciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZvb3RlciB7XG4gIGhlaWdodDogMTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal/modal.page */
    "./src/app/modal/modal.page.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */


    var _services_multiplayer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/multiplayer.service */
    "./src/app/services/multiplayer.service.ts");

    var HomePage_1;
    let enableDice = 1;
    let game;
    let player = {
      image: null,
      position: 0,
      targetPosition: 0,
      // position: 68,
      movementTween: null
    }; // Aman's Global Variables - For Generic Game Algo

    let bDicePause = false;
    let gameconfig, positionConfig;
    let iDisplacement = 0;
    let iSnakeLadderBase = 0;
    let iOld_state = 0;
    let iCurrent_state = 0;
    let iReverseTo = 0;
    let iRoll;
    let iOld_ReverseTo = 0; //Jit's variables

    let dice, result, board, playerSprite, initHeight, positions, diceSound, ladderSound, snakeSound, start, scope, posts;
    let plots = [];
    let scrollStep = 0.05;
    let sixRepeat = 0; // Make 0 on reset the game

    let retreatPos = 0; // Make 0 on reset the game

    let diceRolled = 0; // Make 0 on reset the game

    let isShownToast = 0; // Make 0 on reset the game
    // localStorage.clear();

    let arr = {};
    let statResultRolled = 0;
    let statDiceRoll = [];
    let statResult = [];
    let statPosition = [];
    let gotSnakeOrLadder = false; // let toastShownFor = [67, 69, 70, 71];

    let endToastShown = false;
    let isToastDisplay = false;
    let toastMSG;
    let text;
    let stageTxt;
    let chakraTxt;
    let style = {
      font: "24px Arial",
      wordWrap: true,
      align: "center",
      wordWrapWidth: 200
    };
    let confJson, posConfig;
    let bLadderSnakeFacePressed = false;
    let boot;
    let mainState;
    let that;
    let multPlay;
    let HomePage = HomePage_1 = class HomePage {
      constructor(socket, navCtrl, platform, camera, router, http, events, modal, storage, loadingCtrl, multiplay) {
        // console.log('Started');
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.camera = camera;
        this.router = router;
        this.http = http;
        this.events = events;
        this.modal = modal;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.multiplay = multiplay;
        this.image = '';
        this.classReference = HomePage_1;
        this.boot = {
          preload() {
            game.load.image("board", "assets/game/board.jpg");
            game.load.image("player", "assets/game/token4.png");
            game.load.spritesheet("dice", "assets/game/dice.png", 100, 103, 9);
            game.load.audio('diceSound', 'assets/game/dice.mp3');
            game.load.audio('ladderSound', 'assets/game/ascend.mp3');
            game.load.audio('snakeSound', 'assets/game/descend.mp3');
            game.scale.maxWidth = 900;
            game.scale.maxHeight = 900;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = false;
            game.scale.setShowAll();
            game.scale.refresh();
          },

          create() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.stage.backgroundColor = "#FFC177";
            game.state.start("main");
          }

        };
        this.mainState = {
          preload() {
            gameconfig = [{
              "x": 50,
              "y": 50,
              "posX": 0,
              "posY": 62.5,
              "postID": 1795,
              "cellno": 1,
              "name": "Iron Pillar, Qutub Complex, Mehrauli",
              "desc": "Iron Pillar, Qutub Complex, Mehrauli - 1",
              "blogID": 543,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 999, 999]
                }
              }
            }, {
              "x": 50,
              "y": 150,
              "posX": 0,
              "posY": 100,
              "postID": 1808,
              "cellno": 2,
              "name": "Suraj kund",
              "desc": "Suraj kund - 2",
              "blogID": 544,
              "lat": "28°29'01.9\"N",
              "long": "77°17'00.6\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 999, 999]
                }
              }
            }, {
              "x": 50,
              "y": 250,
              "posX": 0,
              "posY": 200,
              "postID": 1803,
              "cellno": 3,
              "name": "Lal kot",
              "desc": "Lal kot - 3",
              "blogID": 545,
              "lat": "28°48'53.4\"N",
              "long": "77°09'05.8\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 43, 43, 43, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 999, 999]
                }
              }
            }, {
              "x": 50,
              "y": 350,
              "posX": 0,
              "posY": 300,
              "postID": 1805,
              "cellno": 4,
              "name": "Agrasan ki bauli",
              "desc": "Agrasan ki bauli - 4",
              "blogID": 546,
              "lat": "28°37'34.3\"N",
              "long": "77°13'30.3\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 999, 999]
                }
              }
            }, {
              "x": 50,
              "y": 450,
              "posX": 0,
              "posY": 400,
              "postID": 1810,
              "cellno": 5,
              "name": "Qila Rai Pithora",
              "desc": "Qila Rai Pithora - 5",
              "blogID": 547,
              "lat": "28°42'32.0\"N",
              "long": "77°11'19.9\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 999, 999]
                }
              }
            }, {
              "x": 50,
              "y": 550,
              "posX": 0,
              "posY": 500,
              "postID": 1816,
              "cellno": 6,
              "name": "Quwwat-ul-islam Mosque",
              "desc": "Quwwat-ul-islam Mosque - 6",
              "blogID": 548,
              "lat": "28°39'38.5\"N",
              "long": "77°10'37.0\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 999, 999]
                }
              }
            }, {
              "x": 50,
              "y": 650,
              "posX": 0,
              "posY": 600,
              "postID": 1814,
              "cellno": 7,
              "name": "Qutub Minar",
              "desc": "Qutub Minar - 7",
              "blogID": 549,
              "lat": "28°42'32.0\"N",
              "long": "77°09'55.7\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 999, 999]
                }
              }
            }, {
              "x": 50,
              "y": 750,
              "posX": 0,
              "posY": 700,
              "postID": 1816,
              "cellno": 8,
              "name": "Hauz-i-Shamsi",
              "desc": "Hauz-i-Shamsi - 8",
              "blogID": 550,
              "lat": "28°41'57.3\"N",
              "long": "77°10'18.6\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 999, 999]
                }
              }
            }, {
              "x": 150,
              "y": 750,
              "posX": 100,
              "posY": 700,
              "postID": 1818,
              "cellno": 9,
              "name": "Dargah of Qutubuddin Bakhtiyar Qaki",
              "desc": "Dargah of Qutubuddin Bakhtiyar Qaki - 9",
              "blogID": 551,
              "lat": "28°37'54.4\"N",
              "long": "77°11'08.2\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 34, 34, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 999, 999]
                }
              }
            }, {
              "x": 250,
              "y": 750,
              "posX": 200,
              "posY": 700,
              "postID": 1820,
              "cellno": 10,
              "name": "Tomb of Iltutmish",
              "desc": "Tomb of Iltutmish - 10",
              "blogID": 552,
              "lat": "28°39'38.5\"N",
              "long": "77°10'37.0\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 999, 999]
                }
              }
            }, {
              "x": 350,
              "y": 750,
              "posX": 300,
              "posY": 700,
              "postID": 1822,
              "cellno": 11,
              "name": "Balban’s Tomb",
              "desc": "Balban’s Tomb - 10",
              "blogID": 553,
              "lat": "28°41'22.6\"N",
              "long": "77°13'51.0\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 999, 999]
                }
              }
            }, {
              "x": 450,
              "y": 750,
              "posX": 400,
              "posY": 700,
              "postID": 1824,
              "cellno": 12,
              "name": "Siri",
              "desc": "Siri - 12",
              "blogID": 554,
              "lat": "28°32'57.8\"N",
              "long": "77°12'59.1\"E",
              "info": {
                "movement": {
                  "displacement": [-11, -11, -11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
                  "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999]
                }
              }
            }, {
              "x": 550,
              "y": 750,
              "posX": 500,
              "posY": 700,
              "postID": 1826,
              "cellno": 13,
              "name": "Hauz Khas",
              "desc": "Hauz Khas - 13",
              "blogID": 555,
              "lat": "28°32'50.6\"N",
              "long": "77°12'09.5\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 999, 999]
                }
              }
            }, {
              "x": 650,
              "y": 750,
              "posX": 600,
              "posY": 700,
              "postID": 1828,
              "cellno": 14,
              "name": "Alai Darwaza",
              "desc": "Alai Darwaza - 14",
              "blogID": 556,
              "lat": "28°31'45.0\"N",
              "long": "77°11'10.9\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 999, 999]
                }
              }
            }, {
              "x": 750,
              "y": 750,
              "posX": 700,
              "posY": 700,
              "postID": 1830,
              "cellno": 15,
              "name": "Alauddin Khilji’s Tomb and Madrassa",
              "desc": "Alauddin Khilji’s Tomb and Madrassa - 15",
              "blogID": 557,
              "lat": "28°31'47.0\"N",
              "long": "77°11'03.2\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 999, 999]
                }
              }
            }, {
              "x": 730,
              "y": 650,
              "posX": 710,
              "posY": 600,
              "postID": 1832,
              "cellno": 16,
              "name": "Alai Minar",
              "desc": "Alai Minar - 16",
              "blogID": 558,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 999, 999]
                }
              }
            }, {
              "x": 730,
              "y": 550,
              "posX": 710,
              "posY": 500,
              "postID": 1834,
              "cellno": 17,
              "name": "Hazrat Nizamuddin Auliya",
              "desc": "Hazrat Nizamuddin Auliya - 17",
              "blogID": 559,
              "lat": "28°35'29.0\"N",
              "long": "77°14'30.7\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 8, 8, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 999, 999]
                }
              }
            }, {
              "x": 730,
              "y": 450,
              "posX": 710,
              "posY": 400,
              "postID": 1836,
              "cellno": 18,
              "name": "Tughlaqabad",
              "desc": "Tughlaqabad - 18",
              "blogID": 560,
              "lat": "28°47'07.9\"N",
              "long": "77°15'35.2\"E",
              "info": {
                "movement": {
                  "displacement": [-17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
                  "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999]
                }
              }
            }, {
              "x": 730,
              "y": 350,
              "posX": 710,
              "posY": 300,
              "postID": 1839,
              "cellno": 19,
              "name": "Adilabad / Muhammadabad fort",
              "desc": "Adilabad / Muhammadabad fort - 19",
              "blogID": 561,
              "lat": "28°40'11.7\"N",
              "long": "77°17'15.7\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 999, 999]
                }
              }
            }, {
              "x": 730,
              "y": 250,
              "posX": 710,
              "posY": 200,
              "postID": 1841,
              "cellno": 20,
              "name": "Jahanpannah",
              "desc": "Jahanpannah - 20",
              "blogID": 562,
              "lat": "28°32'47.5\"N",
              "long": "77°12'23.4\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 999, 999]
                }
              }
            }, {
              "x": 730,
              "y": 150,
              "posX": 710,
              "posY": 100,
              "postID": 1849,
              "cellno": 21,
              "name": "Satpula",
              "desc": "Satpula - 21",
              "blogID": 563,
              "lat": "28°43'05.2\"N",
              "long": "77°12'17.5\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 999, 999]
                }
              }
            }, {
              "x": 730,
              "y": 50,
              "posX": 710,
              "posY": 0,
              "postID": 1851,
              "cellno": 22,
              "name": "Ferozabad and Kotla Feroz Shah",
              "desc": "Ferozabad and Kotla Feroz Shah - 20",
              "blogID": 564,
              "lat": "28°38'06.5\"N",
              "long": "77°14'33.6\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 999, 999]
                }
              }
            }, {
              "x": 648,
              "y": 50,
              "posX": 628,
              "posY": 0,
              "postID": 1853,
              "cellno": 23,
              "name": "Asokan Pillar (Delhi-Topra)",
              "desc": "Asokan Pillar (Delhi-Topra) - 23",
              "blogID": 565,
              "lat": "30°07'33.9\"N",
              "long": "77°09'42.9\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 999, 999]
                }
              }
            }, {
              "x": 530,
              "y": 50,
              "posX": 510,
              "posY": 0,
              "postID": 1855,
              "cellno": 24,
              "name": "Kushk-i-shikhar",
              "desc": "Kushk-i-shikhar - 24",
              "blogID": 566,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 999, 999]
                }
              }
            }, {
              "x": 448,
              "y": 50,
              "posX": 428,
              "posY": 0,
              "postID": 1857,
              "cellno": 25,
              "name": "Chiragh-e-Roshan Dehlvi",
              "desc": "Dargah of Nasiruddin Chiragh-e-Roshan Dehlvi - 25",
              "blogID": 567,
              "lat": "28°32'35.1\"N",
              "long": "77°13'32.9\"E",
              "info": {
                "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 999, 999]
              }
            }, {
              "x": 330,
              "y": 50,
              "posX": 310,
              "posY": 0,
              "postID": 1859,
              "cellno": 26,
              "name": "Khirki Mosque",
              "desc": "Khirki Mosque - 26",
              "blogID": 568,
              "lat": "28°32'06.9\"N",
              "long": "77°13'09.8\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 999, 999]
                }
              }
            }, {
              "x": 230,
              "y": 50,
              "posX": 210,
              "posY": 0,
              "postID": 1861,
              "cellno": 27,
              "name": "Lodhi Garden",
              "desc": "Lodhi Garden - 27",
              "blogID": 569,
              "lat": "28°35'25.6\"N",
              "long": "77°13'14.3\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, -2, -2, -2, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 999, 999]
                }
              }
            }, {
              "x": 130,
              "y": 50,
              "posX": 110,
              "posY": 0,
              "postID": 1864,
              "cellno": 28,
              "name": "Jahaz Mahal",
              "desc": "Jahaz Mahal - 28",
              "blogID": 570,
              "lat": "28°31'09.4\"N",
              "long": "77°10'45.3\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 21, 21, 21, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 27, 999, 999]
                }
              }
            }, {
              "x": 148,
              "y": 150,
              "posX": 128,
              "posY": 100,
              "postID": 1870,
              "cellno": 29,
              "name": "Moth ki masjid",
              "desc": "Moth ki masjid - 31",
              "blogID": 571,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 999, 999]
                }
              }
            }, {
              "x": 130,
              "y": 250,
              "posX": 110,
              "posY": 200,
              "postID": 1868,
              "cellno": 30,
              "name": "Jamali Kamali Mosque and Tomb",
              "desc": "Jamali Kamali Mosque and Tomb - 30",
              "blogID": 572,
              "lat": "28°31'29.4\"N",
              "long": "77°11'13.7\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 29, 999, 999]
                }
              }
            }, {
              "x": 148,
              "y": 350,
              "posX": 128,
              "posY": 300,
              "postID": 1870,
              "cellno": 31,
              "name": "Din-Pannah",
              "desc": "Din-Pannah - 31",
              "blogID": 573,
              "lat": "28°36'42.9\"N",
              "long": "77°14'29.9\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 999, 999]
                }
              }
            }, {
              "x": 130,
              "y": 450,
              "posX": 110,
              "posY": 400,
              "postID": 1872,
              "cellno": 32,
              "name": "Purana Qila",
              "desc": "Sher Shahbad, Purana Qila - 32",
              "blogID": 574,
              "lat": "28°36'34.5\"N",
              "long": "77°14'37.4\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  "state": [0, 1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  "return": [999, 999, 999, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
              }
            }, {
              "x": 148,
              "y": 550,
              "posX": 128,
              "posY": 500,
              "postID": 1843,
              "cellno": 33,
              "name": "Humayun’s Tomb",
              "desc": "Humayun’s Tomb - 33",
              "blogID": 575,
              "lat": "28°35'36.3\"N",
              "long": "77°15'02.5\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 999, 999]
                }
              }
            }, {
              "x": 130,
              "y": 650,
              "posX": 110,
              "posY": 600,
              "postID": 1845,
              "cellno": 34,
              "name": "Abdul Rahim Khan-i-Khanan",
              "desc": "Abdul Rahim Khan-i-Khanan - 34",
              "blogID": 576,
              "lat": "28°35'17.5\"N",
              "long": "77°14'52.7\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 999, 999]
                }
              }
            }, {
              "x": 230,
              "y": 650,
              "posX": 210,
              "posY": 600,
              "postID": 1874,
              "cellno": 35,
              "name": "Shahjahanabad",
              "desc": "Shahjahanabad - 35",
              "blogID": 577,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 999, 999]
                }
              }
            }, {
              "x": 330,
              "y": 650,
              "posX": 310,
              "posY": 600,
              "postID": 1876,
              "cellno": 36,
              "name": "Qila Mubarak",
              "desc": "Qila Mubarak - 36",
              "blogID": 578,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 999, 1, 1, 999, 2, 2, 999, 3, 3, 999, 4, 4, 999, 5, 5, 999, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 999, 999]
                }
              }
            }, {
              "x": 448,
              "y": 650,
              "posX": 428,
              "posY": 600,
              "postID": 1878,
              "cellno": 37,
              "name": "Manjile-e-nigambodh",
              "desc": "Manjile-e-nigambodh - 37",
              "blogID": 579,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 22, 22, 22, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 999, 999]
                }
              }
            }, {
              "x": 530,
              "y": 650,
              "posX": 510,
              "posY": 600,
              "postID": 1880,
              "cellno": 38,
              "name": "Chandini Chowk",
              "desc": "Chandini Chowk - 38",
              "blogID": 580,
              "lat": "28°39'03.1\"N",
              "long": "77°13'48.9\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 999, 999]
                }
              }
            }, {
              "x": 640,
              "y": 650,
              "posX": 628,
              "posY": 600,
              "postID": 1882,
              "cellno": 39,
              "name": "Masjid-e-jahan-numa",
              "desc": "Masjid-e-jahan-numa - 39",
              "blogID": 581,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 999, 999]
                }
              }
            }, {
              "x": 630,
              "y": 550,
              "posX": 610,
              "posY": 500,
              "postID": 1884,
              "cellno": 40,
              "name": "Fatehpuri Masjid",
              "desc": "Fatehpuri Masjid - 40",
              "blogID": 582,
              "lat": "28°39'24.7\"N",
              "long": "77°13'21.4\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 999, 999]
                }
              }
            }, {
              "x": 648,
              "y": 450,
              "posX": 628,
              "posY": 400,
              "postID": 1886,
              "cellno": 41,
              "name": "Kashmiri Gate",
              "desc": "Kashmiri Gate - 41",
              "blogID": 583,
              "lat": "28°40'02.4\"N",
              "long": "77°13'44.1\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 54, 54, 54, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 999, 999]
                }
              }
            }, {
              "x": 630,
              "y": 350,
              "posX": 610,
              "posY": 300,
              "postID": 1888,
              "cellno": 42,
              "name": "Shalimar Bagh",
              "desc": "Shalimar Bagh - 42",
              "blogID": 584,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 999, 999]
                }
              }
            }, {
              "x": 648,
              "y": 250,
              "posX": 628,
              "posY": 200,
              "postID": 1890,
              "cellno": 43,
              "name": "Jantar Mantar",
              "desc": "Jantar Mantar - 43",
              "blogID": 585,
              "lat": "28°37'37.8\"N",
              "long": "77°13'00.2\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 999, 999]
                }
              }
            }, {
              "x": 630,
              "y": 150,
              "posX": 610,
              "posY": 100,
              "postID": 1847,
              "cellno": 44,
              "name": "Sunehri Masjid",
              "desc": "Sunehri Masjid- 44",
              "blogID": 586,
              "lat": "28°39'21.8\"N",
              "long": "77°13'54.7\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  "state": [0, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  "return": [999, 999, 999, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
              }
            }, {
              "x": 530,
              "y": 150,
              "posX": 510,
              "posY": 100,
              "postID": 1892,
              "cellno": 45,
              "name": "Safdarjung’s Tomb",
              "desc": "Safdarjung’s Tomb - 45",
              "blogID": 587,
              "lat": "28°35'22.2\"N",
              "long": "77°12'37.9\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, -11, -11, -11, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 999, 999]
                }
              }
            }, {
              "x": 450,
              "y": 150,
              "posX": 430,
              "posY": 100,
              "postID": 1894,
              "cellno": 46,
              "name": "Kalkaji Temple",
              "desc": "Kalkaji Temple - 46",
              "blogID": 588,
              "lat": "28°43'39.9\"N",
              "long": "77°18'34.8\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 999, 999]
                }
              }
            }, {
              "x": 330,
              "y": 150,
              "posX": 310,
              "posY": 100,
              "postID": 1897,
              "cellno": 47,
              "name": "Gurudwara Bangla Sahib",
              "desc": "Gurudwara Bangla Sahib - 47",
              "blogID": 589,
              "lat": "28°37'34.7\"N",
              "long": "77°12'33.9\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 46, 999, 999]
                }
              }
            }, {
              "x": 230,
              "y": 150,
              "posX": 210,
              "posY": 100,
              "postID": 1899,
              "cellno": 48,
              "name": "Gurudwara Sis Ganj Sahib",
              "desc": "Gurudwara Sis Ganj Sahib - 48",
              "blogID": 590,
              "lat": "28°39'21.6\"N",
              "long": "77°13'57.2\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 999, 999]
                }
              }
            }, {
              "x": 230,
              "y": 250,
              "posX": 210,
              "posY": 200,
              "postID": 1901,
              "cellno": 49,
              "name": "Phoolwalon ki Sair/ Sair-e- Gulfaroshan",
              "desc": "Phoolwalon ki Sair/ Sair-e- Gulfaroshan - 49",
              "blogID": 591,
              "lat": "28°31'09.3\"N",
              "long": "77°10'46.0\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 999, 999]
                }
              }
            }, {
              "x": 230,
              "y": 350,
              "posX": 210,
              "posY": 300,
              "postID": 1903,
              "cellno": 50,
              "name": "Ghalib ki Haveli",
              "desc": "Ghalib ki Haveli - 50",
              "blogID": 592,
              "lat": "28°39'15.7\"N",
              "long": "77°13'32.2\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, -6, -6, -6, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 999, 999]
                }
              }
            }, {
              "x": 230,
              "y": 450,
              "posX": 210,
              "posY": 400,
              "postID": 1905,
              "cellno": 51,
              "name": "Metcalfe’s House",
              "desc": "Metcalfe’s House - 51",
              "blogID": 593,
              "lat": "28°31′21″N",
              "long": "77°11′13″E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 999, 999]
                }
              }
            }, {
              "x": 230,
              "y": 550,
              "posX": 210,
              "posY": 500,
              "postID": 1907,
              "cellno": 52,
              "name": "Dilkhusha",
              "desc": "Dilkhusha - 52",
              "blogID": 594,
              "lat": "28°41'57.3\"N",
              "long": "77°13'44.1\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 999, 999]
                }
              }
            }, {
              "x": 330,
              "y": 550,
              "posX": 310,
              "posY": 500,
              "postID": 1909,
              "cellno": 53,
              "name": "Zafar Mahal",
              "desc": "Zafar Mahal - 53",
              "blogID": 595,
              "lat": "28°53'30.5\"N",
              "long": "77°18'21.0\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, -20, -20, -20, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 52, 999, 999]
                }
              }
            }, {
              "x": 450,
              "y": 550,
              "posX": 430,
              "posY": 500,
              "postID": 1911,
              "cellno": 54,
              "name": "Ajitgarh",
              "desc": "Ajitgarh - 54",
              "blogID": 596,
              "lat": "28°40'17.7\"N",
              "long": "28°40'17.7\"N",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 999, 999]
                }
              }
            }, {
              "x": 530,
              "y": 550,
              "posX": 510,
              "posY": 500,
              "postID": 1913,
              "cellno": 55,
              "name": "Maiden’s Hotel, Civil Lines",
              "desc": "Maiden’s Hotel, Civil Lines - 55",
              "blogID": 597,
              "lat": "28°40'28.1\"N",
              "long": "77°13'34.3\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 999, 999]
                }
              }
            }, {
              "x": 530,
              "y": 450,
              "posX": 510,
              "posY": 400,
              "postID": 1915,
              "cellno": 56,
              "name": "Lutyen’s Delhi",
              "desc": "Lutyen’s Delhi - 56",
              "blogID": 598,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 999, 999]
                }
              }
            }, {
              "x": 530,
              "y": 350,
              "posX": 510,
              "posY": 300,
              "postID": 1917,
              "cellno": 57,
              "name": "Rashtrapati Bhawan",
              "desc": "Rashtrapati Bhawan - 57",
              "blogID": 599,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 999, 999]
                }
              }
            }, {
              "x": 530,
              "y": 250,
              "posX": 510,
              "posY": 200,
              "postID": 1919,
              "cellno": 58,
              "name": "Parlament House",
              "desc": "Parlament House - 58",
              "blogID": 600,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, -55, -55, -55, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 999, 999]
                }
              }
            }, {
              "x": 448,
              "y": 250,
              "posX": 428,
              "posY": 200,
              "postID": 1921,
              "cellno": 59,
              "name": "India Gate",
              "desc": "India Gate - 59",
              "blogID": 601,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 999, 999]
                }
              }
            }, {
              "x": 330,
              "y": 250,
              "posX": 310,
              "posY": 200,
              "postID": 1927,
              "cellno": 60,
              "name": "University of Delhi",
              "desc": "University of Delhi - 60",
              "blogID": 602,
              "lat": "28°41'16.1\"N",
              "long": "77°12'37.8\"E",
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 999, 999]
                }
              }
            }, {
              "x": 330,
              "y": 350,
              "posX": 310,
              "posY": 300,
              "postID": 1930,
              "cellno": 61,
              "name": "Connaught Place",
              "desc": "Connaught Place - 61",
              "blogID": 603,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, -39, -39, -39, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 999, 999]
                }
              }
            }, {
              "x": 330,
              "y": 450,
              "posX": 310,
              "posY": 400,
              "postID": 1932,
              "cellno": 62,
              "name": "Lajpat Nagar",
              "desc": "Lajpat Nagar - 62",
              "blogID": 604,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 999, 999]
                }
              }
            }, {
              "x": 448,
              "y": 450,
              "posX": 428,
              "posY": 400,
              "postID": 1934,
              "cellno": 63,
              "name": "Rajghat",
              "desc": "Rajghat - 63",
              "blogID": 605,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 999, 999]
                }
              }
            }, {
              "x": 450,
              "y": 350,
              "posX": 430,
              "posY": 300,
              "postID": 1936,
              "cellno": 64,
              "name": "Self Discovery",
              "desc": "Self Discovery - 64",
              "blogID": 606,
              "lat": 0,
              "long": 0,
              "info": {
                "movement": {
                  "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
                  "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
                  "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 999, 999]
                }
              }
            }];
            positionConfig = {
              "initCellPos": 0,
              "initPlayerPos": 0,
              "initTargetPos": 0,
              "shortTitle": "BY",
              "retreatCellResult": 6,
              "retreatCellOnCount": 3,
              "initialMoveResult": 6,
              "firstLandingCell": 0,
              "cellDimentionX": 85,
              "cellDimentionY": 85
            };
            /*game.load.json('gameconfig', 'assets/game/gameconfig.json');*/
          },

          create() {
            /* confJson = game.cache.json.get('gameconfig');*/
            positions = gameconfig;
            posConfig = positionConfig; //positions = confJson.cellConfig;
            //posConfig = confJson.positionConfig;
            //console.log(positions);

            board = game.add.sprite(0, 0, "board"); // playerSprite = game.add.sprite(0, 0);
            // board.addChild(playerSprite);

            playerSprite = game.add.sprite(42.5, 42.5, "player");
            board.addChild(playerSprite); // game.physics.arcade.enable(player);

            player.image = playerSprite;
            dice = game.add.button(350, 810, "dice", this.rollDice, this);
            dice.frame = 6; // this.retriveGameState();

            this.retrieveCellInfo(player.position);
            diceSound = game.add.audio('diceSound');
            ladderSound = game.add.audio('ladderSound');
            snakeSound = game.add.audio('snakeSound'); // board.inputEnabled = true;
            // board.input.enableDrag();
            // board.events.onDragUpdate.add(this.dragUpdate, this);
            // board.enableBody = true;      

            initHeight = board.height;
            this.addTapAreas();
            this.enablePinchToZoom(); // game.sound.setDecodedCallback([diceSound, ladderSound, snakeSound], start, this);
          },

          update() {
            if (player.targetPosition != player.position && (player.movementTween == null || !player.movementTween.isRunning)) {
              console.log("Target " + player.targetPosition);

              if (player.targetPosition > player.position && bLadderSnakeFacePressed == false) {
                player.position++;
                this.movePlayer();
              } else {
                // Got Snake
                console.log("Here");
                player.position = player.targetPosition;
                alert(player.targetPosition);
                this.movePlayer();
                bDicePause = false;
              } // console.log("Target Position -- "+player.targetPosition);
              // console.log("Player Position -- "+player.position);

            }

            if (player.targetPosition == player.position && (player.movementTween == null || !player.movementTween.isRunning)) {
              console.log("Old State " + iOld_state);

              if (dice.frame < 6) {
                if (iSnakeLadderBase < 0) {
                  bDicePause = true;
                  dice.frame = 7;
                  this.retrieveCellInfo(player.position);
                } else if (iSnakeLadderBase > 0) {
                  bDicePause = true;
                  dice.frame = 8;
                  this.retrieveCellInfo(player.position);
                } else {
                  bDicePause = false;

                  if (player.position == posConfig.initPlayerPos) {
                    game.time.events.add(400, function () {
                      dice.frame = 6;
                    });
                  } else {
                    game.time.events.add(400, function () {
                      dice.frame = 6;
                    });
                  }

                  this.retrieveCellInfo(player.position);
                }

                this.saveGameState(); // console.log("Reverse "+ iReverseTo);
              } else if (dice.frame == 7 && bLadderSnakeFacePressed == true) {
                bLadderSnakeFacePressed = false;
                iSnakeLadderBase = 0;
                bDicePause = false;
                dice.frame = 6;
                this.retrieveCellInfo(player.position);
                this.saveGameState(); // console.log("It's a Snake");
              } else if (dice.frame == 8 && bLadderSnakeFacePressed == true) {
                bLadderSnakeFacePressed = false;
                iSnakeLadderBase = 0;
                bDicePause = false;
                dice.frame = 6;
                this.retrieveCellInfo(player.position);
                this.saveGameState(); // console.log("It's a Ladder");
              }
            }
          },

          rollDice() {
            diceSound.play();
            diceRolled++;
            board.scale.set(1);
            board.position.set(0);

            if (dice.frame == 6) {
              result = game.rnd.integerInRange(1, 6); // result = 6;

              dice.frame = result - 1; // this.initiatePawnMovement();
            } else if (dice.frame > 6) {
              bLadderSnakeFacePressed = true; // this.initiatePawnMovement();
            } // console.log("Current Target Position - " + player.targetPosition + " - Current Position " + player.position);


            this.initiatePawnMovement(); // else if (dice.frame == 7) {
            //   isLadder = 2;
            // } else if (dice.frame == 8) {
            //   isLadder = 1;
            // }
          },

          initiatePawnMovement() {
            if (bDicePause == false) {
              // iRoll = dice.frame + 1;
              // iRoll = 6;
              iRoll = result; // console.log("iRoll Set - "+iRoll);

              iOld_state = iCurrent_state; // console.log("State of Six Throw Set "+ iOld_state);

              iCurrent_state = positions[player.position].info.movement.state[iRoll * 3 + iOld_state]; // console.log("Current State -- "+iCurrent_state);

              if (iCurrent_state == 999) {
                iCurrent_state = iOld_state;
              }

              iDisplacement = positions[player.position].info.movement.displacement[iOld_state]; //console.log("Calculated Zero Displacement is "+iDisplacement+ "For a Roll of "+iRoll);

              if (iDisplacement == 0) {
                iDisplacement = positions[player.position].info.movement.displacement[iRoll * 3 + iOld_state]; //console.log("Re-calculating Displacement is "+iDisplacement+ "For a Roll of "+iRoll);
              } // console.log ("Player.Position - " + player.position + " iDisplacement - " + iDisplacement);
              // console.log ("Return Cell " + iReverseTo)


              if (iDisplacement < 999) {
                iSnakeLadderBase = positions[player.position + iDisplacement].info.movement.displacement[iCurrent_state];
              }

              console.log("Calculated Displacement is " + iDisplacement + " -- For a Roll of " + iRoll);

              if (iDisplacement != 0 && iDisplacement < 999 && bDicePause == false) {
                // console.log("Ready to set Target Position")
                iOld_ReverseTo = iReverseTo;
                iReverseTo = positions[player.position].info.movement.return[iRoll * 3 + iOld_state];

                if (iReverseTo == 999) {
                  iReverseTo = iOld_ReverseTo;
                } // console.log("Reverse "+iReverseTo);


                player.targetPosition = player.position + iDisplacement; // player.targetPosition = player.position + iDisplacement;
              } else if (iDisplacement == 999) {
                player.targetPosition = iReverseTo;
              } // console.log("Going to the target - " + player.targetPosition + " - Current Position " + player.position);

            } else {
              // console.log("Dice Status -- "+bDicePause);
              // player.targetPosition = player.position + iDisplacement;
              player.targetPosition = player.position + iSnakeLadderBase; // console.log("GO TO -- "+player.targetPosition);
              // console.log("SNAKE LADDER BASE -- "+iSnakeLadderBase);
              // bDicePause = false;
              // dice.frame = 6;
            } //console.log("Dice Frame " + dice.frame);


            multPlay.sentPlayerMove(player.targetPosition);
          },

          movePlayer() {
            if (player.movementTween != null) {
              player.movementTween.stop(); //remove the last tween from the manager, will be garbage collected
            }

            player.movementTween = game.add.tween(player.image).to({
              x: positions[player.position].x,
              y: positions[player.position].y
            }, 600, Phaser.Easing.Linear.None, true);
            game.add.tween(player.image.anchor).to({
              y: 0.5
            }, 200, Phaser.Easing.Linear.None, true, 0, 0, true);
          },

          climbLadder() {
            statDiceRoll.push(diceRolled);
            statResult.push(statResultRolled);
            statPosition.push(player.position);

            if (positions[player.position].snakeLadder != 0) {
              // window.setTimeout(function(){},3000);
              if (positions[player.position].snakeLadder > player.position) {
                ladderSound.play();
              } else {
                snakeSound.play();
              }

              player.targetPosition = positions[player.position].snakeLadder;
              player.position = positions[player.position].snakeLadder;
              statResultRolled = 0;
              gotSnakeOrLadder = true;
              this.movePlayer();
              return true;
            }

            return false;
          },

          saveGameState() {
            // localStorage.set(posConfig.shortTitle+"playerPosition", player.position);
            console.log("bDicePause -- " + bDicePause);
            console.log("iDisplacement -- " + iDisplacement);
            console.log("iSnakeLadderBase -- " + iSnakeLadderBase);
            console.log("iOld_state -- " + iOld_state);
            console.log("iCurrent_state -- " + iCurrent_state);
            console.log("iReverseTo -- " + iReverseTo);
            console.log("iOld_ReverseTo -- " + iOld_ReverseTo);
            console.log("bLadderSnakeFacePressed -- " + bLadderSnakeFacePressed);
            var gameSaveObj = {
              "bDicePause": bDicePause,
              "iDisplacement": iDisplacement,
              "iSnakeLadderBase": iSnakeLadderBase,
              "iOld_state": iOld_state,
              "iCurrent_state": iCurrent_state,
              "iReverseTo": iReverseTo,
              "iOld_ReverseTo": iOld_ReverseTo,
              "bLadderSnakeFacePressed": bLadderSnakeFacePressed
            }; // localStorage.setObject(posConfig.shortTitle+"gameSaveObj",gameSaveObj);
            // localStorage.set("sixRepeat", sixRepeat);
            // localStorage.set("retreatPos", retreatPos);
            // localStorage.set("diceRolled", diceRolled);
          },

          retriveGameState() {
            var pos = parseInt(localStorage.get(posConfig.shortTitle + "playerPosition", 0));

            if (pos !== 0) {
              player.image.x = positions[pos].x;
              player.image.y = positions[pos].y;
              player.position = pos;
              player.targetPosition = pos;
              stageTxt = game.add.text(50, 830, "Stage - " + positions[pos].stage, style);
              chakraTxt = game.add.text(580, 830, "Chakra - " + positions[pos].chakra, style);
            } else {
              // Starting position
              player.image.x = positions[posConfig.initCellPos].x;
              player.image.y = positions[posConfig.initCellPos].y;
              player.position = posConfig.initPlayerPos;
              player.targetPosition = posConfig.initTargetPos; // console.log(posConfig.initCellPos);

              stageTxt = game.add.text(50, 830, "Stage - " + positions[posConfig.initCellPos].stage, style);
              chakraTxt = game.add.text(580, 830, "Chakra - " + positions[posConfig.initCellPos].chakra, style);
            } // console.log(positions[pos].stage);


            player.image.anchor.x = 0.1;
            player.image.anchor.y = 0.1;
            player.image.pivot.x = 0.5;
            player.image.pivot.y = 0.5;
            sixRepeat = parseInt(localStorage.get("sixRepeat", 0));
            retreatPos = parseInt(localStorage.get("retreatPos", 0));
            diceRolled = parseInt(localStorage.get("diceRolled", 0));
            /* ############ Retrive Game Statistics ################ */

            var array = localStorage.getObject("gameStatObj");

            if (array.diceRolled) {
              statDiceRoll = array.diceRolled;
              statResult = array.result;
              statPosition = array.position;
            }
          },

          retrieveCellInfo(position) {// stageTxt.kill();
            // chakraTxt.kill();
            // scope.$parent.cell.name = positions[position].info.name;
            // scope.$parent.cell.quote = positions[position].info.quote[Math.floor(Math.random() * positions[position].info.quote.length)].name;
            // scope.$parent.cell.postID = positions[position].postID;
            // stageTxt = game.add.text(50, 830, "Stage - " + positions[position].stage, style);
            // chakraTxt = game.add.text(580, 830, "Chakra - " + positions[position].chakra, style);
            // scope.$apply();
          },

          enablePinchToZoom() {
            let myElement = document.getElementById('game-canvas');
            let hammertime = new hammerjs__WEBPACK_IMPORTED_MODULE_9__(myElement);
            hammertime.get('pinch').set({
              enable: true,
              domEvents: true
            });
            hammertime.on('pinchstart', function (event) {
              // alert(event.scale);
              if (event.scale > 1) {
                board.inputEnabled = false;
              }
            });
            hammertime.on('pinchout', function (event) {
              // alert(board.scale.x);
              if (event.scale > 1) {
                board.scale.set(event.scale);
                board.position.x = 0;
                board.position.y = 0;
              } // alert(board.position.y);
              // if(board.position.y > 800){
              // }
              // if (event.scale < 2) {
              //   if (board.scale.x < event.scale) {
              //     board.scale.set(event.scale);
              //     // board.inputEnabled = false;
              //     // board.input.enableDrag(false);
              //   }
              // }
              // else{
              //    board.inputEnabled = true;
              // }
              // Update Drag
              //            var fixBottomHeight = board.height - initHeight;
              //           if (board.position.x > 0) {
              //             board.position.x = 0;
              //           }
              //           if (board.position.y > 0) {
              //             board.position.y = 0;
              //           }
              //           if (board.position.y < fixBottomHeight - (fixBottomHeight * 2)) {
              //             alert("fixBottomHeight"+fixBottomHeight);
              // alert("board.position.y"+board.position.y);
              //             board.position.y = fixBottomHeight - (fixBottomHeight * 2);
              //           }

            });
            hammertime.on('pinchin', function (event) {
              if (board.scale.x > 1) {
                if (event.scale < 1) {
                  board.scale.set(1);
                  board.position.x = 0;
                  board.position.y = 0;
                  board.inputEnabled = false;
                } else {
                  board.scale.set(event.scale);
                }
              } // Update Drag
              // var fixBottomHeight = board.height - initHeight;
              // if (board.position.x > 0) {
              //   board.position.x = 0;
              // }
              // if (board.position.y > 0) {
              //   board.position.y = 0;
              // }
              // if (game.world.right < game.world.width) {
              //   var diff = game.world.width - game.world.right;
              //   board.position.x = board.position.x + diff;
              // }
              // if (board.position.y < fixBottomHeight - (fixBottomHeight * 2)) {
              //   board.position.y = fixBottomHeight - (fixBottomHeight * 2);
              // }

            });
            hammertime.on("pinchend", function (event) {
              if (event.scale < 1) {
                board.inputEnabled = false;
              } else {
                board.inputEnabled = true;
                board.input.enableDrag(false); // board.events.onDragUpdate.add(this.dragUpdate, this);
                // alert(board.position.x);
              } // Update Drag
              // var fixBottomHeight = board.height - initHeight;
              // if (board.position.x > 0) {
              //   board.position.x = 0;
              // }
              // if (board.position.y > 0) {
              //   board.position.y = 0;
              // }
              // if (game.world.right < game.world.width) {
              //   var diff = game.world.width - game.world.right;
              //   board.position.x = board.position.x + diff;
              // //   board.inputEnabled = true;
              // // board.input.enableDrag(false);
              // }
              // if (board.position.y < fixBottomHeight - (fixBottomHeight * 2)) {
              //   board.position.y = fixBottomHeight - (fixBottomHeight * 2);
              // }
              // Update Drag

            });
          },

          onDragStart() {
            alert("hiii"); // var fixBottomHeight = board.height - initHeight;
            // if (board.position.x > 0) {
            //   board.position.x = 0;
            // }
            // if (board.position.y > 0) {
            //   board.position.y = 0;
            // }
            // if (game.world.right < game.world.width) {
            //   var diff = game.world.width - game.world.right;
            //   board.position.x = board.position.x + diff;
            // }
            // if (board.position.y < fixBottomHeight - (fixBottomHeight * 2)) {
            //   board.position.y = fixBottomHeight - (fixBottomHeight * 2);
            // }
          },

          addTapAreas() {
            var bmd = game.add.bitmapData(posConfig.cellDimentionX, posConfig.cellDimentionY);
            bmd.ctx.beginPath();
            bmd.ctx.rect(0, 0, 80, 90);
            bmd.ctx.fillStyle = '#FFF';
            bmd.ctx.globalAlpha = 0;
            bmd.ctx.fill();

            for (var i = 0; i < positions.length; i++) {
              plots[i] = game.add.sprite(positions[i].posX, positions[i].posY, bmd);
              board.addChild(plots[i]);
            } //alert(http);


            game.input.onTap.add(this.tapAction, this);
          },

          tapAction(pointer, doubleTap) {
            //let httpObj=new this.http();
            //if (doubleTap) {
            // alert(pointer.x+","+pointer.y);
            for (var i = 0; i < positions.length; i++) {
              let inside = plots[i].getBounds().contains(pointer.x, pointer.y); //alert(inside);

              if (inside) {
                //alert(positions[i].desc);
                that.callfn(positions[i].postID, positions[i].name, positions[i].desc, positions[i].blogID, positions[i].lat, positions[i].long);
                break;
              }
            } //}

          }

        }; // alert(this.constructor.name);
        // this.subscribeexit=this.platform.backButton.subscribeWithPriority(666666,()=>{
        //   if(this.constructor.name=='HomePage')
        //   {
        //     navigator["app"].exitApp();
        //   }
        // });

        this.reloadContent(); // this.http.get('https://riwayatedilli.com/site/wp-json/wp/v2/fetch/initialpost').subscribe(data => {
        // storage.set('postlist', data);
        // console.log(data);
        // },error=>{
        // });

        that = Object.create(this.constructor.prototype);
        multPlay = Object.create(this.multiplay);
        game = new Phaser.Game(900, 900, Phaser.AUTO, 'game-canvas');
        game.state.add('boot', this.boot);
        game.state.add('main', this.mainState);
        game.state.start('boot'); //this.callfn();
      }

      static callfn() {}

      ngOnInit() {
        this.socket.connect(); // this.socket.fromEvent('move-made').subscribe(message => {
        // });
      } // async backbttsub()
      // {
      //   this.backsub=this.subscribe=this.platform.backButton.subscribeWithPriority(666666,()=>{
      //     if(this.constructor.name=="HomePage"){
      //       if(window.confirm("Do you want to exit?"))
      //       {
      //         navigator["app"].exitApp();
      //       }
      //     }
      //   });
      //   return await this.backbttsub().then(()=>console.log('subscribed')); 
      // }
      // async backbttunsub(){
      //   return await this.backsub.unsubscribe().then(()=>console.log('unsunscribed'));
      // }


      reloadContent() {
        this.http.get('https://riwayatedilli.com/site/wp-json/wp/v2/fetch/initialpost').subscribe(data => {
          this.storage.set('postlist', data); // console.log(data);

          this.pulldown = false;
        }, error => {
          this.pulldown = true;
        });
      }

      ngOnDestroy() {}

      doRefresh(event) {
        // console.log('Begin async operation');
        // this.loadingPresent();
        setTimeout(() => {
          this.reloadContent(); // this.loadingdismiss();

          event.target.complete();
        }, 2000);
      }

      loadingPresent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.loadingCtrl.create({
            message: "Please wait until data is loaded"
          }).then(a => {
            a.present().then(() => {});
          });
        });
      }

      loadingdismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
      }

      presentModal(isWalkThrough) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (isWalkThrough) {
            that.modal = yield this.modal.create({
              component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_8__["ModalPage"],
              componentProps: {
                'isWalkThrough': isWalkThrough,
                'blogID': HomePage_1.blogID
              },
              cssClass: 'my-how-modal-css'
            });
          } else {
            that.modal = yield this.modal.create({
              component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_8__["ModalPage"],
              componentProps: {
                'header': HomePage_1.postname,
                'description': HomePage_1.postdesc,
                'post_id': "/post/" + HomePage_1.post_id + "/" + HomePage_1.blogID + "/" + 1,
                'isWalkThrough': isWalkThrough,
                'blogID': HomePage_1.blogID,
                'lat': HomePage_1.lat,
                'long': HomePage_1.long
              },
              cssClass: 'my-custom-modal-css'
            });
          }

          return yield that.modal.present();
        });
      }

      callfn(postid, postname, postdesc, blogID, lat, long) {
        HomePage_1.post_id = postid;
        HomePage_1.postname = postname;
        HomePage_1.postdesc = postdesc;
        HomePage_1.blogID = blogID;
        HomePage_1.lat = lat; // alert(HomePage.blogID);
      }

      otherplayer() {}

      openCam() {
        const options = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(imageData => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64 (DATA_URL):
          //alert(imageData)
          this.image = window.Ionic.WebView.convertFileSrc(imageData);
        }, err => {// Handle error
          // alert("error "+JSON.stringify(err))
        });
      }

      openModal() {//that.myModal=1;
        // alert(that.myModal);
      }

      ionViewWillLeave() {// that.modal.dismiss();
      }

      sendPlayer(playerPos) {// console.log("Target Position of player--"+ playerPos);
      }

    };

    HomePage.ctorParameters = () => [{
      type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["Socket"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }, {
      type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
    }, {
      type: _services_multiplayer_service__WEBPACK_IMPORTED_MODULE_11__["MultiplayerService"]
    }];

    HomePage = HomePage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__["Socket"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _services_multiplayer_service__WEBPACK_IMPORTED_MODULE_11__["MultiplayerService"]])], HomePage); // class multiplayer{
    //   player = {
    //     image: null,
    //     position: 0,
    //     targetPosition:0,
    //     // position: 68,
    //     movementTween: null
    //   };
    // }

    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map