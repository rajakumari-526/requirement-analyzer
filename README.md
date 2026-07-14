# QA Copilot 🚀

An AI-powered VS Code Extension that assists QA Engineers in analyzing requirements, generating test scenarios, test cases, BDD scenarios, and Playwright automation.

---

# Project Vision

The goal of QA Copilot is to become an intelligent QA assistant inside Visual Studio Code.

Instead of manually reading lengthy requirements and writing test cases, QA engineers can paste requirements directly into the extension and receive structured analysis.

Future capabilities include:

- Requirement Analysis
- Requirement Gap Analysis
- Business Rule Identification
- Risk Analysis
- Test Scenario Generation
- Test Case Generation
- BDD Generation
- Playwright Automation Generation
- Traceability Matrix Generation

---

# Current Version

Version: **0.1.0 (MVP)**

Status: **In Development**

---

# Architecture

```
VS Code Extension
        │
        ▼
Input Box
        │
        ▼
Requirement Analyzer
        │
        ▼
Result
```

Later architecture

```
VS Code Extension
        │
        ▼
Requirement Analyzer
        │
        ▼
AI Engine
        │
        ▼
OpenAI / Azure OpenAI / Ollama
        │
        ▼
Generated Output
```

---

# Project Structure

```
src
│
├── analyzer
│     └── requirementAnalyzer.ts
│
├── test
│
└── extension.ts
```

---

# Sprint 1 Completed ✅

## Development Environment

- Installed VS Code
- Installed Node.js
- Installed npm
- Installed Git
- Installed TypeScript

---

## VS Code Extension

Created first VS Code Extension using Microsoft's official generator.

Verified:

- Extension loads successfully
- Extension Development Host launches
- Extension command executes correctly

---

## User Interaction

Implemented the following workflow:

```
Ctrl + Shift + P

↓

QA Copilot Command

↓

Input Box

↓

Paste Requirement

↓

Requirement Received
```

Current implementation asks the user to paste a requirement and confirms receipt by displaying the number of characters entered.

Example:

```
Requirement received (142 characters)
```

---

# Files Created

```
extension.ts
```

Purpose

- Registers commands
- Opens input box
- Receives requirement
- Calls business logic (next sprint)

---

```
requirementAnalyzer.ts
```

Purpose

Will contain all requirement analysis logic.

Currently empty.

This file will become the brain of the application.

---

# Current Workflow

```
QA Engineer

↓

Ctrl + Shift + P

↓

QA Copilot

↓

Paste Requirement

↓

Extension Receives Requirement
```

---

# Pending Work

## Sprint 2

Build Requirement Analyzer Engine

Tasks

- Read pasted requirement
- Parse requirement text
- Identify Functional Requirements
- Identify Non-Functional Requirements
- Identify Business Rules
- Identify Assumptions
- Identify Risks
- Generate Requirement Summary

---

## Sprint 3

Generate Test Scenarios

Output

```
Requirement

↓

Test Scenarios
```

---

## Sprint 4

Generate Test Cases

Output

```
Requirement

↓

Test Cases
```

---

## Sprint 5

Generate BDD Scenarios

Output

```
Requirement

↓

BDD
```

---

## Sprint 6

Generate Playwright Automation

Output

```
Requirement

↓

Playwright Test
```

---

## Sprint 7

Integrate AI

Replace manual analyzer with AI.

Supported providers

- OpenAI
- Azure OpenAI
- Ollama

---

## Sprint 8

Improve VS Code UI

Features

- Side Panel
- Rich Output
- HTML Report
- Copy to Clipboard
- Export

---

# Long-Term Vision

QA Copilot should become an intelligent QA assistant capable of:

```
Requirement
      │
      ▼
Analysis
      │
      ▼
Business Rules
      │
      ▼
Risk Analysis
      │
      ▼
Test Scenarios
      │
      ▼
Test Cases
      │
      ▼
BDD
      │
      ▼
Playwright
      │
      ▼
Automation Review
```

---

# Current Progress

| Feature | Status |
|----------|--------|
| VS Code Extension | ✅ Completed |
| Command Registration | ✅ Completed |
| Input Box | ✅ Completed |
| Receive Requirement | ✅ Completed |
| Requirement Analyzer | 🚧 In Progress |
| Test Scenario Generator | ⏳ Planned |
| Test Case Generator | ⏳ Planned |
| BDD Generator | ⏳ Planned |
| Playwright Generator | ⏳ Planned |
| AI Integration | ⏳ Planned |

---

# Notes

Current implementation is intentionally simple.

The project is being built incrementally following professional software engineering practices.

The first goal is to create a stable architecture before integrating AI services.