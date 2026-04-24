Perfect Rajendra — ab main tumhe **final & fool-proof master trick** deta hoon:

# 🔥 **React Execution Order Cheat Sheet (Your Style, Easy to Remember)**

Isko yaad kar loge → 100% React output questions crack ho jayenge.

---

# 🧠 **MASTER ORDER TRICK (VERY EASY):**

## **👇 ALWAYS REMEMBER THIS ONE LINE:**

> **Render → Layout Effects → Paint → Normal Effects → Next Render**

Bas iska expended version niche diya hai.

---

# ⭐ **FULL ORDER (INTERVIEW GOLD)**

### 🔵 **1. Component Render Phase (Sync)**

This is the phase where the function runs.

**Inside this phase:**
1️⃣ Component function runs
2️⃣ All `console.log` inside component run
3️⃣ `useMemo` callback runs (if deps changed)
4️⃣ `useCallback` returns memoized function
5️⃣ React prepares DOM updates (but DOM NOT painted yet)

**Shortcut:**
👉 **“Render = function run + memo run”**

---

### 🔵 **2. Commit Phase (DOM update happens)**

Ab DOM update ho chuka hota hai.

Order inside Commit:

### 2.1 🔶 **Cleanup of previous useLayoutEffect**

If deps changed, React cleans old layout effect.

### 2.2 🔶 **New useLayoutEffect runs**

Runs BEFORE paint.

**Shortcut:**
👉 **“Layout first!”**

---

### 🔵 **3. Browser Paints Screen**

UI visible to user.

**Shortcut:**
👉 **“Layout → Paint → Effect”**

---

### 🔵 **4. Passive Effects Phase**

These include `useEffect`.

Order:

### 4.1 🟠 Cleanup of old useEffect

### 4.2 🟠 New useEffect runs

**Shortcut:**
👉 **“Effect always after paint.”**

---

### 🔵 **5. Next Render (if state changed)**

Now React starts again from Step 1.

---

# 🎯 **Final Execution Order Summary (MUST MEMORIZE)**

```
1. Render Phase
   - Component function
   - console logs inside render
   - useMemo
   - useCallback
   - JSX returned

2. Commit Phase
   - Old layoutEffect cleanup
   - New layoutEffect runs

3. Browser Paints

4. Passive Effect Phase
   - Old useEffect cleanup
   - New useEffect runs

5. If State Changed → Re-render again (go to step 1)
```

---

# 🎉 SUPER EASY MEMORY TRICK

**“RLCPE”**
Pronounce like: **“ReaL CaP”**

- **R** → Render
- **L** → LayoutEffect cleanup + run
- **C** → Commit DOM
- **P** → Paint
- **E** → useEffect cleanup + run

**Shortcut Sentence:**
👉 **"Render → Layout → Commit → Paint → Effect"**

100% accurate for all React output questions.

---
