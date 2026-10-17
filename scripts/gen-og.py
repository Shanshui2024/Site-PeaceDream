#!/usr/bin/env python3
"""
生成 Open Graph 分享图 public/og-<hash>.png（1200×630）。
沿用站点配色：浅灰底 #f5f7f6 + 绿色强调 #2fae5f + 深灰文字 #1c2024。

输出文件名带内容哈希，并自动同步 src/data/site.ts 的 ogImage 字段，
使社交平台按 URL 缓存时能正确失效、不会长期显示旧图。
"""
import hashlib
import io
import pathlib
import re

from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (245, 247, 246)
FG = (28, 32, 36)
MUTED = (123, 134, 142)
ACCENT = (47, 174, 95)
LINE = (230, 234, 236)

REG = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
BOLD = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"

# ttc 内不同字重：Noto Sans CJK SC Regular=0, Bold=2
def font(path, size, index=0):
    return ImageFont.truetype(path, size, index=index)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# ---- 细网格背景（呼应 Hero 的 hero-grid）----
# 只画在左侧文字区，避免网格线穿过立绘、干扰人物轮廓。
GRID_RIGHT = 700
grid = 56
for x in range(0, GRID_RIGHT, grid):
    d.line([(x, 0), (x, H)], fill=LINE, width=1)
for y in range(0, H, grid):
    d.line([(0, y), (GRID_RIGHT, y)], fill=LINE, width=1)

# 网格区域整体柔化（避免抢视觉）
veil = Image.new("L", (W, H), 0)
vd = ImageDraw.Draw(veil)
vd.rectangle([0, 0, GRID_RIGHT, H], fill=90)
img = Image.composite(img, Image.new("RGB", (W, H), BG), veil)
d = ImageDraw.Draw(img)

# ---- 立绘（右侧，透明 PNG）----
# 不做任何渐隐/羽化遮罩，保持立绘原始边缘完整清晰。
art = Image.open("public/assets/images/team/characters.png").convert("RGBA")
target_h = int(H * 0.92)
scale = target_h / art.height
art = art.resize((int(art.width * scale), target_h), Image.LANCZOS)
img.paste(art, (W - art.width - 20, H - art.height), art)

d = ImageDraw.Draw(img)

# ---- 左侧文字区 ----
LX = 88
# 顶部标签
f_chip = font(REG, 21, 0)
chip = "EST. 2023.7.11 · Minecraft · 自媒体"
cw = d.textlength(chip, font=f_chip)
d.rectangle([LX, 96, LX + cw + 36, 96 + 48], outline=(215, 220, 222), width=1)
d.text((LX + 18, 96 + 12), chip, font=f_chip, fill=MUTED)

# 团队名
f_cn = font(BOLD, 116, 2)
d.text((LX, 186), "和梦团队", font=f_cn, fill=FG)

# 英文名
f_en = font(BOLD, 52, 2)
d.text((LX + 4, 322), "PEACEDREAM", font=f_en, fill=MUTED)

# 绿色竖线 + slogan
f_sl = font(REG, 33, 0)
d.rectangle([LX, 418, LX + 5, 418 + 48], fill=ACCENT)
d.text((LX + 26, 420), "以最纯粹的态度，守最适人的温度", font=f_sl, fill=(90, 98, 104))

# 底部标语
f_tag = font(REG, 24, 0)
d.text((LX, H - 92), "优秀 · 和平 · 创意 · 友善", font=f_tag, fill=MUTED)

# ---- 输出：带内容指纹的文件名，避免社交平台缓存旧图 ----
# 社交平台（微信/QQ/Discord/Twitter…）按 URL 缓存 og:image，
# 固定名 /og.png 一旦更新就会长期显示旧图。文件名带哈希即可让 URL 变化、缓存失效。
import hashlib
import pathlib

buf = io.BytesIO()
img.save(buf, format="PNG", optimize=True)
data = buf.getvalue()
fingerprint = hashlib.sha256(data).hexdigest()[:8]

out_name = f"og-{fingerprint}.png"
out_path = pathlib.Path("public") / out_name
out_path.write_bytes(data)

# 清理历史旧图，只保留当前指纹版本
for old in pathlib.Path("public").glob("og-*.png"):
    if old.name != out_name:
        old.unlink()

# 同步 site.ts 中的 ogImage 字段
site_ts = pathlib.Path("src/data/site.ts")
text = site_ts.read_text(encoding="utf-8")
text_new = re.sub(
    r'(ogImage:\s*")[^"]*(")',
    rf'\g<1>/{out_name}\g<2>',
    text,
)
if text_new != text:
    site_ts.write_text(text_new, encoding="utf-8")

print(f"已生成 public/{out_name}  ({len(data) / 1024:.0f} KB)")
print(f"site.ts ogImage -> /{out_name}")