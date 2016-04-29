System.register(['angular2/core', "./header-bar.component", "./manga.service"], function(exports_1, context_1) {
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
    var core_1, header_bar_component_1, manga_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_bar_component_1_1) {
                header_bar_component_1 = header_bar_component_1_1;
            },
            function (manga_service_1_1) {
                manga_service_1 = manga_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_mangaService) {
                    this._mangaService = _mangaService;
                }
                AppComponent.prototype.getMangas = function () {
                    var _this = this;
                    this._mangaService.getMangas().then(function (mangas) { return _this.mangas = mangas; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getMangas();
                };
                AppComponent.prototype.onSelect = function (manga) {
                    this.selectedManga = manga;
                    console.log("clicked");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"bar bar-subheader bar-stable item-input-inset\">\n      <label class=\"item-input-wrapper\">\n        <i class=\"icon ion-ios-search placeholder-icon\"></i>\n        <input type=\"search\" placeholder=\"Search\">\n      </label>\n    </div>\n    <br>\n    <br>\n    <div class=\"list card\" *ngFor=\"#manga of mangas\">\n      <div class=\"item item-avatar\">\n        <img src=\"{{manga.authorDp}}\">\n        <h2>{{manga.authorId}}</h2>\n        <p>{{manga.dateAdded}}</p>\n      </div>\n      <div class=\"item item-body\">\n        <img class=\"full-image\" src=\"{{manga.preview}}\" (click)=\"onSelect(manga)\">\n        <h3 (click)=\"onSelect(manga)\">{{manga.name}}</h3>\n        <p>{{manga.description}}</p>\n        <p><a href=\"#\" class=\"subdued\">{{manga.likes}} Like</a><a href=\"#\" class=\"subdued\">{{manga.comments}} Comments</a></p>\n      </div>\n    </div>\n    <header-bar [manga]=\"selectedManga\"></header-bar>\n\n   \t<div class=\"tabs tabs-icon-top\">\n      <a class=\"tab-item\">\n        <i class=\"icon ion-home\"></i>\n        Home\n      </a>\n      <a class=\"tab-item\">\n        <i class=\"icon ion-star\"></i>\n        Favorites\n      </a>\n      <a class=\"tab-item\">\n        <i class=\"icon ion-gear-a\"></i>\n        Settings\n      </a>\n    </div>\n    ",
                        directives: [header_bar_component_1.HeaderBarComponent],
                        providers: [manga_service_1.MangaService]
                    }), 
                    __metadata('design:paramtypes', [manga_service_1.MangaService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map