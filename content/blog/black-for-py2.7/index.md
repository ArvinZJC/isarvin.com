---
title: "A Starter for Python 2 Code Formatting with Black"
summary: "How to install Black to enable formatting Python 2 code?"
date: 2025-02-09
authors:
  - admin
categories:
  - "Year 2025"
  - Tutorial
tags:
  - "Code Formatter"
  - "Python 2"
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
  caption: "Downloaded from [GitHub](https://raw.githubusercontent.com/psf/black/main/docs/_static/logo2-readme.png)"
  focal_point: "Center"
  preview_only: true
  alt_text: "Black logo."
  # filename: my-image.jpg  # Uncomment to load an image from `assets/media/` instead.
---

{{% callout warning %}}

Python 2.7 is the last major version in the 2.x series and [has reached its EOL on 1st Jan, 2020](https://www.python.org/doc/sunset-python-2). Please upgrade your Python if possible.

{{% /callout %}}

Some of the projects I participate in still use Python 2.7. It can be an effort to install Black in this case without practice, so I'd like to show a series of steps as follows to save your time.

{{< toc mobile_only=true is_open=true >}}

{{% steps %}}

### Prerequisites: Python 3.6+ with a Package Installer

{{% callout note %}}

1. [Running Black requires Python 3](https://github.com/psf/black/blob/21.12b0/docs/faq.md#does-black-support-python-2), even for formatting Python 2 code.
2. The following assumes you have admin/root privileges and use _pip_ as your package installer. Adjustments may be required to match your env.

{{% /callout %}}

I'm not to provide details on how to install Python 3 and ensure a package installer (e.g., _pip_). You might search the web if your env did not meet the prerequisites.

```bash
python3 -V
python3 -m pip -V
```

### Install a Specific Black Version

```bash
python3 -m pip install 'black[python2]==21.12b0' click==8.0.4
```

V21.12b0 is the last Black version with support for formatting Python 2 code. As defined in [this Black version's `setup.py`](https://github.com/psf/black/blob/f1d4e742c91dd5179d742b0db9293c4472b765f8/setup.py#L100), `click >= 7.1.2` is a must.

`click <= 8.0.4` is also required. Otherwise, you may encounter an error saying `ImportError: cannot import name '_unicodefun' from 'click'` when running Black.

The above `python2` key of Black means to install the optional dependency _typed-ast_, which [has been archived and no longer needed for most use cases](https://github.com/python/typed_ast/issues/179). If there was no matched pre-built binary package for your env, you might sometimes find it problematic to build one, complaining about either a Clang or a GCC issue. My suggestion is to remove `[python2]` as shown below. It generally works fine.

```bash
python3 -m pip install black==21.12b0 click==8.0.4
```

### Verify Installation

```bash
python3 -m black --version
```

{{% /steps %}}
