"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3485],{3485:(C,u,a)=>{a.r(u),a.d(u,{LoginPageModule:()=>f});var d=a(177),l=a(4341),n=a(7863),c=a(2146),h=a(467),t=a(4438);const p=[{path:"",component:(()=>{class e{constructor(i,o){this.alertController=i,this.router=o,this.usuario="",this.password=""}ngOnInit(){}login(){"javiera"==this.usuario.trim()&&"4321"==this.password.trim()?this.router.navigate(["/menu-ppal"],{state:{usuarioEnviado:this.usuario,passwordEnviada:this.password}}):this.presentAlert("Password ncorrecta")}registro(){this.router.navigate(["/home"])}presentAlert(i){var o=this;return(0,h.A)(function*(){yield(yield o.alertController.create({header:"Mensaje",message:i,buttons:["OK"]})).present()})()}static#t=this.\u0275fac=function(o){return new(o||e)(t.rXU(n.hG),t.rXU(c.Ix))};static#n=this.\u0275cmp=t.VBU({type:e,selectors:[["app-login"]],decls:33,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","medium"],[1,"ion-text-center","cuerpo-page"],["size","12",1,"ion-text-center"],["src","assets/Tortas.png","alt","Imagen de Tortas",1,"logo"],["position","floating"],["type","text","maxlength","8","minlength","3",3,"ngModelChange","ngModel"],["type","Password","maxlength","4",3,"ngModelChange","ngModel"],["expand","block",3,"click"],[3,"click"]],template:function(o,s){1&o&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Convertidor de Recetas"),t.k0s()()(),t.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t.EFF(8,"Convertidor de Recetas"),t.k0s()()(),t.j41(9,"div",4)(10,"ion-card")(11,"ion-card-title")(12,"h1"),t.EFF(13,"Bienvenidos"),t.k0s()(),t.j41(14,"ion-grid")(15,"ion-row")(16,"ion-col",5),t.nrm(17,"img",6),t.k0s()()(),t.j41(18,"ion-card-content")(19,"ion-item")(20,"ion-label",7),t.EFF(21,"Usuario"),t.k0s(),t.j41(22,"ion-input",8),t.mxI("ngModelChange",function(r){return t.DH7(s.usuario,r)||(s.usuario=r),r}),t.k0s()(),t.j41(23,"ion-item")(24,"ion-label",7),t.EFF(25,"Password"),t.k0s(),t.j41(26,"ion-input",9),t.mxI("ngModelChange",function(r){return t.DH7(s.password,r)||(s.password=r),r}),t.k0s()()(),t.j41(27,"ion-button",10),t.bIt("click",function(){return s.login()}),t.EFF(28,"Ingrese ahora"),t.k0s(),t.j41(29,"ion-label"),t.EFF(30,"No est\xe1s registrado? --\x3e Registrate aqu\xed "),t.k0s(),t.j41(31,"ion-button",11),t.bIt("click",function(){return s.registro()}),t.EFF(32,"Registro"),t.k0s()()()()),2&o&&(t.Y8G("translucent",!0),t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(18),t.R50("ngModel",s.usuario),t.R7$(4),t.R50("ngModel",s.password))},dependencies:[l.BC,l.xh,l.tU,l.vS,n.Jm,n.b_,n.I9,n.tN,n.hU,n.W9,n.lO,n.eU,n.$w,n.uz,n.he,n.ln,n.BC,n.ai,n.Gw],styles:["h1[_ngcontent-%COMP%]{color:#382b01}ion-card[_ngcontent-%COMP%]{background-color:transparent}ion-card-tittle[_ngcontent-%COMP%]{color:#382b01;font-size:1.5em;font-weight:300}.logo[_ngcontent-%COMP%]{max-width:50%;height:auto}ion-label[_ngcontent-%COMP%]{color:red;font-size:1.5em}"]})}return e})()}];let m=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.$C({type:e});static#e=this.\u0275inj=t.G2t({imports:[c.iI.forChild(p),c.iI]})}return e})(),f=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.$C({type:e});static#e=this.\u0275inj=t.G2t({imports:[d.MD,l.YN,n.bv,m]})}return e})()}}]);