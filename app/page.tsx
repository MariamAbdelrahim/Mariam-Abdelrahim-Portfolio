"use client";

import { useEffect, useMemo, useState } from "react";

type Language = "en" | "ar";
type Theme = "light" | "dark";

const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      skills: "Skills",
      experience: "Experience",
      services: "Services",
      projects: "Projects",
      approach: "What to expect",
      contact: "Contact",
    },
    heroEyebrow: "Data • Insight • Impact",
    role: "Data Scientist",
    scroll: "Explore my work",
    aboutLabel: "About me",
    aboutTitle: "Connecting data with real business needs.",
    aboutOne:
      "I’m a Business Information Systems (BIS) student with a strong interest in data science and analytics. I use Python, Excel, Power BI, and Tableau to explore data, uncover meaningful patterns, and present insights through clear, engaging visualizations. I’m also developing my expertise in machine learning to build data-driven solutions that go beyond describing what happened and help anticipate what could happen next.",
    aboutTwo:
      "What sets me apart is my ability to connect technical analysis with real business needs. My BIS background helps me understand both data and the business context behind it, allowing me to transform complex information into practical insights and easy-to-understand solutions that support smarter decisions.",
    educationLabel: "Education",
    educationTitle: "A business foundation, powered by data.",
    degree: "Bachelor’s Degree in Business Information Systems (BIS)",
    university: "Suez University",
    years: "2024 — 2028",
    gpa: "GPA",
    skillsLabel: "Skills",
    skillsTitle: "Tools and strengths I bring to every project.",
    technical: "Technical skills",
    soft: "Soft skills",
    experienceLabel: "Experience",
    experienceTitle: "Learning by building, analyzing, and solving.",
    certificate: "View certificate",
    pythonTraining: "Programming Using Python",
    advancedTraining: "Advanced Data Analysis",
    nti: "National Telecommunication Institute (NTI)",
    pythonDate: "Aug — Sep 2025",
    advancedDate: "2026",
    hoursScore: "120 hours • Score 92%",
    pythonSkills:
      "Python fundamentals, OOP, functions, data structures, file handling, error handling, problem solving, and freelancing skills.",
    advancedSkills:
      "Python for data analysis, Pandas, NumPy, data cleaning, EDA, visualization, statistics, machine learning, preprocessing, model training, and evaluation.",
    servicesLabel: "Services",
    servicesTitle: "Practical data solutions, built around your goals.",
    projectsLabel: "Selected projects",
    projectsTitle: "Turning complex data into clear decisions.",
    viewProject: "View case study",
    downloadProject: "Download Power BI file",
    playDemo: "Play app demo",
    problem: "The challenge",
    contribution: "What I did",
    technologies: "Technologies",
    close: "Close",
    next: "Next",
    previous: "Previous",
    approachLabel: "What you can expect",
    approachTitle: "A thoughtful process from raw data to usable results.",
    contactLabel: "Contact",
    contactTitle: "Let’s turn your data into meaningful results.",
    contactText:
      "Have a project, opportunity, or data challenge in mind? I’d love to hear about it.",
    sendMessage: "Send message",
    whatsapp: "WhatsApp",
    phone: "Phone",
    linkedin: "LinkedIn",
    github: "GitHub",
    footer: "Designed around data, clarity, and meaningful impact.",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      education: "التعليم",
      skills: "المهارات",
      experience: "الخبرة",
      services: "الخدمات",
      projects: "المشاريع",
      approach: "ما يمكنك توقعه",
      contact: "التواصل",
    },
    heroEyebrow: "بيانات • رؤى • تأثير",
    role: "عالمة بيانات",
    scroll: "استكشف أعمالي",
    aboutLabel: "نبذة عني",
    aboutTitle: "أربط البيانات باحتياجات الأعمال الحقيقية.",
    aboutOne:
      "أنا طالبة في تخصص نظم معلومات الأعمال (BIS)، ولدي شغف بمجال علم البيانات وتحليلها. أستخدم Python وExcel وPower BI وTableau لاستكشاف البيانات، واكتشاف الأنماط المهمة، وعرض النتائج من خلال تقارير وتصوّرات واضحة وجذابة. كما أعمل على تطوير خبرتي في تعلّم الآلة لبناء حلول لا تكتفي بتوضيح ما حدث، بل تساعد أيضًا على توقّع ما قد يحدث مستقبلًا.",
    aboutTwo:
      "ما يميزني هو قدرتي على الربط بين التحليل التقني واحتياجات الأعمال الحقيقية. يساعدني تخصصي في فهم البيانات والسياق التجاري المحيط بها، مما يمكّنني من تحويل المعلومات المعقدة إلى رؤى عملية وحلول سهلة الفهم تدعم اتخاذ قرارات أكثر ذكاءً.",
    educationLabel: "التعليم",
    educationTitle: "أساس قوي في الأعمال، مدعوم بالبيانات.",
    degree: "بكالوريوس نظم معلومات الأعمال (BIS)",
    university: "جامعة السويس",
    years: "2024 — 2028",
    gpa: "المعدل التراكمي",
    skillsLabel: "المهارات",
    skillsTitle: "أدوات ونقاط قوة أضيفها لكل مشروع.",
    technical: "المهارات التقنية",
    soft: "المهارات الشخصية",
    experienceLabel: "الخبرة",
    experienceTitle: "أتعلّم من خلال البناء والتحليل وحل المشكلات.",
    certificate: "عرض الشهادة",
    pythonTraining: "البرمجة باستخدام Python",
    advancedTraining: "تحليل البيانات المتقدم",
    nti: "المعهد القومي للاتصالات (NTI)",
    pythonDate: "أغسطس — سبتمبر 2025",
    advancedDate: "2026",
    hoursScore: "120 ساعة • النتيجة 92%",
    pythonSkills:
      "أساسيات Python، البرمجة كائنية التوجه، الدوال، هياكل البيانات، التعامل مع الملفات والأخطاء، حل المشكلات، ومهارات العمل الحر.",
    advancedSkills:
      "تحليل البيانات باستخدام Python وPandas وNumPy، تنظيف البيانات، EDA، التصور البياني، الإحصاء، تعلم الآلة، تجهيز البيانات، تدريب النماذج وتقييمها.",
    servicesLabel: "الخدمات",
    servicesTitle: "حلول بيانات عملية تُبنى حول أهدافك.",
    projectsLabel: "مشاريع مختارة",
    projectsTitle: "أحوّل البيانات المعقدة إلى قرارات واضحة.",
    viewProject: "عرض تفاصيل المشروع",
    downloadProject: "تحميل ملف Power BI",
    playDemo: "تشغيل عرض التطبيق",
    problem: "التحدي",
    contribution: "ما قمت به",
    technologies: "التقنيات",
    close: "إغلاق",
    next: "التالي",
    previous: "السابق",
    approachLabel: "ما يمكنك توقعه",
    approachTitle: "منهجية مدروسة من البيانات الخام إلى نتائج قابلة للاستخدام.",
    contactLabel: "تواصلي معي",
    contactTitle: "لنحوّل بياناتك إلى نتائج ذات قيمة.",
    contactText:
      "هل لديك مشروع أو فرصة أو تحدٍ متعلق بالبيانات؟ يسعدني أن أسمع عنه.",
    sendMessage: "إرسال رسالة",
    whatsapp: "واتساب",
    phone: "الهاتف",
    linkedin: "لينكدإن",
    github: "جيت هب",
    footer: "صُمم حول البيانات والوضوح والتأثير الحقيقي.",
  },
};

