p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �Od��crypto/sha512sha512cryptohash��package sha512
import crypto "crypto"
import hash "hash"
const @"".BlockSize = 0x80
func @"".New() (? @"hash".Hash)
func @"".New384() (? @"hash".Hash)
const @"".Size = 0x40
const @"".Size384 = 0x30
func @"".Sum384(@"".data []byte) (@"".sum384 [48]byte)
func @"".Sum512(@"".data []byte) (? [64]byte)
type @"".digest struct { @"".h [8]uint64; @"".x [128]byte; @"".nx int; @"".len uint64; @"".is384 bool }
func (? *@"".digest) @"".BlockSize() (? int)
func (? *@"".digest) @"".Reset() ()
func (? *@"".digest) @"".Size() (? int)
func (? *@"".digest) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".digest) @"".Write(@"".p []byte) (@"".nn int, @"".err error)
func (? *@"".digest) @"".checkSum() (? [64]byte)
import io "io"
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["crypto"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["hash"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} D�=D=$pkg.digest=$newType(0,$kindStruct,"sha512.digest","digest","crypto/sha512",function(h_,x_,nx_,len_,is384_){this.$val=this;this.h=h_!==undefined?h_:Q.zero();this.x=x_!==undefined?x_:N.zero();this.nx=nx_!==undefined?nx_:0;this.len=len_!==undefined?len_:new $Uint64(0,0);this.is384=is384_!==undefined?is384_:false;});��R.methods=[{prop:"BlockSize",name:"BlockSize",pkg:"",type:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",type:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",type:$funcType([L],[L],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([L],[$Int,$error],false)},{prop:"checkSum",name:"checkSum",pkg:"crypto/sha512",type:$funcType([],[M],false)}];�3D.init([{prop:"h",name:"h",pkg:"crypto/sha512",type:Q,tag:""},{prop:"x",name:"x",pkg:"crypto/sha512",type:N,tag:""},{prop:"nx",name:"nx",pkg:"crypto/sha512",type:$Int,tag:""},{prop:"len",name:"len",pkg:"crypto/sha512",type:$Uint64,tag:""},{prop:"is384",name:"is384",pkg:"crypto/sha512",type:$Bool,tag:""}]);crypto/sha512.digestcrypto/sha512.digest#crypto/sha512:*crypto/sha512.digestcrypto/sha512:[128]bytecrypto/sha512:[64]bytecrypto/sha512:[8]uint64crypto/sha512:[]byte KK=$sliceType($Uint64);crypto/sha512:[]uint64 LL=$sliceType($Uint8);crypto/sha512:[]byte MM=$arrayType($Uint8,64);crypto/sha512:[64]byte NN=$arrayType($Uint8,128);crypto/sha512:[128]byte OO=$arrayType($Uint8,48);crypto/sha512:[48]byte PP=$arrayType($Uint64,80);crypto/sha512:[80]uint64 QQ=$arrayType($Uint64,8);crypto/sha512:[8]uint64 RR=$ptrType(D);#crypto/sha512:*crypto/sha512.digestcrypto/sha512.digest Icrypto/sha512._K �
�    I=new K([new $Uint64(1116352408,3609767458),new $Uint64(1899447441,602891725),new $Uint64(3049323471,3964484399),new $Uint64(3921009573,2173295548),new $Uint64(961987163,4081628472),new $Uint64(1508970993,3053834265),new $Uint64(2453635748,2937671579),new $Uint64(2870763221,3664609560),new $Uint64(3624381080,2734883394),new $Uint64(310598401,1164996542),new $Uint64(607225278,1323610764),new $Uint64(1426881987,3590304994),new $Uint64(1925078388,4068182383),new $Uint64(2162078206,991336113),new $Uint64(2614888103,633803317),new $Uint64(3248222580,3479774868),new $Uint64(3835390401,2666613458),new $Uint64(4022224774,944711139),new $Uint64(264347078,2341262773),new $Uint64(604807628,2007800933),new $Uint64(770255983,1495990901),new $Uint64(1249150122,1856431235),new $Uint64(1555081692,3175218132),new $Uint64(1996064986,2198950837),new $Uint64(2554220882,3999719339),new $Uint64(2821834349,766784016),new $Uint64(2952996808,2566594879),new $Uint64(3210313671,3203337956),new $Uint64(3336571891,1034457026),new $Uint64(3584528711,2466948901),new $Uint64(113926993,3758326383),new $Uint64(338241895,168717936),new $Uint64(666307205,1188179964),new $Uint64(773529912,1546045734),new $Uint64(1294757372,1522805485),new $Uint64(1396182291,2643833823),new $Uint64(1695183700,2343527390),new $Uint64(1986661051,1014477480),new $Uint64(2177026350,1206759142),new $Uint64(2456956037,344077627),new $Uint64(2730485921,1290863460),new $Uint64(2820302411,3158454273),new $Uint64(3259730800,3505952657),new $Uint64(3345764771,106217008),new $Uint64(3516065817,3606008344),new $Uint64(3600352804,1432725776),new $Uint64(4094571909,1467031594),new $Uint64(275423344,851169720),new $Uint64(430227734,3100823752),new $Uint64(506948616,1363258195),new $Uint64(659060556,3750685593),new $Uint64(883997877,3785050280),new $Uint64(958139571,3318307427),new $Uint64(1322822218,3812723403),new $Uint64(1537002063,2003034995),new $Uint64(1747873779,3602036899),new $Uint64(1955562222,1575990012),new $Uint64(2024104815,1125592928),new $Uint64(2227730452,2716904306),new $Uint64(2361852424,442776044),new $Uint64(2428436474,593698344),new $Uint64(2756734187,3733110249),new $Uint64(3204031479,2999351573),new $Uint64(3329325298,3815920427),new $Uint64(3391569614,3928383900),new $Uint64(3515267271,566280711),new $Uint64(3940187606,3454069534),new $Uint64(4118630271,4000239992),new $Uint64(116418474,1914138554),new $Uint64(174292421,2731055270),new $Uint64(289380356,3203993006),new $Uint64(460393269,320620315),new $Uint64(685471733,587496836),new $Uint64(852142971,1086792851),new $Uint64(1017036298,365543100),new $Uint64(1126000580,2618297676),new $Uint64(1288033470,3409855158),new $Uint64(1501505948,4234509866),new $Uint64(1607167915,987167468),new $Uint64(1816402316,1246189591)]);crypto/sha512._Kcrypto/sha512._Kcrypto/sha512:[]uint64 crypto/sha512.initCFC=function(){  >A.RegisterHash(6,F);  jA.RegisterHash(7,E);    };	    C();crypto.RegisterHashcrypto/sha512.Newcrypto/sha512.New384crypto/sha512.init (*crypto/sha512.digest).Reset��D.ptr.prototype.Reset=function(){var a;  7a=this;  M    if(!a.is384){  ]a.h[0]=new $Uint64(1779033703,4089235720);  na.h[1]=new $Uint64(3144134277,2227873595);  a.h[2]=new $Uint64(1013904242,4271175723);  �a.h[3]=new $Uint64(2773480762,1595750129);  �a.h[4]=new $Uint64(1359893119,2917565137);  �a.h[5]=new $Uint64(2600822924,725511199);  �a.h[6]=new $Uint64(528734635,4215389547);  �a.h[7]=new $Uint64(1541459225,327033209);    }else{  �a.h[0]=new $Uint64(3418070365,3238371032);  a.h[1]=new $Uint64(1654270250,914150663);  a.h[2]=new $Uint64(2438529370,812702999);  .a.h[3]=new $Uint64(355462360,4144912697);  Ca.h[4]=new $Uint64(1731405415,4290775857);  Xa.h[5]=new $Uint64(2394180231,1750603025);  ma.h[6]=new $Uint64(3675008525,1694076839);  �a.h[7]=new $Uint64(1203062813,3204075428);    }  �a.nx=0;  �a.len=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};crypto/sha512.digestcrypto/sha512.digest crypto/sha512.NewESE=$pkg.New=function(){var a;  a=new D.ptr();  a.Reset();  #return a;    };crypto/sha512.Newcrypto/sha512.Newcrypto/sha512.digest crypto/sha512.New384FhF=$pkg.New384=function(){var a;  �a=new D.ptr();  �a.is384=true;  �a.Reset();  �return a;    };crypto/sha512.New384crypto/sha512.New384crypto/sha512.digest (*crypto/sha512.digest).Size��D.ptr.prototype.Size=function(){var a;  �a=this;  �    if(!a.is384){  �return 64;    }  return 48;    };D.prototype.Size=function(){return this.$val.Size();};crypto/sha512.digestcrypto/sha512.digest !(*crypto/sha512.digest).BlockSize��D.ptr.prototype.BlockSize=function(){var a;  a=this;  8return 128;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};crypto/sha512.digestcrypto/sha512.digest (*crypto/sha512.digest).Write�fD.ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h;  Rd=this;  �b=a.$length;  �d.len=(e=d.len,f=new $Uint64(0,b),new $Uint64(e.$high+f.$high,e.$low+f.$low));  �    if(d.nx>0){  �g=$copySlice($subslice(new L(d.x),d.nx),a);  �d.nx=d.nx+(g)>>0;  �    if(d.nx===128){  �J(d,new L(d.x));  	d.nx=0;    }  	a=$subslice(a,g);    }  	$    if(a.$length>=128){  	;h=a.$length&~127;  	XJ(d,$subslice(a,0,h));  	ja=$subslice(a,h);    }  	x    if(a.$length>0){  	�d.nx=$copySlice(new L(d.x),a);    }  	�return[b,c];    };D.prototype.Write=function(a){return this.$val.Write(a);};crypto/sha512.digestcrypto/sha512.blockcrypto/sha512.digestcrypto/sha512:[]byte (*crypto/sha512.digest).Sum�,D.ptr.prototype.Sum=function(a){var b,c,d;  	�b=this;  
c=new D.ptr();  
/$copy(c,b,D);  
9d=$clone(c.checkSum(),M);  
O    if(c.is384){  
^return $appendSlice(a,$subslice(new L(d),0,48));    }  
�return $appendSlice(a,new L(d));    };D.prototype.Sum=function(a){return this.$val.Sum(a);};crypto/sha512.digestcrypto/sha512.checkSum~crypto/sha512.digestcrypto/sha512:[64]bytecrypto/sha512:[]byte  (*crypto/sha512.digest).checkSum�]D.ptr.prototype.checkSum=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  
�a=this;  b=a.len;    "c=$clone(N.zero(),N);  1c[0]=128;  @    if((d=$div64(b,new $Uint64(0,128),true),(d.$high<0||(d.$high===0&&d.$low<112)))){  Ua.Write($subslice(new L(c),0,$flatten64((e=$div64(b,new $Uint64(0,128),true),new $Uint64(0-e.$high,112-e.$low)))));    }else{  a.Write($subslice(new L(c),0,$flatten64((f=$div64(b,new $Uint64(0,128),true),new $Uint64(0-f.$high,240-f.$low)))));    }  �b=$shiftLeft64(b,(3));  �  �g=0;while(g<16){  �(g<0||g>=c.length)?$throwRuntimeError("index out of range"):c[g]=($shiftRightUint64(b,((120-(8*g>>>0)>>>0))).$low<<24>>>24);      �  �g=g+(1)>>>0;}  a.Write($subslice(new L(c),0,16));  "    if(!((a.nx===0))){  3$panic(new $String("d.nx != 0"));    }  Kh=new K(a.h);  X    if(a.is384){  gh=$subslice(new K(a.h),0,6);    }  x  |i=$clone(M.zero(),M);  �j=h;k=0;while(k<j.$length){l=k;m=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  �(n=l*8>>0,(n<0||n>=i.length)?$throwRuntimeError("index out of range"):i[n]=($shiftRightUint64(m,56).$low<<24>>>24));  �(o=(l*8>>0)+1>>0,(o<0||o>=i.length)?$throwRuntimeError("index out of range"):i[o]=($shiftRightUint64(m,48).$low<<24>>>24));  �(p=(l*8>>0)+2>>0,(p<0||p>=i.length)?$throwRuntimeError("index out of range"):i[p]=($shiftRightUint64(m,40).$low<<24>>>24));  (q=(l*8>>0)+3>>0,(q<0||q>=i.length)?$throwRuntimeError("index out of range"):i[q]=($shiftRightUint64(m,32).$low<<24>>>24));  %(r=(l*8>>0)+4>>0,(r<0||r>=i.length)?$throwRuntimeError("index out of range"):i[r]=($shiftRightUint64(m,24).$low<<24>>>24));  E(s=(l*8>>0)+5>>0,(s<0||s>=i.length)?$throwRuntimeError("index out of range"):i[s]=($shiftRightUint64(m,16).$low<<24>>>24));  e(t=(l*8>>0)+6>>0,(t<0||t>=i.length)?$throwRuntimeError("index out of range"):i[t]=($shiftRightUint64(m,8).$low<<24>>>24));  �(u=(l*8>>0)+7>>0,(u<0||u>=i.length)?$throwRuntimeError("index out of range"):i[u]=(m.$low<<24>>>24));    k++;}  �return i;    };D.prototype.checkSum=function(){return this.$val.checkSum();};crypto/sha512.digestcrypto/sha512.checkSum~crypto/sha512.digestcrypto/sha512:[128]bytecrypto/sha512:[64]bytecrypto/sha512:[]bytecrypto/sha512:[]uint64 crypto/sha512.Sum512G��G=$pkg.Sum512=function(a){var b;    b=$clone(new D.ptr(),D);  b.Reset();  %b.Write(a);  4return b.checkSum();    };crypto/sha512.Sum512crypto/sha512.Sum512crypto/sha512.checkSum~crypto/sha512.digest crypto/sha512.Sum384H��H=$pkg.Sum384=function(a){var b=O.zero(),c,d;  �  �c=$clone(new D.ptr(),D);  �c.is384=true;  �c.Reset();  �c.Write(a);  �d=$clone(c.checkSum(),M);  �$copySlice(new L(b),$subslice(new L(d),0,48));  return b;    };crypto/sha512.Sum384crypto/sha512.Sum384crypto/sha512.checkSum~crypto/sha512.digestcrypto/sha512:[48]bytecrypto/sha512:[64]bytecrypto/sha512:[]byte crypto/sha512.blockJ��J=function(a,b){var aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv,dw,dx,dy,dz,e,ea,eb,ec,ed,ee,ef,eg,eh,ei,ej,ek,el,em,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  $  (c=$clone(P.zero(),P);  6d=a.h[0];e=a.h[1];f=a.h[2];g=a.h[3];h=a.h[4];i=a.h[5];j=a.h[6];k=a.h[7];l=d;m=e;n=f;o=g;p=h;q=i;r=j;s=k;  �while(b.$length>=128){  �  �t=0;while(t<16){  �u=t*8>>0;  �(t<0||t>=c.length)?$throwRuntimeError("index out of range"):c[t]=(v=(w=(x=(y=(z=(aa=(ab=$shiftLeft64(new $Uint64(0,((u<0||u>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+u])),56),ac=$shiftLeft64(new $Uint64(0,(ad=u+1>>0,((ad<0||ad>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+ad]))),48),new $Uint64(ab.$high|ac.$high,(ab.$low|ac.$low)>>>0)),ae=$shiftLeft64(new $Uint64(0,(af=u+2>>0,((af<0||af>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+af]))),40),new $Uint64(aa.$high|ae.$high,(aa.$low|ae.$low)>>>0)),ag=$shiftLeft64(new $Uint64(0,(ah=u+3>>0,((ah<0||ah>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+ah]))),32),new $Uint64(z.$high|ag.$high,(z.$low|ag.$low)>>>0)),ai=$shiftLeft64(new $Uint64(0,(aj=u+4>>0,((aj<0||aj>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+aj]))),24),new $Uint64(y.$high|ai.$high,(y.$low|ai.$low)>>>0)),ak=$shiftLeft64(new $Uint64(0,(al=u+5>>0,((al<0||al>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+al]))),16),new $Uint64(x.$high|ak.$high,(x.$low|ak.$low)>>>0)),am=$shiftLeft64(new $Uint64(0,(an=u+6>>0,((an<0||an>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+an]))),8),new $Uint64(w.$high|am.$high,(w.$low|am.$low)>>>0)),ao=new $Uint64(0,(ap=u+7>>0,((ap<0||ap>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+ap]))),new $Uint64(v.$high|ao.$high,(v.$low|ao.$low)>>>0));      �  �t=t+(1)>>0;}  �  �aq=16;while(aq<80){  �as=(ar=aq-2>>0,((ar<0||ar>=c.length)?$throwRuntimeError("index out of range"):c[ar]));  �bb=(at=(au=(av=$shiftRightUint64(as,19),aw=$shiftLeft64(as,45),new $Uint64(av.$high|aw.$high,(av.$low|aw.$low)>>>0)),ax=(ay=$shiftRightUint64(as,61),az=$shiftLeft64(as,3),new $Uint64(ay.$high|az.$high,(ay.$low|az.$low)>>>0)),new $Uint64(au.$high^ax.$high,(au.$low^ax.$low)>>>0)),ba=$shiftRightUint64(as,6),new $Uint64(at.$high^ba.$high,(at.$low^ba.$low)>>>0));  bd=(bc=aq-15>>0,((bc<0||bc>=c.length)?$throwRuntimeError("index out of range"):c[bc]));  bm=(be=(bf=(bg=$shiftRightUint64(bd,1),bh=$shiftLeft64(bd,63),new $Uint64(bg.$high|bh.$high,(bg.$low|bh.$low)>>>0)),bi=(bj=$shiftRightUint64(bd,8),bk=$shiftLeft64(bd,56),new $Uint64(bj.$high|bk.$high,(bj.$low|bk.$low)>>>0)),new $Uint64(bf.$high^bi.$high,(bf.$low^bi.$low)>>>0)),bl=$shiftRightUint64(bd,7),new $Uint64(be.$high^bl.$high,(be.$low^bl.$low)>>>0));  a(aq<0||aq>=c.length)?$throwRuntimeError("index out of range"):c[aq]=(bn=(bo=(bp=(bq=aq-7>>0,((bq<0||bq>=c.length)?$throwRuntimeError("index out of range"):c[bq])),new $Uint64(bb.$high+bp.$high,bb.$low+bp.$low)),new $Uint64(bo.$high+bm.$high,bo.$low+bm.$low)),br=(bs=aq-16>>0,((bs<0||bs>=c.length)?$throwRuntimeError("index out of range"):c[bs])),new $Uint64(bn.$high+br.$high,bn.$low+br.$low));      �  �aq=aq+(1)>>0;}  �bt=l;bu=m;bv=n;bw=o;bx=p;by=q;bz=r;ca=s;cb=bt;cc=bu;cd=bv;ce=bw;cf=bx;cg=by;ch=bz;ci=ca;  �  �cj=0;while(cj<80){  �de=(ck=(cl=(cm=(cn=(co=(cp=(cq=$shiftRightUint64(cf,14),cr=$shiftLeft64(cf,50),new $Uint64(cq.$high|cr.$high,(cq.$low|cr.$low)>>>0)),cs=(ct=$shiftRightUint64(cf,18),cu=$shiftLeft64(cf,46),new $Uint64(ct.$high|cu.$high,(ct.$low|cu.$low)>>>0)),new $Uint64(cp.$high^cs.$high,(cp.$low^cs.$low)>>>0)),cv=(cw=$shiftRightUint64(cf,41),cx=$shiftLeft64(cf,23),new $Uint64(cw.$high|cx.$high,(cw.$low|cx.$low)>>>0)),new $Uint64(co.$high^cv.$high,(co.$low^cv.$low)>>>0)),new $Uint64(ci.$high+cn.$high,ci.$low+cn.$low)),cy=(cz=new $Uint64(cf.$high&cg.$high,(cf.$low&cg.$low)>>>0),da=(db=new $Uint64(~cf.$high,~cf.$low>>>0),new $Uint64(db.$high&ch.$high,(db.$low&ch.$low)>>>0)),new $Uint64(cz.$high^da.$high,(cz.$low^da.$low)>>>0)),new $Uint64(cm.$high+cy.$high,cm.$low+cy.$low)),dc=((cj<0||cj>=I.$length)?$throwRuntimeError("index out of range"):I.$array[I.$offset+cj]),new $Uint64(cl.$high+dc.$high,cl.$low+dc.$low)),dd=((cj<0||cj>=c.length)?$throwRuntimeError("index out of range"):c[cj]),new $Uint64(ck.$high+dd.$high,ck.$low+dd.$low));  \dw=(df=(dg=(dh=(di=$shiftRightUint64(cb,28),dj=$shiftLeft64(cb,36),new $Uint64(di.$high|dj.$high,(di.$low|dj.$low)>>>0)),dk=(dl=$shiftRightUint64(cb,34),dm=$shiftLeft64(cb,30),new $Uint64(dl.$high|dm.$high,(dl.$low|dm.$low)>>>0)),new $Uint64(dh.$high^dk.$high,(dh.$low^dk.$low)>>>0)),dn=(dp=$shiftRightUint64(cb,39),dq=$shiftLeft64(cb,25),new $Uint64(dp.$high|dq.$high,(dp.$low|dq.$low)>>>0)),new $Uint64(dg.$high^dn.$high,(dg.$low^dn.$low)>>>0)),dr=(ds=(dt=new $Uint64(cb.$high&cc.$high,(cb.$low&cc.$low)>>>0),du=new $Uint64(cb.$high&cd.$high,(cb.$low&cd.$low)>>>0),new $Uint64(dt.$high^du.$high,(dt.$low^du.$low)>>>0)),dv=new $Uint64(cc.$high&cd.$high,(cc.$low&cd.$low)>>>0),new $Uint64(ds.$high^dv.$high,(ds.$low^dv.$low)>>>0)),new $Uint64(df.$high+dr.$high,df.$low+dr.$low));  �ci=ch;  �ch=cg;  �cg=cf;  �cf=new $Uint64(ce.$high+de.$high,ce.$low+de.$low);  �ce=cd;  �cd=cc;  cc=cb;  cb=new $Uint64(de.$high+dw.$high,de.$low+dw.$low);      �  �cj=cj+(1)>>0;}  "l=(dx=cb,new $Uint64(l.$high+dx.$high,l.$low+dx.$low));  ,m=(dy=cc,new $Uint64(m.$high+dy.$high,m.$low+dy.$low));  6n=(dz=cd,new $Uint64(n.$high+dz.$high,n.$low+dz.$low));  @o=(ea=ce,new $Uint64(o.$high+ea.$high,o.$low+ea.$low));  Jp=(eb=cf,new $Uint64(p.$high+eb.$high,p.$low+eb.$low));  Tq=(ec=cg,new $Uint64(q.$high+ec.$high,q.$low+ec.$low));  ^r=(ed=ch,new $Uint64(r.$high+ed.$high,r.$low+ed.$low));  hs=(ee=ci,new $Uint64(s.$high+ee.$high,s.$low+ee.$low));  sb=$subslice(b,128);    }  �ef=l;eg=m;eh=n;ei=o;ej=p;ek=q;el=r;em=s;a.h[0]=ef;a.h[1]=eg;a.h[2]=eh;a.h[3]=ei;a.h[4]=ej;a.h[5]=ek;a.h[6]=el;a.h[7]=em;    };crypto/sha512.blockcrypto/sha512._Kcrypto/sha512.blockcrypto/sha512:[80]uint64 �]{"Base":7161,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/crypto/sha512/sha512.go","Base":1,"Size":3878,"Lines":[0,55,109,159,160,238,256,271,272,281,291,299,301,302,316,360,401,403,404,447,463,464,507,526,527,575,597,598,606,623,655,687,719,751,783,815,847,879,911,943,975,1007,1039,1071,1103,1135,1137,1138,1197,1218,1235,1254,1265,1279,1325,1327,1328,1355,1370,1387,1404,1421,1438,1455,1472,1489,1506,1516,1537,1558,1579,1600,1621,1642,1663,1684,1687,1697,1708,1710,1711,1773,1796,1814,1825,1835,1837,1838,1903,1929,1947,1963,1974,1984,1986,1987,2017,2032,2046,2049,2065,2067,2068,2122,2123,2178,2191,2212,2227,2254,2266,2287,2307,2319,2323,2335,2338,2360,2389,2407,2419,2422,2439,2464,2467,2475,2477,2478,2520,2587,2605,2615,2637,2651,2690,2693,2724,2726,2727,2768,2830,2844,2863,2878,2898,2930,2940,2976,2979,2980,3000,3011,3044,3080,3083,3103,3104,3120,3141,3144,3145,3158,3172,3186,3189,3190,3213,3236,3266,3298,3330,3362,3394,3426,3457,3483,3486,3487,3502,3504,3505,3556,3594,3608,3619,3634,3655,3657,3658,3709,3759,3773,3789,3800,3815,3836,3868,3876],"Infos":null},{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/crypto/sha512/sha512block.go","Base":3880,"Size":3280,"Lines":[0,55,109,159,160,177,178,200,258,288,289,304,305,324,345,366,387,408,429,450,471,492,513,534,555,576,597,618,639,660,681,702,723,744,765,786,807,828,849,870,891,912,933,954,975,996,1017,1038,1059,1080,1101,1122,1143,1164,1185,1206,1227,1248,1269,1290,1311,1332,1353,1374,1395,1416,1437,1458,1479,1500,1521,1542,1563,1584,1605,1626,1647,1668,1689,1710,1731,1752,1773,1794,1815,1836,1857,1878,1899,1920,1941,1962,1983,2004,2006,2007,2043,2061,2175,2198,2226,2240,2332,2413,2417,2446,2462,2531,2548,2613,2614,2651,2655,2656,2715,2716,2744,2864,2865,2975,2976,2985,2994,3003,3017,3026,3035,3044,3059,3063,3064,3074,3084,3094,3104,3114,3124,3134,3144,3145,3161,3164,3165,3278],"Infos":null}]}
 