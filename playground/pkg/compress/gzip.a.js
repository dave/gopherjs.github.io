g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   �����compress/gzip�@Spackage gzip
import bufio "bufio"
import flate "compress/flate"
import errors "errors"
import hash "hash"
import crc32 "hash/crc32"
import io "io"
import time "time"
import fmt "fmt"
const @"".BestCompression = 0x9
const @"".BestSpeed = 0x1
const @"".DefaultCompression = -0x1
var @"".ErrChecksum error
var @"".ErrHeader error
type @"".Header struct { @"".Comment string; @"".Extra []byte; @"".ModTime @"time".Time; @"".Name string; @"".OS byte }
func @"".NewReader(@"".r @"io".Reader) (? *@"".Reader, ? error)
func @"".NewWriter(@"".w @"io".Writer) (? *@"".Writer)
func @"".NewWriterLevel(@"".w @"io".Writer, @"".level int) (? *@"".Writer, ? error)
const @"".NoCompression = 0x0
type @"".Reader struct { ? @"".Header; @"".r @"compress/flate".Reader; @"".decompressor @"io".ReadCloser; @"".digest @"hash".Hash32; @"".size uint32; @"".flg byte; @"".buf [512]byte; @"".err error; @"".multistream bool }
func (? *@"".Reader) @"".Close() (? error)
func (? *@"".Reader) @"".Multistream(@"".ok bool) ()
func (? *@"".Reader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".Reader) @"".Reset(@"".r @"io".Reader) (? error)
func (? *@"".Reader) @"".read2() (? uint32, ? error)
func (? *@"".Reader) @"".readHeader(@"".save bool) (? error)
func (? *@"".Reader) @"".readString() (? string, ? error)
type @"".Writer struct { ? @"".Header; @"".w @"io".Writer; @"".level int; @"".wroteHeader bool; @"".compressor *@"compress/flate".Writer; @"".digest @"hash".Hash32; @"".size uint32; @"".closed bool; @"".buf [10]byte; @"".err error }
func (? *@"".Writer) @"".Close() (? error)
func (? *@"".Writer) @"".Flush() (? error)
func (? *@"".Writer) @"".Reset(@"".w @"io".Writer) ()
func (? *@"".Writer) @"".Write(@"".p []byte) (? int, ? error)
func (? *@"".Writer) @"".init(@"".w @"io".Writer, @"".level int) ()
func (? *@"".Writer) @"".writeBytes(@"".b []byte) (? error)
func (? *@"".Writer) @"".writeString(@"".s string) (@"".err error)
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
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"compress/flate".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error); @"io".ReadByte() (@"io".c byte, @"io".err error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"hash".Hash32 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum32() (? uint32); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"compress/flate".Writer struct { @"compress/flate".d @"compress/flate".compressor; @"compress/flate".dict []byte }
func (? *@"compress/flate".Writer) @"compress/flate".Close() (? error)
func (? *@"compress/flate".Writer) @"compress/flate".Flush() (? error)
func (? *@"compress/flate".Writer) @"compress/flate".Reset(@"compress/flate".dst @"io".Writer) ()
func (? *@"compress/flate".Writer) @"compress/flate".Write(@"compress/flate".data []byte) (@"compress/flate".n int, @"compress/flate".err error)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
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
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"compress/flate".compressor struct { ? @"compress/flate".compressionLevel; @"compress/flate".w *@"compress/flate".huffmanBitWriter; @"compress/flate".fill func (? *@"compress/flate".compressor, ? []byte) (? int); @"compress/flate".step func (? *@"compress/flate".compressor) (); @"compress/flate".sync bool; @"compress/flate".chainHead int; @"compress/flate".hashHead []int; @"compress/flate".hashPrev []int; @"compress/flate".hashOffset int; @"compress/flate".index int; @"compress/flate".window []byte; @"compress/flate".windowEnd int; @"compress/flate".blockStart int; @"compress/flate".byteAvailable bool; @"compress/flate".tokens []@"compress/flate".token; @"compress/flate".length int; @"compress/flate".offset int; @"compress/flate".hash int; @"compress/flate".maxInsertIndex int; @"compress/flate".err error }
func (? *@"compress/flate".compressor) @"compress/flate".close() (? error)
func (? *@"compress/flate".compressor) @"compress/flate".deflate() ()
func (? *@"compress/flate".compressor) @"compress/flate".fillDeflate(@"compress/flate".b []byte) (? int)
func (? *@"compress/flate".compressor) @"compress/flate".fillStore(@"compress/flate".b []byte) (? int)
func (? *@"compress/flate".compressor) @"compress/flate".findMatch(@"compress/flate".pos int, @"compress/flate".prevHead int, @"compress/flate".prevLength int, @"compress/flate".lookahead int) (@"compress/flate".length int, @"compress/flate".offset int, @"compress/flate".ok bool)
func (? *@"compress/flate".compressor) @"compress/flate".init(@"compress/flate".w @"io".Writer, @"compress/flate".level int) (@"compress/flate".err error)
func (? *@"compress/flate".compressor) @"compress/flate".initDeflate() ()
func (? *@"compress/flate".compressor) @"compress/flate".reset(@"compress/flate".w @"io".Writer) ()
func (? *@"compress/flate".compressor) @"compress/flate".store() ()
func (? *@"compress/flate".compressor) @"compress/flate".syncFlush() (? error)
func (? *@"compress/flate".compressor) @"compress/flate".write(@"compress/flate".b []byte) (@"compress/flate".n int, @"compress/flate".err error)
func (? *@"compress/flate".compressor) @"compress/flate".writeBlock(@"compress/flate".tokens []@"compress/flate".token, @"compress/flate".index int, @"compress/flate".eof bool) (? error)
func (? *@"compress/flate".compressor) @"compress/flate".writeStoredBlock(@"compress/flate".buf []byte) (? error)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
type @"compress/flate".compressionLevel struct { @"compress/flate".good int; @"compress/flate".lazy int; @"compress/flate".nice int; @"compress/flate".chain int; @"compress/flate".fastSkipHashing int }
type @"compress/flate".huffmanBitWriter struct { @"compress/flate".w @"io".Writer; @"compress/flate".bits uint32; @"compress/flate".nbits uint32; @"compress/flate".bytes [64]byte; @"compress/flate".nbytes int; @"compress/flate".literalFreq []int32; @"compress/flate".offsetFreq []int32; @"compress/flate".codegen []uint8; @"compress/flate".codegenFreq []int32; @"compress/flate".literalEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".offsetEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".codegenEncoding *@"compress/flate".huffmanEncoder; @"compress/flate".err error }
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".flush() ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".flushBits() ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".generateCodegen(@"compress/flate".numLiterals int, @"compress/flate".numOffsets int) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".reset(@"compress/flate".writer @"io".Writer) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBits(@"compress/flate".b int32, @"compress/flate".nb int32) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBlock(@"compress/flate".tokens []@"compress/flate".token, @"compress/flate".eof bool, @"compress/flate".input []byte) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeBytes(@"compress/flate".bytes []byte) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeCode(@"compress/flate".code *@"compress/flate".huffmanEncoder, @"compress/flate".literal uint32) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeDynamicHeader(@"compress/flate".numLiterals int, @"compress/flate".numOffsets int, @"compress/flate".numCodegens int, @"compress/flate".isEof bool) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeFixedHeader(@"compress/flate".isEof bool) ()
func (? *@"compress/flate".huffmanBitWriter) @"compress/flate".writeStoredHeader(@"compress/flate".length int, @"compress/flate".isEof bool) ()
type @"compress/flate".token uint32
func (? @"compress/flate".token) @"compress/flate".length() (? uint32)
func (? @"compress/flate".token) @"compress/flate".literal() (? uint32)
func (? @"compress/flate".token) @"compress/flate".offset() (? uint32)
func (? @"compress/flate".token) @"compress/flate".typ() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".length() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".literal() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".offset() (? uint32)
func (? *@"compress/flate".token) @"compress/flate".typ() (? uint32)
type @"compress/flate".huffmanEncoder struct { @"compress/flate".codeBits []uint8; @"compress/flate".code []uint16 }
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".assignEncodingAndSize(@"compress/flate".bitCount []int32, @"compress/flate".list []@"compress/flate".literalNode) ()
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".bitCounts(@"compress/flate".list []@"compress/flate".literalNode, @"compress/flate".maxBits int32) (? []int32)
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".bitLength(@"compress/flate".freq []int32) (? int64)
func (? *@"compress/flate".huffmanEncoder) @"compress/flate".generate(@"compress/flate".freq []int32, @"compress/flate".maxBits int32) ()
type @"compress/flate".literalNode struct { @"compress/flate".literal uint16; @"compress/flate".freq int32 }
$$
bufioA compress/flateB errorsC hashD 
hash/crc32E ioF timeG fmtH $E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} E    $r=H.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} E    $r=D.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} E    $r=E.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} E    $r=F.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} E    $r=G.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} J�vJ=$pkg.Header=$newType(0,$kindStruct,"gzip.Header","Header","compress/gzip",function(Comment_,Extra_,ModTime_,Name_,OS_){this.$val=this;this.Comment=Comment_!==undefined?Comment_:"";this.Extra=Extra_!==undefined?Extra_:($sliceType($Uint8)).nil;this.ModTime=ModTime_!==undefined?ModTime_:new G.Time.Ptr();this.Name=Name_!==undefined?Name_:"";this.OS=OS_!==undefined?OS_:0;});��J.init([["Comment","Comment","",$String,""],["Extra","Extra","",($sliceType($Uint8)),""],["ModTime","ModTime","",G.Time,""],["Name","Name","",$String,""],["OS","OS","",$Uint8,""]]);Header	time:Time K�bK=$pkg.Reader=$newType(0,$kindStruct,"gzip.Reader","Reader","compress/gzip",function(Header_,r_,decompressor_,digest_,size_,flg_,buf_,err_,multistream_){this.$val=this;this.Header=Header_!==undefined?Header_:new J.Ptr();this.r=r_!==undefined?r_:$ifaceNil;this.decompressor=decompressor_!==undefined?decompressor_:$ifaceNil;this.digest=digest_!==undefined?digest_:$ifaceNil;this.size=size_!==undefined?size_:0;this.flg=flg_!==undefined?flg_:0;this.buf=buf_!==undefined?buf_:($arrayType($Uint8,512)).zero();this.err=err_!==undefined?err_:$ifaceNil;this.multistream=multistream_!==undefined?multistream_:false;});��($ptrType(K)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Multistream","Multistream","",$funcType([$Bool],[],false),-1],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["Reset","Reset","",$funcType([F.Reader],[$error],false),-1],["read2","read2","compress/gzip",$funcType([],[$Uint32,$error],false),-1],["readHeader","readHeader","compress/gzip",$funcType([$Bool],[$error],false),-1],["readString","readString","compress/gzip",$funcType([],[$String,$error],false),-1]];K.init([["Header","","",J,""],["r","r","compress/gzip",B.Reader,""],["decompressor","decompressor","compress/gzip",F.ReadCloser,""],["digest","digest","compress/gzip",D.Hash32,""],["size","size","compress/gzip",$Uint32,""],["flg","flg","compress/gzip",$Uint8,""],["buf","buf","compress/gzip",($arrayType($Uint8,512)),""],["err","err","compress/gzip",$error,""],["multistream","multistream","compress/gzip",$Bool,""]]);Readercompress/flate:Readercompress/gzip:Headerhash:Hash32io:ReadCloser	io:Reader N��N=$pkg.Writer=$newType(0,$kindStruct,"gzip.Writer","Writer","compress/gzip",function(Header_,w_,level_,wroteHeader_,compressor_,digest_,size_,closed_,buf_,err_){this.$val=this;this.Header=Header_!==undefined?Header_:new J.Ptr();this.w=w_!==undefined?w_:$ifaceNil;this.level=level_!==undefined?level_:0;this.wroteHeader=wroteHeader_!==undefined?wroteHeader_:false;this.compressor=compressor_!==undefined?compressor_:($ptrType(B.Writer)).nil;this.digest=digest_!==undefined?digest_:$ifaceNil;this.size=size_!==undefined?size_:0;this.closed=closed_!==undefined?closed_:false;this.buf=buf_!==undefined?buf_:($arrayType($Uint8,10)).zero();this.err=err_!==undefined?err_:$ifaceNil;});��($ptrType(N)).methods=[["Close","Close","",$funcType([],[$error],false),-1],["Flush","Flush","",$funcType([],[$error],false),-1],["Reset","Reset","",$funcType([F.Writer],[],false),-1],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1],["init","init","compress/gzip",$funcType([F.Writer,$Int],[],false),-1],["writeBytes","writeBytes","compress/gzip",$funcType([($sliceType($Uint8))],[$error],false),-1],["writeString","writeString","compress/gzip",$funcType([$String],[$error],false),-1]];N.init([["Header","","",J,""],["w","w","compress/gzip",F.Writer,""],["level","level","compress/gzip",$Int,""],["wroteHeader","wroteHeader","compress/gzip",$Bool,""],["compressor","compressor","compress/gzip",($ptrType(B.Writer)),""],["digest","digest","compress/gzip",D.Hash32,""],["size","size","compress/gzip",$Uint32,""],["closed","closed","compress/gzip",$Bool,""],["buf","buf","compress/gzip",($arrayType($Uint8,10)),""],["err","err","compress/gzip",$error,""]]);Writercompress/flate:Writercompress/gzip:Headerhash:Hash32	io:Writer ErrChecksum 	ErrHeader 6    $pkg.ErrChecksum=C.New("gzip: invalid checksum");compress/gzip:ErrChecksum
errors:New 2    $pkg.ErrHeader=C.New("gzip: invalid header");compress/gzip:ErrHeader
errors:New compress/gzip.makeReaderI��I=function(a){var b,c,d;  P  Sb=$assertType(a,B.Reader,true);c=b[0];d=b[1];    if(d){  vreturn c;    }  �return A.NewReader(a);    };
makeReaderbufio:NewReadercompress/flate:Reader compress/gzip.NewReaderL�	L=$pkg.NewReader=function(a){var b,c;  	�b=new K.Ptr();  	�b.r=I(a);  	�b.multistream=true;  
b.digest=E.NewIEEE();  
  
"c=b.readHeader(true);    if(!($interfaceIsEqual(c,$ifaceNil))){  
Lreturn[($ptrType(K)).nil,c];    }  
`return[b,$ifaceNil];    };	NewReadercompress/gzip:Readercompress/gzip:makeReadercompress/gzip:readHeaderhash/crc32:NewIEEE (*compress/gzip.Reader).Reset�RK.Ptr.prototype.Reset=function(a){var b;  Lb=this;  sb.r=I(a);  �    if($interfaceIsEqual(b.digest,$ifaceNil)){  �b.digest=E.NewIEEE();    }else{  �b.digest.Reset();    }  �b.size=0;  �b.err=$ifaceNil;  �b.multistream=true;  
return b.readHeader(true);    };K.prototype.Reset=function(a){return this.$val.Reset(a);};Readercompress/gzip:Readercompress/gzip:makeReadercompress/gzip:readHeaderhash/crc32:NewIEEE #(*compress/gzip.Reader).Multistream��K.Ptr.prototype.Multistream=function(a){var b;  b=this;  <b.multistream=a;    };K.prototype.Multistream=function(a){return this.$val.Multistream(a);};Readercompress/gzip:Reader compress/gzip.get4M��M=function(a){  �return((((((((0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])>>>0)|((((1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1])>>>0)<<8>>>0))>>>0)|((((2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2])>>>0)<<16>>>0))>>>0)|((((3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3])>>>0)<<24>>>0))>>>0;    };get4 "(*compress/gzip.Reader).readString�4K.Ptr.prototype.readString=function(){var a,b,c,d,e,f,g,h,i,j,k,l;  a=this;  -  1b=$ifaceNil;  <c=false;  O  Sd=0;while(true){  e    if(d>=512){  }return["",$pkg.ErrHeader];    }  �e=a.r.ReadByte();(f=a.buf,(d<0||d>=f.length)?$throwRuntimeError("index out of range"):f[d]=e[0]);b=e[1];  �    if(!($interfaceIsEqual(b,$ifaceNil))){  �return["",b];    }  �    if((g=a.buf,((d<0||d>=g.length)?$throwRuntimeError("index out of range"):g[d]))>127){  �c=true;    }      if((h=a.buf,((d<0||d>=h.length)?$throwRuntimeError("index out of range"):h[d]))===0){  {    if(c){  �i=($sliceType($Int32)).make(0,d);  �j=$subslice(new($sliceType($Uint8))(a.buf),0,d);k=0;while(k<j.$length){l=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  �i=$append(i,(l>>0));    k++;}  �return[$runesToString(i),$ifaceNil];    }  return[$bytesToString($subslice(new($sliceType($Uint8))(a.buf),0,d)),$ifaceNil];    }      ]  ]d=d+(1)>>0;}    };K.prototype.readString=function(){return this.$val.readString();};Reader
readStringcompress/gzip:ErrHeadercompress/gzip:Reader (*compress/gzip.Reader).read2�MK.Ptr.prototype.read2=function(){var a,b,c;  ;a=this;  ab=F.ReadFull(a.r,$subslice(new($sliceType($Uint8))(a.buf),0,2));c=b[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[0,c];    }  �return[((a.buf[0]>>>0)|((a.buf[1]>>>0)<<8>>>0))>>>0,$ifaceNil];    };K.prototype.read2=function(){return this.$val.read2();};Readerread2compress/gzip:Readerio:ReadFull "(*compress/gzip.Reader).readHeader�eK.Ptr.prototype.readHeader=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;  �b=this;  c=F.ReadFull(b.r,$subslice(new($sliceType($Uint8))(b.buf),0,10));d=c[1];  <    if(!($interfaceIsEqual(d,$ifaceNil))){  Nreturn d;    }  ]    if(!((b.buf[0]===31))||!((b.buf[1]===139))||!((b.buf[2]===8))){  �return $pkg.ErrHeader;    }  �b.flg=b.buf[3];  �    if(a){  �$copy(b.Header.ModTime,G.Unix(new $Int64(0,M($subslice(new($sliceType($Uint8))(b.buf),4,8))),new $Int64(0,0)),G.Time);  /b.Header.OS=b.buf[9];    }  Cb.digest.Reset();  Ub.digest.Write($subslice(new($sliceType($Uint8))(b.buf),0,10));  s    if(!((((b.flg&4)>>>0)===0))){  �e=b.read2();f=e[0];g=e[1];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �return g;    }  �h=($sliceType($Uint8)).make(f);  �  �i=F.ReadFull(b.r,h);g=i[1];    if(!($interfaceIsEqual(g,$ifaceNil))){  return g;    }  (    if(a){  5b.Header.Extra=h;    }    }  M  Qj="";  [    if(!((((b.flg&8)>>>0)===0))){  v  yk=b.readString();j=k[0];d=k[1];    if(!($interfaceIsEqual(d,$ifaceNil))){  �return d;    }  �    if(a){  �b.Header.Name=j;    }    }  �    if(!((((b.flg&16)>>>0)===0))){  �  �l=b.readString();j=l[0];d=l[1];    if(!($interfaceIsEqual(d,$ifaceNil))){  return d;    }  /    if(a){  <b.Header.Comment=j;    }    }  S    if(!((((b.flg&2)>>>0)===0))){  pm=b.read2();n=m[0];o=m[1];  �    if(!($interfaceIsEqual(o,$ifaceNil))){  �return o;    }  �p=(b.digest.Sum32()&65535)>>>0;  �    if(!((n===p))){  �return $pkg.ErrHeader;    }    }  �b.digest.Reset();  
    if($interfaceIsEqual(b.decompressor,$ifaceNil)){  'b.decompressor=B.NewReader(b.r);    }else{  Y$assertType(b.decompressor,B.Resetter).Reset(b.r,($sliceType($Uint8)).nil);    }  �return $ifaceNil;    };K.prototype.readHeader=function(a){return this.$val.readHeader(a);};Reader
readHeader
compress/flate:NewReadercompress/flate:Resettercompress/gzip:ErrHeadercompress/gzip:Readercompress/gzip:get4compress/gzip:read2compress/gzip:readStringio:ReadFull	time:Time	time:Unix (*compress/gzip.Reader).Read��K.Ptr.prototype.Read=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  �d=this;  �    if(!($interfaceIsEqual(d.err,$ifaceNil))){  �    e=0;f=d.err;b=e;c=f;return[b,c];    }  �    if(a.$length===0){      g=0;h=$ifaceNil;b=g;c=h;return[b,c];    }  i=d.decompressor.Read(a);b=i[0];c=i[1];  @d.digest.Write($subslice(a,0,b));  Xd.size=d.size+((b>>>0))>>>0;  m    if(!((b===0))||!($interfaceIsEqual(c,F.EOF))){  �d.err=c;  �return[b,c];    }  �  �j=F.ReadFull(d.r,$subslice(new($sliceType($Uint8))(d.buf),0,8));k=j[1];    if(!($interfaceIsEqual(k,$ifaceNil))){  
d.err=k;      l=0;m=k;b=l;c=m;return[b,c];    }  *n=M($subslice(new($sliceType($Uint8))(d.buf),0,4));o=M($subslice(new($sliceType($Uint8))(d.buf),4,8));p=n;q=o;  ^r=d.digest.Sum32();  w    if(!((r===p))||!((q===d.size))){  �d.err=$pkg.ErrChecksum;  �    s=0;t=d.err;b=s;c=t;return[b,c];    }  �    if(!d.multistream){      u=0;v=F.EOF;b=u;c=v;return[b,c];    }    c=d.readHeader(false);    if(!($interfaceIsEqual(c,$ifaceNil))){  Dd.err=c;  Rreturn[b,c];    }  �d.digest.Reset();  �d.size=0;  �    w=d.Read(a);b=w[0];c=w[1];return[b,c];    };K.prototype.Read=function(a){return this.$val.Read(a);};Readercompress/gzip:ErrChecksumcompress/gzip:Readercompress/gzip:get4compress/gzip:readHeaderio:EOFio:ReadFull (*compress/gzip.Reader).Close��K.Ptr.prototype.Close=function(){var a;   a=this;  return a.decompressor.Close();    };K.prototype.Close=function(){return this.$val.Close();};Readercompress/gzip:Reader compress/gzip.NewWriterOPO=$pkg.NewWriter=function(a){var b,c;  "b=P(a,-1);c=b[0];  "Breturn c;    };	NewWritercompress/gzip:NewWriterLevel compress/gzip.NewWriterLevelP�P=$pkg.NewWriterLevel=function(a,b){var c;  #�    if(b<-1||b>9){  $return[($ptrType(N)).nil,H.Errorf("gzip: invalid compression level: %d",new($sliceType($emptyInterface))([new $Int(b)]))];    }  $Oc=new N.Ptr();  $ac.init(a,b);  $sreturn[c,$ifaceNil];    };NewWriterLevelcompress/gzip:Writercompress/gzip:init
fmt:Errorf (*compress/gzip.Writer).init��N.Ptr.prototype.init=function(a,b){var c,d,e;  $�c=this;  $�d=c.digest;  $�    if(!($interfaceIsEqual(d,$ifaceNil))){  $�d.Reset();    }else{  $�d=E.NewIEEE();    }  %e=c.compressor;  %2    if(!(e===($ptrType(B.Writer)).nil)){  %Ke.Reset(a);    }  %c$copy(c,new N.Ptr(new J.Ptr("",($sliceType($Uint8)).nil,new G.Time.Ptr(),"",255),a,b,false,e,d,0,false,($arrayType($Uint8,10)).zero(),$ifaceNil),N);    };N.prototype.init=function(a,b){return this.$val.init(a,b);};Writerinitcompress/flate:Writercompress/gzip:Headercompress/gzip:Writerhash/crc32:NewIEEE	time:Time (*compress/gzip.Writer).Reset��N.Ptr.prototype.Reset=function(a){var b;  &�b=this;  '	b.init(a,b.level);    };N.prototype.Reset=function(a){return this.$val.Reset(a);};Writercompress/gzip:Writercompress/gzip:init compress/gzip.put2Q��Q=function(a,b){  '}(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((b>>>0<<16>>>16)<<24>>>24);  '�(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((b>>>8<<16>>>16)<<24>>>24);    };put2 compress/gzip.put4R��R=function(a,b){  '�(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=((b>>>0>>>0)<<24>>>24);  '�(1<0||1>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=((b>>>8>>>0)<<24>>>24);  '�(2<0||2>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=((b>>>16>>>0)<<24>>>24);  ((3<0||3>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=((b>>>24>>>0)<<24>>>24);    };put4 "(*compress/gzip.Writer).writeBytes��N.Ptr.prototype.writeBytes=function(a){var b,c,d,e;  (hb=this;  (�    if(a.$length>65535){  (�return C.New("gzip.Write: Extra data is too large");    }  (�Q($subslice(new($sliceType($Uint8))(b.buf),0,2),(a.$length<<16>>>16));  )c=b.w.Write($subslice(new($sliceType($Uint8))(b.buf),0,2));d=c[1];  )(    if(!($interfaceIsEqual(d,$ifaceNil))){  ):return d;    }  )Ie=b.w.Write(a);d=e[1];  )`return d;    };N.prototype.writeBytes=function(a){return this.$val.writeBytes(a);};Writer
writeBytescompress/gzip:Writercompress/gzip:put2
errors:New #(*compress/gzip.Writer).writeString�;N.Ptr.prototype.writeString=function(a){var b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n,o,p;  *c=this;  *�d=false;  *�e=a;f=0;while(f<e.length){g=$decodeRune(e,f);h=g[0];  *�    if((h===0)||h>255){  *�    b=C.New("gzip.Write: non-Latin-1 header string");return b;    }  +    if(h>127){  +d=true;    }    f+=g[1];}  +4    if(d){  +Di=($sliceType($Uint8)).make(0,a.length);  +cj=a;k=0;while(k<j.length){l=$decodeRune(j,k);m=l[0];  +|i=$append(i,(m<<24>>>24));    k+=l[1];}  +�n=c.w.Write(i);b=n[1];    }else{  +�o=F.WriteString(c.w,a);b=o[1];    }  +�    if(!($interfaceIsEqual(b,$ifaceNil))){  +�    b=b;return b;    }  ,%c.buf[0]=0;  ,3p=c.w.Write($subslice(new($sliceType($Uint8))(c.buf),0,1));b=p[1];  ,S    b=b;return b;    };N.prototype.writeString=function(a){return this.$val.writeString(a);};WriterwriteStringcompress/gzip:Writer
errors:Newio:WriteString (*compress/gzip.Writer).Write�\N.Ptr.prototype.Write=function(a){var b,c,d,e,f,g,h,i,j,k,l;  ,�b=this;  -&    if(!($interfaceIsEqual(b.err,$ifaceNil))){  -:return[0,b.err];    }  -N  -Rc=0;  -{    if(!b.wroteHeader){  -�b.wroteHeader=true;  -�b.buf[0]=31;  -�b.buf[1]=139;  -�b.buf[2]=8;  -�b.buf[3]=0;  -�    if(!(b.Header.Extra===($sliceType($Uint8)).nil)){  .d=b.buf;e=3;(e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e]=(((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e])|(4))>>>0;    }  .(    if(!(b.Header.Name==="")){  .=f=b.buf;g=3;(g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]=(((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g])|(8))>>>0;    }  .T    if(!(b.Header.Comment==="")){  .lh=b.buf;i=3;(i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=(((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i])|(16))>>>0;    }  .�R($subslice(new($sliceType($Uint8))(b.buf),4,8),(b.Header.ModTime.Unix().$low>>>0));  .�    if(b.level===9){  .�b.buf[8]=2;        }else if(b.level===1){  /b.buf[8]=4;    }else{  /!b.buf[8]=0;    }  /4b.buf[9]=b.Header.OS;  /Fj=b.w.Write($subslice(new($sliceType($Uint8))(b.buf),0,10));c=j[0];b.err=j[1];  /j    if(!($interfaceIsEqual(b.err,$ifaceNil))){  /return[c,b.err];    }  /�    if(!(b.Header.Extra===($sliceType($Uint8)).nil)){  /�b.err=b.writeBytes(b.Header.Extra);  /�    if(!($interfaceIsEqual(b.err,$ifaceNil))){  /�return[c,b.err];    }    }  /�    if(!(b.Header.Name==="")){  0b.err=b.writeString(b.Header.Name);  04    if(!($interfaceIsEqual(b.err,$ifaceNil))){  0Jreturn[c,b.err];    }    }  0e    if(!(b.Header.Comment==="")){  0}b.err=b.writeString(b.Header.Comment);  0�    if(!($interfaceIsEqual(b.err,$ifaceNil))){  0�return[c,b.err];    }    }  0�    if(b.compressor===($ptrType(B.Writer)).nil){  0�k=B.NewWriter(b.w,b.level);b.compressor=k[0];    }    }  1&b.size=b.size+((a.$length>>>0))>>>0;  1@b.digest.Write(a);  1Sl=b.compressor.Write(a);c=l[0];b.err=l[1];  1ureturn[c,b.err];    };N.prototype.Write=function(a){return this.$val.Write(a);};Writercompress/flate:NewWritercompress/flate:Writercompress/gzip:Writercompress/gzip:put4compress/gzip:writeBytescompress/gzip:writeString (*compress/gzip.Writer).Flush��N.Ptr.prototype.Flush=function(){var a;  30a=this;  3L    if(!($interfaceIsEqual(a.err,$ifaceNil))){  3`return a.err;    }  3q    if(a.closed){  3�return $ifaceNil;    }  3�    if(!a.wroteHeader){  3�a.Write(($sliceType($Uint8)).nil);  3�    if(!($interfaceIsEqual(a.err,$ifaceNil))){  3�return a.err;    }    }  3�a.err=a.compressor.Flush();  3�return a.err;    };N.prototype.Flush=function(){return this.$val.Flush();};Writercompress/gzip:Writer (*compress/gzip.Writer).Close��N.Ptr.prototype.Close=function(){var a,b;  4�a=this;  4�    if(!($interfaceIsEqual(a.err,$ifaceNil))){  4�return a.err;    }  4�    if(a.closed){  4�return $ifaceNil;    }  4�a.closed=true;  5	    if(!a.wroteHeader){  5a.Write(($sliceType($Uint8)).nil);  5.    if(!($interfaceIsEqual(a.err,$ifaceNil))){  5Creturn a.err;    }    }  5Xa.err=a.compressor.Close();  5v    if(!($interfaceIsEqual(a.err,$ifaceNil))){  5�return a.err;    }  5�R($subslice(new($sliceType($Uint8))(a.buf),0,4),a.digest.Sum32());  5�R($subslice(new($sliceType($Uint8))(a.buf),4,8),a.size);  5�b=a.w.Write($subslice(new($sliceType($Uint8))(a.buf),0,8));a.err=b[1];  5�return a.err;    };N.prototype.Close=function(){return this.$val.Close();};Writercompress/gzip:Writercompress/gzip:put4 �j{"Base":13835,"Files":[{"Name":"/usr/local/go/src/compress/gzip/gunzip.go","Base":1,"Size":7226,"Lines":[0,55,109,159,160,240,269,282,283,292,301,319,329,337,351,357,365,367,368,376,396,416,433,455,477,499,521,543,545,546,590,627,639,642,669,671,672,678,759,811,888,936,938,939,1015,1089,1110,1140,1175,1215,1247,1291,1293,1294,1351,1408,1411,1476,1528,1590,1649,1652,1720,1770,1829,1897,1960,1992,2013,2021,2048,2076,2102,2123,2142,2166,2186,2205,2207,2208,2268,2315,2377,2453,2500,2518,2539,2561,2589,2633,2651,2654,2669,2671,2672,2742,2818,2885,2929,2950,2972,3001,3011,3030,3033,3045,3058,3080,3107,3109,3110,3181,3184,3259,3329,3407,3485,3549,3552,3629,3705,3771,3840,3915,3973,4052,4114,4154,4174,4176,4177,4238,4267,4344,4346,4347,4395,4410,4429,4450,4473,4497,4501,4534,4552,4570,4574,4597,4616,4620,4641,4727,4744,4772,4807,4835,4841,4867,4872,4906,4910,4913,4915,4916,4959,4999,5016,5032,5035,5087,5089,5090,5137,5178,5195,5208,5211,5287,5306,5309,5327,5338,5390,5420,5438,5441,5459,5488,5489,5516,5538,5556,5570,5574,5600,5651,5665,5669,5681,5699,5703,5706,5707,5721,5747,5790,5804,5808,5820,5834,5838,5841,5842,5871,5914,5928,5932,5944,5961,5965,5968,5969,5997,6019,6037,6051,6055,6090,6106,6126,6130,6133,6134,6152,6180,6220,6230,6280,6283,6295,6297,6298,6351,6370,6388,6391,6409,6425,6428,6429,6462,6486,6507,6537,6551,6560,6563,6564,6606,6663,6677,6693,6696,6748,6773,6811,6833,6851,6854,6855,6889,6910,6929,6932,6933,6977,6991,7000,7003,7004,7038,7056,7068,7086,7088,7089,7161],"Infos":null},{"Name":"/usr/local/go/src/compress/gzip/gzip.go","Base":7228,"Size":6606,"Lines":[0,55,109,159,160,173,174,183,201,211,218,226,240,246,248,249,329,395,403,445,483,527,574,576,577,611,666,687,695,718,735,753,780,805,825,843,865,884,886,887,922,988,991,1072,1127,1130,1204,1280,1358,1437,1456,1494,1541,1551,1553,1554,1634,1669,1672,1746,1822,1869,1932,1992,2063,2066,2084,2102,2117,2119,2120,2168,2188,2208,2225,2235,2262,2265,2293,2317,2339,2342,2356,2374,2397,2402,2419,2440,2462,2488,2491,2493,2494,2564,2634,2701,2726,2764,2784,2786,2787,2848,2880,2902,2924,2926,2927,2959,2981,3003,3026,3049,3051,3052,3110,3156,3178,3237,3240,3274,3307,3324,3337,3340,3363,3375,3377,3378,3442,3525,3578,3655,3674,3697,3723,3785,3789,3805,3824,3828,3831,3846,3877,3901,3927,3931,3955,3965,3999,4002,4019,4032,4035,4072,4086,4118,4130,4132,4133,4205,4281,4329,4348,4366,4369,4380,4414,4435,4458,4479,4500,4525,4540,4562,4582,4586,4606,4626,4630,4653,4673,4677,4722,4756,4772,4807,4823,4834,4850,4854,4872,4908,4928,4947,4951,4973,5006,5027,5047,5052,5056,5076,5109,5130,5150,5155,5159,5182,5218,5239,5259,5264,5268,5295,5346,5350,5353,5379,5398,5432,5449,5451,5452,5523,5526,5597,5668,5733,5787,5790,5870,5903,5922,5937,5940,5955,5968,5971,5992,6007,6027,6043,6047,6050,6080,6094,6096,6097,6171,6230,6263,6282,6297,6300,6315,6328,6331,6348,6369,6384,6404,6420,6424,6427,6457,6476,6491,6494,6530,6556,6590,6604],"Infos":null}]}
 