import React, { useState } from 'react';
import FadeInSection from '@/components/shared/FadeInSection';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Filter } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const pipelineData = [
  { stage: 'Series D', moic: '3.5×', ticket: '15–20', sector: 'IT Cybersecurity', description: 'Leading cybersecurity platform with 200+ enterprise clients, $80M ARR, expanding into APAC markets.', status: 'Active Review' },
  { stage: 'Series B', moic: '4.0×', ticket: '5–10', sector: 'Data Centers', description: 'Tier III+ data center operator with strategic locations in CIS, 99.99% uptime, expanding capacity 3×.', status: 'Due Diligence' },
  { stage: 'Series C', moic: '3.8×', ticket: '10–15', sector: 'Enterprise Software', description: 'AI-powered ERP platform serving 500+ mid-market companies, 45% YoY revenue growth.', status: 'Active Review' },
  { stage: 'Series D', moic: '3.2×', ticket: '15–20', sector: 'FinTech', description: 'Cross-border payment infrastructure processing $2B+ annually with banking licenses in 4 jurisdictions.', status: 'Term Sheet' },
  { stage: 'Series C', moic: '4.5×', ticket: '10–15', sector: 'Cloud / SaaS', description: 'Cloud-native DevOps platform with 1,000+ developer teams, $30M ARR, 60% net revenue retention.', status: 'Active Review' },
  { stage: 'Series B', moic: '5.0×', ticket: '5–10', sector: 'AI / Machine Learning', description: 'Computer vision company for industrial quality inspection, deployed across 50+ manufacturing facilities.', status: 'Pipeline' },
  { stage: 'Series C', moic: '3.5×', ticket: '10–15', sector: 'Logistics Tech', description: 'Last-mile delivery optimization platform serving 3 of top 5 e-commerce players in CIS region.', status: 'Due Diligence' },
  { stage: 'Pre-IPO', moic: '2.5×', ticket: '15–20', sector: 'IT Services', description: 'Global IT outsourcing firm with 8,000+ engineers, preparing Nasdaq listing in 2028.', status: 'Pipeline' },
];

const stages = ['All', 'Series B', 'Series C', 'Series D', 'Pre-IPO'];
const sectors = ['All', 'IT Cybersecurity', 'Data Centers', 'Enterprise Software', 'FinTech', 'Cloud / SaaS', 'AI / Machine Learning', 'Logistics Tech', 'IT Services'];

/** @type {Record<string, string>} */
const statusColors = {
  'Active Review': 'bg-tiffany-50 text-tiffany-700',
  'Due Diligence': 'bg-blue-50 text-blue-700',
  'Term Sheet': 'bg-amber-50 text-amber-700',
  'Pipeline': 'bg-gray-100 text-gray-600',
};

export default function Pipeline() {
  const { t } = useLanguage();
  const [stageFilter, setStageFilter] = useState('All');
  const [sectorFilter, setSectorFilter] = useState('All');

  const filtered = pipelineData.filter(item => {
    const stageMatch = stageFilter === 'All' || item.stage === stageFilter;
    const sectorMatch = sectorFilter === 'All' || item.sector === sectorFilter;
    return stageMatch && sectorMatch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pipeline.jpg"
            alt="Pipeline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-block text-tiffany text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up">{t('pipeline_label')}</span>
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">{t('pipeline_title')}</h1>
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">{t('pipeline_desc')}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Filter by:</span>
            </div>
            <Select value={stageFilter} onValueChange={setStageFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                {stages.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={sectorFilter} onValueChange={setSectorFilter}>
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-400 ml-auto">{filtered.length} opportunities</span>
          </div>
        </div>
      </section>

      {/* Table Desktop */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:block">
            <FadeInSection>
              <div className="rounded-2xl border border-gray-100 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold text-gray-700">Stage</TableHead>
                      <TableHead className="font-semibold text-gray-700">MoIC</TableHead>
                      <TableHead className="font-semibold text-gray-700">Ticket ($M)</TableHead>
                      <TableHead className="font-semibold text-gray-700">Sector</TableHead>
                      <TableHead className="font-semibold text-gray-700">Description</TableHead>
                      <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filtered.map((item, i) => (
                      <TableRow key={i} className="hover:bg-gray-50 transition-colors">
                        <TableCell className="font-medium">{item.stage}</TableCell>
                        <TableCell className="text-tiffany-700 font-semibold">{item.moic}</TableCell>
                        <TableCell>{item.ticket}</TableCell>
                        <TableCell>{item.sector}</TableCell>
                        <TableCell className="text-gray-500 max-w-xs">{item.description}</TableCell>
                        <TableCell>
                          <Badge className={`${statusColors[item.status]} border-0`}>{item.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </FadeInSection>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filtered.map((item, i) => (
              <FadeInSection key={i} delay={i * 50}>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${statusColors[item.status]} border-0`}>{item.status}</Badge>
                    <span className="text-tiffany-700 font-bold text-lg">{item.moic}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.sector}</h4>
                  <div className="flex gap-4 text-sm text-gray-500 mb-3">
                    <span>{item.stage}</span>
                    <span>${item.ticket}M</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <p className="text-gray-500 text-sm leading-relaxed">
              <span className="font-semibold text-gray-700">Note:</span> Pipeline details are provided for illustrative purposes. Actual investments are subject to thorough due diligence and market conditions. Conservative MoIC projections are below base-case scenarios.
            </p>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}