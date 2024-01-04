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
import { jsx as _jsx } from "react/jsx-runtime";
// import React from "react";
// import React from "react";
// import "./App.css";
import "tailwindcss/tailwind.css";
function Header() {
    // const id = 1;
    // const id = 2;
    // const id = 3;
    // const id = 4;
    // const id = 5;
    // const name = "dkjdkd";
    return (_jsx("div", { children: _jsx("p", __assign({ className: "text-green-600" }, { children: "Header" })) }));
}
export default Header;
