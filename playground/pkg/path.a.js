����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �-���pathpatherrorsstringsunicode/utf8��
$$ exports $$
pv0pathpath	Base path    	
Clean path    	Dir path    ErrBadPattern6	Ext path    	
IsAbs path    	Join elem   	
Match pattern name matched err6 	
Split path dir file  AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["strings"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["unicode/utf8"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} H��H=$pkg.lazybuf=$newType(0,$kindStruct,"path.lazybuf",true,"path",false,function(s_,buf_,w_){this.$val=this;if(arguments.length===0){this.s="";this.buf=P.nil;this.w=0;return;}this.s=s_;this.buf=buf_;this.w=w_;});��Q.methods=[{prop:"index",name:"index",pkg:"path",typ:$funcType([$Int],[$Uint8],false)},{prop:"append",name:"append",pkg:"path",typ:$funcType([$Uint8],[],false)},{prop:"string",name:"string",pkg:"path",typ:$funcType([],[$String],false)}];��H.init("path",[{prop:"s",name:"s",exported:false,typ:$String,tag:""},{prop:"buf",name:"buf",exported:false,typ:P,tag:""},{prop:"w",name:"w",exported:false,typ:$Int,tag:""}]);lazybufpath.Ppath.Qpath.lazybuf PP=$sliceType($Uint8);P QQ=$ptrType(H);Qpath.lazybuf ErrBadPattern 9    $pkg.ErrBadPattern=A.New("syntax error in pattern");
errors.Newpath.ErrBadPattern 
path.MatchD��D=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=false;d=$ifaceNil;  �Pattern:while(true){if(!(a.length>0)){break;}  �e=false;  �f="";  �g=E(a);e=g[0];f=g[1];a=g[2];    if(e&&f===""){    h=!B.Contains(b,"/");i=$ifaceNil;c=h;d=i;return[c,d];    }  �j=F(f,b);k=j[0];l=j[1];m=j[2];    if(l&&((k.length===0)||a.length>0)){  �b=k;  �continue;    }    if(!($interfaceIsEqual(m,$ifaceNil))){    n=false;o=m;c=n;d=o;return[c,d];    }    if(e){  6p=0;while(true){if(!(p<b.length&&!((b.charCodeAt(p)===47)))){break;}  iq=F(f,b.substring((p+1>>0)));r=q[0];s=q[1];t=q[2];    if(s){    if((a.length===0)&&r.length>0){  _p=p+(1)>>0;    continue;    }  'b=r;  5continue Pattern;    }    if(!($interfaceIsEqual(t,$ifaceNil))){    u=false;v=t;c=u;d=v;return[c,d];    }  _p=p+(1)>>0;    }    }    w=false;x=$ifaceNil;c=w;d=x;return[c,d];    }    y=b.length===0;z=$ifaceNil;c=y;d=z;return[c,d];    };$pkg.Match=D;Match
path.Matchpath.matchChunkpath.scanChunkstrings.Contains path.scanChunkE�7E=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j;b=false;c="";d="";  	hwhile(true){if(!(a.length>0&&(a.charCodeAt(0)===42))){break;}  	�a=a.substring(1);  	�b=true;    }  	�e=false;  	�f=0;  	�f=0;Scan:while(true){if(!(f<a.length)){break;}    g=a.charCodeAt(f);    if(g===(92)){    if((f+1>>0)<a.length){  
|f=f+(1)>>0;    }    }else if(g===(91)){  
�e=true;    }else if(g===(93)){  
�e=false;    }else if(g===(42)){    if(!e){  
�break Scan;    }    }  	�f=f+(1)>>0;    }    h=b;i=a.substring(0,f);j=a.substring(f);b=h;c=i;d=j;return[b,c,d];    };	scanChunkpath.scanChunk path.matchChunkF��F=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c="";d=false;e=$ifaceNil;  0while(true){if(!(a.length>0)){break;}    if(b.length===0){  [return[c,d,e];    }    f=a.charCodeAt(0);    if(f===(91)){  �g=C.DecodeRuneInString(b);h=g[0];i=g[1];  �b=b.substring(i);  �a=a.substring(1);  �j=true;    if(a.length>0&&(a.charCodeAt(0)===94)){  ?j=false;  Va=a.substring(1);    }  �k=false;  �l=0;  �while(true){    if(a.length>0&&(a.charCodeAt(0)===93)&&l>0){  �a=a.substring(1);  break;    }  m=0;n=0;o=m;p=n;  *q=G(a);o=q[0];a=q[1];e=q[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  \return[c,d,e];    }  mp=o;    if(a.charCodeAt(0)===45){  �r=G(a.substring(1));p=r[0];a=r[1];e=r[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[c,d,e];    }    }    if(o<=h&&h<=p){  k=true;    }  l=l+(1)>>0;    }    if(!(k===j)){  Greturn[c,d,e];    }    }else if(f===(63)){    if(b.charCodeAt(0)===47){  xreturn[c,d,e];    }  �s=C.DecodeRuneInString(b);t=s[1];  �b=b.substring(t);  �a=a.substring(1);    }else if(f===(92)){  �a=a.substring(1);    if(a.length===0){  e=$pkg.ErrBadPattern;  #return[c,d,e];    }    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  greturn[c,d,e];    }  vb=b.substring(1);  �a=a.substring(1);    }else{    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  greturn[c,d,e];    }  vb=b.substring(1);  �a=a.substring(1);    }    }    u=b;v=true;w=$ifaceNil;c=u;d=v;e=w;return[c,d,e];    };
matchChunkpath.ErrBadPatternpath.getEscpath.matchChunkunicode/utf8.DecodeRuneInString path.getEscG�G=function(a){var $ptr,a,b,c,d,e,f;b=0;c="";d=$ifaceNil;    if((a.length===0)||(a.charCodeAt(0)===45)||(a.charCodeAt(0)===93)){  �d=$pkg.ErrBadPattern;  �return[b,c,d];    }    if(a.charCodeAt(0)===92){  �a=a.substring(1);    if(a.length===0){  �d=$pkg.ErrBadPattern;  �return[b,c,d];    }    }  e=C.DecodeRuneInString(a);b=e[0];f=e[1];    if((b===65533)&&(f===1)){  Xd=$pkg.ErrBadPattern;    }  pc=a.substring(f);    if(c.length===0){  �d=$pkg.ErrBadPattern;    }  �return[b,c,d];    };getEscpath.ErrBadPatternpath.getEscunicode/utf8.DecodeRuneInString (*path.lazybuf).index�&H.ptr.prototype.index=function(a){var $ptr,a,b,c;  b=this;    if(!(b.buf===P.nil)){  6return(c=b.buf,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]));    }  Jreturn b.s.charCodeAt(a);    };H.prototype.index=function(a){return this.$val.index(a);};lazybufindex~path.Ppath.lazybuf (*path.lazybuf).append��H.ptr.prototype.append=function(a){var $ptr,a,b,c,d;  ab=this;    if(b.buf===P.nil){    if(b.w<b.s.length&&(b.s.charCodeAt(b.w)===a)){  �b.w=b.w+(1)>>0;  �return;    }  �b.buf=$makeSlice(P,b.s.length);  �$copyString(b.buf,b.s.substring(0,b.w));    }  (c=b.buf,d=b.w,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]=a));  b.w=b.w+(1)>>0;    };H.prototype.append=function(a){return this.$val.append(a);};lazybufappend~path.Ppath.lazybuf (*path.lazybuf).string��H.ptr.prototype.string=function(){var $ptr,a;  ,a=this;    if(a.buf===P.nil){  _return a.s.substring(0,a.w);    }  treturn $bytesToString($subslice(a.buf,0,a.w));    };H.prototype.string=function(){return this.$val.string();};lazybufstring~path.Ppath.lazybuf 
path.CleanI�+I=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j;    if(a===""){   return".";    }  b=a.charCodeAt(0)===47;  *c=a.length;  ;d=new H.ptr(a,P.nil,0);  Te=0;f=0;g=e;h=f;    if(b){  ud.append(47);  �i=1;j=1;g=i;h=j;    }  �while(true){if(!(g<c)){break;}    if((a.charCodeAt(g)===47)){  �g=g+(1)>>0;    }else if((a.charCodeAt(g)===46)&&(((g+1>>0)===c)||(a.charCodeAt((g+1>>0))===47))){  7g=g+(1)>>0;    }else if((a.charCodeAt(g)===46)&&(a.charCodeAt((g+1>>0))===46)&&(((g+2>>0)===c)||(a.charCodeAt((g+2>>0))===47))){  �g=g+(2)>>0;    if(d.w>h){  �d.w=d.w-(1)>>0;  �while(true){if(!(d.w>h&&!((d.index(d.w)===47)))){break;}  3d.w=d.w-(1)>>0;    }    }else if(!b){    if(d.w>0){  �d.append(47);    }  �d.append(46);  �d.append(46);  �h=d.w;    }    }else{    if(b&&!((d.w===1))||!b&&!((d.w===0))){  wd.append(47);    }  �while(true){if(!(g<c&&!((a.charCodeAt(g)===47)))){break;}  �d.append(a.charCodeAt(g));  �g=g+(1)>>0;    }    }    }    if(d.w===0){  return".";    }  .return d.string();    };$pkg.Clean=I;Clean
path.Cleanpath.Ppath.append~path.index~path.lazybufpath.string~ 
path.SplitJ��J=function(a){var $ptr,a,b,c,d,e,f;b="";c="";   ~d=B.LastIndex(a,"/");    e=a.substring(0,(d+1>>0));f=a.substring((d+1>>0));b=e;c=f;return[b,c];    };$pkg.Split=J;Split
path.Splitstrings.LastIndex 	path.JoinK�K=function(a){var $ptr,a,b,c,d,e;  !�b=a;c=0;while(true){if(!(c<b.$length)){break;}d=c;e=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);    if(!(e==="")){  !�return I(B.Join($subslice(a,d),"/"));    }    c++;}  !�return"";    };$pkg.Join=K;Join
path.Clean	path.Joinstrings.Join path.ExtL��L=function(a){var $ptr,a,b;  "�b=a.length-1>>0;while(true){if(!(b>=0&&!((a.charCodeAt(b)===47)))){break;}    if(a.charCodeAt(b)===46){  #5return a.substring(b);    }  #b=b-(1)>>0;    }  #Mreturn"";    };$pkg.Ext=L;Extpath.Ext 	path.BaseM�MM=function(a){var $ptr,a,b;    if(a===""){  $ereturn".";    }  $�while(true){if(!(a.length>0&&(a.charCodeAt((a.length-1>>0))===47))){break;}  $�a=a.substring(0,(a.length-1>>0));    }  % b=B.LastIndex(a,"/");    if(b>=0){  %.a=a.substring((b+1>>0));    }    if(a===""){  %}return"/";    }  %�return a;    };$pkg.Base=M;Base	path.Basestrings.LastIndex 
path.IsAbsN\N=function(a){var $ptr,a;  %�return a.length>0&&(a.charCodeAt(0)===47);    };$pkg.IsAbs=N;IsAbs
path.IsAbs path.DirOSO=function(a){var $ptr,a,b,c;  '�b=J(a);c=b[0];  '�return I(c);    };$pkg.Dir=O;Dir
path.Cleanpath.Dir
path.Split �	0{"Base":10222,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/path/match.go","Base":1,"Size":4796,"Lines":[0,55,109,159,160,173,174,183,193,204,220,222,223,284,342,343,410,436,439,451,464,473,530,581,621,673,736,772,775,795,853,889,943,946,1016,1083,1100,1103,1164,1173,1197,1213,1232,1276,1303,1362,1406,1410,1451,1491,1556,1626,1646,1693,1705,1717,1721,1739,1760,1764,1776,1817,1838,1892,1940,1952,2017,2059,2074,2081,2095,2117,2123,2143,2166,2172,2177,2181,2201,2204,2232,2234,2235,2309,2341,2406,2451,2475,2489,2492,2510,2521,2527,2563,2585,2598,2652,2679,2687,2692,2704,2722,2734,2753,2765,2782,2797,2802,2806,2809,2849,2851,2852,2915,2974,3049,3118,3140,3159,3169,3173,3193,3205,3227,3265,3278,3299,3322,3344,3386,3409,3431,3436,3459,3477,3492,3501,3558,3581,3592,3598,3618,3670,3682,3688,3700,3725,3782,3795,3802,3808,3836,3854,3860,3873,3878,3906,3917,3922,3923,3935,3955,3966,3971,4009,4022,4043,4044,4057,4078,4102,4126,4137,4142,4157,4158,4169,4194,4205,4210,4223,4244,4248,4251,4272,4274,4275,4354,4417,4477,4499,4508,4511,4534,4554,4577,4600,4610,4614,4617,4657,4693,4715,4718,4738,4761,4783,4786,4794],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/path/path.go","Base":4798,"Size":5423,"Lines":[0,55,109,159,160,237,247,260,261,270,281,283,284,334,392,458,515,537,549,561,570,572,573,611,630,648,651,666,668,669,704,723,762,771,781,785,818,843,846,862,869,871,872,908,927,946,949,977,979,980,1039,1103,1159,1162,1214,1280,1351,1405,1459,1523,1526,1591,1594,1653,1680,1683,1739,1767,1806,1839,1856,1869,1872,1873,1899,1915,1916,1932,1991,2045,2107,2172,2197,2216,2229,2247,2266,2269,2270,2283,2294,2317,2342,2349,2406,2422,2429,2506,2541,2551,2563,2587,2608,2620,2672,2685,2691,2708,2771,2790,2811,2817,2837,2857,2876,2881,2892,2917,2943,2997,3017,3022,3041,3081,3105,3110,3114,3117,3118,3149,3166,3179,3182,3183,3204,3206,3207,3267,3326,3390,3411,3474,3519,3554,3585,3587,3588,3659,3731,3765,3800,3826,3841,3886,3890,3893,3904,3906,3907,3960,4018,4067,4102,4133,4190,4212,4231,4235,4238,4249,4251,4252,4294,4362,4405,4468,4500,4517,4530,4533,4561,4610,4641,4644,4670,4718,4738,4741,4780,4797,4810,4813,4826,4828,4829,4876,4907,4947,4949,4950,5031,5113,5137,5179,5256,5338,5348,5379,5402,5421],"Infos":null}]}
 