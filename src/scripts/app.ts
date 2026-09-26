// app.ts — bundled portfolio logic (was inline in index.html)
(function () {


// ============================================================
// TRANSLATIONS
// ============================================================
const I18N = {
    en: {
        'hero.tag': 'based in egypt &nbsp;🇪🇬',
        'hero.desc': "I'm a Computer & Systems Engineering student at Minya University building games, security tools, and practical tech. I teach, build, and break things — from Unity multiplayer games to Raspberry Pi hacks.",
        'hero.btn.work': 'View my work',
        'hero.btn.hire': 'Hire / Collaborate',
        'hero.btn.cv': 'Download CV',
        'hero.tools': 'Tools — Anime Scene Search',
        'about.title': 'About me',
        'about.p1': "I'm <strong>Mohamed Abdelaziz</strong>, a <strong>Computer & Systems Engineering</strong> student at <a href=\"https://www.minia.edu.eg\" target=\"_blank\" rel=\"noopener noreferrer\">Minya University</a>, passionate about game development, cybersecurity, and building cool things that actually work.",
        'about.p2': "I've shipped multiplayer Unity games, built AI assistants on tiny hardware, written Python automation tools, and explored both sides of cybersecurity. I like going deep on things that most people would just use off the shelf.",
        'about.p3': "When I'm not coding, I'm playing games, watching anime, or overclocking hardware to do things it absolutely shouldn't.",
        'about.currently': '// currently',
        'about.workLabel': 'Working on',
        'about.workVal': 'Game Dev & Security tools',
        'about.playLabel': 'Playing',
        'about.playVal': 'indie games + jams',
        'about.learnLabel': 'Learning',
        'about.learnVal': 'Cybersecurity / Flutter',
        'stat.location': 'location',
        'stat.locVal': 'Egypt 🇪🇬',
        'stat.role': 'role',
        'stat.roleVal': 'Engineering Student',
        'stat.org': 'org',
        'stat.orgVal': 'Minya University',
        'stat.langs': 'main langs',
        'stat.github': 'github',
        'stat.status': 'status',
        'stat.statusVal': 'available',
        'projects.title': 'Projects',
        'filter.all': 'All',
        'filter.games': 'Games',
        'filter.web': 'Web',
        'filter.apps': 'Apps',
        'filter.mobile': 'Mobile',
        'filter.security': 'Security',
        'filter.education': 'Education',
        'filter.misc': 'Misc',
        'projects.disclaimer': 'Security-related projects are strictly educational and for authorized, research use only.',
        'projects.viewAll': 'View all repositories on GitHub',
        'skills.title': 'Skills',
        'skills.unity': '2D/3D game dev, multiplayer with PUN2, OOP, physics systems, game jam submissions.',
        'skills.python': 'Automation, Raspberry Pi, Tkinter GUIs, media tools with OpenCV and MoviePy, scripting.',
        'skills.sec': 'Cisco certified, pentesting, red-team tooling research, phishing awareness, network security.',
        'skills.flutter': 'Mobile app development, anime info apps, cross-platform UI with Flutter.',
        'skills.rpi': 'Hardware hacking, overclocking, AI assistants, CO₂ filtration systems, IoT experiments.',
        'skills.web': 'Browser games, web apps, HTML/CSS/JS tools, Naruto clicker, weather apps.',
        'ach.title': 'Achievements',
        'ach.a1t': 'IntelliRoad — Smart Traffic Management (Capstone)',
        'ach.a1d': 'Designed an intelligent traffic-management system to reduce congestion and prioritize emergency vehicles — Python · YOLOv8 · OpenCV · SUMO.',
        'ach.a2t': 'Personal AI Assistant on a Raspberry Pi Zero 2 W',
        'ach.a2d': 'A voice AI assistant combining Python, Linux, embedded systems, and hardware/software integration on severely constrained hardware.',
        'ach.a3t': 'Purihookah — Air Filtration & CO₂ Reduction',
        'ach.a3d': 'Two-stage experimental air-filtration and CO₂ reduction prototype using liquid filtration, chemical absorption, Arduino, and air-quality sensors.',
        'ach.a4t': 'Competitive Science Results',
        'ach.a4d': '1st place national & 2nd in Africa at Physics Brawl (45th international), 186th international at Purple Comet, and Top 16 at the International Biology Bowl.',
        'ach.a5t': 'Game Development & Mentoring',
        'ach.a5d': 'Shipped games at Counterspell and itch.io jams with Unity/C#, mentored students as a Hack Club game dev mentor, and hosted school game jams with prize pools.',
        'ach.a6t': 'Python Media Toolbox',
        'ach.a6d': 'Custom media tools built with Tkinter, MoviePy, FFmpeg, and yt-dlp — converters, downloaders, and players with hand-built GUIs.',
        'ach.a7t': 'Solar Chimney Research',
        'ach.a7d': 'Engineering-design research on solar updraft towers for renewable energy — the kind of project that turns physics into power.',
        'contact.title': 'Get in touch',
        'contact.p': "Have a project idea, a security question, want to play a game together, or just want to talk tech? I'm always happy to hear from people.",
        'contact.copy': 'copy',
        'contact.copied': 'copied ✓',
        'form.name': 'Name',
        'form.namePh': 'Your name',
        'form.email': 'Email',
        'form.emailPh': 'your@email.com',
        'form.type': 'Subject',
        'form.typeOpt1': 'Collaboration / Project idea',
        'form.typeOpt2': 'Hiring / Job offer',
        'form.typeOpt3': 'General inquiry',
        'form.typeOpt4': 'Mentoring / Workshop',
        'form.message': 'Message',
        'form.messagePh': "What's on your mind?",
        'form.send': 'Send message',
        'more.title': 'More about me',
        'more.sub': "The personality part — what I listen to, play, and quote. Optional reading, but fun.",
        'more.quotesLabel': '// words to live by',
        'more.quotesTitle': 'Favorite quotes',
        'more.musicLabel': '// now playing',
        'more.musicTitle': "What I'm listening to",
        'more.playLabel': '// play',
        'more.playTitle': 'Want to play Maya?',
        'more.playDesc': "You can play Maya directly in the projects section.",
        'more.playBtn': 'Jump to projects',
        'footer.copy': '© 2026 Mohamed Abdelaziz · DsMans0021',
        'footer.hint': 'psst… press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>~</kbd>',
        nav: {
            about: 'about', projects: 'projects', skills: 'skills',
            achievements: 'achievements', contact: 'contact', more: 'more'
        }
    },
    ar: {
        'hero.tag': 'مقيم في مصر &nbsp;🇪🇬',
        'hero.desc': 'أنا طالب هندسة حاسبات في جامعة المنيا، أبني ألعابًا وأدوات أمان وتطبيقات عملية. أُعلّم، أبني، وأختبر — من ألعاب الشبكات في Unity إلى تجارب Raspberry Pi.',
        'hero.btn.work': 'شاهد أعمالي',
        'hero.btn.hire': 'وظّفني / تعاون معي',
        'hero.btn.cv': 'تحميل السيرة الذاتية',
        'hero.tools': 'الأدوات — البحث عن مشاهد الأنمي',
        'about.title': 'من أنا',
        'about.p1': 'أنا <strong>محمد عبدالعزيز</strong>، طالب <strong>هندسة حاسبات</strong> في <a href="https://www.minia.edu.eg" target="_blank" rel="noopener noreferrer">جامعة المنيا</a>، شغوف بتطوير الألعاب والأمن السيبراني وبناء أشياء رائعة تعمل فعلًا.',
        'about.p2': 'نشرت ألعاب Unity متعددة اللاعبين، وبنيت مساعدين بالذكاء الاصطناعي على أجهزة صغيرة، وبرمجت أدوات أتمتة بلغة بايثون، واستكشفت جانبي الأمن السيبراني. أحب التعمق في أشياء يكتفي معظم الناس باستخدامها من خارج الصندوق.',
        'about.p3': 'عندما لا أُبرمج، ألعب ألعاب الفيديو، أو أشاهد الأنمي، أو أرفع تردد الأجهزة لفعل ما لا يُفترض أن تفعله.',
        'about.currently': '// حاليًا',
        'about.workLabel': 'أعمل على',
        'about.workVal': 'تطوير الألعاب وأدوات الأمان',
        'about.playLabel': 'ألعب',
        'about.playVal': 'ألعاب مستقلة ومسابقات',
        'about.learnLabel': 'أتعلم',
        'about.learnVal': 'الأمن السيبراني / فلاتر',
        'stat.location': 'الموقع',
        'stat.locVal': 'مصر 🇪🇬',
        'stat.role': 'الدور',
        'stat.roleVal': 'طالب هندسة حاسبات',
        'stat.org': 'المنظمة',
        'stat.orgVal': 'جامعة المنيا',
        'stat.langs': 'اللغات الأساسية',
        'stat.github': 'جيت هب',
        'stat.status': 'الحالة',
        'stat.statusVal': 'متاح للعمل',
        'projects.title': 'المشاريع',
        'filter.all': 'الكل',
        'filter.games': 'ألعاب',
        'filter.web': 'ويب',
        'filter.apps': 'تطبيقات',
        'filter.mobile': 'موبايل',
        'filter.security': 'أمن',
        'filter.education': 'تعليم',
        'filter.misc': 'متنوع',
        'projects.disclaimer': 'المشاريع المتعلقة بالأمن هي لأغراض تعليمية وبحثية ومصرّحٍ بها فقط.',
        'projects.viewAll': 'عرض كل المشاريع على جيت هب',
        'skills.title': 'المهارات',
        'skills.unity': 'تطوير ألعاب 2D/3D، تعدد لاعبين عبر PUN2، برمجة كائنية، فيزياء، مشاركات في مسابقات الألعاب.',
        'skills.python': 'أتمتة، Raspberry Pi، واجهات Tkinter، أدوات وسائط بـ OpenCV وMoviePy، سكربتات.',
        'skills.sec': 'شهادة سيسكو، اختبار اختراق، أبحاث أدوات الفريق الأحمر، توعية بالتصيد، أمن الشبكات.',
        'skills.flutter': 'تطوير تطبيقات الموبايل، تطبيقات معلومات الأنمي، واجهات متعددة المنصات بفلاتر.',
        'skills.rpi': 'هندسة أجهزة، رفع تردد التشغيل، مساعدين بالذكاء الاصطناعي، أنظمة تنقية CO₂، تجارب إنترنت الأشياء.',
        'skills.web': 'ألعاب متصفح، تطبيقات ويب، أدوات HTML/CSS/JS، لعبة ناروتو، تطبيقات الطقس.',
        'ach.title': 'الإنجازات',
        'ach.a1t': 'IntelliRoad — نظام إدارة مرور ذكي (تخرّج STEM)',
        'ach.a1d': 'صممت نظامًا ذكيًا لإدارة المرور لتقليل الازدحام وإعطاء أولوية لمركبات الطوارئ — Python · YOLOv8 · OpenCV · SUMO.',
        'ach.a2t': 'مساعد ذكاء اصطناعي شخصي على Raspberry Pi Zero 2 W',
        'ach.a2d': 'مساعد صوتي يجمع بين Python وLinux والأنظمة المدمجة وتكامل العتاد مع البرمجيات على أجهزة محدودة جدًا.',
        'ach.a3t': 'Purihookah — تنقية هواء وتقليل CO₂',
        'ach.a3d': 'نموذج تجريبي من مرحلتين لتنقية الهواء وتقليل ثاني أكسيد الكربون باستخدام الترشيح السائل والامتصاص الكيميائي وArduino وحساسات جودة الهواء.',
        'ach.a4t': 'نتائج مسابقات علمية منافسة',
        'ach.a4d': 'المركز الأول وطنيًا والثاني في أفريقيا في Physics Brawl (المركز 45 عالميًا)، والمركز 186 عالميًا في Purple Comet، والوصول لـ Top 16 في International Biology Bowl.',
        'ach.a5t': 'تطوير الألعاب والتدريب',
        'ach.a5d': 'أصدرت ألعابًا في مسابقات Counterspell وitch.io بـ Unity/C#، ودربت طلابًا كمُرشد لتطوير الألعاب في Hack Club، ونظّمت مسابقات ألعاب مدرسية بجوائز.',
        'ach.a6t': 'صندوق أدوات وسائط بـ Python',
        'ach.a6d': 'أدوات وسائط مخصصة بُنية بـ Tkinter وMoviePy وFFmpeg وyt-dlp — محوّلات ومنزّلات ومشغّلات بواجهات مبنية يدويًا.',
        'ach.a7t': 'بحث علمي — مدخنة شمسية',
        'ach.a7d': 'بحث في تصميم الهندسة لأبراج التيار الصاعد الشمسي للطاقة المتجددة — النوع اللي بيحوّل الفيزياء إلى طاقة.',
        'contact.title': 'تواصل معي',
        'contact.p': 'لديك فكرة مشروع، أو سؤال أمني، أو تريد اللعب معًا، أو مجرد الحديث عن التقنية؟ يسعدني دائمًا أن أسمع منك.',
        'contact.copy': 'نسخ',
        'contact.copied': 'تم النسخ ✓',
        'form.name': 'الاسم',
        'form.namePh': 'اسمك الكريم',
        'form.email': 'البريد الإلكتروني',
        'form.emailPh': 'your@email.com',
        'form.type': 'الموضوع',
        'form.typeOpt1': 'تعاون / فكرة مشروع',
        'form.typeOpt2': 'توظيف / عرض عمل',
        'form.typeOpt3': 'استفسار عام',
        'form.typeOpt4': 'إرشاد / ورشة عمل',
        'form.message': 'الرسالة',
        'form.messagePh': 'ماذا يدور في ذهنك؟',
        'form.send': 'إرسال الرسالة',
        'more.title': 'المزيد عني',
        'more.sub': 'جزء الشخصية — ما أستمع إليه، وما ألعبه، وما أقتبس منه. قراءة اختيارية لكنها ممتعة.',
        'more.quotesLabel': '// أقوال أؤمن بها',
        'more.quotesTitle': 'أقوال مفضّلة',
        'more.musicLabel': '// يُشغّل الآن',
        'more.musicTitle': 'ما أستمع إليه',
        'more.playLabel': '// العب',
        'more.playTitle': 'تريد تجربة مايا؟',
        'more.playDesc': 'يمكنك لعب مايا مباشرة من قسم المشاريع.',
        'more.playBtn': 'الانتقال إلى المشاريع',
        'footer.copy': '© 2026 محمد عبدالعزيز · DsMans0021',
        'footer.hint': 'أسرار صغيرة… اضغط <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>~</kbd>',
        nav: {
            about: 'من أنا', projects: 'المشاريع', skills: 'المهارات',
            achievements: 'الإنجازات', contact: 'التواصل', more: 'المزيد'
        }
    }
};

// ============================================================
// LANGUAGE
// ============================================================
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' ? 'محمد عبدالعزيز | DsMans0021' : 'Mohamed Abdelaziz | DsMans0021';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = I18N[lang][el.dataset.i18n];
        if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const v = I18N[lang][el.dataset.i18nPh];
        if (v !== undefined) el.placeholder = v;
    });
    document.querySelectorAll('.nav-links a, .drawer-panel a').forEach(a => {
        const key = (a.getAttribute('href') || '').slice(1);
        if (key && I18N[lang].nav[key]) a.textContent = I18N[lang].nav[key];
    });
    document.getElementById('lang-label').textContent = lang === 'ar' ? 'EN' : 'العربية';
    document.getElementById('lang-toggle').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.querySelectorAll('.filter-btn[data-i18n]').forEach(btn => {
        const v = I18N[lang][btn.dataset.i18n];
        if (v !== undefined) btn.textContent = v;
    });
    cycleSubtitle(true);
    renderProjects();
    localStorage.setItem('lang', lang);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(currentLang === 'ar' ? 'en' : 'ar');
});

