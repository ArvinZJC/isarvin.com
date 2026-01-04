---
title: Uses
date: 2025-02-01
pager: false
editable: true
hide_date: true
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

Inspired by many pages listed on [uses.tech](https://uses.tech), I decided to build my own `/uses` page. I don't expect to include every specific in this page, yet it's sufficient for a spotlight on things I touch on a regular basis. Though, I don't reckon it captures much attention. It was fun anyway. 😼

{{< toc mobile_only=true is_open=true >}}

## 💎 Devices & Envs

### Linux Distros

- An ECS instance with `e.xlarge.2` running openEuler 24.03 LTS SP3 on [eSurfing Cloud](https://www.ctyun.cn). It's still a VM virtualised using KVM, QEMU, libvirt, etc.
- An AArch64 VM running Fedora Workstation 43 on [Parallels Desktop](https://www.parallels.com).
- A LoongArch64 VM running Kylin Server V10 SP3 on [UTM](https://mac.getutm.app).
- A cloud PC for work running Ubuntu Desktop 22.04 on [CTyun Laptop](https://www.ctyun.cn/products/ydn).
- Several Docker containers for work running [CTyunOS V2.0 2.0.1](https://ctyunos.ctyun.cn/#/product/mirrorWarehouseList) on [my MBP](#macos-tahoe). A base image is made public on [Docker Hub](https://hub.docker.com/repository/docker/arvinzjc/base-dev-env/general). You may find it large in size due to not much optimisation applied.

### OriginOS 6

A vivo iQOO 15 with 12GB RAM and 256GB storage. The OS is built upon Android 16. I use this phone as a spare in place of a HUAWEI Pura 70 running HarmonyOS 6, where Android apps cannot run due to no AOSP core unless a HarmonyOS native app leveraging container-based features[^1] is installed.

### Windows 11 25H2

An AArch64 VM on [Parallels Desktop](https://www.parallels.com).

### Windows Server 2022

A cloud PC for work on [CTyun Laptop](https://www.ctyun.cn/products/ydn).

### iOS 26

An iPhone 15 Pro with 256GB storage.

### iPadOS 26

An 11-inch iPad Pro with an Apple M4 chip, 512GB storage, an Apple Pencil Pro with no engraving, and a Magic Keyboard.

There's a self-deprecating joke.

> 买前生产力，买后爱奇艺。

It means: Buy productivity before purchase, but end up watching iQIYI afterward. 🤷‍♂️

### macOS Tahoe

A 16-inch MacBook Pro with an Apple M2 Max chip, 64GB memory, and 1TB SSD storage. It cost a log of money. But who cares? <mark>As long as I love it, it's worth it.</mark> 🤓

### watchOS 26

An Apple Watch Series 8 (GPS, 45mm).

## 👨‍💻 Dev

- [Visual Studio Code](https://code.visualstudio.com) has been my primary editor for many years.
  
  - I know VS Code is built on top of [Electron](https://www.electronjs.org). I used this framework to develop a cross-platform desktop app once. Tbh, it was not bad, but I indeed failed to sort out a simple way to make it "lightweight" in limited time. Every framework can be arguable, right?
  - I explored [Sublime Text](https://www.sublimetext.com) and [Zed](https://zed.dev). They were gorgeous. Perhaps I may switch to another editor one day? 🤔
- I use the following IDEs for their advanced/convenient features, or sometimes as a part of collaborative work env settings on relatively large codebases.

  - Go: [GoLand](https://www.jetbrains.com/go).
  - Python/PyPy: [PyCharm](https://www.jetbrains.com/pycharm).
  - WinUI 3 desktop app (C# .NET): [Visual Studio](https://visualstudio.microsoft.com) extended with [dotUltimate](https://www.jetbrains.com/dotnet)[^2].

- I get used to using [GitHub Copilot](https://github.com/copilot) for code completion and AI-assisted programming.
- To format code on save, [Prettier](https://prettier.io) is my choice for most cases. I would mention [Black](https://github.com/psf/black) when it comes to a Python project.
- I prefer [WindTerm](https://github.com/kingToolbox/WindTerm) and [Xterminal](https://www.xterminal.cn) as my terminals for all of my local envs. [Xshell](https://www.netsarang.com/en/xshell) is installed on Windows as a requirement to access work envs.
- [Apifox](https://apifox.com) is an API platform I use for debugging and some of QA testing on DEV, SIT, and UAT. Its official site promotes the platform as `Apifox = Postman + Swagger + Mock + JMeter`. Well, I would leave no comment. It's generally good for teamwork.
- Any other stuff? So much, but this might be worthy of attention. **Due to limited free time I would spend currently on my repos**, my personal blog and portfolio could be impossible without [Cloudflare](https://www.cloudflare.com), [Hugo](https://github.com/gohugoio/hugo), [HugoBlox Kit](https://github.com/HugoBlox/kit), [Vercel](https://vercel.com), as well as [giscus](https://github.com/giscus/giscus). ❤️

  > [!TIP]
  >
  > I used to build this site on my own with [Tailwind CSS](https://tailwindcss.com), [Vite](https://vite.dev), and [Vue.js](https://vuejs.org). Unfortunately, I abandoned this way and archived [the related repo](https://github.com/ArvinZJC/isarvin).

## 🚀 Productivity

- [GhatGPT](https://chatgpt.com) and [Doubao](https://www.doubao.com/chat). In the age of AI agents, life is being reshaped. I also tried [DeepSeek](https://chat.deepseek.com), [Gemini](https://gemini.google.com/app), [Grok](https://grok.com), [Qwen](https://www.qianwen.com), etc. They were surprising.
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
