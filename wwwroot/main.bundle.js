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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z6\" color=\"primary\">\n  <span><strong>LFGuild</strong></span>\n</mat-toolbar>\n<div class=\"mdl-grid mdl-cell mdl-cell-6-col\">\n    <form [formGroup]=\"optionsForm\" class=\"mdl-grid\" style=\"width: 100%\">\n      <div class=\"mdl-cell mdl-cell--4-col\">\n        <mat-form-field>\n          <mat-select formControlName=\"raidsPerWeek\" placeholder=\"Raids pro Woche\">\n            <mat-option *ngFor=\"let rpw of raidsPerWeek\" [value]=\"rpw.value\">\n              {{ rpw.label }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--4-col\">\n        <mat-form-field>\n          <mat-select formControlName=\"nrSites\" placeholder=\"Anz. Seiten die gescannt werden\">\n            <mat-option *ngFor=\"let ns of nrSites\" [value]=\"ns.value\">\n              {{ ns.label }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"mdl-cell mdl-cell--4-col\" style=\"padding-top: 16px\"> \n          <span style=\"margin-right: 16px;\">ordnen nach:</span>\n          <mat-radio-group formControlName=\"orderBy\">\n            <mat-radio-button style=\"margin-right: 8px;\" value=\"ts\">Zeit</mat-radio-button>\n            <mat-radio-button style=\"margin-right: 8px;\" value=\"sc\">Score</mat-radio-button>\n          </mat-radio-group>\n      </div>\n    </form>\n  </div>\n<div class=\"mdl-grid mdl-cell mdl-cell--12-col\">\n  <button mat-raised-button color=\"primary\" style=\"margin-left: 8px\">WowProgress neu laden</button>\n</div>\n\n<!-- <div class=\"mdl-grid mdl-cell mdl-cell--12-col\"> -->\n  <app-result-table style=\"width: 100%\"></app-result-table>\n<!-- </div> -->"

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
var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
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
        this.buildForm();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.buildForm = function () {
        var group = {};
        group['raidsPerWeek'] = new forms_1.FormControl(3, forms_1.Validators.required);
        group['nrSites'] = new forms_1.FormControl(10, forms_1.Validators.required);
        group['orderBy'] = new forms_1.FormControl('ts', forms_1.Validators.required);
        this.optionsForm = new forms_1.FormGroup(group);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
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
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var material_module_1 = __webpack_require__("./src/app/utils/material.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var result_table_component_1 = __webpack_require__("./src/app/result-table/result-table.component.ts");
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
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/result-table/result-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/result-table/result-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\" >\n  <div class=\"mdl-cell mdl-cell--12-col mat-elevation-z2\">\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n        \n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"name-column\"> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"name-column\"> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"server\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"server-column\"> Server </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"server-column\"> {{row.server }} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"ilvl\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header class=\"ilvl-column\"> Item-Level </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" class=\"ilvl-column\"> {{row.ilvl }} </mat-cell>\n        </ng-container>\n\n      <ng-container matColumnDef=\"charlink\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"charlink-column\"> WoWProgress </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"charlink-column\"> {{row.charlink}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"timestamp\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"timestamp-column\"> Zuletzt aktualisiert </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"timestamp-column\">{{row.timestamp }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"race\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"race-column\"> Volk </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"race-column\">{{row.race }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"class\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"class-column\"> Klasse </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"class-column\">{{row.class }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"battletag\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"battletag-column\"> Battletag </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"battletag-column\">{{row.battletag }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"languages\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"languages-column\"> Sprachen </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"languages-column\">{{row.languages }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"transfer\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"transfer-column\"> Transfer </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"transfer-column\">{{row.transfer }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"raidsPerWeek\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"raidsPerWeek-column\"> Raids/Woche </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"raidsPerWeek-column\">{{row.raidsPerWeek }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"specs\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"specs-column\"> Specs </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"specs-column\">{{row.specs }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"pveScore\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"pveScore-column\"> PvE Score </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"pveScore-column\">{{row.pveScore }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"mPlusScore\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"mPlusScore-column\"> M+ Score </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" class=\"mPlusScore-column\">{{row.mPlusScore }}</mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n  </div>\n</div>"

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
var testdata_1 = __webpack_require__("./src/app/result-table/testdata.ts");
var ResultTableComponent = /** @class */ (function () {
    function ResultTableComponent() {
        this.dataSource = testdata_1.testdata;
        this.displayedColumns = ['name', 'server', 'ilvl', 'charlink', 'timestamp', 'race', 'class', 'battletag', 'languages', 'transfer', 'raidsPerWeek', 'specs', 'pveScore', 'mPlusScore'];
    }
    ResultTableComponent.prototype.ngOnInit = function () {
    };
    ResultTableComponent = __decorate([
        core_1.Component({
            selector: 'app-result-table',
            template: __webpack_require__("./src/app/result-table/result-table.component.html"),
            styles: [__webpack_require__("./src/app/result-table/result-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultTableComponent);
    return ResultTableComponent;
}());
exports.ResultTableComponent = ResultTableComponent;


/***/ }),

/***/ "./src/app/result-table/testdata.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.testdata = [
    { name: 'Nosk',
        server: 'EU (DE)-Ysera',
        ilvl: '970.25',
        charlink: '/character/eu/ysera/Nosk',
        timestamp: '2018-03-16T21:14:39.000Z',
        race: 'night elf',
        clazz: 'rogue',
        battletag: '',
        languages: 'German, English',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '1 - 3',
        specs: '',
        pveScore: '5789.23',
        mPlusScore: '' },
    { name: 'Fippsii',
        server: 'EU (DE)-Thrall',
        ilvl: '965.56',
        charlink: '/character/eu/thrall/Fippsii',
        timestamp: '2018-03-16T19:20:07.000Z',
        race: 'blood elf',
        clazz: 'priest',
        battletag: 'Osh#2929',
        languages: 'German, English',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '1 - 3',
        specs: 'healer',
        pveScore: '3234.33',
        mPlusScore: '2386.26' },
    { name: 'Mikamí',
        server: 'EU (DE)-Eredar',
        ilvl: '969.94',
        charlink: '/character/eu/eredar/Mikam%C3%AD',
        timestamp: '2018-03-16T19:15:48.000Z',
        race: 'troll',
        clazz: 'druid',
        battletag: 'Vaermi#2543',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '1 - 3',
        specs: 'restoration',
        pveScore: '4873.00',
        mPlusScore: '1088.91' },
    { name: 'Sippynator',
        server: 'EU (DE)-Eredar',
        ilvl: '961.50',
        charlink: '/character/eu/eredar/Sippynator',
        timestamp: '2018-03-16T18:49:33.000Z',
        race: 'troll',
        clazz: 'druid',
        battletag: '',
        languages: 'German, English',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '2 - 3',
        specs: 'balance, feral-dd',
        pveScore: '3429.90',
        mPlusScore: '2390.07' },
    { name: 'Nickschnick',
        server: 'EU (DE)-Frostwolf',
        ilvl: '974.94',
        charlink: '/character/eu/frostwolf/Nickschnick',
        timestamp: '2018-03-16T18:32:47.000Z',
        race: 'tauren',
        clazz: 'deathknight',
        battletag: 'SchnickNick#21850',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 3',
        specs: 'tank',
        pveScore: '6620.93',
        mPlusScore: '' },
    { name: 'Rewzy',
        server: 'EU (DE)-Blackhand',
        ilvl: '932.38',
        charlink: '/character/eu/blackhand/Rewzy',
        timestamp: '2018-03-16T18:21:59.000Z',
        race: 'blood elf',
        clazz: 'paladin',
        battletag: 'Rewzy#2686',
        languages: 'German',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '1 - 4',
        specs: 'holy, protection, retribution',
        pveScore: '272.37',
        mPlusScore: '473.97' },
    { name: 'Vanexa',
        server: 'EU (DE)-Blackrock',
        ilvl: '955.75',
        charlink: '/character/eu/blackrock/Vanexa',
        timestamp: '2018-03-16T18:03:19.000Z',
        race: 'blood elf',
        clazz: 'mage',
        battletag: 'SymeksHD#2972',
        languages: 'German',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '2 - 3',
        specs: '',
        pveScore: '280.50',
        mPlusScore: '1777.19' },
    { name: 'Timalia',
        server: 'EU (DE)-Blackhand',
        ilvl: '965.44',
        charlink: '/character/eu/blackhand/Timalia',
        timestamp: '2018-03-16T17:24:27.000Z',
        race: 'blood elf',
        clazz: 'deathknight',
        battletag: 'Tima#22604',
        languages: 'German, English',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '2 - 5',
        specs: 'tank',
        pveScore: '401.62',
        mPlusScore: '1255.18' },
    { name: 'Nethre',
        server: 'EU (DE)-Antonidas',
        ilvl: '969.44',
        charlink: '/character/eu/antonidas/Nethre',
        timestamp: '2018-03-16T17:21:29.000Z',
        race: 'draenei',
        clazz: 'shaman',
        battletag: 'Nethre#2503',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 3',
        specs: 'restoration',
        pveScore: '4471.89',
        mPlusScore: '2457.02' },
    { name: 'Mirakulaisda',
        server: 'EU (DE)-Antonidas',
        ilvl: '968.13',
        charlink: '/character/eu/antonidas/Mirakulaisda',
        timestamp: '2018-03-16T16:40:21.000Z',
        race: 'night elf',
        clazz: 'druid',
        battletag: 'Winner#2889',
        languages: 'German',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '2 - 4',
        specs: 'balance, restoration',
        pveScore: '3057.58',
        mPlusScore: '2323.47' },
    { name: 'Zetyu',
        server: 'EU (DE)-Eredar',
        ilvl: '965.50',
        charlink: '/character/eu/eredar/Zetyu',
        timestamp: '2018-03-16T16:26:24.000Z',
        race: 'blood elf',
        clazz: 'deathknight',
        battletag: 'Zetyu1708#2264',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 4',
        specs: 'dd',
        pveScore: '3279.53',
        mPlusScore: '2047.66' },
    { name: 'Lynestra',
        server: 'EU (DE)-Todeswache',
        ilvl: '961.44',
        charlink: '/character/eu/todeswache/Lynestra',
        timestamp: '2018-03-16T16:05:36.000Z',
        race: 'human',
        clazz: 'warlock',
        battletag: 'Raabi#21472',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '1 - 3',
        specs: '',
        pveScore: '3061.10',
        mPlusScore: '2634.53' },
    { name: 'Iremy',
        server: 'EU (DE)-Blackrock',
        ilvl: '963.63',
        charlink: '/character/eu/blackrock/Iremy',
        timestamp: '2018-03-16T15:18:08.000Z',
        race: 'orc',
        clazz: 'shaman',
        battletag: 'Toni#2320',
        languages: 'German, English',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '1 - 3',
        specs: 'elemental, restoration',
        pveScore: '1238.38',
        mPlusScore: '2214.42' },
    { name: 'Rirre',
        server: 'EU (DE)-Mannoroth',
        ilvl: '956.00',
        charlink: '/character/eu/mannoroth/Rirre',
        timestamp: '2018-03-16T14:57:14.000Z',
        race: 'human',
        clazz: 'paladin',
        battletag: 'Rirre#2140',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 3',
        specs: 'retribution',
        pveScore: '283.89',
        mPlusScore: '165.94' },
    { name: 'Dholla',
        server: 'EU (DE)-Sen\'jin',
        ilvl: '973.13',
        charlink: '/character/eu/sen-jin/Dholla',
        timestamp: '2018-03-16T14:27:16.000Z',
        race: 'blood elf',
        clazz: 'paladin',
        battletag: '',
        languages: 'German, English',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 4',
        specs: 'holy, protection, retribution',
        pveScore: '1934.02',
        mPlusScore: '2604.44' },
    { name: 'Аннетти',
        server: 'EU (RU)-Гордунни',
        ilvl: '959.94',
        charlink: '/character/eu/%D0%B3%D0%BE%D1%80%D0%B4%D1%83%D0%BD%D0%BD%D0%B8/%D0%90%D0%BD%D0%BD%D0%B5%D1%82%D1%82%D0%B8',
        timestamp: '2018-03-16T13:58:22.000Z',
        race: 'night elf',
        clazz: 'deathknight',
        battletag: 'Аннюта#2733',
        languages: 'Russian, English, German',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '2 - 3',
        specs: 'tank',
        pveScore: '2524.66',
        mPlusScore: '1183.57' },
    { name: 'Trafi',
        server: 'EU (DE)-Kult der Verdammten',
        ilvl: '957.50',
        charlink: '/character/eu/kult-der-verdammten/Trafi',
        timestamp: '2018-03-16T13:13:06.000Z',
        race: 'blood elf',
        clazz: 'monk',
        battletag: 'Garaldor#21954',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '3 - 4',
        specs: 'tank',
        pveScore: '404.03',
        mPlusScore: '1519.90' },
    { name: 'Lucyas',
        server: 'EU-Sylvanas',
        ilvl: '960.19',
        charlink: '/character/eu/sylvanas/Lucyas',
        timestamp: '2018-03-16T12:23:44.000Z',
        race: 'human',
        clazz: 'hunter',
        battletag: '',
        languages: 'English, German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 4',
        specs: '',
        pveScore: '295.93',
        mPlusScore: '976.18' },
    { name: 'Eàzy',
        server: 'EU-Tarren Mill',
        ilvl: '926.00',
        charlink: '/character/eu/tarren-mill/E%C3%A0zy',
        timestamp: '2018-03-16T11:25:32.000Z',
        race: 'troll',
        clazz: 'druid',
        battletag: 'Eàzy#2329',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 4',
        specs: 'feral-dd',
        pveScore: '',
        mPlusScore: '' },
    { name: 'Halvór',
        server: 'EU (DE)-Die Aldor',
        ilvl: '958.88',
        charlink: '/character/eu/die-aldor/Halv%C3%B3r',
        timestamp: '2018-03-16T09:27:35.000Z',
        race: 'human',
        clazz: 'hunter',
        battletag: 'Bishop#2749',
        languages: 'German',
        transfer: 'Yes, without transfer',
        raidsPerWeek: '1 - 3',
        specs: '',
        pveScore: '474.24',
        mPlusScore: '1765.81' },
    { name: 'Talâzar',
        server: 'EU (DE)-Blackhand',
        ilvl: '958.50',
        charlink: '/character/eu/blackhand/Tal%C3%A2zar',
        timestamp: '2018-03-16T08:19:13.000Z',
        race: 'orc',
        clazz: 'warrior',
        battletag: 'Blackknife#2708',
        languages: 'German, English',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 3',
        specs: 'dd',
        pveScore: '1159.46',
        mPlusScore: '731.63' },
    { name: 'Sapsarap',
        server: 'EU (DE)-Blackmoore',
        ilvl: '955.00',
        charlink: '/character/eu/blackmoore/Sapsarap',
        timestamp: '2018-03-16T04:17:29.000Z',
        race: 'blood elf',
        clazz: 'rogue',
        battletag: '',
        languages: 'German, English',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '1 - 3',
        specs: '',
        pveScore: '295.48',
        mPlusScore: '' },
    { name: 'Kendøra',
        server: 'EU (DE)-Kult der Verdammten',
        ilvl: '964.00',
        charlink: '/character/eu/kult-der-verdammten/Kend%C3%B8ra',
        timestamp: '2018-03-15T23:20:04.000Z',
        race: 'blood elf',
        clazz: 'monk',
        battletag: 'redfox#21277',
        languages: 'German',
        transfer: 'Yes, ready to transfer',
        raidsPerWeek: '2 - 4',
        specs: 'healer',
        pveScore: '292.01',
        mPlusScore: '472.70' }
];


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