(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/new_journey_2025/CompanyProfile/fe_next_js/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/lib/api.js
__turbopack_context__.s([
    "API",
    ()=>API,
    "apiFetch",
    ()=>apiFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('token') : "TURBOPACK unreachable";
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AdminArticles() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [list, setList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function load() {
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])('/articles/', {
                method: 'GET'
            });
            setList(data);
        } catch (e) {
            setErr(e.message || 'Error loading');
            if (e.status === 401) router.push('/admin/login');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminArticles.useEffect": ()=>{
            load();
        }
    }["AdminArticles.useEffect"], []);
    async function remove(id) {
        if (!confirm('Delete article?')) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])(`/articles/${id}`, {
                method: 'DELETE',
                auth: true
            });
            setList((list)=>list.filter((x)=>x._id !== id));
        } catch  {
            alert('Delete failed');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-between align-items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary",
                        onClick: ()=>router.push('/admin/dashboard'),
                        children: "← Back to Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "m-0",
                        children: "Manage Articles"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: ()=>router.push('/admin/article/new'),
                        children: "+ New Article"
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert alert-danger",
                children: err
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                lineNumber: 59,
                columnNumber: 15
            }, this),
            list.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted",
                children: "No articles found."
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                lineNumber: 63,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "table table-bordered table-striped",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "table-dark",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        width: "45%"
                                    },
                                    children: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        width: "20%"
                                    },
                                    children: "Slug"
                                }, void 0, false, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        width: "15%"
                                    },
                                    children: "Created"
                                }, void 0, false, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        width: "20%"
                                    },
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: list.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: a.title
                                    }, void 0, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: a.slug
                                    }, void 0, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: new Date(a.createdAt).toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-sm btn-warning me-2",
                                                onClick: ()=>router.push(`/admin/article/${a._id}`),
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-sm btn-danger",
                                                onClick: ()=>remove(a._id),
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, a._id, true, {
                                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/admin/articles/page.js",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(AdminArticles, "wWuwSLsUgl26QLsFhdAG7Val04A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminArticles;
var _c;
__turbopack_context__.k.register(_c, "AdminArticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=new_journey_2025_CompanyProfile_fe_next_js_6224ce8c._.js.map