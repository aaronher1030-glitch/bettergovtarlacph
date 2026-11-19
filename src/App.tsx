import { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  Building2,
  ExternalLink,
  FileCheck2,
  FileText,
  Landmark,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { categories, checkedAt, records, type RecordCategory } from './data/records';

const categoryIcon: Record<RecordCategory, typeof FileText> = {
  Services: BookOpenText,
  'Local policies': FileCheck2,
  Offices: Building2,
  Procurement: Landmark,
};

function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    'All records',
  );

  const filteredRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return records.filter(record => {
      const matchesCategory =
        activeCategory === 'All records' || record.category === activeCategory;
      const searchable = [
        record.title,
        record.category,
        record.description,
        record.publisher,
        record.scope,
      ]
        .join(' ')
        .toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="demo-notice">
        <ShieldCheck size={15} aria-hidden="true" />
        <span>
          Independent community demo <span className="notice-dot">·</span> Not an official LGU website or service
        </span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Better Concepcion home">
          <span className="brand-mark" aria-hidden="true">BC</span>
          <span className="brand-copy">
            <strong>Better Concepcion</strong>
            <span>Public information finder</span>
          </span>
        </a>
        <nav className="primary-nav" aria-label="Main navigation">
          <a href="#records">Browse information</a>
          <a href="#about">About this demo</a>
        </nav>
        <a
          className="official-link"
          href="https://concepciontarlac.org/"
          target="_blank"
          rel="noreferrer"
        >
          Official municipal site <ExternalLink size={15} aria-hidden="true" />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-inner">
            <p className="eyebrow">PUBLIC INFORMATION FOR CONCEPCION, TARLAC</p>
            <h1 id="hero-title">Find the right local information.</h1>
            <p className="hero-description">
              A simple starting point for municipal services, local policies, offices, and public documents. Every result links to its original source.
            </p>
            <form
              className="search-form"
              role="search"
              onSubmit={event => {
                event.preventDefault();
                document.getElementById('records')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Search className="search-icon" size={21} aria-hidden="true" />
              <label className="visually-hidden" htmlFor="record-search">
                Search public information
              </label>
              <input
                id="record-search"
                type="search"
                placeholder="Try “ordinance”, “business”, or “charter”"
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
            <p className="search-hint">
              Search published links only. This demo does not submit forms or collect personal information.
            </p>
            <a className="scroll-link" href="#records">
              Browse all sources <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="records-section" id="records" aria-labelledby="records-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-green">SOURCE DIRECTORY</p>
              <h2 id="records-title">Browse public information</h2>
              <p className="section-description">
                Choose a topic or search. Open the publisher’s page to read the full record.
              </p>
            </div>
            <p className="checked-summary">Links checked {checkedAt}</p>
          </div>

          <div className="filter-row" role="group" aria-label="Filter records by topic">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-chip ${activeCategory === category ? 'is-active' : ''}`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <p className="result-count" aria-live="polite">
            {filteredRecords.length} {filteredRecords.length === 1 ? 'source' : 'sources'}
            {query.trim() ? ` matching “${query.trim()}”` : ''}
          </p>

          {filteredRecords.length > 0 ? (
            <div className="record-list">
              {filteredRecords.map(record => {
                const Icon = categoryIcon[record.category];
                return (
                  <article className="record-row" key={record.id}>
                    <div className="record-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div className="record-main">
                      <div className="record-meta">
                        <span>{record.category}</span>
                        <span className="meta-separator">·</span>
                        <span>{record.scope}</span>
                      </div>
                      <h3>
                        <a href={record.sourceUrl} target="_blank" rel="noreferrer">
                          {record.title}
                        </a>
                      </h3>
                      <p>{record.description}</p>
                      <div className="source-details">
                        <span>{record.publisher}</span>
                        {record.sourceDate && <span>Source date: {record.sourceDate}</span>}
                        <span>Checked {checkedAt}</span>
                      </div>
                      {record.note && <p className="record-note">Note: {record.note}</p>}
                    </div>
                    <a
                      className="record-action"
                      href={record.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open original source: ${record.title}`}
                    >
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={24} aria-hidden="true" />
              <h3>No matching sources found</h3>
              <p>Try another word or choose “All records.”</p>
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setQuery('');
                  setActiveCategory('All records');
                }}
              >
                Clear search and filters
              </button>
            </div>
          )}
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="eyebrow">ABOUT THE DEMO</p>
            <h2 id="about-title">A directory of sources, not a replacement for them.</h2>
            <p>
              Better Concepcion is an independent prototype for making public information easier to find. The records remain with their original publishers; this page organizes links and shows when they were checked.
            </p>
            <a href="https://github.com/aaronher1030-glitch/bettergovtarlacph" target="_blank" rel="noreferrer" className="about-link">
              View project notes on GitHub <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="about-facts">
            <div className="fact-row">
              <span className="fact-label">Project status</span>
              <strong>Early demo</strong>
            </div>
            <div className="fact-row">
              <span className="fact-label">Source links checked</span>
              <strong>{checkedAt}</strong>
            </div>
            <div className="fact-row">
              <span className="fact-label">Information coverage</span>
              <strong>Selected public pages only</strong>
            </div>
            <div className="fact-row">
              <span className="fact-label">Official partnership</span>
              <strong>None claimed</strong>
            </div>
          </div>
        </section>

        <section className="caution-section" aria-label="Important information">
          <div className="caution-icon" aria-hidden="true"><ShieldCheck size={20} /></div>
          <div>
            <h2>Check the original source before relying on a record.</h2>
            <p>
              Links and summaries in this demo may be incomplete or become outdated. This site does not provide official advice, handle transactions, or verify the completeness of the publisher’s records.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-small" aria-hidden="true">BC</span>
          <span>Better Concepcion <span className="footer-muted">· Independent demo</span></span>
        </div>
        <a href="https://concepciontarlac.org/" target="_blank" rel="noreferrer">
          Visit the official municipal website <ExternalLink size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}

export default App;
