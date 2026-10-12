---
pageClass: project-case-study
title: Wilson–Cowan 方程
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
  eyebrow="计算神经科学 · 动力系统"
  title="神经元群体何时开始振荡"
  summary="对修正版 Wilson–Cowan 模型中极限环产生条件的解析与计算研究。"
  year="2022"
  role="数学分析与仿真"
  methods="微分方程 · 分岔分析 · Python"
  image="/images/wilson_cowan/Nullclines.png"
  image-alt="Wilson-Cowan 动力系统的零斜线"
  report="/Wilson_Cowan_Equation.pdf"
/>

## 问题

本项目用**修正版 Wilson-Cowan 模型**研究神经元群体的振荡行为，探讨极限环（代表振荡的神经活动）在什么条件下出现，兼顾理论分析与仿真结果。

## 目标

- 理解兴奋性与抑制性神经元群体如何相互作用而产生振荡。
- 找出导致 **Hopf 分岔**和极限环的条件。
- 用**解析方法**和**计算仿真**分析特殊情形与一般情形。

## 核心概念

- **Wilson-Cowan 模型：** 用非线性微分方程和 S 形响应函数描述兴奋性（E）与抑制性（I）神经元群体之间的相互作用。
- **极限环：** 振荡行为在相平面上表现为闭合轨道。
- **Hopf 分岔：** 稳定平衡点失稳并出现极限环的临界条件。

## Wilson-Cowan 模型方程

$$ 
\frac{dx(t)}{dt} = -ax(t) + (1 - r_x x(t)) S(wx(t) - by(t) + I(t)) 
$$

$$ 
\frac{dy(t)}{dt} = -dy(t) + (1 - r_y y(t)) S(cx(t) - ey(t) + J(t)) 
$$

其中：
- \( x(t) \) 和 \( y(t) \)：时刻 \( t \) 放电的兴奋性和抑制性细胞所占比例
- \( S(\theta') = \frac{\theta'}{\sqrt{\theta'^2 + 1}} \)：S 形响应函数

## 案例：无外部刺激（I = 0，J = 0）
- 改变自兴奋系数 **w**，研究它的影响。
- 结果：
  - 当 **w > d** 且 **γ > 1**（γ 为参数比）时出现振荡行为（极限环）。
  - 在该范围内，振荡周期随 **w** 增大而变长。
  - 已用 **Mathematica** 和 **Python** 仿真验证。

## 零斜线方程

$$ 
y_f(x) = \frac{1}{b} \cdot \frac{wx + I - ax}{\sqrt{1 - (ax)^2}}
$$

$$ 
y_g(x) = \frac{1}{d} \cdot \frac{cx + J}{\sqrt{1 + (cx + J)^2}}
$$

<div class="figure">
    <img src="/images/wilson_cowan/Nullclines.png" alt="系统的零斜线">
    <p class="caption">图：a=0.1、b=1、c=1、d=0.1、w=1、I=6、J=4 时的零斜线。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/StabilitySketch00.png" alt="T-D 平面">
    <p class="caption">图：T-D 平面及稳定区域。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/GeneralCase01_0.png" alt="仿真情形 1">
    <p class="caption">图：w 分别为 0.1、2.7 和 1 时的仿真结果。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/RminRmax.png" alt="环形区域">
    <p class="caption">图：示例参数下的环形区域与极限环。</p>
</div>

## 其他发现
- 当 **J = 0** 而 **I** 变化时：
  - 极限环只在特定的 **I 区间**内存在：**I ∈ [-2.98, 2.98]**。
- 当 **I = 0** 而 **J** 变化时：
  - 极限环存在于 **J ∈ [-7.22, 7.22]**。
- **自兴奋（w > 0）**是振荡行为的必要条件；**w = 0** 时不出现极限环。

## 雅可比矩阵与分岔条件

雅可比矩阵为：

$$
DF(x) =
\begin{bmatrix}
\frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\\\
\frac{\partial g}{\partial x} & \frac{\partial g}{\partial y}
\end{bmatrix}
$$

Hopf 分岔的条件：
- 迹 \( T = 0 \)
- 行列式 \( \Delta > 0 \)

<div class="figure">
    <img src="/images/wilson_cowan/PeriodExplanation.png" alt="周期与 w 的关系">
    <p class="caption">图：周期与 w 的关系，引自 Monteiro 等（2002）。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/PythonSimulation00.png" alt="相图示例">
    <p class="caption">图：w=0.6 时的系统动力学，可见极限环的形成。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/PythonSimulation01.png" alt="E 与 I 的时间序列">
    <p class="caption">图：兴奋性与抑制性细胞的振荡行为。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/I-exp.png" alt="周期与 I 的关系">
    <p class="caption">图：周期与 I 的关系，引自 Monteiro 等（2002）。</p>
</div>

<div class="figure">
    <img src="/images/wilson_cowan/J-exp.png" alt="周期与 J 的关系">
    <p class="caption">图：周期与 J 的关系，引自 Monteiro 等（2002）。</p>
</div>

## 结论
修正后的 Wilson-Cowan 模型表明，皮层柱可以表现出内在的振荡行为。振荡及其周期对自兴奋和外部刺激十分敏感。这为理解神经元集群如何同步以处理感觉输入提供了一种机制上的解释。


## 原始报告（英文）
<div class="pdf-embed">
  <iframe 
      src="/Wilson_Cowan_Equation.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>当前视图无法预览 PDF，请下载查看：</p>
    <p><a href="/Wilson_Cowan_Equation.pdf" target="_blank" download>📥 下载报告</a></p>
  </div>
</div>

[📥 下载报告](/Wilson_Cowan_Equation.pdf){target="_blank" download}
