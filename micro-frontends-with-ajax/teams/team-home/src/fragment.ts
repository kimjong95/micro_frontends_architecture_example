export async function loadFragment(root: HTMLElement) {
  const template = root.getAttribute("data-fragment");
  const htmlUrl = `${template}/index.html`;
  const styleUrl = `${template}/index.css`;
  const scriptUrl = `${template}/index.js`;

  try {
    const html = await fetch(htmlUrl).then((res) => res.text());
    root.innerHTML = html;

    // css load
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = styleUrl;
    root.appendChild(link);

    // script load
    const script = document.createElement("script");
    script.src = scriptUrl;
    root.appendChild(script);
  } catch (error) {
    console.log("error", root);
    root.innerHTML = `<div class="error>에러발생</div>`;
  }
}
