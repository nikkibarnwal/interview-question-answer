## Follow-up Question #3

Now let's make it harder:

> **"You mentioned code splitting and lazy loading. Can you explain the difference between them, how you would implement them in a React application, and what impact they have on the initial bundle size?"**

This is a question I would expect you to handle comfortably for this JD.

### 🎤 Strong Interview Answer

> **Code splitting and lazy loading are related concepts, but they are not exactly the same.**
>
> **Code splitting** means breaking the application's JavaScript bundle into smaller chunks instead of sending the entire application as one large bundle to the browser.
>
> **Lazy loading** means loading one of those chunks only when it is actually needed.
>
> For example, suppose my application has five routes: Dashboard, Membership, Rewards, Reports, and Admin. I don't want the JavaScript for all five pages to be downloaded when the user only visits Dashboard.
>
> I can use dynamic imports with `React.lazy()`:
>
> ```jsx
> const Dashboard = React.lazy(() => import("./Dashboard"));
> const Reports = React.lazy(() => import("./Reports"));
> ```
>
> And then use `Suspense`:
>
> ```jsx
> <Suspense fallback={<Loading />}>
>   <Routes>
>     <Route path="/dashboard" element={<Dashboard />} />
>     <Route path="/reports" element={<Reports />} />
>   </Routes>
> </Suspense>
> ```
>
> During the production build, these dynamically imported modules can be split into separate JavaScript chunks. The browser doesn't need to download the Reports code when the user is only visiting Dashboard.
>
> So the flow becomes:
>
> ```text
> Without Code Splitting
>
> Browser
>    ↓
> Large JS Bundle
>    ↓
> Download entire application
>    ↓
> Parse + Execute
>
>
> With Code Splitting
>
> Browser
>    ↓
> Initial JS Chunk
>    ↓
> Dashboard loads
>    ↓
> User opens Reports
>    ↓
> Reports Chunk downloaded
> ```
>
> The main benefit is that we **reduce the amount of JavaScript required for the initial page load**, which can improve startup performance and metrics such as LCP and INP, especially for large applications.
>
> However, I wouldn't blindly lazy-load every component. Very small or frequently used components may not benefit because creating too many chunks can introduce additional network requests and overhead.
>
> I would identify large or less frequently used routes and components, analyze the bundle using a bundle analyzer, and then apply code splitting where it provides a measurable benefit.

### 🧠 Easy way to remember

**Code Splitting = Break the bundle**

**Lazy Loading = Load the piece when needed**

```text
Code Splitting
      ↓
Large App
      ↓
Chunk A | Chunk B | Chunk C
                   ↓
            Lazy loaded when needed
```

### ⭐ Senior-level addition

If the interviewer asks:

> **"Is `React.lazy()` itself code splitting?"**

Say:

> "`React.lazy()` is a mechanism for lazy loading a component. It uses a dynamic `import()` behind the scenes, and the bundler uses that dynamic import as a split point to create separate chunks. So `React.lazy()` enables lazy loading, while the bundler performs the actual code splitting."

That's a **very good distinction** for a senior React interview.

---

## 🔥 Question #4

> **"Suppose your React application receives an LLM response token-by-token through SSE. If the server sends hundreds of updates per second, React could potentially re-render hundreds of times. How would you design the UI to handle this efficiently?"**

This question connects **React + performance + SSE + GenAI**, so it's particularly relevant to this JD.
