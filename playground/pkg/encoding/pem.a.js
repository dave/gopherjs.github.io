����Archive�� 	
ImportPath GcData
 Dependencies�� Imports�� Declarations�� Tests�� FileSet
 BlockingInit Minified   ��[]string��   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �){��encoding/pem��package pem
import bytes "bytes"
import base64 "encoding/base64"
import io "io"
import sort "sort"
type @"".Block struct { @"".Type string; @"".Headers map[string]string; @"".Bytes []byte }
func @"".Decode(@"".data []byte) (@"".p *@"".Block, @"".rest []byte)
func @"".Encode(@"".out @"io".Writer, @"".b *@"".Block) (? error)
func @"".EncodeToMemory(@"".b *@"".Block) (? []byte)
type @"".lineBreaker struct { @"".line [64]byte; @"".used int; @"".out @"io".Writer }
func (? *@"".lineBreaker) @"".Close() (@"".err error)
func (? *@"".lineBreaker) @"".Write(@"".b []byte) (@"".n int, @"".err error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathstrconvstringssyscall#github.com/gopherjs/gopherjs/nosynctimeosreflectfmtsortflagruntime/pproftestingencoding/base64bytesA encoding/base64B ioC sortD E�E=$pkg.Block=$newType(0,$kindStruct,"pem.Block","Block","encoding/pem",function(Type_,Headers_,Bytes_){this.$val=this;this.Type=Type_!==undefined?Type_:"";this.Headers=Headers_!==undefined?Headers_:false;this.Bytes=Bytes_!==undefined?Bytes_:($sliceType($Uint8)).nil;});��E.init([["Type","Type","",$String,""],["Headers","Headers","",($mapType($String,$String)),""],["Bytes","Bytes","",($sliceType($Uint8)),""]]);Block M�M=$pkg.lineBreaker=$newType(0,$kindStruct,"pem.lineBreaker","lineBreaker","encoding/pem",function(line_,used_,out_){this.$val=this;this.line=line_!==undefined?line_:($arrayType($Uint8,64)).zero();this.used=used_!==undefined?used_:0;this.out=out_!==undefined?out_:$ifaceNil;});�/($ptrType(M)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];M.init([["line","line","encoding/pem",($arrayType($Uint8,64)),""],["used","used","encoding/pem",$Int,""],["out","out","encoding/pem",C.Writer,""]]);lineBreaker	io:Writer HpemStart IpemEnd JpemEndOfLine @    H=new($sliceType($Uint8))($stringToBytes("\n-----BEGIN "));pemStartencoding/pem:pemStart >    I=new($sliceType($Uint8))($stringToBytes("\n-----END "));pemEndencoding/pem:pemEnd 8    J=new($sliceType($Uint8))($stringToBytes("-----"));pemEndOfLineencoding/pem:pemEndOfLine encoding/pem.getLineF��F=function(a){var b=($sliceType($Uint8)).nil,c=($sliceType($Uint8)).nil,d,e,f,g,h;  d=A.Index(a,new($sliceType($Uint8))([10]));  -  1e=0;  8    if(d<0){  Ed=a.$length;  Ue=d;    }else{  ge=d+1>>0;  s    if(d>0&&((f=d-1>>0,((f<0||f>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+f]))===13)){  �  �d=d-(1)>>0;    }    }  �    g=A.TrimRight($subslice(a,0,d)," \t");h=$subslice(a,e);b=g;c=h;return[b,c];    };getLinebytes:Indexbytes:TrimRight encoding/pem.removeWhitespaceG��G=function(a){var b,c,d,e,f;  mb=($sliceType($Uint8)).make(a.$length);  �c=0;  �d=a;e=0;while(e<d.$length){f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  �    if((f===32)||(f===9)||(f===13)||(f===10)){  �e++;continue;    }  �(c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]=f;    c=c+(1)>>0;    e++;}  return $subslice(b,0,c);    };removeWhitespace encoding/pem.DecodeK�K=$pkg.Decode=function(a){var b=($ptrType(E)).nil,c=($sliceType($Uint8)).nil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab;  	?c=a;  	L    if(A.HasPrefix(a,$subslice(H,1))){  	wc=$subslice(c,(H.$length-1>>0),a.$length);    }else{  	�  	�d=A.Index(a,H);    if(d>=0){  	�c=$subslice(c,(d+H.$length>>0),a.$length);    }else{  
    e=($ptrType(E)).nil;f=a;b=e;c=f;return[b,c];    }    }  
