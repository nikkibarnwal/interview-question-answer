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