// ============================================================
// PROJECTS DATABASE
// ============================================================
let PROJECTS = [
    {
        name: 'This Website', category: 'web', status: 'completed', featured: true,
        lang: 'HTML · CSS · JS', icon: 'fa-solid fa-code',
        demo: 'https://dsmans0021.com/', code: 'https://github.com/DsMans0021/dsmans0021.github.io', case: null,
        desc: { en: 'The portfolio you are reading right now — fully bilingual EN/AR with RTL, a hidden terminal, 200+ quotes and live GitHub stats.', ar: 'الموقع اللي بتقرأ فيه دلوقتي — ثنائي اللغة كامل EN/AR مع RTL، ترمينال مخفي، أكثر من 200 اقتباس وإحصائيات GitHub حيّة.' }
    },
    {
        name: 'Maya', category: 'games', status: 'completed', featured: true,
        lang: 'C# · Unity', icon: 'fa-solid fa-gamepad',
        demo: 'https://itskareem.itch.io/maya', code: 'https://github.com/DsMans0021/Maya', case: null,
        desc: { en: 'A complete Unity game published on itch.io — custom C# mechanics and polished presentation.', ar: 'لعبة Unity كاملة منشورة على itch.io — آليات C# مخصصة وعرض مصقول.' }
    },
    {
        name: 'FPS Multiplayer Game', category: 'games', status: 'inprogress', featured: true,
        lang: 'C# · Unity · PUN2', icon: 'fa-solid fa-crosshairs',
        demo: null, code: 'https://github.com/DsMans0021/FPS-Game', case: null,
        desc: { en: 'Multiplayer FPS on Unity/C# — 2+ players over LAN or internet via PUN2 Photon networking.', ar: 'لعبة تصويب FPS متعددة اللاعبين بـ Unity/C# — لاعبون متعددون عبر LAN أو الإنترنت بشبكة PUN2 Photon.' }
    },
    {
        name: 'Anime App', category: 'mobile', status: 'completed', featured: true,
        lang: 'Dart · Flutter', icon: 'fa-solid fa-mobile-screen',
        demo: null, code: 'https://github.com/DsMans0021/Anime-App', case: null,
        desc: { en: 'A Flutter mobile app to browse anime info, search titles and explore deep details.', ar: 'تطبيق Flutter لتصفّح معلومات الأنمي والبحث عن العناوين واستكشاف التفاصيل.' }
    },
    {
        name: 'Naruto Clicker Game', category: 'games', status: 'completed', featured: false,
        lang: 'JavaScript', icon: 'fa-solid fa-hand-pointer',
        demo: null, code: 'https://github.com/DsMans0021/Naruto-game', case: null,
        desc: { en: 'A browser-based anime clicker game. Pick your character and keep clicking.', ar: 'لعبة نقر أنمي في المتصفح. اختار شخصيتك واستمر في النقر.' }
    },
    {
        name: 'Mission: XXI', category: 'games', status: 'inprogress', featured: false,
        lang: 'Unity · Game Design', icon: 'fa-solid fa-rocket',
        demo: null, code: 'https://github.com/DsMans0021/Mission-XXI', case: null,
        desc: { en: 'A space life-survival game set beyond Earth — storycraft meets survival mechanics.', ar: 'لعبة بقاء في الفضاء خارج الأرض — سرد القصة يلتقي بآليات البقاء.' }
    },
    {
        name: 'jump-star', category: 'games', status: 'completed', featured: false,
        lang: 'GDScript · Godot', icon: 'fa-solid fa-star',
        demo: null, code: 'https://github.com/DsMans0021/jump-star_dsmans0021', case: null,
        desc: { en: 'A chill Godot platformer built for a daydream — jump and float between stars.', ar: 'منصّبة Godot مريحة للتأمل — اقفز وحلّق بين النجوم.' }
    },
    {
        name: 'jump', category: 'games', status: 'completed', featured: false,
        lang: 'JavaScript', icon: 'fa-solid fa-angle-up',
        demo: null, code: 'https://github.com/DsMans0021/jump', case: null,
        desc: { en: 'A tiny browser jump game — one core mechanic and pure timing.', ar: 'لعبة قفز صغيرة في المتصفح — آلية واحدة وتوقيت محض.' }
    },
    {
        name: 'The_Coiner', category: 'games', status: 'completed', featured: false,
        lang: 'JavaScript', icon: 'fa-solid fa-coins',
        demo: null, code: 'https://github.com/DsMans0021/The_Coiner', case: null,
        desc: { en: 'A coin-chasing browser game — grab every coin before time runs out.', ar: 'لعبة مطاردة عملات في المتصفح — اجمع كل العملات قبل انتهاء الوقت.' }
    },
    {
        name: 'BOO-ME', category: 'games', status: 'completed', featured: false,
        lang: 'ASP.NET · C#', icon: 'fa-solid fa-ghost',
        demo: null, code: 'https://github.com/DsMans0021/BOO-ME---I', case: null,
        desc: { en: 'A spooky little boo! web game — do not flinch.', ar: 'لعبة ويب صغيرة مرعبة "بقّة!" — لا تنفعل.' }
    },
    {
        name: 'STEM Game Dev Project', category: 'games', status: 'completed', featured: false,
        lang: 'ASP.NET · C#', icon: 'fa-solid fa-terminal',
        demo: null, code: 'https://github.com/DsMans0021/The-Game-For-STEM-Game-Dev', case: null,
        desc: { en: 'A multiplayer game project built during the STEM Game Dev program — full-stack fun.', ar: 'مشروع لعبة جماعي مبني خلال برنامج STEM Game Dev — متعة برمجة كاملة.' }
    },
    {
        name: 'DsLooper0021', category: 'games', status: 'completed', featured: false,
        lang: 'GML · GameMaker', icon: 'fa-solid fa-circle-notch',
        demo: null, code: 'https://github.com/DsMans0021/DsLooper0021', case: null,
        desc: { en: 'A GameMaker loop-runner made for the CampFire jam — fast, tight and endless.', ar: 'لعبة جري حلقيّة بـ GameMaker صُنعت لمسابقة CampFire — سريعة ومحكمة وبلا نهاية.' }
    },
    {
        name: 'The Count of Monte Cristo', category: 'web', status: 'completed', featured: false,
        lang: 'HTML · CSS', icon: 'fa-solid fa-book',
        demo: null, code: 'https://github.com/DsMans0021/The-Count-of-Monte-Cristo', case: null,
        desc: { en: 'An interactive reading experience that brings the classic novel to the browser.', ar: 'تجربة قراءة تفاعلية تنقل الرواية الكلاسيكية إلى المتصفح.' }
    },
    {
        name: 'Intelliroad', category: 'web', status: 'completed', featured: false,
        lang: 'HTML · CSS', icon: 'fa-solid fa-road',
        demo: null, code: 'https://github.com/DsMans0021/Intelliroad', case: null,
        desc: { en: 'A web concept for smarter roads — data-driven and clean.', ar: 'مفهوم ويب لطرق أذكى — يعتمد على البيانات بشكل نظيف.' }
    },
    {
        name: 'Whiplash Prezi', category: 'web', status: 'completed', featured: false,
        lang: 'HTML · CSS', icon: 'fa-solid fa-chart-line',
        demo: null, code: 'https://github.com/DsMans0021/Whiplash-Prezi', case: null,
        desc: { en: 'A fast, motion-driven presentation page — pitch mode for anything.', ar: 'صفحة عرض تقديمي سريعة تعتمد على الحركة — وضع عرض لأي فكرة.' }
    },
    {
        name: 'Room Designer 0021', category: 'apps', status: 'completed', featured: false,
        lang: 'Python · Tkinter', icon: 'fa-solid fa-couch',
        demo: null, code: 'https://github.com/DsMans0021/Room-Designer0021', case: null,
        desc: { en: 'A feature-rich room layout designer built with Python and Tkinter.', ar: 'مصمّم تخطيط غرف تطبيق ثري مبني بـ Python وTkinter.' }
    },
    {
        name: 'Multi-Projects', category: 'apps', status: 'inprogress', featured: false,
        lang: 'Python', icon: 'fa-solid fa-layer-group',
        demo: null, code: 'https://github.com/DsMans0021/Multi-Projects', case: null,
        desc: { en: 'A growing collection of Python scripts and micro-tools — automation snacks.', ar: 'مجموعة متنامية من سكربتات وأدوات Python — وجبات أتمتة سريعة.' }
    },
    {
        name: 'Typy', category: 'apps', status: 'completed', featured: false,
        lang: 'Auto Typer', icon: 'fa-solid fa-keyboard',
        demo: null, code: 'https://github.com/DsMans0021/Typy', case: null,
        desc: { en: 'An auto-typer app that types your text for you at the speed you set.', ar: 'تطبيق طباعة تلقائية يكتب نصك نيابة عنك بالسرعة التي تحددها.' }
    },
    {
        name: 'Weather App', category: 'mobile', status: 'completed', featured: false,
        lang: 'HTML · CSS · JS', icon: 'fa-solid fa-cloud-sun',
        demo: null, code: 'https://github.com/DsMans0021/Weather-App', case: null,
        desc: { en: 'A clean weather app that tells you what the sky is doing where you are.', ar: 'تطبيق طقس أنيق يخبرك بما يحدث في السماء فوق مكانك.' }
    },
    {
        name: 'unity-webview', category: 'mobile', status: 'completed', featured: false,
        lang: 'Unity · Plugin', icon: 'fa-solid fa-globe',
        demo: null, code: 'https://github.com/DsMans0021/unity-webview', case: null,
        desc: { en: 'A Unity WebView plugin integration for embedding web content inside games.', ar: 'دمج إضافة Unity WebView لفحص محتوى الويب داخل الألعاب.' }
    },
    {
        name: 'Air Scrambler', category: 'security', status: 'inprogress', featured: false,
        lang: 'Hardware · RF', icon: 'fa-solid fa-tower-broadcast',
        demo: null, code: 'https://github.com/DsMans0021/Air-Scrambler', case: null,
        desc: { en: 'A hardware cybersecurity research tool that blocks and jams RF signals. Educational, authorized use only.', ar: 'أداة بحث أمني مادية تقوم بحجب وتشويش الإشارات اللاسلكية. للتعليم والاستخدام المصرّح فقط.' }
    },
    {
        name: 'WiFi Defense Toolkit', category: 'security', status: 'inprogress', featured: false,
        lang: 'Python · Networking', icon: 'fa-solid fa-wifi',
        demo: null, code: 'https://github.com/DsMans0021/fk-wifi-thiefs', case: null,
        desc: { en: 'A Windows network-defense toolkit — ARP monitoring, live device tracking and alerts against WiFi intruders. Authorized testing only.', ar: 'أدوات دفاع شبكية لـ Windows — مراقبة ARP وتتبع الأجهزة لحظيًا والتنبيه ضد متسللي WiFi. للاختبار المصرّح فقط.' }
    },
    {
        name: 'DsocialMans0021', category: 'security', status: 'inprogress', featured: false,
        lang: 'Python · OSINT', icon: 'fa-solid fa-users-slash',
        demo: null, code: 'https://github.com/DsMans0021/DsocialMans0021', case: null,
        desc: { en: 'A social-engineering research framework that combines 21 attack methods. Strictly educational — authorized research only.', ar: 'إطار بحثي في الهندسة الاجتماعية يجمع 21 أسلوبًا. تعليمي حصريًا — للبحث المصرّح فقط.' }
    },
    {
        name: 'Network Sentry', category: 'security', status: 'completed', featured: false,
        lang: 'Python', icon: 'fa-solid fa-network-wired',
        demo: null, code: 'https://github.com/DsMans0021/Network-Sentry', case: null,
        desc: { en: 'A network monitoring and security scanner that discovers local devices and tracks their activity.', ar: 'ماسح مراقبة شبكي وأمني يكتشف أجهزة الشبكة المحلية ويتتبع نشاطها.' }
    },
    {
        name: 'Telegram RAT Demo', category: 'security', status: 'archived', featured: false,
        lang: 'Python', icon: 'fa-solid fa-server',
        demo: null, code: 'https://github.com/DsMans0021/Telegrojan', case: null,
        desc: { en: 'An educational remote-administration prototype. Built for learning and authorized testing — research only.', ar: 'نموذج إدارة عن بُعد تعليمي. صُنع للتعلم والاختبار المصرّح — بحث فقط.' }
    },
    {
        name: 'BlackMamba (C2 Research)', category: 'security', status: 'inprogress', featured: false,
        lang: 'Security · C2', icon: 'fa-solid fa-shield-halved',
        demo: null, code: 'https://github.com/DsMans0021/BlackMamba', case: null,
        desc: { en: 'A command & control research framework inspired by real offensive tooling. Education and authorized testing only.', ar: 'إطار بحثي للتحكم والسيطرة مستوحى من الأدوات الهجومية الحقيقية. للتعليم والاختبار المصرّح فقط.' }
    },
    {
        name: 'zombie-zip', category: 'security', status: 'completed', featured: false,
        lang: 'ZIP · Research', icon: 'fa-solid fa-file-zipper',
        demo: null, code: 'https://github.com/DsMans0021/zombie-zip', case: null,
        desc: { en: 'A malformed ZIP that evades antivirus by lying about compression — studied for the defense side.', ar: 'ملف ZIP معطوب يتهرب من مكافح الفيروسات بالكذب حول الضغط — للدراسة الدفاعية.' }
    },
    {
        name: 'PayloadsAllTheThings', category: 'security', status: 'inprogress', featured: false,
        lang: 'Web · Research', icon: 'fa-solid fa-database',
        demo: null, code: 'https://github.com/DsMans0021/PayloadsAllTheThings', case: null,
        desc: { en: 'A security research collection of payloads and bypasses for web testing and CTFs. Educational.', ar: 'مجموعة بحثية أمنية من الـ payloads والحلول الملتوية لاختبار الويب وCTF. تعليمية.' }
    },
    {
        name: 'maigret — OSINT Username Hunter', category: 'security', status: 'archived', featured: false,
        lang: 'Python · OSINT', icon: 'fa-solid fa-magnifying-glass',
        demo: null, code: 'https://github.com/DsMans0021/maigret', case: null,
        desc: { en: 'A research fork of the OSINT username-dossier tool — 3000+ site lookup. Educational investigation only.', ar: 'نسخة بحثية من أداة OSINT لبناء ملفّات اسم للمستخدم عبر أكثر من 3000 موقع. للبحث التعليمي فقط.' }
    },
    {
        name: 'Chrome App-Bound Decryption', category: 'security', status: 'inprogress', featured: false,
        lang: 'Security · Research', icon: 'fa-solid fa-lock',
        demo: null, code: 'https://github.com/DsMans0021/Chrome-App-Bound-Encryption-Decryption', case: null,
        desc: { en: 'A research fork exploring Chromium App-Bound encryption — studied to understand browser credential defenses. Educational.', ar: 'نسخة بحثية تستكشف تشفير Chromium App-Bound — للفهم الدفاعي لبيانات المتصفح. تعليمية.' }
    },
    {
        name: 'Google Dork Cheatsheet', category: 'security', status: 'completed', featured: false,
        lang: 'OSINT · Research', icon: 'fa-solid fa-braces',
        demo: null, code: 'https://github.com/DsMans0021/Google-Dork-Cheatsheet', case: null,
        desc: { en: 'A cheatsheet of Google-dork operators for sharper search and recon. Educational.', ar: 'مرجع أوامر Google Dork لبحث واستطلاع أدق. لأغراض تعليمية.' }
    },
    {
        name: 'Google Dorking', category: 'security', status: 'completed', featured: false,
        lang: 'OSINT · Research', icon: 'fa-solid fa-braces',
        demo: null, code: 'https://github.com/DsMans0021/Google-Dorking', case: null,
        desc: { en: 'A research collection of Google dorking techniques — sharpening your search-fu. Educational.', ar: 'مجموعة بحثية لتقنيات Google dorking — لصقل مهارات البحث. تعليمية.' }
    },
    {
        name: 'Windows Kernel Exploits', category: 'security', status: 'archived', featured: false,
        lang: 'C · Research', icon: 'fa-solid fa-window-restore',
        demo: null, code: 'https://github.com/DsMans0021/windows-kernel-exploits', case: null,
        desc: { en: 'A study archive of Windows kernel privilege-escalation exploits — researched for defense. Educational only.', ar: 'أرشيف دراسي لثغرات رفع صلاحيات نواة Windows — يُدرس لأغراض الدفاع. تعليمي فقط.' }
    },
    {
        name: 'AIRAVAT', category: 'security', status: 'inprogress', featured: false,
        lang: 'Android · Research', icon: 'fa-solid fa-mobile-screen-button',
        demo: null, code: 'https://github.com/DsMans0021/AIRAVAT', case: null,
        desc: { en: 'A research fork of a mobile remote-admin framework — studied for mobile-threat awareness. Educational only.', ar: 'نسخة بحثية من إطار إدارة عن بُعد محمول — لدراسة تهديدات الجوال. تعليمية فقط.' }
    },
    {
        name: 'TheFatRat', category: 'security', status: 'archived', featured: false,
        lang: 'Python · Research', icon: 'fa-solid fa-bug',
        demo: null, code: 'https://github.com/DsMans0021/TheFatRat', case: null,
        desc: { en: 'A research fork of a post-exploitation generator — kept for defensive analysis. Educational only.', ar: 'نسخة بحثية من مولّد استغلال ما بعد الاختراق — للتحليل الدفاعي. تعليمية فقط.' }
    },
    {
        name: 'AndroRAT', category: 'security', status: 'archived', featured: false,
        lang: 'Java · Research', icon: 'fa-solid fa-bug',
        demo: null, code: 'https://github.com/DsMans0021/AndroRAT', case: null,
        desc: { en: 'A research fork of a classic Android remote-admin demo — analyzed for defense awareness. Educational only.', ar: 'نسخة بحثية من نموذج إدارة Android عن بُعد الكلاسيكي — للتحليل الدفاعي. تعليمية فقط.' }
    },
    {
        name: 'Blackeye', category: 'security', status: 'archived', featured: false,
        lang: 'Phishing · Research', icon: 'fa-solid fa-fish',
        demo: null, code: 'https://github.com/DsMans0021/Blackeye', case: null,
        desc: { en: 'A research fork of a phishing-kit demo — studied for defense awareness. Educational only.', ar: 'نسخة بحثية من نموذج اصطياد تجريبي — دُرست للوعي الدفاعي. تعليمية فقط.' }
    },
    {
        name: 'zphisher', category: 'security', status: 'archived', featured: false,
        lang: 'Phishing · Research', icon: 'fa-solid fa-fish',
        demo: null, code: 'https://github.com/DsMans0021/zphisher', case: null,
        desc: { en: 'A research fork of an automated phishing demo with 30+ templates — kept for defense research. Educational only.', ar: 'نسخة بحثية من أداة اصطياد آلية بأكثر من 30 قالبًا — محفوظة لبحث الدفاع. تعليمية فقط.' }
    },
    {
        name: 'QR-DUDE', category: 'security', status: 'archived', featured: false,
        lang: 'Phishing · Research', icon: 'fa-solid fa-qrcode',
        demo: null, code: 'https://github.com/DsMans0021/QR-DUDE', case: null,
        desc: { en: 'A research fork generating phishing landing pages with QR payloads — studied for awareness. Educational.', ar: 'نسخة بحثية تولّد صفحات اصطياد مع حمولة QR — للوعي الدفاعي. تعليمية.' }
    },
    {
        name: 'The Psychiatrist', category: 'education', status: 'completed', featured: false,
        lang: 'Web · Quiz', icon: 'fa-solid fa-brain',
        demo: null, code: 'https://github.com/DsMans0021/The-psychiatrist', case: null,
        desc: { en: 'A personality test built from scratch — 0% AI, 100% classic psychology logic.', ar: 'اختبار شخصية مبني من الصفر — 0% ذكاء اصطناعي، 100% منطق علم نفس كلاسيكي.' }
    },
    {
        name: 'Chemistry-G12', category: 'education', status: 'completed', featured: false,
        lang: 'Web · Interactive', icon: 'fa-solid fa-flask',
        demo: null, code: 'https://github.com/DsMans0021/Chemistry-G12', case: null,
        desc: { en: 'An interactive chemistry companion for Grade 12 students.', ar: 'مرجع كيمياء تفاعلي لطلاب الصف الثاني عشر.' }
    },
    {
        name: 'swot', category: 'education', status: 'completed', featured: false,
        lang: 'Kotlin · Android', icon: 'fa-solid fa-graduation-cap',
        demo: null, code: 'https://github.com/DsMans0021/swot', case: null,
        desc: { en: 'An Android tool that identifies university emails and domains to speed up institutional approvals.', ar: 'أداة Android تكتشف إيميلات ونطاقات الجامعات لتسريع الموافقات المؤسسية.' }
    },
    {
        name: 'DsMans0021 Infos', category: 'misc', status: 'completed', featured: false,
        lang: 'Profile', icon: 'fa-solid fa-id-badge',
        demo: null, code: 'https://github.com/DsMans0021/DsMans0021', case: null,
        desc: { en: 'My GitHub profile infos — the meta repo about the alias behind this site.', ar: 'معلومات ملفي على GitHub — الريبو الذي يوثق الألياس اللي ورا الموقع ده.' }
    },
    {
        name: 'blah-blah', category: 'misc', status: 'completed', featured: false,
        lang: 'Scratch', icon: 'fa-solid fa-flask-vial',
        demo: null, code: 'https://github.com/DsMans0021/blah-blah', case: null,
        desc: { en: 'A tiny scratch repo for quick experiments — a name as honest as its contents.', ar: 'ريبو تجارب صغير — اسم على مسمّى، مخصص للتجارب السريعة.' }
    },
    {
        name: 'Roader', category: 'misc', status: 'completed', featured: false,
        lang: 'Prototype', icon: 'fa-solid fa-seedling',
        demo: null, code: 'https://github.com/DsMans0021/Roader', case: null,
        desc: { en: 'An early-stage prototype playground — ideas in their first shape.', ar: 'ملعب نماذج أولية — أفكار في بدايتها.' }
    }
];

