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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �#���#vendor/golang_org/x/net/lex/httplexhttplexstringsunicode/utf8��
$$ exports $$
pv0httplexFvendor/golang_org/x/net/lex/httplex
	2HeaderValuesContainsToken values 
token    	IsTokenRune r4   	(ValidHeaderFieldName v    	*ValidHeaderFieldValue v    	ValidHostHeader h    AA=$packages["strings"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["unicode/utf8"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CisTokenTable PvalidHostByte ��    C=$toNativeArray($kindBool,[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,true,true,true,false,false,true,true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true]);isTokenTable0vendor/golang_org/x/net/lex/httplex.isTokenTable ��    P=$toNativeArray($kindBool,[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);validHostByte1vendor/golang_org/x/net/lex/httplex.validHostByte /vendor/golang_org/x/net/lex/httplex.IsTokenRuneD��D=function(a){var $ptr,a,b;  �b=(a>>0);  �return b<127&&((b<0||b>=C.length)?$throwRuntimeError("index out of range"):C[b]);    };$pkg.IsTokenRune=D;IsTokenRune/vendor/golang_org/x/net/lex/httplex.IsTokenRune0vendor/golang_org/x/net/lex/httplex.isTokenTable .vendor/golang_org/x/net/lex/httplex.isNotTokenE1E=function(a){var $ptr,a;  Lreturn!D(a);    };
isNotToken/vendor/golang_org/x/net/lex/httplex.IsTokenRune.vendor/golang_org/x/net/lex/httplex.isNotToken =vendor/golang_org/x/net/lex/httplex.HeaderValuesContainsTokenF�F=function(a,b){var $ptr,a,b,c,d,e;  (c=a;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);    if(I(e,b)){  preturn true;    }    d++;}  �return false;    };$pkg.HeaderValuesContainsToken=F;HeaderValuesContainsToken=vendor/golang_org/x/net/lex/httplex.HeaderValuesContainsToken<vendor/golang_org/x/net/lex/httplex.headerValueContainsToken )vendor/golang_org/x/net/lex/httplex.isOWSG=G=function(a){var $ptr,a;  return(a===32)||(a===9);    };isOWS)vendor/golang_org/x/net/lex/httplex.isOWS +vendor/golang_org/x/net/lex/httplex.trimOWSH� H=function(a){var $ptr,a;  	ewhile(true){if(!(a.length>0&&G(a.charCodeAt(0)))){break;}  	�a=a.substring(1);    }  	�while(true){if(!(a.length>0&&G(a.charCodeAt((a.length-1>>0))))){break;}  	�a=a.substring(0,(a.length-1>>0));    }  	�return a;    };trimOWS)vendor/golang_org/x/net/lex/httplex.isOWS+vendor/golang_org/x/net/lex/httplex.trimOWS <vendor/golang_org/x/net/lex/httplex.headerValueContainsTokenI��I=function(a,b){var $ptr,a,b,c;  
�a=H(a);  c=A.IndexByte(a,44);    if(!((c===-1))){  ;return K(H(a.substring(0,c)),b)||I(a.substring((c+1>>0)),b);    }  �return K(a,b);    };headerValueContainsTokenstrings.IndexByte<vendor/golang_org/x/net/lex/httplex.headerValueContainsToken.vendor/golang_org/x/net/lex/httplex.tokenEqual+vendor/golang_org/x/net/lex/httplex.trimOWS .vendor/golang_org/x/net/lex/httplex.lowerASCIIJdJ=function(a){var $ptr,a;    if(65<=a&&a<=90){  /return a+32<<24>>>24;    }  Jreturn a;    };
lowerASCII.vendor/golang_org/x/net/lex/httplex.lowerASCII .vendor/golang_org/x/net/lex/httplex.tokenEqualK�JK=function(a,b){var $ptr,a,b,c,d,e,f,g;    if(!((a.length===b.length))){  �return false;    }  �c=a;d=0;while(true){if(!(d<c.length)){break;}e=$decodeRune(c,d);f=d;g=e[0];    if(g>=128){  Xreturn false;    }    if(!((J((g<<24>>>24))===J(b.charCodeAt(f))))){  �return false;    }    d+=e[1];}  �return true;    };
tokenEqual.vendor/golang_org/x/net/lex/httplex.lowerASCII.vendor/golang_org/x/net/lex/httplex.tokenEqual )vendor/golang_org/x/net/lex/httplex.isLWSL=L=function(a){var $ptr,a;  �return(a===32)||(a===9);    };isLWS)vendor/golang_org/x/net/lex/httplex.isLWS )vendor/golang_org/x/net/lex/httplex.isCTLM<M=function(a){var $ptr,a;  �return a<32||(a===127);    };isCTL)vendor/golang_org/x/net/lex/httplex.isCTL 8vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldNameN�N=function(a){var $ptr,a,b,c,d,e;    if(a.length===0){  �return false;    }  �b=a;c=0;while(true){if(!(c<b.length)){break;}d=$decodeRune(b,c);e=d[0];    if(!D(e)){  return false;    }    c+=d[1];}  0return true;    };$pkg.ValidHeaderFieldName=N;ValidHeaderFieldName/vendor/golang_org/x/net/lex/httplex.IsTokenRune8vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldName 3vendor/golang_org/x/net/lex/httplex.ValidHostHeaderO�	O=function(a){var $ptr,a,b,c;  b=0;while(true){if(!(b<a.length)){break;}    if(!(c=a.charCodeAt(b),((c<0||c>=P.length)?$throwRuntimeError("index out of range"):P[c]))){  Hreturn false;    }  #b=b+(1)>>0;    }  ]return true;    };$pkg.ValidHostHeader=O;ValidHostHeader3vendor/golang_org/x/net/lex/httplex.ValidHostHeader1vendor/golang_org/x/net/lex/httplex.validHostByte 9vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldValueQ��Q=function(a){var $ptr,a,b,c;   �b=0;while(true){if(!(b<a.length)){break;}   �c=a.charCodeAt(b);    if(M(c)&&!L(c)){  !return false;    }   �b=b+(1)>>0;    }  !1return true;    };$pkg.ValidHeaderFieldValue=Q;ValidHeaderFieldValue9vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldValue)vendor/golang_org/x/net/lex/httplex.isCTL)vendor/golang_org/x/net/lex/httplex.isLWS ��{"Base":8512,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.UvK5OvI6KM/goroot/src/vendor/golang_org/x/net/lex/httplex/httplex.go","Base":1,"Size":8510,"Lines":[0,55,109,159,160,228,260,263,332,392,408,409,418,429,445,447,448,478,491,504,517,530,543,556,569,582,595,608,621,634,647,660,673,686,699,712,725,738,751,764,777,790,803,816,829,842,855,868,881,894,907,920,933,946,959,972,985,998,1011,1024,1037,1050,1063,1076,1089,1102,1115,1128,1141,1154,1167,1180,1193,1206,1219,1232,1245,1258,1271,1284,1297,1310,1323,1336,1349,1362,1375,1388,1401,1414,1427,1440,1453,1466,1479,1481,1482,1514,1527,1576,1578,1579,1610,1634,1636,1637,1703,1761,1830,1858,1900,1915,1919,1922,1936,1938,1939,2009,2039,2096,2097,2164,2186,2218,2275,2326,2387,2403,2436,2448,2451,2491,2510,2513,2523,2525,2526,2589,2658,2718,2741,2802,2818,2872,2967,2970,2999,3001,3002,3058,3089,3116,3141,3144,3154,3156,3157,3234,3272,3297,3312,3315,3339,3365,3412,3428,3432,3480,3496,3500,3503,3516,3518,3519,3579,3646,3692,3749,3750,3806,3873,3930,3986,4012,4039,4067,4069,4070,4145,4211,4239,4242,4261,4318,4346,4376,4449,4506,4549,4567,4582,4585,4608,4631,4647,4651,4654,4667,4669,4670,4731,4769,4807,4811,4862,4899,4903,4926,4983,4987,5048,5112,5129,5160,5188,5204,5208,5211,5224,5226,5227,5263,5294,5383,5406,5407,5496,5585,5674,5697,5698,5787,5876,5965,5988,5989,6016,6043,6096,6123,6150,6177,6204,6231,6258,6285,6312,6374,6401,6428,6441,6468,6481,6508,6535,6537,6538,6619,6685,6688,6746,6798,6863,6937,7005,7008,7074,7077,7128,7175,7223,7282,7340,7343,7361,7412,7463,7528,7566,7595,7650,7653,7722,7790,7857,7928,7993,8060,8126,8184,8241,8244,8310,8356,8400,8431,8443,8472,8488,8492,8495,8508],"Infos":null}]}
 