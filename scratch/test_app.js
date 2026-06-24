const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously" });

// Mock fetch
const data = require('../data.json');
dom.window.fetch = async () => ({
    ok: true,
    json: async () => data
});

const scriptContent = fs.readFileSync('app.js', 'utf8');
const scriptEl = dom.window.document.createElement("script");
scriptEl.textContent = scriptContent;
dom.window.document.body.appendChild(scriptEl);

// Wait for DOMContentLoaded / fetch
setTimeout(() => {
    try {
        console.log("Mocking click on sui-can...");
        const btn = dom.window.document.getElementById('btn-match-sui-can');
        if (!btn) throw new Error("Button not found!");
        btn.click();
        console.log("Click executed successfully. No unhandled exceptions.");
    } catch(err) {
        console.error("ERROR during click:", err);
    }
}, 1000);
