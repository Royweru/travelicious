# Project Customizations and Rules

## Workflow Rules
- **Planning Mode Execution:** Whenever asked to come up with a detailed task list and an implementation plan, the agent MUST first create the implementation plan and the task list, and then **STOP**.
- The agent must wait for explicit user approval (the "green light") before executing the task list or making any changes. Do not jump into execution.
- **Task Tracking:** During execution, the agent must rigorously update the task list (checking boxes and marking items in progress) step by step, and explicitly stop or yield when needed, rather than blindly continuing.
- Always think and plan first. Never jump into writing code without thinking.
