/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'; // 错误边界必须是客户端组件

import React from 'react';
import { Button, Result } from 'antd';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    // global-error 必须包含 html 和 body 标签
    <html>
      <body>
        <Result
          status="404"
          title="404"
          subTitle="出错了！"
          extra={
            <Button href="/">
              回到首页
            </Button>
          }
        />
      </body>
    </html>
  );
}
