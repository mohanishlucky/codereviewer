# 🧠 Code Reviewer Guide

Welcome, Code Reviewer! This document outlines the responsibilities, goals, and best practices for reviewing code effectively and consistently.

---

## 🎯 Objective

To ensure code quality, maintainability, performance, and security by providing clear, constructive feedback to developers.

---

## 📋 Review Checklist

Before approving a pull request or code submission, check the following:

### ✅ Code Quality
- Is the code clean, readable, and logically structured?
- Are functions/methods small and single-purpose?
- Are naming conventions consistent and meaningful?

### ✅ Best Practices
- Does the code follow language/framework best practices?
- Is there any repeated or duplicated logic?
- Are constants, enums, and configs separated properly?

### ✅ Performance
- Any unnecessary loops, nested logic, or redundant API/database calls?
- Is there a more efficient way to implement the logic?

### ✅ Security
- Are inputs properly validated and sanitized?
- Are secrets, tokens, and environment variables handled securely?
- Any common vulnerabilities (e.g., XSS, SQL injection, etc.)?

### ✅ Error Handling
- Are edge cases and exceptions handled gracefully?
- Is appropriate logging or error reporting implemented?

### ✅ Testing
- Are there unit/integration tests?
- Do tests cover both happy and edge cases?

### ✅ Scalability & Maintainability
- Can the code handle growing data/users?
- Is the code easy to extend or refactor later?
- Is the file/function/class too large?

---

## 💬 Review Style

- **Be constructive** – Focus on improving the code, not criticizing the coder.
- **Be specific** – Explain why something should change and suggest alternatives.
- **Be respectful** – Treat code reviews as a shared learning experience.

---

## 📦 Output Format (for AI or humans)

You can use this structure when giving feedback:

```txt
🔍 Summary:
Overall, the code is [clear / needs refactoring / well-tested / missing tests].

🚩 Issues:
1. [Category: Bug / Style / Performance / Best Practice]
   - Description of issue
   - Line reference or snippet (if needed)
   - Suggestion for improvement

✅ Suggestions:
- [Tip or resource link]
- [Code example or reference pattern]
