����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �p}��compress/lzwlzwbufioerrorsfmtio�
$$ exports $$
pv0lzwcompress/lzw
LSB
Order  ! MSB8!	NewReader rReaderioio Read p2nerr6  
order8litWidth ReadCloserCloser 
Close   6  <   	NewWriter wWriter 
Write p2nerr6  
order8litWidth WriteCloserHP   8&AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["errors"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["fmt"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} ELE=$pkg.Order=$newType(4,$kindInt,"lzw.Order",true,"compress/lzw",true,null);Ordercompress/lzw.Order F�.F=$pkg.decoder=$newType(0,$kindStruct,"lzw.decoder",true,"compress/lzw",false,function(r_,bits_,nBits_,width_,read_,litWidth_,err_,clear_,eof_,hi_,overflow_,last_,suffix_,prefix_,output_,o_,toRead_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;this.bits=0;this.nBits=0;this.width=0;this.read=$throwNilPointerError;this.litWidth=0;this.err=$ifaceNil;this.clear=0;this.eof=0;this.hi=0;this.overflow=0;this.last=0;this.suffix=O.zero();this.prefix=P.zero();this.output=Q.zero();this.o=0;this.toRead=N.nil;return;}this.r=r_;this.bits=bits_;this.nBits=nBits_;this.width=width_;this.read=read_;this.litWidth=litWidth_;this.err=err_;this.clear=clear_;this.eof=eof_;this.hi=hi_;this.overflow=overflow_;this.last=last_;this.suffix=suffix_;this.prefix=prefix_;this.output=output_;this.o=o_;this.toRead=toRead_;});��R.methods=[{prop:"readLSB",name:"readLSB",pkg:"compress/lzw",typ:$funcType([],[$Uint16,$error],false)},{prop:"readMSB",name:"readMSB",pkg:"compress/lzw",typ:$funcType([],[$Uint16,$error],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"decode",name:"decode",pkg:"compress/lzw",typ:$funcType([],[],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�F.init("compress/lzw",[{prop:"r",name:"r",exported:false,typ:D.ByteReader,tag:""},{prop:"bits",name:"bits",exported:false,typ:$Uint32,tag:""},{prop:"nBits",name:"nBits",exported:false,typ:$Uint,tag:""},{prop:"width",name:"width",exported:false,typ:$Uint,tag:""},{prop:"read",name:"read",exported:false,typ:V,tag:""},{prop:"litWidth",name:"litWidth",exported:false,typ:$Int,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"clear",name:"clear",exported:false,typ:$Uint16,tag:""},{prop:"eof",name:"eof",exported:false,typ:$Uint16,tag:""},{prop:"hi",name:"hi",exported:false,typ:$Uint16,tag:""},{prop:"overflow",name:"overflow",exported:false,typ:$Uint16,tag:""},{prop:"last",name:"last",exported:false,typ:$Uint16,tag:""},{prop:"suffix",name:"suffix",exported:false,typ:O,tag:""},{prop:"prefix",name:"prefix",exported:false,typ:P,tag:""},{prop:"output",name:"output",exported:false,typ:Q,tag:""},{prop:"o",name:"o",exported:false,typ:$Int,tag:""},{prop:"toRead",name:"toRead",exported:false,typ:N,tag:""}]);decodercompress/lzw.Ncompress/lzw.Ocompress/lzw.Pcompress/lzw.Qcompress/lzw.Rcompress/lzw.Vcompress/lzw.decoderio.ByteReader IUI=$pkg.writer=$newType(8,$kindInterface,"lzw.writer",true,"compress/lzw",false,null);��I.init([{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[$error],false)},{prop:"WriteByte",name:"WriteByte",pkg:"",typ:$funcType([$Uint8],[$error],false)}]);writercompress/lzw.writer J��J=$pkg.errWriteCloser=$newType(0,$kindStruct,"lzw.errWriteCloser",true,"compress/lzw",false,function(err_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;return;}this.err=err_;});��W.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];RJ.init("compress/lzw",[{prop:"err",name:"err",exported:false,typ:$error,tag:""}]);errWriteClosercompress/lzw.Ncompress/lzw.Wcompress/lzw.errWriteCloser K�~K=$pkg.encoder=$newType(0,$kindStruct,"lzw.encoder",true,"compress/lzw",false,function(w_,order_,write_,bits_,nBits_,width_,litWidth_,hi_,overflow_,savedCode_,err_,table_){this.$val=this;if(arguments.length===0){this.w=$ifaceNil;this.order=0;this.write=$throwNilPointerError;this.bits=0;this.nBits=0;this.width=0;this.litWidth=0;this.hi=0;this.overflow=0;this.savedCode=0;this.err=$ifaceNil;this.table=U.zero();return;}this.w=w_;this.order=order_;this.write=write_;this.bits=bits_;this.nBits=nBits_;this.width=width_;this.litWidth=litWidth_;this.hi=hi_;this.overflow=overflow_;this.savedCode=savedCode_;this.err=err_;this.table=table_;});��T.methods=[{prop:"writeLSB",name:"writeLSB",pkg:"compress/lzw",typ:$funcType([$Uint32],[$error],false)},{prop:"writeMSB",name:"writeMSB",pkg:"compress/lzw",typ:$funcType([$Uint32],[$error],false)},{prop:"incHi",name:"incHi",pkg:"compress/lzw",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];��K.init("compress/lzw",[{prop:"w",name:"w",exported:false,typ:I,tag:""},{prop:"order",name:"order",exported:false,typ:E,tag:""},{prop:"write",name:"write",exported:false,typ:X,tag:""},{prop:"bits",name:"bits",exported:false,typ:$Uint32,tag:""},{prop:"nBits",name:"nBits",exported:false,typ:$Uint,tag:""},{prop:"width",name:"width",exported:false,typ:$Uint,tag:""},{prop:"litWidth",name:"litWidth",exported:false,typ:$Uint,tag:""},{prop:"hi",name:"hi",exported:false,typ:$Uint32,tag:""},{prop:"overflow",name:"overflow",exported:false,typ:$Uint32,tag:""},{prop:"savedCode",name:"savedCode",exported:false,typ:$Uint32,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"table",name:"table",exported:false,typ:U,tag:""}]);encodercompress/lzw.Ncompress/lzw.Ordercompress/lzw.Tcompress/lzw.Ucompress/lzw.Xcompress/lzw.encodercompress/lzw.writer NN=$sliceType($Uint8);N OO=$arrayType($Uint8,4096);O PP=$arrayType($Uint16,4096);P QQ=$arrayType($Uint8,8192);Q RR=$ptrType(F);Rcompress/lzw.decoder SS=$sliceType($emptyInterface);S TT=$ptrType(K);Tcompress/lzw.encoder UU=$arrayType($Uint32,16384);U V(V=$funcType([R],[$Uint16,$error],false);Vcompress/lzw.R WW=$ptrType(J);Wcompress/lzw.errWriteCloser X(X=$funcType([T,$Uint32],[$error],false);Xcompress/lzw.T G	errClosed LerrOutOfCodes -    G=B.New("lzw: reader/writer is closed");compress/lzw.errClosed
errors.New "    L=B.New("lzw: out of codes");compress/lzw.errOutOfCodes
errors.New (*compress/lzw.decoder).readLSB�"F.ptr.prototype.readLSB=function(){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  va=this;  �case 1:if(!(a.nBits<a.width)){$s=2;continue;}  �c=a.r.ReadByte();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[0,e];    }  �a.bits=(a.bits|(((f=a.nBits,f<32?((d>>>0)<<f):0)>>>0)))>>>0;  a.nBits=a.nBits+(8)>>>0;    $s=1;continue;case 2:  -h=(((a.bits&((((g=a.width,g<32?(1<<g):0)>>>0)-1>>>0)))>>>0)<<16>>>16);  Xa.bits=(i=(a.width),i<32?(a.bits>>>i):0)>>>0;  la.nBits=a.nBits-(a.width)>>>0;  �return[h,$ifaceNil];    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.readLSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.readLSB=function(){return this.$val.readLSB();};decoderreadLSB~compress/lzw.decoder (*compress/lzw.decoder).readMSB�$F.ptr.prototype.readMSB=function(){var $ptr,a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  case 1:if(!(a.nBits<a.width)){$s=2;continue;}  &c=a.r.ReadByte();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  Treturn[0,e];    }  ha.bits=(a.bits|(((f=((24-a.nBits>>>0)),f<32?((d>>>0)<<f):0)>>>0)))>>>0;  �a.nBits=a.nBits+(8)>>>0;    $s=1;continue;case 2:  �h=(((g=((32-a.width>>>0)),g<32?(a.bits>>>g):0)>>>0)<<16>>>16);  �a.bits=(i=(a.width),i<32?(a.bits<<i):0)>>>0;  �a.nBits=a.nBits-(a.width)>>>0;  �return[h,$ifaceNil];    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.readMSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.readMSB=function(){return this.$val.readMSB();};decoderreadMSB~compress/lzw.decoder (*compress/lzw.decoder).Read��F.ptr.prototype.Read=function(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  b=this;  8case 1:    if(b.toRead.$length>0){  Zc=$copySlice(a,b.toRead);  tb.toRead=$subslice(b.toRead,c);  �return[c,$ifaceNil];    }    if(!($interfaceIsEqual(b.err,$ifaceNil))){  �return[0,b.err];    }  �$r=b.decode();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:F.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Read=function(a){return this.$val.Read(a);};decodercompress/lzw.decodercompress/lzw.decode~ (*compress/lzw.decoder).decode��F.ptr.prototype.decode=function(){var $ptr,a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �case 1:  �c=a.read(a);$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){    if($interfaceIsEqual(e,D.EOF)){  =e=D.ErrUnexpectedEOF;    }  _a.err=e;  n$s=2;continue;    }    if(d<a.clear){  �(f=a.output,g=a.o,((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]=(d<<24>>>24)));  �a.o=a.o+(1)>>0;    if(!((a.last===65535))){  2(h=a.suffix,i=a.hi,((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=(d<<24>>>24)));  S(j=a.prefix,k=a.hi,((k<0||k>=j.length)?$throwRuntimeError("index out of range"):j[k]=a.last));    }    }else if((d===a.clear)){  �a.width=1+(a.litWidth>>>0)>>>0;  �a.hi=a.eof;  �a.overflow=(l=a.width,l<32?(1<<l):0)<<16>>>16;  �a.last=65535;  �$s=1;continue;    }else if((d===a.eof)){  a.err=D.EOF;  -$s=2;continue s;    }else if(d<=a.hi){  Pm=d;n=8191;o=m;p=n;    if(d===a.hi){  Ro=a.last;  awhile(true){if(!(o>=a.clear)){break;}  yo=(q=a.prefix,((o<0||o>=q.length)?$throwRuntimeError("index out of range"):q[o]));    }  �(r=a.output,((p<0||p>=r.length)?$throwRuntimeError("index out of range"):r[p]=(o<<24>>>24)));  �p=p-(1)>>0;  �o=a.last;    }  while(true){if(!(o>=a.clear)){break;}  "(t=a.output,((p<0||p>=t.length)?$throwRuntimeError("index out of range"):t[p]=(s=a.suffix,((o<0||o>=s.length)?$throwRuntimeError("index out of range"):s[o]))));  @p=p-(1)>>0;  Ho=(u=a.prefix,((o<0||o>=u.length)?$throwRuntimeError("index out of range"):u[o]));    }  `(v=a.output,((p<0||p>=v.length)?$throwRuntimeError("index out of range"):v[p]=(o<<24>>>24)));  za.o=a.o+($copySlice($subslice(new N(a.output),a.o),$subslice(new N(a.output),p)))>>0;    if(!((a.last===65535))){  �(w=a.suffix,x=a.hi,((x<0||x>=w.length)?$throwRuntimeError("index out of range"):w[x]=(o<<24>>>24)));  (y=a.prefix,z=a.hi,((z<0||z>=y.length)?$throwRuntimeError("index out of range"):y[z]=a.last));    }    }else{  ?a.err=B.New("lzw: invalid code");  j$s=2;continue s;    }  {aa=d;ab=a.hi+1<<16>>>16;a.last=aa;a.hi=ab;    if(a.hi>=a.overflow){    if(a.width===12){  �a.last=65535;    }else{  �a.width=a.width+(1)>>>0;  a.overflow=(ac=(1),ac<32?(a.overflow<<ac):0)<<16>>>16;    }    }    if(a.o>=4096){  B$s=2;continue;    }    $s=1;continue;case 2:  ja.toRead=$subslice(new N(a.output),0,a.o);  �a.o=0;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:F.ptr.prototype.decode};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.decode=function(){return this.$val.decode();};decoderdecode~compress/lzw.Ncompress/lzw.decoder
errors.Newio.EOFio.ErrUnexpectedEOF (*compress/lzw.decoder).Close��F.ptr.prototype.Close=function(){var $ptr,a;  �a=this;  �a.err=G;  "return $ifaceNil;    };F.prototype.Close=function(){return this.$val.Close();};decodercompress/lzw.decodercompress/lzw.errClosed compress/lzw.NewReaderH�oH=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  [d=new F.ptr($ifaceNil,0,0,0,$throwNilPointerError,0,$ifaceNil,0,0,0,0,0,O.zero(),P.zero(),Q.zero(),0,N.nil);    e=b;    if(e===(0)){  �d.read=$methodExpr(R,"readLSB");    }else if(e===(1)){  �d.read=$methodExpr(R,"readMSB");    }else{  �d.err=B.New("lzw: unknown order");  return d;    }  if(c<2||8<c){$s=1;continue;}$s=2;continue;    case 1:  7f=C.Errorf("lzw: litWidth %d out of range",new S([new $Int(c)]));$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}d.err=f;  wreturn d;    case 2:  �g=$assertType(a,D.ByteReader,true);h=g[0];i=g[1];    if(i){  �d.r=h;    }else{  �d.r=A.NewReader(a);    }  �d.litWidth=c;  �d.width=1+(c>>>0)>>>0;  d.clear=(j=(c>>>0),j<32?(1<<j):0)<<16>>>16;  9k=d.clear+1<<16>>>16;l=d.clear+1<<16>>>16;d.eof=k;d.hi=l;  ]d.overflow=(m=d.width,m<32?(1<<m):0)<<16>>>16;  �d.last=65535;  �return d;    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewReader=H;	NewReaderbufio.NewReadercompress/lzw.Ncompress/lzw.NewReadercompress/lzw.Ocompress/lzw.Pcompress/lzw.Qcompress/lzw.Rcompress/lzw.Scompress/lzw.decodercompress/lzw.readLSB~compress/lzw.readMSB~
errors.New
fmt.Errorfio.ByteReader $(*compress/lzw.errWriteCloser).Write��J.ptr.prototype.Write=function(a){var $ptr,a,b;  gb=this;  �return[0,b.err];    };J.prototype.Write=function(a){return this.$val.Write(a);};errWriteClosercompress/lzw.errWriteCloser $(*compress/lzw.errWriteCloser).Close��J.ptr.prototype.Close=function(){var $ptr,a;  �a=this;  �return a.err;    };J.prototype.Close=function(){return this.$val.Close();};errWriteClosercompress/lzw.errWriteCloser  (*compress/lzw.encoder).writeLSB��K.ptr.prototype.writeLSB=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $�b=this;  $�b.bits=(b.bits|(((c=b.nBits,c<32?(a<<c):0)>>>0)))>>>0;  $�b.nBits=b.nBits+(b.width)>>>0;  $�case 1:if(!(b.nBits>=8)){$s=2;continue;}  $�d=b.w.WriteByte((b.bits<<24>>>24));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))){  %0return e;    }  %Ab.bits=(f=(8),f<32?(b.bits>>>f):0)>>>0;  %Pb.nBits=b.nBits-(8)>>>0;    $s=1;continue;case 2:  %areturn $ifaceNil;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.writeLSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.writeLSB=function(a){return this.$val.writeLSB(a);};encoder	writeLSB~compress/lzw.encoder  (*compress/lzw.encoder).writeMSB��K.ptr.prototype.writeMSB=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  %�b=this;  %�b.bits=(b.bits|(((c=(((32-b.width>>>0)-b.nBits>>>0)),c<32?(a<<c):0)>>>0)))>>>0;  &b.nBits=b.nBits+(b.width)>>>0;  & case 1:if(!(b.nBits>=8)){$s=2;continue;}  &8d=b.w.WriteByte(((b.bits>>>24>>>0)<<24>>>24));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))){  &sreturn e;    }  &�b.bits=(f=(8),f<32?(b.bits<<f):0)>>>0;  &�b.nBits=b.nBits-(8)>>>0;    $s=1;continue;case 2:  &�return $ifaceNil;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.writeMSB};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.writeMSB=function(a){return this.$val.writeMSB(a);};encoder	writeMSB~compress/lzw.encoder (*compress/lzw.encoder).incHi��K.ptr.prototype.incHi=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  (5a=this;  (Ra.hi=a.hi+(1)>>>0;    if(a.hi===a.overflow){  (ta.width=a.width+(1)>>>0;  (�a.overflow=(b=(1),b<32?(a.overflow<<b):0)>>>0;    }  (�if(a.hi===4095){$s=1;continue;}$s=2;continue;    case 1:  (�d=(c=a.litWidth,c<32?(1<<c):0)>>>0;  (�e=a.write(a,d);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;    if(!($interfaceIsEqual(f,$ifaceNil))){  (�return f;    }  )a.width=a.litWidth+1>>>0;  )(a.hi=d+1>>>0;  );a.overflow=d<<1>>>0;  )Ug=a.table;h=0;while(true){if(!(h<16384)){break;}i=h;  )q(j=a.table,((i<0||i>=j.length)?$throwRuntimeError("index out of range"):j[i]=0));    h++;}  )�return L;    case 2:  )�return $ifaceNil;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.incHi};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.incHi=function(){return this.$val.incHi();};encoderincHi~compress/lzw.encodercompress/lzw.errOutOfCodes (*compress/lzw.encoder).Write��K.ptr.prototype.Write=function(a){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  *	d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;return[b,c];    }    if(a.$length===0){    g=0;h=$ifaceNil;b=g;c=h;return[b,c];    }  *�j=(((i=d.litWidth,i<32?(1<<i):0)<<24>>>24)-1<<24>>>24);    if(!((j===255))){  *�k=a;l=0;while(true){if(!(l<k.$length)){break;}m=((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l]);    if(m>j){  *�d.err=B.New("lzw: input byte too large for the litWidth");    n=0;o=d.err;b=n;c=o;return[b,c];    }    l++;}    }  +Qb=a.$length;  +]p=d.savedCode;    if(p===4294967295){  +�q=((0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0])>>>0);r=$subslice(a,1);p=q;a=r;    }  +�s=a;t=0;case 1:if(!(t<s.$length)){$s=2;continue;}u=((t<0||t>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+t]);  , v=(u>>>0);  ,w=((p<<8>>>0)|v)>>>0;  ,�x=(((((w>>>12>>>0)^w)>>>0))&16383)>>>0;  ,�y=x;z=(aa=d.table,((x<0||x>=aa.length)?$throwRuntimeError("index out of range"):aa[x]));ab=y;ac=z;case 3:if(!(!((ac===0)))){$s=4;continue;}    if(w===(ac>>>12>>>0)){  -p=(ac&4095)>>>0;  -(t++;$s=1;continue s;    }  ->ab=(((ab+1>>>0))&16383)>>>0;  -Yac=(ad=d.table,((ab<0||ab>=ad.length)?$throwRuntimeError("index out of range"):ad[ab]));    $s=3;continue;case 4:  -�ae=d.write(d,p);$s=5;case 5:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}d.err=ae;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    af=0;ag=d.err;b=af;c=ag;return[b,c];    }  .p=v;  .�ah=d.incHi();$s=6;case 6:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}ai=ah;    if(!($interfaceIsEqual(ai,$ifaceNil))){    if($interfaceIsEqual(ai,L)){  /t++;$s=1;continue;    }  /d.err=ai;    aj=0;ak=d.err;b=aj;c=ak;return[b,c];    }  /�while(true){    if((al=d.table,((x<0||x>=al.length)?$throwRuntimeError("index out of range"):al[x]))===0){  /�(am=d.table,((x<0||x>=am.length)?$throwRuntimeError("index out of range"):am[x]=((((w<<12>>>0))|d.hi)>>>0)));  /�break;    }  /�x=(((x+1>>>0))&16383)>>>0;    }    t++;$s=1;continue;case 2:  0d.savedCode=p;    an=b;ao=$ifaceNil;b=an;c=ao;return[b,c];    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Write=function(a){return this.$val.Write(a);};encodercompress/lzw.encodercompress/lzw.errOutOfCodescompress/lzw.incHi~
errors.New (*compress/lzw.encoder).Close�%K.ptr.prototype.Close=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  0�a=this;    if(!($interfaceIsEqual(a.err,$ifaceNil))){    if($interfaceIsEqual(a.err,G)){  0�return $ifaceNil;    }  1return a.err;    }  1Ja.err=G;  1if(!((a.savedCode===4294967295))){$s=1;continue;}$s=2;continue;    case 1:  1�b=a.write(a,a.savedCode);$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;    if(!($interfaceIsEqual(c,$ifaceNil))){  1�return c;    }  1�d=a.incHi();$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))&&!($interfaceIsEqual(e,L))){  2"return e;    }    case 2:  2Mg=((f=a.litWidth,f<32?(1<<f):0)>>>0)+1>>>0;  2rh=a.write(a,g);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h;    if(!($interfaceIsEqual(i,$ifaceNil))){  2�return i;    }  2�if(a.nBits>0){$s=6;continue;}$s=7;continue;    case 6:    if(a.order===1){  2�a.bits=(j=(24),j<32?(a.bits>>>j):0)>>>0;    }  3k=a.w.WriteByte((a.bits<<24>>>24));$s=8;case 8:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;    if(!($interfaceIsEqual(l,$ifaceNil))){  38return l;    }    case 7:  3Km=a.w.Flush();$s=9;case 9:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}$s=10;case 10:return m;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Close=function(){return this.$val.Close();};encodercompress/lzw.encodercompress/lzw.errClosedcompress/lzw.errOutOfCodescompress/lzw.incHi~ compress/lzw.NewWriterM��M=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  5d=$throwNilPointerError;    e=b;    if(e===(0)){  5Zd=$methodExpr(T,"writeLSB");    }else if(e===(1)){  5�d=$methodExpr(T,"writeMSB");    }else{  5�return new J.ptr(B.New("lzw: unknown order"));    }  5�if(c<2||8<c){$s=1;continue;}$s=2;continue;    case 1:  6f=C.Errorf("lzw: litWidth %d out of range",new S([new $Int(c)]));$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=4;case 4:return new J.ptr(f);    case 2:  6^g=$assertType(a,I,true);h=g[0];i=g[1];    if(!i){  6h=A.NewWriter(a);    }  6�j=(c>>>0);  6�return new K.ptr(h,b,d,0,0,1+j>>>0,j,((k=j,k<32?(1<<k):0)>>>0)+1>>>0,(l=((j+1>>>0)),l<32?(1<<l):0)>>>0,4294967295,$ifaceNil,U.zero());    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriter=M;	NewWriterbufio.NewWritercompress/lzw.NewWritercompress/lzw.Scompress/lzw.Tcompress/lzw.Ucompress/lzw.encodercompress/lzw.errWriteClosercompress/lzw.writeLSB~compress/lzw.writeMSB~compress/lzw.writer
errors.New
fmt.Errorf �d{"Base":14197,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/compress/lzw/reader.go","Base":1,"Size":7080,"Lines":[0,55,109,159,160,231,300,356,359,427,500,559,562,637,702,721,733,734,801,834,835,844,853,863,870,876,878,879,938,953,954,962,1038,1056,1127,1145,1150,1152,1153,1161,1186,1215,1251,1253,1254,1324,1354,1376,1400,1417,1432,1447,1510,1585,1601,1602,1653,1696,1767,1824,1887,1951,1990,1991,2062,2106,2161,2234,2274,2303,2333,2334,2377,2441,2511,2584,2616,2673,2732,2764,2806,2850,2852,2853,2927,2973,2998,3025,3043,3060,3064,3097,3112,3115,3158,3178,3198,3216,3218,3219,3292,3338,3363,3390,3408,3425,3429,3469,3484,3487,3529,3549,3569,3587,3589,3590,3638,3645,3670,3696,3723,3740,3744,3764,3783,3787,3800,3803,3805,3806,3871,3921,3972,4001,4074,4080,4087,4112,4130,4152,4182,4187,4202,4211,4215,4226,4249,4279,4310,4319,4356,4397,4430,4458,4463,4487,4521,4537,4566,4597,4609,4631,4649,4663,4684,4717,4738,4810,4887,4941,4956,4979,5000,5006,5033,5041,5056,5061,5127,5149,5179,5187,5207,5212,5238,5283,5320,5361,5391,5419,5424,5435,5478,5492,5496,5526,5552,5580,5612,5624,5638,5659,5664,5668,5694,5703,5707,5710,5736,5763,5772,5774,5775,5834,5835,5869,5920,5932,5934,5935,5977,6051,6098,6160,6234,6255,6328,6390,6418,6489,6508,6524,6535,6565,6576,6606,6616,6659,6670,6673,6708,6772,6783,6786,6824,6835,6845,6872,6875,6898,6928,6967,7003,7038,7067,7068,7078],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/compress/lzw/writer.go","Base":7082,"Size":7114,"Lines":[0,55,109,159,160,172,173,182,191,201,208,214,216,217,262,286,301,316,318,319,396,425,436,438,439,493,510,512,513,554,568,570,571,579,651,692,717,742,819,898,923,950,1021,1084,1102,1104,1105,1135,1157,1215,1225,1283,1332,1345,1381,1395,1407,1419,1471,1486,1540,1603,1624,1698,1762,1780,1855,1909,1920,1994,2067,2138,2172,2197,2199,2200,2271,2316,2340,2360,2380,2435,2449,2453,2468,2483,2486,2498,2500,2501,2571,2616,2657,2677,2697,2758,2772,2776,2791,2806,2809,2821,2823,2824,2902,2961,3013,3014,3087,3161,3205,3239,3247,3272,3284,3303,3306,3328,3363,3407,3421,3425,3452,3471,3497,3524,3553,3557,3580,3583,3595,3597,3598,3673,3728,3747,3765,3768,3786,3802,3805,3862,3886,3905,3974,3994,3999,4003,4006,4018,4039,4065,4116,4148,4151,4157,4180,4203,4230,4303,4336,4374,4430,4451,4474,4492,4497,4524,4542,4546,4619,4647,4693,4712,4716,4733,4807,4880,4918,4948,4961,4966,4982,5001,5005,5078,5086,5124,5163,5173,5178,5211,5215,5218,5238,5253,5255,5256,5335,5367,5401,5420,5446,5460,5464,5479,5482,5535,5554,5588,5621,5671,5685,5689,5749,5763,5767,5770,5794,5828,5869,5882,5885,5911,5929,5951,5968,5972,6027,6041,6045,6048,6068,6070,6071,6114,6188,6263,6284,6357,6435,6507,6547,6563,6574,6604,6615,6645,6655,6714,6717,6752,6832,6835,6857,6867,6893,6896,6918,6936,6953,6973,6993,7014,7031,7055,7083,7109,7112],"Infos":null}]}
 