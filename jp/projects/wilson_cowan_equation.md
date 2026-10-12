---
pageClass: project-case-study
title: Wilson–Cowan 方程式
order: 2
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
  index="02"
  eyebrow="計算論的神経科学 · 力学系"
  title="ニューロン集団が振動を始めるとき"
  summary="修正 Wilson–Cowan モデルでリミットサイクルが生じる条件を、解析と計算の両面から調べた研究。"
  year="2022"
  role="数理解析・シミュレーション"
  methods="微分方程式 · 分岐解析 · Python"
  image="/images/wilson_cowan/Nullclines.png"
  image-alt="Wilson-Cowan 力学系のヌルクライン"
  report="/Wilson_Cowan_Equation.pdf"
/>

## 問い

このプロジェクトでは、**修正 Wilson-Cowan モデル**を用いてニューロン集団の振動的なふるまいを探りました。理論解析とシミュレーション結果の両方に焦点を当て、リミットサイクル（振動する神経活動を表す）がどのような条件で生じるかを調べています。

## 目的

- 興奮性と抑制性のニューロン集団がどのように相互作用して振動を生むかを理解する。
- **ホップ分岐**とリミットサイクルにつながる条件を特定する。
- **解析的手法**と**数値シミュレーション**の両方で、特殊な場合と一般の場合を分析する。

## 主要な概念

- **Wilson-Cowan モデル：** 非線形微分方程式とシグモイド型の応答関数を使い、興奮性（E）と抑制性（I）のニューロン集団の相互作用を記述する。
- **リミットサイクル：** 位相平面上で閉じた軌道として表れる振動的なふるまい。
- **ホップ分岐：** 安定な平衡点が不安定になり、リミットサイクルが現れる臨界条件。

## Wilson-Cowan モデルの方程式

$$ 
\frac{dx(t)}{dt} = -ax(t) + (1 - r_x x(t)) S(wx(t) - by(t) + I(t)) 
$$

$$ 
\frac{dy(t)}{dt} = -dy(t) + (1 - r_y y(t)) S(cx(t) - ey(t) + J(t)) 
$$

ここで：
- \( x(t) \) と \( y(t) \)：時刻 \( t \) に発火している興奮性細胞と抑制性細胞の割合
- \( S(\theta') = \frac{\theta'}{\sqrt{\theta'^2 + 1}} \)：シグモイド型の応答関数

## ケーススタディ：外部刺激なし（I = 0、J = 0）
- 自己興奮の係数 **w** を変化させ、その影響を調べる。
- 結果：
  - **w > d** かつ **γ > 1**（γ はパラメータ比）のとき、振動（リミットサイクル）が生じる。
  - その範囲内では、**w** が大きくなるほど振動の周期が長くなる。
  - **Mathematica** と **Python** のシミュレーションで確認した。

## ヌルクラインの方程式

$$ 
y_f(x) = \frac{1}{b} \cdot \frac{wx + I - ax}{\sqrt{1 - (ax)^2}}
$$

$$ 
y_g(x) = \frac{1}{d} \cdot \frac{cx + J}{\sqrt{1 + (cx + J)^2}}
$$

<div class="figure">
    <img src="/images/wilson_cowan/Nullclines.png" alt="系のヌルクライン">
    <p class="caption">図：a=0.1、b=1、c=1、d=0.1、w=1、I=6、J=4 のときのヌルクライン。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/StabilitySketch00.png" alt="T-D 平面">
    <p class="caption">図：T-D 平面と安定領域。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/GeneralCase01_0.png" alt="シミュレーション例 1">
    <p class="caption">図：w = 0.1、2.7、1 のときのシミュレーション結果。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/RminRmax.png" alt="環状の領域">
    <p class="caption">図：パラメータ例における環状の領域とリミットサイクル。</p>
</div>

## その他の発見
- **J = 0** で **I** を変化させた場合：
  - リミットサイクルは特定の **I の範囲**、**I ∈ [-2.98, 2.98]** でのみ存在する。
- **I = 0** で **J** を変化させた場合：
  - リミットサイクルは **J ∈ [-7.22, 7.22]** で存在する。
- **自己興奮（w > 0）**は振動に不可欠であり、**w = 0** ではサイクルは生じない。

## ヤコビ行列と分岐条件

ヤコビ行列は次のとおり：

$$
DF(x) =
\begin{bmatrix}
\frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\\\
\frac{\partial g}{\partial x} & \frac{\partial g}{\partial y}
\end{bmatrix}
$$

ホップ分岐の条件：
- トレース \( T = 0 \)
- 行列式 \( \Delta > 0 \)

<div class="figure">
    <img src="/images/wilson_cowan/PeriodExplanation.png" alt="周期と w の関係">
    <p class="caption">図：周期と w の関係（Monteiro ほか、2002 より）。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/PythonSimulation00.png" alt="位相図の例">
    <p class="caption">図：w=0.6 のときの系のダイナミクス。リミットサイクルが形成される様子。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/PythonSimulation01.png" alt="E と I の時系列">
    <p class="caption">図：興奮性細胞と抑制性細胞の振動。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/I-exp.png" alt="周期と I の関係">
    <p class="caption">図：周期と I の関係（Monteiro ほか、2002 より）。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/J-exp.png" alt="周期と J の関係">
    <p class="caption">図：周期と J の関係（Monteiro ほか、2002 より）。</p>
</div>

## 結論
修正を加えた Wilson-Cowan モデルは、皮質カラムが内在的な振動を示しうることを示しています。振動とその周期は、自己興奮と外部刺激に敏感です。これは、ニューロン集団が同期して感覚入力を処理する仕組みについて、メカニズムの面から示唆を与えます。


## 元のレポート（英語）
<div class="pdf-embed">
  <iframe 
      src="/Wilson_Cowan_Equation.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>この表示では PDF をプレビューできません。ダウンロードしてご覧ください：</p>
    <p><a href="/Wilson_Cowan_Equation.pdf" target="_blank" download>📥 レポートをダウンロード</a></p>
  </div>
</div>

[📥 レポートをダウンロード](/Wilson_Cowan_Equation.pdf){target="_blank" download}
