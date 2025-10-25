---
layout: page
---

<script setup>
    import {
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers
    } from 'vitepress/theme'

    const members = [
    {        
        avatar: "https://github.com/SEANPNEX.png",
        name: "Sean Guo",
        title: "Developer | Data Analyst | Business Analyst",
        links: [
            {icon: "github", link: "https://github.com/SEANPNEX"},
            {icon: "linkedin", link: "https://www.linkedin.com/in/shun-guo-61393a196/"}
        ]
        }
    ]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
        My Profile
    </template>
    <template #lead>
        Second Year Student at Duke Fintech
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />

<div class="scroll-link-container">
    <div class="scroll-link-box">
        <a href="/projects/NCCP" class="scroll-link">Projects</a>
    </div>
    <span class="separator">|</span>
    <div class="scroll-link-box">
        <a href="/resume/resume" class="scroll-link">Resume</a>
    </div>
    <span class="separator">|</span>
    <div class="scroll-link-box">
        <a href="/blogs/0-start" class="scroll-link">Blog</a>
    </div>


</div>

</VPTeamPage>

<style>
  .scroll-link-container  {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 1em;
    margin-top: 1.5em;
    margin-left: auto;
    margin-right: auto;
    width: 23em;
    max-width: 600px;
    background: var(--vp-c-bg-soft);
  }

  .scroll-link-box {
    display: flex;
    margin-left: 1em;
    margin-right: 1em;
    align-items: center;
    justify-content: center;
  }

  .scroll-link {
    display: block;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: var(--vp-c-text-1);
    text-align: center;
    transition: transform 0.3s, opacity 0.3s, background 0.3s;
    border-radius: 5px;
  }

  .scroll-link:hover {
    transform: scale(1.2);
  }

  .scroll-link:not(:hover) {
    opacity: 0.6;
  }

  div::-webkit-scrollbar {
    display: none;
  }

  div {
    scrollbar-width: none;
  }
</style>