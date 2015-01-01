g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   ����net/http/cookiejar�.package cookiejar
import errors "errors"
import fmt "fmt"
import net "net"
import http "net/http"
import url "net/url"
import sort "sort"
import strings "strings"
import sync "sync"
import time "time"
import utf8 "unicode/utf8"
type @"".Jar struct { @"".psList @"".PublicSuffixList; @"".mu @"sync".Mutex; @"".entries map[string]map[string]@"".entry; @"".nextSeqNum uint64 }
func (? *@"".Jar) @"".Cookies(@"".u *@"net/url".URL) (@"".cookies []*@"net/http".Cookie)
func (? *@"".Jar) @"".SetCookies(@"".u *@"net/url".URL, @"".cookies []*@"net/http".Cookie) ()
func (? *@"".Jar) @"".cookies(@"".u *@"net/url".URL, @"".now @"time".Time) (@"".cookies []*@"net/http".Cookie)
func (? *@"".Jar) @"".domainAndType(@"".host string, @"".domain string) (? string, ? bool, ? error)
func (? *@"".Jar) @"".newEntry(@"".c *@"net/http".Cookie, @"".now @"time".Time, @"".defPath string, @"".host string) (@"".e @"".entry, @"".remove bool, @"".err error)
func (? *@"".Jar) @"".setCookies(@"".u *@"net/url".URL, @"".cookies []*@"net/http".Cookie, @"".now @"time".Time) ()
func @"".New(@"".o *@"".Options) (? *@"".Jar, ? error)
type @"".Options struct { @"".PublicSuffixList @"".PublicSuffixList }
type @"".PublicSuffixList interface { @"".PublicSuffix(@"".domain string) (? string); @"".String() (? string) }
type @"".byPathLength []@"".entry
func (? @"".byPathLength) @"".Len() (? int)
func (? @"".byPathLength) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byPathLength) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byPathLength) @"".Len() (? int)
func (? *@"".byPathLength) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byPathLength) @"".Swap(@"".i int, @"".j int) ()
type @"".entry struct { @"".Name string; @"".Value string; @"".Domain string; @"".Path string; @"".Secure bool; @"".HttpOnly bool; @"".Persistent bool; @"".HostOnly bool; @"".Expires @"time".Time; @"".Creation @"time".Time; @"".LastAccess @"time".Time; @"".seqNum uint64 }
func (? *@"".entry) @"".domainMatch(@"".host string) (? bool)
func (? *@"".entry) @"".id() (? string)
func (? *@"".entry) @"".pathMatch(@"".requestPath string) (? bool)
func (? *@"".entry) @"".shouldSend(@"".https bool, @"".host string, @"".path string) (? bool)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"net/url".URL struct { @"net/url".Scheme string; @"net/url".Opaque string; @"net/url".User *@"net/url".Userinfo; @"net/url".Host string; @"net/url".Path string; @"net/url".RawQuery string; @"net/url".Fragment string }
func (? *@"net/url".URL) @"net/url".IsAbs() (? bool)
func (? *@"net/url".URL) @"net/url".Parse(@"net/url".ref string) (? *@"net/url".URL, ? error)
func (? *@"net/url".URL) @"net/url".Query() (? @"net/url".Values)
func (? *@"net/url".URL) @"net/url".RequestURI() (? string)
func (? *@"net/url".URL) @"net/url".ResolveReference(@"net/url".ref *@"net/url".URL) (? *@"net/url".URL)
func (? *@"net/url".URL) @"net/url".String() (? string)
type @"net/http".Cookie struct { @"net/http".Name string; @"net/http".Value string; @"net/http".Path string; @"net/http".Domain string; @"net/http".Expires @"time".Time; @"net/http".RawExpires string; @"net/http".MaxAge int; @"net/http".Secure bool; @"net/http".HttpOnly bool; @"net/http".Raw string; @"net/http".Unparsed []string }
func (? *@"net/http".Cookie) @"net/http".String() (? string)
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
type @"net/url".Userinfo struct { @"net/url".username string; @"net/url".password string; @"net/url".passwordSet bool }
func (? *@"net/url".Userinfo) @"net/url".Password() (? string, ? bool)
func (? *@"net/url".Userinfo) @"net/url".String() (? string)
func (? *@"net/url".Userinfo) @"net/url".Username() (? string)
type @"net/url".Values map[string][]string
func (? @"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? @"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? @"net/url".Values) @"net/url".Encode() (? string)
func (? @"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? @"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Add(@"net/url".key string, @"net/url".value string) ()
func (? *@"net/url".Values) @"net/url".Del(@"net/url".key string) ()
func (? *@"net/url".Values) @"net/url".Encode() (? string)
func (? *@"net/url".Values) @"net/url".Get(@"net/url".key string) (? string)
func (? *@"net/url".Values) @"net/url".Set(@"net/url".key string, @"net/url".value string) ()
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

errorsA fmtB netC net/httpD net/urlE sortF stringsG syncH timeI unicode/utf8J 0E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} E    $r=F.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} E    $r=G.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} E    $r=H.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} E    $r=I.$init($BLOCKING);$s=9;case 9:if($r&&$r.$blocking){$r=$r();} G    $r=J.$init($BLOCKING);$s=10;case 10:if($r&&$r.$blocking){$r=$r();} K}K=$pkg.PublicSuffixList=$newType(8,$kindInterface,"cookiejar.PublicSuffixList","PublicSuffixList","net/http/cookiejar",null);��K.init([["PublicSuffix","PublicSuffix","",$funcType([$String],[$String],false)],["String","String","",$funcType([],[$String],false)]]);PublicSuffixList L��L=$pkg.Options=$newType(0,$kindStruct,"cookiejar.Options","Options","net/http/cookiejar",function(PublicSuffixList_){this.$val=this;this.PublicSuffixList=PublicSuffixList_!==undefined?PublicSuffixList_:$ifaceNil;});:L.init([["PublicSuffixList","PublicSuffixList","",K,""]]);Options#net/http/cookiejar:PublicSuffixList M�`M=$pkg.Jar=$newType(0,$kindStruct,"cookiejar.Jar","Jar","net/http/cookiejar",function(psList_,mu_,entries_,nextSeqNum_){this.$val=this;this.psList=psList_!==undefined?psList_:$ifaceNil;this.mu=mu_!==undefined?mu_:new H.Mutex.Ptr();this.entries=entries_!==undefined?entries_:false;this.nextSeqNum=nextSeqNum_!==undefined?nextSeqNum_:new $Uint64(0,0);});��($ptrType(M)).methods=[["Cookies","Cookies","",$funcType([($ptrType(E.URL))],[($sliceType(($ptrType(D.Cookie))))],false),-1],["SetCookies","SetCookies","",$funcType([($ptrType(E.URL)),($sliceType(($ptrType(D.Cookie))))],[],false),-1],["cookies","cookies","net/http/cookiejar",$funcType([($ptrType(E.URL)),I.Time],[($sliceType(($ptrType(D.Cookie))))],false),-1],["domainAndType","domainAndType","net/http/cookiejar",$funcType([$String,$String],[$String,$Bool,$error],false),-1],["newEntry","newEntry","net/http/cookiejar",$funcType([($ptrType(D.Cookie)),I.Time,$String,$String],[O,$Bool,$error],false),-1],["setCookies","setCookies","net/http/cookiejar",$funcType([($ptrType(E.URL)),($sliceType(($ptrType(D.Cookie)))),I.Time],[],false),-1]];M.init([["psList","psList","net/http/cookiejar",K,""],["mu","mu","net/http/cookiejar",H.Mutex,""],["entries","entries","net/http/cookiejar",($mapType($String,($mapType($String,O)))),""],["nextSeqNum","nextSeqNum","net/http/cookiejar",$Uint64,""]]);Jar#net/http/cookiejar:PublicSuffixListnet/http/cookiejar:entrynet/http:Cookienet/url:URL
sync:Mutex	time:Time O�?O=$pkg.entry=$newType(0,$kindStruct,"cookiejar.entry","entry","net/http/cookiejar",function(Name_,Value_,Domain_,Path_,Secure_,HttpOnly_,Persistent_,HostOnly_,Expires_,Creation_,LastAccess_,seqNum_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Value=Value_!==undefined?Value_:"";this.Domain=Domain_!==undefined?Domain_:"";this.Path=Path_!==undefined?Path_:"";this.Secure=Secure_!==undefined?Secure_:false;this.HttpOnly=HttpOnly_!==undefined?HttpOnly_:false;this.Persistent=Persistent_!==undefined?Persistent_:false;this.HostOnly=HostOnly_!==undefined?HostOnly_:false;this.Expires=Expires_!==undefined?Expires_:new I.Time.Ptr();this.Creation=Creation_!==undefined?Creation_:new I.Time.Ptr();this.LastAccess=LastAccess_!==undefined?LastAccess_:new I.Time.Ptr();this.seqNum=seqNum_!==undefined?seqNum_:new $Uint64(0,0);});�*($ptrType(O)).methods=[["domainMatch","domainMatch","net/http/cookiejar",$funcType([$String],[$Bool],false),-1],["id","id","net/http/cookiejar",$funcType([],[$String],false),-1],["pathMatch","pathMatch","net/http/cookiejar",$funcType([$String],[$Bool],false),-1],["shouldSend","shouldSend","net/http/cookiejar",$funcType([$Bool,$String,$String],[$Bool],false),-1]];O.init([["Name","Name","",$String,""],["Value","Value","",$String,""],["Domain","Domain","",$String,""],["Path","Path","",$String,""],["Secure","Secure","",$Bool,""],["HttpOnly","HttpOnly","",$Bool,""],["Persistent","Persistent","",$Bool,""],["HostOnly","HostOnly","",$Bool,""],["Expires","Expires","",I.Time,""],["Creation","Creation","",I.Time,""],["LastAccess","LastAccess","",I.Time,""],["seqNum","seqNum","net/http/cookiejar",$Uint64,""]]);entry	time:Time QnQ=$pkg.byPathLength=$newType(12,$kindSlice,"cookiejar.byPathLength","byPathLength","net/http/cookiejar",null);�nQ.methods=[["Len","Len","",$funcType([],[$Int],false),-1],["Less","Less","",$funcType([$Int,$Int],[$Bool],false),-1],["Swap","Swap","",$funcType([$Int,$Int],[],false),-1]];($ptrType(Q)).methods=[["Len","Len","",$funcType([],[$Int],false),-1],["Less","Less","",$funcType([$Int,$Int],[$Bool],false),-1],["Swap","Swap","",$funcType([$Int,$Int],[],false),-1]];Q.init(O);byPathLengthnet/http/cookiejar:entry WerrIllegalDomain XerrMalformedDomain YerrNoHostname Z	endOfTime ;    W=A.New("cookiejar: illegal cookie domain attribute");
errors:New#net/http/cookiejar:errIllegalDomain =    X=A.New("cookiejar: malformed cookie domain attribute");
errors:New%net/http/cookiejar:errMalformedDomain <    Y=A.New("cookiejar: no host name available (IP only)");
errors:New net/http/cookiejar:errNoHostname L    Z=new I.Time.Ptr();$copy(Z,I.Date(9999,12,31,23,59,59,0,I.UTC),I.Time);net/http/cookiejar:endOfTime	time:Date	time:Timetime:UTC net/http/cookiejar.NewN��N=$pkg.New=function(a){var b;  	zb=new M.Ptr($ifaceNil,new H.Mutex.Ptr(),new $Map(),new $Uint64(0,0));  	�    if(!(a===($ptrType(L)).nil)){  	�b.psList=a.PublicSuffixList;    }  	�return[b,$ifaceNil];    };Newnet/http/cookiejar:Jarnet/http/cookiejar:Options
sync:Mutex (*net/http/cookiejar.entry).id��O.Ptr.prototype.id=function(){var a;  �a=this;  �return B.Sprintf("%s;%s;%s",new($sliceType($emptyInterface))([new $String(a.Domain),new $String(a.Path),new $String(a.Name)]));    };O.prototype.id=function(){return this.$val.id();};entryidfmt:Sprintfnet/http/cookiejar:entry &(*net/http/cookiejar.entry).shouldSend��O.Ptr.prototype.shouldSend=function(a,b,c){var d;  �d=this;  �return d.domainMatch(b)&&d.pathMatch(c)&&(a||!d.Secure);    };O.prototype.shouldSend=function(a,b,c){return this.$val.shouldSend(a,b,c);};entry
shouldSendnet/http/cookiejar:domainMatchnet/http/cookiejar:entrynet/http/cookiejar:pathMatch '(*net/http/cookiejar.entry).domainMatch��O.Ptr.prototype.domainMatch=function(a){var b;  zb=this;  �    if(b.Domain===a){  �return true;    }  �return!b.HostOnly&&P(a,b.Domain);    };O.prototype.domainMatch=function(a){return this.$val.domainMatch(a);};entrydomainMatchnet/http/cookiejar:entrynet/http/cookiejar:hasDotSuffix %(*net/http/cookiejar.entry).pathMatch��O.Ptr.prototype.pathMatch=function(a){var b;  Sb=this;  �    if(a===b.Path){  �return true;    }  �    if(G.HasPrefix(a,b.Path)){  �    if(b.Path.charCodeAt((b.Path.length-1>>0))===47){  return true;        }else if(a.charCodeAt(b.Path.length)===47){  ireturn true;    }    }  �return false;    };O.prototype.pathMatch=function(a){return this.$val.pathMatch(a);};entry	pathMatchnet/http/cookiejar:entrystrings:HasPrefix net/http/cookiejar.hasDotSuffixP��P=function(a,b){  return a.length>b.length&&(a.charCodeAt(((a.length-b.length>>0)-1>>0))===46)&&a.substring((a.length-b.length>>0))===b;    };hasDotSuffix %(net/http/cookiejar.byPathLength).Len��Q.prototype.Len=function(){var a;  6a=this;  Rreturn a.$length;    };$ptrType(Q).prototype.Len=function(){return this.$get().Len();};byPathLengthnet/http/cookiejar:byPathLength &(net/http/cookiejar.byPathLength).Less��Q.prototype.Less=function(a,b){var c,d,e;  ic=this;  �    if(!((((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Path.length===((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Path.length))){  �return((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Path.length>((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Path.length;    }  �    if(!((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Creation.Equal($clone(((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Creation,I.Time))){  return((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Creation.Before($clone(((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Creation,I.Time));    }  =return(d=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).seqNum,e=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).seqNum,(d.$high<e.$high||(d.$high===e.$high&&d.$low<e.$low)));    };$ptrType(Q).prototype.Less=function(a,b){return this.$get().Less(a,b);};byPathLengthnet/http/cookiejar:byPathLength	time:Time &(net/http/cookiejar.byPathLength).Swap�%Q.prototype.Swap=function(a,b){var c,d,e;  gc=this;  �d=new O.Ptr();$copy(d,((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]),O);e=new O.Ptr();$copy(e,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]),O);$copy(((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]),d,O);$copy(((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]),e,O);    };$ptrType(Q).prototype.Swap=function(a,b){return this.$get().Swap(a,b);};byPathLengthnet/http/cookiejar:byPathLengthnet/http/cookiejar:entry !(*net/http/cookiejar.Jar).Cookies��M.Ptr.prototype.Cookies=function(a){var b=($sliceType(($ptrType(D.Cookie)))).nil,c;  =c=this;  u    b=c.cookies(a,$clone(I.Now(),I.Time));return b;    };M.prototype.Cookies=function(a){return this.$val.Cookies(a);};Jarnet/http/cookiejar:Jarnet/http/cookiejar:cookiesnet/http:Cookietime:Now	time:Time !(*net/http/cookiejar.Jar).cookies�iM.Ptr.prototype.cookies=function(a,b){var c=($sliceType(($ptrType(D.Cookie)))).nil,$deferred=[],$err=null,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;try{$deferFrames.push($deferred);  �d=this;  +    if(!(a.Scheme==="http")&&!(a.Scheme==="https")){  \    c=c;return c;    }  oe=R(a.Host);f=e[0];g=e[1];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �    c=c;return c;    }  �h=T(f,d.psList);  �d.mu.Lock();  �$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  �j=(i=d.entries[h],i!==undefined?i.v:false);      if(j===false){  *    c=c;return c;    }  >k=a.Scheme==="https";  \l=a.Path;  l    if(l===""){  ~l="/";    }  �m=false;  �  �n=($sliceType(O)).nil;  �o=j;p=0;q=$keys(o);while(p<q.length){r=o[q[p]];        if(r===undefined){    p++;continue;    }s=r.k;t=new O.Ptr();$copy(t,r.v,O);  �    if(t.Persistent&&!t.Expires.After($clone(b,I.Time))){  delete j[s];  m=true;  ,p++;continue;    }  ;    if(!t.shouldSend(k,f,l)){  dp++;continue;    }  s$copy(t.LastAccess,b,I.Time);  �u=s;(j||$throwRuntimeError("assignment to entry in nil map"))[u]={k:u,v:$clone(t,O)};  �n=$append(n,t);  �m=true;    p++;}  �    if(m){  �    if($keys(j).length===0){  �delete d.entries[h];    }else{  v=h;(d.entries||$throwRuntimeError("assignment to entry in nil map"))[v]={k:v,v:j};    }    }  =F.Sort($subslice(new Q(n.$array),n.$offset,n.$offset+n.$length));  `w=n;x=0;while(x<w.$length){y=new O.Ptr();$copy(y,((x<0||x>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+x]),O);  c=$append(c,new D.Cookie.Ptr(y.Name,y.Value,"","",new I.Time.Ptr(),"",0,false,false,"",($sliceType($String)).nil));    x++;}  �    c=c;return c;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return c;}};M.prototype.cookies=function(a,b){return this.$val.cookies(a,b);};Jarcookies	net/http/cookiejar:Jarnet/http/cookiejar:byPathLength net/http/cookiejar:canonicalHostnet/http/cookiejar:entrynet/http/cookiejar:jarKeynet/http/cookiejar:shouldSendnet/http:Cookie	sort:Sort	time:Time $(*net/http/cookiejar.Jar).SetCookies��M.Ptr.prototype.SetCookies=function(a,b){var c;  rc=this;  �c.setCookies(a,b,$clone(I.Now(),I.Time));    };M.prototype.SetCookies=function(a,b){return this.$val.SetCookies(a,b);};Jarnet/http/cookiejar:Jarnet/http/cookiejar:setCookiestime:Now	time:Time $(*net/http/cookiejar.Jar).setCookies��M.Ptr.prototype.setCookies=function(a,b,c){var $deferred=[],$err=null,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae;try{$deferFrames.push($deferred);  $d=this;  m    if(b.$length===0){  �return;    }  �    if(!(a.Scheme==="http")&&!(a.Scheme==="https")){  �return;    }  �e=R(a.Host);f=e[0];g=e[1];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  return;    }  h=T(f,d.psList);  -i=V(a.Path);  Nd.mu.Lock();  [$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  qk=(j=d.entries[h],j!==undefined?j.v:false);  �l=false;  �m=b;n=0;while(n<m.$length){o=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]);  �p=d.newEntry(o,$clone(c,I.Time),i,f);q=new O.Ptr();$copy(q,p[0],O);r=p[1];s=p[2];  �    if(!($interfaceIsEqual(s,$ifaceNil))){  n++;continue;    }  t=q.id();  .    if(r){  =    if(!(k===false)){  T  Wu=(v=k[t],v!==undefined?[v.v,true]:[new O.Ptr(),false]);w=u[1];    if(w){  vdelete k[t];  �l=true;    }    }  �n++;continue;    }  �    if(k===false){  �k=new $Map();    }  �  �x=(y=k[t],y!==undefined?[y.v,true]:[new O.Ptr(),false]);z=new O.Ptr();$copy(z,x[0],O);aa=x[1];    if(aa){  $copy(q.Creation,z.Creation,I.Time);  7q.seqNum=z.seqNum;    }else{  [$copy(q.Creation,c,I.Time);  oq.seqNum=d.nextSeqNum;  �  �d.nextSeqNum=(ab=d.nextSeqNum,ac=new $Uint64(0,1),new $Uint64(ab.$high+ac.$high,ab.$low+ac.$low));    }  �$copy(q.LastAccess,c,I.Time);  �ad=t;(k||$throwRuntimeError("assignment to entry in nil map"))[ad]={k:ad,v:$clone(q,O)};  �l=true;    n++;}  �    if(l){  �    if($keys(k).length===0){  delete d.entries[h];    }else{  (ae=h;(d.entries||$throwRuntimeError("assignment to entry in nil map"))[ae]={k:ae,v:k};    }    }    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};M.prototype.setCookies=function(a,b,c){return this.$val.setCookies(a,b,c);};Jar
setCookiesnet/http/cookiejar:Jar net/http/cookiejar:canonicalHostnet/http/cookiejar:defaultPathnet/http/cookiejar:entrynet/http/cookiejar:idnet/http/cookiejar:jarKeynet/http/cookiejar:newEntry	time:Time  net/http/cookiejar.canonicalHostR�/R=function(a){var b,c;  �  �b=$ifaceNil;  �a=G.ToLower(a);      if(S(a)){  c=C.SplitHostPort(a);a=c[0];b=c[2];  F    if(!($interfaceIsEqual(b,$ifaceNil))){  Yreturn["",b];    }    }  p    if(G.HasSuffix(a,".")){  �a=a.substring(0,(a.length-1>>0));    }  �return AD(a);    };canonicalHostnet/http/cookiejar:hasPortnet/http/cookiejar:toASCIInet:SplitHostPortstrings:HasSuffixstrings:ToLower net/http/cookiejar.hasPortS��S=function(a){var b;   �b=G.Count(a,":");   �    if(b===0){   �return false;    }   �    if(b===1){   �return true;    }  !return(a.charCodeAt(0)===91)&&G.Contains(a,"]:");    };hasPortstrings:Containsstrings:Count net/http/cookiejar.jarKeyT��T=function(a,b){var c,d,e;  !�    if(U(a)){  !�return a;    }  !�  !�c=0;  !�    if($interfaceIsEqual(b,$ifaceNil)){  !�c=G.LastIndex(a,".");  "    if(c===-1){  "return a;    }    }else{  "/d=b.PublicSuffix(a);  "R    if(d===a){  "ireturn a;    }  "{c=a.length-d.length>>0;  "�    if(c<=0||!((a.charCodeAt((c-1>>0))===46))){  #%return a;    }    }  #9e=G.LastIndex(a.substring(0,(c-1>>0)),".");  #hreturn a.substring((e+1>>0));    };jarKeynet/http/cookiejar:isIPstrings:LastIndex net/http/cookiejar.isIPU;U=function(a){  #�return!(C.ParseIP(a)===C.IP.nil);    };isIPnet:IPnet:ParseIP net/http/cookiejar.defaultPathV��V=function(a){var b;  $    if((a.length===0)||!((a.charCodeAt(0)===47))){  $�return"/";    }  $�b=G.LastIndex(a,"/");  %    if(b===0){  %,return"/";    }  %Xreturn a.substring(0,b);    };defaultPathstrings:LastIndex "(*net/http/cookiejar.Jar).newEntry�M.Ptr.prototype.newEntry=function(a,b,c,d){var e=new O.Ptr(),f=false,g=$ifaceNil,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  '�h=this;  (e.Name=a.Name;  (+    if(a.Path===""||!((a.Path.charCodeAt(0)===47))){  (Se.Path=c;    }else{  (pe.Path=a.Path;    }  (�i=h.domainAndType(d,a.Domain);e.Domain=i[0];e.HostOnly=i[1];g=i[2];  (�    if(!($interfaceIsEqual(g,$ifaceNil))){  (�    j=new O.Ptr();$copy(j,e,O);k=false;l=g;$copy(e,j,O);f=k;g=l;return[e,f,g];    }  )    if(a.MaxAge<0){  ),    m=new O.Ptr();$copy(m,e,O);n=true;o=$ifaceNil;$copy(e,m,O);f=n;g=o;return[e,f,g];        }else if(a.MaxAge>0){  )\$copy(e.Expires,b.Add($mul64(new I.Duration(0,a.MaxAge),new I.Duration(0,1000000000))),I.Time);  )�e.Persistent=true;    }else{  )�    if(a.Expires.IsZero()){  )�$copy(e.Expires,Z,I.Time);  )�e.Persistent=false;    }else{  *    if(!a.Expires.After($clone(b,I.Time))){  */    p=new O.Ptr();$copy(p,e,O);q=true;r=$ifaceNil;$copy(e,p,O);f=q;g=r;return[e,f,g];    }  *K$copy(e.Expires,a.Expires,I.Time);  *de.Persistent=true;    }    }  *�e.Value=a.Value;  *�e.Secure=a.Secure;  *�e.HttpOnly=a.HttpOnly;  *�    s=new O.Ptr();$copy(s,e,O);t=false;u=$ifaceNil;$copy(e,s,O);f=t;g=u;return[e,f,g];    };M.prototype.newEntry=function(a,b,c,d){return this.$val.newEntry(a,b,c,d);};JarnewEntrynet/http/cookiejar:Jar net/http/cookiejar:domainAndTypenet/http/cookiejar:endOfTimenet/http/cookiejar:entrytime:Duration	time:Time '(*net/http/cookiejar.Jar).domainAndType�%M.Ptr.prototype.domainAndType=function(a,b){var c,d;  -+c=this;  -o    if(b===""){  -�return[a,true,$ifaceNil];    }  -�    if(U(a)){  .�return["",false,Y];    }  /F    if(b.charCodeAt(0)===46){  /^b=b.substring(1);    }  /w    if((b.length===0)||(b.charCodeAt(0)===46)){  /�return["",false,X];    }  0b=G.ToLower(b);  0@    if(b.charCodeAt((b.length-1>>0))===46){  1�return["",false,X];    }  1�    if(!($interfaceIsEqual(c.psList,$ifaceNil))){  2  2d=c.psList.PublicSuffix(b);    if(!(d==="")&&!P(b,d)){  2U    if(a===b){  2�return[a,true,$ifaceNil];    }  2�return["",false,W];    }    }  3�    if(!(a===b)&&!P(a,b)){  3�return["",false,W];    }  3�return[b,false,$ifaceNil];    };M.prototype.domainAndType=function(a,b){return this.$val.domainAndType(a,b);};JardomainAndTypenet/http/cookiejar:Jar#net/http/cookiejar:errIllegalDomain%net/http/cookiejar:errMalformedDomain net/http/cookiejar:errNoHostnamenet/http/cookiejar:hasDotSuffixnet/http/cookiejar:isIPstrings:ToLower net/http/cookiejar.encodeAA�AA=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah;  7�c=($sliceType($Uint8)).make(a.length,((a.length+1>>0)+(2*b.length>>0)>>0));  7�$copyString(c,a);  8	d=0;e=128;f=72;g=d;h=e;i=f;  8<j=0;k=0;l=j;m=k;  8`n=b;o=0;while(o<n.length){p=$decodeRune(n,o);q=p[0];  8x    if(q<128){  8�  8�l=l+(1)>>0;  8�c=$append(c,(q<<24>>>24));    }else{  8�  8�m=m+(1)>>0;    }    o+=p[1];}  8�r=l;  8�    if(l>0){  8�c=$append(c,45);    }  9	while(!((m===0))){  9 s=2147483647;  99t=b;u=0;while(u<t.length){v=$decodeRune(t,u);w=v[0];  9R    if(s>w&&w>=h){  9ks=w;    }    u+=v[1];}  9|g=g+((x=(s-h>>0),y=(r+1>>0),(((x>>>16<<16)*y>>0)+(x<<16>>>16)*y)>>0))>>0;  9�    if(g<0){  9�return["",B.Errorf("cookiejar: invalid label %q",new($sliceType($emptyInterface))([new $String(b)]))];    }  9�h=s;  9�z=b;aa=0;while(aa<z.length){ab=$decodeRune(z,aa);ac=ab[0];  :
    if(ac<h){  :  :g=g+(1)>>0;  :%    if(g<0){  :9return["",B.Errorf("cookiejar: invalid label %q",new($sliceType($emptyInterface))([new $String(b)]))];    }  :{aa+=ab[1];continue;    }  :�    if(ac>h){  :�aa+=ab[1];continue;    }  :�ad=g;  :�  :�ae=36;while(true){  :�af=ae-i>>0;  :�    if(af<1){  ; af=1;        }else if(af>26){  ;'af=26;    }  ;:    if(ad<af){  ;Jbreak;    }  ;Zc=$append(c,AB(af+(ag=((ad-af>>0))%((36-af>>0)),ag===ag?ag:$throwRuntimeError("integer divide by zero"))>>0));  ;�ad=(ah=((ad-af>>0))/((36-af>>0)),(ah===ah&&ah!==1/0&&ah!==-1/0)?ah>>0:$throwRuntimeError("integer divide by zero"));      :�ae=ae+(36)>>0;}  ;�c=$append(c,AB(ad));  ;�i=AC(g,r+1>>0,r===l);  <g=0;  <  <r=r+(1)>>0;  <  <m=m-(1)>>0;    aa+=ab[1];}  <+  <+g=g+(1)>>0;  <5  <5h=h+(1)>>0;    }  <=return[$bytesToString(c),$ifaceNil];    };encode
fmt:Errorfnet/http/cookiejar:adaptnet/http/cookiejar:encodeDigit net/http/cookiejar.encodeDigitAB��AB=function(a){  <�  <�if(0<=a&&a<26){  <�return((a+97>>0)<<24>>>24);      <�}else if(26<=a&&a<36){  <�return((a+22>>0)<<24>>>24);    }  =$panic(new $String("cookiejar: internal error in punycode encoding"));    };encodeDigit net/http/cookiejar.adaptAC��AC=function(a,b,c){var d,e,f,g,h,i;  =�    if(c){  =�a=(d=a/(700),(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero"));    }else{  =�a=(e=a/(2),(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero"));    }  > a=a+((f=a/b,(f===f&&f!==1/0&&f!==-1/0)?f>>0:$throwRuntimeError("integer divide by zero")))>>0;  >g=0;  >+while(a>455){  >Pa=(h=a/(35),(h===h&&h!==1/0&&h!==-1/0)?h>>0:$throwRuntimeError("integer divide by zero"));  >gg=g+(36)>>0;    }  >ureturn g+(i=((((36>>>16<<16)*a>>0)+(36<<16>>>16)*a)>>0)/((a+38>>0)),(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"))>>0;    };adapt net/http/cookiejar.toASCIIAD��AD=function(a){var b,c,d,e,f,g,h,i;  @Q    if(AE(a)){  @areturn[a,$ifaceNil];    }  @sb=G.Split(a,".");  @�c=b;d=0;while(d<c.$length){e=d;f=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  @�    if(!AE(f)){  @�g=AA("xn--",f);h=g[0];i=g[1];  @�    if(!($interfaceIsEqual(i,$ifaceNil))){  Areturn["",i];    }  A(e<0||e>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+e]=h;    }    d++;}  A2return[G.Join(b,"."),$ifaceNil];    };toASCIInet/http/cookiejar:asciinet/http/cookiejar:encodestrings:Joinstrings:Split net/http/cookiejar.asciiAE��AE=function(a){var b;  Ax  A|b=0;while(b<a.length){  A�    if(a.charCodeAt(b)>=128){  A�return false;    }      A�  A�b=b+(1)>>0;}  A�return true;    };ascii ��{"Base":16858,"Files":[{"Name":"/usr/local/go/src/net/http/cookiejar/jar.go","Base":1,"Size":13309,"Lines":[0,55,109,159,160,240,258,259,268,278,285,292,304,315,323,334,342,350,352,353,426,481,551,622,625,699,723,726,801,880,909,912,969,1003,1037,1091,1095,1166,1238,1260,1296,1297,1366,1437,1466,1483,1485,1486,1537,1559,1630,1680,1684,1753,1826,1845,1880,1882,1883,1957,1975,2000,2001,2036,2051,2052,2123,2151,2188,2189,2257,2281,2300,2302,2303,2375,2387,2424,2438,2484,2487,2502,2536,2539,2556,2558,2559,2612,2615,2696,2729,2749,2768,2787,2806,2825,2842,2859,2876,2893,2915,2937,2959,2960,3029,3103,3153,3168,3170,3171,3228,3258,3316,3318,3319,3393,3468,3490,3555,3628,3630,3631,3699,3747,3770,3784,3787,3839,3841,3842,3916,3969,3997,4011,4014,4059,4095,4151,4197,4252,4256,4259,4273,4275,4276,4330,4373,4472,4474,4475,4552,4628,4654,4655,4705,4706,4750,4789,4830,4833,4875,4920,4923,4957,4959,4960,5025,5026,5100,5103,5174,5235,5268,5270,5271,5341,5417,5465,5482,5485,5521,5538,5555,5558,5589,5590,5603,5624,5625,5651,5671,5688,5691,5692,5722,5738,5755,5768,5771,5772,5791,5813,5842,5887,5909,5928,5940,5944,5984,5996,6000,6021,6038,6071,6089,6092,6107,6131,6157,6168,6195,6199,6202,6203,6238,6268,6340,6343,6344,6360,6362,6363,6443,6446,6507,6570,6608,6610,6611,6685,6763,6787,6796,6799,6847,6856,6859,6895,6912,6921,6924,6955,6987,6988,7001,7022,7023,7049,7050,7069,7103,7162,7180,7192,7196,7211,7225,7247,7280,7304,7325,7331,7336,7348,7352,7373,7408,7412,7413,7446,7475,7500,7511,7531,7558,7576,7580,7601,7618,7636,7639,7640,7655,7679,7705,7716,7743,7747,7750,7752,7753,7833,7847,7897,7912,7942,7962,8003,8021,8039,8043,8046,8081,8140,8168,8171,8193,8195,8196,8271,8308,8341,8377,8395,8410,8413,8431,8445,8448,8503,8505,8506,8550,8606,8623,8637,8640,8641,8652,8669,8704,8719,8734,8738,8748,8783,8805,8820,8824,8854,8888,8941,8993,9008,9012,9015,9062,9087,9089,9090,9137,9167,9200,9202,9203,9275,9302,9341,9380,9424,9427,9428,9500,9513,9555,9558,9628,9630,9631,9710,9791,9867,9870,9949,10028,10099,10102,10151,10263,10280,10281,10320,10339,10349,10367,10370,10371,10432,10449,10472,10475,10476,10518,10537,10559,10585,10646,10668,10678,10704,10729,10753,10764,10794,10818,10823,10848,10871,10875,10878,10879,10898,10919,10944,10945,10967,10969,10970,10976,11055,11136,11216,11218,11219,11290,11359,11418,11483,11484,11556,11629,11648,11709,11727,11752,11755,11756,11773,11835,11855,11911,11945,11948,11949,12019,12068,12100,12123,12145,12148,12149,12192,12250,12273,12312,12315,12349,12350,12385,12440,12502,12565,12621,12683,12701,12740,12743,12744,12777,12799,12881,12904,12955,13004,13031,13036,13074,13078,13081,13082,13146,13187,13239,13276,13279,13280,13307],"Infos":null},{"Name":"/usr/local/go/src/net/http/cookiejar/punycode.go","Base":13311,"Size":3546,"Lines":[0,55,109,159,160,178,179,241,242,251,258,269,285,287,288,342,345,424,474,482,506,531,555,580,604,628,651,653,654,732,747,750,822,902,950,1011,1033,1084,1120,1143,1159,1166,1202,1213,1228,1232,1235,1243,1255,1286,1289,1311,1336,1360,1384,1394,1399,1403,1432,1449,1508,1512,1520,1544,1558,1570,1589,1650,1656,1669,1674,1688,1701,1706,1720,1752,1770,1788,1802,1827,1841,1847,1862,1873,1879,1938,1967,1972,2015,2051,2064,2071,2086,2090,2100,2106,2109,2137,2139,2140,2177,2187,2219,2246,2279,2313,2316,2373,2375,2376,2443,2502,2518,2534,2544,2557,2560,2588,2603,2639,2662,2674,2677,2722,2724,2725,2802,2850,2851,2905,2930,2931,3008,3078,3112,3153,3168,3184,3187,3220,3252,3273,3311,3330,3349,3354,3371,3375,3378,3417,3419,3420,3448,3479,3508,3524,3528,3531,3544],"Infos":null}]}
 