#g=F(c);h=g[0];c=g[1];  
D    if(!A.HasSuffix(h,J)){  
t    i=L(a,c);b=i[0];c=i[1];return[b,c];    }  
�h=$subslice(h,0,(h.$length-J.$length>>0));  
�b=new E.Ptr($bytesToString(h),new $Map(),($sliceType($Uint8)).nil);  $while(true){  �    if(c.$length===0){  �    j=($ptrType(E)).nil;k=a;b=j;c=k;return[b,c];    }  �l=F(c);m=l[0];n=l[1];  �o=A.Index(m,new($sliceType($Uint8))([58]));      if(o===-1){  break;    }  cp=$subslice(m,0,o);q=$subslice(m,(o+1>>0));r=p;s=q;  �r=A.TrimSpace(r);  �s=A.TrimSpace(s);  �t=$bytesToString(r);(b.Headers||$throwRuntimeError("assignment to entry in nil map"))[t]={k:t,v:$bytesToString(s)};  �c=n;    }  �u=A.Index(c,I);      if(u<0){  &    v=L(a,c);b=v[0];c=v[1];return[b,c];    }  Iw=G($subslice(c,0,u));  ub.Bytes=($sliceType($Uint8)).make(B.StdEncoding.DecodedLen(w.$length));  �x=B.StdEncoding.Decode(b.Bytes,w);y=x[0];z=x[1];  �    if(!($interfaceIsEqual(z,$ifaceNil))){  	    aa=L(a,c);b=aa[0];c=aa[1];return[b,c];    }  ,b.Bytes=$subslice(b.Bytes,0,y);  Eab=F($subslice(c,(u+I.$length>>0)));c=ab[1];  oreturn[b,c];    };Decodebytes:HasPrefixbytes:HasSuffixbytes:Indexbytes:TrimSpaceencoding/base64:StdEncodingencoding/pem:Blockencoding/pem:decodeErrorencoding/pem:getLineencoding/pem:pemEndencoding/pem:pemEndOfLineencoding/pem:pemStartencoding/pem:removeWhitespace encoding/pem.decodeErrorL}L=function(a,b){var c,d;  �c=K(b);d=c[0];b=c[1];      if(d===($ptrType(E)).nil){  "b=a;    }  2return[d,b];    };decodeErrorencoding/pem:Blockencoding/pem:Decode !(*encoding/pem.lineBreaker).Write�[M.Ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i,j,k;  �d=this;  �    if((d.used+a.$length>>0)<64){  $copySlice($subslice(new($sliceType($Uint8))(d.line),d.used),a);  +d.used=d.used+(a.$length)>>0;  >    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    }  Vg=d.out.Write($subslice(new($sliceType($Uint8))(d.line),0,d.used));b=g[0];c=g[1];  ~    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �h=64-d.used>>0;  �d.used=0;  �i=d.out.Write($subslice(a,0,h));b=i[0];c=i[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  j=d.out.Write(new($sliceType($Uint8))([10]));b=j[0];c=j[1];  /    if(!($interfaceIsEqual(c,$ifaceNil))){  Areturn[b,c];    }  M    k=d.Write($subslice(a,h));b=k[0];c=k[1];return[b,c];    };M.prototype.Write=function(a){return this.$val.Write(a);};lineBreakerencoding/pem:lineBreaker !(*encoding/pem.lineBreaker).Close�yM.Ptr.prototype.Close=function(){var a=$ifaceNil,b,c,d;  qb=this;  �    if(b.used>0){  �c=b.out.Write($subslice(new($sliceType($Uint8))(b.line),0,b.used));a=c[1];  �    if(!($interfaceIsEqual(a,$ifaceNil))){  �return a;    }  �d=b.out.Write(new($sliceType($Uint8))([10]));a=d[1];    }  return a;    };M.prototype.Close=function(){return this.$val.Close();};lineBreakerencoding/pem:lineBreaker encoding/pem.writeHeaderN}N=function(a,b,c){var d,e;  [d=a.Write(new($sliceType($Uint8))($stringToBytes(b+": "+c+"\n")));e=d[1];  �return e;    };writeHeader encoding/pem.EncodeO��O=$pkg.Encode=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad;  �  �c=a.Write($subslice(H,1));d=c[1];    if(!($interfaceIsEqual(d,$ifaceNil))){  �return d;    }    e=a.Write(new($sliceType($Uint8))($stringToBytes(b.Type+"-----\n")));f=e[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  Preturn f;    }  `    if($keys(b.Headers).length>0){  z  �g=($sliceType($String)).make(0,$keys(b.Headers).length);  �h=false;  �i=b.Headers;j=0;k=$keys(i);while(j<k.length){l=i[k[j]];        if(l===undefined){    j++;continue;    }m=l.k;  �    if(m==="Proc-Type"){  h=true;  %j++;continue;    }  6g=$append(g,m);    j++;}  �    if(h){  �  �o=N(a,"Proc-Type",(n=b.Headers["Proc-Type"],n!==undefined?n.v:""));    if(!($interfaceIsEqual(o,$ifaceNil))){  return o;    }    }  ZD.Strings(g);  lp=g;q=0;while(q<p.$length){r=((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]);  �  �t=N(a,r,(s=b.Headers[r],s!==undefined?s.v:""));    if(!($interfaceIsEqual(t,$ifaceNil))){  �return t;    }    q++;}  �  �u=a.Write(new($sliceType($Uint8))([10]));v=u[1];    if(!($interfaceIsEqual(v,$ifaceNil))){  return v;    }    }  #  'w=new M.Ptr();$copy(w,new M.Ptr(),M);  <w.out=a;  Px=B.NewEncoder(B.StdEncoding,w);  �  �y=x.Write(b.Bytes);z=y[1];    if(!($interfaceIsEqual(z,$ifaceNil))){  �return z;    }  �x.Close();  �w.Close();  �  �aa=a.Write($subslice(I,1));ab=aa[1];    if(!($interfaceIsEqual(ab,$ifaceNil))){  return ab;    }  (ac=a.Write(new($sliceType($Uint8))($stringToBytes(b.Type+"-----\n")));ad=ac[1];  Yreturn ad;    };Encodeencoding/base64:NewEncoderencoding/base64:StdEncodingencoding/pem:lineBreakerencoding/pem:pemEndencoding/pem:pemStartencoding/pem:writeHeadersort:Strings encoding/pem.EncodeToMemoryP��P=$pkg.EncodeToMemory=function(a){var b;  �  �b=new A.Buffer.Ptr();$copy(b,new A.Buffer.Ptr(),A.Buffer);  �O(b,a);  �return b.Bytes();    };EncodeToMemorybytes:Bufferencoding/pem:Encode ��{"Base":6860,"Files":[{"Name":"/usr/local/go/src/encoding/pem/pem.go","Base":1,"Size":6858,"Lines":[0,55,109,159,160,237,316,347,359,360,369,378,397,403,411,413,414,461,464,488,515,529,556,581,648,668,758,806,912,914,915,991,1067,1147,1224,1237,1285,1323,1334,1346,1362,1370,1380,1392,1426,1433,1437,1440,1492,1494,1495,1568,1599,1643,1678,1686,1687,1713,1768,1780,1784,1800,1806,1809,1810,1830,1832,1833,1872,1907,1942,1943,2018,2097,2173,2182,2233,2303,2365,2378,2420,2463,2517,2560,2570,2589,2592,2593,2626,2673,2706,2709,2767,2768,2781,2817,2846,2849,2850,2857,2918,2957,2979,2999,3003,3033,3034,3072,3087,3096,3100,3101,3168,3204,3233,3262,3301,3315,3318,3319,3351,3363,3396,3399,3442,3443,3515,3573,3590,3623,3626,3650,3651,3692,3693,3701,3703,3704,3759,3822,3889,3962,4031,4102,4175,4234,4238,4271,4275,4314,4358,4395,4399,4435,4451,4485,4489,4542,4599,4624,4639,4653,4656,4672,4674,4675,4700,4701,4727,4753,4763,4779,4781,4782,4841,4877,4904,4923,4944,4947,4948,4988,5005,5014,5017,5051,5063,5064,5099,5116,5125,5128,5129,5165,5182,5191,5194,5195,5223,5225,5226,5270,5287,5328,5346,5356,5360,5397,5400,5401,5409,5411,5412,5465,5515,5527,5529,5530,5575,5627,5640,5643,5709,5722,5725,5726,5751,5782,5823,5846,5875,5897,5920,5933,5938,5958,5962,6011,6046,6065,6140,6155,6160,6164,6231,6249,6273,6334,6349,6354,6358,6411,6425,6429,6432,6433,6458,6477,6478,6534,6581,6594,6597,6610,6627,6628,6678,6691,6694,6743,6755,6757,6758,6797,6819,6836,6856],"Infos":null}]}
 