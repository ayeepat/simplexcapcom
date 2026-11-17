import React from 'react';
import FadeInSection from './FadeInSection';
import Shape3D from './Shape3D';

/**
 * Section intro: serif headline, optional description. Left layout puts an
 * optional figure (`shape`) in the right-hand column, which is otherwise empty;
 * centred layout can flank the title with two (`shape` left, `shapeAlt` right).
 */
export default function SectionHeader({
  title,
  description,
  align = 'left',
  invert = false,
  shape,
  shapeAlt,
  shapeColor,
}) {
  const color = shapeColor || (invert ? 'text-tiffany/45' : 'text-tiffany-700/45');

  if (align === 'center') {
    return (
      <FadeInSection className="relative text-center max-w-2xl mx-auto mb-16">
        {shape && (
          <Shape3D shape={shape} size={130} speed={0.16} seed={0.7} className={`absolute hidden xl:block -left-56 top-1/2 -translate-y-1/2 ${color}`} />
        )}
        {shapeAlt && (
          <Shape3D shape={shapeAlt} size={110} speed={0.2} seed={2.3} className={`absolute hidden xl:block -right-52 top-1/2 -translate-y-1/2 ${invert ? 'text-paper/25' : 'text-ink-900/20'}`} />
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
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight ${invert ? 'text-paper' : 'text-ink-900'}`}>
            {title}
          </h2>
        </div>
        {(description || shape) && (
          <div className="lg:col-span-4 flex flex-col lg:items-end gap-6">
            {shape && (
              <Shape3D shape={shape} size={170} speed={0.14} seed={1.2} className={`hidden lg:block -mb-6 ${color}`} />
            )}
            {description && (
              <p className={`leading-relaxed lg:text-right ${invert ? 'text-paper/60' : 'text-ink-500'}`}>{description}</p>
            )}
          </div>
        )}
      </div>
    </FadeInSection>
  );
}
