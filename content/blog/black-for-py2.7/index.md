---
title: A Starter for Python 2 Code Formatting with Black
summary: How to install Black for formatting Python 2 code.
date: 2025-02-09
authors:
  - me
categories:
  - Year 2025
  - Tutorial
tags:
  - Code Formatter
  - Python 2
  - Black
  - Python

# Cover image.
# To use, place an image named `featured.jpg/png` in your page's folder.
# Otherwise, specify the `filename` option to load an image from your `assets/media/` folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
# Set `preview_only` to `true` to just use the image for thumbnails.
image:
  placement: 1
  caption: Reproduced with a Black logo.
  focal_point: Center
  preview_only: true
  alt_text: Black logo.
  # filename: my-image.jpg  # Uncomment to load an image from `assets/media/` instead.
---

> [!CAUTION]
>
> Python 2.7 is the last major version in the 2.x series and [reached EOL on 1 January 2020](https://www.python.org/doc/sunset-python-2). Please upgrade your Python if possible.

Some of the projects I work on still use Python 2.7. Installing Black for that case can take a little fiddling, so I'd like to show the steps that worked for me.

> [!NOTE]
>
> 1. [Running Black requires Python 3](https://github.com/psf/black/blob/21.12b0/docs/faq.md#does-black-support-python-2), even for formatting Python 2 code.
> 2. The following assumes you have admin/root privileges and use _pip_ as your package installer. Adjustments may be required to match your environment.

{{< toc mobile_only=true is_open=true >}}

{{% steps %}}

### Prerequisites: Python 3.6+ with a package installer

I am not going to cover how to install Python 3 or set up a package installer such as _pip_. You may need to search the web if your environment does not meet the prerequisites.

```bash
command -v python3
python3 -m pip -V
```

### Install a specific Black version

```bash
python3 -m pip install 'black[python2]==21.12b0' click==8.0.4
```

V21.12b0 is the last Black version with support for formatting Python 2 code. As defined in [this Black version's `setup.py`](https://github.com/psf/black/blob/f1d4e742c91dd5179d742b0db9293c4472b765f8/setup.py#L100), `click >= 7.1.2` is a must.

`click <= 8.0.4` is also required. Otherwise, you may encounter an error saying `ImportError: cannot import name '_unicodefun' from 'click'` when running Black.

The `python2` extra for Black installs the optional dependency _typed-ast_, which [has been archived and is no longer needed for most use cases](https://github.com/python/typed_ast/issues/179). If there is no matching pre-built binary package for your environment, building it can fail with a Clang or GCC error. My suggestion is to remove `[python2]` as shown below. It generally works fine.

```bash
python3 -m pip install black==21.12b0 click==8.0.4
```

### Verify installation

```bash
python3 -m black --version
```

{{% /steps %}}
