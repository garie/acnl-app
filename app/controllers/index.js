/**
 * @class controllers.index
 * @extends Alloy.Controller
 */
(function () {
    "use strict";

    exports.doClick = function () {
        alert($.label.text);
    };

    function init() {
        $.mainWindow.open();
    }

    init();

}(arguments[0] || {}));

exports.doClick = exports.doClick;