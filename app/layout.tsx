import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import theme from './themeConfig';

import StyledComponentsRegistry from './AntdRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: '【杭州美创科技】专业数据安全_运行安全_数据流动_安全运维服务商',
  keywords: '杭州美创科技股份有限公司,美创科技,数据安全,运行安全,数据流动,安全运维服务',
  description:
    '杭州美创科技股份有限公司(以下简称“美创科技”)，为政府、金融、能源、运营商、医疗、教育、物流交通、企业等超16000家用户提供产品、方案与服务。以成为数据安全领导者和引路人为愿景，美创科技聚焦数据为中心，形成数据安全、运行安全、数据流动三大产线布局及数据运维和安全服务，持续为每一位用户的数字化转型安全护航。'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh_CN">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
