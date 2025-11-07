module.exports = [
"[project]/Development/testx/code/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Development/testx/code/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Development/testx/code/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Development/testx/code/lib/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Navigation
        nav: {
            services: "Services",
            technology: "Technology",
            contact: "Contact",
            about: "About",
            getStarted: "Get Started"
        },
        // Hero
        hero: {
            title: "Software quality begins with thorough testing.",
            description: "We specialize in QA consulting and automated testing. Help optimize your testing processes, increase efficiency and support the growth of your QA team.",
            cta: "Consult Now"
        },
        // Services
        services: {
            title: "Our Services",
            description: "We offer top-notch IT advice and consulting focused on QA and software testing.",
            items: [
                {
                    title: "Quality Software Testing",
                    desc: "We provide comprehensive solutions for quality software testing. We design testing procedures for both manual testing and automation, customized to the needs of small and large projects."
                },
                {
                    title: "Testing Strategies",
                    desc: "We design effective testing strategies aimed at optimizing software development. We use our experience with modern tools such as Playwright, Cypress, K6 and others to ensure reliability, performance and quality of your applications."
                },
                {
                    title: "Testing & Automation Training",
                    desc: "We offer technical and general training in the field of software testing and automation. We provide training individually or in groups, tailored to your specific needs."
                },
                {
                    title: "QA Consulting",
                    desc: "We offer expert consulting aimed at improving software quality and testing process efficiency. We help identify weaknesses, optimize procedures and implement proven strategies to achieve higher reliability and performance of your applications."
                }
            ]
        },
        // Tech Stack
        tech: {
            title: "Our Tech Stack",
            description: "We have extensive experience testing projects from various fields such as e-commerce, insurance, banking, industry, automotive and others."
        },
        // Contact
        contact: {
            title: "Order IT Consulting Today",
            description: "Book an individual consultation regarding QA and software testing and drive your business to perfection.",
            name: "Name",
            email: "Email",
            message: "Message",
            namePlaceholder: "Your name",
            emailPlaceholder: "your@email.com",
            messagePlaceholder: "Tell us about your project...",
            send: "Send Message"
        },
        // Footer
        footer: {
            contactTitle: "Contact",
            aboutTitle: "About",
            hoursTitle: "Hours",
            address: "Na Dielnici 953/23",
            city: "976 32 Badín, Slovakia",
            aboutText: "I am the founder and owner of TestX s.r.o., a company specializing in QA automation, testing and consulting. I have extensive experience with test development in modern tools, focusing on web application testing and data validation.",
            mondayFriday: "Monday - Friday: 9:00 - 17:00",
            weekend: "Saturday - Sunday: Closed",
            available: "Available by request outside hours.",
            copyright: "© 2025 TESTX s.r.o. All rights reserved."
        }
    },
    sk: {
        // Navigation
        nav: {
            services: "Služby",
            technology: "Technológie",
            contact: "Kontakt",
            about: "O nás",
            getStarted: "Začať"
        },
        // Hero
        hero: {
            title: "Kvalita softvéru začína dôkladným testovaním",
            description: "Špecializujeme sa na konzultácie v oblasti QA a automatizovaného testovania. Pomáhame optimalizovať testovacie procesy, zvyšovať efektivitu a podporujeme rast vášho QA tímu.",
            cta: "Konzultujte teraz"
        },
        // Services
        services: {
            title: "Naše služby",
            description: "Ponúkame špičkové IT poradenstvo a konzultácie zamerané na QA a softvérový testing.",
            items: [
                {
                    title: "Kvalitný softvérový testing",
                    desc: "Poskytujeme komplexné riešenia pre kvalitný softvérový testing. Navrhujeme testovacie postupy na manuálne testovanie aj automatizáciu, prispôsobené potrebám malých aj veľkých projektov."
                },
                {
                    title: "Testovacie stratégie",
                    desc: "Navrhujeme efektívne testovacie stratégie zamerané na optimalizáciu vývoja softvéru. Využívame naše skúsenosti s modernými nástrojmi, ako sú Playwright, Cypress, K6 a pod., aby sme zabezpečili spoľahlivosť, výkon a kvalitu vašich aplikácií."
                },
                {
                    title: "Školenia testovania a automatizácie",
                    desc: "Ponúkame realizáciu technických aj všeobecných školení z oblasti softvérového testovania a automatizácie. Školenia poskytujeme individuálne aj skupinovo, prispôsobené vašim konkrétnym potrebám."
                },
                {
                    title: "Konzultácie QA",
                    desc: "Ponúkame odborné konzultácie zamerané na zlepšenie kvality softvéru a efektivitu testovacích procesov. Pomáhame identifikovať slabé miesta, optimalizovať postupy a zavádzať osvedčené stratégie na dosiahnutie vyššej spoľahlivosti a výkonu vašich aplikácií."
                }
            ]
        },
        // Tech Stack
        tech: {
            title: "Náš tech stack",
            description: "Máme bohaté skúsenosti s testovaním projektov z rôznych oblastí, ako sú e-commerce, poisťovníctvo, bankovníctvo, priemysel, automotive a ďalšie."
        },
        // Contact
        contact: {
            title: "Objednajte si IT konzultácie ešte dnes",
            description: "Zarezervujte si individuálnu poradňu ohľadom QA a softvérového testingu a povzbuďte svoj biznis k dokonalosti.",
            name: "Meno",
            email: "Email",
            message: "Správa",
            namePlaceholder: "Vaše meno",
            emailPlaceholder: "vasa@emailova-adresa.com",
            messagePlaceholder: "Povedzte nám niečo o vašom projekte…",
            send: "Poslať správu"
        },
        // Footer
        footer: {
            contactTitle: "Kontakt",
            aboutTitle: "O nás",
            hoursTitle: "Otváracie hodiny",
            address: "Na Dielnici 953/23",
            city: "976 32 Badín, Slovensko",
            aboutText: "Som zakladateľ a majiteľ TestX s.r.o., spoločnosti špecializujúcej sa na QA automatizáciu, testovanie a konzultácie. Mám bohaté skúsenosti s vývojom testov v moderných tooloch, kde sa zameriavam na testovanie webových aplikácií a validáciu dát.",
            mondayFriday: "Pondelok – piatok: 9:00 – 17:00",
            weekend: "Sobota – nedeľa: Zatvorené",
            available: "Dostupní na požiadavku mimo pracovnej doby.",
            copyright: "© 2025 TESTX s.r.o. Všetky práva vyhradené."
        }
    }
};
}),
"[project]/Development/testx/code/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Development/testx/code/lib/translations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Development/testx/code/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
"use client";
;
;
;
;
;
;
// Tool logo components
const PlaywrightLogo = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://cdn.brandfetch.io/idpyc8TcWP/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1759069014905",
        alt: "Playwright",
        className: "w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300",
        style: {
            filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))"
        }
    }, void 0, false, {
        fileName: "[project]/Development/testx/code/app/page.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CypressIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://cdn.brandfetch.io/idIq_kF0rb/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667565307270",
        alt: "Cypress",
        className: "w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300",
        style: {
            filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))"
        }
    }, void 0, false, {
        fileName: "[project]/Development/testx/code/app/page.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const K6Icon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://cdn.brandfetch.io/idI__V61tX/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756019727212",
        alt: "K6",
        className: "w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300",
        style: {
            filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))"
        }
    }, void 0, false, {
        fileName: "[project]/Development/testx/code/app/page.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SeleniumIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://cdn.brandfetch.io/id3uyOwT-S/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1759268542965",
        alt: "Selenium",
        className: "w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300",
        style: {
            filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))"
        }
    }, void 0, false, {
        fileName: "[project]/Development/testx/code/app/page.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const RobotFrameworkIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://testautomationtools.dev/wp-content/uploads/2023/03/robot-framework-logo-square.png",
        alt: "Robot Framework",
        className: "w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300",
        style: {
            filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))"
        }
    }, void 0, false, {
        fileName: "[project]/Development/testx/code/app/page.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const JMeterIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/22/Apache_JMeter.png",
        alt: "JMeter",
        className: "w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300",
        style: {
            filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))"
        }
    }, void 0, false, {
        fileName: "[project]/Development/testx/code/app/page.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function Home() {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedLanguage = localStorage.getItem("language");
        const savedTheme = localStorage.getItem("theme");
        setLanguage(savedLanguage || "en");
        setTheme(savedTheme || "light");
        setMounted(true);
    }, []);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
    const handleSubmit = (e)=>{
        e.preventDefault();
        window.location.href = `mailto:info@testx.sk?subject=Consultation Request from ${formData.name}&body=${formData.message}`;
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const toggleLanguage = ()=>{
        const newLang = language === "en" ? "sk" : "en";
        setLanguage(newLang);
        localStorage.setItem("language", newLang);
    };
    const toggleTheme = ()=>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    if (!mounted) return null;
    const bgClass = theme === "light" ? "bg-white" : "bg-zinc-950";
    const textClass = theme === "light" ? "text-zinc-900" : "text-white";
    const navBgClass = theme === "light" ? "bg-white/80" : "bg-zinc-950/80";
    const borderClass = theme === "light" ? "border-zinc-200" : "border-zinc-800";
    const cardBgClass = theme === "light" ? "bg-zinc-50" : "bg-zinc-900";
    const cardHoverBgClass = theme === "light" ? "hover:bg-white" : "hover:bg-zinc-800";
    const inputBgClass = theme === "light" ? "bg-white" : "bg-zinc-900";
    const inputBorderClass = theme === "light" ? "border-zinc-300" : "border-zinc-700";
    const secondaryTextClass = theme === "light" ? "text-zinc-600" : "text-zinc-400";
    const footerBgClass = theme === "light" ? "bg-zinc-100" : "bg-zinc-900";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen ${bgClass} ${textClass}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `sticky top-0 z-50 ${navBgClass} backdrop-blur border-b ${borderClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 bg-cyan-500 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute inset-1 ${theme === "light" ? "bg-white" : "bg-zinc-950"}`
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold tracking-tight",
                                        children: "TESTX"
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#services",
                                        className: `text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`,
                                        children: t.nav.services
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#tech",
                                        className: `text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`,
                                        children: t.nav.technology
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        className: `text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`,
                                        children: t.nav.contact
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#about",
                                        className: `text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`,
                                        children: t.nav.about
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        className: `p-2 rounded border ${borderClass} hover:text-cyan-600 transition duration-300`,
                                        "aria-label": "Toggle theme",
                                        children: theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 38
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 59
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleLanguage,
                                        className: `text-xs font-semibold px-3 py-2 border ${borderClass} hover:border-cyan-600 rounded transition duration-300`,
                                        children: language === "en" ? "SK" : "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleTheme,
                                        className: `p-2 rounded border ${borderClass} hover:text-cyan-600 transition duration-300`,
                                        "aria-label": "Toggle theme",
                                        children: theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 38
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 59
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleLanguage,
                                        className: `text-xs font-semibold px-2 py-1 border ${borderClass} hover:border-cyan-600 rounded transition duration-300`,
                                        children: language === "en" ? "SK" : "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Development/testx/code/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Development/testx/code/app/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Development/testx/code/app/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `relative py-24 md:py-32 border-b ${borderClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl md:text-6xl font-bold mb-6 tracking-tight text-balance leading-tight",
                                        children: t.hero.title
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-lg ${secondaryTextClass} mb-8 text-balance leading-relaxed`,
                                        children: t.hero.description
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "mailto:info@testx.sk",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 text-base",
                                            children: t.hero.cta
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-full aspect-square ${theme === "light" ? "bg-gradient-to-br from-cyan-100 to-blue-100 border-cyan-200" : "bg-gradient-to-br from-cyan-900 to-blue-900 border-cyan-800"} border rounded-2xl flex items-center justify-center`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl mb-4 text-cyan-600",
                                                children: "</"
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${secondaryTextClass} font-mono text-sm`,
                                                children: "QA Testing Platform"
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Development/testx/code/app/page.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Development/testx/code/app/page.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Development/testx/code/app/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: `py-24 border-b ${borderClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                            children: t.services.title
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${secondaryTextClass} mb-16 text-balance max-w-2xl`,
                            children: t.services.description
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: t.services.items.map((service, idx)=>{
                                const icons = [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-8 h-8 text-cyan-600",
                                        strokeWidth: 1.5
                                    }, "icon-0", false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                        className: "w-8 h-8 text-cyan-600",
                                        strokeWidth: 1.5
                                    }, "icon-1", false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-8 h-8 text-cyan-600",
                                        strokeWidth: 1.5
                                    }, "icon-2", false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "w-8 h-8 text-cyan-600",
                                        strokeWidth: 1.5
                                    }, "icon-3", false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this)
                                ];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `group p-8 border ${borderClass} hover:border-cyan-400 transition duration-300 rounded-lg ${cardBgClass} ${cardHoverBgClass} cursor-pointer`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300",
                                            children: icons[idx]
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-3",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${secondaryTextClass} text-sm leading-relaxed`,
                                            children: service.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Development/testx/code/app/page.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Development/testx/code/app/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "tech",
                className: `py-24 border-b ${borderClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                            children: t.tech.title
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${secondaryTextClass} mb-16 text-balance max-w-2xl`,
                            children: t.tech.description
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl",
                                children: [
                                    {
                                        name: "Playwright",
                                        Icon: PlaywrightLogo,
                                        href: "https://playwright.dev"
                                    },
                                    {
                                        name: "Cypress",
                                        Icon: CypressIcon,
                                        href: "https://www.cypress.io"
                                    },
                                    {
                                        name: "K6",
                                        Icon: K6Icon,
                                        href: "https://k6.io"
                                    },
                                    {
                                        name: "Selenium",
                                        Icon: SeleniumIcon,
                                        href: "https://www.selenium.dev"
                                    },
                                    {
                                        name: "Robot Framework",
                                        Icon: RobotFrameworkIcon,
                                        href: "https://robotframework.org"
                                    },
                                    {
                                        name: "JMeter",
                                        Icon: JMeterIcon,
                                        href: "https://jmeter.apache.org"
                                    }
                                ].map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: tech.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: `flex items-center justify-center p-8 md:p-12 border ${borderClass} hover:border-cyan-400 rounded-lg ${theme === "light" ? "bg-white hover:bg-zinc-50" : "bg-zinc-900 hover:bg-zinc-800"} transition duration-300 group min-h-64`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-cyan-600 group-hover:scale-110 transition duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tech.Icon, {}, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this)
                                    }, tech.name, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Development/testx/code/app/page.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Development/testx/code/app/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: `py-24 border-b ${borderClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4 tracking-tight",
                            children: t.contact.title
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${secondaryTextClass} mb-16 text-balance max-w-2xl`,
                            children: t.contact.description
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-semibold mb-3",
                                                children: t.contact.name
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "name",
                                                name: "name",
                                                type: "text",
                                                value: formData.name,
                                                onChange: handleChange,
                                                required: true,
                                                className: `w-full px-4 py-3 ${inputBgClass} border ${inputBorderClass} hover:border-cyan-400 focus:border-cyan-600 focus:outline-none transition duration-300 rounded`,
                                                placeholder: t.contact.namePlaceholder
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-semibold mb-3",
                                                children: t.contact.email
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "email",
                                                name: "email",
                                                type: "email",
                                                value: formData.email,
                                                onChange: handleChange,
                                                required: true,
                                                className: `w-full px-4 py-3 ${inputBgClass} border ${inputBorderClass} hover:border-cyan-400 focus:border-cyan-600 focus:outline-none transition duration-300 rounded`,
                                                placeholder: t.contact.emailPlaceholder
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "block text-sm font-semibold mb-3",
                                                children: t.contact.message
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "message",
                                                name: "message",
                                                value: formData.message,
                                                onChange: handleChange,
                                                required: true,
                                                rows: 5,
                                                className: `w-full px-4 py-3 ${inputBgClass} border ${inputBorderClass} hover:border-cyan-400 focus:border-cyan-600 focus:outline-none transition duration-300 rounded resize-none`,
                                                placeholder: t.contact.messagePlaceholder
                                            }, void 0, false, {
                                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3",
                                        children: t.contact.send
                                    }, void 0, false, {
                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Development/testx/code/app/page.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Development/testx/code/app/page.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: `${footerBgClass} border-t ${borderClass} py-16`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-12 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-sm font-semibold uppercase tracking-wider mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`,
                                            children: t.footer.contactTitle
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `space-y-3 text-sm ${secondaryTextClass}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t.footer.address
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t.footer.city
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+421949184534",
                                                        className: "hover:text-cyan-600 transition",
                                                        children: "+421 949 184 534"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:info@testx.sk",
                                                        className: "hover:text-cyan-600 transition",
                                                        children: "info@testx.sk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Development/testx/code/app/page.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-sm font-semibold uppercase tracking-wider mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`,
                                            children: t.footer.aboutTitle
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm ${secondaryTextClass} leading-relaxed`,
                                            children: t.footer.aboutText
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-sm font-semibold uppercase tracking-wider mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`,
                                            children: t.footer.hoursTitle
                                        }, void 0, false, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `space-y-2 text-sm ${secondaryTextClass}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t.footer.mondayFriday
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t.footer.weekend
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: t.footer.available
                                                }, void 0, false, {
                                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Development/testx/code/app/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Development/testx/code/app/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `border-t ${borderClass} pt-8 text-center text-sm ${secondaryTextClass}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Development$2f$testx$2f$code$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.footer.copyright
                            }, void 0, false, {
                                fileName: "[project]/Development/testx/code/app/page.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Development/testx/code/app/page.tsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Development/testx/code/app/page.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Development/testx/code/app/page.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Development/testx/code/app/page.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Development_testx_code_664a8d9d._.js.map