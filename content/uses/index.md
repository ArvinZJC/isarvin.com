---
title: Uses
date: 2025-02-01
pager: false
editable: true
show_date: false
reading_time: false
commentable: true

# Cover image.
# To use, place an image named `featured.jpg/png` in your page's folder.
# Otherwise, specify the `filename` option to load an image from your `assets/media/` folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
# Set `preview_only` to `true` to just use the image for thumbnails.
image:
  placement: 1
  caption: "Shot at home on 8 Nov 2025."
  focal_point: "Smart"
  preview_only: false
  alt_text: "My workspace at home."
  # filename: my-image.jpg  # Uncomment to load an image from `assets/media/` instead.
---

Inspired by many pages listed on [uses.tech](https://uses.tech), I decided to build my own `/uses` page. I don't expect to include every detail here, but it should be enough to spotlight the things I touch on a regular basis. I doubt it will attract much attention, but it was fun anyway. 😼

{{< toc mobile_only=true is_open=true >}}

## 💎 Devices & Envs

### Linux Distros

- An ECS instance with `e.xlarge.2` running openEuler 24.03 LTS SP3 on [eSurfing Cloud](https://www.ctyun.cn). It's still a VM virtualised using KVM, QEMU, libvirt, etc.
- An AArch64 VM running Fedora Workstation 44 on [Parallels Desktop](https://www.parallels.com).
- A LoongArch64 VM running Kylin Server V10 SP3 on [UTM](https://mac.getutm.app).
- A cloud PC for work running Ubuntu Desktop 22.04 on [CTyun Laptop](https://www.ctyun.cn/products/ydn).
- Several Docker containers for work running [CTyunOS V2.0 2.0.1](https://ctyunos.ctyun.cn/#/product/mirrorWarehouseList) on [my MBP](#macos-tahoe). A base image is made public on [Docker Hub](https://hub.docker.com/repository/docker/arvinzjc/base-dev-env/general). It may look quite large because I have not spent much time optimising it.

### OriginOS 6

A vivo iQOO 15 with 12GB RAM and 256GB storage. The OS is built on Android 16. I use this phone as a spare in place of a HUAWEI Pura 70 running HarmonyOS 6, where Android apps cannot run because there is no AOSP core unless a HarmonyOS-native app with container-based features[^1] is installed.

### Windows 11 25H2

- An AArch64 VM on [Parallels Desktop](https://www.parallels.com).
- A cloud PC for work on [CTyun Laptop](https://www.ctyun.cn/products/ydn).

### iOS 26

An iPhone 17 Pro with 512GB storage.

### iPadOS 26

An 11-inch iPad Pro with an Apple M4 chip, 512GB storage, an Apple Pencil Pro with no engraving, and a Magic Keyboard.

There's a self-deprecating joke.

> 买前生产力，买后爱奇艺。

It means: buy it for productivity, then end up watching iQIYI afterwards. 🤷‍♂️

### macOS Tahoe

A 16-inch MacBook Pro with an Apple M2 Max chip, 64GB memory, and 1TB SSD storage. It cost a lot of money. But who cares? <mark>As long as I love it, it's worth it.</mark> 🤓

### watchOS 26

An Apple Watch Series 8 (GPS, 45mm).

## 👨‍💻 Dev

- [Visual Studio Code](https://code.visualstudio.com) has been my primary editor for many years.
  
  - I know VS Code is built on top of [Electron](https://www.electronjs.org). I used this framework to develop a cross-platform desktop app once. Tbh, it was not bad, but I never found a simple way to make it "lightweight" in the time I had. Every framework has trade-offs, right?
  - I explored [Sublime Text](https://www.sublimetext.com) and [Zed](https://zed.dev). They were gorgeous. Perhaps I may switch to another editor one day? 🤔
- I use the following IDEs for their advanced or convenient features, or sometimes because they are part of collaborative work environment settings on relatively large codebases.

  - Go: [GoLand](https://www.jetbrains.com/go).
  - Python/PyPy: [PyCharm](https://www.jetbrains.com/pycharm).
  - WinUI 3 desktop app (C# .NET): [Visual Studio](https://visualstudio.microsoft.com) extended with [dotUltimate](https://www.jetbrains.com/dotnet)[^2].

- I often use [Codex](https://chatgpt.com/codex) and [GitHub Copilot](https://github.com/copilot) for AI-assisted programming.
- To format code on save, [Prettier](https://prettier.io) is my choice for most cases. I would mention [Black](https://github.com/psf/black) when it comes to a Python project.
- I currently use [cmux](https://cmux.com) most often on macOS. I still recommend [WindTerm](https://github.com/kingToolbox/WindTerm), although I have mostly abandoned it myself. I use [Xterminal](https://www.xterminal.cn) from time to time, while [Xshell](https://www.netsarang.com/en/xshell) is still installed on Windows for accessing work environments.
- [Apifox](https://apifox.com) is an API platform I use for debugging and some QA testing on DEV, SIT, and UAT. Its official site promotes the platform as `Apifox = Postman + Swagger + Mock + JMeter`. Well, I will leave that without comment. It's generally good for teamwork.
- Any other stuff? So much, but this might be worth mentioning. **Given the limited free time I can currently spend on my repos**, my personal blog and portfolio would be almost impossible without [Cloudflare](https://www.cloudflare.com), [Hugo](https://github.com/gohugoio/hugo), [HugoBlox Kit](https://github.com/HugoBlox/kit), [Vercel](https://vercel.com), and [giscus](https://github.com/giscus/giscus). ❤️

  > [!TIP]
  >
  > I used to build this site myself with [Tailwind CSS](https://tailwindcss.com), [Vite](https://vite.dev), and [Vue.js](https://vuejs.org). Unfortunately, I abandoned that approach and archived [the related repo](https://github.com/ArvinZJC/isarvin).

## 🚀 Productivity

- [ChatGPT](https://chatgpt.com), [DeepSeek](https://chat.deepseek.com), [Doubao](https://www.doubao.com/chat), [Qwen](https://www.qianwen.com), and [Yuanbao](https://yuanbao.tencent.com/chat). In the age of AI agents, life is being reshaped. I also tried [Claude](https://claude.ai), [Gemini](https://gemini.google.com/app), [Grok](https://grok.com), [Kimi](https://www.kimi.com), etc. They were surprising.
- [Microsoft Edge](https://www.microsoft.com/edge) and [Safari](https://www.apple.com/safari).
- [Notion](https://www.notion.com) for note-taking and task management (more like a replacement for to-do list apps? 🤪).
- [Tencent Docs](https://docs.qq.com). I would highlight its Smart Canvas and Smart Sheet despite the fact that it's usually an alternative for me to share online docs with my colleagues.
- [Typora](https://typora.io).
- [WPS](https://www.wps.com).
- [draw.io](https://www.drawio.com).

## 🚦Wheels & Drives

- My go-to XDS mountain bike for trails, weekend escapes, or just clearing my head while pedalling.

  ![My XDS mountain bike.](xds-bike.jpeg)

- 2025 ARCFOX aT5 630 Divine Version: my electric ride for daily commuting and road trips.

  > 又是极狐没烦恼的一天~

  Never mind. It's just a pun. 😛

  ![My ARCFOX aT5.](arcfox-at5.jpeg)

## 🥑 Other Gear

- Chargers and power banks: [Anker](https://www.anker.com) and [CUKTECH](https://cuktech.com.cn/).
- Keyboards: [Varmilo](https://varmilo.com).
- Mice: [Logitech](https://www.logitech.com).
- I chose [TGIF T0](https://www.tgif-official.com) for my ergonomic gaming chairs.
- I listen to AirPods Pro 2 when on the go.

[^1]: E.g., [卓易通](https://www.droitong.com).
[^2]: ReSharper C++ and Rider are excluded.
