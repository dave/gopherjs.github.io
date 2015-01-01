g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   ����net/mail�%�package mail
import bufio "bufio"
import bytes "bytes"
import base64 "encoding/base64"
import errors "errors"
import fmt "fmt"
import io "io"
import ioutil "io/ioutil"
import log "log"
import textproto "net/textproto"
import strconv "strconv"
import strings "strings"
import time "time"
import unicode "unicode"
type @"".Address struct { @"".Name string; @"".Address string }
func (? *@"".Address) @"".String() (? string)
var @"".ErrHeaderNotPresent error
type @"".Header map[string][]string
func (? @"".Header) @"".AddressList(@"".key string) (? []*@"".Address, ? error)
func (? @"".Header) @"".Date() (? @"time".Time, ? error)
func (? @"".Header) @"".Get(@"".key string) (? string)
func (? *@"".Header) @"".AddressList(@"".key string) (? []*@"".Address, ? error)
func (? *@"".Header) @"".Date() (? @"time".Time, ? error)
func (? *@"".Header) @"".Get(@"".key string) (? string)
type @"".Message struct { @"".Header @"".Header; @"".Body @"io".Reader }
func @"".ParseAddress(@"".address string) (? *@"".Address, ? error)
func @"".ParseAddressList(@"".list string) (? []*@"".Address, ? error)
func @"".ReadMessage(@"".r @"io".Reader) (@"".msg *@"".Message, @"".err error)
type @"".addrParser []byte
func (? *@"".addrParser) @"".consume(@"".c byte) (? bool)
func (? *@"".addrParser) @"".consumeAddrSpec() (@"".spec string, @"".err error)
func (? *@"".addrParser) @"".consumeAtom(@"".dot bool) (@"".atom string, @"".err error)
func (? *@"".addrParser) @"".consumePhrase() (@"".phrase string, @"".err error)
func (? *@"".addrParser) @"".consumeQuotedString() (@"".qs string, @"".err error)
func (? *@"".addrParser) @"".empty() (? bool)
func (? *@"".addrParser) @"".len() (? int)
func (? *@"".addrParser) @"".parseAddress() (@"".addr *@"".Address, @"".err error)
func (? *@"".addrParser) @"".parseAddressList() (? []*@"".Address, ? error)
func (? *@"".addrParser) @"".peek() (? byte)
func (? *@"".addrParser) @"".skipSpace() ()
type @"".debugT bool
func (? @"".debugT) @"".Printf(@"".format string, @"".args ...interface {  }) ()
func (? *@"".debugT) @"".Printf(@"".format string, @"".args ...interface {  }) ()
type @"".qDecoder struct { @"".r @"io".Reader; @"".scratch [2]byte }
func (? @"".qDecoder) @"".Read(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".qDecoder) @"".Read(@"".p []byte) (@"".n int, @"".err error)
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
bufioA bytesB encoding/base64C errorsD fmtE ioF 	io/ioutilG logH net/textprotoI strconvJ stringsK timeL unicodeM 6E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} E    $r=F.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} E    $r=G.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} E    $r=H.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} E    $r=I.$init($BLOCKING);$s=9;case 9:if($r&&$r.$blocking){$r=$r();} G    $r=J.$init($BLOCKING);$s=10;case 10:if($r&&$r.$blocking){$r=$r();} G    $r=K.$init($BLOCKING);$s=11;case 11:if($r&&$r.$blocking){$r=$r();} G    $r=L.$init($BLOCKING);$s=12;case 12:if($r&&$r.$blocking){$r=$r();} G    $r=M.$init($BLOCKING);$s=13;case 13:if($r&&$r.$blocking){$r=$r();} OKO=$pkg.debugT=$newType(1,$kindBool,"mail.debugT","debugT","net/mail",null);��O.methods=[["Printf","Printf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1]];($ptrType(O)).methods=[["Printf","Printf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1]];debugT P��P=$pkg.Message=$newType(0,$kindStruct,"mail.Message","Message","net/mail",function(Header_,Body_){this.$val=this;this.Header=Header_!==undefined?Header_:false;this.Body=Body_!==undefined?Body_:$ifaceNil;});EP.init([["Header","Header","",U,""],["Body","Body","",F.Reader,""]]);Message	io:Readernet/mail:Header UJU=$pkg.Header=$newType(4,$kindMap,"mail.Header","Header","net/mail",null);��U.methods=[["AddressList","AddressList","",$funcType([$String],[($sliceType(($ptrType(V)))),$error],false),-1],["Date","Date","",$funcType([],[L.Time,$error],false),-1],["Get","Get","",$funcType([$String],[$String],false),-1]];($ptrType(U)).methods=[["AddressList","AddressList","",$funcType([$String],[($sliceType(($ptrType(V)))),$error],false),-1],["Date","Date","",$funcType([],[L.Time,$error],false),-1],["Get","Get","",$funcType([$String],[$String],false),-1]];U.init($String,($sliceType($String)));Headernet/mail:Address	time:Time V��V=$pkg.Address=$newType(0,$kindStruct,"mail.Address","Address","net/mail",function(Name_,Address_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Address=Address_!==undefined?Address_:"";});��($ptrType(V)).methods=[["String","String","",$funcType([],[$String],false),-1]];V.init([["Name","Name","",$String,""],["Address","Address","",$String,""]]);Address YYY=$pkg.addrParser=$newType(12,$kindSlice,"mail.addrParser","addrParser","net/mail",null);��($ptrType(Y)).methods=[["consume","consume","net/mail",$funcType([$Uint8],[$Bool],false),-1],["consumeAddrSpec","consumeAddrSpec","net/mail",$funcType([],[$String,$error],false),-1],["consumeAtom","consumeAtom","net/mail",$funcType([$Bool],[$String,$error],false),-1],["consumePhrase","consumePhrase","net/mail",$funcType([],[$String,$error],false),-1],["consumeQuotedString","consumeQuotedString","net/mail",$funcType([],[$String,$error],false),-1],["empty","empty","net/mail",$funcType([],[$Bool],false),-1],["len","len","net/mail",$funcType([],[$Int],false),-1],["parseAddress","parseAddress","net/mail",$funcType([],[($ptrType(V)),$error],false),-1],["parseAddressList","parseAddressList","net/mail",$funcType([],[($sliceType(($ptrType(V)))),$error],false),-1],["peek","peek","net/mail",$funcType([],[$Uint8],false),-1],["skipSpace","skipSpace","net/mail",$funcType([],[],false),-1]];Y.init($Uint8);
addrParsernet/mail:Address AB��AB=$pkg.qDecoder=$newType(0,$kindStruct,"mail.qDecoder","qDecoder","net/mail",function(r_,scratch_){this.$val=this;this.r=r_!==undefined?r_:$ifaceNil;this.scratch=scratch_!==undefined?scratch_:($arrayType($Uint8,2)).zero();});�%AB.methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];($ptrType(AB)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];AB.init([["r","r","net/mail",F.Reader,""],["scratch","scratch","net/mail",($arrayType($Uint8,2)),""]]);qDecoder	io:Reader Ndebug RR=($sliceType($String)).nil;dateLayoutsnet/mail:dateLayouts ErrHeaderNotPresent AC
atextChars     N=false;debugnet/mail:debug C    $pkg.ErrHeaderNotPresent=D.New("mail: header not in message");
errors:Newnet/mail:ErrHeaderNotPresent ��    AC=new($sliceType($Uint8))($stringToBytes("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'*+-/=?^_`{|}~"));
atextCharsnet/mail:atextChars (net/mail.debugT).Printf��O.prototype.Printf=function(a,b){var c;  c=this.$val!==undefined?this.$val:this;  G    if(c){  PH.Printf(a,b);    }    };$ptrType(O).prototype.Printf=function(a,b){return new O(this.$get()).Printf(a,b);};debugT
log:Printfnet/mail:debugT net/mail.ReadMessageQ�LQ=$pkg.ReadMessage=function(a){var b=($ptrType(P)).nil,c=$ifaceNil,d,e,f,g,h,i,j;  �d=I.NewReader(A.NewReader(a));  �e=d.ReadMIMEHeader();f=e[0];c=e[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){       g=($ptrType(P)).nil;h=c;b=g;c=h;return[b,c];    }      i=new P.Ptr(f,d.R);j=$ifaceNil;b=i;c=j;return[b,c];    };ReadMessagebufio:NewReadernet/mail:Messagenet/textproto:NewReader net/mail.initS�}S=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;  a=$toNativeArray($kindString,["","Mon, "]);  6b=$toNativeArray($kindString,["2","02"]);  lc=$toNativeArray($kindString,["2006","06"]);  �d=$toNativeArray($kindString,[":05",""]);  e=$toNativeArray($kindString,["-0700","MST","-0700 (MST)"]);  rf=a;g=0;while(g<2){h=((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]);  �i=b;j=0;while(j<2){k=((j<0||j>=i.length)?$throwRuntimeError("index out of range"):i[j]);  �l=c;m=0;while(m<2){n=((m<0||m>=l.length)?$throwRuntimeError("index out of range"):l[m]);  �o=d;p=0;while(p<2){q=((p<0||p>=o.length)?$throwRuntimeError("index out of range"):o[p]);  �r=e;s=0;while(s<3){t=((s<0||s>=r.length)?$throwRuntimeError("index out of range"):r[s]);  u=h+k+" Jan "+n+" 15:04"+q+" "+t;  ^R=$append(R,u);    s++;}    p++;}    m++;}    j++;}    g++;}    };	    S();net/mail:dateLayouts net/mail.parseDateT��T=function(a){var b,c,d,e,f,g;  �b=R;c=0;while(c<b.$length){d=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);  �e=L.Parse(d,a);f=new L.Time.Ptr();$copy(f,e[0],L.Time);g=e[1];  	    if($interfaceIsEqual(g,$ifaceNil)){  	0return[f,$ifaceNil];    }    c++;}  	Freturn[new L.Time.Ptr(new $Int64(0,0),0,($ptrType(L.Location)).nil),D.New("mail: header could not be parsed")];    };	parseDate
errors:Newnet/mail:dateLayoutstime:Location
time:Parse	time:Time (net/mail.Header).Get��U.prototype.Get=function(a){var b;  
vb=this.$val!==undefined?this.$val:this;  
�return new I.MIMEHeader(b).Get(a);    };$ptrType(U).prototype.Get=function(a){return new U(this.$get()).Get(a);};Headernet/mail:Headernet/textproto:MIMEHeader (net/mail.Header).Date�KU.prototype.Date=function(){var a,b;  6a=this.$val!==undefined?this.$val:this;  ]b=new U(a).Get("Date");  s    if(b===""){  �return[new L.Time.Ptr(new $Int64(0,0),0,($ptrType(L.Location)).nil),$pkg.ErrHeaderNotPresent];    }  �return T(b);    };$ptrType(U).prototype.Date=function(){return new U(this.$get()).Date();};Headernet/mail:ErrHeaderNotPresentnet/mail:Headernet/mail:parseDatetime:Location	time:Time (net/mail.Header).AddressList�AU.prototype.AddressList=function(a){var b,c;  b=this.$val!==undefined?this.$val:this;  Mc=new U(b).Get(a);  `    if(c===""){  qreturn[($sliceType(($ptrType(V)))).nil,$pkg.ErrHeaderNotPresent];    }  �return X(c);    };$ptrType(U).prototype.AddressList=function(a){return new U(this.$get()).AddressList(a);};Headernet/mail:Addressnet/mail:ErrHeaderNotPresentnet/mail:Headernet/mail:ParseAddressList net/mail.ParseAddressWGW=$pkg.ParseAddress=function(a){  Kreturn Z(a).parseAddress();    };ParseAddressnet/mail:newAddrParsernet/mail:parseAddress net/mail.ParseAddressListXOX=$pkg.ParseAddressList=function(a){  �return Z(a).parseAddressList();    };ParseAddressListnet/mail:newAddrParsernet/mail:parseAddressList (*net/mail.Address).String�`V.Ptr.prototype.String=function(){var a,b,c,d,e,f,g,h,i;  �a=this;  �b="<"+a.Address+">";      if(a.Name===""){  %return b;    }  pc=true;  �  �d=0;while(d<a.Name.length){  �    if(!AF(a.Name.charCodeAt(d))&&!AG(a.Name.charCodeAt(d))){  -c=false;  Ebreak;    }      �  �d=d+(1)>>0;}  S    if(c){  ge=B.NewBufferString("\"");  �  �f=0;while(f<a.Name.length){  �    if(!AE(a.Name.charCodeAt(f))&&!AG(a.Name.charCodeAt(f))){  �e.WriteByte(92);    }  �e.WriteByte(a.Name.charCodeAt(f));      �  �f=f+(1)>>0;}  e.WriteString("\" ");  .e.WriteString(b);  Areturn e.String();    }  og=B.NewBufferString("=?utf-8?q?");  �  �h=0;while(h<a.Name.length){  �  �i=a.Name.charCodeAt(h);  �if(i===32){  �g.WriteByte(95);      �}else if(AF(i)&&!((i===61))&&!((i===63))&&!((i===95))){  6g.WriteByte(i);    }else{  SE.Fprintf(g,"=%02X",new($sliceType($emptyInterface))([new $Uint8(i)]));    }      �  �h=h+(1)>>0;}  vg.WriteString("?= ");  �g.WriteString(b);  �return g.String();    };V.prototype.String=function(){return this.$val.String();};Addressbytes:NewBufferStringfmt:Fprintfnet/mail:Addressnet/mail:isQtextnet/mail:isVcharnet/mail:isWSP net/mail.newAddrParserZ��Z=function(a){var b;  �b=new Y($stringToBytes(a));  return new($ptrType(Y))(function(){return b;},function($v){b=$v;});    };newAddrParsernet/mail:addrParser '(*net/mail.addrParser).parseAddressList�$ptrType(Y).prototype.parseAddressList=function(){var a,b,c,d,e;  a=this;  W  [b=($sliceType(($ptrType(V)))).nil;  lwhile(true){  ta.skipSpace();  �c=a.parseAddress();d=c[0];e=c[1];  �    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[($sliceType(($ptrType(V)))).nil,e];    }  �b=$append(b,d);  �a.skipSpace();  �    if(a.empty()){  break;    }      if(!a.consume(44)){  0return[($sliceType(($ptrType(V)))).nil,D.New("mail: expected comma")];    }    }  greturn[b,$ifaceNil];    };
addrParserparseAddressList
errors:Newnet/mail:Addressnet/mail:addrParsernet/mail:consumenet/mail:emptynet/mail:parseAddressnet/mail:skipSpace #(*net/mail.addrParser).parseAddress�$ptrType(Y).prototype.parseAddress=function(){var a=($ptrType(V)).nil,b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;  �c=this;  new O(N).Printf("parseAddress: %q",new($sliceType($emptyInterface))([c.$get()]));  'c.skipSpace();  6    if(c.empty()){  G    d=($ptrType(V)).nil;e=D.New("mail: no address");a=d;b=e;return[a,b];    }  of=c.consumeAddrSpec();g=f[0];b=f[1];  �    if($interfaceIsEqual(b,$ifaceNil)){  �    h=new V.Ptr("",g);i=b;a=h;b=i;return[a,b];    }  �new O(N).Printf("parseAddress: not an addr-spec: %v",new($sliceType($emptyInterface))([b]));  new O(N).Printf("parseAddress: state is now %q",new($sliceType($emptyInterface))([c.$get()]));  Q  Uj="";  i    if(!((c.peek()===60))){  �k=c.consumePhrase();j=k[0];b=k[1];  �    if(!($interfaceIsEqual(b,$ifaceNil))){  �    l=($ptrType(V)).nil;m=b;a=l;b=m;return[a,b];    }    }  �new O(N).Printf("parseAddress: displayName=%q",new($sliceType($emptyInterface))([new $String(j)]));  1c.skipSpace();  @    if(!c.consume(60)){  W    n=($ptrType(V)).nil;o=D.New("mail: no angle-addr");a=n;b=o;return[a,b];    }  �p=c.consumeAddrSpec();g=p[0];b=p[1];  �    if(!($interfaceIsEqual(b,$ifaceNil))){  �    q=($ptrType(V)).nil;r=b;a=q;b=r;return[a,b];    }  �    if(!c.consume(62)){  �    s=($ptrType(V)).nil;t=D.New("mail: unclosed angle-addr");a=s;b=t;return[a,b];    }  new O(N).Printf("parseAddress: spec=%q",new($sliceType($emptyInterface))([new $String(g)]));  M    u=new V.Ptr(j,g);v=$ifaceNil;a=u;b=v;return[a,b];    };
addrParserparseAddress
errors:Newnet/mail:Addressnet/mail:addrParsernet/mail:consumenet/mail:consumeAddrSpecnet/mail:consumePhrasenet/mail:debugnet/mail:debugTnet/mail:emptynet/mail:peeknet/mail:skipSpace &(*net/mail.addrParser).consumeAddrSpec� $ptrType(Y).prototype.consumeAddrSpec=function(){var a="",b=$ifaceNil,$deferred=[],$err=null,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;try{$deferFrames.push($deferred);  �c=this;  new O(N).Printf("consumeAddrSpec: %q",new($sliceType($emptyInterface))([c.$get()]));  Hd=c.$get();  T$deferred.push([(function(){  e    if(!($interfaceIsEqual(b,$ifaceNil))){  xc.$set(d);    }    }),[]]);  �  �e="";  �c.skipSpace();  �    if(c.empty()){  �    f="";g=D.New("mail: no addr-spec");a=f;b=g;return[a,b];    }      if(c.peek()===34){  Gnew O(N).Printf("consumeAddrSpec: parsing quoted-string",new($sliceType($emptyInterface))([]));  �h=c.consumeQuotedString();e=h[0];b=h[1];    }else{  �new O(N).Printf("consumeAddrSpec: parsing dot-atom",new($sliceType($emptyInterface))([]));  �i=c.consumeAtom(true);e=i[0];b=i[1];    }       if(!($interfaceIsEqual(b,$ifaceNil))){  2new O(N).Printf("consumeAddrSpec: failed: %v",new($sliceType($emptyInterface))([b]));  e    j="";k=b;a=j;b=k;return[a,b];    }  y    if(!c.consume(64)){  �    l="";m=D.New("mail: missing @ in addr-spec");a=l;b=m;return[a,b];    }  �  �n="";  c.skipSpace();      if(c.empty()){  %    o="";p=D.New("mail: no domain in addr-spec");a=o;b=p;return[a,b];    }  �q=c.consumeAtom(true);n=q[0];b=q[1];  �    if(!($interfaceIsEqual(b,$ifaceNil))){  �    r="";s=b;a=r;b=s;return[a,b];    }  �    t=e+"@"+n;u=$ifaceNil;a=t;b=u;return[a,b];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[a,b];}};
addrParserconsumeAddrSpec

errors:Newnet/mail:addrParsernet/mail:consumenet/mail:consumeAtomnet/mail:consumeQuotedStringnet/mail:debugnet/mail:debugTnet/mail:emptynet/mail:peeknet/mail:skipSpace $(*net/mail.addrParser).consumePhrase��$ptrType(Y).prototype.consumePhrase=function(){var a="",b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n;  ?c=this;  |new O(N).Printf("consumePhrase: [%s]",new($sliceType($emptyInterface))([c.$get()]));  �  �d=($sliceType($String)).nil;  �while(true){  �  �e="";   c.skipSpace();       if(c.empty()){   *    f="";g=D.New("mail: missing phrase");a=f;b=g;return[a,b];    }   ^    if(c.peek()===34){   �h=c.consumeQuotedString();e=h[0];b=h[1];    }else{  !'i=c.consumeAtom(true);e=i[0];b=i[1];    }  !�    if($interfaceIsEqual(b,$ifaceNil)&&K.HasPrefix(e,"=?")&&K.HasSuffix(e,"?=")&&(K.Count(e,"?")===4)){  "j=AA(e);e=j[0];b=j[1];    }  ">    if(!($interfaceIsEqual(b,$ifaceNil))){  "Qbreak;    }  "]new O(N).Printf("consumePhrase: consumed %q",new($sliceType($emptyInterface))([new $String(e)]));  "�d=$append(d,e);    }  "�    if(!($interfaceIsEqual(b,$ifaceNil))&&(d.$length===0)){  #new O(N).Printf("consumePhrase: hit err: %v",new($sliceType($emptyInterface))([b]));  #9    k="";l=E.Errorf("mail: missing word in phrase: %v",new($sliceType($emptyInterface))([b]));a=k;b=l;return[a,b];    }  #|a=K.Join(d," ");  #�    m=a;n=$ifaceNil;a=m;b=n;return[a,b];    };
addrParserconsumePhrase
errors:New
fmt:Errorfnet/mail:addrParsernet/mail:consumeAtomnet/mail:consumeQuotedStringnet/mail:debugnet/mail:debugTnet/mail:decodeRFC2047Wordnet/mail:emptynet/mail:peeknet/mail:skipSpacestrings:Countstrings:HasPrefixstrings:HasSuffixstrings:Join *(*net/mail.addrParser).consumeQuotedString�;$ptrType(Y).prototype.consumeQuotedString=function(){var a="",b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  #�c=this;  $[d=1;  $ce=($sliceType($Uint8)).make(0,10);  $~  $�Loop:while(true){  $�    if(d>=c.len()){  $�    f="";g=D.New("mail: unclosed quoted-string");a=f;b=g;return[a,b];    }  $�  $�i=(h=c.$get(),((d<0||d>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+d]));  $�if(i===34){  %	break Loop;      %}else if(i===92){  %)    if((d+1>>0)===c.len()){  %A    j="";k=D.New("mail: unclosed quoted-string");a=j;b=k;return[a,b];    }  %e=$append(e,(l=c.$get(),m=d+1>>0,((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m])));  %�d=d+(2)>>0;      %�}else if(AE(i)||(i===32)||(i===9)){  &2e=$append(e,i);  &J  &Jd=d+(1)>>0;    }else{  &\    n="";o=E.Errorf("mail: bad character in quoted-string: %q",new($sliceType($emptyInterface))([new $Uint8(i)]));a=n;b=o;return[a,b];    }    }  &�c.$set($subslice((c.$get()),(d+1>>0)));  &�    p=$bytesToString(e);q=$ifaceNil;a=p;b=q;return[a,b];    };
addrParserconsumeQuotedString
errors:New
fmt:Errorfnet/mail:addrParsernet/mail:isQtextnet/mail:len "(*net/mail.addrParser).consumeAtom��$ptrType(Y).prototype.consumeAtom=function(a){var b="",c=$ifaceNil,d,e,f,g,h,i,j,k,l;  'Yd=this;  '�    if(!AD(d.peek(),false)){  '�    e="";f=D.New("mail: invalid string");b=e;c=f;return[b,c];    }  '�g=1;  '�while(g<d.len()&&AD((h=d.$get(),((g<0||g>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+g])),a)){      (!  (!g=g+(1)>>0;}  (+i=$bytesToString($subslice((d.$get()),0,g));j=$subslice((d.$get()),g);b=i;d.$set(j);  (R    k=b;l=$ifaceNil;b=k;c=l;return[b,c];    };
addrParserconsumeAtom
errors:Newnet/mail:addrParsernet/mail:isAtextnet/mail:lennet/mail:peek (*net/mail.addrParser).consume��$ptrType(Y).prototype.consume=function(a){var b;  (lb=this;  (�    if(b.empty()||!((b.peek()===a))){  (�return false;    }  (�b.$set($subslice((b.$get()),1));  (�return true;    };
addrParserconsumenet/mail:addrParsernet/mail:emptynet/mail:peek  (*net/mail.addrParser).skipSpace��$ptrType(Y).prototype.skipSpace=function(){var a,b,c;  )#a=this;  )Aa.$set((b=B.TrimLeft((c=a.$get(),$subslice(new($sliceType($Uint8))(c.$array),c.$offset,c.$offset+c.$length))," \t"),$subslice(new Y(b.$array),b.$offset,b.$offset+b.$length)));    };
addrParser	skipSpacebytes:TrimLeftnet/mail:addrParser (*net/mail.addrParser).peek��$ptrType(Y).prototype.peek=function(){var a,b;  )ia=this;  )�return(b=a.$get(),((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0]));    };
addrParserpeeknet/mail:addrParser (*net/mail.addrParser).emptyX$ptrType(Y).prototype.empty=function(){var a;  )�a=this;  )�return a.len()===0;    };
addrParseremptynet/mail:addrParsernet/mail:len (*net/mail.addrParser).len[$ptrType(Y).prototype.len=function(){var a;  )�a=this;  )�return a.$get().$length;    };
addrParserlennet/mail:addrParser net/mail.decodeRFC2047WordAA��AA=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;  *=b=K.Split(a,"?");  *^    if(!((b.$length===5))||!(((0<0||0>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])==="=")||!(((4<0||4>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+4])==="=")){  *�return["",D.New("address not RFC 2047 encoded")];    }  *�c=K.ToLower(((1<0||1>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+1]));d=K.ToLower(((2<0||2>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+2]));e=c;f=d;  +     if(!(e==="us-ascii")&&!(e==="iso-8859-1")&&!(e==="utf-8")){  +nreturn["",E.Errorf("charset not supported: %q",new($sliceType($emptyInterface))([new $String(e)]))];    }  +�g=B.NewBufferString(((3<0||3>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+3]));  +�  +�h=$ifaceNil;  +�i=f;  +�if(i==="b"){  ,h=C.NewDecoder(C.StdEncoding,g);      ,1}else if(i==="q"){  ,=h=(j=new AB.Ptr(g,($arrayType($Uint8,2)).zero()),new j.constructor.Struct(j));    }else{  ,]return["",E.Errorf("RFC 2047 encoding not supported: %q",new($sliceType($emptyInterface))([new $String(f)]))];    }  ,�k=G.ReadAll(h);l=k[0];m=k[1];  ,�    if(!($interfaceIsEqual(m,$ifaceNil))){  ,�return["",m];    }  ,�n=e;  ,�if(n==="us-ascii"){  -o=new B.Buffer.Ptr();  -'p=l;q=0;while(q<p.$length){r=((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]);  -B    if(r>=128){  -Uo.WriteRune(65533);    }else{  -�o.WriteRune((r>>0));    }    q++;}  -�return[o.String(),$ifaceNil];      -�}else if(n==="iso-8859-1"){  -�s=new B.Buffer.Ptr();  -�t=l;u=0;while(u<t.$length){v=((u<0||u>=t.$length)?$throwRuntimeError("index out of range"):t.$array[t.$offset+u]);  .s.WriteRune((v>>0));    u++;}  .&return[s.String(),$ifaceNil];      .>}else if(n==="utf-8"){  .Nreturn[$bytesToString(l),$ifaceNil];    }  .j$panic(new $String("unreachable"));    };decodeRFC2047Word
bytes:Bufferbytes:NewBufferStringencoding/base64:NewDecoderencoding/base64:StdEncoding
errors:New
fmt:Errorfio/ioutil:ReadAllnet/mail:qDecoderstrings:Splitstrings:ToLower (net/mail.qDecoder).Read�NAB.Ptr.prototype.Read=function(a){var b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;  .�d=new AB.Ptr();$copy(d,this,AB);  /(    if(a.$length===0){  /;    e=0;f=$ifaceNil;b=e;c=f;return[b,c];    }  /M  /Pg=d.r.Read($subslice(new($sliceType($Uint8))(d.scratch),0,1));h=g[1];    if(!($interfaceIsEqual(h,$ifaceNil))){  /�    i=0;j=h;b=i;c=j;return[b,c];    }  /�  /�k=d.scratch[0];  /�if(k===61){  /�  /�l=F.ReadFull(d.r,$subslice(new($sliceType($Uint8))(d.scratch),0,2));m=l[1];    if(!($interfaceIsEqual(m,$ifaceNil))){  0    n=0;o=m;b=n;c=o;return[b,c];    }  0p=J.ParseInt($bytesToString($subslice(new($sliceType($Uint8))(d.scratch),0,2)),16,64);q=p[0];r=p[1];  0V    if(!($interfaceIsEqual(r,$ifaceNil))){  0i    s=0;t=E.Errorf("mail: invalid RFC 2047 encoding: %q",new($sliceType($emptyInterface))([$subslice(new($sliceType($Uint8))(d.scratch),0,2)]));b=s;c=t;return[b,c];    }  0�(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(q.$low<<24>>>24);      0�}else if(k===95){  0�(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=32;    }else{  0�(0<0||0>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=k;    }  1     u=1;v=$ifaceNil;b=u;c=v;return[b,c];    };AB.prototype.Read=function(a){return this.$val.Read(a);};qDecoder
fmt:Errorfio:ReadFullnet/mail:qDecoderstrconv:ParseInt net/mail.isAtextADjAD=function(a,b){  2    if(b&&(a===46)){  23return true;    }  2Creturn B.IndexByte(AC,a)>=0;    };isAtextbytes:IndexBytenet/mail:atextChars net/mail.isQtextAEiAE=function(a){  3    if((a===92)||(a===34)){  3return false;    }  3/return 33<=a&&a<=126;    };isQtext net/mail.isVcharAF0AF=function(a){  3�return 33<=a&&a<=126;    };isVchar net/mail.isWSPAG3AG=function(a){  4rreturn(a===32)||(a===9);    };isWSP ��{"Base":13458,"Files":[{"Name":"/usr/local/go/src/net/mail/message.go","Base":1,"Size":13456,"Lines":[0,55,109,159,160,163,213,214,291,312,381,412,447,520,564,567,580,581,590,599,608,627,637,644,650,663,670,687,698,709,717,728,730,731,757,758,775,776,837,845,875,878,880,881,928,950,965,983,985,986,1025,1098,1121,1179,1226,1227,1260,1277,1295,1298,1299,1317,1340,1356,1364,1366,1367,1414,1443,1468,1469,1483,1536,1537,1588,1642,1706,1752,1805,1903,1904,1932,1961,1993,2030,2064,2135,2178,2185,2191,2196,2200,2203,2205,2206,2255,2293,2330,2348,2365,2369,2372,2440,2442,2443,2512,2544,2545,2604,2671,2712,2753,2755,2756,2824,2825,2863,2907,2929,2945,2987,2990,3013,3015,3016,3085,3147,3166,3182,3216,3219,3249,3251,3252,3297,3365,3428,3450,3496,3527,3529,3530,3603,3657,3703,3705,3706,3774,3831,3878,3880,3881,3940,3995,4047,4083,4111,4130,4141,4144,4206,4228,4264,4306,4345,4393,4417,4426,4430,4433,4452,4486,4523,4572,4594,4599,4625,4629,4651,4670,4690,4693,4694,4717,4759,4795,4822,4839,4859,4914,4932,4943,4973,4977,4980,5002,5020,5039,5041,5042,5065,5066,5109,5129,5140,5142,5143,5205,5226,5233,5249,5281,5299,5318,5322,5350,5351,5367,5384,5393,5397,5420,5470,5474,5477,5495,5497,5498,5566,5631,5669,5684,5700,5745,5748,5749,5785,5836,5837,5897,5953,5997,6031,6048,6067,6085,6094,6097,6154,6205,6206,6223,6247,6269,6308,6326,6345,6349,6352,6411,6412,6447,6462,6484,6532,6535,6568,6585,6603,6606,6628,6682,6685,6730,6731,6749,6773,6790,6798,6800,6801,6874,6940,6981,6982,6994,7010,7028,7041,7045,7050,7051,7093,7115,7130,7146,7192,7195,7217,7236,7293,7336,7346,7360,7412,7451,7454,7471,7522,7539,7542,7543,7565,7621,7624,7625,7664,7683,7698,7714,7770,7773,7815,7850,7867,7884,7887,7888,7926,7928,7929,7992,8058,8099,8119,8139,8146,8179,8197,8213,8230,8279,8283,8306,8326,8365,8376,8387,8447,8483,8518,8522,8523,8602,8719,8758,8762,8763,8781,8790,8794,8845,8875,8878,8928,8964,9014,9079,9082,9117,9137,9139,9140,9207,9275,9305,9313,9341,9347,9354,9374,9431,9435,9460,9477,9491,9509,9532,9590,9595,9627,9637,9679,9734,9774,9798,9805,9816,9888,9892,9895,9912,9937,9939,9940,9998,10066,10136,10168,10216,10219,10227,10278,10281,10320,10338,10340,10341,10385,10418,10433,10436,10451,10464,10466,10467,10524,10559,10591,10593,10594,10629,10645,10647,10648,10684,10705,10707,10708,10741,10757,10759,10760,10811,10844,10907,10963,10966,11038,11115,11177,11180,11181,11221,11238,11252,11263,11311,11322,11344,11354,11422,11425,11426,11457,11474,11491,11494,11495,11513,11531,11556,11582,11600,11641,11653,11678,11683,11687,11712,11732,11757,11783,11807,11811,11836,11851,11877,11880,11902,11904,11905,11928,11947,11964,11966,11967,12022,12070,12088,12104,12107,12161,12177,12180,12210,12226,12289,12306,12310,12371,12389,12468,12472,12489,12505,12518,12528,12539,12542,12557,12559,12560,12615,12647,12663,12687,12688,12749,12788,12826,12848,12862,12865,12909,12911,12912,12973,13001,13055,13083,13098,13101,13130,13132,13133,13194,13222,13257,13286,13288,13289,13340,13398,13424,13454],"Infos":null}]}
 