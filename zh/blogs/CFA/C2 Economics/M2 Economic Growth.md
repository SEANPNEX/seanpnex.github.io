---
title: 经济增长
---

<style>
.blur-hover {
    filter: blur(5px);
    transition: filter 0.3s;
}
.blur-hover:hover {
    filter: none;
}
</style>

# 经济增长

## 经济增长的重要性

发达国家与发展中国家的区别：

* 储蓄与投资
* 金融市场与金融中介
* 政治稳定、法治与产权
* 教育与医疗体系
* 税收与监管
* 自由贸易与不受限制的资本流动

潜在增长对股票投资者很重要：
$$
\begin{align}
E(Re)&= \text{div}+\text{expected capital gain}\\
&=\text{div}+\text{expected repricing} + \text{EPS growth}\\
&= \text{div}+\text{expected repricing}+\text{inflation}+\text{real economic growth}+(\text{Buybacks}+\text{Relative Dynamism})\\
&=d+\Delta(P/E)+i+g+\Delta S
\end{align}
$$
潜在增长对固定收益投资者也很重要：

* 更高的增长转化为更高的利率和预期收益
* 信用质量通常更好
* 信用风险降低
* 影响政府政策与预算平衡

## 生产函数

生产函数定义为
$$
\begin{align}
Y&=Af(K,L)\\
&=AK^{\alpha}L^{1-\alpha}
\end{align}
$$
其中 $K$ 是资本要素，$L$ 是劳动要素。$A$ 是全要素生产率，通常代表技术。$Y$ 是总产出。$\alpha$ 是 GDP 中支付给资本提供者的份额。

对于人均 GDP，
$$
\begin{align}
y&=\frac{Y}{L}\\
&=AK^{\alpha}L^{-\alpha}\\
&=A(\frac{K}{L})^{\alpha}\\
&=Ak^{\alpha}
\end{align}
$$
对两边取对数即可得到增长率：
$$
\begin{align}
\ln Y &= \ln (AK^{\alpha}L^{1-\alpha})\\
\frac{d Y }{Y}&=\frac{dA}{A}+\alpha\frac{dK}{K}+(1-\alpha)\frac{dL}{L}
\end{align}
$$
人均增长率的推导过程相同：
$$
\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}
$$
为了相对资本使总产出最大，求导得到资本的边际产出（MPK）：
$$
MPK=\frac{dY}{dK}=\frac{d(AK^{\alpha}L^{1-\alpha})}{dK}= \alpha AK^{\alpha-1}L^{1-\alpha}=\alpha\frac{Y}{K}
$$
当 MPK 等于资本的租赁价格 $r$ 时达到最优：
$$
MPK = \alpha\frac{Y}{K}=r\to \alpha= rK/Y
$$

>[!Note]
>
>生产函数有两个重要特征：
>
>* 规模报酬不变
>* 边际生产率递减：增加投入所带来的额外产出会逐渐下降
>* 就人均而言，$\alpha$ 越小，边际生产率递减的效应越强。
>* 提高 $A$ 会使函数整体上移（减弱边际生产率递减的效应）

>[!Important]
>
>* 资本深化：提高 $k=\frac{K}{L}$。
>* 当 $MPK=r$ 时，资本深化不再有用。

扩展生产函数：

* 自然资源：可再生与不可再生。一个国家要达到高收入水平，并不一定需要拥有和生产自然资源。**荷兰病**：对资源出口的强劲需求推动本币升值，使经济中的其他部门失去竞争力。

* 劳动供给：

  * 人口增长（生育率、死亡率、年龄结构）
  * 劳动参与率
  * 净移民
  * 平均工作时长

* 人力资本：

  * 教育、培训或生活经验
  * 教育具有溢出效应或外部性
  * 教育通过创新促进增长（提高 $A$）。

* ICT 与非 ICT 资本：

  * 在信息、计算机和电信设备上的支出会产生网络外部性，提高生产率。
  * 非 ICT：包括非住宅建筑、运输设备和机械。
* 技术：人力资本 + ICT/非 ICT 资本
* 公共基础设施

## 增长理论

增长理论研究 $\frac{dy}{y}$，即人均 GDP 的增长速度。

### 古典增长理论

关键假设是 $L$ 会增加、$Y$ 会增加，而 $Y$ 的增加又会进一步提高 $L$：技术进步 $\to$ 劳动生产率 $\uparrow$ $\to$ 人口增长加快 $\to$ 劳动的边际报酬递减 $\to$ 人均收入回落。

