'use client';
import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

export default function Loading() {
  // 或者一个自定义的加载骨架组件
  <Flex gap="middle" vertical>
    <Flex gap="middle">
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </Flex>
  </Flex>;
}
