#!/usr/bin/env bash
# 生产构建前先确认没有开发服务器在跑。
#
# `next dev` 与 `next build` 会同时读写同一个 .next 目录，互相覆盖后
# dev server 就会报 "Cannot find module './571.js'" / 500。
# 这个脚本在 build 之前强制停掉 dev server，避免踩坑。
set -euo pipefail

cd "$(dirname "$0")/.."

stop_dev() {
  local pids=""
  for p in /proc/[0-9]*; do
    local pid="${p#/proc/}"
    local cmd
    cmd="$(tr '\0' ' ' < "$p/cmdline" 2>/dev/null || true)"
    case "$cmd" in
      *next-server*|*"next dev"*|*"bin/next"*)
        # 跳过本脚本自身，避免误杀
        [ "$cmd" = *stop-dev-server.sh* ] && continue
        pids="$pids $pid"
        ;;
    esac
  done

  if [ -n "$pids" ]; then
    echo "▸ 检测到开发服务器正在运行 (PID:$pids)，先停止…"
    # shellcheck disable=SC2086
    kill -9 $pids 2>/dev/null || true
    sleep 2
  fi
}

stop_dev

# 旧产物可能已损坏，清掉再构建
rm -rf .next

echo "▸ 开始生产构建…"
npm run build

echo "✅ 构建完成，产物位于 out/"
echo "   如需开发服务器，请单独运行：npm run dev"