  var conjugationForms = [
  //  {  name: "plain affirmative",           forms: ["う", "く", "ぐ", "す", "つ", "む", "ぶ", "ぬ", "る", "る"]  },

  // present tense: 0-5
  {  name: "present polite",          forms: ["います", "きます","きます", "ぎます", "します", "ちます", "みます", "びます", "にます", "ります", "ます"]  },
  {  name: "present negative",              forms: ["わない", "かない","かない", "がない", "さない", "たない", "まない", "ばない", "なない", "らない", "ない"]  },
  {  name: "present polite negative",             forms: ["いません", "きません","きません", "ぎません", "しません", "ちません", "みません", "びません", "にません", "りません", "ません"]  },
  {  name: "present curt negative (archaic)",     forms: ["わん", "かん","かん", "がん", "さん", "たん", "まん", "ばん", "なん", "らん", "ん"]  },
  {  name: "present polite negative (archaic)",   forms: ["いませぬ", "きませぬ","きませぬ", "ぎませぬ", "しませぬ", "ちませぬ", "みませぬ", "びませぬ", "にませぬ", "りませぬ", "ませぬ"]  },

  // past tense: 6-9
  {  name: "past",                  forms: ["った","いた", "った", "いだ", "した", "った", "んだ", "んだ", "んだ", "った", "た"]  },
  {  name: "past polite",          forms: ["いました", "きました","きました", "ぎました", "しました", "ちました", "みました", "びました", "にました", "りました", "ました"]  },
  {  name: "past negative",              forms: ["わなかった", "かなかった","かなかった", "がなかった", "さなかった", "たなかった", "まなかった", "ばなかった", "ななかった", "らなかった", "なかった"]  },
  {  name: "past polite negative",             forms: ["いませんでした", "きませんでした","きませんでした", "ぎませんでした", "しませんでした", "ちませんでした", "みませんでした", "びませんでした", "にませんでした", "りませんでした", "ませんでした"]  },

  // perfect: 10
  {  name: "negative perfect",            forms: ["わず(に)", "かず(に)","かず(に)", "がず(に)", "さず(に)", "たず(に)", "まず(に)", "ばず(に)", "なず(に)", "らず(に)", "ず(に)"]  },

  // ta form: 11
  {  name: "representative",              forms: ["ったり", "いたり","いたり", "いだり", "したり", "ったり", "んだり", "んだり", "んだり", "ったり", "たり"]  },

  // renyoukei: 12-13
  {  name: "conjunctive",                 forms: ["い-", "き-","き-", "ぎ-", "し-", "ち-", "み-", "び-", "に-", "り-", "-"]  },
  {  name: "way of doing",                forms: ["いかた", "きかた","きかた", "ぎかた", "しかた", "ちかた", "みかた", "びかた", "にかた", "りかた", "かた"]  },

  // te forms: 14-22
  {  name: "te form",                     forms: ["って", "いて","いて", "いで", "して", "って", "んで", "んで", "んで", "って", "て"]  },
  {  name: "te iru",                      forms: ["っている", "いている","いている", "いでいる", "している", "っている", "んでいる", "んでいる", "んでいる", "っている", "ている"]  },
  {  name: "simplified te iru",           forms: ["ってる", "いてる","いてる", "いでる", "してる", "ってる", "んでる", "んでる", "んでる", "ってる", "てる"]  },
  {  name: "te aru",                      forms: ["ってある", "いてある","いてある", "いである", "してある", "ってある", "んである", "んである", "んである", "ってある", "てある"]  },
  {  name: "simplified te ageru",         forms: ["ったげる", "いたげる","いたげる", "いだげる", "したげる", "ったげる", "んだげる", "んだげる", "んだげる", "ったげる", "たげる"]  },
  {  name: "te oru",                      forms: ["っておる", "いておる","いておる", "いでおる", "しておる", "っておる", "んでおる", "んでおる", "んでおる", "っておる", "ておる"]  },
  {  name: "simplified te oru",           forms: ["っとる", "いとる","いとる", "いどる", "しとる", "っとる", "んどる", "んどる", "んどる", "っとる", "とる"]  },
  {  name: "te oku",                      forms: ["っておく", "いておく","いておく", "いでおく", "しておく", "っておく", "んでおく", "んでおく", "んでおく", "っておく", "ておく"]  },
  {  name: "simplified te oku",           forms: ["っとく", "いとく","いとく", "いどく", "しとく", "っとく", "んどく", "んどく", "んどく", "っとく", "とく"]  },

  // tai/tageru: 23-24
  {  name: "desire",                      forms: ["いたい", "きたい","きたい", "ぎたい", "したい", "ちたい", "みたい", "びたい", "にたい", "りたい", "たい"]  },
  {  name: "other's desire",              forms: ["いたがる", "きたがる","きたがる", "ぎたがる", "したがる", "ちたがる", "みたがる", "びたがる", "にたがる", "りたがる", "たがる"]  },

  // pseudo-futurum forms: 25-30
  {  name: "pseudo futurum",              forms: ["おう", "こう","こう", "ごう", "そう", "とう", "もう", "ぼう", "のう", "ろう", "よう"]  },
  {  name: "polite presumptive",          forms: ["うでしょう", "くでしょう","くでしょう", "ぐでしょう", "すでしょう", "つでしょう", "むでしょう", "ぶでしょう", "ぬでしょう", "るでしょう", "るでしょう"]  },
  {  name: "plain presumptive",           forms: ["うだろう", "くだろう","くだろう", "ぐだろう", "すだろう", "つだろう", "むだろう", "ぶだろう", "ぬだろう", "るだろう", "るだろう"]  },
  {  name: "polite negative presumptive", forms: ["わないだろう", "かないだろう","かないだろう", "がないだろう", "さないだろう", "たないだろう", "まないだろう", "ばないだろう", "なないだろう", "らないだろう", "ないだろう"]  },
  {  name: "plain negative presumptive",  forms: ["うまい", "くまい","くまい", "ぐまい", "すまい", "つまい", "むまい", "ぶまい", "ぬまい", "るまい", "まい"]  },
  {  name: "past presumptive",            forms: ["ったろう", "いたろう","いたろう", "いだろう", "したろう", "ったろう", "んだろう", "んだろう", "んだろう", "った", "たろう"]  },

  // izenkei / kateikei: 31-32
  {  name: "hypothetical",                forms: ["えば", "けば","けば", "げば", "せば", "てば", "めば", "べば", "ねば", "れば", "れば"]  },
  {  name: "past hypothetical",           forms: ["ったら", "いたら","いたら", "いだら", "したら", "ったら", "んだら", "んだら", "んだら", "ったら", "たら"]  },
  {  name: "short potential",             forms: ["える", "ける","ける", "げる", "せる", "てる", "める", "べる", "ねる", "れる", ""]  },

  // saserareru: 33-35
  {  name: "passive",                     forms: ["われる", "かれる","かれる", "がれる", "される", "たれる", "まれる", "ばれる", "なれる", "られる", "られる"]  },
  {  name: "causative",                   forms: ["わせる", "かせる","かせる", "がせる", "させる", "たせる", "ませる", "ばせる", "なせる", "らせる", "させる"]  },
  {  name: "causative passive",           forms: ["わせられる", "かせられる","かせられる", "がせられる", "させられる", "たせられる", "ませられる", "ばせられる", "なせられる", "らせられる", "させられる"]  },

  // commands: 36-41
  {  name: "requesting",                  forms: ["ってください", "いてください","いてください", "いでください", "してください", "ってください", "んでください", "んでください", "んでください", "ってください", "てください"]  },

  {  name: "commanding",                  forms: ["え", "け","け", "げ", "せ", "て", "め", "べ", "ね", "れ", "ろ"]  },
  {  name: "authoritative",               forms: ["いなさい", "きなさい","きなさい", "ぎなさい", "しなさい", "ちなさい", "みなさい", "びなさい", "になさい", "りなさい", "なさい"]  },
  {  name: "advisory",                    forms: ["", "", "", "", "", "", "", "", "", "", "よ"]  },
  {  name: "negative request",            forms: ["わないでください", "かないでください","かないでください", "がないでください", "さないでください", "たないでください", "まないでください", "ばないでください", "なないでください", "らないでください", "ないでください"]  },
  {  name: "negative imperative",         forms: ["うな", "くな","くな", "ぐな", "すな", "つな", "むな", "ぶな", "ぬな", "るな", "るな"]  },

  // belief about [...]ness: 42-44
  {  name: "looks to be the case",        forms: ["いそう", "きそう","きそう", "ぎそう", "しそう", "ちそう", "みそう", "びそう", "にそう", "りそう", "そう"]  },
  {  name: "claimed to be the case",      forms: ["うそう", "くそう","くそう", "ぐそう", "すそう", "つそう", "むそう", "ぶそう", "ぬそう", "るそう", "るそう"]  },
  {  name: "apparently the case",         forms: ["うらしい", "くらしい","くらしい", "ぐらしい", "すらしい", "つらしい", "むらしい", "ぶらしい", "ぬらしい", "るらしい", "るらしい"]  }
];

