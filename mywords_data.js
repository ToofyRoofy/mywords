// ملف البيانات — يُحمَّل قبل index.html
// ═══════════════════════════════════════════════════════════════════════════
// فاضي دلوقتي. المنهج هيتحط هنا.
//
// ─── 1) الكلمات (BUILTIN_WORDS) ────────────────────────────────────────────
// كل كلمة بالشكل ده. الحقول المطلوبة بس: id, word, translation, catId, type
// وكل تصريفات الكلمة بتتحط في forms (ودي اللي بتشغّل التدريبين):
//
//   { id:"u1_001", word:"differ", translation:"يختلف", catId:"cat_u1", type:"verb",
//     baseForm:"differ", baseFormTranslation:"يختلف",
//     displayedForm:"", displayedFormTranslation:"", displayedFormSentence:"", displayedFormSentenceTrans:"",
//     pronunciation:"", localPron:"", definition:"", examples:"", synonyms:"", antonyms:"",
//     forms:[
//       { form:"differed",     type:"past simple",     translation:"اختلف",   when:"", sentence:"The two designs differed in size.", sentenceTrans:"" },
//       { form:"differed",     type:"past participle", translation:"اختلف",   when:"", sentence:"" },
//       { form:"difference",   type:"noun",            translation:"فرق",     when:"", sentence:"There is a big difference between them." },
//       { form:"different",    type:"adjective",       translation:"مختلف",   when:"", sentence:"This is a different method." },
//       { form:"differently",  type:"adverb",          translation:"بشكل مختلف", when:"" }
//     ],
//     addedAt:0 }
//
// أنواع التصريف (type) اللي التطبيق بيفهمها:
//   verb / base form          الفعل الأصلي (V1)
//   past simple / past        الماضي (V2)
//   past participle           التصريف التالت (V3)
//   ing form / gerund         -ing
//   3rd person / s-form       he goes
//   noun · adjective · adverb  للتحويل بين الأشكال
//   plural                    جمع
// (ممكن تكتب "noun / adjective" لو الشكل بيشتغل بنوعين)
//
// لو التصريف ليه sentence فيها نفس الشكل، التطبيق بيعمل منها سؤال "كمّل الجملة"
// تلقائي (بيمسح الشكل ويسيب فراغ). وسطور الـ examples بتتقرا كجمل برضه.
//
// ─── 2) تمارين جاهزة (BUILTIN_EXERCISES) — اختياري ──────────────────────────
// لو المنهج فيه تمارين جاهزة تتحط كما هي:
//
//   { id:"ex_001", kind:"tense",   tense:"perfect",            // past | perfect | future | forms
//     sentence:"She ___ (go) to Cairo since 2020.", answer:"has gone",
//     distractors:["went","have gone","will go"], explain:"since + مضارع تام", catId:"cat_u1" }
//
//   { id:"ex_002", kind:"convert", pos:"noun",                 // noun | adj | verb | adv
//     sentence:"The ___ between the two is small. (differ)", answer:"difference",
//     distractors:["different","differently","differ"], explain:"" }
//
// answer ممكن تبقى مصفوفة لو فيه أكتر من إجابة صح. distractors اختيارية (من غيرها السؤال بيبقى كتابة).
// ═══════════════════════════════════════════════════════════════════════════

const BUILTIN_CATS = [];

const BUILTIN_WORDS = [];

// ---- Influence Book Words ----
const INFLUENCE_WORDS = [];

// ---- Ready-made exercises (tenses / word-form conversion) ----
const BUILTIN_EXERCISES = [];

// ━━━ END: VOCAB DATA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
