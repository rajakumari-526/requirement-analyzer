# 🤖 Requirement Analyzer

An AI-powered VS Code extension that helps QA Engineers analyze software requirements using a local Large Language Model (Ollama + Qwen 2.5).

---

## 🚀 Features

- 📋 Requirement Summary
- ✅ Functional Requirements
- 📌 Business Rules
- ⚠ Risk Analysis
- 🧪 Test Scenario Generation
- 🏠 Runs completely offline using Ollama
- 🔒 No cloud API keys required
- 💻 VS Code Extension

---

## 🏗 Architecture

```
VS Code Extension
        │
        ▼
Requirement Analyzer
        │
        ▼
Prompt Builder
        │
        ▼
Ollama (Qwen2.5)
        │
        ▼
Response Parser
        │
        ▼
Markdown Report
```

---

## 🛠 Technology Stack

- TypeScript
- VS Code Extension API
- Ollama
- Qwen 2.5
- Node.js
- Git

---

## 📷 Screenshots

### Requirement Input

*(Add a screenshot here later)*

### AI Requirement Analysis

*(Add a screenshot here later)*

---

## 📦 Installation

### Install Ollama

https://ollama.com

Download the Qwen model:

```bash
ollama pull qwen2.5:7b
```

Install the extension:

```bash
code --install-extension requirement-analyzer-1.0.0.vsix
```

---

## ▶ Usage

1. Open VS Code.
2. Press **Ctrl + Shift + P**
3. Select:

```
Requirement Analyzer: Analyze Requirement
```

4. Paste your requirement.
5. Review the AI-generated report.

---

## 🎯 Roadmap

- [x] AI Requirement Analysis
- [ ] Requirement Quality Score
- [ ] Missing Requirement Detection
- [ ] Questions for Business Analyst
- [ ] Manual Test Case Generation
- [ ] BDD Scenario Generation
- [ ] Playwright Test Generation

---

## 👨‍💻 Author

**Rajakumari Gundapanenei Naga**

GitHub:

https://github.com/rajakumari-526

---

## ⭐ If you like this project

Please consider giving it a ⭐ on GitHub.