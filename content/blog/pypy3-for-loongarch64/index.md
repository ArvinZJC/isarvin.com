---
title: Building PyPy 3 from Source on a LoongArch64 Platform
summary: Unofficial LoongArch64 support for PyPy 3 without JIT.
date: 2025-02-23
authors:
  - me
categories:
  - Year 2025
  - Practice
  - Tutorial
tags:
  - PyPy 3
  - Compilation
  - LoongArch64
  - PyPy

# Cover image.
# To use, place an image named `featured.jpg/png` in your page's folder.
# Otherwise, specify the `filename` option to load an image from your `assets/media/` folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
# Set `preview_only` to `true` to just use the image for thumbnails.
image:
  placement: 1
  caption: Reproduced with Loongson and PyPy logos.
  focal_point: Center
  preview_only: true
  alt_text: Loongson and PyPy logos.
  # filename: my-image.jpg  # Uncomment to load an image from `assets/media/` instead.
---

[PyPy's official documentation](https://doc.pypy.org/en/latest/build.html) provides general guidance on building from source. Since PyPy does not officially support Linux LoongArch64, I would like to share my own process for building a binary for this relatively new architecture.

> [!NOTE]
>
> 1. The following is demonstrated as the root user in a LoongArch64 VM running Kylin Server V10 SP3. Adjustments may be required to match your environment.
> 2. PyPy 3.11 v7.3.18 is used. Other PyPy 3 versions should follow a similar process.

In particular, I should stress that this OS version leverages old-world[^1] technologies.

{{< toc mobile_only=true is_open=true >}}

{{% steps %}}

### Prerequisites: Python 2.7 and at least 6 GB memory for translation

As the official documentation states, the translation process is indeed RAM-hungry. So please take it seriously.

The documentation also mentions that CPython/PyPy 2.7 is required. Building PyPy 2.7 for LoongArch64 is probably not worth the effort here, so I'll just install Python 2.7 in my VM.

```bash
dnf install -y python2
# command -v python2
```

### Get the source

```bash
wget https://downloads.python.org/pypy/pypy3.11-v7.3.18-src.tar.bz2
tar -xvf pypy3.11-v7.3.18-src.tar.bz2
# rm -f pypy3.11-v7.3.18-src.tar.bz2

# Apply patches here.
```

> [!IMPORTANT]
>
> Patches must be applied to support LoongArch64. See [one of my GitHub repositories](https://github.com/ArvinZJC/pypy/tree/dev) for an example.

### Install build-time dependencies

```bash
dnf install -y bzip2-devel expat-devel gc-devel gcc gdbm-devel libffi-devel make ncurses-devel openssl-devel pkgconfig python2-pip sqlite-devel tk-devel xz-devel zlib-devel
```

CFFI is required. I suggest using a Python 2.7 virtual environment.

```bash
# python2 -m pip -V
python2 -m pip install virtualenv
python2 -m virtualenv venv_2
source venv_2/bin/activate
# command -v python
# python -m pip -V
python -m pip install cffi
```

### Translate without JIT

```bash
cd pypy3.11-v7.3.18-src/pypy/goal
python ../../rpython/bin/rpython --opt=2
deactivate
```

It can be time-consuming. Please be patient. A successful build should end with output like this.

![FYI, the end of a successful build.](end-of-build.png)

After a successful build, you can also play with the compiled binary.

```bash
./pypy3.11-c -V
./pypy3.11-c -c 'print("Hello World!")'
./pypy3.11-c -m pip -V
```

### Packaging

I will use the compiled binary directly for packaging.

```bash
# ./pypy3.11-c ../../pypy/tool/release/package.py --help
./pypy3.11-c ../../pypy/tool/release/package.py --archive-name=pypy3.11-v7.3.18-loongarch64
```

> This creates a clean and prepared hierarchy, as well as a `.tar.bz2` with the same content; the directory to find these will be printed out.

{{% /steps %}}

[^1]: See [a post in LA UOSC](https://bbs.loongarch.org/d/89) for a brief intro on the so-called old/new world.
