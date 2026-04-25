import React from 'react';
import FadeInSection from './FadeInSection';

export default function SectionHeader({ label, title, description }) {
  return (
    <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
      {label && (
        <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </FadeInSection>
  );
}