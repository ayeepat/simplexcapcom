import React from 'react';
import FadeInSection from './FadeInSection';
import Eyebrow from './Eyebrow';

/**
 * Editorial section intro: numbered eyebrow + large serif headline.
 * Defaults to a left-aligned asymmetric layout (a description column sits
 * beside the title on wide screens) instead of the old centered icon-card
 * pattern; pass align="center" for narrower content sections.
 */
export default function SectionHeader({ index, label, title, description, align = 'left', invert = false }) {
  if (align === 'center') {
    return (
      <FadeInSection className="text-center max-w-2xl mx-auto mb-16">
        {label && (
          <div className="flex justify-center mb-5">
            <Eyebrow index={index} invert={invert}>{label}</Eyebrow>
          </div>
        )}
        <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight mb-4 ${invert ? 'text-paper' : 'text-ink-900'}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg leading-relaxed ${invert ? 'text-paper/60' : 'text-ink-500'}`}>{description}</p>
        )}
      </FadeInSection>
    );
  }

  return (
    <FadeInSection className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
        <div className="lg:col-span-8">
          {label && (
            <div className="mb-5">
              <Eyebrow index={index} invert={invert}>{label}</Eyebrow>
            </div>
          )}
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight ${invert ? 'text-paper' : 'text-ink-900'}`}>
            {title}
          </h2>
        </div>
        {description && (
          <div className="lg:col-span-4">
            <p className={`leading-relaxed ${invert ? 'text-paper/60' : 'text-ink-500'}`}>{description}</p>
          </div>
        )}
      </div>
    </FadeInSection>
  );
}
