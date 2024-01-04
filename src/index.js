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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
var root = ReactDOM.createRoot(document.getElementById("root"));
var client = new QueryClient();
root.render(_jsx(React.StrictMode, { children: _jsxs(QueryClientProvider, __assign({ client: client }, { children: [_jsx(App, {}), _jsx(Header, {})] })) }));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
