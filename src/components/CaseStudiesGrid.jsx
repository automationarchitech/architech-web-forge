import { useState, useEffect } from 'react';
import { Factory, Heart, Monitor, Newspaper, Package, Landmark, Brain, Database, Settings, FileText } from 'lucide-react';

// Icon mapping for case studies
const iconMap = {
  'lucide:factory': Factory,
  'lucide:heart': Heart,
  'lucide:monitor': Monitor,
  'lucide:newspaper': Newspaper,
  'lucide:package': Package,
  'lucide:landmark': Landmark,
  'lucide:brain': Brain,
  'lucide:database': Database,
  'lucide:settings': Settings,
};

export default function CaseStudiesGrid({ caseStudies }) {
  const [filteredStudies, setFilteredStudies] = useState(caseStudies);
  const [activeFilter, setActiveFilter] = useState(null);

  // Filter function
  const updateFilter = () => {
    const params = new URLSearchParams(window.location.search);
    const industryFilter = params.get('industry');
    const serviceFilter = params.get('service');

    // No filter - show all in default order
    if (!industryFilter && !serviceFilter) {
      const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
      setFilteredStudies(sorted);
      setActiveFilter(null);
      return;
    }

    // Apply filter and sort: matching first, others after
    const filtered = [...caseStudies].sort((a, b) => {
      // Check if case study matches filter
      const aMatches = industryFilter
        ? a.industry.some(ind => normalizeString(ind) === normalizeString(industryFilter))
        : normalizeString(a.solutionType) === normalizeString(serviceFilter);

      const bMatches = industryFilter
        ? b.industry.some(ind => normalizeString(ind) === normalizeString(industryFilter))
        : normalizeString(b.solutionType) === normalizeString(serviceFilter);

      // Sort: matching cases first
      if (aMatches && !bMatches) return -1;
      if (!aMatches && bMatches) return 1;

      // Within each group, maintain original order
      return a.order - b.order;
    });

    setFilteredStudies(filtered);
    setActiveFilter(industryFilter || serviceFilter);
  };

  // Run on mount and when URL changes
  useEffect(() => {
    updateFilter();

    // Listen for back/forward button
    window.addEventListener('popstate', updateFilter);

    return () => window.removeEventListener('popstate', updateFilter);
  }, [caseStudies]);

  return (
    <>
      {/* Optional: Show active filter */}
      {activeFilter && (
        <div className="mb-8 text-sm text-gray-600">
          Filtered by: <span className="font-semibold">{activeFilter}</span>
        </div>
      )}

      {/* Case study grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </>
  );
}

// Normalize strings for URL comparison
function normalizeString(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');
}

// Helper function to get Lucide icon component from icon name
function getLucideIcon(iconName) {
  if (!iconName) return null;
  return iconMap[iconName] || FileText;
}

// Case study card component
function CaseStudyCard({ study }) {
  const IndustryIcon = getLucideIcon(study.industryIcon);
  const SolutionIcon = getLucideIcon(study.solutionIcon);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="p-8">
        {/* Icon Row: Industry (left) and Solution Type (right) with Tooltips */}
        <div className="flex items-start justify-between mb-6">
          {/* Industry Icon with Tooltip */}
          <div className="relative group/icon">
            {IndustryIcon && <IndustryIcon className="h-10 w-10 text-gray-600" strokeWidth={1} />}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-50">
              {study.industry[0]}
            </div>
          </div>

          {/* Solution Type Icon with Tooltip */}
          <div className="relative group/icon">
            {SolutionIcon && <SolutionIcon className="h-10 w-10 text-gray-600" strokeWidth={1} />}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-50">
              {study.solutionType}
            </div>
          </div>
        </div>

        {/* Tags (CLICKABLE) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Industry Tags */}
          {study.industry.map((ind, idx) => (
            <a
              key={`industry-${idx}`}
              href={`/case-studies/?industry=${encodeURIComponent(ind.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'))}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {ind}
            </a>
          ))}

          {/* Service Type Tag (if exists) */}
          {study.solutionType && (
            <a
              href={`/case-studies/?service=${encodeURIComponent(study.solutionType.toLowerCase().replace(/ /g, '-'))}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {study.solutionType}
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
          {study.title}
        </h3>

        {/* Metric Banner */}
        <div className="w-full bg-gray-200 py-3 px-4 rounded-sm mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">{study.metric}</span>
            <span className="text-sm font-medium text-gray-700">{study.metricLabel}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-600 mb-6">
          {study.summary}
        </p>

        {/* CTA Link */}
        <a
          href={`/case-studies/${study.slug}/`}
          className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors"
        >
          See more
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
