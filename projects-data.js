/* Shared project data — used by index.html and project.html */
const PROJECTS = [
    {
        "id": "maya",
        "name": "Maya",
        "category": "games",
        "status": "completed",
        "featured": true,
        "lang": "C# · Unity",
        "icon": "fa-solid fa-gamepad",
        "image": "assets/projects/maya.png",
        "year": "2025",
        "role": {
            "en": "Solo developer",
            "ar": "مطوّر منفرد"
        },
        "demo": "https://itskareem.itch.io/maya",
        "code": "https://github.com/DsMans0021/Maya",
        "case": "maya.html",
        "desc": {
            "en": "A complete Unity game submitted on itch.io. Built with C# featuring custom gameplay mechanics and polished presentation.",
            "ar": "لعبة Unity اكتملت ونُشرت على itch.io. صُنعت بلغة C# وتتميز بآليات لعب مخصّصة وعرض مصقول."
        },
        "details": {
            "en": {
                "subtitle": "A small Unity game with a big personality.",
                "overview": "Maya is a complete, playable Unity project published on itch.io. It was built from scratch in C#: gameplay loop, player controls, UI, audio hooks, and a polished build that people can actually download and play. The focus was on finishing a real game end-to-end instead of leaving another prototype behind.",
                "features": [
                    "Complete gameplay loop with a clear start and finish",
                    "Custom player controls and interaction systems",
                    "Polished UI, menus, and game feel",
                    "Published and playable on itch.io"
                ],
                "challenges": [
                    "Keeping scope small enough to actually finish",
                    "Balancing difficulty without playtesters",
                    "Making a small project feel intentional and polished"
                ],
                "learned": "Shipping beats hoarding prototypes. A finished small game teaches more than a folder full of half-built ideas."
            },
            "ar": {
                "subtitle": "لعبة Unity صغيرة لكن بشخصية كبيرة.",
                "overview": "مايا مشروع Unity كامل وقابل للعب منشور على itch.io. اتبنى من الصفر بلغة C#: حلقة اللعب، تحكم اللاعب، الواجهة، الصوت، وبناء نهائي يقدر أي حد ينزّله ويلعبه. التركيز كان على إنهاء لعبة حقيقية من الأول للآخر بدل ما تفضل نموذج أولي.",
                "features": [
                    "حلقة لعب كاملة ببداية ونهاية واضحة",
                    "تحكم مخصّص للاعب وأنظمة تفاعل",
                    "واجهة وقوائم مصقولة وإحساس لعب مضبوط",
                    "منشورة وقابلة للعب على itch.io"
                ],
                "challenges": [
                    "الحفاظ على نطاق صغير ينفع يتنهّي فعلاً",
                    "موازنة الصعوبة من غير مختبِرين",
                    "خلي المشروع الصغير يبان مقصود ومصقول"
                ],
                "learned": "إنك تسلّم أحسن من إنك تجمع نماذج أولية. لعبة صغيرة مكتملة بتعلّمك أكتر من فولدر مليان أفكار ناقصة."
            }
        },
        "webp": "assets/projects/maya.webp",
        "page": "project-maya.html"
    },
    {
        "id": "fps",
        "name": "FPS Multiplayer Game",
        "category": "games",
        "status": "inprogress",
        "featured": true,
        "lang": "C# · Unity · PUN2",
        "icon": "fa-solid fa-crosshairs",
        "image": "assets/projects/fps.png",
        "year": "2025 — now",
        "role": {
            "en": "Solo developer",
            "ar": "مطوّر منفرد"
        },
        "demo": null,
        "code": "https://github.com/DsMans0021/FPS-Game",
        "case": "fps-game.html",
        "desc": {
            "en": "Multiplayer FPS built with Unity and C#, supporting 2+ players over LAN/internet using PUN2 Photon networking.",
            "ar": "لعبة تصويب من منظور أول متعددة اللاعبين ببناء Unity وC#، تدعم لاعبين أو أكثر عبر الشبكة المحلية أو الإنترنت باستخدام شبكات PUN2 Photon."
        },
        "details": {
            "en": {
                "subtitle": "Multiplayer FPS networking, built the hard way.",
                "overview": "An in-progress multiplayer first-person shooter built in Unity and C#. Players connect through Photon PUN2 and share a synchronized match over LAN or the internet. The project is a deep dive into networking: ownership, state sync, spawn logic, and keeping two clients agreeing on the same reality.",
                "features": [
                    "2+ player online/LAN matches",
                    "Photon PUN2 networking",
                    "Synchronized player movement and shooting",
                    "Room creation and join flow"
                ],
                "challenges": [
                    "Keeping state in sync across clients",
                    "Handling latency and jitter",
                    "Avoiding duplicated or lost actions",
                    "Testing multiplayer alone"
                ],
                "learned": "Multiplayer is 20% gameplay and 80% making two machines agree. Networking bugs are a different species."
            },
            "ar": {
                "subtitle": "شبكات FPS متعددة اللاعبين، بالطريقة الصعبة.",
                "overview": "لعبة تصويب من منظور أول متعددة اللاعبين قيد التطوير، مبنية بـ Unity وC#. اللاعبون بيتوصلوا عبر Photon PUN2 ويتشاركوا مباراة متزامنة على الشبكة المحلية أو الإنترنت. المشروع غوص عميق في الشبكات: الملكية، مزامنة الحالة، منطق الظهور، وخلي جهازين متفقين على نفس الواقع.",
                "features": [
                    "مباريات أونلاين/محلية للاعبين أو أكثر",
                    "شبكات Photon PUN2",
                    "مزامنة حركة اللاعب والتصويب",
                    "إنشاء غرفة والانضمام إليها"
                ],
                "challenges": [
                    "الحفاظ على تزامن الحالة بين الأجهزة",
                    "التعامل مع الـlatency والتذبذب",
                    "منع تكرار أو فقدان الأحداث",
                    "اختبار اللعب الجماعي لوحدك"
                ],
                "learned": "الملتيبلاير 20% لعب و80% خلي جهازين يتفقوا. باجات الشبكات نوع تاني خالص."
            }
        },
        "webp": "assets/projects/fps.webp",
        "page": "project-fps.html"
    },
    {
        "id": "room-designer",
        "name": "Room Designer",
        "category": "apps",
        "status": "inprogress",
        "featured": false,
        "lang": "Python · Tkinter",
        "icon": "fa-solid fa-couch",
        "image": "assets/projects/room-designer.png",
        "year": "2026",
        "role": {
            "en": "Solo developer",
            "ar": "مطوّر منفرد"
        },
        "demo": null,
        "code": "https://github.com/DsMans0021/Room-Designer0021",
        "case": "project.html?id=room-designer",
        "desc": {
            "en": "An early-stage desktop room design app built with Python and Tkinter, focused on laying out rooms with drag-and-drop controls.",
            "ar": "تطبيق سطح مكتب مبكر لتصميم الغرف مبني بـ Python وTkinter، ويركز على ترتيب الغرف بعناصر سحب وإفلات."
        },
        "details": {
            "en": {
                "subtitle": "A desktop canvas for planning a room before you move the furniture.",
                "overview": "Room Designer is an early-stage Python/Tkinter desktop application for experimenting with room layouts. The goal is a lightweight design canvas where furniture and room elements can be placed, moved, and rearranged without opening a heavy 3D suite. The repository is still being prepared, so the case study focuses on the problem and the planned interaction model rather than claiming a finished product.",
                "features": [
                    "Desktop room-layout editor concept",
                    "Python + Tkinter interface",
                    "Drag-and-drop placement as the core interaction",
                    "Lightweight alternative to full 3D design software"
                ],
                "challenges": [
                    "Designing a usable canvas interaction with Tkinter",
                    "Keeping object placement and state predictable",
                    "Balancing a simple UI with real layout flexibility",
                    "Moving from a prototype to a complete tool"
                ],
                "learned": "A visual editor is mostly state management wearing a nice coat. The canvas is the easy part; keeping every object's position, selection, and history consistent is the real work."
            },
            "ar": {
                "subtitle": "لوحة سطح مكتب لتخطيط الغرفة قبل ما تحرك الأثاث.",
                "overview": "Room Designer تطبيق سطح مكتب مبكر بـ Python/Tkinter لتجربة تخطيطات الغرف. الهدف لوحة تصميم خفيفة تقدر تحط فيها الأثاث وعناصر الغرفة وتحركها وترتبها من غير ما تفتح برنامج 3D تقيل. المستودع لسه بيتجهز، فدراسة الحالة بتركز على المشكلة ونموذج التفاعل المخطط له بدل ما تدّعي منتج مكتمل.",
                "features": [
                    "فكرة محرر تخطيط غرف لسطح المكتب",
                    "واجهة Python + Tkinter",
                    "السحب والإفلات كتفاعل أساسي",
                    "بديل خفيف لبرامج التصميم ثلاثية الأبعاد"
                ],
                "challenges": [
                    "تصميم تفاعل لوحة قابل للاستخدام بـ Tkinter",
                    "خلي وضع العناصر وحالتها متوقعة",
                    "الموازنة بين واجهة بسيطة ومرونة تخطيط حقيقية",
                    "الانتقال من نموذج أولي لأداة كاملة"
                ],
                "learned": "محرر بصري في الأساس إدارة حالة لابسة وش أحمر. اللوحة هي الجزء السهل؛ الحفاظ على موقع كل عنصر وتحديده وسجل التعديلات هو الشغل الحقيقي."
            }
        },
        "webp": "assets/projects/room-designer.webp",
        "page": "project-room-designer.html"
    },
    {
        "id": "dsocial",
        "name": "DsocialMans0021",
        "category": "security",
        "status": "completed",
        "featured": false,
        "lang": "Python · Selenium · Flask",
        "icon": "fa-solid fa-user-secret",
        "image": "assets/projects/dsocial.png",
        "year": "2026",
        "role": {
            "en": "Solo developer",
            "ar": "مطوّر منفرد"
        },
        "demo": null,
        "code": "https://github.com/DsMans0021/DsocialMans0021",
        "case": "project.html?id=dsocial",
        "desc": {
            "en": "A Python social-media security research framework covering 21 authorized testing methods across major platforms. Educational and authorized use only.",
            "ar": "إطار بحثي أمني بلغة Python لاختبار أمان منصات التواصل الاجتماعي عبر 21 طريقة اختبار مصرّح بها. للاستخدام التعليمي والمصرّح فقط."
        },
        "details": {
            "en": {
                "subtitle": "A 21-method social-media security testing framework.",
                "overview": "DsocialMans0021 is a Python-based security research framework that groups 21 testing methods for Facebook, Instagram, TikTok, and WhatsApp into one menu-driven tool. It combines Selenium automation, Flask-based test pages, session handling, tunneling options, and reporting utilities. The project is documented as educational and authorized-testing only, and the case study treats it as a study in offensive tooling, not a deployment guide.",
                "features": [
                    "21 organized social-media testing methods",
                    "Menu-driven Python interface",
                    "Selenium and Flask-based components",
                    "Support for Facebook, Instagram, TikTok, and WhatsApp",
                    "Tunneling and session-management utilities"
                ],
                "challenges": [
                    "Keeping a large multi-module tool organized",
                    "Handling browser automation and sessions reliably",
                    "Documenting ethical scope clearly",
                    "Testing across changing platform interfaces"
                ],
                "learned": "Offensive tooling is a lesson in responsibility. The same automation that makes testing faster also makes misuse easier, so scope, documentation, and authorization have to be designed in from the start."
            },
            "ar": {
                "subtitle": "إطار لاختبار أمان منصات التواصل بـ21 طريقة.",
                "overview": "DsocialMans0021 إطار بحثي أمني بلغة Python بيجمع 21 طريقة اختبار لفيسبوك وإنستجرام وتيك توك وواتساب في أداة واحدة بقوائم. بيستخدم أتمتة Selenium وصفحات Flask وإدارة جلسات وخيارات أنفاق وأدوات تقارير. المشروع موثّق كتعليمي واختبار مصرّح به فقط، ودراسة الحالة بتتعامل معاه كدراسة في الأدوات الهجومية مش دليل نشر.",
                "features": [
                    "21 طريقة اختبار منظمة لمنصات التواصل",
                    "واجهة Python مبنية على القوائم",
                    "مكوّنات Selenium وFlask",
                    "دعم فيسبوك وإنستجرام وتيك توك وواتساب",
                    "أدوات أنفاق وإدارة جلسات"
                ],
                "challenges": [
                    "الحفاظ على تنظيم أداة كبيرة متعددة الوحدات",
                    "التعامل مع أتمتة المتصفح والجلسات بشكل موثوق",
                    "توثيق النطاق الأخلاقي بوضوح",
                    "الاختبار مع تغير واجهات المنصات"
                ],
                "learned": "الأدوات الهجومية درس في المسؤولية. نفس الأتمتة اللي بتخلي الاختبار أسرع بتخلي إساءة الاستخدام أسهل، فالنطاق والتوثيق والتصريح لازم يكونوا جزء من التصميم من الأول."
            }
        },
        "webp": "assets/projects/dsocial.webp",
        "page": "project-dsocial.html"
    },
    {
        "id": "fk-wifi",
        "name": "FkWiFiThiefs",
        "category": "networking",
        "status": "completed",
        "featured": false,
        "lang": "Python · Scapy · Flask",
        "icon": "fa-solid fa-network-wired",
        "image": "assets/projects/fk-wifi.png",
        "year": "2026",
        "role": {
            "en": "Solo developer",
            "ar": "مطوّر منفرد"
        },
        "demo": null,
        "code": "https://github.com/DsMans0021/fk-wifi-thiefs",
        "case": "project.html?id=fk-wifi",
        "desc": {
            "en": "A Windows network-security tool for live device discovery, ARP-spoofing tests, and multi-target tracking on networks you own or are authorized to test.",
            "ar": "أداة أمن شبكات لنظام Windows لاكتشاف الأجهزة مباشرة واختبار ARP spoofing وتتبع أهداف متعددة على شبكات تملكها أو مصرّح باختبارها."
        },
        "details": {
            "en": {
                "subtitle": "See every device on the network — then test what happens when traffic is redirected.",
                "overview": "FkWiFiThiefs is a Windows-focused Python network security tool built around Scapy. It performs continuous device discovery, identifies devices by MAC vendor, stores history in SQLite, and supports multi-target ARP-spoofing tests with individual redirect URLs. A Flask component serves redirect pages, and the tool restores network settings on exit. It is intended strictly for networks you own or have explicit permission to test.",
                "features": [
                    "Live network scanning and device discovery",
                    "MAC vendor lookup and SQLite device history",
                    "Multi-target ARP-spoofing test mode",
                    "Custom redirect pages via Flask",
                    "Automatic cleanup of hosts, firewall, and IP forwarding"
                ],
                "challenges": [
                    "Keeping background scanning stable while attacks run",
                    "Restoring system state reliably after interruption",
                    "Handling multiple targets independently",
                    "Making a terminal tool readable under pressure"
                ],
                "learned": "Network tools live or die by cleanup. The attack path is the flashy part; restoring the machine to a clean state is what makes the tool trustworthy."
            },
            "ar": {
                "subtitle": "شوف كل جهاز على الشبكة — وبعدين اختبر إيه اللي يحصل لما الترافيك يتوجه.",
                "overview": "FkWiFiThiefs أداة أمن شبكات بلغة Python لنظام Windows مبنية حول Scapy. بتعمل اكتشاف مستمر للأجهزة، وتتعرف على الأجهزة من خلال MAC vendor، وتخزن السجل في SQLite، وتدعم اختبار ARP spoofing متعدد الأهداف مع روابط توجيه مختلفة لكل هدف. مكوّن Flask بيقدم صفحات التوجيه، والأداة بترجع إعدادات الشبكة عند الخروج. مخصصة فقط لشبكات تملكها أو عندك تصريح صريح باختبارها.",
                "features": [
                    "مسح مباشر واكتشاف أجهزة الشبكة",
                    "البحث عن MAC vendor وسجل أجهزة SQLite",
                    "وضع اختبار ARP spoofing متعدد الأهداف",
                    "صفحات توجيه مخصصة عبر Flask",
                    "تنظيف تلقائي لملف hosts والجدار الناري وIP forwarding"
                ],
                "challenges": [
                    "الحفاظ على استقرار المسح الخلفي أثناء تشغيل الاختبارات",
                    "إرجاع حالة النظام بشكل موثوق بعد المقاطعة",
                    "التعامل مع أهداف متعددة بشكل مستقل",
                    "خلي أداة الطرفية مقروءة تحت الضغط"
                ],
                "learned": "أدوات الشبكات بتنجح أو تفشل بسبب التنظيف. مسار الهجوم هو الجزء اللافت؛ إرجاع الجهاز لحالة نظيفة هو اللي بيخلي الأداة جديرة بالثقة."
            }
        },
        "webp": "assets/projects/fk-wifi.webp",
        "page": "project-fk-wifi.html"
    },
    {
        "id": "telegram-rat",
        "name": "Telegram RAT Demo",
        "category": "security",
        "status": "archived",
        "featured": false,
        "lang": "Python",
        "icon": "fa-solid fa-server",
        "image": "assets/projects/telegram-rat.png",
        "year": "2024",
        "role": {
            "en": "Solo developer",
            "ar": "مطوّر منفرد"
        },
        "demo": null,
        "code": "https://github.com/DsMans0021/Telegrojan",
        "case": "project.html?id=telegram-rat",
        "desc": {
            "en": "An educational remote-administration prototype. Built strictly for learning and authorized testing — research use only.",
            "ar": "نموذج إدارة عن بُعد تعليمي. صُنع حصريًا للتعلم والاختبار المصرّح به — لأغراض البحث فقط."
        },
        "details": {
            "en": {
                "subtitle": "A learning prototype — not a weapon.",
                "overview": "An educational remote-administration prototype built to understand how remote control channels work from the inside. It is intentionally archived and documented as research-only. The value is defensive: knowing how these tools are structured makes it easier to detect and stop them.",
                "features": [
                    "Telegram bot as a control channel",
                    "Basic remote command flow",
                    "Modular Python structure",
                    "Clearly marked educational scope"
                ],
                "challenges": [
                    "Keeping the project ethical and non-deployable",
                    "Understanding the defensive detection surface",
                    "Documenting intent clearly",
                    "Avoiding accidental real-world misuse"
                ],
                "learned": "To defend a system you need to understand the attacker's building blocks. Ethics and scope are part of the engineering."
            },
            "ar": {
                "subtitle": "نموذج تعليمي — مش سلاح.",
                "overview": "نموذج إدارة عن بُعد تعليمي اتبنى عشان تفهم إزاي قنوات التحكم عن بُعد شغالة من الداخل. متأرشف ومُوثّق بقصد أنه بحثي فقط. القيمة دفاعية: معرفة تركيب الأدوات دي بتخلي اكتشافها وإيقافها أسهل.",
                "features": [
                    "بوت تيليجرام كقناة تحكم",
                    "تدفق أوامر عن بُعد أساسي",
                    "هيكل Python modular",
                    "نطاق تعليمي واضح ومحدد"
                ],
                "challenges": [
                    "خلي المشروع أخلاقي وغير قابل للنشر",
                    "فهم سطح الاكتشاف الدفاعي",
                    "توثيق النية بوضوح",
                    "تجنّب أي إساءة استخدام واقعية"
                ],
                "learned": "عشان تدافع عن نظام لازم تفهم مكوّنات المهاجم. الأخلاق والنطاق جزء من الهندسة."
            }
        },
        "webp": "assets/projects/telegram-rat.webp",
        "page": "project-telegram-rat.html"
    },
    {
        "id": "blackmamba",
        "name": "BlackMamba (C2 Research)",
        "category": "security",
        "status": "inprogress",
        "featured": false,
        "lang": "Security · C2",
        "icon": "fa-solid fa-shield-halved",
        "image": "assets/projects/blackmamba.png",
        "year": "2025 — now",
        "role": {
            "en": "Solo researcher",
            "ar": "باحث منفرد"
        },
        "demo": null,
        "code": "https://github.com/DsMans0021/BlackMamba",
        "case": "project.html?id=blackmamba",
        "desc": {
            "en": "A red-team command & control research framework inspired by real offensive tooling. Built for education and authorized security testing.",
            "ar": "إطار بحثي للتحكم والسيطرة بأسلوب الفريق الأحمر مستوحى من أدوات الهجوم الحقيقية. صُنع للتعليم والاختبار الأمني المصرّح به."
        },
        "details": {
            "en": {
                "subtitle": "Understanding C2 from the defender's side.",
                "overview": "A red-team command-and-control research framework built to study how real offensive infrastructure is put together. The focus is architecture and defense: agents, servers, tasking, and the detection signals each design choice creates. It is research-only and intended for authorized environments.",
                "features": [
                    "Agent/server architecture study",
                    "Tasking and result flow",
                    "Modular Python components",
                    "Defensive detection notes"
                ],
                "challenges": [
                    "Building realistic architecture without deploying it",
                    "Understanding operational security trade-offs",
                    "Mapping detection opportunities",
                    "Keeping the project strictly authorized and documented"
                ],
                "learned": "C2 design is a series of trade-offs between stealth, reliability, and complexity — and every choice leaves a fingerprint."
            },
            "ar": {
                "subtitle": "فهم الـC2 من ناحية المدافع.",
                "overview": "إطار بحثي للتحكم والسيطرة بأسلوب الفريق الأحمر، اتبنى لدراسة إزاي البنية الهجومية الحقيقية بتتجمّع. التركيز على المعمارية والدفاع: الوكلاء، السيرفرات، المهام، وإشارات الاكتشاف اللي كل قرار تصميمي بيسيبها. بحثي فقط ومخصص لبيئات مصرّح بها.",
                "features": [
                    "دراسة معمارية agent/server",
                    "تدفق المهام والنتائج",
                    "مكوّنات Python modular",
                    "ملاحظات اكتشاف دفاعي"
                ],
                "challenges": [
                    "بناء معمارية واقعية من غير نشرها",
                    "فهم مقايضات الـOPSEC",
                    "رسم فرص الاكتشاف",
                    "خلي المشروع مصرّح به وموثّق بشكل صارم"
                ],
                "learned": "تصميم الـC2 سلسلة مقايضات بين التخفي والموثوقية والتعقيد — وكل اختيار بيسيب بصمة."
            }
        },
        "webp": "assets/projects/blackmamba.webp",
        "page": "project-blackmamba.html"
    }
];
