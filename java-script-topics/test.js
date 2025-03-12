console.error("this is error");
console.warn("this is warning");

const users = [
  { name: "Amit", age: 25 },
  { name: "Neha", age: 30 },
];

console.table(users);

import { Suspense, lazy } from "react";
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./LazyComponent"));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>;
