'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, DatePicker, Form, InputNumber, Select, Slider, Switch } from 'antd';

const HomePage: React.FC = () => {
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
      <div>
        <Form
          name="basic"
          layout="horizontal"
          size={'large'}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Input Number">
            <InputNumber min={1} max={10} style={{ width: 100 }} defaultValue={3} name="inputNumber" />
          </Form.Item>
          <Form.Item label="Switch">
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item label="Slider">
            <Slider defaultValue={70} />
          </Form.Item>
          <Form.Item label="Select" name="select">
            <Select
              defaultValue="lucy"
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
