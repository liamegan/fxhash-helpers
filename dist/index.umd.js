!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n||self).fxhashHelpers={})}(this,function(n){var e,t=function(){if("function"!=typeof e)throw new Error("fxhash has not been defined, did you call FXInit?")},o=function(n,o){return t(),n+(o-n)*e()};n.FXInit=function(n){"function"==typeof n&&(e=n)},n.FXRandVec2=function(){return t(),[e(),e()]},n.FXRandVec3=function(){return t(),[e(),e(),e()]},n.FXRandVec4=function(){return t(),[e(),e(),e(),e()]},n.FXRandomBetween=o,n.FXRandomBool=function(n){return t(),isNaN(n)&&(n=.5),e()<n},n.FXRandomIntBetween=function(n,e){return t(),Math.floor(o(n,e))},n.FXRandomOption=function(n){return t(),n[Math.floor(e()*n.length)]},n.getWeightedOption=function(n){t();var o,f=[];for(var i in n)f=f.concat(new Array(n[i][1]).fill(n[i][0]));return(o=f)[e()*o.length|0]}});
//# sourceMappingURL=index.umd.js.map