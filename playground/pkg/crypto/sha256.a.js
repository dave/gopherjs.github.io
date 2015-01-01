g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   �2F��crypto/sha256��package sha256
import crypto "crypto"
import hash "hash"
const @"".BlockSize = 0x40
func @"".New() (? @"hash".Hash)
func @"".New224() (? @"hash".Hash)
const @"".Size = 0x20
const @"".Size224 = 0x1c
func @"".Sum224(@"".data []byte) (@"".sum224 [28]byte)
func @"".Sum256(@"".data []byte) (? [32]byte)
type @"".digest struct { @"".h [8]uint32; @"".x [64]byte; @"".nx int; @"".len uint64; @"".is224 bool }
func (? *@"".digest) @"".BlockSize() (? int)
func (? *@"".digest) @"".Reset() ()
func (? *@"".digest) @"".Size() (? int)
func (? *@"".digest) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".digest) @"".Write(@"".p []byte) (@"".nn int, @"".err error)
func (? *@"".digest) @"".checkSum() (? [32]byte)
import io "io"
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
cryptoA hashB E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} D�iD=$pkg.digest=$newType(0,$kindStruct,"sha256.digest","digest","crypto/sha256",function(h_,x_,nx_,len_,is224_){this.$val=this;this.h=h_!==undefined?h_:($arrayType($Uint32,8)).zero();this.x=x_!==undefined?x_:($arrayType($Uint8,64)).zero();this.nx=nx_!==undefined?nx_:0;this.len=len_!==undefined?len_:new $Uint64(0,0);this.is224=is224_!==undefined?is224_:false;});��($ptrType(D)).methods=[["BlockSize","BlockSize","",$funcType([],[$Int],false),-1],["Reset","Reset","",$funcType([],[],false),-1],["Size","Size","",$funcType([],[$Int],false),-1],["Sum","Sum","",$funcType([($sliceType($Uint8))],[($sliceType($Uint8))],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["checkSum","checkSum","crypto/sha256",$funcType([],[($arrayType($Uint8,32))],false),-1]];D.init([["h","h","crypto/sha256",($arrayType($Uint32,8)),""],["x","x","crypto/sha256",($arrayType($Uint8,64)),""],["nx","nx","crypto/sha256",$Int,""],["len","len","crypto/sha256",$Uint64,""],["is224","is224","crypto/sha256",$Bool,""]]);digest I_K ��    I=new($sliceType($Uint32))([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);_Kcrypto/sha256:_K crypto/sha256.initCFC=function(){  >A.RegisterHash(4,F);  jA.RegisterHash(5,E);    };	    C();crypto/sha256:Newcrypto/sha256:New224crypto:RegisterHash (*crypto/sha256.digest).Reset�/D.Ptr.prototype.Reset=function(){var a;  �a=this;  �    if(!a.is224){  �a.h[0]=1779033703;  �a.h[1]=3144134277;  �a.h[2]=1013904242;  a.h[3]=2773480762;  a.h[4]=1359893119;  0a.h[5]=2600822924;  Aa.h[6]=528734635;  Ra.h[7]=1541459225;    }else{  ma.h[0]=3238371032;  �a.h[1]=914150663;  �a.h[2]=812702999;  �a.h[3]=4144912697;  �a.h[4]=4290775857;  �a.h[5]=1750603025;  �a.h[6]=1694076839;   a.h[7]=3204075428;    }  a.nx=0;  !a.len=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};digestcrypto/sha256:digest crypto/sha256.NewESE=$pkg.New=function(){var a;  �a=new D.Ptr();  �a.Reset();  �return a;    };Newcrypto/sha256:digest crypto/sha256.New224FhF=$pkg.New224=function(){var a;  	a=new D.Ptr();  a.is224=true;  +a.Reset();  6return a;    };New224crypto/sha256:digest (*crypto/sha256.digest).Size��D.Ptr.prototype.Size=function(){var a;  Ha=this;  a    if(!a.is224){  qreturn 32;    }  �return 28;    };D.prototype.Size=function(){return this.$val.Size();};digestcrypto/sha256:digest !(*crypto/sha256.digest).BlockSize��D.Ptr.prototype.BlockSize=function(){var a;  �a=this;  �return 64;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};digestcrypto/sha256:digest (*crypto/sha256.digest).Write��D.Ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h;  �d=this;  b=a.$length;  d.len=(e=d.len,f=new $Uint64(0,b),new $Uint64(e.$high+f.$high,e.$low+f.$low));  $    if(d.nx>0){  4g=$copySlice($subslice(new($sliceType($Uint8))(d.x),d.nx),a);  Od.nx=d.nx+(g)>>0;  [    if(d.nx===64){  qJ(d,new($sliceType($Uint8))(d.x));  �d.nx=0;    }  �a=$subslice(a,g);    }  �    if(a.$length>=64){  �h=a.$length&~63;  �J(d,$subslice(a,0,h));  �a=$subslice(a,h);    }  �    if(a.$length>0){  	d.nx=$copySlice(new($sliceType($Uint8))(d.x),a);    }  	#return[b,c];    };D.prototype.Write=function(a){return this.$val.Write(a);};digestcrypto/sha256:blockcrypto/sha256:digest (*crypto/sha256.digest).Sum��D.Ptr.prototype.Sum=function(a){var b,c,d;  	3b=this;  	�c=new D.Ptr();$copy(c,b,D);  	�d=($arrayType($Uint8,32)).zero();$copy(d,c.checkSum(),($arrayType($Uint8,32)));  	�    if(c.is224){  	�return $appendSlice(a,$subslice(new($sliceType($Uint8))(d),0,28));    }  	�return $appendSlice(a,new($sliceType($Uint8))(d));    };D.prototype.Sum=function(a){return this.$val.Sum(a);};digestcrypto/sha256:checkSumcrypto/sha256:digest  (*crypto/sha256.digest).checkSum�D.Ptr.prototype.checkSum=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  
a=this;  
>b=a.len;  
�  
�c=($arrayType($Uint8,64)).zero();$copy(c,($arrayType($Uint8,64)).zero(),($arrayType($Uint8,64)));  
�c[0]=128;  
�    if((d=$div64(b,new $Uint64(0,64),true),(d.$high<0||(d.$high===0&&d.$low<56)))){  
�a.Write($subslice(new($sliceType($Uint8))(c),0,$flatten64((e=$div64(b,new $Uint64(0,64),true),new $Uint64(0-e.$high,56-e.$low)))));    }else{  
�a.Write($subslice(new($sliceType($Uint8))(c),0,$flatten64((f=$div64(b,new $Uint64(0,64),true),new $Uint64(0-f.$high,120-f.$low)))));    }  b=$shiftLeft64(b,(3));  '  +g=0;while(g<8){  H(g<0||g>=c.length)?$throwRuntimeError("index out of range"):c[g]=($shiftRightUint64(b,((56-(8*g>>>0)>>>0))).$low<<24>>>24);      @  @g=g+(1)>>>0;}  ma.Write($subslice(new($sliceType($Uint8))(c),0,8));  �    if(!((a.nx===0))){  �$panic(new $String("d.nx != 0"));    }  �h=new($sliceType($Uint32))(a.h);  �    if(a.is224){  �h=$subslice(new($sliceType($Uint32))(a.h),0,7);    }  �  �i=($arrayType($Uint8,32)).zero();$copy(i,($arrayType($Uint8,32)).zero(),($arrayType($Uint8,32)));  �j=h;k=0;while(k<j.$length){l=k;m=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  (n=l*4>>0,(n<0||n>=i.length)?$throwRuntimeError("index out of range"):i[n]=((m>>>24>>>0)<<24>>>24));  $(o=(l*4>>0)+1>>0,(o<0||o>=i.length)?$throwRuntimeError("index out of range"):i[o]=((m>>>16>>>0)<<24>>>24));  D(p=(l*4>>0)+2>>0,(p<0||p>=i.length)?$throwRuntimeError("index out of range"):i[p]=((m>>>8>>>0)<<24>>>24));  c(q=(l*4>>0)+3>>0,(q<0||q>=i.length)?$throwRuntimeError("index out of range"):i[q]=(m<<24>>>24));    k++;}  �return i;    };D.prototype.checkSum=function(){return this.$val.checkSum();};digestcheckSumcrypto/sha256:digest crypto/sha256.Sum256G��G=$pkg.Sum256=function(a){var b;  �  �b=new D.Ptr();$copy(b,new D.Ptr(),D);  �b.Reset();  b.Write(a);  return b.checkSum();    };Sum256crypto/sha256:checkSumcrypto/sha256:digest crypto/sha256.Sum224H�cH=$pkg.Sum224=function(a){var b=($arrayType($Uint8,28)).zero(),c,d;  �  �c=new D.Ptr();$copy(c,new D.Ptr(),D);  �c.is224=true;  �c.Reset();  �c.Write(a);  �d=($arrayType($Uint8,32)).zero();$copy(d,c.checkSum(),($arrayType($Uint8,32)));  �$copySlice(new($sliceType($Uint8))(b),$subslice(new($sliceType($Uint8))(d),0,28));  �return b;    };Sum224crypto/sha256:checkSumcrypto/sha256:digest crypto/sha256.blockJ�J=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh;  �  �c=($arrayType($Uint32,64)).zero();$copy(c,($arrayType($Uint32,64)).zero(),($arrayType($Uint32,64)));  �d=a.h[0];e=a.h[1];f=a.h[2];g=a.h[3];h=a.h[4];i=a.h[5];j=a.h[6];k=a.h[7];l=d;m=e;n=f;o=g;p=h;q=i;r=j;s=k;  <while(b.$length>=64){  �  �t=0;while(t<16){  �u=t*4>>0;  �(t<0||t>=c.length)?$throwRuntimeError("index out of range"):c[t]=(((((((((u<0||u>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+u])>>>0)<<24>>>0)|(((v=u+1>>0,((v<0||v>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+v]))>>>0)<<16>>>0))>>>0)|(((w=u+2>>0,((w<0||w>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+w]))>>>0)<<8>>>0))>>>0)|((x=u+3>>0,((x<0||x>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+x]))>>>0))>>>0;      �  �t=t+(1)>>0;}  /  3y=16;while(y<64){  Maa=(z=y-2>>0,((z<0||z>=c.length)?$throwRuntimeError("index out of range"):c[z]));  ]ab=(((((((aa>>>17>>>0)|(aa<<15>>>0))>>>0))^((((aa>>>19>>>0)|(aa<<13>>>0))>>>0)))>>>0)^((aa>>>10>>>0)))>>>0;  �ad=(ac=y-15>>0,((ac<0||ac>=c.length)?$throwRuntimeError("index out of range"):c[ac]));  �ae=(((((((ad>>>7>>>0)|(ad<<25>>>0))>>>0))^((((ad>>>18>>>0)|(ad<<14>>>0))>>>0)))>>>0)^((ad>>>3>>>0)))>>>0;  �(y<0||y>=c.length)?$throwRuntimeError("index out of range"):c[y]=((ab+(af=y-7>>0,((af<0||af>=c.length)?$throwRuntimeError("index out of range"):c[af]))>>>0)+ae>>>0)+(ag=y-16>>0,((ag<0||ag>=c.length)?$throwRuntimeError("index out of range"):c[ag]))>>>0;      D  Dy=y+(1)>>0;}   ah=l;ai=m;aj=n;ak=o;al=p;am=q;an=r;ao=s;ap=ah;aq=ai;ar=aj;as=ak;at=al;au=am;av=an;aw=ao;  \  `ax=0;while(ax<64){  yay=(((aw+(((((((((at>>>6>>>0)|(at<<26>>>0))>>>0))^((((at>>>11>>>0)|(at<<21>>>0))>>>0)))>>>0)^((((at>>>25>>>0)|(at<<7>>>0))>>>0)))>>>0))>>>0)+((((((at&au)>>>0))^((((~at>>>0)&av)>>>0)))>>>0))>>>0)+((ax<0||ax>=I.$length)?$throwRuntimeError("index out of range"):I.$array[I.$offset+ax])>>>0)+((ax<0||ax>=c.length)?$throwRuntimeError("index out of range"):c[ax])>>>0;  �az=(((((((((ap>>>2>>>0)|(ap<<30>>>0))>>>0))^((((ap>>>13>>>0)|(ap<<19>>>0))>>>0)))>>>0)^((((ap>>>22>>>0)|(ap<<10>>>0))>>>0)))>>>0))+((((((((ap&aq)>>>0))^(((ap&ar)>>>0)))>>>0)^(((aq&ar)>>>0)))>>>0))>>>0;  ]aw=av;  fav=au;  oau=at;  xat=as+ay>>>0;  �as=ar;  �ar=aq;  �aq=ap;  �ap=ay+az>>>0;      p  pax=ax+(1)>>0;}  �l=l+(ap)>>>0;  �m=m+(aq)>>>0;  �n=n+(ar)>>>0;  �o=o+(as)>>>0;  �p=p+(at)>>>0;  �q=q+(au)>>>0;  �r=r+(av)>>>0;  �s=s+(aw)>>>0;  b=$subslice(b,64);    }  ba=l;bb=m;bc=n;bd=o;be=p;bf=q;bg=r;bh=s;a.h[0]=ba;a.h[1]=bb;a.h[2]=bc;a.h[3]=bd;a.h[4]=be;a.h[5]=bf;a.h[6]=bg;a.h[7]=bh;    };blockcrypto/sha256:_K ��{"Base":6027,"Files":[{"Name":"/usr/local/go/src/crypto/sha256/sha256.go","Base":1,"Size":3589,"Lines":[0,55,109,159,160,238,256,271,272,281,291,299,301,302,316,360,401,403,404,447,463,464,507,526,527,575,596,597,605,621,645,669,693,717,741,765,789,813,837,861,885,909,933,957,981,1005,1007,1008,1067,1088,1105,1124,1135,1149,1195,1197,1198,1225,1240,1257,1274,1291,1308,1325,1342,1359,1376,1386,1407,1428,1449,1470,1491,1512,1533,1554,1557,1567,1578,1580,1581,1643,1666,1684,1695,1705,1707,1708,1773,1799,1817,1833,1844,1854,1856,1857,1887,1902,1916,1919,1935,1937,1938,1992,1993,2048,2061,2082,2097,2124,2136,2157,2177,2189,2193,2205,2208,2230,2259,2277,2289,2292,2309,2334,2337,2345,2347,2348,2390,2457,2467,2489,2503,2542,2545,2576,2578,2579,2620,2634,2694,2712,2727,2745,2775,2785,2818,2821,2822,2842,2853,2885,2920,2923,2942,2943,2959,2980,2983,2984,2997,3011,3025,3028,3029,3052,3075,3105,3137,3168,3194,3197,3198,3213,3215,3216,3267,3305,3319,3330,3345,3366,3368,3369,3420,3470,3484,3500,3511,3526,3547,3579,3587],"Infos":null},{"Name":"/usr/local/go/src/crypto/sha256/sha256block.go","Base":3591,"Size":2435,"Lines":[0,55,109,159,160,182,183,205,263,293,294,309,310,329,342,355,368,381,394,407,420,433,446,459,472,485,498,511,524,537,550,563,576,589,602,615,628,641,654,667,680,693,706,719,732,745,758,771,784,797,810,823,836,849,862,875,888,901,914,927,940,953,966,979,992,1005,1018,1031,1044,1057,1070,1083,1096,1109,1122,1135,1148,1161,1163,1164,1200,1218,1332,1355,1404,1443,1471,1485,1570,1574,1603,1619,1689,1706,1773,1810,1814,1815,1874,1875,1903,2021,2022,2130,2131,2140,2149,2158,2172,2181,2190,2199,2214,2218,2219,2229,2239,2249,2259,2269,2279,2289,2299,2300,2316,2319,2320,2433],"Infos":null}]}
 