let n;const t=function(t){"function"==typeof t&&(n=t)},o=function(){if("function"!=typeof n)throw new Error("fxhash has not been defined, did you call FXInit?")},e=(t,e)=>(o(),t+(e-t)*n()),r=(n,t)=>(o(),Math.floor(e(n,t))),f=function(t){return o(),t[Math.floor(n()*t.length)]},i=function(t){return o(),isNaN(t)&&(t=.5),n()<t},c=()=>(o(),[n(),n()]),l=()=>(o(),[n(),n(),n()]),u=()=>(o(),[n(),n(),n(),n()]),a=function(t){o();let e=[];for(let n in t)e=e.concat(new Array(t[n][1]).fill(t[n][0]));return(r=e)[n()*r.length|0];var r};export{t as FXInit,c as FXRandVec2,l as FXRandVec3,u as FXRandVec4,e as FXRandomBetween,i as FXRandomBool,r as FXRandomIntBetween,f as FXRandomOption,a as getWeightedOption};
//# sourceMappingURL=index.modern.js.map