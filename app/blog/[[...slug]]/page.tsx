/**
 * 获取所有参数
 */
const Blog = async ({ searchParams, params }: { searchParams: any; params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  console.log(slug);

  const { userName = 'zhaoyun' } = searchParams; // 从 searchParams 中获取查询参数

  // 使用查询参数拼接到请求 URL
  const res = await fetch(`http://lowcode.dev.mchz.com.cn/mcapi/getJwtToken/${userName}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  console.log(data);

  return (
    <>
      My Post: {slug}
      <div>{data.data.token}</div>
    </>
  );
};

export default Blog;
