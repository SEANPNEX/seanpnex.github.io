---
pageClass: project-case-study
title: TTS チャットボット
order: 3
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
  index="03"
  eyebrow="機械学習 · 対話システム"
  title="多言語対応の音声合成チャットボット"
  summary="機械との会話をより自然に聞こえるようにするための、クロスプラットフォームのチャットボットとニューラル音声合成の比較研究。"
  year="2023"
  role="リサーチ、モデル評価、開発"
  methods="VITS · Tacotron 2 · NoneBot · MOSNet · MCD"
  image="/images/chatbot/mel_s.png"
  image-alt="音声合成システムが生成したメルスペクトログラム"
  report="/chatbot_report.pdf"
/>

## 問い

このプロジェクトは、**テキスト読み上げ（TTS）機能を統合したクロスプラットフォームのチャットボット**の開発です。デューク崑山大学の Signature Work プログラムの一環として、郭舜（Shun Guo）が設計・実装しました。QQ や WeChat など複数のソーシャルプラットフォームで動作し、自然な音声での応答によって人と機械のやり取りを改善することを目指しています。

## プロジェクトのポイント

- **目的：** 深層学習に基づく最新の TTS アルゴリズムをチャットボットに統合し、さまざまなソーシャルプラットフォームに展開して、自然な音声でのやり取りによりユーザー体験を高める。
  
- **検討した TTS システム：** 代表的な 2 つの TTS モデルの比較に焦点を当てた：
  - **Tacotron 2**（Google）
  - **VITS**（敵対的学習を組み合わせた条件付き変分オートエンコーダ）
  
- **評価指標：** 
  - 深層学習ベースの客観指標 **MOSNet** で平均オピニオン評点（MOS）を評価。
  - **メルケプストラム距離（MCD）**で、生成音声と実際の人の音声サンプルとの類似度を測定。
  
  <div class="figure">
    <img src="/images/chatbot/statistical_synthesis.png" alt="表 2.1：統計的パラメトリック音声合成の概要">
    <p class="caption">表 2.1：テキスト読み上げ（TTS）タスクのアルゴリズム</p>
  </div>

- **結果：**
  - **VITS** は MOSNet スコアと MCD 評価の両方で **Tacotron 2** を上回った。
  - VITS の MOSNet スコアは **2.63±0.08**、Tacotron 2 は **2.56±0.035**。
  - MCD からも、VITS の生成音声のほうが実際の人の声に近いことが示された。
  
  <div class="figure">
    <img src="/images/chatbot/mel_s.png" alt="図 4.1：サンプルデータのメルスペクトログラム">
    <p class="caption">図 4.1：サンプルデータのメルスペクトログラム</p>
  </div>

  <div class="figure">
    <img src="/images/chatbot/mel_n.png" alt="図 4.2：推論データのメルスペクトログラム">
    <p class="caption">図 4.2：推論データのメルスペクトログラム</p>
  </div>

## 技術スタック

- **フレームワーク：** NoneBot 2（オープンソースのクロスプラットフォーム・チャットボットフレームワーク）
- **学習データ：** 公開コーパス（VCTK コーパスなど）から集めた多言語データセット（英語・中国語・日本語）。
- **デプロイ：** デューク崑山大学の仮想計算管理サービス上の Ubuntu 20.04 サーバー。
- **NLP 連携：** 応答は、事前に用意した記録、NLP API（ChatGPT など）、チャットログを組み合わせて生成。

<div class="figure">
  <img src="/images/chatbot/Nonebot.jpg" alt="図 2.1：NoneBot フレームワークのアーキテクチャ">
  <p class="caption">図 2.1：NoneBot フレームワークのアーキテクチャ</p>
</div>

## 主な機能

- 多言語での音声応答（英語・中国語・日本語）
- 主要なソーシャルプラットフォーム（QQ など）との連携
- 自然な合成音声によるユーザーとのやり取りの向上
- 今後の拡張や言語追加に対応できるモジュール構成

## 表と数式

### 表 2.1：テキスト読み上げ（TTS）タスクのアルゴリズム

| 名称 | 説明 | 出典 |
|------------------------------|--------------------------------------------------------|--------------------------|
| Unit Selection | 既存のコーパスから音声単位を選択 | Hunt ほか、1996 [8] |
| Statistical Parametric Synthesis | 隠れマルコフモデルで波形を予測 | Zen ほか、2009 [31] |
| Wavenet | 自己回帰型 PixelRNN | Oord ほか、2016 [15] |
| Fast Wavenet | Wavenet の時間計算量を削減 | Paine ほか、2016 [16] |
| Deep Voice | 多層 GRU エンコーダ・デコーダ + CNN と RNN のハイブリッド | Baidu、2017 [2] |
| Deep Voice 2 | Deep Voice と同じ構成で WaveNet 層を増加 | Baidu、2017 [5] |
| Deep Voice 3 | 全畳み込みエンコーダ・デコーダ | Google、2017 [17] |
| Tacotron | CBHG と RNN のエンコーダ・デコーダ | Google、2017 [28] |
| Tacotron 2 | LSTM と RNN のエンコーダ・デコーダ | Google、2018 [20] |
| VITS | cVAE + GAN | Kim ほか、2021 [9] |

### 式 3.1：STFT

$$
STFT\{x[n]\}(m, \omega) = \sum_{n=-\infty}^{\infty} x[n] w[n-m] e^{-j\omega n}
$$

### 式 4.2：MCD

$$
MCD(m, n) = \sqrt{ \left(\frac{m-n}{\sqrt{\frac{1}{2}\text{len}(m)}}\right)^2 - \left(\frac{m-n}{\sqrt{\frac{1}{2}\text{len}(n)}}\right)^2 }
$$

## 結論

このプロジェクトは、深層学習による TTS システムが自然な音声を加えることで、チャットボットと人とのやり取りを大きく改善できることを示しました。**VITS** がより優れたモデルと判断された一方で、応答生成の遅さや評価精度といった課題も見つかり、今後の改善の方向性が明らかになりました。

<div class="figure">
  <img src="/images/chatbot/gan_diagram.jpg" alt="図 3.3：GAN の構造">
  <p class="caption">図 3.3：GAN の構造</p>
</div>

<div class="figure">
  <img src="/images/chatbot/GAN.png" alt="図 3.3：GAN の構造">
  <p class="caption">図 3.3：GAN の構造</p>
</div>

<div class="figure">
  <img src="/images/chatbot/vits_loss.jpg" alt="式 3.1：STFT">
  <p class="caption">式 3.1：STFT</p>
</div>


## 元のレポート（英語）
<div class="pdf-embed">
  <iframe 
      src="/chatbot_report.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>この表示では PDF をプレビューできません。ダウンロードしてご覧ください：</p>
    <p><a href="/chatbot_report.pdf" target="_blank" download>📥 レポートをダウンロード</a></p>
  </div>
</div>

[📥 レポートをダウンロード](/chatbot_report.pdf){target="_blank" download}
