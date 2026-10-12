---
pageClass: project-case-study
title: 竞争网络
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
  eyebrow="计算神经科学 · 网络动力学"
  title="竞争网络：从知觉到运动"
  summary="用广义 Wilson–Cowan 网络研究视知觉的交替，以及四足动物运动中的节律模式。"
  year="2022"
  role="建模、仿真与综述"
  methods="耦合振子 · 对称性 · Hopf 分岔"
  image="/images/rivalry_network/wilson_network.png"
  image-alt="广义 Wilson 竞争网络示意图"
  report="/Rivalry_Network.pdf"
/>

## 问题

本项目研究**竞争网络（Rivalry Network）**——一种借助扩展的 **Wilson-Cowan 模型**解释耦合神经元群体行为的广义模型。它关注两种生物现象：
- **视知觉**，特别是**双眼竞争**。
- **四足步态**，即模拟动物运动中中枢模式发生器（CPG）的节律输出。

## 核心概念

- **Wilson-Cowan 模型：** 一个基础的双节点模型，解释神经网络中兴奋与抑制的相互作用，其稳定状态和极限环等行为可通过 Hopf 分岔分析。
- **广义 Wilson 网络：** 扩展到多节点结构，用于解释更复杂的现象，包括双眼竞争中的多稳态知觉。

## Wilson-Cowan 模型方程

$$ 
\frac{dx(t)}{dt} = -ax(t) + G(wx(t) - by(t) + I(t)) \\
\frac{dy(t)}{dt} = -dy(t) + G(cx(t) - ey(t) + J(t)) 
$$

$$ 
G(z) = \frac{z}{\sqrt{z^2 + 1}}
$$

## Hopf 分岔条件

$$
\text{Jacobian} = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\ \frac{\partial g}{\partial x} & \frac{\partial g}{\partial y} \end{bmatrix} \\
\text{Hopf bifurcation occurs when:} \quad T = 0,\ D > 0
$$

<div class="figure">
    <img src="/images/rivalry_network/wilson_network.png" alt="Wilson 网络示例">
    <p class="caption">图：含兴奋性和抑制性节点的 Wilson 网络模型。</p>
</div>

## 应用一：双眼竞争
- 解释两只眼睛分别看到不同图像时出现的知觉交替。
- 从**单位置**（基础竞争）模型扩展到**四位置**模型。
- 引入对称操作（如 Z2、Z4 群），预测 **“猴子-文字”** 和 **“24 点”** 等实验中的知觉模式。

<div class="figure">
    <img src="/images/rivalry_network/binocular.png" alt="双眼竞争实验">
    <p class="caption">图：经典双眼竞争实验装置。</p>
</div>

## 应用二：四足步态
- 用一个 **8 细胞竞争网络**模拟四足运动中的节律模式（行走、小跑、溜蹄等）。
- 借助基于对称性的分析，建模耦合强度和分岔如何影响步态转换。

<div class="figure">
    <img src="/images/rivalry_network/monkey_text1.png" alt="猴子-文字实验">
    <p class="caption">图：展示多稳态知觉的“猴子-文字”实验。</p>
</div>

## 实验验证
- 分析得到一项实验（Golubitsky，2019）的支持，该实验用定制刺激在**四位置双眼竞争**中检验知觉交替。
- 结果证实了扩展 Wilson-Cowan 模型的部分预测，但也揭示了差异，尤其是在图像间距的影响方面。

## 结论
本研究表明，竞争网络和对称性分析能有效解释周期性的生物现象，同时也指出了局限，例如理论预测与实验结果之间的差距。未来研究应侧重实证验证，并扩展模型以解释更复杂的视错觉。

<div class="figure">
    <img src="/images/rivalry_network/3.4.2.png" alt="四足步态对称性模型">
    <p class="caption">图：竞争网络预测的四足步态模式中的对称性分析。</p>
</div>


## 原始报告（英文）
<div class="pdf-embed">
  <iframe 
      src="/Rivalry_Network.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>当前视图无法预览 PDF，请下载查看：</p>
    <p><a href="/Rivalry_Network.pdf" target="_blank" download>📥 下载报告</a></p>
  </div>
</div>

[📥 下载报告](/Rivalry_Network.pdf){target="_blank" download}
