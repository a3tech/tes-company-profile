module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function truncate(text, length = 120) {
    if (!text) return "";
    return text.length > length ? text.slice(0, length) + "..." : text;
}
function Home() {
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Pagination states
    const [articlePage, setArticlePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [projectPage, setProjectPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const limit = 3; // per page items
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchArticles(articlePage);
        fetchProjects(projectPage);
    }, [
        articlePage,
        projectPage
    ]);
    async function fetchArticles(pg) {
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:4000/v1")}/articles?page=${pg}&limit=${limit}`);
            const data = await res.json();
            setArticles(data.data || []);
        } catch (e) {
            console.error("Error fetching articles:", e);
        }
    }
    async function fetchProjects(pg) {
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:4000/v1")}/projects?page=${pg}&limit=${limit}`);
            const data = await res.json();
            setProjects(data.data || []);
        } catch (e) {
            console.error("Error fetching projects:", e);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-dark text-white p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container d-flex justify-content-between align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Company Profile"
                        }, void 0, false, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/articles",
                                    className: "text-white me-3",
                                    children: "Articles"
                                }, void 0, false, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/projects",
                                    className: "text-white",
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3",
                                children: "Latest Articles"
                            }, void 0, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: articles.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-4 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card h-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: a.image || "/default-article.jpg",
                                                    className: "card-img-top",
                                                    alt: a.title,
                                                    style: {
                                                        height: "180px",
                                                        objectFit: "cover"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "card-title",
                                                            children: a.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "card-text",
                                                            children: truncate(a.content)
                                                        }, void 0, false, {
                                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                            lineNumber: 81,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/articles/${a._id}`,
                                                            className: "btn btn-primary",
                                                            children: "Read More"
                                                        }, void 0, false, {
                                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    }, a._id, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary",
                                        disabled: articlePage === 1,
                                        onClick: ()=>setArticlePage(articlePage - 1),
                                        children: "Prev"
                                    }, void 0, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary",
                                        onClick: ()=>setArticlePage(articlePage + 1),
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-5 mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3",
                                children: "Latest Projects"
                            }, void 0, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-4 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card h-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: p.image || "/default-project.jpg",
                                                    className: "card-img-top",
                                                    alt: p.title,
                                                    style: {
                                                        height: "180px",
                                                        objectFit: "cover"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "card-title",
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "card-text",
                                                            children: truncate(p.description)
                                                        }, void 0, false, {
                                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/projects/${p._id}`,
                                                            className: "btn btn-primary",
                                                            children: "View Project"
                                                        }, void 0, false, {
                                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    }, p._id, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary",
                                        disabled: projectPage === 1,
                                        onClick: ()=>setProjectPage(projectPage - 1),
                                        children: "Prev"
                                    }, void 0, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn btn-secondary",
                                        onClick: ()=>setProjectPage(projectPage + 1),
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-dark text-white text-center p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Company Profile. All Rights Reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__377690e9._.js.map