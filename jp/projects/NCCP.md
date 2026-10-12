---
pageClass: project-case-study
title: ハリケーン・ヘリーンの影響
order: 1
---

<style>
.figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0;
}
.figure img {
  max-width: 60%;
}
.caption {
  font-size: 0.9em;
  color: #555;
  margin-top: 0.5em;
  font-style: italic;
}

.pdf-embed-fallback {
  display: none;
}
@media (max-width: 768px) {
  .pdf-embed iframe {
    display: none;
  }
  .pdf-embed-fallback {
    display: block;
    text-align: center;
    margin-top: 1em;
  }
}
</style>


<ProjectHero
  index="01"
  eyebrow="都市分析 · 災害復興"
  title="ノースカロライナ州西部におけるハリケーン・ヘリーンの影響評価"
  summary="嵐による物理的な被害と、復興を左右する経済的・社会的条件を結びつけた、複数データソースによる評価。"
  year="2024"
  role="データ分析・リサーチ"
  methods="地理空間分析 · 公開データ · レジリエンス指標"
  image="/images/NCCP/precipitation.png"
  image-alt="ハリケーン・ヘリーンの降水量と被災郡の地図"
  report="/NCCP_slides.pdf"
/>

## 問い
このプロジェクトでは、ハリケーン・ヘリーンがノースカロライナ州西部に与えた影響を評価しました。嵐の影響の全体分析、被災郡のランキング、ヘリーン以前の状況、そして復興と将来のレジリエンス強化に向けた重要な論点を扱っています。

## 背景
分析には、NOAA、米国気象局（NWS）、ノースカロライナ州立気候局、Duke Energy、ノースカロライナ州森林局、同州農業局など、複数の信頼できる情報源のデータを用いました。被災地域を検証したうえで、国勢調査と州商務局のデータを使って過去にさかのぼる調査を行いました。

## 影響の概要
- **最も被害の大きかった郡：** Buncombe、McDowell、Henderson、Rutherford、Transylvania、Polk、Yancey、Mitchell、Avery
- **被害の種類：**
  - **電力被害：** インフラが深刻な被害を受け、復旧の難しいエリアが特定された。
  - **森林被害：** 6 つの郡で被害が最も大きく、特に McDowell（130,805 エーカー）と Buncombe（89,440 エーカー）が顕著。
  - **洪水と土砂崩れ：** 特に Yancey、Avery、McDowell の各郡で発生。

## ルックバック分析
ヘリーン以前、各郡のレジリエンスには次の要因による差がありました：
- **人口構成：** 賃貸世帯の割合が高く、高齢化が進んだ郡がある。
- **所得と貧困の傾向：** 所得の伸び率や貧困減少のパターンはまちまち。
- **住宅指標：** 住宅価格の伸びが鈍く、家賃負担の重い郡がいくつかある。
- **事業者の構成：** Mitchell や Yancey など被害の大きい地域では小規模事業者（年間売上 50 万ドル未満）の比率が高く、脆弱性を示している。

## 事業への影響
- 事業者を規模と地理的な集中度に基づいて地図化した。
- 小規模事業者の比率が高い地域は、レジリエンスが低いとみなされる。
- インフラ被害と停電は、特に農村部や山間部の小規模事業者に大きな打撃を与えた。

## 今後に向けた論点
1. **データ整備：** インフラのレジリエンス、経済の健全性、空室率、ヘリーン後の人口移動。
2. **支援制度の洗い出し：** 利用可能な連邦・州・地方の資金プログラムを整理する。
3. **戦略的な取り組み：**
   - 脆弱な人々を支援する。
   - 地元の事業者を再活性化する。
   - 将来の災害へのレジリエンスを高める。
   - 不正防止策を導入する。

---


## 影響の概要
<div class="figure">
    <img src="/images/NCCP/precipitation.png" alt="最も被害の大きかった郡の地図">
    <p class="caption">最も被害の大きかった郡と、復旧の難しいエリア・災害再建エリアを示す地図。</p>
</div>

## ルックバック分析
<div class="figure">
    <img src="/images/NCCP/housing.png" alt="住宅比率の分析">
    <p class="caption">郡ごとの持ち家と賃貸の比率、住宅価格の伸び、家賃負担。</p>
</div>

## 事業への影響
<div class="figure">
    <img src="/images/NCCP/small_to_all_rat.png" alt="小規模事業者と大規模事業者の分布">
    <p class="caption">小規模・大規模事業者の分布と、レジリエンスへの影響。</p>
</div>

## 今後に向けた論点
<div class="figure">
    <img src="/images/NCCP/bus_distro.png" alt="今後の復興フレームワーク">
    <p class="caption">ヘリーン後の政策と資金支援の主な論点をまとめたフレームワーク。</p>
</div>

## 森林被害の概要
<div class="figure">
    <img src="/images/NCCP/forest.png" alt="森林被害の概要">
    <p class="caption">被災郡全体の森林被害エリア。</p>
</div>

## 森林被害の詳細
<div class="figure">
    <img src="/images/NCCP/forest_2.png" alt="森林被害の詳細">
    <p class="caption">ノースカロライナ州西部における森林被害の内訳。</p>
</div>

## 住宅価格の伸び
<div class="figure">
    <img src="/images/NCCP/home_growth.png" alt="住宅価格の伸び">
    <p class="caption">郡別の住宅価格の推移。</p>
</div>

## 住宅価格と所得の格差
<div class="figure">
    <img src="/images/NCCP/home_price.png" alt="住宅価格の格差">
    <p class="caption">住宅価格と所得中央値の格差。</p>
</div>

## 家賃負担
<div class="figure">
    <img src="/images/NCCP/rent.png" alt="家賃負担のグラフ">
    <p class="caption">重い家賃負担を抱える人口の割合。</p>
</div>

## 大規模事業者の分布
<div class="figure">
    <img src="/images/NCCP/large_bus_distro.png" alt="大規模事業者の分布">
    <p class="caption">被災郡全体の大規模事業者の分布。</p>
</div>

## 電力インフラの被害
<div class="figure">
    <img src="/images/NCCP/power.png" alt="電力インフラの被害">
    <p class="caption">電力インフラの被害エリアを示す地図。</p>
</div>


## 元のスライド（英語）
<div class="pdf-embed">
  <iframe 
      src="/NCCP_slides.pdf#zoom=fitW" 
      type="application/pdf" 
      width="80%" 
      height="800" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>この表示では PDF をプレビューできません。ダウンロードしてご覧ください：</p>
    <p><a href="/NCCP_slides.pdf" target="_blank" download>📥 スライドをダウンロード</a></p>
  </div>
</div>

[📥 レポートをダウンロード](/NCCP_slides.pdf){target="_blank" download}
