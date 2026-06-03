/* ============================================================
   Emblem — home.js
   index.html のNewsカルーセル帯を data.js から自動生成する。
   最新4件のみ表示する。
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('home-news-band');
  if (!container || typeof NEWS_ITEMS === 'undefined') return;

  // 最新4件だけ表示
  const recent = NEWS_ITEMS.slice(0, 4);

  container.innerHTML = recent.map(item => `
    <div class="news-card fade-in">
      <div class="news-card__img news-card__img--icon">
        <div style="width:100%;height:100%;background:#333;display:flex;align-items:center;justify-content:center;color:#666;font-size:24px;">📰</div>
      </div>
      <div class="news-card__body">
        <p class="caption news-card__date" data-jp="${item.date_jp}" data-en="${item.date_en}">${item.date_jp}</p>
        <span class="news-card__badge" data-jp="${item.category}" data-en="${item.category}">${item.category}</span>
        <p class="news-card__title" data-jp="${item.title_jp}" data-en="${item.title_en}">${item.title_jp}</p>
      </div>
    </div>
  `).join('');

  // 生成後にfade-inを再初期化
  if (typeof initFadeIn === 'function') initFadeIn();
});
