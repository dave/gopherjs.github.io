����Archive�� 	
ImportPath GcData
 Dependencies�� Imports�� Declarations�� Tests�� FileSet
 BlockingInit Minified   ��[]string��   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����encoding/base64�.,package base64
import testing "testing"
import bytes "bytes"
import io "io"
import strconv "strconv"
import strings "strings"
type @"".CorruptInputError int64
func (? @"".CorruptInputError) @"".Error() (? string)
func (? *@"".CorruptInputError) @"".Error() (? string)
type @"".Encoding struct { @"".encode string; @"".decodeMap [256]byte }
func (? *@"".Encoding) @"".Decode(@"".dst []byte, @"".src []byte) (@"".n int, @"".err error)
func (? *@"".Encoding) @"".DecodeString(@"".s string) (? []byte, ? error)
func (? *@"".Encoding) @"".DecodedLen(@"".n int) (? int)
func (? *@"".Encoding) @"".Encode(@"".dst []byte, @"".src []byte) ()
func (? *@"".Encoding) @"".EncodeToString(@"".src []byte) (? string)
func (? *@"".Encoding) @"".EncodedLen(@"".n int) (? int)
func (? *@"".Encoding) @"".decode(@"".dst []byte, @"".src []byte) (@"".n int, @"".end bool, @"".err error)
func @"".NewDecoder(@"".enc *@"".Encoding, @"".r @"io".Reader) (? @"io".Reader)
func @"".NewEncoder(@"".enc *@"".Encoding, @"".w @"io".Writer) (? @"io".WriteCloser)
func @"".NewEncoding(@"".encoder string) (? *@"".Encoding)
var @"".StdEncoding *@"".Encoding
func @"".TestDecoderIssue3577(@"".t *@"testing".T) ()
var @"".URLEncoding *@"".Encoding
type @"".decoder struct { @"".err error; @"".enc *@"".Encoding; @"".r @"io".Reader; @"".end bool; @"".buf [1024]byte; @"".nbuf int; @"".out []byte; @"".outbuf [768]byte }
func (? *@"".decoder) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".encoder struct { @"".err error; @"".enc *@"".Encoding; @"".w @"io".Writer; @"".buf [3]byte; @"".nbuf int; @"".out [1024]byte }
func (? *@"".encoder) @"".Close() (? error)
func (? *@"".encoder) @"".Write(@"".p []byte) (@"".n int, @"".err error)
type @"".newlineFilteringReader struct { @"".wrapped @"io".Reader }
func (? *@"".newlineFilteringReader) @"".Read(@"".p []byte) (? int, ? error)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"testing".T struct { ? @"testing".common; @"testing".name string; @"testing".startParallel chan bool }
func (? *@"testing".T) @"testing".Parallel() ()
func (? *@"testing".T) @"testing".report() ()
import nosync "github.com/gopherjs/gopherjs/nosync"
import time "time"
type @"testing".common struct { @"testing".mu @"github.com/gopherjs/gopherjs/nosync".RWMutex; @"testing".output []byte; @"testing".failed bool; @"testing".skipped bool; @"testing".finished bool; @"testing".start @"time".Time; @"testing".duration @"time".Duration; @"testing".self interface {  }; @"testing".signal chan interface {  } }
func (? *@"testing".common) @"testing".Error(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Errorf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fail() ()
func (? *@"testing".common) @"testing".FailNow() ()
func (? *@"testing".common) @"testing".Failed() (? bool)
func (? *@"testing".common) @"testing".Fatal(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Fatalf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Log(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Logf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skip(@"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".SkipNow() ()
func (? *@"testing".common) @"testing".Skipf(@"testing".format string, @"testing".args ...interface {  }) ()
func (? *@"testing".common) @"testing".Skipped() (? bool)
func (? *@"testing".common) @"testing".log(@"testing".s string) ()
func (? *@"testing".common) @"testing".private() ()
func (? *@"testing".common) @"testing".skip() ()
type @"github.com/gopherjs/gopherjs/nosync".RWMutex struct { @"github.com/gopherjs/gopherjs/nosync".writeLocked bool; @"github.com/gopherjs/gopherjs/nosync".readLockCounter int }
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RLock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".RUnlock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".RWMutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesmathstrconvstringssyscall#github.com/gopherjs/gopherjs/nosynctimeosreflectfmtsortflagruntime/pproftestingtestingA bytesB ioC strconvD stringsE G�G=$pkg.Encoding=$newType(0,$kindStruct,"base64.Encoding","Encoding","encoding/base64",function(encode_,decodeMap_){this.$val=this;this.encode=encode_!==undefined?encode_:"";this.decodeMap=decodeMap_!==undefined?decodeMap_:($arrayType($Uint8,256)).zero();});�($ptrType(G)).methods=[["Decode","Decode","",$funcType([($sliceType($Uint8)),($sliceType($Uint8))],[$Int,$error],false),-1],["DecodeString","DecodeString","",$funcType([$String],[($sliceType($Uint8)),$error],false),-1],["DecodedLen","DecodedLen","",$funcType([$Int],[$Int],false),-1],["Encode","Encode","",$funcType([($sliceType($Uint8)),($sliceType($Uint8))],[],false),-1],["EncodeToString","EncodeToString","",$funcType([($sliceType($Uint8))],[$String],false),-1],["EncodedLen","EncodedLen","",$funcType([$Int],[$Int],false),-1],["decode","decode","encoding/base64",$funcType([($sliceType($Uint8)),($sliceType($Uint8))],[$Int,$Bool,$error],false),-1]];G.init([["encode","encode","encoding/base64",$String,""],["decodeMap","decodeMap","encoding/base64",($arrayType($Uint8,256)),""]]);Encoding J��J=$pkg.encoder=$newType(0,$kindStruct,"base64.encoder","encoder","encoding/base64",function(err_,enc_,w_,buf_,nbuf_,out_){this.$val=this;this.err=err_!==undefined?err_:$ifaceNil;this.enc=enc_!==undefined?enc_:($ptrType(G)).nil;this.w=w_!==undefined?w_:$ifaceNil;this.buf=buf_!==undefined?buf_:($arrayType($Uint8,3)).zero();this.nbuf=nbuf_!==undefined?nbuf_:0;this.out=out_!==undefined?out_:($arrayType($Uint8,1024)).zero();});��($ptrType(J)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];J.init([["err","err","encoding/base64",$error,""],["enc","enc","encoding/base64",($ptrType(G)),""],["w","w","encoding/base64",C.Writer,""],["buf","buf","encoding/base64",($arrayType($Uint8,3)),""],["nbuf","nbuf","encoding/base64",$Int,""],["out","out","encoding/base64",($arrayType($Uint8,1024)),""]]);encoderencoding/base64:Encoding	io:Writer LvL=$pkg.CorruptInputError=$newType(8,$kindInt64,"base64.CorruptInputError","CorruptInputError","encoding/base64",null);��L.methods=[["Error","Error","",$funcType([],[$String],false),-1]];($ptrType(L)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];CorruptInputError M�M=$pkg.decoder=$newType(0,$kindStruct,"base64.decoder","decoder","encoding/base64",function(err_,enc_,r_,end_,buf_,nbuf_,out_,outbuf_){this.$val=this;this.err=err_!==undefined?err_:$ifaceNil;this.enc=enc_!==undefined?enc_:($ptrType(G)).nil;this.r=r_!==undefined?r_:$ifaceNil;this.end=end_!==undefined?end_:false;this.buf=buf_!==undefined?buf_:($arrayType($Uint8,1024)).zero();this.nbuf=nbuf_!==undefined?nbuf_:0;this.out=out_!==undefined?out_:($sliceType($Uint8)).nil;this.outbuf=outbuf_!==undefined?outbuf_:($arrayType($Uint8,768)).zero();});��($ptrType(M)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];M.init([["err","err","encoding/base64",$error,""],["enc","enc","encoding/base64",($ptrType(G)),""],["r","r","encoding/base64",C.Reader,""],["end","end","encoding/base64",$Bool,""],["buf","buf","encoding/base64",($arrayType($Uint8,1024)),""],["nbuf","nbuf","encoding/base64",$Int,""],["out","out","encoding/base64",($sliceType($Uint8)),""],["outbuf","outbuf","encoding/base64",($arrayType($Uint8,768)),""]]);decoderencoding/base64:Encoding	io:Reader N��N=$pkg.newlineFilteringReader=$newType(0,$kindStruct,"base64.newlineFilteringReader","newlineFilteringReader","encoding/base64",function(wrapped_){this.$val=this;this.wrapped=wrapped_!==undefined?wrapped_:$ifaceNil;});��($ptrType(N)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];N.init([["wrapped","wrapped","encoding/base64",C.Reader,""]]);newlineFilteringReader	io:Reader StdEncoding URLEncoding IremoveNewlinesMapper \    $pkg.StdEncoding=H("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");encoding/base64:NewEncodingencoding/base64:StdEncoding \    $pkg.URLEncoding=H("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_");encoding/base64:NewEncodingencoding/base64:URLEncoding _    I=(function(a){  �    if((a===13)||(a===10)){  �return-1;    }  �return a;    });removeNewlinesMapper$encoding/base64:removeNewlinesMapper $encoding/base64.TestDecoderIssue3577FhF=$pkg.TestDecoderIssue3577=function(a){   aa.common.Skip(new($sliceType($emptyInterface))([]));    };TestDecoderIssue3577 encoding/base64.NewEncodingH��H=$pkg.NewEncoding=function(a){var b,c,d,e,f,g;  }b=new G.Ptr();  �b.encode=a;  �  �c=0;while(c<256){  �(d=b.decodeMap,(c<0||c>=d.length)?$throwRuntimeError("index out of range"):d[c]=255);      �  �c=c+(1)>>0;}  �  �e=0;while(e<a.length){  (f=b.decodeMap,g=a.charCodeAt(e),(g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]=(e<<24>>>24));        e=e+(1)>>0;}  5return b;    };NewEncodingencoding/base64:Encoding "(*encoding/base64.Encoding).Encode�	�G.Ptr.prototype.Encode=function(a,b){var c,d,e,f,g,h,i,j,k,l;  �c=this;      if(b.$length===0){  !return;    }  -while(b.$length>0){  B  Fd=0;e=0;f=0;g=0;h=d;i=e;j=f;k=g;  �l=b.$length;  �if(l===2){  	
j=(j|(((((((1<0||1>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])<<2<<24>>>24))&63)>>>0)))>>>0;  	(i=((1<0||1>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>4<<24>>>24;  	<  	Ui=(i|(((((((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<4<<24>>>24))&63)>>>0)))>>>0;  	sh=((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>2<<24>>>24;      	J}else if(l===1){  	Ui=(i|(((((((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<4<<24>>>24))&63)>>>0)))>>>0;  	sh=((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>2<<24>>>24;    }else{  �k=(((2<0||2>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])&63)>>>0;  �j=((2<0||2>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>6<<24>>>24;  �  	
j=(j|(((((((1<0||1>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])<<2<<24>>>24))&63)>>>0)))>>>0;  	(i=((1<0||1>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>4<<24>>>24;  	<  	Ui=(i|(((((((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<4<<24>>>24))&63)>>>0)))>>>0;  	sh=((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>2<<24>>>24;    }  	�(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=c.encode.charCodeAt(h);  	�(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=c.encode.charCodeAt(i);  	�(2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=c.encode.charCodeAt(j);  
(3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=c.encode.charCodeAt(k);  
B    if(b.$length<3){  
W(3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=61;  
g    if(b.$length<2){  
}(2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=61;    }  
�break;    }  
�b=$subslice(b,3);  
�a=$subslice(a,4);    }    };G.prototype.Encode=function(a,b){return this.$val.Encode(a,b);};Encodingencoding/base64:Encoding *(*encoding/base64.Encoding).EncodeToString��G.Ptr.prototype.EncodeToString=function(a){var b,c;  
�b=this;  3c=($sliceType($Uint8)).make(b.EncodedLen(a.$length));  bb.Encode(c,a);  xreturn $bytesToString(c);    };G.prototype.EncodeToString=function(a){return this.$val.EncodeToString(a);};Encodingencoding/base64:Encoding  (*encoding/base64.encoder).Write�/J.Ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  ^d=this;  �    if(!($interfaceIsEqual(d.err,$ifaceNil))){  �    e=0;f=d.err;b=e;c=f;return[b,c];    }  �    if(d.nbuf>0){  �  �g=0;  �  �g=0;while(g<a.$length&&d.nbuf<3){  (h=d.buf,i=d.nbuf,(i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]));  1  1d.nbuf=d.nbuf+(1)>>0;        g=g+(1)>>0;}  @b=b+(g)>>0;  Ia=$subslice(a,g);  U    if(d.nbuf<3){  hreturn[b,c];    }  ud.enc.Encode($subslice(new($sliceType($Uint8))(d.out),0),$subslice(new($sliceType($Uint8))(d.buf),0));  �  �j=d.w.Write($subslice(new($sliceType($Uint8))(d.out),0,4));d.err=j[1];    if(!($interfaceIsEqual(d.err,$ifaceNil))){  �    k=b;l=d.err;b=k;c=l;return[b,c];    }  �d.nbuf=0;    }  while(a.$length>=3){  &m=768;  A    if(m>a.$length){  Um=a.$length;  dm=m-((n=m%3,n===n?n:$throwRuntimeError("integer divide by zero")))>>0;    }  wd.enc.Encode($subslice(new($sliceType($Uint8))(d.out),0),$subslice(a,0,m));  �  �o=d.w.Write($subslice(new($sliceType($Uint8))(d.out),0,(p=(q=m/3,(q===q&&q!==1/0&&q!==-1/0)?q>>0:$throwRuntimeError("integer divide by zero")),(((p>>>16<<16)*4>>0)+(p<<16>>>16)*4)>>0)));d.err=o[1];    if(!($interfaceIsEqual(d.err,$ifaceNil))){  �    r=b;s=d.err;b=r;c=s;return[b,c];    }  �b=b+(m)>>0;  �a=$subslice(a,m);    }    !t=0;while(t<a.$length){  =(u=d.buf,(t<0||t>=u.length)?$throwRuntimeError("index out of range"):u[t]=((t<0||t>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+t]));      5  5t=t+(1)>>0;}  Qd.nbuf=a.$length;  bb=b+(a.$length)>>0;  oreturn[b,c];    };J.prototype.Write=function(a){return this.$val.Write(a);};encoderencoding/base64:encoder  (*encoding/base64.encoder).Close��J.Ptr.prototype.Close=function(){var a,b;  �a=this;  @    if($interfaceIsEqual(a.err,$ifaceNil)&&a.nbuf>0){  ba.enc.Encode($subslice(new($sliceType($Uint8))(a.out),0),$subslice(new($sliceType($Uint8))(a.buf),0,a.nbuf));  �a.nbuf=0;  �b=a.w.Write($subslice(new($sliceType($Uint8))(a.out),0,4));a.err=b[1];    }  �return a.err;    };J.prototype.Close=function(){return this.$val.Close();};encoderencoding/base64:encoder encoding/base64.NewEncoderK��K=$pkg.NewEncoder=function(a,b){  6return new J.Ptr($ifaceNil,a,b,($arrayType($Uint8,3)).zero(),0,($arrayType($Uint8,1024)).zero());    };
NewEncoderencoding/base64:Encodingencoding/base64:encoder &(*encoding/base64.Encoding).EncodedLen�G.Ptr.prototype.EncodedLen=function(a){var b,c,d;  �b=this;  �return(c=(d=((a+2>>0))/3,(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero")),(((c>>>16<<16)*4>>0)+(c<<16>>>16)*4)>>0);    };G.prototype.EncodedLen=function(a){return this.$val.EncodedLen(a);};Encodingencoding/base64:Encoding )(encoding/base64.CorruptInputError).Error��L.prototype.Error=function(){var a;  ;a=this;  breturn"illegal base64 data at input byte "+D.FormatInt(new $Int64(a.$high,a.$low),10);    };$ptrType(L).prototype.Error=function(){return this.$get().Error();};CorruptInputError!encoding/base64:CorruptInputErrorstrconv:FormatInt "(*encoding/base64.Encoding).decode�
G.Ptr.prototype.decode=function(a,b){var c=0,d=false,e=$ifaceNil,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj;  �f=this;  	g=b.$length;  while(b.$length>0&&!d){  f  jh=($arrayType($Uint8,4)).zero();$copy(h,($arrayType($Uint8,4)).zero(),($arrayType($Uint8,4)));  yi=4;  �j=h;k=0;while(k<4){l=k;  �    if(b.$length===0){  �    m=c;n=false;o=new L(0,((g-b.$length>>0)-l>>0));c=m;d=n;e=o;return[c,d,e];    }  �p=((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0]);  b=$subslice(b,1);      if(p===61){  [q=l;  jif(q===0||q===1){  �    r=c;s=false;t=new L(0,((g-b.$length>>0)-1>>0));c=r;d=s;e=t;return[c,d,e];      �}else if(q===2){      if(b.$length===0){  O    u=c;v=false;w=new L(0,g);c=u;d=v;e=w;return[c,d,e];    }  �    if(!((((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])===61))){  �    x=c;y=false;z=new L(0,((g-b.$length>>0)-1>>0));c=x;d=y;e=z;return[c,d,e];    }  �b=$subslice(b,1);    }      if(b.$length>0){  De=new L(0,(g-b.$length>>0));    }  waa=l;ab=true;i=aa;d=ab;  �break;    }  �(l<0||l>=h.length)?$throwRuntimeError("index out of range"):h[l]=(ac=f.decodeMap,((p<0||p>=ac.length)?$throwRuntimeError("index out of range"):ac[p]));  �    if(((l<0||l>=h.length)?$throwRuntimeError("index out of range"):h[l])===255){  �    ad=c;ae=false;af=new L(0,((g-b.$length>>0)-1>>0));c=ad;d=ae;e=af;return[c,d,e];    }    k++;}  _ag=i;  oif(ag===4){  z(2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=((h[2]<<6<<24>>>24)|h[3])>>>0;  �  �(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((h[1]<<4<<24>>>24)|(h[2]>>>2<<24>>>24))>>>0;  �  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((h[0]<<2<<24>>>24)|(h[1]>>>4<<24>>>24))>>>0;      �}else if(ag===3){  �(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((h[1]<<4<<24>>>24)|(h[2]>>>2<<24>>>24))>>>0;  �  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((h[0]<<2<<24>>>24)|(h[1]>>>4<<24>>>24))>>>0;      �}else if(ag===2){  �(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((h[0]<<2<<24>>>24)|(h[1]>>>4<<24>>>24))>>>0;    }  a=$subslice(a,3);  (c=c+((i-1>>0))>>0;    }  ;    ah=c;ai=d;aj=e;c=ah;d=ai;e=aj;return[c,d,e];    };G.prototype.decode=function(a,b){return this.$val.decode(a,b);};Encodingdecode!encoding/base64:CorruptInputErrorencoding/base64:Encoding "(*encoding/base64.Encoding).Decode��G.Ptr.prototype.Decode=function(a,b){var c=0,d=$ifaceNil,e,f;  �e=this;  �b=B.Map(I,b);  �f=e.decode(a,b);c=f[0];d=f[2];  return[c,d];    };G.prototype.Decode=function(a,b){return this.$val.Decode(a,b);};Encoding	bytes:Mapencoding/base64:Encodingencoding/base64:decode$encoding/base64:removeNewlinesMapper ((*encoding/base64.Encoding).DecodeString�IG.Ptr.prototype.DecodeString=function(a){var b,c,d,e,f;  rb=this;  �a=E.Map(I,a);  �c=($sliceType($Uint8)).make(b.DecodedLen(a.length));  d=b.decode(c,new($sliceType($Uint8))($stringToBytes(a)));e=d[0];f=d[2];  -return[$subslice(c,0,e),f];    };G.prototype.DecodeString=function(a){return this.$val.DecodeString(a);};Encodingencoding/base64:Encodingencoding/base64:decode$encoding/base64:removeNewlinesMapperstrings:Map (*encoding/base64.decoder).Read��M.Ptr.prototype.Read=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab;  5d=this;  f    if(!($interfaceIsEqual(d.err,$ifaceNil))){  z    e=0;f=d.err;b=e;c=f;return[b,c];    }  �    if(d.out.$length>0){  �b=$copySlice(a,d.out);  �d.out=$subslice(d.out,b);  �    g=b;h=$ifaceNil;b=g;c=h;return[b,c];    }  #k=(i=(j=a.$length/3,(j===j&&j!==1/0&&j!==-1/0)?j>>0:$throwRuntimeError("integer divide by zero")),(((i>>>16<<16)*4>>0)+(i<<16>>>16)*4)>>0);  9    if(k<4){  Gk=4;    }  R    if(k>1024){  ik=1024;    }  }l=C.ReadAtLeast(d.r,$subslice(new($sliceType($Uint8))(d.buf),d.nbuf,k),4-d.nbuf>>0);k=l[0];d.err=l[1];  �d.nbuf=d.nbuf+(k)>>0;  �    if(!($interfaceIsEqual(d.err,$ifaceNil))||d.nbuf<4){  �    m=0;n=d.err;b=m;c=n;return[b,c];    }   ?q=(o=(p=d.nbuf/4,(p===p&&p!==1/0&&p!==-1/0)?p>>0:$throwRuntimeError("integer divide by zero")),(((o>>>16<<16)*4>>0)+(o<<16>>>16)*4)>>0);   Ut=(r=(s=d.nbuf/4,(s===s&&s!==1/0&&s!==-1/0)?s>>0:$throwRuntimeError("integer divide by zero")),(((r>>>16<<16)*3>>0)+(r<<16>>>16)*3)>>0);   k    if(t>a.$length){   ~u=d.enc.decode($subslice(new($sliceType($Uint8))(d.outbuf),0),$subslice(new($sliceType($Uint8))(d.buf),0,q));t=u[0];d.end=u[1];d.err=u[2];   �d.out=$subslice(new($sliceType($Uint8))(d.outbuf),0,t);   �b=$copySlice(a,d.out);   �d.out=$subslice(d.out,b);    }else{  !v=d.enc.decode(a,$subslice(new($sliceType($Uint8))(d.buf),0,q));b=v[0];d.end=v[1];d.err=v[2];    }  !:d.nbuf=d.nbuf-(q)>>0;  !H  !Lw=0;while(w<d.nbuf){  !h(z=d.buf,(w<0||w>=z.length)?$throwRuntimeError("index out of range"):z[w]=(x=d.buf,y=w+q>>0,((y<0||y>=x.length)?$throwRuntimeError("index out of range"):x[y])));      !`  !`w=w+(1)>>0;}  !�    if($interfaceIsEqual(d.err,$ifaceNil)){  !�d.err=c;    }  !�    aa=b;ab=d.err;b=aa;c=ab;return[b,c];    };M.prototype.Read=function(a){return this.$val.Read(a);};decoderencoding/base64:decodeencoding/base64:decoderio:ReadAtLeast .(*encoding/base64.newlineFilteringReader).Read�zN.Ptr.prototype.Read=function(a){var b,c,d,e,f,g,h,i,j,k;  !�b=this;  "6c=b.wrapped.Read(a);d=c[0];e=c[1];  "Swhile(d>0){  "af=0;  "og=$subslice(a,0,d);h=0;while(h<g.$length){i=h;j=((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]);  "�    if(!((j===13))&&!((j===10))){  "�    if(!((i===f))){  "�(f<0||f>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+f]=j;    }  "�  "�f=f+(1)>>0;    }    h++;}  "�    if(f>0){  #return[f,e];    }  #Pk=b.wrapped.Read(a);d=k[0];e=k[1];    }  #oreturn[d,e];    };N.prototype.Read=function(a){return this.$val.Read(a);};newlineFilteringReader&encoding/base64:newlineFilteringReader encoding/base64.NewDecoderO��O=$pkg.NewDecoder=function(a,b){  #�return new M.Ptr($ifaceNil,a,new N.Ptr(b),false,($arrayType($Uint8,1024)).zero(),0,($sliceType($Uint8)).nil,($arrayType($Uint8,768)).zero());    };
NewDecoderencoding/base64:Encodingencoding/base64:decoder&encoding/base64:newlineFilteringReader &(*encoding/base64.Encoding).DecodedLen�G.Ptr.prototype.DecodedLen=function(a){var b,c,d;  $�b=this;  $�return(c=(d=a/4,(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero")),(((c>>>16<<16)*3>>0)+(c<<16>>>16)*3)>>0);    };G.prototype.DecodedLen=function(a){return this.$val.DecodedLen(a);};Encodingencoding/base64:Encoding TestDecoderIssue3577��{"Base":9446,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/encoding/base64/base64_test.go","Base":1,"Size":107,"Lines":[0,13,14,29,30,39,50,52,53,95,105],"Infos":null},{"Name":"/usr/local/go/src/encoding/base64/base64.go","Base":109,"Size":9336,"Lines":[0,55,109,159,160,231,246,247,256,265,271,282,293,295,296,299,312,316,317,385,453,521,591,654,677,695,716,718,719,804,889,890,959,994,1039,1059,1079,1120,1144,1147,1184,1220,1223,1233,1235,1236,1298,1311,1352,1353,1422,1470,1511,1512,1559,1588,1600,1603,1613,1615,1616,1619,1630,1634,1635,1689,1727,1730,1788,1849,1903,1950,1970,1979,1982,1983,2003,2029,2030,2079,2104,2124,2135,2157,2177,2192,2202,2232,2252,2267,2277,2307,2327,2331,2332,2383,2409,2435,2461,2487,2488,2515,2535,2551,2572,2589,2594,2603,2607,2608,2624,2640,2643,2645,2646,2700,2757,2804,2826,2846,2848,2849,2871,2883,2899,2915,2971,3014,3048,3050,3051,3106,3125,3143,3146,3147,3167,3184,3196,3241,3265,3277,3281,3290,3302,3320,3330,3334,3371,3425,3444,3448,3461,3464,3465,3492,3511,3538,3557,3572,3588,3592,3627,3688,3707,3711,3721,3734,3737,3738,3759,3790,3808,3811,3828,3841,3849,3851,3852,3906,3959,3993,4050,4083,4126,4139,4174,4177,4191,4193,4194,4262,4334,4394,4462,4491,4552,4585,4587,4588,4653,4688,4758,4759,4762,4773,4777,4778,4807,4808,4852,4931,4933,4934,5004,5072,5142,5199,5275,5293,5321,5367,5386,5398,5399,5423,5445,5505,5510,5526,5543,5561,5610,5625,5640,5666,5727,5739,5800,5824,5852,5899,5906,5930,5957,6019,6026,6045,6051,6073,6098,6144,6150,6174,6184,6189,6220,6244,6304,6309,6313,6314,6371,6384,6400,6410,6443,6458,6468,6504,6519,6529,6565,6569,6585,6601,6604,6605,6625,6627,6628,6693,6762,6831,6894,6942,7008,7052,7086,7094,7096,7097,7167,7229,7271,7317,7359,7381,7383,7384,7406,7420,7438,7456,7497,7534,7546,7588,7615,7617,7618,7672,7691,7709,7712,7713,7761,7782,7803,7823,7839,7842,7843,7861,7883,7896,7905,7908,7930,7948,7951,8012,8026,8059,8077,8080,8081,8145,8167,8189,8207,8268,8293,8314,8334,8344,8393,8396,8410,8441,8466,8469,8470,8489,8503,8506,8523,8525,8526,8563,8582,8584,8585,8648,8677,8690,8704,8733,8764,8785,8804,8810,8823,8828,8832,8850,8872,8876,8929,8958,8961,8976,8978,8979,9033,9089,9147,9149,9150,9220,9272],"Infos":null}]}
 