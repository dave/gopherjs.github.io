p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �Z���loglogfmtioosruntimesynctime�%cpackage log
import fmt "fmt"
import io "io"
import os "os"
import runtime "runtime"
import sync "sync"
import time "time"
func @"".Fatal(@"".v ...interface {  }) ()
func @"".Fatalf(@"".format string, @"".v ...interface {  }) ()
func @"".Fatalln(@"".v ...interface {  }) ()
func @"".Flags() (? int)
const @"".Ldate = 0x1
const @"".Llongfile = 0x8
const @"".Lmicroseconds = 0x4
type @"".Logger struct { @"".mu @"sync".Mutex; @"".prefix string; @"".flag int; @"".out @"io".Writer; @"".buf []byte }
func (? *@"".Logger) @"".Fatal(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Fatalf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Fatalln(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Flags() (? int)
func (? *@"".Logger) @"".Output(@"".calldepth int, @"".s string) (? error)
func (? *@"".Logger) @"".Panic(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Panicf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Panicln(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Prefix() (? string)
func (? *@"".Logger) @"".Print(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Printf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Println(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".SetFlags(@"".flag int) ()
func (? *@"".Logger) @"".SetPrefix(@"".prefix string) ()
func (? *@"".Logger) @"".formatHeader(@"".buf *[]byte, @"".t @"time".Time, @"".file string, @"".line int) ()
const @"".Lshortfile = 0x10
const @"".LstdFlags = 0x3
const @"".Ltime = 0x2
func @"".New(@"".out @"io".Writer, @"".prefix string, @"".flag int) (? *@"".Logger)
func @"".Panic(@"".v ...interface {  }) ()
func @"".Panicf(@"".format string, @"".v ...interface {  }) ()
func @"".Panicln(@"".v ...interface {  }) ()
func @"".Prefix() (? string)
func @"".Print(@"".v ...interface {  }) ()
func @"".Printf(@"".format string, @"".v ...interface {  }) ()
func @"".Println(@"".v ...interface {  }) ()
func @"".SetFlags(@"".flag int) ()
func @"".SetOutput(@"".w @"io".Writer) ()
func @"".SetPrefix(@"".prefix string) ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
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
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
-AA=$packages["fmt"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["io"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["os"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["runtime"];E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["sync"];E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} FF=$packages["time"];E    $r=F.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} G�DG=$pkg.Logger=$newType(0,$kindStruct,"log.Logger","Logger","log",function(mu_,prefix_,flag_,out_,buf_){this.$val=this;this.mu=mu_!==undefined?mu_:new E.Mutex.ptr();this.prefix=prefix_!==undefined?prefix_:"";this.flag=flag_!==undefined?flag_:0;this.out=out_!==undefined?out_:$ifaceNil;this.buf=buf_!==undefined?buf_:Y.nil;});�RAC.methods=[{prop:"Fatal",name:"Fatal",pkg:"",type:$funcType([AB],[],true)},{prop:"Fatalf",name:"Fatalf",pkg:"",type:$funcType([$String,AB],[],true)},{prop:"Fatalln",name:"Fatalln",pkg:"",type:$funcType([AB],[],true)},{prop:"Flags",name:"Flags",pkg:"",type:$funcType([],[$Int],false)},{prop:"Output",name:"Output",pkg:"",type:$funcType([$Int,$String],[$error],false)},{prop:"Panic",name:"Panic",pkg:"",type:$funcType([AB],[],true)},{prop:"Panicf",name:"Panicf",pkg:"",type:$funcType([$String,AB],[],true)},{prop:"Panicln",name:"Panicln",pkg:"",type:$funcType([AB],[],true)},{prop:"Prefix",name:"Prefix",pkg:"",type:$funcType([],[$String],false)},{prop:"Print",name:"Print",pkg:"",type:$funcType([AB],[],true)},{prop:"Printf",name:"Printf",pkg:"",type:$funcType([$String,AB],[],true)},{prop:"Println",name:"Println",pkg:"",type:$funcType([AB],[],true)},{prop:"SetFlags",name:"SetFlags",pkg:"",type:$funcType([$Int],[],false)},{prop:"SetPrefix",name:"SetPrefix",pkg:"",type:$funcType([$String],[],false)},{prop:"formatHeader",name:"formatHeader",pkg:"log",type:$funcType([AA,F.Time,$String,$Int],[],false)}];�G.init([{prop:"mu",name:"mu",pkg:"log",type:E.Mutex,tag:""},{prop:"prefix",name:"prefix",pkg:"log",type:$String,tag:""},{prop:"flag",name:"flag",pkg:"log",type:$Int,tag:""},{prop:"out",name:"out",pkg:"log",type:B.Writer,tag:""},{prop:"buf",name:"buf",pkg:"log",type:Y,tag:""}]);
log.Logger	io.Writer
log.Loggerlog:*[]bytelog:*log.Logger
log:[]bytelog:[]interface{}
sync.Mutex	time.Time YY=$sliceType($Uint8);
log:[]byte ZZ=$arrayType($Uint8,32);log:[32]byte AAAA=$ptrType(Y);log:*[]byte
log:[]byte ABAB=$sliceType($emptyInterface);log:[]interface{} ACAC=$ptrType(G);log:*log.Logger
log.Logger Ilog.std     I=H(C.Stderr,"",3);log.Newlog.std	os.Stderr log.NewHWH=$pkg.New=function(a,b,c){  	�return new G.ptr(new E.Mutex.ptr(),b,c,a,Y.nil);    };log.New
log.Loggerlog.New
log:[]byte
sync.Mutex log.itoaJ�.J=function(a,b,c){var d,e,f,g,h;  
�  
�d=(b>>>0);  
�    if((d===0)&&c<=1){  
�a.$set($append(a.$get(),48));  
�return;    }  0  4e=$clone(Z.zero(),Z);  @f=32;  Nwhile(d>0||c>0){  r  rf=f-(1)>>0;  y  yc=c-(1)>>0;  �(f<0||f>=e.length)?$throwRuntimeError("index out of range"):e[f]=((g=d%10,g===g?g:$throwRuntimeError("integer divide by zero"))<<24>>>24)+48<<24>>>24;      fd=(h=d/(10),(h===h&&h!==1/0&&h!==-1/0)?h>>>0:$throwRuntimeError("integer divide by zero"));}  �a.$set($appendSlice(a.$get(),$subslice(new Y(e),f)));    };log.itoalog.itoalog:[32]byte
log:[]byte (*log.Logger).formatHeader�TG.ptr.prototype.formatHeader=function(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;  �e=this;  �b=$clone(b,F.Time);  a.$set($appendSlice(a.$get(),new Y($stringToBytes(e.prefix))));  4    if(!(((e.flag&7)===0))){  c    if(!(((e.flag&1)===0))){  }f=b.Date();g=f[0];h=f[1];i=f[2];  �J(a,g,4);  �a.$set($append(a.$get(),47));  �J(a,(h>>0),2);  �a.$set($append(a.$get(),47));  J(a,i,2);  a.$set($append(a.$get(),32));    }  ;    if(!(((e.flag&6)===0))){  ej=b.Clock();k=j[0];l=j[1];m=j[2];  �J(a,k,2);  �a.$set($append(a.$get(),58));  �J(a,l,2);  �a.$set($append(a.$get(),58));  �J(a,m,2);  �    if(!(((e.flag&4)===0))){  a.$set($append(a.$get(),46));  <J(a,(n=b.Nanosecond()/1000,(n===n&&n!==1/0&&n!==-1/0)?n>>0:$throwRuntimeError("integer divide by zero")),6);    }  ea.$set($append(a.$get(),32));    }    }  �    if(!(((e.flag&24)===0))){  �    if(!(((e.flag&16)===0))){  �o=c;  �  �p=c.length-1>>0;while(p>0){  	    if(c.charCodeAt(p)===47){  "o=c.substring((p+1>>0));  :break;    }      �  �p=p-(1)>>0;}  Nc=o;    }  aa.$set($appendSlice(a.$get(),new Y($stringToBytes(c))));  �a.$set($append(a.$get(),58));  �J(a,d,-1);  �a.$set($appendSlice(a.$get(),new Y($stringToBytes(": "))));    }    };G.prototype.formatHeader=function(a,b,c,d){return this.$val.formatHeader(a,b,c,d);};
log.Loggerlog.formatHeader~
log.Loggerlog.itoa
log:[]byte	time.Time (*log.Logger).Output��G.ptr.prototype.Output=function(a,b){var $deferred=[],$err=null,c,d,e,f,g,h,i,j;try{$deferFrames.push($deferred);  Ic=this;  }d=$clone(F.Now(),F.Time);  �  �e="";  �  �f=0;  �c.mu.Lock();  �$deferred.push([$methodVal(c.mu,"Unlock"),[]]);  �    if(!(((c.flag&24)===0))){  Lc.mu.Unlock();  \  `g=false;  jh=D.Caller(a);e=h[1];f=h[2];g=h[3];  �    if(!g){  �e="???";  �f=0;    }  �c.mu.Lock();    }  �c.buf=$subslice(c.buf,0,0);  �c.formatHeader(new AA(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c),d,e,f);  c.buf=$appendSlice(c.buf,new Y($stringToBytes(b)));  .    if(b.length>0&&!((b.charCodeAt((b.length-1>>0))===10))){  Wc.buf=$append(c.buf,10);    }  wi=c.out.Write(c.buf);j=i[1];  �return j;    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.Output=function(a,b){return this.$val.Output(a,b);};
log.Logger
log.Loggerlog.formatHeader~log:*[]byte
log:[]byteruntime.Callertime.Now	time.Time (*log.Logger).Printf��G.ptr.prototype.Printf=function(a,b){var c;  c=this;  Fc.Output(2,A.Sprintf(a,b));    };G.prototype.Printf=function(a,b){return this.$val.Printf(a,b);};
log.Loggerfmt.Sprintf
log.Logger (*log.Logger).Print��G.ptr.prototype.Print=function(a){var b;  �b=this;   b.Output(2,A.Sprint(a));    };G.prototype.Print=function(a){return this.$val.Print(a);};
log.Logger
fmt.Sprint
log.Logger (*log.Logger).Println��G.ptr.prototype.Println=function(a){var b;  �b=this;  �b.Output(2,A.Sprintln(a));    };G.prototype.Println=function(a){return this.$val.Println(a);};
log.Loggerfmt.Sprintln
log.Logger (*log.Logger).Fatal��G.ptr.prototype.Fatal=function(a){var b;  &b=this;  Lb.Output(2,A.Sprint(a));  kC.Exit(1);    };G.prototype.Fatal=function(a){return this.$val.Fatal(a);};
log.Logger
fmt.Sprint
log.Loggeros.Exit (*log.Logger).Fatalf��G.ptr.prototype.Fatalf=function(a,b){var c;  �c=this;  �c.Output(2,A.Sprintf(a,b));  %C.Exit(1);    };G.prototype.Fatalf=function(a,b){return this.$val.Fatalf(a,b);};
log.Loggerfmt.Sprintf
log.Loggeros.Exit (*log.Logger).Fatalln��G.ptr.prototype.Fatalln=function(a){var b;  �b=this;  �b.Output(2,A.Sprintln(a));  �C.Exit(1);    };G.prototype.Fatalln=function(a){return this.$val.Fatalln(a);};
log.Loggerfmt.Sprintln
log.Loggeros.Exit (*log.Logger).Panic��G.ptr.prototype.Panic=function(a){var b,c;  #b=this;  Ic=A.Sprint(a);  `b.Output(2,c);  p$panic(new $String(c));    };G.prototype.Panic=function(a){return this.$val.Panic(a);};
log.Logger
fmt.Sprint
log.Logger (*log.Logger).Panicf��G.ptr.prototype.Panicf=function(a,b){var c,d;  �c=this;  �d=A.Sprintf(a,b);  c.Output(2,d);  -$panic(new $String(d));    };G.prototype.Panicf=function(a,b){return this.$val.Panicf(a,b);};
log.Loggerfmt.Sprintf
log.Logger (*log.Logger).Panicln��G.ptr.prototype.Panicln=function(a){var b,c;  �b=this;  �c=A.Sprintln(a);  �b.Output(2,c);  �$panic(new $String(c));    };G.prototype.Panicln=function(a){return this.$val.Panicln(a);};
log.Loggerfmt.Sprintln
log.Logger (*log.Logger).Flags�[G.ptr.prototype.Flags=function(){var $deferred=[],$err=null,a;try{$deferFrames.push($deferred);  a=this;  5a.mu.Lock();  B$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  Wreturn a.flag;    }catch(err){$err=err;return 0;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.Flags=function(){return this.$val.Flags();};
log.Logger
log.Logger (*log.Logger).SetFlags�YG.ptr.prototype.SetFlags=function(a){var $deferred=[],$err=null,b;try{$deferFrames.push($deferred);  �b=this;  �b.mu.Lock();  �$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  �b.flag=a;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.SetFlags=function(a){return this.$val.SetFlags(a);};
log.Logger
log.Logger (*log.Logger).Prefix�`G.ptr.prototype.Prefix=function(){var $deferred=[],$err=null,a;try{$deferFrames.push($deferred);  .a=this;  La.mu.Lock();  Y$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  nreturn a.prefix;    }catch(err){$err=err;return"";}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.Prefix=function(){return this.$val.Prefix();};
log.Logger
log.Logger (*log.Logger).SetPrefix�^G.ptr.prototype.SetPrefix=function(a){var $deferred=[],$err=null,b;try{$deferFrames.push($deferred);  �b=this;  �b.mu.Lock();  �$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  b.prefix=a;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.SetPrefix=function(a){return this.$val.SetPrefix(a);};
log.Logger
log.Logger log.SetOutputK�K=$pkg.SetOutput=function(a){var $deferred=[],$err=null;try{$deferFrames.push($deferred);  zI.mu.Lock();  �$deferred.push([$methodVal(I.mu,"Unlock"),[]]);  �I.out=a;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};log.SetOutputlog.SetOutputlog.std 	log.FlagsL5L=$pkg.Flags=function(){  �return I.Flags();    };	log.Flags	log.Flagslog.std log.SetFlagsM6M=$pkg.SetFlags=function(a){  jI.SetFlags(a);    };log.SetFlagslog.SetFlagslog.std 
log.PrefixN7N=$pkg.Prefix=function(){  �return I.Prefix();    };
log.Prefix
log.Prefixlog.std log.SetPrefixO8O=$pkg.SetPrefix=function(a){  JI.SetPrefix(a);    };log.SetPrefixlog.SetPrefixlog.std 	log.PrintP=P=$pkg.Print=function(a){  !I.Output(2,A.Sprint(a));    };	log.Print
fmt.Sprint	log.Printlog.std 
log.PrintfQCQ=$pkg.Printf=function(a,b){  �I.Output(2,A.Sprintf(a,b));    };
log.Printffmt.Sprintf
log.Printflog.std log.PrintlnRAR=$pkg.Println=function(a){   �I.Output(2,A.Sprintln(a));    };log.Printlnfmt.Sprintlnlog.Printlnlog.std 	log.FatalSLS=$pkg.Fatal=function(a){  !)I.Output(2,A.Sprint(a));  !JC.Exit(1);    };	log.Fatal
fmt.Sprint	log.Fatallog.stdos.Exit 
log.FatalfTRT=$pkg.Fatalf=function(a,b){  !�I.Output(2,A.Sprintf(a,b));  !�C.Exit(1);    };
log.Fatalffmt.Sprintf
log.Fatalflog.stdos.Exit log.FatallnUPU=$pkg.Fatalln=function(a){  "pI.Output(2,A.Sprintln(a));  "�C.Exit(1);    };log.Fatallnfmt.Sprintlnlog.Fatallnlog.stdos.Exit 	log.PanicVhV=$pkg.Panic=function(a){var b;  #b=A.Sprint(a);  #I.Output(2,b);  #+$panic(new $String(b));    };	log.Panic
fmt.Sprint	log.Paniclog.std 
log.PanicfWnW=$pkg.Panicf=function(a,b){var c;  #�c=A.Sprintf(a,b);  #�I.Output(2,c);  #�$panic(new $String(c));    };
log.Panicffmt.Sprintf
log.Panicflog.std log.PaniclnXlX=$pkg.Panicln=function(a){var b;  $Ob=A.Sprintln(a);  $hI.Output(2,b);  $z$panic(new $String(b));    };log.Paniclnfmt.Sprintlnlog.Paniclnlog.std ��{"Base":9350,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/log/log.go","Base":1,"Size":9348,"Lines":[0,55,109,159,160,239,314,390,463,532,559,629,694,706,707,716,723,729,735,746,754,762,764,765,851,859,939,1016,1084,1139,1194,1247,1338,1419,1523,1596,1598,1599,1671,1745,1817,1890,1911,1986,2050,2083,2128,2181,2183,2184,2241,2291,2358,2411,2470,2524,2526,2527,2567,2568,2661,2695,2736,2758,2783,2810,2819,2822,2823,2862,2878,2892,2927,2934,2942,2969,2972,3004,3006,3007,3088,3122,3168,3193,3225,3247,3275,3303,3331,3352,3380,3384,3425,3456,3478,3506,3527,3555,3576,3610,3639,3676,3681,3709,3713,3716,3757,3787,3804,3844,3868,3892,3903,3909,3914,3930,3934,3965,3992,4014,4045,4048,4050,4051,4123,4191,4259,4325,4395,4418,4475,4513,4530,4544,4557,4578,4619,4681,4697,4711,4759,4770,4786,4798,4802,4816,4819,4838,4879,4908,4948,4978,4981,5011,5023,5025,5026,5075,5129,5188,5228,5230,5231,5279,5332,5407,5408,5458,5513,5592,5593,5663,5706,5737,5749,5751,5752,5824,5883,5923,5935,5937,5938,6012,6057,6090,6102,6104,6105,6172,6215,6238,6254,6264,6266,6267,6336,6395,6427,6443,6453,6455,6456,6527,6572,6597,6613,6623,6625,6626,6676,6707,6720,6741,6756,6758,6759,6809,6847,6860,6881,6896,6898,6899,6951,6986,6999,7020,7037,7039,7040,7092,7136,7149,7170,7189,7191,7192,7258,7288,7303,7326,7339,7341,7342,7401,7420,7440,7442,7443,7502,7528,7548,7550,7551,7612,7635,7656,7658,7659,7720,7752,7775,7777,7778,7827,7828,7883,7936,7967,8000,8002,8003,8059,8113,8160,8202,8204,8205,8262,8317,8350,8385,8387,8388,8456,8487,8520,8532,8534,8535,8605,8652,8694,8706,8708,8709,8781,8814,8849,8861,8863,8864,8929,8960,8983,9001,9011,9013,9014,9081,9128,9160,9178,9188,9190,9191,9260,9293,9318,9336,9346],"Infos":null}]}
 