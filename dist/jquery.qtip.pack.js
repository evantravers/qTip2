/*
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: 2.0.0pre
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Mon Apr 4 17:51:01 2011 +0100
*/

"use strict"; // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
/*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global window: false, jQuery: false */

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"5l 5m",9(a,b,c){9 z(b){O c=R,d=b.2L,e=d.1j,f=".1W-"+b.1h;a.1m(c,{1T:9(){d.1W=a(\'<4R 1M="1s-1j-1W" 5n="0" 7V="-1" 5p="81:\\\'\\\';"  13="2h:2J; 16:3G; z-3V:-1; 2w:5q(4b=0); -7S-2w:"5s:5t.5u.7t(5v=0)";"></4R>\'),d.1W.2C(e),e.18("44"+f,c.2o)},2o:9(){O a=b.40("4T"),c=b.1E.17,f=d.17,g,h;h=1v(e.X("1b-Q-V"),10)||0,h={Q:-h,P:-h},c&&f&&(g=c.1g.1p==="x"?["V","Q"]:["W","P"],h[g[1]]-=f[g[0]]()),d.1W.X(h).X(a)},2a:9(){d.1W.1O(),e.1y(f)}}),c.1T()}9 y(c){O f=R,h=c.1X.N.1t,i=c.2L,j=i.1j,k="#19-1L",l=".5w",m="3p"+l+" 4S"+l;c.2N.1t={"^N.1t.(2S|1H)$":9(){f.1T(),i.1L.26(j.1N(":28"))}},a.1m(f,{1T:9(){h.2S&&(j.1y(l).18(m,9(b,c,d){O e=b.1A.24("1j","");a.1V(h[e])?h[e].1G(i.1L,d,c):f[e](d)}),f.2i(),h.1H===d&&i.1L.1y(l+c.1h).18("42"+l+c.1h,9(){c.S.1G(c)}),i.1L.X("5y",h.1H?"5z":""))},2i:9(){O c=a(k),d;T(c.1a){i.1L=c;M c}d=i.1L=a("<2l />",{1h:k.2v(1),X:{16:"3G",P:0,Q:0,2h:"4o"},3v:9(){M e}}).2C(1z.32),a(b).18("2p"+l,9(){d.X({W:1d.2Q(a(b).W(),a(1z).W()),V:1d.2Q(a(b).V(),a(1z).V())})}).2m("2p");M d},26:9(b){O h=i.1L,k=c.1X.N.1t.1Y,l=b?"N":"S",m;h||(h=f.2i());T(!h.1N(":5B")||b)h.4i(d,e),b&&(m=1v(a.X(j[0],"z-3V"),10),h.X("z-3V",(m||g.46)-1)),a.1V(k)?k.1G(h,b):k===e?h[l]():h.51(3C,b?.7:0,9(){b||a(R).S()})},N:9(){f.26(d)},S:9(){f.26(e)},2a:9(){O d=i.1L;d&&(a(k).1i(9(){O b=a(R).25("19");T(b&&b.1h!==b.1h&&b.1X.N.1t)M d=e}),d?(i.1L.1O(),a(b).1y(l)):i.1L.1y(l+c.1h)),j.1y(m)}}),f.1T()}9 x(b,g){9 v(a){O b=a.1p==="y",c=n[b?"V":"W"],d=n[b?"W":"V"],e=a.1n().3L("1r")>-1,f=c*(e?.5:1),g=1d.5D,h=1d.3J,i,j,k,l=1d.3N(g(f,2)+g(d,2)),m=[p/f*l,p/d*l];m[2]=1d.3N(g(m[0],2)-g(p,2)),m[3]=1d.3N(g(m[1],2)-g(p,2)),i=l+m[2]+m[3]+(e?0:m[0]),j=i/l,k=[h(j*d),h(j*c)];M{W:k[b?0:1],V:k[b?1:0]}}9 u(b){O c=k.1w&&b.y==="P",d=c?k.1w:k.U,e=a.1F.5d,f=e?"-5E-":a.1F.4I?"-4I-":"",g=b.y+(e?"":"-")+b.x,h=f+(e?"1b-4h-"+g:"1b-"+g+"-4h");M 1v(d.X(h),10)||1v(l.X(h),10)||0}9 t(a,b,c){b=b?b:a[a.1p];O d=k.1w&&a.y==="P",e=d?k.1w:k.U,f="1b-"+b+"-V",g=1v(e.X(f),10);M(c?g||1v(l.X(f),10):g)||0}9 s(b,e,f,g){T(k.17){O h=a.1m({},i.1g),l=f.3x,n;i.1g.2c!==d&&(l.Q&&(h.x=h.x==="1r"?l.Q>0?"Q":"1k":h.x==="Q"?"1k":"Q"),l.P&&(h.y=h.y==="1r"?l.P>0?"P":"1l":h.y==="P"?"1l":"P"),h.1n()!==m.1g&&(m.P!==l.P||m.Q!==l.Q)&&(n=i.38(h))),n||(n=i.16(h,0)),n.1k!==c&&(n.Q=n.1k),n.1l!==c&&(n.P=n.1l),n.3s=1d.2Q(0,j.Y),f.Q-=n.Q.3a?n.3s:(n.1k?-1:1)*n.Q,f.P-=n.P.3a?n.3s:(n.1l?-1:1)*n.P,m.Q=l.Q,m.P=l.P,m.1g=h.1n()}}O i=R,j=b.1X.13.17,k=b.2L,l=k.1j,m={P:0,Q:0,1g:""},n={V:j.V,W:j.W},o={},p=j.1b||0,q=".19-17",r=a("<4j />")[0].3H;i.1g=f,i.3h=f,b.2N.17={"^16.1J|13.17.(1g|3h|1b)$":9(){i.1T()||i.2a(),b.1S()},"^13.17.(W|V)$":9(){n={V:j.V,W:j.W},i.2i(),i.38(),b.1S()},"^U.15.1o|13.(39|2g)$":9(){k.17&&i.38()}},a.1m(i,{1T:9(){O b=i.5f()&&(r||a.1F.2F);b&&(i.2i(),i.38(),l.1y(q).18("44"+q,s));M b},5f:9(){O a=j.1g,c=b.1X.16,f=c.2n,g=c.1J.1n?c.1J.1n():c.1J;T(a===e||g===e&&f===e)M e;a===d?i.1g=1C h.2s(g):a.1n||(i.1g=1C h.2s(a),i.1g.2c=d);M i.1g.1n()!=="5g"},4k:9(){O c,d,e,f=k.17.X({6q:"",1b:""}),g=i.1g,h=g[g.1p],m="1b-"+h+"-36",p="1b"+h.3a(0)+h.2v(1)+"5H",q=/5I?\\(0, 0, 0(, 0)?\\)|3g/i,r="6e-36",s="3g",t="1s-1j-5c",u=a(1z.32).X("36"),v=b.2L.U.X("36"),w=k.1w&&(g.y==="P"||g.y==="1r"&&f.16().P+n.W/2+j.Y<k.1w.33(1)),x=w?k.1w:k.U;l.3B(t),d=f.X(r)||s,e=f[0].13[p];T(!d||q.1D(d))o.2B=x.X(r),q.1D(o.2B)&&(o.2B=l.X(r)||d);T(!e||q.1D(e)){o.1b=l.X(m);T(q.1D(o.1b)||o.1b===u)o.1b=x.X(m),o.1b===v&&(o.1b=e)}a("*",f).2E(f).X(r,s).X("1b",""),l.4c(t)},2i:9(){O b=n.V,c=n.W,d;k.17&&k.17.1O(),k.17=a("<2l />",{"1M":"1s-1j-17"}).X({V:b,W:c}).5J(l),r?a("<4j />").2C(k.17)[0].3H("2d").4l():(d=\'<4a:3P 5K="0,0" 13="2h:4v-2J; 16:3G; 56:2f(#3q#5j);"></4a:3P>\',k.17.2H(p?d+=d:d))},38:9(b){O c=k.17,g=c.5M(),l=n.V,m=n.W,q="43 5N ",s="43 5O 3g",u=j.3h,x=1d.3J,y,z,A,B,C;b||(b=i.1g),u===e?u=b:(u=1C h.2s(u),u.1p=b.1p,u.x==="3u"?u.x=b.x:u.y==="3u"?u.y=b.y:u.x===u.y&&(u[b.1p]=b[b.1p])),y=u.1p,i.4k(),p=o.1b==="3g"||o.1b==="#5P"?0:j.1b===d?t(b,f,d):j.1b,A=w(u,l,m),C=v(b),c.X(C),b.1p==="y"?B=[x(u.x==="Q"?p:u.x==="1k"?C.V-l-p:(C.V-l)/2),x(u.y==="P"?C.W-m:0)]:B=[x(u.x==="Q"?C.V-l:0),x(u.y==="P"?p:u.y==="1l"?C.W-m-p:(C.W-m)/2)],r?(g.14(C),z=g[0].3H("2d"),z.5Q(),z.4l(),z.5R(0,0,4m,4m),z.5S(B[0],B[1]),z.5T(),z.5V(A[0][0],A[0][1]),z.59(A[1][0],A[1][1]),z.59(A[2][0],A[2][1]),z.5W(),z.5X=o.2B,z.7X=o.1b,z.5Y=p*2,z.5Z="4t",z.60=7T,z.4p(),z.2B()):(A="m"+A[0][0]+","+A[0][1]+" l"+A[1][0]+","+A[1][1]+" "+A[2][0]+","+A[2][1]+" 62",B[2]=p&&/^(r|b)/i.1D(b.1n())?3T(a.1F.2W,10)===8?2:1:0,g.X({63:""+(u.1n().3L("1r")>-1),Q:B[0]-B[2]*4n(y==="x"),P:B[1]-B[2]*4n(y==="y"),V:l+p,W:m+p}).1i(9(b){O c=a(R);c.14({64:l+p+" "+(m+p),65:A,66:o.2B,68:!!b,69:!b}).X({2h:p||b?"2J":"4o"}),!b&&p>0&&c.2H()===""&&c.2H(\'<4a:4p 6a="\'+p*2+\'43" 36="\'+o.1b+\'" 6b="6c" 6d="4t"  13="56:2f(#3q#5j); 2h:4v-2J;" />\')}));M i.16(b,1)},16:9(b,c){O f=k.17,g={},h=1d.2Q(0,j.Y),l,m,n;T(j.1g===e||!f)M e;b=b||i.1g,l=b.1p,m=v(b),n=a.1F.2F&&3T(a.1F.2W,10)==8&&p&&/^(b|r)/i.1D(b.1n())?1:0,a.1i(l==="y"?[b.x,b.y]:[b.y,b.x],9(a,c){O e,f;c==="1r"?(e=l==="y"?"Q":"P",g[e]="50%",g["4M-"+e]=-1d.3J(m[l==="y"?"V":"W"]/2)+h):(e=t(b,c,d),f=u(b),g[c]=a||!p?t(b,c)+(a?0:f):h+(f>e?f:0))}),g[b[l]]-=m[l==="x"?"V":"W"]+n,c&&f.X({P:"",1l:"",Q:"",1k:"",4M:""}).X(g);M g},2a:9(){k.17&&k.17.1O(),l.1y(q)}}),i.1T()}9 w(a,b,c){O d=1d.3i(b/2),e=1d.3i(c/2),f={4K:[[0,0],[b,c],[b,0]],4L:[[0,0],[b,0],[0,c]],4w:[[0,c],[b,0],[b,c]],4F:[[0,0],[0,c],[b,c]],6f:[[0,c],[d,0],[b,c]],7r:[[0,0],[b,0],[d,c]],7q:[[0,0],[b,e],[0,c]],6i:[[b,0],[b,c],[0,e]]};f.6j=f.4K,f.6l=f.4L,f.6m=f.4w,f.6o=f.4F;M f[a.1n()]}9 v(b){O c=R,f=b.2L.1j,g=b.1X.U.1x,h=".19-1x",i=/<3S\\b[^<]*(?:(?!<\\/3S>)<[^<]*)*<\\/3S>/54,j=d;b.2N.1x={"^U.1x":9(a,b,d){b==="1x"&&(g=d),b==="2u"?(f.1y(h),d&&f.18("3p"+h,c.2M)):g&&g.2f?c.2M():f.1y(h)}},a.1m(c,{1T:9(){g&&g.2f&&f.18("3p"+h,c.2M);M c},2M:9(d,h){9 p(a,c,d){b.31("U.1o",c+": "+d),n()}9 o(c){l&&(c=a("<2l/>").34(c.24(i,"")).4A(l)),b.31("U.1o",c),n()}9 n(){m&&(f.X("3Y",""),h=e)}T(d.3w())M c;O j=g.2f.3L(" "),k=g.2f,l,m=g.2u&&!g.5i&&h;m&&f.X("3Y","3I"),j>-1&&(l=k.2v(j),k=k.2v(0,j)),a.1x(a.1m({6r:o,4e:p,6s:b},g,{2f:k}));M c}}),c.1T()}9 u(b,c){O i,j,k,l,m=a(R),n=a(1z.32),o=R===1z?n:m,p=m.21?m.21(c.21):f,u=c.21.1A==="7b"&&p?p[c.21.3K]:f,v=m.25(c.21.3K||"7a");6v{v=11 v==="1n"?(1C 6w("M "+v))():v}77(w){r("76 75 6z 6B 6C 25: "+v)}l=a.1m(d,{},g.2y,c,11 v==="1f"?s(v):f,s(u||p)),p&&a.5h(R,"21"),j=l.16,l.1h=b;T("37"===11 l.U.1o){k=m.14(l.U.14);T(l.U.14!==e&&k)l.U.1o=k;2k M e}j.1u===e&&(j.1u=n),j.12===e&&(j.12=o),l.N.12===e&&(l.N.12=o),l.N.3c===d&&(l.N.3c=n),l.S.12===e&&(l.S.12=o),l.16.1Z===d&&(l.16.1Z=j.1u),j.2n=1C h.2s(j.2n),j.1J=1C h.2s(j.1J);T(a.25(R,"19"))T(l.49)m.19("2a");2k T(l.49===e)M e;a.14(R,"15")&&(a.14(R,q,a.14(R,"15")),R.3m("15")),i=1C t(m,l,b,!!k),a.25(R,"19",i),m.18("1O.19",9(){i.2a()});M i}9 t(o,p,r,t){9 L(c,d,e,f){f=1v(f,10)!==0;O g=".19-"+r,h={N:c&&p.N.12[0],S:d&&p.S.12[0],1j:e&&u.1e&&A.1j[0],U:e&&u.1e&&A.U[0],1u:f&&p.16.1u[0]===v?1z:p.16.1u[0],4d:f&&b};u.1e?a([]).6E(a.6F([h.N,h.S,h.1j,h.1u,h.U,h.4d],9(a){M 11 a==="1f"})).1y(g):c&&p.N.12.1y(g+"-2i")}9 K(c,d,h,j){9 B(a){z.1N(":28")&&u.1S(a)}9 y(a){T(z.29(l))M e;1P(u.1q.1R),u.1q.1R=2Z(9(){u.S(a)},p.S.1R)}9 x(b){T(z.29(l))M e;O c=a(b.3t||b.12),d=c.6Z(m)[0]===z[0],f=c[0]===q.N[0];1P(u.1q.N),1P(u.1q.S);T(n.12==="2b"&&d||p.S.2c&&(/2b(4W|4X|3Q)/.1D(b.1A)&&(d||f))){b.6Y(),b.6X();M e}p.S.27>0?u.1q.S=2Z(9(){u.S(b)},p.S.27):u.S(b)}9 w(a){T(z.29(l))M e;q.N.2m("19-"+r+"-1R"),1P(u.1q.N),1P(u.1q.S);O b=9(){u.N(a)};p.N.27>0?u.1q.N=2Z(b,p.N.27):b()}O k=".19-"+r,n=p.16,q={N:p.N.12,S:p.S.12,1u:n.1u[0]===v?a(1z):n.1u,3O:a(1z)},s={N:a.3A(""+p.N.1c).30(" "),S:a.3A(""+p.S.1c).30(" ")},t=a.1F.2F&&1v(a.1F.2W,10)===6;h&&(p.S.2c&&(q.S=q.S.2E(z),z.18("6I"+k,9(){z.29(l)||1P(u.1q.S)})),n.12==="2b"&&n.2o.2b&&p.S.1c&&z.18("2r"+k,9(a){(a.3t||a.12)!==q.N[0]&&u.S(a)}),z.18("3b"+k+" 2r"+k,9(a){u[a.1A==="3b"?"2t":"1H"](a)})),d&&("2G"===11 p.S.1R&&(q.N.18("19-"+r+"-1R",y),a.1i(g.4Y,9(a,b){q.S.2E(A.1j).18(b+k+"-1R",y)})),a.1i(s.S,9(b,c){O d=a.6V(c,s.N),e=a(q.S);d>-1&&e.2E(q.N).1a===e.1a||c==="4f"?(q.N.18(c+k,9(a){z.1N(":28")?x(a):w(a)}),2A s.N[d]):q.S.18(c+k,x)})),c&&a.1i(s.N,9(a,b){q.N.18(b+k,w)}),j&&((n.2o.2p||n.1Z)&&a(a.1c.6U.2p?n.1Z:b).18("2p"+k,B),(n.1Z||t&&z.X("16")==="2c")&&a(n.1Z).18("48"+k,B),/4f/i.1D(p.S.1c)&&q.3O.18("3v"+k,9(b){O c=a(b.12);c.6L(m).1a===0&&c.2E(o).1a>1&&z.1N(":28")&&!z.29(l)&&u.S(b)}),/2r|4H/i.1D(p.S.1c)&&a(b).18("1H 2r",9(a){a.2O.3t===f&&u.S(a)}),n.12==="2b"&&q.3O.18("45"+k,9(a){n.2o.2b&&!z.29(l)&&z.1N(":28")&&u.1S(a||i)}))}9 J(b,c){9 g(a){9 c(c,d){(b=b.3f(R)).1a===0&&(u.2P(),u.1S(B.1c),a())}O b;T((b=d.4A("3k:3f([W]):3f([V])")).1a===0)M c.1G(b);b.6N(["6O","4e","2M","6P",""].6S(".19-6T "),c).1i(9(a,b){(9 d(){T(b.W&&b.V)M c.1G(b,f);u.1q.3k[a]=2Z(d,20)})()})}O d=A.U;T(!u.1e||!b)M e;a.1V(b)&&(b=b.1G(o,u)||""),b.1Q&&b.1a>0?d.4B().34(b.X({2h:"2J"})):d.2H(b),u.1e<0?z.3y("3F",g):(y=0,g(a.5b));M u}9 I(b){O c=A.15;T(!u.1e||!b)M e;a.1V(b)&&(b=b.1G(o,u)||""),b.1Q&&b.1a>0?c.4B().34(b.X({2h:"2J"})):c.2H(b),u.2P(),u.1e&&z.1N(":28")&&u.1S(B.1c)}9 H(a){O b=A.1B,c=A.15;T(!u.1e)M e;a?(c||G(),F()):b.1O()}9 G(){O b=w+"-15";A.1w&&E(),A.1w=a("<2l />",{"1M":j+"-1w "+(p.13.2g?"1s-2g-4J":"")}).34(A.15=a("<2l />",{1h:b,"1M":j+"-15","1K-3W":d})).6W(A.U),p.U.15.1B?F():u.1e&&u.2P()}9 F(){O b=p.U.15.1B;A.1B&&A.1B.1O(),b.1Q?A.1B=b:A.1B=a("<a />",{"1M":"1s-3d-3q "+(p.13.2g?"":j+"-3n"),15:"4D 1j","1K-70":"4D 1j"}).71(a("<72 />",{"1M":"1s-3n 1s-3n-73",2H:"&78;"})),A.1B.2C(A.1w).14("4Q","1B").4y(9(b){a(R).2q("1s-3d-4y",b.1A==="3b")}).42(9(a){z.29(l)||u.S(a);M e}).18("3v 79 53 7d 4H",9(b){a(R).2q("1s-3d-7e 1s-3d-2t",b.1A.2v(-4)==="7f")}),u.2P()}9 E(){A.15&&(A.1w.1O(),A.1w=A.15=A.1B=f,u.1S())}9 D(){O a=p.13.2g;z.2q(k,a),A.U.2q(k+"-U",a),A.1w&&A.1w.2q(k+"-4J",a),A.1B&&A.1B.2q(j+"-3n",!a)}9 C(a){O b=0,c,d=p,e=a.30(".");2X(d=d[e[b++]])b<e.1a&&(c=d);M[c||p,e.7h()]}O u=R,v=1z.32,w=j+"-"+r,x=0,y=0,z=a(),A,B;u.1h=r,u.1e=e,u.2L=A={12:o},u.1q={3k:[]},u.1X=p,u.2N={},u.1E={},u.2Y=B={1c:{},12:f,2x:e,14:t},u.2N.7j={"^1h$":9(b,c,f){O h=f===d?g.41:f,i=j+"-"+h;h!==e&&h.1a>0&&!a("#"+i).1a&&(z[0].1h=i,A.U[0].1h=i+"-U",A.15[0].1h=i+"-15")},"^U.1o$":9(a,b,c){J(c)},"^U.15.1o$":9(a,b,c){T(!c)M E();!A.15&&c&&G(),I(c)},"^U.15.1B$":9(a,b,c){H(c)},"^16.(1J|2n)$":9(a,b,c){"1n"===11 c&&(a[b]=1C h.2s(c))},"^16.1u$":9(a,b,c){u.1e&&z.2C(c)},"^(N|S).(1c|12|2c|27|1R)$":9(a,b,c,d,e){O f=[1,0,0];f[e[0]==="N"?"3X":"7k"](0),L.23(u,f),K.23(u,[1,1,0,0])},"^N.2R$":9(){u.1e||u.N()},"^13.39$":9(b,c,d){a.14(z[0],"1M",j+" 19 1s-4N-4O "+d)},"^13.2g|U.15":D,"^3E.(1I|N|3Q|S|2t|1H)$":9(b,c,d){z[(a.1V(d)?"":"7l")+"18"]("1j"+c,d)}},a.1m(u,{1I:9(b){T(u.1e)M u;O c=p.U.1o,f=p.U.15.1o,g=a.2U("7m");a.14(o[0],"1K-3D",w),z=A.1j=a("<2l/>").14({1h:w,"1M":j+" 19 1s-4N-4O "+p.13.39,4Q:"7o","1K-7p":"7s","1K-3W":e,"1K-3D":w+"-U","1K-3I":d}).2q(l,B.2x).25("19",u).2C(p.16.1u).34(A.U=a("<2l />",{"1M":j+"-U",1h:w+"-U","1K-3W":d})),u.1e=-1,y=1,f&&(G(),I(f)),J(c),u.1e=d,D(),a.1i(p.3E,9(b,c){a.1V(c)&&z.18(b==="26"?"3p 4S":"1j"+b,c)}),a.1i(h,9(){R.2z==="1I"&&R(u)}),K(1,1,1,1),z.3y("3F",9(a){g.2O=B.1c,z.2m(g,[u]),y=0,u.2P(),(p.N.2R||b)&&u.N(B.1c),a()});M u},40:9(a){O b,c;4Z(a.2j()){2T"4T":b={W:z.33(),V:z.3o()};2K;2T"Y":b=h.Y(z,p.16.1u);2K;3q:c=C(a.2j()),b=c[0][c[1]],b=b.1p?b.1n():b}M b},31:9(b,c){9 j(a,b){O c,e,f;T(u.1e){4U(c 1U h)4U(e 1U h[c])T(f=(1C 7u(e,"i")).4z(a))b.3X(f),h[c][e].23(u,b)}2k a==="N.2R"&&b[2]&&(x=0,y=0,u.1I(d))}O f=/^16.(1J|2n|2o|12|1u)|13|U/i,g=e,h=u.2N,i;"1n"===11 b?(i=b,b={},b[i]=c):b=a.1m(d,{},b),a.1i(b,9(c,d){O e=C(c.2j()),h;h=e[0][e[1]],e[0][e[1]]="1f"===11 d&&d.7v?a(d):d,b[c]=[e[0],e[1],d,h],g=f.1D(c)||g}),s(p),x=y=1,a.1i(b,j),x=y=0,g&&z.1N(":28")&&u.1e&&u.1S();M u},26:9(b,c){9 j(){b?(a.1F.2F&&z[0].13.3m("2w"),z.X("7w","")):z.X({2h:"",3Y:"",V:"",4b:"",Q:"",P:""})}T(!u.1e)T(b)u.1I(1);2k M u;O d=b?"N":"S",g=p[d],h=z.1N(":28"),i;(11 b).4q("37|2G")&&(b=!h);T(h===b)M u;T(c){T(/7x|7y/.1D(c.1A)&&/4W|4X/.1D(B.1c.1A)&&c.12===p.N.12[0]&&z.7z(c.3t).1a)M u;B.1c=a.1m({},c)}i=a.2U("1j"+d),i.2O=c?B.1c:f,z.2m(i,[u,3C]);T(i.3w())M u;a.14(z[0],"1K-3I",!b),b?(u.2t(c),u.1S(c,0),g.3c&&a(m,g.3c).3f(z).19("S",i)):(1P(u.1q.N),u.1H(c)),z.4i(0,1),a.1V(g.1Y)?(g.1Y.1G(z,u),z.3y("3F",9(a){j(),a()})):g.1Y===e?(z[d](),j.1G(z)):z.51(3C,b?1:0,j),b&&g.12.2m("19-"+r+"-1R");M u},N:9(a){M u.26(d,a)},S:9(a){M u.26(e,a)},2t:9(b){T(!u.1e)M u;O c=a(m),d=1v(z[0].13.35,10),e=g.46+c.1a,f=a.1m({},b),h,i;z.29(n)||(d!==e&&(c.1i(9(){R.13.35>d&&(R.13.35=R.13.35-1)}),c.2w("."+n).19("1H",f)),i=a.2U("7B"),i.2O=f,z.2m(i,[u,e]),i.3w()||(z.3B(n)[0].13.35=e));M u},1H:9(b){O c=a.1m({},b),d;z.4c(n),d=a.2U("7C"),d.2O=c,z.2m(d,[u]);M u},1S:9(d,f){T(!u.1e||x)M u;x=1;O k=p.16.12,l=p.16,m=l.1J,n=l.2n,o=l.2o,q=z.3o(),r=z.33(),s=0,t=0,w=a.2U("44"),y=z.X("16")==="2c",A=l.1Z.1Q?l.1Z:a(b),C={Q:0,P:0},D=(u.1E.17||{}).1g,E={Q:9(a){O b=A.2I,c=m.x==="Q"?q:m.x==="1k"?-q:-q/2,d=n.x==="Q"?s:n.x==="1k"?-s:-s/2,e=D&&D.1p==="x"?g.2y.13.17.V:0,f=b-a-e,h=a+q-A.V-b+e,i=c-(m.1p==="x"||m.x===m.y?d:0),j=m.x==="1r";f>0&&(m.x!=="Q"||h>0)?C.Q-=i+(j?0:2*o.x):h>0&&(m.x!=="1k"||f>0)&&(C.Q-=j?-i:i+2*o.x),C.Q!==a&&j&&(C.Q-=o.x),C.Q<0&&-C.Q>h&&(C.Q=a);M C.Q-a},P:9(a){O b=A.2D,c=m.y==="P"?r:m.y==="1l"?-r:-r/2,d=n.y==="P"?t:n.y==="1l"?-t:-t/2,e=D&&D.1p==="y"?g.2y.13.17.W:0,f=b-a-e,h=a+r-A.W-b+e,i=c-(m.1p==="y"||m.x===m.y?d:0),j=m.y==="1r";f>0&&(m.y!=="P"||h>0)?C.P-=i+(j?0:2*o.y):h>0&&(m.y!=="1l"||f>0)&&(C.P-=j?-i:i+2*o.y),C.P!==a&&j&&(C.P-=o.y),C.P<0&&-C.P>h&&(C.P=a);M C.P-a}};f=f===c||!!f||e,A=A?{5a:A,W:A[(A[0]===b?"h":"7F")+"7G"](),V:A[(A[0]===b?"w":"7H")+"7I"](),2I:A.2I(),2D:A.2D()}:e;T(k==="2b")n={x:"Q",y:"P"},d=d&&(d.1A==="2p"||d.1A==="48")?B.1c:o.2b||!d||!d.3j?a.1m({},i):d,C={P:d.3Z,Q:d.3j};2k{k==="1c"&&(d&&d.12&&d.1A!=="48"&&d.1A!=="2p"?k=B.12=a(d.12):k=B.12),k=a(k).7K(0);T(k.1a===0)M u;k[0]===1z||k[0]===b?(s=k.V(),t=k.W(),k[0]===b&&(C={P:y?0:A.2D,Q:y?0:A.2I})):k.1N("7M")&&h.3R?C=h.3R(k,n):k[0].7N=="7O://7P.7Q.7R/7U/3e"&&h.3e?C=h.3e(k,n):(s=k.3o(),t=k.33(),C=h.Y(k,l.1u)),C.Y&&(s=C.V,t=C.W,C=C.Y),C.Q+=n.x==="1k"?s:n.x==="1r"?s/2:0,C.P+=n.y==="1l"?t:n.y==="1r"?t/2:0}C.Q+=o.x+(m.x==="1k"?-q:m.x==="1r"?-q/2:0),C.P+=o.y+(m.y==="1l"?-r:m.y==="1r"?-r/2:0),l.1Z.1Q&&k[0]!==b&&k[0]!==v?C.3x={Q:E.Q(C.Q),P:E.P(C.P)}:C.3x={Q:0,P:0},z.14("1M",9(b,c){M a.14(R,"1M").24(/1s-1j-58-\\w+/i,"")}).3B(j+"-58-"+m.4u()),w.2O=a.1m({},d),z.2m(w,[u,C,A.5a]);T(w.3w())M u;2A C.3x,f&&7W(C.Q,C.P)?z.1N(":28")&&a.1V(l.1Y)&&(l.1Y.1G(z,u,C),z.3y(9(b){O c=a(R);c.X({4b:"",W:""}),a.1F.2F&&R.13&&R.13.3m("2w"),b()})):z.X(C),x=0;M u},2P:9(){T(u.1e<1||y)M u;O b=j+"-5c",c,d,e;y=1,z.X("V","7Y").3B(b),c=z.V()+(a.1F.5d?1:0),d=1v(z.X("2Q-V"),10)||0,e=1v(z.X("5e-V"),10)||0,c=d+e?1d.5e(1d.2Q(c,e),d):c,z.X("V",c).4c(b),y=0;M u},3U:9(b){O c=l;"37"!==11 b&&(b=!z.29(c)&&!B.2x),u.1e?(z.2q(c,b),a.14(z[0],"1K-2x",b)):B.2x=!!b;M u},7Z:9(){M u.3U(e)},2a:9(){O b=o[0],c=a.14(b,q);u.1e&&(z.1O(),a.1i(u.1E,9(){R.2a&&R.2a()})),1P(u.1q.N),1P(u.1q.S),L(1,1,1,1),a.5h(b,"19"),c&&(a.14(b,"15",c),o.3M(q)),o.3M("1K-3D").1y(".19");M o}})}9 s(b){O c;T(!b||"1f"!==11 b)M e;"1f"!==11 b.21&&(b.21={1A:b.21});T("U"1U b){T("1f"!==11 b.U||b.U.1Q)b.U={1o:b.U};c=b.U.1o||e,!a.1V(c)&&(!c&&!c.14||c.1a<1||"1f"===11 c&&!c.1Q)&&(b.U.1o=e),"15"1U b.U&&("1f"!==11 b.U.15&&(b.U.15={1o:b.U.15}),c=b.U.15.1o||e,!a.1V(c)&&(!c&&!c.14||c.1a<1||"1f"===11 c&&!c.1Q)&&(b.U.15.1o=e))}"16"1U b&&("1f"!==11 b.16&&(b.16={1J:b.16,2n:b.16})),"N"1U b&&("1f"!==11 b.N&&(b.N.1Q?b.N={12:b.N}:b.N={1c:b.N})),"S"1U b&&("1f"!==11 b.S&&(b.S.1Q?b.S={12:b.S}:b.S={1c:b.S})),"13"1U b&&("1f"!==11 b.13&&(b.13={39:b.13})),a.1i(h,9(){R.2V&&R.2V(b)});M b}9 r(){O c=b.5k;M c&&(c.4e||c.5o||a.5b).23(c,22)}O d=!0,e=!1,f=5r,g,h,i,j="1s-1j",k="1s-2g",l="1s-3d-2x",m="2l.19."+j,n=j+"-2t",o="-5x",p="5A",q="4G";g=a.2e.19=9(b,h,i){O j=(""+b).2j(),k=f,l=j==="3U"?[d]:a.5C(22).4g(1,10),m=l[l.1a-1],n=R[0]?a.25(R[0],"19"):f;T(!22.1a&&n||j==="7g")M n;T("1n"===11 b){R.1i(9(){O b=a.25(R,"19");T(!b)M d;m&&m.5F&&(b.2Y.1c=m);T(j!=="3s"&&j!=="1X"||!h)b[j]&&b[j].23(b[j],l);2k T(a.5G(h)||i!==c)b.31(h,i);2k{k=b.40(h);M e}});M k!==f?k:R}T("1f"===11 b||!22.1a){n=s(a.1m(d,{},b));M g.18.1G(R,n,m)}},g.18=9(b,c){M R.1i(9(f){9 p(b){9 c(){o.1I(11 b==="1f"||i.N.2R),k.N.1y(l.N),k.S.1y(l.S)}T(o.2Y.2x)M e;o.2Y.1c=a.1m({},b),i.N.27>0?(1P(o.1q.N),o.1q.N=2Z(c,i.N.27),l.N!==l.S&&k.S.18(l.S,9(){1P(o.1q.N)})):c()}O i,k,l,m=!b.1h||b.1h===e||b.1h.1a<1||a("#"+j+"-"+b.1h).1a?g.41++:b.1h,n=".19-"+m+"-2i",o=u.1G(R,m,b);T(o===e)M d;i=o.1X,a.1i(h,9(){R.2z==="2z"&&R(o)}),k={N:i.N.12,S:i.S.12},l={N:a.3A(""+i.N.1c).24(/ /g,n+" ")+n,S:a.3A(""+i.S.1c).24(/ /g,n+" ")+n},i.S.1c==="4f"&&(l.S="2r"+n),k.N.18(l.N,p),(i.N.2R||i.55)&&p(c)})},h=g.1E={2s:9(a){a=(""+a).24(/([A-Z])/," $1").24(/67/54,"1r").2j(),R.x=(a.47(/Q|1k/i)||a.47(/1r/)||["3u"])[0].2j(),R.y=(a.47(/P|1l|1r/i)||["3u"])[0].2j(),R.1p=a.3a(0).4q(/^(t|b)/)>-1?"y":"x",R.1n=9(){M R.1p==="y"?R.y+R.x:R.x+R.y},R.4u=9(){O a=R.x.2v(0,1),b=R.y.2v(0,1);M a===b?a:a==="c"||a!=="c"&&b!=="c"?b+a:a+b}},Y:9(c,d){9 k(a,b){e.Q+=b*a.2I(),e.P+=b*a.2D()}O e=c.Y(),f=d,g=0,i=1z.32,j;T(f){6g{T(f[0]===i)2K;f.X("16")!=="6h"&&(j=f.16(),e.Q-=j.Q+(1v(f.X("6k"),10)||0),e.P-=j.P+(1v(f.X("6n"),10)||0),g++)}2X(f=f.6p());(d[0]!==i||g>1)&&k(d,1),h.4x&&k(a(b),-1)}M e},4x:3T((""+(/4C.*6t ([0-6u]{2,3})|(4C 6y).*6A.*6D/i.4z(6H.6J)||[0,"6K"])[1]).24("52","6M").24("6Q","."))<4.1,2e:{14:9(b,c){T(R.1a){O d=R[0],e="15",f=a.25(d,"19");T(b===e){T(22.1a<2)M a.14(d,q);T(11 f==="1f"){f&&f.1e&&f.1X.U.14===e&&f.2Y.14&&f.31("U.1o",c),a.2e["14"+p].23(R,22),a.14(d,q,a.14(d,e));M R.3M(e)}}}},4E:9(b){O c=a([]),d="15",e;e=a.2e["4E"+p].23(R,22).2w("[4G]").1i(9(){a.14(R,d,a.14(R,q)),R.3m(q)}).7i();M e},1O:a.1s?f:9(b,c){a(R).1i(9(){c||(!b||a.2w(b,[R]).1a)&&a("*",R).2E(R).1i(9(){a(R).7n("1O")})})}}},a.1i(h.2e,9(b,c){T(!c)M d;O e=a.2e[b+p]=a.2e[b];a.2e[b]=9(){M c.23(R,22)||e.23(R,22)}}),a(b).18("2M.19",9(){O b="45";a(1z).18(b+".19",9(a){i={3j:a.3j,3Z:a.3Z,1A:b}})}),g.2W="2.0.7A",g.41=0,g.4Y="42 7D 3v 53 45 2r 3b".30(" "),g.46=7L,g.2y={55:e,1h:e,49:d,U:{1o:d,14:"15",15:{1o:e,1B:e}},16:{1J:"P Q",2n:"1l 1k",12:e,1u:e,1Z:e,2o:{x:0,y:0,2b:d,2p:d},1Y:d},N:{12:e,1c:"3b",1Y:d,27:3C,3c:e,2R:e},S:{12:e,1c:"2r",1Y:d,27:0,2c:e,1R:e},13:{39:"",2g:e},3E:{1I:f,3Q:f,N:f,S:f,26:f,2t:f,1H:f}},h.1x=9(a){O b=a.1E.1x;M"1f"===11 b?b:a.1E.1x=1C v(a)},h.1x.2z="1I",h.1x.2V=9(a){O b=a.U,c;b&&"1x"1U b&&(c=b.1x,11 c!=="1f"&&(c=a.U.1x={2f:c}),"37"!==11 c.2u&&c.2u&&(c.2u=!!c.2u))},a.1m(d,g.2y,{U:{1x:{5i:d,2u:d}}}),h.17=9(a){O b=a.1E.17;M"1f"===11 b?b:a.1E.17=1C x(a)},h.17.2z="1I",h.17.2V=9(a){O b=a.13,c;b&&"17"1U b&&(c=a.13.17,11 c!=="1f"&&(a.13.17={1g:c}),/1n|37/i.1D(11 c.1g)||(c.1g=d),11 c.V!=="2G"&&2A c.V,11 c.W!=="2G"&&2A c.W,11 c.1b!=="2G"&&c.1b!==d&&2A c.1b,11 c.Y!=="2G"&&2A c.Y)},a.1m(d,g.2y,{13:{17:{1g:d,3h:e,V:6,W:6,1b:d,Y:0}}}),h.3R=9(b,c){9 l(a,b){O d=0,e=1,f=1,g=0,h=0,i=a.V,j=a.W;2X(i>0&&j>0&&e>0&&f>0){i=1d.3l(i/2),j=1d.3l(j/2),c.x==="Q"?e=i:c.x==="1k"?e=a.V-i:e+=1d.3l(i/2),c.y==="P"?f=j:c.y==="1l"?f=a.W-j:f+=1d.3l(j/2),d=b.1a;2X(d--){T(b.1a<2)2K;g=b[d][0]-a.Y.Q,h=b[d][1]-a.Y.P,(c.x==="Q"&&g>=e||c.x==="1k"&&g<=e||c.x==="1r"&&(g<e||g>a.V-e)||c.y==="P"&&h>=f||c.y==="1l"&&h<=f||c.y==="1r"&&(h<f||h>a.W-f))&&b.6G(d,1)}}M{Q:b[0][0],P:b[0][1]}}O d=b.14("3P").2j(),e=b.14("6R").30(","),f=[],g=a(\'3k[74="#\'+b.7c("4V").14("3K")+\'"]\'),h=g.Y(),i={V:0,W:0,Y:{P:3r,1k:0,1l:0,Q:3r}},j=0,k=0;h.Q+=1d.3i((g.3o()-g.V())/2),h.P+=1d.3i((g.33()-g.W())/2);T(d==="57"){j=e.1a;2X(j--)k=[1v(e[--j],10),1v(e[j+1],10)],k[0]>i.Y.1k&&(i.Y.1k=k[0]),k[0]<i.Y.Q&&(i.Y.Q=k[0]),k[1]>i.Y.1l&&(i.Y.1l=k[1]),k[1]<i.Y.P&&(i.Y.P=k[1]),f.3X(k)}2k f=a.4V(e,9(a){M 1v(a,10)});4Z(d){2T"7E":i={V:1d.3z(f[2]-f[0]),W:1d.3z(f[3]-f[1]),Y:{Q:f[0],P:f[1]}};2K;2T"7J":i={V:f[2]+2,W:f[2]+2,Y:{Q:f[0],P:f[1]}};2K;2T"57":a.1m(i,{V:1d.3z(i.Y.1k-i.Y.Q),W:1d.3z(i.Y.1l-i.Y.P)}),c.1n()==="5g"?i.Y={Q:i.Y.Q+i.V/2,P:i.Y.P+i.W/2}:i.Y=l(i,f.4g()),i.V=i.W=0}i.Y.Q+=h.Q,i.Y.P+=h.P;M i},h.3e=9(b,c){O d=a(1z),e=b[0],f={V:0,W:0,Y:{P:3r,Q:3r}},g,h,i,j,k;T(e.4s&&e.5L){g=e.4s(),h=e.5U(),i=e.61||e;T(!i.4r)M f;j=i.4r(),j.x=g.x,j.y=g.y,k=j.4P(h),f.Y.Q=k.x,f.Y.P=k.y,j.x+=g.V,j.y+=g.W,k=j.4P(h),f.V=k.x-f.Y.Q,f.W=k.y-f.Y.P,f.Y.Q+=d.2I(),f.Y.P+=d.2D()}M f},h.1t=9(a){O b=a.1E.1t;M"1f"===11 b?b:a.1E.1t=1C y(a)},h.1t.2z="1I",h.1t.2V=9(a){a.N&&(11 a.N.1t!=="1f"?a.N.1t={2S:!!a.N.1t}:11 a.N.1t.2S==="52"&&(a.N.1t.2S=d))},a.1m(d,g.2y,{N:{1t:{2S:e,1Y:d,1H:d}}}),h.1W=9(b){O c=a.1F,d=b.1E.1W;T(a("6x, 1f").1a<1||(!c.2F||c.2W.3a(0)!=="6"))M e;M"1f"===11 d?d:b.1E.1W=1C z(b)},h.1W.2z="1I"}(80,4d)',62,498,'|||||||||function|||||||||||||||||||||||||||||||||||||||return|show|var|top|left|this|hide|if|content|width|height|css|offset|||typeof|target|style|attr|title|position|tip|bind|qtip|length|border|event|Math|rendered|object|corner|id|each|tooltip|right|bottom|extend|string|text|precedance|timers|center|ui|modal|container|parseInt|titlebar|ajax|unbind|document|type|button|new|test|plugins|browser|call|blur|render|my|aria|overlay|class|is|remove|clearTimeout|jquery|inactive|reposition|init|in|isFunction|bgiframe|options|effect|viewport||metadata|arguments|apply|replace|data|toggle|delay|visible|hasClass|destroy|mouse|fixed||fn|url|widget|display|create|toLowerCase|else|div|trigger|at|adjust|resize|toggleClass|mouseleave|Corner|focus|once|substr|filter|disabled|defaults|initialize|delete|fill|appendTo|scrollTop|add|msie|number|html|scrollLeft|block|break|elements|load|checks|originalEvent|redraw|max|ready|on|case|Event|sanitize|version|while|cache|setTimeout|split|set|body|outerHeight|append|zIndex|color|boolean|update|classes|charAt|mouseenter|solo|state|svg|not|transparent|mimic|ceil|pageX|img|floor|removeAttribute|icon|outerWidth|tooltipshow|default|1e10|option|relatedTarget|inherit|mousedown|isDefaultPrevented|adjusted|queue|abs|trim|addClass|90|describedby|events|fx|absolute|getContext|hidden|round|name|indexOf|removeAttr|sqrt|doc|shape|move|imagemap|script|parseFloat|disable|index|atomic|push|visibility|pageY|get|nextid|click|px|tooltipmove|mousemove|zindex|match|scroll|overwrite|vml|opacity|removeClass|window|error|unfocus|slice|radius|stop|canvas|detectColours|save|3e3|Number|none|stroke|search|createSVGPoint|getBBox|miter|abbreviation|inline|topright|iOS|hover|exec|find|empty|CPU|Close|clone|topleft|oldtitle|mouseout|webkit|header|bottomright|bottomleft|margin|helper|reset|matrixTransform|role|iframe|tooltiphide|dimensions|for|map|out|leave|inactiveEvents|switch||fadeTo|undefined|mouseup|gi|prerender|behavior|poly|pos|lineTo|elem|noop|fluid|mozilla|min|detectCorner|centercenter|removeData|loading|VML|console|use|strict|frameborder|log|src|alpha|null|progid|DXImageTransform|Microsoft|Opacity|qtipmodal|31000px|cursor|pointer|_replacedByqTip|animated|makeArray|pow|moz|timeStamp|isPlainObject|Color|rgba|prependTo|coordorigin|parentNode|children|solid|dashed|123456|restore|clearRect|translate|beginPath|getScreenCTM|moveTo|closePath|fillStyle|lineWidth|lineJoin|miterLimit|farthestViewportElement|xe|antialias|coordsize|path|fillcolor|middle|filled|stroked|weight|miterlimit|1000|joinstyle|background|topcenter|do|static|leftcenter|lefttop|borderLeftWidth|righttop|leftbottom|borderTopWidth|rightbottom|offsetParent|backgroundColor|success|context|OS|9_|try|Function|select|like|parse|AppleWebKit|HTML5|attribute|Mobile|pushStack|grep|splice|navigator|mouseover|userAgent|4_2|parents|3_2|one|abort|unload|_|coords|join|image|special|inArray|insertBefore|preventDefault|stopPropagation|closest|label|prepend|span|close|usemap|to|Unable|catch|times|keydown|qtipopts|html5|parent|keyup|active|down|api|pop|end|builtin|unshift|un|tooltiprender|triggerHandler|alert|live|rightcenter|bottomcenter|polite|Alpha|RegExp|nodeType|overflow|over|enter|has|0pre|tooltipfocus|tooltipblur|dblclick|rect|outerH|eight|outerW|idth|circle|eq|15e3|area|namespaceURI|http|www|w3|org|ms|100|2000|tabindex|isNaN|strokeStyle|auto|enable|jQuery|javascript'.split('|'),0,{}))
