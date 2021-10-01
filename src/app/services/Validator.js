"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = /** @class */ (function () {
    function Validator(data, typeOfObject) {
        this.data = data;
        this.typeOfObject = typeOfObject;
    }
    Validator.prototype.checkValuesIsInObject = function () {
        var hasAllValuesInObject = true;
        if (this.typeOfObject === "announcement") {
            var announcementsFields = [
                "id_advertiser",
                "segment",
                "type",
                "location",
                "url",
            ];
            for (var _i = 0, announcementsFields_1 = announcementsFields; _i < announcementsFields_1.length; _i++) {
                var field = announcementsFields_1[_i];
                if (!this.data[field]) {
                    hasAllValuesInObject = false;
                }
            }
        }
        else if (this.typeOfObject === "advertiser") {
            var advertisersFields = ["name", "city", "segment"];
            for (var _a = 0, advertisersFields_1 = advertisersFields; _a < advertisersFields_1.length; _a++) {
                var field = advertisersFields_1[_a];
                if (!this.data[field]) {
                    hasAllValuesInObject = false;
                }
            }
        }
        return hasAllValuesInObject;
    };
    Validator.prototype.checkNullValues = function () {
        var hasNullValues = false;
        if (typeof this.data === "object") {
            for (var key in this.data) {
                if (!this.data[key]) {
                    hasNullValues = true;
                }
            }
        }
        return hasNullValues;
    };
    return Validator;
}());
exports.default = Validator;
