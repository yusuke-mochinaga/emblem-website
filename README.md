# Emblem Website

## ファイル構成

```
/
├── index.html          ホームページ
├── technology.html     技術・飛行試験一覧
├── news.html           ニュース一覧
├── recruit.html        採用ページ
├── team.html           チームページ（SHOW_TEAM=falseで非表示）
├── privacy.html        プライバシーポリシー
├── technology/         飛行試験の個別ページ
│   ├── hands-free.html
│   ├── stable-hovering.html
│   ├── hunging-start.html
│   ├── first-flight.html
│   └── system-integration.html
├── css/
│   └── style.css       全ページ共通スタイル
├── js/
│   ├── main.js         Nav・言語切り替え・アニメーション等の共通JS
│   ├── form.js         採用フォームの送信処理
│   ├── news.js         NEWS_ITEMSデータ + index.htmlのNewsカルーセル生成
│   └── tech.js         TECH_TESTSデータ + technology.htmlのArchive生成
└── assets/
    ├── images/         ロゴ・写真等
    └── videos/         飛行試験動画（mp4）
```

---

## よくある更新作業

### ニュースを追加したい

**Step 1**: `news.html` の `id="news-list"` コンテナに新しいカードのHTMLを先頭に追加する。

例:
```html
<!-- 新しい順に並べて、最初に挿入 -->
<div class="news-card-full fade-in" data-category="連携">
  <div class="news-card-full__img news-card-full__img--photo">
    <!-- 画像があれば <img src="..." alt="..."> を入れる -->
    <!-- 画像がなければプレースホルダー div -->
    <div style="width:100%;height:100%;background:#f0f0f0;display:flex;align-items:center;justify-content:center;color:#999;font-size:12px;letter-spacing:.05em;">No Image</div>
  </div>
  <div class="news-card-full__body">
    <div class="news-card-full__meta">
      <span class="news-card-full__date" data-jp="2026年X月" data-en="XXX 2026">2026年X月</span>
      <span class="news-card-full__badge" data-jp="連携" data-en="Partnership">連携</span>
    </div>
    <p class="news-card-full__title" data-jp="日本語タイトル" data-en="English title">日本語タイトル</p>
  </div>
</div>
```

**Step 2**: `js/news.js` の `NEWS_ITEMS` 配列の先頭にも同じ内容を追加する（index.htmlのNewsバンド表示のため）。

```javascript
{
  date_jp: "2026年X月",
  date_en: "XXX 2026",
  category: "連携",           // 連携 / 採択 / 認定 / メディア
  title_jp: "日本語タイトル",
  title_en: "English title",
  link: null                  // 外部リンクがあればURLを文字列で
},
```

これで `news.html` と `index.html` のニュース帯に反映される。

---

### Tech を追加したい（技術ページのセクション）

**js/tech.js のみを編集** — technology.html と index.html は自動で更新されます。

**Step 1**: 現在の「NEXT UP」エントリを本番エントリに変更する

`TECH_ENTRIES` 配列の「NEXT UP」セクションを見つけて、以下を変更：

```javascript
{
  id: 'vision',
  num: 'NEXT UP',          // ← '04' に変更（新しいnum）
  visible: true,
  is_planned: true,        // ← false に変更
  media: {
    type: 'photo',
    src: 'assets/images/next_goggle_2.jpg',  // ← 新しい素材に差し替え
    alt: 'REKKIEゴーグルを着用した飛行写真'  // ← 説明を更新
  },
  date_jp: 'August 2026',
  date_en: 'August 2026',
  title_jp: '飛行する視界',       // ← タイトルを更新
  title_en: 'Vision in Flight',
  body_jp: 'See beyond what you see',  // ← 本文を更新
  body_en: 'See beyond what you see',
  link: null
}
```

**Step 2**: 新しい「NEXT UP」エントリを配列末尾に追加する

```javascript
{
  id: 'next-feature',    // ← 新しいID（ユニークな名前）
  num: 'NEXT UP',
  visible: true,
  is_planned: true,      // ← これは必ず true
  media: {
    type: 'photo',       // または 'video'
    src: 'assets/images/coming-soon.jpg',  // または null でプレースホルダー表示
    alt: '次の技術の説明文'
  },
  date_jp: 'Coming Soon',
  date_en: 'Coming Soon',
  title_jp: '次の技術名',
  title_en: 'Next Feature Name',
  body_jp: '説明文（日本語）',
  body_en: 'Description (English)',
  link: null
}
```

**自動更新の仕組み：**
- `is_planned: false` のエントリから最新3件を自動抽出
- Home page の tech grid に最新3件を自動表示（最新→2番目→3番目）
- Technology page に全セクション（は自動生成）
- NEXT UP は常に最後のセクション（暗くぼかし表示）

---

### チームページを公開したい

`js/main.js` の先頭にある以下の行を変更する。

```javascript
const SHOW_TEAM = false;  // ← true に変えるだけで全ページのTeamリンクが出現
```

---

### フッターのメールアドレスを変えたい

現状: 各HTMLファイルのフッターに直接書かれているため、全ファイルを変更する必要がある。
（将来的にPhase 2: コンポーネント共通化で解消予定）

対象ファイル:
- index.html, technology.html, news.html, recruit.html, team.html, privacy.html
- technology/ 以下の全HTMLファイル

---

## デプロイ

GitHubのmainブランチにpushすると、Netlifyが自動でデプロイする。
URL: https://emblemand.netlify.app

動画ファイルはリポジトリに含めない（.gitignore参照）。
動画はCloudflare R2に格納し、HTMLのsrc属性でURLを参照する。

↑現状できていない。githubで全てまとめて公開中。将来的にはこの方法に移行。

---

## 言語切り替え

日本語/英語の切り替えは `data-jp="..."` `data-en="..."` 属性で管理している。
新しいテキストを追加する際は必ず両属性を記載すること。
`js/main.js` の `initLang()` 関数が全ページで処理する。

---

## OGP画像

- ファイル: assets/images/og-image.jpg
- 推奨サイズ: 1200×630px
- 用途: SNSシェア時のサムネイル
- 現状: プレースホルダー未設置。画像を用意してこのパスに配置すること。
