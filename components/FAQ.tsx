'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
// Perubahan: Mengimpor XMarkIcon untuk tombol 'tutup'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// Perubahan: Komponen FAQItem diubah total untuk mencocokkan desain baru
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div 
    className={`transition-all duration-300 ease-in-out rounded-xl ${isOpen ? 'bg-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'}`}
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left p-6"
      aria-expanded={isOpen}
    >
      <span className="text-md font-semibold text-gray-800">
        {question}
      </span>
      <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-white border">
        {isOpen ? <XMarkIcon className="w-5 h-5 text-brand-orange" /> : <PlusIcon className="w-5 h-5 text-gray-600" />}
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
    >
      <div className="px-6 pb-6 pt-0">
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const t = useTranslations('faq');
  const [openQuestion, setOpenQuestion] = useState<string | null>('q1'); // Default pertanyaan pertama terbuka

  const faqData = [
    { id: 'q1', question: t('q1_question'), answer: t('q1_answer') },
    { id: 'q2', question: t('q2_question'), answer: t('q2_answer') },
    { id: 'q3', question: t('q3_question'), answer: t('q3_answer') },
    { id: 'q4', question: t('q4_question'), answer: t('q4_answer') },
    { id: 'q5', question: t('q5_question'), answer: t('q5_answer') },
    { id: 'q6', question: t('q6_question'), answer: t('q6_answer') },
  ];
  
  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    // Perubahan: Latar belakang seksi diubah menjadi sedikit abu-abu
    <section id="faq" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          {/* Perubahan: Menambahkan label kecil di atas judul */}
          <p className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">
            {t('supertitle')}
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        {/* Perubahan: Wrapper untuk item FAQ dengan spasi */}
        <div className="space-y-4">
          {faqData.map(item => (
            <FAQItem 
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openQuestion === item.id}
              onClick={() => toggleQuestion(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;