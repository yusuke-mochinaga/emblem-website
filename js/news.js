/* ============================================================
   Emblem — news.js
   news.html のニュースリストを data.js のデータから自動生成する。

   【ニュースを追加するには】
   js/data.js の NEWS_ITEMS 配列の先頭に新しいオブジェクトを追加するだけ。
   このファイルは触らなくてよい。
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('news-list');
  if (!container || typeof NEWS_ITEMS === 'undefined') return;

  container.innerHTML = NEWS_ITEMS.map(item => `
    <div class="news-item fade-in">
      <div class="news-item__meta">
        <p class="news-item__date" data-jp="${item.date_jp}" data-en="${item.date_en}">${item.date_jp}</p>
        <span class="news-item__category">${item.category}</span>
      </div>
      <p class="news-item__title" data-jp="${item.title_jp}" data-en="${item.title_en}">${item.title_jp}</p>
    </div>
  `).join('');

  // 生成後にfade-inを再初期化（main.jsのfade-inはDOMContentLoaded前に走るため）
  if (typeof initFadeIn === 'function') initFadeIn();
});