const STATUS_KEY = {
    completed: 'st-completed',
    inprogress: 'st-inprogress',
    archived: 'st-archived'
};

const STATUS_TEXT = {
    completed: { en: 'Completed', ar: 'مكتمل' },
    inprogress: { en: 'In progress', ar: 'قيد التطوير' },
    archived: { en: 'Archived', ar: 'مؤرشف' }
};

const CATEGORY_ICON = {
    games: 'fa-solid fa-gamepad',
    web: 'fa-solid fa-globe',
    mobile: 'fa-solid fa-mobile-screen',
    security: 'fa-solid fa-shield-halved'
};

let activeFilter = 'all';

function repoFromUrl(url) {
    const m = /github\.com\/([^/]+\/[^/]+)/.exec(url || '');
    return m ? m[1] : null;
}

function svgCover(p) {
    const grads = {
        games: ['#15803d', '#052e16'],
        web: ['#1d4ed8', '#0b1537'],
        apps: ['#0f766e', '#022c22'],
        mobile: ['#7e22ce', '#2e0752'],
        security: ['#b91c1c', '#350808'],
        education: ['#c2410c', '#431407'],
        misc: ['#64748b', '#1e293b']
    };
    const g = grads[p.category] || ['#334155', '#0f172a'];
    const letters = (p.name.replace(/[^A-Za-z0-9]/g, '') || 'DM').slice(0, 2).toUpperCase();
    const label = (p.category || 'project').toUpperCase();
    const svg =
        "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='264'>" +
        "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
        "<stop offset='0' stop-color='" + g[0] + "'/><stop offset='1' stop-color='" + g[1] +
        "'/></linearGradient></defs>" +
        "<rect width='600' height='264' fill='url(#g)'/>" +
        "<g stroke='#ffffff' stroke-opacity='0.06'>" +
        "<path d='M0 44H600M0 88H600M0 132H600M0 176H600M0 220H600'/>" +
        "<path d='M44 0V264M88 0V264M132 0V264M176 0V264M220 0V264M264 0V264M308 0V264M352 0V264M396 0V264M440 0V264M484 0V264M528 0V264M572 0V264'/></g>" +
        "<circle cx='540' cy='40' r='70' fill='#ffffff' fill-opacity='0.045'/>" +
        "<text x='24' y='58' font-family='monospace' font-size='38' font-weight='bold' fill='#ffffff' fill-opacity='0.95'>" +
        letters + "</text>" +
        "<rect x='26' y='72' width='56' height='3' fill='#ffffff' fill-opacity='0.8'/>" +
        "<text x='24' y='236' font-family='monospace' font-size='11' letter-spacing='3' fill='#ffffff' fill-opacity='0.55'>// " +
        label + "</text></svg>";
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

function t(key) {
    return I18N[currentLang][key] || key;
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = '';
    let list = PROJECTS.filter(p => activeFilter === 'all' || p.category === activeFilter);
    list = list.slice().sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    if (list.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'no-results';
        empty.style.cssText = 'font-family:\'Space Mono\',monospace;font-size:12px;color:var(--text-muted);padding:32px 0;text-align:center;';
        empty.textContent = currentLang === 'ar' ? 'لا توجد مشاريع في هذا التصنيف بعد.' : 'No projects in this category yet.';
        grid.appendChild(empty);
        return;
    }
    list.forEach(p => grid.appendChild(buildProjectCard(p)));
    updateScrollerUI();
}

function updateScrollerUI() {
    const g = document.getElementById('projects-grid');
    const count = document.getElementById('scroller-count');
    if (count) count.textContent = g ? g.children.length : 0;
    const max = g ? g.scrollWidth - g.clientWidth : 0;
    const rtl = document.documentElement.dir === 'rtl';
    const from = g ? (rtl ? -g.scrollLeft : g.scrollLeft) : 0;
    const bar = document.getElementById('scroller-bar');
    if (bar) bar.style.width = (max > 1 ? (from / max) * 100 : 0) + '%';
}

function buildProjectCard(p) {
    const card = document.createElement('article');
    card.className = 'project-card' + (p.featured ? ' featured' : '');
    card.setAttribute('data-category', p.category);

    const thumb = document.createElement('div');
    thumb.className = 'project-thumb cat-' + p.category;

    const cover = document.createElement('div');
    cover.className = 'cover-art';
    cover.style.backgroundImage = "url('" + (p.cover || svgCover(p)) + "')";
    thumb.appendChild(cover);

    const status = document.createElement('span');
    status.className = 'status-badge ' + (STATUS_KEY[p.status] || '');
    status.textContent = STATUS_TEXT[p.status][currentLang];
    status.setAttribute('data-status', p.status);
    thumb.appendChild(status);

    if (p.featured) {
        const ribbon = document.createElement('span');
        ribbon.className = 'featured-ribbon';
        ribbon.textContent = '★ ' + (currentLang === 'ar' ? 'مميز' : 'featured');
        thumb.appendChild(ribbon);
    }
    card.appendChild(thumb);

    const body = document.createElement('div');
    body.className = 'project-body';

    const name = document.createElement('div');
    name.className = 'project-name';
    name.textContent = p.name;
    body.appendChild(name);

    const desc = document.createElement('div');
    desc.className = 'project-desc';
    desc.textContent = p.desc[currentLang];
    body.appendChild(desc);

    const tags = document.createElement('div');
    tags.className = 'project-tags';
    const tag = document.createElement('span');
    tag.className = 'project-lang';
    tag.textContent = p.lang;
    tags.appendChild(tag);
    body.appendChild(tags);

    const repo = repoFromUrl(p.code);
    if (repo) {
        const stats = document.createElement('div');
        stats.className = 'project-stats';
        stats.setAttribute('data-repo', repo);
        body.appendChild(stats);
    }

    card.appendChild(body);

    const links = document.createElement('div');
    links.className = 'project-links';

    if (p.demo) {
        links.appendChild(miniLink(p.demo, '<i class="fa-solid fa-arrow-up-right-from-square"></i> ' + (currentLang === 'ar' ? 'تجربة حيّة' : 'Live demo'), true));
    }
    if (p.code) {
        links.appendChild(miniLink(p.code, '<i class="fa-brands fa-github"></i> ' + (currentLang === 'ar' ? 'الكود' : 'Source'), false));
    }
    if (p.case) {
        links.appendChild(miniLink(p.case, '<i class="fa-solid fa-book-open"></i> ' + (currentLang === 'ar' ? 'دراسة الحالة' : 'Case study'), true));
    }
    if (links.childNodes.length === 0) {
        const none = document.createElement('span');
        none.className = 'mini-btn';
        none.style.cursor = 'default';
        none.textContent = currentLang === 'ar' ? 'الرابط قادم' : 'links coming soon';
        links.appendChild(none);
    }
    card.appendChild(links);

    return card;
}

function miniLink(href, html, accent) {
    const a = document.createElement('a');
    a.className = 'mini-btn' + (accent ? ' accent' : '');
    a.href = href;
    if (href.startsWith('http')) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    }
    a.innerHTML = html;
    return a;
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
        renderProjects();
        scrollProjectsTo(0);
    });
});

// ---------- Horizontal projects scroller ----------
const pGrid = document.getElementById('projects-grid');

function scrollProjectsTo(pos) {
    if (!pGrid) return;
    pGrid.scrollTo({ left: pos, behavior: 'smooth' });
    return pos;
}

function scrollProjectsBy(forward) {
    if (!pGrid) return;
    const card = pGrid.querySelector('.project-card');
    if (!card) return;
    const step = card.offsetWidth + 20;
    const rtl = document.documentElement.dir === 'rtl';
    const fromStart = rtl ? -pGrid.scrollLeft : pGrid.scrollLeft;
    const max = pGrid.scrollWidth - pGrid.clientWidth;
    const next = Math.max(0, Math.min(max, fromStart + (forward ? step : -step)));
    pGrid.scrollTo({ left: rtl ? -next : next, behavior: 'smooth' });
}

document.getElementById('proj-prev').addEventListener('click', () => scrollProjectsBy(false));
document.getElementById('proj-next').addEventListener('click', () => scrollProjectsBy(true));

// drag-to-scroll
let pDrag = false, pStartX = 0, pStartFrom = 0, pMoved = false;
pGrid.addEventListener('mousedown', function (e) {
    pDrag = true; pMoved = false;
    pStartX = e.clientX;
    const rtl = document.documentElement.dir === 'rtl';
    pStartFrom = rtl ? -pGrid.scrollLeft : pGrid.scrollLeft;
    pGrid.classList.add('dragging');
});
document.addEventListener('mousemove', function (e) {
    if (!pDrag) return;
    const dx = e.clientX - pStartX;
    if (Math.abs(dx) > 5) pMoved = true;
    if (pMoved) {
        e.preventDefault();
        const rtl = document.documentElement.dir === 'rtl';
        const max = pGrid.scrollWidth - pGrid.clientWidth;
        const next = Math.max(0, Math.min(max, pStartFrom - dx));
        pGrid.scrollLeft = rtl ? -next : next;
    }
});
document.addEventListener('mouseup', function () {
    if (!pDrag) return;
    pDrag = false;
    pGrid.classList.remove('dragging');
});
pGrid.addEventListener('mouseleave', function () {
    if (pDrag) { pDrag = false; pGrid.classList.remove('dragging'); }
});
pGrid.addEventListener('click', function (e) {
    if (pMoved) { e.preventDefault(); e.stopPropagation(); pMoved = false; }
}, true);

// scroller progress bar + count
pGrid.addEventListener('scroll', updateScrollerUI);
window.addEventListener('resize', updateScrollerUI);

