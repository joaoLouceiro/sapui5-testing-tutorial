sap.ui.define([
    "sap/ui/model/SimpleType"
], function (SimpleType) {
    "use strict";
    return SimpleType.extend("sap.ui.demo.bulletinboard.model.FlaggedType", {
        formatValue: function (value) {
            return value == 1;
        },
        parseValue: function (value) {
            return value == true ? 1 : 0;
        },
        validateValue: function () {
                return true;
        }
    });
});
