g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   �����testing/quick�S�package quick
import flag "flag"
import fmt "fmt"
import math "math"
import rand "math/rand"
import reflect "reflect"
import strings "strings"
func @"".Check(@"".f interface {  }, @"".config *@"".Config) (@"".err error)
func @"".CheckEqual(@"".f interface {  }, @"".g interface {  }, @"".config *@"".Config) (@"".err error)
type @"".CheckEqualError struct { ? @"".CheckError; @"".Out1 []interface {  }; @"".Out2 []interface {  } }
func (? *@"".CheckEqualError) @"".Error() (? string)
type @"".CheckError struct { @"".Count int; @"".In []interface {  } }
func (? *@"".CheckError) @"".Error() (? string)
type @"".Config struct { @"".MaxCount int; @"".MaxCountScale float64; @"".Rand *@"math/rand".Rand; @"".Values func (? []@"reflect".Value, ? *@"math/rand".Rand) () }
func (? *@"".Config) @"".getMaxCount() (@"".maxCount int)
func (? *@"".Config) @"".getRand() (? *@"math/rand".Rand)
type @"".Generator interface { @"".Generate(@"".rand *@"math/rand".Rand, @"".size int) (? @"reflect".Value) }
type @"".SetupError string
func (? @"".SetupError) @"".Error() (? string)
func (? *@"".SetupError) @"".Error() (? string)
func @"".Value(@"".t @"reflect".Type, @"".rand *@"math/rand".Rand) (@"".value @"reflect".Value, @"".ok bool)
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"math/rand".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"math/rand".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"math/rand".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"math/rand".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"math/rand".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"reflect".Value struct { @"reflect".typ *@"reflect".rtype; @"reflect".ptr @"unsafe".Pointer; ? @"reflect".flag }
func (? @"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Bool() (? bool)
func (? @"reflect".Value) @"reflect".Bytes() (? []byte)
func (? @"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CanAddr() (? bool)
func (? @"reflect".Value) @"reflect".CanInterface() (? bool)
func (? @"reflect".Value) @"reflect".CanSet() (? bool)
func (? @"reflect".Value) @"reflect".Cap() (? int)
func (? @"reflect".Value) @"reflect".Close() ()
func (? @"reflect".Value) @"reflect".Complex() (? complex128)
func (? @"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Float() (? float64)
func (? @"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Int() (? int64)
func (? @"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? @"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? @"reflect".Value) @"reflect".IsNil() (? bool)
func (? @"reflect".Value) @"reflect".IsValid() (? bool)
func (? @"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? @"reflect".Value) @"reflect".Len() (? int)
func (? @"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".NumField() (? int)
func (? @"reflect".Value) @"reflect".NumMethod() (? int)
func (? @"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? @"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? @"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? @"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? @"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? @"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? @"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? @"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? @"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? @"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? @"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? @"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".String() (? string)
func (? @"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? @"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? @"reflect".Value) @"reflect".Uint() (? uint64)
func (? @"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? @"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target @"unsafe".Pointer) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
import js "github.com/gopherjs/gopherjs/js"
func (? @"reflect".Value) @"reflect".object() (? @"github.com/gopherjs/gopherjs/js".Object)
func (? @"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? @"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".runes() (? []rune)
func (? @"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? @"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
func (? *@"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Bool() (? bool)
func (? *@"reflect".Value) @"reflect".Bytes() (? []byte)
func (? *@"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CanAddr() (? bool)
func (? *@"reflect".Value) @"reflect".CanInterface() (? bool)
func (? *@"reflect".Value) @"reflect".CanSet() (? bool)
func (? *@"reflect".Value) @"reflect".Cap() (? int)
func (? *@"reflect".Value) @"reflect".Close() ()
func (? *@"reflect".Value) @"reflect".Complex() (? complex128)
func (? *@"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Float() (? float64)
func (? *@"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Int() (? int64)
func (? *@"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? *@"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? *@"reflect".Value) @"reflect".IsNil() (? bool)
func (? *@"reflect".Value) @"reflect".IsValid() (? bool)
func (? *@"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".Value) @"reflect".Len() (? int)
func (? *@"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".NumField() (? int)
func (? *@"reflect".Value) @"reflect".NumMethod() (? int)
func (? *@"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? *@"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? *@"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? *@"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? *@"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? *@"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? *@"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? *@"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? *@"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? *@"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? *@"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".String() (? string)
func (? *@"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? *@"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? *@"reflect".Value) @"reflect".Uint() (? uint64)
func (? *@"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? *@"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target @"unsafe".Pointer) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".object() (? @"github.com/gopherjs/gopherjs/js".Object)
func (? *@"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? *@"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".runes() (? []rune)
func (? *@"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? *@"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
type @"reflect".Type interface { @"reflect".Align() (? int); @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Bits() (? int); @"reflect".ChanDir() (? @"reflect".ChanDir); @"reflect".Comparable() (? bool); @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Elem() (? @"reflect".Type); @"reflect".Field(@"reflect".i int) (? @"reflect".StructField); @"reflect".FieldAlign() (? int); @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField); @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool); @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool); @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool); @"reflect".In(@"reflect".i int) (? @"reflect".Type); @"reflect".IsVariadic() (? bool); @"reflect".Key() (? @"reflect".Type); @"reflect".Kind() (? @"reflect".Kind); @"reflect".Len() (? int); @"reflect".Method(? int) (? @"reflect".Method); @"reflect".MethodByName(? string) (? @"reflect".Method, ? bool); @"reflect".Name() (? string); @"reflect".NumField() (? int); @"reflect".NumIn() (? int); @"reflect".NumMethod() (? int); @"reflect".NumOut() (? int); @"reflect".Out(@"reflect".i int) (? @"reflect".Type); @"reflect".PkgPath() (? string); @"reflect".Size() (? uintptr); @"reflect".String() (? string); @"reflect".common() (? *@"reflect".rtype); @"reflect".uncommon() (? *@"reflect".uncommonType) }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"reflect".rtype struct { @"reflect".size uintptr; @"reflect".hash uint32; _ uint8; @"reflect".align uint8; @"reflect".fieldAlign uint8; @"reflect".kind uint8; @"reflect".alg *@"reflect".typeAlg; @"reflect".gc [2]@"unsafe".Pointer; @"reflect".string *string; ? *@"reflect".uncommonType; @"reflect".ptrToThis *@"reflect".rtype; @"reflect".zero @"unsafe".Pointer }
func (? *@"reflect".rtype) @"reflect".Align() (? int)
func (? *@"reflect".rtype) @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Bits() (? int)
func (? *@"reflect".rtype) @"reflect".ChanDir() (? @"reflect".ChanDir)
func (? *@"reflect".rtype) @"reflect".Comparable() (? bool)
func (? *@"reflect".rtype) @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Elem() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Field(@"reflect".i int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldAlign() (? int)
func (? *@"reflect".rtype) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".In(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".IsVariadic() (? bool)
func (? *@"reflect".rtype) @"reflect".Key() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".rtype) @"reflect".Len() (? int)
func (? *@"reflect".rtype) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".rtype) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".rtype) @"reflect".Name() (? string)
func (? *@"reflect".rtype) @"reflect".NumField() (? int)
func (? *@"reflect".rtype) @"reflect".NumIn() (? int)
func (? *@"reflect".rtype) @"reflect".NumMethod() (? int)
func (? *@"reflect".rtype) @"reflect".NumOut() (? int)
func (? *@"reflect".rtype) @"reflect".Out(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".PkgPath() (? string)
func (? *@"reflect".rtype) @"reflect".Size() (? uintptr)
func (? *@"reflect".rtype) @"reflect".String() (? string)
func (? *@"reflect".rtype) @"reflect".common() (? *@"reflect".rtype)
func (? *@"reflect".rtype) @"reflect".pointers() (? bool)
func (? *@"reflect".rtype) @"reflect".ptrTo() (? *@"reflect".rtype)
type @"reflect".flag uintptr
func (? @"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? @"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? @"reflect".flag) @"reflect".mustBeAssignable() ()
func (? @"reflect".flag) @"reflect".mustBeExported() ()
func (? *@"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? *@"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? *@"reflect".flag) @"reflect".mustBeAssignable() ()
func (? *@"reflect".flag) @"reflect".mustBeExported() ()
type @"reflect".Kind uint
func (? @"reflect".Kind) @"reflect".String() (? string)
func (? *@"reflect".Kind) @"reflect".String() (? string)
type @"github.com/gopherjs/gopherjs/js".Object interface { @"github.com/gopherjs/gopherjs/js".Bool() (? bool); @"github.com/gopherjs/gopherjs/js".Call(@"github.com/gopherjs/gopherjs/js".name string, @"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Delete(@"github.com/gopherjs/gopherjs/js".key string) (); @"github.com/gopherjs/gopherjs/js".Float() (? float64); @"github.com/gopherjs/gopherjs/js".Get(@"github.com/gopherjs/gopherjs/js".key string) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Index(@"github.com/gopherjs/gopherjs/js".i int) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Int() (? int); @"github.com/gopherjs/gopherjs/js".Int64() (? int64); @"github.com/gopherjs/gopherjs/js".Interface() (? interface {  }); @"github.com/gopherjs/gopherjs/js".Invoke(@"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".IsNull() (? bool); @"github.com/gopherjs/gopherjs/js".IsUndefined() (? bool); @"github.com/gopherjs/gopherjs/js".Length() (? int); @"github.com/gopherjs/gopherjs/js".New(@"github.com/gopherjs/gopherjs/js".args ...interface {  }) (? @"github.com/gopherjs/gopherjs/js".Object); @"github.com/gopherjs/gopherjs/js".Set(@"github.com/gopherjs/gopherjs/js".key string, @"github.com/gopherjs/gopherjs/js".value interface {  }) (); @"github.com/gopherjs/gopherjs/js".SetIndex(@"github.com/gopherjs/gopherjs/js".i int, @"github.com/gopherjs/gopherjs/js".value interface {  }) (); @"github.com/gopherjs/gopherjs/js".Str() (? string); @"github.com/gopherjs/gopherjs/js".Uint64() (? uint64); @"github.com/gopherjs/gopherjs/js".Unsafe() (? uintptr) }
type @"reflect".ChanDir int
func (? @"reflect".ChanDir) @"reflect".String() (? string)
func (? *@"reflect".ChanDir) @"reflect".String() (? string)
type @"reflect".StructField struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Tag @"reflect".StructTag; @"reflect".Offset uintptr; @"reflect".Index []int; @"reflect".Anonymous bool }
type @"reflect".Method struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Func @"reflect".Value; @"reflect".Index int }
type @"reflect".uncommonType struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".methods []@"reflect".method }
func (? *@"reflect".uncommonType) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".uncommonType) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".uncommonType) @"reflect".Name() (? string)
func (? *@"reflect".uncommonType) @"reflect".NumMethod() (? int)
func (? *@"reflect".uncommonType) @"reflect".PkgPath() (? string)
func (? *@"reflect".uncommonType) @"reflect".uncommon() (? *@"reflect".uncommonType)
type @"reflect".typeAlg struct { @"reflect".hash func (? @"unsafe".Pointer, ? uintptr, ? uintptr) (? uintptr); @"reflect".equal func (? @"unsafe".Pointer, ? @"unsafe".Pointer, ? uintptr) (? bool) }
type @"reflect".StructTag string
func (? @"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
func (? *@"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
type @"reflect".method struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".mtyp *@"reflect".rtype; @"reflect".typ *@"reflect".rtype; @"reflect".ifn @"unsafe".Pointer; @"reflect".tfn @"unsafe".Pointer }
$$
flagA fmtB mathC 	math/randD reflectE stringsF E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} E    $r=F.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} H_H=$pkg.Generator=$newType(8,$kindInterface,"quick.Generator","Generator","testing/quick",null);ZH.init([["Generate","Generate","",$funcType([($ptrType(D.Rand)),$Int],[E.Value],false)]]);	Generatormath/rand:Randreflect:Value M�vM=$pkg.Config=$newType(0,$kindStruct,"quick.Config","Config","testing/quick",function(MaxCount_,MaxCountScale_,Rand_,Values_){this.$val=this;this.MaxCount=MaxCount_!==undefined?MaxCount_:0;this.MaxCountScale=MaxCountScale_!==undefined?MaxCountScale_:0;this.Rand=Rand_!==undefined?Rand_:($ptrType(D.Rand)).nil;this.Values=Values_!==undefined?Values_:$throwNilPointerError;});��($ptrType(M)).methods=[["getMaxCount","getMaxCount","testing/quick",$funcType([],[$Int],false),-1],["getRand","getRand","testing/quick",$funcType([],[($ptrType(D.Rand))],false),-1]];M.init([["MaxCount","MaxCount","",$Int,""],["MaxCountScale","MaxCountScale","",$Float64,""],["Rand","Rand","",($ptrType(D.Rand)),""],["Values","Values","",($funcType([($sliceType(E.Value)),($ptrType(D.Rand))],[],false)),""]]);Configmath/rand:Randreflect:Value O_O=$pkg.SetupError=$newType(8,$kindString,"quick.SetupError","SetupError","testing/quick",null);��O.methods=[["Error","Error","",$funcType([],[$String],false),-1]];($ptrType(O)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];
SetupError P��P=$pkg.CheckError=$newType(0,$kindStruct,"quick.CheckError","CheckError","testing/quick",function(Count_,In_){this.$val=this;this.Count=Count_!==undefined?Count_:0;this.In=In_!==undefined?In_:($sliceType($emptyInterface)).nil;});��($ptrType(P)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];P.init([["Count","Count","",$Int,""],["In","In","",($sliceType($emptyInterface)),""]]);
CheckError Q�dQ=$pkg.CheckEqualError=$newType(0,$kindStruct,"quick.CheckEqualError","CheckEqualError","testing/quick",function(CheckError_,Out1_,Out2_){this.$val=this;this.CheckError=CheckError_!==undefined?CheckError_:new P.Ptr();this.Out1=Out1_!==undefined?Out1_:($sliceType($emptyInterface)).nil;this.Out2=Out2_!==undefined?Out2_:($sliceType($emptyInterface)).nil;});��($ptrType(Q)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];Q.init([["CheckError","","",P,""],["Out1","Out1","",($sliceType($emptyInterface)),""],["Out2","Out2","",($sliceType($emptyInterface)),""]]);CheckEqualErrortesting/quick:CheckError GdefaultMaxCount NN=new M.Ptr();defaultConfigtesting/quick:Configtesting/quick:defaultConfig R    G=A.Int("quickchecks",100,"The default number of iterations for each check");flag:Inttesting/quick:defaultMaxCount testing/quick.randFloat32I��I=function(a){var b;  #b=a.Float64()*3.4028234663852886e+38;  J    if((a.Int()&1)===1){  cb=-b;    }  nreturn b;    };randFloat32 testing/quick.randFloat64J��J=function(a){var b;  �b=a.Float64()*1.7976931348623157e+308;  #    if((a.Int()&1)===1){  <b=-b;    }  Greturn b;    };randFloat64 testing/quick.randInt64K\K=function(a){var b;  �return(b=a.Int63(),new $Int64(b.$high-1073741824,b.$low-0));    };	randInt64 testing/quick.ValueL��L=$pkg.Value=function(a,b){var c=new E.Value.Ptr(),d=false,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba;  o  re=$assertType(E.Zero(a).Interface(),H,true);f=e[0];g=e[1];    if(g){  �    h=new E.Value.Ptr();$copy(h,f.Generate(b,50),E.Value);i=true;$copy(c,h,E.Value);d=i;return[c,d];    }  �j=new E.Value.Ptr();$copy(j,E.New(a).Elem(),E.Value);  �  �k=a;l=k.Kind();   if(l===1){  5j.SetBool((b.Int()&1)===0);      S}else if(l===13){  kj.SetFloat($coerceFloat32(I(b)));      �}else if(l===14){  �j.SetFloat(J(b));      �}else if(l===15){  �j.SetComplex(new $Complex128($coerceFloat32(I(b)),$coerceFloat32(I(b))));      3}else if(l===16){  Nj.SetComplex(new $Complex128(J(b),J(b)));      �}else if(l===4){  �j.SetInt(K(b));      �}else if(l===5){  �j.SetInt(K(b));      �}else if(l===6){  	j.SetInt(K(b));      	}else if(l===3){  	3j.SetInt(K(b));      	N}else if(l===2){  	bj.SetInt(K(b));      	}}else if(l===9){  	�j.SetUint((m=K(b),new $Uint64(m.$high,m.$low)));      	�}else if(l===10){  	�j.SetUint((n=K(b),new $Uint64(n.$high,n.$low)));      	�}else if(l===11){  

j.SetUint((o=K(b),new $Uint64(o.$high,o.$low)));      
.}else if(l===8){  
Dj.SetUint((p=K(b),new $Uint64(p.$high,p.$low)));      
h}else if(l===7){  
}j.SetUint((q=K(b),new $Uint64(q.$high,q.$low)));      
�}else if(l===12){  
�j.SetUint((r=K(b),new $Uint64(r.$high,r.$low)));      
�}else if(l===21){  
�s=b.Intn(50);  j.Set($clone(E.MakeMap(k),E.Value));  9  =t=0;while(t<s){  \u=L(k.Key(),b);v=new E.Value.Ptr();$copy(v,u[0],E.Value);w=u[1];  �x=L(k.Elem(),b);y=new E.Value.Ptr();$copy(y,x[0],E.Value);z=x[1];  �    if(!w||!z){  �    aa=new E.Value.Ptr(($ptrType(E.rtype)).nil,0,0);ab=false;$copy(c,aa,E.Value);d=ab;return[c,d];    }  �j.SetMapIndex($clone(v,E.Value),$clone(y,E.Value));      S  St=t+(1)>>0;}      }else if(l===22){  $ac=L(k.Elem(),b);ad=new E.Value.Ptr();$copy(ad,ac[0],E.Value);ae=ac[1];  O    if(!ae){  [    af=new E.Value.Ptr(($ptrType(E.rtype)).nil,0,0);ag=false;$copy(c,af,E.Value);d=ag;return[c,d];    }  j.Set($clone(E.New(k.Elem()),E.Value));  �j.Elem().Set($clone(ad,E.Value));      �}else if(l===23){  �ah=b.Intn(50);  �j.Set($clone(E.MakeSlice(k,ah,ah),E.Value));  -  1ai=0;while(ai<ah){  Paj=L(k.Elem(),b);ak=new E.Value.Ptr();$copy(ak,aj[0],E.Value);al=aj[1];  |    if(!al){  �    am=new E.Value.Ptr(($ptrType(E.rtype)).nil,0,0);an=false;$copy(c,am,E.Value);d=an;return[c,d];    }  �j.Index(ai).Set($clone(ak,E.Value));      G  Gai=ai+(1)>>0;}      �}else if(l===24){  �ao=b.Intn(50);  ap=($sliceType($Int32)).make(ao);  ,  0aq=0;while(aq<ao){  O(aq<0||aq>=ap.$length)?$throwRuntimeError("index out of range"):ap.$array[ap.$offset+aq]=(b.Intn(1114111)>>0);      F  Faq=aq+(1)>>0;}  j.SetString($runesToString(ap));      �}else if(l===25){  �  �ar=0;while(ar<j.NumField()){  �as=L(k.Field(ar).Type,b);at=new E.Value.Ptr();$copy(at,as[0],E.Value);au=as[1];      if(!au){      av=new E.Value.Ptr(($ptrType(E.rtype)).nil,0,0);aw=false;$copy(c,av,E.Value);d=aw;return[c,d];    }  Dj.Field(ar).Set($clone(at,E.Value));      �  �ar=ar+(1)>>0;}    }else{  i    ax=new E.Value.Ptr(($ptrType(E.rtype)).nil,0,0);ay=false;$copy(c,ax,E.Value);d=ay;return[c,d];    }  �    az=new E.Value.Ptr();$copy(az,j,E.Value);ba=true;$copy(c,az,E.Value);d=ba;return[c,d];    };Value
reflect:MakeMapreflect:MakeSlicereflect:Newreflect:Valuereflect:Zeroreflect:rtypetesting/quick:Generatortesting/quick:randFloat32testing/quick:randFloat64testing/quick:randInt64 (*testing/quick.Config).getRand��M.Ptr.prototype.getRand=function(){var a;  �a=this;  �    if(a.Rand===($ptrType(D.Rand)).nil){  
return D.New(D.NewSource(new $Int64(0,0)));    }  1return a.Rand;    };M.prototype.getRand=function(){return this.$val.getRand();};ConfiggetRandmath/rand:Newmath/rand:NewSourcemath/rand:Randtesting/quick:Config #(*testing/quick.Config).getMaxCount�/M.Ptr.prototype.getMaxCount=function(){var a=0,b;  �b=this;  �a=b.MaxCount;  �    if(a===0){  �    if(!((b.MaxCountScale===0))){  a=(b.MaxCountScale*G.$get()>>0);    }else{  \a=G.$get();    }    }  �return a;    };M.prototype.getMaxCount=function(){return this.$val.getMaxCount();};ConfiggetMaxCounttesting/quick:Configtesting/quick:defaultMaxCount  (testing/quick.SetupError).Error��O.prototype.Error=function(){var a;  &a=this.$val!==undefined?this.$val:this;  Ereturn a;    };$ptrType(O).prototype.Error=function(){return new O(this.$get()).Error();};
SetupErrortesting/quick:SetupError !(*testing/quick.CheckError).Error��P.Ptr.prototype.Error=function(){var a;  �a=this;  �return B.Sprintf("#%d: failed on input %s",new($sliceType($emptyInterface))([new $Int(a.Count),new $String(W(a.In))]));    };P.prototype.Error=function(){return this.$val.Error();};
CheckErrorfmt:Sprintftesting/quick:CheckErrortesting/quick:toString &(*testing/quick.CheckEqualError).Error�NQ.Ptr.prototype.Error=function(){var a;  �a=this;   return B.Sprintf("#%d: failed on input %s. Output 1: %s. Output 2: %s",new($sliceType($emptyInterface))([new $Int(a.CheckError.Count),new $String(W(a.CheckError.In)),new $String(W(a.Out1)),new $String(W(a.Out2))]));    };Q.prototype.Error=function(){return this.$val.Error();};CheckEqualErrorfmt:Sprintftesting/quick:CheckEqualErrortesting/quick:toString testing/quick.CheckR�|R=$pkg.Check=function(a,b){var c=$ifaceNil,d,e,f,g,h,i,j,k,l;  �    if(b===($ptrType(M)).nil){  �b=N;    }  �d=U(a);e=new E.Value.Ptr();$copy(e,d[0],E.Value);f=d[1];g=d[2];      if(!g){  c=new O("argument is not a function");  Kreturn c;    }  W    if(!((f.NumOut()===1))){  rc=new O("function returns more than one value.");  �return c;    }  �    if(!((f.Out(0).Kind()===1))){  �c=new O("function does not return a bool");  return c;    }  &h=($sliceType(E.Value)).make(f.NumIn());  Yi=b.getRand();  sj=b.getMaxCount();  �  �k=0;while(k<j){  �c=T(h,f,b,i);  �    if(!($interfaceIsEqual(c,$ifaceNil))){  return c;    }      if(!(l=e.Call(h),((0<0||0>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+0])).Bool()){  9c=new P.Ptr(k+1>>0,V(h));  nreturn c;    }      �  �k=k+(1)>>0;}  ~return c;    };Check
reflect:Valuetesting/quick:CheckErrortesting/quick:Configtesting/quick:SetupErrortesting/quick:arbitraryValuestesting/quick:defaultConfigtesting/quick:functionAndTypetesting/quick:getMaxCounttesting/quick:getRandtesting/quick:toInterfaces testing/quick.CheckEqualS��S=$pkg.CheckEqual=function(a,b,c){var d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o,p,q;  �    if(c===($ptrType(M)).nil){  �c=N;    }  e=U(a);f=new E.Value.Ptr();$copy(f,e[0],E.Value);g=e[1];h=e[2];  *    if(!h){  5d=new O("f is not a function");  _return d;    }  ji=U(b);j=new E.Value.Ptr();$copy(j,i[0],E.Value);k=i[1];h=i[2];  �    if(!h){  �d=new O("g is not a function");  �return d;    }  �    if(!($interfaceIsEqual(g,k))){  �d=new O("functions have different types");  return d;    }  &l=($sliceType(E.Value)).make(g.NumIn());  Ym=c.getRand();  sn=c.getMaxCount();  �  �o=0;while(o<n){  �d=T(l,g,c,m);  �    if(!($interfaceIsEqual(d,$ifaceNil))){   return d;    }   p=V(f.Call(l));   ;q=V(j.Call(l));   f    if(!E.DeepEqual(p,q)){   �d=new Q.Ptr(new P.Ptr(o+1>>0,V(l)),p,q);   �return d;    }      �  �o=o+(1)>>0;}   �return d;    };
CheckEqualreflect:DeepEqualreflect:Valuetesting/quick:CheckEqualErrortesting/quick:CheckErrortesting/quick:Configtesting/quick:SetupErrortesting/quick:arbitraryValuestesting/quick:defaultConfigtesting/quick:functionAndTypetesting/quick:getMaxCounttesting/quick:getRandtesting/quick:toInterfaces testing/quick.arbitraryValuesT�T=function(a,b,c,d){var e=$ifaceNil,f,g,h;  !�    if(!(c.Values===$throwNilPointerError)){  !�c.Values(a,d);  !�return e;    }  "  "f=0;while(f<a.$length){  ".  "2g=false;  "<h=L(b.In(f),d);$copy(((f<0||f>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+f]),h[0],E.Value);g=h[1];  "a    if(!g){  "me=new O(B.Sprintf("cannot create arbitrary value of type %s for argument %d",new($sliceType($emptyInterface))([b.In(f),new $Int(f)])));  "�return e;    }      "&  "&f=f+(1)>>0;}  "�return e;    };arbitraryValuesfmt:Sprintfreflect:Valuetesting/quick:SetupErrortesting/quick:Value testing/quick.functionAndTypeU��U=function(a){var b=new E.Value.Ptr(),c=$ifaceNil,d=false;  #B$copy(b,E.ValueOf(a),E.Value);  #Zd=b.Kind()===19;  #y    if(!d){  #�return[b,c,d];    }  #�c=b.Type();  #�return[b,c,d];    };functionAndTypereflect:Valuereflect:ValueOf testing/quick.toInterfacesV�tV=function(a){var b,c,d,e,f;  #�b=($sliceType($emptyInterface)).make(a.$length);  $c=a;d=0;while(d<c.$length){e=d;f=new E.Value.Ptr();$copy(f,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]),E.Value);  $((e<0||e>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+e]=f.Interface();    d++;}  $Creturn b;    };toInterfacesreflect:Value testing/quick.toStringW�W=function(a){var b,c,d,e,f;  $�b=($sliceType($String)).make(a.$length);  $�c=a;d=0;while(d<c.$length){e=d;f=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  $�(e<0||e>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+e]=B.Sprintf("%#v",new($sliceType($emptyInterface))([f]));    d++;}  $�return F.Join(b,", ");    };toStringfmt:Sprintfstrings:Join �O{"Base":9483,"Files":[{"Name":"/usr/local/go/src/testing/quick/quick.go","Base":1,"Size":9481,"Lines":[0,55,109,159,160,238,252,253,262,270,277,285,298,309,320,322,323,430,431,490,517,585,627,678,680,681,757,801,840,864,873,876,895,897,898,974,1018,1057,1081,1090,1093,1103,1105,1106,1179,1249,1250,1326,1337,1360,1361,1416,1486,1568,1645,1704,1749,1752,1753,1781,1822,1842,1873,1896,1937,1960,1992,2017,2097,2123,2185,2206,2234,2255,2283,2304,2332,2352,2380,2399,2427,2449,2486,2508,2545,2567,2604,2625,2662,2682,2719,2742,2779,2798,2835,2870,2904,2947,2993,3014,3048,3053,3082,3086,3105,3148,3159,3192,3196,3234,3255,3276,3313,3370,3404,3448,3460,3494,3499,3523,3527,3549,3586,3625,3659,3704,3708,3742,3764,3802,3853,3865,3899,3904,3928,3932,3942,3974,3977,3978,3994,3996,3997,4056,4077,4138,4165,4179,4251,4299,4322,4394,4433,4450,4517,4590,4657,4679,4721,4723,4724,4749,4750,4811,4851,4871,4908,4911,4926,4928,4929,5004,5015,5063,5086,5106,5134,5197,5208,5239,5243,5246,5247,5255,5257,5258,5331,5383,5406,5407,5463,5464,5521,5546,5557,5578,5580,5581,5619,5691,5693,5694,5758,5788,5800,5820,5840,5842,5843,5886,6022,6024,6025,6091,6160,6227,6273,6289,6292,6340,6369,6402,6436,6443,6492,6511,6518,6524,6580,6600,6626,6629,6630,6669,6679,6728,6737,6740,6741,6767,6827,6836,6839,6881,6935,6944,6947,6948,6999,7025,7059,7060,7093,7149,7167,7177,7181,7182,7221,7274,7284,7288,7291,7292,7300,7302,7303,7379,7451,7529,7570,7634,7654,7680,7683,7684,7720,7730,7772,7781,7784,7820,7830,7872,7881,7884,7885,7906,7959,7968,7971,7972,8023,8049,8083,8084,8117,8173,8191,8201,8205,8206,8248,8290,8291,8329,8411,8421,8425,8428,8429,8437,8439,8440,8512,8539,8645,8672,8700,8709,8712,8713,8747,8761,8798,8809,8914,8924,8928,8931,8932,8940,8942,8943,9024,9048,9079,9089,9098,9101,9115,9123,9125,9126,9184,9225,9253,9278,9281,9293,9295,9296,9345,9383,9415,9446,9449,9479],"Infos":null}]}
 