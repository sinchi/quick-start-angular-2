"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.minutes = 24;
        this.seconds = 59;
        setInterval(function () { return _this.tick(); }, 1000);
    }
    AppComponent.prototype.resetPomodoro = function () {
        this.minutes = 24;
        this.seconds = 59;
    };
    AppComponent.prototype.tick = function () {
        if (--this.seconds < 0) {
            this.seconds = 59;
            if (--this.minutes < 0) {
                this.resetPomodoro();
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pomodoro-timer',
        template: "\n  <h1>{{minutes}} : {{seconds}}</h1>\n  <p>\n    <button (click)=\"togglePause()\">\n      {{ buttonLabel }}\n    </button>\n  </p>\n  ",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map