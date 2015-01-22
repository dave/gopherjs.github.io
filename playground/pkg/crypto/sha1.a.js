p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �3Z��crypto/sha1sha1cryptohash�package sha1
import crypto "crypto"
import hash "hash"
const @"".BlockSize = 0x40
func @"".New() (? @"hash".Hash)
const @"".Size = 0x14
func @"".Sum(@"".data []byte) (? [20]byte)
type @"".digest struct { @"".h [5]uint32; @"".x [64]byte; @"".nx int; @"".len uint64 }
func (? *@"".digest) @"".BlockSize() (? int)
func (? *@"".digest) @"".Reset() ()
func (? *@"".digest) @"".Size() (? int)
func (? *@"".digest) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".digest) @"".Write(@"".p []byte) (@"".nn int, @"".err error)
func (? *@"".digest) @"".checkSum() (? [20]byte)
import io "io"
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["crypto"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["hash"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} D�D=$pkg.digest=$newType(0,$kindStruct,"sha1.digest","digest","crypto/sha1",function(h_,x_,nx_,len_){this.$val=this;this.h=h_!==undefined?h_:M.zero();this.x=x_!==undefined?x_:K.zero();this.nx=nx_!==undefined?nx_:0;this.len=len_!==undefined?len_:new $Uint64(0,0);});��N.methods=[{prop:"BlockSize",name:"BlockSize",pkg:"",type:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",type:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",type:$funcType([I],[I],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([I],[$Int,$error],false)},{prop:"checkSum",name:"checkSum",pkg:"crypto/sha1",type:$funcType([],[J],false)}];��D.init([{prop:"h",name:"h",pkg:"crypto/sha1",type:M,tag:""},{prop:"x",name:"x",pkg:"crypto/sha1",type:K,tag:""},{prop:"nx",name:"nx",pkg:"crypto/sha1",type:$Int,tag:""},{prop:"len",name:"len",pkg:"crypto/sha1",type:$Uint64,tag:""}]);crypto/sha1.digestcrypto/sha1.digestcrypto/sha1:*crypto/sha1.digestcrypto/sha1:[20]bytecrypto/sha1:[5]uint32crypto/sha1:[64]bytecrypto/sha1:[]byte II=$sliceType($Uint8);crypto/sha1:[]byte JJ=$arrayType($Uint8,20);crypto/sha1:[20]byte KK=$arrayType($Uint8,64);crypto/sha1:[64]byte LL=$arrayType($Uint32,16);crypto/sha1:[16]uint32 MM=$arrayType($Uint32,5);crypto/sha1:[5]uint32 NN=$ptrType(D);crypto/sha1:*crypto/sha1.digestcrypto/sha1.digest Hcrypto/sha1.block 	    H=G;crypto/sha1.blockcrypto/sha1.blockcrypto/sha1.blockGeneric crypto/sha1.initC-C=function(){  'A.RegisterHash(3,E);    };	    C();crypto.RegisterHashcrypto/sha1.Newcrypto/sha1.init (*crypto/sha1.digest).Reset�D.ptr.prototype.Reset=function(){var a;  �a=this;  �a.h[0]=1732584193;  �a.h[1]=4023233417;  a.h[2]=2562383102;  a.h[3]=271733878;  "a.h[4]=3285377520;  2a.nx=0;  <a.len=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};crypto/sha1.digestcrypto/sha1.digest crypto/sha1.NewESE=$pkg.New=function(){var a;  �a=new D.ptr();  �a.Reset();  �return a;    };crypto/sha1.Newcrypto/sha1.Newcrypto/sha1.digest (*crypto/sha1.digest).Size~D.ptr.prototype.Size=function(){var a;  �a=this;  �return 20;    };D.prototype.Size=function(){return this.$val.Size();};crypto/sha1.digestcrypto/sha1.digest (*crypto/sha1.digest).BlockSize��D.ptr.prototype.BlockSize=function(){var a;  �a=this;  return 64;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};crypto/sha1.digestcrypto/sha1.digest (*crypto/sha1.digest).Write�cD.ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h;  0d=this;  bb=a.$length;  od.len=(e=d.len,f=new $Uint64(0,b),new $Uint64(e.$high+f.$high,e.$low+f.$low));  �    if(d.nx>0){  �g=$copySlice($subslice(new I(d.x),d.nx),a);  �d.nx=d.nx+(g)>>0;  �    if(d.nx===64){  �H(d,new I(d.x));  �d.nx=0;    }  �a=$subslice(a,g);    }      if(a.$length>=64){  h=a.$length&~63;  6H(d,$subslice(a,0,h));  Ha=$subslice(a,h);    }  V    if(a.$length>0){  hd.nx=$copySlice(new I(d.x),a);    }  �return[b,c];    };D.prototype.Write=function(a){return this.$val.Write(a);};crypto/sha1.digestcrypto/sha1.blockcrypto/sha1.digestcrypto/sha1:[]byte (*crypto/sha1.digest).Sum��D.ptr.prototype.Sum=function(a){var b,c,d;  �b=this;  �c=$clone(b,D);  d=$clone(c.checkSum(),J);  return $appendSlice(a,new I(d));    };D.prototype.Sum=function(a){return this.$val.Sum(a);};crypto/sha1.digestcrypto/sha1.checkSum~crypto/sha1.digestcrypto/sha1:[20]bytecrypto/sha1:[]byte (*crypto/sha1.digest).checkSum��D.ptr.prototype.checkSum=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;  Ba=this;  fb=a.len;  �  �c=$clone(K.zero(),K);  �c[0]=128;  �    if((d=$div64(b,new $Uint64(0,64),true),(d.$high<0||(d.$high===0&&d.$low<56)))){  �a.Write($subslice(new I(c),0,$flatten64((e=$div64(b,new $Uint64(0,64),true),new $Uint64(0-e.$high,56-e.$low)))));    }else{  a.Write($subslice(new I(c),0,$flatten64((f=$div64(b,new $Uint64(0,64),true),new $Uint64(0-f.$high,120-f.$low)))));    }  Db=$shiftLeft64(b,(3));  O  Sg=0;while(g<8){  p(g<0||g>=c.length)?$throwRuntimeError("index out of range"):c[g]=($shiftRightUint64(b,((56-(8*g>>>0)>>>0))).$low<<24>>>24);      h  hg=g+(1)>>>0;}  �a.Write($subslice(new I(c),0,8));  �    if(!((a.nx===0))){  �$panic(new $String("d.nx != 0"));    }  �  �h=$clone(J.zero(),J);  �i=a.h;j=0;while(j<5){k=j;l=((j<0||j>=i.length)?$throwRuntimeError("index out of range"):i[j]);  (m=k*4>>0,(m<0||m>=h.length)?$throwRuntimeError("index out of range"):h[m]=((l>>>24>>>0)<<24>>>24));  !(n=(k*4>>0)+1>>0,(n<0||n>=h.length)?$throwRuntimeError("index out of range"):h[n]=((l>>>16>>>0)<<24>>>24));  A(o=(k*4>>0)+2>>0,(o<0||o>=h.length)?$throwRuntimeError("index out of range"):h[o]=((l>>>8>>>0)<<24>>>24));  `(p=(k*4>>0)+3>>0,(p<0||p>=h.length)?$throwRuntimeError("index out of range"):h[p]=(l<<24>>>24));    j++;}  }return h;    };D.prototype.checkSum=function(){return this.$val.checkSum();};crypto/sha1.digestcrypto/sha1.checkSum~crypto/sha1.digestcrypto/sha1:[20]bytecrypto/sha1:[64]bytecrypto/sha1:[]byte crypto/sha1.SumF~F=$pkg.Sum=function(a){var b;  �  �b=$clone(new D.ptr(),D);  �b.Reset();  �b.Write(a);  	return b.checkSum();    };crypto/sha1.Sumcrypto/sha1.Sumcrypto/sha1.checkSum~crypto/sha1.digest crypto/sha1.blockGenericG��G=function(a,b){var aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  
�  
�c=$clone(L.zero(),L);  
�d=a.h[0];e=a.h[1];f=a.h[2];g=a.h[3];h=a.h[4];i=d;j=e;k=f;l=g;m=h;  while(b.$length>=64){  �  �n=0;while(n<16){  �o=n*4>>0;  �(n<0||n>=c.length)?$throwRuntimeError("index out of range"):c[n]=(((((((((o<0||o>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+o])>>>0)<<24>>>0)|(((p=o+1>>0,((p<0||p>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+p]))>>>0)<<16>>>0))>>>0)|(((q=o+2>>0,((q<0||q>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+q]))>>>0)<<8>>>0))>>>0)|((r=o+3>>0,((r<0||r>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+r]))>>>0))>>>0;      �  �n=n+(1)>>0;}  s=i;t=j;u=k;v=l;w=m;x=s;y=t;z=u;aa=v;ab=w;  �ac=0;  �while(ac<16){  �ad=(((y&z)>>>0)|((((~y>>>0))&aa)>>>0))>>>0;  �ae=((x<<5>>>0)|(x>>>27>>>0))>>>0;  af=((y<<30>>>0)|(y>>>2>>>0))>>>0;  #ah=(((ae+ad>>>0)+ab>>>0)+(ag=ac&15,((ag<0||ag>=c.length)?$throwRuntimeError("index out of range"):c[ag]))>>>0)+1518500249>>>0;  Gai=ah;aj=x;ak=af;al=z;am=aa;x=ai;y=aj;z=ak;aa=al;ab=am;      �  �ac=ac+(1)>>0;}  mwhile(ac<20){  �ar=((((((an=((ac-3>>0))&15,((an<0||an>=c.length)?$throwRuntimeError("index out of range"):c[an]))^(ao=((ac-8>>0))&15,((ao<0||ao>=c.length)?$throwRuntimeError("index out of range"):c[ao])))>>>0)^(ap=((ac-14>>0))&15,((ap<0||ap>=c.length)?$throwRuntimeError("index out of range"):c[ap])))>>>0)^(aq=(ac)&15,((aq<0||aq>=c.length)?$throwRuntimeError("index out of range"):c[aq])))>>>0;  �(as=ac&15,(as<0||as>=c.length)?$throwRuntimeError("index out of range"):c[as]=((ar<<1>>>0)|(ar>>>31>>>0))>>>0);  �at=(((y&z)>>>0)|((((~y>>>0))&aa)>>>0))>>>0;   au=((x<<5>>>0)|(x>>>27>>>0))>>>0;  av=((y<<30>>>0)|(y>>>2>>>0))>>>0;  7ax=(((au+at>>>0)+ab>>>0)+(aw=ac&15,((aw<0||aw>=c.length)?$throwRuntimeError("index out of range"):c[aw]))>>>0)+1518500249>>>0;  [ay=ax;az=x;ba=av;bb=z;bc=aa;x=ay;y=az;z=ba;aa=bb;ab=bc;      {  {ac=ac+(1)>>0;}  �while(ac<40){  �bh=((((((bd=((ac-3>>0))&15,((bd<0||bd>=c.length)?$throwRuntimeError("index out of range"):c[bd]))^(be=((ac-8>>0))&15,((be<0||be>=c.length)?$throwRuntimeError("index out of range"):c[be])))>>>0)^(bf=((ac-14>>0))&15,((bf<0||bf>=c.length)?$throwRuntimeError("index out of range"):c[bf])))>>>0)^(bg=(ac)&15,((bg<0||bg>=c.length)?$throwRuntimeError("index out of range"):c[bg])))>>>0;  �(bi=ac&15,(bi<0||bi>=c.length)?$throwRuntimeError("index out of range"):c[bi]=((bh<<1>>>0)|(bh>>>31>>>0))>>>0);  �bj=(((y^z)>>>0)^aa)>>>0;  bk=((x<<5>>>0)|(x>>>27>>>0))>>>0;  *bl=((y<<30>>>0)|(y>>>2>>>0))>>>0;  Gbn=(((bk+bj>>>0)+ab>>>0)+(bm=ac&15,((bm<0||bm>=c.length)?$throwRuntimeError("index out of range"):c[bm]))>>>0)+1859775393>>>0;  kbo=bn;bp=x;bq=bl;br=z;bs=aa;x=bo;y=bp;z=bq;aa=br;ab=bs;      �  �ac=ac+(1)>>0;}  �while(ac<60){  �bx=((((((bt=((ac-3>>0))&15,((bt<0||bt>=c.length)?$throwRuntimeError("index out of range"):c[bt]))^(bu=((ac-8>>0))&15,((bu<0||bu>=c.length)?$throwRuntimeError("index out of range"):c[bu])))>>>0)^(bv=((ac-14>>0))&15,((bv<0||bv>=c.length)?$throwRuntimeError("index out of range"):c[bv])))>>>0)^(bw=(ac)&15,((bw<0||bw>=c.length)?$throwRuntimeError("index out of range"):c[bw])))>>>0;  �(by=ac&15,(by<0||by>=c.length)?$throwRuntimeError("index out of range"):c[by]=((bx<<1>>>0)|(bx>>>31>>>0))>>>0);  bz=(((((((y|z)>>>0))&aa)>>>0))|(((y&z)>>>0)))>>>0;  /ca=((x<<5>>>0)|(x>>>27>>>0))>>>0;  Icb=((y<<30>>>0)|(y>>>2>>>0))>>>0;  fcd=(((ca+bz>>>0)+ab>>>0)+(cc=ac&15,((cc<0||cc>=c.length)?$throwRuntimeError("index out of range"):c[cc]))>>>0)+2400959708>>>0;  �ce=cd;cf=x;cg=cb;ch=z;ci=aa;x=ce;y=cf;z=cg;aa=ch;ab=ci;      �  �ac=ac+(1)>>0;}  �while(ac<80){  �cn=((((((cj=((ac-3>>0))&15,((cj<0||cj>=c.length)?$throwRuntimeError("index out of range"):c[cj]))^(ck=((ac-8>>0))&15,((ck<0||ck>=c.length)?$throwRuntimeError("index out of range"):c[ck])))>>>0)^(cl=((ac-14>>0))&15,((cl<0||cl>=c.length)?$throwRuntimeError("index out of range"):c[cl])))>>>0)^(cm=(ac)&15,((cm<0||cm>=c.length)?$throwRuntimeError("index out of range"):c[cm])))>>>0;  
(co=ac&15,(co<0||co>=c.length)?$throwRuntimeError("index out of range"):c[co]=((cn<<1>>>0)|(cn>>>31>>>0))>>>0);  -cp=(((y^z)>>>0)^aa)>>>0;  ?cq=((x<<5>>>0)|(x>>>27>>>0))>>>0;  Ycr=((y<<30>>>0)|(y>>>2>>>0))>>>0;  vct=(((cq+cp>>>0)+ab>>>0)+(cs=ac&15,((cs<0||cs>=c.length)?$throwRuntimeError("index out of range"):c[cs]))>>>0)+3395469782>>>0;  �cu=ct;cv=x;cw=cr;cx=z;cy=aa;x=cu;y=cv;z=cw;aa=cx;ab=cy;      �  �ac=ac+(1)>>0;}  �i=i+(x)>>>0;  �j=j+(y)>>>0;  �k=k+(z)>>>0;  �l=l+(aa)>>>0;  �m=m+(ab)>>>0;  �b=$subslice(b,64);    }  cz=i;da=j;db=k;dc=l;dd=m;a.h[0]=cz;a.h[1]=da;a.h[2]=db;a.h[3]=dc;a.h[4]=dd;    };crypto/sha1.blockGenericcrypto/sha1.blockGenericcrypto/sha1:[16]uint32 ��{"Base":4926,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/crypto/sha1/sha1.go","Base":1,"Size":2333,"Lines":[0,55,109,159,160,235,248,249,258,268,276,278,279,293,332,334,335,376,392,393,428,449,450,458,470,490,510,530,550,570,572,573,632,653,668,685,694,706,708,709,736,752,768,784,800,816,826,837,839,840,900,923,941,952,962,964,965,1009,1010,1064,1065,1120,1133,1154,1169,1196,1208,1229,1249,1261,1265,1277,1280,1302,1331,1349,1361,1364,1381,1406,1409,1417,1419,1420,1462,1529,1539,1561,1592,1594,1595,1636,1650,1710,1728,1743,1761,1791,1801,1834,1837,1838,1858,1869,1901,1936,1939,1958,1959,1975,1996,1999,2000,2023,2048,2078,2110,2141,2167,2170,2171,2186,2188,2189,2235,2270,2284,2295,2310,2331],"Infos":null},{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/crypto/sha1/sha1block.go","Base":2335,"Size":2352,"Lines":[0,55,109,159,160,173,174,182,200,218,236,254,256,257,328,376,419,437,438,510,533,582,621,649,663,748,752,753,791,792,834,880,918,927,949,970,996,1025,1061,1096,1100,1122,1189,1224,1225,1246,1272,1301,1337,1372,1376,1398,1465,1500,1518,1544,1573,1609,1644,1648,1670,1737,1772,1804,1805,1831,1860,1896,1931,1935,1957,2024,2059,2077,2103,2132,2168,2203,2207,2208,2218,2228,2238,2248,2258,2259,2275,2278,2279,2350],"Infos":null},{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/crypto/sha1/sha1block_generic.go","Base":4688,"Size":237,"Lines":[0,55,109,159,160,197,198,211,212],"Infos":null}]}
 