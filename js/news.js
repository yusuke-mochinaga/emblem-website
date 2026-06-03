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
    <div class="news-card-full fade-in" data-category="${item.category}">
      <div class="news-card-full__img news-card-full__img--photo">
        <div style="width:100%;height:100%;background:#333;display:flex;align-items:center;justify-content:center;color:#666;">📰</div>
      </div>
      <div class="news-card-full__body">
        <div class="news-card-full__meta">
          <span class="news-card-full__date" data-jp="${item.date_jp}" data-en="${item.date_en}">${item.date_jp}</span>
          <span class="news-card-full__badge" data-jp="${item.category}" data-en="${item.category}">${item.category}</span>
        </div>
        <p class="news-card-full__title" data-jp="${item.title_jp}" data-en="${item.title_en}">${item.title_jp}</p>
      </div>
    </div>
  `).join('');

  // 生成後にfade-inを再初期化（main.jsのfade-inはDOMContentLoaded前に走るため）
  if (typeof initFadeIn === 'function') {
    setTimeout(() => initFadeIn(), 0);
  }
});
