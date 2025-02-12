
// ==UserScript==
// @name           EWT Killer Box(Ae Edition)
// @namespace      ewt
// @version        5.0.6-AeF
// @author         Sudo-su-Bash
// @include        *://*.ewt360.com/*
// @run-at         document-end
// @require        https://code.jquery.com/jquery-3.6.0.min.js
// @connect        *
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM.addStyle
// @grant          GM.xmlhttpRequest
// @grant          GM.getValue
// @grant          GM.setValue
// @description    一个专门用于EWT的辅助插件.
// @updateURL      https://resource.olcoursekb.top/Scripts/RELEASE/latest.js
// @downloadURL    https://resource.olcoursekb.top/Scripts/RELEASE/latest.js
// @connect        api.olcoursekb.top
// @connect        web.ewt360.com
// @connect        gateway.ewt360.com
// @connect        clog.ewt360.com
// ==/UserScript==
(function (exports, $$1) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var $__default = /*#__PURE__*/_interopDefaultLegacy($$1);

    typeof GM_addStyle == "undefined" ? GM.addStyle : GM_addStyle;
    const SGM_xmlhttpRequest = typeof GM_xmlhttpRequest == "undefined" ? GM.xmlHttpRequest : GM_xmlhttpRequest;
    const SGM_getValue = typeof GM_getValue == "undefined" ? GM.getValue : GM_getValue;
    const SGM_setValue = typeof GM_setValue == "undefined" ? GM.setValue : GM_setValue;
    const SGM_info = typeof GM_info == "undefined" ? GM.info : GM_info;

    let headers = {
      CommonHeader: {
        "Origin": "https://web.ewt360.com",
        "Referer": "https://web.ewt360.com/mystudy/",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
        "Ewt-Requestsource": "web",
        "Ewt-Contentstyle": "CamelCase"
      },
      CourseHeader: {
        "Origin": "https://teacher.ewt360.com",
        "Referer": "https://teacher.ewt360.com/",
        "Referurl": "https://teacher.ewt360.com/ewtbend/bend/index/index.html#/homework/play-videos",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
        "Ewt-Requestsource": "web",
        "Ewt-Contentstyle": "CamelCase"
      }
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire (path) {
    	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }

    var cryptoJs = {exports: {}};

    var core = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory();
    	}
    }(commonjsGlobal, function () {

    	/*globals window, global, require*/

    	/**
    	 * CryptoJS core components.
    	 */
    	var CryptoJS = CryptoJS || (function (Math, undefined$1) {

    	    var crypto;

    	    // Native crypto from window (Browser)
    	    if (typeof window !== 'undefined' && window.crypto) {
    	        crypto = window.crypto;
    	    }

    	    // Native crypto in web worker (Browser)
    	    if (typeof self !== 'undefined' && self.crypto) {
    	        crypto = self.crypto;
    	    }

    	    // Native crypto from worker
    	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
    	        crypto = globalThis.crypto;
    	    }

    	    // Native (experimental IE 11) crypto from window (Browser)
    	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
    	        crypto = window.msCrypto;
    	    }

    	    // Native crypto from global (NodeJS)
    	    if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
    	        crypto = commonjsGlobal.crypto;
    	    }

    	    // Native crypto import via require (NodeJS)
    	    if (!crypto && typeof commonjsRequire === 'function') {
    	        try {
    	            crypto = require('crypto');
    	        } catch (err) {}
    	    }

    	    /*
    	     * Cryptographically secure pseudorandom number generator
    	     *
    	     * As Math.random() is cryptographically not safe to use
    	     */
    	    var cryptoSecureRandomInt = function () {
    	        if (crypto) {
    	            // Use getRandomValues method (Browser)
    	            if (typeof crypto.getRandomValues === 'function') {
    	                try {
    	                    return crypto.getRandomValues(new Uint32Array(1))[0];
    	                } catch (err) {}
    	            }

    	            // Use randomBytes method (NodeJS)
    	            if (typeof crypto.randomBytes === 'function') {
    	                try {
    	                    return crypto.randomBytes(4).readInt32LE();
    	                } catch (err) {}
    	            }
    	        }

    	        throw new Error('Native crypto module could not be used to get secure random number.');
    	    };

    	    /*
    	     * Local polyfill of Object.create

    	     */
    	    var create = Object.create || (function () {
    	        function F() {}

    	        return function (obj) {
    	            var subtype;

    	            F.prototype = obj;

    	            subtype = new F();

    	            F.prototype = null;

    	            return subtype;
    	        };
    	    }());

    	    /**
    	     * CryptoJS namespace.
    	     */
    	    var C = {};

    	    /**
    	     * Library namespace.
    	     */
    	    var C_lib = C.lib = {};

    	    /**
    	     * Base object for prototypal inheritance.
    	     */
    	    var Base = C_lib.Base = (function () {


    	        return {
    	            /**
    	             * Creates a new object that inherits from this object.
    	             *
    	             * @param {Object} overrides Properties to copy into the new object.
    	             *
    	             * @return {Object} The new object.
    	             *
    	             * @static
    	             *
    	             * @example
    	             *
    	             *     var MyType = CryptoJS.lib.Base.extend({
    	             *         field: 'value',
    	             *
    	             *         method: function () {
    	             *         }
    	             *     });
    	             */
    	            extend: function (overrides) {
    	                // Spawn
    	                var subtype = create(this);

    	                // Augment
    	                if (overrides) {
    	                    subtype.mixIn(overrides);
    	                }

    	                // Create default initializer
    	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
    	                    subtype.init = function () {
    	                        subtype.$super.init.apply(this, arguments);
    	                    };
    	                }

    	                // Initializer's prototype is the subtype object
    	                subtype.init.prototype = subtype;

    	                // Reference supertype
    	                subtype.$super = this;

    	                return subtype;
    	            },

    	            /**
    	             * Extends this object and runs the init method.
    	             * Arguments to create() will be passed to init().
    	             *
    	             * @return {Object} The new object.
    	             *
    	             * @static
    	             *
    	             * @example
    	             *
    	             *     var instance = MyType.create();
    	             */
    	            create: function () {
    	                var instance = this.extend();
    	                instance.init.apply(instance, arguments);

    	                return instance;
    	            },

    	            /**
    	             * Initializes a newly created object.
    	             * Override this method to add some logic when your objects are created.
    	             *
    	             * @example
    	             *
    	             *     var MyType = CryptoJS.lib.Base.extend({
    	             *         init: function () {
    	             *             // ...
    	             *         }
    	             *     });
    	             */
    	            init: function () {
    	            },

    	            /**
    	             * Copies properties into this object.
    	             *
    	             * @param {Object} properties The properties to mix in.
    	             *
    	             * @example
    	             *
    	             *     MyType.mixIn({
    	             *         field: 'value'
    	             *     });
    	             */
    	            mixIn: function (properties) {
    	                for (var propertyName in properties) {
    	                    if (properties.hasOwnProperty(propertyName)) {
    	                        this[propertyName] = properties[propertyName];
    	                    }
    	                }

    	                // IE won't copy toString using the loop above
    	                if (properties.hasOwnProperty('toString')) {
    	                    this.toString = properties.toString;
    	                }
    	            },

    	            /**
    	             * Creates a copy of this object.
    	             *
    	             * @return {Object} The clone.
    	             *
    	             * @example
    	             *
    	             *     var clone = instance.clone();
    	             */
    	            clone: function () {
    	                return this.init.prototype.extend(this);
    	            }
    	        };
    	    }());

    	    /**
    	     * An array of 32-bit words.
    	     *
    	     * @property {Array} words The array of 32-bit words.
    	     * @property {number} sigBytes The number of significant bytes in this word array.
    	     */
    	    var WordArray = C_lib.WordArray = Base.extend({
    	        /**
    	         * Initializes a newly created word array.
    	         *
    	         * @param {Array} words (Optional) An array of 32-bit words.
    	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.lib.WordArray.create();
    	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
    	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
    	         */
    	        init: function (words, sigBytes) {
    	            words = this.words = words || [];

    	            if (sigBytes != undefined$1) {
    	                this.sigBytes = sigBytes;
    	            } else {
    	                this.sigBytes = words.length * 4;
    	            }
    	        },

    	        /**
    	         * Converts this word array to a string.
    	         *
    	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
    	         *
    	         * @return {string} The stringified word array.
    	         *
    	         * @example
    	         *
    	         *     var string = wordArray + '';
    	         *     var string = wordArray.toString();
    	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
    	         */
    	        toString: function (encoder) {
    	            return (encoder || Hex).stringify(this);
    	        },

    	        /**
    	         * Concatenates a word array to this word array.
    	         *
    	         * @param {WordArray} wordArray The word array to append.
    	         *
    	         * @return {WordArray} This word array.
    	         *
    	         * @example
    	         *
    	         *     wordArray1.concat(wordArray2);
    	         */
    	        concat: function (wordArray) {
    	            // Shortcuts
    	            var thisWords = this.words;
    	            var thatWords = wordArray.words;
    	            var thisSigBytes = this.sigBytes;
    	            var thatSigBytes = wordArray.sigBytes;

    	            // Clamp excess bits
    	            this.clamp();

    	            // Concat
    	            if (thisSigBytes % 4) {
    	                // Copy one byte at a time
    	                for (var i = 0; i < thatSigBytes; i++) {
    	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
    	                }
    	            } else {
    	                // Copy one word at a time
    	                for (var j = 0; j < thatSigBytes; j += 4) {
    	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
    	                }
    	            }
    	            this.sigBytes += thatSigBytes;

    	            // Chainable
    	            return this;
    	        },

    	        /**
    	         * Removes insignificant bits.
    	         *
    	         * @example
    	         *
    	         *     wordArray.clamp();
    	         */
    	        clamp: function () {
    	            // Shortcuts
    	            var words = this.words;
    	            var sigBytes = this.sigBytes;

    	            // Clamp
    	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
    	            words.length = Math.ceil(sigBytes / 4);
    	        },

    	        /**
    	         * Creates a copy of this word array.
    	         *
    	         * @return {WordArray} The clone.
    	         *
    	         * @example
    	         *
    	         *     var clone = wordArray.clone();
    	         */
    	        clone: function () {
    	            var clone = Base.clone.call(this);
    	            clone.words = this.words.slice(0);

    	            return clone;
    	        },

    	        /**
    	         * Creates a word array filled with random bytes.
    	         *
    	         * @param {number} nBytes The number of random bytes to generate.
    	         *
    	         * @return {WordArray} The random word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
    	         */
    	        random: function (nBytes) {
    	            var words = [];

    	            for (var i = 0; i < nBytes; i += 4) {
    	                words.push(cryptoSecureRandomInt());
    	            }

    	            return new WordArray.init(words, nBytes);
    	        }
    	    });

    	    /**
    	     * Encoder namespace.
    	     */
    	    var C_enc = C.enc = {};

    	    /**
    	     * Hex encoding strategy.
    	     */
    	    var Hex = C_enc.Hex = {
    	        /**
    	         * Converts a word array to a hex string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The hex string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var hexChars = [];
    	            for (var i = 0; i < sigBytes; i++) {
    	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    	                hexChars.push((bite >>> 4).toString(16));
    	                hexChars.push((bite & 0x0f).toString(16));
    	            }

    	            return hexChars.join('');
    	        },

    	        /**
    	         * Converts a hex string to a word array.
    	         *
    	         * @param {string} hexStr The hex string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
    	         */
    	        parse: function (hexStr) {
    	            // Shortcut
    	            var hexStrLength = hexStr.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < hexStrLength; i += 2) {
    	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
    	            }

    	            return new WordArray.init(words, hexStrLength / 2);
    	        }
    	    };

    	    /**
    	     * Latin1 encoding strategy.
    	     */
    	    var Latin1 = C_enc.Latin1 = {
    	        /**
    	         * Converts a word array to a Latin1 string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The Latin1 string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var latin1Chars = [];
    	            for (var i = 0; i < sigBytes; i++) {
    	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    	                latin1Chars.push(String.fromCharCode(bite));
    	            }

    	            return latin1Chars.join('');
    	        },

    	        /**
    	         * Converts a Latin1 string to a word array.
    	         *
    	         * @param {string} latin1Str The Latin1 string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
    	         */
    	        parse: function (latin1Str) {
    	            // Shortcut
    	            var latin1StrLength = latin1Str.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < latin1StrLength; i++) {
    	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
    	            }

    	            return new WordArray.init(words, latin1StrLength);
    	        }
    	    };

    	    /**
    	     * UTF-8 encoding strategy.
    	     */
    	    var Utf8 = C_enc.Utf8 = {
    	        /**
    	         * Converts a word array to a UTF-8 string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The UTF-8 string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            try {
    	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    	            } catch (e) {
    	                throw new Error('Malformed UTF-8 data');
    	            }
    	        },

    	        /**
    	         * Converts a UTF-8 string to a word array.
    	         *
    	         * @param {string} utf8Str The UTF-8 string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
    	         */
    	        parse: function (utf8Str) {
    	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
    	        }
    	    };

    	    /**
    	     * Abstract buffered block algorithm template.
    	     *
    	     * The property blockSize must be implemented in a concrete subtype.
    	     *
    	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
    	     */
    	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
    	        /**
    	         * Resets this block algorithm's data buffer to its initial state.
    	         *
    	         * @example
    	         *
    	         *     bufferedBlockAlgorithm.reset();
    	         */
    	        reset: function () {
    	            // Initial values
    	            this._data = new WordArray.init();
    	            this._nDataBytes = 0;
    	        },

    	        /**
    	         * Adds new data to this block algorithm's buffer.
    	         *
    	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
    	         *
    	         * @example
    	         *
    	         *     bufferedBlockAlgorithm._append('data');
    	         *     bufferedBlockAlgorithm._append(wordArray);
    	         */
    	        _append: function (data) {
    	            // Convert string to WordArray, else assume WordArray already
    	            if (typeof data == 'string') {
    	                data = Utf8.parse(data);
    	            }

    	            // Append
    	            this._data.concat(data);
    	            this._nDataBytes += data.sigBytes;
    	        },

    	        /**
    	         * Processes available data blocks.
    	         *
    	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
    	         *
    	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
    	         *
    	         * @return {WordArray} The processed data.
    	         *
    	         * @example
    	         *
    	         *     var processedData = bufferedBlockAlgorithm._process();
    	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
    	         */
    	        _process: function (doFlush) {
    	            var processedWords;

    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;
    	            var dataSigBytes = data.sigBytes;
    	            var blockSize = this.blockSize;
    	            var blockSizeBytes = blockSize * 4;

    	            // Count blocks ready
    	            var nBlocksReady = dataSigBytes / blockSizeBytes;
    	            if (doFlush) {
    	                // Round up to include partial blocks
    	                nBlocksReady = Math.ceil(nBlocksReady);
    	            } else {
    	                // Round down to include only full blocks,
    	                // less the number of blocks that must remain in the buffer
    	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    	            }

    	            // Count words ready
    	            var nWordsReady = nBlocksReady * blockSize;

    	            // Count bytes ready
    	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

    	            // Process blocks
    	            if (nWordsReady) {
    	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
    	                    // Perform concrete-algorithm logic
    	                    this._doProcessBlock(dataWords, offset);
    	                }

    	                // Remove processed words
    	                processedWords = dataWords.splice(0, nWordsReady);
    	                data.sigBytes -= nBytesReady;
    	            }

    	            // Return processed words
    	            return new WordArray.init(processedWords, nBytesReady);
    	        },

    	        /**
    	         * Creates a copy of this object.
    	         *
    	         * @return {Object} The clone.
    	         *
    	         * @example
    	         *
    	         *     var clone = bufferedBlockAlgorithm.clone();
    	         */
    	        clone: function () {
    	            var clone = Base.clone.call(this);
    	            clone._data = this._data.clone();

    	            return clone;
    	        },

    	        _minBufferSize: 0
    	    });

    	    /**
    	     * Abstract hasher template.
    	     *
    	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
    	     */
    	    C_lib.Hasher = BufferedBlockAlgorithm.extend({
    	        /**
    	         * Configuration options.
    	         */
    	        cfg: Base.extend(),

    	        /**
    	         * Initializes a newly created hasher.
    	         *
    	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
    	         *
    	         * @example
    	         *
    	         *     var hasher = CryptoJS.algo.SHA256.create();
    	         */
    	        init: function (cfg) {
    	            // Apply config defaults
    	            this.cfg = this.cfg.extend(cfg);

    	            // Set initial values
    	            this.reset();
    	        },

    	        /**
    	         * Resets this hasher to its initial state.
    	         *
    	         * @example
    	         *
    	         *     hasher.reset();
    	         */
    	        reset: function () {
    	            // Reset data buffer
    	            BufferedBlockAlgorithm.reset.call(this);

    	            // Perform concrete-hasher logic
    	            this._doReset();
    	        },

    	        /**
    	         * Updates this hasher with a message.
    	         *
    	         * @param {WordArray|string} messageUpdate The message to append.
    	         *
    	         * @return {Hasher} This hasher.
    	         *
    	         * @example
    	         *
    	         *     hasher.update('message');
    	         *     hasher.update(wordArray);
    	         */
    	        update: function (messageUpdate) {
    	            // Append
    	            this._append(messageUpdate);

    	            // Update the hash
    	            this._process();

    	            // Chainable
    	            return this;
    	        },

    	        /**
    	         * Finalizes the hash computation.
    	         * Note that the finalize operation is effectively a destructive, read-once operation.
    	         *
    	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
    	         *
    	         * @return {WordArray} The hash.
    	         *
    	         * @example
    	         *
    	         *     var hash = hasher.finalize();
    	         *     var hash = hasher.finalize('message');
    	         *     var hash = hasher.finalize(wordArray);
    	         */
    	        finalize: function (messageUpdate) {
    	            // Final message update
    	            if (messageUpdate) {
    	                this._append(messageUpdate);
    	            }

    	            // Perform concrete-hasher logic
    	            var hash = this._doFinalize();

    	            return hash;
    	        },

    	        blockSize: 512/32,

    	        /**
    	         * Creates a shortcut function to a hasher's object interface.
    	         *
    	         * @param {Hasher} hasher The hasher to create a helper for.
    	         *
    	         * @return {Function} The shortcut function.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
    	         */
    	        _createHelper: function (hasher) {
    	            return function (message, cfg) {
    	                return new hasher.init(cfg).finalize(message);
    	            };
    	        },

    	        /**
    	         * Creates a shortcut function to the HMAC's object interface.
    	         *
    	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
    	         *
    	         * @return {Function} The shortcut function.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
    	         */
    	        _createHmacHelper: function (hasher) {
    	            return function (message, key) {
    	                return new C_algo.HMAC.init(hasher, key).finalize(message);
    	            };
    	        }
    	    });

    	    /**
    	     * Algorithm namespace.
    	     */
    	    var C_algo = C.algo = {};

    	    return C;
    	}(Math));


    	return CryptoJS;

    }));
    }(core));

    var x64Core = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (undefined$1) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var X32WordArray = C_lib.WordArray;

    	    /**
    	     * x64 namespace.
    	     */
    	    var C_x64 = C.x64 = {};

    	    /**
    	     * A 64-bit word.
    	     */
    	    C_x64.Word = Base.extend({
    	        /**
    	         * Initializes a newly created 64-bit word.
    	         *
    	         * @param {number} high The high 32 bits.
    	         * @param {number} low The low 32 bits.
    	         *
    	         * @example
    	         *
    	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
    	         */
    	        init: function (high, low) {
    	            this.high = high;
    	            this.low = low;
    	        }

    	        /**
    	         * Bitwise NOTs this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after negating.
    	         *
    	         * @example
    	         *
    	         *     var negated = x64Word.not();
    	         */
    	        // not: function () {
    	            // var high = ~this.high;
    	            // var low = ~this.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Bitwise ANDs this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to AND with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after ANDing.
    	         *
    	         * @example
    	         *
    	         *     var anded = x64Word.and(anotherX64Word);
    	         */
    	        // and: function (word) {
    	            // var high = this.high & word.high;
    	            // var low = this.low & word.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Bitwise ORs this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to OR with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after ORing.
    	         *
    	         * @example
    	         *
    	         *     var ored = x64Word.or(anotherX64Word);
    	         */
    	        // or: function (word) {
    	            // var high = this.high | word.high;
    	            // var low = this.low | word.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Bitwise XORs this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to XOR with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after XORing.
    	         *
    	         * @example
    	         *
    	         *     var xored = x64Word.xor(anotherX64Word);
    	         */
    	        // xor: function (word) {
    	            // var high = this.high ^ word.high;
    	            // var low = this.low ^ word.low;

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Shifts this word n bits to the left.
    	         *
    	         * @param {number} n The number of bits to shift.
    	         *
    	         * @return {X64Word} A new x64-Word object after shifting.
    	         *
    	         * @example
    	         *
    	         *     var shifted = x64Word.shiftL(25);
    	         */
    	        // shiftL: function (n) {
    	            // if (n < 32) {
    	                // var high = (this.high << n) | (this.low >>> (32 - n));
    	                // var low = this.low << n;
    	            // } else {
    	                // var high = this.low << (n - 32);
    	                // var low = 0;
    	            // }

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Shifts this word n bits to the right.
    	         *
    	         * @param {number} n The number of bits to shift.
    	         *
    	         * @return {X64Word} A new x64-Word object after shifting.
    	         *
    	         * @example
    	         *
    	         *     var shifted = x64Word.shiftR(7);
    	         */
    	        // shiftR: function (n) {
    	            // if (n < 32) {
    	                // var low = (this.low >>> n) | (this.high << (32 - n));
    	                // var high = this.high >>> n;
    	            // } else {
    	                // var low = this.high >>> (n - 32);
    	                // var high = 0;
    	            // }

    	            // return X64Word.create(high, low);
    	        // },

    	        /**
    	         * Rotates this word n bits to the left.
    	         *
    	         * @param {number} n The number of bits to rotate.
    	         *
    	         * @return {X64Word} A new x64-Word object after rotating.
    	         *
    	         * @example
    	         *
    	         *     var rotated = x64Word.rotL(25);
    	         */
    	        // rotL: function (n) {
    	            // return this.shiftL(n).or(this.shiftR(64 - n));
    	        // },

    	        /**
    	         * Rotates this word n bits to the right.
    	         *
    	         * @param {number} n The number of bits to rotate.
    	         *
    	         * @return {X64Word} A new x64-Word object after rotating.
    	         *
    	         * @example
    	         *
    	         *     var rotated = x64Word.rotR(7);
    	         */
    	        // rotR: function (n) {
    	            // return this.shiftR(n).or(this.shiftL(64 - n));
    	        // },

    	        /**
    	         * Adds this word with the passed word.
    	         *
    	         * @param {X64Word} word The x64-Word to add with this word.
    	         *
    	         * @return {X64Word} A new x64-Word object after adding.
    	         *
    	         * @example
    	         *
    	         *     var added = x64Word.add(anotherX64Word);
    	         */
    	        // add: function (word) {
    	            // var low = (this.low + word.low) | 0;
    	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
    	            // var high = (this.high + word.high + carry) | 0;

    	            // return X64Word.create(high, low);
    	        // }
    	    });

    	    /**
    	     * An array of 64-bit words.
    	     *
    	     * @property {Array} words The array of CryptoJS.x64.Word objects.
    	     * @property {number} sigBytes The number of significant bytes in this word array.
    	     */
    	    C_x64.WordArray = Base.extend({
    	        /**
    	         * Initializes a newly created word array.
    	         *
    	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
    	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.x64.WordArray.create();
    	         *
    	         *     var wordArray = CryptoJS.x64.WordArray.create([
    	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
    	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
    	         *     ]);
    	         *
    	         *     var wordArray = CryptoJS.x64.WordArray.create([
    	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
    	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
    	         *     ], 10);
    	         */
    	        init: function (words, sigBytes) {
    	            words = this.words = words || [];

    	            if (sigBytes != undefined$1) {
    	                this.sigBytes = sigBytes;
    	            } else {
    	                this.sigBytes = words.length * 8;
    	            }
    	        },

    	        /**
    	         * Converts this 64-bit word array to a 32-bit word array.
    	         *
    	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
    	         *
    	         * @example
    	         *
    	         *     var x32WordArray = x64WordArray.toX32();
    	         */
    	        toX32: function () {
    	            // Shortcuts
    	            var x64Words = this.words;
    	            var x64WordsLength = x64Words.length;

    	            // Convert
    	            var x32Words = [];
    	            for (var i = 0; i < x64WordsLength; i++) {
    	                var x64Word = x64Words[i];
    	                x32Words.push(x64Word.high);
    	                x32Words.push(x64Word.low);
    	            }

    	            return X32WordArray.create(x32Words, this.sigBytes);
    	        },

    	        /**
    	         * Creates a copy of this word array.
    	         *
    	         * @return {X64WordArray} The clone.
    	         *
    	         * @example
    	         *
    	         *     var clone = x64WordArray.clone();
    	         */
    	        clone: function () {
    	            var clone = Base.clone.call(this);

    	            // Clone "words" array
    	            var words = clone.words = this.words.slice(0);

    	            // Clone each X64Word object
    	            var wordsLength = words.length;
    	            for (var i = 0; i < wordsLength; i++) {
    	                words[i] = words[i].clone();
    	            }

    	            return clone;
    	        }
    	    });
    	}());


    	return CryptoJS;

    }));
    }(x64Core));

    var libTypedarrays = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Check if typed arrays are supported
    	    if (typeof ArrayBuffer != 'function') {
    	        return;
    	    }

    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;

    	    // Reference original init
    	    var superInit = WordArray.init;

    	    // Augment WordArray.init to handle typed arrays
    	    var subInit = WordArray.init = function (typedArray) {
    	        // Convert buffers to uint8
    	        if (typedArray instanceof ArrayBuffer) {
    	            typedArray = new Uint8Array(typedArray);
    	        }

    	        // Convert other array views to uint8
    	        if (
    	            typedArray instanceof Int8Array ||
    	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
    	            typedArray instanceof Int16Array ||
    	            typedArray instanceof Uint16Array ||
    	            typedArray instanceof Int32Array ||
    	            typedArray instanceof Uint32Array ||
    	            typedArray instanceof Float32Array ||
    	            typedArray instanceof Float64Array
    	        ) {
    	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    	        }

    	        // Handle Uint8Array
    	        if (typedArray instanceof Uint8Array) {
    	            // Shortcut
    	            var typedArrayByteLength = typedArray.byteLength;

    	            // Extract bytes
    	            var words = [];
    	            for (var i = 0; i < typedArrayByteLength; i++) {
    	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
    	            }

    	            // Initialize this word array
    	            superInit.call(this, words, typedArrayByteLength);
    	        } else {
    	            // Else call normal init
    	            superInit.apply(this, arguments);
    	        }
    	    };

    	    subInit.prototype = WordArray;
    	}());


    	return CryptoJS.lib.WordArray;

    }));
    }(libTypedarrays));

    var encUtf16 = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var C_enc = C.enc;

    	    /**
    	     * UTF-16 BE encoding strategy.
    	     */
    	    C_enc.Utf16 = C_enc.Utf16BE = {
    	        /**
    	         * Converts a word array to a UTF-16 BE string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The UTF-16 BE string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var utf16Chars = [];
    	            for (var i = 0; i < sigBytes; i += 2) {
    	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
    	                utf16Chars.push(String.fromCharCode(codePoint));
    	            }

    	            return utf16Chars.join('');
    	        },

    	        /**
    	         * Converts a UTF-16 BE string to a word array.
    	         *
    	         * @param {string} utf16Str The UTF-16 BE string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
    	         */
    	        parse: function (utf16Str) {
    	            // Shortcut
    	            var utf16StrLength = utf16Str.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < utf16StrLength; i++) {
    	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
    	            }

    	            return WordArray.create(words, utf16StrLength * 2);
    	        }
    	    };

    	    /**
    	     * UTF-16 LE encoding strategy.
    	     */
    	    C_enc.Utf16LE = {
    	        /**
    	         * Converts a word array to a UTF-16 LE string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The UTF-16 LE string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;

    	            // Convert
    	            var utf16Chars = [];
    	            for (var i = 0; i < sigBytes; i += 2) {
    	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
    	                utf16Chars.push(String.fromCharCode(codePoint));
    	            }

    	            return utf16Chars.join('');
    	        },

    	        /**
    	         * Converts a UTF-16 LE string to a word array.
    	         *
    	         * @param {string} utf16Str The UTF-16 LE string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
    	         */
    	        parse: function (utf16Str) {
    	            // Shortcut
    	            var utf16StrLength = utf16Str.length;

    	            // Convert
    	            var words = [];
    	            for (var i = 0; i < utf16StrLength; i++) {
    	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
    	            }

    	            return WordArray.create(words, utf16StrLength * 2);
    	        }
    	    };

    	    function swapEndian(word) {
    	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
    	    }
    	}());


    	return CryptoJS.enc.Utf16;

    }));
    }(encUtf16));

    var encBase64 = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var C_enc = C.enc;

    	    /**
    	     * Base64 encoding strategy.
    	     */
    	    C_enc.Base64 = {
    	        /**
    	         * Converts a word array to a Base64 string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @return {string} The Base64 string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
    	         */
    	        stringify: function (wordArray) {
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;
    	            var map = this._map;

    	            // Clamp excess bits
    	            wordArray.clamp();

    	            // Convert
    	            var base64Chars = [];
    	            for (var i = 0; i < sigBytes; i += 3) {
    	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
    	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
    	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

    	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

    	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
    	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
    	                }
    	            }

    	            // Add padding
    	            var paddingChar = map.charAt(64);
    	            if (paddingChar) {
    	                while (base64Chars.length % 4) {
    	                    base64Chars.push(paddingChar);
    	                }
    	            }

    	            return base64Chars.join('');
    	        },

    	        /**
    	         * Converts a Base64 string to a word array.
    	         *
    	         * @param {string} base64Str The Base64 string.
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
    	         */
    	        parse: function (base64Str) {
    	            // Shortcuts
    	            var base64StrLength = base64Str.length;
    	            var map = this._map;
    	            var reverseMap = this._reverseMap;

    	            if (!reverseMap) {
    	                    reverseMap = this._reverseMap = [];
    	                    for (var j = 0; j < map.length; j++) {
    	                        reverseMap[map.charCodeAt(j)] = j;
    	                    }
    	            }

    	            // Ignore padding
    	            var paddingChar = map.charAt(64);
    	            if (paddingChar) {
    	                var paddingIndex = base64Str.indexOf(paddingChar);
    	                if (paddingIndex !== -1) {
    	                    base64StrLength = paddingIndex;
    	                }
    	            }

    	            // Convert
    	            return parseLoop(base64Str, base64StrLength, reverseMap);

    	        },

    	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    	    };

    	    function parseLoop(base64Str, base64StrLength, reverseMap) {
    	      var words = [];
    	      var nBytes = 0;
    	      for (var i = 0; i < base64StrLength; i++) {
    	          if (i % 4) {
    	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
    	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
    	              var bitsCombined = bits1 | bits2;
    	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
    	              nBytes++;
    	          }
    	      }
    	      return WordArray.create(words, nBytes);
    	    }
    	}());


    	return CryptoJS.enc.Base64;

    }));
    }(encBase64));

    var encBase64url = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var C_enc = C.enc;

    	    /**
    	     * Base64url encoding strategy.
    	     */
    	    C_enc.Base64url = {
    	        /**
    	         * Converts a word array to a Base64url string.
    	         *
    	         * @param {WordArray} wordArray The word array.
    	         *
    	         * @param {boolean} urlSafe Whether to use url safe
    	         *
    	         * @return {string} The Base64url string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
    	         */
    	        stringify: function (wordArray, urlSafe) {
    	            if (urlSafe === undefined) {
    	                urlSafe = true;
    	            }
    	            // Shortcuts
    	            var words = wordArray.words;
    	            var sigBytes = wordArray.sigBytes;
    	            var map = urlSafe ? this._safe_map : this._map;

    	            // Clamp excess bits
    	            wordArray.clamp();

    	            // Convert
    	            var base64Chars = [];
    	            for (var i = 0; i < sigBytes; i += 3) {
    	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
    	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
    	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

    	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

    	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
    	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
    	                }
    	            }

    	            // Add padding
    	            var paddingChar = map.charAt(64);
    	            if (paddingChar) {
    	                while (base64Chars.length % 4) {
    	                    base64Chars.push(paddingChar);
    	                }
    	            }

    	            return base64Chars.join('');
    	        },

    	        /**
    	         * Converts a Base64url string to a word array.
    	         *
    	         * @param {string} base64Str The Base64url string.
    	         *
    	         * @param {boolean} urlSafe Whether to use url safe
    	         *
    	         * @return {WordArray} The word array.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
    	         */
    	        parse: function (base64Str, urlSafe) {
    	            if (urlSafe === undefined) {
    	                urlSafe = true;
    	            }

    	            // Shortcuts
    	            var base64StrLength = base64Str.length;
    	            var map = urlSafe ? this._safe_map : this._map;
    	            var reverseMap = this._reverseMap;

    	            if (!reverseMap) {
    	                reverseMap = this._reverseMap = [];
    	                for (var j = 0; j < map.length; j++) {
    	                    reverseMap[map.charCodeAt(j)] = j;
    	                }
    	            }

    	            // Ignore padding
    	            var paddingChar = map.charAt(64);
    	            if (paddingChar) {
    	                var paddingIndex = base64Str.indexOf(paddingChar);
    	                if (paddingIndex !== -1) {
    	                    base64StrLength = paddingIndex;
    	                }
    	            }

    	            // Convert
    	            return parseLoop(base64Str, base64StrLength, reverseMap);

    	        },

    	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    	        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    	    };

    	    function parseLoop(base64Str, base64StrLength, reverseMap) {
    	        var words = [];
    	        var nBytes = 0;
    	        for (var i = 0; i < base64StrLength; i++) {
    	            if (i % 4) {
    	                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
    	                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
    	                var bitsCombined = bits1 | bits2;
    	                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
    	                nBytes++;
    	            }
    	        }
    	        return WordArray.create(words, nBytes);
    	    }
    	}());


    	return CryptoJS.enc.Base64url;

    }));
    }(encBase64url));

    var md5 = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Constants table
    	    var T = [];

    	    // Compute constants
    	    (function () {
    	        for (var i = 0; i < 64; i++) {
    	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
    	        }
    	    }());

    	    /**
    	     * MD5 hash algorithm.
    	     */
    	    var MD5 = C_algo.MD5 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init([
    	                0x67452301, 0xefcdab89,
    	                0x98badcfe, 0x10325476
    	            ]);
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Swap endian
    	            for (var i = 0; i < 16; i++) {
    	                // Shortcuts
    	                var offset_i = offset + i;
    	                var M_offset_i = M[offset_i];

    	                M[offset_i] = (
    	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
    	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    	                );
    	            }

    	            // Shortcuts
    	            var H = this._hash.words;

    	            var M_offset_0  = M[offset + 0];
    	            var M_offset_1  = M[offset + 1];
    	            var M_offset_2  = M[offset + 2];
    	            var M_offset_3  = M[offset + 3];
    	            var M_offset_4  = M[offset + 4];
    	            var M_offset_5  = M[offset + 5];
    	            var M_offset_6  = M[offset + 6];
    	            var M_offset_7  = M[offset + 7];
    	            var M_offset_8  = M[offset + 8];
    	            var M_offset_9  = M[offset + 9];
    	            var M_offset_10 = M[offset + 10];
    	            var M_offset_11 = M[offset + 11];
    	            var M_offset_12 = M[offset + 12];
    	            var M_offset_13 = M[offset + 13];
    	            var M_offset_14 = M[offset + 14];
    	            var M_offset_15 = M[offset + 15];

    	            // Working variables
    	            var a = H[0];
    	            var b = H[1];
    	            var c = H[2];
    	            var d = H[3];

    	            // Computation
    	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
    	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
    	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
    	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
    	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
    	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
    	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
    	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
    	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
    	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
    	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
    	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
    	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
    	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
    	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
    	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

    	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
    	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
    	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
    	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
    	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
    	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
    	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
    	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
    	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
    	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
    	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
    	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
    	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
    	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
    	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
    	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

    	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
    	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
    	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
    	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
    	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
    	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
    	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
    	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
    	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
    	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
    	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
    	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
    	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
    	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
    	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
    	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

    	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
    	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
    	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
    	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
    	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
    	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
    	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
    	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
    	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
    	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
    	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
    	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
    	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
    	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
    	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
    	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

    	            // Intermediate hash value
    	            H[0] = (H[0] + a) | 0;
    	            H[1] = (H[1] + b) | 0;
    	            H[2] = (H[2] + c) | 0;
    	            H[3] = (H[3] + d) | 0;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

    	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
    	            var nBitsTotalL = nBitsTotal;
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
    	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
    	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
    	            );
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
    	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
    	            );

    	            data.sigBytes = (dataWords.length + 1) * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Shortcuts
    	            var hash = this._hash;
    	            var H = hash.words;

    	            // Swap endian
    	            for (var i = 0; i < 4; i++) {
    	                // Shortcut
    	                var H_i = H[i];

    	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
    	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
    	            }

    	            // Return final computed hash
    	            return hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });

    	    function FF(a, b, c, d, x, s, t) {
    	        var n = a + ((b & c) | (~b & d)) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    function GG(a, b, c, d, x, s, t) {
    	        var n = a + ((b & d) | (c & ~d)) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    function HH(a, b, c, d, x, s, t) {
    	        var n = a + (b ^ c ^ d) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    function II(a, b, c, d, x, s, t) {
    	        var n = a + (c ^ (b | ~d)) + x + t;
    	        return ((n << s) | (n >>> (32 - s))) + b;
    	    }

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.MD5('message');
    	     *     var hash = CryptoJS.MD5(wordArray);
    	     */
    	    C.MD5 = Hasher._createHelper(MD5);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacMD5(message, key);
    	     */
    	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
    	}(Math));


    	return CryptoJS.MD5;

    }));
    }(md5));

    var sha1 = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Reusable object
    	    var W = [];

    	    /**
    	     * SHA-1 hash algorithm.
    	     */
    	    var SHA1 = C_algo.SHA1 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init([
    	                0x67452301, 0xefcdab89,
    	                0x98badcfe, 0x10325476,
    	                0xc3d2e1f0
    	            ]);
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var H = this._hash.words;

    	            // Working variables
    	            var a = H[0];
    	            var b = H[1];
    	            var c = H[2];
    	            var d = H[3];
    	            var e = H[4];

    	            // Computation
    	            for (var i = 0; i < 80; i++) {
    	                if (i < 16) {
    	                    W[i] = M[offset + i] | 0;
    	                } else {
    	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
    	                    W[i] = (n << 1) | (n >>> 31);
    	                }

    	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
    	                if (i < 20) {
    	                    t += ((b & c) | (~b & d)) + 0x5a827999;
    	                } else if (i < 40) {
    	                    t += (b ^ c ^ d) + 0x6ed9eba1;
    	                } else if (i < 60) {
    	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
    	                } else /* if (i < 80) */ {
    	                    t += (b ^ c ^ d) - 0x359d3e2a;
    	                }

    	                e = d;
    	                d = c;
    	                c = (b << 30) | (b >>> 2);
    	                b = a;
    	                a = t;
    	            }

    	            // Intermediate hash value
    	            H[0] = (H[0] + a) | 0;
    	            H[1] = (H[1] + b) | 0;
    	            H[2] = (H[2] + c) | 0;
    	            H[3] = (H[3] + d) | 0;
    	            H[4] = (H[4] + e) | 0;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Return final computed hash
    	            return this._hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA1('message');
    	     *     var hash = CryptoJS.SHA1(wordArray);
    	     */
    	    C.SHA1 = Hasher._createHelper(SHA1);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA1(message, key);
    	     */
    	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
    	}());


    	return CryptoJS.SHA1;

    }));
    }(sha1));

    var sha256 = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Initialization and round constants tables
    	    var H = [];
    	    var K = [];

    	    // Compute constants
    	    (function () {
    	        function isPrime(n) {
    	            var sqrtN = Math.sqrt(n);
    	            for (var factor = 2; factor <= sqrtN; factor++) {
    	                if (!(n % factor)) {
    	                    return false;
    	                }
    	            }

    	            return true;
    	        }

    	        function getFractionalBits(n) {
    	            return ((n - (n | 0)) * 0x100000000) | 0;
    	        }

    	        var n = 2;
    	        var nPrime = 0;
    	        while (nPrime < 64) {
    	            if (isPrime(n)) {
    	                if (nPrime < 8) {
    	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
    	                }
    	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

    	                nPrime++;
    	            }

    	            n++;
    	        }
    	    }());

    	    // Reusable object
    	    var W = [];

    	    /**
    	     * SHA-256 hash algorithm.
    	     */
    	    var SHA256 = C_algo.SHA256 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init(H.slice(0));
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var H = this._hash.words;

    	            // Working variables
    	            var a = H[0];
    	            var b = H[1];
    	            var c = H[2];
    	            var d = H[3];
    	            var e = H[4];
    	            var f = H[5];
    	            var g = H[6];
    	            var h = H[7];

    	            // Computation
    	            for (var i = 0; i < 64; i++) {
    	                if (i < 16) {
    	                    W[i] = M[offset + i] | 0;
    	                } else {
    	                    var gamma0x = W[i - 15];
    	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
    	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
    	                                   (gamma0x >>> 3);

    	                    var gamma1x = W[i - 2];
    	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
    	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
    	                                   (gamma1x >>> 10);

    	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
    	                }

    	                var ch  = (e & f) ^ (~e & g);
    	                var maj = (a & b) ^ (a & c) ^ (b & c);

    	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
    	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

    	                var t1 = h + sigma1 + ch + K[i] + W[i];
    	                var t2 = sigma0 + maj;

    	                h = g;
    	                g = f;
    	                f = e;
    	                e = (d + t1) | 0;
    	                d = c;
    	                c = b;
    	                b = a;
    	                a = (t1 + t2) | 0;
    	            }

    	            // Intermediate hash value
    	            H[0] = (H[0] + a) | 0;
    	            H[1] = (H[1] + b) | 0;
    	            H[2] = (H[2] + c) | 0;
    	            H[3] = (H[3] + d) | 0;
    	            H[4] = (H[4] + e) | 0;
    	            H[5] = (H[5] + f) | 0;
    	            H[6] = (H[6] + g) | 0;
    	            H[7] = (H[7] + h) | 0;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Return final computed hash
    	            return this._hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA256('message');
    	     *     var hash = CryptoJS.SHA256(wordArray);
    	     */
    	    C.SHA256 = Hasher._createHelper(SHA256);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA256(message, key);
    	     */
    	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    	}(Math));


    	return CryptoJS.SHA256;

    }));
    }(sha256));

    var sha224 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, sha256.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var C_algo = C.algo;
    	    var SHA256 = C_algo.SHA256;

    	    /**
    	     * SHA-224 hash algorithm.
    	     */
    	    var SHA224 = C_algo.SHA224 = SHA256.extend({
    	        _doReset: function () {
    	            this._hash = new WordArray.init([
    	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
    	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
    	            ]);
    	        },

    	        _doFinalize: function () {
    	            var hash = SHA256._doFinalize.call(this);

    	            hash.sigBytes -= 4;

    	            return hash;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA224('message');
    	     *     var hash = CryptoJS.SHA224(wordArray);
    	     */
    	    C.SHA224 = SHA256._createHelper(SHA224);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA224(message, key);
    	     */
    	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
    	}());


    	return CryptoJS.SHA224;

    }));
    }(sha224));

    var sha512 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, x64Core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Hasher = C_lib.Hasher;
    	    var C_x64 = C.x64;
    	    var X64Word = C_x64.Word;
    	    var X64WordArray = C_x64.WordArray;
    	    var C_algo = C.algo;

    	    function X64Word_create() {
    	        return X64Word.create.apply(X64Word, arguments);
    	    }

    	    // Constants
    	    var K = [
    	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
    	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
    	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
    	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
    	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
    	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
    	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
    	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
    	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
    	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
    	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
    	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
    	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
    	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
    	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
    	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
    	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
    	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
    	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
    	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
    	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
    	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
    	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
    	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
    	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
    	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
    	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
    	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
    	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
    	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
    	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
    	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
    	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
    	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
    	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
    	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
    	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
    	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
    	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
    	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
    	    ];

    	    // Reusable objects
    	    var W = [];
    	    (function () {
    	        for (var i = 0; i < 80; i++) {
    	            W[i] = X64Word_create();
    	        }
    	    }());

    	    /**
    	     * SHA-512 hash algorithm.
    	     */
    	    var SHA512 = C_algo.SHA512 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash = new X64WordArray.init([
    	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
    	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
    	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
    	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
    	            ]);
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcuts
    	            var H = this._hash.words;

    	            var H0 = H[0];
    	            var H1 = H[1];
    	            var H2 = H[2];
    	            var H3 = H[3];
    	            var H4 = H[4];
    	            var H5 = H[5];
    	            var H6 = H[6];
    	            var H7 = H[7];

    	            var H0h = H0.high;
    	            var H0l = H0.low;
    	            var H1h = H1.high;
    	            var H1l = H1.low;
    	            var H2h = H2.high;
    	            var H2l = H2.low;
    	            var H3h = H3.high;
    	            var H3l = H3.low;
    	            var H4h = H4.high;
    	            var H4l = H4.low;
    	            var H5h = H5.high;
    	            var H5l = H5.low;
    	            var H6h = H6.high;
    	            var H6l = H6.low;
    	            var H7h = H7.high;
    	            var H7l = H7.low;

    	            // Working variables
    	            var ah = H0h;
    	            var al = H0l;
    	            var bh = H1h;
    	            var bl = H1l;
    	            var ch = H2h;
    	            var cl = H2l;
    	            var dh = H3h;
    	            var dl = H3l;
    	            var eh = H4h;
    	            var el = H4l;
    	            var fh = H5h;
    	            var fl = H5l;
    	            var gh = H6h;
    	            var gl = H6l;
    	            var hh = H7h;
    	            var hl = H7l;

    	            // Rounds
    	            for (var i = 0; i < 80; i++) {
    	                var Wil;
    	                var Wih;

    	                // Shortcut
    	                var Wi = W[i];

    	                // Extend message
    	                if (i < 16) {
    	                    Wih = Wi.high = M[offset + i * 2]     | 0;
    	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
    	                } else {
    	                    // Gamma0
    	                    var gamma0x  = W[i - 15];
    	                    var gamma0xh = gamma0x.high;
    	                    var gamma0xl = gamma0x.low;
    	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
    	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

    	                    // Gamma1
    	                    var gamma1x  = W[i - 2];
    	                    var gamma1xh = gamma1x.high;
    	                    var gamma1xl = gamma1x.low;
    	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
    	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

    	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
    	                    var Wi7  = W[i - 7];
    	                    var Wi7h = Wi7.high;
    	                    var Wi7l = Wi7.low;

    	                    var Wi16  = W[i - 16];
    	                    var Wi16h = Wi16.high;
    	                    var Wi16l = Wi16.low;

    	                    Wil = gamma0l + Wi7l;
    	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
    	                    Wil = Wil + gamma1l;
    	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
    	                    Wil = Wil + Wi16l;
    	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

    	                    Wi.high = Wih;
    	                    Wi.low  = Wil;
    	                }

    	                var chh  = (eh & fh) ^ (~eh & gh);
    	                var chl  = (el & fl) ^ (~el & gl);
    	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
    	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

    	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
    	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
    	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
    	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

    	                // t1 = h + sigma1 + ch + K[i] + W[i]
    	                var Ki  = K[i];
    	                var Kih = Ki.high;
    	                var Kil = Ki.low;

    	                var t1l = hl + sigma1l;
    	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
    	                var t1l = t1l + chl;
    	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
    	                var t1l = t1l + Kil;
    	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
    	                var t1l = t1l + Wil;
    	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

    	                // t2 = sigma0 + maj
    	                var t2l = sigma0l + majl;
    	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

    	                // Update working variables
    	                hh = gh;
    	                hl = gl;
    	                gh = fh;
    	                gl = fl;
    	                fh = eh;
    	                fl = el;
    	                el = (dl + t1l) | 0;
    	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
    	                dh = ch;
    	                dl = cl;
    	                ch = bh;
    	                cl = bl;
    	                bh = ah;
    	                bl = al;
    	                al = (t1l + t2l) | 0;
    	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
    	            }

    	            // Intermediate hash value
    	            H0l = H0.low  = (H0l + al);
    	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
    	            H1l = H1.low  = (H1l + bl);
    	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
    	            H2l = H2.low  = (H2l + cl);
    	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
    	            H3l = H3.low  = (H3l + dl);
    	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
    	            H4l = H4.low  = (H4l + el);
    	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
    	            H5l = H5.low  = (H5l + fl);
    	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
    	            H6l = H6.low  = (H6l + gl);
    	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
    	            H7l = H7.low  = (H7l + hl);
    	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
    	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Convert hash to 32-bit word array before returning
    	            var hash = this._hash.toX32();

    	            // Return final computed hash
    	            return hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        },

    	        blockSize: 1024/32
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA512('message');
    	     *     var hash = CryptoJS.SHA512(wordArray);
    	     */
    	    C.SHA512 = Hasher._createHelper(SHA512);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA512(message, key);
    	     */
    	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
    	}());


    	return CryptoJS.SHA512;

    }));
    }(sha512));

    var sha384 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, x64Core.exports, sha512.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_x64 = C.x64;
    	    var X64Word = C_x64.Word;
    	    var X64WordArray = C_x64.WordArray;
    	    var C_algo = C.algo;
    	    var SHA512 = C_algo.SHA512;

    	    /**
    	     * SHA-384 hash algorithm.
    	     */
    	    var SHA384 = C_algo.SHA384 = SHA512.extend({
    	        _doReset: function () {
    	            this._hash = new X64WordArray.init([
    	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
    	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
    	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
    	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
    	            ]);
    	        },

    	        _doFinalize: function () {
    	            var hash = SHA512._doFinalize.call(this);

    	            hash.sigBytes -= 16;

    	            return hash;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA384('message');
    	     *     var hash = CryptoJS.SHA384(wordArray);
    	     */
    	    C.SHA384 = SHA512._createHelper(SHA384);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA384(message, key);
    	     */
    	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
    	}());


    	return CryptoJS.SHA384;

    }));
    }(sha384));

    var sha3 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, x64Core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_x64 = C.x64;
    	    var X64Word = C_x64.Word;
    	    var C_algo = C.algo;

    	    // Constants tables
    	    var RHO_OFFSETS = [];
    	    var PI_INDEXES  = [];
    	    var ROUND_CONSTANTS = [];

    	    // Compute Constants
    	    (function () {
    	        // Compute rho offset constants
    	        var x = 1, y = 0;
    	        for (var t = 0; t < 24; t++) {
    	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

    	            var newX = y % 5;
    	            var newY = (2 * x + 3 * y) % 5;
    	            x = newX;
    	            y = newY;
    	        }

    	        // Compute pi index constants
    	        for (var x = 0; x < 5; x++) {
    	            for (var y = 0; y < 5; y++) {
    	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
    	            }
    	        }

    	        // Compute round constants
    	        var LFSR = 0x01;
    	        for (var i = 0; i < 24; i++) {
    	            var roundConstantMsw = 0;
    	            var roundConstantLsw = 0;

    	            for (var j = 0; j < 7; j++) {
    	                if (LFSR & 0x01) {
    	                    var bitPosition = (1 << j) - 1;
    	                    if (bitPosition < 32) {
    	                        roundConstantLsw ^= 1 << bitPosition;
    	                    } else /* if (bitPosition >= 32) */ {
    	                        roundConstantMsw ^= 1 << (bitPosition - 32);
    	                    }
    	                }

    	                // Compute next LFSR
    	                if (LFSR & 0x80) {
    	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
    	                    LFSR = (LFSR << 1) ^ 0x71;
    	                } else {
    	                    LFSR <<= 1;
    	                }
    	            }

    	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
    	        }
    	    }());

    	    // Reusable objects for temporary values
    	    var T = [];
    	    (function () {
    	        for (var i = 0; i < 25; i++) {
    	            T[i] = X64Word.create();
    	        }
    	    }());

    	    /**
    	     * SHA-3 hash algorithm.
    	     */
    	    var SHA3 = C_algo.SHA3 = Hasher.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} outputLength
    	         *   The desired number of bits in the output hash.
    	         *   Only values permitted are: 224, 256, 384, 512.
    	         *   Default: 512
    	         */
    	        cfg: Hasher.cfg.extend({
    	            outputLength: 512
    	        }),

    	        _doReset: function () {
    	            var state = this._state = [];
    	            for (var i = 0; i < 25; i++) {
    	                state[i] = new X64Word.init();
    	            }

    	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcuts
    	            var state = this._state;
    	            var nBlockSizeLanes = this.blockSize / 2;

    	            // Absorb
    	            for (var i = 0; i < nBlockSizeLanes; i++) {
    	                // Shortcuts
    	                var M2i  = M[offset + 2 * i];
    	                var M2i1 = M[offset + 2 * i + 1];

    	                // Swap endian
    	                M2i = (
    	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
    	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
    	                );
    	                M2i1 = (
    	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
    	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
    	                );

    	                // Absorb message into state
    	                var lane = state[i];
    	                lane.high ^= M2i1;
    	                lane.low  ^= M2i;
    	            }

    	            // Rounds
    	            for (var round = 0; round < 24; round++) {
    	                // Theta
    	                for (var x = 0; x < 5; x++) {
    	                    // Mix column lanes
    	                    var tMsw = 0, tLsw = 0;
    	                    for (var y = 0; y < 5; y++) {
    	                        var lane = state[x + 5 * y];
    	                        tMsw ^= lane.high;
    	                        tLsw ^= lane.low;
    	                    }

    	                    // Temporary values
    	                    var Tx = T[x];
    	                    Tx.high = tMsw;
    	                    Tx.low  = tLsw;
    	                }
    	                for (var x = 0; x < 5; x++) {
    	                    // Shortcuts
    	                    var Tx4 = T[(x + 4) % 5];
    	                    var Tx1 = T[(x + 1) % 5];
    	                    var Tx1Msw = Tx1.high;
    	                    var Tx1Lsw = Tx1.low;

    	                    // Mix surrounding columns
    	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
    	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
    	                    for (var y = 0; y < 5; y++) {
    	                        var lane = state[x + 5 * y];
    	                        lane.high ^= tMsw;
    	                        lane.low  ^= tLsw;
    	                    }
    	                }

    	                // Rho Pi
    	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
    	                    var tMsw;
    	                    var tLsw;

    	                    // Shortcuts
    	                    var lane = state[laneIndex];
    	                    var laneMsw = lane.high;
    	                    var laneLsw = lane.low;
    	                    var rhoOffset = RHO_OFFSETS[laneIndex];

    	                    // Rotate lanes
    	                    if (rhoOffset < 32) {
    	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
    	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
    	                    } else /* if (rhoOffset >= 32) */ {
    	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
    	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
    	                    }

    	                    // Transpose lanes
    	                    var TPiLane = T[PI_INDEXES[laneIndex]];
    	                    TPiLane.high = tMsw;
    	                    TPiLane.low  = tLsw;
    	                }

    	                // Rho pi at x = y = 0
    	                var T0 = T[0];
    	                var state0 = state[0];
    	                T0.high = state0.high;
    	                T0.low  = state0.low;

    	                // Chi
    	                for (var x = 0; x < 5; x++) {
    	                    for (var y = 0; y < 5; y++) {
    	                        // Shortcuts
    	                        var laneIndex = x + 5 * y;
    	                        var lane = state[laneIndex];
    	                        var TLane = T[laneIndex];
    	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
    	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

    	                        // Mix rows
    	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
    	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
    	                    }
    	                }

    	                // Iota
    	                var lane = state[0];
    	                var roundConstant = ROUND_CONSTANTS[round];
    	                lane.high ^= roundConstant.high;
    	                lane.low  ^= roundConstant.low;
    	            }
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;
    	            this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;
    	            var blockSizeBits = this.blockSize * 32;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
    	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
    	            data.sigBytes = dataWords.length * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Shortcuts
    	            var state = this._state;
    	            var outputLengthBytes = this.cfg.outputLength / 8;
    	            var outputLengthLanes = outputLengthBytes / 8;

    	            // Squeeze
    	            var hashWords = [];
    	            for (var i = 0; i < outputLengthLanes; i++) {
    	                // Shortcuts
    	                var lane = state[i];
    	                var laneMsw = lane.high;
    	                var laneLsw = lane.low;

    	                // Swap endian
    	                laneMsw = (
    	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
    	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
    	                );
    	                laneLsw = (
    	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
    	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
    	                );

    	                // Squeeze state to retrieve hash
    	                hashWords.push(laneLsw);
    	                hashWords.push(laneMsw);
    	            }

    	            // Return final computed hash
    	            return new WordArray.init(hashWords, outputLengthBytes);
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);

    	            var state = clone._state = this._state.slice(0);
    	            for (var i = 0; i < 25; i++) {
    	                state[i] = state[i].clone();
    	            }

    	            return clone;
    	        }
    	    });

    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.SHA3('message');
    	     *     var hash = CryptoJS.SHA3(wordArray);
    	     */
    	    C.SHA3 = Hasher._createHelper(SHA3);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacSHA3(message, key);
    	     */
    	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
    	}(Math));


    	return CryptoJS.SHA3;

    }));
    }(sha3));

    var ripemd160 = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/** @preserve
    	(c) 2012 by Cédric Mesnil. All rights reserved.

    	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    	*/

    	(function (Math) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var Hasher = C_lib.Hasher;
    	    var C_algo = C.algo;

    	    // Constants table
    	    var _zl = WordArray.create([
    	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
    	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
    	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
    	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
    	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
    	    var _zr = WordArray.create([
    	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
    	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
    	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
    	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
    	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
    	    var _sl = WordArray.create([
    	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
    	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
    	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
    	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
    	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
    	    var _sr = WordArray.create([
    	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
    	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
    	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
    	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
    	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

    	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
    	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

    	    /**
    	     * RIPEMD160 hash algorithm.
    	     */
    	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
    	        _doReset: function () {
    	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
    	        },

    	        _doProcessBlock: function (M, offset) {

    	            // Swap endian
    	            for (var i = 0; i < 16; i++) {
    	                // Shortcuts
    	                var offset_i = offset + i;
    	                var M_offset_i = M[offset_i];

    	                // Swap
    	                M[offset_i] = (
    	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
    	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
    	                );
    	            }
    	            // Shortcut
    	            var H  = this._hash.words;
    	            var hl = _hl.words;
    	            var hr = _hr.words;
    	            var zl = _zl.words;
    	            var zr = _zr.words;
    	            var sl = _sl.words;
    	            var sr = _sr.words;

    	            // Working variables
    	            var al, bl, cl, dl, el;
    	            var ar, br, cr, dr, er;

    	            ar = al = H[0];
    	            br = bl = H[1];
    	            cr = cl = H[2];
    	            dr = dl = H[3];
    	            er = el = H[4];
    	            // Computation
    	            var t;
    	            for (var i = 0; i < 80; i += 1) {
    	                t = (al +  M[offset+zl[i]])|0;
    	                if (i<16){
    		            t +=  f1(bl,cl,dl) + hl[0];
    	                } else if (i<32) {
    		            t +=  f2(bl,cl,dl) + hl[1];
    	                } else if (i<48) {
    		            t +=  f3(bl,cl,dl) + hl[2];
    	                } else if (i<64) {
    		            t +=  f4(bl,cl,dl) + hl[3];
    	                } else {// if (i<80) {
    		            t +=  f5(bl,cl,dl) + hl[4];
    	                }
    	                t = t|0;
    	                t =  rotl(t,sl[i]);
    	                t = (t+el)|0;
    	                al = el;
    	                el = dl;
    	                dl = rotl(cl, 10);
    	                cl = bl;
    	                bl = t;

    	                t = (ar + M[offset+zr[i]])|0;
    	                if (i<16){
    		            t +=  f5(br,cr,dr) + hr[0];
    	                } else if (i<32) {
    		            t +=  f4(br,cr,dr) + hr[1];
    	                } else if (i<48) {
    		            t +=  f3(br,cr,dr) + hr[2];
    	                } else if (i<64) {
    		            t +=  f2(br,cr,dr) + hr[3];
    	                } else {// if (i<80) {
    		            t +=  f1(br,cr,dr) + hr[4];
    	                }
    	                t = t|0;
    	                t =  rotl(t,sr[i]) ;
    	                t = (t+er)|0;
    	                ar = er;
    	                er = dr;
    	                dr = rotl(cr, 10);
    	                cr = br;
    	                br = t;
    	            }
    	            // Intermediate hash value
    	            t    = (H[1] + cl + dr)|0;
    	            H[1] = (H[2] + dl + er)|0;
    	            H[2] = (H[3] + el + ar)|0;
    	            H[3] = (H[4] + al + br)|0;
    	            H[4] = (H[0] + bl + cr)|0;
    	            H[0] =  t;
    	        },

    	        _doFinalize: function () {
    	            // Shortcuts
    	            var data = this._data;
    	            var dataWords = data.words;

    	            var nBitsTotal = this._nDataBytes * 8;
    	            var nBitsLeft = data.sigBytes * 8;

    	            // Add padding
    	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
    	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
    	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
    	            );
    	            data.sigBytes = (dataWords.length + 1) * 4;

    	            // Hash final blocks
    	            this._process();

    	            // Shortcuts
    	            var hash = this._hash;
    	            var H = hash.words;

    	            // Swap endian
    	            for (var i = 0; i < 5; i++) {
    	                // Shortcut
    	                var H_i = H[i];

    	                // Swap
    	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
    	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
    	            }

    	            // Return final computed hash
    	            return hash;
    	        },

    	        clone: function () {
    	            var clone = Hasher.clone.call(this);
    	            clone._hash = this._hash.clone();

    	            return clone;
    	        }
    	    });


    	    function f1(x, y, z) {
    	        return ((x) ^ (y) ^ (z));

    	    }

    	    function f2(x, y, z) {
    	        return (((x)&(y)) | ((~x)&(z)));
    	    }

    	    function f3(x, y, z) {
    	        return (((x) | (~(y))) ^ (z));
    	    }

    	    function f4(x, y, z) {
    	        return (((x) & (z)) | ((y)&(~(z))));
    	    }

    	    function f5(x, y, z) {
    	        return ((x) ^ ((y) |(~(z))));

    	    }

    	    function rotl(x,n) {
    	        return (x<<n) | (x>>>(32-n));
    	    }


    	    /**
    	     * Shortcut function to the hasher's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     *
    	     * @return {WordArray} The hash.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hash = CryptoJS.RIPEMD160('message');
    	     *     var hash = CryptoJS.RIPEMD160(wordArray);
    	     */
    	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

    	    /**
    	     * Shortcut function to the HMAC's object interface.
    	     *
    	     * @param {WordArray|string} message The message to hash.
    	     * @param {WordArray|string} key The secret key.
    	     *
    	     * @return {WordArray} The HMAC.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
    	     */
    	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
    	}());


    	return CryptoJS.RIPEMD160;

    }));
    }(ripemd160));

    var hmac = {exports: {}};

    (function (module, exports) {
    (function (root, factory) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var C_enc = C.enc;
    	    var Utf8 = C_enc.Utf8;
    	    var C_algo = C.algo;

    	    /**
    	     * HMAC algorithm.
    	     */
    	    C_algo.HMAC = Base.extend({
    	        /**
    	         * Initializes a newly created HMAC.
    	         *
    	         * @param {Hasher} hasher The hash algorithm to use.
    	         * @param {WordArray|string} key The secret key.
    	         *
    	         * @example
    	         *
    	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
    	         */
    	        init: function (hasher, key) {
    	            // Init hasher
    	            hasher = this._hasher = new hasher.init();

    	            // Convert string to WordArray, else assume WordArray already
    	            if (typeof key == 'string') {
    	                key = Utf8.parse(key);
    	            }

    	            // Shortcuts
    	            var hasherBlockSize = hasher.blockSize;
    	            var hasherBlockSizeBytes = hasherBlockSize * 4;

    	            // Allow arbitrary length keys
    	            if (key.sigBytes > hasherBlockSizeBytes) {
    	                key = hasher.finalize(key);
    	            }

    	            // Clamp excess bits
    	            key.clamp();

    	            // Clone key for inner and outer pads
    	            var oKey = this._oKey = key.clone();
    	            var iKey = this._iKey = key.clone();

    	            // Shortcuts
    	            var oKeyWords = oKey.words;
    	            var iKeyWords = iKey.words;

    	            // XOR keys with pad constants
    	            for (var i = 0; i < hasherBlockSize; i++) {
    	                oKeyWords[i] ^= 0x5c5c5c5c;
    	                iKeyWords[i] ^= 0x36363636;
    	            }
    	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

    	            // Set initial values
    	            this.reset();
    	        },

    	        /**
    	         * Resets this HMAC to its initial state.
    	         *
    	         * @example
    	         *
    	         *     hmacHasher.reset();
    	         */
    	        reset: function () {
    	            // Shortcut
    	            var hasher = this._hasher;

    	            // Reset
    	            hasher.reset();
    	            hasher.update(this._iKey);
    	        },

    	        /**
    	         * Updates this HMAC with a message.
    	         *
    	         * @param {WordArray|string} messageUpdate The message to append.
    	         *
    	         * @return {HMAC} This HMAC instance.
    	         *
    	         * @example
    	         *
    	         *     hmacHasher.update('message');
    	         *     hmacHasher.update(wordArray);
    	         */
    	        update: function (messageUpdate) {
    	            this._hasher.update(messageUpdate);

    	            // Chainable
    	            return this;
    	        },

    	        /**
    	         * Finalizes the HMAC computation.
    	         * Note that the finalize operation is effectively a destructive, read-once operation.
    	         *
    	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
    	         *
    	         * @return {WordArray} The HMAC.
    	         *
    	         * @example
    	         *
    	         *     var hmac = hmacHasher.finalize();
    	         *     var hmac = hmacHasher.finalize('message');
    	         *     var hmac = hmacHasher.finalize(wordArray);
    	         */
    	        finalize: function (messageUpdate) {
    	            // Shortcut
    	            var hasher = this._hasher;

    	            // Compute HMAC
    	            var innerHash = hasher.finalize(messageUpdate);
    	            hasher.reset();
    	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

    	            return hmac;
    	        }
    	    });
    	}());


    }));
    }(hmac));

    var pbkdf2 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, sha256.exports, hmac.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var WordArray = C_lib.WordArray;
    	    var C_algo = C.algo;
    	    var SHA256 = C_algo.SHA256;
    	    var HMAC = C_algo.HMAC;

    	    /**
    	     * Password-Based Key Derivation Function 2 algorithm.
    	     */
    	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
    	         * @property {Hasher} hasher The hasher to use. Default: SHA256
    	         * @property {number} iterations The number of iterations to perform. Default: 250000
    	         */
    	        cfg: Base.extend({
    	            keySize: 128/32,
    	            hasher: SHA256,
    	            iterations: 250000
    	        }),

    	        /**
    	         * Initializes a newly created key derivation function.
    	         *
    	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
    	         *
    	         * @example
    	         *
    	         *     var kdf = CryptoJS.algo.PBKDF2.create();
    	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
    	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
    	         */
    	        init: function (cfg) {
    	            this.cfg = this.cfg.extend(cfg);
    	        },

    	        /**
    	         * Computes the Password-Based Key Derivation Function 2.
    	         *
    	         * @param {WordArray|string} password The password.
    	         * @param {WordArray|string} salt A salt.
    	         *
    	         * @return {WordArray} The derived key.
    	         *
    	         * @example
    	         *
    	         *     var key = kdf.compute(password, salt);
    	         */
    	        compute: function (password, salt) {
    	            // Shortcut
    	            var cfg = this.cfg;

    	            // Init HMAC
    	            var hmac = HMAC.create(cfg.hasher, password);

    	            // Initial values
    	            var derivedKey = WordArray.create();
    	            var blockIndex = WordArray.create([0x00000001]);

    	            // Shortcuts
    	            var derivedKeyWords = derivedKey.words;
    	            var blockIndexWords = blockIndex.words;
    	            var keySize = cfg.keySize;
    	            var iterations = cfg.iterations;

    	            // Generate key
    	            while (derivedKeyWords.length < keySize) {
    	                var block = hmac.update(salt).finalize(blockIndex);
    	                hmac.reset();

    	                // Shortcuts
    	                var blockWords = block.words;
    	                var blockWordsLength = blockWords.length;

    	                // Iterations
    	                var intermediate = block;
    	                for (var i = 1; i < iterations; i++) {
    	                    intermediate = hmac.finalize(intermediate);
    	                    hmac.reset();

    	                    // Shortcut
    	                    var intermediateWords = intermediate.words;

    	                    // XOR intermediate with block
    	                    for (var j = 0; j < blockWordsLength; j++) {
    	                        blockWords[j] ^= intermediateWords[j];
    	                    }
    	                }

    	                derivedKey.concat(block);
    	                blockIndexWords[0]++;
    	            }
    	            derivedKey.sigBytes = keySize * 4;

    	            return derivedKey;
    	        }
    	    });

    	    /**
    	     * Computes the Password-Based Key Derivation Function 2.
    	     *
    	     * @param {WordArray|string} password The password.
    	     * @param {WordArray|string} salt A salt.
    	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
    	     *
    	     * @return {WordArray} The derived key.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var key = CryptoJS.PBKDF2(password, salt);
    	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
    	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
    	     */
    	    C.PBKDF2 = function (password, salt, cfg) {
    	        return PBKDF2.create(cfg).compute(password, salt);
    	    };
    	}());


    	return CryptoJS.PBKDF2;

    }));
    }(pbkdf2));

    var evpkdf = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, sha1.exports, hmac.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var WordArray = C_lib.WordArray;
    	    var C_algo = C.algo;
    	    var MD5 = C_algo.MD5;

    	    /**
    	     * This key derivation function is meant to conform with EVP_BytesToKey.
    	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
    	     */
    	    var EvpKDF = C_algo.EvpKDF = Base.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
    	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
    	         * @property {number} iterations The number of iterations to perform. Default: 1
    	         */
    	        cfg: Base.extend({
    	            keySize: 128/32,
    	            hasher: MD5,
    	            iterations: 1
    	        }),

    	        /**
    	         * Initializes a newly created key derivation function.
    	         *
    	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
    	         *
    	         * @example
    	         *
    	         *     var kdf = CryptoJS.algo.EvpKDF.create();
    	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
    	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
    	         */
    	        init: function (cfg) {
    	            this.cfg = this.cfg.extend(cfg);
    	        },

    	        /**
    	         * Derives a key from a password.
    	         *
    	         * @param {WordArray|string} password The password.
    	         * @param {WordArray|string} salt A salt.
    	         *
    	         * @return {WordArray} The derived key.
    	         *
    	         * @example
    	         *
    	         *     var key = kdf.compute(password, salt);
    	         */
    	        compute: function (password, salt) {
    	            var block;

    	            // Shortcut
    	            var cfg = this.cfg;

    	            // Init hasher
    	            var hasher = cfg.hasher.create();

    	            // Initial values
    	            var derivedKey = WordArray.create();

    	            // Shortcuts
    	            var derivedKeyWords = derivedKey.words;
    	            var keySize = cfg.keySize;
    	            var iterations = cfg.iterations;

    	            // Generate key
    	            while (derivedKeyWords.length < keySize) {
    	                if (block) {
    	                    hasher.update(block);
    	                }
    	                block = hasher.update(password).finalize(salt);
    	                hasher.reset();

    	                // Iterations
    	                for (var i = 1; i < iterations; i++) {
    	                    block = hasher.finalize(block);
    	                    hasher.reset();
    	                }

    	                derivedKey.concat(block);
    	            }
    	            derivedKey.sigBytes = keySize * 4;

    	            return derivedKey;
    	        }
    	    });

    	    /**
    	     * Derives a key from a password.
    	     *
    	     * @param {WordArray|string} password The password.
    	     * @param {WordArray|string} salt A salt.
    	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
    	     *
    	     * @return {WordArray} The derived key.
    	     *
    	     * @static
    	     *
    	     * @example
    	     *
    	     *     var key = CryptoJS.EvpKDF(password, salt);
    	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
    	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
    	     */
    	    C.EvpKDF = function (password, salt, cfg) {
    	        return EvpKDF.create(cfg).compute(password, salt);
    	    };
    	}());


    	return CryptoJS.EvpKDF;

    }));
    }(evpkdf));

    var cipherCore = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, evpkdf.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Cipher core components.
    	 */
    	CryptoJS.lib.Cipher || (function (undefined$1) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var Base = C_lib.Base;
    	    var WordArray = C_lib.WordArray;
    	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
    	    var C_enc = C.enc;
    	    C_enc.Utf8;
    	    var Base64 = C_enc.Base64;
    	    var C_algo = C.algo;
    	    var EvpKDF = C_algo.EvpKDF;

    	    /**
    	     * Abstract base cipher template.
    	     *
    	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
    	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
    	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
    	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
    	     */
    	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {WordArray} iv The IV to use for this operation.
    	         */
    	        cfg: Base.extend(),

    	        /**
    	         * Creates this cipher in encryption mode.
    	         *
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {Cipher} A cipher instance.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
    	         */
    	        createEncryptor: function (key, cfg) {
    	            return this.create(this._ENC_XFORM_MODE, key, cfg);
    	        },

    	        /**
    	         * Creates this cipher in decryption mode.
    	         *
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {Cipher} A cipher instance.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
    	         */
    	        createDecryptor: function (key, cfg) {
    	            return this.create(this._DEC_XFORM_MODE, key, cfg);
    	        },

    	        /**
    	         * Initializes a newly created cipher.
    	         *
    	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @example
    	         *
    	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
    	         */
    	        init: function (xformMode, key, cfg) {
    	            // Apply config defaults
    	            this.cfg = this.cfg.extend(cfg);

    	            // Store transform mode and key
    	            this._xformMode = xformMode;
    	            this._key = key;

    	            // Set initial values
    	            this.reset();
    	        },

    	        /**
    	         * Resets this cipher to its initial state.
    	         *
    	         * @example
    	         *
    	         *     cipher.reset();
    	         */
    	        reset: function () {
    	            // Reset data buffer
    	            BufferedBlockAlgorithm.reset.call(this);

    	            // Perform concrete-cipher logic
    	            this._doReset();
    	        },

    	        /**
    	         * Adds data to be encrypted or decrypted.
    	         *
    	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
    	         *
    	         * @return {WordArray} The data after processing.
    	         *
    	         * @example
    	         *
    	         *     var encrypted = cipher.process('data');
    	         *     var encrypted = cipher.process(wordArray);
    	         */
    	        process: function (dataUpdate) {
    	            // Append
    	            this._append(dataUpdate);

    	            // Process available blocks
    	            return this._process();
    	        },

    	        /**
    	         * Finalizes the encryption or decryption process.
    	         * Note that the finalize operation is effectively a destructive, read-once operation.
    	         *
    	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
    	         *
    	         * @return {WordArray} The data after final processing.
    	         *
    	         * @example
    	         *
    	         *     var encrypted = cipher.finalize();
    	         *     var encrypted = cipher.finalize('data');
    	         *     var encrypted = cipher.finalize(wordArray);
    	         */
    	        finalize: function (dataUpdate) {
    	            // Final data update
    	            if (dataUpdate) {
    	                this._append(dataUpdate);
    	            }

    	            // Perform concrete-cipher logic
    	            var finalProcessedData = this._doFinalize();

    	            return finalProcessedData;
    	        },

    	        keySize: 128/32,

    	        ivSize: 128/32,

    	        _ENC_XFORM_MODE: 1,

    	        _DEC_XFORM_MODE: 2,

    	        /**
    	         * Creates shortcut functions to a cipher's object interface.
    	         *
    	         * @param {Cipher} cipher The cipher to create a helper for.
    	         *
    	         * @return {Object} An object with encrypt and decrypt shortcut functions.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
    	         */
    	        _createHelper: (function () {
    	            function selectCipherStrategy(key) {
    	                if (typeof key == 'string') {
    	                    return PasswordBasedCipher;
    	                } else {
    	                    return SerializableCipher;
    	                }
    	            }

    	            return function (cipher) {
    	                return {
    	                    encrypt: function (message, key, cfg) {
    	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
    	                    },

    	                    decrypt: function (ciphertext, key, cfg) {
    	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
    	                    }
    	                };
    	            };
    	        }())
    	    });

    	    /**
    	     * Abstract base stream cipher template.
    	     *
    	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
    	     */
    	    C_lib.StreamCipher = Cipher.extend({
    	        _doFinalize: function () {
    	            // Process partial blocks
    	            var finalProcessedBlocks = this._process(!!'flush');

    	            return finalProcessedBlocks;
    	        },

    	        blockSize: 1
    	    });

    	    /**
    	     * Mode namespace.
    	     */
    	    var C_mode = C.mode = {};

    	    /**
    	     * Abstract base block cipher mode template.
    	     */
    	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
    	        /**
    	         * Creates this mode for encryption.
    	         *
    	         * @param {Cipher} cipher A block cipher instance.
    	         * @param {Array} iv The IV words.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
    	         */
    	        createEncryptor: function (cipher, iv) {
    	            return this.Encryptor.create(cipher, iv);
    	        },

    	        /**
    	         * Creates this mode for decryption.
    	         *
    	         * @param {Cipher} cipher A block cipher instance.
    	         * @param {Array} iv The IV words.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
    	         */
    	        createDecryptor: function (cipher, iv) {
    	            return this.Decryptor.create(cipher, iv);
    	        },

    	        /**
    	         * Initializes a newly created mode.
    	         *
    	         * @param {Cipher} cipher A block cipher instance.
    	         * @param {Array} iv The IV words.
    	         *
    	         * @example
    	         *
    	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
    	         */
    	        init: function (cipher, iv) {
    	            this._cipher = cipher;
    	            this._iv = iv;
    	        }
    	    });

    	    /**
    	     * Cipher Block Chaining mode.
    	     */
    	    var CBC = C_mode.CBC = (function () {
    	        /**
    	         * Abstract base CBC mode.
    	         */
    	        var CBC = BlockCipherMode.extend();

    	        /**
    	         * CBC encryptor.
    	         */
    	        CBC.Encryptor = CBC.extend({
    	            /**
    	             * Processes the data block at offset.
    	             *
    	             * @param {Array} words The data words to operate on.
    	             * @param {number} offset The offset where the block starts.
    	             *
    	             * @example
    	             *
    	             *     mode.processBlock(data.words, offset);
    	             */
    	            processBlock: function (words, offset) {
    	                // Shortcuts
    	                var cipher = this._cipher;
    	                var blockSize = cipher.blockSize;

    	                // XOR and encrypt
    	                xorBlock.call(this, words, offset, blockSize);
    	                cipher.encryptBlock(words, offset);

    	                // Remember this block to use with next block
    	                this._prevBlock = words.slice(offset, offset + blockSize);
    	            }
    	        });

    	        /**
    	         * CBC decryptor.
    	         */
    	        CBC.Decryptor = CBC.extend({
    	            /**
    	             * Processes the data block at offset.
    	             *
    	             * @param {Array} words The data words to operate on.
    	             * @param {number} offset The offset where the block starts.
    	             *
    	             * @example
    	             *
    	             *     mode.processBlock(data.words, offset);
    	             */
    	            processBlock: function (words, offset) {
    	                // Shortcuts
    	                var cipher = this._cipher;
    	                var blockSize = cipher.blockSize;

    	                // Remember this block to use with next block
    	                var thisBlock = words.slice(offset, offset + blockSize);

    	                // Decrypt and XOR
    	                cipher.decryptBlock(words, offset);
    	                xorBlock.call(this, words, offset, blockSize);

    	                // This block becomes the previous block
    	                this._prevBlock = thisBlock;
    	            }
    	        });

    	        function xorBlock(words, offset, blockSize) {
    	            var block;

    	            // Shortcut
    	            var iv = this._iv;

    	            // Choose mixing block
    	            if (iv) {
    	                block = iv;

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined$1;
    	            } else {
    	                block = this._prevBlock;
    	            }

    	            // XOR blocks
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= block[i];
    	            }
    	        }

    	        return CBC;
    	    }());

    	    /**
    	     * Padding namespace.
    	     */
    	    var C_pad = C.pad = {};

    	    /**
    	     * PKCS #5/7 padding strategy.
    	     */
    	    var Pkcs7 = C_pad.Pkcs7 = {
    	        /**
    	         * Pads data using the algorithm defined in PKCS #5/7.
    	         *
    	         * @param {WordArray} data The data to pad.
    	         * @param {number} blockSize The multiple that the data should be padded to.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
    	         */
    	        pad: function (data, blockSize) {
    	            // Shortcut
    	            var blockSizeBytes = blockSize * 4;

    	            // Count padding bytes
    	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

    	            // Create padding word
    	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

    	            // Create padding
    	            var paddingWords = [];
    	            for (var i = 0; i < nPaddingBytes; i += 4) {
    	                paddingWords.push(paddingWord);
    	            }
    	            var padding = WordArray.create(paddingWords, nPaddingBytes);

    	            // Add padding
    	            data.concat(padding);
    	        },

    	        /**
    	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
    	         *
    	         * @param {WordArray} data The data to unpad.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
    	         */
    	        unpad: function (data) {
    	            // Get number of padding bytes from last byte
    	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    	            // Remove padding
    	            data.sigBytes -= nPaddingBytes;
    	        }
    	    };

    	    /**
    	     * Abstract base block cipher template.
    	     *
    	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
    	     */
    	    C_lib.BlockCipher = Cipher.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {Mode} mode The block mode to use. Default: CBC
    	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
    	         */
    	        cfg: Cipher.cfg.extend({
    	            mode: CBC,
    	            padding: Pkcs7
    	        }),

    	        reset: function () {
    	            var modeCreator;

    	            // Reset cipher
    	            Cipher.reset.call(this);

    	            // Shortcuts
    	            var cfg = this.cfg;
    	            var iv = cfg.iv;
    	            var mode = cfg.mode;

    	            // Reset block mode
    	            if (this._xformMode == this._ENC_XFORM_MODE) {
    	                modeCreator = mode.createEncryptor;
    	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
    	                modeCreator = mode.createDecryptor;
    	                // Keep at least one block in the buffer for unpadding
    	                this._minBufferSize = 1;
    	            }

    	            if (this._mode && this._mode.__creator == modeCreator) {
    	                this._mode.init(this, iv && iv.words);
    	            } else {
    	                this._mode = modeCreator.call(mode, this, iv && iv.words);
    	                this._mode.__creator = modeCreator;
    	            }
    	        },

    	        _doProcessBlock: function (words, offset) {
    	            this._mode.processBlock(words, offset);
    	        },

    	        _doFinalize: function () {
    	            var finalProcessedBlocks;

    	            // Shortcut
    	            var padding = this.cfg.padding;

    	            // Finalize
    	            if (this._xformMode == this._ENC_XFORM_MODE) {
    	                // Pad data
    	                padding.pad(this._data, this.blockSize);

    	                // Process final blocks
    	                finalProcessedBlocks = this._process(!!'flush');
    	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
    	                // Process final blocks
    	                finalProcessedBlocks = this._process(!!'flush');

    	                // Unpad data
    	                padding.unpad(finalProcessedBlocks);
    	            }

    	            return finalProcessedBlocks;
    	        },

    	        blockSize: 128/32
    	    });

    	    /**
    	     * A collection of cipher parameters.
    	     *
    	     * @property {WordArray} ciphertext The raw ciphertext.
    	     * @property {WordArray} key The key to this ciphertext.
    	     * @property {WordArray} iv The IV used in the ciphering operation.
    	     * @property {WordArray} salt The salt used with a key derivation function.
    	     * @property {Cipher} algorithm The cipher algorithm.
    	     * @property {Mode} mode The block mode used in the ciphering operation.
    	     * @property {Padding} padding The padding scheme used in the ciphering operation.
    	     * @property {number} blockSize The block size of the cipher.
    	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
    	     */
    	    var CipherParams = C_lib.CipherParams = Base.extend({
    	        /**
    	         * Initializes a newly created cipher params object.
    	         *
    	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
    	         *
    	         * @example
    	         *
    	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
    	         *         ciphertext: ciphertextWordArray,
    	         *         key: keyWordArray,
    	         *         iv: ivWordArray,
    	         *         salt: saltWordArray,
    	         *         algorithm: CryptoJS.algo.AES,
    	         *         mode: CryptoJS.mode.CBC,
    	         *         padding: CryptoJS.pad.PKCS7,
    	         *         blockSize: 4,
    	         *         formatter: CryptoJS.format.OpenSSL
    	         *     });
    	         */
    	        init: function (cipherParams) {
    	            this.mixIn(cipherParams);
    	        },

    	        /**
    	         * Converts this cipher params object to a string.
    	         *
    	         * @param {Format} formatter (Optional) The formatting strategy to use.
    	         *
    	         * @return {string} The stringified cipher params.
    	         *
    	         * @throws Error If neither the formatter nor the default formatter is set.
    	         *
    	         * @example
    	         *
    	         *     var string = cipherParams + '';
    	         *     var string = cipherParams.toString();
    	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
    	         */
    	        toString: function (formatter) {
    	            return (formatter || this.formatter).stringify(this);
    	        }
    	    });

    	    /**
    	     * Format namespace.
    	     */
    	    var C_format = C.format = {};

    	    /**
    	     * OpenSSL formatting strategy.
    	     */
    	    var OpenSSLFormatter = C_format.OpenSSL = {
    	        /**
    	         * Converts a cipher params object to an OpenSSL-compatible string.
    	         *
    	         * @param {CipherParams} cipherParams The cipher params object.
    	         *
    	         * @return {string} The OpenSSL-compatible string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
    	         */
    	        stringify: function (cipherParams) {
    	            var wordArray;

    	            // Shortcuts
    	            var ciphertext = cipherParams.ciphertext;
    	            var salt = cipherParams.salt;

    	            // Format
    	            if (salt) {
    	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
    	            } else {
    	                wordArray = ciphertext;
    	            }

    	            return wordArray.toString(Base64);
    	        },

    	        /**
    	         * Converts an OpenSSL-compatible string to a cipher params object.
    	         *
    	         * @param {string} openSSLStr The OpenSSL-compatible string.
    	         *
    	         * @return {CipherParams} The cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
    	         */
    	        parse: function (openSSLStr) {
    	            var salt;

    	            // Parse base64
    	            var ciphertext = Base64.parse(openSSLStr);

    	            // Shortcut
    	            var ciphertextWords = ciphertext.words;

    	            // Test for salt
    	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
    	                // Extract salt
    	                salt = WordArray.create(ciphertextWords.slice(2, 4));

    	                // Remove salt from ciphertext
    	                ciphertextWords.splice(0, 4);
    	                ciphertext.sigBytes -= 16;
    	            }

    	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
    	        }
    	    };

    	    /**
    	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
    	     */
    	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
    	         */
    	        cfg: Base.extend({
    	            format: OpenSSLFormatter
    	        }),

    	        /**
    	         * Encrypts a message.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {WordArray|string} message The message to encrypt.
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {CipherParams} A cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    	         */
    	        encrypt: function (cipher, message, key, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Encrypt
    	            var encryptor = cipher.createEncryptor(key, cfg);
    	            var ciphertext = encryptor.finalize(message);

    	            // Shortcut
    	            var cipherCfg = encryptor.cfg;

    	            // Create and return serializable cipher params
    	            return CipherParams.create({
    	                ciphertext: ciphertext,
    	                key: key,
    	                iv: cipherCfg.iv,
    	                algorithm: cipher,
    	                mode: cipherCfg.mode,
    	                padding: cipherCfg.padding,
    	                blockSize: cipher.blockSize,
    	                formatter: cfg.format
    	            });
    	        },

    	        /**
    	         * Decrypts serialized ciphertext.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
    	         * @param {WordArray} key The key.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {WordArray} The plaintext.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
    	         */
    	        decrypt: function (cipher, ciphertext, key, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Convert string to CipherParams
    	            ciphertext = this._parse(ciphertext, cfg.format);

    	            // Decrypt
    	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

    	            return plaintext;
    	        },

    	        /**
    	         * Converts serialized ciphertext to CipherParams,
    	         * else assumed CipherParams already and returns ciphertext unchanged.
    	         *
    	         * @param {CipherParams|string} ciphertext The ciphertext.
    	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
    	         *
    	         * @return {CipherParams} The unserialized ciphertext.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
    	         */
    	        _parse: function (ciphertext, format) {
    	            if (typeof ciphertext == 'string') {
    	                return format.parse(ciphertext, this);
    	            } else {
    	                return ciphertext;
    	            }
    	        }
    	    });

    	    /**
    	     * Key derivation function namespace.
    	     */
    	    var C_kdf = C.kdf = {};

    	    /**
    	     * OpenSSL key derivation function.
    	     */
    	    var OpenSSLKdf = C_kdf.OpenSSL = {
    	        /**
    	         * Derives a key and IV from a password.
    	         *
    	         * @param {string} password The password to derive from.
    	         * @param {number} keySize The size in words of the key to generate.
    	         * @param {number} ivSize The size in words of the IV to generate.
    	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
    	         *
    	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
    	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
    	         */
    	        execute: function (password, keySize, ivSize, salt, hasher) {
    	            // Generate random salt
    	            if (!salt) {
    	                salt = WordArray.random(64/8);
    	            }

    	            // Derive key and IV
    	            if (!hasher) {
    	                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
    	            } else {
    	                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher: hasher }).compute(password, salt);
    	            }


    	            // Separate key and IV
    	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
    	            key.sigBytes = keySize * 4;

    	            // Return params
    	            return CipherParams.create({ key: key, iv: iv, salt: salt });
    	        }
    	    };

    	    /**
    	     * A serializable cipher wrapper that derives the key from a password,
    	     * and returns ciphertext as a serializable cipher params object.
    	     */
    	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
    	         */
    	        cfg: SerializableCipher.cfg.extend({
    	            kdf: OpenSSLKdf
    	        }),

    	        /**
    	         * Encrypts a message using a password.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {WordArray|string} message The message to encrypt.
    	         * @param {string} password The password.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {CipherParams} A cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
    	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
    	         */
    	        encrypt: function (cipher, message, password, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Derive key and other params
    	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

    	            // Add IV to config
    	            cfg.iv = derivedParams.iv;

    	            // Encrypt
    	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

    	            // Mix in derived params
    	            ciphertext.mixIn(derivedParams);

    	            return ciphertext;
    	        },

    	        /**
    	         * Decrypts serialized ciphertext using a password.
    	         *
    	         * @param {Cipher} cipher The cipher algorithm to use.
    	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
    	         * @param {string} password The password.
    	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
    	         *
    	         * @return {WordArray} The plaintext.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
    	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
    	         */
    	        decrypt: function (cipher, ciphertext, password, cfg) {
    	            // Apply config defaults
    	            cfg = this.cfg.extend(cfg);

    	            // Convert string to CipherParams
    	            ciphertext = this._parse(ciphertext, cfg.format);

    	            // Derive key and other params
    	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

    	            // Add IV to config
    	            cfg.iv = derivedParams.iv;

    	            // Decrypt
    	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

    	            return plaintext;
    	        }
    	    });
    	}());


    }));
    }(cipherCore));

    var modeCfb = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Cipher Feedback block mode.
    	 */
    	CryptoJS.mode.CFB = (function () {
    	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

    	    CFB.Encryptor = CFB.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;

    	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    	            // Remember this block to use with next block
    	            this._prevBlock = words.slice(offset, offset + blockSize);
    	        }
    	    });

    	    CFB.Decryptor = CFB.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;

    	            // Remember this block to use with next block
    	            var thisBlock = words.slice(offset, offset + blockSize);

    	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

    	            // This block becomes the previous block
    	            this._prevBlock = thisBlock;
    	        }
    	    });

    	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
    	        var keystream;

    	        // Shortcut
    	        var iv = this._iv;

    	        // Generate keystream
    	        if (iv) {
    	            keystream = iv.slice(0);

    	            // Remove IV for subsequent blocks
    	            this._iv = undefined;
    	        } else {
    	            keystream = this._prevBlock;
    	        }
    	        cipher.encryptBlock(keystream, 0);

    	        // Encrypt
    	        for (var i = 0; i < blockSize; i++) {
    	            words[offset + i] ^= keystream[i];
    	        }
    	    }

    	    return CFB;
    	}());


    	return CryptoJS.mode.CFB;

    }));
    }(modeCfb));

    var modeCtr = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Counter block mode.
    	 */
    	CryptoJS.mode.CTR = (function () {
    	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

    	    var Encryptor = CTR.Encryptor = CTR.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;
    	            var iv = this._iv;
    	            var counter = this._counter;

    	            // Generate keystream
    	            if (iv) {
    	                counter = this._counter = iv.slice(0);

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined;
    	            }
    	            var keystream = counter.slice(0);
    	            cipher.encryptBlock(keystream, 0);

    	            // Increment counter
    	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

    	            // Encrypt
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= keystream[i];
    	            }
    	        }
    	    });

    	    CTR.Decryptor = Encryptor;

    	    return CTR;
    	}());


    	return CryptoJS.mode.CTR;

    }));
    }(modeCtr));

    var modeCtrGladman = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/** @preserve
    	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
    	 * derived from CryptoJS.mode.CTR
    	 * Jan Hruby jhruby.web@gmail.com
    	 */
    	CryptoJS.mode.CTRGladman = (function () {
    	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

    		function incWord(word)
    		{
    			if (((word >> 24) & 0xff) === 0xff) { //overflow
    			var b1 = (word >> 16)&0xff;
    			var b2 = (word >> 8)&0xff;
    			var b3 = word & 0xff;

    			if (b1 === 0xff) // overflow b1
    			{
    			b1 = 0;
    			if (b2 === 0xff)
    			{
    				b2 = 0;
    				if (b3 === 0xff)
    				{
    					b3 = 0;
    				}
    				else
    				{
    					++b3;
    				}
    			}
    			else
    			{
    				++b2;
    			}
    			}
    			else
    			{
    			++b1;
    			}

    			word = 0;
    			word += (b1 << 16);
    			word += (b2 << 8);
    			word += b3;
    			}
    			else
    			{
    			word += (0x01 << 24);
    			}
    			return word;
    		}

    		function incCounter(counter)
    		{
    			if ((counter[0] = incWord(counter[0])) === 0)
    			{
    				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
    				counter[1] = incWord(counter[1]);
    			}
    			return counter;
    		}

    	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;
    	            var iv = this._iv;
    	            var counter = this._counter;

    	            // Generate keystream
    	            if (iv) {
    	                counter = this._counter = iv.slice(0);

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined;
    	            }

    				incCounter(counter);

    				var keystream = counter.slice(0);
    	            cipher.encryptBlock(keystream, 0);

    	            // Encrypt
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= keystream[i];
    	            }
    	        }
    	    });

    	    CTRGladman.Decryptor = Encryptor;

    	    return CTRGladman;
    	}());




    	return CryptoJS.mode.CTRGladman;

    }));
    }(modeCtrGladman));

    var modeOfb = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Output Feedback block mode.
    	 */
    	CryptoJS.mode.OFB = (function () {
    	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

    	    var Encryptor = OFB.Encryptor = OFB.extend({
    	        processBlock: function (words, offset) {
    	            // Shortcuts
    	            var cipher = this._cipher;
    	            var blockSize = cipher.blockSize;
    	            var iv = this._iv;
    	            var keystream = this._keystream;

    	            // Generate keystream
    	            if (iv) {
    	                keystream = this._keystream = iv.slice(0);

    	                // Remove IV for subsequent blocks
    	                this._iv = undefined;
    	            }
    	            cipher.encryptBlock(keystream, 0);

    	            // Encrypt
    	            for (var i = 0; i < blockSize; i++) {
    	                words[offset + i] ^= keystream[i];
    	            }
    	        }
    	    });

    	    OFB.Decryptor = Encryptor;

    	    return OFB;
    	}());


    	return CryptoJS.mode.OFB;

    }));
    }(modeOfb));

    var modeEcb = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Electronic Codebook block mode.
    	 */
    	CryptoJS.mode.ECB = (function () {
    	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

    	    ECB.Encryptor = ECB.extend({
    	        processBlock: function (words, offset) {
    	            this._cipher.encryptBlock(words, offset);
    	        }
    	    });

    	    ECB.Decryptor = ECB.extend({
    	        processBlock: function (words, offset) {
    	            this._cipher.decryptBlock(words, offset);
    	        }
    	    });

    	    return ECB;
    	}());


    	return CryptoJS.mode.ECB;

    }));
    }(modeEcb));

    var padAnsix923 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * ANSI X.923 padding strategy.
    	 */
    	CryptoJS.pad.AnsiX923 = {
    	    pad: function (data, blockSize) {
    	        // Shortcuts
    	        var dataSigBytes = data.sigBytes;
    	        var blockSizeBytes = blockSize * 4;

    	        // Count padding bytes
    	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

    	        // Compute last byte position
    	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

    	        // Pad
    	        data.clamp();
    	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
    	        data.sigBytes += nPaddingBytes;
    	    },

    	    unpad: function (data) {
    	        // Get number of padding bytes from last byte
    	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    	        // Remove padding
    	        data.sigBytes -= nPaddingBytes;
    	    }
    	};


    	return CryptoJS.pad.Ansix923;

    }));
    }(padAnsix923));

    var padIso10126 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * ISO 10126 padding strategy.
    	 */
    	CryptoJS.pad.Iso10126 = {
    	    pad: function (data, blockSize) {
    	        // Shortcut
    	        var blockSizeBytes = blockSize * 4;

    	        // Count padding bytes
    	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

    	        // Pad
    	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
    	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    	    },

    	    unpad: function (data) {
    	        // Get number of padding bytes from last byte
    	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

    	        // Remove padding
    	        data.sigBytes -= nPaddingBytes;
    	    }
    	};


    	return CryptoJS.pad.Iso10126;

    }));
    }(padIso10126));

    var padIso97971 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * ISO/IEC 9797-1 Padding Method 2.
    	 */
    	CryptoJS.pad.Iso97971 = {
    	    pad: function (data, blockSize) {
    	        // Add 0x80 byte
    	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

    	        // Zero pad the rest
    	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    	    },

    	    unpad: function (data) {
    	        // Remove zero padding
    	        CryptoJS.pad.ZeroPadding.unpad(data);

    	        // Remove one more byte -- the 0x80 byte
    	        data.sigBytes--;
    	    }
    	};


    	return CryptoJS.pad.Iso97971;

    }));
    }(padIso97971));

    var padZeropadding = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * Zero padding strategy.
    	 */
    	CryptoJS.pad.ZeroPadding = {
    	    pad: function (data, blockSize) {
    	        // Shortcut
    	        var blockSizeBytes = blockSize * 4;

    	        // Pad
    	        data.clamp();
    	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
    	    },

    	    unpad: function (data) {
    	        // Shortcut
    	        var dataWords = data.words;

    	        // Unpad
    	        var i = data.sigBytes - 1;
    	        for (var i = data.sigBytes - 1; i >= 0; i--) {
    	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
    	                data.sigBytes = i + 1;
    	                break;
    	            }
    	        }
    	    }
    	};


    	return CryptoJS.pad.ZeroPadding;

    }));
    }(padZeropadding));

    var padNopadding = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	/**
    	 * A noop padding strategy.
    	 */
    	CryptoJS.pad.NoPadding = {
    	    pad: function () {
    	    },

    	    unpad: function () {
    	    }
    	};


    	return CryptoJS.pad.NoPadding;

    }));
    }(padNopadding));

    var formatHex = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function (undefined$1) {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var CipherParams = C_lib.CipherParams;
    	    var C_enc = C.enc;
    	    var Hex = C_enc.Hex;
    	    var C_format = C.format;

    	    C_format.Hex = {
    	        /**
    	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
    	         *
    	         * @param {CipherParams} cipherParams The cipher params object.
    	         *
    	         * @return {string} The hexadecimally encoded string.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
    	         */
    	        stringify: function (cipherParams) {
    	            return cipherParams.ciphertext.toString(Hex);
    	        },

    	        /**
    	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
    	         *
    	         * @param {string} input The hexadecimally encoded string.
    	         *
    	         * @return {CipherParams} The cipher params object.
    	         *
    	         * @static
    	         *
    	         * @example
    	         *
    	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
    	         */
    	        parse: function (input) {
    	            var ciphertext = Hex.parse(input);
    	            return CipherParams.create({ ciphertext: ciphertext });
    	        }
    	    };
    	}());


    	return CryptoJS.format.Hex;

    }));
    }(formatHex));

    var aes = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var BlockCipher = C_lib.BlockCipher;
    	    var C_algo = C.algo;

    	    // Lookup tables
    	    var SBOX = [];
    	    var INV_SBOX = [];
    	    var SUB_MIX_0 = [];
    	    var SUB_MIX_1 = [];
    	    var SUB_MIX_2 = [];
    	    var SUB_MIX_3 = [];
    	    var INV_SUB_MIX_0 = [];
    	    var INV_SUB_MIX_1 = [];
    	    var INV_SUB_MIX_2 = [];
    	    var INV_SUB_MIX_3 = [];

    	    // Compute lookup tables
    	    (function () {
    	        // Compute double table
    	        var d = [];
    	        for (var i = 0; i < 256; i++) {
    	            if (i < 128) {
    	                d[i] = i << 1;
    	            } else {
    	                d[i] = (i << 1) ^ 0x11b;
    	            }
    	        }

    	        // Walk GF(2^8)
    	        var x = 0;
    	        var xi = 0;
    	        for (var i = 0; i < 256; i++) {
    	            // Compute sbox
    	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
    	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
    	            SBOX[x] = sx;
    	            INV_SBOX[sx] = x;

    	            // Compute multiplication
    	            var x2 = d[x];
    	            var x4 = d[x2];
    	            var x8 = d[x4];

    	            // Compute sub bytes, mix columns tables
    	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
    	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
    	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
    	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
    	            SUB_MIX_3[x] = t;

    	            // Compute inv sub bytes, inv mix columns tables
    	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
    	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
    	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
    	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
    	            INV_SUB_MIX_3[sx] = t;

    	            // Compute next counter
    	            if (!x) {
    	                x = xi = 1;
    	            } else {
    	                x = x2 ^ d[d[d[x8 ^ x2]]];
    	                xi ^= d[d[xi]];
    	            }
    	        }
    	    }());

    	    // Precomputed Rcon lookup
    	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

    	    /**
    	     * AES block cipher algorithm.
    	     */
    	    var AES = C_algo.AES = BlockCipher.extend({
    	        _doReset: function () {
    	            var t;

    	            // Skip reset of nRounds has been set before and key did not change
    	            if (this._nRounds && this._keyPriorReset === this._key) {
    	                return;
    	            }

    	            // Shortcuts
    	            var key = this._keyPriorReset = this._key;
    	            var keyWords = key.words;
    	            var keySize = key.sigBytes / 4;

    	            // Compute number of rounds
    	            var nRounds = this._nRounds = keySize + 6;

    	            // Compute number of key schedule rows
    	            var ksRows = (nRounds + 1) * 4;

    	            // Compute key schedule
    	            var keySchedule = this._keySchedule = [];
    	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
    	                if (ksRow < keySize) {
    	                    keySchedule[ksRow] = keyWords[ksRow];
    	                } else {
    	                    t = keySchedule[ksRow - 1];

    	                    if (!(ksRow % keySize)) {
    	                        // Rot word
    	                        t = (t << 8) | (t >>> 24);

    	                        // Sub word
    	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

    	                        // Mix Rcon
    	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
    	                    } else if (keySize > 6 && ksRow % keySize == 4) {
    	                        // Sub word
    	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
    	                    }

    	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
    	                }
    	            }

    	            // Compute inv key schedule
    	            var invKeySchedule = this._invKeySchedule = [];
    	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
    	                var ksRow = ksRows - invKsRow;

    	                if (invKsRow % 4) {
    	                    var t = keySchedule[ksRow];
    	                } else {
    	                    var t = keySchedule[ksRow - 4];
    	                }

    	                if (invKsRow < 4 || ksRow <= 4) {
    	                    invKeySchedule[invKsRow] = t;
    	                } else {
    	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
    	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
    	                }
    	            }
    	        },

    	        encryptBlock: function (M, offset) {
    	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
    	        },

    	        decryptBlock: function (M, offset) {
    	            // Swap 2nd and 4th rows
    	            var t = M[offset + 1];
    	            M[offset + 1] = M[offset + 3];
    	            M[offset + 3] = t;

    	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

    	            // Inv swap 2nd and 4th rows
    	            var t = M[offset + 1];
    	            M[offset + 1] = M[offset + 3];
    	            M[offset + 3] = t;
    	        },

    	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    	            // Shortcut
    	            var nRounds = this._nRounds;

    	            // Get input, add round key
    	            var s0 = M[offset]     ^ keySchedule[0];
    	            var s1 = M[offset + 1] ^ keySchedule[1];
    	            var s2 = M[offset + 2] ^ keySchedule[2];
    	            var s3 = M[offset + 3] ^ keySchedule[3];

    	            // Key schedule row counter
    	            var ksRow = 4;

    	            // Rounds
    	            for (var round = 1; round < nRounds; round++) {
    	                // Shift rows, sub bytes, mix columns, add round key
    	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
    	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
    	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
    	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

    	                // Update state
    	                s0 = t0;
    	                s1 = t1;
    	                s2 = t2;
    	                s3 = t3;
    	            }

    	            // Shift rows, sub bytes, add round key
    	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
    	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
    	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
    	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

    	            // Set output
    	            M[offset]     = t0;
    	            M[offset + 1] = t1;
    	            M[offset + 2] = t2;
    	            M[offset + 3] = t3;
    	        },

    	        keySize: 256/32
    	    });

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
    	     */
    	    C.AES = BlockCipher._createHelper(AES);
    	}());


    	return CryptoJS.AES;

    }));
    }(aes));

    var tripledes = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var WordArray = C_lib.WordArray;
    	    var BlockCipher = C_lib.BlockCipher;
    	    var C_algo = C.algo;

    	    // Permuted Choice 1 constants
    	    var PC1 = [
    	        57, 49, 41, 33, 25, 17, 9,  1,
    	        58, 50, 42, 34, 26, 18, 10, 2,
    	        59, 51, 43, 35, 27, 19, 11, 3,
    	        60, 52, 44, 36, 63, 55, 47, 39,
    	        31, 23, 15, 7,  62, 54, 46, 38,
    	        30, 22, 14, 6,  61, 53, 45, 37,
    	        29, 21, 13, 5,  28, 20, 12, 4
    	    ];

    	    // Permuted Choice 2 constants
    	    var PC2 = [
    	        14, 17, 11, 24, 1,  5,
    	        3,  28, 15, 6,  21, 10,
    	        23, 19, 12, 4,  26, 8,
    	        16, 7,  27, 20, 13, 2,
    	        41, 52, 31, 37, 47, 55,
    	        30, 40, 51, 45, 33, 48,
    	        44, 49, 39, 56, 34, 53,
    	        46, 42, 50, 36, 29, 32
    	    ];

    	    // Cumulative bit shift constants
    	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

    	    // SBOXes and round permutation constants
    	    var SBOX_P = [
    	        {
    	            0x0: 0x808200,
    	            0x10000000: 0x8000,
    	            0x20000000: 0x808002,
    	            0x30000000: 0x2,
    	            0x40000000: 0x200,
    	            0x50000000: 0x808202,
    	            0x60000000: 0x800202,
    	            0x70000000: 0x800000,
    	            0x80000000: 0x202,
    	            0x90000000: 0x800200,
    	            0xa0000000: 0x8200,
    	            0xb0000000: 0x808000,
    	            0xc0000000: 0x8002,
    	            0xd0000000: 0x800002,
    	            0xe0000000: 0x0,
    	            0xf0000000: 0x8202,
    	            0x8000000: 0x0,
    	            0x18000000: 0x808202,
    	            0x28000000: 0x8202,
    	            0x38000000: 0x8000,
    	            0x48000000: 0x808200,
    	            0x58000000: 0x200,
    	            0x68000000: 0x808002,
    	            0x78000000: 0x2,
    	            0x88000000: 0x800200,
    	            0x98000000: 0x8200,
    	            0xa8000000: 0x808000,
    	            0xb8000000: 0x800202,
    	            0xc8000000: 0x800002,
    	            0xd8000000: 0x8002,
    	            0xe8000000: 0x202,
    	            0xf8000000: 0x800000,
    	            0x1: 0x8000,
    	            0x10000001: 0x2,
    	            0x20000001: 0x808200,
    	            0x30000001: 0x800000,
    	            0x40000001: 0x808002,
    	            0x50000001: 0x8200,
    	            0x60000001: 0x200,
    	            0x70000001: 0x800202,
    	            0x80000001: 0x808202,
    	            0x90000001: 0x808000,
    	            0xa0000001: 0x800002,
    	            0xb0000001: 0x8202,
    	            0xc0000001: 0x202,
    	            0xd0000001: 0x800200,
    	            0xe0000001: 0x8002,
    	            0xf0000001: 0x0,
    	            0x8000001: 0x808202,
    	            0x18000001: 0x808000,
    	            0x28000001: 0x800000,
    	            0x38000001: 0x200,
    	            0x48000001: 0x8000,
    	            0x58000001: 0x800002,
    	            0x68000001: 0x2,
    	            0x78000001: 0x8202,
    	            0x88000001: 0x8002,
    	            0x98000001: 0x800202,
    	            0xa8000001: 0x202,
    	            0xb8000001: 0x808200,
    	            0xc8000001: 0x800200,
    	            0xd8000001: 0x0,
    	            0xe8000001: 0x8200,
    	            0xf8000001: 0x808002
    	        },
    	        {
    	            0x0: 0x40084010,
    	            0x1000000: 0x4000,
    	            0x2000000: 0x80000,
    	            0x3000000: 0x40080010,
    	            0x4000000: 0x40000010,
    	            0x5000000: 0x40084000,
    	            0x6000000: 0x40004000,
    	            0x7000000: 0x10,
    	            0x8000000: 0x84000,
    	            0x9000000: 0x40004010,
    	            0xa000000: 0x40000000,
    	            0xb000000: 0x84010,
    	            0xc000000: 0x80010,
    	            0xd000000: 0x0,
    	            0xe000000: 0x4010,
    	            0xf000000: 0x40080000,
    	            0x800000: 0x40004000,
    	            0x1800000: 0x84010,
    	            0x2800000: 0x10,
    	            0x3800000: 0x40004010,
    	            0x4800000: 0x40084010,
    	            0x5800000: 0x40000000,
    	            0x6800000: 0x80000,
    	            0x7800000: 0x40080010,
    	            0x8800000: 0x80010,
    	            0x9800000: 0x0,
    	            0xa800000: 0x4000,
    	            0xb800000: 0x40080000,
    	            0xc800000: 0x40000010,
    	            0xd800000: 0x84000,
    	            0xe800000: 0x40084000,
    	            0xf800000: 0x4010,
    	            0x10000000: 0x0,
    	            0x11000000: 0x40080010,
    	            0x12000000: 0x40004010,
    	            0x13000000: 0x40084000,
    	            0x14000000: 0x40080000,
    	            0x15000000: 0x10,
    	            0x16000000: 0x84010,
    	            0x17000000: 0x4000,
    	            0x18000000: 0x4010,
    	            0x19000000: 0x80000,
    	            0x1a000000: 0x80010,
    	            0x1b000000: 0x40000010,
    	            0x1c000000: 0x84000,
    	            0x1d000000: 0x40004000,
    	            0x1e000000: 0x40000000,
    	            0x1f000000: 0x40084010,
    	            0x10800000: 0x84010,
    	            0x11800000: 0x80000,
    	            0x12800000: 0x40080000,
    	            0x13800000: 0x4000,
    	            0x14800000: 0x40004000,
    	            0x15800000: 0x40084010,
    	            0x16800000: 0x10,
    	            0x17800000: 0x40000000,
    	            0x18800000: 0x40084000,
    	            0x19800000: 0x40000010,
    	            0x1a800000: 0x40004010,
    	            0x1b800000: 0x80010,
    	            0x1c800000: 0x0,
    	            0x1d800000: 0x4010,
    	            0x1e800000: 0x40080010,
    	            0x1f800000: 0x84000
    	        },
    	        {
    	            0x0: 0x104,
    	            0x100000: 0x0,
    	            0x200000: 0x4000100,
    	            0x300000: 0x10104,
    	            0x400000: 0x10004,
    	            0x500000: 0x4000004,
    	            0x600000: 0x4010104,
    	            0x700000: 0x4010000,
    	            0x800000: 0x4000000,
    	            0x900000: 0x4010100,
    	            0xa00000: 0x10100,
    	            0xb00000: 0x4010004,
    	            0xc00000: 0x4000104,
    	            0xd00000: 0x10000,
    	            0xe00000: 0x4,
    	            0xf00000: 0x100,
    	            0x80000: 0x4010100,
    	            0x180000: 0x4010004,
    	            0x280000: 0x0,
    	            0x380000: 0x4000100,
    	            0x480000: 0x4000004,
    	            0x580000: 0x10000,
    	            0x680000: 0x10004,
    	            0x780000: 0x104,
    	            0x880000: 0x4,
    	            0x980000: 0x100,
    	            0xa80000: 0x4010000,
    	            0xb80000: 0x10104,
    	            0xc80000: 0x10100,
    	            0xd80000: 0x4000104,
    	            0xe80000: 0x4010104,
    	            0xf80000: 0x4000000,
    	            0x1000000: 0x4010100,
    	            0x1100000: 0x10004,
    	            0x1200000: 0x10000,
    	            0x1300000: 0x4000100,
    	            0x1400000: 0x100,
    	            0x1500000: 0x4010104,
    	            0x1600000: 0x4000004,
    	            0x1700000: 0x0,
    	            0x1800000: 0x4000104,
    	            0x1900000: 0x4000000,
    	            0x1a00000: 0x4,
    	            0x1b00000: 0x10100,
    	            0x1c00000: 0x4010000,
    	            0x1d00000: 0x104,
    	            0x1e00000: 0x10104,
    	            0x1f00000: 0x4010004,
    	            0x1080000: 0x4000000,
    	            0x1180000: 0x104,
    	            0x1280000: 0x4010100,
    	            0x1380000: 0x0,
    	            0x1480000: 0x10004,
    	            0x1580000: 0x4000100,
    	            0x1680000: 0x100,
    	            0x1780000: 0x4010004,
    	            0x1880000: 0x10000,
    	            0x1980000: 0x4010104,
    	            0x1a80000: 0x10104,
    	            0x1b80000: 0x4000004,
    	            0x1c80000: 0x4000104,
    	            0x1d80000: 0x4010000,
    	            0x1e80000: 0x4,
    	            0x1f80000: 0x10100
    	        },
    	        {
    	            0x0: 0x80401000,
    	            0x10000: 0x80001040,
    	            0x20000: 0x401040,
    	            0x30000: 0x80400000,
    	            0x40000: 0x0,
    	            0x50000: 0x401000,
    	            0x60000: 0x80000040,
    	            0x70000: 0x400040,
    	            0x80000: 0x80000000,
    	            0x90000: 0x400000,
    	            0xa0000: 0x40,
    	            0xb0000: 0x80001000,
    	            0xc0000: 0x80400040,
    	            0xd0000: 0x1040,
    	            0xe0000: 0x1000,
    	            0xf0000: 0x80401040,
    	            0x8000: 0x80001040,
    	            0x18000: 0x40,
    	            0x28000: 0x80400040,
    	            0x38000: 0x80001000,
    	            0x48000: 0x401000,
    	            0x58000: 0x80401040,
    	            0x68000: 0x0,
    	            0x78000: 0x80400000,
    	            0x88000: 0x1000,
    	            0x98000: 0x80401000,
    	            0xa8000: 0x400000,
    	            0xb8000: 0x1040,
    	            0xc8000: 0x80000000,
    	            0xd8000: 0x400040,
    	            0xe8000: 0x401040,
    	            0xf8000: 0x80000040,
    	            0x100000: 0x400040,
    	            0x110000: 0x401000,
    	            0x120000: 0x80000040,
    	            0x130000: 0x0,
    	            0x140000: 0x1040,
    	            0x150000: 0x80400040,
    	            0x160000: 0x80401000,
    	            0x170000: 0x80001040,
    	            0x180000: 0x80401040,
    	            0x190000: 0x80000000,
    	            0x1a0000: 0x80400000,
    	            0x1b0000: 0x401040,
    	            0x1c0000: 0x80001000,
    	            0x1d0000: 0x400000,
    	            0x1e0000: 0x40,
    	            0x1f0000: 0x1000,
    	            0x108000: 0x80400000,
    	            0x118000: 0x80401040,
    	            0x128000: 0x0,
    	            0x138000: 0x401000,
    	            0x148000: 0x400040,
    	            0x158000: 0x80000000,
    	            0x168000: 0x80001040,
    	            0x178000: 0x40,
    	            0x188000: 0x80000040,
    	            0x198000: 0x1000,
    	            0x1a8000: 0x80001000,
    	            0x1b8000: 0x80400040,
    	            0x1c8000: 0x1040,
    	            0x1d8000: 0x80401000,
    	            0x1e8000: 0x400000,
    	            0x1f8000: 0x401040
    	        },
    	        {
    	            0x0: 0x80,
    	            0x1000: 0x1040000,
    	            0x2000: 0x40000,
    	            0x3000: 0x20000000,
    	            0x4000: 0x20040080,
    	            0x5000: 0x1000080,
    	            0x6000: 0x21000080,
    	            0x7000: 0x40080,
    	            0x8000: 0x1000000,
    	            0x9000: 0x20040000,
    	            0xa000: 0x20000080,
    	            0xb000: 0x21040080,
    	            0xc000: 0x21040000,
    	            0xd000: 0x0,
    	            0xe000: 0x1040080,
    	            0xf000: 0x21000000,
    	            0x800: 0x1040080,
    	            0x1800: 0x21000080,
    	            0x2800: 0x80,
    	            0x3800: 0x1040000,
    	            0x4800: 0x40000,
    	            0x5800: 0x20040080,
    	            0x6800: 0x21040000,
    	            0x7800: 0x20000000,
    	            0x8800: 0x20040000,
    	            0x9800: 0x0,
    	            0xa800: 0x21040080,
    	            0xb800: 0x1000080,
    	            0xc800: 0x20000080,
    	            0xd800: 0x21000000,
    	            0xe800: 0x1000000,
    	            0xf800: 0x40080,
    	            0x10000: 0x40000,
    	            0x11000: 0x80,
    	            0x12000: 0x20000000,
    	            0x13000: 0x21000080,
    	            0x14000: 0x1000080,
    	            0x15000: 0x21040000,
    	            0x16000: 0x20040080,
    	            0x17000: 0x1000000,
    	            0x18000: 0x21040080,
    	            0x19000: 0x21000000,
    	            0x1a000: 0x1040000,
    	            0x1b000: 0x20040000,
    	            0x1c000: 0x40080,
    	            0x1d000: 0x20000080,
    	            0x1e000: 0x0,
    	            0x1f000: 0x1040080,
    	            0x10800: 0x21000080,
    	            0x11800: 0x1000000,
    	            0x12800: 0x1040000,
    	            0x13800: 0x20040080,
    	            0x14800: 0x20000000,
    	            0x15800: 0x1040080,
    	            0x16800: 0x80,
    	            0x17800: 0x21040000,
    	            0x18800: 0x40080,
    	            0x19800: 0x21040080,
    	            0x1a800: 0x0,
    	            0x1b800: 0x21000000,
    	            0x1c800: 0x1000080,
    	            0x1d800: 0x40000,
    	            0x1e800: 0x20040000,
    	            0x1f800: 0x20000080
    	        },
    	        {
    	            0x0: 0x10000008,
    	            0x100: 0x2000,
    	            0x200: 0x10200000,
    	            0x300: 0x10202008,
    	            0x400: 0x10002000,
    	            0x500: 0x200000,
    	            0x600: 0x200008,
    	            0x700: 0x10000000,
    	            0x800: 0x0,
    	            0x900: 0x10002008,
    	            0xa00: 0x202000,
    	            0xb00: 0x8,
    	            0xc00: 0x10200008,
    	            0xd00: 0x202008,
    	            0xe00: 0x2008,
    	            0xf00: 0x10202000,
    	            0x80: 0x10200000,
    	            0x180: 0x10202008,
    	            0x280: 0x8,
    	            0x380: 0x200000,
    	            0x480: 0x202008,
    	            0x580: 0x10000008,
    	            0x680: 0x10002000,
    	            0x780: 0x2008,
    	            0x880: 0x200008,
    	            0x980: 0x2000,
    	            0xa80: 0x10002008,
    	            0xb80: 0x10200008,
    	            0xc80: 0x0,
    	            0xd80: 0x10202000,
    	            0xe80: 0x202000,
    	            0xf80: 0x10000000,
    	            0x1000: 0x10002000,
    	            0x1100: 0x10200008,
    	            0x1200: 0x10202008,
    	            0x1300: 0x2008,
    	            0x1400: 0x200000,
    	            0x1500: 0x10000000,
    	            0x1600: 0x10000008,
    	            0x1700: 0x202000,
    	            0x1800: 0x202008,
    	            0x1900: 0x0,
    	            0x1a00: 0x8,
    	            0x1b00: 0x10200000,
    	            0x1c00: 0x2000,
    	            0x1d00: 0x10002008,
    	            0x1e00: 0x10202000,
    	            0x1f00: 0x200008,
    	            0x1080: 0x8,
    	            0x1180: 0x202000,
    	            0x1280: 0x200000,
    	            0x1380: 0x10000008,
    	            0x1480: 0x10002000,
    	            0x1580: 0x2008,
    	            0x1680: 0x10202008,
    	            0x1780: 0x10200000,
    	            0x1880: 0x10202000,
    	            0x1980: 0x10200008,
    	            0x1a80: 0x2000,
    	            0x1b80: 0x202008,
    	            0x1c80: 0x200008,
    	            0x1d80: 0x0,
    	            0x1e80: 0x10000000,
    	            0x1f80: 0x10002008
    	        },
    	        {
    	            0x0: 0x100000,
    	            0x10: 0x2000401,
    	            0x20: 0x400,
    	            0x30: 0x100401,
    	            0x40: 0x2100401,
    	            0x50: 0x0,
    	            0x60: 0x1,
    	            0x70: 0x2100001,
    	            0x80: 0x2000400,
    	            0x90: 0x100001,
    	            0xa0: 0x2000001,
    	            0xb0: 0x2100400,
    	            0xc0: 0x2100000,
    	            0xd0: 0x401,
    	            0xe0: 0x100400,
    	            0xf0: 0x2000000,
    	            0x8: 0x2100001,
    	            0x18: 0x0,
    	            0x28: 0x2000401,
    	            0x38: 0x2100400,
    	            0x48: 0x100000,
    	            0x58: 0x2000001,
    	            0x68: 0x2000000,
    	            0x78: 0x401,
    	            0x88: 0x100401,
    	            0x98: 0x2000400,
    	            0xa8: 0x2100000,
    	            0xb8: 0x100001,
    	            0xc8: 0x400,
    	            0xd8: 0x2100401,
    	            0xe8: 0x1,
    	            0xf8: 0x100400,
    	            0x100: 0x2000000,
    	            0x110: 0x100000,
    	            0x120: 0x2000401,
    	            0x130: 0x2100001,
    	            0x140: 0x100001,
    	            0x150: 0x2000400,
    	            0x160: 0x2100400,
    	            0x170: 0x100401,
    	            0x180: 0x401,
    	            0x190: 0x2100401,
    	            0x1a0: 0x100400,
    	            0x1b0: 0x1,
    	            0x1c0: 0x0,
    	            0x1d0: 0x2100000,
    	            0x1e0: 0x2000001,
    	            0x1f0: 0x400,
    	            0x108: 0x100400,
    	            0x118: 0x2000401,
    	            0x128: 0x2100001,
    	            0x138: 0x1,
    	            0x148: 0x2000000,
    	            0x158: 0x100000,
    	            0x168: 0x401,
    	            0x178: 0x2100400,
    	            0x188: 0x2000001,
    	            0x198: 0x2100000,
    	            0x1a8: 0x0,
    	            0x1b8: 0x2100401,
    	            0x1c8: 0x100401,
    	            0x1d8: 0x400,
    	            0x1e8: 0x2000400,
    	            0x1f8: 0x100001
    	        },
    	        {
    	            0x0: 0x8000820,
    	            0x1: 0x20000,
    	            0x2: 0x8000000,
    	            0x3: 0x20,
    	            0x4: 0x20020,
    	            0x5: 0x8020820,
    	            0x6: 0x8020800,
    	            0x7: 0x800,
    	            0x8: 0x8020000,
    	            0x9: 0x8000800,
    	            0xa: 0x20800,
    	            0xb: 0x8020020,
    	            0xc: 0x820,
    	            0xd: 0x0,
    	            0xe: 0x8000020,
    	            0xf: 0x20820,
    	            0x80000000: 0x800,
    	            0x80000001: 0x8020820,
    	            0x80000002: 0x8000820,
    	            0x80000003: 0x8000000,
    	            0x80000004: 0x8020000,
    	            0x80000005: 0x20800,
    	            0x80000006: 0x20820,
    	            0x80000007: 0x20,
    	            0x80000008: 0x8000020,
    	            0x80000009: 0x820,
    	            0x8000000a: 0x20020,
    	            0x8000000b: 0x8020800,
    	            0x8000000c: 0x0,
    	            0x8000000d: 0x8020020,
    	            0x8000000e: 0x8000800,
    	            0x8000000f: 0x20000,
    	            0x10: 0x20820,
    	            0x11: 0x8020800,
    	            0x12: 0x20,
    	            0x13: 0x800,
    	            0x14: 0x8000800,
    	            0x15: 0x8000020,
    	            0x16: 0x8020020,
    	            0x17: 0x20000,
    	            0x18: 0x0,
    	            0x19: 0x20020,
    	            0x1a: 0x8020000,
    	            0x1b: 0x8000820,
    	            0x1c: 0x8020820,
    	            0x1d: 0x20800,
    	            0x1e: 0x820,
    	            0x1f: 0x8000000,
    	            0x80000010: 0x20000,
    	            0x80000011: 0x800,
    	            0x80000012: 0x8020020,
    	            0x80000013: 0x20820,
    	            0x80000014: 0x20,
    	            0x80000015: 0x8020000,
    	            0x80000016: 0x8000000,
    	            0x80000017: 0x8000820,
    	            0x80000018: 0x8020820,
    	            0x80000019: 0x8000020,
    	            0x8000001a: 0x8000800,
    	            0x8000001b: 0x0,
    	            0x8000001c: 0x20800,
    	            0x8000001d: 0x820,
    	            0x8000001e: 0x20020,
    	            0x8000001f: 0x8020800
    	        }
    	    ];

    	    // Masks that select the SBOX input
    	    var SBOX_MASK = [
    	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
    	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
    	    ];

    	    /**
    	     * DES block cipher algorithm.
    	     */
    	    var DES = C_algo.DES = BlockCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var key = this._key;
    	            var keyWords = key.words;

    	            // Select 56 bits according to PC1
    	            var keyBits = [];
    	            for (var i = 0; i < 56; i++) {
    	                var keyBitPos = PC1[i] - 1;
    	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
    	            }

    	            // Assemble 16 subkeys
    	            var subKeys = this._subKeys = [];
    	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
    	                // Create subkey
    	                var subKey = subKeys[nSubKey] = [];

    	                // Shortcut
    	                var bitShift = BIT_SHIFTS[nSubKey];

    	                // Select 48 bits according to PC2
    	                for (var i = 0; i < 24; i++) {
    	                    // Select from the left 28 key bits
    	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

    	                    // Select from the right 28 key bits
    	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
    	                }

    	                // Since each subkey is applied to an expanded 32-bit input,
    	                // the subkey can be broken into 8 values scaled to 32-bits,
    	                // which allows the key to be used without expansion
    	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
    	                for (var i = 1; i < 7; i++) {
    	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
    	                }
    	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
    	            }

    	            // Compute inverse subkeys
    	            var invSubKeys = this._invSubKeys = [];
    	            for (var i = 0; i < 16; i++) {
    	                invSubKeys[i] = subKeys[15 - i];
    	            }
    	        },

    	        encryptBlock: function (M, offset) {
    	            this._doCryptBlock(M, offset, this._subKeys);
    	        },

    	        decryptBlock: function (M, offset) {
    	            this._doCryptBlock(M, offset, this._invSubKeys);
    	        },

    	        _doCryptBlock: function (M, offset, subKeys) {
    	            // Get input
    	            this._lBlock = M[offset];
    	            this._rBlock = M[offset + 1];

    	            // Initial permutation
    	            exchangeLR.call(this, 4,  0x0f0f0f0f);
    	            exchangeLR.call(this, 16, 0x0000ffff);
    	            exchangeRL.call(this, 2,  0x33333333);
    	            exchangeRL.call(this, 8,  0x00ff00ff);
    	            exchangeLR.call(this, 1,  0x55555555);

    	            // Rounds
    	            for (var round = 0; round < 16; round++) {
    	                // Shortcuts
    	                var subKey = subKeys[round];
    	                var lBlock = this._lBlock;
    	                var rBlock = this._rBlock;

    	                // Feistel function
    	                var f = 0;
    	                for (var i = 0; i < 8; i++) {
    	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
    	                }
    	                this._lBlock = rBlock;
    	                this._rBlock = lBlock ^ f;
    	            }

    	            // Undo swap from last round
    	            var t = this._lBlock;
    	            this._lBlock = this._rBlock;
    	            this._rBlock = t;

    	            // Final permutation
    	            exchangeLR.call(this, 1,  0x55555555);
    	            exchangeRL.call(this, 8,  0x00ff00ff);
    	            exchangeRL.call(this, 2,  0x33333333);
    	            exchangeLR.call(this, 16, 0x0000ffff);
    	            exchangeLR.call(this, 4,  0x0f0f0f0f);

    	            // Set output
    	            M[offset] = this._lBlock;
    	            M[offset + 1] = this._rBlock;
    	        },

    	        keySize: 64/32,

    	        ivSize: 64/32,

    	        blockSize: 64/32
    	    });

    	    // Swap bits across the left and right words
    	    function exchangeLR(offset, mask) {
    	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
    	        this._rBlock ^= t;
    	        this._lBlock ^= t << offset;
    	    }

    	    function exchangeRL(offset, mask) {
    	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
    	        this._lBlock ^= t;
    	        this._rBlock ^= t << offset;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
    	     */
    	    C.DES = BlockCipher._createHelper(DES);

    	    /**
    	     * Triple-DES block cipher algorithm.
    	     */
    	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var key = this._key;
    	            var keyWords = key.words;
    	            // Make sure the key length is valid (64, 128 or >= 192 bit)
    	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
    	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
    	            }

    	            // Extend the key according to the keying options defined in 3DES standard
    	            var key1 = keyWords.slice(0, 2);
    	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
    	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

    	            // Create DES instances
    	            this._des1 = DES.createEncryptor(WordArray.create(key1));
    	            this._des2 = DES.createEncryptor(WordArray.create(key2));
    	            this._des3 = DES.createEncryptor(WordArray.create(key3));
    	        },

    	        encryptBlock: function (M, offset) {
    	            this._des1.encryptBlock(M, offset);
    	            this._des2.decryptBlock(M, offset);
    	            this._des3.encryptBlock(M, offset);
    	        },

    	        decryptBlock: function (M, offset) {
    	            this._des3.decryptBlock(M, offset);
    	            this._des2.encryptBlock(M, offset);
    	            this._des1.decryptBlock(M, offset);
    	        },

    	        keySize: 192/32,

    	        ivSize: 64/32,

    	        blockSize: 64/32
    	    });

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
    	     */
    	    C.TripleDES = BlockCipher._createHelper(TripleDES);
    	}());


    	return CryptoJS.TripleDES;

    }));
    }(tripledes));

    var rc4 = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var StreamCipher = C_lib.StreamCipher;
    	    var C_algo = C.algo;

    	    /**
    	     * RC4 stream cipher algorithm.
    	     */
    	    var RC4 = C_algo.RC4 = StreamCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var key = this._key;
    	            var keyWords = key.words;
    	            var keySigBytes = key.sigBytes;

    	            // Init sbox
    	            var S = this._S = [];
    	            for (var i = 0; i < 256; i++) {
    	                S[i] = i;
    	            }

    	            // Key setup
    	            for (var i = 0, j = 0; i < 256; i++) {
    	                var keyByteIndex = i % keySigBytes;
    	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

    	                j = (j + S[i] + keyByte) % 256;

    	                // Swap
    	                var t = S[i];
    	                S[i] = S[j];
    	                S[j] = t;
    	            }

    	            // Counters
    	            this._i = this._j = 0;
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            M[offset] ^= generateKeystreamWord.call(this);
    	        },

    	        keySize: 256/32,

    	        ivSize: 0
    	    });

    	    function generateKeystreamWord() {
    	        // Shortcuts
    	        var S = this._S;
    	        var i = this._i;
    	        var j = this._j;

    	        // Generate keystream word
    	        var keystreamWord = 0;
    	        for (var n = 0; n < 4; n++) {
    	            i = (i + 1) % 256;
    	            j = (j + S[i]) % 256;

    	            // Swap
    	            var t = S[i];
    	            S[i] = S[j];
    	            S[j] = t;

    	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
    	        }

    	        // Update counters
    	        this._i = i;
    	        this._j = j;

    	        return keystreamWord;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
    	     */
    	    C.RC4 = StreamCipher._createHelper(RC4);

    	    /**
    	     * Modified RC4 stream cipher algorithm.
    	     */
    	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} drop The number of keystream words to drop. Default 192
    	         */
    	        cfg: RC4.cfg.extend({
    	            drop: 192
    	        }),

    	        _doReset: function () {
    	            RC4._doReset.call(this);

    	            // Drop
    	            for (var i = this.cfg.drop; i > 0; i--) {
    	                generateKeystreamWord.call(this);
    	            }
    	        }
    	    });

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
    	     */
    	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
    	}());


    	return CryptoJS.RC4;

    }));
    }(rc4));

    var rabbit = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var StreamCipher = C_lib.StreamCipher;
    	    var C_algo = C.algo;

    	    // Reusable objects
    	    var S  = [];
    	    var C_ = [];
    	    var G  = [];

    	    /**
    	     * Rabbit stream cipher algorithm
    	     */
    	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var K = this._key.words;
    	            var iv = this.cfg.iv;

    	            // Swap endian
    	            for (var i = 0; i < 4; i++) {
    	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
    	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
    	            }

    	            // Generate initial state values
    	            var X = this._X = [
    	                K[0], (K[3] << 16) | (K[2] >>> 16),
    	                K[1], (K[0] << 16) | (K[3] >>> 16),
    	                K[2], (K[1] << 16) | (K[0] >>> 16),
    	                K[3], (K[2] << 16) | (K[1] >>> 16)
    	            ];

    	            // Generate initial counter values
    	            var C = this._C = [
    	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
    	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
    	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
    	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
    	            ];

    	            // Carry bit
    	            this._b = 0;

    	            // Iterate the system four times
    	            for (var i = 0; i < 4; i++) {
    	                nextState.call(this);
    	            }

    	            // Modify the counters
    	            for (var i = 0; i < 8; i++) {
    	                C[i] ^= X[(i + 4) & 7];
    	            }

    	            // IV setup
    	            if (iv) {
    	                // Shortcuts
    	                var IV = iv.words;
    	                var IV_0 = IV[0];
    	                var IV_1 = IV[1];

    	                // Generate four subvectors
    	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
    	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
    	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
    	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

    	                // Modify counter values
    	                C[0] ^= i0;
    	                C[1] ^= i1;
    	                C[2] ^= i2;
    	                C[3] ^= i3;
    	                C[4] ^= i0;
    	                C[5] ^= i1;
    	                C[6] ^= i2;
    	                C[7] ^= i3;

    	                // Iterate the system four times
    	                for (var i = 0; i < 4; i++) {
    	                    nextState.call(this);
    	                }
    	            }
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var X = this._X;

    	            // Iterate the system
    	            nextState.call(this);

    	            // Generate four keystream words
    	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    	            for (var i = 0; i < 4; i++) {
    	                // Swap endian
    	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
    	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

    	                // Encrypt
    	                M[offset + i] ^= S[i];
    	            }
    	        },

    	        blockSize: 128/32,

    	        ivSize: 64/32
    	    });

    	    function nextState() {
    	        // Shortcuts
    	        var X = this._X;
    	        var C = this._C;

    	        // Save old counter values
    	        for (var i = 0; i < 8; i++) {
    	            C_[i] = C[i];
    	        }

    	        // Calculate new counter values
    	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
    	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
    	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
    	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
    	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
    	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
    	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
    	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

    	        // Calculate the g-values
    	        for (var i = 0; i < 8; i++) {
    	            var gx = X[i] + C[i];

    	            // Construct high and low argument for squaring
    	            var ga = gx & 0xffff;
    	            var gb = gx >>> 16;

    	            // Calculate high and low result of squaring
    	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    	            // High XOR low
    	            G[i] = gh ^ gl;
    	        }

    	        // Calculate new state values
    	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
    	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
    	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
    	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
    	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
    	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
    	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
    	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
    	     */
    	    C.Rabbit = StreamCipher._createHelper(Rabbit);
    	}());


    	return CryptoJS.Rabbit;

    }));
    }(rabbit));

    var rabbitLegacy = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var StreamCipher = C_lib.StreamCipher;
    	    var C_algo = C.algo;

    	    // Reusable objects
    	    var S  = [];
    	    var C_ = [];
    	    var G  = [];

    	    /**
    	     * Rabbit stream cipher algorithm.
    	     *
    	     * This is a legacy version that neglected to convert the key to little-endian.
    	     * This error doesn't affect the cipher's security,
    	     * but it does affect its compatibility with other implementations.
    	     */
    	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
    	        _doReset: function () {
    	            // Shortcuts
    	            var K = this._key.words;
    	            var iv = this.cfg.iv;

    	            // Generate initial state values
    	            var X = this._X = [
    	                K[0], (K[3] << 16) | (K[2] >>> 16),
    	                K[1], (K[0] << 16) | (K[3] >>> 16),
    	                K[2], (K[1] << 16) | (K[0] >>> 16),
    	                K[3], (K[2] << 16) | (K[1] >>> 16)
    	            ];

    	            // Generate initial counter values
    	            var C = this._C = [
    	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
    	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
    	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
    	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
    	            ];

    	            // Carry bit
    	            this._b = 0;

    	            // Iterate the system four times
    	            for (var i = 0; i < 4; i++) {
    	                nextState.call(this);
    	            }

    	            // Modify the counters
    	            for (var i = 0; i < 8; i++) {
    	                C[i] ^= X[(i + 4) & 7];
    	            }

    	            // IV setup
    	            if (iv) {
    	                // Shortcuts
    	                var IV = iv.words;
    	                var IV_0 = IV[0];
    	                var IV_1 = IV[1];

    	                // Generate four subvectors
    	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
    	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
    	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
    	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

    	                // Modify counter values
    	                C[0] ^= i0;
    	                C[1] ^= i1;
    	                C[2] ^= i2;
    	                C[3] ^= i3;
    	                C[4] ^= i0;
    	                C[5] ^= i1;
    	                C[6] ^= i2;
    	                C[7] ^= i3;

    	                // Iterate the system four times
    	                for (var i = 0; i < 4; i++) {
    	                    nextState.call(this);
    	                }
    	            }
    	        },

    	        _doProcessBlock: function (M, offset) {
    	            // Shortcut
    	            var X = this._X;

    	            // Iterate the system
    	            nextState.call(this);

    	            // Generate four keystream words
    	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
    	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
    	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
    	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

    	            for (var i = 0; i < 4; i++) {
    	                // Swap endian
    	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
    	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

    	                // Encrypt
    	                M[offset + i] ^= S[i];
    	            }
    	        },

    	        blockSize: 128/32,

    	        ivSize: 64/32
    	    });

    	    function nextState() {
    	        // Shortcuts
    	        var X = this._X;
    	        var C = this._C;

    	        // Save old counter values
    	        for (var i = 0; i < 8; i++) {
    	            C_[i] = C[i];
    	        }

    	        // Calculate new counter values
    	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
    	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
    	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
    	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
    	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
    	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
    	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
    	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
    	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

    	        // Calculate the g-values
    	        for (var i = 0; i < 8; i++) {
    	            var gx = X[i] + C[i];

    	            // Construct high and low argument for squaring
    	            var ga = gx & 0xffff;
    	            var gb = gx >>> 16;

    	            // Calculate high and low result of squaring
    	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
    	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

    	            // High XOR low
    	            G[i] = gh ^ gl;
    	        }

    	        // Calculate new state values
    	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
    	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
    	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
    	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
    	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
    	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
    	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
    	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
    	    }

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
    	     */
    	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
    	}());


    	return CryptoJS.RabbitLegacy;

    }));
    }(rabbitLegacy));

    var blowfish = {exports: {}};

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, encBase64.exports, md5.exports, evpkdf.exports, cipherCore.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	(function () {
    	    // Shortcuts
    	    var C = CryptoJS;
    	    var C_lib = C.lib;
    	    var BlockCipher = C_lib.BlockCipher;
    	    var C_algo = C.algo;

    	    const N = 16;

    	    //Origin pbox and sbox, derived from PI
    	    const ORIG_P = [
    	        0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344,
    	        0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89,
    	        0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C,
    	        0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917,
    	        0x9216D5D9, 0x8979FB1B
    	    ];

    	    const ORIG_S = [
    	        [   0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7,
    	            0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99,
    	            0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16,
    	            0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E,
    	            0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE,
    	            0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013,
    	            0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF,
    	            0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E,
    	            0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60,
    	            0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440,
    	            0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE,
    	            0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A,
    	            0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E,
    	            0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677,
    	            0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193,
    	            0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032,
    	            0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88,
    	            0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239,
    	            0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E,
    	            0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0,
    	            0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3,
    	            0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98,
    	            0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88,
    	            0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE,
    	            0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6,
    	            0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D,
    	            0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B,
    	            0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7,
    	            0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA,
    	            0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463,
    	            0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F,
    	            0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09,
    	            0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3,
    	            0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB,
    	            0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279,
    	            0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8,
    	            0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB,
    	            0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82,
    	            0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB,
    	            0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573,
    	            0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0,
    	            0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B,
    	            0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790,
    	            0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8,
    	            0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4,
    	            0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0,
    	            0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7,
    	            0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C,
    	            0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD,
    	            0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1,
    	            0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299,
    	            0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9,
    	            0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477,
    	            0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF,
    	            0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49,
    	            0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF,
    	            0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA,
    	            0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5,
    	            0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41,
    	            0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915,
    	            0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400,
    	            0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915,
    	            0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664,
    	            0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A   ],
    	        [   0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623,
    	            0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266,
    	            0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1,
    	            0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E,
    	            0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6,
    	            0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1,
    	            0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E,
    	            0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1,
    	            0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737,
    	            0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8,
    	            0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF,
    	            0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD,
    	            0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701,
    	            0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7,
    	            0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41,
    	            0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331,
    	            0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF,
    	            0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF,
    	            0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E,
    	            0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87,
    	            0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C,
    	            0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2,
    	            0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16,
    	            0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD,
    	            0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B,
    	            0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509,
    	            0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E,
    	            0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3,
    	            0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F,
    	            0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A,
    	            0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4,
    	            0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960,
    	            0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66,
    	            0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28,
    	            0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802,
    	            0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84,
    	            0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510,
    	            0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF,
    	            0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14,
    	            0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E,
    	            0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50,
    	            0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7,
    	            0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8,
    	            0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281,
    	            0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99,
    	            0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696,
    	            0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128,
    	            0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73,
    	            0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0,
    	            0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0,
    	            0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105,
    	            0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250,
    	            0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3,
    	            0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285,
    	            0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00,
    	            0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061,
    	            0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB,
    	            0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E,
    	            0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735,
    	            0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC,
    	            0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9,
    	            0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340,
    	            0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20,
    	            0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7   ],
    	        [   0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934,
    	            0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068,
    	            0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF,
    	            0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840,
    	            0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45,
    	            0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504,
    	            0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A,
    	            0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB,
    	            0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE,
    	            0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6,
    	            0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42,
    	            0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B,
    	            0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2,
    	            0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB,
    	            0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527,
    	            0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B,
    	            0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33,
    	            0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C,
    	            0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3,
    	            0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC,
    	            0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17,
    	            0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564,
    	            0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B,
    	            0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115,
    	            0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922,
    	            0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728,
    	            0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0,
    	            0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E,
    	            0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37,
    	            0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D,
    	            0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804,
    	            0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B,
    	            0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3,
    	            0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB,
    	            0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D,
    	            0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C,
    	            0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350,
    	            0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9,
    	            0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A,
    	            0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE,
    	            0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D,
    	            0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC,
    	            0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F,
    	            0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61,
    	            0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2,
    	            0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9,
    	            0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2,
    	            0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C,
    	            0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E,
    	            0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633,
    	            0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10,
    	            0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169,
    	            0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52,
    	            0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027,
    	            0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5,
    	            0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62,
    	            0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634,
    	            0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76,
    	            0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24,
    	            0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC,
    	            0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4,
    	            0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C,
    	            0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837,
    	            0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0  ],
    	        [   0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B,
    	            0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE,
    	            0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B,
    	            0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4,
    	            0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8,
    	            0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6,
    	            0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304,
    	            0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22,
    	            0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4,
    	            0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6,
    	            0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9,
    	            0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59,
    	            0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593,
    	            0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51,
    	            0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28,
    	            0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C,
    	            0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B,
    	            0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28,
    	            0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C,
    	            0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD,
    	            0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A,
    	            0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319,
    	            0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB,
    	            0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F,
    	            0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991,
    	            0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32,
    	            0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680,
    	            0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166,
    	            0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE,
    	            0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB,
    	            0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5,
    	            0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47,
    	            0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370,
    	            0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D,
    	            0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84,
    	            0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048,
    	            0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8,
    	            0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD,
    	            0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9,
    	            0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7,
    	            0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38,
    	            0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F,
    	            0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C,
    	            0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525,
    	            0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1,
    	            0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442,
    	            0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964,
    	            0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E,
    	            0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8,
    	            0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D,
    	            0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F,
    	            0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299,
    	            0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02,
    	            0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC,
    	            0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614,
    	            0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A,
    	            0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6,
    	            0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B,
    	            0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0,
    	            0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060,
    	            0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E,
    	            0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9,
    	            0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F,
    	            0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6  ]
    	    ];

    	    var BLOWFISH_CTX = {
    	        pbox: [],
    	        sbox: []
    	    };

    	    function F(ctx, x){
    	        let a = (x >> 24) & 0xFF;
    	        let b = (x >> 16) & 0xFF;
    	        let c = (x >> 8) & 0xFF;
    	        let d = x & 0xFF;

    	        let y = ctx.sbox[0][a] + ctx.sbox[1][b];
    	        y = y ^ ctx.sbox[2][c];
    	        y = y + ctx.sbox[3][d];

    	        return y;
    	    }

    	    function BlowFish_Encrypt(ctx, left, right){
    	        let Xl = left;
    	        let Xr = right;
    	        let temp;

    	        for(let i = 0; i < N; ++i){
    	            Xl = Xl ^ ctx.pbox[i];
    	            Xr = F(ctx, Xl) ^ Xr;

    	            temp = Xl;
    	            Xl = Xr;
    	            Xr = temp;
    	        }

    	        temp = Xl;
    	        Xl = Xr;
    	        Xr = temp;

    	        Xr = Xr ^ ctx.pbox[N];
    	        Xl = Xl ^ ctx.pbox[N + 1];

    	        return {left: Xl, right: Xr};
    	    }

    	    function BlowFish_Decrypt(ctx, left, right){
    	        let Xl = left;
    	        let Xr = right;
    	        let temp;

    	        for(let i = N + 1; i > 1; --i){
    	            Xl = Xl ^ ctx.pbox[i];
    	            Xr = F(ctx, Xl) ^ Xr;

    	            temp = Xl;
    	            Xl = Xr;
    	            Xr = temp;
    	        }

    	        temp = Xl;
    	        Xl = Xr;
    	        Xr = temp;

    	        Xr = Xr ^ ctx.pbox[1];
    	        Xl = Xl ^ ctx.pbox[0];

    	        return {left: Xl, right: Xr};
    	    }

    	    /**
    	     * Initialization ctx's pbox and sbox.
    	     *
    	     * @param {Object} ctx The object has pbox and sbox.
    	     * @param {Array} key An array of 32-bit words.
    	     * @param {int} keysize The length of the key.
    	     *
    	     * @example
    	     *
    	     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
    	     */
    	    function BlowFishInit(ctx, key, keysize)
    	    {
    	        for(let Row = 0; Row < 4; Row++)
    	        {
    	            ctx.sbox[Row] = [];
    	            for(let Col = 0; Col < 256; Col++)
    	            {
    	                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
    	            }
    	        }

    	        let keyIndex = 0;
    	        for(let index = 0; index < N + 2; index++)
    	        {
    	            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
    	            keyIndex++;
    	            if(keyIndex >= keysize)
    	            {
    	                keyIndex = 0;
    	            }
    	        }

    	        let Data1 = 0;
    	        let Data2 = 0;
    	        let res = 0;
    	        for(let i = 0; i < N + 2; i += 2)
    	        {
    	            res = BlowFish_Encrypt(ctx, Data1, Data2);
    	            Data1 = res.left;
    	            Data2 = res.right;
    	            ctx.pbox[i] = Data1;
    	            ctx.pbox[i + 1] = Data2;
    	        }

    	        for(let i = 0; i < 4; i++)
    	        {
    	            for(let j = 0; j < 256; j += 2)
    	            {
    	                res = BlowFish_Encrypt(ctx, Data1, Data2);
    	                Data1 = res.left;
    	                Data2 = res.right;
    	                ctx.sbox[i][j] = Data1;
    	                ctx.sbox[i][j + 1] = Data2;
    	            }
    	        }

    	        return true;
    	    }

    	    /**
    	     * Blowfish block cipher algorithm.
    	     */
    	    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
    	        _doReset: function () {
    	            // Skip reset of nRounds has been set before and key did not change
    	            if (this._keyPriorReset === this._key) {
    	                return;
    	            }

    	            // Shortcuts
    	            var key = this._keyPriorReset = this._key;
    	            var keyWords = key.words;
    	            var keySize = key.sigBytes / 4;

    	            //Initialization pbox and sbox
    	            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
    	        },

    	        encryptBlock: function (M, offset) {
    	            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
    	            M[offset] = res.left;
    	            M[offset + 1] = res.right;
    	        },

    	        decryptBlock: function (M, offset) {
    	            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
    	            M[offset] = res.left;
    	            M[offset + 1] = res.right;
    	        },

    	        blockSize: 64/32,

    	        keySize: 128/32,

    	        ivSize: 64/32
    	    });

    	    /**
    	     * Shortcut functions to the cipher's object interface.
    	     *
    	     * @example
    	     *
    	     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
    	     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
    	     */
    	    C.Blowfish = BlockCipher._createHelper(Blowfish);
    	}());


    	return CryptoJS.Blowfish;

    }));
    }(blowfish));

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, x64Core.exports, libTypedarrays.exports, encUtf16.exports, encBase64.exports, encBase64url.exports, md5.exports, sha1.exports, sha256.exports, sha224.exports, sha512.exports, sha384.exports, sha3.exports, ripemd160.exports, hmac.exports, pbkdf2.exports, evpkdf.exports, cipherCore.exports, modeCfb.exports, modeCtr.exports, modeCtrGladman.exports, modeOfb.exports, modeEcb.exports, padAnsix923.exports, padIso10126.exports, padIso97971.exports, padZeropadding.exports, padNopadding.exports, formatHex.exports, aes.exports, tripledes.exports, rc4.exports, rabbit.exports, rabbitLegacy.exports, blowfish.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	return CryptoJS;

    }));
    }(cryptoJs));

    function getDateFromStamp(day) {
      return new Date(parseInt(day)).toLocaleDateString();
    }
    function getDateTimeFromStamp(day) {
      return new Date(parseInt(day)).toLocaleString();
    }
    function UUID() {
      function S4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
      }
      return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    }
    function delay(n) {
      return new Promise(function (resolve) {
        setTimeout(resolve, n);
      });
    }

    class LogSystem {
      constructor() {
        this.dic = {
          0: "[Message]",
          1: "[Warning]",
          2: "<span style='color:red'>[Error]</span>",
          3: "<span style='color:red'>[Fatal]</span>"
        };
        this.log_txt = [];
      }
      async build() {
        let st = await SGM_getValue("kewt_log");
        this.log_txt = st ? eval('(' + st + ')') : [];
        return this;
      }
      info(text) {
        this.log_txt.push({
          level: 0,
          time: getDateTimeFromStamp(Date.now().toString()),
          content: text
        });
        SGM_setValue("kewt_log", JSON.stringify(this.log_txt));
        return this.dic[0] + " " + text;
      }
      warning(text) {
        this.log_txt.push({
          level: 1,
          time: getDateTimeFromStamp(Date.now().toString()),
          content: text
        });
        SGM_setValue("kewt_log", JSON.stringify(this.log_txt));
        return this.dic[1] + " " + text;
      }
      fatal(text) {
        this.log_txt.push({
          level: 3,
          time: getDateTimeFromStamp(Date.now().toString()),
          content: text
        });
        SGM_setValue("kewt_log", JSON.stringify(this.log_txt));
        return this.dic[3] + " " + text;
      }
      error(text) {
        this.log_txt.push({
          level: 2,
          time: getDateTimeFromStamp(Date.now().toString()),
          content: text
        });
        SGM_setValue("kewt_log", JSON.stringify(this.log_txt));
        return this.dic[2] + " " + text;
      }
    }

    function validateReturn(Value) {
      let json = JSON.parse(Value);
      if (json["code"] == 429) throw Error();
      if (json["success"] != true) exports.log.error("用户" + (exports.user == undefined ? undefined : exports.user.id) + "访问接口失败,原因在于:" + json.msg + ",代码为:" + json.code);
      return json["data"];
    }
    function validateLanReturn(Value) {
      let json = JSON.parse(Value);
      if (json["success"] != true) exports.log.error("用户" + (exports.user == undefined ? undefined : exports.user.id) + "访问接口失败,原因在于:" + json.msg + ",代码为:" + json.code);
      return json;
    }
    function validateAPIReturn(Value) {
      let json = JSON.parse(Value);
      if (json["code"] != 200) exports.log.error("用户" + (exports.user == undefined ? undefined : exports.user.id) + "访问接口失败,原因在于:" + json.msg + ",代码为:" + json.code);
      return json;
    }
    function request(method, url, headers, data) {
      if (!headers) headers = {};
      headers["Referer"] = "ewt360";
      headers["ck-userskript"] = document.cookie; //ck-userskript: for userscript users
      return new Promise(resolve => {
        SGM_xmlhttpRequest({
          method: method,
          url: url,
          data: data,
          headers: headers,
          anonymous: true,
          cookie: document.cookie,
          //@ts-ignore
          beforeSend: function (xhr) {
            //@ts-ignore
            xhr.withCredentials = true;
          },
          onload: res => {
            resolve(res);
          },
          onerror: res => {
            resolve(res);
          }
        });
      });
    }
    function requestJson(method, url, headers, data) {
      headers["Content-Type"] = "application/json";
      return new Promise(resolve => {
        SGM_xmlhttpRequest({
          method: method,
          url: url,
          data: JSON.stringify(data),
          headers: headers,
          cookie: document.cookie,
          //@ts-ignore
          beforeSend: function (xhr) {
            //@ts-ignore
            xhr.withCredentials = true;
          },
          onload: res => {
            resolve(res);
          },
          onerror: res => {
            resolve(res);
          }
        });
      });
    }
    function getUrlInfo(url) {
      let urlc = url || window.location.href;
      let urlInfos = urlc.split("?")[urlc.split("?").length - 1];
      let urlArgs = urlInfos.split("&");
      let result = {};
      for (let i = 0; i < urlArgs.length; i++) {
        let k = urlArgs[i].split("=")[0];
        let v = urlArgs[i].split("=")[1];
        result[k] = v;
      }
      return result;
    }

    let config = {
      "animate": {
        "analyze_slide_toggle": 300,
        "window_surface": 200,
        "scrollbar_slide_from_zero": 700,
        "scrollbar_0p_to_20p": 400,
        "scrollbar_20p_to_40p": 300,
        "scrollbar_40p_to_60p": 200,
        "scrollbar_60p_to_80p": 100,
        "scrollbar_80p_to_100p": 50
      },
      "last-build-time": "2025.01.27",
      // "mip": "http://127.0.0.1:8000",
      // "payip": "http://127.0.0.1:8001",
      "mip": "https://api.olcoursekb.top/ekb",
      "payip": "https://api.olcoursekb.top/payment",
      "version": 25008
    };

    class UserInfoInterface {
      GET_USER_URL = "https://web.ewt360.com/api/usercenter/user/baseinfo";
      API_USER_URL = `${config.mip}/auth/getUser`;
      SCHOOL_URL = "https://gateway.ewt360.com/api/eteacherproduct/school/getSchoolUserInfo";
      TRIAL_URL = `${config.payip}/trial`;
      ACTIVE_CODE_URL = `${config.payip}/code/activate`;
      PURCHASE_URL = `${config.payip}/pay/buy`;
      ASK_OK_BUY_URL = `${config.payip}/pay/wait_for_pay_status?payId={p}`;
      CANCEL_ORDER_URL = `${config.payip}/pay/cancel_order`;
      ALL_GOODS_URL = `${config.payip}/shop/allGoods`;
      GET_ALL_ORDERS_URL = `${config.payip}/pay/get_all_orders`;
      async getApiUserInfo() {
        let res = await request("POST", this.API_USER_URL, headers["CommonHeader"], null);
        return validateReturn(res["responseText"]);
      }
      async getBasicUserInfo() {
        let res = await request("GET", this.GET_USER_URL, headers["CommonHeader"], null);
        return validateReturn(res["responseText"]);
      }
      async getSchoolInfo() {
        let res = await request("GET", this.SCHOOL_URL, headers["CourseHeader"]);
        let data = validateReturn(res["responseText"]);
        return data;
      }
      async UserTrial() {
        let res = await request("POST", this.TRIAL_URL, headers["CourseHeader"]);
        let data = res["responseText"];
        return JSON.parse(data);
      }
      async UserCodeActive(code) {
        let dat = {
          cid: code
        };
        let res = await requestJson("POST", this.ACTIVE_CODE_URL, headers["CourseHeader"], dat);
        let data = res["responseText"];
        return JSON.parse(data);
      }
      async Purchase(shopid, paytype) {
        let dat = {
          "sid": shopid,
          "ptype": paytype
        };
        let res = await requestJson("POST", this.PURCHASE_URL, headers["CommonHeader"], dat);
        return JSON.parse(res["responseText"]);
      }
      async GetPayStatus(payid) {
        let url = this.ASK_OK_BUY_URL.replace("{p}", payid);
        let res = await request("GET", url, headers["CommonHeader"]);
        return JSON.parse(res["responseText"]);
      }
      async CancelOrder(payid) {
        let url = this.CANCEL_ORDER_URL;
        let data = {
          payId: payid
        };
        let res = await requestJson("POST", url, headers["CommonHeader"], data);
        return JSON.parse(res["responseText"]);
      }
      async GetAllGoods() {
        let url = this.ALL_GOODS_URL;
        let res = await request("GET", url, headers["CommonHeader"]);
        return JSON.parse(res["responseText"]);
      }
      async GetAllOrders() {
        let url = this.GET_ALL_ORDERS_URL;
        let res = await request("GET", url, headers["CommonHeader"]);
        return JSON.parse(res["responseText"]);
      }
    }

    function getUserToken() {
      let cookie = document.cookie.split(";");
      let result = {};
      for (let i = 0; i < cookie.length; i++) {
        let k = cookie[i].split("=")[0].substring(1);
        result[k] = cookie[i].split("=")[1];
      }
      return result["token"];
    }

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var closeBtn = "index_close-btn__WMwSm";
    var closeBtnLabel = "index_close-btn-label__dBe6z";
    var kewtTscolRight = "index_kewt-tscol-right__rWXZm";
    var windowMain = "index_window-main__QeMQ2";
    var windowBg = "index_window-bg__y900m";
    var kewtCourseText = "index_kewt-course-text__zlb8L";
    var kewtHomeworkText = "index_kewt-homework-text__2TUEw";
    var kewtTscol = "index_kewt-tscol__PTdJC";
    var kewtSubject = "index_kewt-subject__4OOMr";
    var kewtSubjectRight = "index_kewt-subject-right__H05N1";
    var kewtTitle = "index_kewt-title__z7Nra";
    var kewtWindowBody = "index_kewt-window-body__LanAj";
    var kewtCourseDetail = "index_kewt-course-detail__8Z27S";
    var kewtHomeworkDetail = "index_kewt-homework-detail__53Bz3";
    var kewtCourseCol = "index_kewt-course-col__BSqQJ";
    var kewtHomeworkCol = "index_kewt-homework-col__pibLQ";
    var kewtCourseFuncbtns = "index_kewt-course-funcbtns__P-A9G";
    var kewtCourseTop = "index_kewt-course-top__mfrnZ";
    var kewtHomeworkTop = "index_kewt-homework-top__iNcTj";
    var kewtLogBox = "index_kewt-log-box__mFrzY";
    var kewtLogbox0 = "index_kewt-logbox-0__QqzT4";
    var kewtCourseContainer = "index_kewt-course-container__Q-3qj";
    var kewtCourseCLeft = "index_kewt-course-c-left__1MGLa";
    var kewtCourseCRight = "index_kewt-course-c-right__54Uf9";
    var kewtCourseLDate = "index_kewt-course-l-date__9g7ED";
    var kewtCourseLDateSel = "index_kewt-course-l-date-sel__fxDvh";
    var kewtCourseCRightEle = "index_kewt-course-c-right-ele__Gqt-R";
    var kewtCciI = "index_kewt-cci-i__TVv4x";
    var kewtCciTitle = "index_kewt-cci-title__y8-r4";
    var kewtCourseCInfo = "index_kewt-course-c-info__67Pgv";
    var kewtCourseCMajor = "index_kewt-course-c-major__39Yrp";
    var kewtMissionFnBtn = "index_kewt-mission-fn-btn__Nm4DO";
    var kewtCourseWfunc = "index_kewt-course-wfunc__0f3k8";
    var kewtCciId = "index_kewt-cci-id__mIZJ-";
    var kewtCourseCImg = "index_kewt-course-c-img__VSTXb";
    var kewtHomeworkContainer = "index_kewt-homework-container__3xCvM";
    var kewtQuesContainer = "index_kewt-ques-container__yBm7a";
    var quesAnswerContainer = "index_ques-answer-container__rP72I";
    var quesStatusBar = "index_ques-status-bar__zKLVn";
    var quesCInfo = "index_ques-c-info__9RmzU";
    var orangeContainer = "index_orange-container__uRd6d";
    var redContainer = "index_red-container__GauOb";
    var blueContainer = "index_blue-container__n1xQb";
    var quesOptionsChoiceDot = "index_ques-options-choice-dot__VTZrI";
    var quesOptionsChoiceDotHeart = "index_ques-options-choice-dot-heart__luUYI";
    var quesOptionContent = "index_ques-option-content__Bs71X";
    var quesOptionsOption = "index_ques-options-option__zm3ZY";
    var quesOptContainer = "index_ques-opt-container__bNqfm";
    var quesOptContainerTitleUp = "index_ques-opt-container-title-up__pfDOh";
    var quesParseContainer = "index_ques-parse-container__Z2EoX";
    var loadTips = "index_load-tips__sBFpF";
    var loadErrorComp = "index_load-error-comp__FLnje";
    var btnUnclick$1 = "index_btn-unclick__ks8xy";
    var circleDot = "index_circle-dot__yaMsr";
    var errTitle = "index_err-title__6-nL8";
    var loadErrorMsgTitle = "index_load-error-msg-title__88gA0";
    var firstViewPa = "index_first-view-pa__wgtcG";
    var firstView = "index_first-view__8DyDr";
    var fvText = "index_fv-text__QHJVr";
    var textContainer = "index_text-container__z3Fzr";
    var fvcBtn = "index_fvc-btn__8fTwD";
    var iframeClass = "index_iframe-class__rKYAE";
    var menu = "index_menu__J6kch";
    var wMask = "index_w-mask__xVRze";
    var wTitle = "index_w-title__-VvPT";
    var wBtnContainer = "index_w-btn-container__4Y-n9";
    var menuWindowBtn = "index_menu-window-btn__J-LyH";
    var menuWindowBtnImg = "index_menu-window-btn-img__fEOiO";
    var menuBtnText = "index_menu-btn-text__2ze-j";
    var menuBtnContainer = "index_menu-btn-container__75fZ-";
    var guideMask = "index_guide-mask__Y-TPm";
    var kewtTitlev2Text = "index_kewt-titlev2-text__Hs3us";
    var headImage = "index_head-image__TMXdh";
    var userName = "index_user-name__Pv-A7";
    var userId = "index_user-id__EKCaM";
    var leftFooter = "index_left-footer__cPAJ4";
    var leftFooterElement = "index_left-footer-element__IBySJ";
    var leftComponent$1 = "index_left-component__edRZ1";
    var blueFBtn = "index_blue-f-btn__JbZ8H";
    var nopageLst = "index_nopage-lst__YxXzL";
    var nopageLstTitle = "index_nopage-lst-title__E8A9y";
    var nopageContainer = "index_nopage-container__ur0w2";
    var ordiBtn = "index_ordi-btn__ikGwd";
    var activateInfoBox = "index_activate-info-box__qLACl";
    var activateInfoKvV = "index_activate-info-kv-v__6WSzW";
    var css_248z$c = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font: 12px/1.5 Microsoft YaHei UI,Microsoft YaHei,PingFang SC,Hiragino Sans GB,BlinkMacSystemFont,Seogoe UI,Roboto,Helvetica Neue,Helvetica,Arial,Source Han Sans CN,sans-serif\r\n}\r\n\r\np {\r\n    text-indent: 2em;\r\n}\r\n\r\n#index_close-btn__WMwSm {\r\n    font-size: 12px;\r\n    height: 16px;\r\n    width: 16px;\r\n    border-radius: calc(50%);\r\n    background-color: red;\r\n    margin-right: 0;\r\n    font-weight: bolder;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 5px;\r\n}\r\n\r\n#index_close-btn__WMwSm:hover > .index_close-btn-label__dBe6z {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#index_close-btn__WMwSm > .index_close-btn-label__dBe6z {\r\n    display: none;\r\n}\r\n\r\n.index_kewt-tscol-right__rWXZm {\r\n    margin-left: auto;\r\n    margin-right:5px;\r\n    text-align: right;\r\n}\r\n\r\n#index_window-main__QeMQ2 {\r\n    max-height: 768px;\r\n    opacity: 0;\r\n    margin-bottom: 100px;\r\n    position: relative;\r\n    display: flex;\r\n    border-radius: 5px;\r\n    background-color: rgba(255, 255, 255, 0.66);\r\n    backdrop-filter: blur(6px);\r\n    -webkit-backdrop-filter: blur(6px);\r\n    box-shadow: 0 0 5px gray;\r\n    font-size: 12px;\r\n}\r\n\r\n#index_window-bg__y900m {\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100%;\r\n    background-color:rgb(128,128,128,0.6);\r\n    z-index:99999;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    backdrop-filter: blur(2px);\r\n    -webkit-backdrop-filter: blur(2px);\r\n}\r\n\r\n.index_kewt-course-text__zlb8L,.index_kewt-homework-text__2TUEw {\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_kewt-tscol__PTdJC {\r\n    line-height: 14px;\r\n}\r\n\r\n.index_kewt-subject__4OOMr {\r\n    font-size: 12px;\r\n    color:gray;\r\n    transform: scale(0.9);\r\n    transform-origin: 0 100%;\r\n}\r\n\r\n.index_kewt-subject-right__H05N1 {\r\n    transform-origin: 100% 50%;\r\n}\r\n\r\n.index_kewt-title__z7Nra {\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_kewt-window-body__LanAj {\r\n    flex: 1;\r\n    padding:10px;\r\n    overflow-y: auto;\r\n    box-sizing: border-box;\r\n    border-radius: 0 5px 5px 0;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.index_kewt-subject__4OOMr {\r\n    font-size:12px;\r\n}\r\n\r\n.index_kewt-course-detail__8Z27S,.index_kewt-homework-detail__53Bz3 {\r\n    line-height: 15px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.index_kewt-course-col__BSqQJ,.index_kewt-homework-col__pibLQ {\r\n    color: #666;\r\n    transform: scale(0.85);\r\n    transform-origin: 0 50%;\r\n}\r\n\r\n.index_kewt-course-funcbtns__P-A9G {\r\n    margin-top: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.index_kewt-course-top__mfrnZ,.index_kewt-homework-top__iNcTj {\r\n    margin-top: 7px;\r\n}\r\n\r\n.index_kewt-log-box__mFrzY {\r\n    width: 100%;\r\n    padding: 7px;\r\n    border-radius: 5px;\r\n    line-height: 15px;\r\n    font-size: 12px;\r\n    box-shadow: 0 0 5px black;\r\n    overflow-y: auto;\r\n    margin-top: 5px;\r\n}\r\n\r\n#index_kewt-logbox-0__QqzT4 {\r\n    margin-top: 10px;\r\n}\r\n\r\n.index_kewt-course-container__Q-3qj {\r\n    margin-top:5px;\r\n    height:200px;\r\n    display:flex;\r\n    position: relative;\r\n    width:100%;\r\n}\r\n\r\n.index_kewt-course-c-left__1MGLa {\r\n    width:25%;\r\n    border-radius: 5px;\r\n    background-color: rgba(0,0,0,0);\r\n    box-shadow: 0 0 5px 1px gray;\r\n    box-sizing: border-box;\r\n    padding:10px 0;\r\n    margin-right: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.index_kewt-course-c-right__54Uf9 {\r\n    flex: 1;\r\n    box-shadow: 0 0 5px 1px gray;\r\n    border-radius: 5px;\r\n    overflow-y:auto;\r\n    box-sizing: border-box;\r\n    padding:5px;\r\n}\r\n\r\n.index_kewt-course-l-date__9g7ED {\r\n    padding:5px;\r\n    width:100%;\r\n    font-weight:bolder;\r\n}\r\n\r\n.index_kewt-course-l-date-sel__fxDvh {\r\n    background-color: #0aa5ff;\r\n    color:white;\r\n}\r\n\r\n.index_kewt-course-c-right-ele__Gqt-R {\r\n    position: relative;\r\n    display: flex;\r\n    padding: 5px;\r\n    margin-bottom: 3px;\r\n    width:100%;\r\n    background-color: #87838365;\r\n    border-radius: 5px;\r\n    transition: background-color 200ms;\r\n    box-sizing:border-box;\r\n}\r\n\r\n.index_kewt-course-c-right-ele__Gqt-R:hover {\r\n    background-color: #6b5a5a65;\r\n}\r\n\r\n.index_kewt-cci-i__TVv4x {\r\n    width:70px;\r\n    height:45px;\r\n}\r\n\r\n.index_kewt-cci-title__y8-r4 {\r\n    font-size: 13px;\r\n    font-weight:bolder;\r\n}\r\n\r\n.index_kewt-course-c-info__67Pgv {\r\n    margin-left: 5px;\r\n    display:flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n}\r\n\r\n.index_kewt-course-c-major__39Yrp {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.index_kewt-mission-fn-btn__Nm4DO {\r\n    color:white;\r\n    padding: 5px 10px;\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n    font-size: 12px;\r\n    margin-top: auto;\r\n    margin-bottom: 0;\r\n    margin-left: auto;\r\n    margin-right:0;\r\n    transform: scale(0.7);\r\n    transform-origin: 100% 100%;\r\n    margin: 0 3px;\r\n}\r\n\r\n.index_kewt-course-wfunc__0f3k8 {\r\n    margin-top: 5px;\r\n    display: flex;\r\n}\r\n\r\n.index_kewt-cci-id__mIZJ- {\r\n    margin-top: 2px;\r\n    font-size:12px;\r\n    transform: scale(0.9);\r\n    transform-origin: 0% 50%;\r\n    color: gray;\r\n}\r\n\r\n.index_kewt-course-c-img__VSTXb {\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.index_kewt-homework-container__3xCvM {\r\n    margin-top: 5px;\r\n    max-height: 350px;\r\n    border-radius: 5px;\r\n    box-shadow:0 0 5px 1px gray;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    overflow-y: auto;\r\n}\r\n\r\n.index_kewt-ques-container__yBm7a,.index_ques-answer-container__rP72I {\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    box-shadow:0 0 3px 1px gray;\r\n}\r\n\r\n.index_ques-answer-container__rP72I {\r\n    margin-top: 10px;\r\n}\r\n\r\n.index_kewt-ques-container__yBm7a {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.index_ques-status-bar__zKLVn {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.index_ques-c-info__9RmzU {\r\n    margin-left: 7px;\r\n}\r\n\r\n.index_orange-container__uRd6d,.index_red-container__GauOb,.index_blue-container__n1xQb {\r\n    height:15px;\r\n    border-radius: 8px;\r\n    font-size: 12px;\r\n    color: white;\r\n    padding: 8px 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.index_orange-container__uRd6d {\r\n    background-color: orange;\r\n}\r\n\r\n.index_red-container__GauOb {\r\n    background-color: #d52727;\r\n}\r\n\r\n.index_blue-container__n1xQb {\r\n    background-color: #00ff9db0;\r\n    color: black;\r\n}\r\n\r\n.index_ques-options-choice-dot__VTZrI,.index_ques-options-choice-dot-heart__luUYI{\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 50%;\r\n    font-size: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid purple;\r\n}\r\n\r\n.index_ques-options-choice-dot-heart__luUYI {\r\n    background-color: purple;\r\n    font-weight: bolder;\r\n    color: white;\r\n}\r\n\r\n.index_ques-option-content__Bs71X {\r\n    margin-left: 4px;\r\n    flex:1;\r\n}\r\n\r\n.index_ques-options-option__zm3ZY {\r\n    padding: 3px;\r\n    margin: 2px 0;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.index_ques-opt-container__bNqfm {\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.index_ques-opt-container-title-up__pfDOh {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n.index_ques-parse-container__Z2EoX {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n}\r\n\r\n.index_load-tips__sBFpF {\r\n    font-size: 12px;\r\n    color: gray;\r\n    text-align:center;\r\n}\r\n\r\n.index_load-error-comp__FLnje {\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    border: 3px solid red;\r\n    padding: 5px 8px;\r\n    box-sizing: border-box;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    line-height: 17px;\r\n}\r\n\r\n.index_btn-unclick__ks8xy {\r\n    background-color: gray;\r\n}\r\n\r\n.index_circle-dot__yaMsr {\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    border: 2px solid #c10b0b;\r\n    background-color: red;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 12px;\r\n    font-weight: bolder;\r\n    color: white;\r\n}\r\n\r\n.index_err-title__6-nL8 {\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_load-error-msg-title__88gA0 {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.index_first-view-pa__wgtcG {\r\n    text-indent: 2em;\r\n}\r\n\r\n.index_first-view__8DyDr {\r\n    margin-top: 5px;\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.index_fv-text__QHJVr {\r\n    border: none;\r\n    outline-style: none;\r\n    width: 400px;\r\n    height: 15px;\r\n    border-bottom: 1px solid black;\r\n    font-size: 12px;\r\n    background-color: #ffffff00;\r\n}\r\n\r\n.index_text-container__z3Fzr {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n.index_fvc-btn__8fTwD {\r\n    margin-left: 3px;\r\n    padding:3px 10px;\r\n    background-color: orange;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 12px;\r\n    transition: background-color 200ms;\r\n    display: flex;\r\n}\r\n\r\n.index_fvc-btn__8fTwD:hover {\r\n    background-color: #bd9a5c;\r\n}\r\n\r\n.index_iframe-class__rKYAE {\r\n    display: none;\r\n}\r\n\r\n.index_menu__J6kch {\r\n    pointer-events: auto;\r\n    position: fixed;\r\n    top: 45px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding:2px;\r\n    background-color: rgb(194 194 194 / 20%);\r\n    box-shadow: 0 0 5px gray;\r\n    box-sizing: border-box;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    color: black;\r\n    border-radius: 0 10px 10px 0;\r\n    backdrop-filter: blur(5px);\r\n    -webkit-backdrop-filter:blur(4px);\r\n}\r\n\r\n.index_w-mask__xVRze {\r\n    left: 0;\r\n    top: 0;\r\n    position: fixed;\r\n    width: 100%;\r\n    height:  100%;\r\n    z-index: 99;\r\n    pointer-events: none;\r\n}\r\n\r\n.index_w-title__-VvPT {\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n}\r\n\r\n.index_w-btn-container__4Y-n9 {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.index_menu-window-btn__J-LyH {\r\n    font-size: 12px;\r\n    height: 26px;\r\n    width: 26px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n    color: white;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    box-shadow: 0 0 5px gray;\r\n}\r\n\r\n.index_menu-window-btn-img__fEOiO {\r\n    height: 17px;\r\n    width: 17px;\r\n}\r\n\r\n.index_menu-window-btn__J-LyH:hover + .index_menu-btn-text__2ze-j {\r\n    display: flex;\r\n}\r\n\r\n.index_menu-btn-text__2ze-j {\r\n    display: none;\r\n    padding: 0 3px;\r\n    box-shadow: 0 0 7px gray;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: wheat;\r\n    margin-left: 1px;\r\n    left: calc(100% + 7px);\r\n    top: 50%;\r\n    transform: translate(-50%, -50%) scale(0.7);\r\n    line-height: 16px;\r\n\r\n}\r\n\r\n.index_menu-btn-container__75fZ- {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 3px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.index_guide-mask__Y-TPm {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.index_kewt-titlev2-text__Hs3us {\r\n    padding: 0;\r\n    line-height: 22px;\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_head-image__TMXdh {\r\n    width: 85px;\r\n    height: 85px;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 3px #4c4c4c;\r\n    margin-top: 25px;\r\n}\r\n\r\n.index_user-name__Pv-A7 {\r\n    text-align: center;\r\n    font-size: medium;\r\n    margin-top: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n.index_user-id__EKCaM {\r\n    color: gray;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    transform: scale(0.9);\r\n}\r\n\r\n.index_left-footer__cPAJ4 {\r\n    font-size: 12px;\r\n    scale: 0.8;\r\n    transform: translate(0, 0%);\r\n    bottom: 0%;\r\n    display: flex;\r\n    justify-content: center;\r\n    color: #4f4e4e;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: auto;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.index_left-footer-element__IBySJ {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.index_left-component__edRZ1 {\r\n    width: 200px;\r\n    border-radius: 10px 0px 0px 10px;\r\n    background-color: #ffffff1c;\r\n    backdrop-filter: blur(4px);\r\n    -webkit-backdrop-filter: blur(4px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n@supports (-moz-appearance: none) {\r\n    .index_left-component__edRZ1 {\r\n        background-color: #ffffff60;\r\n    }\r\n}\r\n\r\n.index_blue-f-btn__JbZ8H {\r\n    padding: 2px 12px;\r\n    font-size: 12px;\r\n    border-radius: 8px;\r\n    background-color: #00a6ff;\r\n    transition: background-color 200ms;\r\n    display: flex;\r\n    height: 16px;\r\n    align-items: center;\r\n}\r\n\r\n.index_blue-f-btn__JbZ8H:hover {\r\n    background-color: #0183cb;\r\n}\r\n\r\n.index_nopage-lst__YxXzL {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.index_nopage-lst-title__E8A9y {\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_nopage-container__ur0w2 {\r\n    width: 100%;\r\n    padding: 3px;\r\n    box-shadow: 0 0 5px gray;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.index_menu-window-btn__J-LyH > img {\r\n    height: 20px;\r\n}\r\n\r\n.index_ordi-btn__ikGwd {\r\n\r\n    background-color: rgb(0,0,0,0);\r\n    padding: 3px 15px;\r\n    outline-style: none;\r\n    box-shadow: 0 0 5px gray;\r\n    font-size: 12px;\r\n    border-radius: 5px;\r\n\r\n    transition: background-color 200ms;\r\n}\r\n\r\n.index_ordi-btn__ikGwd:hover {\r\n    background-color: rgb(0,0,0,0.08);\r\n}\r\n\r\n.index_ordi-btn__ikGwd:active {\r\n    background-color: #b4afaf;\r\n}\r\n\r\n.index_activate-info-box__qLACl {\r\n    padding: 5px;\r\n    min-width: 175px;\r\n    line-height: 13px;\r\n    border: 1px dashed gray;\r\n    font-size: 10px;\r\n    border-radius: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.index_activate-info-kv-v__6WSzW {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n    text-align: right;\r\n}";
    var style = {"close-btn":"index_close-btn__WMwSm","close-btn-label":"index_close-btn-label__dBe6z","kewt-tscol-right":"index_kewt-tscol-right__rWXZm","window-main":"index_window-main__QeMQ2","window-bg":"index_window-bg__y900m","kewt-course-text":"index_kewt-course-text__zlb8L","kewt-homework-text":"index_kewt-homework-text__2TUEw","kewt-tscol":"index_kewt-tscol__PTdJC","kewt-subject":"index_kewt-subject__4OOMr","kewt-subject-right":"index_kewt-subject-right__H05N1","kewt-title":"index_kewt-title__z7Nra","kewt-window-body":"index_kewt-window-body__LanAj","kewt-course-detail":"index_kewt-course-detail__8Z27S","kewt-homework-detail":"index_kewt-homework-detail__53Bz3","kewt-course-col":"index_kewt-course-col__BSqQJ","kewt-homework-col":"index_kewt-homework-col__pibLQ","kewt-course-funcbtns":"index_kewt-course-funcbtns__P-A9G","kewt-course-top":"index_kewt-course-top__mfrnZ","kewt-homework-top":"index_kewt-homework-top__iNcTj","kewt-log-box":"index_kewt-log-box__mFrzY","kewt-logbox-0":"index_kewt-logbox-0__QqzT4","kewt-course-container":"index_kewt-course-container__Q-3qj","kewt-course-c-left":"index_kewt-course-c-left__1MGLa","kewt-course-c-right":"index_kewt-course-c-right__54Uf9","kewt-course-l-date":"index_kewt-course-l-date__9g7ED","kewt-course-l-date-sel":"index_kewt-course-l-date-sel__fxDvh","kewt-course-c-right-ele":"index_kewt-course-c-right-ele__Gqt-R","kewt-cci-i":"index_kewt-cci-i__TVv4x","kewt-cci-title":"index_kewt-cci-title__y8-r4","kewt-course-c-info":"index_kewt-course-c-info__67Pgv","kewt-course-c-major":"index_kewt-course-c-major__39Yrp","kewt-mission-fn-btn":"index_kewt-mission-fn-btn__Nm4DO","kewt-course-wfunc":"index_kewt-course-wfunc__0f3k8","kewt-cci-id":"index_kewt-cci-id__mIZJ-","kewt-course-c-img":"index_kewt-course-c-img__VSTXb","kewt-homework-container":"index_kewt-homework-container__3xCvM","kewt-ques-container":"index_kewt-ques-container__yBm7a","ques-answer-container":"index_ques-answer-container__rP72I","ques-status-bar":"index_ques-status-bar__zKLVn","ques-c-info":"index_ques-c-info__9RmzU","orange-container":"index_orange-container__uRd6d","red-container":"index_red-container__GauOb","blue-container":"index_blue-container__n1xQb","ques-options-choice-dot":"index_ques-options-choice-dot__VTZrI","ques-options-choice-dot-heart":"index_ques-options-choice-dot-heart__luUYI","ques-option-content":"index_ques-option-content__Bs71X","ques-options-option":"index_ques-options-option__zm3ZY","ques-opt-container":"index_ques-opt-container__bNqfm","ques-opt-container-title-up":"index_ques-opt-container-title-up__pfDOh","ques-parse-container":"index_ques-parse-container__Z2EoX","load-tips":"index_load-tips__sBFpF","load-error-comp":"index_load-error-comp__FLnje","btn-unclick":"index_btn-unclick__ks8xy","circle-dot":"index_circle-dot__yaMsr","err-title":"index_err-title__6-nL8","load-error-msg-title":"index_load-error-msg-title__88gA0","first-view-pa":"index_first-view-pa__wgtcG","first-view":"index_first-view__8DyDr","fv-text":"index_fv-text__QHJVr","text-container":"index_text-container__z3Fzr","fvc-btn":"index_fvc-btn__8fTwD","iframe-class":"index_iframe-class__rKYAE","menu":"index_menu__J6kch","w-mask":"index_w-mask__xVRze","w-title":"index_w-title__-VvPT","w-btn-container":"index_w-btn-container__4Y-n9","menu-window-btn":"index_menu-window-btn__J-LyH","menu-window-btn-img":"index_menu-window-btn-img__fEOiO","menu-btn-text":"index_menu-btn-text__2ze-j","menu-btn-container":"index_menu-btn-container__75fZ-","guide-mask":"index_guide-mask__Y-TPm","kewt-titlev2-text":"index_kewt-titlev2-text__Hs3us","head-image":"index_head-image__TMXdh","user-name":"index_user-name__Pv-A7","user-id":"index_user-id__EKCaM","left-footer":"index_left-footer__cPAJ4","left-footer-element":"index_left-footer-element__IBySJ","left-component":"index_left-component__edRZ1","blue-f-btn":"index_blue-f-btn__JbZ8H","nopage-lst":"index_nopage-lst__YxXzL","nopage-lst-title":"index_nopage-lst-title__E8A9y","nopage-container":"index_nopage-container__ur0w2","ordi-btn":"index_ordi-btn__ikGwd","activate-info-box":"index_activate-info-box__qLACl","activate-info-kv-v":"index_activate-info-kv-v__6WSzW","closeBtn":"index_close-btn__WMwSm","closeBtnLabel":"index_close-btn-label__dBe6z","kewtTscolRight":"index_kewt-tscol-right__rWXZm","windowMain":"index_window-main__QeMQ2","windowBg":"index_window-bg__y900m","kewtCourseText":"index_kewt-course-text__zlb8L","kewtHomeworkText":"index_kewt-homework-text__2TUEw","kewtTscol":"index_kewt-tscol__PTdJC","kewtSubject":"index_kewt-subject__4OOMr","kewtSubjectRight":"index_kewt-subject-right__H05N1","kewtTitle":"index_kewt-title__z7Nra","kewtWindowBody":"index_kewt-window-body__LanAj","kewtCourseDetail":"index_kewt-course-detail__8Z27S","kewtHomeworkDetail":"index_kewt-homework-detail__53Bz3","kewtCourseCol":"index_kewt-course-col__BSqQJ","kewtHomeworkCol":"index_kewt-homework-col__pibLQ","kewtCourseFuncbtns":"index_kewt-course-funcbtns__P-A9G","kewtCourseTop":"index_kewt-course-top__mfrnZ","kewtHomeworkTop":"index_kewt-homework-top__iNcTj","kewtLogBox":"index_kewt-log-box__mFrzY","kewtLogbox0":"index_kewt-logbox-0__QqzT4","kewtCourseContainer":"index_kewt-course-container__Q-3qj","kewtCourseCLeft":"index_kewt-course-c-left__1MGLa","kewtCourseCRight":"index_kewt-course-c-right__54Uf9","kewtCourseLDate":"index_kewt-course-l-date__9g7ED","kewtCourseLDateSel":"index_kewt-course-l-date-sel__fxDvh","kewtCourseCRightEle":"index_kewt-course-c-right-ele__Gqt-R","kewtCciI":"index_kewt-cci-i__TVv4x","kewtCciTitle":"index_kewt-cci-title__y8-r4","kewtCourseCInfo":"index_kewt-course-c-info__67Pgv","kewtCourseCMajor":"index_kewt-course-c-major__39Yrp","kewtMissionFnBtn":"index_kewt-mission-fn-btn__Nm4DO","kewtCourseWfunc":"index_kewt-course-wfunc__0f3k8","kewtCciId":"index_kewt-cci-id__mIZJ-","kewtCourseCImg":"index_kewt-course-c-img__VSTXb","kewtHomeworkContainer":"index_kewt-homework-container__3xCvM","kewtQuesContainer":"index_kewt-ques-container__yBm7a","quesAnswerContainer":"index_ques-answer-container__rP72I","quesStatusBar":"index_ques-status-bar__zKLVn","quesCInfo":"index_ques-c-info__9RmzU","orangeContainer":"index_orange-container__uRd6d","redContainer":"index_red-container__GauOb","blueContainer":"index_blue-container__n1xQb","quesOptionsChoiceDot":"index_ques-options-choice-dot__VTZrI","quesOptionsChoiceDotHeart":"index_ques-options-choice-dot-heart__luUYI","quesOptionContent":"index_ques-option-content__Bs71X","quesOptionsOption":"index_ques-options-option__zm3ZY","quesOptContainer":"index_ques-opt-container__bNqfm","quesOptContainerTitleUp":"index_ques-opt-container-title-up__pfDOh","quesParseContainer":"index_ques-parse-container__Z2EoX","loadTips":"index_load-tips__sBFpF","loadErrorComp":"index_load-error-comp__FLnje","btnUnclick":"index_btn-unclick__ks8xy","circleDot":"index_circle-dot__yaMsr","errTitle":"index_err-title__6-nL8","loadErrorMsgTitle":"index_load-error-msg-title__88gA0","firstViewPa":"index_first-view-pa__wgtcG","firstView":"index_first-view__8DyDr","fvText":"index_fv-text__QHJVr","textContainer":"index_text-container__z3Fzr","fvcBtn":"index_fvc-btn__8fTwD","iframeClass":"index_iframe-class__rKYAE","wMask":"index_w-mask__xVRze","wTitle":"index_w-title__-VvPT","wBtnContainer":"index_w-btn-container__4Y-n9","menuWindowBtn":"index_menu-window-btn__J-LyH","menuWindowBtnImg":"index_menu-window-btn-img__fEOiO","menuBtnText":"index_menu-btn-text__2ze-j","menuBtnContainer":"index_menu-btn-container__75fZ-","guideMask":"index_guide-mask__Y-TPm","kewtTitlev2Text":"index_kewt-titlev2-text__Hs3us","headImage":"index_head-image__TMXdh","userName":"index_user-name__Pv-A7","userId":"index_user-id__EKCaM","leftFooter":"index_left-footer__cPAJ4","leftFooterElement":"index_left-footer-element__IBySJ","leftComponent":"index_left-component__edRZ1","blueFBtn":"index_blue-f-btn__JbZ8H","nopageLst":"index_nopage-lst__YxXzL","nopageLstTitle":"index_nopage-lst-title__E8A9y","nopageContainer":"index_nopage-container__ur0w2","ordiBtn":"index_ordi-btn__ikGwd","activateInfoBox":"index_activate-info-box__qLACl","activateInfoKvV":"index_activate-info-kv-v__6WSzW"};
    var stylesheet$a="* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font: 12px/1.5 Microsoft YaHei UI,Microsoft YaHei,PingFang SC,Hiragino Sans GB,BlinkMacSystemFont,Seogoe UI,Roboto,Helvetica Neue,Helvetica,Arial,Source Han Sans CN,sans-serif\r\n}\r\n\r\np {\r\n    text-indent: 2em;\r\n}\r\n\r\n#index_close-btn__WMwSm {\r\n    font-size: 12px;\r\n    height: 16px;\r\n    width: 16px;\r\n    border-radius: calc(50%);\r\n    background-color: red;\r\n    margin-right: 0;\r\n    font-weight: bolder;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 5px;\r\n}\r\n\r\n#index_close-btn__WMwSm:hover > .index_close-btn-label__dBe6z {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#index_close-btn__WMwSm > .index_close-btn-label__dBe6z {\r\n    display: none;\r\n}\r\n\r\n.index_kewt-tscol-right__rWXZm {\r\n    margin-left: auto;\r\n    margin-right:5px;\r\n    text-align: right;\r\n}\r\n\r\n#index_window-main__QeMQ2 {\r\n    max-height: 768px;\r\n    opacity: 0;\r\n    margin-bottom: 100px;\r\n    position: relative;\r\n    display: flex;\r\n    border-radius: 5px;\r\n    background-color: rgba(255, 255, 255, 0.66);\r\n    backdrop-filter: blur(6px);\r\n    -webkit-backdrop-filter: blur(6px);\r\n    box-shadow: 0 0 5px gray;\r\n    font-size: 12px;\r\n}\r\n\r\n#index_window-bg__y900m {\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100%;\r\n    background-color:rgb(128,128,128,0.6);\r\n    z-index:99999;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    backdrop-filter: blur(2px);\r\n    -webkit-backdrop-filter: blur(2px);\r\n}\r\n\r\n.index_kewt-course-text__zlb8L,.index_kewt-homework-text__2TUEw {\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_kewt-tscol__PTdJC {\r\n    line-height: 14px;\r\n}\r\n\r\n.index_kewt-subject__4OOMr {\r\n    font-size: 12px;\r\n    color:gray;\r\n    transform: scale(0.9);\r\n    transform-origin: 0 100%;\r\n}\r\n\r\n.index_kewt-subject-right__H05N1 {\r\n    transform-origin: 100% 50%;\r\n}\r\n\r\n.index_kewt-title__z7Nra {\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_kewt-window-body__LanAj {\r\n    flex: 1;\r\n    padding:10px;\r\n    overflow-y: auto;\r\n    box-sizing: border-box;\r\n    border-radius: 0 5px 5px 0;\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.index_kewt-subject__4OOMr {\r\n    font-size:12px;\r\n}\r\n\r\n.index_kewt-course-detail__8Z27S,.index_kewt-homework-detail__53Bz3 {\r\n    line-height: 15px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.index_kewt-course-col__BSqQJ,.index_kewt-homework-col__pibLQ {\r\n    color: #666;\r\n    transform: scale(0.85);\r\n    transform-origin: 0 50%;\r\n}\r\n\r\n.index_kewt-course-funcbtns__P-A9G {\r\n    margin-top: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.index_kewt-course-top__mfrnZ,.index_kewt-homework-top__iNcTj {\r\n    margin-top: 7px;\r\n}\r\n\r\n.index_kewt-log-box__mFrzY {\r\n    width: 100%;\r\n    padding: 7px;\r\n    border-radius: 5px;\r\n    line-height: 15px;\r\n    font-size: 12px;\r\n    box-shadow: 0 0 5px black;\r\n    overflow-y: auto;\r\n    margin-top: 5px;\r\n}\r\n\r\n#index_kewt-logbox-0__QqzT4 {\r\n    margin-top: 10px;\r\n}\r\n\r\n.index_kewt-course-container__Q-3qj {\r\n    margin-top:5px;\r\n    height:200px;\r\n    display:flex;\r\n    position: relative;\r\n    width:100%;\r\n}\r\n\r\n.index_kewt-course-c-left__1MGLa {\r\n    width:25%;\r\n    border-radius: 5px;\r\n    background-color: rgba(0,0,0,0);\r\n    box-shadow: 0 0 5px 1px gray;\r\n    box-sizing: border-box;\r\n    padding:10px 0;\r\n    margin-right: 10px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.index_kewt-course-c-right__54Uf9 {\r\n    flex: 1;\r\n    box-shadow: 0 0 5px 1px gray;\r\n    border-radius: 5px;\r\n    overflow-y:auto;\r\n    box-sizing: border-box;\r\n    padding:5px;\r\n}\r\n\r\n.index_kewt-course-l-date__9g7ED {\r\n    padding:5px;\r\n    width:100%;\r\n    font-weight:bolder;\r\n}\r\n\r\n.index_kewt-course-l-date-sel__fxDvh {\r\n    background-color: #0aa5ff;\r\n    color:white;\r\n}\r\n\r\n.index_kewt-course-c-right-ele__Gqt-R {\r\n    position: relative;\r\n    display: flex;\r\n    padding: 5px;\r\n    margin-bottom: 3px;\r\n    width:100%;\r\n    background-color: #87838365;\r\n    border-radius: 5px;\r\n    transition: background-color 200ms;\r\n    box-sizing:border-box;\r\n}\r\n\r\n.index_kewt-course-c-right-ele__Gqt-R:hover {\r\n    background-color: #6b5a5a65;\r\n}\r\n\r\n.index_kewt-cci-i__TVv4x {\r\n    width:70px;\r\n    height:45px;\r\n}\r\n\r\n.index_kewt-cci-title__y8-r4 {\r\n    font-size: 13px;\r\n    font-weight:bolder;\r\n}\r\n\r\n.index_kewt-course-c-info__67Pgv {\r\n    margin-left: 5px;\r\n    display:flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n}\r\n\r\n.index_kewt-course-c-major__39Yrp {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.index_kewt-mission-fn-btn__Nm4DO {\r\n    color:white;\r\n    padding: 5px 10px;\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n    font-size: 12px;\r\n    margin-top: auto;\r\n    margin-bottom: 0;\r\n    margin-left: auto;\r\n    margin-right:0;\r\n    transform: scale(0.7);\r\n    transform-origin: 100% 100%;\r\n    margin: 0 3px;\r\n}\r\n\r\n.index_kewt-course-wfunc__0f3k8 {\r\n    margin-top: 5px;\r\n    display: flex;\r\n}\r\n\r\n.index_kewt-cci-id__mIZJ- {\r\n    margin-top: 2px;\r\n    font-size:12px;\r\n    transform: scale(0.9);\r\n    transform-origin: 0% 50%;\r\n    color: gray;\r\n}\r\n\r\n.index_kewt-course-c-img__VSTXb {\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.index_kewt-homework-container__3xCvM {\r\n    margin-top: 5px;\r\n    max-height: 350px;\r\n    border-radius: 5px;\r\n    box-shadow:0 0 5px 1px gray;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    overflow-y: auto;\r\n}\r\n\r\n.index_kewt-ques-container__yBm7a,.index_ques-answer-container__rP72I {\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    box-shadow:0 0 3px 1px gray;\r\n}\r\n\r\n.index_ques-answer-container__rP72I {\r\n    margin-top: 10px;\r\n}\r\n\r\n.index_kewt-ques-container__yBm7a {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.index_ques-status-bar__zKLVn {\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.index_ques-c-info__9RmzU {\r\n    margin-left: 7px;\r\n}\r\n\r\n.index_orange-container__uRd6d,.index_red-container__GauOb,.index_blue-container__n1xQb {\r\n    height:15px;\r\n    border-radius: 8px;\r\n    font-size: 12px;\r\n    color: white;\r\n    padding: 8px 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.index_orange-container__uRd6d {\r\n    background-color: orange;\r\n}\r\n\r\n.index_red-container__GauOb {\r\n    background-color: #d52727;\r\n}\r\n\r\n.index_blue-container__n1xQb {\r\n    background-color: #00ff9db0;\r\n    color: black;\r\n}\r\n\r\n.index_ques-options-choice-dot__VTZrI,.index_ques-options-choice-dot-heart__luUYI{\r\n    height: 25px;\r\n    width: 25px;\r\n    border-radius: 50%;\r\n    font-size: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid purple;\r\n}\r\n\r\n.index_ques-options-choice-dot-heart__luUYI {\r\n    background-color: purple;\r\n    font-weight: bolder;\r\n    color: white;\r\n}\r\n\r\n.index_ques-option-content__Bs71X {\r\n    margin-left: 4px;\r\n    flex:1;\r\n}\r\n\r\n.index_ques-options-option__zm3ZY {\r\n    padding: 3px;\r\n    margin: 2px 0;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.index_ques-opt-container__bNqfm {\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.index_ques-opt-container-title-up__pfDOh {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n.index_ques-parse-container__Z2EoX {\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n}\r\n\r\n.index_load-tips__sBFpF {\r\n    font-size: 12px;\r\n    color: gray;\r\n    text-align:center;\r\n}\r\n\r\n.index_load-error-comp__FLnje {\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    border: 3px solid red;\r\n    padding: 5px 8px;\r\n    box-sizing: border-box;\r\n    font-size: 15px;\r\n    font-weight: normal;\r\n    line-height: 17px;\r\n}\r\n\r\n.index_btn-unclick__ks8xy {\r\n    background-color: gray;\r\n}\r\n\r\n.index_circle-dot__yaMsr {\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    border: 2px solid #c10b0b;\r\n    background-color: red;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 12px;\r\n    font-weight: bolder;\r\n    color: white;\r\n}\r\n\r\n.index_err-title__6-nL8 {\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_load-error-msg-title__88gA0 {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.index_first-view-pa__wgtcG {\r\n    text-indent: 2em;\r\n}\r\n\r\n.index_first-view__8DyDr {\r\n    margin-top: 5px;\r\n    font-size: 12px;\r\n    line-height: 17px;\r\n}\r\n\r\n.index_fv-text__QHJVr {\r\n    border: none;\r\n    outline-style: none;\r\n    width: 400px;\r\n    height: 15px;\r\n    border-bottom: 1px solid black;\r\n    font-size: 12px;\r\n    background-color: #ffffff00;\r\n}\r\n\r\n.index_text-container__z3Fzr {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n.index_fvc-btn__8fTwD {\r\n    margin-left: 3px;\r\n    padding:3px 10px;\r\n    background-color: orange;\r\n    color: white;\r\n    border-radius: 5px;\r\n    font-size: 12px;\r\n    transition: background-color 200ms;\r\n    display: flex;\r\n}\r\n\r\n.index_fvc-btn__8fTwD:hover {\r\n    background-color: #bd9a5c;\r\n}\r\n\r\n.index_iframe-class__rKYAE {\r\n    display: none;\r\n}\r\n\r\n.index_menu__J6kch {\r\n    pointer-events: auto;\r\n    position: fixed;\r\n    top: 45px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding:2px;\r\n    background-color: rgb(194 194 194 / 20%);\r\n    box-shadow: 0 0 5px gray;\r\n    box-sizing: border-box;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    color: black;\r\n    border-radius: 0 10px 10px 0;\r\n    backdrop-filter: blur(5px);\r\n    -webkit-backdrop-filter:blur(4px);\r\n}\r\n\r\n.index_w-mask__xVRze {\r\n    left: 0;\r\n    top: 0;\r\n    position: fixed;\r\n    width: 100%;\r\n    height:  100%;\r\n    z-index: 99;\r\n    pointer-events: none;\r\n}\r\n\r\n.index_w-title__-VvPT {\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n}\r\n\r\n.index_w-btn-container__4Y-n9 {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.index_menu-window-btn__J-LyH {\r\n    font-size: 12px;\r\n    height: 26px;\r\n    width: 26px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n    color: white;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    box-shadow: 0 0 5px gray;\r\n}\r\n\r\n.index_menu-window-btn-img__fEOiO {\r\n    height: 17px;\r\n    width: 17px;\r\n}\r\n\r\n.index_menu-window-btn__J-LyH:hover + .index_menu-btn-text__2ze-j {\r\n    display: flex;\r\n}\r\n\r\n.index_menu-btn-text__2ze-j {\r\n    display: none;\r\n    padding: 0 3px;\r\n    box-shadow: 0 0 7px gray;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: wheat;\r\n    margin-left: 1px;\r\n    left: calc(100% + 7px);\r\n    top: 50%;\r\n    transform: translate(-50%, -50%) scale(0.7);\r\n    line-height: 16px;\r\n\r\n}\r\n\r\n.index_menu-btn-container__75fZ- {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 3px;\r\n    margin-top: 3px;\r\n}\r\n\r\n.index_guide-mask__Y-TPm {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.index_kewt-titlev2-text__Hs3us {\r\n    padding: 0;\r\n    line-height: 22px;\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_head-image__TMXdh {\r\n    width: 85px;\r\n    height: 85px;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 3px #4c4c4c;\r\n    margin-top: 25px;\r\n}\r\n\r\n.index_user-name__Pv-A7 {\r\n    text-align: center;\r\n    font-size: medium;\r\n    margin-top: 5px;\r\n    font-weight: bold;\r\n}\r\n\r\n.index_user-id__EKCaM {\r\n    color: gray;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    transform: scale(0.9);\r\n}\r\n\r\n.index_left-footer__cPAJ4 {\r\n    font-size: 12px;\r\n    scale: 0.8;\r\n    transform: translate(0, 0%);\r\n    bottom: 0%;\r\n    display: flex;\r\n    justify-content: center;\r\n    color: #4f4e4e;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: auto;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.index_left-footer-element__IBySJ {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.index_left-component__edRZ1 {\r\n    width: 200px;\r\n    border-radius: 10px 0px 0px 10px;\r\n    background-color: #ffffff1c;\r\n    backdrop-filter: blur(4px);\r\n    -webkit-backdrop-filter: blur(4px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n@supports (-moz-appearance: none) {\r\n    .index_left-component__edRZ1 {\r\n        background-color: #ffffff60;\r\n    }\r\n}\r\n\r\n.index_blue-f-btn__JbZ8H {\r\n    padding: 2px 12px;\r\n    font-size: 12px;\r\n    border-radius: 8px;\r\n    background-color: #00a6ff;\r\n    transition: background-color 200ms;\r\n    display: flex;\r\n    height: 16px;\r\n    align-items: center;\r\n}\r\n\r\n.index_blue-f-btn__JbZ8H:hover {\r\n    background-color: #0183cb;\r\n}\r\n\r\n.index_nopage-lst__YxXzL {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.index_nopage-lst-title__E8A9y {\r\n    font-weight: bolder;\r\n}\r\n\r\n.index_nopage-container__ur0w2 {\r\n    width: 100%;\r\n    padding: 3px;\r\n    box-shadow: 0 0 5px gray;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.index_menu-window-btn__J-LyH > img {\r\n    height: 20px;\r\n}\r\n\r\n.index_ordi-btn__ikGwd {\r\n\r\n    background-color: rgb(0,0,0,0);\r\n    padding: 3px 15px;\r\n    outline-style: none;\r\n    box-shadow: 0 0 5px gray;\r\n    font-size: 12px;\r\n    border-radius: 5px;\r\n\r\n    transition: background-color 200ms;\r\n}\r\n\r\n.index_ordi-btn__ikGwd:hover {\r\n    background-color: rgb(0,0,0,0.08);\r\n}\r\n\r\n.index_ordi-btn__ikGwd:active {\r\n    background-color: #b4afaf;\r\n}\r\n\r\n.index_activate-info-box__qLACl {\r\n    padding: 5px;\r\n    min-width: 175px;\r\n    line-height: 13px;\r\n    border: 1px dashed gray;\r\n    font-size: 10px;\r\n    border-radius: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.index_activate-info-kv-v__6WSzW {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n    text-align: right;\r\n}";
    styleInject(css_248z$c);

    var mcss = /*#__PURE__*/Object.freeze({
        __proto__: null,
        closeBtn: closeBtn,
        closeBtnLabel: closeBtnLabel,
        kewtTscolRight: kewtTscolRight,
        windowMain: windowMain,
        windowBg: windowBg,
        kewtCourseText: kewtCourseText,
        kewtHomeworkText: kewtHomeworkText,
        kewtTscol: kewtTscol,
        kewtSubject: kewtSubject,
        kewtSubjectRight: kewtSubjectRight,
        kewtTitle: kewtTitle,
        kewtWindowBody: kewtWindowBody,
        kewtCourseDetail: kewtCourseDetail,
        kewtHomeworkDetail: kewtHomeworkDetail,
        kewtCourseCol: kewtCourseCol,
        kewtHomeworkCol: kewtHomeworkCol,
        kewtCourseFuncbtns: kewtCourseFuncbtns,
        kewtCourseTop: kewtCourseTop,
        kewtHomeworkTop: kewtHomeworkTop,
        kewtLogBox: kewtLogBox,
        kewtLogbox0: kewtLogbox0,
        kewtCourseContainer: kewtCourseContainer,
        kewtCourseCLeft: kewtCourseCLeft,
        kewtCourseCRight: kewtCourseCRight,
        kewtCourseLDate: kewtCourseLDate,
        kewtCourseLDateSel: kewtCourseLDateSel,
        kewtCourseCRightEle: kewtCourseCRightEle,
        kewtCciI: kewtCciI,
        kewtCciTitle: kewtCciTitle,
        kewtCourseCInfo: kewtCourseCInfo,
        kewtCourseCMajor: kewtCourseCMajor,
        kewtMissionFnBtn: kewtMissionFnBtn,
        kewtCourseWfunc: kewtCourseWfunc,
        kewtCciId: kewtCciId,
        kewtCourseCImg: kewtCourseCImg,
        kewtHomeworkContainer: kewtHomeworkContainer,
        kewtQuesContainer: kewtQuesContainer,
        quesAnswerContainer: quesAnswerContainer,
        quesStatusBar: quesStatusBar,
        quesCInfo: quesCInfo,
        orangeContainer: orangeContainer,
        redContainer: redContainer,
        blueContainer: blueContainer,
        quesOptionsChoiceDot: quesOptionsChoiceDot,
        quesOptionsChoiceDotHeart: quesOptionsChoiceDotHeart,
        quesOptionContent: quesOptionContent,
        quesOptionsOption: quesOptionsOption,
        quesOptContainer: quesOptContainer,
        quesOptContainerTitleUp: quesOptContainerTitleUp,
        quesParseContainer: quesParseContainer,
        loadTips: loadTips,
        loadErrorComp: loadErrorComp,
        btnUnclick: btnUnclick$1,
        circleDot: circleDot,
        errTitle: errTitle,
        loadErrorMsgTitle: loadErrorMsgTitle,
        firstViewPa: firstViewPa,
        firstView: firstView,
        fvText: fvText,
        textContainer: textContainer,
        fvcBtn: fvcBtn,
        iframeClass: iframeClass,
        menu: menu,
        wMask: wMask,
        wTitle: wTitle,
        wBtnContainer: wBtnContainer,
        menuWindowBtn: menuWindowBtn,
        menuWindowBtnImg: menuWindowBtnImg,
        menuBtnText: menuBtnText,
        menuBtnContainer: menuBtnContainer,
        guideMask: guideMask,
        kewtTitlev2Text: kewtTitlev2Text,
        headImage: headImage,
        userName: userName,
        userId: userId,
        leftFooter: leftFooter,
        leftFooterElement: leftFooterElement,
        leftComponent: leftComponent$1,
        blueFBtn: blueFBtn,
        nopageLst: nopageLst,
        nopageLstTitle: nopageLstTitle,
        nopageContainer: nopageContainer,
        ordiBtn: ordiBtn,
        activateInfoBox: activateInfoBox,
        activateInfoKvV: activateInfoKvV,
        'default': style,
        stylesheet: stylesheet$a
    });

    var homeworkComponent = "homeworkview_homework-component__mo93F";
    var titleUpComponentImage = "homeworkview_title-up-component-image__nns11";
    var titleUpBasicInfo = "homeworkview_title-up-basic-info__RP4xz";
    var titleUpId = "homeworkview_title-up-id__TVRtb";
    var titleUpContent = "homeworkview_title-up-content__whgOi";
    var titleUpProgress = "homeworkview_title-up-progress__qRh0Z";
    var titleUpProgressDetail = "homeworkview_title-up-progress-detail__lYaT9";
    var titleUpProgressDetailRight = "homeworkview_title-up-progress-detail-right__0jip7";
    var bodyComponent = "homeworkview_body-component__1Bs0-";
    var bodyQuesAreaComponent = "homeworkview_body-ques-area-component__OYzBB";
    var bodyQuessComponent = "homeworkview_body-quess-component__LllxD";
    var bodyQuesOptionDot = "homeworkview_body-ques-option-dot__8NTQz";
    var bodyQuesOptionDotClicked = "homeworkview_body-ques-option-dot-clicked__fWJbF";
    var homeworkLeftComponent = "homeworkview_homework-left-component__I1MY4";
    var homeworkLeftComponentElement = "homeworkview_homework-left-component-element__CxR51";
    var homeworkQuesComponentEle = "homeworkview_homework-ques-component-ele__QazvT";
    var homeworkQuesComponent = "homeworkview_homework-ques-component__ZhVqo";
    var homeworkQuesTitleComponent = "homeworkview_homework-ques-title-component__uuyno";
    var homeworkQuesId = "homeworkview_homework-ques-id__IHQ6q";
    var homeworkQuesType = "homeworkview_homework-ques-type__EpnzO";
    var homeworkQuesTitleLeft = "homeworkview_homework-ques-title-left__0RCAi";
    var homeworkQuesContent = "homeworkview_homework-ques-content__m2HRN";
    var homeworkQuesOptions = "homeworkview_homework-ques-options__dVIvU";
    var homeworkOptionBox = "homeworkview_homework-option-box__aqZLj";
    var optionBoxOptionText = "homeworkview_option-box-option-text__HCRw9";
    var optionBoxOptionNotCorrectText = "homeworkview_option-box-option-not-correct-text__5Dl4S";
    var optionBoxOptionCorrectText = "homeworkview_option-box-option-correct-text__Jyio3";
    var optionBoxOptionContent = "homeworkview_option-box-option-content__PD8j-";
    var homeworkChildQuestion = "homeworkview_homework-child-question__6p7r8";
    var quesParse = "homeworkview_ques-parse__CnWbV";
    var quesAnalyse = "homeworkview_ques-analyse__9wgWc";
    var analyzeContainer = "homeworkview_analyze-container__Q8gxq";
    var answerContainer = "homeworkview_answer-container__TeQTw";
    var analyzeBack = "homeworkview_analyze-back__2uwbg";
    var homeworkSubmitBtn = "homeworkview_homework-submit-btn__-efnE";
    var footFunc = "homeworkview_foot-func__8REaZ";
    var footFuncLeft = "homeworkview_foot-func-left__ny7n7";
    var footFuncRight = "homeworkview_foot-func-right__nirpk";
    var submitUnclickable = "homeworkview_submit-unclickable__HAVVs";
    var lockedC = "homeworkview_locked-c__Hot2q";
    var css_248z$b = ".homeworkview_homework-component__mo93F {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.homeworkview_title-up-component-image__nns11 {\r\n    height: 85px;\r\n}\r\n\r\n.homeworkview_title-up-basic-info__RP4xz {\r\n    flex: 1;\r\n    margin-left: 10px;\r\n    line-height: 15px;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.homeworkview_title-up-id__TVRtb {\r\n    color: #635f5f;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n}\r\n\r\n.homeworkview_title-up-content__whgOi {\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n    text-overflow: ellipsis;\r\n    word-break: break-all;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 375px;\r\n\r\n}\r\n\r\n.homeworkview_title-up-progress__qRh0Z {\r\n    font-size: 12px;\r\n    color: gray;\r\n    font-weight: bolder;\r\n}\r\n\r\n.homeworkview_title-up-progress-detail__lYaT9 {\r\n    margin-top: 2px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.homeworkview_title-up-progress-detail-right__0jip7 {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n}\r\n\r\n.homeworkview_body-component__1Bs0- {\r\n    margin-top: 5px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 5px gray;\r\n    height: 450px;\r\n    overflow-x: hidden;\r\n    display: flex;\r\n}\r\n\r\n.homeworkview_body-ques-area-component__OYzBB {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    padding: 5px;\r\n    scrollbar-width: none;\r\n}\r\n\r\n.homeworkview_body-ques-area-component__OYzBB::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.homeworkview_body-quess-component__LllxD {\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    scrollbar-width: none;\r\n    box-shadow: 0 0 4px gray;\r\n}\r\n\r\n.homeworkview_body-quess-component__LllxD::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.homeworkview_body-ques-option-dot__8NTQz,.homeworkview_body-ques-option-dot-clicked__fWJbF {\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 3px;\r\n    margin-bottom: 3px;\r\n    background-color: #00b7ff84;\r\n    border-radius: 50%;\r\n    white-space: nowrap;\r\n    box-shadow: 0 0 5px gray;\r\n    transition: background-color 100ms;\r\n}\r\n\r\n.homeworkview_body-ques-option-dot__8NTQz:hover {\r\n    background-color: #67fdf176;\r\n}\r\n\r\n.homeworkview_body-ques-option-dot-clicked__fWJbF {\r\n    background-color: #17dafc93;\r\n}\r\n\r\n.homeworkview_homework-left-component__I1MY4 {\r\n    margin-left: auto;\r\n    height: 100%;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.homeworkview_homework-left-component-element__CxR51 {\r\n    margin-left: 3px;\r\n}\r\n\r\n.homeworkview_homework-ques-component-ele__QazvT {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.homeworkview_homework-ques-component__ZhVqo {\r\n\r\n}\r\n\r\n.homeworkview_homework-ques-title-component__uuyno {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.homeworkview_homework-ques-id__IHQ6q {\r\n    background-color: #3288f533\r\n}\r\n\r\n.homeworkview_homework-ques-type__EpnzO {\r\n    background-color: #3ef9fc33\r\n}\r\n\r\n.homeworkview_homework-ques-title-left__0RCAi {\r\n    margin-left: auto;\r\n    height: 100%;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.homeworkview_homework-ques-content__m2HRN, .homeworkview_homework-ques-options__dVIvU {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    box-sizing: border-box;\r\n    padding: 2px 4px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.homeworkview_homework-ques-options__dVIvU {\r\n    padding: 2px;\r\n}\r\n\r\n.homeworkview_homework-option-box__aqZLj {\r\n    min-height: 40px;\r\n    border: 1px solid #ffffff30;\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n}\r\n\r\n.homeworkview_option-box-option-text__HCRw9 {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 30px;\r\n    font-weight: bolder;\r\n    border-top-left-radius: inherit;\r\n    border-bottom-left-radius: inherit;\r\n    font-size: 15px;\r\n    border-right: inherit;\r\n}\r\n\r\n.homeworkview_option-box-option-not-correct-text__5Dl4S {\r\n    background-color: #f2fff2;\r\n}\r\n\r\n.homeworkview_option-box-option-correct-text__Jyio3 {\r\n    background-color: #97e199;\r\n}\r\n\r\n.homeworkview_option-box-option-content__PD8j- {\r\n    flex: 1;\r\n    border-top-right-radius: inherit;\r\n    border-bottom-right-radius: 5px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    align-items: center;\r\n    padding: 3px 7px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.homeworkview_homework-child-question__6p7r8 {\r\n    padding: 3px;\r\n\r\n}\r\n\r\n.homeworkview_ques-parse__CnWbV {\r\n    display:flex;\r\n    align-items: center;\r\n}\r\n\r\n.homeworkview_ques-analyse__9wgWc {\r\n    padding: 5px;\r\n}\r\n\r\n.homeworkview_analyze-container__Q8gxq,.homeworkview_answer-container__TeQTw {\r\n    transform: scale(0.99);\r\n    font-size: 12px;\r\n}\r\n\r\n.homeworkview_analyze-back__2uwbg {\r\n    margin-left: auto;\r\n    font-size: 12px;\r\n    height: 17px;\r\n    border-radius: 7px;\r\n    background-color: #00d9ff;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 0 10px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.homeworkview_homework-submit-btn__-efnE {\r\n    font-size: 12px;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 1px 10px;\r\n    border-radius: 5px;\r\n    transition: background-color 200ms;\r\n}\r\n\r\n.homeworkview_foot-func__8REaZ {\r\n    padding: 5px;\r\n    margin-top: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.homeworkview_foot-func-left__ny7n7 {\r\n\r\n}\r\n\r\n.homeworkview_foot-func-right__nirpk {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n}\r\n\r\n.homeworkview_homework-submit-btn__-efnE:hover {\r\n    background-color: rgba(255, 255, 255, 0.49);\r\n}\r\n\r\n.homeworkview_submit-unclickable__HAVVs {\r\n    font-size: 12px;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 1px 10px;\r\n    border-radius: 5px;\r\n    color: gray;\r\n}\r\n\r\n.homeworkview_locked-c__Hot2q {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}";
    var homeworkview = {"homework-component":"homeworkview_homework-component__mo93F","title-up-component-image":"homeworkview_title-up-component-image__nns11","title-up-basic-info":"homeworkview_title-up-basic-info__RP4xz","title-up-id":"homeworkview_title-up-id__TVRtb","title-up-content":"homeworkview_title-up-content__whgOi","title-up-progress":"homeworkview_title-up-progress__qRh0Z","title-up-progress-detail":"homeworkview_title-up-progress-detail__lYaT9","title-up-progress-detail-right":"homeworkview_title-up-progress-detail-right__0jip7","body-component":"homeworkview_body-component__1Bs0-","body-ques-area-component":"homeworkview_body-ques-area-component__OYzBB","body-quess-component":"homeworkview_body-quess-component__LllxD","body-ques-option-dot":"homeworkview_body-ques-option-dot__8NTQz","body-ques-option-dot-clicked":"homeworkview_body-ques-option-dot-clicked__fWJbF","homework-left-component":"homeworkview_homework-left-component__I1MY4","homework-left-component-element":"homeworkview_homework-left-component-element__CxR51","homework-ques-component-ele":"homeworkview_homework-ques-component-ele__QazvT","homework-ques-component":"homeworkview_homework-ques-component__ZhVqo","homework-ques-title-component":"homeworkview_homework-ques-title-component__uuyno","homework-ques-id":"homeworkview_homework-ques-id__IHQ6q","homework-ques-type":"homeworkview_homework-ques-type__EpnzO","homework-ques-title-left":"homeworkview_homework-ques-title-left__0RCAi","homework-ques-content":"homeworkview_homework-ques-content__m2HRN","homework-ques-options":"homeworkview_homework-ques-options__dVIvU","homework-option-box":"homeworkview_homework-option-box__aqZLj","option-box-option-text":"homeworkview_option-box-option-text__HCRw9","option-box-option-not-correct-text":"homeworkview_option-box-option-not-correct-text__5Dl4S","option-box-option-correct-text":"homeworkview_option-box-option-correct-text__Jyio3","option-box-option-content":"homeworkview_option-box-option-content__PD8j-","homework-child-question":"homeworkview_homework-child-question__6p7r8","ques-parse":"homeworkview_ques-parse__CnWbV","ques-analyse":"homeworkview_ques-analyse__9wgWc","analyze-container":"homeworkview_analyze-container__Q8gxq","answer-container":"homeworkview_answer-container__TeQTw","analyze-back":"homeworkview_analyze-back__2uwbg","homework-submit-btn":"homeworkview_homework-submit-btn__-efnE","foot-func":"homeworkview_foot-func__8REaZ","foot-func-left":"homeworkview_foot-func-left__ny7n7","foot-func-right":"homeworkview_foot-func-right__nirpk","submit-unclickable":"homeworkview_submit-unclickable__HAVVs","locked-c":"homeworkview_locked-c__Hot2q","homeworkComponent":"homeworkview_homework-component__mo93F","titleUpComponentImage":"homeworkview_title-up-component-image__nns11","titleUpBasicInfo":"homeworkview_title-up-basic-info__RP4xz","titleUpId":"homeworkview_title-up-id__TVRtb","titleUpContent":"homeworkview_title-up-content__whgOi","titleUpProgress":"homeworkview_title-up-progress__qRh0Z","titleUpProgressDetail":"homeworkview_title-up-progress-detail__lYaT9","titleUpProgressDetailRight":"homeworkview_title-up-progress-detail-right__0jip7","bodyComponent":"homeworkview_body-component__1Bs0-","bodyQuesAreaComponent":"homeworkview_body-ques-area-component__OYzBB","bodyQuessComponent":"homeworkview_body-quess-component__LllxD","bodyQuesOptionDot":"homeworkview_body-ques-option-dot__8NTQz","bodyQuesOptionDotClicked":"homeworkview_body-ques-option-dot-clicked__fWJbF","homeworkLeftComponent":"homeworkview_homework-left-component__I1MY4","homeworkLeftComponentElement":"homeworkview_homework-left-component-element__CxR51","homeworkQuesComponentEle":"homeworkview_homework-ques-component-ele__QazvT","homeworkQuesComponent":"homeworkview_homework-ques-component__ZhVqo","homeworkQuesTitleComponent":"homeworkview_homework-ques-title-component__uuyno","homeworkQuesId":"homeworkview_homework-ques-id__IHQ6q","homeworkQuesType":"homeworkview_homework-ques-type__EpnzO","homeworkQuesTitleLeft":"homeworkview_homework-ques-title-left__0RCAi","homeworkQuesContent":"homeworkview_homework-ques-content__m2HRN","homeworkQuesOptions":"homeworkview_homework-ques-options__dVIvU","homeworkOptionBox":"homeworkview_homework-option-box__aqZLj","optionBoxOptionText":"homeworkview_option-box-option-text__HCRw9","optionBoxOptionNotCorrectText":"homeworkview_option-box-option-not-correct-text__5Dl4S","optionBoxOptionCorrectText":"homeworkview_option-box-option-correct-text__Jyio3","optionBoxOptionContent":"homeworkview_option-box-option-content__PD8j-","homeworkChildQuestion":"homeworkview_homework-child-question__6p7r8","quesParse":"homeworkview_ques-parse__CnWbV","quesAnalyse":"homeworkview_ques-analyse__9wgWc","analyzeContainer":"homeworkview_analyze-container__Q8gxq","answerContainer":"homeworkview_answer-container__TeQTw","analyzeBack":"homeworkview_analyze-back__2uwbg","homeworkSubmitBtn":"homeworkview_homework-submit-btn__-efnE","footFunc":"homeworkview_foot-func__8REaZ","footFuncLeft":"homeworkview_foot-func-left__ny7n7","footFuncRight":"homeworkview_foot-func-right__nirpk","submitUnclickable":"homeworkview_submit-unclickable__HAVVs","lockedC":"homeworkview_locked-c__Hot2q"};
    var stylesheet$9=".homeworkview_homework-component__mo93F {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.homeworkview_title-up-component-image__nns11 {\r\n    height: 85px;\r\n}\r\n\r\n.homeworkview_title-up-basic-info__RP4xz {\r\n    flex: 1;\r\n    margin-left: 10px;\r\n    line-height: 15px;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.homeworkview_title-up-id__TVRtb {\r\n    color: #635f5f;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n}\r\n\r\n.homeworkview_title-up-content__whgOi {\r\n    font-size: 15px;\r\n    font-weight: bolder;\r\n    text-overflow: ellipsis;\r\n    word-break: break-all;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 375px;\r\n\r\n}\r\n\r\n.homeworkview_title-up-progress__qRh0Z {\r\n    font-size: 12px;\r\n    color: gray;\r\n    font-weight: bolder;\r\n}\r\n\r\n.homeworkview_title-up-progress-detail__lYaT9 {\r\n    margin-top: 2px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.homeworkview_title-up-progress-detail-right__0jip7 {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n}\r\n\r\n.homeworkview_body-component__1Bs0- {\r\n    margin-top: 5px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 5px gray;\r\n    height: 450px;\r\n    overflow-x: hidden;\r\n    display: flex;\r\n}\r\n\r\n.homeworkview_body-ques-area-component__OYzBB {\r\n    flex: 1;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    padding: 5px;\r\n    scrollbar-width: none;\r\n}\r\n\r\n.homeworkview_body-ques-area-component__OYzBB::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.homeworkview_body-quess-component__LllxD {\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    scrollbar-width: none;\r\n    box-shadow: 0 0 4px gray;\r\n}\r\n\r\n.homeworkview_body-quess-component__LllxD::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.homeworkview_body-ques-option-dot__8NTQz,.homeworkview_body-ques-option-dot-clicked__fWJbF {\r\n    width: 25px;\r\n    height: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 3px;\r\n    margin-bottom: 3px;\r\n    background-color: #00b7ff84;\r\n    border-radius: 50%;\r\n    white-space: nowrap;\r\n    box-shadow: 0 0 5px gray;\r\n    transition: background-color 100ms;\r\n}\r\n\r\n.homeworkview_body-ques-option-dot__8NTQz:hover {\r\n    background-color: #67fdf176;\r\n}\r\n\r\n.homeworkview_body-ques-option-dot-clicked__fWJbF {\r\n    background-color: #17dafc93;\r\n}\r\n\r\n.homeworkview_homework-left-component__I1MY4 {\r\n    margin-left: auto;\r\n    height: 100%;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.homeworkview_homework-left-component-element__CxR51 {\r\n    margin-left: 3px;\r\n}\r\n\r\n.homeworkview_homework-ques-component-ele__QazvT {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.homeworkview_homework-ques-component__ZhVqo {\r\n\r\n}\r\n\r\n.homeworkview_homework-ques-title-component__uuyno {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.homeworkview_homework-ques-id__IHQ6q {\r\n    background-color: #3288f533\r\n}\r\n\r\n.homeworkview_homework-ques-type__EpnzO {\r\n    background-color: #3ef9fc33\r\n}\r\n\r\n.homeworkview_homework-ques-title-left__0RCAi {\r\n    margin-left: auto;\r\n    height: 100%;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.homeworkview_homework-ques-content__m2HRN, .homeworkview_homework-ques-options__dVIvU {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    box-sizing: border-box;\r\n    padding: 2px 4px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.homeworkview_homework-ques-options__dVIvU {\r\n    padding: 2px;\r\n}\r\n\r\n.homeworkview_homework-option-box__aqZLj {\r\n    min-height: 40px;\r\n    border: 1px solid #ffffff30;\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n}\r\n\r\n.homeworkview_option-box-option-text__HCRw9 {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 30px;\r\n    font-weight: bolder;\r\n    border-top-left-radius: inherit;\r\n    border-bottom-left-radius: inherit;\r\n    font-size: 15px;\r\n    border-right: inherit;\r\n}\r\n\r\n.homeworkview_option-box-option-not-correct-text__5Dl4S {\r\n    background-color: #f2fff2;\r\n}\r\n\r\n.homeworkview_option-box-option-correct-text__Jyio3 {\r\n    background-color: #97e199;\r\n}\r\n\r\n.homeworkview_option-box-option-content__PD8j- {\r\n    flex: 1;\r\n    border-top-right-radius: inherit;\r\n    border-bottom-right-radius: 5px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    align-items: center;\r\n    padding: 3px 7px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.homeworkview_homework-child-question__6p7r8 {\r\n    padding: 3px;\r\n\r\n}\r\n\r\n.homeworkview_ques-parse__CnWbV {\r\n    display:flex;\r\n    align-items: center;\r\n}\r\n\r\n.homeworkview_ques-analyse__9wgWc {\r\n    padding: 5px;\r\n}\r\n\r\n.homeworkview_analyze-container__Q8gxq,.homeworkview_answer-container__TeQTw {\r\n    transform: scale(0.99);\r\n    font-size: 12px;\r\n}\r\n\r\n.homeworkview_analyze-back__2uwbg {\r\n    margin-left: auto;\r\n    font-size: 12px;\r\n    height: 17px;\r\n    border-radius: 7px;\r\n    background-color: #00d9ff;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 0 10px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.homeworkview_homework-submit-btn__-efnE {\r\n    font-size: 12px;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 1px 10px;\r\n    border-radius: 5px;\r\n    transition: background-color 200ms;\r\n}\r\n\r\n.homeworkview_foot-func__8REaZ {\r\n    padding: 5px;\r\n    margin-top: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.homeworkview_foot-func-left__ny7n7 {\r\n\r\n}\r\n\r\n.homeworkview_foot-func-right__nirpk {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n}\r\n\r\n.homeworkview_homework-submit-btn__-efnE:hover {\r\n    background-color: rgba(255, 255, 255, 0.49);\r\n}\r\n\r\n.homeworkview_submit-unclickable__HAVVs {\r\n    font-size: 12px;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 1px 10px;\r\n    border-radius: 5px;\r\n    color: gray;\r\n}\r\n\r\n.homeworkview_locked-c__Hot2q {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}";
    styleInject(css_248z$b);

    var homeworkcss = /*#__PURE__*/Object.freeze({
        __proto__: null,
        homeworkComponent: homeworkComponent,
        titleUpComponentImage: titleUpComponentImage,
        titleUpBasicInfo: titleUpBasicInfo,
        titleUpId: titleUpId,
        titleUpContent: titleUpContent,
        titleUpProgress: titleUpProgress,
        titleUpProgressDetail: titleUpProgressDetail,
        titleUpProgressDetailRight: titleUpProgressDetailRight,
        bodyComponent: bodyComponent,
        bodyQuesAreaComponent: bodyQuesAreaComponent,
        bodyQuessComponent: bodyQuessComponent,
        bodyQuesOptionDot: bodyQuesOptionDot,
        bodyQuesOptionDotClicked: bodyQuesOptionDotClicked,
        homeworkLeftComponent: homeworkLeftComponent,
        homeworkLeftComponentElement: homeworkLeftComponentElement,
        homeworkQuesComponentEle: homeworkQuesComponentEle,
        homeworkQuesComponent: homeworkQuesComponent,
        homeworkQuesTitleComponent: homeworkQuesTitleComponent,
        homeworkQuesId: homeworkQuesId,
        homeworkQuesType: homeworkQuesType,
        homeworkQuesTitleLeft: homeworkQuesTitleLeft,
        homeworkQuesContent: homeworkQuesContent,
        homeworkQuesOptions: homeworkQuesOptions,
        homeworkOptionBox: homeworkOptionBox,
        optionBoxOptionText: optionBoxOptionText,
        optionBoxOptionNotCorrectText: optionBoxOptionNotCorrectText,
        optionBoxOptionCorrectText: optionBoxOptionCorrectText,
        optionBoxOptionContent: optionBoxOptionContent,
        homeworkChildQuestion: homeworkChildQuestion,
        quesParse: quesParse,
        quesAnalyse: quesAnalyse,
        analyzeContainer: analyzeContainer,
        answerContainer: answerContainer,
        analyzeBack: analyzeBack,
        homeworkSubmitBtn: homeworkSubmitBtn,
        footFunc: footFunc,
        footFuncLeft: footFuncLeft,
        footFuncRight: footFuncRight,
        submitUnclickable: submitUnclickable,
        lockedC: lockedC,
        'default': homeworkview,
        stylesheet: stylesheet$9
    });

    var progressBarIn = "progress_bar_progress-bar-in__zjvc5";
    var progressBarOut = "progress_bar_progress-bar-out__zDXBU";
    var progressText = "progress_bar_progress-text__NZfRu";
    var css_248z$a = ".progress_bar_progress-bar-in__zjvc5 {\r\n    background-color: #00fff8;\r\n    border-radius: inherit;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-idnex: 1;\r\n    width: 0%;\r\n}\r\n\r\n.progress_bar_progress-bar-out__zDXBU {\r\n    position: relative;\r\n    background-color: rgb(128,128,128,0.7);\r\n    border-radius: 5px;\r\n    height: 7px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.progress_bar_progress-text__NZfRu {\r\n    color: black;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    z-index: 2;\r\n    position: relative;\r\n}";
    var progress_bar = {"progress-bar-in":"progress_bar_progress-bar-in__zjvc5","progress-bar-out":"progress_bar_progress-bar-out__zDXBU","progress-text":"progress_bar_progress-text__NZfRu","progressBarIn":"progress_bar_progress-bar-in__zjvc5","progressBarOut":"progress_bar_progress-bar-out__zDXBU","progressText":"progress_bar_progress-text__NZfRu"};
    var stylesheet$8=".progress_bar_progress-bar-in__zjvc5 {\r\n    background-color: #00fff8;\r\n    border-radius: inherit;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-idnex: 1;\r\n    width: 0%;\r\n}\r\n\r\n.progress_bar_progress-bar-out__zDXBU {\r\n    position: relative;\r\n    background-color: rgb(128,128,128,0.7);\r\n    border-radius: 5px;\r\n    height: 7px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.progress_bar_progress-text__NZfRu {\r\n    color: black;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    z-index: 2;\r\n    position: relative;\r\n}";
    styleInject(css_248z$a);

    var progress_bar$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        progressBarIn: progressBarIn,
        progressBarOut: progressBarOut,
        progressText: progressText,
        'default': progress_bar,
        stylesheet: stylesheet$8
    });

    var quesNumberCircle = "circles_ques-number-circle__sEzJF";
    var btnRed = "circles_btn-red__-Mc6B";
    var btnGreen = "circles_btn-green__u62Jn";
    var btnBlue = "circles_btn-blue__fHU6L";
    var btnYellow = "circles_btn-yellow__2c--Q";
    var btnUnclick = "circles_btn-unclick__XU08h";
    var btnPurple = "circles_btn-purple__Mn92q";
    var css_248z$9 = ".circles_ques-number-circle__sEzJF {\r\n    height: 100%;\r\n    /* width: 14px; */\r\n    border-radius: 7px;\r\n    padding: 0 10px;\r\n    /* background-color: red; */\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    box-shadow: 0 0 2px 1px gray;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n\r\n.circles_btn-red__-Mc6B {\r\n    background-color: #ca0404;\r\n    color:white;\r\n}\r\n\r\n.circles_btn-red__-Mc6B>svg {\r\n    fill: white;\r\n}\r\n\r\n.circles_btn-red__-Mc6B:hover {\r\n    background-color: #a20101;\r\n    box-shadow: 0 0 3px gray;\r\n}\r\n\r\n.circles_btn-green__u62Jn {\r\n    color: white;\r\n    background-color: #00d000;\r\n}\r\n\r\n.circles_btn-blue__fHU6L {\r\n    color: white;\r\n    background-color: #41d0ff;\r\n}\r\n\r\n.circles_btn-green__u62Jn:hover {\r\n    color: white;\r\n    background-color: #029502;\r\n}\r\n\r\n.circles_btn-yellow__2c--Q {\r\n    background-color: #f8ac25;\r\n}\r\n\r\n.circles_btn-yellow__2c--Q:hover {\r\n    background-color: #e19404;\r\n}\r\n\r\n.circles_btn-blue__fHU6L:hover {\r\n    background-color: #00aee7;\r\n}\r\n\r\n.circles_btn-unclick__XU08h:hover {\r\n    background-color: gray;\r\n}\r\n\r\n.circles_btn-purple__Mn92q {\r\n    background-color: #ff09ff;\r\n}\r\n\r\n.circles_btn-purple__Mn92q:hover {\r\n    color: white;\r\n    background-color: #b404b4;\r\n}";
    var circles = {"ques-number-circle":"circles_ques-number-circle__sEzJF","btn-red":"circles_btn-red__-Mc6B","btn-green":"circles_btn-green__u62Jn","btn-blue":"circles_btn-blue__fHU6L","btn-yellow":"circles_btn-yellow__2c--Q","btn-unclick":"circles_btn-unclick__XU08h","btn-purple":"circles_btn-purple__Mn92q","quesNumberCircle":"circles_ques-number-circle__sEzJF","btnRed":"circles_btn-red__-Mc6B","btnGreen":"circles_btn-green__u62Jn","btnBlue":"circles_btn-blue__fHU6L","btnYellow":"circles_btn-yellow__2c--Q","btnUnclick":"circles_btn-unclick__XU08h","btnPurple":"circles_btn-purple__Mn92q"};
    var stylesheet$7=".circles_ques-number-circle__sEzJF {\r\n    height: 100%;\r\n    /* width: 14px; */\r\n    border-radius: 7px;\r\n    padding: 0 10px;\r\n    /* background-color: red; */\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    box-shadow: 0 0 2px 1px gray;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n\r\n.circles_btn-red__-Mc6B {\r\n    background-color: #ca0404;\r\n    color:white;\r\n}\r\n\r\n.circles_btn-red__-Mc6B>svg {\r\n    fill: white;\r\n}\r\n\r\n.circles_btn-red__-Mc6B:hover {\r\n    background-color: #a20101;\r\n    box-shadow: 0 0 3px gray;\r\n}\r\n\r\n.circles_btn-green__u62Jn {\r\n    color: white;\r\n    background-color: #00d000;\r\n}\r\n\r\n.circles_btn-blue__fHU6L {\r\n    color: white;\r\n    background-color: #41d0ff;\r\n}\r\n\r\n.circles_btn-green__u62Jn:hover {\r\n    color: white;\r\n    background-color: #029502;\r\n}\r\n\r\n.circles_btn-yellow__2c--Q {\r\n    background-color: #f8ac25;\r\n}\r\n\r\n.circles_btn-yellow__2c--Q:hover {\r\n    background-color: #e19404;\r\n}\r\n\r\n.circles_btn-blue__fHU6L:hover {\r\n    background-color: #00aee7;\r\n}\r\n\r\n.circles_btn-unclick__XU08h:hover {\r\n    background-color: gray;\r\n}\r\n\r\n.circles_btn-purple__Mn92q {\r\n    background-color: #ff09ff;\r\n}\r\n\r\n.circles_btn-purple__Mn92q:hover {\r\n    color: white;\r\n    background-color: #b404b4;\r\n}";
    styleInject(css_248z$9);

    var circle = /*#__PURE__*/Object.freeze({
        __proto__: null,
        quesNumberCircle: quesNumberCircle,
        btnRed: btnRed,
        btnGreen: btnGreen,
        btnBlue: btnBlue,
        btnYellow: btnYellow,
        btnUnclick: btnUnclick,
        btnPurple: btnPurple,
        'default': circles,
        stylesheet: stylesheet$7
    });

    var loadingSingleContainer = "wait_loading-single-container__KwnOu";
    var loadingSingle = "wait_loading-single__lBnxS";
    var loadingC = "wait_loading-c__YdyYw";
    var loading = "wait_loading__1GvKz";
    var loadingText = "wait_loading-text__1fIH1";
    var loadingSingleL = "wait_loading-single-l__-lz4o";
    var css_248z$8 = ".wait_loading-single-container__KwnOu {\r\n    height: inherit;\r\n    width: inherit;\r\n    position: absolute;\r\n}\r\n\r\n.wait_loading-single__lBnxS {\r\n    height: 35%;\r\n    width: 100%;\r\n    background-color: #80808087;\r\n    border-radius: 6px;\r\n    box-shadow: 0 0 2px gray;\r\n}\r\n\r\n.wait_loading-c__YdyYw {\r\n    position: relative;\r\n    height: 40px;\r\n    width: 5px;\r\n}\r\n\r\n.wait_loading__1GvKz {\r\n    display: flex;\r\n    padding: 10px 10px;\r\n    box-shadow: 0 0 2px gray;\r\n    background-color: #ffffff99;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    border-radius: 5px;\r\n    opacity: 0;\r\n    marginBottom: 100px;\r\n    width: 150px;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.wait_loading-text__1fIH1 {\r\n    text-align: center;\r\n    font-size: 14px;\r\n    margin-top: 5px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.wait_loading-single-l__-lz4o {\r\n    background-color: white;\r\n}";
    var wait = {"loading-single-container":"wait_loading-single-container__KwnOu","loading-single":"wait_loading-single__lBnxS","loading-c":"wait_loading-c__YdyYw","loading":"wait_loading__1GvKz","loading-text":"wait_loading-text__1fIH1","loading-single-l":"wait_loading-single-l__-lz4o","loadingSingleContainer":"wait_loading-single-container__KwnOu","loadingSingle":"wait_loading-single__lBnxS","loadingC":"wait_loading-c__YdyYw","loadingText":"wait_loading-text__1fIH1","loadingSingleL":"wait_loading-single-l__-lz4o"};
    var stylesheet$6=".wait_loading-single-container__KwnOu {\r\n    height: inherit;\r\n    width: inherit;\r\n    position: absolute;\r\n}\r\n\r\n.wait_loading-single__lBnxS {\r\n    height: 35%;\r\n    width: 100%;\r\n    background-color: #80808087;\r\n    border-radius: 6px;\r\n    box-shadow: 0 0 2px gray;\r\n}\r\n\r\n.wait_loading-c__YdyYw {\r\n    position: relative;\r\n    height: 40px;\r\n    width: 5px;\r\n}\r\n\r\n.wait_loading__1GvKz {\r\n    display: flex;\r\n    padding: 10px 10px;\r\n    box-shadow: 0 0 2px gray;\r\n    background-color: #ffffff99;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    border-radius: 5px;\r\n    opacity: 0;\r\n    marginBottom: 100px;\r\n    width: 150px;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.wait_loading-text__1fIH1 {\r\n    text-align: center;\r\n    font-size: 14px;\r\n    margin-top: 5px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.wait_loading-single-l__-lz4o {\r\n    background-color: white;\r\n}";
    styleInject(css_248z$8);

    var wait$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        loadingSingleContainer: loadingSingleContainer,
        loadingSingle: loadingSingle,
        loadingC: loadingC,
        loading: loading,
        loadingText: loadingText,
        loadingSingleL: loadingSingleL,
        'default': wait,
        stylesheet: stylesheet$6
    });

    var viewOptions = "multiselection_view-options__GpfJu";
    var viewOption = "multiselection_view-option__xYfvn";
    var viewOptionClicked = "multiselection_view-option-clicked__I4kk5";
    var multiView = "multiselection_multi-view__9T-zp";
    var multiViewBox = "multiselection_multi-view-box__Bk272";
    var css_248z$7 = "\r\n.multiselection_view-options__GpfJu {\r\n    text-decoration: none;\r\n    list-style: none;\r\n    display: flex;\r\n    padding: 4px 0;\r\n}\r\n\r\n.multiselection_view-option__xYfvn,.multiselection_view-option-clicked__I4kk5 {\r\n    padding: 3px 17px;\r\n    list-style: none;\r\n    font-size: 12px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px gray;\r\n    margin-right: 7px;\r\n}\r\n\r\n.multiselection_multi-view__9T-zp {\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    justify-content: center;\r\n    box-shadow: 0 0 3px gray;\r\n}\r\n\r\n.multiselection_view-option-clicked__I4kk5 {\r\n    background-color: gray;\r\n    color: white;\r\n}\r\n\r\n.multiselection_view-option__xYfvn:hover {\r\n    background-color: #bababa;\r\n}\r\n\r\n.multiselection_multi-view-box__Bk272 {\r\n    position: relative;\r\n}\r\n";
    var multiselection = {"view-options":"multiselection_view-options__GpfJu","view-option":"multiselection_view-option__xYfvn","view-option-clicked":"multiselection_view-option-clicked__I4kk5","multi-view":"multiselection_multi-view__9T-zp","multi-view-box":"multiselection_multi-view-box__Bk272","viewOptions":"multiselection_view-options__GpfJu","viewOption":"multiselection_view-option__xYfvn","viewOptionClicked":"multiselection_view-option-clicked__I4kk5","multiView":"multiselection_multi-view__9T-zp","multiViewBox":"multiselection_multi-view-box__Bk272"};
    var stylesheet$5="\r\n.multiselection_view-options__GpfJu {\r\n    text-decoration: none;\r\n    list-style: none;\r\n    display: flex;\r\n    padding: 4px 0;\r\n}\r\n\r\n.multiselection_view-option__xYfvn,.multiselection_view-option-clicked__I4kk5 {\r\n    padding: 3px 17px;\r\n    list-style: none;\r\n    font-size: 12px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px gray;\r\n    margin-right: 7px;\r\n}\r\n\r\n.multiselection_multi-view__9T-zp {\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    justify-content: center;\r\n    box-shadow: 0 0 3px gray;\r\n}\r\n\r\n.multiselection_view-option-clicked__I4kk5 {\r\n    background-color: gray;\r\n    color: white;\r\n}\r\n\r\n.multiselection_view-option__xYfvn:hover {\r\n    background-color: #bababa;\r\n}\r\n\r\n.multiselection_multi-view-box__Bk272 {\r\n    position: relative;\r\n}\r\n";
    styleInject(css_248z$7);

    var ms_style = /*#__PURE__*/Object.freeze({
        __proto__: null,
        viewOptions: viewOptions,
        viewOption: viewOption,
        viewOptionClicked: viewOptionClicked,
        multiView: multiView,
        multiViewBox: multiViewBox,
        'default': multiselection,
        stylesheet: stylesheet$5
    });

    var taskHeadComponent = "task_view_task-head-component__D-bUR";
    var taskInfo = "task_view_task-info__6m5yp";
    var taskInfoBg = "task_view_task-info-bg__LpHX2";
    var taskInfoBgImg = "task_view_task-info-bg-img__VtyU8";
    var taskTitle = "task_view_task-title__Vvpno";
    var taskDate = "task_view_task-date__TWyLN";
    var taskProgCC = "task_view_task-prog-c-c__Gcsh2";
    var taskProgC = "task_view_task-prog-c__-Ykfj";
    var taskProgR = "task_view_task-prog-r__pehk9";
    var taskProgL = "task_view_task-prog-l__t-0rl";
    var taskWindow = "task_view_task-window__Vd5aY";
    var taskWindowLeftBar = "task_view_task-window-left-bar__9874f";
    var taskWindowRightBar = "task_view_task-window-right-bar__Udcz9";
    var taskWindowTitle = "task_view_task-window-title__b-CJo";
    var taskWindowChoices = "task_view_task-window-choices__L4226";
    var taskWindowSelected = "task_view_task-window-selected__qqSiX";
    var taskWindowChoice = "task_view_task-window-choice__rtw2x";
    var taskWindowNotSelected = "task_view_task-window-not-selected__uJBnq";
    var taskCourseElement = "task_view_task-course-element__7EE8X";
    var taskCourseEleright = "task_view_task-course-eleright__7nafI";
    var taskCourseTitle = "task_view_task-course-title__7j-eP";
    var taskCourseBasicInfo = "task_view_task-course-basic-info__QfQCR";
    var taskInfoCircle = "task_view_task-info-circle__d0vzV";
    var taskSelectionBox = "task_view_task-selection-box__q9-Pr";
    var taskTime = "task_view_task-time__UO0Uq";
    var taskSelection = "task_view_task-selection__wiXVF";
    var taskFooter = "task_view_task-footer__-c93o";
    var css_248z$6 = ".task_view_task-head-component__D-bUR {\r\n    background-size: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\n.task_view_task-info__6m5yp {\r\n    width: 100%;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.task_view_task-info-bg__LpHX2 {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 0;\r\n}\r\n\r\n.task_view_task-info-bg-img__VtyU8 {\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 0;\r\n    border-radius: 5px\r\n}\r\n\r\n.task_view_task-title__Vvpno {\r\n    font-weight: bolder;\r\n    color: black;\r\n}\r\n\r\n.task_view_task-date__TWyLN {\r\n    margin-top: 3px;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n\r\n.task_view_task-prog-c-c__Gcsh2 {\r\n    width: 100%;\r\n    font-size: 12px;\r\n}\r\n\r\n.task_view_task-prog-c__-Ykfj {\r\n    display: flex;\r\n    margin-bottom: 3px;\r\n    color: white;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    /* scale: 0.9; */\r\n}\r\n\r\n.task_view_task-prog-r__pehk9 {\r\n    margin-left: auto;\r\n}\r\n\r\n.task_view_task-prog-l__t-0rl {\r\n\r\n}\r\n\r\n.task_view_task-window__Vd5aY {\r\n    width: 100%;\r\n    display: flex;\r\n    border-radius: 5px;\r\n    height: 300px;\r\n    overflow-y: auto;\r\n    background-color: #1c1d1f;\r\n}\r\n\r\n.task_view_task-window-left-bar__9874f {\r\n    width: 25%;\r\n    height: 100%;\r\n    border-top-left-radius: inherit;\r\n    border-bottom-left-radius: inherit;\r\n    background-color: #44484c;\r\n    overflow-y:auto;\r\n}\r\n\r\n.task_view_task-window-right-bar__Udcz9 {\r\n    height:100%;\r\n    width: 75%;\r\n    border-top-right-radius: inherit;\r\n    border-bottom-right-radius: inherit;\r\n    background-color: #1c1d1f;\r\n    overflow-y:auto;\r\n}\r\n\r\n.task_view_task-window-title__b-CJo {\r\n    margin-top: 20px;\r\n    margin-left: 8px;\r\n    font-size: 25px;\r\n    padding-bottom: 7px;\r\n    color: wheat;\r\n}\r\n\r\n.task_view_task-window-choices__L4226 {\r\n    margin-bottom: 10px;\r\n    color: #ffffffde;\r\n}\r\n\r\n.task_view_task-window-selected__qqSiX {\r\n    background-color: #272727c7;\r\n    box-shadow: 0 0 5px gray;\r\n}\r\n\r\n.task_view_task-window-choice__rtw2x {\r\n    padding: 5px 5px 5px 10px;\r\n}\r\n\r\n.task_view_task-window-not-selected__uJBnq {\r\n    background-color: inherit;\r\n    transition: background-color 200ms;\r\n}\r\n\r\n.task_view_task-window-not-selected__uJBnq:hover {\r\n    background-color: #80808059;\r\n}\r\n\r\n.task_view_task-course-element__7EE8X {\r\n    padding: 7px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task_view_task-course-eleright__7nafI {\r\n\r\n    margin-left: 5px;\r\n    flex: 01;\r\n\r\n}\r\n\r\n.task_view_task-course-title__7j-eP {\r\n\r\n    font-weight: bolder;\r\n    color: #bebebe;\r\n    font-size: 13px;\r\n    width:230px;\r\n    overflow:hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.task_view_task-course-basic-info__QfQCR {\r\n\r\n    display: flex;\r\n\r\n}\r\n\r\n.task_view_task-info-circle__d0vzV {\r\n\r\n    font-size: 9px;\r\n    padding: 2px 5px;\r\n    background-color: #636363;\r\n    border-radius: 3px;\r\n    color: white;\r\n    margin-top: 2px;\r\n\r\n}\r\n\r\n.task_view_task-selection-box__q9-Pr {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n\r\n}\r\n\r\n.task_view_task-time__UO0Uq {\r\n    font-size: 11px;\r\n}\r\n\r\n.task_view_task-selection__wiXVF {\r\n    margin-top: 2px;\r\n}\r\n\r\n.task_view_task-footer__-c93o {\r\n    margin-top: 5px;\r\n    display: flex;\r\n    position: relative;\r\n}\r\n";
    var task_view = {"task-head-component":"task_view_task-head-component__D-bUR","task-info":"task_view_task-info__6m5yp","task-info-bg":"task_view_task-info-bg__LpHX2","task-info-bg-img":"task_view_task-info-bg-img__VtyU8","task-title":"task_view_task-title__Vvpno","task-date":"task_view_task-date__TWyLN","task-prog-c-c":"task_view_task-prog-c-c__Gcsh2","task-prog-c":"task_view_task-prog-c__-Ykfj","task-prog-r":"task_view_task-prog-r__pehk9","task-prog-l":"task_view_task-prog-l__t-0rl","task-window":"task_view_task-window__Vd5aY","task-window-left-bar":"task_view_task-window-left-bar__9874f","task-window-right-bar":"task_view_task-window-right-bar__Udcz9","task-window-title":"task_view_task-window-title__b-CJo","task-window-choices":"task_view_task-window-choices__L4226","task-window-selected":"task_view_task-window-selected__qqSiX","task-window-choice":"task_view_task-window-choice__rtw2x","task-window-not-selected":"task_view_task-window-not-selected__uJBnq","task-course-element":"task_view_task-course-element__7EE8X","task-course-eleright":"task_view_task-course-eleright__7nafI","task-course-title":"task_view_task-course-title__7j-eP","task-course-basic-info":"task_view_task-course-basic-info__QfQCR","task-info-circle":"task_view_task-info-circle__d0vzV","task-selection-box":"task_view_task-selection-box__q9-Pr","task-time":"task_view_task-time__UO0Uq","task-selection":"task_view_task-selection__wiXVF","task-footer":"task_view_task-footer__-c93o","taskHeadComponent":"task_view_task-head-component__D-bUR","taskInfo":"task_view_task-info__6m5yp","taskInfoBg":"task_view_task-info-bg__LpHX2","taskInfoBgImg":"task_view_task-info-bg-img__VtyU8","taskTitle":"task_view_task-title__Vvpno","taskDate":"task_view_task-date__TWyLN","taskProgCC":"task_view_task-prog-c-c__Gcsh2","taskProgC":"task_view_task-prog-c__-Ykfj","taskProgR":"task_view_task-prog-r__pehk9","taskProgL":"task_view_task-prog-l__t-0rl","taskWindow":"task_view_task-window__Vd5aY","taskWindowLeftBar":"task_view_task-window-left-bar__9874f","taskWindowRightBar":"task_view_task-window-right-bar__Udcz9","taskWindowTitle":"task_view_task-window-title__b-CJo","taskWindowChoices":"task_view_task-window-choices__L4226","taskWindowSelected":"task_view_task-window-selected__qqSiX","taskWindowChoice":"task_view_task-window-choice__rtw2x","taskWindowNotSelected":"task_view_task-window-not-selected__uJBnq","taskCourseElement":"task_view_task-course-element__7EE8X","taskCourseEleright":"task_view_task-course-eleright__7nafI","taskCourseTitle":"task_view_task-course-title__7j-eP","taskCourseBasicInfo":"task_view_task-course-basic-info__QfQCR","taskInfoCircle":"task_view_task-info-circle__d0vzV","taskSelectionBox":"task_view_task-selection-box__q9-Pr","taskTime":"task_view_task-time__UO0Uq","taskSelection":"task_view_task-selection__wiXVF","taskFooter":"task_view_task-footer__-c93o"};
    var stylesheet$4=".task_view_task-head-component__D-bUR {\r\n    background-size: 100%;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\n.task_view_task-info__6m5yp {\r\n    width: 100%;\r\n    text-align: center;\r\n    z-index: 1;\r\n}\r\n\r\n.task_view_task-info-bg__LpHX2 {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 0;\r\n}\r\n\r\n.task_view_task-info-bg-img__VtyU8 {\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 0;\r\n    border-radius: 5px\r\n}\r\n\r\n.task_view_task-title__Vvpno {\r\n    font-weight: bolder;\r\n    color: black;\r\n}\r\n\r\n.task_view_task-date__TWyLN {\r\n    margin-top: 3px;\r\n    color: black;\r\n    font-size: 12px;\r\n}\r\n\r\n.task_view_task-prog-c-c__Gcsh2 {\r\n    width: 100%;\r\n    font-size: 12px;\r\n}\r\n\r\n.task_view_task-prog-c__-Ykfj {\r\n    display: flex;\r\n    margin-bottom: 3px;\r\n    color: white;\r\n    font-weight: bolder;\r\n    font-size: 12px;\r\n    /* scale: 0.9; */\r\n}\r\n\r\n.task_view_task-prog-r__pehk9 {\r\n    margin-left: auto;\r\n}\r\n\r\n.task_view_task-prog-l__t-0rl {\r\n\r\n}\r\n\r\n.task_view_task-window__Vd5aY {\r\n    width: 100%;\r\n    display: flex;\r\n    border-radius: 5px;\r\n    height: 300px;\r\n    overflow-y: auto;\r\n    background-color: #1c1d1f;\r\n}\r\n\r\n.task_view_task-window-left-bar__9874f {\r\n    width: 25%;\r\n    height: 100%;\r\n    border-top-left-radius: inherit;\r\n    border-bottom-left-radius: inherit;\r\n    background-color: #44484c;\r\n    overflow-y:auto;\r\n}\r\n\r\n.task_view_task-window-right-bar__Udcz9 {\r\n    height:100%;\r\n    width: 75%;\r\n    border-top-right-radius: inherit;\r\n    border-bottom-right-radius: inherit;\r\n    background-color: #1c1d1f;\r\n    overflow-y:auto;\r\n}\r\n\r\n.task_view_task-window-title__b-CJo {\r\n    margin-top: 20px;\r\n    margin-left: 8px;\r\n    font-size: 25px;\r\n    padding-bottom: 7px;\r\n    color: wheat;\r\n}\r\n\r\n.task_view_task-window-choices__L4226 {\r\n    margin-bottom: 10px;\r\n    color: #ffffffde;\r\n}\r\n\r\n.task_view_task-window-selected__qqSiX {\r\n    background-color: #272727c7;\r\n    box-shadow: 0 0 5px gray;\r\n}\r\n\r\n.task_view_task-window-choice__rtw2x {\r\n    padding: 5px 5px 5px 10px;\r\n}\r\n\r\n.task_view_task-window-not-selected__uJBnq {\r\n    background-color: inherit;\r\n    transition: background-color 200ms;\r\n}\r\n\r\n.task_view_task-window-not-selected__uJBnq:hover {\r\n    background-color: #80808059;\r\n}\r\n\r\n.task_view_task-course-element__7EE8X {\r\n    padding: 7px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task_view_task-course-eleright__7nafI {\r\n\r\n    margin-left: 5px;\r\n    flex: 01;\r\n\r\n}\r\n\r\n.task_view_task-course-title__7j-eP {\r\n\r\n    font-weight: bolder;\r\n    color: #bebebe;\r\n    font-size: 13px;\r\n    width:230px;\r\n    overflow:hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.task_view_task-course-basic-info__QfQCR {\r\n\r\n    display: flex;\r\n\r\n}\r\n\r\n.task_view_task-info-circle__d0vzV {\r\n\r\n    font-size: 9px;\r\n    padding: 2px 5px;\r\n    background-color: #636363;\r\n    border-radius: 3px;\r\n    color: white;\r\n    margin-top: 2px;\r\n\r\n}\r\n\r\n.task_view_task-selection-box__q9-Pr {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n\r\n}\r\n\r\n.task_view_task-time__UO0Uq {\r\n    font-size: 11px;\r\n}\r\n\r\n.task_view_task-selection__wiXVF {\r\n    margin-top: 2px;\r\n}\r\n\r\n.task_view_task-footer__-c93o {\r\n    margin-top: 5px;\r\n    display: flex;\r\n    position: relative;\r\n}\r\n";
    styleInject(css_248z$6);

    var t_style = /*#__PURE__*/Object.freeze({
        __proto__: null,
        taskHeadComponent: taskHeadComponent,
        taskInfo: taskInfo,
        taskInfoBg: taskInfoBg,
        taskInfoBgImg: taskInfoBgImg,
        taskTitle: taskTitle,
        taskDate: taskDate,
        taskProgCC: taskProgCC,
        taskProgC: taskProgC,
        taskProgR: taskProgR,
        taskProgL: taskProgL,
        taskWindow: taskWindow,
        taskWindowLeftBar: taskWindowLeftBar,
        taskWindowRightBar: taskWindowRightBar,
        taskWindowTitle: taskWindowTitle,
        taskWindowChoices: taskWindowChoices,
        taskWindowSelected: taskWindowSelected,
        taskWindowChoice: taskWindowChoice,
        taskWindowNotSelected: taskWindowNotSelected,
        taskCourseElement: taskCourseElement,
        taskCourseEleright: taskCourseEleright,
        taskCourseTitle: taskCourseTitle,
        taskCourseBasicInfo: taskCourseBasicInfo,
        taskInfoCircle: taskInfoCircle,
        taskSelectionBox: taskSelectionBox,
        taskTime: taskTime,
        taskSelection: taskSelection,
        taskFooter: taskFooter,
        'default': task_view,
        stylesheet: stylesheet$4
    });

    var pageMain = "course_view_page-main__Tsrg7";
    var courseImg = "course_view_course-img__z5C24";
    var courseTitle = "course_view_course-title__LzKpP";
    var tag = "course_view_tag__rl68O";
    var tagContainer = "course_view_tag-container__ms-Yx";
    var basicInfoContainer = "course_view_basic-info-container__O5Hxe";
    var basicInfoEntire = "course_view_basic-info-entire__ESuiY";
    var basicInfoEntireLeft = "course_view_basic-info-entire-left__3qzCJ";
    var basicInfoEntireRight = "course_view_basic-info-entire-right__MoxMf";
    var funcBtnsContainer = "course_view_func-btns-container__eiW-P";
    var funcBtn = "course_view_func-btn__71V8q";
    var css_248z$5 = ".course_view_page-main__Tsrg7 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.course_view_course-img__z5C24 {\r\n    height: 100px;\r\n    border-radius: 10px;\r\n    border: 1px dashed;\r\n}\r\n\r\n.course_view_course-title__LzKpP {\r\n    margin-top: 10px;\r\n    font-size: 20px;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n\r\n.course_view_tag__rl68O {\r\n    font-size: 9px;\r\n    padding: 2px 7px;\r\n    background-color: #636363;\r\n    border-radius: 3px;\r\n    color: white;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n}\r\n\r\n.course_view_tag-container__ms-Yx {\r\n    display: flex;\r\n    margin-top: 5px;\r\n}\r\n\r\n.course_view_basic-info-container__O5Hxe {\r\n    margin-top: 10px;\r\n    border: 1px dashed;\r\n    min-width: 300px;\r\n    padding: 3px 5px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.course_view_basic-info-entire__ESuiY {\r\n    font-size: 12px;\r\n    transform-origin: left;\r\n    margin-top: 4px;\r\n    margin-bottom: 4px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.course_view_basic-info-entire-left__3qzCJ {\r\n    font-weight: bolder;\r\n}\r\n\r\n.course_view_basic-info-entire-right__MoxMf {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n    color: #535353;\r\n    scale: 0.95;\r\n    transform-origin: right;\r\n}\r\n\r\n.course_view_func-btns-container__eiW-P {\r\n    margin-top: 10px;\r\n    display: flex;\r\n}\r\n\r\n.course_view_func-btn__71V8q {\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n}";
    styleInject(css_248z$5);

    var title = "log_view_title__SbXzq";
    var logTableContainer = "log_view_log-table-container__RVjR-";
    var logTable = "log_view_log-table__-Eiir";
    var bottom = "log_view_bottom__cvMuY";
    var bottomA = "log_view_bottom-a__GPKQF";
    var css_248z$4 = ".log_view_title__SbXzq {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 40px;\r\n    margin-top: 30px;\r\n    margin-bottom: 10px;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n\r\n}\r\n\r\n.log_view_log-table-container__RVjR- {\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px gray;\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    width: 100%;\r\n    padding: 5px;\r\n    max-height: 400px;\r\n    overflow-y:auto;\r\n}\r\n\r\n.log_view_log-table__-Eiir {\r\n    text-align: center;\r\n    font-size: 11px;\r\n    color: black;\r\n    width: 100%;\r\n}\r\n\r\n.log_view_bottom__cvMuY {\r\n    margin-top: 5px;\r\n}\r\n\r\n.log_view_bottom-a__GPKQF {\r\n    color: #0066ff\r\n}\r\n\r\n.log_view_bottom-a__GPKQF:hover {\r\n    text-decoration: underline;\r\n}\r\n";
    var log_view = {"title":"log_view_title__SbXzq","log-table-container":"log_view_log-table-container__RVjR-","log-table":"log_view_log-table__-Eiir","bottom":"log_view_bottom__cvMuY","bottom-a":"log_view_bottom-a__GPKQF","logTableContainer":"log_view_log-table-container__RVjR-","logTable":"log_view_log-table__-Eiir","bottomA":"log_view_bottom-a__GPKQF"};
    var stylesheet$3=".log_view_title__SbXzq {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 40px;\r\n    margin-top: 30px;\r\n    margin-bottom: 10px;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n\r\n}\r\n\r\n.log_view_log-table-container__RVjR- {\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 5px gray;\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    width: 100%;\r\n    padding: 5px;\r\n    max-height: 400px;\r\n    overflow-y:auto;\r\n}\r\n\r\n.log_view_log-table__-Eiir {\r\n    text-align: center;\r\n    font-size: 11px;\r\n    color: black;\r\n    width: 100%;\r\n}\r\n\r\n.log_view_bottom__cvMuY {\r\n    margin-top: 5px;\r\n}\r\n\r\n.log_view_bottom-a__GPKQF {\r\n    color: #0066ff\r\n}\r\n\r\n.log_view_bottom-a__GPKQF:hover {\r\n    text-decoration: underline;\r\n}\r\n";
    styleInject(css_248z$4);

    var l_style = /*#__PURE__*/Object.freeze({
        __proto__: null,
        title: title,
        logTableContainer: logTableContainer,
        logTable: logTable,
        bottom: bottom,
        bottomA: bottomA,
        'default': log_view,
        stylesheet: stylesheet$3
    });

    var activateLeftBar = "activate_activate-left-bar__KnaW0";
    var activateLeftBarTitle = "activate_activate-left-bar-title__HWsG6";
    var activateLeftBarContainer = "activate_activate-left-bar-container__MI-ww";
    var activateLeftBarContainerElement = "activate_activate-left-bar-container-element__qrt-d";
    var activateLeftBarContainerElementText = "activate_activate-left-bar-container-element-text__mxIN7";
    var activatePage = "activate_activate-page__iZGEl";
    var activateByCodeText = "activate_activate-by-code-text__fBL1g";
    var activateByCodeInput = "activate_activate-by-code-input__xrlNx";
    var activatePageContainer = "activate_activate-page-container__FAo6C";
    var activateByCodeStatus = "activate_activate-by-code-status__189AC";
    var activateEnabledSelection = "activate_activate-enabled-selection__XuIVD";
    var css_248z$3 = ".activate_activate-left-bar__KnaW0 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 30%;\r\n    background-color: #b3b1b182;\r\n    color: black;\r\n}\r\n\r\n.activate_activate-left-bar-title__HWsG6 {\r\n    font-size: 30px;\r\n    margin-top: 15px;\r\n    font-weight: bolder;\r\n    padding: 10px 10px;\r\n    padding-bottom: 0;\r\n    color: black;\r\n}\r\n\r\n.activate_activate-left-bar-container__MI-ww {\r\n    padding-bottom: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.activate_activate-left-bar-container-element__qrt-d {\r\n    padding: 2px 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: background-color 100ms;\r\n}\r\n\r\n.activate_activate-left-bar-container-element__qrt-d:hover {\r\n    background-color:#b3b3b3;\r\n}\r\n\r\n.activate_activate-left-bar-container-element__qrt-d:active {\r\n    background-color:#959595;\r\n}\r\n\r\n.activate_activate-left-bar-container-element-text__mxIN7 {\r\n    margin-left: 5px;\r\n}\r\n\r\n.activate_activate-page__iZGEl {\r\n    flex: 1;\r\n    padding: 10px 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.activate_activate-by-code-text__fBL1g {\r\n    font-size: 27px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.activate_activate-by-code-input__xrlNx {\r\n    outline: none;\r\n    border: 0;\r\n    background-color: #ffffff63;\r\n    width: 100%;\r\n    height: 15px;\r\n    font-size: 10px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 3px gray;\r\n    padding-left: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.activate_activate-page-container__FAo6C {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.activate_activate-by-code-status__189AC {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    color: red;\r\n    font-weight: bolder;\r\n}\r\n\r\n.activate_activate-enabled-selection__XuIVD {\r\n    background-color:#adadad;\r\n}";
    var activate = {"activate-left-bar":"activate_activate-left-bar__KnaW0","activate-left-bar-title":"activate_activate-left-bar-title__HWsG6","activate-left-bar-container":"activate_activate-left-bar-container__MI-ww","activate-left-bar-container-element":"activate_activate-left-bar-container-element__qrt-d","activate-left-bar-container-element-text":"activate_activate-left-bar-container-element-text__mxIN7","activate-page":"activate_activate-page__iZGEl","activate-by-code-text":"activate_activate-by-code-text__fBL1g","activate-by-code-input":"activate_activate-by-code-input__xrlNx","activate-page-container":"activate_activate-page-container__FAo6C","activate-by-code-status":"activate_activate-by-code-status__189AC","activate-enabled-selection":"activate_activate-enabled-selection__XuIVD","activateLeftBar":"activate_activate-left-bar__KnaW0","activateLeftBarTitle":"activate_activate-left-bar-title__HWsG6","activateLeftBarContainer":"activate_activate-left-bar-container__MI-ww","activateLeftBarContainerElement":"activate_activate-left-bar-container-element__qrt-d","activateLeftBarContainerElementText":"activate_activate-left-bar-container-element-text__mxIN7","activatePage":"activate_activate-page__iZGEl","activateByCodeText":"activate_activate-by-code-text__fBL1g","activateByCodeInput":"activate_activate-by-code-input__xrlNx","activatePageContainer":"activate_activate-page-container__FAo6C","activateByCodeStatus":"activate_activate-by-code-status__189AC","activateEnabledSelection":"activate_activate-enabled-selection__XuIVD"};
    var stylesheet$2=".activate_activate-left-bar__KnaW0 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 30%;\r\n    background-color: #b3b1b182;\r\n    color: black;\r\n}\r\n\r\n.activate_activate-left-bar-title__HWsG6 {\r\n    font-size: 30px;\r\n    margin-top: 15px;\r\n    font-weight: bolder;\r\n    padding: 10px 10px;\r\n    padding-bottom: 0;\r\n    color: black;\r\n}\r\n\r\n.activate_activate-left-bar-container__MI-ww {\r\n    padding-bottom: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.activate_activate-left-bar-container-element__qrt-d {\r\n    padding: 2px 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    transition: background-color 100ms;\r\n}\r\n\r\n.activate_activate-left-bar-container-element__qrt-d:hover {\r\n    background-color:#b3b3b3;\r\n}\r\n\r\n.activate_activate-left-bar-container-element__qrt-d:active {\r\n    background-color:#959595;\r\n}\r\n\r\n.activate_activate-left-bar-container-element-text__mxIN7 {\r\n    margin-left: 5px;\r\n}\r\n\r\n.activate_activate-page__iZGEl {\r\n    flex: 1;\r\n    padding: 10px 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.activate_activate-by-code-text__fBL1g {\r\n    font-size: 27px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.activate_activate-by-code-input__xrlNx {\r\n    outline: none;\r\n    border: 0;\r\n    background-color: #ffffff63;\r\n    width: 100%;\r\n    height: 15px;\r\n    font-size: 10px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 3px gray;\r\n    padding-left: 5px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.activate_activate-page-container__FAo6C {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.activate_activate-by-code-status__189AC {\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    color: red;\r\n    font-weight: bolder;\r\n}\r\n\r\n.activate_activate-enabled-selection__XuIVD {\r\n    background-color:#adadad;\r\n}";
    styleInject(css_248z$3);

    var a_style = /*#__PURE__*/Object.freeze({
        __proto__: null,
        activateLeftBar: activateLeftBar,
        activateLeftBarTitle: activateLeftBarTitle,
        activateLeftBarContainer: activateLeftBarContainer,
        activateLeftBarContainerElement: activateLeftBarContainerElement,
        activateLeftBarContainerElementText: activateLeftBarContainerElementText,
        activatePage: activatePage,
        activateByCodeText: activateByCodeText,
        activateByCodeInput: activateByCodeInput,
        activatePageContainer: activatePageContainer,
        activateByCodeStatus: activateByCodeStatus,
        activateEnabledSelection: activateEnabledSelection,
        'default': activate,
        stylesheet: stylesheet$2
    });

    var shopBaseElement = "shop_shop-base-element__fO9IU";
    var shopTop = "shop_shop-top__FBfXE";
    var shopSubTitle = "shop_shop-sub-title__kc5IV";
    var shopContainer = "shop_shop-container__MTgaF";
    var shopContainerNotopen = "shop_shop-container-notopen__TTzK8";
    var shopItem = "shop_shop-item__C7Fiq";
    var shopItemSelected = "shop_shop-item-selected__L-tR-";
    var shopItemImg = "shop_shop-item-img__7BVz5";
    var shopItemTitle = "shop_shop-item-title__FLR3o";
    var shopItemPriceText = "shop_shop-item-price-text__Bqoz1";
    var shopPayFooter = "shop_shop-pay-footer__sLmfY";
    var shopPaywayImg = "shop_shop-payway-img__PTHM1";
    var shopWaitForPay = "shop_shop-wait-for-pay__mIt67";
    var shopPayInfo = "shop_shop-pay-info__nMN3F";
    var css_248z$2 = ".shop_shop-base-element__fO9IU {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: flex-start;\r\n    padding: 5px;\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-direction: column;\r\n}\r\n\r\n.shop_shop-top__FBfXE {\r\n    font-weight: bolder;\r\n    font-size: 40px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.shop_shop-sub-title__kc5IV {\r\n    font-size: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.shop_shop-container__MTgaF {\r\n    box-shadow: 0 0 5px gray;\r\n    overflow-y: auto;\r\n    height: 300px;\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    display: grid;\r\n    overflow-x: auto;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    grid-template-columns: 25% 25% 25% 25%;\r\n    grid-template-rows: 150px;\r\n}\r\n\r\n.shop_shop-container-notopen__TTzK8 {\r\n    box-shadow: 0 0 5px gray;\r\n    overflow-y: auto;\r\n    height: 300px;\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n\r\n.shop_shop-item__C7Fiq {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 140px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    max-width: 100px;\r\n    transition: transform 100ms,\r\n                background-color 100ms;\r\n    transform-origin: 0 0;\r\n    background-color: #dbdbe0;\r\n}\r\n\r\n.shop_shop-item__C7Fiq:hover {\r\n    transform: scale(1.1);\r\n    box-shadow: 0 0 5px gray;\r\n}\r\n\r\n.shop_shop-item__C7Fiq:active {\r\n    background-color: #919191;\r\n}\r\n\r\n.shop_shop-item-selected__L-tR- {\r\n    background-color: #c0c0c2;\r\n}\r\n\r\n.shop_shop-item-img__7BVz5 {\r\n    height: 75px;\r\n    width: 90px;\r\n}\r\n\r\n.shop_shop-item-title__FLR3o {\r\n    margin-top: 5px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.shop_shop-item-price-text__Bqoz1 {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n    color: red;\r\n    margin-top: auto;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.shop_shop-pay-footer__sLmfY {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.shop_shop-payway-img__PTHM1 {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.shop_shop-wait-for-pay__mIt67 {\r\n    width:100%;\r\n    height:100%;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.shop_shop-pay-info__nMN3F {\r\n\r\n    text-align: center;\r\n    line-height: 12px;\r\n    font-size: 10px;\r\n    margin-top: 5px;\r\n    color: red;\r\n    font-weight: bolder;\r\n\r\n}";
    var shop = {"shop-base-element":"shop_shop-base-element__fO9IU","shop-top":"shop_shop-top__FBfXE","shop-sub-title":"shop_shop-sub-title__kc5IV","shop-container":"shop_shop-container__MTgaF","shop-container-notopen":"shop_shop-container-notopen__TTzK8","shop-item":"shop_shop-item__C7Fiq","shop-item-selected":"shop_shop-item-selected__L-tR-","shop-item-img":"shop_shop-item-img__7BVz5","shop-item-title":"shop_shop-item-title__FLR3o","shop-item-price-text":"shop_shop-item-price-text__Bqoz1","shop-pay-footer":"shop_shop-pay-footer__sLmfY","shop-payway-img":"shop_shop-payway-img__PTHM1","shop-wait-for-pay":"shop_shop-wait-for-pay__mIt67","shop-pay-info":"shop_shop-pay-info__nMN3F","shopBaseElement":"shop_shop-base-element__fO9IU","shopTop":"shop_shop-top__FBfXE","shopSubTitle":"shop_shop-sub-title__kc5IV","shopContainer":"shop_shop-container__MTgaF","shopContainerNotopen":"shop_shop-container-notopen__TTzK8","shopItem":"shop_shop-item__C7Fiq","shopItemSelected":"shop_shop-item-selected__L-tR-","shopItemImg":"shop_shop-item-img__7BVz5","shopItemTitle":"shop_shop-item-title__FLR3o","shopItemPriceText":"shop_shop-item-price-text__Bqoz1","shopPayFooter":"shop_shop-pay-footer__sLmfY","shopPaywayImg":"shop_shop-payway-img__PTHM1","shopWaitForPay":"shop_shop-wait-for-pay__mIt67","shopPayInfo":"shop_shop-pay-info__nMN3F"};
    var stylesheet$1=".shop_shop-base-element__fO9IU {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: flex-start;\r\n    padding: 5px;\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-direction: column;\r\n}\r\n\r\n.shop_shop-top__FBfXE {\r\n    font-weight: bolder;\r\n    font-size: 40px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.shop_shop-sub-title__kc5IV {\r\n    font-size: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.shop_shop-container__MTgaF {\r\n    box-shadow: 0 0 5px gray;\r\n    overflow-y: auto;\r\n    height: 300px;\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    display: grid;\r\n    overflow-x: auto;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    grid-template-columns: 25% 25% 25% 25%;\r\n    grid-template-rows: 150px;\r\n}\r\n\r\n.shop_shop-container-notopen__TTzK8 {\r\n    box-shadow: 0 0 5px gray;\r\n    overflow-y: auto;\r\n    height: 300px;\r\n    margin-top: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n}\r\n\r\n.shop_shop-item__C7Fiq {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 140px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    max-width: 100px;\r\n    transition: transform 100ms,\r\n                background-color 100ms;\r\n    transform-origin: 0 0;\r\n    background-color: #dbdbe0;\r\n}\r\n\r\n.shop_shop-item__C7Fiq:hover {\r\n    transform: scale(1.1);\r\n    box-shadow: 0 0 5px gray;\r\n}\r\n\r\n.shop_shop-item__C7Fiq:active {\r\n    background-color: #919191;\r\n}\r\n\r\n.shop_shop-item-selected__L-tR- {\r\n    background-color: #c0c0c2;\r\n}\r\n\r\n.shop_shop-item-img__7BVz5 {\r\n    height: 75px;\r\n    width: 90px;\r\n}\r\n\r\n.shop_shop-item-title__FLR3o {\r\n    margin-top: 5px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.shop_shop-item-price-text__Bqoz1 {\r\n    margin-left: auto;\r\n    margin-right: 0;\r\n    color: red;\r\n    margin-top: auto;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.shop_shop-pay-footer__sLmfY {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.shop_shop-payway-img__PTHM1 {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.shop_shop-wait-for-pay__mIt67 {\r\n    width:100%;\r\n    height:100%;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.shop_shop-pay-info__nMN3F {\r\n\r\n    text-align: center;\r\n    line-height: 12px;\r\n    font-size: 10px;\r\n    margin-top: 5px;\r\n    color: red;\r\n    font-weight: bolder;\r\n\r\n}";
    styleInject(css_248z$2);

    var shop_s = /*#__PURE__*/Object.freeze({
        __proto__: null,
        shopBaseElement: shopBaseElement,
        shopTop: shopTop,
        shopSubTitle: shopSubTitle,
        shopContainer: shopContainer,
        shopContainerNotopen: shopContainerNotopen,
        shopItem: shopItem,
        shopItemSelected: shopItemSelected,
        shopItemImg: shopItemImg,
        shopItemTitle: shopItemTitle,
        shopItemPriceText: shopItemPriceText,
        shopPayFooter: shopPayFooter,
        shopPaywayImg: shopPaywayImg,
        shopWaitForPay: shopWaitForPay,
        shopPayInfo: shopPayInfo,
        'default': shop,
        stylesheet: stylesheet$1
    });

    var updateLContainer = "update_info_update-l-container__IfAVI";
    var updateLNewVerText = "update_info_update-l-new-ver-text__LuHfb";
    var updateLNewVerDetailContainer = "update_info_update-l-new-ver-detail-container__n8bH-";
    var css_248z$1 = ".update_info_update-l-container__IfAVI {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.update_info_update-l-new-ver-text__LuHfb {\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.update_info_update-l-new-ver-detail-container__n8bH- {\r\n    margin-top: 5px;\r\n    width: 100%;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    line-height: 16px;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n";
    var update_info = {"update-l-container":"update_info_update-l-container__IfAVI","update-l-new-ver-text":"update_info_update-l-new-ver-text__LuHfb","update-l-new-ver-detail-container":"update_info_update-l-new-ver-detail-container__n8bH-","updateLContainer":"update_info_update-l-container__IfAVI","updateLNewVerText":"update_info_update-l-new-ver-text__LuHfb","updateLNewVerDetailContainer":"update_info_update-l-new-ver-detail-container__n8bH-"};
    var stylesheet=".update_info_update-l-container__IfAVI {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.update_info_update-l-new-ver-text__LuHfb {\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.update_info_update-l-new-ver-detail-container__n8bH- {\r\n    margin-top: 5px;\r\n    width: 100%;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    line-height: 16px;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n";
    styleInject(css_248z$1);

    var update_i = /*#__PURE__*/Object.freeze({
        __proto__: null,
        updateLContainer: updateLContainer,
        updateLNewVerText: updateLNewVerText,
        updateLNewVerDetailContainer: updateLNewVerDetailContainer,
        'default': update_info,
        stylesheet: stylesheet
    });

    var css_248z = ".purchase_history_purchase-history-main__mongT {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 5px;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.purchase_history_purchase-history-text__2mvnu {\r\n    font-size: 25px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.purchase_history_purchase-h-buy-container__Mq0Kb {\r\n    margin-top: 5px;\r\n    width: 100%;\r\n    box-shadow: 0 0 5px gray;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    line-height: 16px;\r\n    font-weight: bold;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    max-height: 450px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.purchase_history_purchase-h-table__z1P99 {\r\n    width: 100%;\r\n    font-size: 11px;\r\n    color: black;\r\n    text-align: center;\r\n}";
    var purchaseHistory = {"purchase-history-main":"purchase_history_purchase-history-main__mongT","purchase-history-text":"purchase_history_purchase-history-text__2mvnu","purchase-h-buy-container":"purchase_history_purchase-h-buy-container__Mq0Kb","purchase-h-table":"purchase_history_purchase-h-table__z1P99","purchaseHistoryMain":"purchase_history_purchase-history-main__mongT","purchaseHistoryText":"purchase_history_purchase-history-text__2mvnu","purchaseHBuyContainer":"purchase_history_purchase-h-buy-container__Mq0Kb","purchaseHTable":"purchase_history_purchase-h-table__z1P99"};
    styleInject(css_248z);

    const mstyle = mcss; //提前声明css语句块,避免后续出现很大的幺蛾子
    const homework_style = homeworkcss;
    const progress_style = progress_bar$1;
    const circle_styles = circle;
    const wait_style = wait$1;
    const multiselection_style = ms_style;
    const task_style = t_style;
    const log_style = l_style;
    const activate_style = a_style;
    const shop_style = shop_s;
    const update_info_style = update_i;

    function getMenuBtn(color, imgelement, text, click) {
      // @ts-ignore
      let main = $__default["default"](`<div class="${style["menu-window-btn"]} ${circle_styles["btn" + color[0].toUpperCase() + color.substring(1)].toString()}"></div>`);
      main.append(imgelement);
      let texte = $__default["default"]('<div class="' + style.menuBtnText + '"></div>');
      texte.append(text);
      let btne = $__default["default"](`<div class="` + style.menuBtnContainer + `"></div>`);
      btne.append(main);
      btne.append(texte);
      btne.addClass("tm-menu-btn");
      btne.data("action", click);
      return btne;
    }
    function getBlueFBtn(text, click) {
      let btn = $__default["default"]("<div class='" + style["blue-f-btn"] + "'>" + text + "</div>");
      btn.click(() => {
        click();
      });
      return btn;
    }

    //不太清楚js的特性然后踩了坑,写了屎山代码,懒得改了
    let op_entire = $__default["default"]();
    function isOnPractisePage() {
      let kv = getUrlInfo(window.location.href);
      return window.location.href.indexOf('exam/answer') && 'paperId' in kv;
    }
    function renderBackground() {
      let rootE = $__default["default"](document.body);
      let bg = $__default["default"]("<div id='" + mstyle.windowBg + "'></div>");
      let loading = $__default["default"](`<div class='${wait_style.loading}'></div>`);
      let loading_c = $__default["default"](`<div class='${wait_style.loadingC}'></div>`);
      let elements = [];
      let pos = 0;
      loading_c.click(() => {
        setInterval(() => {
          elements[pos].addClass(wait_style.loadingSingleL);
          elements[pos == 0 ? elements.length - 1 : pos - 1].removeClass(wait_style.loadingSingleL);
          pos += 1;
          if (pos >= elements.length) pos = 0;
        }, 200);
      });
      for (let i = 0; i < 6; i++) {
        let p = $__default["default"](`<div class='${wait_style.loadingSingleContainer}'></div>`);
        p.css("transform", `rotate(${i * 60}deg)`);
        let c = $__default["default"](`<div class='${wait_style.loadingSingle}'></div>`);
        p.append(c);
        elements.push(c);
        loading_c.append(p);
      }
      loading.append(loading_c);
      loading.append($__default["default"](`<div class='${wait_style.loadingText}'>第一次载入数据可能较慢，请稍作等待...<br>`));
      bg.append(loading);
      rootE.prepend(bg);
      loading.animate({
        opacity: 1,
        marginBottom: "-=100px"
      }, config.animate.window_surface);
      loading_c.click();
      return loading;
    }
    function closeWindow() {
      clearAllCloseWindowTimeout();
      let bg = $__default["default"]("#" + mstyle.windowBg);
      let wm = $__default["default"]("#" + mstyle.windowMain);
      wm.animate({
        opacity: 0,
        marginBottom: "+=100px"
      }, config.animate.window_surface);
      setTimeout(() => {
        wm.css("display", "none");
        bg.remove();
      }, 220);
    }
    function leftComponent(userInfo) {
      let uinterface = new UserInfoInterface();
      let root = $__default["default"]("<div class='" + mstyle.leftComponent + "'></div>");
      let rcontainer = $__default["default"]("<div style='line-height: 17px;display: flex;align-items: center;flex-direction: column'></div>");
      let foot = $__default["default"](`<div class='` + mstyle.leftFooter + `'></div> `);
      if (userInfo.id == undefined) {
        let btn = getBlueFBtn("登陆", () => {
          location.reload();
          window.location.href = "https://web.ewt360.com/register/#/login";
        });
        btn.css("marginTop", "50px");
        rcontainer.append(btn);
      } else {
        let tx = $__default["default"]("<img class='" + mstyle.headImage + "' src='" + userInfo.photoUrl + "'/>");
        let uname = $__default["default"](`<div class="` + mstyle.userName + `">` + userInfo.name + `</div>`);
        let uid = $__default["default"](`<div class="` + mstyle.userId + `">` + userInfo.id + `</div>`);
        let activate_box = $__default["default"](`<div class="${mstyle.activateInfoBox}"></div>`);
        function getActivateStatusEntire(key, val) {
          return $__default["default"](`
                <div style="display: flex"><div>${key}</div><div class="${mstyle.activateInfoKvV}">
                    ${val}
                </div>
                </div>
            `);
        }
        if (!userInfo.isvip) {
          activate_box.append(getActivateStatusEntire("激活状态", `否(<a href="#">点此购买授权</a>)`));
        } else {
          activate_box.append(getActivateStatusEntire("激活状态", "是"));
          if (userInfo.expire_time != undefined) activate_box.append(getActivateStatusEntire("到期时间", getDateTimeFromStamp(userInfo.expire_time.toString())));
          if (userInfo.opcount != undefined) {
            op_entire = getActivateStatusEntire("剩余点数", userInfo.opcount.toString());
            activate_box.append(op_entire);
          }
        }
        let c = $__default["default"]();
        if (userInfo.opcount == -1) {
          c = $__default["default"](`<div class="${mstyle.ordiBtn}" style="
    margin-top: 10px;
    padding: 0px 10px;
    font-size: 10px;
">试用</div>`);
          c.click(async () => {
            c.text("请等待...");
            let res = await uinterface.UserTrial();
            c.html(`<div>${res["message"]}(点击刷新)</div>`);
            c.off('click');
            c.click(() => {
              location.reload();
            });
          });
        }
        rcontainer.append(uname);
        rcontainer.append(uid);
        rcontainer.append(activate_box);
        rcontainer.append(c);
        root.append(tx);
      }
      foot.append($__default["default"](`<div class='${mstyle.leftFooterElement}'>Version: ${version.substring(0, version.length - 1)}<span style='color: greenyellow;font-weight: bolder'>${version[version.length - 1]}</span></div>`));
      root.append(rcontainer);
      root.append(foot);
      return root;
    }
    function renderWindow(leftComponent, bodyComponent, hasCloseToggle, width, style) {
      let qwidth = width || "750px";
      let windowMain = $__default["default"](`<div id='${mstyle.windowMain}' style="width: ${qwidth}"></div>`);
      let bg = $__default["default"]("#" + mstyle.windowBg);
      if (leftComponent != null) windowMain.append(leftComponent);
      let kewtWindowBody = $__default["default"](`<div class="${mstyle.kewtWindowBody}" style="${style}"></div>`);
      if (bodyComponent != null) kewtWindowBody.append(bodyComponent);
      windowMain.append(kewtWindowBody);
      if (hasCloseToggle) {
        let closeBtn = $__default["default"](`<div id='` + mstyle.closeBtn + `'>
            <label class='` + mstyle.closeBtnLabel + `'>C</label>
        </div>`);
        closeBtn.mouseup(() => {
          closeWindow();
        });
        windowMain.append(closeBtn);
      }
      $__default["default"]("#" + mstyle.windowBg).empty();
      bg.prepend(windowMain);
      windowMain.animate({
        opacity: 1,
        marginBottom: "-=100px"
      }, config.animate.window_surface);
      return windowMain;
    }
    function renderWindowMenu(btns) {
      let body = $__default["default"](document.body);
      let mask = $__default["default"]("<div class='" + mstyle.wMask + "'></div>");
      let menu = $__default["default"]("<div class='" + mstyle.menu + "'></div>");
      let btncontainer = $__default["default"]("<div class='" + mstyle.wBtnContainer + "'></div>");
      for (let i of btns) btncontainer.append(i);
      menu.append(btncontainer);
      mask.append(menu);
      body.append(mask);
    }
    function isInCoursePage() {
      return $__default["default"]("[class^='course_package_container']").length != 0;
    }
    function isInTaskPage() {
      let kv = getUrlInfo(window.location.href);
      let b = "homeworkId" in kv && kv.homeworkId != undefined;
      return window.location.href.indexOf('student/homework-detail') != -1 && b;
    }
    function isInHolidayFrame() {
      let s = getUrlInfo(window.location.href);
      let b = 'sceneId' in s && s['sceneId'] != undefined;
      return window.location.href.indexOf('holiday') && b;
    }
    function NoPage() {
      let root = $__default["default"]("<div style='line-height: 25px;'></div>");
      let c = {
        "去任务列表选任务": getBlueFBtn("<span style='font-weight: bolder;color: white'>-> GO!</span>", () => {
          location.reload();
          window.location.href = "https://teacher.ewt360.com/ewtbend/bend/index/index.html#/student/homework";
        }),
        "去假期页面": getBlueFBtn("<span style='font-weight: bolder;color: white'>-> GO!</span>", () => {
          location.reload();
          window.location.href = "https://teacher.ewt360.com/ewtbend/bend/index/index.html#/holiday/student/entry";
        })
      };
      root.append($__default["default"]("<h1 style='font-size: 32px;font-weight: bolder'>菜单</h1>"));
      root.append($__default["default"]("<div style='font-size: 12px;margin-top: 5px'>你现在没有打开任何页面,从下面的列表选一项以继续:</div>"));
      let container = $__default["default"]("<div class='" + mstyle.nopageContainer + "'></div>");
      for (let d in c) {
        let ele = $__default["default"]("<div class='" + mstyle.nopageLst + "'><span class='" + mstyle.nopageLstTitle + "'>" + d + "</span></div>");
        c[d].css("margin-left", 'auto');
        c[d].css("margin-right", '0');
        ele.append(c[d]);
        container.append(ele);
      }
      root.append(container);
      return root;
    }

    class View {
      constructor() {
        this.lock = false;
        this.elements = [];
      }
      pushElement(ele) {
        ele.css("position", "relative");
        this.elements.push(ele);
      }
      setStatus(lock) {
        if (lock) {
          for (let i of this.elements) {
            i.prepend($(`<div style='position:absolute;top:0;left:0;height:100%;width:100%;z-index:90;' class="mask"></div>`));
          }
        } else {
          let mask = $(".mask");
          for (let c of mask) $(c).remove();
        }
        this.lock = lock;
      }
    }

    class HomeworkDao {
      HOMEWORK_PAPER_ANSWER_URL = `${config.mip}/specialapi/paper`;
      FILL_OPTION_URL = `${config.mip}/api/homework/fillOptions`;
      CHECK_STATE_URL = `${config.mip}/task/status?tid={tid}`;
      LESSON_HOMEWORK_URL = "https://gateway.ewt360.com/api/homeworkprod/player/getPlayerLessonConfig";
      INFO_URL = "https://web.ewt360.com/api/answerprod/web/answer/report?&platform=1&isRepeat=1&paperId={paperId}&bizCode={bizCode}";
      AVL_URL = `${config.mip}/specialapi/paper/available?paperId={paperId}`;
      PAPER_GET_URL = `https://web.ewt360.com/api/answerprod/web/answer/paper?paperId={paperId}&platform=1&reportId={reportId}&bizCode={bizCode}`;
      async getPaper(paperid, bizCode, homeworkId) {
        let data = {
          "paperId": paperid,
          "bizCode": bizCode,
          "homeworkId": homeworkId
        };
        let res = await requestJson("POST", this.HOMEWORK_PAPER_ANSWER_URL, headers.CommonHeader, data);
        return JSON.parse(res["responseText"]);
      }
      async getPlayerLesson(lessonIds, homeworkid, schoolid) {
        let data = {
          "lessonIdList": lessonIds,
          "homeworkId": homeworkid,
          "schoolId": schoolid
        };
        let res = await requestJson("POST", this.LESSON_HOMEWORK_URL, headers.CommonHeader, data);
        return validateReturn(res["responseText"]);
      }
      async getHomeworkInfo(paperid, bizCode) {
        let res = await request("GET", this.INFO_URL.replace("{paperId}", paperid.toString()).replace("{bizCode}", bizCode.toString()), headers.CourseHeader);
        return validateReturn(res["responseText"]);
      }
      async FinishHomeworkOptions(homeworks) {
        let data = [];
        let url = this.FILL_OPTION_URL;
        for (let i of homeworks) {
          data.push({
            bizCode: i.bizcode,
            reportId: i.reportId,
            homeworkId: i.homeworkId
          });
        }
        let dat = {
          homeworks: data
        };
        let res = await requestJson("POST", url, {}, dat);
        return validateLanReturn(res.responseText);
      }
      async GetTaskFn(uuid) {
        let url = this.CHECK_STATE_URL.replace("{tid}", uuid);
        let res = await request("GET", url, headers.CommonHeader, undefined);
        return validateLanReturn(res["responseText"]);
      }
      async GetPaperActivate(paperid) {
        let url = this.AVL_URL.replace("{paperId}", paperid.toString());
        let res = await request("GET", url, headers.CommonHeader, undefined);
        return validateAPIReturn(res["responseText"]);
      }
      async getSelfPaper(paperid, reportid, bizcode) {
        let url = this.PAPER_GET_URL.replace("{paperId}", paperid.toString()).replace("{reportId}", reportid).replace("{bizCode}", bizcode);
        let res = await request("GET", url, headers.CommonHeader, undefined);
        return validateReturn(res["responseText"]);
      }
    }

    class Paper {
      constructor(title, ques, paperid, reportid) {
        this._title = title;
        this._questions = ques;
        this._paperId = paperid;
        this._reportId = reportid;
      }
      get title() {
        return this._title;
      }
      set title(value) {
        this._title = value;
      }
      get questions() {
        return this._questions;
      }
      get paperId() {
        return this._paperId;
      }
      set paperId(value) {
        this._paperId = value;
      }
      get reportId() {
        return this._reportId;
      }
      set reportId(value) {
        this._reportId = value;
      }
      add(obj) {
        this._questions.push(obj);
      }
    }

    class ExamPaperHomeworkService {
      constructor(paperid, bizcode, platform, homeworkId) {
        this.bizcode = bizcode;
        this.platform = platform;
        this.paperid = paperid;
        this.reportId = "";
        this.homeworkDao = new HomeworkDao();
        this.homeworkId = homeworkId;
      }
      async getPaperAVL() {
        let r = await this.homeworkDao.GetPaperActivate(this.paperid);
        return r["data"];
      }
      async getSelfPaper() {
        let obj = await this.homeworkDao.getSelfPaper(this.paperid, this.reportId, this.bizcode);
        if (obj != null) {
          return new Paper(obj["title"], obj["questions"], obj["paperId"], obj["reportId"]);
        } else {
          return -1;
        }
      }
      async getPaper() {
        let obj = await this.homeworkDao.getPaper(this.paperid, this.bizcode, this.homeworkId);
        if (obj["code"] != 200) {
          return obj["code"];
        }
        return new Paper(obj["data"]["title"], obj["data"]["questions"], obj["data"]["paperId"], obj["data"]["reportId"]);
      }
      async getPaperInfo() {
        let obj = await this.homeworkDao.getHomeworkInfo(this.paperid, this.bizcode);
        let res = obj;
        this.reportId = res.reportId;
        return res;
      }
    }

    class ProgressBar {
      constructor(value, styles) {
        this.progresso = $(`<div class='${progress_style.progressBarOut}'></div>`);
        this.progressi = $(`<div class='${progress_style.progressBarIn}'></div>`);
        if (styles != undefined) for (let i in styles) {
          this.progresso.css(i, styles[i]);
        }
        this.value = value;
        this.progresso.append(this.progressi);
      }
      setValue(value) {
        this.progressi.css("width", value);
        this.value = value;
      }
      show() {
        this.progressi.css("width", this.value * 100 + "%");
        return this.progresso;
      }
      slideFromZero() {
        this.progressi.css("width", "0");
        this.progressi.animate({
          width: "+=" + parseInt(String(this.value * 100)) + "%"
        }, config.animate.scrollbar_slide_from_zero);
      }
      slideValue(value) {
        let prog = Math.abs(value - this.value);
        if (value < -1 || value > 1) {
          throw new Error("Invalid value.");
        }
        this.progressi.animate({
          width: (value < this.value ? "-=" : "+=") + parseInt(String(prog * 100)) + "%"
        }, prog < 0.2 && prog > -0.2 ? config.animate.scrollbar_0p_to_20p : prog > 0.2 && prog < 0.4 ? config.animate.scrollbar_20p_to_40p : prog > 0.4 && prog < 0.6 ? config.animate.scrollbar_40p_to_60p : prog > 0.6 && prog < 0.8 ? config.animate.scrollbar_60p_to_80p : config.animate.scrollbar_80p_to_100p);
      }
    }

    let open_img = `<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 48 48\" width=\"18px\" height=\"18px\">
                <path d=\"M 18.5 5 C 16.585045 5 15 6.5850452 15 8.5 L 15 13 L 9.5 13 C 6.4802259 13 4 15.480226 4 18.5 L 4 37.5 C 4 40.519774 6.4802259 43 9.5 43 L 38.5 43 C 41.519774 43 44 40.519774 44 37.5 L 44 18.5 C 44 15.480226 41.519774 13 38.5 13 L 33 13 L 33 8.5 C 33 6.5850452 31.414955 5 29.5 5 L 18.5 5 z M 18.5 8 L 29.5 8 C 29.795045 8 30 8.2049548 30 8.5 L 30 13 L 18 13 L 18 8.5 C 18 8.2049548 18.204955 8 18.5 8 z M 9.5 16 L 38.5 16 C 39.898226 16 41 17.101774 41 18.5 L 41 23 L 36 23 L 36 22.5 C 36 21.672 35.328 21 34.5 21 L 31.5 21 C 30.672 21 30 21.672 30 22.5 L 30 23 L 18 23 L 18 22.5 C 18 21.672 17.328 21 16.5 21 L 13.5 21 C 12.672 21 12 21.672 12 22.5 L 12 23 L 7 23 L 7 18.5 C 7 17.101774 8.1017741 16 9.5 16 z M 7 26 L 12 26 L 12 26.5 C 12 27.328 12.672 28 13.5 28 L 16.5 28 C 17.328 28 18 27.328 18 26.5 L 18 26 L 30 26 L 30 26.5 C 30 27.328 30.672 28 31.5 28 L 34.5 28 C 35.328 28 36 27.328 36 26.5 L 36 26 L 41 26 L 41 37.5 C 41 38.898226 39.898226 40 38.5 40 L 9.5 40 C 8.1017741 40 7 38.898226 7 37.5 L 7 26 z\"/>
                            </svg>`;
    let exam_img = `data:image/png;base64,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`;
    let donate_img = `<img height="20px" width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIElEQVR4nM2aa4hNURTHf0a4MR53JM0MSr5gPPJtCuWDUkMKkZRXiSRFGnmUVxE+oWQ+opQajOGD5J0M8ojkGcnISGSY8RiPsbVrTe1u57722eec/a/VuffWOWv9ztl7n7XWvhC/BgEbgUfAM+AScABYCAzFc3UDJgFHgQ5A5bAnwDZgJB6pCtgJvM4TfDa7ANTIjYhdenjUAg8sg1cBdg0YE0fwaWAZcAXodAigDPsDrIsi+J7AbOBUAePepR0CSlwA9AG2Au9jDF5l2PawEL2BOwkCKGOYDbeFKJFhpDywr2HeObUeACjgY5gVbHzME1rlsOm2EL2Ahx4AKKCRENrlAYASG2cLMcKjIXU1zNNo9ABAiS2whZjqQfBK7BtQagty0wMAJXbMFmKChbPvwExgL9AEvBL74QBkhi3I6iId6Yx3TsB1KoEPISE+AT1sQeYX4Ujf8bkB19DObzh4GvsJofIC64rLwKgs19jnaH5UEVLXC3CyNsu58xxBXMSB1hTgqD7jnDJgA9DuCKTaBUi55P1BDv4BdcbaroutLQ4BFHAchzob4OA3sDhjGL1zCKBk2R7gEmRWhoMOac9o9QWOOAZQUkJbJ4e5GgwthpPlRtfkbgQQL8KUsPm0WZwcNiDuRQBxWtqpkWmglJeD5Xu9Y4AWmWexaIocJzoE0G3UVUCKBFQXMvi/UuPours7CeqWJUCn5EwVeKImC4g2Se+9UH857raYB2ON9OWkrIKJqAw4IZ+HSJevEIjzxnKqM9iXxhPqujGxaqXkVpPl+zSpobMBtEtW3LU5UxMAvyIJkDPi/I0kklqjgQbglxGczrd2yHunKyvYk6Wu0UMsdjVnJHNmHlQqhZUuaU1V59mx0nMndv0MyH4PSj/Y3NvrJxs/52Qo5mtUxK62HAF9Bh4Db+VlV8ySHLueO0pJTHuaBEhDBCCJTPalEYAsSgIkDXxxCNHquowtRpscgugtvMSUcrSbezup+sNUpSyzthDNPqXxFXJXi4W4DwzDM6Wkm9ha4MReLxuq3ioNLJE/EegXnM56tenP+jfdxIttdfoPS0V7XJTy03kAAAAASUVORK5CYII=">`;
    let log_img = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4klEQVR4nO2VwQnCQBAA56EIvhR8iGXYhfi3Fs3HvG3AFkSwCcUCxA6MFWgBKwcXOC4XPTQbH8nAQo677GR34QItTWIO3AFRigyYhcSZolRs3EJiqSkKtGKpu9VaSCt+14ozcPLWMXM8ReYv3TAJjt46Ruy+09wZT4HeP2ZcivaME+AJLGPEVdEHLo5jVYd4AXSBkSN/aItTm/PgyRNNcS4VT27ajpbYl4oN0/YCv/zq9kDng3Rd9pXfSneO1FwQm8CZ1O7n51QYx1ZaFQPneWIrzytFk60nCt7LGlytfBhz+gW0JjhmGBNDXQAAAABJRU5ErkJggg==">`;
    let input_key_img = `<svg style="height: 20px" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="M7 15q1.25 0 2.125-.875T10 12t-.875-2.125T7 9t-2.125.875T4 12t.875 2.125T7 15m0 3q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.15T12.65 10h8.375L23 11.975l-3.5 4L17 14l-2 2l-2-2h-.35q-.625 1.8-2.175 2.9T7 18"/></svg>`;
    let ewt_task_info_bg = "data:image/png;base64,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";
    let gift_card_img = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67l-.5-.68C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-5-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M9 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m11 15H4v-2h16zm0-5H4V8h5.08L7 10.83L8.62 12L11 8.76l1-1.36l1 1.36L15.38 12L17 10.83L14.92 8H20z"/></svg>`;
    let check_ok_img = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="m11 17.768l-4.884-4.884l1.768-1.768L11 14.232l8.658-8.658A9.98 9.98 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a9.94 9.94 0 0 0-.966-4.266z"/></svg>`;
    let zfb_img = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" style="
    width: 20px;
    height: 20px;
"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M20.225 17.689A9.99 9.99 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.95 9.95 0 0 1-1.59 5.414a1 1 0 0 1-.185.275M4 12a8 8 0 1 1 15.089 3.712q-1.24-.573-2.3-1.075q-1.12-.528-2.06-.96c.408-.801.813-1.74 1.21-2.835A1 1 0 0 0 15 9.5h-2V9h3a1 1 0 1 0 0-2h-3V6a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2h3v.5H9a1 1 0 1 0 0 2h4.534a19 19 0 0 1-.647 1.384C11.494 12.334 10.267 12 9 12c-1.52 0-3 1.316-3 3c0 1.82 1.632 3 3.5 3c1.02 0 2.148-.359 3.27-1.48c.31-.312.62-.68.928-1.114c.657.297 1.374.634 2.178 1.013c.625.294 1.303.613 2.048.958A8 8 0 0 1 4 12m5 2c.827 0 1.687.194 2.797.608a6 6 0 0 1-.442.497C10.602 15.86 9.98 16 9.5 16C8.368 16 8 15.38 8 15c0-.516.52-1 1-1"></path></g></svg>`;
    let wechat_pay_img = `<svg style="
    width: 20px;
    height: 20px;
" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 3C6.656 3 2 6.643 2 11.5c0 2.798 1.577 5.223 3.906 6.744c.174.383.143.852.115 1.293c-.01.16-.021.316-.021.463a1 1 0 0 0 1 1c1.25 0 2.071-.411 2.639-.81c.197-.14.357-.272.45-.345q.93.154 1.911.155c5.344 0 10-3.643 10-8.5a7.43 7.43 0 0 0-.96-3.658l-.003.002l-11 7a1 1 0 0 1-1.405-.348l-2-3.5a1 1 0 0 1 1.383-1.353l1.58.947a1 1 0 0 0 .944.046l9.297-4.427C17.974 4.228 15.103 3 12 3"/></g></svg>`;
    let fail_img = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16"><path fill="currentColor" d="m8.746 8l3.1-3.1a.527.527 0 1 0-.746-.746L8 7.254l-3.1-3.1a.527.527 0 1 0-.746.746l3.1 3.1l-3.1 3.1a.527.527 0 1 0 .746.746l3.1-3.1l3.1 3.1a.527.527 0 1 0 .746-.746zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/></svg>`;
    let unlock_svg = $(`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M12 2c1.091 0 2.117.292 3 .804a1 1 0 1 1-1 1.73A4 4 0 0 0 8 8l11 .001a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1a6 6 0 0 1 6-6m0 10a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268A2 2 0 0 0 12 12m7.918-6.979l.966.26a1 1 0 0 1-.518 1.93l-.965-.258a1 1 0 0 1 .517-1.932M18.633 2.09a1 1 0 0 1 .707 1.225l-.129.482a1 1 0 1 1-1.932-.517l.13-.483a1 1 0 0 1 1.224-.707"></path></g></svg>`);
    let update_svg = $(`<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 50 50" style="
    height: 110px;
    width: 110px;
"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke="#306CFE" d="M8.333 25a16.667 16.667 0 0 1 31.105-8.333M41.667 25a16.667 16.667 0 0 1-31.104 8.333"></path><path stroke="#344054" d="M29.167 16.667h10.416V6.25m-18.75 27.083H10.417V43.75"></path></g></svg>`);
    let order_svg = $(`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M33.05 7H38a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7v3h14V7z"/><path stroke-linecap="round" d="M17 4h14v6H17zm10 15l-8 8.001h10.004l-8.004 8"/></g></svg>`);
    let history_purchase_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-3.875 0-6.725-2.575T2.05 13h2.025q.375 3.025 2.638 5.013T12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4Q9.85 4 8.012 5.062T5.1 8H8v2H2.2q.725-3.5 3.475-5.75T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m2.8-5.8L11 12.4V7h2v4.6l3.2 3.2z"></path></svg>`;

    class QuestionComponentDesc {
      constructor(comp, index, parent) {
        this.comp = comp;
        this.parentComp = parent;
        this.index = index;
      }
    }

    class CourseHomeworkService {
      constructor() {
        this.homeworkDao = new HomeworkDao();
        this.paperid = "";
        this.bizcode = "204";
        this.reportId = "";
        this.homeworkId = -1;
        this.platform = "1";
        //bizcode恒为204和platform恒为1的原因:
        //见ewt 35.bundle.f7c739d1.js:
        //window.open("".concat(y.web, "/mystudy/#/exam/answer/?paperId=").concat(n.paperId, "&bizCode=204&platform=1&isRepeat=1")))
      }

      async getPaperAVL() {
        let r = await this.homeworkDao.GetPaperActivate(this.paperid);
        return r["data"];
      }
      async build(homeworkId, lessonid) {
        this.homeworkId = homeworkId;
        let paper;
        this.reportId = "";
        if (exports.user.school != undefined) {
          paper = await this.homeworkDao.getPlayerLesson([lessonid.toString()], this.homeworkId, parseInt(exports.user.school));
          if (paper[0] == undefined) return undefined;
          this.paperid = paper[0]["studyTest"]["paperId"];
        }
        await this.getPaperInfo();
        return this;
      }
      buildWithPaperId(paperid) {
        this.paperid = paperid;
        return this;
      }
      async getPaper() {
        let obj = await this.homeworkDao.getPaper(this.paperid, this.bizcode, this.homeworkId);
        if (obj["code"] != 200) {
          return obj["code"];
        }
        return new Paper(obj["data"]["title"], obj["data"]["questions"], obj["data"]["paperId"], obj["data"]["reportId"]);
      }
      async getPaperInfo() {
        let obj = await this.homeworkDao.getHomeworkInfo(this.paperid, this.bizcode);
        let res = obj;
        this.reportId = res.reportId;
        return res;
      }
      async getSelfPaper() {
        let obj = await this.homeworkDao.getSelfPaper(this.paperid, this.reportId, this.bizcode);
        if (obj != null) {
          return new Paper(obj["title"], obj["questions"], obj["paperId"], obj["reportId"]);
        } else {
          return -1;
        }
      }
    }

    class CourseHomeworkController {
      constructor() {
        this.papers = [];
        this.homeworkids = [];
        this.pointer = -1;
        this.dao = new HomeworkDao();
        this.taskid = UUID();
      }
      emptyHomework() {
        this.papers = [];
        this.pointer = -1;
      }
      async addHomework(homeworkid, lesson) {
        let c = await new CourseHomeworkService().build(parseInt(homeworkid), lesson);
        if (c != undefined) this.papers.push(c);
      }
      addHomeworkWithPaperId(paperid) {
        let c = new CourseHomeworkService().buildWithPaperId(paperid);
        this.papers.push(c);
      }
      async GetTask() {
        let dat = await this.dao.GetTaskFn(this.taskid);
        return dat;
      }
      addHomeworkInstance(paper) {
        this.papers.push(paper);
      }
      async addExamPaper(url) {
        let c = getUrlInfo(url);
        let ins = new ExamPaperHomeworkService(c["paperId"], c["bizCode"], c["platform"], parseInt(c["homeworkId"]));
        await ins.getPaperInfo(); //Get ReportID
        this.papers.push(ins);
      }
      async FillOptionsAll() {
        let ret = await this.dao.FinishHomeworkOptions(this.papers);
        if (ret["code"] == 200) {
          this.taskid = ret["data"]["tid"];
        }
        return ret;
      }

      // async buildWithLessonId(lessonids: Array<number>,homeworkid: number) {
      //     for (let i of lessonids) {
      //         let ser = await (new CourseHomeworkService()).build(homeworkid,i)
      //         if(ser != undefined) this.papers.push(ser)
      //     }
      //     return this
      // }

      buildWithoutLessonId() {
        return this;
      }
    }

    class HomeworkView extends View {
      quesMainComponent = $();
      quesSideComponent = $();
      first_question_btn = $(); //第一道题目的序号

      selected_question_btn = $(); //选中的按钮 

      constructor(paperid, bizcode, platform, homeworkid) {
        super();
        if (homeworkid == undefined) {
          this.homeworkController = new CourseHomeworkController();
          this.homeworkController.addHomeworkWithPaperId(paperid.toString());
        } else {
          this.homeworkController = new CourseHomeworkController();
          this.homeworkController.addHomeworkInstance(new ExamPaperHomeworkService(paperid, bizcode, platform, parseInt(homeworkid.toString())));
        }
        this.paperId = paperid.toString();
        this.allQues = 0;
        this.ques = 0;
        this.progress_s = undefined;
        this.progress_text_f = undefined;
        this.progress_text_p = undefined;
        this.quesGroup = [];
        this.parentContainer = $(`<div></div>`);
        this.root_component = $();
      }
      async surfaceComponent() {
        let root = $(`<div></div>`);
        this.root_component = root;
        await this.homeworkController.papers[0].getPaperInfo();
        let avl = await this.homeworkController.papers[0].getPaperAVL();
        if (!avl) {
          this.parentContainer.append(this.lockView());
        } else {
          await this.refreshToF();
        }
        this.root_component.append(this.parentContainer);
        this.root_component.append(this.getFuncBtns());
        return root;
      }
      async refreshToF() {
        this.parentContainer.empty();
        let paper = await this.homeworkController.papers[0].getPaper();
        let selfpaper = await this.homeworkController.papers[0].getSelfPaper();
        let body = this.getBodyComponent();
        if (paper instanceof Paper && selfpaper instanceof Paper) {
          let head = this.getHeadComponent(selfpaper);
          this.getComponentGroup(paper.questions);
          this.surfaceQuestionsComponent();
          this.first_question_btn.click();
          this.parentContainer.append(head);
          this.parentContainer.append(body);
        }
      }
      getFuncBtns() {
        let foot_func = $(`<div class='${homework_style.footFunc}'></div>'`);
        let left = $(`<div class='${homework_style.footFuncLeft}'></div>`);
        let right = $(`<div class='${homework_style.footFuncRight}'></div>`);
        let fill_choice_btn = $(`<div class='${homework_style.homeworkSubmitBtn}'><label>填充所有题目...</label></div>`);
        left.append(fill_choice_btn);
        foot_func.append(left);
        foot_func.append(right);
        fill_choice_btn.click(async () => {
          if (fill_choice_btn.hasClass(`${homework_style.homeworkSubmitBtn}`)) {
            fill_choice_btn.removeClass(`${homework_style.homeworkSubmitBtn}`);
            fill_choice_btn.addClass(`${homework_style.submitUnclickable}`);
            fill_choice_btn.html("<label>请等待填充...</label>");
            await this.homeworkController.FillOptionsAll();
            let finish = false;
            while (true) {
              let dat = await this.homeworkController.GetTask();
              if (dat["all"] == dat["do"]) {
                fill_choice_btn.text(`填写完成!`);
                finish = true;
                break;
              } else if (dat["state"] >= 0) {
                fill_choice_btn.text(`进度${parseInt(String(dat["progress"] * 1000)) / 10}%`);
              } else {
                fill_choice_btn.text(`填写失败.(${dat["code"]})`);
                break;
              }
              await delay(100);
            }
            if (finish) {
              this.ques = this.allQues = 0;
              let p = await this.homeworkController.papers[0].getSelfPaper();
              if (p instanceof Paper) {
                this.getDidCount(p.questions); //重新计算数量
              }

              if (this.progress_s instanceof ProgressBar) {
                this.progress_s.slideValue(this.ques / this.allQues);
              }
              fill_choice_btn.html("<label>填写成功!刷新界面以继续...</label>");
            }
          }
        });
        return foot_func;
      }
      getBodyComponent() {
        let answerMainComponent = $(`<div class='${homework_style.bodyComponent}'></div>`);
        let questionArea = $(`<div class='${homework_style.bodyQuesAreaComponent}'></div>`);
        let questionOptionsArea = $(`<div class='${homework_style.bodyQuessComponent}'></div>`);
        answerMainComponent.append(questionArea);
        answerMainComponent.append(questionOptionsArea);
        this.quesMainComponent = questionArea;
        this.quesSideComponent = questionOptionsArea;
        return answerMainComponent;
      }
      surfaceQuestionsComponent() {
        let c = 0;
        for (let i of this.quesGroup) {
          let btn = $(`
            <div class='${homework_style.bodyQuesOptionDot}'>
                <div style='transform: scale(0.75)'>${i.index}</div>
            </div>
            `);
          if (c == 0) {
            this.first_question_btn = btn;
          }
          btn.click(() => {
            if (this.selected_question_btn == btn) return;
            this.selected_question_btn.removeClass(`${homework_style.bodyQuesOptionDotClicked}`);
            this.selected_question_btn = btn;
            this.selected_question_btn.addClass(`${homework_style.bodyQuesOptionDotClicked}`);
            this.quesMainComponent.empty();
            if (i.parentComp != null) {
              this.quesMainComponent.append(i.parentComp);
            }
            this.quesMainComponent.append(i.comp);
            $(`.${homework_style.analyzeContainer}`).css("display", "none");
            $(`.${homework_style.analyzeContainer}`).slideUp();
            $(`.${homework_style.analyzeBack}`).html("<label>展开</label>"); //点击其他按钮,收回解析
          });

          this.quesSideComponent.append(btn);
          c += 1;
        }
      }

      /**
       * 获得整张试卷的显示控件.
       * @param ques 试卷题目总数
       * @param parentComp 试卷父题目的组件(可选)
       * @param prefix 题目前缀
       */
      getComponentGroup(ques, parentComp, prefix) {
        for (let index = 0; index < ques.length; index++) {
          let questionNo = index + 1;
          let quesNoName = prefix != undefined ? prefix + questionNo : questionNo.toString();
          let comp = this.getAnswerComponent(ques[index], quesNoName);
          let qcdesc;
          if (ques[index].childQuestions.length != 0) this.getComponentGroup(ques[index].childQuestions, comp, quesNoName + "-");else {
            if (parentComp != undefined) qcdesc = new QuestionComponentDesc(comp, quesNoName, parentComp);else qcdesc = new QuestionComponentDesc(comp, quesNoName);
            this.quesGroup.push(qcdesc);
          }
        }
      }
      getAnswerComponent(question, questionNo) {
        let answerComponent = $(`<div class='${homework_style.homeworkQuesComponent}' id='${questionNo}'></div>`);
        let titleComponent = $(`<div class='${homework_style.homeworkQuesTitleComponent} ${homework_style.homeworkQuesComponentEle}'></div>`);
        let number = $(`<div class='${circle_styles.quesNumberCircle}'>No.${questionNo}</div>`);
        let score = $(`<div class='${circle_styles.quesNumberCircle}'>${question.score}分</div>`);
        let title_left = $(`<div class='${homework_style.homeworkQuesTitleLeft}'></div>`);
        title_left.append($(`<div class='${circle_styles.quesNumberCircle} ${homework_style.homeworkQuesId}'>ID:${question.id}</div>`));
        title_left.append($(`<div class='${circle_styles.quesNumberCircle} ${homework_style.homeworkQuesType}'>${question.cateName}</div>`));
        titleComponent.append(number);
        if (question.score != undefined && question.score != 0) titleComponent.append(score);
        titleComponent.append(title_left);
        let content = $(`<div class='${homework_style.homeworkQuesContent}'></div>`);
        content.append($(`<div>${question.questionContent}</div>`));
        answerComponent.append(titleComponent);
        answerComponent.append(content);
        if (question.options.length != 0) {
          let optionsBox = $(`<div class='${homework_style.homeworkQuesOptions}'></div>`);
          for (let i of question.options) {
            optionsBox.append(this.getOptionBox(i, question.rightAnswer?.indexOf(i.choice) != -1));
          }
          answerComponent.append(optionsBox);
        } else if (question.rightAnswer.length != 0) {
          let c = $(`<div class="${homework_style.quesAnalyse}"></div>`);
          let analTitle = $(`<div class='${homework_style.quesParse}'>答案</div>`);
          let analcontent = $(`<div class='${homework_style.answerContainer}'></div>`);
          for (let i of question.rightAnswer) {
            analcontent.append("<div>" + i + "</div>");
          }
          c.append(analTitle);
          c.append(analcontent);
          answerComponent.append(c);
        }
        if (question.analyse.length != 0) {
          let c = $(`<div class="${homework_style.quesAnalyse}"></div>`);
          let analTitle = $(`<div class='${homework_style.quesParse}'>解析</div>`);
          let analyzeC = $(`<div class='${homework_style.analyzeBack}'><label>展开</label></div>`);
          let analcontent = $(`<div class='${homework_style.analyzeContainer}'>${question.analyse}</div>`);
          this.quesMainComponent.on("click", `.${homework_style.analyzeBack}`, () => {
            analcontent.slideToggle(config.animate.analyze_slide_toggle, () => {
              if (analcontent.css("display") == "none") {
                analyzeC.html("<label>展开</label>");
              } else {
                analyzeC.html("<label>收起</label>");
              }
            });
          });
          analTitle.append(analyzeC);
          c.append(analTitle);
          c.append(analcontent);
          answerComponent.append(c);
          analcontent.slideUp(0);
        }
        return answerComponent;
      }
      getOptionBox(optionques, right) {
        let option_box_root = $(`<div class='${homework_style.homeworkOptionBox}'></div>`);
        let opt_box_left = $(`<div 
                class='${homework_style.optionBoxOptionText} 
                        ${right ? homework_style.optionBoxOptionCorrectText : homework_style.optionBoxOptionNotCorrectText}'
                        >${optionques.choice} </div>`);
        let opt_right = $(`<div class='${homework_style.optionBoxOptionContent}'>${optionques.option}</div>`);
        option_box_root.append(opt_box_left);
        option_box_root.append(opt_right);
        return option_box_root;
      }
      getHeadComponent(paperinfo) {
        //标题栏
        let titleUp = $(`<div class='${homework_style.homeworkComponent}' style='align-items:center;'></div>`);
        let image = $(`<div class='${homework_style.titleUpComponentImage}'></div>`);
        image.append($(`<img style='height: 100%;width: 120px' class='${homework_style.titleUpComponentImage}' src="${exam_img}"/>`));
        let bsinfo = $(`<div class='${homework_style.titleUpBasicInfo}'></div>`);
        bsinfo.append($(`<div class='${homework_style.titleUpContent}'>${paperinfo.title}</div>`));
        bsinfo.append($(`<div class='${homework_style.titleUpId}'>id:${this.paperId}</div>`));
        let foot = $(`<div class='${homework_style.titleUpProgressDetail}'></div>`);
        this.getDidCount(paperinfo.questions);
        //计算答题数量
        let prog = Math.round(this.ques / this.allQues * 100) / 100;
        let progressc = $(`<div class='${homework_style.titleUpProgress}'>进度:</div>`);
        this.progress_s = new ProgressBar(prog, {
          "margin-top": "2px"
        });
        //布置进度条

        progressc.append(this.progress_s.show());
        foot.append(this.progress_text_f || $());
        foot.append(this.progress_text_p || $());
        bsinfo.append(progressc);
        bsinfo.append(foot);
        titleUp.append(image);
        titleUp.append(bsinfo);
        this.progress_s.slideFromZero();
        return titleUp;
      }
      lockView() {
        let root = $(`<div class="${homework_style.lockedC}"></div>`);
        root.append(unlock_svg);
        root.append($(`<div style="
    font-size: 25px;
    font-weight: bold;
">解锁此试卷</div>`));
        root.append($(`<div style="text-align: center;">需要花费 1 点数解锁此试卷的解析.<br>在此次解锁之后,下次将不用再次解锁这份试卷,而可以直接看到解析.</div>`));
        let btn = $(`<div class="${ordiBtn}">解锁</div>`);
        root.append(btn);
        btn.on("click", () => {
          btn.text("请等待...");
          btn.off("click");
          this.refreshToF();
        });
        return root;
      }
      getDidCount(question) {
        for (let i of question) {
          if (i.childQuestions.length != 0) this.getDidCount(i.childQuestions);else {
            if (i.myAnswer != null && i.myAnswer.length != 0) this.ques += 1;
            this.allQues += 1;
          }
        }
        let prog = Math.round(this.ques / this.allQues * 100) / 100;
        if (this.progress_text_f != undefined) this.progress_text_f.text(`完成题目数量:${this.ques}/${this.allQues} (小题)`);else this.progress_text_f = $(`<div>完成题目数量:${this.ques}/${this.allQues} (小题)</div>`);
        if (this.progress_text_p != undefined) this.progress_text_p.text(`${prog * 100}%`);else this.progress_text_p = $(`<div class="${homework_style.titleUpProgressDetailRight}">${prog * 100}%</div>`);
      }
    }

    class MissionDao {
      DAY_URL = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentHomeworkDistribution";
      MISSIONS_INFO_URL = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentHomeworkSummaryInfo?sceneId=0&homeworkId={hid}&schoolId={sid}";
      HOMEWORK_TASKS_URL = "https://gateway.ewt360.com/api/homeworkprod/homework/student/pageHomeworkTasks";
      HOMEWORK_PROGRESS = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentTaskProcess";
      HOMEWORK_SUMMARY_INFO = "https://gateway.ewt360.com/api/homeworkprod/homework/student/holiday/getHomeworkSummaryInfo?schoolId={schoolId}&timestamp={timestamp}&sceneId={sceneId}";
      STUDENT_HOMEWORK_SUMMARY = "https://gateway.ewt360.com/api/homeworkprod/homework/student/studentHomeworkSummaryInfoV1";
      SCENE_GET_SUBJECT = "https://gateway.ewt360.com/api/homeworkprod/homework/student/getStudentDaySubjectStat";

      //获取day dayid
      async getHomeworkBasicData(homeworks, taskDistributionTypeEnum) {
        let data = {
          homeworkIds: homeworks,
          sceneId: 0,
          taskDistributionTypeEnum: taskDistributionTypeEnum,
          schoolId: exports.user.school
        };
        let res = await requestJson("POST", this.DAY_URL, headers.CommonHeader, data);
        return validateReturn(res["responseText"]);
      }

      //获取整个作业id
      async getMissionInfo(hid, sid) {
        let res = await request("GET", this.MISSIONS_INFO_URL.replace("{hid}", String(hid)).replace("{sid}", String(sid)), headers.CommonHeader);
        return validateReturn(res["responseText"]);
      }

      //获取dayid对应的任务列表
      async pageHomeworkTasks(dayid, timestamp, homeworkids) {
        let data = {
          day: timestamp,
          dayId: dayid,
          homeworkIds: homeworkids,
          pageIndex: 1,
          pageSize: 1000,
          sceneId: 0,
          schoolId: exports.user.school
        };
        let res = await requestJson("POST", this.HOMEWORK_TASKS_URL, headers.CourseHeader, data);
        return validateReturn(res["responseText"]);
      }
      async getHomeworkSummaryInfo(sceneId) {
        let url = this.HOMEWORK_SUMMARY_INFO.replace("{schoolId}", exports.user.school || "").replace("{timestamp}", String(Date.now())).replace("{sceneId}", String(parseInt(sceneId)));
        let res = await request("GET", url, headers.CommonHeader, null);
        return validateReturn(res["responseText"]);
      }
      async pageHomeworkTasksByHomeworkId(subjectid, homeworkids) {
        let data = {
          "homeworkIds": homeworkids,
          "sceneId": 0,
          "pageIndex": 1,
          "pageSize": 1000,
          "subjectId": subjectid,
          "schoolId": exports.user.school
        };
        let res = await requestJson("POST", this.HOMEWORK_TASKS_URL, headers.CourseHeader, data);
        return validateReturn(res["responseText"]);
      }
      async getHomeworkProgress(homeworkId, schoolId) {
        let url = this.HOMEWORK_PROGRESS;
        let data = {
          homeworkIds: [homeworkId],
          sceneId: 0,
          schoolId: schoolId
        };
        let res = await requestJson("POST", url, headers.CourseHeader, data);
        return validateReturn(res["responseText"]);
      }
      async getSceneHomeworksAndMustLearnSubjs(sceneid) {
        let url = this.STUDENT_HOMEWORK_SUMMARY;
        let data = {
          schoolId: exports.user.school,
          sourceType: 1,
          sceneId: sceneid
        };
        let res = await requestJson("POST", url, headers.CommonHeader, data);
        return validateReturn(res["responseText"]);
      }
      async getStudentDatSubjects(sceneid, homeworks, mustLearnSubj) {
        let url = this.SCENE_GET_SUBJECT;
        let data = {
          schoolId: exports.user.school,
          sourceType: 1,
          sceneId: sceneid,
          homeworks: homeworks,
          mustLearnSubjectList: mustLearnSubj
        };
        let res = await requestJson("POST", url, headers.CommonHeader, data);
        return validateReturn(res["responseText"]);
      }
      async pageHomeworkTasksByScene_Day(sceneId, homeworkIds, mustLengSubj, dayId) {
        let url = this.HOMEWORK_TASKS_URL;
        let data = {
          "schoolId": exports.user.school,
          "sourceType": 1,
          "homeworkIds": homeworkIds,
          "sceneId": sceneId,
          "mustLearnSubjectList": mustLengSubj,
          "singleSubject": false,
          "specialHomework": false,
          "pageIndex": 1,
          "pageSize": 9999,
          "pageTotal": 1,
          "isLoading": false,
          "dayId": dayId
        };
        let res = await requestJson("POST", url, headers.CommonHeader, data);
        return validateReturn(res["responseText"]);
      }
      async pageHomeworkTasksByScene_Subject(sceneId, homeworkIds, mustLengSubj, subjectId) {
        let url = this.HOMEWORK_TASKS_URL;
        let data = {
          "schoolId": exports.user.school,
          "sourceType": 1,
          "homeworkIds": homeworkIds,
          "sceneId": sceneId,
          "mustLearnSubjectList": mustLengSubj,
          "singleSubject": false,
          "specialHomework": false,
          "pageIndex": 1,
          "pageSize": 9999,
          "pageTotal": 1,
          "isLoading": false,
          "subjectId": subjectId
        };
        let res = await requestJson("POST", url, headers.CommonHeader, data);
        return validateReturn(res["responseText"]);
      }
    }

    class MissionService {
      constructor(user, homeworkId) {
        if (user.school != null) this.schoolid = user.school;else this.schoolid = "";
        this.missionDao = new MissionDao();
        if (homeworkId) this.homeworkIds = [homeworkId];
        this.selection_arr = [];
        this.selection_key = "";
        this.loadSelection();
      }
      async loadSelection() {
        this.selection_key = `localdata.${this.homeworkIds}.selection`;
        if ((await SGM_getValue(this.selection_key)) == undefined) this.selection_arr = [];else this.selection_arr = JSON.parse(await SGM_getValue(this.selection_key));
        this.saveSelection();
      }
      saveSelection() {
        SGM_setValue(this.selection_key, JSON.stringify(this.selection_arr));
      }
      addSelection(o) {
        this.selection_arr.push(o);
        this.saveSelection(); //保存
      }

      rmSelection(c, id) {
        let index = -1;
        for (let c0 in this.selection_arr) {
          if (this.selection_arr[c0].contentType == c && this.selection_arr[c0].id == id) index = parseInt(c0);
        }
        if (index != -1) this.selection_arr.splice(index, 1);
        this.saveSelection();
      }
      emptySelection() {
        this.selection_arr = [];
        this.saveSelection();
      }
      existence(id, contentType) {
        for (let c of this.selection_arr) if (c.id.toString() == id && c.contentType == contentType) return true;
        return false;
      }
      getSelections() {
        return this.selection_arr;
      }
      async getSceneMission(sceneid, byDayOrSubject) {
        let suiminfo = await this.missionDao.getSceneHomeworksAndMustLearnSubjs(sceneid);
        let {
          mustLearnSubjectList
        } = suiminfo;
        let student_day_subj_stat = await this.missionDao.getStudentDatSubjects(sceneid, this.homeworkIds, mustLearnSubjectList);
        let res = [];
        if (byDayOrSubject == 0) {
          let {
            dateStat
          } = student_day_subj_stat;
          for (let i of dateStat) {
            res.push({
              dayid: i.dateList,
              day: i.date
            });
          }
        } else if (byDayOrSubject == 1) {
          let {
            subjectStat
          } = student_day_subj_stat;
          for (let i of subjectStat) {
            let obj = i;
            obj["chinese"] = obj["subjectName"];
            res.push(i);
          }
        }
        return res;
      }
      async buildWithSceneId(sceneid) {
        let suiminfo = await this.missionDao.getSceneHomeworksAndMustLearnSubjs(sceneid);
        let {
          homeworkIds
        } = suiminfo;
        this.homeworkIds = homeworkIds;
        return this;
      }
      async getMissionInfo() {
        let task = await this.missionDao.getMissionInfo(this.homeworkIds[0], this.schoolid);
        return task;
      }
      async getMissionProgress() {
        let progc = await this.missionDao.getHomeworkProgress(this.homeworkIds[0], parseInt(this.schoolid));
        let prog = progc["finishCount"] / progc["count"];
        return prog;
      }
      async getHomeworkBasicInfo(byDayOrBySubject) {
        let res = await this.missionDao.getHomeworkBasicData(this.homeworkIds, byDayOrBySubject);
        return res;
      }
      async pageHomeworkTasks(byDayOrBySubject) {
        let c = await this.getHomeworkBasicInfo(byDayOrBySubject);
        let obj = {};
        if (c["days"].length == 0)
          //subject
          for (let c0 of c["subjectList"]) {
            let coursearr = await this.getHomeworkSubjTask(c0["subjectId"]);
            obj[c0["chinese"].toString()] = {
              id: c0["subjectId"],
              courses: coursearr
            };
          } else for (let c0 of c["days"]) {
          let coursearr = await this.getHomeworkDatedTask(c0["dayId"], c0["day"]);
          obj[getDateFromStamp(c0["day"])] = {
            id: c0["day"],
            dayid: c0["dayId"][0],
            courses: coursearr
          };
        }
        return obj;
      }
      async getHomeworkDatedTask(dayid, day) {
        let courseinfo = await this.missionDao.pageHomeworkTasks(dayid, day, this.homeworkIds);
        return courseinfo["data"];
      }
      async getHomeworkSubjTask(subjectid) {
        let courseinfo = await this.missionDao.pageHomeworkTasksByHomeworkId(subjectid, this.homeworkIds);
        return courseinfo["data"];
      }
    }

    class MultiSelectionComponent {
      //页数Dictionary
      //菜单栏

      //选中的page对应的按钮

      constructor(views, css) {
        this.menu = $(`<div class='${multiselection_style.viewOptions}'></div>`); //菜单栏实例化
        this.page = views;
        this.root = $(`<div class='${multiselection_style.multiViewBox}'></div>`);
        this.selected_element = $();
        this.selected_content = $(`<div class='${multiView}'></div>`);
        let first = true;
        for (let c in views) {
          let option = $(`<div class='${multiselection_style.viewOption}'><label>${c}</label></div>`); //选项按钮
          option.on('click', async () => {
            if (await this.page[c].clickable()) {
              this.changePage(option, c);
            }
          });
          if (first) {
            this.changePage(option, c);
            first = false;
          } //确保是第一个元素
          this.menu.append(option);
        }
        this.root.append(this.menu);
        this.root.append(this.selected_content);
        for (let i in css) {
          this.selected_content.css(i, css[i]);
        }
      }
      addPage(key, page, click) {
        this.page[key].container = page;
        this.page[key].clickable = click;
      }

      /**
       * 将各个Components组装成一个完整的组件
       */
      getPage() {
        return this.root;
      }
      changePage(menuElement, key) {
        let ori_c = this.selected_element.text();
        if (key == ori_c) return;
        if (ori_c.length != 0) {
          this.selected_element.removeClass(`${viewOptionClicked}`);
          this.selected_element.addClass(`${viewOption}`);
          this.page[ori_c].container = this.selected_content.children(":first-child").clone(true, true); //保存更改后的element
        }

        menuElement.addClass(`${viewOptionClicked}`);
        menuElement.removeClass(`${viewOption}`);
        this.selected_content.empty();
        this.selected_content.append(this.page[key].container); //不重新赋值，不能让变量根指针改变
        this.page[key].onclick();
        this.selected_element = menuElement;
      }
    }

    class FinishCourseAbstractService {}

    class FinishCourseService extends FinishCourseAbstractService {
      constructor(lessonid, courseid, homeworkid, courseDao, ratio) {
        super();
        this.lessonid = lessonid.toString();
        this.courseid = courseid.toString();
        this.homeworkid = homeworkid.toString();
        this.courseDao = courseDao;
        this.ratio = ratio;
      }
      async getCourseInfo() {
        let res;
        if (exports.user.school != undefined) {
          res = await this.courseDao.getCourseInfo(this.lessonid, exports.user.school, this.homeworkid);
          res.homeworkId = parseInt(this.homeworkid);
          let c = await this.courseDao.getPlayerLesson([this.lessonid], this.homeworkid, parseInt(exports.user.school));
          res.studyTest = [];
          for (let i of c) {
            res.studyTest.push(i.studyTest);
          }
        }
        return res;
      }
    }

    class CourseDao {
      //详细逻辑处理

      COURSE_DETAIL = "https://gateway.ewt360.com/api/homeworkprod/player/getLessonDetail";
      LESSON_HOMEWORK_URL = "https://gateway.ewt360.com/api/homeworkprod/player/getPlayerLessonConfig";
      COURSE_BATCH_URL = `${config.mip}/api/course/FinishCourse`;
      CHECK_STATE_URL = `${config.mip}/task/status?tid={tid}`;
      async getCourseInfo(lessonid, schoolid, homeworkid) {
        let data = {
          lessonId: parseInt(lessonid.toString()),
          schoolId: schoolid,
          homeworkId: parseInt(homeworkid.toString())
        };
        let result = await requestJson("POST", this.COURSE_DETAIL, headers.CourseHeader, data);
        let res = validateReturn(result["responseText"]);
        if (res.videoPlayTime != undefined) {
          res.duration = res.videoPlayTime;
        }
        if ("lessonName" in res) {
          res.title = res["lessonName"];
        }
        if ("courseId" in res) {
          res.parentContentId = res["courseId"];
        }
        if ("id" in res) res.contentId = res["id"];
        return res;
      }
      async getPlayerLesson(lessonIds, homeworkid, schoolid) {
        let data = {
          "lessonIdList": lessonIds,
          "homeworkId": homeworkid,
          "schoolId": schoolid
        };
        let res = await requestJson("POST", this.LESSON_HOMEWORK_URL, headers.CommonHeader, data);
        return validateReturn(res["responseText"]);
      }
      async FinishCourseFn(courses) {
        let data = {};
        data["courses"] = [];
        for (let i of courses) {
          data["courses"].push({
            lessonid: i["id"],
            homeworkid: parseInt(i.homeworkId.toString())
          });
        }
        let url = this.COURSE_BATCH_URL;
        let res = await requestJson("POST", url, headers.CommonHeader, data);
        return validateLanReturn(res["responseText"]);
      }
      async GetTaskFn(uuid) {
        let url = this.CHECK_STATE_URL.replace("{tid}", uuid);
        let res = await request("GET", url, headers.CommonHeader, undefined);
        return validateLanReturn(res["responseText"]);
      }
    }

    class IFinishCourseController {
      constructor() {
        this.courseDao = new CourseDao();
      }
    }
    class FinishCourseController extends IFinishCourseController {
      constructor() {
        super();
        this.courses = [];
        this.emptyCourse();
        this.task_id = "";
      }
      addCourse(courseid, lessonid, homeworkid, ratio) {
        let serv = new FinishCourseService(lessonid, courseid, homeworkid, this.courseDao, ratio);
        this.courses.push(serv);
      }
      emptyCourse() {
        this.courses = [];
      }
      async FinishCourse() {
        let data = [];
        for (let i of this.courses) {
          data.push(await i.getCourseInfo());
        }
        let ret = await this.courseDao.FinishCourseFn(data);
        if (ret['code'] == 200) {
          this.task_id = ret["data"]["tid"];
        }
        return ret;
      }
      async GetTask() {
        let dat = await this.courseDao.GetTaskFn(this.task_id);
        return dat;
      }
    }

    class TaskView extends View {
      //懒得定义类型了，先这样写吧
      dayComp = {};
      constructor() {
        super();
        this.loading = false;
        this.prog = undefined;
        this.daytask = {};
        this.subjtask = {};
        this.homeworkId = "";
      }
      build(homeworkId) {
        this.homeworkId = homeworkId;
        this.fihHomework = new CourseHomeworkController().buildWithoutLessonId();
        this.ficCourse = new FinishCourseController();
        this.mission = new MissionService(exports.user, parseInt(homeworkId));
        return this;
      }
      async loadData() {
        let dt = (await this.mission.getHomeworkBasicInfo(1))["days"];
        for (let c of dt) {
          this.daytask[getDateFromStamp(c["day"])] = {
            dayid: c["dayId"][0],
            timestamp: c["day"]
          };
        }
        let st = (await this.mission.getHomeworkBasicInfo(0))["subjectList"];
        for (let c of st) {
          this.subjtask[c["chinese"].toString()] = c["subjectId"];
        }
        //数据加载
      }

      async surfaceComponent() {
        let data = await this.mission.getMissionInfo();
        let prog = await this.mission.getMissionProgress();
        await this.loadData(); //载入数据

        let root = $(`<div></div>`);
        root.append(this.HeadComponent(data.homeworkTitle, data.startDate, data.endDate, prog));
        let selection_comp = new MultiSelectionComponent({
          "日期": {
            container: await this.getDayTaskComp(),
            clickable: () => {
              return true;
            },
            onclick: () => {
              let selectedText = $(`.${taskWindowSelected}`);
              selectedText.click();
              /**
               * 作用：重新加载数据
               * 避免在一个界面勾选对应任务然后返回至另一个界面的时候对应任务勾选状态没有同步加载
               */
            }
          },

          "科目": {
            container: await this.getSubjectTaskComp(),
            clickable: () => {
              return true;
            },
            onclick: function () {
              let selectedText = $(`.${taskWindowSelected}`);
              selectedText.click();
            }
          }
        }, {
          width: "100%",
          maxHeight: "400px"
        });
        let foot = $(`<div class="${taskFooter}"></div>`);
        let courseBtn = $(`<div class="${ordiBtn}" style="margin-right: 5px">刷课</div>`);
        let hwkBtn = $(`<div class="${ordiBtn}" style="margin-right: 5px">填写选择题</div>`);
        let fresh = $(`<div class="${ordiBtn}" style="margin-right: 0;">(当天)全(不)选...</div>`);
        let uns = $(`<div class="${ordiBtn}" id="unselect" style="margin-right: 5px;margin-left: auto">反选所有已选(数量:${this.mission.selection_arr.length})...</div>`);
        hwkBtn.on('click', async () => {
          //@ts-ignore
          if (super.lock) return;
          super.setStatus(true);
          hwkBtn.text("请等待...");
          await this.finishHomework(hwkBtn);
          super.setStatus(false); //增加控件锁
        });

        courseBtn.on('click', async () => {
          //@ts-ignore
          if (super.lock) return;
          super.setStatus(true);
          courseBtn.text("请等待...");
          await this.finishCourse(courseBtn);
          super.setStatus(false); //增加控件锁
        });

        fresh.on('click', () => {
          //@ts-ignore
          if (super.lock) return;
          let c = $(`.course-selection`);
          let allcheck = [];
          for (let i of c) {
            if ($(i).prop('checked')) allcheck.push(1);
          }
          if (allcheck.length == c.length)
            //全部被选中
            for (let i of c) i.click();else
            //没有全部被选中
            for (let i of c) {
              if (!$(i).prop('checked'))
                //未被选中
                i.click();
            }
        });
        uns.on('click', () => {
          this.mission.emptySelection();
          let selected = $(`.${taskWindowSelected}`);
          if (selected.length != 0) selected.click();
          uns.text(`反选所有已选(数量:${this.mission.selection_arr.length})...`);
        });
        let warn = $(`<div class="" style="position: relative;font-size: 10px;border: 1px dashed gray;padding: 5px;border-radius: 5px;margin-top: 5px;">注意:操作(刷课,填选择题)完后任务不会自动反选,请<span style="color:red">手动反选</span>,以避免出现对某课程重复操作的情况.</div>`);
        foot.append(courseBtn);
        foot.append(hwkBtn);
        foot.append(uns);
        foot.append(fresh);
        super.pushElement(foot);
        super.pushElement(selection_comp.getPage());
        root.append(selection_comp.getPage());
        root.append(warn);
        root.append(foot);
        return root;
      }
      async finishCourse(btn) {
        btn.css("background-color", "rgb(0,0,0,0)");
        btn.css("color", "unset");
        let course = this.mission.getSelections();
        this.ficCourse.emptyCourse();
        for (let i of course) {
          if (i.contentType == "课程讲") {
            this.ficCourse.addCourse(i["info"]["courseid"], i["info"]["lessonid"], parseInt(this.homeworkId), i["info"]["ratio"]);
          }
        }
        let status = await this.ficCourse.FinishCourse();
        if (status["code"] != 200) {
          btn.text(`错误(${status["message"]})`);
          return;
        }
        while (true) {
          let dat = await this.ficCourse.GetTask();
          if (dat["code"] == 200) {
            if (dat["data"]["errcode"] != 0) {
              btn.text(`错误(${dat["data"]["errmessage"]})`);
              break;
            } else if (dat["data"]["all"] == dat["data"]["do"]) {
              btn.text(`刷课完成!`);
              break;
            } else {
              btn.text(`进度:${parseInt(String(dat["data"]["do"] / dat["data"]["all"] * 1000)) / 10}%`);
            }
          }
          await delay(100);
        }
        await delay(1000);
      }
      async finishHomework(btn) {
        btn.css("background-color", "rgb(0,0,0,0)");
        btn.css("color", "unset");
        let course = this.mission.getSelections();
        this.fihHomework.emptyHomework();
        for (let i of course) {
          if (i.contentType == "课程讲") await this.fihHomework.addHomework(this.homeworkId, parseInt(i.id));else if (i.contentType == "试卷" && i.curl != undefined) await this.fihHomework.addExamPaper(i.curl);
        }
        let status = await this.fihHomework.FillOptionsAll();
        if (status["code"] != 200) {
          btn.text(`错误(${status["message"]})`);
          return;
        }
        while (true) {
          let dat = await this.fihHomework.GetTask();
          if (dat["code"] == 200) {
            if (dat["data"]["errcode"] != 0) {
              btn.text(`错误(${dat["data"]["errmessage"]})`);
              break;
            } else if (dat["data"]["all"] == dat["data"]["do"]) {
              btn.text(`填写选择题完成!`);
              break;
            } else {
              btn.text(`进度:${parseInt(String(dat["data"]["do"] / dat["data"]["all"] * 1000)) / 10}%`);
            }
          } else {
            btn.text(`出现错误(${dat["message"]})`);
            break;
          }
          await delay(100);
        }
        await delay(1000);
      }
      HeadComponent(title, timestamp_start, timestamp_end, prog) {
        let datestartstr = getDateFromStamp(timestamp_start.toString());
        let dateendstr = getDateFromStamp(timestamp_end.toString());
        this.prog = new ProgressBar(prog);
        let head = $(`<div class='${task_style.taskHeadComponent}'></div>`);
        let baseinfo = $(`<div class="${task_style.taskInfo}"></div>`);
        baseinfo.append($(`<div class='${task_style.taskTitle}'>${title}</div>`));
        baseinfo.append($(`<div class='${task_style.taskDate}'>${datestartstr}-${dateendstr}</div>`));
        let prog_comp = $(`<div class='${task_style.taskProgCC}'></div>`);
        prog_comp.append($(`<div class='${task_style.taskProgC}'>
                                <div class='${task_style.taskProgL}'>
                                    进度
                                </div>
                                <div class='${task_style.taskProgR}'>
                                    ${Math.round(this.prog.value * 100)}%
                                </div>
                                </div>`));
        prog_comp.append(this.prog.show());
        baseinfo.append(prog_comp);
        let bg_div = $(`<div class="${task_style.taskInfoBg}"></div>`);
        bg_div.append($(`<img class='${task_style.taskInfoBgImg}' src="${ewt_task_info_bg}"/>`));
        head.append(baseinfo);
        head.append(bg_div);
        this.prog.slideFromZero();
        return head;
      }
      async getDayTaskComp() {
        let root = $(`<div class="${taskWindow}"></div>`);
        let left_bar = $(`<div class="${taskWindowLeftBar}"></div>"`);
        let right_bar = $(`<div class="${taskWindowRightBar}"></div>"`);
        let choices = $(`<div class="${taskWindowChoices}"></div>`);
        for (let c in this.daytask) choices.append($(`<div class="${taskWindowChoice} ${taskWindowNotSelected} dayTask">${c}</div>`));
        left_bar.append($(`<div class="${taskWindowTitle}">日期</div>`));
        left_bar.append(choices);
        root.append(left_bar);
        root.append(right_bar);
        $(document).on("click", `.dayTask.${taskWindowChoice}`, async e => {
          let element = $(e.target);
          this.changeMenuOptions(e);
          let timestamp = this.daytask[element.text()].timestamp;
          let dayid = this.daytask[element.text()].dayid;
          let data = await this.mission.getHomeworkDatedTask([dayid], timestamp);
          right_bar = $(`.${taskWindowRightBar}`);
          right_bar.empty();
          let s = this.getCourseComponent(data);
          for (let c of s) {
            right_bar.append(c);
          }
        });
        return root;
      }
      async getSubjectTaskComp() {
        let root = $(`<div class="${taskWindow}"></div>`);
        let left_bar = $(`<div class="${taskWindowLeftBar}"></div>"`);
        let right_bar = $(`<div class="${taskWindowRightBar}"></div>"`);
        let choices = $(`<div class="${taskWindowChoices}"></div>`);
        for (let c in this.subjtask) choices.append($(`<div class="subjTask ${taskWindowChoice} ${taskWindowNotSelected}">${c}</div>`));
        //增加choices的量

        left_bar.append($(`<div class="subjTask ${taskWindowTitle}">科目</div>`));
        left_bar.append(choices);
        root.append(left_bar);
        root.append(right_bar);
        $(document).on("click", `.subjTask.${taskWindowChoice}`, async e => {
          let element = $(e.target);
          this.changeMenuOptions(e);
          let subjid = this.subjtask[element.text()];
          let data = await this.mission.getHomeworkSubjTask(subjid);
          right_bar = $(`.${taskWindowRightBar}`);
          right_bar.empty();
          let s = this.getCourseComponent(data);
          for (let c of s) right_bar.append(c);
        });
        return root;
      }
      changeMenuOptions(e) {
        let sele = $(`.${taskWindowSelected}`);
        sele.removeClass(`${taskWindowSelected}`);
        sele.addClass(`${taskWindowNotSelected}`);
        let nele = $(e.target);
        nele.addClass(`${taskWindowSelected}`);
        nele.removeClass(`${taskWindowNotSelected}`);
      }
      getCourseComponent(courseinfo) {
        let res = [];
        let count = 0;
        for (let c of courseinfo) {
          let r = $(`<div class="${taskCourseElement}"></div>`);
          let imgdiv = $(`<div><img src="${c.imgUrl}" style="height:45px"/></div>`);
          let right = $(`<div class="${taskCourseEleright}"></div>`);
          let info = $(`<div style="flex:1"></div>`);
          let title = $(`<div class="${taskCourseTitle}">${c.title}</div>`);
          let basicinfo = $(`<div class="${taskCourseBasicInfo}"></div>`);
          let course_subject = $(`<div class="${taskInfoCircle}" style="margin-left:5px">${c.subjectName}</div>`);
          let course_id = $(`<div class="${taskInfoCircle}" style="margin-left:5px">id:${c.contentId}</div>`);
          let course_type = $(`<div class="${taskInfoCircle}">${c.contentTypeName}</div>`);
          let right_selection = $(`<div class="${taskSelectionBox}"></div>`);
          right_selection.append($(`<div class="${taskTime}">${c.duration}秒</div>`));
          let inputbox = $(`<div class="${taskSelection}"></div>`);
          let ipt = $(`<input type="checkbox" class="course-selection"/>`);
          if (this.mission.existence(c.contentId, c.contentTypeName)) ipt.prop("checked", true);
          ipt.on("click", () => {
            if (!this.mission.existence(c.contentId, c.contentTypeName)) {
              let dict = {
                contentType: c.contentTypeName,
                id: c.contentId
              };
              if (dict.contentType == "试卷") dict["curl"] = c.contentUrl;else if (dict.contentType == "课程讲") {
                dict["info"] = {};
                dict["info"]["ratio"] = c.ratio;
                dict["info"]["homeworkid"] = c.homeworkId;
                dict["info"]["lessonid"] = c.contentId;
                let url = getUrlInfo(c.contentUrl);
                dict["info"]["courseid"] = url["courseId"];
              }
              this.mission.addSelection(dict);
            } else this.mission.rmSelection(c.contentTypeName, c.contentId);
            $("#unselect").text(`反选所有已选(数量:${this.mission.selection_arr.length})...`);
          });
          inputbox.append(ipt);
          right_selection.append(inputbox);
          basicinfo.append(course_type);
          basicinfo.append(course_subject);
          basicinfo.append(course_id);
          info.append(title);
          info.append(basicinfo);
          let ele1 = $(`<div style="display:flex"></div>`);
          ele1.append(info);
          ele1.append(right_selection);
          right.append(ele1);
          r.append(imgdiv);
          r.append(right);
          count += 1;
          if (count != courseinfo.length - 1) r.append(`<hr>`);
          res.push(r);
        }
        return res;
      }
    }

    class CourseView extends View {
      fplock = false;
      sklock = false; //两个功能按钮的状态

      constructor() {
        super();
        let info = getUrlInfo(document.location.href);
        this.lessonid = info["lessonId"];
        this.courseid = info["courseId"];
        this.homeworkid = info["homeworkId"];
        this.coursec = new FinishCourseController();
        this.coursec.addCourse(this.courseid, this.lessonid, parseInt(this.homeworkid));
        this.homeworkc = new CourseHomeworkController();
      }

      //这ts的史一样的构造规定，不允许同时用异步构造，没办法只好当这个函数为二次构造
      //使用方案:let newInstance = (await (new XXX(arg1,arg2,...))).build()
      async build() {
        await this.homeworkc.addHomework(this.homeworkid, parseInt(this.lessonid));
        return this;
      }
      async surfaceComponent() {
        let course = this.coursec.courses[0];
        let baseinfo = await course.getCourseInfo();
        let root = $(`
            <div class="${pageMain}"></div>
        `);
        let imge = $(`<div>
            <img src="https://web.ewt360.com/common/customer/study/img/play.png" class="${courseImg}"/>
        </div>`);
        //在getlessondetailv2接口中找不到课程对应的图片，只能用这个图标充数

        let title = $(`<div class="${courseTitle}">${baseinfo.title}</div>`);
        let tag_con = $(`<div class="${tagContainer}"></div>`);
        tag_con.append($(`<div class="${tag}">老师:${baseinfo.teacherName}</div>`));
        tag_con.append($(`<div class="${tag}">${baseinfo.subjectName}</div>`));
        let info = $(`<div class="${basicInfoContainer}"></div>`);
        info.append(this.getInfoKV("课程ID(Course ID)", this.courseid));
        info.append(this.getInfoKV("授课ID(Lesson ID)", this.lessonid));
        info.append(this.getInfoKV("时长", baseinfo.videoPlayTime + "s"));
        if (baseinfo.studyTest != undefined && baseinfo.studyTest.length != 0) for (let c in baseinfo.studyTest) {
          let i = parseInt(c);
          info.append(this.getInfoKV("作业 " + (i + 1), `<a href="https://web.ewt360.com/mystudy/#/exam/answer/?paperId=${baseinfo.studyTest[i].paperId}&bizCode=204&platform=1&isRepeat=1">点击去做作业</a>`));
        }
        let func_con = $(`<div class="${funcBtnsContainer}"></div>`);
        let sk = $(`<div class="${ordiBtn} ${funcBtn}">刷课</div>`);
        let fp = $(`<div class="${ordiBtn} ${funcBtn}">一键填选择题</div>`);
        sk.on('click', async () => {
          await this.finishCourse(sk, this.coursec);
        });
        fp.on('click', async () => {
          await this.finishHomework(fp);
        });
        func_con.append(sk);
        func_con.append(fp);
        root.append(imge);
        root.append(title);
        root.append(tag_con);
        root.append(info);
        root.append(func_con);
        return root;
      }
      async finishCourse(sk, course) {
        if (this.sklock) return;
        this.sklock = true;
        sk.text("请等待...");
        let val = await course.FinishCourse();
        if (val["code"] != 200) {
          sk.text(`错误(${val})`);
        } else {
          while (true) {
            let dat = await this.coursec.GetTask();
            if (dat["state"] == 200) {
              sk.text(`刷课完成!`);
              break;
            } else if (dat["state"] >= 0) {
              sk.text(`刷课中...进度${parseInt(String(dat["progress"] * 1000)) / 10}%`);
            } else {
              sk.text(`刷课失败.(-1)`);
              break;
            }
            await delay(100);
          }
        }
        await delay(1000);
        this.sklock = false;
      }
      async finishHomework(fp) {
        if (this.fplock) return;
        this.fplock = true;
        fp.text("请等待...");
        await this.homeworkc.FillOptionsAll();
        while (true) {
          let dat = await this.homeworkc.GetTask();
          if (dat["state"] == 200) {
            fp.text(`填写选择题完成!`);
            break;
          } else if (dat["state"] >= 0) {
            fp.text(`进度${parseInt(String(dat["progress"] * 1000)) / 10}%`);
          } else {
            fp.text(`填写选择题失败.(-1)`);
            break;
          }
          await delay(100);
        }
        this.fplock = false;
      }
      getInfoKV(left, right) {
        let base = $(`<div class="${basicInfoEntire}"></div>`);
        base.append($(`<div class="${basicInfoEntireLeft}">${left}</div>`));
        base.append($(`<div class="${basicInfoEntireRight}">${right}</div>`));
        return base;
      }
    }

    class LogView extends View {
      table_dic = [{
        name: "等级",
        width: "20%"
      }, {
        name: "时间",
        width: "20%"
      }, {
        name: "详细信息",
        width: "60%"
      }];
      surfaceComponent() {
        let root = $(`<div></div>`);
        root.append(`<div class="${log_style.title}">
            <img width="90px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMklEQVR4nO2YzUtVQRjGf6FRYl+koBLIjT4UdCmJILQTAiVF8i8IglbuWkUSQX+CiK50Idgy0oVoECFBgaAYQX5gbQxCcFGRlSMDz4HhcuWSd+bcc2UeGM6c9515n3nOec+cmYGIyoIJVF4CZ06CEAPMAmfTFuITrpjXwDmv0csgZEfXRaDWM0eqQlqAr6q/BS545ilIGipmDtjQ/QegzjNXQdJQMZuBz7ItA/We+QqShorZCKzJ/hFoqlQhFg3AinyfgCtpkIaKeRl4L/8WcDUN0lAxLwHv1GYbuJYGaaiYF4EltfsC3EiDNFTMWmDB+Xm2p0F6nJj/W775IPWJUhaamRJSlnGYKMQvTHwjQkytSkutFuAR0FvA1yTfCNB2xLrqPvAMeAjUlDCOoigWYFD+qTx7Tj+wpP8voMvx3wZ2Hf/vIqcqplxCxmV/DjxRfc55E99lmwDuAPdKHEcQIaeBPeCP1kv2yGdfT93eD6vPvMdxBBHSLNumY0v25a3AC9UfeBxHECEdsq06tlXZbgFvVO/Vx55w2FiZEnJTNnugkGBdtpyzNB8Cup0dYeaEnAf+Aj+AaqBKs9aBZqZR9Xmq9o+zKgTnqdvZaEB1u3216HE2S9ezJsQ4pVv5f6DyT9c+9TkFTKut9f3MgpBOYCav2JnJol8n7q+Au3n9qvShT+r/Mqa3cxTi6jdBXP16hokbKyGmlmeYmFpCTC3PMDG1hJhaWU0tk5FybJwYIRGkjEPrQLvKeIirLQAAAABJRU5ErkJggg==">
        日志</div>`);
        let table_c = $(`<div class="${log_style.logTableContainer}"></div>`);
        let table = $(`<table class="${log_style.logTable}"></table>`);
        let th = $("<thead></thead>");
        let tr = $(`<tr></tr>`);
        for (let i of this.table_dic) {
          tr.append(`<th style="font-weight: bolder;width: ${i.width}"> ${i.name} </th>`);
        }
        th.append(tr);
        let tbody = $(`<tbody style="line-height: 23px"></tbody>`);
        for (let i of exports.log.log_txt) {
          tr = $("<tr></tr>");
          tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[0].width}">${exports.log.dic[i.level]}</td>`));
          tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[1].width}">${i.time}</td>`));
          tr.append($(`<td style="line-height: 13px;text-align:center;font-weight: bolder;width: ${this.table_dic[2].width}">${i.content}</td>`));
          tbody.append(tr);
        }
        table.append(th);
        table.append(tbody);
        table_c.append(table);
        root.append(table_c);
        table_c[0].scrollTop = table_c[0].scrollHeight;
        let bottom = $(`<div class="${log_style.bottom}">
    注意:若出现问题,请<span style="color: red">将此页面的截图发送给作者，并打开Github的Issue.</span>
        <a href="https://github.com/SudoSuBash/EWT-Killer-Box-Full/issues" class="${log_style.bottomA}"
            style="">点击去到github页面的issue发送议题</a></div>`);
        root.append(bottom);
        return root;
      }
    }

    class ActivateView extends View {
      constructor() {
        super();
        this.userInfo = new UserInfoInterface();
        this.selected_element = $();
        this.selected_page = 0;
        let right = $(`<div class="${activate_style.activatePage}">从左边选择一个页面以继续.</div>`);
        this.right = right;
      }
      surfaceComponent() {
        let root = $(`<div style="display:flex;"></div>`);
        let leftbar = $(`<div class="${activate_style.activateLeftBar}"></div>`);
        leftbar.append($(`<div class="${activate_style.activateLeftBarTitle}">激活</div>`));
        this.pushElement(leftbar);
        let func_container = $(`<div class="${activate_style.activateLeftBarContainer}"></div>`);
        let img = $(gift_card_img);
        img.css("height", "20px");
        img.css("width", "20px");
        func_container.append(this.leftBarElement(img, "礼品卡兑换", () => {
          return this.CodeActiveBox();
        }, 1));
        func_container.append(this.leftBarElement($(donate_img), "商城", () => {
          return this.PurchaseBox();
        }, 2));
        leftbar.append(func_container);
        let r = $(`<div class="${activateInfoBox}" style="
    margin: 0 10px;
    margin-top: auto;
    margin-bottom: 10px;
"></div>`);
        r.append($(`<div style="display: flex;font-size: 11px;font-weight: bold;"><div>操作消耗点数</div</div>`));
        r.append($(`<div style="display: flex"><div>刷课</div><div class="${activateInfoKvV}">2</div>`));
        r.append($(`<div style="display: flex"><div>填写选择题</div><div class="${activateInfoKvV}">1</div>`));
        r.append($(`<div style="display: flex"><div>解锁试卷解析</div><div class="${activateInfoKvV}">2</div>`));
        leftbar.append(r);
        root.append(leftbar);
        root.append(this.right);
        return root;
      }
      leftBarElement(svg, text, page, page_id) {
        let c = $(`<div class="${activateLeftBarContainerElement}"></div>`);
        c.append(svg);
        c.append($(`<div class="${activate_style.activateLeftBarContainerElementText}">${text}</div>`));
        c.on('click', () => {
          this.SwitchPage(c, page(), page_id);
        });
        return c;
      }
      async leftBarElementAsync(svg, text, page, page_id) {
        let c = $(`<div class="${activateLeftBarContainerElement}"></div>`);
        c.append(svg);
        c.append($(`<div class="${activate_style.activateLeftBarContainerElementText}">${text}</div>`));
        c.on('click', async () => {
          this.SwitchPage(c, await page(), page_id);
        });
        return c;
      }
      SwitchPage(btn, page, id) {
        if (this.selected_page == id) return;
        this.selected_element.removeClass(activate_style.activateEnabledSelection);
        this.selected_element = btn;
        this.selected_element.addClass(activate_style.activateEnabledSelection);
        this.right.empty();
        this.right.append(page);
        this.selected_page = id;
      }
      CodeActiveBox() {
        let root = $(`<div class="${activate_style.activatePageContainer}"></div>`);
        let img = $(gift_card_img);
        img.css("height", "100px");
        img.css("width", "100px");
        root.append(img);
        root.append($(`<div class="${activate_style.activateByCodeText}">礼品卡兑换</div>`));
        let box = $(`<div style="width: 300px;"></div>`);
        box.append($(`<div style="font-size: 10px;">输入礼品卡代码</div>`));
        let input = $(`<input type="text" class="${activate_style.activateByCodeInput}" placeholder="Example:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX">`);
        box.append(input);
        root.append(box);
        let status_text = $(`<div class="${activate_style.activateByCodeStatus}"></div>`);
        let click_btn = $(`<div class="${mstyle.ordiBtn}" style="
    font-size: 10px;">点此兑换</div>`);
        root.append(status_text);
        root.append(click_btn);
        input.on("input", () => {
          status_text.text("");
        });
        click_btn.on("click", async () => {
          let val = input.val();
          input.attr("contenteditable", "false");
          status_text.css("color", "green");
          status_text.text("请等待...");
          const matchreg = /^([a-zA-Z0-9]{5}\-){4}([a-zA-Z0-9]{5})$/;
          if (val == undefined || val.toString() == "") {
            status_text.css("color", "red");
            status_text.text("E:请输入礼品卡代码.");
            input.attr("contenteditable", "true");
            return;
          } else if (val.toString().match(matchreg) == null) {
            status_text.css("color", "red");
            status_text.text("E:请输入正确的礼品卡代码.");
            input.attr("contenteditable", "true");
            return;
          }
          let data = await this.userInfo.UserCodeActive(val.toString());
          status_text.text("");
          status_text.css("color", "red");
          if (data["code"] != 200) {
            input.attr("contenteditable", "true");
            status_text.text("E:" + data.message);
          } else {
            this.selected_page = 0;
            this.right.empty();
            this.right.append($(`
                    ${check_ok_img}
                    <div style="
    font-size: 20px;
    font-weight: bolder;
">成功激活</div>
    <div>已经成功通过此礼品卡兑换 ${data["data"]["count"]} 个操作点.</div>
    <div>5 秒后将关闭此窗口.</div>
                    `));
            await updateUserInfo();
            addCloseWindowTimeout(() => {
              closeWindow();
            }, 5000);
          }
        });
        return root;
      }
      PurchaseBox() {
        let selected_sid = -1,
          selected_container = null;
        let root = $(`<div class="${shop_style.shopBaseElement}"></div>`);
        root.append($(`<div class="${shop_style.shopTop}">商城</div>`));
        root.append($(`<div class="${shop_style.shopSubTitle}">以下是商城中您可以买到的所有商品.</div>`));
        let container = $(`<div class="${shop_style.shopContainer}"></div>`);
        root.append(container);
        setTimeout(async () => {
          let all_goods = await this.userInfo.GetAllGoods();
          let item = [];
          if (all_goods["code"] != 0) {
            let data = all_goods["data"];
            for (let i of data) {
              item.push({
                img: i["picture"],
                title: i["name"].toString(),
                price: i["money"],
                sid: i["goodid"]
              });
            }
          }
          for (let i of item) {
            let box = this.GetItemsBox(i.img, i.title, i.price);
            container.append(box);
            box.on('click', () => {
              selected_sid = i.sid;
              if (selected_container != null) {
                selected_container.removeClass(shop_style.shopItemSelected);
              }
              selected_container = box;
              selected_container.addClass(shop_style.shopItemSelected);
            });
          }
        });
        let tail = $(`<div class="${shop_style.shopPayFooter}"></div>`);
        let zfbbtn = $(`<div class="${mstyle.ordiBtn} ${shop_style.shopPaywayImg}">${zfb_img} 支付宝</div>`);
        let wxbtn = $(`<div class="${mstyle.ordiBtn} ${shop_style.shopPaywayImg}" >${wechat_pay_img} 微信</div>`);
        let text_status = $(`<div style="
            margin: 5px 0;
            font-size: 10px;
        ">点击下面任意一个支付方式以进行支付</div>`);
        tail.append(zfbbtn);
        tail.append(wxbtn);
        root.append(text_status);
        root.append(tail);
        zfbbtn.on('click', async () => {
          let res = await pay(2, this.userInfo);
          if (res != -1) {
            this.setStatus(true);
            root.empty();
            root.append(this.payPage(res["qrcode"], res["payId"], "支付宝", res["price"]));
          }
        });
        wxbtn.on('click', async () => {
          let res = await pay(1, this.userInfo);
          if (res != -1) {
            this.setStatus(true);
            root.empty();
            root.append(this.payPage(res["qrcode"], res["payId"], "微信", res["price"]));
          }
        });
        async function pay(way, uinfo) {
          if (selected_sid == -1) {
            text_status.css("color", "red");
            text_status.text("请先选择一个商品后再继续.");
            return -1;
          } else {
            let res = await uinfo.Purchase(selected_sid, way);
            if (res["code"] != 200) {
              text_status.text("错误:" + res["message"]);
              return -1;
            } else {
              return res["data"];
            }
          }
        }
        return root;
      }
      payPage(qrcode, id, way, price) {
        let root = $(`<div class="${shop_style.shopWaitForPay}"></div>`);
        root.append(`<div style="
    font-size: 35px;
    font-weight: bolder;
">付款环节</div>`);
        let img = $(`<img src="${qrcode}">`);
        img.css("width", "100px");
        root.append(img);
        let price_text = $(`<div style="
    color: red;
    font-size: 20px;
    margin-top: 7px;
">RMB ${price}</div>`);
        let att = $(`<div style="font-size: 10px;text-align: center;line-height: 12px;">*注:因为一些原因,可能实际付的款比标注的多0.5元以内.<br>这属于正常现象.</div>`);
        root.append(price_text);
        root.append(att);
        let time = 300;
        let f = $(`<div style="text-align:center">请在 ${time} 秒内完成付款.<br>等到付款结束后,此页面将会刷新.</div>`);
        root.append(f);
        let info = $(`<div class="${shop_style.shopPayInfo}">订单ID: ${id}<br>订单付款方式: ${way}</div>`);
        root.append(info);
        let wrong = $(`<div style="
    margin-top: 5px;
    font-size: 10px;
">点错了?</div>`);
        let a = $(`<a href="#" style="
    font-size: 10px;
    color: #1890ff;
    text-decoration: underline;
">点击取消订单</a>`);
        wrong.append(a);
        root.append(wrong);
        a.on('click', async () => {
          await this.userInfo.CancelOrder(id);
        });
        let c = setInterval(async () => {
          if (time > 0) {
            f.empty();
            f.append($(`<div style="margin-top: 3px;text-align:center">请在 ${time - 1} 秒内完成付款.<br>等到付款结束后,此页面将会刷新.</div>`));
            let res = await this.userInfo.GetPayStatus(id);
            if (res["code"] != 103) {
              if (res["code"] == 105) {
                clearInterval(c);
                let view = this.GetStatusView(fail_img, `订单号为 ${id} 的订单已经被用户取消.`, "失败");
                root.empty();
                root.append(view);
              } else {
                time -= 1;
              }
            } else {
              clearInterval(c);
              root.empty();
              let view = this.GetStatusView(check_ok_img, `订单号为 ${id} 的订单已成功支付.`, "成功", res["data"]["desc"]);
              root.append(view);
            }
          } else {
            clearInterval(c);
            let view = this.GetStatusView(fail_img, `订单号为 ${id} 的订单已经超时,不能继续完成支付.`, "失败");
            root.empty();
            root.append(view);
          }
        }, 1000);
        return root;
      }
      GetStatusView(img, text, text2, desc) {
        let root = $(`<div style="
    display: flex;
    align-items: center;
    flex-direction: column;
"></div>`);
        root.append($(img));
        root.append($(`<div style="
    font-size: 30px;
    font-weight: bolder;
">${text2}</div>`));
        let c = $(`<div style="
    text-align: center;
">${text}</div>
</div>`);
        if (desc != undefined) {
          let r = $(`<span ><br><span style="font-size:10px">此订单的的一些详细信息如下:</span></span>`);
          if (desc["important"]) {
            r.append($(`<br><span style="font-size: 14px;
    font-weight: bolder;
    font-family: fantasy;">${desc["important"]}</span>`));
          }
          if (desc["unimportant"]) {
            r.append($(`<br>${desc["unimportant"]}`));
          }
          c.append(r);
        }
        root.append(c);
        let a = $(`<a href="#" style="
            font-size: 10px;
            color: #1890ff;
            text-decoration: underline;
        ">点击刷新页面</a>`);
        a.on("click", function () {
          location.reload();
        });
        root.append(a);
        return root;
      }
      GetItemsBox(img, title, price) {
        let root = $(`<div class="${shop_style.shopItem}"></div>`);
        root.append($(`<img src="${img}" class="${shop_style.shopItemImg}">`));
        root.append($(`<div class="${shop_style.shopItemTitle}">${title}</div>`));
        root.append($(`<div class="${shop_style.shopItemPriceText}"><span style="
    font-size: 10px;
">RMB</span><span style="
    margin-left: 4px;
    font-weight: bolder;
">${price}</span></div>`));
        return root;
      }
    }

    let UPDATE_URL = `${config.mip}/server/latest`;
    async function getLatestVersion() {
      let res = await request("GET", UPDATE_URL, headers["CommonHeader"], null);
      let txt = JSON.parse(res["responseText"]);
      return txt["data"]["client"];
    }

    class CheckUpdateView extends View {
      constructor(upd_text, url, version) {
        super();
        this.upd_text = upd_text;
        this.url = url;
        this.version = version;
      }
      async surfaceComponent() {
        let root = $(`<div class="${update_info_style.updateLContainer}"></div>`);
        root.append(update_svg);
        root.append($(`<div class="${update_info_style.updateLNewVerText}">新版本可用</div>`));
        let cont = $(`<div class="${update_info_style.updateLNewVerDetailContainer}"></div>`);
        cont.html(this.upd_text);
        root.append(cont);
        root.append(`<a href="${this.url}" style="
    margin-top: 10px;
">点击下载最新版本(${this.version})</a>`);
        return root;
      }
    }

    class PurchaseHistoryView extends View {
      table_dic = [{
        name: "支付id",
        width: "20%"
      }, {
        name: "商品名",
        width: "20%"
      }, {
        name: "价格",
        width: "10%"
      }, {
        name: "状态",
        width: "25%"
      }, {
        name: "支付时间",
        width: "25%"
      }];
      async surfaceComponent() {
        let val = await this.getOrderItem();
        let root = $(`<div class="${purchaseHistory.purchaseHistoryMain}"></div>`);
        root.append(history_purchase_svg);
        root.append($(`<div class="${purchaseHistory.purchaseHistoryText}">历史购买记录</div>`));
        let pare = $(`<div class="${purchaseHistory.purchaseHBuyContainer}"></div>`);
        let table = $(`<table class="${purchaseHistory.purchaseHTable}"></table>`);
        let th = $("<thead></thead>");
        let tr = $(`<tr></tr>`);
        for (let i of this.table_dic) {
          tr.append(`<th style="font-weight: bolder;width: ${i.width}"> ${i.name} </th>`);
        }
        th.append(tr);
        let tbody = $(`<tbody style="line-height: 23px"></tbody>`);
        for (let i of val) {
          tr = $("<tr></tr>");
          tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[0].width}">${i.payid}</td>`));
          tr.append($(`<td style="text-align:center;font-weight: bolder;width: ${this.table_dic[1].width}">${i.shop_name}</td>`));
          tr.append($(`<td style="line-height: 13px;font-weight: bolder;width: ${this.table_dic[2].width}">${i.price}</td>`));
          tr.append($(`<td style="line-height: 13px;font-weight: bolder;width: ${this.table_dic[3].width}">${i.status}</td>`));
          tr.append($(`<td style="line-height: 13px;font-weight: bolder;width: ${this.table_dic[2].width}">${i.time}</td>`));
          tbody.append(tr);
        }
        table.append(th);
        table.append(tbody);
        pare.append(table);
        root.append(pare);
        return root;
      }
      constructor() {
        super();
        this.uInterface = new UserInfoInterface();
      }
      async getOrderItem() {
        let dat = await this.uInterface.GetAllOrders();
        return dat["data"];
      }
    }

    class SceneTaskView extends View {
      //懒得定义类型了，先这样写吧
      dayComp = {};
      constructor() {
        super();
        this.loading = false;
        this.prog = undefined;
        this.daytask = {};
        this.subjtask = {};
        this.sceneId = "";
      }
      async build(sceneid) {
        this.sceneId = sceneid;
        this.mission = await new MissionService(exports.user).buildWithSceneId(sceneid);
        this.fihHomework = new CourseHomeworkController().buildWithoutLessonId();
        this.ficCourse = new FinishCourseController();
        return this;
      }
      async loadData() {
        let dt = await this.mission.getSceneMission(this.sceneId, 0);
        for (let c of dt) {
          this.daytask[getDateFromStamp(c["day"])] = {
            dayid: c["dayid"],
            timestamp: c["day"]
          };
        }
        let st = await this.mission.getSceneMission(this.sceneId, 1);
        for (let c of st) {
          this.subjtask[c["chinese"].toString()] = c["subjectId"];
        }
        //数据加载
      }

      async surfaceComponent() {
        let data = await this.mission.getMissionInfo();
        let prog = await this.mission.getMissionProgress();
        await this.loadData(); //载入数据

        let root = $(`<div></div>`);
        root.append(this.HeadComponent(data.homeworkTitle, data.startDate, data.endDate, prog));
        let selection_comp = new MultiSelectionComponent({
          "日期": {
            container: await this.getDayTaskComp(),
            clickable: () => {
              return true;
            },
            onclick: () => {
              let selectedText = $(`.${taskWindowSelected}`);
              selectedText.click();
              /**
               * 作用：重新加载数据
               * 避免在一个界面勾选对应任务然后返回至另一个界面的时候对应任务勾选状态没有同步加载
               */
            }
          },

          "科目": {
            container: await this.getSubjectTaskComp(),
            clickable: () => {
              return true;
            },
            onclick: function () {
              let selectedText = $(`.${taskWindowSelected}`);
              selectedText.click();
            }
          }
        }, {
          width: "100%",
          maxHeight: "400px"
        });
        let foot = $(`<div class="${taskFooter}"></div>`);
        let courseBtn = $(`<div class="${ordiBtn}" style="margin-right: 5px">刷课</div>`);
        let hwkBtn = $(`<div class="${ordiBtn}" style="margin-right: 5px">填选择题</div>`);
        let fresh = $(`<div class="${ordiBtn}" style="margin-right: 0;">(当天)全(不)选...</div>`);
        let uns = $(`<div class="${ordiBtn}" id="unselect" style="margin-right: 5px;margin-left: auto">反选所有已选(数量:${this.mission.selection_arr.length})...</div>`);
        hwkBtn.on('click', async () => {
          //@ts-ignore
          if (super.lock) return;
          super.setStatus(true);
          hwkBtn.text("请等待...");
          await this.finishHomework(hwkBtn);
          super.setStatus(false); //增加控件锁
        });

        courseBtn.on('click', async () => {
          //@ts-ignore
          if (super.lock) return;
          super.setStatus(true);
          courseBtn.text("请等待...");
          await this.finishCourse(courseBtn);
          super.setStatus(false); //增加控件锁
        });

        fresh.on('click', () => {
          //@ts-ignore
          if (super.lock) return;
          let c = $(`.course-selection`);
          let allcheck = [];
          for (let i of c) {
            if ($(i).prop('checked')) allcheck.push(1);
          }
          if (allcheck.length == c.length)
            //全部被选中
            for (let i of c) i.click();else
            //没有全部被选中
            for (let i of c) {
              if (!$(i).prop('checked'))
                //未被选中
                i.click();
            }
        });
        uns.on('click', () => {
          this.mission.emptySelection();
          let selected = $(`.${taskWindowSelected}`);
          if (selected.length != 0) selected.click();
          uns.text(`反选所有已选(数量:${this.mission.selection_arr.length})...`);
        });
        let warn = $(`<div class="" style="position: relative;font-size: 10px;border: 1px dashed gray;padding: 5px;border-radius: 5px;margin-top: 5px;">注意:操作(刷课,填选择题)完后任务不会自动反选,请<span style="color:red">手动反选</span>,以避免出现对某课程重复操作的情况.</div>`);
        foot.append(courseBtn);
        foot.append(hwkBtn);
        foot.append(uns);
        foot.append(fresh);
        super.pushElement(foot);
        super.pushElement(selection_comp.getPage());
        root.append(selection_comp.getPage());
        root.append(warn);
        root.append(foot);
        return root;
      }
      async finishCourse(btn) {
        btn.css("background-color", "rgb(0,0,0,0)");
        btn.css("color", "unset");
        let course = this.mission.getSelections();
        this.ficCourse.emptyCourse();
        for (let i of course) {
          if (i.contentType == "课程讲") {
            this.ficCourse.addCourse(i["info"]["courseid"], i["info"]["lessonid"], i["info"]["homeworkid"], i["info"]["ratio"]);
          }
        }
        let status = await this.ficCourse.FinishCourse();
        if (status["code"] != 200) {
          btn.text(`错误(${status["message"]})`);
          return;
        }
        while (true) {
          let dat = await this.ficCourse.GetTask();
          if (dat["code"] == 200) {
            if (dat["data"]["errcode"] != 0) {
              btn.text(`错误(${dat["data"]["errmessage"]})`);
              break;
            } else if (dat["data"]["all"] == dat["data"]["do"]) {
              btn.text(`刷课完成!`);
              break;
            } else {
              btn.text(`进度:${parseInt(String(dat["data"]["do"] / dat["data"]["all"] * 1000)) / 10}%`);
            }
          }
          await delay(100);
        }
        await delay(1000);
      }
      async finishHomework(btn) {
        btn.css("background-color", "rgb(0,0,0,0)");
        btn.css("color", "unset");
        let course = this.mission.getSelections();
        this.fihHomework.emptyHomework();
        for (let i of course) {
          if (i.contentType == "课程讲") await this.fihHomework.addHomework(i.homeworkid, parseInt(i.id));else if (i.contentType == "试卷" && i.curl != undefined) await this.fihHomework.addExamPaper(i.curl);
        }
        let status = await this.fihHomework.FillOptionsAll();
        if (status["code"] != 200) {
          btn.text(`错误(${status["message"]})`);
          return;
        }
        while (true) {
          let dat = await this.fihHomework.GetTask();
          if (dat["code"] == 200) {
            if (dat["data"]["errcode"] != 0) {
              btn.text(`错误(${dat["data"]["errmessage"]})`);
              break;
            } else if (dat["data"]["all"] == dat["data"]["do"]) {
              btn.text(`填写选择题完成!`);
              break;
            } else {
              btn.text(`进度:${parseInt(String(dat["data"]["do"] / dat["data"]["all"] * 1000)) / 10}%`);
            }
          } else {
            btn.text(`出现错误(${dat["message"]})`);
            break;
          }
          await delay(100);
        }
        await delay(1000);
      }
      HeadComponent(title, timestamp_start, timestamp_end, prog) {
        let datestartstr = getDateFromStamp(timestamp_start.toString());
        let dateendstr = getDateFromStamp(timestamp_end.toString());
        this.prog = new ProgressBar(prog);
        let head = $(`<div class='${task_style.taskHeadComponent}'></div>`);
        let baseinfo = $(`<div class="${task_style.taskInfo}"></div>`);
        baseinfo.append($(`<div class='${task_style.taskTitle}'>${title}</div>`));
        baseinfo.append($(`<div class='${task_style.taskDate}'>${datestartstr}-${dateendstr}</div>`));
        let prog_comp = $(`<div class='${task_style.taskProgCC}'></div>`);
        prog_comp.append($(`<div class='${task_style.taskProgC}'>
                                <div class='${task_style.taskProgL}'>
                                    进度
                                </div>
                                <div class='${task_style.taskProgR}'>
                                    ${Math.round(this.prog.value * 100)}%
                                </div>
                                </div>`));
        prog_comp.append(this.prog.show());
        baseinfo.append(prog_comp);
        let bg_div = $(`<div class="${task_style.taskInfoBg}"></div>`);
        bg_div.append($(`<img class='${task_style.taskInfoBgImg}' src="${ewt_task_info_bg}"/>`));
        head.append(baseinfo);
        head.append(bg_div);
        this.prog.slideFromZero();
        return head;
      }
      async getDayTaskComp() {
        let root = $(`<div class="${taskWindow}"></div>`);
        let left_bar = $(`<div class="${taskWindowLeftBar}"></div>"`);
        let right_bar = $(`<div class="${taskWindowRightBar}"></div>"`);
        let choices = $(`<div class="${taskWindowChoices}"></div>`);
        for (let c in this.daytask) choices.append($(`<div class="${taskWindowChoice} ${taskWindowNotSelected} dayTask">${c}</div>`));
        left_bar.append($(`<div class="${taskWindowTitle}">日期</div>`));
        left_bar.append(choices);
        root.append(left_bar);
        root.append(right_bar);
        $(document).on("click", `.dayTask.${taskWindowChoice}`, async e => {
          let element = $(e.target);
          this.changeMenuOptions(e);
          let timestamp = this.daytask[element.text()].timestamp;
          let dayid = this.daytask[element.text()].dayid;
          let data = await this.mission.getHomeworkDatedTask(dayid, timestamp);
          right_bar = $(`.${taskWindowRightBar}`);
          right_bar.empty();
          let s = this.getCourseComponent(data);
          for (let c of s) {
            right_bar.append(c);
          }
        });
        return root;
      }
      async getSubjectTaskComp() {
        let root = $(`<div class="${taskWindow}"></div>`);
        let left_bar = $(`<div class="${taskWindowLeftBar}"></div>"`);
        let right_bar = $(`<div class="${taskWindowRightBar}"></div>"`);
        let choices = $(`<div class="${taskWindowChoices}"></div>`);
        for (let c in this.subjtask) choices.append($(`<div class="subjTask ${taskWindowChoice} ${taskWindowNotSelected}">${c}</div>`));
        //增加choices的量

        left_bar.append($(`<div class="subjTask ${taskWindowTitle}">科目</div>`));
        left_bar.append(choices);
        root.append(left_bar);
        root.append(right_bar);
        $(document).on("click", `.subjTask.${taskWindowChoice}`, async e => {
          let element = $(e.target);
          this.changeMenuOptions(e);
          let subjid = this.subjtask[element.text()];
          let data = await this.mission.getHomeworkSubjTask(subjid);
          right_bar = $(`.${taskWindowRightBar}`);
          right_bar.empty();
          let s = this.getCourseComponent(data);
          for (let c of s) right_bar.append(c);
        });
        return root;
      }
      changeMenuOptions(e) {
        let sele = $(`.${taskWindowSelected}`);
        sele.removeClass(`${taskWindowSelected}`);
        sele.addClass(`${taskWindowNotSelected}`);
        let nele = $(e.target);
        nele.addClass(`${taskWindowSelected}`);
        nele.removeClass(`${taskWindowNotSelected}`);
      }
      getCourseComponent(courseinfo) {
        let res = [];
        let count = 0;
        for (let c of courseinfo) {
          let r = $(`<div class="${taskCourseElement}"></div>`);
          let imgdiv = $(`<div><img src="${c.imgUrl}" style="height:45px"/></div>`);
          let right = $(`<div class="${taskCourseEleright}"></div>`);
          let info = $(`<div style="flex:1"></div>`);
          let title = $(`<div class="${taskCourseTitle}">${c.title}</div>`);
          let basicinfo = $(`<div class="${taskCourseBasicInfo}"></div>`);
          let course_subject = $(`<div class="${taskInfoCircle}" style="margin-left:5px">${c.subjectName}</div>`);
          let course_id = $(`<div class="${taskInfoCircle}" style="margin-left:5px">id:${c.contentId}</div>`);
          let course_type = $(`<div class="${taskInfoCircle}">${c.contentTypeName}</div>`);
          let right_selection = $(`<div class="${taskSelectionBox}"></div>`);
          right_selection.append($(`<div class="${taskTime}">${c.duration}秒</div>`));
          let inputbox = $(`<div class="${taskSelection}"></div>`);
          let ipt = $(`<input type="checkbox" class="course-selection"/>`);
          if (this.mission.existence(c.contentId, c.contentTypeName)) ipt.prop("checked", true);
          ipt.on("click", () => {
            if (!this.mission.existence(c.contentId, c.contentTypeName)) {
              let dict = {
                contentType: c.contentTypeName,
                id: c.contentId
              };
              if (dict.contentType == "试卷") dict["curl"] = c.contentUrl;else if (dict.contentType == "课程讲") {
                dict["info"] = {};
                dict["info"]["ratio"] = c.ratio;
                dict["info"]["homeworkid"] = c.homeworkId;
                dict["info"]["lessonid"] = c.contentId;
                let url = getUrlInfo(c.contentUrl);
                dict["info"]["courseid"] = url["courseId"];
              }
              this.mission.addSelection(dict);
            } else this.mission.rmSelection(c.contentTypeName, c.contentId);
            $("#unselect").text(`反选所有已选(数量:${this.mission.selection_arr.length})...`);
          });
          inputbox.append(ipt);
          right_selection.append(inputbox);
          basicinfo.append(course_type);
          basicinfo.append(course_subject);
          basicinfo.append(course_id);
          info.append(title);
          info.append(basicinfo);
          let ele1 = $(`<div style="display:flex"></div>`);
          ele1.append(info);
          ele1.append(right_selection);
          right.append(ele1);
          r.append(imgdiv);
          r.append(right);
          count += 1;
          if (count != courseinfo.length - 1) r.append(`<hr>`);
          res.push(r);
        }
        return res;
      }
    }

    let {
      version
    } = SGM_info.script;
    exports.user = void 0;
    let closeWindowTimeout = [];
    async function openBox() {
      renderBackground();
      let attr = getUrlInfo();
      let viewComponent;
      if (isOnPractisePage()) {
        viewComponent = new HomeworkView(attr["paperId"], attr["bizCode"], attr["platform"], attr["homeworkId"]).surfaceComponent();
      } else if (isInTaskPage()) {
        viewComponent = new TaskView().build(attr["homeworkId"]).surfaceComponent();
      } else if (isInCoursePage()) {
        viewComponent = new CourseView().build().then(view => view.surfaceComponent());
      } else if (isInHolidayFrame()) {
        viewComponent = new SceneTaskView().build(attr["sceneId"]).then(view => view.surfaceComponent());
      } else {
        viewComponent = Promise.resolve(NoPage());
      }
      renderWindow(leftComponent(exports.user), await viewComponent, true);
    }
    async function getUser() {
      let userInterface = new UserInfoInterface();
      const [dat1, dat0, apidat] = await Promise.all([userInterface.getSchoolInfo(), userInterface.getBasicUserInfo(), userInterface.getApiUserInfo()]);
      if (dat0 != null) {
        return {
          id: dat0["userId"],
          name: dat0["realName"],
          photoUrl: dat0["photoUrl"],
          token: getUserToken(),
          school: dat1?.schoolId,
          isvip: apidat["isvip"] || false,
          opcount: apidat["opcount"] || 0
        };
      } else {
        return {
          id: undefined,
          name: undefined,
          photoUrl: undefined,
          isvip: false
        };
      }
    }
    async function updateUserInfo() {
      if (!exports.user) {
        exports.user = await getUser();
      }
    }
    function addCloseWindowTimeout(fn, delay) {
      closeWindowTimeout.push(setTimeout(fn, delay));
    }
    function clearAllCloseWindowTimeout() {
      closeWindowTimeout.forEach(clearTimeout);
      closeWindowTimeout.length = 0;
    }
    async function openUpdateAndVersionBox() {
      let {
        vcode,
        update_log,
        version,
        location
      } = await getLatestVersion();
      if (config.version < vcode) {
        renderBackground();
        renderWindow(undefined, await new CheckUpdateView(update_log, location, version).surfaceComponent(), true);
      } else if ((await SGM_getValue(`kewt.ver.${config.version}`)) === undefined) {
        let root = $__default["default"](`<div class="${update_info_style.updateLContainer}"></div>`);
        root.append(update_svg, $__default["default"](`<div class="${update_info_style.updateLNewVerText}">更新日志</div>`));
        let cont = $__default["default"](`<div class="${update_info_style.updateLNewVerDetailContainer}"></div>`).html(update_log);
        root.append(cont);
        renderBackground();
        renderWindow(undefined, root, true);
        SGM_setValue(`kewt.ver.${config.version}`, 1);
      }
    }

    // 使用事件委托
    // 调用 getMenuBtn 时，不直接绑定 click 事件，而是在按钮上添加统一类及 data 属性保存动作
    let open = getMenuBtn("red", $__default["default"](open_img), "打开工具箱", async () => {
      await openBox();
    });
    let logbtn = getMenuBtn("green", $__default["default"](log_img), "程序日志记录", async () => {
      if (exports.user?.id) {
        renderBackground();
        renderWindow(undefined, new LogView().surfaceComponent(), true);
        const c = document.querySelector(`.${log_style.logTableContainer}`);
        if (c) c.scrollTop = c.scrollHeight;
      } else {
        document.location.href = "https://web.ewt360.com/register/#/login";
      }
    });
    let orderHistoryBtn = getMenuBtn("yellow", $__default["default"](order_svg).css({
      height: "20px",
      width: "20px"
    }), "付款历史记录", async () => {
      renderBackground();
      renderWindow(undefined, await new PurchaseHistoryView().surfaceComponent(), true);
    });
    exports.log = void 0;
    $__default["default"](async () => {
      exports.log = await new LogSystem().build();
      exports.user = await getUser();
      await openUpdateAndVersionBox();
      open.addClass("default-open-btn");
      let ikbtn = getMenuBtn("purple", $__default["default"](input_key_img), "激活", () => {
        if (!exports.user?.id) {
          document.location.href = "https://web.ewt360.com/register/#/login";
        } else {
          renderBackground();
          renderWindow(undefined, new ActivateView().surfaceComponent(), true, undefined, "padding: 0");
        }
      });
      renderWindowMenu([open, ikbtn, orderHistoryBtn, logbtn]);
    });
    $__default["default"](document).on("click", ".tm-menu-btn", function (e) {
      const action = $__default["default"](this).data("action");
      if (typeof action === "function") {
        action.call(this, e);
      }
    });

    // 主要优化:DOM绘制逻辑重写 event解绑优化(事件委托参考Js文档)

    exports.addCloseWindowTimeout = addCloseWindowTimeout;
    exports.clearAllCloseWindowTimeout = clearAllCloseWindowTimeout;
    exports.updateUserInfo = updateUserInfo;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, $);
