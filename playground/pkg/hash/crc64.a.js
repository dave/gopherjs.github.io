����Archive�� 	
ImportPath GcData
 Dependencies�� Imports�� Declarations�� Tests�� FileSet
 BlockingInit Minified   ��[]string��   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����
hash/crc64��package crc64
import hash "hash"
func @"".Checksum(@"".data []byte, @"".tab *@"".Table) (? uint64)
const @"".ECMA = -0x3693a86a2878f0be
const @"".ISO = -0x2800000000000000
func @"".MakeTable(@"".poly uint64) (? *@"".Table)
func @"".New(@"".tab *@"".Table) (? @"hash".Hash64)
const @"".Size = 0x8
type @"".Table [256]uint64
func @"".Update(@"".crc uint64, @"".tab *@"".Table, @"".p []byte) (? uint64)
type @"".digest struct { @"".crc uint64; @"".tab *@"".Table }
func (? *@"".digest) @"".BlockSize() (? int)
func (? *@"".digest) @"".Reset() ()
func (? *@"".digest) @"".Size() (? int)
func (? *@"".digest) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".digest) @"".Sum64() (? uint64)
func (? *@"".digest) @"".Write(@"".p []byte) (@"".n int, @"".err error)
import io "io"
type @"hash".Hash64 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum64() (? uint64); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciohashhashA BOB=$pkg.Table=$newType(2048,$kindArray,"crc64.Table","Table","hash/crc64",null);B.init($Uint64,256);Table D��D=$pkg.digest=$newType(0,$kindStruct,"crc64.digest","digest","hash/crc64",function(crc_,tab_){this.$val=this;this.crc=crc_!==undefined?crc_:new $Uint64(0,0);this.tab=tab_!==undefined?tab_:($ptrType(B)).nil;});��($ptrType(D)).methods=[["BlockSize","BlockSize","",$funcType([],[$Int],false),-1],["Reset","Reset","",$funcType([],[],false),-1],["Size","Size","",$funcType([],[$Int],false),-1],["Sum","Sum","",$funcType([($sliceType($Uint8))],[($sliceType($Uint8))],false),-1],["Sum64","Sum64","",$funcType([],[$Uint64],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];D.init([["crc","crc","hash/crc64",$Uint64,""],["tab","tab","hash/crc64",($ptrType(B)),""]]);digesthash/crc64:Table hash/crc64.MakeTableC��C=$pkg.MakeTable=function(a){var b,c,d,e,f,g;  Bb=B.zero();  S  Wc=0;while(c<256){  pd=new $Uint64(0,c);  �  �e=0;while(e<8){  �    if((f=new $Uint64(d.$high&0,(d.$low&1)>>>0),(f.$high===0&&f.$low===1))){  �d=(g=$shiftRightUint64(d,1),new $Uint64(g.$high^a.$high,(g.$low^a.$low)>>>0));    }else{  �d=$shiftRightUint64(d,(1));    }      �  �e=e+(1)>>0;}  �b.nilCheck,(c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=d;      h  hc=c+(1)>>0;}  �return b;    };	MakeTablehash/crc64:Table hash/crc64.NewEHE=$pkg.New=function(a){  
return new D.Ptr(new $Uint64(0,0),a);    };Newhash/crc64:digest (*hash/crc64.digest).Size}D.Ptr.prototype.Size=function(){var a;  *a=this;  Breturn 8;    };D.prototype.Size=function(){return this.$val.Size();};digesthash/crc64:digest (*hash/crc64.digest).BlockSize��D.Ptr.prototype.BlockSize=function(){var a;  Wa=this;  treturn 1;    };D.prototype.BlockSize=function(){return this.$val.BlockSize();};digesthash/crc64:digest (*hash/crc64.digest).Reset��D.Ptr.prototype.Reset=function(){var a;  �a=this;  �a.crc=new $Uint64(0,0);    };D.prototype.Reset=function(){return this.$val.Reset();};digesthash/crc64:digest hash/crc64.updateF��F=function(a,b,c){var d,e,f,g,h,i;  �a=new $Uint64(~a.$high,~a.$low>>>0);  �d=c;e=0;while(e<d.$length){f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  a=(g=(h=((a.$low<<24>>>24)^f)<<24>>>24,(b.nilCheck,((h<0||h>=b.length)?$throwRuntimeError("index out of range"):b[h]))),i=$shiftRightUint64(a,8),new $Uint64(g.$high^i.$high,(g.$low^i.$low)>>>0));    e++;}  ,return new $Uint64(~a.$high,~a.$low>>>0);    };update hash/crc64.UpdateG:G=$pkg.Update=function(a,b,c){  �return F(a,b,c);    };Updatehash/crc64:update (*hash/crc64.digest).Write��D.Ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f;  �d=this;  
d.crc=F(d.crc,d.tab,a);  +    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };D.prototype.Write=function(a){return this.$val.Write(a);};digesthash/crc64:digesthash/crc64:update (*hash/crc64.digest).Sum64��D.Ptr.prototype.Sum64=function(){var a;  Ga=this;  creturn a.crc;    };D.prototype.Sum64=function(){return this.$val.Sum64();};digesthash/crc64:digest (*hash/crc64.digest).Sum��D.Ptr.prototype.Sum=function(a){var b,c;  yb=this;  �c=b.Sum64();  �return $append(a,($shiftRightUint64(c,56).$low<<24>>>24),($shiftRightUint64(c,48).$low<<24>>>24),($shiftRightUint64(c,40).$low<<24>>>24),($shiftRightUint64(c,32).$low<<24>>>24),($shiftRightUint64(c,24).$low<<24>>>24),($shiftRightUint64(c,16).$low<<24>>>24),($shiftRightUint64(c,8).$low<<24>>>24),(c.$low<<24>>>24));    };D.prototype.Sum=function(a){return this.$val.Sum(a);};digesthash/crc64:digest hash/crc64.ChecksumHIH=$pkg.Checksum=function(a,b){  �return F(new $Uint64(0,0),b,a);    };Checksumhash/crc64:update � {"Base":2262,"Files":[{"Name":"/usr/local/go/src/hash/crc64/crc64.go","Base":1,"Size":2260,"Lines":[0,55,109,159,160,235,309,325,339,340,354,355,398,413,414,441,449,511,537,538,584,611,613,614,697,720,721,795,832,849,877,896,923,942,970,982,996,1001,1005,1018,1021,1031,1033,1034,1093,1114,1126,1138,1140,1141,1204,1254,1314,1315,1359,1360,1406,1407,1446,1447,1502,1514,1537,1575,1578,1591,1593,1594,1660,1715,1743,1745,1746,1800,1833,1853,1855,1856,1905,1906,1947,1963,2081,2083,2084,2132,2182],"Infos":null}]}
 