因此就 $y$ 而言，长期来看技术进步带来的是更多的人口，而不是更富裕的人口。人均产出没有增长。

### 新古典增长理论

长期内 $y$ 的增长率与以下因素有关：

* 储蓄/投资率 $s$
* 技术进步速度 $\theta$
* 人口增长率 $n$

假设长期内 $\frac{Y}{K}$ 保持不变，那么 $\frac{Y/L}{K/L}$ 不变，从而 $\frac{y}{k}$ 不变。于是 $\frac{dy}{y}=\frac{dk}{k}$。

由前面的增长公式 $\frac{dy}{y}=\frac{dA}{A}+\alpha \frac{dk}{k}$。

把上面的公式结合起来：$(1-\alpha)\frac{dk}{k}=\frac{dA}{A}$，$\frac{dy}{y}=\frac{dk}{k}=\frac{\theta}{1-\alpha}$。记作 $g*=\frac{\theta}{1-\alpha}$。

由 $Y=yl$，$G*=\frac{dY}{Y}=\frac{dy}{y}+\frac{dL}{L}=\frac{\theta}{1-\alpha}+n$。

假设在封闭经济中，投资必须由国内储蓄提供资金。设 $s$ 为 $Y$ 中被储蓄的比例，则 $I=sY$。于是 $dK = sY-\delta K$，其中 $\delta$ 为折旧率。

由 $k=\frac{K}{L}$，$\frac{dk}{k}=\frac{dK}{K}-\frac{dL}{L}=\frac{sY-\delta K}{K}-n=\frac{sY}{K}-\delta-n$。结合 $\frac{dk}{k}=\frac{\theta}{1-\alpha}$，可得：
$$
\frac{Y}{K}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)\equiv\varphi
$$
这正好给出了我们最初的假设：长期内 $\frac{Y}{K}$ 为常数。

于是 $MPK = \alpha\frac{Y}{K}$ 也是常数。

进一步，$\frac{y}{k}=\frac{Y/L}{K/L}=\frac{1}{s}(\frac{\theta}{1-\alpha}+\delta+n)$。于是 $sy = (\frac{\theta}{1-\alpha}+\delta+n)k$。

由于 $sy=sAk^{\alpha}$，通过求解该方程，可以找到使 $\frac{dy}{y}=\frac{\theta}{1-\alpha}$ 保持不变的 $k$。

> [!Note]
>
> 随着 $s$ 提高，$k$ 和 $y$ 会更大，但 $\frac{\theta}{1-\alpha}$ 保持不变。

> [!Important]
>
> 新古典增长理论的一些结论：
>
> * 长期内，资本积累影响产出的水平，但不影响增长率
> * 无论初始的资本劳动比或初始生产率水平如何，一个增长中的经济都会走向稳定增长率的状态
> * 在稳态下，产出的增长率为 $G*=n+\frac{\theta}{1-\alpha}$
>
> 模型的含义：
>
> * 刚开始积累资本（资本深化）时，增长会高于稳态增长率，但随后会放缓。
> * 维持潜在人均 GDP 增长的唯一途径是技术进步或全要素生产率的提高。
>
> 储蓄的作用：
>
> * 储蓄率提高的初始影响是暂时提高经济增长。一旦经济达到稳态增长，增长率就不再取决于收入中用于储蓄或投资的比例。

### 内生增长理论

与新古典模型不同，内生增长模型假设对整个经济而言，资本的边际报酬不会递减。

* 资本积累是解释长期增长的主要因素
* 研发支出具有很大的正外部性或溢出效应

因此，经济不会达到稳定的增长率。相反，储蓄和投资可以带来在永久更高水平上自我维持的增长。

### 趋同之争

**绝对趋同**：发展中国家最终会赶上发达国家，人均产出达到相同水平。

* 新古典模型假设所有国家都能获得相同的技术，这意味着各国的人均增长率会趋同
* 新古典模型并不意味着绝对趋同。

**条件趋同**：假设储蓄率、人口增长率和生产函数相同，就会有相同水平的 $y$ 和相同的增长率 $\frac{dy}{y}$。

**俱乐部趋同**：只有作为"俱乐部"成员的富裕国家和中等收入国家，才会向最富裕国家的收入水平趋同。穷国如果进行制度变革，就可以加入俱乐部。不实施必要制度改革的国家会陷入不趋同的陷阱。

趋同可以通过以下途径发生：

* 技术进步
* 资本深化

在内生增长模型中，并没有趋同一定会发生的预测，因为发达国家更容易实现资本深化。
