var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "tailwindcss/tailwind.css";
import cns from "classnames";
function CustomSharedButton(_a) {
    var text = _a.text, className = _a.className, _b = _a.ButtonIcon, ButtonIcon = _b === void 0 ? undefined : _b, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, props = __rest(_a, ["text", "className", "ButtonIcon", "isLoading"]);
    return (_jsxs("button", __assign({ disabled: isLoading, type: "button", className: cns(className, !text ? "p-1 " : "px-5 py-2.5", "hover:shadow-md flex-center gap-2 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm text-center") }, props, { children: [(text || (!isLoading && true)) && ButtonIcon && (_jsx(ButtonIcon, { className: cns(!text ? "w-5 h-5" : "w-6 h-6", "flex-shrink-0 transition duration-75 MenuIcon") })), text, isLoading && (_jsx("div", { className: "inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]", role: "status" }))] })));
}
export default CustomSharedButton;