const technicalSkills = [
  ["Py", "Python"],
  ["SQL", "SQL"],
  ["BI", "Power BI"],
  ["Tb", "Tableau"],
  ["XL", "Excel"],
  ["ML", "Machine Learning"],
  ["EDA", "Data Analysis"],
  ["σ", "Statistics"],
  ["St", "Streamlit"],
  ["Jn", "Jupyter Notebook"],
];

const softSkills = [
  ["01", { en: "Problem Solving", ar: "حل المشكلات" }],
  ["02", { en: "Critical Thinking", ar: "التفكير النقدي" }],
  ["03", { en: "Communication", ar: "التواصل" }],
  ["04", { en: "Attention to Detail", ar: "الاهتمام بالتفاصيل" }],
  ["05", { en: "Time Management", ar: "إدارة الوقت" }],
  ["06", { en: "Teamwork", ar: "العمل الجماعي" }],
] as const;

const services = [
  {
    number: "01",
    title: { en: "Data Analysis", ar: "تحليل البيانات" },
    text: {
      en: "Clean, explore, and analyze raw data to uncover patterns, answer business questions, and deliver clear insights in a documented notebook.",
      ar: "تنظيف واستكشاف وتحليل البيانات الخام لاكتشاف الأنماط والإجابة عن أسئلة العمل وتقديم رؤى واضحة داخل Notebook منظم.",
    },
  },
  {
    number: "02",
    title: { en: "Interactive Dashboards", ar: "لوحات معلومات تفاعلية" },
    text: {
      en: "Build intuitive Power BI and Tableau dashboards that make key metrics easy to monitor, explore, and understand.",
      ar: "بناء لوحات تفاعلية باستخدام Power BI وTableau تجعل متابعة المؤشرات واستكشافها وفهمها أكثر سهولة.",
    },
  },
  {
    number: "03",
    title: { en: "Machine Learning Solutions", ar: "حلول تعلم الآلة" },
    text: {
      en: "Prepare data, train and evaluate predictive models, and turn them into approachable Streamlit experiences when needed.",
      ar: "تجهيز البيانات وتدريب وتقييم النماذج التنبؤية وتحويلها عند الحاجة إلى تجارب سهلة الاستخدام باستخدام Streamlit.",
    },
  },
  {
    number: "04",
    title: { en: "Reports & Data Storytelling", ar: "التقارير وسرد البيانات" },
    text: {
      en: "Translate complex findings into structured reports and visual stories that support confident, informed decisions.",
      ar: "تحويل النتائج المعقدة إلى تقارير منظمة وقصص بصرية تساعد على اتخاذ قرارات واثقة ومدروسة.",
    },
  },
];

