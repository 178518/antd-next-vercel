/**
 * 获取所有参数
 */
const Blog = async ({ searchParams, params }: { searchParams: any; params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  console.log(slug);

  const { userName } = await searchParams;

  return (
    <>
      My Post: {slug} {userName}
    </>
  );
};

export default Blog;
