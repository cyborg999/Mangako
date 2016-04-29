System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: "header",
                        template: "\n\t\t<div class=\"bar bar-header bar-positive\">\n\t      <button class=\"button button-icon icon ion-navicon\"></button>\n\t      <h1 class=\"title\">{{title}} <span *ngIf=\"selectedManga\">- {{selectedManga.name}}</span></h1>\n\t    </div>\n\t \t<div class=\"bar bar-subheader bar-stable item-input-inset\">\n\t      <label class=\"item-input-wrapper\">\n\t        <i class=\"icon ion-ios-search placeholder-icon\"></i>\n\t        <input type=\"search\" placeholder=\"Search\">\n\t      </label>\n\t    </div>\n\t    <br>\n\t    <br>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=app.header.js.map