// keyboard navigation (respects RTL)
pGrid.addEventListener('keydown', function (e) {
    const rtl = document.documentElement.dir === 'rtl';
    const prev = rtl ? 'ArrowRight' : 'ArrowLeft';
    const next = rtl ? 'ArrowLeft' : 'ArrowRight';
    if (e.key === prev) { e.preventDefault(); scrollProjectsBy(false); }
    else if (e.key === next) { e.preventDefault(); scrollProjectsBy(true); }
});

updateScrollerUI();

// ============================================================
// QUOTES DATABASE — 200+ real quotes
// ============================================================
const QUOTES = [
  // === GAME DEVELOPERS ===
  { text: "A delayed game is eventually good, but a rushed game is forever bad.", author: "Shigeru Miyamoto", source: "Nintendo" },
  { text: "The goal is not to make games that everyone likes, but to make games that someone loves.", author: "Hideo Kojima", source: "Kojima Productions" },
  { text: "Video games are bad for you? That's what they said about rock and roll.", author: "Shigeru Miyamoto", source: "Nintendo" },
  { text: "Games give you a chance to excel, and if you're playing in good company you don't even mind if you lose because you had the enjoyment of the company during the course of the game.", author: "Gary Gygax", source: "D&D Creator" },
  { text: "I always wanted to be an explorer, but I realized I'll never be an astronaut. So I made the next best thing: video games.", author: "Shigeru Miyamoto", source: "Nintendo" },
  { text: "Making games is one of the most difficult creative endeavors there is.", author: "Ken Levine", source: "Irrational Games" },
  { text: "The idea of just wandering into the woods, seeing a cave, and thinking 'I wonder what's in there' — that was what we were trying to replicate.", author: "Hidetaka Miyazaki", source: "FromSoftware" },
  { text: "A game is a series of interesting choices.", author: "Sid Meier", source: "Firaxis Games" },
  { text: "We want to give players something that is genuinely special, that they couldn't find anywhere else.", author: "Amy Hennig", source: "Naughty Dog" },
  { text: "The best games are the ones where the player feels in control of the story.", author: "Neil Druckmann", source: "Naughty Dog" },
  { text: "We're not making art, we're making products. But products can have art in them.", author: "Cliff Bleszinski", source: "Epic Games" },
  { text: "If you're not embarrassed by the first version of your product, you've launched too late.", author: "Reid Hoffman", source: "LinkedIn" },
  { text: "Do what you love. Know your own bone; gnaw at it, bury it, unearth it, and gnaw it still.", author: "Tim Schafer", source: "Double Fine" },
  { text: "Games are literature. They have characters, they have story, they have environment.", author: "Warren Spector", source: "Ion Storm" },
  { text: "I think video games are a genuine art form, in the same way that films are.", author: "Hideo Kojima", source: "Kojima Productions" },
  { text: "The joy of creation is the best feeling in the world.", author: "Will Wright", source: "Maxis" },
  { text: "The most powerful person in the world is the storyteller.", author: "Steve Jobs", source: "Apple" },
  { text: "Players are not passive consumers. They are active participants in our worlds.", author: "Hidetaka Miyazaki", source: "FromSoftware" },
  { text: "We make games for one reason: because we love them.", author: "Gabe Newell", source: "Valve" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney", source: "Disney" },
  { text: "Polish is the difference between a good game and a great one.", author: "Shigeru Miyamoto", source: "Nintendo" },
  { text: "Constraints are the mother of creativity.", author: "Mark Cerny", source: "PlayStation" },
  { text: "The player is always right, even when they're wrong.", author: "Peter Molyneux", source: "Lionhead Studios" },
  { text: "Every game is a new opportunity to change someone's life.", author: "Jenova Chen", source: "thatgamecompany" },
  { text: "The best level design tells a story without a single word.", author: "Jordan Thomas", source: "Irrational Games" },

  // === GAME CHARACTERS & GAMES ===
  { text: "Praise the Sun!", author: "Solaire of Astora", source: "Dark Souls" },
  { text: "The flow of time is always cruel... its speed seems different for each person, but no one can change it.", author: "Sheik", source: "The Legend of Zelda: Ocarina of Time" },
  { text: "It's dangerous to go alone! Take this.", author: "Old Man", source: "The Legend of Zelda (1986)" },
  { text: "War. War never changes.", author: "Ron Perlman", source: "Fallout series" },
  { text: "What is a man? A miserable little pile of secrets!", author: "Dracula", source: "Castlevania: Symphony of the Night" },
  { text: "Stay a while and listen!", author: "Deckard Cain", source: "Diablo series" },
  { text: "You were almost a Jill sandwich!", author: "Barry Burton", source: "Resident Evil" },
  { text: "The cake is a lie.", author: "GLaDOS (via graffiti)", source: "Portal" },
  { text: "We're here, we're queer, get used to it.", author: "Strong Bad", source: "Homestar Runner" },
  { text: "Do you feel in control?", author: "The Antagonist", source: "Spec Ops: The Line" },
  { text: "A man chooses. A slave obeys.", author: "Andrew Ryan", source: "BioShock" },
  { text: "Who are you, so wise in the ways of science?", author: "GLaDOS", source: "Portal 2" },
  { text: "I used to be an adventurer like you, then I took an arrow in the knee.", author: "Guard", source: "The Elder Scrolls V: Skyrim" },
  { text: "It's not about the destination, it's about the journey.", author: "Ezio Auditore", source: "Assassin's Creed" },
  { text: "Nothing is true, everything is permitted.", author: "Altaïr Ibn-La'Ahad", source: "Assassin's Creed" },
  { text: "The night is darkest just before the dawn.", author: "Harvey Dent", source: "Batman: Arkham City" },
  { text: "I am Error.", author: "Error", source: "Zelda II: The Adventure of Link" },
  { text: "In the end, does it matter who wins? The struggle itself is the meaning.", author: "The Narrator", source: "Disco Elysium" },
  { text: "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.", author: "John Marston", source: "Red Dead Redemption" },
  { text: "Endure and survive.", author: "Joel Miller", source: "The Last of Us" },
  { text: "If you want to make enemies, try to change something.", author: "Solid Snake", source: "Metal Gear Solid" },
  { text: "We're not tools of the government, or anyone else. Fighting was the only thing... the only thing I was good at. But at least I always fought for what I believed in.", author: "Gray Fox", source: "Metal Gear Solid" },
  { text: "Kept you waiting, huh?", author: "Big Boss", source: "Metal Gear Solid 3" },
  { text: "The truth is, video games are the future of storytelling.", author: "Hideo Kojima", source: "Kojima Productions" },
  { text: "You cannot kill me in a way that matters.", author: "The Transcendent One", source: "Planescape: Torment" },
  { text: "No matter how dark the night, morning always comes, and our journey begins anew.", author: "Lulu", source: "Final Fantasy X" },
  { text: "Even if the morrow is barren of promises, nothing shall forestall my return.", author: "Caius Ballad", source: "Final Fantasy XIII-2" },
  { text: "There is no real ending. It's just the place where you stop the story.", author: "Frank Herbert", source: "Dune (cited in gaming)" },
  { text: "To be forgotten is worse than death.", author: "Freya Crescent", source: "Final Fantasy IX" },
  { text: "The more personal something is, the more universal it is.", author: "Undertale Theme", source: "Undertale (Toby Fox)" },
  { text: "In this world, it's kill or be killed.", author: "Flowey", source: "Undertale" },
  { text: "Don't give up! I believe in you!", author: "Papyrus", source: "Undertale" },
  { text: "Your power is that of emotion.", author: "Nier", source: "NieR:Automata" },
  { text: "Even if we forget the faces of our friends, we will never forget the bonds that were carved into our souls.", author: "2B", source: "NieR:Automata" },
  { text: "Fascinating. So much passion, so much ego.", author: "Adam", source: "NieR:Automata" },
  { text: "Everything that lives is designed to end.", author: "2B", source: "NieR:Automata" },
  { text: "The mind is everything. What you think, you become.", author: "The Knight", source: "Hollow Knight" },
  { text: "I will be king of this world.", author: "The Radiance", source: "Hollow Knight" },
  { text: "Together, we shall learn from this dark place what we could not learn in the light.", author: "The Seer", source: "Hollow Knight" },
  { text: "No more running. I belong here.", author: "Ori", source: "Ori and the Blind Forest" },
  { text: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.", author: "Quote", source: "Cave Story" },
  { text: "I'd rather be hated for who I am than loved for who I'm not.", author: "The Narrator", source: "Disco Elysium" },
  { text: "Capitalism has brought us to this.", author: "Harry Du Bois", source: "Disco Elysium" },
  { text: "You have died of dysentery.", author: "Game", source: "The Oregon Trail" },
  { text: "Stay a while and listen.", author: "Deckard Cain", source: "Diablo II" },
  { text: "The Covenant will follow Halo to the ends of the universe.", author: "Master Chief", source: "Halo" },
  { text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.", author: "Ernest Hemingway", source: "Referenced in Metal Gear" },
  { text: "All your base are belong to us.", author: "CATS", source: "Zero Wing" },
  { text: "You can't handle the truth!", author: "NPC", source: "Call of Duty: Black Ops" },

  // === HACKERS & SECURITY ===
  { text: "The quieter you become, the more you are able to hear.", author: "Kali Linux", source: "Kali Linux motto" },
  { text: "Hacking is not a crime. It's a skill.", author: "Kevin Mitnick", source: "Security researcher" },
  { text: "The Internet is the world's largest library. It's just that all the books are on the floor.", author: "John Allen Paulos", source: "Mathematician" },
  { text: "Security is always excessive until it's not enough.", author: "Robbie Sinclair", source: "Security maxim" },
  { text: "Think like an attacker to defend like a defender.", author: "Bruce Schneier", source: "Cryptographer" },
  { text: "The only truly secure system is one that is powered off, cast in a block of concrete, and sealed in a lead-lined room.", author: "Gene Spafford", source: "Purdue University" },
  { text: "Given enough eyeballs, all bugs are shallow.", author: "Linus Torvalds", source: "Linux creator" },
  { text: "Free software is a matter of liberty, not price.", author: "Richard Stallman", source: "GNU Project" },
  { text: "When in doubt, encrypt.", author: "Phil Zimmermann", source: "PGP creator" },
  { text: "Privacy is not an option, and it shouldn't be the price we accept for just getting on the internet.", author: "Gary Kovacs", source: "Mozilla" },
  { text: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.", author: "Sydney J. Harris", source: "Journalist" },
  { text: "Complexity is the enemy of security.", author: "Bruce Schneier", source: "Cryptographer" },
  { text: "The hacker mindset doesn't actually see what happens at the other end, to the other person.", author: "Clifford Stoll", source: "Astronomer & Author" },
  { text: "Information is not knowledge. Knowledge is not wisdom. Wisdom is not truth.", author: "Frank Zappa", source: "Musician (tech quote)" },
  { text: "To err is human, but to really foul things up you need a computer.", author: "Paul Ehrlich", source: "Biologist" },
  { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates", source: "Microsoft" },
  { text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates", source: "Microsoft" },
  { text: "The best way to get a project done faster is to start sooner.", author: "Jim Highsmith", source: "Agile" },
  { text: "It's not about ideas. It's about making ideas happen.", author: "Scott Belsky", source: "Behance" },
  { text: "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.", author: "Norman Augustine", source: "Aerospace engineer" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler", source: "Software developer" },
  { text: "Everybody in this country should learn how to program a computer... because it teaches you how to think.", author: "Steve Jobs", source: "Apple" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson", source: "SICP" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth", source: "Computer scientist" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay", source: "Xerox PARC" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", source: "Linux kernel creator" },
  { text: "The Internet is the first thing that humanity has built that humanity doesn't understand.", author: "Eric Schmidt", source: "Google" },
  { text: "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.", author: "Elbert Hubbard", source: "Author" },
  { text: "The most dangerous phrase in the language is 'We've always done it this way.'", author: "Grace Hopper", source: "Mathematician & Admiral" },
  { text: "I'm not a great programmer; I'm just a good programmer with great habits.", author: "Kent Beck", source: "Extreme Programming" },
  { text: "Don't comment bad code — rewrite it.", author: "Brian W. Kernighan", source: "UNIX co-creator" },
  { text: "A good programmer looks both ways before crossing a one-way street.", author: "Doug Linder", source: "Developer maxim" },
  { text: "Testing leads to failure, and failure leads to understanding.", author: "Burt Rutan", source: "Aerospace engineer" },
  { text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra", source: "Computer scientist" },
  { text: "The best code is no code at all.", author: "Jeff Atwood", source: "Stack Overflow" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck", source: "Extreme Programming" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson", source: "Programming maxim" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci", source: "Referenced in tech" },
  { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch", source: "Software engineer" },
  { text: "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer's shifting idea of what they need.", author: "Jeff Atwood", source: "Coding Horror" },

  // === ANIME CHARACTERS ===
  { text: "A person who can't feel pain can never know true strength.", author: "Naruto Uzumaki", source: "Naruto" },
  { text: "It's not the face that makes someone a monster; it's the choices they make with their lives.", author: "Naruto Uzumaki", source: "Naruto" },
  { text: "When you give up, that's when the game ends.", author: "Mitsuyoshi Anzai", source: "Slam Dunk" },
  { text: "Power comes in response to a need, not a desire. You have to create that need.", author: "Goku", source: "Dragon Ball Z" },
  { text: "It's not about how hard you can hit. It's about how hard you can get hit and keep moving forward.", author: "Makunouchi Ippo", source: "Hajime no Ippo" },
  { text: "A lesson without pain is meaningless. That's because no one can gain without sacrificing something.", author: "Edward Elric", source: "Fullmetal Alchemist: Brotherhood" },
  { text: "There is no such thing as coincidence in this world — there is only the inevitable.", author: "Yuuko Ichihara", source: "xxxHolic" },
  { text: "People's lives don't end when they die. It ends when they lose faith.", author: "Itachi Uchiha", source: "Naruto" },
  { text: "If you don't take risks, you can't create a future.", author: "Monkey D. Luffy", source: "One Piece" },
  { text: "Forgetting is like a wound. The wound may heal, but it has already left a scar.", author: "Monkey D. Luffy", source: "One Piece" },
  { text: "The world isn't perfect. But it's there for us, doing the best it can.", author: "Roy Mustang", source: "Fullmetal Alchemist" },
  { text: "The thing I wished for destroyed my whole family. I brought all this on myself. I know I don't deserve your forgiveness, but I also know that I've done all I could to make things right.", author: "Greed", source: "Fullmetal Alchemist: Brotherhood" },
  { text: "Courage is not the absence of fear. It is acting in spite of it.", author: "Mark Twain", source: "Referenced in Attack on Titan" },
  { text: "The world will move forward even if you don't.", author: "Reiner Braun", source: "Attack on Titan" },
  { text: "On that day, mankind received a grim reminder.", author: "Narrator", source: "Attack on Titan" },
  { text: "If you win, you live. If you lose, you die. If you don't fight, you can't win!", author: "Eren Yeager", source: "Attack on Titan" },
  { text: "Everyone had their own story. And in each story, no one thought of themselves as the villain.", author: "Armin Arlert", source: "Attack on Titan" },
  { text: "The future is something that you make yourself. You have to fight for it.", author: "Okabe Rintarou", source: "Steins;Gate" },
  { text: "Time is the only currency that matters. Spend it wisely.", author: "Okabe Rintarou", source: "Steins;Gate" },
  { text: "El Psy Kongroo.", author: "Okabe Rintarou", source: "Steins;Gate" },
  { text: "A person who abandons their beliefs is not a man worthy of calling themselves such.", author: "Lelouch vi Britannia", source: "Code Geass" },
  { text: "If the king doesn't lead, how can he expect his subordinates to follow?", author: "Lelouch vi Britannia", source: "Code Geass" },
  { text: "I, Lelouch vi Britannia, command you — obey me, subjects! Obey me, world!", author: "Lelouch vi Britannia", source: "Code Geass" },
  { text: "All humans are equal in death.", author: "Light Yagami", source: "Death Note" },
  { text: "I am justice! I protect the innocent and those who fear evil.", author: "Light Yagami", source: "Death Note" },
  { text: "I'll take a potato chip... and eat it!", author: "Light Yagami", source: "Death Note" },
  { text: "All according to plan.", author: "Light Yagami", source: "Death Note" },
  { text: "The thing I hate most in this world is wasting my potential.", author: "Hisoka Morow", source: "Hunter x Hunter" },
  { text: "Gon, you are light. And sometimes, light can illuminate the darkest of places.", author: "Killua Zoldyck", source: "Hunter x Hunter" },
  { text: "If you want to be a Ninja, you can't just imitate someone. You have to make your own way.", author: "Killua Zoldyck", source: "Hunter x Hunter" },
  { text: "The most important thing is to find your own path.", author: "Gon Freecss", source: "Hunter x Hunter" },
  { text: "Even in this world, there's something worth protecting.", author: "Kirito", source: "Sword Art Online" },
  { text: "Sword skills aren't just about swinging a sword. They're about putting your heart into every strike.", author: "Kirito", source: "Sword Art Online" },
  { text: "In this world, the strong devour the weak.", author: "Ryo Yamada", source: "Elfen Lied" },
  { text: "I'll become stronger, stronger than anyone, so that no one has to suffer anymore.", author: "Erza Scarlet", source: "Fairy Tail" },
  { text: "Weaklings will stay weak forever. But weakness is not evil, since human beings are weak creatures to begin with.", author: "Mavis Vermillion", source: "Fairy Tail" },
  { text: "No matter what path you chose, just move forward.", author: "Natsu Dragneel", source: "Fairy Tail" },
  { text: "The best way to find out if you can trust somebody is to trust them.", author: "Gray Fullbuster", source: "Fairy Tail" },
  { text: "Do not be sad that it is over, smile that it happened.", author: "Jiraiya", source: "Naruto" },
  { text: "In my hand, I'll keep the promise to find my way back to you.", author: "Kamina", source: "Gurren Lagann" },
  { text: "Believe in yourself. Not in the you who believes in me, not the me who believes in you. Believe in the you who believes in yourself!", author: "Kamina", source: "Gurren Lagann" },
  { text: "Row row, fight the power!", author: "Kamina", source: "Gurren Lagann" },
  { text: "The past is the past. We cannot indulge ourselves in memories and destroy the present.", author: "Byakuya Kuchiki", source: "Bleach" },
  { text: "Even if I lose this feeling, I'm sure I'll just fall in love with you all over again.", author: "Ichigo Kurosaki", source: "Bleach" },
  { text: "If fate is a millstone, then we are the grist. There is nothing we can do. So I wish for strength.", author: "Ichigo Kurosaki", source: "Bleach" },
  { text: "I have a dream. I want to be a hero.", author: "Izuku Midoriya", source: "My Hero Academia" },
  { text: "A true hero always smiles in the face of adversity. That is the symbol of peace.", author: "All Might", source: "My Hero Academia" },
  { text: "Plus Ultra!", author: "U.A. High School motto", source: "My Hero Academia" },
  { text: "Even the mightiest heroes go through very hard times. Have faith in yourself and there will come a day when others have faith in you.", author: "All Might", source: "My Hero Academia" },
  { text: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.", author: "Gildarts Clive", source: "Fairy Tail" },
  { text: "Those who do not know what real loss is will never understand true valor.", author: "Vegeta", source: "Dragon Ball Z" },
  { text: "You can fly… if you just remove everything unnecessary.", author: "Motoko Kusanagi", source: "Ghost in the Shell" },
  { text: "A cyberbrain could be hacked. Even your memories can be falsified.", author: "Motoko Kusanagi", source: "Ghost in the Shell" },
  { text: "There are as many different worlds as there are people.", author: "Dio Brando", source: "JoJo's Bizarre Adventure" },
  { text: "Your next line is...", author: "Dio Brando", source: "JoJo's Bizarre Adventure" },
  { text: "WRYYYYYYY!", author: "Dio Brando", source: "JoJo's Bizarre Adventure" },
  { text: "It was me, Dio!", author: "Dio Brando", source: "JoJo's Bizarre Adventure" },
  { text: "Oi! Josuke! I've got a nose bleed!", author: "Okuyasu Nijimura", source: "JoJo's Bizarre Adventure" },
  { text: "The real power of a shinobi is not something you can measure by raw strength. It comes from something deeper, a will that can't be broken.", author: "Minato Namikaze", source: "Naruto" },
  { text: "In this world, there exist people who bear the stigma of their background.", author: "Trafalgar D. Water Law", source: "One Piece" },
  { text: "The sea is the world of pirates. And there's a treasure there that makes you king.", author: "Monkey D. Luffy", source: "One Piece" },
  { text: "Living is a constant battle.", author: "Roronoa Zoro", source: "One Piece" },
  { text: "Zoro, lost again.", author: "Nami", source: "One Piece (running gag)" },
  { text: "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean is the Pirate King!", author: "Monkey D. Luffy", source: "One Piece" },
  { text: "If you hurt somebody, or if somebody hurts you, the same blood runs through both your hands.", author: "Rem", source: "Re:Zero" },
  { text: "I can't do this alone. I need you. I want you to be by my side.", author: "Subaru Natsuki", source: "Re:Zero" },
  { text: "Even if no one in the world believes in you, I will believe in you.", author: "Zero Two", source: "Darling in the FranXX" },
  { text: "Love is war.", author: "Kaguya-sama wa Kokurasetai", source: "Kaguya-sama: Love is War" },
  { text: "Life is about getting back up after being knocked down.", author: "Yusuke Urameshi", source: "Yu Yu Hakusho" },
  { text: "Is there a difference between a human without memories and someone who never existed?", author: "Ai Haibara", source: "Detective Conan" },
  { text: "There is only one truth!", author: "Conan Edogawa", source: "Detective Conan" },
  { text: "Even if you're weak, you can become strong through effort.", author: "Rock Lee", source: "Naruto" },
  { text: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.", author: "Naruto Uzumaki", source: "Naruto" },
  { text: "Hatred is born to protect love.", author: "Pain/Nagato", source: "Naruto" },
  { text: "Before I became a shinobi, I was still a citizen of Konoha. I'm not fighting for the village. I'm fighting for the people I love.", author: "Gaara", source: "Naruto" },
  { text: "An eye for an eye makes the whole world blind.", author: "Mahatma Gandhi", source: "Referenced in Naruto" },
  { text: "The circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.", author: "Mewtwo", source: "Pokémon: The First Movie" },
  { text: "Gotta catch 'em all.", author: "Series tagline", source: "Pokémon" },
  { text: "Your story isn't over yet. There's still a new page to write.", author: "Angel Beats!", source: "Angel Beats!" },
  { text: "The moment people come to know love, they run the risk of carrying hate.", author: "Obito Uchiha", source: "Naruto Shippuden" },
  { text: "Those who break the rules are trash, but those who abandon their comrades are worse than trash.", author: "Kakashi Hatake", source: "Naruto" },
  { text: "You've got guts. That's rare these days.", author: "Spike Spiegel", source: "Cowboy Bebop" },
  { text: "Whatever happens, happens.", author: "Spike Spiegel", source: "Cowboy Bebop" },
  { text: "I'm just a wolf, running in the darkness.", author: "Spike Spiegel", source: "Cowboy Bebop" },
  { text: "See you, Space Cowboy.", author: "Narrator", source: "Cowboy Bebop" },
  { text: "Three, two, one, let's jam!", author: "Opening", source: "Cowboy Bebop" },

  // === EXTRA HACKER / PHILOSOPHY ===
  { text: "Access the mind, control the world.", author: "Mr. Robot", source: "Mr. Robot (TV)" },
  { text: "We are all just IP addresses to them.", author: "Elliot Alderson", source: "Mr. Robot" },
  { text: "We live in a kingdom of bullshit.", author: "Elliot Alderson", source: "Mr. Robot" },
  { text: "Hello, friend. Hello, friend? That's lame.", author: "Elliot Alderson", source: "Mr. Robot" },
  { text: "Control is an illusion.", author: "Elliot Alderson", source: "Mr. Robot" },
  { text: "I've always believed that hacking is about finding beautiful, elegant solutions to complex problems.", author: "Anonymous", source: "Hacker culture" },
  { text: "Information wants to be free.", author: "Stewart Brand", source: "Hacker's Conference, 1984" },
  { text: "In the beginning there was ARPANET. And it was void.", author: "Internet folklore", source: "Hacker culture" },
  { text: "The Internet is just a world passing notes in a classroom.", author: "Jon Stewart", source: "The Daily Show" },
  { text: "Root is not just a user. It's a state of mind.", author: "Anonymous", source: "Linux culture" },
  { text: "sudo make me a sandwich", author: "XKCD #149", source: "XKCD (Randall Munroe)" },
  { text: "There are only two hard things in computer science: cache invalidation and naming things.", author: "Phil Karlton", source: "Netscape engineer" },
  { text: "Beware of bugs in the above code; I have only proved it correct, not tried it.", author: "Donald Knuth", source: "Computer scientist" },
  { text: "Software and cathedrals are much the same — first we build them, then we pray.", author: "Sam Redwine", source: "4th International Software Process Workshop" },
  { text: "Nine people can't make a baby in a month.", author: "Fred Brooks", source: "The Mythical Man-Month" },
  { text: "A ship in port is safe, but that's not what ships are for.", author: "Grace Hopper", source: "Mathematician & Admiral" },
  { text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", author: "Edsger Dijkstra", source: "Computer scientist" },
  { text: "If you think you understand quantum mechanics, you don't understand quantum mechanics.", author: "Richard Feynman", source: "Physicist" },
  { text: "Everything should be made as simple as possible, but not simpler.", author: "Albert Einstein", source: "Physicist" },
  { text: "The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times.", author: "Donald Knuth", source: "Computer scientist" },
  { text: "You can't out-Amazon Amazon.", author: "Jeff Bezos", source: "Amazon" },
  { text: "Move fast and break things.", author: "Mark Zuckerberg", source: "Facebook" },
  { text: "Build things that don't scale.", author: "Paul Graham", source: "Y Combinator" },
  { text: "Real artists ship.", author: "Steve Jobs", source: "Apple" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", source: "Apple" },
  { text: "Stay hungry. Stay foolish.", author: "Steve Jobs", source: "Stanford Commencement 2005" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", source: "Founding Father" },
  { text: "Education is not the filling of a pail, but the lighting of a fire.", author: "W.B. Yeats", source: "Poet" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes", source: "Actress" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar", source: "Author" },
  { text: "Code is like poetry — it requires thought, iteration, and a willingness to throw away something beautiful if it doesn't serve the whole.", author: "Anonymous developer", source: "Dev community" },
  { text: "I'm always right, I'm just not always correct.", author: "StackOverflow regulars", source: "Developer humor" },
  { text: "It works on my machine.", author: "Every developer", source: "Universal dev truth" },
];

// ============================================================
// TICKER — fill with shuffled quotes, faster scroll
// ============================================================
function buildTicker() {
    const ticker = document.getElementById('ticker');
    if (!ticker) return;
    const shuffled = [...QUOTES].sort(() => Math.random() - 0.5).slice(0, 24);
    const doubled = [...shuffled, ...shuffled];
    ticker.innerHTML = doubled.map(q =>
        `<span class="ticker-item">"${q.text.slice(0, 70)}${q.text.length > 70 ? '…' : ''}" — ${q.author}</span>`
    ).join('');
}

// ============================================================
// QUOTE ROTATOR
// ============================================================
let quoteInterval;
let quoteHistory = [];
let quoteHistoryPos = -1;

function randomIndexExcluding(exclude) {
    let idx;
    do { idx = Math.floor(Math.random() * QUOTES.length); } while (idx === exclude && QUOTES.length > 1);
    return idx;
}

function showQuote(i) {
    const q = QUOTES[i];
    const textEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    const sourceEl = document.getElementById('quote-source');
    const counterEl = document.getElementById('quote-counter');
    if (!textEl) return;
    textEl.style.opacity = '0';
    setTimeout(() => {
        textEl.textContent = q.text;
        authorEl.textContent = '— ' + q.author;
        sourceEl.textContent = q.source;
        counterEl.textContent = '#' + (i + 1);
        textEl.style.opacity = '1';
    }, 300);
}

function nextQuote() {
    const currentIdx = quoteHistory[quoteHistoryPos] ?? -1;
    if (quoteHistoryPos < quoteHistory.length - 1) {
        quoteHistoryPos++;
    } else {
        const next = randomIndexExcluding(currentIdx);
        quoteHistory.push(next);
        if (quoteHistory.length > 100) quoteHistory.shift();
        quoteHistoryPos = quoteHistory.length - 1;
    }
    showQuote(quoteHistory[quoteHistoryPos]);
    resetInterval();
}

function prevQuote() {
    if (quoteHistoryPos > 0) {
        quoteHistoryPos--;
        showQuote(quoteHistory[quoteHistoryPos]);
    }
    resetInterval();
}

function resetInterval() {
    clearInterval(quoteInterval);
    quoteInterval = setInterval(nextQuote, 8000);
}

// ============================================================
// HERO TYPING EFFECT
// ============================================================
const SUBTITLES = {
    en: [
        'Computer &amp; Systems <span class="hl1">Engineering Student</span>',
        'Minya University · <span class="hl2">Faculty of Engineering</span>',
        '<span class="hl1">Cybersecurity</span> Enthusiast',
        'Builder · Breaker · <span class="hl2">Learner</span>',
        'Unity · Python · Raspberry Pi'
    ],
    ar: [
        'طالب <span class="hl1">هندسة حاسبات</span>',
        'جامعة المنيا · <span class="hl2">كلية الهندسة</span>',
        'مهتم <span class="hl1">بالأمن السيبراني</span>',
        'منشئ · مخترق · <span class="hl2">متعلّم</span>',
        'Unity · Python · Raspberry Pi'
    ]
};
let subtitleIndex = 0;

function cycleSubtitle(force) {
    const el = document.getElementById('hero-subtitle');
    if (!el) return;
    if (force) {
        el.innerHTML = SUBTITLES[currentLang][subtitleIndex % SUBTITLES[currentLang].length];
        return;
    }
    el.style.opacity = '0';
    setTimeout(() => {
        el.innerHTML = SUBTITLES[currentLang][subtitleIndex % SUBTITLES[currentLang].length];
        el.style.opacity = '1';
        subtitleIndex++;
    }, 400);
}
document.getElementById('hero-subtitle').style.transition = 'opacity 0.4s';

// ============================================================
// THEME TOGGLE
// ============================================================
function getStoredTheme() {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', theme);
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ============================================================
// MOBILE MENU
// ============================================================
const mobileBtn = document.getElementById('mobile-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const drawerClose = document.getElementById('drawer-close');
const drawerOverlay = document.getElementById('drawer-overlay');

function setDrawer(open) {
    mobileDrawer.classList.toggle('open', open);
    mobileBtn.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('no-scroll', open);
    if (open) document.getElementById('drawer-close').focus();
}

mobileBtn.addEventListener('click', () => setDrawer(true));
drawerClose.addEventListener('click', () => setDrawer(false));
drawerOverlay.addEventListener('click', () => setDrawer(false));
mobileDrawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setDrawer(false));
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) setDrawer(false);
});

// ============================================================
// SMOOTH SCROLL + ACTIVE NAV + BACK TO TOP
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const backToTop = document.getElementById('back-to-top');
const progressBar = document.getElementById('progress-bar');
function updateScrollUI() {
    const scrolled = window.scrollY;
    backToTop.classList.toggle('visible', scrolled > 600);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && max > 0) progressBar.style.width = (scrolled / max) * 100 + '%';
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
window.addEventListener('resize', updateScrollUI);
updateScrollUI();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const sectionIds = ['about', 'projects', 'skills', 'achievements', 'more', 'contact'];
const navSpy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) navSpy.observe(section);
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// ============================================================
// CONTACT FORM
// ============================================================
const MAIL_USER = 'medozizo008';
const MAIL_DOM = 'gmail.com';
function mailAddr() { return MAIL_USER + '@' + MAIL_DOM; }
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const submitBtn = document.getElementById('submit-btn');
    const note = document.getElementById('form-note');
    let submitting = false;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitting) return;
        submitting = true;
        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = currentLang === 'ar' ? 'جارٍ الإرسال…' : 'Sending…';
        note.className = 'form-note';

        const formData = new FormData(contactForm);
        formData.append('_subject', (formData.get('type') || 'Message') + ' — from dsmans0021.com');
        formData.append('_captcha', 'false');
        contactForm.action = 'https://formsubmit.co/' + mailAddr();
        if (formData.get('_gotcha')) {
            note.className = 'form-note success';
            note.textContent = currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح.' : 'Your message was sent.';
            contactForm.reset();
            submitting = false;
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = I18N[currentLang]['form.send'];
            return;
        }

        try {
            const res = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || data.success !== 'true') throw new Error('bad response');
            note.className = 'form-note success';
            note.textContent = currentLang === 'ar'
                ? 'تم إرسال رسالتك بنجاح. سأعود إليك قريبًا.'
                : 'Your message was sent. I\'ll get back to you soon.';
            contactForm.reset();
        } catch (err) {
            note.className = 'form-note error';
            note.innerHTML = currentLang === 'ar'
                ? 'تعذّر إرسال الرسالة الآن. جرّب مراسلتي مباشرة عبر البريد: <a href="mailto:' + mailAddr() + '">' + mailAddr() + '</a>'
                : 'Something went wrong. You can also reach me directly at <a href="mailto:' + mailAddr() + '">' + mailAddr() + '</a>.';
        } finally {
            submitting = false;
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = I18N[currentLang]['form.send'];
        }
    });
}

// ============================================================
// INIT
// ============================================================
applyTheme(getStoredTheme());
buildTicker();
applyLang(currentLang);

const firstQuote = Math.floor(Math.random() * QUOTES.length);
quoteHistory.push(firstQuote);
quoteHistoryPos = 0;
showQuote(firstQuote);
resetInterval();

document.getElementById('quote-next').addEventListener('click', nextQuote);
document.getElementById('quote-prev').addEventListener('click', prevQuote);

setInterval(() => cycleSubtitle(false), 4000);

// ============================================================
// EASTER EGG (open the console, then type  dsmans() )
// ============================================================
setTimeout(() => {
    console.log('%c~> welcome to the machine. Type  dsmans()  if you dare.',
        'color:#39ff14;font-family:monospace;font-size:12px');
}, 800);

window.dsmans = function () {
    console.log('%c\n   ██████╗ ███████╗███╗   ███╗ █████╗ ███╗   ██╗███████╗\n   ██╔══██╗██╔════╝████╗ ████║██╔══██╗████╗  ██║██╔════╝\n   ██║  ██║███████╗██╔████╔██║███████║██╔██╗ ██║███████╗\n   ██║  ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║╚════██║\n   ██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║███████║\n   ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝\n\n   You found the backdoor. +1 hacker credit. Welcome, DsMans.\n', 'color:#39ff14;font-family:monospace');
    return 'root@dsmans0021:~$ access granted';
};



// ============================================================
// EXTRAS: github live stats, copy email, terminal, easter eggs
// ============================================================

// ---------- GitHub live stats ----------
const GH_KEY = 'ghstats_v1';

function getGhCache() { try { return JSON.parse(localStorage.getItem(GH_KEY) || '{}') } catch (e) { return {} } }
function setGhCache(c) { try { localStorage.setItem(GH_KEY, JSON.stringify(c)) } catch (e) { } }
function timeAgo(iso) {
    if (!iso) return '';
    const s = (Date.now() - new Date(iso)) / 1000;
    if (s < 3600) return Math.max(1, Math.round(s / 60)) + 'm ago';
    if (s < 86400) return Math.round(s / 3600) + 'h ago';
    return Math.floor(s / 86400) + 'd ago';
}
function renderStat(el, rec) {
    let html = '↳ <b>★ ' + rec.stars + '</b>';
    if (rec.pushed) html += ' · updated ' + timeAgo(rec.pushed);
    el.innerHTML = html;
}
function refreshGithubStats() {
    const els = document.querySelectorAll('.project-stats[data-repo]');
    const cache = getGhCache();
    els.forEach(el => {
        if (el.getAttribute('data-loading')) return;
        const repo = el.getAttribute('data-repo');
        const rec = cache[repo];
        if (rec && rec.t > Date.now() - 3600e3) { renderStat(el, rec); return; }
        el.setAttribute('data-loading', '1');
        el.textContent = '↳ fetching…';
        fetch('https://api.github.com/repos/' + repo)
            .then(r => r.ok ? r.json() : null)
            .catch(() => null)
            .then(data => {
                el.removeAttribute('data-loading');
                if (!data) { el.textContent = '↳ ★ --'; return; }
                const next = { stars: data.stargazers_count || 0, pushed: data.pushed_at || null, t: Date.now() };
                cache[repo] = next;
                setGhCache(cache);
                renderStat(el, next);
            });
    });
}

// hook into re-renders
const _origRender = window.renderProjects;
window.renderProjects = function () {
    _origRender();
    refreshGithubStats();
};

// ---------- Auto-sync projects from GitHub (live, no more hand-editing) ----------
const REPO_CACHE_KEY = 'sg_repos_v1';

function guessCategory(r) {
    const n = (r.name || '').toLowerCase();
    const tops = (r.topics || []).map(t => t.toLowerCase());
    const full = n + ' ' + tops.join(' ');
    if (tops.includes('security') || /security|hack|phish|recon|exploit|vuln|crawler|c2|rat|spam|obfus|steal/.test(full)) return 'security';
    if (tops.includes('game') || /game|maya|fps|clicker|jump|coiner|naruto|brick|snake|pong|runner|platform|rogue|solar|solitaire|quiz|typer/.test(full)) return 'games';
    if (tops.includes('mobile') || r.language === 'Dart' || /flutter|android|apk|mobile/.test(full)) return 'mobile';
    if (tops.includes('education') || /edu|school|teach|stem|learn|course/.test(full)) return 'education';
    if (tops.includes('web') || /website|webapp|portfolio|dash|landing|site/.test(full)) return 'web';
    if (tops.includes('app') || /app|tool|convert|player|media|assistant|bot|notepad|clock/.test(full)) return 'apps';
    return 'misc';
}

function mergeLiveRepo(r) {
    const slug = r.name;
    const base = PROJECTS.find(p => (p.code || '').endsWith('/' + slug));
    const out = {
        name: slug,
        category: base ? base.category : guessCategory(r),
        status: r.archived ? 'archived' : (base ? base.status : 'inprogress'),
        featured: base ? !!base.featured : false,
        lang: r.language || (base ? base.lang : 'GitHub'),
        icon: base ? base.icon : 'fa-brands fa-github',
        demo: base ? base.demo : (r.homepage || null),
        code: r.html_url || (base ? base.code : 'https://github.com/DsMans0021/' + slug),
        case: base ? base.case : null,
        desc: base ? { en: base.desc.en, ar: base.desc.ar }
            : { en: (r.description || slug).trim(), ar: (r.description || slug).trim() },
        stars: r.stargazers_count || 0,
        forks: r.forks_count || 0,
        pushed: r.pushed_at || null,
        archived: !!r.archived,
        cover: r.open_graph_image_url || null
    };
    return out;
}

function buildLiveProjectList(apiList) {
    return apiList.map(mergeLiveRepo).sort((a, b) =>
        ((b.featured ? 1 : 0) - (a.featured ? 1 : 0)) ||
        ((b.stars || 0) - (a.stars || 0)) ||
        (new Date(b.pushed || 0) - new Date(a.pushed || 0)));
}

function loadLiveRepoCache() {
    try { return JSON.parse(localStorage.getItem(REPO_CACHE_KEY) || 'null'); } catch (e) { return null; }
}
function saveLiveRepoCache(apiList) {
    try {
        localStorage.setItem(REPO_CACHE_KEY, JSON.stringify(apiList.map(r => ({
            name: r.name, stargazers_count: r.stargazers_count || 0, forks_count: r.forks_count || 0,
            language: r.language, pushed_at: r.pushed_at, html_url: r.html_url, homepage: r.homepage,
            description: r.description, archived: !!r.archived, topics: (r.topics || []).slice(0, 25)
        }))));
    } catch (e) {}
}
function syncProjects() {
    const cached = loadLiveRepoCache();
    if (cached && cached.length) {
        PROJECTS = buildLiveProjectList(cached);
        renderProjects();
    }
    fetch('https://api.github.com/users/DsMans0021/repos?per_page=100&sort=updated&type=all')
        .then(r => r.ok ? r.json() : null)
        .catch(() => null)
        .then(repos => {
            if (!repos || !repos.length) return;
            saveLiveRepoCache(repos);
            const sig = repos.map(r => r.name + ':' + (r.pushed_at || '')).join('|');
            if (sig !== (window._repoSig || '')) {
                window._repoSig = sig;
                PROJECTS = buildLiveProjectList(repos);
                renderProjects();
            }
        });
}
syncProjects();

// ---------- Copy email ----------
(function () {
    const et = document.getElementById('email-text');
    if (et) et.insertAdjacentHTML('beforeend', ' <span id="email-addr">' + mailAddr() + '</span>');
    const copyBtn = document.getElementById('copy-email');
    if (!copyBtn) return;
    copyBtn.addEventListener('click', function () {
        const mail = mailAddr();
        const done = function () {
            copyBtn.innerHTML = currentLang === 'ar' ? 'تم النسخ &#10003;' : 'copied &#10003;';
            copyBtn.classList.add('copied');
            setTimeout(function () {
                copyBtn.innerHTML = 'copy';
                copyBtn.classList.remove('copied');
            }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(mail).then(done).catch(function () { done(); });
        } else { done(); }
    });
})();

// ---------- Toast ----------
let toastTimer = null;
function showToast(html, ms) {
    const t = document.getElementById('toast');
    t.innerHTML = html;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, ms || 3800);
}

// ---------- Matrix rain ----------
function runMatrix(dur) {
    const cv = document.getElementById('matrix-canvas');
    if (cv.classList.contains('on')) return;
    dur = dur || 7000;
    cv.classList.add('on');
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    const ctx = cv.getContext('2d');
    const chars = 'アイウエオカキクケコサシスセソタチツテト0101アナZEROxΔ<>¬▓▒░$#@%&';
    const cols = Math.floor(cv.width / 18);
    const drops = new Array(cols).fill(1);
    const iv = setInterval(function () {
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(0, 0, cv.width, cv.height);
        ctx.fillStyle = '#39ff14';
        ctx.font = '15px monospace';
        for (let i = 0; i < cols; i++) {
            const t = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(t, i * 18, drops[i] * 18);
            if (drops[i] * 18 > cv.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }, 50);
    setTimeout(function () { clearInterval(iv); cv.classList.remove('on'); }, dur);
}

// ---------- Party mode (JS-driven hue filter — works even under reduced-motion) ----------
let partyTimer = null;
let beatTimer = null;

function startParty() {
    const doc = document.documentElement;
    if (partyTimer) return;
    doc.classList.add('party');
    showToast('DISCO MODE — <b>rgb(255, all, 0)</b>');
    let hue = 0;
    partyTimer = setInterval(function () {
        hue = (hue + 5) % 360;
        doc.style.filter = 'hue-rotate(' + hue + 'deg) saturate(1.2)';
    }, 45);
    beatTimer = setInterval(function () {
        if (sfxOn) ton(170 + Math.random() * 60, 0.05, 'square', 0.035);
    }, 160);
    setTimeout(endParty, 8000);
}

function endParty() {
    if (!partyTimer) return;
    clearInterval(partyTimer);
    if (beatTimer) { clearInterval(beatTimer); beatTimer = null; }
    partyTimer = null;
    const doc = document.documentElement;
    doc.classList.remove('party');
    doc.style.filter = '';
}

// ============================================================
// GOD MODE TOOLKIT — sound, hacker credits, sparks, secrets
// ============================================================
let sfxOn = localStorage.getItem('sg_sfx') !== '0';
let sfxAac = null;
function getAac() {
    if (!sfxAac) {
        const C = window.AudioContext || window.webkitAudioContext;
        if (C) sfxAac = new C();
    }
    if (sfxAac && sfxAac.state === 'suspended') try { sfxAac.resume(); } catch (e) {}
    return sfxAac;
}
function ton(f, dur, type, vol) {
    if (!sfxOn) return;
    const ac = getAac(); if (!ac) return;
    try {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = type || 'square';
        o.frequency.value = f;
        g.gain.value = (vol || 0.04);
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + (dur || 0.08));
        o.connect(g); g.connect(ac.destination);
        o.start(); o.stop(ac.currentTime + (dur || 0.08) + 0.03);
    } catch (e) {}
}
function chime() { ton(523, 0.09, 'triangle', 0.05); setTimeout(function () { ton(659, 0.09, 'triangle', 0.05); }, 90); setTimeout(function () { ton(784, 0.14, 'triangle', 0.05); }, 180); }
function fanfare() { [523, 659, 784, 1047].forEach(function (f, i) { setTimeout(function () { ton(f * 2, 0.1, 'square', 0.04); }, i * 110); }); }
function arpeggio() { [440, 554, 659, 880].forEach(function (f, i) { setTimeout(function () { ton(f, 0.08, 'triangle', 0.045); }, i * 70); }); }
function setSfx(on) {
    sfxOn = !!on;
    try { localStorage.setItem('sg_sfx', sfxOn ? '1' : '0'); } catch (e) {}
    if (sfxOn) blip();
    return sfxOn;
}
function blip() { ton(880, 0.05, 'square', 0.03); }
window.addEventListener('pointerdown', function () { const ac = getAac(); if (ac && ac.state === 'suspended') try { ac.resume(); } catch (e) {} }, { once: true });

// ---------- Hacker credits + ranks (persisted) ----------
const RANKS = [
    [0, 'script kiddie'], [3, 'white hat cadet'], [6, 'green hat tinkerer'], [10, 'grey hat apprentice'],
    [18, 'cyber citizen'], [30, 'blue team operator'], [50, 'elite frame breaker'], [80, 'the machine\'s favorite'],
    [120, 'boss of this terminal']
];
let creditsTotal = parseInt(localStorage.getItem('sg_credits') || '0', 10);
function creditRank() {
    let r = RANKS[0][1];
    for (let i = 0; i < RANKS.length; i++) if (creditsTotal >= RANKS[i][0]) r = RANKS[i][1];
    return r;
}
function renderCreditBadge() {
    const b = document.getElementById('credit-badge');
    if (b) b.textContent = '◆ ' + creditsTotal + ' · ' + creditRank();
}
function awardCredits(n, reason) {
    creditsTotal += n;
    try { localStorage.setItem('sg_credits', String(creditsTotal)); } catch (e) {}
    arpeggio();
    showToast('+' + n + ' hacker credits <b>· ' + creditRank() + '</b>' + (reason ? '<br><span class="tty-d">' + reason + '</span>' : ''), 4200);
    renderCreditBadge();
}
renderCreditBadge();

// ---------- Sparks (cursor-less star dust) ----------
let sparkIv = null;
function runSparks(dur) {
    const cv = document.getElementById('spark-canvas');
    if (!cv || cv.classList.contains('on')) return;
    cv.classList.add('on');
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    const ctx = cv.getContext('2d');
    const ps = [];
    const push = function () {
        for (let i = 0; i < 9; i++) ps.push({ x: Math.random() * cv.width, y: Math.random() * cv.height, vx: (Math.random() - 0.5) * 1.5, vy: Math.random() * 1.2 + 0.2, life: 1, hue: Math.floor(Math.random() * 360) });
    };
    push();
    sparkIv = setInterval(function () {
        ctx.clearRect(0, 0, cv.width, cv.height);
        for (let i = ps.length - 1; i >= 0; i--) {
            const p = ps[i];
            p.x += p.vx; p.y += p.vy; p.life -= 0.02;
            if (p.life <= 0 || p.y > cv.height) { ps.splice(i, 1); continue; }
            ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, 6.2832);
            ctx.fillStyle = 'hsla(' + p.hue + ',100%,65%,' + p.life + ')';
            ctx.fill();
        }
    }, 30);
    setTimeout(endSparks, dur || 12000);
}
function endSparks() {
    if (sparkIv) { clearInterval(sparkIv); sparkIv = null; }
    const cv = document.getElementById('spark-canvas');
    if (cv) cv.classList.remove('on');
}
function burst(char, n) {
    for (let i = 0; i < (n || 14); i++) {
        const s = document.createElement('i');
        s.className = 'fx-burst';
        s.textContent = char;
        s.style.left = (Math.random() * 100) + 'vw';
        s.style.top = (30 + Math.random() * 45) + 'vh';
        s.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
        s.style.setProperty('--dy', (-60 - Math.random() * 120) + 'px');
        s.style.color = 'hsl(' + Math.floor(Math.random() * 360) + ',90%,70%)';
        document.body.appendChild(s);
        setTimeout(function () { s.remove(); }, 1150);
    }
}
function booFlash() {
    const f = document.getElementById('boo-flash');
    if (f) { f.classList.remove('on'); void f.offsetWidth; f.classList.add('on'); }
    burst('👻', 10);
}

// ---------- Night shift (03:00–05:00 local) ----------
function isNight() { const h = new Date().getHours(); return h >= 0 && h < 5; }
function toggleNight(force) {
    const on = typeof force === 'boolean' ? force : !document.documentElement.classList.contains('night');
    document.documentElement.classList.toggle('night', on);
    return on;
}
if (isNight()) {
    toggleNight(true);
    setTimeout(function () { showToast('🦉 night shift — the machine sees you. try <b>dsmans</b>', 5000); }, 3500);
}

// ---------- Konami code anywhere on the page ----------
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiPos = 0;
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const need = KONAMI[konamiPos];
    if (e.key.toLowerCase() === need.toLowerCase()) konamiPos++;
    else konamiPos = (e.key === 'ArrowUp') ? 1 : 0;
    if (konamiPos === KONAMI.length) {
        konamiPos = 0;
        fanfare();
        startParty();
        awardCredits(5, 'konami accepted — you win the internet');
    }
});

// ---------- DevTools inspector detection ----------
let devtoolsCaught = false;
setInterval(function () {
    if (devtoolsCaught) return;
    if ((window.outerWidth - window.innerWidth) > 160 || (window.outerHeight - window.innerHeight) > 160) {
        devtoolsCaught = true;
        console.log('%c👀 you opened DevTools. respect. the real secret is: the source code IS the easter egg.', 'color:#00aaff;font-family:monospace');
        awardCredits(2, 'inspector probe');
    }
}, 2000);
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        if (!devtoolsCaught) {
            devtoolsCaught = true;
            console.log('%cthe machine sees everything.', 'color:#39ff14;font-family:monospace');
            awardCredits(1, 'keyboard ninja');
        }
    }
});

// ---------- "the machine sees you" — idle watcher ----------
let idleMs = 0, idleShown = 0;
const IDLE_MSG = [
    'still here? good. the machine remembers.',
    'psst — press <b>Ctrl+Shift+~</b>&nbsp; to unlock a terminal.',
    'you have been staring at this wall for a while. impressive.',
    'try typing <b>matrix</b> or <b>party</b> anywhere on the page.',
    'the quotes keep moving. the cursor does not. unnerving, isnt it?'
];
setInterval(function () { idleMs += 5000; }, 5000);
['mousemove', 'keydown', 'scroll', 'click', 'touchstart', 'wheel'].forEach(function (ev) {
    window.addEventListener(ev, function () { idleMs = 0; }, { passive: true });
});
setInterval(function () {
    if (idleMs >= 45000 && idleShown < 5) {
        showToast('🤖 <b>the machine</b> sees you —<br><span class="tty-d">' + IDLE_MSG[idleShown] + '</span>', 4200);
        idleShown++;
        idleMs = 0;
    }
}, 15000);

// ---------- Hidden terminal ----------
let ttyHistory = [];
let ttyHistPos = -1;

function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
}

function ttyPrint(html) {
    const out = document.getElementById('tty-out');
    const line = document.createElement('div');
    line.className = 'tty-line';
    line.innerHTML = html;
    out.appendChild(line);
    out.scrollTop = out.scrollHeight;
}

function ttyBoot() {
    ttyPrint('<span class="tty-p">[ system ]</span> <span class="tty-d">hidden tty unlocked — type</span> <span class="tty-a2">help</span> <span class="tty-d">/</span> <span class="tty-a2">secrets</span> <span class="tty-d">to begin. keyboard: Ctrl+Shift+~ or Ctrl+K</span>');
    ttyPrint('<span class="tty-d">------------------------------------------------------------</span>');
}

function openTerminal() {
    const o = document.getElementById('tty-overlay');
    o.classList.add('open');
    o.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    chime();
    ttyBoot();
    setTimeout(function () { document.getElementById('tty-input').focus(); }, 30);
}

function closeTerminal() {
    const o = document.getElementById('tty-overlay');
    o.classList.remove('open');
    o.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.getElementById('tty-out').innerHTML = '';
}

const TTY_CMDS = {
    help: function () {
        ttyPrint('<span class="tty-a2">available commands</span><span class="tty-d"> — try them all:</span>');
        [
            'help', 'whoami', 'ls', 'goto &lt;section&gt;', 'theme', 'lang ar|en',
            'cv', 'tools', 'github', 'matrix', 'party', 'neofetch',
            'ping', 'hack', 'sudo &lt;cmd&gt;', 'secret', 'clear', 'exit'
        ].forEach(function (c) {
            ttyPrint('   <span class="tty-p">' + esc(c) + '</span>');
        });
        ttyPrint('<span class="tty-d">psst… try the secrets:  sekret  ·  konami  ·  42</span>');
    },
    whoami: function () {
        ttyPrint('<span class="tty-p">Mohamed Abdelaziz</span> <span class="tty-d">/ alias</span> <span class="tty-a2">DsMans0021</span>');
        ttyPrint('<span class="tty-d">CSE student @ Minya University · indie game dev · cyber tinkerer · member of the machine</span>');
    },
    ls: function () {
        ttyPrint('<span class="tty-d">~ contains:</span>');
        ttyPrint('   <span class="tty-a2">about/  projects/  skills/  achievements/  more/  contact/</span>');
        ttyPrint('   <span class="tty-d">tools.html  cv.pdf  favicon.svg  secrets/</span>');
    },
    goto: function (args) {
        const ids = ['about', 'projects', 'skills', 'achievements', 'more', 'contact'];
        const target = args.split(/\s+/)[0];
        const t = ids.indexOf(target);
        if (t === -1) {
            ttyPrint('<span class="tty-a2">unknown sector:</span> ' + esc(target || '?') + ' <span class="tty-d">(try about, projects, skills, achievements, more, contact)</span>');
            return;
        }
        ttyPrint('<span class="tty-a2">navigating…</span>');
        closeTerminal();
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    },
    theme: function (args) {
        const next = (args.split(/\s+/)[0] === 'light') ? 'light' : ((args.split(/\s+/)[0] === 'dark') ? 'dark' : (document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
        applyTheme(next);
        ttyPrint('<span class="tty-d">theme →</span> <span class="tty-p">' + next + '</span>');
    },
    lang: function (args) {
        const next = (args.split(/\s+/)[0] === 'ar' || args.split(/\s+/)[0] === 'en') ? args.split(/\s+/)[0] : (currentLang === 'ar' ? 'en' : 'ar');
        applyLang(next);
        ttyPrint('<span class="tty-d">language →</span> <span class="tty-p">' + next + '</span>');
    },
    cv: function () { window.open('cv.pdf', '_blank', 'noopener'); ttyPrint('<span class="tty-d">opening cv.pdf…</span>'); },
    tools: function () { ttyPrint('<span class="tty-d">redirecting to the toolbox…</span>'); setTimeout(function () { location.href = 'tools.html'; }, 300); },
    github: function () { window.open('https://github.com/DsMans0021', '_blank', 'noopener'); ttyPrint('<span class="tty-d">beaming you to the repo repo…</span>'); },
    matrix: function () { ttyPrint('<span class="tty-d">wake up, DsMans…</span>'); runMatrix(); },
    party: function () { startParty(); ttyPrint('<span class="tty-p">party mode engaged. the site is now legally distracting.</span>'); },
    neofetch: function () {
        ttyPrint('<pre style="margin:0">   .--.        <span class="tty-p">dsmans@portfolio</span>\n  |o_o |       <span class="tty-d">--------------</span>\n  |:_/ |       OS: Portfolio OS ~ x86_64\n //   \\ \\      Shell: dsmans_bash 7.0\n(|     | )     Resolution: 1920x1080\n/\'\\_   _/`\\     Theme: Terminal Green [dark]\n\\___)=(___/     CPU: Human Intel i7 (2021)\n               Memory: 16GB RAM · 2TB curiosity\n               Projects: 45 · Languages: en/ar</pre>');
    },
    ping: function () {
        const ping = [
            '<span class="tty-d">PING dsmans.me (127.0.0.1): 56 data bytes</span>',
            '<span class="tty-d">64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms</span>',
            '<span class="tty-d">64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.038 ms</span>',
            '<span class="tty-d">--- dsmans.me ping statistics ---</span>',
            '<span class="tty-d">2 packets transmitted, 2 received, 0.0% packet loss</span>'
        ];
        ping.forEach(function (l, i) { setTimeout(function () { ttyPrint(l); }, i * 140); });
    },
    hack: function () {
        ttyPrint('<span class="tty-d">initializing exploit… 1%… 47%… 100%</span>');
        ttyPrint('<span class="tty-d">nothing happened. but</span> <span class="tty-p">+1 hacker credit</span><span class="tty-d"> was earned honestly.</span>');
        showToast('+1 hacker credit <b>earned</b>');
    },
    sudo: function () {
        ttyPrint('<span class="tty-a2">Great job, white hat.</span> <span class="tty-d">Permission denied. This incident will be reported to your sense of ethics.</span>');
    },
    secret: function () {
        ttyPrint('<span class="tty-p">~ the answer is 42.</span>');
        setTimeout(function () { showToast('the answer is <b>42</b>. tell no one.'); }, 400);
    },
    sekret: function () {
        ttyPrint('<span class="tty-p">you read me. the real easter egg isn\'t a feature — it\'s the mailto.</span>');
    },
    konami: function () {
        ttyPrint('<span class="tty-p">↑↑↓↓←→←→BA</span> <span class="tty-d">accepted. you win the internet.</span>');
        startParty();
    },
    42: function () {
        ttyPrint('<span class="tty-p">6 × 9 = 42. check your math engine.</span>');
    },
    clear: function () { document.getElementById('tty-out').innerHTML = ''; },
    exit: function () { closeTerminal(); },
    quit: function () { closeTerminal(); }
};

// extended commands (evil the toolkit needs)
Object.assign(TTY_CMDS, {
    help: function () {
        ttyPrint('<span class="tty-a2">available commands</span><span class="tty-d"> — try them all:</span>');
        ['help', 'secrets', 'whoami', 'ls', 'goto &lt;section&gt;', 'theme', 'lang ar|en', 'cv', 'tools', 'github', 'neofetch', 'ping', 'sound on|off', 'matrix', 'party', 'sparks', 'quote', 'love', 'coffee', 'ghost', 'time', 'morse', 'rank', 'credits', 'night', 'hack', 'sudo &lt;cmd&gt;', 'secret', 'konami', '42', 'clear', 'exit']
        .forEach(function (c) { ttyPrint('   <span class="tty-p">' + esc(c) + '</span>'); });
        ttyPrint('<span class="tty-d">type</span> <span class="tty-p">secrets</span> <span class="tty-d">for hidden keys &amp; shortcuts.</span>');
    },
    secrets: function () {
        ttyPrint('<span class="tty-a2">hidden keys</span><span class="tty-d"> — type these anywhere on the page:</span>');
        ['dsmans', 'دسمانس', 'matrix', 'party', 'disco', 'hack', 'secret', 'love', 'coffee', 'sparks', 'ghost'].forEach(function (c) { ttyPrint('   <span class="tty-p">' + c + '</span>'); });
        ttyPrint('<span class="tty-d">and on this keyboard:</span>');
        ['Ctrl+K / Ctrl+~ / Ctrl+Shift+~  → terminal', 'Ctrl+Alt+M → matrix', 'Ctrl+Alt+D → disco', '↑↑↓↓←→←→BA → konami', 'click the avatar 7×', 'open DevTools 👀'].forEach(function (c) { ttyPrint('   <span class="tty-p">' + esc(c) + '</span>'); });
    },
    hack: function () {
        ttyPrint('<span class="tty-d">initializing exploit… 1%… 47%… 100%</span>');
        ttyPrint('<span class="tty-d">nothing happened. but</span> <span class="tty-d">+1 hacker credit</span><span class="tty-d"> was earned honestly.</span>');
        awardCredits(1, 'exploit: confidence');
    },
    konami: function () {
        ttyPrint('<span class="tty-p">↑↑↓↓←→←→BA</span> <span class="tty-d">accepted. you win the internet.</span>');
        fanfare();
        startParty();
        awardCredits(5, 'konami (terminal route)');
    },
    matrix: function () { ttyPrint('<span class="tty-d">wake up, DsMans…</span>'); ton(220, 0.25, 'sine', 0.04); runMatrix(); },
    party: function () { startParty(); ttyPrint('<span class="tty-p">party mode engaged. the site is now legally distracting.</span>'); },
    sparks: function () { runSparks(); ttyPrint('<span class="tty-d">star dust deployed.</span>'); },
    love: function () { burst('❤️', 16); ttyPrint('<span class="tty-p">sentiment detected.</span>'); awardCredits(1, 'feelings, chaotic'); },
    coffee: function () { showToast('☕ coffee break detected — productivity +1'); ttyPrint('<span class="tty-d">barista mode on.</span>'); awardCredits(1, 'caffeine'); },
    ghost: function () { booFlash(); ttyPrint('<span class="tty-a2">BOO!</span> <span class="tty-d">sorry. i had to.</span>'); awardCredits(1, 'spooked'); },
    quote: function () {
        const q = (typeof QUOTES !== 'undefined' && QUOTES.length) ? QUOTES[Math.floor(Math.random() * QUOTES.length)] : null;
        if (!q) { ttyPrint('<span class="tty-d">quote engine offline.</span>'); return; }
        ttyPrint('<span class="tty-p">"' + esc(q.text) + '"</span>');
        ttyPrint('<span class="tty-d">— ' + esc(q.author) + '</span>');
    },
    time: function () {
        const d = new Date();
        ttyPrint('<span class="tty-d">local time:</span> <span class="tty-p">' + d.toLocaleTimeString() + '</span>');
        if (isNight()) ttyPrint('<span class="tty-a2">it is very late. the night shift is on.</span>');
    },
    morse: function () {
        const map = { A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', 0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.' };
        const msg = 'MEDOZIZO008';
        let t = 0, out = '';
        ttyPrint('<span class="tty-d">morse of my contact:</span> <span class="tty-p">' + esc(msg) + '</span>');
        String(msg).split('').forEach(function (ch) {
            const code = map[ch] || '';
            out += ch + ' ' + code + '   ';
            code.split('').forEach(function (c) {
                setTimeout(function () { ton(1200, c === '.' ? 0.05 : 0.16, 'sine', 0.05); }, t);
                t += (c === '.' ? 90 : 240);
            });
            t += 200;
        });
        setTimeout(function () { ttyPrint('<span class="tty-d">' + out + '</span>'); }, 250);
    },
    rank: function () { ttyPrint('<span class="tty-d">hacker credits:</span> <span class="tty-p">' + creditsTotal + '</span> <span class="tty-d">· rank:</span> <span class="tty-a2">' + creditRank() + '</span>'); },
    credits: function () { TTY_CMDS.rank(); },
    sound: function (args) {
        const a = args.trim();
        const state = a === 'off' ? setSfx(false) : (a === 'on' ? setSfx(true) : setSfx(!sfxOn));
        ttyPrint('<span class="tty-d">sound fx →</span> <span class="tty-p">' + (state ? 'ON' : 'OFF') + '</span>');
    },
    night: function () {
        const on = toggleNight();
        ttyPrint('<span class="tty-d">night shift →</span> <span class="tty-p">' + (on ? 'ON 🦉' : 'OFF') + '</span>');
    },
    snake: function () { snakeStart(); }
});

function ttyRun(raw) {
    const input = document.getElementById('tty-input');
    const cmd = raw.trim();
    ttyPrint('<span class="tty-p">dsmans@portfolio:~$</span> ' + esc(cmd));
    ttyHistory.push(raw);
    ttyHistPos = ttyHistory.length;
    if (!cmd) return;
    if (cmd === 'rm -rf /') {
        ttyPrint('<span class="tty-a2">permission denied — the world needs this site.</span>');
        return;
    }
    const parts = cmd.split(/\s+/);
    const name = parts[0];
    const handler = TTY_CMDS[name];
    if (handler) {
        handler(parts.slice(1).join(' '));
    } else if (name === 'goto' || name === 'cd') {
        TTY_CMDS.goto(parts.slice(1).join(' '));
    } else {
        ttyPrint('<span class="tty-a2">command not found:</span> <span class="tty-d">' + esc(name) + ' — try</span> <span class="tty-p">help</span>');
    }
    input.value = '';
}

const ttyInput = document.getElementById('tty-input');
ttyInput.addEventListener('keydown', function (e) {
    if (snakeSt && snakeSt.running) {
        const dirs = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right', W: 'up', S: 'down', A: 'left', D: 'right' };
        if (dirs[e.key]) {
            e.preventDefault();
            snakeTurn(dirs[e.key]);
            return;
        }
        if (e.key === 'Enter' || e.key === 'g' || e.key === 'q') {
            e.preventDefault();
            snakeEnd(true);
            return;
        }
        if (e.key === 'Escape') { e.preventDefault(); snakeEnd(true); closeTerminal(); return; }
        e.preventDefault();
        return;
    }
    if (e.key === 'Enter') {
        e.preventDefault();
        ttyRun(ttyInput.value);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (ttyHistPos > 0) { ttyHistPos--; ttyInput.value = ttyHistory[ttyHistPos] || ''; }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (ttyHistPos < ttyHistory.length - 1) { ttyHistPos++; ttyInput.value = ttyHistory[ttyHistPos]; }
        else { ttyHistPos = ttyHistory.length; ttyInput.value = ''; }
    } else if (e.key === 'Escape') {
        e.preventDefault();
        closeTerminal();
    }
});

document.getElementById('tty-close').addEventListener('click', closeTerminal);

// ---------- SNAKE (playable inside the terminal) ----------
let snakeSt = null;
const SNAKE_ROWS = 16;
const SNAKE_COLS = 30;

function snakeTurn(dir) {
    if (!snakeSt) return;
    const opp = { up: 'down', down: 'up', left: 'right', right: 'left' };
    if (snakeSt.dir !== opp[dir]) snakeSt.dir = dir;
}

function snakeEnd(manual) {
    if (!snakeSt) return;
    clearInterval(snakeSt.iv);
    snakeSt.running = false;
    if (!manual) {
        ttyPrint('<span class="tty-a2">game over</span> <span class="tty-d">· score:</span> <span class="tty-p">' + snakeSt.score + '</span>');
        ttyPrint('<span class="tty-d">type</span> <span class="tty-p">snake</span> <span class="tty-d">to respawn.</span>');
    } else {
        ttyPrint('<span class="tty-d">snake retired. score:</span> <span class="tty-p">' + snakeSt.score + '</span>');
    }
    snakeSt = null;
}

function snakeDraw() {
    const g = snakeSt;
    const cells = new Set(g.body.map(function (c) { return c[0] * SNAKE_COLS + c[1]; }));
    const head = g.body[g.body.length - 1];
    let s = '';
    for (let r = 0; r < SNAKE_ROWS; r++) {
        for (let c = 0; c < SNAKE_COLS; c++) {
            const k = r * SNAKE_COLS + c;
            if (g.food[0] === r && g.food[1] === c) s += '●';
            else if (head[0] === r && head[1] === c) s += '◉';
            else if (cells.has(k)) s += '■';
            else s += '·';
        }
        s += '\n';
    }
    g.pre.textContent = s + '   score: ' + g.score;
}

function snakeTick() {
    const g = snakeSt;
    if (!g || !g.running) return;
    const head = g.body[g.body.length - 1];
    let hr = head[0], hc = head[1];
    if (g.dir === 'up') hr--;
    else if (g.dir === 'down') hr++;
    else if (g.dir === 'left') hc--;
    else hc++;
    if (hr < 0 || hr >= SNAKE_ROWS || hc < 0 || hc >= SNAKE_COLS) { snakeEnd(false); return; }
    const eating = hr === g.food[0] && hc === g.food[1];
    const hitSelf = g.body.some(function (c) { return c[0] === hr && c[1] === hc; });
    if (hitSelf) { snakeEnd(false); return; }
    g.body.push([hr, hc]);
    if (eating) {
        g.score += 10;
        let ny, nx;
        do { ny = Math.floor(Math.random() * SNAKE_ROWS); nx = Math.floor(Math.random() * SNAKE_COLS); }
        while (g.body.some(function (c) { return c[0] === ny && c[1] === nx; }));
        g.food = [ny, nx];
    } else {
        g.body.shift();
    }
    snakeDraw();
    scrollTtyBottom();
}

function snakeStart() {
    if (snakeSt) { ttyPrint('<span class="tty-d">already running — press Enter to quit.</span>'); return; }
    ttyPrint('<span class="tty-a2">SNAKE</span> <span class="tty-d">— arrows / WASD steer · Enter quits</span>');
    const g = {
        body: [], dir: 'right', score: 0, running: true, iv: null, pre: null, food: null
    };
    const cy = Math.floor(SNAKE_ROWS / 2), cx = Math.floor(SNAKE_COLS / 3);
    g.body.push([cy, cx], [cy, cx + 1], [cy, cx + 2]);
    const wrap = document.createElement('div');
    wrap.className = 'snake-wrap';
    const pre = document.createElement('pre');
    pre.className = 'snake-grid';
    wrap.appendChild(pre);
    document.getElementById('tty-out').appendChild(wrap);
    g.pre = pre;
    do { g.food = [Math.floor(Math.random() * SNAKE_ROWS), Math.floor(Math.random() * SNAKE_COLS)]; }
    while (g.body.some(function (c) { return c[0] === g.food[0] && c[1] === g.food[1]; }));
    snakeSt = g;
    ttyInput.value = '';
    snakeDraw();
    g.iv = setInterval(snakeTick, 130);
    scrollTtyBottom();
}

function scrollTtyBottom() {
    const out = document.getElementById('tty-out');
    if (out) out.scrollTop = out.scrollHeight;
}
document.getElementById('tty-overlay').addEventListener('click', function (e) {
    if (e.target === this) closeTerminal();
});

// keyboard shortcuts + secret words anywhere on the page
let secretBuf = '';
const SECRET_WORDS = {
    dsmans: function () {
        openTerminal();
        ttyPrint('<span class="tty-p">root access granted.</span> <span class="tty-d">you typed my name — respect.</span>');
        awardCredits(1, 'name drop');
    },
    'دسمانس': function () {
        openTerminal();
        ttyPrint('<span class="tty-p">تم منح صلاحيات الجذر.</span> <span class="tty-d">كتبت اسمي — تحية.</span>');
        awardCredits(1, 'name drop (arabic edition)');
    },
    matrix: function () { runMatrix(); awardCredits(1, 'red pill taken'); },
    party: function () { startParty(); awardCredits(2, 'disco fever'); },
    disco: function () { startParty(); awardCredits(2, 'disco inferno'); },
    hack: function () { showToast('nothing happened. but <b>+1 hacker credit</b>'); awardCredits(1, 'exploit: confidence'); },
    secret: function () { showToast('the answer is <b>42</b>. tell no one.'); awardCredits(1, 'found 42'); },
    love: function () { burst('❤️', 18); awardCredits(1, 'sentiment detected'); },
    coffee: function () { showToast('☕ coffee break detected — productivity +1'); awardCredits(1, 'caffeine'); },
    sparks: function () { runSparks(); awardCredits(1, 'particle physics'); },
    ghost: function () { booFlash(); awardCredits(1, 'spooked'); },
    sudo: function () { showToast('nice try. permission denied — but respect earned.'); }
};

document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey && (e.key === '`' || e.key === '~')) || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        openTerminal();
        return;
    }
    if (e.ctrlKey && e.altKey && e.key === 'm') { e.preventDefault(); runMatrix(); return; }
    if (e.ctrlKey && e.altKey && e.key === 'd') { e.preventDefault(); startParty(); return; }
    const active = document.activeElement;
    const typing = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
    const k = e.key;
    if (k && k.length === 1) {
        if (typing) { secretBuf = ''; return; }
        secretBuf = (secretBuf + k.toLowerCase()).slice(-6);
        for (const w in SECRET_WORDS) {
            if (secretBuf === w) {
                secretBuf = '';
                SECRET_WORDS[w]();
                break;
            }
        }
    } else if (k === 'Backspace') {
        if (!typing) secretBuf = secretBuf.slice(0, -1);
    } else if (typing && e.key === 'Escape') {
        secretBuf = '';
    }
});

