import { useRouter } from 'next/router';
import React from 'react';

function Infos() {
  const router = useRouter();
  const slugs = router.query?.slug;

  return (
    <div>/info/
      {slugs?.map((slug, index) => (
        <span key={index}>{slug}/</span>
      ))}
    </div>
  );
}

export default Infos;
