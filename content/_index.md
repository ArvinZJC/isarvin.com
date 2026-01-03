---
title: "Home"
date: 2025-01-29
type: landing

design:
  background:
    image:
      # Add your image background to `assets/media/`.
      filename: bg-hue.svg

sections:
  - block: resume-biography
    content:
      text: |
        Arvin Zhao (赵吉忱) claims to be a top expert in cloud computing, but in reality, he is just an introverted geek with great passion.
        
        Alumni [@UofG](https://www.gla.ac.uk)
      # Author slug (data/authors/<slug>.yaml)
      username: me
    design:
      spacing:
        padding: [0, 0, 0, 0]
      biography:
        style: "text-align: justify; font-size: 0.8em;"
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: cta-button-list
    content:
      # Need a custom icon?
      # Add an SVG image to the `assets/media/icons/` folder and reference it in the `icon` field below.
      buttons:
        - text: Blog
          icon: custom/blog
          url: /blog
        - text: Uses
          icon: hero/cursor-arrow-ripple
          url: /uses
        - text: Miscellaneous
          icon: hero/ellipsis-horizontal-circle
          url: /misc
---
