// components/ui/Logo.tsx
import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => (
  <div className="flex items-center">
    <div className="relative h-10 w-32 sm:h-14 sm:w-64">
      <Image
        src="/logo.webp"
        alt="Indo Charcoal Supply"
        fill
        sizes="(max-width: 640px) 8rem, 16rem"
        priority
        style={{ objectFit: 'contain' }}
      />
    </div>
  </div>
);

export default Logo;
