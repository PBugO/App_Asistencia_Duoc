"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4802],{4087:(b,d,r)=>{r.r(d),r.d(d,{CorrectoPage:()=>P});var c=r(5861),_=r(6814),p=r(95),l=r(2893),t=r(3582),e=r(6689),m=r(4414);function g(o,i){if(1&o&&(e.TgZ(0,"ion-item")(1,"ion-label",4),e._uU(2),e.qZA(),e._UZ(3,"ion-input",5),e.qZA()),2&o){const a=i.$implicit;e.xp6(2),e.Oqu(a.format),e.xp6(1),e.Q6J("value",a.rawValue)}}let P=(()=>{var o;class i{constructor(n){this.alertController=n,this.isSupported=!1,this.barcodes=[]}ngOnInit(){l.mR.isSupported().then(n=>{this.isSupported=n.supported})}scan(){var n=this;return(0,c.Z)(function*(){if(!(yield n.requestPermissions()))return void n.presentAlert();const{barcodes:u}=yield l.mR.scan();n.barcodes.push(...u)})()}requestPermissions(){return(0,c.Z)(function*(){const{camera:n}=yield l.mR.requestPermissions();return"granted"===n||"limited"===n})()}presentAlert(){var n=this;return(0,c.Z)(function*(){yield(yield n.alertController.create({header:"Permission denied",message:"Please grant camera permission to use the barcode scanner.",buttons:["OK"]})).present()})()}}return(o=i).\u0275fac=function(n){return new(n||o)(e.Y36(m.Br))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-correcto"]],standalone:!0,features:[e.jDz],decls:10,vars:2,consts:[[4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","end"],[3,"disabled","click"],["name","scan"],["position","stacked"],["type","text",3,"value"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Barcode Scanner"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-list"),e.YNc(6,g,4,2,"ion-item",0),e.qZA(),e.TgZ(7,"ion-fab",1)(8,"ion-fab-button",2),e.NdJ("click",function(){return s.scan()}),e._UZ(9,"ion-icon",3),e.qZA()()()),2&n&&(e.xp6(6),e.Q6J("ngForOf",s.barcodes),e.xp6(2),e.Q6J("disabled",!s.isSupported))},dependencies:[t.Pc,t.W2,t.IJ,t.W4,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.q_,t.wd,t.sr,t.j9,_.ez,_.sg,p.u5],styles:[".barcode-scanner-active[_ngcontent-%COMP%]{visibility:hidden;--background: transparent;--ion-background-color: transparent}.barcode-scanner-modal[_ngcontent-%COMP%]{visibility:visible}@media (prefers-color-scheme: dark){.barcode-scanner-modal[_ngcontent-%COMP%]{--background: transparent;--ion-background-color: transparent}}"]}),i})()}}]);