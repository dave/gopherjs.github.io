p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����errorserrors��package errors
func @"".New(@"".text string) (? error)
type @"".errorString struct { @"".s string }
func (? *@"".errorString) @"".Error() (? string)
$$
B��B=$pkg.errorString=$newType(0,$kindStruct,"errors.errorString","errorString","errors",function(s_){this.$val=this;this.s=s_!==undefined?s_:"";});RC.methods=[{prop:"Error",name:"Error",pkg:"",type:$funcType([],[$String],false)}];?B.init([{prop:"s",name:"s",pkg:"errors",type:$String,tag:""}]);errors.errorStringerrors.errorStringerrors:*errors.errorString CC=$ptrType(B);errors:*errors.errorStringerrors.errorString 
errors.NewA7A=$pkg.New=function(a){  Freturn new B.ptr(a);    };
errors.New
errors.Newerrors.errorString (*errors.errorString).Error��B.ptr.prototype.Error=function(){var a;  �a=this;  �return a.s;    };B.prototype.Error=function(){return this.$val.Error();};errors.errorStringerrors.errorString ��{"Base":501,"Files":[{"Name":"/usr/local/Cellar/go/1.4.1/libexec/src/errors/errors.go","Base":1,"Size":499,"Lines":[0,56,110,160,161,222,237,238,294,324,351,353,354,407,433,443,445,446,485,497],"Infos":null}]}
 