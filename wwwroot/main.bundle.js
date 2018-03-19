webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".progress-bar {\r\n    width: 100%;\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z6\" color=\"primary\">\n  <span><strong>LFGuild</strong></span>\n</mat-toolbar>\n<div class=\"mdl-grid\">\n    <form [formGroup]=\"optionsForm\" class=\"mdl-grid\" style=\"width: 100%\">\n      <div class=\"mdl-cell mdl-cell--2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select formControlName=\"language\" placeholder=\"Sprache\">\n            <mat-option *ngFor=\"let l of languages\" [value]=\"l.value\">\n              {{ l.label }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select formControlName=\"raidsPerWeek\" placeholder=\"Raids pro Woche\">\n            <mat-option *ngFor=\"let rpw of raidsPerWeek\" [value]=\"rpw.value\">\n              {{ rpw.label }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select formControlName=\"nrSites\" placeholder=\"Anz. Seiten die gescannt werden\">\n            <mat-option *ngFor=\"let ns of nrSites\" [value]=\"ns.value\">\n              {{ ns.label }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--2-col\" style=\"padding-top: 16px\"> \n        <div class=\"my-form-field\">\n          <span style=\"margin-right: 16px;\">ordnen nach:</span>\n          <mat-radio-group formControlName=\"orderBy\">\n            <mat-radio-button style=\"margin-right: 8px;\" value=\"ts\">Zeit</mat-radio-button>\n            <mat-radio-button style=\"margin-right: 8px;\" value=\"sc\">Score</mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n      <div class=\"mdl-cell mdl-cell--4-col\" style=\"padding-top: 16px\">\n      </div>\n    </form>\n  </div>\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--1-col\">\n    <button mat-raised-button color=\"primary\" style=\"margin-left: 8px\" (click)=\"startScan()\">WowProgress neu laden</button>  \n  </div>\n  <div class=\"mdl-cell mdl-cell--11-col\">\n    automatisch nachladen in &nbsp;\n    <mat-form-field style=\"width: 50px\">\n      <mat-select [(value)]=\"selectedReloadInterval\">\n        <mat-option *ngFor=\"let m of minutes\" [value]=\"m\">\n          {{ m }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    &nbsp; Minuten &nbsp;<mat-slide-toggle (change)=\"onReloadChange($event)\"></mat-slide-toggle>\n    &nbsp; letztes Update: {{ lastUpdate | date:'HH:mm:ss' }}\n  </div>\n</div>\n<mat-progress-bar *ngIf=\"isLoading\" class=\"progress-bar\" mode=\"indeterminate\"></mat-progress-bar>\n\n\n<!-- <div class=\"mdl-grid mdl-cell mdl-cell--12-col\"> -->\n  <app-result-table style=\"width: 100%\" [dataSource]=\"data | async\"></app-result-table>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var lfguild_service_1 = __webpack_require__("./src/app/services/lfguild.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(fb, lfgService) {
        this.fb = fb;
        this.lfgService = lfgService;
        this.languages = [
            { value: '', label: 'alle' },
            { value: 'de', label: 'Deutsch' },
            { value: 'en', label: 'Englisch' },
        ];
        this.raidsPerWeek = [
            { value: 0, label: 'egal' },
            { value: 1, label: '1 Raid/Woche' },
            { value: 2, label: '2 Raids/Woche' },
            { value: 3, label: '3 Raids/Woche' },
            { value: 4, label: '4 Raids/Woche' },
            { value: 5, label: '5 Raids/Woche' },
            { value: 6, label: '6 Raids/Woche' },
            { value: 7, label: '7 Raids/Woche' },
        ];
        this.nrSites = [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
        ];
        this.minutes = [1, 3, 5, 10, 15, 20, 25, 30];
        this.selectedReloadInterval = 5;
        this.reloadChecked = false;
        this.isLoading = false;
        this.buildForm();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.buildForm = function () {
        var group = {};
        group['language'] = new forms_1.FormControl('de', forms_1.Validators.required);
        group['raidsPerWeek'] = new forms_1.FormControl(3, forms_1.Validators.required);
        group['nrSites'] = new forms_1.FormControl(1, forms_1.Validators.required);
        group['orderBy'] = new forms_1.FormControl('ts', forms_1.Validators.required);
        this.optionsForm = new forms_1.FormGroup(group);
    };
    AppComponent.prototype.startScan = function () {
        var _this = this;
        console.log("loading data");
        this.lastUpdate = new Date();
        this.isLoading = true;
        this.data = this.lfgService.get(this.optionsForm.value);
        this.data.subscribe(function () {
            _this.isLoading = false;
        });
    };
    AppComponent.prototype.onReloadChange = function (change) {
        var _this = this;
        if (change.checked) {
            console.log("reload scheduled");
            this.reloadTimer = setInterval(function () {
                _this.startScan();
            }, this.selectedReloadInterval * 60 * 1000); //this.selectedReloadInterval * 60 * 1000);
        }
        else {
            console.log("reload cancled");
            clearInterval(this.reloadTimer);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, lfguild_service_1.LfguildService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var material_module_1 = __webpack_require__("./src/app/utils/material.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var result_table_component_1 = __webpack_require__("./src/app/result-table/result-table.component.ts");
var lfguild_service_1 = __webpack_require__("./src/app/services/lfguild.service.ts");
var clipboard_service_1 = __webpack_require__("./src/app/services/clipboard.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                result_table_component_1.ResultTableComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                material_module_1.MyMaterialModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
            ],
            providers: [
                lfguild_service_1.LfguildService,
                clipboard_service_1.ClipboardService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/result-table/result-table.component.css":
/***/ (function(module, exports) {

module.exports = ".class-deathknight {\r\n    background-color: rgba(196, 31, 59, 0.8);\r\n}\r\n\r\n.class-demonhunter {\r\n    background-color: rgba(163, 48, 201, 0.8);\r\n}\r\n\r\n.class-druid {\r\n    background-color: rgba(255, 125, 10, 0.8);\r\n}\r\n\r\n.class-hunter {\r\n    background-color: rgba(171, 212, 115, 0.8);\r\n}\r\n\r\n.class-mage {\r\n    background-color: rgba(105, 204, 240, 0.8);\r\n}\r\n\r\n.class-monk {\r\n    background-color: rgba(0, 132, 103, 0.8);\r\n}\r\n\r\n.class-paladin {\r\n    background-color: rgba(245, 140, 186, 0.8);\r\n}\r\n\r\n.class-priest {\r\n    background-color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.class-rogue {\r\n    background-color: rgba(255, 245, 105, 0.8);\r\n}\r\n\r\n.class-shaman {\r\n    background-color: rgba(36, 89, 255, 0.8);\r\n}\r\n\r\n.class-warlock {\r\n    background-color: rgba(148, 130, 202, 0.8);\r\n}\r\n\r\n.class-warrior {\r\n    background-color: rgba(199, 156, 110, 0.8);\r\n}\r\n\r\n.faction-column {\r\n    -webkit-box-flex: 0.3;\r\n        -ms-flex: 0.3;\r\n            flex: 0.3;\r\n}\r\n\r\n.name-column {\r\n    -webkit-box-flex: 0.7;\r\n        -ms-flex: 0.7;\r\n            flex: 0.7;\r\n}\r\n\r\n.ilvl-column {\r\n    -webkit-box-flex: 0.5;\r\n        -ms-flex: 0.5;\r\n            flex: 0.5;\r\n}\r\n\r\n.charlink-column {\r\n    -webkit-box-flex: 0.5;\r\n        -ms-flex: 0.5;\r\n            flex: 0.5;\r\n}\r\n\r\n.race-column {\r\n    -webkit-box-flex: 0.7;\r\n        -ms-flex: 0.7;\r\n            flex: 0.7;\r\n}\r\n\r\n.class-column {\r\n    -webkit-box-flex: 0.7;\r\n        -ms-flex: 0.7;\r\n            flex: 0.7;\r\n}\r\n\r\n.transfer-column {\r\n    -webkit-box-flex: 0.7;\r\n        -ms-flex: 0.7;\r\n            flex: 0.7;\r\n}\r\n\r\n.raidsPerWeek-column {\r\n    -webkit-box-flex: 0.5;\r\n        -ms-flex: 0.5;\r\n            flex: 0.5;\r\n}\r\n\r\n.specs-column {\r\n    -webkit-box-flex: 1.5;\r\n        -ms-flex: 1.5;\r\n            flex: 1.5;\r\n}\r\n\r\n.pveScore-column {\r\n    -webkit-box-flex: 0.5;\r\n        -ms-flex: 0.5;\r\n            flex: 0.5;\r\n}\r\n\r\n.mPlusScore-column {\r\n    -webkit-box-flex: 0.5;\r\n        -ms-flex: 0.5;\r\n            flex: 0.5;\r\n}\r\n\r\n.export-column {\r\n    -webkit-box-flex: 0.2;\r\n        -ms-flex: 0.2;\r\n            flex: 0.2;\r\n}"

/***/ }),

/***/ "./src/app/result-table/result-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\" style=\"margin-left: 8px\">\n  <mat-expansion-panel class=\"mdl-cell mdl-cell--12-col\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <b>Filter</b>\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n\n    <div class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select placeholder=\"Server\" [(value)]=\"selectedServers\" (selectionChange)=\"onFilter()\" multiple>\n            <mat-option *ngFor=\"let s of servers\" [value]=\"s\">\n              {{ s }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select placeholder=\"Klasse\" [(value)]=\"selectedClasses\" (selectionChange)=\"onFilter()\" multiple>\n            <mat-option *ngFor=\"let c of classes\" [value]=\"c\">\n              {{ c }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select placeholder=\"Transfer\" [(value)]=\"selectedTransfer\" (selectionChange)=\"onFilter()\" multiple>\n            <mat-option *ngFor=\"let t of transfer\" [value]=\"t\">\n              {{ t }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select placeholder=\"Specs\" [(value)]=\"selectedSpecs\" (selectionChange)=\"onFilter()\" multiple>\n            <mat-option *ngFor=\"let s of specs\" [value]=\"s\">\n              {{ s }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell-2-col\">\n        <mat-form-field class=\"my-form-field\">\n          <mat-select placeholder=\"minimales ILvl\" [(value)]=\"selectedIlvl\" (selectionChange)=\"onFilter()\">\n            <mat-option *ngFor=\"let l of ilvls\" [value]=\"l\">\n              {{ l }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell-2-col\"></div>\n    </div>\n  </mat-expansion-panel>\n</div>\n<div class=\"mdl-grid\" >\n  <div class=\"mdl-cell mdl-cell--12-col mat-elevation-z2\">\n    <mat-table #table [dataSource]=\"_dataSource\" matSort>\n        \n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <ng-container matColumnDef=\"faction\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"faction-column\"> <b>Faction</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"faction-column\">\n          <img *ngIf=\"row.faction == 'horde'\" src=\"assets/wow-horde-icon.png\" width=\"24px\">\n          <img *ngIf=\"row.faction == 'alliance'\" src=\"assets/wow-alliance-icon.png\" width=\"24px\">\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"name-column\"> <b>Name</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"name-column\"> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"server\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"server-column\"> <b>Server</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"server-column\"> {{row.server }} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"ilvl\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"ilvl-column\"> <b>Item-Level</b> </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" class=\"ilvl-column\"> {{row.ilvl }} </mat-cell>\n        </ng-container>\n\n      <ng-container matColumnDef=\"guild\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"guild-column\"> <b>Guild</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"guild-column\"> \n          <a href=\"https://www.wowprogress.com{{row.guildlink}}\" target=\"_blank\"><b>{{row.guild}}</b></a> \n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"charlink\">\n        <mat-header-cell *matHeaderCellDef class=\"charlink-column\"> <b>Links</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"charlink-column\"> \n          <a href=\"https://www.wowprogress.com{{row.charlink}}\" target=\"_blank\"><img width=\"24px\" src=\"favicon.ico\"></a> \n          <a href=\"https://www.warcraftlogs.com{{row.charlink}}\" target=\"_blank\"><img width=\"24px\" src=\"assets/warcraftlogs-icon.png\"></a>\n          <a href=\"{{row.armory}}\" target=\"_blank\"><img width=\"24px\" src=\"assets/wow-icon.png\"></a>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"timestamp\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"timestamp-column\"> <b>Zuletzt aktualisiert</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"timestamp-column\">{{row.timestamp | date: 'MMM d, y, HH:mm:ss'}}</mat-cell>\n      </ng-container>\n\n      <!-- <ng-container matColumnDef=\"race\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"race-column\"> <b>Volk</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"race-column\">{{row.race }}</mat-cell>\n      </ng-container> -->\n\n      <!-- <ng-container matColumnDef=\"class\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"class-column\"> <b>Klasse</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"class-column\">{{row.clazz }}</mat-cell>\n      </ng-container> -->\n\n      <ng-container matColumnDef=\"battletag\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"battletag-column\"> <b>Battletag</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"battletag-column\">{{row.battletag }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"languages\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"languages-column\"> <b>Sprachen</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"languages-column\">{{row.languages }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"transfer\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"transfer-column\"> <b>Transfer</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"transfer-column\">{{row.transfer }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"raidsPerWeek\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"raidsPerWeek-column\"> <b>Raids/Woche</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"raidsPerWeek-column\">{{row.raidsPerWeek }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"specs\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"specs-column\"> <b>Specs</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"specs-column\">{{row.specs }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"pveScore\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"pveScore-column\"> <b>PvE Score</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"pveScore-column\">{{row.pveScore }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"mPlusScore\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"mPlusScore-column\"> <b>M+ Score</b> </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"mPlusScore-column\">{{row.mPlusScore }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"export\">\n        <mat-header-cell *matHeaderCellDef class=\"export-column\"></mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"export-column\"><button mat-icon-button (click)=\"copyToClipboard(row)\"><mat-icon>content_copy</mat-icon></button></mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row [ngClass]=\"'class-'+row.clazz.replace(' ', '')\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/result-table/result-table.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var clipboard_service_1 = __webpack_require__("./src/app/services/clipboard.service.ts");
var ResultTableComponent = /** @class */ (function () {
    function ResultTableComponent(clipboardService) {
        this.clipboardService = clipboardService;
        this.displayedColumns = ['faction', 'name', 'server', 'ilvl', 'specs', 'pveScore', 'mPlusScore', 'battletag', 'guild', 'charlink', 'raidsPerWeek', 'transfer', 'languages', 'timestamp', 'export'];
        this._dataSource = new material_1.MatTableDataSource([]);
        this.ilvls = [950, 955, 960, 965, 970, 975, 980, 985, 990];
    }
    Object.defineProperty(ResultTableComponent.prototype, "dataSource", {
        set: function (value) {
            if (value) {
                this._dataSource = new material_1.MatTableDataSource(value);
                this.data = value;
                this._dataSource.sort = this.sort;
                this.classes = this.getClasses(value);
                this.servers = this.getServers(value);
                this.transfer = this.getTransfers(value);
                this.specs = this.getSpecs(value);
                this.onFilter();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ResultTableComponent.prototype.ngOnInit = function () {
    };
    ResultTableComponent.prototype.ngAfterViewInit = function () {
        this._dataSource.sort = this.sort;
    };
    ResultTableComponent.prototype.getClasses = function (result) {
        var res = new Array();
        result.forEach(function (r) {
            if (res.findIndex(function (e) { return e == r.clazz; }) == -1) {
                res.push(r.clazz);
            }
        });
        return res;
    };
    ResultTableComponent.prototype.getServers = function (result) {
        var res = new Array();
        result.forEach(function (r) {
            if (res.findIndex(function (e) { return e == r.server; }) == -1) {
                res.push(r.server);
            }
        });
        return res;
    };
    ResultTableComponent.prototype.getTransfers = function (result) {
        var res = new Array();
        result.forEach(function (r) {
            if (res.findIndex(function (e) { return e == r.transfer; }) == -1) {
                res.push(r.transfer);
            }
        });
        return res;
    };
    ResultTableComponent.prototype.getSpecs = function (result) {
        var res = new Array();
        result.forEach(function (r) {
            var specs = r.specs.split(',');
            specs.forEach(function (element) {
                if (res.findIndex(function (r) { return r == element.trim(); }) == -1) {
                    res.push(element.trim());
                }
            });
        });
        return res;
    };
    ResultTableComponent.prototype.copyToClipboard = function (row) {
        var text = '';
        text += row.name + ' ' + row.server + ' \n';
        text += row.clazz + ' ' + row.specs + ' \n';
        text += row.transfer + ' \n';
        text += 'PvE Score: ' + row.pveScore + ' \n';
        text += 'M+ Score: ' + row.mPlusScore + ' \n';
        text += 'Gilde: https://www.wowprogress.com' + row.guildlink + ' \n';
        text += 'WowProgress: https://www.wowprogress.com' + row.charlink + ' \n';
        text += 'Logs: https://www.warcraftlogs.com' + row.charlink + ' \n';
        text += 'Armory: ' + row.armory + ' \n';
        this.clipboardService.copy(text);
    };
    ResultTableComponent.prototype.onFilter = function () {
        var _this = this;
        var filtered = this.data;
        var remove = new Array();
        filtered.forEach(function (d) {
            if (_this.selectedServers && _this.selectedServers.length > 0) {
                var rem_1 = true;
                _this.selectedServers.forEach(function (s) {
                    if (d.server == s) {
                        rem_1 = false;
                    }
                });
                if (rem_1) {
                    remove.push(d);
                }
            }
            if (_this.selectedClasses && _this.selectedClasses.length > 0) {
                var rem_2 = true;
                _this.selectedClasses.forEach(function (c) {
                    if (d.clazz == c) {
                        rem_2 = false;
                    }
                });
                if (rem_2) {
                    remove.push(d);
                }
            }
            if (_this.selectedTransfer && _this.selectedTransfer.length > 0) {
                var rem_3 = true;
                _this.selectedTransfer.forEach(function (t) {
                    if (d.transfer == t) {
                        rem_3 = false;
                    }
                });
                if (rem_3) {
                    remove.push(d);
                }
            }
            if (_this.selectedSpecs && _this.selectedSpecs.length > 0) {
                var rem_4 = true;
                _this.selectedSpecs.forEach(function (s) {
                    if (d.specs.includes(s)) {
                        rem_4 = false;
                    }
                });
                if (rem_4) {
                    remove.push(d);
                }
            }
            if (_this.selectedIlvl) {
                var rem = true;
                if (+d.ilvl > _this.selectedIlvl) {
                    rem = false;
                }
                if (rem) {
                    remove.push(d);
                }
            }
        });
        remove.forEach(function (r) {
            filtered = filtered.filter(function (obj) { return obj != r; });
        });
        this._dataSource = new material_1.MatTableDataSource(filtered);
        this._dataSource.sort = this.sort;
    };
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], ResultTableComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Input('dataSource'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ResultTableComponent.prototype, "dataSource", null);
    ResultTableComponent = __decorate([
        core_1.Component({
            selector: 'app-result-table',
            template: __webpack_require__("./src/app/result-table/result-table.component.html"),
            styles: [__webpack_require__("./src/app/result-table/result-table.component.css")]
        }),
        __metadata("design:paramtypes", [clipboard_service_1.ClipboardService])
    ], ResultTableComponent);
    return ResultTableComponent;
}());
exports.ResultTableComponent = ResultTableComponent;


/***/ }),

/***/ "./src/app/services/clipboard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ClipboardService = /** @class */ (function () {
    // I initialize the Clipboard service.
    // --
    // CAUTION: This service is tightly couped to the browser DOM (Document Object Model).
    // But, by injecting the "document" reference rather than trying to reference it
    // globally, we can at least pretend that we are trying to lower the tight coupling.
    function ClipboardService(dom) {
        this.dom = dom;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I copy the given value to the user's system clipboard. Returns a promise that
    // resolves to the given value on success or rejects with the raised Error.
    ClipboardService.prototype.copy = function (value) {
        var textarea = null;
        try {
            // In order to execute the "Copy" command, we actually have to have
            // a "selection" in the currently rendered document. As such, we're
            // going to inject a Textarea element and .select() it in order to
            // force a selection.
            // --
            // NOTE: This Textarea is being rendered off-screen.
            textarea = this.dom.createElement("textarea");
            textarea.style.height = "0px";
            textarea.style.left = "-100px";
            textarea.style.opacity = "0";
            textarea.style.position = "fixed";
            textarea.style.top = "-100px";
            textarea.style.width = "0px";
            this.dom.body.appendChild(textarea);
            // Set and select the value (creating an active Selection range).
            textarea.value = value;
            textarea.select();
            // Ask the browser to copy the current selection to the clipboard.
            this.dom.execCommand("copy");
        }
        finally {
            // Cleanup - remove the Textarea from the DOM if it was injected.
            if (textarea && textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
            }
        }
    };
    ClipboardService = __decorate([
        core_2.Injectable(),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [Document])
    ], ClipboardService);
    return ClipboardService;
}());
exports.ClipboardService = ClipboardService;


/***/ }),

/***/ "./src/app/services/lfguild.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var LfguildService = /** @class */ (function () {
    function LfguildService(http) {
        this.http = http;
    }
    LfguildService.prototype.get = function (options) {
        return this.http.get('/api/getlfg?language=' + options.language + '&raidsPerWeek=' + options.raidsPerWeek + '&nrSites=' + options.nrSites + '&orderBy=' + options.orderBy).map(function (res) { return res.json(); });
    };
    LfguildService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LfguildService);
    return LfguildService;
}());
exports.LfguildService = LfguildService;


/***/ }),

/***/ "./src/app/utils/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var table_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var MyMaterialModule = /** @class */ (function () {
    function MyMaterialModule() {
    }
    MyMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule
            ]
        })
    ], MyMaterialModule);
    return MyMaterialModule;
}());
exports.MyMaterialModule = MyMaterialModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map