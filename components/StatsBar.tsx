// components/StatsBar.tsx
import React from 'react';

import { useTranslations } from 'next-intl'

const StatsBar: React.FC = () => {
  
 const t = useTranslations('stat');

return (
  <div
    className="
      absolute -bottom-12 left-1/2 -translate-x-1/2
      flex justify-around items-center
      bg-brand-orange text-white shadow-xl
      rounded-[50px]
      w-11/12 max-w-3xl
      px-6 py-6
      sm:px-10 sm:py-8
      lg:px-16 lg:py-10
    "
  >
    {/* Country */}
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
        6+
      </span>
      <span className="text-sm sm:text-base mt-1 font-medium tracking-wide opacity-90">
        {t('country')}
      </span>
    </div>

    {/* Client */}
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
        15+
      </span>
      <span className="text-sm sm:text-base mt-1 font-medium tracking-wide opacity-90">
        {t('client')}
      </span>
    </div>

    {/* Testimonie */}
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
        15+
      </span>
      <span className="text-sm sm:text-base mt-1 font-medium tracking-wide opacity-90">
        {t('testimonie')}
      </span>
    </div>
  </div>
);




};

export default StatsBar;
