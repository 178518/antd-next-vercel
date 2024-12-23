import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>未找到</h2>
      <p>无法找到请求的资源</p>
      <Link href="/">返回首页</Link>
    </div>
  );
}
