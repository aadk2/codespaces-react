import{_ as s}from"./index-a1b3c359.js";class o{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function a(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-104292fc.js"),["assets/Connector-104292fc.js","assets/CanvasUtils-17904c9f.js","assets/index-a1b3c359.js","assets/index-74c5beae.css","assets/ExternalInteractorBase-029fb1b6.js"]);return new e(t)},n)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};