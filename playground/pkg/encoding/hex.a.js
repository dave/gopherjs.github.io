p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �,d��encoding/hexhexbyteserrorsfmtio�Vpackage hex
import bytes "bytes"
import errors "errors"
import fmt "fmt"
import io "io"
func @"".Decode(@"".dst []byte, @"".src []byte) (? int, ? error)
func @"".DecodeString(@"".s string) (? []byte, ? error)
func @"".DecodedLen(@"".x int) (? int)
func @"".Dump(@"".data []byte) (? string)
func @"".Dumper(@"".w @"io".Writer) (? @"io".WriteCloser)
func @"".Encode(@"".dst []byte, @"".src []byte) (? int)
func @"".EncodeToString(@"".src []byte) (? string)
func @"".EncodedLen(@"".n int) (? int)
var @"".ErrLength error
type @"".InvalidByteError byte
func (? @"".InvalidByteError) @"".Error() (? string)
func (? *@"".InvalidByteError) @"".Error() (? string)
type @"".dumper struct { @"".w @"io".Writer; @"".rightChars [18]byte; @"".buf [14]byte; @"".used int; @"".n uint }
func (? *@"".dumper) @"".Close() (@"".err error)
func (? *@"".dumper) @"".Write(@"".data []byte) (@"".n int, @"".err error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["bytes"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["errors"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["fmt"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["io"];E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} GmG=$pkg.InvalidByteError=$newType(1,$kindUint8,"hex.InvalidByteError","InvalidByteError","encoding/hex",null);��G.methods=[{prop:"Error",name:"Error",pkg:"",type:$funcType([],[$String],false)}];U.methods=[{prop:"Error",name:"Error",pkg:"",type:$funcType([],[$String],false)}];encoding/hex.InvalidByteErrorencoding/hex.InvalidByteError+encoding/hex:*encoding/hex.InvalidByteError O�JO=$pkg.dumper=$newType(0,$kindStruct,"hex.dumper","dumper","encoding/hex",function(w_,rightChars_,buf_,used_,n_){this.$val=this;this.w=w_!==undefined?w_:$ifaceNil;this.rightChars=rightChars_!==undefined?rightChars_:S.zero();this.buf=buf_!==undefined?buf_:T.zero();this.used=used_!==undefined?used_:0;this.n=n_!==undefined?n_:0;});��V.methods=[{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([R],[$Int,$error],false)}];�=O.init([{prop:"w",name:"w",pkg:"encoding/hex",type:D.Writer,tag:""},{prop:"rightChars",name:"rightChars",pkg:"encoding/hex",type:S,tag:""},{prop:"buf",name:"buf",pkg:"encoding/hex",type:T,tag:""},{prop:"used",name:"used",pkg:"encoding/hex",type:$Int,tag:""},{prop:"n",name:"n",pkg:"encoding/hex",type:$Uint,tag:""}]);encoding/hex.dumperencoding/hex.dumper!encoding/hex:*encoding/hex.dumperencoding/hex:[14]byteencoding/hex:[18]byteencoding/hex:[]byte	io.Writer QQ=$sliceType($emptyInterface);encoding/hex:[]interface{} RR=$sliceType($Uint8);encoding/hex:[]byte SS=$arrayType($Uint8,18);encoding/hex:[18]byte TT=$arrayType($Uint8,14);encoding/hex:[14]byte UU=$ptrType(G);+encoding/hex:*encoding/hex.InvalidByteErrorencoding/hex.InvalidByteError VV=$ptrType(O);!encoding/hex:*encoding/hex.dumperencoding/hex.dumper encoding/hex.ErrLength A    $pkg.ErrLength=B.New("encoding/hex: odd length hex string");encoding/hex.ErrLength
errors.New encoding/hex.EncodedLenE8E=$pkg.EncodedLen=function(a){  �return a*2>>0;    };encoding/hex.EncodedLenencoding/hex.EncodedLen encoding/hex.EncodeF��F=$pkg.Encode=function(a,b){var c,d,e,f,g,h;  �c=b;d=0;while(d<c.$length){e=d;f=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  �(g=e*2>>0,(g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]="0123456789abcdef".charCodeAt((f>>>4<<24>>>24)));  �(h=(e*2>>0)+1>>0,(h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h]="0123456789abcdef".charCodeAt(((f&15)>>>0)));    d++;}  	return b.$length*2>>0;    };encoding/hex.Encodeencoding/hex.Encode %(encoding/hex.InvalidByteError).Error��G.prototype.Error=function(){var a;  a=this.$val;  >return C.Sprintf("encoding/hex: invalid byte: %#U",new Q([new $Int32((a>>0))]));    };$ptrType(G).prototype.Error=function(){return new G(this.$get()).Error();};encoding/hex.InvalidByteErrorencoding/hex.InvalidByteErrorencoding/hex:[]interface{}fmt.Sprintf encoding/hex.DecodedLenH��H=$pkg.DecodedLen=function(a){var b;  �return(b=a/2,(b===b&&b!==1/0&&b!==-1/0)?b>>0:$throwRuntimeError("integer divide by zero"));    };encoding/hex.DecodedLenencoding/hex.DecodedLen encoding/hex.DecodeI�_I=$pkg.Decode=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;  �    if((c=b.$length%2,c===c?c:$throwRuntimeError("integer divide by zero"))===1){  �return[0,$pkg.ErrLength];    }  �  �d=0;while(d<(e=b.$length/2,(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero"))){  �f=J((g=d*2>>0,((g<0||g>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+g])));h=f[0];i=f[1];      if(!i){   return[0,new G(((j=d*2>>0,((j<0||j>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+j]))<<24>>>24))];    }  Kk=J((l=(d*2>>0)+1>>0,((l<0||l>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+l])));m=k[0];i=k[1];  n    if(!i){  zreturn[0,new G(((n=(d*2>>0)+1>>0,((n<0||n>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+n]))<<24>>>24))];    }  �(d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]=(((h<<4<<24>>>24))|m)>>>0;      �  �d=d+(1)>>0;}  �return[(o=b.$length/2,(o===o&&o!==1/0&&o!==-1/0)?o>>0:$throwRuntimeError("integer divide by zero")),$ifaceNil];    };encoding/hex.Decodeencoding/hex.Decodeencoding/hex.ErrLengthencoding/hex.InvalidByteErrorencoding/hex.fromHexChar encoding/hex.fromHexCharJ�
J=function(a){  R  \if(48<=a&&a<=57){  yreturn[a-48<<24>>>24,true];      �}else if(97<=a&&a<=102){  �return[(a-97<<24>>>24)+10<<24>>>24,true];      �}else if(65<=a&&a<=70){  �return[(a-65<<24>>>24)+10<<24>>>24,true];    }  return[0,false];    };encoding/hex.fromHexCharencoding/hex.fromHexChar encoding/hex.EncodeToStringK{K=$pkg.EncodeToString=function(a){var b;  {b=$makeSlice(R,E(a.$length));  �F(b,a);  �return $bytesToString(b);    };encoding/hex.EncodeToStringencoding/hex.Encodeencoding/hex.EncodeToStringencoding/hex.EncodedLenencoding/hex:[]byte encoding/hex.DecodeStringL��L=$pkg.DecodeString=function(a){var b,c,d,e;  	Hb=new R($stringToBytes(a));  	Zc=$makeSlice(R,H(b.$length));  	�d=I(c,b);e=d[1];  	�    if(!($interfaceIsEqual(e,$ifaceNil))){  	�return[R.nil,e];    }  	�return[c,$ifaceNil];    };encoding/hex.DecodeStringencoding/hex.Decodeencoding/hex.DecodeStringencoding/hex.DecodedLenencoding/hex:[]byte encoding/hex.DumpM��M=$pkg.Dump=function(a){var b,c;  
�  
�b=$clone(new A.Buffer.ptr(),A.Buffer);  
�c=N(b);  
�c.Write(a);  
�c.Close();  
�return $bytesToString(b.Bytes());    };encoding/hex.Dumpbytes.Bufferencoding/hex.Dumpencoding/hex.Dumper encoding/hex.DumperNPN=$pkg.Dumper=function(a){  �return new O.ptr(a,S.zero(),T.zero(),0,0);    };encoding/hex.Dumperencoding/hex.Dumperencoding/hex.dumperencoding/hex:[14]byteencoding/hex:[18]byte encoding/hex.toCharPRP=function(a){  �    if(a<32||a>126){  �return 46;    }  �return a;    };encoding/hex.toCharencoding/hex.toChar (*encoding/hex.dumper).Write��O.ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m;   d=this;  �e=a;f=0;while(f<e.$length){g=f;      if(d.used===0){  ld.buf[0]=((d.n>>>24>>>0)<<24>>>24);  �d.buf[1]=((d.n>>>16>>>0)<<24>>>24);  �d.buf[2]=((d.n>>>8>>>0)<<24>>>24);  �d.buf[3]=(d.n<<24>>>24);  �F($subslice(new R(d.buf),4),$subslice(new R(d.buf),0,4));  �d.buf[12]=32;  d.buf[13]=32;  #h=d.w.Write($subslice(new R(d.buf),4));c=h[1];  D    if(!($interfaceIsEqual(c,$ifaceNil))){  Xreturn[b,c];    }    }  jF(new R(d.buf),$subslice(a,g,(g+1>>0)));  �d.buf[2]=32;  �i=3;  �    if(d.used===7){  �d.buf[3]=32;   i=4;        }else if(d.used===15){  �d.buf[3]=32;  �d.buf[4]=124;  �i=5;    }  �j=d.w.Write($subslice(new R(d.buf),0,i));c=j[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �  �b=b+(1)>>0;  �(k=d.rightChars,l=d.used,(l<0||l>=k.length)?$throwRuntimeError("index out of range"):k[l]=P(((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g])));    d.used=d.used+(1)>>0;  *  *d.n=d.n+(1)>>>0;  2    if(d.used===16){  Gd.rightChars[16]=124;  ad.rightChars[17]=10;  |m=d.w.Write(new R(d.rightChars));c=m[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �d.used=0;    }    f++;}  �return[b,c];    };O.prototype.Write=function(a){return this.$val.Write(a);};encoding/hex.dumperencoding/hex.Encodeencoding/hex.dumperencoding/hex.toCharencoding/hex:[]byte (*encoding/hex.dumper).Close�:O.ptr.prototype.Close=function(){var a=$ifaceNil,b,c,d,e,f,g,h,i;  �b=this;  K    if(b.used===0){  ^return a;    }  ib.buf[0]=32;  yb.buf[1]=32;  �b.buf[2]=32;  �b.buf[3]=32;  �b.buf[4]=124;  �c=b.used;  �while(b.used<16){  �d=3;  �    if(b.used===7){  �d=4;        }else if(b.used===15){   d=5;    }  ,e=b.w.Write($subslice(new R(b.buf),0,d));a=e[1];  L    if(!($interfaceIsEqual(a,$ifaceNil))){  _return a;    }  l  lb.used=b.used+(1)>>0;    }  y(f=b.rightChars,(c<0||c>=f.length)?$throwRuntimeError("index out of range"):f[c]=124);  �(g=b.rightChars,h=c+1>>0,(h<0||h>=g.length)?$throwRuntimeError("index out of range"):g[h]=10);  �i=b.w.Write($subslice(new R(b.rightChars),0,(c+2>>0)));a=i[1];  �return a;    };O.prototype.Close=function(){return this.$val.Close();};encoding/hex.dumperencoding/hex.dumperencoding/hex:[]byte ��{"Base":5099,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/encoding/hex/hex.go","Base":1,"Size":5097,"Lines":[0,55,109,159,160,221,233,234,243,252,262,269,275,277,278,314,315,382,426,427,475,533,608,651,686,711,739,771,774,775,796,798,799,855,921,922,1013,1040,1041,1084,1148,1150,1151,1195,1196,1272,1307,1310,1393,1437,1459,1481,1484,1485,1520,1553,1564,1604,1608,1643,1654,1696,1700,1724,1727,1728,1754,1756,1757,1832,1872,1882,1910,1933,1961,1989,2017,2045,2048,2049,2066,2068,2069,2128,2169,2212,2230,2250,2252,2253,2328,2374,2392,2435,2463,2480,2498,2501,2518,2520,2521,2601,2676,2708,2730,2754,2774,2790,2818,2820,2821,2899,2978,2987,3029,3051,3053,3054,3075,3097,3118,3139,3195,3238,3240,3241,3268,3292,3305,3308,3318,3320,3321,3378,3406,3489,3571,3594,3613,3667,3688,3718,3748,3777,3801,3833,3852,3871,3904,3923,3934,3939,3943,3975,3992,4001,4020,4074,4092,4101,4128,4184,4220,4238,4256,4265,4269,4301,4319,4329,4333,4339,4380,4391,4399,4419,4445,4472,4511,4530,4541,4546,4560,4564,4567,4575,4577,4578,4617,4681,4699,4708,4711,4727,4743,4759,4775,4791,4809,4828,4837,4856,4865,4892,4901,4905,4937,4955,4965,4969,4980,4983,5011,5042,5087,5095],"Infos":null}]}
 