p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �
k��hashhashio�upackage hash
import io "io"
type @"".Hash interface { @"".BlockSize() (? int); @"".Reset() (); @"".Size() (? int); @"".Sum(@"".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"".Hash32 interface { @"".BlockSize() (? int); @"".Reset() (); @"".Size() (? int); @"".Sum(@"".b []byte) (? []byte); @"".Sum32() (? uint32); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"".Hash64 interface { @"".BlockSize() (? int); @"".Reset() (); @"".Size() (? int); @"".Sum(@"".b []byte) (? []byte); @"".Sum64() (? uint64); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["io"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BFB=$pkg.Hash=$newType(8,$kindInterface,"hash.Hash","Hash","hash",null);�]B.init([{prop:"BlockSize",name:"BlockSize",pkg:"",type:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",type:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",type:$funcType([E],[E],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([E],[$Int,$error],false)}]);	hash.Hash	hash.Hashhash:[]byte CLC=$pkg.Hash32=$newType(8,$kindInterface,"hash.Hash32","Hash32","hash",null);��C.init([{prop:"BlockSize",name:"BlockSize",pkg:"",type:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",type:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",type:$funcType([E],[E],false)},{prop:"Sum32",name:"Sum32",pkg:"",type:$funcType([],[$Uint32],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([E],[$Int,$error],false)}]);hash.Hash32hash.Hash32hash:[]byte DLD=$pkg.Hash64=$newType(8,$kindInterface,"hash.Hash64","Hash64","hash",null);��D.init([{prop:"BlockSize",name:"BlockSize",pkg:"",type:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",type:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",type:$funcType([E],[E],false)},{prop:"Sum64",name:"Sum64",pkg:"",type:$funcType([],[$Uint64],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([E],[$Int,$error],false)}]);hash.Hash64hash.Hash64hash:[]byte EE=$sliceType($Uint8);hash:[]byte �6{"Base":1212,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/hash/hash.go","Base":1,"Size":1210,"Lines":[0,55,109,159,160,216,229,230,242,243,310,332,417,448,459,460,531,581,603,604,652,661,662,716,728,729,785,840,903,941,958,960,961,1037,1061,1067,1083,1085,1086,1162,1186,1192,1208],"Infos":null}]}
 