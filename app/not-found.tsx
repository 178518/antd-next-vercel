'use client';

import React from 'react';
import { Result, Button } from 'antd';

export default function NotFound(): React.ReactNode {
  return (
    <Result status="404" title="404" subTitle="无法找到请求的资源" extra={<Button href='/'>返回首页</Button>} />
  );
}
