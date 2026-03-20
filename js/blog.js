document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("posts");
  if (!container) return;

  try {
    const res = await fetch("posts/posts.json");
    const posts = await res.json();

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = posts
      .map(
        (p) => `
      <article class="post-card">
        <h2><a href="posts/${p.slug}.html">${p.title}</a></h2>
        <div class="post-date">${new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
        <p class="post-synopsis">${p.synopsis}</p>
      </article>`
      )
      .join("");
  } catch (e) {
    container.innerHTML = "<p>Unable to load posts.</p>";
  }
});