// ---------- Mobile easter eggs (no keyboard needed) ----------
(function () {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const idleTarget = function (t) { return !t.closest('a, button, input, textarea, select'); };

    // triple-tap anywhere -> party
    let taps = [];
    ['pointerup'].forEach(function (ev) {
        document.addEventListener(ev, function (e) {
            if (!idleTarget(e.target)) { taps = []; return; }
            const now = Date.now();
            taps.push(now);
            taps = taps.filter(function (t) { return now - t < 600; });
            if (taps.length >= 3) { taps = []; startParty(); }
        });
    });

    // double-tap the nav logo or hero name -> sparks
    var dtTarget = null, dtLast = 0;
    document.addEventListener('pointerup', function (e) {
        const el = e.target.closest('.nav-logo, h1.hero-name');
        if (!el) return;
        const now = Date.now();
        if (dtTarget === el && now - dtLast < 500) { dtTarget = null; dtLast = 0; runSparks(); }
        else { dtTarget = el; dtLast = now; }
    });

    // long-press (600ms) hero avatar -> matrix ; footer credit badge -> rank
    let lpTimer = null, lpFire = false;
    document.addEventListener('pointerdown', function (e) {
        const avatarEl = e.target.closest('.hero-avatar');
        const badgeEl = e.target.closest('#credit-badge');
        if (!avatarEl && !badgeEl) return;
        lpFire = false;
        lpTimer = setTimeout(function () {
            lpFire = true;
            if (avatarEl) {
                e.preventDefault();
                runMatrix();
                showToast('🦾 the machine feels that touch.');
            }
            if (badgeEl) {
                showToast('<b>' + creditsTotal + '</b> hacker credits · rank: <b>' + creditRank() + '</b>', 3000);
            }
        }, 600);
    });
    document.addEventListener('pointerup', function () { clearTimeout(lpTimer); lpTimer = null; });

    // tap the footer hint -> open terminal (works on mobile too)
    var hint = document.querySelector('.footer-hint');
    if (hint) hint.addEventListener('click', function () { openTerminal(); });
    var dt = document.getElementById('drawer-terminal');
    if (dt) dt.addEventListener('click', function () { setDrawer(false); openTerminal(); });
})();

