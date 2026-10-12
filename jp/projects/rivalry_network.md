---
pageClass: project-case-study
title: ライバルリー・ネットワーク
order: 4
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
  index="04"
  eyebrow="計算論的神経科学 · ネットワーク・ダイナミクス"
  title="ライバルリー・ネットワーク：知覚から歩行まで"
  summary="一般化 Wilson–Cowan ネットワークを用いて、視知覚の交替と四足歩行のリズムパターンを調べた研究。"
  year="2022"
  role="モデリング、シミュレーション、総合"
  methods="結合振動子 · 対称性 · ホップ分岐"
  image="/images/rivalry_network/wilson_network.png"
  image-alt="一般化 Wilson ライバルリー・ネットワークの図"
  report="/Rivalry_Network.pdf"
/>

## 問い

このプロジェクトでは、拡張した **Wilson-Cowan モデル**を用いて結合したニューロン集団のふるまいを説明する一般化モデル、**ライバルリー・ネットワーク**を調べました。注目したのは次の 2 つの生物学的現象です：
- **視知覚**、特に**両眼視野闘争**。
- **四足歩行**。動物の移動における中枢パターン発生器（CPG）のリズム出力をシミュレートする。

## 主要な概念

- **Wilson-Cowan モデル：** ニューラルネットワークにおける興奮と抑制の相互作用を説明する基礎的な 2 ノードモデル。安定状態やリミットサイクルといったふるまいをホップ分岐で解析する。
- **一般化 Wilson ネットワーク：** 多ノード構成に拡張したもので、両眼視野闘争における多安定知覚など、より複雑な現象を扱う。

## Wilson-Cowan モデルの方程式

$$ 
\frac{dx(t)}{dt} = -ax(t) + G(wx(t) - by(t) + I(t)) \\
\frac{dy(t)}{dt} = -dy(t) + G(cx(t) - ey(t) + J(t)) 
$$

$$ 
G(z) = \frac{z}{\sqrt{z^2 + 1}}
$$

## ホップ分岐の条件

$$
\text{Jacobian} = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\ \frac{\partial g}{\partial x} & \frac{\partial g}{\partial y} \end{bmatrix} \\
\text{Hopf bifurcation occurs when:} \quad T = 0,\ D > 0
$$

<div class="figure">
    <img src="/images/rivalry_network/wilson_network.png" alt="Wilson ネットワークの例">
    <p class="caption">図：興奮性ノードと抑制性ノードからなる Wilson ネットワークモデル。</p>
</div>

## 応用 1：両眼視野闘争
- 左右の目に異なる画像を見せたときに起こる知覚の交替を説明する。
- **1 か所**（基本的な闘争）のモデルから **4 か所**のモデルへ拡張する。
- 対称操作（Z2、Z4 群など）を取り入れ、**「サル・テキスト」**や**「24 ドット」**といった実験での知覚パターンを予測する。

<div class="figure">
    <img src="/images/rivalry_network/binocular.png" alt="両眼視野闘争の実験">
    <p class="caption">図：古典的な両眼視野闘争の実験設定。</p>
</div>

## 応用 2：四足歩行
- **8 細胞のライバルリー・ネットワーク**で、四足歩行のリズムパターン（ウォーク、トロット、ペースなど）をシミュレートする。
- 対称性に基づく解析で、結合の強さと分岐が歩容の切り替えにどう影響するかをモデル化する。

<div class="figure">
    <img src="/images/rivalry_network/monkey_text1.png" alt="サル・テキスト実験">
    <p class="caption">図：多安定知覚を示す「サル・テキスト」実験。</p>
</div>

## 実験による検証
- 分析は、独自の刺激を使って **4 か所の両眼視野闘争**における知覚の交替を検証した実験（Golubitsky、2019）に裏付けられている。
- 結果は拡張 Wilson-Cowan モデルの予測の一部を確認したが、特に画像の間隔の影響について食い違いも明らかになった。

## 結論
この研究は、ライバルリー・ネットワークと対称性解析が周期的な生物現象の説明に有効であることを示しました。一方で、理論的な予測と実験結果のずれといった限界も明らかになりました。今後は実証的な検証と、より複雑な錯視を説明できるモデルへの拡張に取り組むべきです。

<div class="figure">
    <img src="/images/rivalry_network/3.4.2.png" alt="四足歩行の対称性モデル">
    <p class="caption">図：ライバルリー・ネットワークが予測する四足歩行パターンの対称性解析。</p>
</div>


## 元のレポート（英語）
<div class="pdf-embed">
  <iframe 
      src="/Rivalry_Network.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>この表示では PDF をプレビューできません。ダウンロードしてご覧ください：</p>
    <p><a href="/Rivalry_Network.pdf" target="_blank" download>📥 レポートをダウンロード</a></p>
  </div>
</div>

[📥 レポートをダウンロード](/Rivalry_Network.pdf){target="_blank" download}