const approach = [
  {
    number: "01",
    title: { en: "From Raw Data to Real Value", ar: "من البيانات الخام إلى قيمة حقيقية" },
    text: {
      en: "I turn unstructured information into clear insights that help define the problem and guide better decisions.",
      ar: "أحوّل المعلومات غير المنظمة إلى رؤى واضحة تساعد على تحديد المشكلة وتوجيه قرارات أفضل.",
    },
  },
  {
    number: "02",
    title: { en: "End-to-End Data Solutions", ar: "حلول بيانات متكاملة" },
    text: {
      en: "From cleaning and exploration to modeling and presentation, every stage stays connected to the project goal.",
      ar: "من التنظيف والاستكشاف إلى بناء النماذج وعرض النتائج، تظل كل مرحلة مرتبطة بهدف المشروع.",
    },
  },
  {
    number: "03",
    title: { en: "Interactive, Usable Results", ar: "نتائج تفاعلية وسهلة الاستخدام" },
    text: {
      en: "Results are delivered through dashboards, reports, or Streamlit apps that make insights easy to explore.",
      ar: "تُقدّم النتائج من خلال لوحات أو تقارير أو تطبيقات Streamlit تجعل استكشاف الرؤى سهلًا.",
    },
  },
  {
    number: "04",
    title: { en: "Business & Technical Thinking", ar: "فهم تجاري وتقني" },
    text: {
      en: "My BIS background helps me balance analytical depth with the real business context behind the data.",
      ar: "يساعدني تخصص BIS على الموازنة بين عمق التحليل والسياق التجاري الحقيقي وراء البيانات.",
    },
  },
];

type Project = {
  title: string;
  category: { en: string; ar: string };
  image?: string;
  images?: string[];
  video?: string;
  download?: string;
  summary: { en: string; ar: string };
  problem: { en: string; ar: string };
  contribution: { en: string; ar: string };
  technologies: string[];
  metric?: string;
};

