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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ���hash/adler32adler32hash��
$$ exports $$
pv0adler32hash/adler32	Checksum data2  	New   Hash32hashhashHashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2  
Sum32      Size$!AA=$packages["hash"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BVB=$pkg.digest=$newType(4,$kindUint32,"adler32.digest",true,"hash/adler32",false,null);��F.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([G],[$Int,$error],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([G],[G],false)}];digesthash/adler32.Fhash/adler32.Ghash/adler32.digest FF=$ptrType(B);Fhash/adler32.digest GG=$sliceType($Uint8);G (*hash/adler32.digest).ResetT$ptrType(B).prototype.Reset=function(){var $ptr,a;  �a=this;  a.$set(1);    };digesthash/adler32.digest hash/adler32.NewCcC=function(){var $ptr,a;  �a=$newDataPointer(0,F);  �a.Reset();  �return a;    };$pkg.New=C;Newhash/adler32.Fhash/adler32.Newhash/adler32.digest (*hash/adler32.digest).SizeR$ptrType(B).prototype.Size=function(){var $ptr,a;  �a=this;  �return 4;    };digesthash/adler32.digest  (*hash/adler32.digest).BlockSizeW$ptrType(B).prototype.BlockSize=function(){var $ptr,a;  a=this;  (return 4;    };digesthash/adler32.digest hash/adler32.updateD��D=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n;  �c=(((a&65535)>>>0)>>>0);d=((a>>>16>>>0)>>>0);e=c;f=d;  �while(true){if(!(b.$length>0)){break;}  �g=G.nil;    if(b.$length>5552){  �h=$subslice(b,0,5552);i=$subslice(b,5552);b=h;g=i;    }  while(true){if(!(b.$length>=4)){break;}  e=e+(((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0))>>>0;  0f=f+(e)>>>0;  <e=e+(((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>0))>>>0;  Rf=f+(e)>>>0;  ^e=e+(((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>0))>>>0;  tf=f+(e)>>>0;  �e=e+(((3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])>>>0))>>>0;  �f=f+(e)>>>0;  �b=$subslice(b,4);    }  �j=b;k=0;while(true){if(!(k<j.$length)){break;}l=((k<0||k>=j.$length)?$throwRuntimeError("index out of range"):j.$array[j.$offset+k]);  �e=e+((l>>>0))>>>0;  �f=f+(e)>>>0;    k++;}  �e=(m=e%(65521),m===m?m:$throwRuntimeError("integer divide by zero"));  �f=(n=f%(65521),n===n?n:$throwRuntimeError("integer divide by zero"));  b=g;    }  return((((f<<16>>>0)|e)>>>0)>>>0);    };updatehash/adler32.Ghash/adler32.update (*hash/adler32.digest).Write��$ptrType(B).prototype.Write=function(a){var $ptr,a,b,c,d,e,f;b=0;c=$ifaceNil;  3d=this;  ed.$set(D(d.$get(),a));    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };digesthash/adler32.digesthash/adler32.update (*hash/adler32.digest).Sum32_$ptrType(B).prototype.Sum32=function(){var $ptr,a;  �a=this;  �return(a.$get()>>>0);    };digesthash/adler32.digest (*hash/adler32.digest).Sum��$ptrType(B).prototype.Sum=function(a){var $ptr,a,b,c;  �b=this;  �c=(b.$get()>>>0);  return $append(a,((c>>>24>>>0)<<24>>>24),((c>>>16>>>0)<<24>>>24),((c>>>8>>>0)<<24>>>24),(c<<24>>>24));    };digesthash/adler32.digest hash/adler32.ChecksumEHE=function(a){var $ptr,a;  �return(D(1,a)>>>0);    };$pkg.Checksum=E;Checksumhash/adler32.Checksumhash/adler32.update �b{"Base":2238,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/hash/adler32/adler32.go","Base":1,"Size":2236,"Lines":[0,55,109,159,160,213,216,246,310,377,444,501,544,560,561,575,576,584,638,651,687,740,793,806,808,809,855,870,871,930,982,1001,1002,1038,1039,1105,1172,1197,1215,1226,1236,1238,1239,1283,1284,1330,1331,1367,1408,1451,1469,1484,1505,1534,1538,1558,1580,1592,1614,1626,1648,1660,1682,1694,1707,1711,1735,1754,1766,1770,1782,1794,1802,1805,1833,1835,1836,1891,1911,1931,1933,1934,1988,1989,2030,2047,2113,2115,2116,2167],"Infos":null}]}
 