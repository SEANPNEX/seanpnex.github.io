---
pageClass: project-case-study
title: TTS 聊天机器人
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
  eyebrow="机器学习 · 对话系统"
  title="多语言文本转语音聊天机器人"
  summary="一个跨平台聊天机器人，以及对神经语音合成方法的比较研究，目标是让机器对话听起来更自然。"
  year="2023"
  role="研究、模型评估与开发"
  methods="VITS · Tacotron 2 · NoneBot · MOSNet · MCD"
  image="/images/chatbot/mel_s.png"
  image-alt="语音合成系统生成的梅尔频谱图"
  report="/chatbot_report.pdf"
/>

## 问题

本项目开发了一个**集成文本转语音（TTS）功能的跨平台聊天机器人**，由郭舜（Shun Guo）作为昆山杜克大学 Signature Work 项目的一部分设计并实现。该机器人可在 QQ、微信等多个社交平台上运行，旨在用自然的语音回复改善人机交互。

## 项目亮点

- **目标：** 把基于深度学习的现代 TTS 算法集成进聊天机器人，部署到多个社交平台，通过自然的语音交互改善用户体验。
  
- **研究的 TTS 系统：** 项目重点比较了两种主流 TTS 模型：
  - **Tacotron 2**（Google）
  - **VITS**（结合对抗学习的条件变分自编码器）
  
- **评估指标：** 
  - 使用 **MOSNet**——一种基于深度学习的客观指标——估计平均意见得分（MOS）。
  - 使用**梅尔倒谱距离（MCD）**衡量合成语音与真人语音样本的相似度。
  
  <div class="figure">
    <img src="/images/chatbot/statistical_synthesis.png" alt="表 2.1：统计参数合成概览">
    <p class="caption">表 2.1：文本转语音（TTS）任务中的算法</p>
  </div>

- **结果：**
  - **VITS** 在 MOSNet 得分和 MCD 评估上均优于 **Tacotron 2**。
  - VITS 的 MOSNet 得分为 **2.63±0.08**，Tacotron 2 为 **2.56±0.035**。
  - MCD 显示 VITS 生成的语音与真人声音更相似。
  
  <div class="figure">
    <img src="/images/chatbot/mel_s.png" alt="图 4.1：样本数据的梅尔频谱图">
    <p class="caption">图 4.1：样本数据的梅尔频谱图</p>
  </div>

  <div class="figure">
    <img src="/images/chatbot/mel_n.png" alt="图 4.2：推理数据的梅尔频谱图">
    <p class="caption">图 4.2：推理数据的梅尔频谱图</p>
  </div>

## 技术栈

- **框架：** NoneBot 2（开源跨平台聊天机器人框架）
- **训练数据：** 来自公开语料库（如 VCTK）的多语言数据集（英语、中文、日语）。
- **部署：** 通过昆山杜克大学虚拟计算管理服务部署在 Ubuntu 20.04 服务器上。
- **NLP 集成：** 机器人的回复由预设记录、NLP API（如 ChatGPT）和聊天日志共同生成。

<div class="figure">
  <img src="/images/chatbot/Nonebot.jpg" alt="图 2.1：NoneBot 聊天机器人框架架构">
  <p class="caption">图 2.1：NoneBot 聊天机器人框架架构</p>
</div>

## 主要功能

- 多语言语音回复（英语、中文、日语）
- 接入主流社交平台（如 QQ）
- 通过自然的合成语音增强用户互动
- 模块化架构，便于今后扩展和增加语言

## 表格与公式

### 表 2.1：文本转语音（TTS）任务中的算法

| 名称 | 描述 | 出处 |
|------------------------------|--------------------------------------------------------|--------------------------|
| Unit Selection | 从现有语料库中选取语音单元 | Hunt 等，1996 [8] |
| Statistical Parametric Synthesis | 用隐马尔可夫模型预测波形 | Zen 等，2009 [31] |
| Wavenet | 自回归 PixelRNN | Oord 等，2016 [15] |
| Fast Wavenet | 降低 Wavenet 的时间复杂度 | Paine 等，2016 [16] |
| Deep Voice | 多层 GRU 编码器-解码器 + CNN 与 RNN 混合 | 百度，2017 [2] |
| Deep Voice 2 | 与 Deep Voice 相同，但 WaveNet 层更多 | 百度，2017 [5] |
| Deep Voice 3 | 全卷积编码器-解码器 | Google，2017 [17] |
| Tacotron | CBHG 与 RNN 编码器-解码器 | Google，2017 [28] |
| Tacotron 2 | LSTM 与 RNN 编码器-解码器 | Google，2018 [20] |
| VITS | cVAE + GAN | Kim 等，2021 [9] |

### 公式 3.1：STFT

$$
STFT\{x[n]\}(m, \omega) = \sum_{n=-\infty}^{\infty} x[n] w[n-m] e^{-j\omega n}
$$

### 公式 4.2：MCD

$$
MCD(m, n) = \sqrt{ \left(\frac{m-n}{\sqrt{\frac{1}{2}\text{len}(m)}}\right)^2 - \left(\frac{m-n}{\sqrt{\frac{1}{2}\text{len}(n)}}\right)^2 }
$$

## 结论

本项目表明，深度学习 TTS 系统通过加入自然语音，可以显著改善聊天机器人与人的交互。虽然 **VITS** 被认为是更优的模型，但也发现了响应生成较慢、评估精度有限等不足，为后续迭代指明了改进方向。

<div class="figure">
  <img src="/images/chatbot/gan_diagram.jpg" alt="图 3.3：GAN 结构">
  <p class="caption">图 3.3：GAN 结构</p>
</div>

<div class="figure">
  <img src="/images/chatbot/GAN.png" alt="图 3.3：GAN 结构">
  <p class="caption">图 3.3：GAN 结构</p>
</div>

<div class="figure">
  <img src="/images/chatbot/vits_loss.jpg" alt="公式 3.1：STFT">
  <p class="caption">公式 3.1：STFT</p>
</div>


## 原始报告（英文）
<div class="pdf-embed">
  <iframe 
      src="/chatbot_report.pdf#zoom=fitH" 
      type="application/pdf" 
      width="100%" 
      height="1200" 
      style="border: none; overflow: hidden;"
  ></iframe>
  <div class="pdf-embed-fallback">
    <p>当前视图无法预览 PDF，请下载查看：</p>
    <p><a href="/chatbot_report.pdf" target="_blank" download>📥 下载报告</a></p>
  </div>
</div>

[📥 下载报告](/chatbot_report.pdf){target="_blank" download}
