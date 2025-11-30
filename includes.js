// Simple client-side include loader. Places the contents of includes/header.html
// and includes/footer.html into elements with IDs 'site-header' and 'site-footer'.
async function includeHTML(id, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
    const html = await res.text();
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  } catch (err) {
    // Keep failure silent for users; log for debugging.
    console.error('Include failed:', url, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Use relative paths so the site works as a project site under
  // https://username.github.io/repo/ as well as a user site.
  includeHTML('site-header', 'includes/header.html');
  includeHTML('site-footer', 'includes/footer.html');
});