// ---------- Avatar clicks easter egg ----------
let avatarClicks = 0;
const avatar = document.querySelector('.hero-avatar');
if (avatar) {
    avatar.addEventListener('click', function () {
        avatarClicks++;
        if (avatarClicks >= 7) {
            avatarClicks = 0;
            awardCredits(1, 'avatar beater — you like clicking');
            console.log('%c+1 hacker credit — avatar beater. Try  dsmans.tty()  next.', 'color:#39ff14;font-family:monospace');
        }
    });
}

// ---------- Console easter eggs ----------
const banner = [
    '',
    '  ██████╗ ███████╗███╗   ███╗ █████╗ ███╗   ██╗███████╗',
    '  ██╔══██╗██╔════╝████╗ ████║██╔══██╗████╗  ██║██╔════╝',
    '  ██║  ██║███████╗██╔████╔██║███████║██╔██╗ ██║███████╗',
    '  ██║  ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║╚════██║',
    '  ██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║███████║',
    '  ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝',
    '',
    '  welcome to the machine. party tricks:',
    '    dsmans.tty()       → open the hidden terminal',
    '    dsmans.matrix()    → wake up, DsMans',
    '    dsmans.party()     → disco mode',
    '    dsmans.sparks()    → star dust',
    '    dsmans.credits()   → your hacker net worth',
    '    dsmans.morse()     → my contact in morse',
    '',
    '  or just press  Ctrl+Shift+~  on the page.',
    '  hint: type  matrix · party · love · ghost · coffee  anywhere.',
    ''
].join('\n');

