<!-- How do you handle production issues via post-mortems to identify root cause -->

Here’s how you can answer **“How do you handle production issues via post-mortems to identify root cause?”** — especially for a **Lead MERN Stack Developer / Tech Lead** position:

---

### ✅ **Sample Answer (Structured, Confident & Technical):**

> **1. Immediate Containment:**
> First, we focus on **stabilizing the system** — rollback, scaling up, or applying a temporary patch if required. Our goal is to **minimize user impact** before deep-diving into the cause.

> **2. Data Collection:**
> Once the issue is contained, I collect **logs, monitoring metrics, and traces** from tools like **Elastic Stack, CloudWatch, or Datadog** to understand what exactly happened — API latency, DB spikes, memory leaks, etc.

> **3. Post-Mortem Meeting:**
> We conduct a **blameless post-mortem** within 24–48 hours involving developers, QA, DevOps, and sometimes product managers.
> The discussion covers:
>
> - **Timeline** of events (when it started, detected, fixed)
> - **Impact** (which users/features were affected)
> - **Root cause analysis (RCA)** using methods like **5 Whys** or **Fishbone Diagram**
> - **Missed detection points** (Why monitoring or tests didn’t catch it?)

> **4. Root Cause Identification:**
> Example: If a MongoDB query caused latency, we identify whether it was due to **missing indexes**, **large payloads**, or **unoptimized aggregation**.
> We also check **code review gaps, lack of test coverage**, or **missing alerts** that could have prevented it.

> **5. Permanent Fix and Action Items:**
>
> - Implement code fixes and add **automated regression tests**.
> - Add **monitoring alerts** and **dashboards** if missing.
> - Update **runbooks** or **deployment checklists** to avoid recurrence.
> - Document everything clearly in a **Post-Mortem Report (Confluence / Notion)**.

> **6. Continuous Improvement:**
> We track all action items in Jira and review them in our **retrospective** to ensure lessons learned are implemented.
> I also make sure **knowledge is shared** across the team so others don’t repeat similar mistakes.

---

### 🧠 Example Summary (If interviewer wants short version):

> I handle production issues by first containing the problem, then leading a blameless post-mortem to gather data, analyze root cause using methods like “5 Whys,” document findings, and define long-term preventive actions — like better monitoring, tests, and deployment safeguards.

---

### ⚙️ Example Tools/Practices to Mention (for credibility):

- **Monitoring:** Datadog, New Relic, Prometheus, Grafana
- **Logging:** ELK Stack, CloudWatch
- **Incident Management:** PagerDuty, Jira, Slack war-room channels
- **RCA Techniques:** 5 Whys, Fishbone diagram
- **Documentation:** Confluence, Notion, Google Docs

---