const projects: Project[] = [
  {
    title: "Super Store Sales & Profit Dashboard",
    category: { en: "Retail Analytics • Power BI", ar: "تحليلات التجزئة • Power BI" },
    image: "/assets/projects/super-store-1.png",
    images: [
      "/assets/projects/super-store-1.png",
      "/assets/projects/super-store-2.png",
    ],
    download:
      "/assets/documents/Super-Store-Sales-and-Profit-Dashboard.pbix",
    summary: {
      en: "An interactive retail dashboard that turns multi-year sales data into a clear view of revenue, profit, margin, returns, quantity, and discount performance.",
      ar: "لوحة تفاعلية تحوّل بيانات مبيعات لعدة سنوات إلى رؤية واضحة للإيرادات والأرباح والهامش والمرتجعات والكميات والخصومات.",
    },
    problem: {
      en: "Retail performance was spread across complex records, making it difficult to compare trends and quickly identify profitable or loss-making areas.",
      ar: "كان أداء المتجر موزعًا عبر سجلات معقدة، مما صعّب مقارنة الاتجاهات وتحديد المناطق والمنتجات الرابحة أو الخاسرة بسرعة.",
    },
    contribution: {
      en: "I cleaned and modeled the data, created DAX measures, and designed two interactive views to compare monthly and yearly performance, segments, regions, categories, discounts, and returns.",
      ar: "نظّفت البيانات ونمذجتها وأنشأت مقاييس DAX وصممت واجهتين تفاعليتين لمقارنة الأداء الشهري والسنوي والشرائح والمناطق والفئات والخصومات والمرتجعات.",
    },
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling", "Data Visualization"],
  },
  {
    title: "IBM HR Employee Attrition Analysis",
    category: { en: "HR Analytics • Power BI", ar: "تحليلات الموارد البشرية • Power BI" },
    image: "/assets/projects/ibm-hr-1.png",
    images: ["/assets/projects/ibm-hr-1.png", "/assets/projects/ibm-hr-2.png"],
    download: "/assets/documents/IBM-HR-Employee-Attrition-Dashboard.pbix",
    summary: {
      en: "A two-page dashboard built with the IBM HR Analytics dataset to explore workforce structure, income, and the factors associated with employee attrition.",
      ar: "لوحة من صفحتين مبنية على بيانات IBM HR Analytics لاستكشاف هيكل القوى العاملة والدخل والعوامل المرتبطة بتسرّب الموظفين.",
    },
    problem: {
      en: "HR teams need to understand where attrition is concentrated and which workplace factors may be contributing to employee turnover.",
      ar: "تحتاج فرق الموارد البشرية إلى معرفة أماكن تركز الاستقالات والعوامل الوظيفية التي قد تسهم في تسرب الموظفين.",
    },
    contribution: {
      en: "I transformed the dataset into interactive views that connect attrition with overtime, work-life balance, job involvement, distance, income, department, and job role.",
      ar: "حوّلت البيانات إلى واجهات تفاعلية تربط الاستقالات بالعمل الإضافي والتوازن بين الحياة والعمل والمشاركة الوظيفية والمسافة والدخل والقسم والدور الوظيفي.",
    },
    technologies: ["Power BI", "Power Query", "DAX", "HR Analytics", "Data Visualization"],
  },
  {
    title: "Pet Adoption Prediction & Insights App",
    category: { en: "Machine Learning • Streamlit", ar: "تعلم الآلة • Streamlit" },
    video: "/assets/video/pet-adoption-streamlit.mp4",
    summary: {
      en: "A predictive app that helps animal shelters understand adoption barriers, estimate adoption likelihood, and surface practical improvement suggestions.",
      ar: "تطبيق تنبؤي يساعد مراكز الإيواء على فهم عوائق التبنّي وتقدير احتماليته وتقديم اقتراحات عملية للتحسين.",
    },
    problem: {
      en: "Shelters need a clearer way to understand why some pets remain unadopted and which controllable factors can improve their chances.",
      ar: "تحتاج مراكز الإيواء إلى طريقة أوضح لفهم أسباب عدم تبنّي بعض الحيوانات والعوامل التي يمكن تحسينها لزيادة فرصها.",
    },
    contribution: {
      en: "I analyzed and cleaned 2,007 records, engineered features, trained and evaluated a Logistic Regression model, then connected it to a Streamlit interface that returns an adoption probability and improvement guidance.",
      ar: "حلّلت ونظّفت 2,007 سجل، وجهّزت الخصائص، ودرّبت وقيّمت نموذج Logistic Regression، ثم ربطته بواجهة Streamlit تعرض احتمالية التبنّي وتوصيات للتحسين.",
    },
    technologies: ["Python", "Pandas", "Seaborn", "Scikit-learn", "Streamlit"],
    metric: "89.8% accuracy",
  },
  {
    title: "Cookies Sales Dashboard",
    category: { en: "Sales Analytics • Power BI", ar: "تحليلات المبيعات • Power BI" },
    image: "/assets/projects/cookies-sales.png",
    images: ["/assets/projects/cookies-sales.png"],
    download: "/assets/documents/Cookies-Sales-Dashboard.pbix",
    summary: {
      en: "An interactive sales dashboard for tracking revenue, order volume, units sold, average selling price, customer activity, and product performance.",
      ar: "لوحة مبيعات تفاعلية لمتابعة الإيرادات وحجم الطلبات والوحدات المباعة ومتوسط سعر البيع ونشاط العملاء وأداء المنتجات.",
    },
    problem: {
      en: "The business needed a concise way to identify top products and customers, compare yearly performance, and spot underperforming items.",
      ar: "احتاج النشاط إلى طريقة مختصرة لتحديد أفضل المنتجات والعملاء ومقارنة الأداء السنوي واكتشاف المنتجات ضعيفة الأداء.",
    },
    contribution: {
      en: "I prepared the data, built the measures, and designed an interactive overview with product and year filters to support pricing, inventory, and marketing decisions.",
      ar: "جهّزت البيانات وبنيت المقاييس وصممت نظرة عامة تفاعلية بفلاتر للمنتج والسنة لدعم قرارات التسعير والمخزون والتسويق.",
    },
    technologies: ["Power BI", "Power Query", "DAX", "Sales Analytics", "Dashboard Design"],
  },
];

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [certificateOpen, setCertificateOpen] = useState(false);
  const t = copy[language];

  const navItems = useMemo(
    () =>
      Object.entries(t.nav).map(([id, label]) => ({
        id,
        label,
      })),
    [t.nav],
  );

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = saved ?? (systemDark ? "dark" : "light");
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [language]);

  useEffect(() => {
    document.body.style.overflow =
      selectedProject || certificateOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, certificateOpen]);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function openProject(project: Project) {
    setSelectedProject(project);
    setMediaIndex(0);
  }

  const currentMedia = selectedProject?.images?.[mediaIndex];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label={t.nav.home}>
          <span>M</span>
          <span className="brand-dot" />
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="utility-button language-button"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            aria-label={language === "en" ? "Switch to Arabic" : "التبديل للإنجليزية"}
          >
            {language === "en" ? "AR" : "EN"}
          </button>
          <button
            className="utility-button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
          >
            <span aria-hidden="true">{theme === "light" ? "◐" : "◑"}</span>
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="data-pattern" aria-hidden="true">
            <span className="data-line line-one" />
            <span className="data-line line-two" />
            <span className="data-node node-one" />
            <span className="data-node node-two" />
            <span className="data-node node-three" />
          </div>
          <div className="hero-content" data-reveal>
            <span className="eyebrow">{t.heroEyebrow}</span>
            <h1>Mariam Abdelrahim Rapee</h1>
            <p>{t.role}</p>
          </div>
          <div className="portrait-wrap" data-reveal>
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <img
                src="/assets/images/mariam-profile.jpg"
                alt="Mariam Abdelrahim Rapee"
              />
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo("about")}>
            <span>{t.scroll}</span>
            <span aria-hidden="true">↓</span>
          </button>
        </section>

        <section id="about" className="section about-section">
          <div className="section-number" aria-hidden="true">01</div>
          <SectionHeading label={t.aboutLabel} title={t.aboutTitle} />
          <div className="about-grid">
            <p data-reveal>{t.aboutOne}</p>
            <p data-reveal>{t.aboutTwo}</p>
          </div>
          <div className="focus-strip" data-reveal>
            <span>BUSINESS CONTEXT</span>
            <i />
            <span>DATA ANALYSIS</span>
            <i />
            <span>MACHINE LEARNING</span>
          </div>
        </section>

        <section id="education" className="section alt-section">
          <div className="section-number" aria-hidden="true">02</div>
          <SectionHeading label={t.educationLabel} title={t.educationTitle} />
          <article className="education-card" data-reveal>
            <div className="education-mark">SU</div>
            <div className="education-copy">
              <span>{t.years}</span>
              <h3>{t.degree}</h3>
              <p>{t.university}</p>
            </div>
            <div className="gpa-card">
              <span>{t.gpa}</span>
              <strong>3.7</strong>
              <small>/ 4.0</small>
            </div>
          </article>
        </section>

        <section id="skills" className="section">
          <div className="section-number" aria-hidden="true">03</div>
          <SectionHeading label={t.skillsLabel} title={t.skillsTitle} />
          <div className="skills-layout">
            <div className="skill-group" data-reveal>
              <h3>{t.technical}</h3>
              <div className="skill-grid technical-grid">
                {technicalSkills.map(([icon, name]) => (
                  <div className="skill-card" key={name}>
                    <span className="skill-icon">{icon}</span>
                    <strong>{name}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-group" data-reveal>
              <h3>{t.soft}</h3>
              <div className="skill-grid soft-grid">
                {softSkills.map(([number, name]) => (
                  <div className="skill-card soft-card" key={number}>
                    <span className="skill-index">{number}</span>
                    <strong>{name[language]}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section alt-section">
          <div className="section-number" aria-hidden="true">04</div>
          <SectionHeading label={t.experienceLabel} title={t.experienceTitle} />
          <div className="timeline">
            <article className="timeline-item" data-reveal>
              <div className="timeline-dot" />
              <div className="timeline-date">{t.pythonDate}</div>
              <div className="timeline-card">
                <span className="card-kicker">{t.nti}</span>
                <h3>{t.pythonTraining}</h3>
                <p>{t.pythonSkills}</p>
                <div className="timeline-meta">
                  <strong>{t.hoursScore}</strong>
                  <button className="text-button" onClick={() => setCertificateOpen(true)}>
                    {t.certificate} ↗
                  </button>
                </div>
              </div>
            </article>
            <article className="timeline-item" data-reveal>
              <div className="timeline-dot" />
              <div className="timeline-date">{t.advancedDate}</div>
              <div className="timeline-card">
                <span className="card-kicker">{t.nti}</span>
                <h3>{t.advancedTraining}</h3>
                <p>{t.advancedSkills}</p>
                <div className="tag-row">
                  <span>EDA</span>
                  <span>Machine Learning</span>
                  <span>Data Visualization</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-number" aria-hidden="true">05</div>
          <SectionHeading label={t.servicesLabel} title={t.servicesTitle} />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number} data-reveal>
                <span className="service-number">{service.number}</span>
                <h3>{service.title[language]}</h3>
                <p>{service.text[language]}</p>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-number" aria-hidden="true">06</div>
          <SectionHeading label={t.projectsLabel} title={t.projectsTitle} />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title} data-reveal>
                <button
                  className="project-media"
                  onClick={() => openProject(project)}
                  aria-label={`${t.viewProject}: ${project.title}`}
                >
                  {project.video ? (
                    <>
                      <video src={project.video} muted playsInline preload="metadata" />
                      <span className="play-button">▶</span>
                    </>
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                  <span className="project-count">0{index + 1}</span>
                  {project.metric && <strong className="metric-chip">{project.metric}</strong>}
                </button>
                <div className="project-copy">
                  <span className="card-kicker">{project.category[language]}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary[language]}</p>
                  <button className="text-button" onClick={() => openProject(project)}>
                    {t.viewProject} ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="section alt-section">
          <div className="section-number" aria-hidden="true">07</div>
          <SectionHeading label={t.approachLabel} title={t.approachTitle} />
          <div className="approach-list">
            {approach.map((item) => (
              <article className="approach-item" key={item.number} data-reveal>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title[language]}</h3>
                  <p>{item.text[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-orb" aria-hidden="true" />
          <div className="contact-copy" data-reveal>
            <span className="eyebrow">{t.contactLabel}</span>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <a
              className="primary-cta"
              href="mailto:mariamabdelrahim38@gmail.com?subject=Data%20Project%20Inquiry"
            >
              {t.sendMessage} <span>↗</span>
            </a>
          </div>
          <div className="contact-grid" data-reveal>
            <a href="mailto:mariamabdelrahim38@gmail.com" className="contact-card">
              <span className="contact-icon">@</span>
              <span>
                <small>Email</small>
                <strong>mariamabdelrahim38@gmail.com</strong>
              </span>
            </a>
            <a
              href="https://wa.me/201282161630"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">W</span>
              <span>
                <small>{t.whatsapp}</small>
                <strong>+20 128 216 1630</strong>
              </span>
            </a>
            <a href="tel:+201282161630" className="contact-card">
              <span className="contact-icon">T</span>
              <span>
                <small>{t.phone}</small>
                <strong>+20 128 216 1630</strong>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mariam-abdelrahim-9ab262377"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">in</span>
              <span>
                <small>{t.linkedin}</small>
                <strong>Mariam Abdelrahim</strong>
              </span>
            </a>
            <a
              href="https://github.com/MariamAbdelrahim"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">GH</span>
              <span>
                <small>{t.github}</small>
                <strong>@MariamAbdelrahim</strong>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home" aria-label={t.nav.home}>
          <span>M</span>
          <span className="brand-dot" />
        </a>
        <p>{t.footer}</p>
        <span>© {new Date().getFullYear()} Mariam Abdelrahim Rapee</span>
      </footer>

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedProject(null);
          }}
        >
          <div className="project-modal" role="dialog" aria-modal="true">
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label={t.close}
            >
              ×
            </button>
            <div className="modal-media">
              {selectedProject.video ? (
                <video src={selectedProject.video} controls autoPlay playsInline />
              ) : (
                <img src={currentMedia ?? selectedProject.image} alt={selectedProject.title} />
              )}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <div className="media-controls">
                  <button
                    onClick={() =>
                      setMediaIndex(
                        (mediaIndex - 1 + selectedProject.images!.length) %
                          selectedProject.images!.length,
                      )
                    }
                  >
                    ← {t.previous}
                  </button>
                  <span>
                    {mediaIndex + 1} / {selectedProject.images.length}
                  </span>
                  <button
                    onClick={() =>
                      setMediaIndex((mediaIndex + 1) % selectedProject.images!.length)
                    }
                  >
                    {t.next} →
                  </button>
                </div>
              )}
            </div>
            <div className="modal-copy">
              <span className="card-kicker">{selectedProject.category[language]}</span>
              <h2>{selectedProject.title}</h2>
              <p className="modal-summary">{selectedProject.summary[language]}</p>
              <div className="case-block">
                <h3>{t.problem}</h3>
                <p>{selectedProject.problem[language]}</p>
              </div>
              <div className="case-block">
                <h3>{t.contribution}</h3>
                <p>{selectedProject.contribution[language]}</p>
              </div>
              <div className="case-block">
                <h3>{t.technologies}</h3>
                <div className="tag-row">
                  {selectedProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
              {selectedProject.download && (
                <a className="primary-cta compact" href={selectedProject.download} download>
                  {t.downloadProject} <span>↓</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {certificateOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setCertificateOpen(false);
          }}
        >
          <div className="certificate-modal" role="dialog" aria-modal="true">
            <div className="certificate-header">
              <div>
                <span className="card-kicker">NTI • 2025</span>
                <h2>{t.pythonTraining}</h2>
              </div>
              <button
                className="modal-close static"
                onClick={() => setCertificateOpen(false)}
                aria-label={t.close}
              >
                ×
              </button>
            </div>
            <iframe
              src="/assets/documents/nti-python-certificate.pdf"
              title="NTI Python Certificate"
            />
            <a
              className="primary-cta compact"
              href="/assets/documents/nti-python-certificate.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t.certificate} ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
