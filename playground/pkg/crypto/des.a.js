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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �U���
crypto/desdescrypto/cipherencoding/binarystrconv��
$$ exports $$
pv0descrypto/desBlockSize$!KeySizeError 
Errork8    	NewCipher key2 
Blockciphercrypto/cipher BlockSize    Decrypt dst2srcH  Encrypt dst2srcL    6 	$NewTripleDESCipher key2 @ 6 5BB=$packages["crypto/cipher"];a    $r=B.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["encoding/binary"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["strconv"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} OXO=$pkg.KeySizeError=$newType(4,$kindInt,"des.KeySizeError",true,"crypto/des",true,null);QO.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];KeySizeErrorcrypto/des.KeySizeError P��P=$pkg.desCipher=$newType(0,$kindStruct,"des.desCipher",true,"crypto/des",false,function(subkeys_){this.$val=this;if(arguments.length===0){this.subkeys=AH.zero();return;}this.subkeys=subkeys_;});�CAJ.methods=[{prop:"generateSubkeys",name:"generateSubkeys",pkg:"crypto/des",typ:$funcType([AF],[],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Encrypt",name:"Encrypt",pkg:"",typ:$funcType([AF,AF],[],false)},{prop:"Decrypt",name:"Decrypt",pkg:"",typ:$funcType([AF,AF],[],false)}];TP.init("crypto/des",[{prop:"subkeys",name:"subkeys",exported:false,typ:AH,tag:""}]);	desCiphercrypto/des.AFcrypto/des.AHcrypto/des.AJcrypto/des.desCipher R�\R=$pkg.tripleDESCipher=$newType(0,$kindStruct,"des.tripleDESCipher",true,"crypto/des",false,function(cipher1_,cipher2_,cipher3_){this.$val=this;if(arguments.length===0){this.cipher1=new P.ptr(AH.zero());this.cipher2=new P.ptr(AH.zero());this.cipher3=new P.ptr(AH.zero());return;}this.cipher1=cipher1_;this.cipher2=cipher2_;this.cipher3=cipher3_;});��AK.methods=[{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Encrypt",name:"Encrypt",pkg:"",typ:$funcType([AF,AF],[],false)},{prop:"Decrypt",name:"Decrypt",pkg:"",typ:$funcType([AF,AF],[],false)}];��R.init("crypto/des",[{prop:"cipher1",name:"cipher1",exported:false,typ:P,tag:""},{prop:"cipher2",name:"cipher2",exported:false,typ:P,tag:""},{prop:"cipher3",name:"cipher3",exported:false,typ:P,tag:""}]);tripleDESCiphercrypto/des.AFcrypto/des.AHcrypto/des.AKcrypto/des.desCiphercrypto/des.tripleDESCipher ABAB=$arrayType($Uint32,64);AB ACAC=$arrayType(AB,8);ACcrypto/des.AB ADAD=$arrayType($Uint8,16);AD AEAE=$arrayType(AD,4);AEcrypto/des.AD AFAF=$sliceType($Uint8);AF AGAG=$sliceType($Uint32);AG AHAH=$arrayType($Uint64,16);AH AIAI=$sliceType($Uint64);AI AJAJ=$ptrType(P);AJcrypto/des.desCipher AKAK=$ptrType(R);AKcrypto/des.tripleDESCipher HH=AC.zero();
feistelBoxcrypto/des.ABcrypto/des.ACcrypto/des.feistelBox TinitialPermutation UfinalPermutation VexpansionFunction WpermutationFunction XpermutedChoice1 YpermutedChoice2 ZsBoxes AAksRotations ��    T=$toNativeArray($kindUint8,[6,14,22,30,38,46,54,62,4,12,20,28,36,44,52,60,2,10,18,26,34,42,50,58,0,8,16,24,32,40,48,56,7,15,23,31,39,47,55,63,5,13,21,29,37,45,53,61,3,11,19,27,35,43,51,59,1,9,17,25,33,41,49,57]);initialPermutationcrypto/des.initialPermutation ��    U=$toNativeArray($kindUint8,[24,56,16,48,8,40,0,32,25,57,17,49,9,41,1,33,26,58,18,50,10,42,2,34,27,59,19,51,11,43,3,35,28,60,20,52,12,44,4,36,29,61,21,53,13,45,5,37,30,62,22,54,14,46,6,38,31,63,23,55,15,47,7,39]);finalPermutationcrypto/des.finalPermutation ��    V=$toNativeArray($kindUint8,[0,31,30,29,28,27,28,27,26,25,24,23,24,23,22,21,20,19,20,19,18,17,16,15,16,15,14,13,12,11,12,11,10,9,8,7,8,7,6,5,4,3,4,3,2,1,0,31]);expansionFunctioncrypto/des.expansionFunction z    W=$toNativeArray($kindUint8,[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7]);permutationFunctioncrypto/des.permutationFunction ��    X=$toNativeArray($kindUint8,[7,15,23,31,39,47,55,63,6,14,22,30,38,46,54,62,5,13,21,29,37,45,53,61,4,12,20,28,1,9,17,25,33,41,49,57,2,10,18,26,34,42,50,58,3,11,19,27,35,43,51,59,36,44,52,60]);permutedChoice1crypto/des.permutedChoice1 ��    Y=$toNativeArray($kindUint8,[42,39,45,32,55,51,53,28,41,50,35,46,33,37,44,52,30,48,40,49,29,36,43,54,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24]);permutedChoice2crypto/des.permutedChoice2 �	l    Z=$toNativeArray($kindArray,[$toNativeArray($kindArray,[$toNativeArray($kindUint8,[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7]),$toNativeArray($kindUint8,[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8]),$toNativeArray($kindUint8,[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0]),$toNativeArray($kindUint8,[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10]),$toNativeArray($kindUint8,[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5]),$toNativeArray($kindUint8,[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15]),$toNativeArray($kindUint8,[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8]),$toNativeArray($kindUint8,[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1]),$toNativeArray($kindUint8,[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7]),$toNativeArray($kindUint8,[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15]),$toNativeArray($kindUint8,[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9]),$toNativeArray($kindUint8,[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4]),$toNativeArray($kindUint8,[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9]),$toNativeArray($kindUint8,[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6]),$toNativeArray($kindUint8,[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14]),$toNativeArray($kindUint8,[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11]),$toNativeArray($kindUint8,[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8]),$toNativeArray($kindUint8,[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6]),$toNativeArray($kindUint8,[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1]),$toNativeArray($kindUint8,[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6]),$toNativeArray($kindUint8,[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2]),$toNativeArray($kindUint8,[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12])]),$toNativeArray($kindArray,[$toNativeArray($kindUint8,[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7]),$toNativeArray($kindUint8,[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2]),$toNativeArray($kindUint8,[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8]),$toNativeArray($kindUint8,[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11])])]);sBoxescrypto/des.ADcrypto/des.AEcrypto/des.sBoxes E    AA=$toNativeArray($kindUint8,[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1]);ksRotationscrypto/des.ksRotations crypto/des.cryptBlockD��D=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  e=A.BigEndian.Uint64(c);  4e=L(e);  Pf=($shiftRightUint64(e,32).$low>>>0);g=(e.$low>>>0);h=f;i=g;  ~j=new $Uint64(0,0);  �k=0;while(true){if(!(k<16)){break;}    if(d){  �j=(l=15-k>>0,((l<0||l>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+l]));    }else{  �j=((k<0||k>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+k]);    }  �m=i;n=(h^G(i,j))>>>0;h=m;i=n;  �k=k+(1)>>0;    }  dq=(o=$shiftLeft64(new $Uint64(0,i),32),p=new $Uint64(0,h),new $Uint64(o.$high|p.$high,(o.$low|p.$low)>>>0));  �A.BigEndian.PutUint64(b,M(q));    };
cryptBlockcrypto/des.cryptBlockcrypto/des.feistelcrypto/des.permuteFinalBlockcrypto/des.permuteInitialBlockencoding/binary.BigEndian crypto/des.encryptBlockE<E=function(a,b,c){var $ptr,a,b,c;  KD(a,b,c,false);    };encryptBlockcrypto/des.cryptBlockcrypto/des.encryptBlock crypto/des.decryptBlockF;F=function(a,b,c){var $ptr,a,b,c;  �D(a,b,c,true);    };decryptBlockcrypto/des.cryptBlockcrypto/des.decryptBlock crypto/des.feistelG�DG=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;c=0;  _e=(d=K(a),new $Uint64(b.$high^d.$high,(b.$low^d.$low)>>>0));  �f=0;  �g=0;while(true){if(!(g<8)){break;}  �h=(($shiftRightUint64(e,42).$low<<24>>>24)&63)>>>0;  �e=$shiftLeft64(e,(6));  Ri=((((h&1)>>>0))|(((((h&32)>>>0))>>>4<<24>>>24)))>>>0;  �j=(((h>>>1<<24>>>24))&15)>>>0;  �f=(f^((k=((g<0||g>=H.length)?$throwRuntimeError("index out of range"):H[g]),l=(16*i<<24>>>24)+j<<24>>>24,((l<0||l>=k.length)?$throwRuntimeError("index out of range"):k[l]))))>>>0;  �g=g+(1)<<24>>>24;    }    c=f;return c;    };feistelcrypto/des.expandBlockcrypto/des.feistelcrypto/des.feistelBox crypto/des.permuteBlockI��I=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j;c=new $Uint64(0,0);   d=b;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  )i=(h=$shiftRightUint64(a,g),new $Uint64(h.$high&0,(h.$low&1)>>>0));  Ac=(j=$shiftLeft64(i,((((b.$length-1>>0))-f>>0)>>>0)),new $Uint64(c.$high|j.$high,(c.$low|j.$low)>>>0));    e++;}  yreturn c;    };permuteBlockcrypto/des.permuteBlock crypto/des.initJ��J=function(){var $ptr,a,b,c,d,e,f,g,h,i,j;  �a=Z;b=0;while(true){if(!(b<8)){break;}c=b;  �d=0;while(true){if(!(d<4)){break;}  �e=0;while(true){if(!(e<16)){break;}  �h=$shiftLeft64(new $Uint64(0,(f=(g=((c<0||c>=Z.length)?$throwRuntimeError("index out of range"):Z[c]),((d<0||d>=g.length)?$throwRuntimeError("index out of range"):g[d])),((e<0||e>=f.length)?$throwRuntimeError("index out of range"):f[e]))),((4*((7-(c>>>0)>>>0))>>>0)));  h=I(h,new AF(W));  N(i=((c<0||c>=H.length)?$throwRuntimeError("index out of range"):H[c]),j=($imul(16,d))+e>>0,((j<0||j>=i.length)?$throwRuntimeError("index out of range"):i[j]=(h.$low>>>0)));  �e=e+(1)>>0;    }  �d=d+(1)>>0;    }    b++;}    };	    J();crypto/des.AFcrypto/des.feistelBoxcrypto/des.initcrypto/des.permutationFunctioncrypto/des.permuteBlockcrypto/des.sBoxes crypto/des.expandBlockK�kK=function(a){var $ptr,a,b,c,d,e;b=new $Uint64(0,0);  	5a=(((a<<5>>>0))|((a>>>27>>>0)))>>>0;  	Yc=0;while(true){if(!(c<8)){break;}  	pb=$shiftLeft64(b,(6));  	�b=(d=(e=new $Uint64(0,a),new $Uint64(e.$high&0,(e.$low&63)>>>0)),new $Uint64(b.$high|d.$high,(b.$low|d.$low)>>>0));  	�a=(((a<<4>>>0))|((a>>>28>>>0)))>>>0;  	hc=c+(1)>>0;    }  	�return b;    };expandBlockcrypto/des.expandBlock crypto/des.permuteInitialBlockL�TL=function(a){var $ptr,a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  
�b=$shiftRightUint64(a,48);  
�c=$shiftLeft64(a,48);  
�a=(d=(e=(f=new $Uint64(b.$high^c.$high,(b.$low^c.$low)>>>0),g=$shiftLeft64(b,48),new $Uint64(f.$high^g.$high,(f.$low^g.$low)>>>0)),h=$shiftRightUint64(c,48),new $Uint64(e.$high^h.$high,(e.$low^h.$low)>>>0)),new $Uint64(a.$high^d.$high,(a.$low^d.$low)>>>0));  1b=(i=$shiftRightUint64(a,32),new $Uint64(i.$high&0,(i.$low&16711935)>>>0));  Nc=new $Uint64(a.$high&0,(a.$low&4278255360)>>>0);  ia=(j=(k=(l=(m=$shiftLeft64(b,32),new $Uint64(m.$high^c.$high,(m.$low^c.$low)>>>0)),n=$shiftLeft64(b,8),new $Uint64(l.$high^n.$high,(l.$low^n.$low)>>>0)),o=$shiftLeft64(c,24),new $Uint64(k.$high^o.$high,(k.$low^o.$low)>>>0)),new $Uint64(a.$high^j.$high,(a.$low^j.$low)>>>0));  �b=new $Uint64(a.$high&252641280,(a.$low&252641280)>>>0);  c=new $Uint64(a.$high&61680,(a.$low&61680)>>>0);  7a=(p=(q=(r=new $Uint64(b.$high^c.$high,(b.$low^c.$low)>>>0),s=$shiftRightUint64(b,12),new $Uint64(r.$high^s.$high,(r.$low^s.$low)>>>0)),t=$shiftLeft64(c,12),new $Uint64(q.$high^t.$high,(q.$low^t.$low)>>>0)),new $Uint64(a.$high^p.$high,(a.$low^p.$low)>>>0));  b=new $Uint64(a.$high&855651072,(a.$low&855651072)>>>0);  ,c=new $Uint64(a.$high&13369548,(a.$low&13369548)>>>0);  Ma=(u=(v=(w=new $Uint64(b.$high^c.$high,(b.$low^c.$low)>>>0),x=$shiftRightUint64(b,6),new $Uint64(w.$high^x.$high,(w.$low^x.$low)>>>0)),y=$shiftLeft64(c,6),new $Uint64(v.$high^y.$high,(v.$low^y.$low)>>>0)),new $Uint64(a.$high^u.$high,(a.$low^u.$low)>>>0));  b=new $Uint64(a.$high&2863311530,(a.$low&1431655765)>>>0);  8a=(z=(aa=(ab=$shiftRightUint64(b,33),new $Uint64(b.$high^ab.$high,(b.$low^ab.$low)>>>0)),ac=$shiftLeft64(b,33),new $Uint64(aa.$high^ac.$high,(aa.$low^ac.$low)>>>0)),new $Uint64(a.$high^z.$high,(a.$low^z.$low)>>>0));  Nreturn a;    };permuteInitialBlockcrypto/des.permuteInitialBlock crypto/des.permuteFinalBlockM�TM=function(a){var $ptr,a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  9b=new $Uint64(a.$high&2863311530,(a.$low&1431655765)>>>0);  [a=(c=(d=(e=$shiftRightUint64(b,33),new $Uint64(b.$high^e.$high,(b.$low^e.$low)>>>0)),f=$shiftLeft64(b,33),new $Uint64(d.$high^f.$high,(d.$low^f.$low)>>>0)),new $Uint64(a.$high^c.$high,(a.$low^c.$low)>>>0));  {b=new $Uint64(a.$high&855651072,(a.$low&855651072)>>>0);  �g=new $Uint64(a.$high&13369548,(a.$low&13369548)>>>0);  �a=(h=(i=(j=new $Uint64(b.$high^g.$high,(b.$low^g.$low)>>>0),k=$shiftRightUint64(b,6),new $Uint64(j.$high^k.$high,(j.$low^k.$low)>>>0)),l=$shiftLeft64(g,6),new $Uint64(i.$high^l.$high,(i.$low^l.$low)>>>0)),new $Uint64(a.$high^h.$high,(a.$low^h.$low)>>>0));  �b=new $Uint64(a.$high&252641280,(a.$low&252641280)>>>0);  g=new $Uint64(a.$high&61680,(a.$low&61680)>>>0);  #a=(m=(n=(o=new $Uint64(b.$high^g.$high,(b.$low^g.$low)>>>0),p=$shiftRightUint64(b,12),new $Uint64(o.$high^p.$high,(o.$low^p.$low)>>>0)),q=$shiftLeft64(g,12),new $Uint64(n.$high^q.$high,(n.$low^q.$low)>>>0)),new $Uint64(a.$high^m.$high,(a.$low^m.$low)>>>0));  Hb=(r=$shiftRightUint64(a,32),new $Uint64(r.$high&0,(r.$low&16711935)>>>0));  eg=new $Uint64(a.$high&0,(a.$low&4278255360)>>>0);  �a=(s=(t=(u=(v=$shiftLeft64(b,32),new $Uint64(v.$high^g.$high,(v.$low^g.$low)>>>0)),w=$shiftLeft64(b,8),new $Uint64(u.$high^w.$high,(u.$low^w.$low)>>>0)),x=$shiftLeft64(g,24),new $Uint64(t.$high^x.$high,(t.$low^x.$low)>>>0)),new $Uint64(a.$high^s.$high,(a.$low^s.$low)>>>0));  �b=$shiftRightUint64(a,48);  �g=$shiftLeft64(a,48);  �a=(y=(z=(aa=new $Uint64(b.$high^g.$high,(b.$low^g.$low)>>>0),ab=$shiftLeft64(b,48),new $Uint64(aa.$high^ab.$high,(aa.$low^ab.$low)>>>0)),ac=$shiftRightUint64(g,48),new $Uint64(z.$high^ac.$high,(z.$low^ac.$low)>>>0)),new $Uint64(a.$high^y.$high,(a.$low^y.$low)>>>0));  �return a;    };permuteFinalBlockcrypto/des.permuteFinalBlock crypto/des.ksRotateN�bN=function(a){var $ptr,a,b,c,d,e,f,g,h;b=AG.nil;  ub=$makeSlice(AG,16);  �c=a;  �d=0;while(true){if(!(d<16)){break;}  �f=(((e=((4+((d<0||d>=AA.length)?$throwRuntimeError("index out of range"):AA[d])<<24>>>24)),e<32?(c<<e):0)>>>0))>>>4>>>0;  h=(g=((32-((d<0||d>=AA.length)?$throwRuntimeError("index out of range"):AA[d])<<24>>>24)),g<32?(((c<<4>>>0))>>>g):0)>>>0;  5((d<0||d>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+d]=((f|h)>>>0));  Mc=((d<0||d>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+d]);  �d=d+(1)>>0;    }  _return b;    };ksRotatecrypto/des.AGcrypto/des.ksRotatecrypto/des.ksRotations '(*crypto/des.desCipher).generateSubkeys��P.ptr.prototype.generateSubkeys=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k;  �b=this;  �c=A.BigEndian.Uint64(a);  d=I(c,new AF(X));  �e=N(($shiftRightUint64(d,28).$low>>>0));  �f=N(($shiftLeft64(d,4).$low>>>0)>>>4>>>0);  $g=0;while(true){if(!(g<16)){break;}  lj=(h=$shiftLeft64(new $Uint64(0,((g<0||g>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+g])),28),i=new $Uint64(0,((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g])),new $Uint64(h.$high|i.$high,(h.$low|i.$low)>>>0));  �(k=b.subkeys,((g<0||g>=k.length)?$throwRuntimeError("index out of range"):k[g]=I(j,new AF(Y))));  4g=g+(1)>>0;    }    };P.prototype.generateSubkeys=function(a){return this.$val.generateSubkeys(a);};	desCiphergenerateSubkeys~crypto/des.AFcrypto/des.desCiphercrypto/des.ksRotatecrypto/des.permuteBlockcrypto/des.permutedChoice1crypto/des.permutedChoice2encoding/binary.BigEndian (crypto/des.KeySizeError).Error��O.prototype.Error=function(){var $ptr,a;  Ea=this.$val;  greturn"crypto/des: invalid key size "+C.Itoa((a>>0));    };$ptrType(O).prototype.Error=function(){return new O(this.$get()).Error();};KeySizeErrorcrypto/des.KeySizeErrorstrconv.Itoa crypto/des.NewCipherQ��Q=function(a){var $ptr,a,b;    if(!((a.$length===8))){  �return[$ifaceNil,new O((a.$length>>0))];    }  �b=new P.ptr(AH.zero());  �b.generateSubkeys(a);  �return[b,$ifaceNil];    };$pkg.NewCipher=Q;	NewCiphercrypto/des.AHcrypto/des.KeySizeErrorcrypto/des.NewCiphercrypto/des.desCiphercrypto/des.generateSubkeys~ !(*crypto/des.desCipher).BlockSize��P.ptr.prototype.BlockSize=function(){var $ptr,a;  �a=this;  return 8;    };P.prototype.BlockSize=function(){return this.$val.BlockSize();};	desCiphercrypto/des.desCipher (*crypto/des.desCipher).Encrypt��P.ptr.prototype.Encrypt=function(a,b){var $ptr,a,b,c;  *c=this;  SE(new AI(c.subkeys),a,b);    };P.prototype.Encrypt=function(a,b){return this.$val.Encrypt(a,b);};	desCiphercrypto/des.AIcrypto/des.desCiphercrypto/des.encryptBlock (*crypto/des.desCipher).Decrypt��P.ptr.prototype.Decrypt=function(a,b){var $ptr,a,b,c;  �c=this;  �F(new AI(c.subkeys),a,b);    };P.prototype.Decrypt=function(a,b){return this.$val.Decrypt(a,b);};	desCiphercrypto/des.AIcrypto/des.decryptBlockcrypto/des.desCipher crypto/des.NewTripleDESCipherS��S=function(a){var $ptr,a,b;    if(!((a.$length===24))){  �return[$ifaceNil,new O((a.$length>>0))];    }  b=new R.ptr(new P.ptr(AH.zero()),new P.ptr(AH.zero()),new P.ptr(AH.zero()));  )b.cipher1.generateSubkeys($subslice(a,0,8));  Mb.cipher2.generateSubkeys($subslice(a,8,16));  sb.cipher3.generateSubkeys($subslice(a,16));  �return[b,$ifaceNil];    };$pkg.NewTripleDESCipher=S;NewTripleDESCiphercrypto/des.AHcrypto/des.KeySizeErrorcrypto/des.NewTripleDESCiphercrypto/des.desCiphercrypto/des.generateSubkeys~crypto/des.tripleDESCipher '(*crypto/des.tripleDESCipher).BlockSize��R.ptr.prototype.BlockSize=function(){var $ptr,a;  �a=this;  �return 8;    };R.prototype.BlockSize=function(){return this.$val.BlockSize();};tripleDESCiphercrypto/des.tripleDESCipher %(*crypto/des.tripleDESCipher).Encrypt��R.ptr.prototype.Encrypt=function(a,b){var $ptr,a,b,c;  �c=this;  c.cipher1.Encrypt(a,b);  <c.cipher2.Decrypt(a,a);  Yc.cipher3.Encrypt(a,a);    };R.prototype.Encrypt=function(a,b){return this.$val.Encrypt(a,b);};tripleDESCiphercrypto/des.tripleDESCipher %(*crypto/des.tripleDESCipher).Decrypt��R.ptr.prototype.Decrypt=function(a,b){var $ptr,a,b,c;  ~c=this;  �c.cipher3.Decrypt(a,b);  �c.cipher2.Encrypt(a,a);  �c.cipher1.Decrypt(a,a);    };R.prototype.Decrypt=function(a,b){return this.$val.Decrypt(a,b);};tripleDESCiphercrypto/des.tripleDESCipher �
{"Base":12244,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/crypto/des/block.go","Base":1,"Size":5916,"Lines":[0,55,109,159,160,172,173,182,201,203,204,271,306,334,375,376,395,422,437,463,474,497,501,502,553,556,610,661,724,726,727,786,841,879,881,882,941,996,1033,1035,1036,1060,1117,1160,1183,1216,1266,1288,1327,1359,1420,1458,1503,1506,1525,1527,1528,1596,1630,1659,1660,1722,1790,1830,1854,1908,1911,1919,1921,1922,1936,1961,1988,2017,2073,2121,2159,2164,2168,2171,2173,2174,2224,2265,2311,2355,2387,2413,2427,2461,2497,2521,2554,2557,2565,2567,2568,2632,2658,2706,2752,2771,2790,2826,2827,2863,2892,2919,2987,2988,3047,3075,3103,3131,3159,3187,3215,3243,3271,3272,3315,3348,3381,3417,3418,3448,3452,3477,3481,3497,3513,3529,3554,3555,3593,3626,3659,3693,3694,3724,3734,3744,3754,3764,3774,3784,3794,3822,3823,3861,3894,3925,3926,3956,3983,4010,4037,4064,4091,4118,4145,4172,4186,4188,4189,4253,4277,4323,4381,4407,4441,4472,4473,4506,4540,4574,4575,4608,4641,4677,4678,4707,4734,4773,4774,4792,4810,4846,4860,4862,4863,4909,4937,4979,5005,5017,5044,5076,5122,5170,5194,5210,5213,5221,5223,5224,5275,5330,5363,5405,5459,5460,5529,5583,5640,5641,5662,5689,5737,5808,5851,5911,5914],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/crypto/des/cipher.go","Base":5918,"Size":1768,"Lines":[0,55,109,159,160,172,173,182,199,210,212,213,245,265,266,288,289,328,391,393,394,441,465,485,487,488,541,592,612,649,652,653,674,698,713,715,716,773,774,860,861,947,948,1009,1039,1076,1078,1079,1141,1201,1222,1259,1262,1263,1290,1326,1364,1401,1416,1418,1419,1482,1483,1536,1565,1594,1623,1625,1626,1679,1708,1737,1766],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/crypto/des/const.go","Base":7687,"Size":4556,"Lines":[0,55,109,159,160,229,283,353,365,366,433,468,500,532,564,595,627,659,691,722,724,725,804,837,870,901,932,964,996,1028,1060,1092,1124,1126,1127,1204,1213,1247,1279,1312,1345,1378,1404,1430,1432,1433,1479,1515,1546,1576,1606,1637,1639,1640,1686,1710,1742,1774,1806,1838,1868,1900,1932,1965,1967,1968,2045,2065,2097,2130,2163,2196,2226,2255,2286,2288,2289,2336,2371,2401,2413,2416,2474,2532,2590,2648,2652,2664,2667,2725,2783,2841,2899,2903,2915,2918,2976,3034,3092,3150,3154,3166,3169,3227,3285,3343,3401,3405,3417,3420,3478,3536,3594,3652,3656,3668,3671,3729,3787,3845,3903,3907,3919,3922,3980,4038,4096,4154,4158,4170,4173,4231,4289,4347,4405,4409,4411,4412,4480],"Infos":null}]}
 