#!/usr/bin/env python3
"""
从 public/favicon.ico 生成 PWA 图标：
- icon-192.png / icon-512.png：原样缩放
- icon-maskable.png：安全区内缩（maskable 需留 10% 边距），底色填充
"""
from PIL import Image

SRC = "public/favicon.ico"
GREEN = (47, 174, 95)

base = Image.open(SRC).convert("RGBA")

# 普通图标
base.resize((192, 192), Image.LANCZOS).save("public/icon-192.png", "PNG", optimize=True)
base.resize((512, 512), Image.LANCZOS).save("public/icon-512.png", "PNG", optimize=True)

# maskable：内容缩到 80%（四周各留 10% 安全区），铺主题色底
S = 512
canvas = Image.new("RGBA", (S, S), GREEN + (255,))
inner = base.resize((int(S * 0.8), int(S * 0.8)), Image.LANCZOS)
canvas.alpha_composite(inner, ((S - inner.width) // 2, (S - inner.height) // 2))
canvas.save("public/icon-maskable.png", "PNG", optimize=True)

print("已生成 icon-192.png / icon-512.png / icon-maskable.png")