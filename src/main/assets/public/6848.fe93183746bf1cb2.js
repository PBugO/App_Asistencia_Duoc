"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6848],{6848:(b,p,s)=>{s.r(p),s.d(p,{BarcodeScanningPage:()=>Z});var u=s(5861),r=s(95),t=s(2893),o=s(3582),_=s(6814),e=s(6689);function m(c,g){if(1&c&&(e.ynx(0),e.TgZ(1,"ion-card")(2,"ion-card-content")(3,"ion-item")(4,"ion-label",5),e._uU(5,"Bytes"),e.qZA(),e._UZ(6,"ion-input",13),e.qZA(),e.TgZ(7,"ion-item")(8,"ion-label",5),e._uU(9,"Corner Points"),e.qZA(),e._UZ(10,"ion-input",13),e.qZA(),e.TgZ(11,"ion-item")(12,"ion-label",5),e._uU(13,"Display Value"),e.qZA(),e._UZ(14,"ion-input",13),e.qZA(),e.TgZ(15,"ion-item")(16,"ion-label",5),e._uU(17,"Format"),e.qZA(),e._UZ(18,"ion-input",13),e.qZA(),e.TgZ(19,"ion-item")(20,"ion-label",5),e._uU(21,"Raw Value"),e.qZA(),e._UZ(22,"ion-input",13),e.qZA(),e.TgZ(23,"ion-item")(24,"ion-label",5),e._uU(25,"Value Type"),e.qZA(),e._UZ(26,"ion-input",13),e.qZA()()(),e.BQk()),2&c){const l=g.$implicit;e.xp6(6),e.Q6J("value",(null==l.bytes?null:l.bytes.toString())||""),e.xp6(4),e.Q6J("value",(null==l.cornerPoints?null:l.cornerPoints.toString())||""),e.xp6(4),e.Q6J("value",l.displayValue),e.xp6(4),e.Q6J("value",l.format),e.xp6(4),e.Q6J("value",l.rawValue),e.xp6(4),e.Q6J("value",l.valueType)}}let Z=(()=>{var c;class g{constructor(a){this.ngZone=a,this.barcodeFormat=t.wK,this.lensFacing=t.yA,this.formGroup=new r.nJ({formats:new r.p4([]),lensFacing:new r.p4(t.yA.Back),googleBarcodeScannerModuleInstallState:new r.p4(0),googleBarcodeScannerModuleInstallProgress:new r.p4(0)}),this.barcodes=[],this.isSupported=!1,this.isPermissionGranted=!1,this.GH_URL="https://github.com/capawesome-team/capacitor-barcode-scanning"}ngOnInit(){var a=this;return(0,u.Z)(function*(){yield t.mR.isGoogleBarcodeScannerModuleAvailable().then(function(){var n=(0,u.Z)(function*(i){i.available||(yield t.mR.installGoogleBarcodeScannerModule())});return function(i){return n.apply(this,arguments)}}()),t.mR.isSupported().then(n=>{a.isSupported=n.supported}),t.mR.checkPermissions().then(function(){var n=(0,u.Z)(function*(i){a.isPermissionGranted="granted"===i.camera,a.isPermissionGranted||(yield t.mR.requestPermissions().then(d=>{a.isPermissionGranted="granted"===d.camera}))});return function(i){return n.apply(this,arguments)}}()),t.mR.removeAllListeners().then(()=>{t.mR.addListener("googleBarcodeScannerModuleInstallProgress",n=>{a.ngZone.run(()=>{console.log("googleBarcodeScannerModuleInstallProgress",n);const{state:i,progress:d}=n;a.formGroup.patchValue({googleBarcodeScannerModuleInstallState:i,googleBarcodeScannerModuleInstallProgress:d})})})})})()}scan(){var a=this;return(0,u.Z)(function*(){var n;const i=(null===(n=a.formGroup.get("formats"))||void 0===n?void 0:n.value)||[],{barcodes:d}=yield t.mR.scan({formats:i});a.barcodes=d})()}openSettings(){return(0,u.Z)(function*(){yield t.mR.openSettings()})()}requestPermissions(){return(0,u.Z)(function*(){yield t.mR.requestPermissions()})()}openOnGithub(){window.open(this.GH_URL,"_blank")}}return(c=g).\u0275fac=function(a){return new(a||c)(e.Y36(e.R0b))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-barcode-scanning"]],standalone:!0,features:[e.jDz],decls:76,vars:22,consts:[["slot","start"],["defaultHref","home"],[1,"ion-no-padding"],["fill","clear",1,"ion-float-right",3,"click"],[3,"formGroup"],["position","fixed"],["multiple","true","placeholder","Formats","formControlName","formats"],[3,"value"],["formControlName","lensFacing"],["formControlName","googleBarcodeScannerModuleInstallState","type","number",3,"readonly"],["formControlName","googleBarcodeScannerModuleInstallProgress","type","number",3,"readonly"],["expand","block",3,"disabled","click"],[4,"ngFor","ngForOf"],["type","text","readonly","",3,"value"]],template:function(a,n){1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Barcode Scanning"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-card")(8,"ion-card-header")(9,"ion-card-title"),e._uU(10,"About"),e.qZA()(),e.TgZ(11,"ion-card-content"),e._uU(12," \u26a1\ufe0f Capacitor plugin for scanning barcodes and QR codes. "),e.qZA(),e.TgZ(13,"ion-row",2)(14,"ion-col")(15,"ion-button",3),e.NdJ("click",function(){return n.openOnGithub()}),e._uU(16,"GitHub"),e.qZA()()()(),e.TgZ(17,"ion-card")(18,"ion-card-header")(19,"ion-card-title"),e._uU(20,"Demo"),e.qZA()(),e.TgZ(21,"ion-card-content")(22,"form",4)(23,"ion-item")(24,"ion-label",5),e._uU(25,"Formats"),e.qZA(),e.TgZ(26,"ion-select",6)(27,"ion-select-option",7),e._uU(28,"Aztec"),e.qZA(),e.TgZ(29,"ion-select-option",7),e._uU(30,"Codabar"),e.qZA(),e.TgZ(31,"ion-select-option",7),e._uU(32,"Code39"),e.qZA(),e.TgZ(33,"ion-select-option",7),e._uU(34,"Code93"),e.qZA(),e.TgZ(35,"ion-select-option",7),e._uU(36,"Code128"),e.qZA(),e.TgZ(37,"ion-select-option",7),e._uU(38,"DataMatrix"),e.qZA(),e.TgZ(39,"ion-select-option",7),e._uU(40,"Ean8"),e.qZA(),e.TgZ(41,"ion-select-option",7),e._uU(42,"Ean13"),e.qZA(),e.TgZ(43,"ion-select-option",7),e._uU(44,"Itf"),e.qZA(),e.TgZ(45,"ion-select-option",7),e._uU(46,"Pdf417"),e.qZA(),e.TgZ(47,"ion-select-option",7),e._uU(48,"QrCode"),e.qZA(),e.TgZ(49,"ion-select-option",7),e._uU(50,"UpcA"),e.qZA(),e.TgZ(51,"ion-select-option",7),e._uU(52,"UpcE"),e.qZA()()(),e.TgZ(53,"ion-item")(54,"ion-label",5),e._uU(55,"Lens Facing"),e.qZA(),e.TgZ(56,"ion-select",8)(57,"ion-select-option",7),e._uU(58,"Front"),e.qZA(),e.TgZ(59,"ion-select-option",7),e._uU(60,"Back"),e.qZA()()(),e.TgZ(61,"ion-item")(62,"ion-label",5),e._uU(63,"Google Barcode Scanner Module Install State"),e.qZA(),e._UZ(64,"ion-input",9),e.qZA(),e.TgZ(65,"ion-item")(66,"ion-label",5),e._uU(67,"Google Barcode Scanner Module Install Progress"),e.qZA(),e._UZ(68,"ion-input",10),e.qZA(),e.TgZ(69,"ion-button",11),e.NdJ("click",function(){return n.scan()}),e._uU(70,"Scan"),e.qZA(),e.TgZ(71,"ion-button",11),e.NdJ("click",function(){return n.openSettings()}),e._uU(72,"Open Settings"),e.qZA(),e.TgZ(73,"ion-button",11),e.NdJ("click",function(){return n.requestPermissions()}),e._uU(74,"Request Permissions"),e.qZA()()()(),e.YNc(75,m,27,6,"ng-container",12),e.qZA()),2&a&&(e.xp6(22),e.Q6J("formGroup",n.formGroup),e.xp6(5),e.Q6J("value",n.barcodeFormat.Aztec),e.xp6(2),e.Q6J("value",n.barcodeFormat.Codabar),e.xp6(2),e.Q6J("value",n.barcodeFormat.Code39),e.xp6(2),e.Q6J("value",n.barcodeFormat.Code93),e.xp6(2),e.Q6J("value",n.barcodeFormat.Code128),e.xp6(2),e.Q6J("value",n.barcodeFormat.DataMatrix),e.xp6(2),e.Q6J("value",n.barcodeFormat.Ean8),e.xp6(2),e.Q6J("value",n.barcodeFormat.Ean13),e.xp6(2),e.Q6J("value",n.barcodeFormat.Itf),e.xp6(2),e.Q6J("value",n.barcodeFormat.Pdf417),e.xp6(2),e.Q6J("value",n.barcodeFormat.QrCode),e.xp6(2),e.Q6J("value",n.barcodeFormat.UpcA),e.xp6(2),e.Q6J("value",n.barcodeFormat.UpcE),e.xp6(6),e.Q6J("value",n.lensFacing.Front),e.xp6(2),e.Q6J("value",n.lensFacing.Back),e.xp6(5),e.Q6J("readonly",!0),e.xp6(4),e.Q6J("readonly",!0),e.xp6(1),e.Q6J("disabled",!n.isSupported),e.xp6(2),e.Q6J("disabled",!n.isSupported),e.xp6(2),e.Q6J("disabled",n.isPermissionGranted),e.xp6(2),e.Q6J("ngForOf",n.barcodes))},dependencies:[o.Pc,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.Dq,o.wI,o.W2,o.Gu,o.pK,o.Ie,o.Q$,o.Nd,o.t9,o.n0,o.wd,o.sr,o.as,o.QI,o.j9,o.oU,_.ez,_.sg,r.u5,r._Y,r.JJ,r.JL,r.UX,r.sg,r.u]}),g})()}}]);