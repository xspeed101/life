var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var level2 = /** @class */ (function (_super) {
        __extends(level2, _super);
        // Public Properties
        // Constructor
        function level2(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        // Public Methods
        // Initialize Game Variables and objects
        level2.prototype.Start = function () {
            this._backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
            this.Main();
        };
        level2.prototype.Update = function () {
        };
        // This is where the fun happens
        level2.prototype.Main = function () {
            // add the backButton to the scene
            this.addChild(this._backButton);
        };
        return level2;
    }(objects.Scene));
    scenes.level2 = level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map