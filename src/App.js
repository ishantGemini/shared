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
import "./App.css";
function App() {
    return (_jsx("div", { children: _jsx("p", __assign({ className: "text-red-600" }, { children: "Tata Aig One Crm" })) }));
}
export default App;
