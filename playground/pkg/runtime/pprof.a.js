����Archive�� 	
ImportPath GcData
 Dependencies�� Imports�� Declarations�� Tests�� FileSet
 BlockingInit Minified   ��[]string��   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �
l��runtime/pprof��package pprof
import io "io"
import sync "sync"
func @"".Lookup(@"".name string) (? *@"".Profile)
type @"".Profile struct { @"".name string; @"".mu @"sync".Mutex; @"".m map[interface {  }][]uintptr; @"".count func () (? int); @"".write func (? @"io".Writer, ? int) (? error) }
func (? *@"".Profile) @"".WriteTo(@"".w @"io".Writer, @"".debug int) (? error)
func @"".StartCPUProfile(@"".w @"io".Writer) (? error)
func @"".StopCPUProfile() ()
func @"".WriteHeapProfile(@"".w @"io".Writer) (? error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsyncioioA syncB C�oC=$pkg.Profile=$newType(0,$kindStruct,"pprof.Profile","Profile","runtime/pprof",function(name_,mu_,m_,count_,write_){this.$val=this;this.name=name_!==undefined?name_:"";this.mu=mu_!==undefined?mu_:new B.Mutex.Ptr();this.m=m_!==undefined?m_:false;this.count=count_!==undefined?count_:$throwNilPointerError;this.write=write_!==undefined?write_:$throwNilPointerError;});��($ptrType(C)).methods=[["WriteTo","WriteTo","",$funcType([A.Writer,$Int],[$error],false),-1]];C.init([["name","name","runtime/pprof",$String,""],["mu","mu","runtime/pprof",B.Mutex,""],["m","m","runtime/pprof",($mapType($emptyInterface,($sliceType($Uintptr)))),""],["count","count","runtime/pprof",($funcType([],[$Int],false)),""],["write","write","runtime/pprof",($funcType([A.Writer,$Int],[$error],false)),""]]);Profile	io:Writer
sync:Mutex  (*runtime/pprof.Profile).WriteTo��C.Ptr.prototype.WriteTo=function(a,b){var c;   �c=this;  return $ifaceNil;    };C.prototype.WriteTo=function(a,b){return this.$val.WriteTo(a,b);};Profileruntime/pprof:Profile runtime/pprof.StartCPUProfileD@D=$pkg.StartCPUProfile=function(a){  :return $ifaceNil;    };StartCPUProfile runtime/pprof.StopCPUProfileE(E=$pkg.StopCPUProfile=function(){    };StopCPUProfile runtime/pprof.WriteHeapProfileFAF=$pkg.WriteHeapProfile=function(a){  �return $ifaceNil;    };WriteHeapProfile runtime/pprof.LookupG>G=$pkg.Lookup=function(a){  �return($ptrType(C)).nil;    };Lookupruntime/pprof:Profile �${"Base":464,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/runtime/pprof/pprof.go","Base":1,"Size":462,"Lines":[0,13,14,28,29,38,44,52,54,55,77,91,109,142,160,194,196,197,255,267,269,270,312,324,326,327,351,353,354,397,409,411,412,448,460],"Infos":null}]}
 