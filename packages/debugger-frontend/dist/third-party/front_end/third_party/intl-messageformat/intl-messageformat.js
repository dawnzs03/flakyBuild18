var e,t,r,i,n,s,o=function(){return o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};function a(e){return e.type===r.literal}function u(e){return e.type===r.argument}function l(e){return e.type===r.number}function c(e){return e.type===r.date}function h(e){return e.type===r.time}function p(e){return e.type===r.select}function f(e){return e.type===r.plural}function E(e){return e.type===r.pound}function m(e){return e.type===r.tag}function g(e){return!(!e||"object"!=typeof e||e.type!==n.number)}function T(e){return!(!e||"object"!=typeof e||e.type!==n.dateTime)}(t=e||(e={}))[t.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",t[t.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",t[t.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",t[t.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",t[t.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",t[t.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",t[t.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",t[t.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",t[t.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",t[t.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",t[t.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",t[t.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",t[t.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",t[t.INVALID_TAG=23]="INVALID_TAG",t[t.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",t[t.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",t[t.UNCLOSED_TAG=27]="UNCLOSED_TAG",(i=r||(r={}))[i.literal=0]="literal",i[i.argument=1]="argument",i[i.number=2]="number",i[i.date=3]="date",i[i.time=4]="time",i[i.select=5]="select",i[i.plural=6]="plural",i[i.pound=7]="pound",i[i.tag=8]="tag",(s=n||(n={}))[s.number=0]="number",s[s.dateTime=1]="dateTime";var y=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,_=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function v(e){var t={};return e.replace(_,(function(e){var r=e.length;switch(e[0]){case"G":t.era=4===r?"long":5===r?"narrow":"short";break;case"y":t.year=2===r?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][r-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=4===r?"short":5===r?"narrow":"short";break;case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][r-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][r-1];break;case"s":t.second=["numeric","2-digit"][r-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=r<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var d=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;var A,L=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,P=/^(@+)?(\+|#+)?$/g,b=/(\*)(0+)|(#+)(0+)|(0+)/g,N=/^(0+)$/;function S(e){var t={};return e.replace(P,(function(e,r,i){return"string"!=typeof i?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===i?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof i?i.length:0)),""})),t}function I(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function R(e){var t;if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2);if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!N.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function C(e){var t=I(e);return t||{}}function O(e){for(var t={},r=0,i=e;r<i.length;r++){var n=i[r];switch(n.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=n.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=n.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=o(o(o({},t),{notation:"scientific"}),n.options.reduce((function(e,t){return o(o({},e),C(t))}),{}));continue;case"engineering":t=o(o(o({},t),{notation:"engineering"}),n.options.reduce((function(e,t){return o(o({},e),C(t))}),{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(n.options[0]);continue;case"integer-width":if(n.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");n.options[0].replace(b,(function(e,r,i,n,s,o){if(r)t.minimumIntegerDigits=i.length;else{if(n&&s)throw new Error("We currently do not support maximum integer digits");if(o)throw new Error("We currently do not support exact integer digits")}return""}));continue}if(N.test(n.stem))t.minimumIntegerDigits=n.stem.length;else if(L.test(n.stem)){if(n.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");n.stem.replace(L,(function(e,r,i,n,s,o){return"*"===i?t.minimumFractionDigits=r.length:n&&"#"===n[0]?t.maximumFractionDigits=n.length:s&&o?(t.minimumFractionDigits=s.length,t.maximumFractionDigits=s.length+o.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""})),n.options.length&&(t=o(o({},t),S(n.options[0])))}else if(P.test(n.stem))t=o(o({},t),S(n.stem));else{var s=I(n.stem);s&&(t=o(o({},t),s));var a=R(n.stem);a&&(t=o(o({},t),a))}}return t}var U=new RegExp("^"+y.source+"*"),M=new RegExp(y.source+"*$");function w(e,t){return{start:e,end:t}}var G=!!String.prototype.startsWith,D=!!String.fromCodePoint,F=!!Object.fromEntries,k=!!String.prototype.codePointAt,V=!!String.prototype.trimStart,X=!!String.prototype.trimEnd,x=!!Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},j=!0;try{j="a"===(null===(A=W("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===A?void 0:A[0])}catch(e){j=!1}var Y,B,K=G?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},z=D?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r,i="",n=e.length,s=0;n>s;){if((r=e[s++])>1114111)throw RangeError(r+" is not a valid code point");i+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return i},$=F?Object.fromEntries:function(e){for(var t={},r=0,i=e;r<i.length;r++){var n=i[r],s=n[0],o=n[1];t[s]=o}return t},q=k?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length;if(!(t<0||t>=r)){var i,n=e.charCodeAt(t);return n<55296||n>56319||t+1===r||(i=e.charCodeAt(t+1))<56320||i>57343?n:i-56320+(n-55296<<10)+65536}},H=V?function(e){return e.trimStart()}:function(e){return e.replace(U,"")},Z=X?function(e){return e.trimEnd()}:function(e){return e.replace(M,"")};function W(e,t){return new RegExp(e,t)}j?(B=W("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu"),Y=function(e,t){var r;return B.lastIndex=t,null!==(r=B.exec(e)[1])&&void 0!==r?r:""}):Y=function(e,t){for(var r=[];;){var i=q(e,t);if(void 0===i||ee(i)||te(i))break;r.push(i),t+=i>=65536?2:1}return z.apply(void 0,r)};var Q=function(){function t(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return t.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},t.prototype.parseMessage=function(t,i,n){for(var s=[];!this.isEOF();){var o=this.char();if(123===o){if((a=this.parseArgument(t,n)).err)return a;s.push(a.val)}else{if(125===o&&t>0)break;if(35!==o||"plural"!==i&&"selectordinal"!==i){if(60===o&&!this.ignoreTag&&47===this.peek()){if(n)break;return this.error(e.UNMATCHED_CLOSING_TAG,w(this.clonePosition(),this.clonePosition()))}if(60===o&&!this.ignoreTag&&J(this.peek()||0)){if((a=this.parseTag(t,i)).err)return a;s.push(a.val)}else{var a;if((a=this.parseLiteral(t,i)).err)return a;s.push(a.val)}}else{var u=this.clonePosition();this.bump(),s.push({type:r.pound,location:w(u,this.clonePosition())})}}}return{val:s,err:null}},t.prototype.parseTag=function(t,i){var n=this.clonePosition();this.bump();var s=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:r.literal,value:"<"+s+"/>",location:w(n,this.clonePosition())},err:null};if(this.bumpIf(">")){var o=this.parseMessage(t+1,i,!0);if(o.err)return o;var a=o.val,u=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!J(this.char()))return this.error(e.INVALID_TAG,w(u,this.clonePosition()));var l=this.clonePosition();return s!==this.parseTagName()?this.error(e.UNMATCHED_CLOSING_TAG,w(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:r.tag,value:s,children:a,location:w(n,this.clonePosition())},err:null}:this.error(e.INVALID_TAG,w(u,this.clonePosition())))}return this.error(e.UNCLOSED_TAG,w(n,this.clonePosition()))}return this.error(e.INVALID_TAG,w(n,this.clonePosition()))},t.prototype.parseTagName=function(){var e,t=this.offset();for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump();return this.message.slice(t,this.offset())},t.prototype.parseLiteral=function(e,t){for(var i=this.clonePosition(),n="";;){var s=this.tryParseQuote(t);if(s)n+=s;else{var o=this.tryParseUnquoted(e,t);if(o)n+=o;else{var a=this.tryParseLeftAngleBracket();if(!a)break;n+=a}}}var u=w(i,this.clonePosition());return{val:{type:r.literal,value:n,location:u},err:null}},t.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(J(e=this.peek()||0)||47===e)?null:(this.bump(),"<");var e},t.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===e||"selectordinal"===e)break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var r=this.char();if(39===r){if(39!==this.peek()){this.bump();break}t.push(39),this.bump()}else t.push(r);this.bump()}return z.apply(void 0,t)},t.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var r=this.char();return 60===r||123===r||35===r&&("plural"===t||"selectordinal"===t)||125===r&&e>0?null:(this.bump(),z(r))},t.prototype.parseArgument=function(t,i){var n=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(e.EXPECT_ARGUMENT_CLOSING_BRACE,w(n,this.clonePosition()));if(125===this.char())return this.bump(),this.error(e.EMPTY_ARGUMENT,w(n,this.clonePosition()));var s=this.parseIdentifierIfPossible().value;if(!s)return this.error(e.MALFORMED_ARGUMENT,w(n,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(e.EXPECT_ARGUMENT_CLOSING_BRACE,w(n,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:r.argument,value:s,location:w(n,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(e.EXPECT_ARGUMENT_CLOSING_BRACE,w(n,this.clonePosition())):this.parseArgumentOptions(t,i,s,n);default:return this.error(e.MALFORMED_ARGUMENT,w(n,this.clonePosition()))}},t.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),r=Y(this.message,t),i=t+r.length;return this.bumpTo(i),{value:r,location:w(e,this.clonePosition())}},t.prototype.parseArgumentOptions=function(t,i,s,a){var u,l=this.clonePosition(),c=this.parseIdentifierIfPossible().value,h=this.clonePosition();switch(c){case"":return this.error(e.EXPECT_ARGUMENT_TYPE,w(l,h));case"number":case"date":case"time":this.bumpSpace();var p=null;if(this.bumpIf(",")){this.bumpSpace();var f=this.clonePosition();if((d=this.parseSimpleArgStyleIfPossible()).err)return d;if(0===(g=Z(d.val)).length)return this.error(e.EXPECT_ARGUMENT_STYLE,w(this.clonePosition(),this.clonePosition()));p={style:g,styleLocation:w(f,this.clonePosition())}}if((A=this.tryParseArgumentClose(a)).err)return A;var E=w(a,this.clonePosition());if(p&&K(null==p?void 0:p.style,"::",0)){var m=H(p.style.slice(2));if("number"===c)return(d=this.parseNumberSkeletonFromString(m,p.styleLocation)).err?d:{val:{type:r.number,value:s,location:E,style:d.val},err:null};if(0===m.length)return this.error(e.EXPECT_DATE_TIME_SKELETON,E);var g={type:n.dateTime,pattern:m,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?v(m):{}};return{val:{type:"date"===c?r.date:r.time,value:s,location:E,style:g},err:null}}return{val:{type:"number"===c?r.number:"date"===c?r.date:r.time,value:s,location:E,style:null!==(u=null==p?void 0:p.style)&&void 0!==u?u:null},err:null};case"plural":case"selectordinal":case"select":var T=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(e.EXPECT_SELECT_ARGUMENT_OPTIONS,w(T,o({},T)));this.bumpSpace();var y=this.parseIdentifierIfPossible(),_=0;if("select"!==c&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,w(this.clonePosition(),this.clonePosition()));var d;if(this.bumpSpace(),(d=this.tryParseDecimalInteger(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return d;this.bumpSpace(),y=this.parseIdentifierIfPossible(),_=d.val}var A,L=this.tryParsePluralOrSelectOptions(t,c,i,y);if(L.err)return L;if((A=this.tryParseArgumentClose(a)).err)return A;var P=w(a,this.clonePosition());return"select"===c?{val:{type:r.select,value:s,options:$(L.val),location:P},err:null}:{val:{type:r.plural,value:s,options:$(L.val),offset:_,pluralType:"plural"===c?"cardinal":"ordinal",location:P},err:null};default:return this.error(e.INVALID_ARGUMENT_TYPE,w(l,h))}},t.prototype.tryParseArgumentClose=function(t){return this.isEOF()||125!==this.char()?this.error(e.EXPECT_ARGUMENT_CLOSING_BRACE,w(t,this.clonePosition())):(this.bump(),{val:!0,err:null})},t.prototype.parseSimpleArgStyleIfPossible=function(){for(var t=0,r=this.clonePosition();!this.isEOF();){switch(this.char()){case 39:this.bump();var i=this.clonePosition();if(!this.bumpUntil("'"))return this.error(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,w(i,this.clonePosition()));this.bump();break;case 123:t+=1,this.bump();break;case 125:if(!(t>0))return{val:this.message.slice(r.offset,this.offset()),err:null};t-=1;break;default:this.bump()}}return{val:this.message.slice(r.offset,this.offset()),err:null}},t.prototype.parseNumberSkeletonFromString=function(t,r){var i=[];try{i=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty");for(var t=[],r=0,i=e.split(d).filter((function(e){return e.length>0}));r<i.length;r++){var n=i[r].split("/");if(0===n.length)throw new Error("Invalid number skeleton");for(var s=n[0],o=n.slice(1),a=0,u=o;a<u.length;a++)if(0===u[a].length)throw new Error("Invalid number skeleton");t.push({stem:s,options:o})}return t}(t)}catch(t){return this.error(e.INVALID_NUMBER_SKELETON,r)}return{val:{type:n.number,tokens:i,location:r,parsedOptions:this.shouldParseSkeletons?O(i):{}},err:null}},t.prototype.tryParsePluralOrSelectOptions=function(t,r,i,n){for(var s,o=!1,a=[],u=new Set,l=n.value,c=n.location;;){if(0===l.length){var h=this.clonePosition();if("select"===r||!this.bumpIf("="))break;var p=this.tryParseDecimalInteger(e.EXPECT_PLURAL_ARGUMENT_SELECTOR,e.INVALID_PLURAL_ARGUMENT_SELECTOR);if(p.err)return p;c=w(h,this.clonePosition()),l=this.message.slice(h.offset,this.offset())}if(u.has(l))return this.error("select"===r?e.DUPLICATE_SELECT_ARGUMENT_SELECTOR:e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c);"other"===l&&(o=!0),this.bumpSpace();var f=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===r?e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,w(this.clonePosition(),this.clonePosition()));var E=this.parseMessage(t+1,r,i);if(E.err)return E;var m=this.tryParseArgumentClose(f);if(m.err)return m;a.push([l,{value:E.val,location:w(f,this.clonePosition())}]),u.add(l),this.bumpSpace(),l=(s=this.parseIdentifierIfPossible()).value,c=s.location}return 0===a.length?this.error("select"===r?e.EXPECT_SELECT_ARGUMENT_SELECTOR:e.EXPECT_PLURAL_ARGUMENT_SELECTOR,w(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(e.MISSING_OTHER_CLAUSE,w(this.clonePosition(),this.clonePosition())):{val:a,err:null}},t.prototype.tryParseDecimalInteger=function(e,t){var r=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);for(var n=!1,s=0;!this.isEOF();){var o=this.char();if(!(o>=48&&o<=57))break;n=!0,s=10*s+(o-48),this.bump()}var a=w(i,this.clonePosition());return n?x(s*=r)?{val:s,err:null}:this.error(t,a):this.error(e,a)},t.prototype.offset=function(){return this.position.offset},t.prototype.isEOF=function(){return this.offset()===this.message.length},t.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},t.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=q(this.message,e);if(void 0===t)throw Error("Offset "+e+" is at invalid UTF-16 code unit boundary");return t},t.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},t.prototype.bump=function(){if(!this.isEOF()){var e=this.char();10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},t.prototype.bumpIf=function(e){if(K(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},t.prototype.bumpUntil=function(e){var t=this.offset(),r=this.message.indexOf(e,t);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},t.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset "+e+" must be greater than or equal to the current offset "+this.offset());for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset "+e+" is at invalid UTF-16 code unit boundary");if(this.bump(),this.isEOF())break}},t.prototype.bumpSpace=function(){for(;!this.isEOF()&&ee(this.char());)this.bump()},t.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(e>=65536?2:1));return null!=r?r:null},t}();function J(e){return e>=97&&e<=122||e>=65&&e<=90}function ee(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function te(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function re(e){e.forEach((function(e){if(delete e.location,p(e)||f(e))for(var t in e.options)delete e.options[t].location,re(e.options[t].value);else l(e)&&g(e.style)||(c(e)||h(e))&&T(e.style)?delete e.style.location:m(e)&&re(e.children)}))}function ie(e,t){var r=t&&t.cache?t.cache:pe,i=t&&t.serializer?t.serializer:ue;return(t&&t.strategy?t.strategy:ae)(e,{cache:r,serializer:i})}function ne(e,t,r,i){var n,s=null==(n=i)||"number"==typeof n||"boolean"==typeof n?i:r(i),o=t.get(s);return void 0===o&&(o=e.call(this,i),t.set(s,o)),o}function se(e,t,r){var i=Array.prototype.slice.call(arguments,3),n=r(i),s=t.get(n);return void 0===s&&(s=e.apply(this,i),t.set(n,s)),s}function oe(e,t,r,i,n){return r.bind(t,e,i,n)}function ae(e,t){return oe(e,this,1===e.length?ne:se,t.cache.create(),t.serializer)}var ue=function(){return JSON.stringify(arguments)};function le(){this.cache=Object.create(null)}le.prototype.has=function(e){return e in this.cache},le.prototype.get=function(e){return this.cache[e]},le.prototype.set=function(e,t){this.cache[e]=t};var ce,he,pe={create:function(){return new le}},fe={variadic:function(e,t){return oe(e,this,se,t.cache.create(),t.serializer)},monadic:function(e,t){return oe(e,this,ne,t.cache.create(),t.serializer)}};(he=ce||(ce={})).MISSING_VALUE="MISSING_VALUE",he.INVALID_VALUE="INVALID_VALUE",he.MISSING_INTL_API="MISSING_INTL_API";var Ee,me,ge=class extends Error{constructor(e,t,r){super(e),this.code=t,this.originalMessage=r}toString(){return`[formatjs Error: ${this.code}] ${this.message}`}},Te=class extends ge{constructor(e,t,r,i){super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(r).join('", "')}"`,ce.INVALID_VALUE,i)}},ye=class extends ge{constructor(e,t,r){super(`Value for "${e}" must be of type ${t}`,ce.INVALID_VALUE,r)}},_e=class extends ge{constructor(e,t){super(`The intl string context variable "${e}" was not provided to the string "${t}"`,ce.MISSING_VALUE,t)}};function ve(e){return"function"==typeof e}function de(e,t,r,i,n,s,o){if(1===e.length&&a(e[0]))return[{type:Ee.literal,value:e[0].value}];const y=[];for(const _ of e){if(a(_)){y.push({type:Ee.literal,value:_.value});continue}if(E(_)){"number"==typeof s&&y.push({type:Ee.literal,value:r.getNumberFormat(t).format(s)});continue}const{value:e}=_;if(!n||!(e in n))throw new _e(e,o);let v=n[e];if(u(_))v&&"string"!=typeof v&&"number"!=typeof v||(v="string"==typeof v||"number"==typeof v?String(v):""),y.push({type:"string"==typeof v?Ee.literal:Ee.object,value:v});else if(c(_)){const e="string"==typeof _.style?i.date[_.style]:T(_.style)?_.style.parsedOptions:void 0;y.push({type:Ee.literal,value:r.getDateTimeFormat(t,e).format(v)})}else if(h(_)){const e="string"==typeof _.style?i.time[_.style]:T(_.style)?_.style.parsedOptions:void 0;y.push({type:Ee.literal,value:r.getDateTimeFormat(t,e).format(v)})}else if(l(_)){const e="string"==typeof _.style?i.number[_.style]:g(_.style)?_.style.parsedOptions:void 0;e&&e.scale&&(v*=e.scale||1),y.push({type:Ee.literal,value:r.getNumberFormat(t,e).format(v)})}else{if(m(_)){const{children:e,value:a}=_,u=n[a];if(!ve(u))throw new ye(a,"function",o);let l=u(de(e,t,r,i,n,s).map((e=>e.value)));Array.isArray(l)||(l=[l]),y.push(...l.map((e=>({type:"string"==typeof e?Ee.literal:Ee.object,value:e}))))}if(p(_)){const e=_.options[v]||_.options.other;if(!e)throw new Te(_.value,v,Object.keys(_.options),o);y.push(...de(e.value,t,r,i,n))}else if(f(_)){let e=_.options[`=${v}`];if(!e){if(!Intl.PluralRules)throw new ge('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',ce.MISSING_INTL_API,o);const i=r.getPluralRules(t,{type:_.pluralType}).select(v-(_.offset||0));e=_.options[i]||_.options.other}if(!e)throw new Te(_.value,v,Object.keys(_.options),o);y.push(...de(e.value,t,r,i,n,v-(_.offset||0)))}else;}}return(_=y).length<2?_:_.reduce(((e,t)=>{const r=e[e.length-1];return r&&r.type===Ee.literal&&t.type===Ee.literal?r.value+=t.value:e.push(t),e}),[]);var _}function Ae(e,t){return t?Object.keys(e).reduce(((r,i)=>{var n,s;return r[i]=(n=e[i],(s=t[i])?{...n||{},...s||{},...Object.keys(n).reduce(((e,t)=>(e[t]={...n[t],...s[t]||{}},e)),{})}:n),r}),{...e}):e}function Le(e){return{create:()=>({has:t=>t in e,get:t=>e[t],set(t,r){e[t]=r}})}}(me=Ee||(Ee={}))[me.literal=0]="literal",me[me.object=1]="object";var Pe=class{constructor(e,t=Pe.defaultLocale,r,i){if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=e=>{const t=this.formatToParts(e);if(1===t.length)return t[0].value;const r=t.reduce(((e,t)=>(e.length&&t.type===Ee.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e)),[]);return r.length<=1?r[0]||"":r},this.formatToParts=e=>de(this.ast,this.locales,this.formatters,this.formats,e,void 0,this.message),this.resolvedOptions=()=>({locale:Intl.NumberFormat.supportedLocalesOf(this.locales)[0]}),this.getAst=()=>this.ast,"string"==typeof e){if(this.message=e,!Pe.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=Pe.__parse(e,{ignoreTag:i?.ignoreTag})}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Ae(Pe.formats,r),this.locales=t,this.formatters=i&&i.formatters||function(e={number:{},dateTime:{},pluralRules:{}}){return{getNumberFormat:ie(((...e)=>new Intl.NumberFormat(...e)),{cache:Le(e.number),strategy:fe.variadic}),getDateTimeFormat:ie(((...e)=>new Intl.DateTimeFormat(...e)),{cache:Le(e.dateTime),strategy:fe.variadic}),getPluralRules:ie(((...e)=>new Intl.PluralRules(...e)),{cache:Le(e.pluralRules),strategy:fe.variadic})}}(this.formatterCache)}static get defaultLocale(){return Pe.memoizedDefaultLocale||(Pe.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),Pe.memoizedDefaultLocale}};Pe.memoizedDefaultLocale=null,Pe.__parse=function(t,r){void 0===r&&(r={}),r=o({shouldParseSkeletons:!0,requiresOtherClause:!0},r);var i=new Q(t,r).parse();if(i.err){var n=SyntaxError(e[i.err.kind]);throw n.location=i.err.location,n.originalMessage=i.err.message,n}return(null==r?void 0:r.captureLocation)||re(i.val),i.val},Pe.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}};var be=Pe;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */export{be as IntlMessageFormat};
