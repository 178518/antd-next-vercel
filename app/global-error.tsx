/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'; // 错误边界必须是客户端组件

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    // global-error 必须包含 html 和 body 标签
    <html>
      <body>
        <h2>出错了！</h2>
        <button onClick={() => reset()}>重试</button>
      </body>
    </html>
  );
}
