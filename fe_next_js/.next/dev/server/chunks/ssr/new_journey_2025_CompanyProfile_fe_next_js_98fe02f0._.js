module.exports = [
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
    const [articlePage, setArticlePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [projectPage, setProjectPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const limit = 3;
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
        } catch (err) {
            console.error("Articles fetch error:", err);
        }
    }
    async function fetchProjects(pg) {
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:4000/v1")}/projects?page=${pg}&limit=${limit}`);
            const data = await res.json();
            setProjects(data.data || []);
        } catch (err) {
            console.error("Projects fetch error:", err);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4",
                        children: "Latest Articles"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 53,
                        columnNumber: 9
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
                                            style: {
                                                height: "180px",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    children: a.title
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: truncate(a.content)
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "btn btn-primary",
                                                    href: `/articles/${a._id}`,
                                                    children: "Read More"
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            }, a._id, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 54,
                        columnNumber: 9
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
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-secondary",
                                onClick: ()=>setArticlePage(articlePage + 1),
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-4",
                        children: "Latest Projects"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 94,
                        columnNumber: 9
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
                                            style: {
                                                height: "180px",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: truncate(p.description)
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "btn btn-primary",
                                                    href: `/projects/${p._id}`,
                                                    children: "View Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, p._id, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 95,
                        columnNumber: 9
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
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-secondary",
                                onClick: ()=>setProjectPage(projectPage + 1),
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=new_journey_2025_CompanyProfile_fe_next_js_98fe02f0._.js.map