import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Menambahkan prop objectPositionCustom agar bisa diatur per orang
interface TeamMemberCardProps {
  imageSrc: string;
  name: string;
  role: string;
  objectPositionCustom?: string;
}

const TeamMemberCard = ({ imageSrc, name, role, objectPositionCustom }: TeamMemberCardProps) => (
  <div className="text-center">
    <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 shadow-lg">
      <Image
        src={imageSrc}
        alt={`Photo of ${name}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: 'cover',
          // Setiap foto sekarang memiliki posisi uniknya sendiri
          objectPosition: objectPositionCustom || 'center center',
        }}
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900 text-center">{name.trim()}</h3>
    <p className="text-brand-orange font-semibold text-center">{role.trim()}</p>
  </div>
);

const OurTeam: React.FC = () => {
  const t = useTranslations('team');

  const teamMembers = [
    {
      imageSrc: "/team-image/member1-fix.webp",
      name: "ADAM BILLAH HADI WARDOYO",
      role: "Chief Executive Officer",
      // Adam: Sedikit diturunkan agar seimbang
      objectPositionCustom: 'center 15%' 
    },
    {
      imageSrc: "/team-image/member2.webp",
      name: "AZIZAH NAYANDA FADHILAH",
      role: "Chief Financial Officer",
      // Dinaikkan lagi
      objectPositionCustom: 'center 10%' 
    },
    {
      imageSrc: "/team-image/member3.webp",
      name: "WASESA BERLIANTO",
      role: "Chief Marketing Officer",
      // Dinaikkan lagi
      objectPositionCustom: 'center 10%'
    }
  ];

  return (
    <section id="our-team" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-16">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;