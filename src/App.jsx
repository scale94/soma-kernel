import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Users, 
  Zap, 
  Leaf, 
  Menu, 
  X,
  Moon,
  Sun,
  Globe,
  ChevronDown
} from 'lucide-react';

// --- Translation Dictionary ---
const translations = {
  en: {
    nav: { intro: "The Crash", kernel: "The Kernel", governance: "Governance", allocation: "Allocation", meaning: "Meaning", transition: "Transition" },
    headline: "The Source Code of the Next Economy",
    subhead: "As the twin engines of infinite growth and human labor sputter, a new operating system—built on Nobel-winning science—offers a way out.",
    date: "Dec 4, 2025 • Based on 'soma_kernel_5.5'",
    intro: {
      p1: "The fundamental defect of the modern world is not political, but architectural. We are running a 19th-century economic operating system on 21st-century hardware. The legacy kernel—Neoclassical Capitalism—was written for a world of empty lands and scarce labor.",
      p2: "Both assumptions have failed. Thermodynamics has called time on infinite growth, and Artificial Intelligence is severing the link between labor and survival. The system is throwing errors: climate collapse, extreme inequality, and a crisis of meaning.",
      p3: "We don't need a patch. We need a rewrite.",
      p4: "Enter soma_kernel_5.5. It is not a manifesto, but a technical specification for a post-capitalist society. It engineers a 'Visible Algorithm' to replace the 'Invisible Hand'."
    },
    kernel: {
      title: "The New Kernel",
      p1: "At its heart, Soma is a computational governance system. It abandons the metric of GDP—which measures the velocity of money—for a metric called the Capability Set.",
      cardTitle: "System Objective",
      goal: "Goal: Maximize the 'Substantive Freedoms' of individuals (health, education, creativity).",
      constraint: "Constraint: Entropy. The economy must operate within the regenerative limits of the biosphere."
    },
    governance: {
      title: "Sub-Routine 1: Governance",
      p1: "The tragedy of the commons is a myth. Elinor Ostrom proved communities can self-manage resources sustainably.",
      p2: "Soma hard-codes Ostrom's principles into digital law. Rules are not static text; they are Rules as Code.",
      interactiveTitle: "Interactive: The Governance Shift",
      steps: [
        { title: "Legacy System", desc: "Centralized authority or distant shareholders impose rules. Local nuances are ignored. Compliance is low." },
        { title: "Polycentric Core", desc: "Nested layers of governance. Neighborhoods manage parks; Bioregions manage watersheds. Rules match local reality." },
        { title: "Soma Implementation", desc: "Users vote on rules directly via Liquid Democracy. AI acts as a neutral monitor. Enforceability is built into the code." }
      ]
    },
    allocation: {
      title: "Sub-Routine 2: Allocation",
      p1: "The end of the price tag. In a world of AI abundance, the price mechanism still rations goods based on wealth.",
      quote: "You cannot simply choose what you want; you must also be chosen.",
      author: "Alvin Roth, Nobel Laureate",
      p2: "For daily goods, the kernel uses A-CEEI (Approximate Competitive Equilibrium from Equal Incomes). You have a budget of 'Soma Credits'. The system calculates a fair distribution where supply meets demand.",
      interactiveTitle: "The Allocation Engine",
      oldBtn: "Old: Price",
      newBtn: "New: A-CEEI",
      oldLabel: "High Wealth vs Low Wealth",
      oldQuote: "\"I buy it because I can afford it.\"",
      oldDesc: "Allocation based on Exchange Value. Ignores need.",
      newLabel: "Gluten-Free vs Meat Lover",
      newQuote: "\"I choose it because I prefer it.\"",
      newDesc: "Allocation based on Use Value. Market clears via fairness.",
      p3: "Because everyone starts with equal endowments, the outcome is 'Envy-Free'. It captures the efficiency of the market without the brutality of inequality."
    },
    meaning: {
      title: "The Crisis of Meaning",
      p1: "If robots do the work, what do humans do? The legacy kernel says: 'If you don't work, you starve.' Soma says: 'Survival is guaranteed; status is earned.'",
      ecoCare: "Ecological Care",
      ecoDesc: "Reforesting, monitoring biodiversity, and healing the metabolic rift.",
      socCare: "Social Care",
      socDesc: "Child rearing, elderly care, education, and the arts.",
      p2: "Humans need dignity. In Soma, you earn 'Soma Plus'—social capital—by contributing to the commons."
    },
    thermo: {
      title: "The Hard Constraints",
      p1: "Economics is a subsystem of the biosphere. You cannot negotiate with physics.",
      cardTitle: "The Daly Rules",
      rules: [
        "Renewable Limit: Harvest ≤ Regeneration.",
        "Pollution Limit: Waste ≤ Absorption.",
        "Non-Renewable Limit: Depletion ≤ Substitution."
      ],
      p2: "If consumption threatens these limits, the 'Ecological Cost' spikes automatically."
    },
    transition: {
      title: "The Transition",
      p1: "The strategy is known as the 'Strangler Fig.' We build the new system around the old one.",
      p2: "We start small. Use Matching Markets for food banks. As these 'islands of coherence' prove superiority, they will expand."
    },
    footer: {
      ready: "Ready for the upgrade?",
      desc: "soma_kernel_5.5 is an open invitation to code the future.",
      credits: "Synthesized from the 'soma_kernel_5.5' Technical Specification."
    }
  },
  zh: {
    nav: { intro: "崩溃", kernel: "内核", governance: "治理", allocation: "分配", meaning: "意义", transition: "转型" },
    headline: "下一代经济的源代码",
    subhead: "随着无限增长和人类劳动力的双重引擎熄火，一个建立在诺贝尔奖科学基础上的新操作系统提供了一条出路。",
    date: "2025年12月4日 • 基于 'soma_kernel_5.5'",
    intro: {
      p1: "现代世界的根本缺陷不在于政治，而在于架构。我们在21世纪的硬件上运行着19世纪的经济操作系统。传统内核——新古典资本主义——是为一个土地广阔、劳动力稀缺的世界编写的。",
      p2: "这两个假设都已失效。热力学已经终结了无限增长，人工智能正在切断劳动与生存之间的联系。系统正在报错：气候崩溃、极端不平等和意义危机。",
      p3: "我们需要重写，而不是补丁。",
      p4: "输入 soma_kernel_5.5。这不仅仅是一个宣言，而是一个后资本主义社会的技术规范。它设计了一种“可见算法”来取代“看不见的手”。"
    },
    kernel: {
      title: "新内核",
      p1: "Soma 的核心是一个计算治理系统。它放弃了 GDP（衡量货币流通速度）这一指标，转而采用“能力集”这一指标。",
      cardTitle: "系统目标",
      goal: "目标：最大化个人的“实质性自由”（健康、教育、创造力）。",
      constraint: "约束：熵。经济必须在生物圈的可再生限度内运行。"
    },
    governance: {
      title: "子程序 1：治理",
      p1: "公地悲剧是一个神话。Elinor Ostrom 证明社区可以自我管理资源。",
      p2: "Soma 将 Ostrom 的原则硬编码为数字法律。规则不是静态文本，而是代码即规则。",
      interactiveTitle: "互动：治理转变",
      steps: [
        { title: "传统系统", desc: "中央集权或遥远的股东制定规则。忽略地方细微差别。合规性低。" },
        { title: "多中心核心", desc: "嵌套的治理层。社区管理公园；生物区管理流域。规则符合当地实际。" },
        { title: "Soma 实施", desc: "用户通过流动民主直接对规则进行投票。AI 作为中立的监督者。执行力内置于代码中。" }
      ]
    },
    allocation: {
      title: "子程序 2：分配",
      p1: "价格标签的终结。在 AI 丰富的世界里，价格机制仍然根据财富配给商品。",
      quote: "你不能简单地选择你想要的；你也必须被选择。",
      author: "Alvin Roth, 诺贝尔奖得主",
      p2: "对于日常用品，内核使用 A-CEEI。你有“Soma 积分”预算。系统计算供需平衡的公平分配。",
      interactiveTitle: "分配引擎",
      oldBtn: "旧：价格",
      newBtn: "新：A-CEEI",
      oldLabel: "高财富 vs 低财富",
      oldQuote: "“我买它是因为我买得起。”",
      oldDesc: "基于交换价值的分配。忽略需求。",
      newLabel: "无麸质 vs 肉类爱好者",
      newQuote: "“我选择它是因为我喜欢。”",
      newDesc: "基于使用价值的分配。市场通过公平出清。",
      p3: "因为每个人的禀赋相同，结果是“无嫉妒”的。它在没有不平等的残酷性的情况下捕捉了市场的效率。"
    },
    meaning: {
      title: "意义危机",
      p1: "如果机器人做工，人类做什么？传统内核说：“不工作者不得食。” Soma 说：“生存有保障；地位靠赢得。”",
      ecoCare: "生态关怀",
      ecoDesc: "重新造林，监测生物多样性，修复代谢裂痕。",
      socCare: "社会关怀",
      socDesc: "育儿，养老，教育和艺术。",
      p2: "人类需要尊严。在 Soma 中，你通过为公地做贡献来通过赢得“Soma Plus”——社会资本。"
    },
    thermo: {
      title: "硬约束",
      p1: "经济是生物圈的一个子系统。你不能与物理学讨价还价。",
      cardTitle: "Daly 规则",
      rules: [
        "可再生限制：收获 ≤ 再生。",
        "污染限制：废物 ≤ 吸收。",
        "不可再生限制：消耗 ≤ 替代。"
      ],
      p2: "如果消费威胁到这些限制，“生态成本”会自动飙升。"
    },
    transition: {
      title: "转型",
      p1: "该策略被称为“绞杀榕”。我们在旧系统周围建立新系统。",
      p2: "我们从小处着手。在食品银行使用匹配市场。随着这些“一致性岛屿”证明其优越性，它们将扩展。"
    },
    footer: {
      ready: "准备好升级了吗？",
      desc: "soma_kernel_5.5 是邀请所有人编写未来的公开邀请。",
      credits: "综合自 'soma_kernel_5.5' 技术规范。"
    }
  },
  es: {
    nav: { intro: "El Colapso", kernel: "El Núcleo", governance: "Gobernanza", allocation: "Asignación", meaning: "Sentido", transition: "Transición" },
    headline: "El Código Fuente de la Nueva Economía",
    subhead: "Mientras los motores del crecimiento infinito y el trabajo humano fallan, un nuevo sistema operativo —basado en ciencia ganadora del Nobel— ofrece una salida.",
    date: "4 Dic, 2025 • Basado en 'soma_kernel_5.5'",
    intro: {
      p1: "El defecto fundamental del mundo moderno no es político, sino arquitectónico. Ejecutamos un sistema operativo económico del siglo XIX en hardware del siglo XXI. El núcleo heredado —el capitalismo neoclásico— fue escrito para un mundo de tierras vacías y mano de obra escasa.",
      p2: "Ambas suposiciones han fallado. La termodinámica ha puesto fin al crecimiento infinito y la IA está cortando el vínculo entre trabajo y supervivencia. El sistema arroja errores: colapso climático, desigualdad extrema y una crisis de sentido.",
      p3: "No necesitamos un parche. Necesitamos una reescritura.",
      p4: "Entra soma_kernel_5.5. No es un manifiesto, sino una especificación técnica para una sociedad poscapitalista. Diseña un 'Algoritmo Visible' para reemplazar la 'Mano Invisible'."
    },
    kernel: {
      title: "El Nuevo Núcleo",
      p1: "En su corazón, Soma es un sistema de gobernanza computacional. Abandona la métrica del PIB por una métrica llamada Conjunto de Capacidades.",
      cardTitle: "Objetivo del Sistema",
      goal: "Objetivo: Maximizar las 'Libertades Sustantivas' de los individuos (salud, educación, creatividad).",
      constraint: "Restricción: Entropía. La economía debe operar dentro de los límites regenerativos de la biosfera."
    },
    governance: {
      title: "Subrutina 1: Gobernanza",
      p1: "La tragedia de los comunes es un mito. Elinor Ostrom demostró que las comunidades pueden autogestionar recursos de manera sostenible.",
      p2: "Soma codifica los principios de Ostrom en ley digital. Las reglas no son texto estático; son Reglas como Código.",
      interactiveTitle: "Interactivo: El Cambio de Gobernanza",
      steps: [
        { title: "Sistema Heredado", desc: "Autoridad centralizada. Se ignoran los matices locales. El cumplimiento es bajo." },
        { title: "Núcleo Policéntrico", desc: "Capas anidadas de gobernanza. Los barrios gestionan parques; las biorregiones gestionan cuencas." },
        { title: "Implementación Soma", desc: "Los usuarios votan reglas directamente vía Democracia Líquida. La IA actúa como monitor neutral." }
      ]
    },
    allocation: {
      title: "Subrutina 2: Asignación",
      p1: "El fin de la etiqueta de precio. En un mundo de abundancia de IA, el mecanismo de precios aún raciona los bienes basándose en la riqueza.",
      quote: "No puedes simplemente elegir lo que quieres; también debes ser elegido.",
      author: "Alvin Roth, Premio Nobel",
      p2: "Para bienes diarios, el núcleo usa A-CEEI. Tienes un presupuesto de 'Créditos Soma'. El sistema calcula una distribución justa.",
      interactiveTitle: "El Motor de Asignación",
      oldBtn: "Viejo: Precio",
      newBtn: "Nuevo: A-CEEI",
      oldLabel: "Alta Riqueza vs Baja Riqueza",
      oldQuote: "\"Lo compro porque puedo pagarlo.\"",
      oldDesc: "Asignación basada en Valor de Cambio. Ignora la necesidad.",
      newLabel: "Sin Gluten vs Amante de la Carne",
      newQuote: "\"Lo elijo porque lo prefiero.\"",
      newDesc: "Asignación basada en Valor de Uso. El mercado se vacía vía equidad.",
      p3: "Como todos comienzan con dotaciones iguales, el resultado es 'Libre de Envidia'. Captura la eficiencia del mercado sin la brutalidad de la desigualdad."
    },
    meaning: {
      title: "La Crisis de Sentido",
      p1: "Si los robots trabajan, ¿qué hacen los humanos? El núcleo heredado dice: 'Si no trabajas, mueres de hambre'. Soma dice: 'La supervivencia está garantizada; el estatus se gana'.",
      ecoCare: "Cuidado Ecológico",
      ecoDesc: "Reforestación, monitoreo de biodiversidad y sanación de la grieta metabólica.",
      socCare: "Cuidado Social",
      socDesc: "Crianza de niños, cuidado de ancianos, educación y artes.",
      p2: "Los humanos necesitan dignidad. En Soma, ganas 'Soma Plus' contribuyendo a los bienes comunes."
    },
    thermo: {
      title: "Las Restricciones Duras",
      p1: "La economía es un subsistema de la biosfera. No puedes negociar com la física.",
      cardTitle: "Las Reglas de Daly",
      rules: [
        "Límite Renovable: Cosecha ≤ Regeneración.",
        "Límite de Contaminación: Residuos ≤ Absorción.",
        "Límite No Renovable: Agotamiento ≤ Sustitución."
      ],
      p2: "Si el consumo amenaza estos límites, el 'Costo Ecológico' se dispara automáticamente."
    },
    transition: {
      title: "La Transición",
      p1: "La estrategia se conoce como la 'Higuera Estranguladora'. Construimos el nuevo sistema alrededor del viejo.",
      p2: "Empezamos pequeño. Usamos Mercados de Emparejamiento para bancos de alimentos. A medida que estas 'islas de coherencia' prueben su superioridad, se expandirán."
    },
    footer: {
      ready: "¿Listo para la actualización?",
      desc: "soma_kernel_5.5 es una invitación abierta para codificar el futuro.",
      credits: "Sintetizado de la Especificación Técnica 'soma_kernel_5.5'."
    }
  },
  ar: {
    dir: "rtl",
    nav: { intro: "الانهيار", kernel: "النواة", governance: "الحوكمة", allocation: "التخصيص", meaning: "المعنى", transition: "التحول" },
    headline: "شفرة المصدر للاقتصاد القادم",
    subhead: "بينما تتعثر محركات النمو اللانهائي والعمل البشري، يقدم نظام تشغيل جديد - مبني على علوم حائزة على جائزة نوبل - مخرجاً.",
    date: "4 ديسمبر 2025 • بناءً على 'soma_kernel_5.5'",
    intro: {
      p1: "الخلل الأساسي في العالم الحديث ليس سياسياً، بل معمارياً. نحن نشغل نظام تشغيل اقتصادي من القرن التاسع عشر على أجهزة القرن الحادي والعشرين. النواة القديمة - الرأسمالية الكلاسيكية الجديدة - كُتبت لعالم ذي أراضٍ فارغة وعمالة نادرة.",
      p2: "كلا الافتراضين فشلا. الديناميكا الحرارية أنهت وقت النمو اللانهائي، والذكاء الاصطناعي يقطع الصلة بين العمل والبقاء. النظام يطلق أخطاء: انهيار مناخي، عدم مساواة شديد، وأزمة معنى.",
      p3: "نحن لا نحتاج إلى ترقيع. نحتاج إلى إعادة كتابة.",
      p4: "أدخل soma_kernel_5.5. إنه ليس بياناً، بل مواصفة تقنية لمجتمع ما بعد الرأسمالية. إنه يهندس 'خوارزمية مرئية' لتحل محل 'اليد الخفية'."
    },
    kernel: {
      title: "النواة الجديدة",
      p1: "في جوهره، سوما هو نظام حوكمة حسابي. يتخلى عن مقياس الناتج المحلي الإجمالي لصالح مقياس يسمى مجموعة القدرات.",
      cardTitle: "هدف النظام",
      goal: "الهدف: تعظيم 'الحريات الجوهرية' للأفراد (الصحة، التعليم، الإبداع).",
      constraint: "القيد: الإنتروبيا. يجب أن يعمل الاقتصاد ضمن الحدود التجديدية للمحيط الحيوي."
    },
    governance: {
      title: "الروتين الفرعي 1: الحوكمة",
      p1: "مأساة المشاع هي خرافة. أثبتت إلينور أوستروم أن المجتمعات يمكنها إدارة الموارد ذاتياً بشكل مستدام.",
      p2: "سوما يدمج مبادئ أوستروم في القانون الرقمي. القواعد ليست نصاً ثابتاً؛ إنها قواعد كبرمجة.",
      interactiveTitle: "تفاعلي: تحول الحوكمة",
      steps: [
        { title: "النظام القديم", desc: "سلطة مركزية تفرض القواعد. يتم تجاهل الفروق الدقيقة المحلية." },
        { title: "النواة متعددة المراكز", desc: "طبقات متداخلة من الحوكمة. الأحياء تدير الحدائق؛ المناطق الحيوية تدير مستجمعات المياه." },
        { title: "تطبيق سوما", desc: "يصوت المستخدمون على القواعد مباشرة عبر الديمقراطية السائلة. الذكاء الاصطناعي يعمل كمراقب محايد." }
      ]
    },
    allocation: {
      title: "الروتين الفرعي 2: التخصيص",
      p1: "نهاية بطاقة السعر. في عالم وفرة الذكاء الاصطناعي، لا تزال آلية السعر تقنن البضائع بناءً على الثروة.",
      quote: "لا يمكنك ببساطة اختيار ما تريد؛ يجب أيضاً أن يتم اختيارك.",
      author: "ألفين روث، حائز على نوبل",
      p2: "للسلع اليومية، تستخدم النواة A-CEEI. لديك ميزانية من 'اعتمادات سوما'. يحسب النظام توزيعاً عادلاً حيث يلتقي العرض بالطلب.",
      interactiveTitle: "محرك التخصيص",
      oldBtn: "قديم: السعر",
      newBtn: "جديد: A-CEEI",
      oldLabel: "ثروة عالية مقابل ثروة منخفضة",
      oldQuote: "\"أشتريه لأنني أستطيع تحمل تكلفته.\"",
      oldDesc: "تخصيص بناءً على قيمة التبادل. يتجاهل الحاجة.",
      newLabel: "خالٍ من الغلوتين مقابل محب للحوم",
      newQuote: "\"أختاره لأنني أفضله.\"",
      newDesc: "تخصيص بناءً على قيمة الاستخدام. السوق يتوازن عبر الإنصاف.",
      p3: "لأن الجميع يبدأ بمخصصات متساوية، النتيجة 'خالية من الحسد'. إنها تلتقط كفاءة السوق دون وحشية عدم المساواة."
    },
    meaning: {
      title: "أزمة المعنى",
      p1: "إذا كانت الروبوتات تعمل، ماذا يفعل البشر؟ النواة القديمة تقول: 'إذا لم تعمل، تجوع'. سوما يقول: 'البقاء مضمون؛ المكانة تُكتسب'.",
      ecoCare: "الرعاية البيئية",
      ecoDesc: "إعادة التشجير، ومراقبة التنوع البيولوجي.",
      socCare: "الرعاية الاجتماعية",
      socDesc: "تربية الأطفال، رعاية المسنين، التعليم، والفنون.",
      p2: "البشر يحتاجون إلى الكرامة. في سوما، تكسب 'سوما بلس' من خلال المساهمة في المشاع."
    },
    thermo: {
      title: "القيود الصلبة",
      p1: "الاقتصاد هو نظام فرعي من المحيط الحيوي. لا يمكنك التفاوض مع الفيزياء.",
      cardTitle: "قواعد دالي",
      rules: [
        "الحد المتجدد: الحصاد ≤ التجديد.",
        "حد التلوث: النفايات ≤ الامتصاص.",
        "الحد غير المتجدد: الاستنزاف ≤ الاستبدال."
      ],
      p2: "إذا هدد الاستهلاك هذه الحدود، ترتفع 'التكلفة البيئية' تلقائياً."
    },
    transition: {
      title: "التحول",
      p1: "تُعرف الاستراتيجية باسم 'تين الخناق'. نبني النظام الجديد حول القديم.",
      p2: "نبدأ صغيراً. نستخدم أسواق المطابقة لبنوك الطعام. مع إثبات تفوق 'جزر التماسك' هذه، ستتوسع."
    },
    footer: {
      ready: "جاهز للترقية؟",
      desc: "soma_kernel_5.5 هي دعوة مفتوحة لبرمجة المستقبل.",
      credits: "مستخلص من المواصفات التقنية لـ 'soma_kernel_5.5'."
    }
  },
  hi: {
    nav: { intro: "पतन", kernel: "कर्नेल", governance: "शासन", allocation: "आवंटन", meaning: "अर्थ", transition: "संक्रमण" },
    headline: "अगली अर्थव्यवस्था का स्रोत कोड",
    subhead: "जैसे ही अनंत विकास और मानव श्रम के दोहरे इंजन लड़खड़ाते हैं, नोबेल विजेता विज्ञान पर आधारित एक नया ऑपरेटिंग सिस्टम एक रास्ता दिखाता है।",
    date: "4 दिसंबर, 2025 • 'soma_kernel_5.5' पर आधारित",
    intro: {
      p1: "आधुनिक दुनिया का मूलभूत दोष राजनीतिक नहीं, बल्कि वास्तुशिल्प है। हम 21वीं सदी के हार्डवेयर पर 19वीं सदी का आर्थिक ऑपरेटिंग सिस्टम चला रहे हैं।",
      p2: "दोनों धारणाएं विफल हो गई हैं। थर्मोडायनामिक्स ने अनंत विकास को रोक दिया है, और एआई श्रम और अस्तित्व के बीच की कड़ी को काट रहा है।",
      p3: "हमें पैच की नहीं, पुनर्लेखन की आवश्यकता है।",
      p4: "soma_kernel_5.5 दर्ज करें। यह एक घोषणापत्र नहीं है, बल्कि एक उत्तर-पूंजीवादी समाज के लिए एक तकनीकी विनिर्देश है।"
    },
    kernel: {
      title: "नया कर्नेल",
      p1: "इसके मूल में, सोमा एक कम्प्यूटेशनल शासन प्रणाली है। यह जीडीपी के मीट्रिक को छोड़ देती है।",
      cardTitle: "सिस्टम उद्देश्य",
      goal: "लक्ष्य: व्यक्तियों की 'मूलभूत स्वतंत्रता' (स्वास्थ्य, शिक्षा, रचनात्मकता) को अधिकतम करना।",
      constraint: "बाध्यता: एन्ट्रापी। अर्थव्यवस्था को बायोस्फीयर की पुनर्योजी सीमाओं के भीतर काम करना चाहिए।"
    },
    governance: {
      title: "सबरूटीन 1: शासन",
      p1: "कॉन्स की त्रासदी एक मिथक है। एलिनोर ओस्ट्रॉम ने साबित किया कि समुदाय संसाधनों का प्रबंधन स्वयं कर सकते हैं।",
      p2: "सोमा ओस्ट्रॉम के सिद्धांतों को डिजिटल कानून में हार्ड-कोड करता है। नियम स्थिर पाठ नहीं हैं; वे कोड के रूप में नियम हैं।",
      interactiveTitle: "इंटरएक्टिव: शासन बदलाव",
      steps: [
        { title: "विरासत प्रणाली", desc: "केंद्रीकृत प्राधिकरण नियम थोपता है। स्थानीय बारीकियों की अनदेखी की जाती है।" },
        { title: "पॉलीसेंट्रिक कोर", desc: "शासन की नेस्टेड परतें। पड़ोस पार्कों का प्रबंधन करते हैं।" },
        { title: "सोमा कार्यान्वयन", desc: "उपयोगकर्ता लिक्विड डेमोक्रेसी के माध्यम से नियमों पर सीधे वोट करते हैं। एआई एक तटस्थ मॉनिटर के रूप में कार्य करता है।" }
      ]
    },
    allocation: {
      title: "सबरूटीन 2: आवंटन",
      p1: "मूल्य टैग का अंत। एआई बहुतायत की दुनिया में, मूल्य तंत्र अभी भी धन के आधार पर माल का राशन करता है।",
      quote: "आप बस वह नहीं चुन सकते जो आप चाहते हैं; आपको भी चुना जाना चाहिए।",
      author: "एल्विन रोथ, नोबेल विजेता",
      p2: "दैनिक वस्तुओं के लिए, कर्नेल A-CEEI का उपयोग करता है। आपके पास 'सोमा क्रेडिट' का बजट है। सिस्टम एक निष्पक्ष वितरण की गणना करता है।",
      interactiveTitle: "आवंटन इंजन",
      oldBtn: "पुराना: कीमत",
      newBtn: "नया: A-CEEI",
      oldLabel: "उच्च धन बनाम कम धन",
      oldQuote: "\"मैं इसे खरीदता हूं क्योंकि मैं इसे खरीद सकता हूं।\"",
      oldDesc: "विनिमय मूल्य पर आधारित आवंटन। आवश्यकता की अनदेखी करता है।",
      newLabel: "ग्लूटेन-मुक्त बनाम मांस प्रेमी",
      newQuote: "\"मैं इसे चुनता हूं क्योंकि मैं इसे पसंद करता हूं।\"",
      newDesc: "उपयोग मूल्य पर आधारित आवंटन। बाजार निष्पक्षता के माध्यम से साफ होता है।",
      p3: "क्योंकि हर कोई समान बंदोबस्ती के साथ शुरू करता है, परिणाम 'ईर्ष्या-मुक्त' है।"
    },
    meaning: {
      title: "अर्थ का संकट",
      p1: "यदि रोबोट काम करते हैं, तो मनुष्य क्या करते हैं? सोमा कहता है: 'अस्तित्व की गारंटी है; स्थिति अर्जित की जाती है। '",
      ecoCare: "पारिस्थितिक देखभाल",
      ecoDesc: "वनीकरण, जैव विविधता की निगरानी।",
      socCare: "सामाजिक देखभाल",
      socDesc: "बच्चों का पालन-पोषण, बुजुर्गों की देखभाल, शिक्षा और कला।",
      p2: "मनुष्यों को गरिमा की आवश्यकता है। सोमा में, आप कॉमन्स में योगदान देकर 'सोमा प्लस' अर्जित करते हैं।"
    },
    thermo: {
      title: "हार्ड बाधाएं",
      p1: "अर्थव्यवस्था बायोस्फीयर का एक सबसिस्टम है। आप भौतिकी के साथ बातचीत नहीं कर सकते।",
      cardTitle: "डेली नियम",
      rules: [
        "नवीकरणीय सीमा: फसल ≤ उत्थान।",
        "प्रदूषण सीमा: अपशिष्ट ≤ अवशोषण।",
        "गैर-नवीकरणीय सीमा: कमी ≤ प्रतिस्थापन।"
      ],
      p2: "यदि खपत इन सीमाओं को खतरे में डालती है, तो 'पारिस्थितिक लागत' स्वचालित रूप से बढ़ जाती है।"
    },
    transition: {
      title: "संक्रमण",
      p1: "रणनीति को 'स्ट्रैंगलर अंजीर' के रूप में जाना जाता है। हम पुराने के चारों ओर नई प्रणाली का निर्माण करते हैं।",
      p2: "हम छोटे से शुरू करते हैं। खाद्य बैंकों के लिए मिलान बाजारों का उपयोग करें।"
    },
    footer: {
      ready: "अपग्रेड के लिए तैयार हैं?",
      desc: "soma_kernel_5.5 भविष्य को कोड करने के लिए एक खुला निमंत्रण है।",
      credits: "सिंश्लेषण 'soma_kernel_5.5' तकनीकी विनिर्देश से।"
    }
  },
  pt: {
    nav: { intro: "O Colapso", kernel: "O Kernel", governance: "Governança", allocation: "Alocação", meaning: "Sentido", transition: "Transição" },
    headline: "O Código-Fonte da Próxima Economia",
    subhead: "Enquanto os motores do crescimento infinito e do trabalho humano falham, um novo sistema operacional — construído sobre ciência vencedora do Nobel — oferece uma saída.",
    date: "4 Dez, 2025 • Baseado em 'soma_kernel_5.5'",
    intro: {
      p1: "O defeito fundamental do mundo moderno não é político, mas arquitetônico. Estamos rodando um sistema operacional econômico do século 19 em hardware do século 21.",
      p2: "Ambas as suposições falharam. A termodinâmica decretou o fim do crescimento infinito e a IA está cortando o vínculo entre trabalho e sobrevivência.",
      p3: "Não precisamos de um patch. Precisamos de uma reescrita.",
      p4: "Entre soma_kernel_5.5. Não é um manifesto, mas uma especificação técnica para uma sociedade pós-capitalista."
    },
    kernel: {
      title: "O Novo Kernel",
      p1: "Em seu coração, Soma é um sistema de governança computacional. Ele abandona a métrica do PIB por uma métrica chamada Conjunto de Capacidades.",
      cardTitle: "Objetivo do Sistema",
      goal: "Objetivo: Maximizar as 'Liberdades Substantivas' dos indivíduos.",
      constraint: "Restrição: Entropia. A economia deve operar dentro dos limites regenerativos da biosfera."
    },
    governance: {
      title: "Sub-rotina 1: Governança",
      p1: "A tragédia dos comuns é um mito. Elinor Ostrom provou que comunidades podem autogerir recursos de forma sustentável.",
      p2: "Soma codifica os princípios de Ostrom na lei digital. Regras não são texto estático; são Regras como Código.",
      interactiveTitle: "Interativo: A Mudança de Governança",
      steps: [
        { title: "Sistema Legado", desc: "Autoridade centralizada impõe regras. Nuances locais são ignoradas." },
        { title: "Núcleo Policêntrico", desc: "Camadas aninhadas de governança. Bairros gerenciam parques." },
        { title: "Implementação Soma", desc: "Usuários votam em regras diretamente via Democracia Líquida. A IA atua como monitor neutro." }
      ]
    },
    allocation: {
      title: "Sub-rotina 2: Alocação",
      p1: "O fim da etiqueta de preço. Num mundo de abundância de IA, o mecanismo de preços ainda raciona bens com base na riqueza.",
      quote: "Você não pode simplesmente escolher o que quer; você também deve ser escolhido.",
      author: "Alvin Roth, Prêmio Nobel",
      p2: "Para bens diários, o kernel usa A-CEEI. Você tem um orçamento de 'Créditos Soma'. O sistema calcula uma distribuição justa.",
      interactiveTitle: "O Motor de Alocação",
      oldBtn: "Velho: Preço",
      newBtn: "Novo: A-CEEI",
      oldLabel: "Alta Riqueza vs Baixa Riqueza",
      oldQuote: "\"Compro porque posso pagar.\"",
      oldDesc: "Alocação baseada em Valor de Troca.",
      newLabel: "Sem Glúten vs Amante de Carne",
      newQuote: "\"Escolho porque prefiro.\"",
      newDesc: "Alocação baseada em Valor de Uso.",
      p3: "Como todos começam com dotações iguais, o resultado é 'Livre de Inveja'. Captura a eficiência do mercado sem a brutalidade da desigualdade."
    },
    meaning: {
      title: "A Crise de Sentido",
      p1: "Se robôs trabalham, o que fazem os humanos? Soma diz: 'A sobrevivência é garantida; o status é conquistado'.",
      ecoCare: "Cuidado Ecológico",
      ecoDesc: "Reflorestamento e monitoramento da biodiversidade.",
      socCare: "Cuidado Social",
      socDesc: "Criação de filhos, cuidado de idosos, educação e artes.",
      p2: "Humanos precisam de dignidade. No Soma, você ganha 'Soma Plus' contribuindo para os bens comuns."
    },
    thermo: {
      title: "As Restrições Rígidas",
      p1: "A economia é um subsistema da biosfera. Você não pode negociar com a física.",
      cardTitle: "As Regras de Daly",
      rules: [
        "Limite Renovável: Colheita ≤ Regeneração.",
        "Limite de Poluição: Resíduos ≤ Absorção.",
        "Limite Não Renovável: Esgotamento ≤ Substituição."
      ],
      p2: "Se o consumo ameaça esses limites, o 'Costo Ecológico' dispara automaticamente."
    },
    transition: {
      title: "A Transição",
      p1: "A estratégia é conhecida como 'Figueira Estranguladora'. Construímos o novo sistema ao redor do antigo.",
      p2: "Começamos pequeno. Usamos Mercados de Correspondência para bancos de alimentos."
    },
    footer: {
      ready: "Pronto para a atualização?",
      desc: "soma_kernel_5.5 é um convite aberto para codificar o futuro.",
      credits: "Sintetizado da Especificação Técnica 'soma_kernel_5.5'."
    }
  },
  fr: {
    nav: { intro: "L'Effondrement", kernel: "Le Noyau", governance: "Gouvernance", allocation: "Allocation", meaning: "Sens", transition: "Transition" },
    headline: "Le Code Source de la Prochaine Économie",
    subhead: "Alors que les moteurs de la croissance infinie et du travail humain s'essoufflent, un nouveau système d'exploitation — bâti sur une science récompensée par le Nobel — offre une issue.",
    date: "4 Déc, 2025 • Basé sur 'soma_kernel_5.5'",
    intro: {
      p1: "Le défaut fondamental du monde moderne n'est pas politique, mais architectural. Nous exécutons un système d'exploitation économique du 19ème siècle sur du matériel du 21ème siècle.",
      p2: "Les deux hypothèses ont échoué. La thermodynamique a sifflé la fin de la croissance infinie, et l'IA coupe le lien entre travail et survie.",
      p3: "Nous n'avons pas besoin d'un correctif. Nous avons besoin d'une réécriture.",
      p4: "Entrez soma_kernel_5.5. Ce n'est pas un manifeste, mais une spécification technique pour une société post-capitaliste."
    },
    kernel: {
      title: "Le Nouveau Noyau",
      p1: "En son cœur, Soma est un système de gouvernance computationnelle. Il abandonne la métrique du PIB pour une métrique appelée Ensemble de Capacités.",
      cardTitle: "Objectif du Système",
      goal: "Objectif : Maximiser les 'Libertés Substantielles' des individus.",
      constraint: "Contrainte : Entropie. L'économie doit fonctionner dans les limites régénératives de la biosphère."
    },
    governance: {
      title: "Sous-routine 1 : Gouvernance",
      p1: "La tragédie des communs est un mythe. Elinor Ostrom a prouvé que les communautés peuvent autogérer les ressources durablement.",
      p2: "Soma code les principes d'Ostrom dans la loi numérique. Les règles ne sont pas du texte statique ; ce sont des Règles comme Code.",
      interactiveTitle: "Interactif : Le Changement de Gouvernance",
      steps: [
        { title: "Système Hérité", desc: "L'autorité centralisée impose des règles. Les nuances locales sont ignorées." },
        { title: "Noyau Polycentrique", desc: "Couches imbriquées de gouvernance. Les quartiers gèrent les parcs." },
        { title: "Implémentation Soma", desc: "Les utilisateurs votent sur les règles directement via la Démocratie Liquide. L'IA agit comme un moniteur neutre." }
      ]
    },
    allocation: {
      title: "Sous-routine 2 : Allocation",
      p1: "La fin de l'étiquette de prix. Dans un monde d'abondance d'IA, le mécanisme des prix rationne toujours les biens en fonction de la richesse.",
      quote: "Vous ne pouvez pas simplement choisir ce que vous voulez ; vous devez aussi être choisi.",
      author: "Alvin Roth, Prix Nobel",
      p2: "Pour les biens quotidiens, le noyau utilise A-CEEI. Vous avez un budget de 'Crédits Soma'. Le système calcule une distribution équitable.",
      interactiveTitle: "Le Moteur d'Allocation",
      oldBtn: "Vieux : Prix",
      newBtn: "Nouveau : A-CEEI",
      oldLabel: "Richesse Élevée vs Faible Richesse",
      oldQuote: "\"Je l'achète parce que je peux me le permettre.\"",
      oldDesc: "Allocation basée sur la Valeur d'Échange.",
      newLabel: "Sans Gluten vs Amateur de Viande",
      newQuote: "\"Je le choisis parce que je le préfère.\"",
      newDesc: "Allocation basée sur la Valeur d'Usage.",
      p3: "Comme tout le monde commence avec des dotations égales, le résultat est 'Sans Envie'. Il capture l'efficacité du marché sans la brutalité de l'inégalité."
    },
    meaning: {
      title: "La Crise de Sens",
      p1: "Si les robots travaillent, que font les humains ? Soma dit : 'La survie est garantie ; le statut se mérite'.",
      ecoCare: "Soin Écologique",
      ecoDesc: "Reboisement et surveillance de la biodiversité.",
      socCare: "Soin Social",
      socDesc: "Éducation des enfants, soins aux personnes âgées, éducation et arts.",
      p2: "Les humains ont besoin de dignité. Dans Soma, vous gagnez du 'Soma Plus' en contribuant aux biens communs."
    },
    thermo: {
      title: "Les Contraintes Lourdes",
      p1: "L'économie est un sous-système de la biosphère. On ne négocie pas avec la physique.",
      cardTitle: "Les Règles de Daly",
      rules: [
        "Limite Renouvelable : Récolte ≤ Régénération.",
        "Limite de Pollution : Déchets ≤ Absorption.",
        "Limite Non Renouvelable : Épuisement ≤ Substitution."
      ],
      p2: "Si la consommation menace ces limites, le 'Coût Écologique' grimpe automatiquement."
    },
    transition: {
      title: "La Transition",
      p1: "La stratégie est connue sous le nom de 'Figuier Étrangleur'. Nous construisons le nouveau système autour de l'ancien.",
      p2: "Nous commençons petit. Utiliser des Marchés d'Appariement pour les banques alimentaires."
    },
    footer: {
      ready: "Prêt pour la mise à niveau ?",
      desc: "soma_kernel_5.5 est une invitation ouverte à coder le futur.",
      credits: "Synthétisé à partir de la Spécification Technique 'soma_kernel_5.5'."
    }
  },
  ru: {
    nav: { intro: "Крах", kernel: "Ядро", governance: "Управление", allocation: "Распределение", meaning: "Смысл", transition: "Переход" },
    headline: "Исходный код следующей экономики",
    subhead: "Поскольку двойные двигатели бесконечного роста и человеческого труда барахлят, новая операционная система, построенная на науке, удостоенной Нобелевской премии, предлагает выход.",
    date: "4 декабря 2025 • На основе 'soma_kernel_5.5'",
    intro: {
      p1: "Фундаментальный дефект современного мира не политический, а архитектурный. Мы запускаем экономическую операционную систему 19-го века на оборудовании 21-го века.",
      p2: "Оба предположения провалились. Термодинамика положила конец бесконечному росту, а ИИ разрывает связь между трудом и выживанием.",
      p3: "Нам не нужен патч. Нам нужно переписывание.",
      p4: "Введите soma_kernel_5.5. Это не манифест, а техническая спецификация для посткапиталистического общества."
    },
    kernel: {
      title: "Новое ядро",
      p1: "В своей основе Soma — это вычислительная система управления. Она отказывается от метрики ВВП в пользу метрики, называемой Набором Возможностей.",
      cardTitle: "Цель системы",
      goal: "Цель: Максимизировать «существенные свободы» людей.",
      constraint: "Ограничение: Энтропия. Экономика должна работать в пределах регенеративных границ биосферы."
    },
    governance: {
      title: "Подпрограмма 1: Управление",
      p1: "Трагедия общин — это миф. Элинор Остром доказала, что сообщества могут самостоятельно управлять ресурсами устойчиво.",
      p2: "Soma жестко кодирует принципы Остром в цифровое право. Правила — это не статический текст, а Правила как Код.",
      interactiveTitle: "Интерактив: Сдвиг управления",
      steps: [
        { title: "Унаследованная система", desc: "Централизованная власть навязывает правила. Местные нюансы игнорируются." },
        { title: "Полицентрическое ядро", desc: "Вложенные уровни управления. Районы управляют парками." },
        { title: "Реализация Soma", desc: "Пользователи голосуют за правила напрямую через жидкую демократию. ИИ действует как нейтральный наблюдатель." }
      ]
    },
    allocation: {
      title: "Подпрограмма 2: Распределение",
      p1: "Конец ценника. В мире изобилия ИИ механизм цен по-прежнему нормирует товары на основе богатства.",
      quote: "Вы не можете просто выбрать то, что хотите; вас тоже должны выбрать.",
      author: "Элвин Рот, лауреат Нобелевской премии",
      p2: "Для повседневных товаров ядро использует A-CEEI. У вас есть бюджет «Кредитов Soma». Система рассчитывает справедливое распределение.",
      interactiveTitle: "Двигатель распределения",
      oldBtn: "Старое: Цена",
      newBtn: "Новое: A-CEEI",
      oldLabel: "Высокое богатство vs Низкое богатство",
      oldQuote: "\"Я покупаю это, потому что могу себе это позволить.\"",
      oldDesc: "Распределение на основе меновой стоимости.",
      newLabel: "Без глютена vs Любитель мяса",
      newQuote: "\"Я выбираю это, потому что предпочитаю.\"",
      newDesc: "Распределение на основе потребительной стоимости.",
      p3: "Поскольку все начинают с равных наделов, результат «свободен от зависти». Он отражает эффективность рынка без жестокости неравенства."
    },
    meaning: {
      title: "Кризис смысла",
      p1: "Если роботы работают, что делают люди? Soma говорит: «Выживание гарантировано; статус зарабатывается».",
      ecoCare: "Экологическая забота",
      ecoDesc: "Лесовосстановление и мониторинг биоразнообразия.",
      socCare: "Социальная забота",
      socDesc: "Воспитание детей, уход за пожилыми, образование и искусство.",
      p2: "Людям нужно достоинство. В Soma вы зарабатываете «Soma Plus», внося вклад в общее дело."
    },
    thermo: {
      title: "Жесткие ограничения",
      p1: "Экономика — это подсистема биосферы. Нельзя договориться с физикой.",
      cardTitle: "Правила Дейли",
      rules: [
        "Возобновляемый предел: Урожай ≤ Регенерация.",
        "Предел загрязнения: Отходы ≤ Поглощение.",
        "Невозобновляемый предел: Истощение ≤ Замещение."
      ],
      p2: "Если потребление угрожает этим пределам, «экологическая стоимость» автоматически резко возрастает."
    },
    transition: {
      title: "Переход",
      p1: "Стратегия известна как «Фикус-душитель». Мы строим новую систему вокруг старой.",
      p2: "Мы начинаем с малого. Используем рынки соответствия для продовольственных банков."
    },
    footer: {
      ready: "Готовы к обновлению?",
      desc: "soma_kernel_5.5 — это открытое приглашение закодировать будущее.",
      credits: "Синтезировано из технической спецификации 'soma_kernel_5.5'."
    }
  },
  ja: {
    nav: { intro: "崩壊", kernel: "カーネル", governance: "ガバナンス", allocation: "配分", meaning: "意味", transition: "移行" },
    headline: "次なる経済のソースコード",
    subhead: "無限の成長と人間の労働という二つのエンジンが機能不全に陥る中、ノーベル賞受賞科学に基づく新しいオペレーティングシステムが出口を提供します。",
    date: "2025年12月4日 • 'soma_kernel_5.5'に基づく",
    intro: {
      p1: "現代世界の根本的な欠陥は政治的なものではなく、構造的なものです。私たちは21世紀のハードウェア上で19世紀の経済OSを動かしています。レガシーカーネルである新古典派資本主義は、空虚な土地と希少な労働力の世界のために書かれました。",
      p2: "両方の仮定は失敗しました。熱力学は無限の成長に終わりを告げ、AIは労働と生存のつながりを断ち切っています。システムはエラーを吐き出しています：気候崩壊、極度の不平等、そして意味の危機。",
      p3: "パッチは必要ありません。書き直しが必要です。",
      p4: "soma_kernel_5.5を入力してください。これはマニフェストではなく、ポスト資本主義社会のための技術仕様です。これは「見えざる手」に代わる「目に見えるアルゴリズム」を設計します。"
    },
    kernel: {
      title: "新しいカーネル",
      p1: "その核心において、Somaは計算ガバナンスシステムです。GDP（貨幣の流通速度を測定する）という指標を捨て、「ケイパビリティ集合」と呼ばれる指標を採用します。",
      cardTitle: "システム目的",
      goal: "目標：個人の「実質的な自由」（健康、教育、創造性）を最大化すること。",
      constraint: "制約：エントロピー。経済は生物圏の再生能力の範囲内で運営されなければなりません。"
    },
    governance: {
      title: "サブルーチン1：ガバナンス",
      p1: "コモンズの悲劇は神話です。エリノア・オストロムは、コミュニティが資源を持続可能に自己管理できることを証明しました。",
      p2: "Somaはオストロムの原則をデジタル法にハードコードします。ルールは静的なテキストではなく、コードとしてのルールです。",
      interactiveTitle: "インタラクティブ：ガバナンスの転換",
      steps: [
        { title: "レガシーシステム", desc: "中央集権的な権威がルールを強制します。地域のニュアンスは無視されます。遵守率は低いです。" },
        { title: "多中心的コア", desc: "入れ子になったガバナンス層。近隣地域が公園を管理し、バイオリージョンが流域を管理します。" },
        { title: "Somaの実装", desc: "ユーザーは液体民主主義を通じて直接ルールに投票します。AIは中立的な監視役として機能します。" }
      ]
    },
    allocation: {
      title: "サブルーチン2：配分",
      p1: "値札の終わり。AIによる豊かさの世界でも、価格メカニズムは依然として富に基づいて財を配給しています。",
      quote: "欲しいものを単に選ぶことはできません。あなたも選ばれなければなりません。",
      author: "アルビン・ロス、ノーベル賞受賞者",
      p2: "日用品の場合、カーネルはA-CEEIを使用します。あなたは「Somaクレジット」の予算を持っています。システムは需要と供給が一致する公平な配分を計算します。",
      interactiveTitle: "配分エンジン",
      oldBtn: "旧：価格",
      newBtn: "新：A-CEEI",
      oldLabel: "高富裕層 vs 低富裕層",
      oldQuote: "「買えるから買う。」",
      oldDesc: "交換価値に基づく配分。必要性を無視します。",
      newLabel: "グルテンフリー vs 肉好き",
      newQuote: "「好きだから選ぶ。」",
      newDesc: "使用価値に基づく配分。市場は公平性を通じて清算されます。",
      p3: "誰もが平等な賦与から始まるため、結果は「妬みなし」となります。不平等の残酷さなしに市場の効率性を捉えます。"
    },
    meaning: {
      title: "意味の危機",
      p1: "ロボットが働くなら、人間は何をするのか？ レガシーカーネルは「働かざる者食うべからず」と言います。Somaは「生存は保証され、地位は獲得される」と言います。",
      ecoCare: "生態学的ケア",
      ecoDesc: "再植林、生物多様性の監視、代謝の亀裂の修復。",
      socCare: "社会的ケア",
      socDesc: "子育て、高齢者介護、教育、芸術。",
      p2: "人間には尊厳が必要です。Somaでは、コモンズに貢献することで「Soma Plus」（社会資本）を獲得します。"
    },
    thermo: {
      title: "ハード制約",
      p1: "経済は生物圏のサブシステムです。物理学と交渉することはできません。",
      cardTitle: "デイリーの法則",
      rules: [
        "再生可能限界：収穫 ≤ 再生。",
        "汚染限界：廃棄物 ≤ 吸収。",
        "非再生可能限界：枯渇 ≤ 代替。"
      ],
      p2: "消費がこれらの限界を脅かすと、「生態学的コスト」が自動的に急騰します。"
    },
    transition: {
      title: "移行",
      p1: "この戦略は「締め殺しのイチジク」として知られています。古いシステムの周りに新しいシステムを構築します。",
      p2: "小さく始めます。フードバンクにマッチング市場を使用します。これらの「一貫性の島々」が優位性を証明するにつれて、それらは拡大します。"
    },
    footer: {
      ready: "アップグレードの準備はできましたか？",
      desc: "soma_kernel_5.5は、未来をコードするための公開招待状です。",
      credits: "'soma_kernel_5.5'技術仕様から合成。"
    }
  },
  de: {
    nav: { intro: "Der Absturz", kernel: "Der Kernel", governance: "Verwaltung", allocation: "Zuteilung", meaning: "Sinn", transition: "Übergang" },
    headline: "Der Quellcode der nächsten Wirtschaft",
    subhead: "Da die Zwillingsmotoren des unendlichen Wachstums und der menschlichen Arbeit stottern, bietet ein neues Betriebssystem – basierend auf Nobelpreis-gekrönter Wissenschaft – einen Ausweg.",
    date: "4. Dez. 2025 • Basierend auf 'soma_kernel_5.5'",
    intro: {
      p1: "Der fundamentale Defekt der modernen Welt ist nicht politisch, sondern architektonisch. Wir betreiben ein wirtschaftliches Betriebssystem des 19. Jahrhunderts auf Hardware des 21. Jahrhunderts.",
      p2: "Beide Annahmen sind gescheitert. Die Thermodynamik hat das Ende des unendlichen Wachstums eingeläutet, und KI trennt die Verbindung zwischen Arbeit und Überleben.",
      p3: "Wir brauchen keinen Patch. Wir brauchen eine Neuschreibung.",
      p4: "Geben Sie soma_kernel_5.5 ein. Es ist kein Manifest, sondern eine technische Spezifikation für eine postkapitalistische Gesellschaft."
    },
    kernel: {
      title: "Der neue Kernel",
      p1: "Im Herzen ist Soma ein computergestütztes Verwaltungssystem. Es gibt die Metrik des BIP zugunsten einer Metrik namens Befähigungsset auf.",
      cardTitle: "Systemziel",
      goal: "Ziel: Maximierung der 'substanziellen Freiheiten' des Einzelnen.",
      constraint: "Einschränkung: Entropie. Die Wirtschaft muss innerhalb der regenerativen Grenzen der Biosphäre arbeiten."
    },
    governance: {
      title: "Unterprogramm 1: Verwaltung",
      p1: "Die Tragödie des Gemeinguts ist ein Mythos. Elinor Ostrom hat bewiesen, dass Gemeinschaften Ressourcen nachhaltig selbst verwalten können.",
      p2: "Soma codiert Ostroms Prinzipien fest in digitales Recht. Regeln sind kein statischer Text; sie sind Regeln als Code.",
      interactiveTitle: "Interaktiv: Der Verwaltungswechsel",
      steps: [
        { title: "Altsystem", desc: "Zentralisierte Autorität erzwingt Regeln. Lokale Nuancen werden ignoriert." },
        { title: "Polyzentrischer Kern", desc: "Verschachtelte Verwaltungsebenen. Nachbarschaften verwalten Parks." },
        { title: "Soma-Implementierung", desc: "Benutzer stimmen über Regeln direkt via Liquid Democracy ab. KI agiert als neutraler Monitor." }
      ]
    },
    allocation: {
      title: "Unterprogramm 2: Zuteilung",
      p1: "Das Ende des Preisschilds. In einer Welt des KI-Überflusses rationiert der Preismechanismus Waren immer noch basierend auf Reichtum.",
      quote: "Sie können nicht einfach wählen, was Sie wollen; Sie müssen auch gewählt werden.",
      author: "Alvin Roth, Nobelpreisträger",
      p2: "Für tägliche Güter verwendet der Kernel A-CEEI. Sie haben ein Budget an 'Soma-Credits'. Das System berechnet eine faire Verteilung.",
      interactiveTitle: "Die Zuteilungsmaschine",
      oldBtn: "Alt: Preis",
      newBtn: "Neu: A-CEEI",
      oldLabel: "Hoher Reichtum vs. Niedriger Reichtum",
      oldQuote: "\"Ich kaufe es, weil ich es mir leisten kann.\"",
      oldDesc: "Zuteilung basierend auf Tauschwert.",
      newLabel: "Glutenfrei vs. Fleischliebhaber",
      newQuote: "\"Ich wähle es, weil ich es bevorzuge.\"",
      newDesc: "Zuteilung basierend auf Gebrauchswert.",
      p3: "Da jeder mit gleichen Ausstattungen beginnt, ist das Ergebnis 'neidfrei'. Es erfasst die Effizienz des Marktes ohne die Brutalität der Ungleichheit."
    },
    meaning: {
      title: "Die Sinnkrise",
      p1: "Wenn Roboter arbeiten, was tun Menschen? Soma sagt: 'Überleben ist garantiert; Status wird verdient'.",
      ecoCare: "Ökologische Pflege",
      ecoDesc: "Aufforstung und Überwachung der Biodiversität.",
      socCare: "Soziale Pflege",
      socDesc: "Kindererziehung, Altenpflege, Bildung und Kunst.",
      p2: "Menschen brauchen Würde. In Soma verdienen Sie 'Soma Plus', indem Sie zum Gemeingut beitragen."
    },
    thermo: {
      title: "Die harten Einschränkungen",
      p1: "Wirtschaft ist ein Subsystem der Biosphäre. Man kann nicht mit Physik verhandeln.",
      cardTitle: "Die Daly-Regeln",
      rules: [
        "Erneuerbares Limit: Ernte ≤ Regeneration.",
        "Verschmutzungslimit: Abfall ≤ Absorption.",
        "Nicht erneuerbares Limit: Erschöpfung ≤ Substitution."
      ],
      p2: "Wenn der Konsum diese Grenzen bedroht, steigen die 'ökologischen Kosten' automatisch an."
    },
    transition: {
      title: "Der Übergang",
      p1: "Die Strategie ist als 'Würgefeige' bekannt. Wir bauen das neue System um das alte herum.",
      p2: "Wir fangen klein an. Verwendung von Matching Markets für Lebensmittelbanken."
    },
    footer: {
      ready: "Bereit für das Upgrade?",
      desc: "soma_kernel_5.5 ist eine offene Einladung, die Zukunft zu codieren.",
      credits: "Synthetisiert aus der technischen Spezifikation 'soma_kernel_5.5'."
    }
  }
};

