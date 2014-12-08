����Archive�� 	
ImportPath GcData
 Dependencies�� Imports�� Declarations�� Tests�� FileSet
 BlockingInit Minified   ��[]string��   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �v���crypto/rand�Fpackage rand
import io "io"
import bufio "bufio"
import aes "crypto/aes"
import cipher "crypto/cipher"
import os "os"
import runtime "runtime"
import nosync "github.com/gopherjs/gopherjs/nosync"
import time "time"
import errors "errors"
import big "math/big"
func @"".Int(@"".rand @"io".Reader, @"".max *@"math/big".Int) (@"".n *@"math/big".Int, @"".err error)
func @"".Prime(@"".rand @"io".Reader, @"".bits int) (@"".p *@"math/big".Int, @"".err error)
func @"".Read(@"".b []byte) (@"".n int, @"".err error)
var @"".Reader @"io".Reader
type @"".devReader struct { @"".name string; @"".f @"io".Reader; @"".mu @"github.com/gopherjs/gopherjs/nosync".Mutex }
func (? *@"".devReader) @"".Read(@"".b []byte) (@"".n int, @"".err error)
type @"".reader struct { @"".mu @"github.com/gopherjs/gopherjs/nosync".Mutex; @"".budget int; @"".cipher @"crypto/cipher".Block; @"".entropy @"io".Reader; @"".time [16]byte; @"".seed [16]byte; @"".dst [16]byte; @"".key [16]byte }
func (? *@"".reader) @"".Read(@"".b []byte) (@"".n int, @"".err error)
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"math/big".n int64, @"math/big".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"math/big".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"math/big".y *@"math/big".Int) (@"math/big".r int)
func (? *@"math/big".Int) @"math/big".Div(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int)
import fmt "fmt"
func (? *@"math/big".Int) @"math/big".Format(@"math/big".s @"fmt".State, @"math/big".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"math/big".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"math/big".text []byte, @"math/big".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"math/big".g *@"math/big".Int, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"math/big".a int64, @"math/big".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"math/big".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"math/big".rnd *@"math/rand".Rand, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"math/big".s @"fmt".ScanState, @"math/big".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"math/big".x *@"math/big".Int, @"math/big".i int, @"math/big".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"math/big".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"math/big".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"math/big".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"math/big".s string, @"math/big".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"math/big".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? *@"math/big".Int, ? int, ? error)
type @"github.com/gopherjs/gopherjs/nosync".Mutex struct { @"github.com/gopherjs/gopherjs/nosync".locked bool }
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Lock() ()
func (? *@"github.com/gopherjs/gopherjs/nosync".Mutex) @"github.com/gopherjs/gopherjs/nosync".Unlock() ()
type @"crypto/cipher".Block interface { @"crypto/cipher".BlockSize() (? int); @"crypto/cipher".Decrypt(@"crypto/cipher".dst []byte, @"crypto/cipher".src []byte) (); @"crypto/cipher".Encrypt(@"crypto/cipher".dst []byte, @"crypto/cipher".src []byte) () }
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"fmt".c int) (? bool); @"fmt".Precision() (@"fmt".prec int, @"fmt".ok bool); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool); @"fmt".Write(@"fmt".b []byte) (@"fmt".ret int, @"fmt".err error) }
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
type @"fmt".ScanState interface { @"fmt".Read(@"fmt".buf []byte) (@"fmt".n int, @"fmt".err error); @"fmt".ReadRune() (@"fmt".r rune, @"fmt".size int, @"fmt".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"fmt".skipSpace bool, @"fmt".f func (? rune) (? bool)) (@"fmt".token []byte, @"fmt".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error); @"io".UnreadRune() (? error) }
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
$$
github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciounicodeunicode/utf8bytesbufiocrypto/subtlecrypto/ciphermathstrconv
crypto/aes#github.com/gopherjs/gopherjs/nosyncreflectencoding/binarysyscallstringstimeosfmt	math/randmath/big
ioA bufioB 
crypto/aesC crypto/cipherD osE runtimeF #github.com/gopherjs/gopherjs/nosyncG timeH errorsI math/bigJ M��M=$pkg.devReader=$newType(0,$kindStruct,"rand.devReader","devReader","crypto/rand",function(name_,f_,mu_){this.$val=this;this.name=name_!==undefined?name_:"";this.f=f_!==undefined?f_:$ifaceNil;this.mu=mu_!==undefined?mu_:new G.Mutex.Ptr();});��($ptrType(M)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];M.init([["name","name","crypto/rand",$String,""],["f","f","crypto/rand",A.Reader,""],["mu","mu","crypto/rand",G.Mutex,""]]);	devReader)github.com/gopherjs/gopherjs/nosync:Mutex	io:Reader P�VP=$pkg.reader=$newType(0,$kindStruct,"rand.reader","reader","crypto/rand",function(mu_,budget_,cipher_,entropy_,time_,seed_,dst_,key_){this.$val=this;this.mu=mu_!==undefined?mu_:new G.Mutex.Ptr();this.budget=budget_!==undefined?budget_:0;this.cipher=cipher_!==undefined?cipher_:$ifaceNil;this.entropy=entropy_!==undefined?entropy_:$ifaceNil;this.time=time_!==undefined?time_:($arrayType($Uint8,16)).zero();this.seed=seed_!==undefined?seed_:($arrayType($Uint8,16)).zero();this.dst=dst_!==undefined?dst_:($arrayType($Uint8,16)).zero();this.key=key_!==undefined?key_:($arrayType($Uint8,16)).zero();});��($ptrType(P)).methods=[["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),-1]];P.init([["mu","mu","crypto/rand",G.Mutex,""],["budget","budget","crypto/rand",$Int,""],["cipher","cipher","crypto/rand",D.Block,""],["entropy","entropy","crypto/rand",A.Reader,""],["time","time","crypto/rand",($arrayType($Uint8,16)),""],["seed","seed","crypto/rand",($arrayType($Uint8,16)),""],["dst","dst","crypto/rand",($arrayType($Uint8,16)),""],["key","key","crypto/rand",($arrayType($Uint8,16)),""]]);readercrypto/cipher:Block)github.com/gopherjs/gopherjs/nosync:Mutex	io:Reader $pkg.Reader=$ifaceNil;Readercrypto/rand:Reader NN=$throwNilPointerError;altGetRandomcrypto/rand:altGetRandom QsmallPrimes RsmallPrimesProduct L    Q=new($sliceType($Uint8))([3,5,7,11,13,17,19,23,29,31,37,41,43,47,53]);smallPrimescrypto/rand:smallPrimes D    R=new J.Int.Ptr().SetUint64(new $Uint64(3793877372,820596253));crypto/rand:smallPrimesProductmath/big:Int crypto/rand.ReadKuK=$pkg.Read=function(a){var b=0,c=$ifaceNil,d;  �    d=A.ReadFull($pkg.Reader,a);b=d[0];c=d[1];return[b,c];    };Readcrypto/rand:Readerio:ReadFull crypto/rand.initLeL=function(){  �  =$pkg.Reader=new M.Ptr("/dev/urandom",$ifaceNil,new G.Mutex.Ptr());        };	    L();crypto/rand:Readercrypto/rand:devReader)github.com/gopherjs/gopherjs/nosync:Mutex (*crypto/rand.devReader).Read��M.Ptr.prototype.Read=function(a){var b=0,c=$ifaceNil,$deferred=[],$err=null,d,e,f,g,h,i,j,k,l;try{$deferFrames.push($deferred);  �d=this;  �    if(!(N===$throwNilPointerError)&&d.name==="/dev/urandom"&&N(a)){       e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    }  d.mu.Lock();  $$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  9    if($interfaceIsEqual(d.f,$ifaceNil)){  Kg=E.Open(d.name);h=g[0];i=g[1];  g    if(h===($ptrType(E.File)).nil){  x    j=0;k=i;b=j;c=k;return[b,c];    }  �  �d.f=B.NewReader(h);        }  �    l=d.f.Read(a);b=l[0];c=l[1];return[b,c];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[b,c];}};M.prototype.Read=function(a){return this.$val.Read(a);};	devReaderbufio:NewReadercrypto/rand:altGetRandomcrypto/rand:devReaderos:Fileos:Open crypto/rand.newReaderO�7O=function(a){  
L    if($interfaceIsEqual(a,$ifaceNil)){  
ba=new M.Ptr("/dev/random",$ifaceNil,new G.Mutex.Ptr());    }  
�return new P.Ptr(new G.Mutex.Ptr(),0,$ifaceNil,a,($arrayType($Uint8,16)).zero(),($arrayType($Uint8,16)).zero(),($arrayType($Uint8,16)).zero(),($arrayType($Uint8,16)).zero());    };	newReadercrypto/rand:devReadercrypto/rand:reader)github.com/gopherjs/gopherjs/nosync:Mutex (*crypto/rand.reader).Read�
P.Ptr.prototype.Read=function(a){var b=0,c=$ifaceNil,$deferred=[],$err=null,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;try{$deferFrames.push($deferred);  �d=this;  �d.mu.Lock();  �$deferred.push([$methodVal(d.mu,"Unlock"),[]]);  �b=a.$length;  while(a.$length>0){      if(d.budget===0){  +e=A.ReadFull(d.entropy,$subslice(new($sliceType($Uint8))(d.seed),0));f=e[1];  [    if(!($interfaceIsEqual(f,$ifaceNil))){  o    g=b-a.$length>>0;h=f;b=g;c=h;return[b,c];    }  �i=A.ReadFull(d.entropy,$subslice(new($sliceType($Uint8))(d.key),0));f=i[1];  �    if(!($interfaceIsEqual(f,$ifaceNil))){  �    j=b-a.$length>>0;k=f;b=j;c=k;return[b,c];    }  �l=C.NewCipher($subslice(new($sliceType($Uint8))(d.key),0));d.cipher=l[0];f=l[1];      if(!($interfaceIsEqual(f,$ifaceNil))){  /    m=b-a.$length>>0;n=f;b=m;c=n;return[b,c];    }  Nd.budget=1048576;    }  �d.budget=d.budget-(16)>>0;  No=H.Now().UnixNano();  ld.time[0]=($shiftRightInt64(o,56).$low<<24>>>24);  �d.time[1]=($shiftRightInt64(o,48).$low<<24>>>24);  �d.time[2]=($shiftRightInt64(o,40).$low<<24>>>24);  �d.time[3]=($shiftRightInt64(o,32).$low<<24>>>24);  �d.time[4]=($shiftRightInt64(o,24).$low<<24>>>24);  �d.time[5]=($shiftRightInt64(o,16).$low<<24>>>24);  d.time[6]=($shiftRightInt64(o,8).$low<<24>>>24);  6d.time[7]=(o.$low<<24>>>24);  Md.cipher.Encrypt($subslice(new($sliceType($Uint8))(d.time),0),$subslice(new($sliceType($Uint8))(d.time),0));  x  |p=0;while(p<16){  �(s=d.dst,(p<0||p>=s.length)?$throwRuntimeError("index out of range"):s[p]=((q=d.time,((p<0||p>=q.length)?$throwRuntimeError("index out of range"):q[p]))^(r=d.seed,((p<0||p>=r.length)?$throwRuntimeError("index out of range"):r[p])))<<24>>>24);      �  �p=p+(1)>>0;}  �d.cipher.Encrypt($subslice(new($sliceType($Uint8))(d.dst),0),$subslice(new($sliceType($Uint8))(d.dst),0));  �  �t=0;while(t<16){  (w=d.seed,(t<0||t>=w.length)?$throwRuntimeError("index out of range"):w[t]=((u=d.time,((t<0||t>=u.length)?$throwRuntimeError("index out of range"):u[t]))^(v=d.dst,((t<0||t>=v.length)?$throwRuntimeError("index out of range"):v[t])))<<24>>>24);        t=t+(1)>>0;}  ?d.cipher.Encrypt($subslice(new($sliceType($Uint8))(d.seed),0),$subslice(new($sliceType($Uint8))(d.seed),0));  kx=$copySlice(a,$subslice(new($sliceType($Uint8))(d.dst),0));  �a=$subslice(a,x);    }  �    y=b;z=$ifaceNil;b=y;c=z;return[b,c];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[b,c];}};P.prototype.Read=function(a){return this.$val.Read(a);};readercrypto/aes:NewCiphercrypto/rand:readerio:ReadFulltime:Now crypto/rand.PrimeS�
!S=$pkg.Prime=function(a,b){var c=($ptrType(J.Int)).nil,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag;  K    if(b<2){  [d=I.New("crypto/rand: prime size must be at least 2-bit");  �return[c,d];    }  �f=((e=b%8,e===e?e:$throwRuntimeError("integer divide by zero"))>>>0);  �    if(f===0){  �f=8;    }  �h=($sliceType($Uint8)).make((g=((b+7>>0))/8,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero")));  �c=new J.Int.Ptr();  i=new J.Int.Ptr();  )while(true){  1j=A.ReadFull(a,h);d=j[1];  U    if(!($interfaceIsEqual(d,$ifaceNil))){  h    k=($ptrType(J.Int)).nil;l=d;c=k;d=l;return[c,d];    }  �m=h;n=0;(n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]=(((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n])&(((((o=f,o<32?(1<<o):0)>>0)-1>>0)<<24>>>24)))>>>0;  �    if(f>=2){  �p=h;q=0;(q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]=(((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q])|(((r=((f-2>>>0)),r<32?(3<<r):0)<<24>>>24)))>>>0;    }else{  Ls=h;t=0;(t<0||t>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+t]=(((t<0||t>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+t])|(1))>>>0;  ]    if(h.$length>1){  uu=h;v=1;(v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]=(((v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v])|(128))>>>0;    }    }  �w=h;x=h.$length-1>>0;(x<0||x>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+x]=(((x<0||x>=w.$length)?$throwRuntimeError("index out of range"):w.$array[w.$offset+x])|(1))>>>0;  �c.SetBytes(h);  i.Mod(c,R);  ;y=i.Uint64();  T  a  ez=new $Uint64(0,0);NextDelta:while((z.$high<0||(z.$high===0&&z.$low<1048576))){  �aa=new $Uint64(y.$high+z.$high,y.$low+z.$low);  �ab=Q;ac=0;while(ac<ab.$length){ad=((ac<0||ac>=ab.$length)?$throwRuntimeError("index out of range"):ab.$array[ab.$offset+ac]);  �    if((ae=$div64(aa,new $Uint64(0,ad),true),(ae.$high===0&&ae.$low===0))&&(b>6||!((af=new $Uint64(0,ad),(aa.$high===af.$high&&aa.$low===af.$low))))){    �z=(ag=new $Uint64(0,2),new $Uint64(z.$high+ag.$high,z.$low+ag.$low));continue NextDelta;    }    ac++;}  9    if((z.$high>0||(z.$high===0&&z.$low>0))){  Li.SetUint64(z);  hc.Add(c,i);    }  �break;    }      if(c.ProbablyPrime(20)&&(c.BitLen()===b)){  Jreturn[c,d];    }    }    };Primecrypto/rand:smallPrimescrypto/rand:smallPrimesProduct
errors:Newio:ReadFullmath/big:Int crypto/rand.IntT��T=$pkg.Int=function(a,b){var c=($ptrType(J.Int)).nil,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o;  �    if(b.Sign()<=0){  �$panic(new $String("crypto/rand: argument to Int is <= 0"));    }  0f=(e=((b.BitLen()+7>>0))/8,(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero"));  �h=((g=b.BitLen()%8,g===g?g:$throwRuntimeError("integer divide by zero"))>>>0);  �    if(h===0){  �h=8;    }  �i=($sliceType($Uint8)).make(f);  �c=new J.Int.Ptr();  �while(true){  �j=A.ReadFull(a,i);d=j[1];      if(!($interfaceIsEqual(d,$ifaceNil))){  1    k=($ptrType(J.Int)).nil;l=d;c=k;d=l;return[c,d];    }  �m=i;n=0;(n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]=(((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n])&(((((o=h,o<32?(1<<o):0)>>0)-1>>0)<<24>>>24)))>>>0;  �c.SetBytes(i);  �    if(c.Cmp(b)<0){  �return[c,d];    }    }    };Intio:ReadFullmath/big:Int ��{"Base":7944,"Files":[{"Name":"/usr/local/go/src/crypto/rand/rand.go","Base":1,"Size":709,"Lines":[0,56,110,160,161,215,249,262,263,275,276,338,373,430,489,510,511,582,635,676,707],"Infos":null},{"Name":"/usr/local/go/src/crypto/rand/rand_unix.go","Base":711,"Size":3549,"Lines":[0,56,110,160,161,236,237,290,304,305,318,319,328,337,351,368,374,380,391,399,407,409,410,447,448,496,547,548,562,592,618,628,671,674,676,677,740,764,777,793,810,812,813,881,910,950,951,1007,1079,1100,1103,1116,1137,1154,1182,1198,1215,1219,1250,1261,1272,1300,1304,1307,1327,1329,1330,1383,1427,1428,1483,1544,1603,1654,1711,1770,1773,1829,1878,1924,1945,1989,1992,2026,2028,2029,2050,2083,2150,2185,2217,2259,2261,2262,2315,2328,2349,2361,2362,2380,2401,2449,2468,2495,2500,2546,2565,2592,2597,2641,2660,2687,2692,2745,2749,2777,2778,2848,2853,2872,2895,2922,2949,2979,3008,3037,3066,3095,3124,3153,3181,3204,3247,3286,3322,3326,3367,3406,3442,3446,3489,3490,3516,3528,3531,3532,3547],"Infos":null},{"Name":"/usr/local/go/src/crypto/rand/util.go","Base":4261,"Size":3682,"Lines":[0,56,110,160,161,174,175,184,194,200,212,214,215,290,367,446,525,549,576,634,636,637,717,795,865,880,950,951,1021,1047,1126,1189,1204,1273,1282,1285,1286,1307,1320,1328,1331,1332,1367,1385,1386,1410,1411,1418,1454,1472,1491,1495,1496,1577,1612,1691,1752,1818,1860,1874,1902,1913,1956,1973,1996,2017,2022,2026,2105,2132,2133,2153,2154,2220,2286,2352,2416,2452,2477,2478,2490,2544,2564,2603,2669,2693,2699,2704,2705,2723,2751,2772,2777,2786,2790,2791,2857,2918,2929,2978,2988,2992,2995,2997,2998,3072,3137,3159,3207,3210,3239,3240,3305,3334,3347,3355,3358,3359,3385,3403,3404,3411,3447,3465,3484,3488,3489,3551,3585,3620,3621,3641,3663,3673,3677,3680],"Infos":null}]}
 