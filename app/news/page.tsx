'use client';

/**
 * 获取query参数
 */
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function New() {
  const searchParams = useSearchParams();

  return <Suspense>Search: {searchParams.get('id')}</Suspense>;
}

export default function Page() {
  return (
    <Suspense>
      <New />
    </Suspense>
  );
}
