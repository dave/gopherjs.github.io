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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �7���	go/formatformatbytesfmtgo/ast	go/parser
go/printergo/tokeniostrings�
$$ exports $$
pv0formatgo/format	Node dstWriterioio 
Write p2nerr6  fsetFileSet
tokengo/token
mutexRWMutexnosyncFgithub.com/gopherjs/gopherjs/nosyncwriteLocked  readLockCounter LockrwH   UnlockrwH   
RLockrwH   RUnlockrwH    base 
filesFilesetD name  base size 
lines 
infoslineInfoOffset Filename  Line    Namef`    Basef`   Sizef`   LineCountf`   AddLinef`offset  MergeLinef`line  SetLinesf`
lines   $SetLinesForContentf`content2  AddLineInfof`offsetfilename line  Posf`offset PosIsValidp�     Offsetf`p�  Linef`p�  unpackf`offsetadjusted filename linecolumn positionf`p�adjusted posPositionFilename  Offset Line Column IsValidpos�    Stringpos�     PositionForf`p�adjusted pos� Positionf`p�pos�  last` BasesD   AddFilesDfilename basesize ` IteratesDf  `     filesDp� ` FilesDp�f` PositionForsDp�adjusted pos� PositionsDp�pos� ReadsDdecode     6  6 
WritesDencode     6  6 node   6 	Source src2 2 6 AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["fmt"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["go/ast"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["go/parser"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["go/printer"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["go/token"];a    $r=F.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["io"];a    $r=G.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["strings"];a    $r=H.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} PP=$ptrType(C.File);Pgo/ast.File QQ=$ptrType(E.CommentedNode);Qgo/printer.CommentedNode RR=$sliceType($Uint8);R SS=$arrayType($Uint8,4);S TT=$arrayType($Uint8,64);T UU=$sliceType($emptyInterface);U VV=$ptrType(C.CommentGroup);Vgo/ast.CommentGroup WW=$sliceType(V);Wgo/format.V XX=$ptrType(C.GenDecl);Xgo/ast.GenDecl Iconfig     I=new E.Config.ptr(6,8,0);configgo/format.configgo/printer.Config go/format.NodeJ�J=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=[d];  �e=P.nil;  �f=Q.nil;  �g=c;    if($assertType(g,P,true)[1]){    h=g.$val;  �e=h;    }else if($assertType(g,Q,true)[1]){    i=g.$val;  "j=$assertType(i.Node,P,true);k=j[0];l=j[1];    if(l){  Ge=k;  Sf=i;    }    }  �if(!(e===P.nil)&&L(e)){$s=1;continue;}$s=2;continue;    case 1:  %d[0]=new A.Buffer.ptr(R.nil,0,S.zero(),T.zero(),0);  8m=I.Fprint(d[0],b,e);$s=3;case 3:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;    if(!($interfaceIsEqual(n,$ifaceNil))){  treturn n;    }  �p=D.ParseFile(b,"",d[0].Bytes(),4);$s=4;case 4:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}o=p;e=o[0];n=o[1];  �if(!($interfaceIsEqual(n,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:  q=B.Errorf("format.Node internal error (%s)",new U([n]));$s=7;case 7:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}$s=8;case 8:return q;    case 6:  ]$r=C.SortImports(b,e);$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �c=e;    if(!(f===Q.nil)){  �c=new E.CommentedNode.ptr(e,f.Comments);    }    case 2:  r=I.Fprint(a,b,c);$s=10;case 10:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}$s=11;case 11:return r;    }return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Node=J;Nodebytes.Buffer
fmt.Errorfgo/ast.CommentGroupgo/ast.Filego/ast.SortImportsgo/format.Nodego/format.Pgo/format.Qgo/format.Rgo/format.Sgo/format.Tgo/format.Ugo/format.Vgo/format.Wgo/format.configgo/format.hasUnsortedImportsgo/parser.ParseFilego/printer.CommentedNode go/format.SourceK��K=function(a){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  
tb=F.NewFileSet();  
�d=M(b,"",a,true);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];g=c[2];h=c[3];    if(!($interfaceIsEqual(h,$ifaceNil))){  
�return[R.nil,h];    }  
�if(f===$throwNilPointerError){$s=2;continue;}$s=3;continue;    case 2:  T$r=C.SortImports(b,e);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 3:  ui=N(b,e,f,g,a,I);$s=5;case 5:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=6;case 6:return i;    }return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Source=K;Sourcego/ast.SortImportsgo/format.Rgo/format.Sourcego/format.configgo/format.formatgo/format.parsego/token.NewFileSet go/format.hasUnsortedImportsL�vL=function(a){var $ptr,a,b,c,d,e,f,g;  �b=a.Decls;c=0;while(true){if(!(c<b.$length)){break;}d=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);  e=$assertType(d,X,true);f=e[0];g=e[1];    if(!g||!((f.Tok===75))){  �return false;    }    if(new F.Pos(f.Lparen).IsValid()){  5return true;    }    c++;}  wreturn false;    };hasUnsortedImportsgo/ast.GenDeclgo/format.Xgo/format.hasUnsortedImportsgo/token.Pos go/format.parseM��M=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=P.nil;f=$throwNilPointerError;g=0;h=$ifaceNil;  �j=D.ParseFile(a,b,c,4);$s=1;case 1:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;e=i[0];h=i[1];  �if($interfaceIsEqual(h,$ifaceNil)||!d){k=true;$s=4;continue s;}l=h.Error();$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}m=H.Contains(l,"expected 'package'");$s=6;case 6:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}k=!m;case 4:if(k){$s=2;continue;}$s=3;continue;    case 2:  >return[e,f,g,h];    case 3:  n=$appendSlice(new R($stringToBytes("package p;")),c);  5p=D.ParseFile(a,b,n,4);$s=7;case 7:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}o=p;e=o[0];h=o[1];  uif($interfaceIsEqual(h,$ifaceNil)){$s=8;continue;}$s=9;continue;    case 8:  �f=(function $b(q,r){var $ptr,q,r,s,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;q=$f.q;r=$f.r;s=$f.s;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  q=$subslice(q,(r+10>>0));  .s=A.TrimSpace(q);$s=1;case 1:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}$s=2;case 2:return s;    }return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.q=q;$f.r=r;$f.s=s;$f.$s=$s;$f.$r=$r;return $f;});  Preturn[e,f,g,h];    case 9:  �q=h.Error();$s=12;case 12:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}r=H.Contains(q,"expected declaration");$s=13;case 13:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}if(!r){$s=10;continue;}$s=11;continue;    case 10:  8return[e,f,g,h];    case 11:  �s=$append($appendSlice(new R($stringToBytes("package p; func _() {")),c),10,10,125);  �u=D.ParseFile(a,b,s,4);$s=14;case 14:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}t=u;e=t[0];h=t[1];    if($interfaceIsEqual(h,$ifaceNil)){  Ff=(function $b(v,w){var $ptr,v,w,x,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;v=$f.v;w=$f.w;x=$f.x;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(w<0){  �w=0;    }  Ov=$subslice(v,(($imul(2,w))+21>>0));  �v=$subslice(v,0,(v.$length-2>>0));  �x=A.TrimSpace(v);$s=1;case 1:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}$s=2;case 2:return x;    }return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.v=v;$f.w=w;$f.x=x;$f.$s=$s;$f.$r=$r;return $f;});  wg=-1;    }  �return[e,f,g,h];    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.$s=$s;$f.$r=$r;return $f;};parsebytes.TrimSpacego/format.Pgo/format.Rgo/format.parsego/parser.ParseFilestrings.Contains go/format.formatN�	�N=function(a,b,c,d,e,f){var $ptr,a,aa,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:g=[g];h=[h];  �f=$clone(f,E.Config);  �if(c===$throwNilPointerError){$s=1;continue;}$s=2;continue;    case 1:  6g[0]=new A.Buffer.ptr(R.nil,0,S.zero(),T.zero(),0);  Ii=f.Fprint(g[0],a,b);$s=3;case 3:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;    if(!($interfaceIsEqual(j,$ifaceNil))){  �return[R.nil,j];    }  �return[g[0].Bytes(),$ifaceNil];    case 2:  �k=0;l=0;m=k;n=l;  while(true){if(!(n<e.$length&&O(((n<0||n>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+n])))){break;}    if(((n<0||n>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+n])===10){  Dm=n+1>>0;    }  �n=n+(1)>>0;    }  �o=R.nil;  �o=$appendSlice(o,$subslice(e,0,m));  Op=0;  \q=false;  or=$subslice(e,m,n);s=0;while(true){if(!(s<r.$length)){break;}t=((s<0||s>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+s]);    u=t;    if(u===(32)){  �q=true;    }else if(u===(9)){  �p=p+(1)>>0;    }    s++;}    if((p===0)&&q){  �p=1;    }  v=0;while(true){if(!(v<p)){break;}  'o=$append(o,9);  v=v+(1)>>0;    }  �f.Indent=p+d>>0;  �h[0]=new A.Buffer.ptr(R.nil,0,S.zero(),T.zero(),0);  �w=f.Fprint(h[0],a,b);$s=4;case 4:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}x=w;    if(!($interfaceIsEqual(x,$ifaceNil))){  �return[R.nil,x];    }  y=c(h[0].Bytes(),f.Indent);$s=5;case 5:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}z=y;    if(z.$length===0){  �return[e,$ifaceNil];    }   o=$appendSlice(o,z);   am=e.$length;   owhile(true){if(!(m>0&&O((aa=m-1>>0,((aa<0||aa>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+aa]))))){break;}   �m=m-(1)>>0;    }   �return[$appendSlice(o,$subslice(e,m)),$ifaceNil];    }return;}if($f===undefined){$f={$blk:N};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};formatbytes.Buffergo/format.Rgo/format.Sgo/format.Tgo/format.formatgo/format.isSpacego/printer.Config go/format.isSpaceOQO=function(a){var $ptr,a;  !qreturn(a===32)||(a===9)||(a===10)||(a===13);    };isSpacego/format.isSpace ��{"Base":8619,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/go/format/format.go","Base":1,"Size":3461,"Lines":[0,55,109,159,160,223,238,239,248,257,264,274,287,301,313,319,321,322,408,409,449,450,526,529,601,674,744,816,885,888,959,1031,1034,1106,1169,1189,1223,1250,1267,1278,1308,1347,1359,1372,1376,1379,1380,1411,1457,1525,1566,1589,1630,1648,1662,1666,1732,1750,1817,1878,1882,1912,1913,1952,1966,1986,2057,2061,2064,2065,2104,2106,2107,2177,2247,2318,2321,2395,2471,2548,2629,2632,2674,2702,2765,2782,2800,2803,2804,2827,2854,2897,2927,2930,2931,2993,2995,2996,3043,3075,3103,3139,3187,3219,3235,3239,3265,3320,3377,3392,3396,3442,3445,3459],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/go/format/internal.go","Base":3463,"Size":5155,"Lines":[0,55,109,159,160,227,298,369,418,419,434,435,444,453,463,476,490,502,513,515,516,573,629,709,726,774,790,802,806,836,899,989,1051,1117,1205,1214,1217,1218,1275,1310,1372,1407,1453,1517,1534,1586,1619,1659,1700,1731,1735,1744,1747,1808,1866,1906,1967,1976,1979,1980,2035,2090,2146,2208,2276,2330,2412,2476,2493,2545,2580,2599,2614,2619,2646,2688,2757,2812,2893,2928,2959,2963,3021,3054,3071,3074,3075,3109,3117,3119,3120,3190,3259,3277,3290,3312,3329,3377,3393,3406,3427,3447,3470,3497,3520,3558,3576,3595,3599,3625,3628,3629,3654,3695,3709,3748,3770,3828,3832,3838,3841,3857,3888,3889,3947,3996,4039,4052,4071,4101,4114,4126,4145,4158,4170,4174,4177,4207,4220,4223,4254,4280,4283,4284,4307,4360,4393,4415,4452,4469,4487,4490,4533,4534,4582,4628,4667,4687,4705,4708,4709,4756,4783,4784,4825,4839,4873,4879,4882,4919,4921,4922,4980,5069,5097,5153],"Infos":null}]}
 