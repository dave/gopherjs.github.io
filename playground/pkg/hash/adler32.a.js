p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����hash/adler32adler32hash��package adler32
import hash "hash"
func @"".Checksum(@"".data []byte) (? uint32)
func @"".New() (? @"hash".Hash32)
const @"".Size = 0x4
type @"".digest uint32
func (? *@"".digest) @"".BlockSize() (? int)
func (? *@"".digest) @"".Reset() ()
func (? *@"".digest) @"".Size() (? int)
func (? *@"".digest) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".digest) @"".Sum32() (? uint32)
func (? *@"".digest) @"".Write(@"".p []byte) (@"".nn int, @"".err error)
import io "io"
type @"hash".Hash32 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum32() (? uint32); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["hash"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BTB=$pkg.digest=$newType(4,$kindUint32,"adler32.digest","digest","hash/adler32",null);��F.methods=[{prop:"BlockSize",name:"BlockSize",pkg:"",type:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",type:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",type:$funcType([G],[G],false)},{prop:"Sum32",name:"Sum32",pkg:"",type:$funcType([],[$Uint32],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([G],[$Int,$error],false)}];hash/adler32.digesthash/adler32.digest!hash/adler32:*hash/adler32.digesthash/adler32:[]byte FF=$ptrType(B);!hash/adler32:*hash/adler32.digesthash/adler32.digest GG=$sliceType($Uint8);hash/adler32:[]byte (*hash/adler32.digest).ResetO$ptrType(B).prototype.Reset=function(){var a;  �a=this;  a.$set(1);    };hash/adler32.digesthash/adler32.digest hash/adler32.NewC\C=$pkg.New=function(){var a;  la=$newDataPointer(0,F);  ~a.Reset();  �return a;    };hash/adler32.Newhash/adler32.Newhash/adler32.digest!hash/adler32:*hash/adler32.digest (*hash/adler32.digest).SizeM$ptrType(B).prototype.Size=function(){var a;  �a=this;  �return 4;    };hash/adler32.digesthash/adler32.digest  (*hash/adler32.digest).BlockSizeR$ptrType(B).prototype.BlockSize=function(){var a;  �a=this;  �return 1;    };hash/adler32.digesthash/adler32.digest hash/adler32.updateD�dD=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;  ?c=(((a&65535)>>>0)>>>0);d=((a>>>16>>>0)>>>0);e=c;f=d;  jwhile(b.$length>0){  }  �g=G.nil;  �    if(b.$length>5552){  �h=$subslice(b,0,5552);i=$subslice(b,5552);b=h;g=i;    }  �j=b;k=0;while(k<j.$length){l=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  �e=e+((l>>>0))>>>0;  �f=f+(e)>>>0;    k++;}  �e=(m=e%(65521),m===m?m:$throwRuntimeError("integer divide by zero"));  	f=(n=f%(65521),n===n?n:$throwRuntimeError("integer divide by zero"));  b=g;    }  return((((f<<16>>>0)|e)>>>0)>>>0);    };hash/adler32.updatehash/adler32.updatehash/adler32:[]byte (*hash/adler32.digest).Write��$ptrType(B).prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f;  Cd=this;  ud.$set(D(d.$get(),a));  �    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };hash/adler32.digesthash/adler32.digesthash/adler32.update (*hash/adler32.digest).Sum32Z$ptrType(B).prototype.Sum32=function(){var a;  �a=this;  �return(a.$get()>>>0);    };hash/adler32.digesthash/adler32.digest (*hash/adler32.digest).Sum��$ptrType(B).prototype.Sum=function(a){var b,c;  �b=this;   c=(b.$get()>>>0);  return $append(a,((c>>>24>>>0)<<24>>>24),((c>>>16>>>0)<<24>>>24),((c>>>8>>>0)<<24>>>24),(c<<24>>>24));    };hash/adler32.digesthash/adler32.digest hash/adler32.ChecksumE;E=$pkg.Checksum=function(a){  �return(D(1,a)>>>0);    };hash/adler32.Checksumhash/adler32.Checksumhash/adler32.update ��{"Base":1998,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/hash/adler32/adler32.go","Base":1,"Size":1996,"Lines":[0,55,109,159,160,213,216,246,310,377,444,501,544,560,561,575,576,584,638,651,687,740,793,806,808,809,855,870,871,930,982,1001,1002,1038,1039,1105,1130,1148,1159,1169,1171,1172,1216,1217,1263,1264,1300,1341,1384,1402,1417,1438,1467,1471,1495,1514,1526,1530,1542,1554,1562,1565,1593,1595,1596,1651,1671,1691,1693,1694,1748,1749,1790,1807,1873,1875,1876,1927],"Infos":null}]}
 