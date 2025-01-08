'use client';

/**
 * 获取query参数
 */
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const New = () => {
  const searchParams = useSearchParams();

  return <Suspense>Search: {searchParams.get('id')}</Suspense>;
};

const News = () => {
  return (
    <Suspense>
      <New />
    </Suspense>
  );
};

export default News;
