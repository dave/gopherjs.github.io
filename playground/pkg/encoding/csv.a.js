p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �`���encoding/csvcsvbufiobyteserrorsfmtiostringsunicodeunicode/utf8�Npackage csv
import bufio "bufio"
import bytes "bytes"
import errors "errors"
import fmt "fmt"
import io "io"
import unicode "unicode"
import strings "strings"
import utf8 "unicode/utf8"
var @"".ErrBareQuote error
var @"".ErrFieldCount error
var @"".ErrQuote error
var @"".ErrTrailingComma error
func @"".NewReader(@"".r @"io".Reader) (? *@"".Reader)
func @"".NewWriter(@"".w @"io".Writer) (? *@"".Writer)
type @"".ParseError struct { @"".Line int; @"".Column int; @"".Err error }
func (? *@"".ParseError) @"".Error() (? string)
type @"".Reader struct { @"".Comma rune; @"".Comment rune; @"".FieldsPerRecord int; @"".LazyQuotes bool; @"".TrailingComma bool; @"".TrimLeadingSpace bool; @"".line int; @"".column int; @"".r *@"bufio".Reader; @"".field @"bytes".Buffer }
func (? *@"".Reader) @"".Read() (@"".record []string, @"".err error)
func (? *@"".Reader) @"".ReadAll() (@"".records [][]string, @"".err error)
func (? *@"".Reader) @"".error(@"".err error) (? error)
func (? *@"".Reader) @"".parseField() (@"".haveField bool, @"".delim rune, @"".err error)
func (? *@"".Reader) @"".parseRecord() (@"".fields []string, @"".err error)
func (? *@"".Reader) @"".readRune() (? rune, ? error)
func (? *@"".Reader) @"".skip(@"".delim rune) (? error)
type @"".Writer struct { @"".Comma rune; @"".UseCRLF bool; @"".w *@"bufio".Writer }
func (? *@"".Writer) @"".Error() (? error)
func (? *@"".Writer) @"".Flush() ()
func (? *@"".Writer) @"".Write(@"".record []string) (@"".err error)
func (? *@"".Writer) @"".WriteAll(@"".records [][]string) (@"".err error)
func (? *@"".Writer) @"".fieldNeedsQuotes(@"".field string) (? bool)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"bufio".Reader struct { @"bufio".buf []byte; @"bufio".rd @"io".Reader; @"bufio".r int; @"bufio".w int; @"bufio".err error; @"bufio".lastByte int; @"bufio".lastRuneSize int }
func (? *@"bufio".Reader) @"bufio".Buffered() (? int)
func (? *@"bufio".Reader) @"bufio".Peek(@"bufio".n int) (? []byte, ? error)
func (? *@"bufio".Reader) @"bufio".Read(@"bufio".p []byte) (@"bufio".n int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadByte() (@"bufio".c byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadBytes(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadLine() (@"bufio".line []byte, @"bufio".isPrefix bool, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadRune() (@"bufio".r rune, @"bufio".size int, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadSlice(@"bufio".delim byte) (@"bufio".line []byte, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".ReadString(@"bufio".delim byte) (@"bufio".line string, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".Reset(@"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".UnreadByte() (? error)
func (? *@"bufio".Reader) @"bufio".UnreadRune() (? error)
func (? *@"bufio".Reader) @"bufio".WriteTo(@"bufio".w @"io".Writer) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Reader) @"bufio".fill() ()
func (? *@"bufio".Reader) @"bufio".readErr() (? error)
func (? *@"bufio".Reader) @"bufio".reset(@"bufio".buf []byte, @"bufio".r @"io".Reader) ()
func (? *@"bufio".Reader) @"bufio".writeBuf(@"bufio".w @"io".Writer) (? int64, ? error)
type @"bytes".Buffer struct { @"bytes".buf []byte; @"bytes".off int; @"bytes".runeBytes [4]byte; @"bytes".bootstrap [64]byte; @"bytes".lastRead @"bytes".readOp }
func (? *@"bytes".Buffer) @"bytes".Bytes() (? []byte)
func (? *@"bytes".Buffer) @"bytes".Grow(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".Len() (? int)
func (? *@"bytes".Buffer) @"bytes".Next(@"bytes".n int) (? []byte)
func (? *@"bytes".Buffer) @"bytes".Read(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadByte() (@"bytes".c byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadBytes(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadFrom(@"bytes".r @"io".Reader) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadRune() (@"bytes".r rune, @"bytes".size int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".ReadString(@"bytes".delim byte) (@"bytes".line string, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".Reset() ()
func (? *@"bytes".Buffer) @"bytes".String() (? string)
func (? *@"bytes".Buffer) @"bytes".Truncate(@"bytes".n int) ()
func (? *@"bytes".Buffer) @"bytes".UnreadByte() (? error)
func (? *@"bytes".Buffer) @"bytes".UnreadRune() (? error)
func (? *@"bytes".Buffer) @"bytes".Write(@"bytes".p []byte) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteByte(@"bytes".c byte) (? error)
func (? *@"bytes".Buffer) @"bytes".WriteRune(@"bytes".r rune) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteString(@"bytes".s string) (@"bytes".n int, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".WriteTo(@"bytes".w @"io".Writer) (@"bytes".n int64, @"bytes".err error)
func (? *@"bytes".Buffer) @"bytes".grow(@"bytes".n int) (? int)
func (? *@"bytes".Buffer) @"bytes".readSlice(@"bytes".delim byte) (@"bytes".line []byte, @"bytes".err error)
type @"bufio".Writer struct { @"bufio".err error; @"bufio".buf []byte; @"bufio".n int; @"bufio".wr @"io".Writer }
func (? *@"bufio".Writer) @"bufio".Available() (? int)
func (? *@"bufio".Writer) @"bufio".Buffered() (? int)
func (? *@"bufio".Writer) @"bufio".Flush() (? error)
func (? *@"bufio".Writer) @"bufio".ReadFrom(@"bufio".r @"io".Reader) (@"bufio".n int64, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".Reset(@"bufio".w @"io".Writer) ()
func (? *@"bufio".Writer) @"bufio".Write(@"bufio".p []byte) (@"bufio".nn int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteByte(@"bufio".c byte) (? error)
func (? *@"bufio".Writer) @"bufio".WriteRune(@"bufio".r rune) (@"bufio".size int, @"bufio".err error)
func (? *@"bufio".Writer) @"bufio".WriteString(@"bufio".s string) (? int, ? error)
func (? *@"bufio".Writer) @"bufio".flush() (? error)
type @"bytes".readOp int
$$
+AA=$packages["bufio"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["bytes"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["errors"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["fmt"];E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["io"];E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} GG=$packages["strings"];E    $r=G.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} FF=$packages["unicode"];E    $r=F.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} HH=$packages["unicode/utf8"];E    $r=H.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} I��I=$pkg.ParseError=$newType(0,$kindStruct,"csv.ParseError","ParseError","encoding/csv",function(Line_,Column_,Err_){this.$val=this;this.Line=Line_!==undefined?Line_:0;this.Column=Column_!==undefined?Column_:0;this.Err=Err_!==undefined?Err_:$ifaceNil;});RT.methods=[{prop:"Error",name:"Error",pkg:"",type:$funcType([],[$String],false)}];��I.init([{prop:"Line",name:"Line",pkg:"",type:$Int,tag:""},{prop:"Column",name:"Column",pkg:"",type:$Int,tag:""},{prop:"Err",name:"Err",pkg:"",type:$error,tag:""}]);encoding/csv.ParseErrorencoding/csv.ParseError%encoding/csv:*encoding/csv.ParseError J��J=$pkg.Reader=$newType(0,$kindStruct,"csv.Reader","Reader","encoding/csv",function(Comma_,Comment_,FieldsPerRecord_,LazyQuotes_,TrailingComma_,TrimLeadingSpace_,line_,column_,r_,field_){this.$val=this;this.Comma=Comma_!==undefined?Comma_:0;this.Comment=Comment_!==undefined?Comment_:0;this.FieldsPerRecord=FieldsPerRecord_!==undefined?FieldsPerRecord_:0;this.LazyQuotes=LazyQuotes_!==undefined?LazyQuotes_:false;this.TrailingComma=TrailingComma_!==undefined?TrailingComma_:false;this.TrimLeadingSpace=TrimLeadingSpace_!==undefined?TrimLeadingSpace_:false;this.line=line_!==undefined?line_:0;this.column=column_!==undefined?column_:0;this.r=r_!==undefined?r_:O.nil;this.field=field_!==undefined?field_:new B.Buffer.ptr();});�mU.methods=[{prop:"Read",name:"Read",pkg:"",type:$funcType([],[P,$error],false)},{prop:"ReadAll",name:"ReadAll",pkg:"",type:$funcType([],[Q,$error],false)},{prop:"error",name:"error",pkg:"encoding/csv",type:$funcType([$error],[$error],false)},{prop:"parseField",name:"parseField",pkg:"encoding/csv",type:$funcType([],[$Bool,$Int32,$error],false)},{prop:"parseRecord",name:"parseRecord",pkg:"encoding/csv",type:$funcType([],[P,$error],false)},{prop:"readRune",name:"readRune",pkg:"encoding/csv",type:$funcType([],[$Int32,$error],false)},{prop:"skip",name:"skip",pkg:"encoding/csv",type:$funcType([$Int32],[$error],false)}];��J.init([{prop:"Comma",name:"Comma",pkg:"",type:$Int32,tag:""},{prop:"Comment",name:"Comment",pkg:"",type:$Int32,tag:""},{prop:"FieldsPerRecord",name:"FieldsPerRecord",pkg:"",type:$Int,tag:""},{prop:"LazyQuotes",name:"LazyQuotes",pkg:"",type:$Bool,tag:""},{prop:"TrailingComma",name:"TrailingComma",pkg:"",type:$Bool,tag:""},{prop:"TrimLeadingSpace",name:"TrimLeadingSpace",pkg:"",type:$Bool,tag:""},{prop:"line",name:"line",pkg:"encoding/csv",type:$Int,tag:""},{prop:"column",name:"column",pkg:"encoding/csv",type:$Int,tag:""},{prop:"r",name:"r",pkg:"encoding/csv",type:O,tag:""},{prop:"field",name:"field",pkg:"encoding/csv",type:B.Buffer,tag:""}]);encoding/csv.Readerbytes.Bufferencoding/csv.Readerencoding/csv:*bufio.Reader!encoding/csv:*encoding/csv.Readerencoding/csv:[][]stringencoding/csv:[]string L��L=$pkg.Writer=$newType(0,$kindStruct,"csv.Writer","Writer","encoding/csv",function(Comma_,UseCRLF_,w_){this.$val=this;this.Comma=Comma_!==undefined?Comma_:0;this.UseCRLF=UseCRLF_!==undefined?UseCRLF_:false;this.w=w_!==undefined?w_:R.nil;});��V.methods=[{prop:"Error",name:"Error",pkg:"",type:$funcType([],[$error],false)},{prop:"Flush",name:"Flush",pkg:"",type:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([P],[$error],false)},{prop:"WriteAll",name:"WriteAll",pkg:"",type:$funcType([Q],[$error],false)},{prop:"fieldNeedsQuotes",name:"fieldNeedsQuotes",pkg:"encoding/csv",type:$funcType([$String],[$Bool],false)}];��L.init([{prop:"Comma",name:"Comma",pkg:"",type:$Int32,tag:""},{prop:"UseCRLF",name:"UseCRLF",pkg:"",type:$Bool,tag:""},{prop:"w",name:"w",pkg:"encoding/csv",type:R,tag:""}]);encoding/csv.Writerencoding/csv.Writerencoding/csv:*bufio.Writer!encoding/csv:*encoding/csv.Writerencoding/csv:[][]stringencoding/csv:[]string NN=$sliceType($emptyInterface);encoding/csv:[]interface{} OO=$ptrType(A.Reader);encoding/csv:*bufio.Readerbufio.Reader PP=$sliceType($String);encoding/csv:[]string QQ=$sliceType(P);encoding/csv:[][]stringencoding/csv:[]string RR=$ptrType(A.Writer);encoding/csv:*bufio.Writerbufio.Writer SS=$sliceType($Uint8);encoding/csv:[]byte TT=$ptrType(I);%encoding/csv:*encoding/csv.ParseErrorencoding/csv.ParseError UU=$ptrType(J);!encoding/csv:*encoding/csv.Readerencoding/csv.Reader VV=$ptrType(L);!encoding/csv:*encoding/csv.Writerencoding/csv.Writer encoding/csv.ErrTrailingComma encoding/csv.ErrBareQuote encoding/csv.ErrQuote encoding/csv.ErrFieldCount C    $pkg.ErrTrailingComma=C.New("extra delimiter at end of line");encoding/csv.ErrTrailingComma
errors.New <    $pkg.ErrBareQuote=C.New("bare \" in non-quoted-field");encoding/csv.ErrBareQuote
errors.New 3    $pkg.ErrQuote=C.New("extraneous \" in field");encoding/csv.ErrQuote
errors.New @    $pkg.ErrFieldCount=C.New("wrong number of fields in line");encoding/csv.ErrFieldCount
errors.New  (*encoding/csv.ParseError).Error��I.ptr.prototype.Error=function(){var a;  �a=this;  �return D.Sprintf("line %d, column %d: %s",new N([new $Int(a.Line),new $Int(a.Column),a.Err]));    };I.prototype.Error=function(){return this.$val.Error();};encoding/csv.ParseErrorencoding/csv.ParseErrorencoding/csv:[]interface{}fmt.Sprintf encoding/csv.NewReaderKzK=$pkg.NewReader=function(a){  �return new J.ptr(44,0,0,false,false,false,0,0,A.NewReader(a),new B.Buffer.ptr());    };encoding/csv.NewReaderbufio.NewReaderbufio.Readerbytes.Bufferencoding/csv.NewReaderencoding/csv.Readerencoding/csv:*bufio.Reader (*encoding/csv.Reader).error��J.ptr.prototype.error=function(a){var b;  b=this;  *return new I.ptr(b.line,b.column,a);    };J.prototype.error=function(a){return this.$val.error(a);};encoding/csv.Readerencoding/csv.error~encoding/csv.ParseErrorencoding/csv.Reader (*encoding/csv.Reader).Read��J.ptr.prototype.Read=function(){var a=P.nil,b=$ifaceNil,c,d,e,f,g,h,i,j;  �c=this;   while(true){  (d=c.parseRecord();a=d[0];b=d[1];  H    if(!(a===P.nil)){  ^break;    }  j    if(!($interfaceIsEqual(b,$ifaceNil))){  }    e=P.nil;f=b;a=e;b=f;return[a,b];    }    }  �    if(c.FieldsPerRecord>0){  �    if(!((a.$length===c.FieldsPerRecord))){  �c.column=0;  	    g=a;h=c.error($pkg.ErrFieldCount);a=g;b=h;return[a,b];    }        }else if(c.FieldsPerRecord===0){  Yc.FieldsPerRecord=a.$length;    }  }    i=a;j=$ifaceNil;a=i;b=j;return[a,b];    };J.prototype.Read=function(){return this.$val.Read();};encoding/csv.Readerencoding/csv.ErrFieldCountencoding/csv.Readerencoding/csv.error~encoding/csv.parseRecord~encoding/csv:[]string (*encoding/csv.Reader).ReadAll��J.ptr.prototype.ReadAll=function(){var a=Q.nil,b=$ifaceNil,c,d,e,f,g,h,i,j;  �c=this;  �while(true){  �d=c.Read();e=d[0];f=d[1];  �    if($interfaceIsEqual(f,E.EOF)){      g=a;h=$ifaceNil;a=g;b=h;return[a,b];    }  "    if(!($interfaceIsEqual(f,$ifaceNil))){  5    i=Q.nil;j=f;a=i;b=j;return[a,b];    }  Ka=$append(a,e);    }    };J.prototype.ReadAll=function(){return this.$val.ReadAll();};encoding/csv.Readerencoding/csv.Readerencoding/csv:[][]stringencoding/csv:[]stringio.EOF (*encoding/csv.Reader).readRune��J.ptr.prototype.readRune=function(){var a,b,c,d,e;  8a=this;  _b=a.r.ReadRune();c=b[0];d=b[2];  =    if(c===13){  Oe=a.r.ReadRune();c=e[0];d=e[2];  m    if($interfaceIsEqual(d,$ifaceNil)){  �    if(!((c===10))){  �a.r.UnreadRune();  �c=13;    }    }    }  �  �a.column=a.column+(1)>>0;  �return[c,d];    };J.prototype.readRune=function(){return this.$val.readRune();};encoding/csv.Readerencoding/csv.readRune~encoding/csv.Reader (*encoding/csv.Reader).skip�%J.ptr.prototype.skip=function(a){var b,c,d,e;  +b=this;  Pwhile(true){  Xc=b.readRune();d=c[0];e=c[1];  r    if(!($interfaceIsEqual(e,$ifaceNil))){  �return e;    }  �    if(d===a){  �return $ifaceNil;    }    }    };J.prototype.skip=function(a){return this.$val.skip(a);};encoding/csv.Readerencoding/csv.skip~encoding/csv.Readerencoding/csv.readRune~ "(*encoding/csv.Reader).parseRecord�#J.ptr.prototype.parseRecord=function(){var a=P.nil,b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  c=this;  �  �c.line=c.line+(1)>>0;  c.column=-1;  �d=c.r.ReadRune();e=d[0];b=d[2];  �    if(!($interfaceIsEqual(b,$ifaceNil))){  �    f=P.nil;g=b;a=f;b=g;return[a,b];    }  �    if(!((c.Comment===0))&&(e===c.Comment)){      h=P.nil;i=c.skip(10);a=h;b=i;return[a,b];    }  ;c.r.UnreadRune();  |while(true){  �j=c.parseField();k=j[0];l=j[1];m=j[2];  �    if(k){  �a=$append(a,c.field.String());    }  �    if((l===10)||$interfaceIsEqual(m,E.EOF)){      n=a;o=m;a=n;b=o;return[a,b];        }else if(!($interfaceIsEqual(m,$ifaceNil))){  F    p=P.nil;q=m;a=p;b=q;return[a,b];    }    }    };J.prototype.parseRecord=function(){return this.$val.parseRecord();};encoding/csv.Readerencoding/csv.parseRecord~encoding/csv.Readerencoding/csv.parseField~encoding/csv.skip~encoding/csv:[]stringio.EOF !(*encoding/csv.Reader).parseField�	�J.ptr.prototype.parseField=function(){var a=false,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b=0,ba,bb,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  d=this;  Pd.field.Reset();  be=d.readRune();f=e[0];c=e[1];  {while($interfaceIsEqual(c,$ifaceNil)&&d.TrimLeadingSpace&&!((f===10))&&F.IsSpace(f)){  �g=d.readRune();f=g[0];c=g[1];    }  �    if($interfaceIsEqual(c,E.EOF)&&!((d.column===0))){      h=true;i=0;j=c;a=h;b=i;c=j;return[a,b,c];    }  #    if(!($interfaceIsEqual(c,$ifaceNil))){  5    k=false;l=0;m=c;a=k;b=l;c=m;return[a,b,c];    }  On=f;  \if(n===d.Comma){      �}else if(n===10){  �    if(d.column===0){  �    o=false;p=f;q=$ifaceNil;a=o;b=p;c=q;return[a,b,c];    }  �    r=true;s=f;t=$ifaceNil;a=r;b=s;c=t;return[a,b,c];      }else if(n===34){  (  2Quoted:while(true){  ;u=d.readRune();f=u[0];c=u[1];  U    if(!($interfaceIsEqual(c,$ifaceNil))){  i    if($interfaceIsEqual(c,E.EOF)){  �    if(d.LazyQuotes){  �    v=true;w=0;x=c;a=v;b=w;c=x;return[a,b,c];    }  �    y=false;z=0;aa=d.error($pkg.ErrQuote);a=y;b=z;c=aa;return[a,b,c];    }  �    ab=false;ac=0;ad=c;a=ab;b=ac;c=ad;return[a,b,c];    }  ae=f;  if(ae===34){   af=d.readRune();f=af[0];c=af[1];  ;    if(!($interfaceIsEqual(c,$ifaceNil))||(f===d.Comma)){  abreak Quoted;    }  x    if(f===10){  �    ag=true;ah=f;ai=$ifaceNil;a=ag;b=ah;c=ai;return[a,b,c];    }  �    if(!((f===34))){  �    if(!d.LazyQuotes){  �  �d.column=d.column-(1)>>0;  �    aj=false;ak=0;al=d.error($pkg.ErrQuote);a=aj;b=ak;c=al;return[a,b,c];    }  7d.field.WriteRune(34);    }      W}else if(ae===10){  f  fd.line=d.line+(1)>>0;  sd.column=-1;    }  �d.field.WriteRune(f);    }    }else{  �while(true){  �d.field.WriteRune(f);  �am=d.readRune();f=am[0];c=am[1];        if(!($interfaceIsEqual(c,$ifaceNil))||(f===d.Comma)){   %break;    }   3    if(f===10){   G    an=true;ao=f;ap=$ifaceNil;a=an;b=ao;c=ap;return[a,b,c];    }   d    if(!d.LazyQuotes&&(f===34)){   �    aq=false;ar=0;as=d.error($pkg.ErrBareQuote);a=aq;b=ar;c=as;return[a,b,c];    }    }    }   �    if(!($interfaceIsEqual(c,$ifaceNil))){   �    if($interfaceIsEqual(c,E.EOF)){   �    at=true;au=0;av=c;a=at;b=au;c=av;return[a,b,c];    }   �    aw=false;ax=0;ay=c;a=aw;b=ax;c=ay;return[a,b,c];    }  !    az=true;ba=f;bb=$ifaceNil;a=az;b=ba;c=bb;return[a,b,c];    };J.prototype.parseField=function(){return this.$val.parseField();};encoding/csv.Readerencoding/csv.parseField~encoding/csv.ErrBareQuoteencoding/csv.ErrQuoteencoding/csv.Readerencoding/csv.error~encoding/csv.readRune~io.EOFunicode.IsSpace encoding/csv.NewWriterMSM=$pkg.NewWriter=function(a){  $�return new L.ptr(44,false,A.NewWriter(a));    };encoding/csv.NewWriterbufio.NewWriterbufio.Writerencoding/csv.NewWriterencoding/csv.Writerencoding/csv:*bufio.Writer (*encoding/csv.Writer).Write�GL.ptr.prototype.Write=function(a){var b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;  %}c=this;  %�d=a;e=0;while(e<d.$length){f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  %�    if(f>0){  %�  %�h=c.w.WriteRune(c.Comma);b=h[1];    if(!($interfaceIsEqual(b,$ifaceNil))){  &return b;    }    }  &�    if(!c.fieldNeedsQuotes(g)){  &�  &�i=c.w.WriteString(g);b=i[1];    if(!($interfaceIsEqual(b,$ifaceNil))){  &�return b;    }  &�e++;continue;    }  '  'b=c.w.WriteByte(34);    if(!($interfaceIsEqual(b,$ifaceNil))){  '8return b;    }  'Fj=g;k=0;while(k<j.length){l=$decodeRune(j,k);m=l[0];  'dn=m;  'sif(n===34){  '�o=c.w.WriteString("\"\"");b=o[1];      '�}else if(n===13){  '�    if(!c.UseCRLF){  '�b=c.w.WriteByte(13);    }      '�}else if(n===10){  '�    if(c.UseCRLF){  (p=c.w.WriteString("\r\n");b=p[1];    }else{  (@b=c.w.WriteByte(10);    }    }else{  (pq=c.w.WriteRune(m);b=q[1];    }  (�    if(!($interfaceIsEqual(b,$ifaceNil))){  (�return b;    }    k+=l[1];}  (�  (�b=c.w.WriteByte(34);    if(!($interfaceIsEqual(b,$ifaceNil))){  (�return b;    }    e++;}  (�    if(c.UseCRLF){  )r=c.w.WriteString("\r\n");b=r[1];    }else{  )4b=c.w.WriteByte(10);    }  )Rreturn b;    };L.prototype.Write=function(a){return this.$val.Write(a);};encoding/csv.Writerencoding/csv.Writerencoding/csv.fieldNeedsQuotes~ (*encoding/csv.Writer).Flush��L.ptr.prototype.Flush=function(){var a;  )�a=this;  )�a.w.Flush();    };L.prototype.Flush=function(){return this.$val.Flush();};encoding/csv.Writerencoding/csv.Writer (*encoding/csv.Writer).Error��L.ptr.prototype.Error=function(){var a,b,c;  *Za=this;  *vb=a.w.Write(S.nil);c=b[1];  *�return c;    };L.prototype.Error=function(){return this.$val.Error();};encoding/csv.Writerencoding/csv.Writerencoding/csv:[]byte (*encoding/csv.Writer).WriteAll��L.ptr.prototype.WriteAll=function(a){var b=$ifaceNil,c,d,e,f;  *�c=this;  +*d=a;e=0;while(e<d.$length){f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  +Mb=c.Write(f);  +e    if(!($interfaceIsEqual(b,$ifaceNil))){  +x    b=b;return b;    }    e++;}  +�    b=c.w.Flush();return b;    };L.prototype.WriteAll=function(a){return this.$val.WriteAll(a);};encoding/csv.Writerencoding/csv.Writer '(*encoding/csv.Writer).fieldNeedsQuotes�kL.ptr.prototype.fieldNeedsQuotes=function(a){var b,c,d;  .�b=this;  .�    if(a===""){  .�return false;    }  /    if(a==="\\."||G.IndexRune(a,b.Comma)>=0||G.IndexAny(a,"\"\r\n")>=0){  /wreturn true;    }  /�c=H.DecodeRuneInString(a);d=c[0];  /�return F.IsSpace(d);    };L.prototype.fieldNeedsQuotes=function(a){return this.$val.fieldNeedsQuotes(a);};encoding/csv.Writerencoding/csv.fieldNeedsQuotes~encoding/csv.Writerstrings.IndexAnystrings.IndexRuneunicode.IsSpaceunicode/utf8.DecodeRuneInString �
{"Base":12239,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/encoding/csv/reader.go","Base":1,"Size":8495,"Lines":[0,55,109,159,160,228,231,309,384,434,437,461,464,510,513,581,584,663,728,731,800,870,880,883,898,901,933,936,961,964,1001,1004,1074,1117,1120,1167,1170,1184,1187,1233,1236,1293,1296,1311,1334,1337,1351,1354,1370,1395,1407,1408,1417,1426,1435,1445,1452,1458,1469,1471,1472,1520,1568,1593,1640,1702,1736,1738,1739,1777,1848,1850,1851,1916,1922,2005,2067,2124,2189,2191,2192,2243,2246,2322,2396,2430,2433,2487,2490,2563,2597,2600,2664,2742,2815,2890,2948,2951,3023,3074,3077,3152,3173,3241,3303,3366,3410,3478,3523,3545,3567,3599,3630,3632,3633,3686,3724,3741,3755,3784,3787,3789,3790,3838,3880,3901,3919,3939,3954,3957,3959,3960,4037,4071,4126,4133,4165,4186,4195,4199,4217,4236,4240,4243,4244,4272,4312,4357,4398,4402,4438,4472,4475,4495,4497,4498,4549,4586,4662,4740,4753,4814,4821,4847,4868,4891,4895,4913,4932,4936,4972,4975,4977,4978,5050,5126,5169,5213,5243,5244,5307,5369,5435,5452,5482,5500,5519,5540,5554,5559,5563,5566,5578,5594,5596,5597,5668,5710,5717,5743,5761,5775,5779,5798,5812,5816,5819,5821,5822,5882,5944,6005,6063,6134,6144,6159,6160,6220,6283,6317,6318,6348,6365,6383,6386,6387,6427,6454,6457,6475,6476,6522,6529,6571,6588,6633,6637,6675,6697,6722,6741,6745,6748,6750,6751,6821,6896,6918,6990,7007,7008,7033,7110,7135,7138,7139,7176,7198,7201,7218,7241,7244,7245,7258,7273,7295,7296,7308,7359,7380,7405,7409,7432,7433,7444,7462,7471,7479,7505,7524,7547,7570,7596,7603,7643,7649,7674,7679,7694,7707,7734,7771,7789,7795,7815,7841,7847,7866,7890,7907,7948,7955,7985,8013,8019,8033,8046,8064,8069,8094,8098,8099,8109,8129,8137,8162,8188,8224,8234,8239,8258,8283,8288,8323,8366,8371,8375,8378,8379,8396,8417,8440,8444,8467,8470,8471,8493],"Infos":null},{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/encoding/csv/writer.go","Base":8497,"Size":3741,"Lines":[0,55,109,159,160,172,173,182,191,197,208,219,235,237,238,288,291,360,436,516,519,552,555,631,652,711,768,791,793,794,846,884,901,915,944,947,949,950,1026,1094,1148,1180,1193,1245,1256,1261,1265,1266,1321,1378,1412,1464,1475,1480,1492,1496,1540,1550,1554,1555,1584,1599,1612,1647,1661,1681,1712,1718,1732,1751,1789,1802,1833,1839,1851,1882,1887,1906,1917,1922,1926,1927,1971,1981,1985,1988,2004,2039,2049,2077,2080,2088,2090,2091,2154,2217,2244,2257,2259,2260,2339,2372,2398,2410,2412,2413,2492,2552,2586,2610,2628,2642,2646,2649,2669,2671,2672,2746,2806,2869,2942,3018,3091,3163,3232,3287,3362,3402,3457,3512,3530,3545,3548,3652,3666,3669,3670,3711,3739],"Infos":null}]}
 