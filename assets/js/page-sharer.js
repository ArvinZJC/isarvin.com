document.querySelectorAll('[data-page-sharer]').forEach((sharer) => {
  const url = sharer.dataset.shareUrl;
  const title = sharer.dataset.shareTitle;
  const copy = sharer.querySelector('[data-share-copy]');
  const more = sharer.querySelector('[data-share-more]');
  const status = sharer.querySelector('[data-share-status]');
  const fallback = sharer.querySelector('[data-share-fallback]');

  copy.hidden = false;
  copy.addEventListener('click', async () => {
    status.textContent = '';
    fallback.hidden = true;
    try {
      await navigator.clipboard.writeText(url);
      status.textContent = 'Link copied';
    } catch {
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      status.textContent = 'Select and copy the link below.';
    }
  });

  const data = { title, url };
  if (typeof navigator.share === 'function' &&
      (!navigator.canShare || navigator.canShare(data))) {
    more.hidden = false;
    more.addEventListener('click', async () => {
      status.textContent = '';
      more.disabled = true;
      try {
        await navigator.share(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          status.textContent = 'Sharing is unavailable. Use Copy link instead.';
        }
      } finally {
        more.disabled = false;
      }
    });
  }
});
