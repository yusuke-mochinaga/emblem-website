/* ============================================================
   Emblem — data.js
   サイト全体のコンテンツデータを一元管理するファイル。

   【更新方法】
   - ニュースを追加したい → NEWS_ITEMS の先頭に1オブジェクト追加
   - 飛行試験を追加したい → TECH_TESTS の先頭に1オブジェクト追加
     その後、featured（上位3件）とarchive（4件目以降）は自動で更新される。
   ============================================================ */


/* ============================================================
   NEWS データ
   表示順: 配列の先頭が最新（ページ上部に表示される）

   各項目の説明:
     date_jp  : 日本語表示の日付
     date_en  : 英語表示の日付
     category : カテゴリ（表示そのまま）
     title_jp : 日本語タイトル
     title_en : 英語タイトル
     link     : 外部リンクURL（なければ null）
   ============================================================ */
const NEWS_ITEMS = [
  {
    date_jp: "2026年1月",
    date_en: "Jan 2026",
    category: "連携",
    title_jp: "ブータン政府とのLOI調印。首相来日時にJETROビジネスセミナーで登壇。",
    title_en: "LOI signed with the Government of Bhutan. Presented at JETRO Business Seminar during Prime Minister's visit to Japan.",
    link: null
  },
  {
    date_jp: "2025年5月",
    date_en: "May 2025",
    category: "連携",
    title_jp: "モザンビーク政府とのLOI調印。大阪万博パビリオン内で飛行映像を展示。",
    title_en: "LOI signed with the Government of Mozambique. Flight footage exhibited at Osaka Expo pavilion.",
    link: null
  },
  {
    date_jp: "2025年5月",
    date_en: "May 2025",
    category: "採択",
    title_jp: "NEDO先導研究プログラム採択（2024–26）。JAXA・ミズノ・SOMと連携。",
    title_en: "Selected for NEDO Leading Research Program (2024–26). Partnering with JAXA, Mizuno, and SOM.",
    link: null
  },
  {
    date_jp: "2024年10月",
    date_en: "Oct 2024",
    category: "認定",
    title_jp: "JAXAスタートアップ認定。航空技術部門から2社目。",
    title_en: "Certified as a JAXA Startup. Second company from the aviation technology division.",
    link: null
  },
  {
    date_jp: "2024年2月",
    date_en: "Feb 2024",
    category: "連携",
    title_jp: "石川県加賀市と包括連携協定締結。国家戦略特区内に試験拠点整備。",
    title_en: "Comprehensive partnership agreement concluded with Kaga City, Ishikawa. Test facility established in National Strategic Special Zone.",
    link: null
  },
  {
    date_jp: "2024年2月",
    date_en: "Feb 2024",
    category: "メディア",
    title_jp: "日本経済新聞・中日新聞に掲載。",
    title_en: "Featured in Nikkei Shimbun and Chunichi Shimbun.",
    link: null
  }
];


/* ============================================================
   TECH 飛行試験データ
   表示順: 配列の先頭が最新

   technology.html では:
     - 先頭3件 → Featured Grid（左大枠1件 + 右上下2件）
     - 4件目以降 → Archive Grid（3列グリッド）

   各項目の説明:
     slug      : URLのファイル名（technology/[slug].html）
     date_jp   : 日本語表示の日付
     date_en   : 英語表示の日付
     title_jp  : 日本語タイトル
     title_en  : 英語タイトル
     video     : 動画ファイルのパス（assets/videos/から）。なければ null
     photo     : サムネイル画像のパス。なければ null
     is_latest : true にすると「Latest」バッジが付く（先頭1件だけ true にする）
     is_planned: true にすると「Next Coming」として破線ボーダーで表示
   ============================================================ */
const TECH_TESTS = [
  {
    slug: "hands-free",
    date_jp: "2026年",
    date_en: "2026",
    title_jp: "ハンズフリーホバリング",
    title_en: "Hands-free Hovering",
    video: "assets/videos/hands-free.mp4",
    photo: null,
    is_latest: true,
    is_planned: false
  },
  {
    slug: "stable-hovering",
    date_jp: "2026年4月",
    date_en: "Apr 2026",
    title_jp: "安定したホバリング",
    title_en: "Stable Hovering",
    video: "assets/videos/hovering.mp4",
    photo: null,
    is_latest: false,
    is_planned: false
  },
  {
    slug: "hunging-start",
    date_jp: "2025年9月",
    date_en: "Sep 2025",
    title_jp: "ホバリング開始",
    title_en: "Hovering Start",
    video: "assets/videos/hunging_start.mp4",
    photo: null,
    is_latest: false,
    is_planned: false
  },
  {
    slug: "first-flight",
    date_jp: "2025年6月",
    date_en: "Jun 2025",
    title_jp: "初フライト",
    title_en: "First Flight",
    video: "assets/videos/first_flight.mp4",
    photo: null,
    is_latest: false,
    is_planned: false
  },
  {
    slug: "system-integration",
    date_jp: "2024年11月",
    date_en: "Nov 2024",
    title_jp: "システム統合",
    title_en: "System Integration",
    video: null,
    photo: null,
    is_latest: false,
    is_planned: false
  },
  {
    slug: null,
    date_jp: "2026年 予定",
    date_en: "2026 Planned",
    title_jp: "ジップライン飛行",
    title_en: "Zip-line Flight",
    video: null,
    photo: null,
    is_latest: false,
    is_planned: true
  }
];
