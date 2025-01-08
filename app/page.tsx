'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, DatePicker, Form, InputNumber, Select, Slider, Switch } from 'antd';
import dayjs from 'dayjs';

const HomePage: React.FC = () => {
  // 表单的初始值
  const initialValues = {
    inputNumber: 3,
    switch: true,
    slider: 70,
    select: 'lucy',
    datePicker: dayjs('2024-12-24')
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Image src="/logo.png" alt="杭州美创科技" width={128} height={43} />
      <Link href="http://mchz.com.cn/" target="_blank">
        杭州美创科技
      </Link>
      <ul>
        <li>
          <Link href="/news?id=1" target="_blank">
            news
          </Link>
        </li>
        <li>
          <Link href="/blog/1/2/3?userName=leihang" target="_blank">
            blog
          </Link>
        </li>
      </ul>
      <div>
        <Form
          name="basic"
          layout="horizontal"
          initialValues={initialValues}
          size={'large'}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Input Number" name="inputNumber">
            <InputNumber min={1} max={10} style={{ width: 100 }} name="inputNumber" />
          </Form.Item>
          <Form.Item label="Switch" name="switch">
            <Switch />
          </Form.Item>
          <Form.Item label="Slider" name="slider">
            <Slider />
          </Form.Item>
          <Form.Item label="Select" name="select">
            <Select
              style={{ width: 192 }}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'lijianan', label: 'lijianan' },
                { value: 'disabled', label: 'Disabled', disabled: true }
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker" name="datePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item style={{ marginTop: 48 }} wrapperCol={{ offset: 8 }}>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
            <Button style={{ marginLeft: 8 }}>Cancel</Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default HomePage;
