/* ============================================================
   Emblem — tech.js
   technology.html のArchive Gridを data.js のデータから自動生成する。

   Featured Grid（上位3件）は technology.html のHTMLを直接編集する。
   Archive Grid（4件目以降）はこのファイルが data.js から自動生成する。

   【試験を追加するには】
   1. js/data.js の TECH_TESTS 配列の先頭に新しいオブジェクトを追加
   2. technology.html の Featured Grid を手動で更新
      （左大枠=最新、右上=2番目、右下=3番目）
   3. technology/ フォルダに新しい試験の個別ページHTMLを追加
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('archiveItems');
  if (!container || typeof TECH_TESTS === 'undefined') return;

  // 4件目以降（index 3以降）をArchiveに表示
  const archiveTests = TECH_TESTS.slice(3);

  container.innerHTML = archiveTests.map(test => {
    // Next Coming の場合
    if (test.is_planned) {
      return `
        <div class="tech-arc-item tech-arc-item--next-coming">
          <div class="tech-arc-item__next-placeholder" aria-hidden="true">?</div>
          <div class="tech-arc-item__overlay"></div>
          <div class="tech-arc-item__meta">
            <p class="tech-arc-item__date" data-jp="Next" data-en="Next">Next</p>
            <h3 class="tech-arc-item__title" data-jp="${test.title_jp}" data-en="${test.title_en}">${test.title_jp}</h3>
            <p class="tech-arc-item__date" data-jp="${test.date_jp}" data-en="${test.date_en}">${test.date_jp}</p>
          </div>
        </div>
      `;
    }

    // 通常の試験（動画あり）
    if (test.video) {
      return `
        <a href="technology/${test.slug}.html" class="tech-arc-item">
          <video class="tech-arc-item__video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
            <source src="${test.video}" type="video/mp4">
          </video>
          <div class="tech-arc-item__overlay"></div>
          <div class="tech-arc-item__meta">
            <p class="tech-arc-item__date" data-jp="${test.date_jp}" data-en="${test.date_en}">${test.date_jp}</p>
            <h3 class="tech-arc-item__title" data-jp="${test.title_jp}" data-en="${test.title_en}">${test.title_jp}</h3>
            <span class="tech-arc-item__arrow">→</span>
          </div>
        </a>
      `;
    }

    // 写真のみ（または素材なし）の試験
    return `
      <a href="technology/${test.slug}.html" class="tech-arc-item">
        <div style="position:absolute;inset:0;background:#1a1a1a;display:flex;align-items:center;justify-content:center;color:#444;font-size:10px;letter-spacing:.1em;text-transform:uppercase;">Photo</div>
        <div class="tech-arc-item__overlay"></div>
        <div class="tech-arc-item__meta">
          <p class="tech-arc-item__date" data-jp="${test.date_jp}" data-en="${test.date_en}">${test.date_jp}</p>
          <h3 class="tech-arc-item__title" data-jp="${test.title_jp}" data-en="${test.title_en}">${test.title_jp}</h3>
          <span class="tech-arc-item__arrow">→</span>
        </div>
      </a>
    `;
  }).join('');
});