conjugationForms.sort(function(a, b) { return b.forms[0].length - a.forms[0].length; });

var verbTypes = ["v5u", "v5k", "v5k-s", "v5g", "v5s", "v5t", "v5m", "v5b", "v5n", "v5r", "v1"];
var verbEndings=["う"  , "く"  , "く"    , "ぐ"  , "す"  , "つ"  , "む" , "ぶ" , "ぬ"  , "る"  , "る"];


var destep = function (word) {
  var found = [];
  var i, last = conjugationForms.length, form;
  var j, llast = verbEndings.length, suffix;
  for(i=0; i<last; i++) {
    form = conjugationForms[i];
    for(j=0; j<llast; j++) {
      suffix = form.forms[j];
      if(!suffix.trim()) continue;
      if (word.indexOf(suffix) > -1 && word.indexOf(suffix) + suffix.length == word.length) {
        word = word.replace(suffix, verbEndings[j]);
        found.push(form.name);
        return {
          word: word,
          found: found
        };
      }
    }
  }
  return {
    word: word,
    found: []
  };
};

module.exports = {

  /**
   * conjugate a verb
   */
  conjugate: function (verb, type) {
    var index, ret = [];
    if (!type) {
      var lastchar = verb.substring(verb.length-1,verb.length);
      index = verbEndings.indexOf(lastchar);
    }else{
      index = verbTypes.indexOf(type.toLowerCase());
    }
    var verbstem = verb.substring(0, verb.length - 1);
    var i, e = conjugationForms.length, form, specific;
    for (i = 0; i < e; i++) {
      form = conjugationForms[i];
      specific = form.forms[index];
      if (specific !== false) {
        ret.push({name: form.name, form: verbstem + specific});
      }
    }
    return ret;
  },

  /**
   * try to find the original verb for a conjugation
   */
  unconjugate: function (word) {
    var found = [];
    var step = { word: word };
    do {
      step = destep(step.word);
      found = step.found.concat(found);
    } while (step.found.length > 0);
    return {
      word: step.word,
      forms: found
    };
  }

};
