p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��;��ioioerrorsruntimesync��package io
import runtime "runtime"
import errors "errors"
import sync "sync"
type @"".ByteReader interface { @"".ReadByte() (@"".c byte, @"".err error) }
type @"".ByteScanner interface { @"".ReadByte() (@"".c byte, @"".err error); @"".UnreadByte() (? error) }
type @"".ByteWriter interface { @"".WriteByte(@"".c byte) (? error) }
type @"".Closer interface { @"".Close() (? error) }
func @"".Copy(@"".dst @"".Writer, @"".src @"".Reader) (@"".written int64, @"".err error)
func @"".CopyN(@"".dst @"".Writer, @"".src @"".Reader, @"".n int64) (@"".written int64, @"".err error)
var @"".EOF error
var @"".ErrClosedPipe error
var @"".ErrNoProgress error
var @"".ErrShortBuffer error
var @"".ErrShortWrite error
var @"".ErrUnexpectedEOF error
func @"".LimitReader(@"".r @"".Reader, @"".n int64) (? @"".Reader)
type @"".LimitedReader struct { @"".R @"".Reader; @"".N int64 }
func (? *@"".LimitedReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func @"".MultiReader(@"".readers ...@"".Reader) (? @"".Reader)
func @"".MultiWriter(@"".writers ...@"".Writer) (? @"".Writer)
func @"".NewSectionReader(@"".r @"".ReaderAt, @"".off int64, @"".n int64) (? *@"".SectionReader)
func @"".Pipe() (? *@"".PipeReader, ? *@"".PipeWriter)
type @"".PipeReader struct { @"".p *@"".pipe }
func (? *@"".PipeReader) @"".Close() (? error)
func (? *@"".PipeReader) @"".CloseWithError(@"".err error) (? error)
func (? *@"".PipeReader) @"".Read(@"".data []byte) (@"".n int, @"".err error)
type @"".PipeWriter struct { @"".p *@"".pipe }
func (? *@"".PipeWriter) @"".Close() (? error)
func (? *@"".PipeWriter) @"".CloseWithError(@"".err error) (? error)
func (? *@"".PipeWriter) @"".Write(@"".data []byte) (@"".n int, @"".err error)
func @"".ReadAtLeast(@"".r @"".Reader, @"".buf []byte, @"".min int) (@"".n int, @"".err error)
type @"".ReadCloser interface { @"".Close() (? error); @"".Read(@"".p []byte) (@"".n int, @"".err error) }
func @"".ReadFull(@"".r @"".Reader, @"".buf []byte) (@"".n int, @"".err error)
type @"".ReadSeeker interface { @"".Read(@"".p []byte) (@"".n int, @"".err error); @"".Seek(@"".offset int64, @"".whence int) (? int64, ? error) }
type @"".ReadWriteCloser interface { @"".Close() (? error); @"".Read(@"".p []byte) (@"".n int, @"".err error); @"".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"".ReadWriteSeeker interface { @"".Read(@"".p []byte) (@"".n int, @"".err error); @"".Seek(@"".offset int64, @"".whence int) (? int64, ? error); @"".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"".ReadWriter interface { @"".Read(@"".p []byte) (@"".n int, @"".err error); @"".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"".Reader interface { @"".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"".ReaderAt interface { @"".ReadAt(@"".p []byte, @"".off int64) (@"".n int, @"".err error) }
type @"".ReaderFrom interface { @"".ReadFrom(@"".r @"".Reader) (@"".n int64, @"".err error) }
type @"".RuneReader interface { @"".ReadRune() (@"".r rune, @"".size int, @"".err error) }
type @"".RuneScanner interface { @"".ReadRune() (@"".r rune, @"".size int, @"".err error); @"".UnreadRune() (? error) }
type @"".SectionReader struct { @"".r @"".ReaderAt; @"".base int64; @"".off int64; @"".limit int64 }
func (? *@"".SectionReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".SectionReader) @"".ReadAt(@"".p []byte, @"".off int64) (@"".n int, @"".err error)
func (? *@"".SectionReader) @"".Seek(@"".offset int64, @"".whence int) (? int64, ? error)
func (? *@"".SectionReader) @"".Size() (? int64)
type @"".Seeker interface { @"".Seek(@"".offset int64, @"".whence int) (? int64, ? error) }
func @"".TeeReader(@"".r @"".Reader, @"".w @"".Writer) (? @"".Reader)
type @"".WriteCloser interface { @"".Close() (? error); @"".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"".WriteSeeker interface { @"".Seek(@"".offset int64, @"".whence int) (? int64, ? error); @"".Write(@"".p []byte) (@"".n int, @"".err error) }
func @"".WriteString(@"".w @"".Writer, @"".s string) (@"".n int, @"".err error)
type @"".Writer interface { @"".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"".WriterAt interface { @"".WriteAt(@"".p []byte, @"".off int64) (@"".n int, @"".err error) }
type @"".WriterTo interface { @"".WriteTo(@"".w @"".Writer) (@"".n int64, @"".err error) }
type @"".multiReader struct { @"".readers []@"".Reader }
func (? *@"".multiReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".multiWriter struct { @"".writers []@"".Writer }
func (? *@"".multiWriter) @"".Write(@"".p []byte) (@"".n int, @"".err error)
type @"".pipe struct { @"".rl @"sync".Mutex; @"".wl @"sync".Mutex; @"".l @"sync".Mutex; @"".data []byte; @"".rwait @"sync".Cond; @"".wwait @"sync".Cond; @"".rerr error; @"".werr error }
func (? *@"".pipe) @"".rclose(@"".err error) ()
func (? *@"".pipe) @"".read(@"".b []byte) (@"".n int, @"".err error)
func (? *@"".pipe) @"".wclose(@"".err error) ()
func (? *@"".pipe) @"".write(@"".b []byte) (@"".n int, @"".err error)
type @"".pipeResult struct { @"".n int; @"".err error }
type @"".stringWriter interface { @"".WriteString(@"".s string) (@"".n int, @"".err error) }
type @"".teeReader struct { @"".r @"".Reader; @"".w @"".Writer }
func (? *@"".teeReader) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"sync".Cond struct { @"sync".L @"sync".Locker; @"sync".sema @"sync".syncSema; @"sync".waiters uint32; @"sync".checker @"sync".copyChecker }
func (? *@"sync".Cond) @"sync".Broadcast() ()
func (? *@"sync".Cond) @"sync".Signal() ()
func (? *@"sync".Cond) @"sync".Wait() ()
func (? *@"sync".Cond) @"sync".signalImpl(@"sync".all bool) ()
type @"sync".Locker interface { @"sync".Lock() (); @"sync".Unlock() () }
type @"sync".syncSema struct { @"sync".lock uintptr; @"sync".head @"unsafe".Pointer; @"sync".tail @"unsafe".Pointer }
type @"sync".copyChecker uintptr
func (? *@"sync".copyChecker) @"sync".check() ()
$$
[BB=$packages["errors"];E    $r=B.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} AA=$packages["runtime"];E    $r=A.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["sync"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} EHE=$pkg.Reader=$newType(8,$kindInterface,"io.Reader","Reader","io",null);TE.init([{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);	io.Reader	io.Reader	io:[]byte FHF=$pkg.Writer=$newType(8,$kindInterface,"io.Writer","Writer","io",null);VF.init([{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);	io.Writer	io.Writer	io:[]byte GHG=$pkg.Closer=$newType(8,$kindInterface,"io.Closer","Closer","io",null);OG.init([{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)}]);	io.Closer	io.Closer HHH=$pkg.Seeker=$newType(8,$kindInterface,"io.Seeker","Seeker","io",null);_H.init([{prop:"Seek",name:"Seek",pkg:"",type:$funcType([$Int64,$Int],[$Int64,$error],false)}]);	io.Seeker	io.Seeker ITI=$pkg.ReadWriter=$newType(8,$kindInterface,"io.ReadWriter","ReadWriter","io",null);��I.init([{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);io.ReadWriterio.ReadWriter	io:[]byte JTJ=$pkg.ReadCloser=$newType(8,$kindInterface,"io.ReadCloser","ReadCloser","io",null);��J.init([{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)},{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);io.ReadCloserio.ReadCloser	io:[]byte KWK=$pkg.WriteCloser=$newType(8,$kindInterface,"io.WriteCloser","WriteCloser","io",null);��K.init([{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);io.WriteCloserio.WriteCloser	io:[]byte LcL=$pkg.ReadWriteCloser=$newType(8,$kindInterface,"io.ReadWriteCloser","ReadWriteCloser","io",null);��L.init([{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)},{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);io.ReadWriteCloserio.ReadWriteCloser	io:[]byte MTM=$pkg.ReadSeeker=$newType(8,$kindInterface,"io.ReadSeeker","ReadSeeker","io",null);��M.init([{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)},{prop:"Seek",name:"Seek",pkg:"",type:$funcType([$Int64,$Int],[$Int64,$error],false)}]);io.ReadSeekerio.ReadSeeker	io:[]byte NWN=$pkg.WriteSeeker=$newType(8,$kindInterface,"io.WriteSeeker","WriteSeeker","io",null);��N.init([{prop:"Seek",name:"Seek",pkg:"",type:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);io.WriteSeekerio.WriteSeeker	io:[]byte OcO=$pkg.ReadWriteSeeker=$newType(8,$kindInterface,"io.ReadWriteSeeker","ReadWriteSeeker","io",null);��O.init([{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)},{prop:"Seek",name:"Seek",pkg:"",type:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}]);io.ReadWriteSeekerio.ReadWriteSeeker	io:[]byte PTP=$pkg.ReaderFrom=$newType(8,$kindInterface,"io.ReaderFrom","ReaderFrom","io",null);]P.init([{prop:"ReadFrom",name:"ReadFrom",pkg:"",type:$funcType([E],[$Int64,$error],false)}]);io.ReaderFrom	io.Readerio.ReaderFrom QNQ=$pkg.WriterTo=$newType(8,$kindInterface,"io.WriterTo","WriterTo","io",null);[Q.init([{prop:"WriteTo",name:"WriteTo",pkg:"",type:$funcType([F],[$Int64,$error],false)}]);io.WriterTo	io.Writerio.WriterTo RNR=$pkg.ReaderAt=$newType(8,$kindInterface,"io.ReaderAt","ReaderAt","io",null);_R.init([{prop:"ReadAt",name:"ReadAt",pkg:"",type:$funcType([AW,$Int64],[$Int,$error],false)}]);io.ReaderAtio.ReaderAt	io:[]byte SNS=$pkg.WriterAt=$newType(8,$kindInterface,"io.WriterAt","WriterAt","io",null);aS.init([{prop:"WriteAt",name:"WriteAt",pkg:"",type:$funcType([AW,$Int64],[$Int,$error],false)}]);io.WriterAtio.WriterAt	io:[]byte TTT=$pkg.ByteReader=$newType(8,$kindInterface,"io.ByteReader","ByteReader","io",null);\T.init([{prop:"ReadByte",name:"ReadByte",pkg:"",type:$funcType([],[$Uint8,$error],false)}]);io.ByteReaderio.ByteReader UWU=$pkg.ByteScanner=$newType(8,$kindInterface,"io.ByteScanner","ByteScanner","io",null);��U.init([{prop:"ReadByte",name:"ReadByte",pkg:"",type:$funcType([],[$Uint8,$error],false)},{prop:"UnreadByte",name:"UnreadByte",pkg:"",type:$funcType([],[$error],false)}]);io.ByteScannerio.ByteScanner VTV=$pkg.ByteWriter=$newType(8,$kindInterface,"io.ByteWriter","ByteWriter","io",null);]V.init([{prop:"WriteByte",name:"WriteByte",pkg:"",type:$funcType([$Uint8],[$error],false)}]);io.ByteWriterio.ByteWriter WTW=$pkg.RuneReader=$newType(8,$kindInterface,"io.RuneReader","RuneReader","io",null);aW.init([{prop:"ReadRune",name:"ReadRune",pkg:"",type:$funcType([],[$Int32,$Int,$error],false)}]);io.RuneReaderio.RuneReader XWX=$pkg.RuneScanner=$newType(8,$kindInterface,"io.RuneScanner","RuneScanner","io",null);��X.init([{prop:"ReadRune",name:"ReadRune",pkg:"",type:$funcType([],[$Int32,$Int,$error],false)},{prop:"UnreadRune",name:"UnreadRune",pkg:"",type:$funcType([],[$error],false)}]);io.RuneScannerio.RuneScanner YZY=$pkg.stringWriter=$newType(8,$kindInterface,"io.stringWriter","stringWriter","io",null);gY.init([{prop:"WriteString",name:"WriteString",pkg:"",type:$funcType([$String],[$Int,$error],false)}]);io.stringWriterio.stringWriter AF��AF=$pkg.LimitedReader=$newType(0,$kindStruct,"io.LimitedReader","LimitedReader","io",function(R_,N_){this.$val=this;this.R=R_!==undefined?R_:$ifaceNil;this.N=N_!==undefined?N_:new $Int64(0,0);});WAZ.methods=[{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)}];bAF.init([{prop:"R",name:"R",pkg:"",type:E,tag:""},{prop:"N",name:"N",pkg:"",type:$Int64,tag:""}]);io.LimitedReaderio.LimitedReader	io.Readerio:*io.LimitedReader	io:[]byte AH�?AH=$pkg.SectionReader=$newType(0,$kindStruct,"io.SectionReader","SectionReader","io",function(r_,base_,off_,limit_){this.$val=this;this.r=r_!==undefined?r_:$ifaceNil;this.base=base_!==undefined?base_:new $Int64(0,0);this.off=off_!==undefined?off_:new $Int64(0,0);this.limit=limit_!==undefined?limit_:new $Int64(0,0);});�DBA.methods=[{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)},{prop:"ReadAt",name:"ReadAt",pkg:"",type:$funcType([AW,$Int64],[$Int,$error],false)},{prop:"Seek",name:"Seek",pkg:"",type:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int64],false)}];��AH.init([{prop:"r",name:"r",pkg:"io",type:R,tag:""},{prop:"base",name:"base",pkg:"io",type:$Int64,tag:""},{prop:"off",name:"off",pkg:"io",type:$Int64,tag:""},{prop:"limit",name:"limit",pkg:"io",type:$Int64,tag:""}]);io.SectionReaderio.ReaderAtio.SectionReaderio:*io.SectionReader	io:[]byte AL��AL=$pkg.teeReader=$newType(0,$kindStruct,"io.teeReader","teeReader","io",function(r_,w_){this.$val=this;this.r=r_!==undefined?r_:$ifaceNil;this.w=w_!==undefined?w_:$ifaceNil;});WBB.methods=[{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)}];aAL.init([{prop:"r",name:"r",pkg:"io",type:E,tag:""},{prop:"w",name:"w",pkg:"io",type:F,tag:""}]);io.teeReader	io.Reader	io.Writerio.teeReaderio:*io.teeReader	io:[]byte AM��AM=$pkg.multiReader=$newType(0,$kindStruct,"io.multiReader","multiReader","io",function(readers_){this.$val=this;this.readers=readers_!==undefined?readers_:AX.nil;});WBC.methods=[{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)}];CAM.init([{prop:"readers",name:"readers",pkg:"io",type:AX,tag:""}]);io.multiReaderio.multiReaderio:*io.multiReader	io:[]byteio:[]io.Reader AO��AO=$pkg.multiWriter=$newType(0,$kindStruct,"io.multiWriter","multiWriter","io",function(writers_){this.$val=this;this.writers=writers_!==undefined?writers_:AY.nil;});YBD.methods=[{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}];CAO.init([{prop:"writers",name:"writers",pkg:"io",type:AY,tag:""}]);io.multiWriterio.multiWriterio:*io.multiWriter	io:[]byteio:[]io.Writer AQ��AQ=$pkg.pipeResult=$newType(0,$kindStruct,"io.pipeResult","pipeResult","io",function(n_,err_){this.$val=this;this.n=n_!==undefined?n_:0;this.err=err_!==undefined?err_:$ifaceNil;});mAQ.init([{prop:"n",name:"n",pkg:"io",type:$Int,tag:""},{prop:"err",name:"err",pkg:"io",type:$error,tag:""}]);io.pipeResultio.pipeResult AR��AR=$pkg.pipe=$newType(0,$kindStruct,"io.pipe","pipe","io",function(rl_,wl_,l_,data_,rwait_,wwait_,rerr_,werr_){this.$val=this;this.rl=rl_!==undefined?rl_:new C.Mutex.ptr();this.wl=wl_!==undefined?wl_:new C.Mutex.ptr();this.l=l_!==undefined?l_:new C.Mutex.ptr();this.data=data_!==undefined?data_:AW.nil;this.rwait=rwait_!==undefined?rwait_:new C.Cond.ptr();this.wwait=wwait_!==undefined?wwait_:new C.Cond.ptr();this.rerr=rerr_!==undefined?rerr_:$ifaceNil;this.werr=werr_!==undefined?werr_:$ifaceNil;});�9BE.methods=[{prop:"rclose",name:"rclose",pkg:"io",type:$funcType([$error],[],false)},{prop:"read",name:"read",pkg:"io",type:$funcType([AW],[$Int,$error],false)},{prop:"wclose",name:"wclose",pkg:"io",type:$funcType([$error],[],false)},{prop:"write",name:"write",pkg:"io",type:$funcType([AW],[$Int,$error],false)}];��AR.init([{prop:"rl",name:"rl",pkg:"io",type:C.Mutex,tag:""},{prop:"wl",name:"wl",pkg:"io",type:C.Mutex,tag:""},{prop:"l",name:"l",pkg:"io",type:C.Mutex,tag:""},{prop:"data",name:"data",pkg:"io",type:AW,tag:""},{prop:"rwait",name:"rwait",pkg:"io",type:C.Cond,tag:""},{prop:"wwait",name:"wwait",pkg:"io",type:C.Cond,tag:""},{prop:"rerr",name:"rerr",pkg:"io",type:$error,tag:""},{prop:"werr",name:"werr",pkg:"io",type:$error,tag:""}]);io.pipeio.pipeio:*io.pipe	io:[]byte	sync.Cond
sync.Mutex AT��AT=$pkg.PipeReader=$newType(0,$kindStruct,"io.PipeReader","PipeReader","io",function(p_){this.$val=this;this.p=p_!==undefined?p_:BE.nil;});��BF.methods=[{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)},{prop:"CloseWithError",name:"CloseWithError",pkg:"",type:$funcType([$error],[$error],false)},{prop:"Read",name:"Read",pkg:"",type:$funcType([AW],[$Int,$error],false)}];7AT.init([{prop:"p",name:"p",pkg:"io",type:BE,tag:""}]);io.PipeReaderio.PipeReaderio:*io.PipeReaderio:*io.pipe	io:[]byte AU��AU=$pkg.PipeWriter=$newType(0,$kindStruct,"io.PipeWriter","PipeWriter","io",function(p_){this.$val=this;this.p=p_!==undefined?p_:BE.nil;});��BG.methods=[{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)},{prop:"CloseWithError",name:"CloseWithError",pkg:"",type:$funcType([$error],[$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AW],[$Int,$error],false)}];7AU.init([{prop:"p",name:"p",pkg:"io",type:BE,tag:""}]);io.PipeWriterio.PipeWriterio:*io.PipeWriterio:*io.pipe	io:[]byte AVAV=$arrayType($Uint8,0);
io:[0]byte AWAW=$sliceType($Uint8);	io:[]byte AXAX=$sliceType(E);io:[]io.Reader	io.Reader AYAY=$sliceType(F);io:[]io.Writer	io.Writer AZAZ=$ptrType(AF);io:*io.LimitedReaderio.LimitedReader BABA=$ptrType(AH);io:*io.SectionReaderio.SectionReader BBBB=$ptrType(AL);io:*io.teeReaderio.teeReader BCBC=$ptrType(AM);io:*io.multiReaderio.multiReader BDBD=$ptrType(AO);io:*io.multiWriterio.multiWriter BEBE=$ptrType(AR);io:*io.pipeio.pipe BFBF=$ptrType(AT);io:*io.PipeReaderio.PipeReader BGBG=$ptrType(AU);io:*io.PipeWriterio.PipeWriter io.ErrShortWrite io.ErrShortBuffer io.EOF io.ErrUnexpectedEOF io.ErrNoProgress AIio.errWhence AJio.errOffset io.ErrClosedPipe ASAS=AV.zero();io.zeroio.zero
io:[0]byte -    $pkg.ErrShortWrite=B.New("short write");
errors.Newio.ErrShortWrite /    $pkg.ErrShortBuffer=B.New("short buffer");
errors.Newio.ErrShortBuffer     $pkg.EOF=B.New("EOF");
errors.Newio.EOF 3    $pkg.ErrUnexpectedEOF=B.New("unexpected EOF");
errors.Newio.ErrUnexpectedEOF M    $pkg.ErrNoProgress=B.New("multiple Read calls return no data or error");
errors.Newio.ErrNoProgress &    AI=B.New("Seek: invalid whence");
errors.Newio.errWhence &    AJ=B.New("Seek: invalid offset");
errors.Newio.errOffset ?    $pkg.ErrClosedPipe=B.New("io: read/write on closed pipe");
errors.Newio.ErrClosedPipe io.PipeDRD=$pkg.Pipe=function(){   \$panic(new A.NotSupportedError.ptr("io.Pipe"));    };io.Pipeio.Piperuntime.NotSupportedError io.WriteStringZ�Z=$pkg.WriteString=function(b,c){var d=0,e=$ifaceNil,f,g,h,i,j;  &�  &�f=$assertType(b,Y,true);g=f[0];h=f[1];    if(h){  '    i=g.WriteString(c);d=i[0];e=i[1];return[d,e];    }  ':    j=b.Write(new AW($stringToBytes(c)));d=j[0];e=j[1];return[d,e];    };io.WriteStringio.WriteStringio.stringWriter	io:[]byte io.ReadAtLeastAA��AA=$pkg.ReadAtLeast=function(b,c,d){var e=0,f=$ifaceNil,g,h,i,j;  )M    if(c.$length<d){  )c    g=0;h=$pkg.ErrShortBuffer;e=g;f=h;return[e,f];    }  )�while(e<d&&$interfaceIsEqual(f,$ifaceNil)){  )�  )�i=0;  )�j=b.Read($subslice(c,e));i=j[0];f=j[1];  )�e=e+(i)>>0;    }  )�    if(e>=d){  )�f=$ifaceNil;        }else if(e>0&&$interfaceIsEqual(f,$pkg.EOF)){  *f=$pkg.ErrUnexpectedEOF;    }  *+return[e,f];    };io.ReadAtLeastio.EOFio.ErrShortBufferio.ErrUnexpectedEOFio.ReadAtLeast io.ReadFullABtAB=$pkg.ReadFull=function(b,c){var d=0,e=$ifaceNil,f;  +�    f=AA(b,c,c.$length);d=f[0];e=f[1];return[d,e];    };io.ReadFullio.ReadAtLeastio.ReadFull io.CopyNAC�bAC=$pkg.CopyN=function(b,c,d){var e=new $Int64(0,0),f=$ifaceNil,g,h,i;  -_g=AD(b,AE(c,d));e=g[0];f=g[1];  -�    if((e.$high===d.$high&&e.$low===d.$low)){  -�    h=d;i=$ifaceNil;e=h;f=i;return[e,f];    }  -�    if((e.$high<d.$high||(e.$high===d.$high&&e.$low<d.$low))&&$interfaceIsEqual(f,$ifaceNil)){  .f=$pkg.EOF;    }  .return[e,f];    };io.CopyNio.Copyio.CopyNio.EOFio.LimitReader io.CopyAD��AD=$pkg.Copy=function(b,c){var d=new $Int64(0,0),e=$ifaceNil,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  1  1
f=$assertType(c,Q,true);g=f[0];h=f[1];    if(h){  1+    i=g.WriteTo(b);d=i[0];e=i[1];return[d,e];    }  1�  1�j=$assertType(b,P,true);k=j[0];l=j[1];    if(l){  1�    m=k.ReadFrom(c);d=m[0];e=m[1];return[d,e];    }  1�n=$makeSlice(AW,32768);  1�while(true){  1�o=c.Read(n);p=o[0];q=o[1];  2    if(p>0){  2"r=b.Write($subslice(n,0,p));s=r[0];t=r[1];  2D    if(s>0){  2Td=(u=new $Int64(0,s),new $Int64(d.$high+u.$high,d.$low+u.$low));    }  2q    if(!($interfaceIsEqual(t,$ifaceNil))){  2�e=t;  2�break;    }  2�    if(!((p===s))){  2�e=$pkg.ErrShortWrite;  2�break;    }    }  2�    if($interfaceIsEqual(q,$pkg.EOF)){  2�break;    }  2�    if(!($interfaceIsEqual(q,$ifaceNil))){  3
e=q;  3break;    }    }  3$    v=d;w=e;d=v;e=w;return[d,e];    };io.Copyio.Copyio.EOFio.ErrShortWriteio.ReaderFromio.WriterTo	io:[]byte io.LimitReaderAEEAE=$pkg.LimitReader=function(b,c){  3�return new AF.ptr(b,c);    };io.LimitReaderio.LimitReaderio.LimitedReader (*io.LimitedReader).Read�AF.ptr.prototype.Read=function(b){var c=0,d=$ifaceNil,e,f,g,h,i,j,k,l,m;  5e=this;  5O    if((f=e.N,(f.$high<0||(f.$high===0&&f.$low<=0)))){  5_    g=0;h=$pkg.EOF;c=g;d=h;return[c,d];    }  5q    if((i=new $Int64(0,b.$length),j=e.N,(i.$high>j.$high||(i.$high===j.$high&&i.$low>j.$low)))){  5�b=$subslice(b,0,$flatten64(e.N));    }  5�k=e.R.Read(b);c=k[0];d=k[1];  5�e.N=(l=e.N,m=new $Int64(0,c),new $Int64(l.$high-m.$high,l.$low-m.$low));  5�return[c,d];    };AF.prototype.Read=function(b){return this.$val.Read(b);};io.LimitedReaderio.EOFio.LimitedReader io.NewSectionReaderAGxAG=$pkg.NewSectionReader=function(b,c,d){  6�return new AH.ptr(b,c,c,new $Int64(c.$high+d.$high,c.$low+d.$low));    };io.NewSectionReaderio.NewSectionReaderio.SectionReader (*io.SectionReader).Read��AH.ptr.prototype.Read=function(b){var c=0,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o,p;  7ye=this;  7�    if((f=e.off,g=e.limit,(f.$high>g.$high||(f.$high===g.$high&&f.$low>=g.$low)))){  7�    h=0;i=$pkg.EOF;c=h;d=i;return[c,d];    }  7�  7�l=(j=e.limit,k=e.off,new $Int64(j.$high-k.$high,j.$low-k.$low));    if((m=new $Int64(0,b.$length),(m.$high>l.$high||(m.$high===l.$high&&m.$low>l.$low)))){  8b=$subslice(b,0,$flatten64(l));    }  8n=e.r.ReadAt(b,e.off);c=n[0];d=n[1];  8=e.off=(o=e.off,p=new $Int64(0,c),new $Int64(o.$high+p.$high,o.$low+p.$low));  8Preturn[c,d];    };AH.prototype.Read=function(b){return this.$val.Read(b);};io.SectionReaderio.EOFio.SectionReader (*io.SectionReader).Seek��AH.ptr.prototype.Seek=function(b,c){var d,e,f,g,h,i,j;  8�d=this;  9
e=c;  9;if(e===0){  9Eb=(f=d.base,new $Int64(b.$high+f.$high,b.$low+f.$low));      9W}else if(e===1){  9ab=(g=d.off,new $Int64(b.$high+g.$high,b.$low+g.$low));      9r}else if(e===2){  9|b=(h=d.limit,new $Int64(b.$high+h.$high,b.$low+h.$low));    }else{  9&return[new $Int64(0,0),AI];    }  9�    if((i=d.base,(b.$high<i.$high||(b.$high===i.$high&&b.$low<i.$low)))){  9�return[new $Int64(0,0),AJ];    }  9�d.off=b;  9�return[(j=d.base,new $Int64(b.$high-j.$high,b.$low-j.$low)),$ifaceNil];    };AH.prototype.Seek=function(b,c){return this.$val.Seek(b,c);};io.SectionReaderio.SectionReaderio.errOffsetio.errWhence (*io.SectionReader).ReadAt�RAH.ptr.prototype.ReadAt=function(b,c){var d=0,e=$ifaceNil,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  9�f=this;  ::    if((c.$high<0||(c.$high===0&&c.$low<0))||(g=(h=f.limit,i=f.base,new $Int64(h.$high-i.$high,h.$low-i.$low)),(c.$high>g.$high||(c.$high===g.$high&&c.$low>=g.$low)))){  :b    j=0;k=$pkg.EOF;d=j;e=k;return[d,e];    }  :tc=(l=f.base,new $Int64(c.$high+l.$high,c.$low+l.$low));  :�  :�n=(m=f.limit,new $Int64(m.$high-c.$high,m.$low-c.$low));    if((o=new $Int64(0,b.$length),(o.$high>n.$high||(o.$high===n.$high&&o.$low>n.$low)))){  :�b=$subslice(b,0,$flatten64(n));  :�p=f.r.ReadAt(b,c);d=p[0];e=p[1];  :�    if($interfaceIsEqual(e,$ifaceNil)){  :�e=$pkg.EOF;    }  ;    q=d;r=e;d=q;e=r;return[d,e];    }  ;    s=f.r.ReadAt(b,c);d=s[0];e=s[1];return[d,e];    };AH.prototype.ReadAt=function(b,c){return this.$val.ReadAt(b,c);};io.SectionReaderio.EOFio.SectionReader (*io.SectionReader).Size��AH.ptr.prototype.Size=function(){var b,c,d;  ;kb=this;  ;�return(c=b.limit,d=b.base,new $Int64(c.$high-d.$high,c.$low-d.$low));    };AH.prototype.Size=function(){return this.$val.Size();};io.SectionReaderio.SectionReader io.TeeReaderAKCAK=$pkg.TeeReader=function(b,c){  =return new AL.ptr(b,c);    };io.TeeReaderio.TeeReaderio.teeReader (*io.teeReader).Read�gAL.ptr.prototype.Read=function(b){var c=0,d=$ifaceNil,e,f,g,h,i,j,k;  =]e=this;  =�f=e.r.Read(b);c=f[0];d=f[1];  =�    if(c>0){  =�  =�g=e.w.Write($subslice(b,0,c));h=g[0];i=g[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  =�    j=h;k=i;c=j;d=k;return[c,d];    }    }  =�return[c,d];    };AL.prototype.Read=function(b){return this.$val.Read(b);};io.teeReaderio.teeReader (*io.multiReader).Read�AM.ptr.prototype.Read=function(b){var c=0,d=$ifaceNil,e,f,g,h,i;  >�e=this;  ?while(e.readers.$length>0){  ?5f=(g=e.readers,((0<0||0>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+0])).Read(b);c=f[0];d=f[1];  ?V    if(c>0||!($interfaceIsEqual(d,$pkg.EOF))){  ?r    if($interfaceIsEqual(d,$pkg.EOF)){  ?�d=$ifaceNil;    }  ?�return[c,d];    }  ?�e.readers=$subslice(e.readers,1);    }  @    h=0;i=$pkg.EOF;c=h;d=i;return[c,d];    };AM.prototype.Read=function(b){return this.$val.Read(b);};io.multiReaderio.EOFio.multiReader io.MultiReaderAN|AN=$pkg.MultiReader=function(b){var c;  Anc=$makeSlice(AX,b.$length);  A�$copySlice(c,b);  A�return new AM.ptr(c);    };io.MultiReaderio.MultiReader	io.Readerio.multiReaderio:[]io.Reader (*io.multiWriter).Write�AO.ptr.prototype.Write=function(b){var c=0,d=$ifaceNil,e,f,g,h,i,j,k;  A�e=this;  B(f=e.writers;g=0;while(g<f.$length){h=((g<0||g>=f.$length)?$throwRuntimeError("index out of range"):f.$array[f.$offset+g]);  BHi=h.Write(b);c=i[0];d=i[1];  B^    if(!($interfaceIsEqual(d,$ifaceNil))){  Bqreturn[c,d];    }  B~    if(!((c===b.$length))){  B�d=$pkg.ErrShortWrite;  B�return[c,d];    }    g++;}  B�    j=b.$length;k=$ifaceNil;c=j;d=k;return[c,d];    };AO.prototype.Write=function(b){return this.$val.Write(b);};io.multiWriterio.ErrShortWriteio.multiWriter io.MultiWriterAP|AP=$pkg.MultiWriter=function(b){var c;  C{c=$makeSlice(AY,b.$length);  C�$copySlice(c,b);  C�return new AO.ptr(c);    };io.MultiWriterio.MultiWriter	io.Writerio.multiWriterio:[]io.Writer (*io.pipe).read�zAR.ptr.prototype.read=function(b){var $deferred=[],$err=null,c=0,d=$ifaceNil,e,f,g,h,i;try{$deferFrames.push($deferred);  G�e=this;  G�e.rl.Lock();  G�$deferred.push([$methodVal(e.rl,"Unlock"),[]]);  He.l.Lock();  H$deferred.push([$methodVal(e.l,"Unlock"),[]]);  H-while(true){  H5    if(!($interfaceIsEqual(e.rerr,$ifaceNil))){  HK    f=0;g=$pkg.ErrClosedPipe;c=f;d=g;return[c,d];    }  Hi    if(!(e.data===AW.nil)){  Hbreak;    }  H�    if(!($interfaceIsEqual(e.werr,$ifaceNil))){  H�    h=0;i=e.werr;c=h;d=i;return[c,d];    }  H�e.rwait.Wait();    }  H�c=$copySlice(b,e.data);  H�e.data=$subslice(e.data,c);  H�    if(e.data.$length===0){  Ie.data=AW.nil;  Ie.wwait.Signal();    }  I1return[c,d];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[c,d];}};AR.prototype.read=function(b){return this.$val.read(b);};io.pipeio.read~io.ErrClosedPipeio.pipe	io:[]byte (*io.pipe).write��AR.ptr.prototype.write=function(b){var $deferred=[],$err=null,c=0,d=$ifaceNil,e;try{$deferFrames.push($deferred);  ISe=this;  I�    if(b===AW.nil){  I�b=new AW(AS);    }  I�e.wl.Lock();  I�$deferred.push([$methodVal(e.wl,"Unlock"),[]]);  Je.l.Lock();  J$deferred.push([$methodVal(e.l,"Unlock"),[]]);  J(    if(!($interfaceIsEqual(e.werr,$ifaceNil))){  J=d=$pkg.ErrClosedPipe;  JSreturn[c,d];    }  J^e.data=b;  Jje.rwait.Signal();  J|while(true){  J�    if(e.data===AW.nil){  J�break;    }  J�    if(!($interfaceIsEqual(e.rerr,$ifaceNil))){  J�d=e.rerr;  J�break;    }  J�    if(!($interfaceIsEqual(e.werr,$ifaceNil))){  J�d=$pkg.ErrClosedPipe;    }  Ke.wwait.Wait();    }  Kc=b.$length-e.data.$length>>0;  K5e.data=AW.nil;  K^return[c,d];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[c,d];}};AR.prototype.write=function(b){return this.$val.write(b);};io.pipe	io.write~io.ErrClosedPipeio.pipeio.zero	io:[]byte (*io.pipe).rclose��AR.ptr.prototype.rclose=function(b){var $deferred=[],$err=null,c;try{$deferFrames.push($deferred);  Knc=this;  K�    if($interfaceIsEqual(b,$ifaceNil)){  K�b=$pkg.ErrClosedPipe;    }  K�c.l.Lock();  K�$deferred.push([$methodVal(c.l,"Unlock"),[]]);  K�c.rerr=b;  K�c.rwait.Signal();  K�c.wwait.Signal();    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AR.prototype.rclose=function(b){return this.$val.rclose(b);};io.pipe
io.rclose~io.ErrClosedPipeio.pipe (*io.pipe).wclose��AR.ptr.prototype.wclose=function(b){var $deferred=[],$err=null,c;try{$deferFrames.push($deferred);  Lc=this;  L.    if($interfaceIsEqual(b,$ifaceNil)){  L@b=$pkg.EOF;    }  LNc.l.Lock();  LZ$deferred.push([$methodVal(c.l,"Unlock"),[]]);  Lnc.werr=b;  L|c.rwait.Signal();  L�c.wwait.Signal();    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};AR.prototype.wclose=function(b){return this.$val.wclose(b);};io.pipe
io.wclose~io.EOFio.pipe (*io.PipeReader).Read��AT.ptr.prototype.Read=function(b){var c=0,d=$ifaceNil,e,f;  M�e=this;  N$    f=e.p.read(b);c=f[0];d=f[1];return[c,d];    };AT.prototype.Read=function(b){return this.$val.Read(b);};io.PipeReaderio.PipeReaderio.read~ (*io.PipeReader).Close��AT.ptr.prototype.Close=function(){var b;  N�b=this;  N�return b.CloseWithError($ifaceNil);    };AT.prototype.Close=function(){return this.$val.Close();};io.PipeReaderio.PipeReader (*io.PipeReader).CloseWithError��AT.ptr.prototype.CloseWithError=function(b){var c;  Opc=this;  O�c.p.rclose(b);  O�return $ifaceNil;    };AT.prototype.CloseWithError=function(b){return this.$val.CloseWithError(b);};io.PipeReaderio.PipeReader
io.rclose~ (*io.PipeWriter).Write��AU.ptr.prototype.Write=function(b){var c=0,d=$ifaceNil,e,f;  Q&e=this;  Q^    f=e.p.write(b);c=f[0];d=f[1];return[c,d];    };AU.prototype.Write=function(b){return this.$val.Write(b);};io.PipeWriterio.PipeWriter	io.write~ (*io.PipeWriter).Close��AU.ptr.prototype.Close=function(){var b;  Q�b=this;  Rreturn b.CloseWithError($ifaceNil);    };AU.prototype.Close=function(){return this.$val.Close();};io.PipeWriterio.PipeWriter (*io.PipeWriter).CloseWithError��AU.ptr.prototype.CloseWithError=function(b){var c;  R�c=this;  R�c.p.wclose(b);  R�return $ifaceNil;    };AU.prototype.CloseWithError=function(b){return this.$val.CloseWithError(b);};io.PipeWriterio.PipeWriter
io.wclose~ �/{"Base":21925,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/io/io.go","Base":1,"Size":138,"Lines":[0,13,14,25,26,35,46,48,49,90,136],"Infos":null},{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/io/io.go","Base":140,"Size":15733,"Lines":[0,55,109,159,160,219,294,361,428,431,507,580,628,639,640,649,659,661,662,734,777,823,824,904,952,953,1023,1094,1157,1229,1252,1280,1281,1339,1398,1450,1451,1517,1580,1638,1716,1717,1778,1781,1854,1922,1999,2070,2128,2131,2195,2257,2326,2386,2449,2514,2579,2608,2611,2676,2745,2806,2832,2835,2895,2957,3022,3083,3086,3124,3148,3183,3185,3186,3248,3251,3318,3386,3452,3515,3574,3577,3615,3639,3675,3677,3678,3740,3743,3803,3864,3888,3903,3905,3906,3967,3970,4032,4102,4167,4237,4245,4248,4317,4386,4440,4464,4511,4513,4514,4591,4619,4627,4635,4637,4638,4715,4743,4751,4759,4761,4762,4841,4870,4878,4886,4888,4889,4978,5011,5019,5027,5035,5037,5038,5114,5142,5150,5158,5160,5161,5239,5268,5276,5284,5286,5287,5375,5408,5416,5424,5432,5434,5435,5498,5501,5551,5602,5675,5678,5729,5757,5798,5800,5801,5861,5864,5931,5998,6067,6070,6119,6145,6185,6187,6188,6253,6256,6322,6382,6436,6439,6501,6567,6600,6603,6672,6747,6823,6873,6876,6944,7012,7015,7080,7142,7158,7161,7223,7245,7248,7286,7312,7360,7362,7363,7429,7432,7500,7584,7650,7715,7718,7780,7843,7859,7862,7931,7976,7979,8017,8043,8092,8094,8095,8158,8161,8221,8266,8294,8326,8328,8329,8400,8426,8429,8500,8537,8607,8628,8657,8669,8689,8691,8692,8756,8784,8809,8811,8812,8875,8878,8937,9003,9034,9062,9104,9106,9107,9178,9204,9207,9278,9315,9385,9406,9435,9447,9467,9469,9470,9538,9568,9610,9612,9613,9703,9776,9834,9871,9898,9901,9928,9930,9931,10006,10086,10134,10191,10232,10313,10363,10432,10453,10480,10483,10512,10525,10553,10563,10566,10581,10593,10626,10651,10654,10662,10664,10665,10723,10803,10851,10914,10952,11007,11064,11102,11104,11105,11166,11224,11260,11314,11317,11364,11401,11474,11521,11540,11556,11559,11591,11635,11647,11650,11658,11660,11661,11720,11782,11847,11850,11907,11970,12028,12031,12076,12132,12190,12247,12310,12373,12410,12445,12470,12473,12548,12585,12611,12614,12644,12651,12677,12691,12725,12740,12765,12770,12788,12801,12811,12816,12833,12857,12867,12872,12876,12893,12902,12906,12923,12935,12944,12948,12951,12972,12974,12975,13025,13062,13116,13191,13192,13249,13301,13351,13379,13410,13443,13445,13446,13506,13521,13537,13540,13566,13581,13584,13606,13623,13631,13633,13634,13696,13756,13827,13872,13874,13875,13939,13969,13997,14013,14026,14039,14052,14054,14055,14115,14138,14154,14157,14207,14222,14225,14256,14275,14283,14285,14286,14337,14388,14389,14461,14478,14488,14510,14519,14538,14547,14565,14574,14594,14597,14619,14641,14644,14660,14689,14691,14692,14765,14804,14820,14823,14838,14886,14901,14931,14949,14962,14966,14982,14985,15012,15014,15015,15065,15130,15131,15200,15258,15322,15376,15444,15488,15513,15515,15516,15540,15550,15560,15562,15563,15619,15641,15653,15699,15716,15720,15723,15731],"Infos":null},{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/io/multi.go","Base":15874,"Size":1479,"Lines":[0,55,109,159,160,171,172,198,216,218,219,278,305,338,365,384,437,470,484,489,499,503,533,536,551,553,554,622,691,765,830,875,910,928,952,954,955,981,999,1001,1002,1061,1092,1114,1132,1142,1146,1165,1188,1198,1202,1205,1225,1227,1228,1298,1355,1400,1435,1453,1477],"Infos":null},{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/io/pipe.go","Base":17354,"Size":4570,"Lines":[0,55,109,159,160,215,252,253,264,265,274,284,292,294,295,377,441,442,467,476,487,489,490,567,586,635,684,731,784,820,856,916,975,977,978,1029,1055,1068,1089,1090,1102,1122,1129,1150,1177,1181,1202,1211,1215,1236,1256,1260,1277,1280,1301,1322,1345,1360,1379,1382,1390,1392,1393,1410,1411,1463,1503,1518,1532,1535,1536,1562,1575,1596,1597,1609,1629,1649,1671,1680,1683,1695,1713,1720,1741,1750,1754,1775,1791,1800,1804,1825,1848,1852,1869,1872,1898,1939,1947,1949,1950,1985,2002,2024,2027,2039,2059,2073,2091,2109,2111,2112,2147,2164,2176,2179,2191,2211,2225,2243,2261,2263,2264,2308,2333,2342,2344,2345,2393,2449,2488,2547,2589,2649,2672,2674,2675,2728,2791,2828,2858,2860,2861,2916,2976,3031,3048,3060,3062,3063,3108,3133,3142,3144,3145,3195,3249,3306,3362,3414,3475,3499,3501,3502,3556,3611,3648,3678,3680,3681,3744,3809,3864,3881,3893,3895,3896,3942,3999,4036,4094,4168,4241,4315,4368,4420,4461,4477,4495,4513,4534,4555,4568],"Infos":null}]}
 