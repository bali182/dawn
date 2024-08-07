// Generated from wbp.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class wbpLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly INTEGER = 25;
	public static readonly WS = 26;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'C'", 
                                                            "'N'", "'U'", 
                                                            "'D'", "'+'", 
                                                            "'-'", "'R'", 
                                                            "'T'", "'F'", 
                                                            "'?'", "'M'", 
                                                            "'m'", "'dom7'", 
                                                            "'maj7'", "'m7'", 
                                                            "'dim'", "'m7b5'", 
                                                            "'dim7'", "'aug'", 
                                                            "'aug7'", "','", 
                                                            "'->'", "'S'", 
                                                            "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "INTEGER", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "INTEGER", 
		"WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, wbpLexer._ATN, wbpLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "wbp.g4"; }

	public get literalNames(): (string | null)[] { return wbpLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return wbpLexer.symbolicNames; }
	public get ruleNames(): string[] { return wbpLexer.ruleNames; }

	public get serializedATN(): number[] { return wbpLexer._serializedATN; }

	public get channelNames(): string[] { return wbpLexer.channelNames; }

	public get modeNames(): string[] { return wbpLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,26,134,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
	1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
	1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,
	16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,
	1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,24,4,24,124,8,
	24,11,24,12,24,125,1,25,4,25,129,8,25,11,25,12,25,130,1,25,1,25,0,0,26,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
	15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,1,
	0,2,1,0,48,57,3,0,9,10,13,13,32,32,135,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
	0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
	1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,
	0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,
	1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,
	0,0,51,1,0,0,0,1,53,1,0,0,0,3,55,1,0,0,0,5,57,1,0,0,0,7,59,1,0,0,0,9,61,
	1,0,0,0,11,63,1,0,0,0,13,65,1,0,0,0,15,67,1,0,0,0,17,69,1,0,0,0,19,71,1,
	0,0,0,21,73,1,0,0,0,23,75,1,0,0,0,25,77,1,0,0,0,27,82,1,0,0,0,29,87,1,0,
	0,0,31,90,1,0,0,0,33,94,1,0,0,0,35,99,1,0,0,0,37,104,1,0,0,0,39,108,1,0,
	0,0,41,113,1,0,0,0,43,115,1,0,0,0,45,118,1,0,0,0,47,120,1,0,0,0,49,123,
	1,0,0,0,51,128,1,0,0,0,53,54,5,67,0,0,54,2,1,0,0,0,55,56,5,78,0,0,56,4,
	1,0,0,0,57,58,5,85,0,0,58,6,1,0,0,0,59,60,5,68,0,0,60,8,1,0,0,0,61,62,5,
	43,0,0,62,10,1,0,0,0,63,64,5,45,0,0,64,12,1,0,0,0,65,66,5,82,0,0,66,14,
	1,0,0,0,67,68,5,84,0,0,68,16,1,0,0,0,69,70,5,70,0,0,70,18,1,0,0,0,71,72,
	5,63,0,0,72,20,1,0,0,0,73,74,5,77,0,0,74,22,1,0,0,0,75,76,5,109,0,0,76,
	24,1,0,0,0,77,78,5,100,0,0,78,79,5,111,0,0,79,80,5,109,0,0,80,81,5,55,0,
	0,81,26,1,0,0,0,82,83,5,109,0,0,83,84,5,97,0,0,84,85,5,106,0,0,85,86,5,
	55,0,0,86,28,1,0,0,0,87,88,5,109,0,0,88,89,5,55,0,0,89,30,1,0,0,0,90,91,
	5,100,0,0,91,92,5,105,0,0,92,93,5,109,0,0,93,32,1,0,0,0,94,95,5,109,0,0,
	95,96,5,55,0,0,96,97,5,98,0,0,97,98,5,53,0,0,98,34,1,0,0,0,99,100,5,100,
	0,0,100,101,5,105,0,0,101,102,5,109,0,0,102,103,5,55,0,0,103,36,1,0,0,0,
	104,105,5,97,0,0,105,106,5,117,0,0,106,107,5,103,0,0,107,38,1,0,0,0,108,
	109,5,97,0,0,109,110,5,117,0,0,110,111,5,103,0,0,111,112,5,55,0,0,112,40,
	1,0,0,0,113,114,5,44,0,0,114,42,1,0,0,0,115,116,5,45,0,0,116,117,5,62,0,
	0,117,44,1,0,0,0,118,119,5,83,0,0,119,46,1,0,0,0,120,121,5,59,0,0,121,48,
	1,0,0,0,122,124,7,0,0,0,123,122,1,0,0,0,124,125,1,0,0,0,125,123,1,0,0,0,
	125,126,1,0,0,0,126,50,1,0,0,0,127,129,7,1,0,0,128,127,1,0,0,0,129,130,
	1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,6,25,0,
	0,133,52,1,0,0,0,3,0,125,130,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wbpLexer.__ATN) {
			wbpLexer.__ATN = new ATNDeserializer().deserialize(wbpLexer._serializedATN);
		}

		return wbpLexer.__ATN;
	}


	static DecisionsToDFA = wbpLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}