setTimeout(function () {
    console.log(banner);
    console.log('%c+ you can also open it by typing  dsmans  on the page or clicking the avatar 7 times.',
        'color:#00aaff;font-family:monospace');
}, 900);

window.dsmans = Object.assign(function dsmans() {
    openTerminal();
    return '~ access granted — try "help" or "secrets"';
}, {
    tty: function () { openTerminal(); },
    matrix: function () { runMatrix(); },
    party: function () { startParty(); },
    sparks: function () { runSparks(); },
    sound: function (on) { return typeof on === 'boolean' ? setSfx(on) : setSfx(!sfxOn); },
    credits: function () { return creditsTotal + ' credit(s) · rank: ' + creditRank(); },
    night: function () { return toggleNight() ? 'night shift on' : 'night shift off'; },
    konami: function () { fanfare(); startParty(); awardCredits(5, 'konami (console route)'); },
    morse: function () { TTY_CMDS.morse(); },
    secrets: function () { console.table(Object.keys(SECRET_WORDS).concat(['↑↑↓↓←→←→BA', 'Ctrl+Alt+M', 'Ctrl+Alt+D', 'avatar ×7', 'DevTools'])); },
    version: '2.1.0',
    profile: { name: 'Mohamed Abdelaziz', alias: 'DsMans0021', role: 'CSE Student @ Minya University · Game Dev · Cyber Tinkerer', location: 'Egypt 🌍' }
});

// ---------- Light privacy-friendly analytics (GoatCounter) ----------
// To enable: create an account at goatcounter.com, then put your site slug below.
// While ANALYTICS.site is '' nothing is loaded and no third-party request is made.
const ANALYTICS = { provider: 'goatcounter', site: '' };
if (ANALYTICS.site) {
    (function () {
        const el = document.createElement('script');
        el.async = true;
        el.setAttribute('data-goatcounter', 'https://' + ANALYTICS.site + '.goatcounter.com/count');
        el.src = 'https://gc.zgo.at/count.js';
        document.head.appendChild(el);
    })();
}

// ---------- PWA: offline-first service worker (only on fresh https) ----------
if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {});
    });
}

// initial stats fill (covers the render already done by the main script)
refreshGithubStats();


})();
