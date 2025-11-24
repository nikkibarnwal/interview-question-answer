// SSR (Server-Side Rendering) – Simple Example

export const dynamic = "force-dynamic";
// ensures SSR on every request

async function getData() {
const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
return res.json();
}

export default async function SSRExample() {
const post = await getData();

return (
<div style={{ padding: 20 }}>
<h1>📕 SSR Example</h1>
<p><b>Title:</b> {post.title}</p>
<p><b>Body:</b> {post.body}</p>
</div>
);
}
