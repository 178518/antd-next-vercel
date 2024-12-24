'use client'; // 错误边界必须是客户端组件

import React from 'react';
import { Button, Result } from 'antd';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <Result status="500" title="500" subTitle={error.message} extra={<Button href="/">回到首页</Button>} />;
}