const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文 (Chinese)' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية (Arabic)' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'ru', label: 'Русский' },
  { code: 'ja', label: '日本語 (Japanese)' },
  { code: 'de', label: 'Deutsch' }
];

// --- Sub-Components ---

const Section = ({ id, title, children, className = "", isDark }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-0 max-w-3xl mx-auto ${className}`}>
    {title && (
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-8 border-l-4 border-emerald-600 pl-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        {title}
      </h2>
    )}
    {children}
  </section>
);

const PullQuote = ({ text, author, isDark }) => (
  <div className={`my-12 relative p-8 border-y ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
    <div className={`font-serif text-2xl md:text-3xl italic leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
      "{text}"
    </div>
    {author && (
      <div className="mt-4 text-sm font-sans font-semibold text-gray-500 tracking-widest uppercase">
        — {author}
      </div>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, children, isDark }) => (
  <div className={`border shadow-sm rounded-lg p-6 my-8 hover:shadow-md transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-full ${isDark ? 'bg-emerald-900/30' : 'bg-emerald-50'}`}>
        <Icon className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`} />
      </div>
      <h3 className={`font-sans font-bold uppercase tracking-wide text-sm ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{title}</h3>
    </div>
    <div className={`font-sans leading-relaxed text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      {children}
    </div>
  </div>
);

const GovernanceVisualizer = ({ t, isDark }) => {
  const [activeTab, setActiveTab] = useState(0);
  const steps = t.governance.steps;
  
  // Dynamic color logic for steps based on theme
  const getStepColors = (idx) => {
    const isSelected = activeTab === idx;
    if (isDark) {
      if (idx === 0) return isSelected ? 'bg-slate-800 text-red-400 border-red-500' : 'text-gray-400 hover:bg-slate-800 border-transparent';
      if (idx === 1) return isSelected ? 'bg-slate-800 text-blue-400 border-blue-500' : 'text-gray-400 hover:bg-slate-800 border-transparent';
      return isSelected ? 'bg-slate-800 text-emerald-400 border-emerald-500' : 'text-gray-400 hover:bg-slate-800 border-transparent';
    } else {
      // Light mode logic
      if (isSelected) return 'bg-white text-emerald-900 border-emerald-600';
      return 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-transparent';
    }
  };

  const getPanelColor = (idx) => {
    if (isDark) return 'bg-slate-800 border-slate-700';
    if (idx === 0) return 'bg-red-50 border-red-100';
    if (idx === 1) return 'bg-blue-50 border-blue-100';
    return 'bg-emerald-50 border-emerald-100';
  };

  return (
    <div className={`my-12 border rounded-xl overflow-hidden transition-colors ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
      <div className={`border-b p-4 font-sans text-xs font-bold uppercase tracking-widest ${isDark ? 'bg-slate-900 border-slate-700 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
        {t.governance.interactiveTitle}
      </div>
      <div className="flex flex-col md:flex-row">
        <div className={`flex md:flex-col border-b md:border-b-0 md:border-r w-full md:w-1/3 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-gray-200'}`}>
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left text-sm font-medium transition-colors duration-200 border-l-4 ${getStepColors(idx)}`}
            >
              {step.title}
            </button>
          ))}
        </div>
        <div className={`p-8 w-full md:w-2/3 transition-colors duration-500 ${getPanelColor(activeTab)}`}>
          <h4 className={`font-serif font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{steps[activeTab].title}</h4>
          <p className={`font-sans leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{steps[activeTab].desc}</p>
        </div>
      </div>
    </div>
  );
};

const AllocationVisualizer = ({ t }) => {
  const [stage, setStage] = useState('price');
  
  return (
    <div className="my-12 bg-slate-900 text-white rounded-xl p-8 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-sans font-bold uppercase tracking-widest text-emerald-400 text-sm">{t.allocation.interactiveTitle}</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setStage('price')}
            className={`px-3 py-1 text-xs rounded-full transition-all ${stage === 'price' ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-400'}`}
          >
            {t.allocation.oldBtn}
          </button>
          <button 
            onClick={() => setStage('aceei')}
            className={`px-3 py-1 text-xs rounded-full transition-all ${stage === 'aceei' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            {t.allocation.newBtn}
          </button>
        </div>
      </div>

      <div className="relative h-64 bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-4">
        {stage === 'price' ? (
          <div className="text-center animate-fade-in">
            <div className="flex justify-center gap-8 mb-4 opacity-50">
              <div className="flex flex-col items-center">
                <span className="text-4xl">💰</span>
                <span className="text-xs mt-2 text-red-200">{t.allocation.oldLabel.split(' vs ')[0]}</span>
              </div>
              <div className="flex flex-col items-center grayscale">
                <span className="text-4xl">💵</span>
                <span className="text-xs mt-2 text-slate-400">{t.allocation.oldLabel.split(' vs ')[1]}</span>
              </div>
            </div>
            <p className="text-red-400 font-serif text-lg">{t.allocation.oldQuote}</p>
            <p className="text-slate-400 text-sm mt-2">{t.allocation.oldDesc}</p>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
             <div className="flex justify-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-500/20 p-3 rounded-full border border-emerald-500/50">
                  <span className="text-2xl">🍎</span>
                </div>
                <span className="text-xs mt-2 text-emerald-400">{t.allocation.newLabel.split(' vs ')[0]}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/50">
                  <span className="text-2xl">🥩</span>
                </div>
                <span className="text-xs mt-2 text-blue-400">{t.allocation.newLabel.split(' vs ')[1]}</span>
              </div>
            </div>
            <p className="text-emerald-400 font-serif text-lg">{t.allocation.newQuote}</p>
            <p className="text-slate-400 text-sm mt-2">{t.allocation.newDesc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function SomaFeature() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setReadingProgress(Math.min(Math.max(scroll, 0), 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set direction for Arabic
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang] || translations['en'];

  const navLinks = [
    { id: 'intro', label: t.nav.intro },
    { id: 'kernel', label: t.nav.kernel },
    { id: 'governance', label: t.nav.governance },
    { id: 'allocation', label: t.nav.allocation },
    { id: 'meaning', label: t.nav.meaning },
    { id: 'transition', label: t.nav.transition },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const bgColor = isDark ? 'bg-slate-950' : 'bg-[#FDFBF7]';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-800';
  const headingColor = isDark ? 'text-gray-100' : 'text-gray-900';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgColor} ${textColor} selection:bg-emerald-200`}>
      {/* Progress Bar */}
      <div className={`fixed top-0 left-0 h-1 z-50 ${isDark ? 'bg-slate-800' : 'bg-gray-200'} w-full`}>
        <div 
          className="h-full bg-emerald-600 transition-all duration-100 ease-out"
          style={{ width: `${readingProgress * 100}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center transition-colors duration-500 ${isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-[#FDFBF7]/90 border-gray-200/50'}`}>
        <div className={`font-serif font-bold text-xl tracking-tighter flex items-center gap-2 ${headingColor}`}>
          <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
          soma_kernel_5.5
        </div>
        
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-emerald-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-gray-100 text-slate-600'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-2 rounded-lg transition-colors ${isDark ? 'hover:bg-slate-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            
            {isLangMenuOpen && (
              <div className={`absolute top-full ${t.dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-48 shadow-xl rounded-xl overflow-hidden border z-50 animate-in fade-in zoom-in-95 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'}`}>
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between ${lang === l.code ? 'text-emerald-600 bg-emerald-50/10' : isDark ? 'text-gray-300 hover:bg-slate-800' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {l.label}
                    {lang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className={`md:hidden ${headingColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-30 pt-20 px-6 animate-fade-in-down ${bgColor}`}>
          <div className="flex flex-col gap-6">
             {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-2xl font-serif text-left ${headingColor}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Header / Hero */}
      <header className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
          soma_kernel_5.5
        </div>
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight ${headingColor}`}>
          {t.headline}
        </h1>
        <p className={`text-xl md:text-2xl font-serif leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.subhead}
        </p>
        <div className="mt-8 flex justify-center gap-4 text-sm font-sans uppercase tracking-wider text-gray-500">
          {t.date}
        </div>
      </header>

      {/* Main Content */}
      <main className={`font-serif text-lg md:text-xl leading-loose ${textColor}`}>
        
        {/* Intro Section */}
        <Section id="intro" className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]" isDark={isDark}>
          <p className="mb-8">{t.intro.p1}</p>
          <p className="mb-8">{t.intro.p2}</p>
          <p className="mb-8">{t.intro.p3}</p>
          <p>{t.intro.p4}</p>
        </Section>

        {/* The Kernel Section */}
        <Section id="kernel" title={t.kernel.title} isDark={isDark}>
          <p className="mb-8">{t.kernel.p1}</p>
          <InfoCard icon={Cpu} title={t.kernel.cardTitle} isDark={isDark}>
            <p><strong>{t.kernel.goal.split(':')[0]}:</strong> {t.kernel.goal.split(':')[1]}</p>
            <p className="mt-2"><strong>{t.kernel.constraint.split(':')[0]}:</strong> {t.kernel.constraint.split(':')[1]}</p>
          </InfoCard>
        </Section>

        {/* Governance Section */}
        <Section id="governance" title={t.governance.title} isDark={isDark}>
          <p className="mb-8">{t.governance.p1}</p>
          <p className="mb-8">{t.governance.p2}</p>
          
          <GovernanceVisualizer t={t} isDark={isDark} />
        </Section>

        {/* Allocation Section */}
        <Section id="allocation" title={t.allocation.title} isDark={isDark}>
          <p className="mb-8">{t.allocation.p1}</p>
          
          <PullQuote 
            text={t.allocation.quote}
            author={t.allocation.author}
            isDark={isDark}
          />

          <p className="mb-8">{t.allocation.p2}</p>

          <AllocationVisualizer t={t} />
          
          <p className="mb-8">{t.allocation.p3}</p>
        </Section>

        {/* Meaning Section */}
        <Section id="meaning" title={t.meaning.title} isDark={isDark}>
          <p className="mb-8">{t.meaning.p1}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className={`p-6 rounded-lg border ${isDark ? 'bg-emerald-900/10 border-emerald-900/30' : 'bg-emerald-50 border-emerald-100'}`}>
              <div className={`flex items-center gap-3 mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>
                <Leaf className="w-6 h-6" />
                <h3 className="font-bold font-sans uppercase">{t.meaning.ecoCare}</h3>
              </div>
              <p className={`text-sm font-sans ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t.meaning.ecoDesc}</p>
            </div>
            <div className={`p-6 rounded-lg border ${isDark ? 'bg-blue-900/10 border-blue-900/30' : 'bg-blue-50 border-blue-100'}`}>
              <div className={`flex items-center gap-3 mb-3 ${isDark ? 'text-blue-400' : 'text-blue-800'}`}>
                <Users className="w-6 h-6" />
                <h3 className="font-bold font-sans uppercase">{t.meaning.socCare}</h3>
              </div>
              <p className={`text-sm font-sans ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t.meaning.socDesc}</p>
            </div>
          </div>
          <p className="mb-8">{t.meaning.p2}</p>
        </Section>

         {/* Thermodynamics Section */}
         <Section id="thermodynamics" title={t.thermo.title} isDark={isDark}>
          <p className="mb-8">{t.thermo.p1}</p>
          <InfoCard icon={Zap} title={t.thermo.cardTitle} isDark={isDark}>
            <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
              {t.thermo.rules.map((rule, i) => (
                <li key={i}><strong>{rule.split(':')[0]}:</strong> {rule.split(':')[1]}</li>
              ))}
            </ul>
          </InfoCard>
          <p className="mb-8">{t.thermo.p2}</p>
        </Section>

        {/* Transition Section */}
        <Section id="transition" title={t.transition.title} isDark={isDark}>
          <p className="mb-8">{t.transition.p1}</p>
          <p className="mb-8">{t.transition.p2}</p>
        </Section>

        {/* Footer */}
        <footer className={`mt-24 py-16 font-sans text-center transition-colors ${isDark ? 'bg-black text-gray-500' : 'bg-gray-900 text-gray-400'}`}>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className={`text-2xl font-serif font-bold mb-6 ${isDark ? 'text-gray-200' : 'text-white'}`}>{t.footer.ready}</h2>
            <p className="mb-8 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className={`border-t pt-8 text-sm ${isDark ? 'border-gray-800' : 'border-gray-800'}`}>
              <p>{t.footer.credits}</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}