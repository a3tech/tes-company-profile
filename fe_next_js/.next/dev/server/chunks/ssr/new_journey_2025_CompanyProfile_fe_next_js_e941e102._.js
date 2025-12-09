module.exports = [
"[project]/new_journey_2025/CompanyProfile/fe_next_js/lib/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/lib/api.js
__turbopack_context__.s([
    "API",
    ()=>API,
    "apiFetch",
    ()=>apiFetch
]);
const API = ("TURBOPACK compile-time value", "http://localhost:4000/v1") || 'http://localhost:4000/v1';
async function apiFetch(path, { method = 'GET', body, auth = false, headers = {} } = {}) {
    const url = `${API}${path}`;
    const opts = {
        method,
        headers: {
            ...headers
        }
    };
    if (body) {
        opts.body = JSON.stringify(body);
        opts.headers['Content-Type'] = 'application/json';
    }
    if (auth) {
        const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if (!token) throw {
            status: 401,
            message: 'No token'
        };
        opts.headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(url, opts);
    if (res.status === 401) {
        // unauthorized — frontend should redirect to login
        throw {
            status: 401,
            message: 'Unauthorized'
        };
    }
    const text = await res.text();
    try {
        return JSON.parse(text || '{}');
    } catch (e) {
        return text;
    }
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ArticleCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/components/ArticleCard.jsx
__turbopack_context__.s([
    "default",
    ()=>ArticleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function ArticleCard({ article }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        style: {
            border: '1px solid #eee',
            padding: 12,
            borderRadius: 8,
            marginBottom: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/articles/${article._id}`,
                    children: article.title
                }, void 0, false, {
                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ArticleCard.jsx",
                    lineNumber: 7,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ArticleCard.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#666'
                },
                children: [
                    article.author,
                    " • ",
                    new Date(article.createdAt).toLocaleDateString()
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ArticleCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    (article.content || '').slice(0, 200),
                    article.content && article.content.length > 200 ? '...' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ArticleCard.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ArticleCard.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ProjectCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/components/ProjectCard.jsx
__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function ProjectCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        style: {
            border: '1px solid #eee',
            padding: 12,
            borderRadius: 8,
            marginBottom: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: `/projects/${project._id}`,
                    children: project.title
                }, void 0, false, {
                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ProjectCard.jsx",
                    lineNumber: 7,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ProjectCard.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#666'
                },
                children: project.link
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ProjectCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    (project.description || '').slice(0, 200),
                    project.description && project.description.length > 200 ? '...' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ProjectCard.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ProjectCard.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
// frontend/app/page.js
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$lib$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/lib/api.js [app-ssr] (ecmascript)"); // server component can call fetch directly only if using server fetch; to simplify, we'll fetch on client via useEffect below
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$components$2f$ArticleCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ArticleCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$components$2f$ProjectCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/components/ProjectCard.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch(`${("TURBOPACK compile-time value", "http://localhost:4000/v1")}/articles`).then((r)=>r.json()).then(setArticles).catch(()=>setArticles([]));
        fetch(`${("TURBOPACK compile-time value", "http://localhost:4000/v1")}/projects`).then((r)=>r.json()).then(setProjects).catch(()=>setProjects([]));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Welcome to Our Company"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Simple company profile built with Next.js & Express"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    marginTop: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Latest Articles"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    articles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No articles yet."
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 28,
                        columnNumber: 32
                    }, this) : articles.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$components$2f$ArticleCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            article: a
                        }, a._id, false, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                            lineNumber: 28,
                            columnNumber: 76
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/articles",
                            children: "See all articles"
                        }, void 0, false, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                            lineNumber: 29,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    marginTop: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No projects yet."
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 34,
                        columnNumber: 32
                    }, this) : projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$components$2f$ProjectCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            project: p
                        }, p._id, false, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                            lineNumber: 34,
                            columnNumber: 76
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            children: "See all projects"
                        }, void 0, false, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                            lineNumber: 35,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/page.js",
                lineNumber: 32,
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

//# sourceMappingURL=new_journey_2025_CompanyProfile_fe_next_js_e941e102._.js.map