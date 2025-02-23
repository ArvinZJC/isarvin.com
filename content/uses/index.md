---
title: Uses
date: 2025-02-01
pager: false
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
  caption: "Shot at home on 4 Feb, 2025."
  focal_point: "Smart"
  preview_only: false
  alt_text: "My workspace at home."
  # filename: my-image.jpg  # Uncomment to load an image from `assets/media/` instead.
---

Inspired by many pages listed on [uses.tech](https://uses.tech), I decided to build my own `/uses` page. I don't expect to include every specific in this page, yet it's sufficient for a spotlight on things I touch on a regular basis. Though, I don't reckon it captures much attention. It was fun anyway. 😼

{{< toc mobile_only=true is_open=true >}}

## 💎 Devices & Envs

### HarmonyOS NEXT 5

A HUAWEI Pura 70 with 12GB RAM and 256GB storage.

Due to no AOSP core, Android apps cannot run on a HarmonyOS NEXT device unless a HarmonyOS native app leveraging container-based features[^1] is installed. I'm not for such native app because it can lead to compatibility issues, and I consider it a poison for ecosystem dev. Anyway, we'll see. 🕵

### Linux Distros

- 2 ECS instances on [China Telecom Cloud Computing](https://www.ctyun.cn). One with the flavor `c7.2xlarge.4` runs Ubuntu Server 22.04, while the other with `s3.2xlarge.2` runs openEuler 24.09. They're still VMs virtualised using KVM, QEMU, libvirt, etc.
- An AArch64 VM running Fedora Workstation 41 on [Parallels Desktop](https://www.parallels.com).
- A LoongArch64 VM running Kylin Server V10 SP3 on [UTM](https://mac.getutm.app).
- A cloud PC for work running Ubuntu Desktop 22.04 on [CTyun Laptop](https://www.ctyun.cn/products/ydn).
- Several Docker containers for work running CTyunOS 2.0.1 on [my MBP](#macos-sequoia). A base image is made public on [Docker Hub](https://hub.docker.com/repository/docker/arvinzjc/base-dev-env/general). You may find it large in size due to not much optimisation applied.

### Windows 11

- A Lenovo ThinkPad laptop "given"[^2] to me by the company I serve. It's not my type, so I rarely power it up. 😴
- An AArch64 VM on [Parallels Desktop](https://www.parallels.com).

### Windows Server 2022

2 cloud PCs for work on [CTyun Laptop](https://www.ctyun.cn/products/ydn).

### iOS 18

An iPhone 15 Pro with 256GB storage.

### iPadOS 18

An 11-inch iPad Pro with an Apple M4 chip, 512GB storage, an Apple Pencil Pro with no engraving, and a Magic Keyboard.

There's a self-deprecating joke.

> 买前生产力，买后爱奇艺。

It means: Buy productivity before purchase, but end up watching iQIYI afterward. 🤷‍♂️

### macOS Sequoia

A 16-inch MacBook Pro with an Apple M2 Max chip, 64GB memory, and 1TB SSD storage. It cost a log of money. But who cares? <mark>As long as I love it, it's worth it.</mark> 🤓

### watchOS 11

An Apple Watch Series 8 (GPS, 45mm).

## 👨‍💻 Dev

- [Visual Studio Code](https://code.visualstudio.com) has been my primary editor for many years.
  - I know VS Code is built on top of [Electron](https://www.electronjs.org). I used this framework to develop a cross-platform desktop app once. Tbh, it was not bad, but I indeed failed to sort out a simple way to make it "lightweight". Every framework can be arguable, right?
  - I explored [Sublime Text](https://www.sublimetext.com) and [Zed](https://zed.dev). They were gorgeous. Perhaps I may switch to another editor one day? 🤔
- I use the following IDEs for their advanced/convenient features, or sometimes as a part of collaborative work env settings on relatively large codebases.

  - Go: [GoLand](https://www.jetbrains.com/go).
  - Python/PyPy: [PyCharm](https://www.jetbrains.com/pycharm).
  - WinUI 3 desktop app (C# .NET): [Visual Studio](https://visualstudio.microsoft.com) extended with [dotUltimate](https://www.jetbrains.com/dotnet)[^3].

- To format code on save, [Prettier](https://prettier.io) is my choice for most cases. I would mention [Black](https://github.com/psf/black) when it comes to a Python project.
- I prefer [WindTerm](https://github.com/kingToolbox/WindTerm) and [Xterminal](https://www.xterminal.cn) as my terminals for all of my local envs. [Xshell](https://www.netsarang.com/en/xshell) is installed on Windows as a requirement to access work envs.
- [Apifox](https://apifox.com) is an API platform I use for debugging and some of QA testing on DEV, SIT, and UAT. Its official site promotes the platform as `Apifox = Postman + Swagger + Mock + JMeter`. Well, I would leave no comment. It's generally good for teamwork.
- Any other stuff? So much, but this might be worthy of attention. **Due to limited free time I would spend currently on my repos**, my personal blog and portfolio could be impossible without [Cloudflare](https://www.cloudflare.com), [Hugo](https://github.com/gohugoio/hugo), [Hugo Blox Builder](https://github.com/HugoBlox/hugo-blox-builder), [Vercel](https://vercel.com), as well as [giscus](https://github.com/giscus/giscus). ❤️

{{% callout "hero/face-frown" %}}

I used to build this site on my own with [Tailwind CSS](https://tailwindcss.com), [Vite](https://vite.dev), and [Vue.js](https://vuejs.org). Unfortunately, I abandoned this way and archived [the related repo](https://github.com/ArvinZJC/isarvin).

{{% /callout %}}

## 🚀 Productivity

- [Microsoft Edge](https://www.microsoft.com/edge) and [Safari](https://www.apple.com/safari).
- [Notion](https://www.notion.com) for note-taking and task management (more like a replacement for to-do list apps? 🤪).
- [Tencent Docs](https://docs.qq.com). I would highlight its Smart Canvas and Smart Sheet despite the fact that it's usually an alternative for me to share online docs with my colleagues.
- [Typora](https://typora.io).
- [WPS](https://www.wps.com).
- [draw.io](https://www.drawio.com).

## 🥑 Other Gear

- Chargers and a power bank: [Anker](https://www.anker.com).
- Keyboards: [Varmilo](https://varmilo.com).
- Mice: [Logitech](https://www.logitech.com).
- I chose [TGIF T0](https://www.tgif-official.com) for my ergonomic gaming chair.
- I listen to Bose QCU sometimes and AirPods Pro 2 when on the go.
- I've got an XDS mountain bike. 🚴‍♂️

[^1]: E.g., [卓易通](https://www.droitong.com).
[^2]: It should be more accurate to use the word "led".
[^3]: ReSharper C++ and Rider are excluded.
