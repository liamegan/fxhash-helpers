var n,t=function(t){"function"==typeof t&&(n=t)},r=function(){if("function"!=typeof n)throw new Error("fxhash has not been defined, did you call FXInit?")},o=function(t,o){return r(),t+(o-t)*n()},f=function(n,t){return r(),Math.floor(o(n,t))},u=function(t){return r(),t[Math.floor(n()*t.length)]},e=function(t){return r(),isNaN(t)&&(t=.5),n()<t},i=function(){return r(),[n(),n()]},c=function(){return r(),[n(),n(),n()]},a=function(){return r(),[n(),n(),n(),n()]},h=function(t){r();var o,f=[];for(var u in t)f=f.concat(new Array(t[u][1]).fill(t[u][0]));return(o=f)[n()*o.length|0]};export{t as FXInit,i as FXRandVec2,c as FXRandVec3,a as FXRandVec4,o as FXRandomBetween,e as FXRandomBool,f as FXRandomIntBetween,u as FXRandomOption,h as getWeightedOption};
//# sourceMappingURL=index.module.js.map
