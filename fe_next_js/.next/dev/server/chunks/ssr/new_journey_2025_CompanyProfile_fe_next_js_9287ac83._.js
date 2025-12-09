module.exports = [
"[project]/new_journey_2025/CompanyProfile/fe_next_js/app/projects/[id]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../components/ProjectCard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
function ProjectsPage() {
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch(`${("TURBOPACK compile-time value", "http://localhost:4000/v1")}/projects`).then((r)=>r.json()).then(setProjects).catch(()=>setProjects([]));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container py-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-4 fw-bold",
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/projects/[id]/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row g-4",
                children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-12 col-md-6 col-lg-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$new_journey_2025$2f$CompanyProfile$2f$fe_next_js$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                            project: p
                        }, void 0, false, {
                            fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/projects/[id]/page.js",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, p._id, false, {
                        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/projects/[id]/page.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/projects/[id]/page.js",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/new_journey_2025/CompanyProfile/fe_next_js/app/projects/[id]/page.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/new_journey_2025/CompanyProfile/fe_next_js/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=new_journey_2025_CompanyProfile_fe_next_js_9287ac83._.js.map