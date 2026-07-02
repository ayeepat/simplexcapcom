import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_strategy: 'Strategy',
    nav_portfolio: 'Portfolio',
    nav_fund: 'Fund',
    nav_team: 'Team',
    nav_insights: 'Insights',
    nav_investors: 'Investors',
    nav_contact: 'Contact',
    nav_inquire: 'Inquire Now',
    nav_inquire_full: 'Inquire About Investing',

    // Home
    home_hero_title: 'Simplex Capital',
    home_hero_subtitle: 'Unlocking the power of private markets',
    home_hero_desc: 'Driving technological development and competitiveness through strategic investments in high-growth tech companies.',
    home_explore_strategy: 'Explore Our Strategy',
    home_for_investors: 'For Investors',
    home_stats_fum: 'Funds Under Management',
    home_stats_aum: 'Assets Under Management',
    home_stats_exp: 'Years PE/VC Experience',
    home_stats_ipo: 'IPOs completed',
    home_stats_growth: 'Capitalization Growth',
    home_card_strategy_title: 'Investment Strategy',
    home_card_strategy_desc: 'Intelligent Automation · AI & Social Solutions · Platform Economy · Predictable Disruption · Digital Trust',
    home_card_portfolio_title: 'Portfolio Highlights',
    home_card_portfolio_desc: 'Proven exits including VK, Veeam, EPAM, Softline, and investments in emerging future unicorns.',
    home_card_team_title: 'Team Track Record',
    home_card_team_desc: '25+ years, 50+ IPOs across global stock exchanges.',
    home_learn_more: 'Learn More',
    home_quote: 'Technology has outperformed every major asset class over the past decade — the Nasdaq-100 returned +504% from 2016 to 2025, and the 2026 IPO market is on pace for its strongest year since 2021.',
    home_quote_source: 'Source: Nasdaq Global Indexes, StockAnalysis.com · July 2026',

    // Strategy page
    strategy_label: 'Investment Strategy',
    strategy_title: "Tomorrow's Tech Leaders",
    strategy_desc: 'Our strategy targets high-growth technology companies at inflection points – Series C/D businesses with clear paths to IPO exits.',
    strategy_themes_label: 'Investment Themes',
    strategy_theme1_title: 'Intelligent Automation',
    strategy_theme1_desc: 'AI-driven process optimization and decision support systems transforming enterprise operations and industrial processes across sectors.',
    strategy_theme2_title: 'AI & Social Solutions',
    strategy_theme2_desc: 'Advanced machine learning platforms enhancing social connectivity, content delivery, and consumer engagement at scale.',
    strategy_theme3_title: 'Platform Economy',
    strategy_theme3_desc: 'Marketplace and sharing economy infrastructure enabling new business models and cross-border commerce.',
    strategy_theme4_title: 'Predictable Disruption',
    strategy_theme4_desc: 'Identifying and investing in technologies poised to reshape traditional industries within defined timeframes.',
    strategy_theme5_title: 'Digital Trust',
    strategy_theme5_desc: 'Cybersecurity, data privacy, and compliance solutions ensuring secure digital transformation for enterprises globally.',
    strategy_tech_label: 'Up to 70% of Fund',
    strategy_tech_title: 'Technologies & Business Models',
    strategy_sharing_economy: 'Sharing Economy',
    strategy_big_data: 'Big Data & Analytics',
    strategy_cloud: 'Cloud Computing',
    strategy_smart_grid: 'Smart Grid',
    strategy_it_outsourcing: 'IT Outsourcing',
    strategy_enterprise_software: 'Enterprise Software',
    strategy_hardware: 'New-Age Hardware',
    strategy_payments: 'Payment Solutions',
    strategy_markets_label: 'Up to 30% of Fund',
    strategy_markets_title: 'Markets on the Radar',
    strategy_b2b: 'B2B / B2C Platforms',
    strategy_iot: 'Internet of Things (IoT)',
    strategy_logistics: 'Logistics & Supply Chain',
    strategy_datacenters: 'Data Centers',
    strategy_fintech: 'FinTech',
    strategy_security: 'Cross-Sector IT Security',
    strategy_marketplaces: 'On-Demand Marketplaces',
    strategy_deepdive_label: 'Strategy Deep Dive',
    strategy_exit_title: 'Exit Strategy & Timeline',
    strategy_exit_desc: 'Our primary exit strategy focuses on IPO listings across London, New York, and Moscow exchanges, leveraging our 50+ IPO track record. Secondary exits through strategic M&A are pursued when valuations exceed IPO alternatives. We target 3-year holding periods with clear milestones for each portfolio company.',
    strategy_selection_title: 'Selection Criteria',
    strategy_selection_desc: 'We seek companies with proven product-market fit, $10M+ revenue, 30%+ YoY growth, strong technical teams, and clear competitive moats. Our selection system combines quantitative scoring with deep sector expertise to identify leaders positioned for exponential growth.',
    strategy_risk_title: 'Risk Management',
    strategy_risk_desc: 'Portfolio diversification across sectors and geographies limits concentration risk. Active board participation, regular monitoring, and structured milestones ensure early identification and mitigation of downside scenarios.',
    strategy_value_title: 'Value Creation Approach',
    strategy_value_desc: 'Beyond capital, we provide operational support including go-global strategies, executive network access, legal and regulatory guidance, revenue optimization, and preparation for public market listings. Our "Smart Money" approach has driven 10× average capitalization growth across our track record.',

    // About
    about_label: 'About Us',
    about_title: 'Simplex Capital Major International Fund',
    about_desc: 'A premier institutional-grade vehicle for strategic technology investments across Russia and global markets.',
    about_fund_label: 'Fund Structure',
    about_fund_title: 'Built on Institutional Foundations',
    about_fund_desc: 'Structured as a Cayman Islands-domiciled Limited Partnership, our fund adheres to the highest standards of institutional governance and transparency.',
    about_spec_size: 'Target Fund Size',
    about_spec_term: 'Fund Term',
    about_spec_mgmt: 'Management Fee',
    about_spec_carry: 'Carried Interest',
    about_spec_return: 'Target Net Return',
    about_spec_hurdle: 'Hurdle Rate',

    // Portfolio
    portfolio_label: 'Portfolio',
    portfolio_title: 'Proven Track Record',
    portfolio_desc: 'A history of successful investments in high-growth technology companies across international markets.',

    portfolio_cat_social: 'Social / Platform',
    portfolio_cat_nano: 'Nanotechnology',
    portfolio_cat_it: 'IT Services',
    portfolio_cat_dist: 'IT Distribution',
    portfolio_cat_mobility: 'Mobility / On-Demand',
    portfolio_cat_telecom: 'Telecom / Digital',
    portfolio_cat_media: 'Media / Tech',
    portfolio_detail_vk: 'Largest social network in Russia/CIS with 100M+ monthly users. Multi-service digital ecosystem.',
    portfolio_detail_ocsia: 'Luxembourg-based nanotechnology company and the world\'s largest industrial producer of graphene nanotubes (single-walled carbon nanotubes).',
    portfolio_detail_epam: 'NYSE-listed. Global digital platform engineering and software development leader with $4B+ revenue.',
    portfolio_detail_softline: 'IPO on London Stock Exchange. Leading global IT solutions and services provider across 50+ countries.',
    portfolio_detail_dataart: 'Global technology consultancy with 6,000+ professionals. Board seat and 10× capitalization growth.',
    portfolio_detail_gett: 'Leading corporate transportation platform operating across major international markets.',
    portfolio_detail_mts: 'Russia\'s largest mobile operator with major digital ecosystem. NYSE and MOEX listed.',
    portfolio_detail_nmg: 'Russia\'s largest private media holding with extensive digital and broadcast operations.',
    portfolio_patterns_label: 'Key Patterns in Tech',
    portfolio_pattern1_title: 'Global First Mindset',
    portfolio_pattern1_desc: 'Russian tech founders increasingly build with global market ambitions from day one.',
    portfolio_pattern2_title: 'Strong Technical Background',
    portfolio_pattern2_desc: 'World-class engineering talent pool with deep expertise in AI, cybersecurity, and enterprise software.',
    portfolio_pattern3_title: 'Exceptional Teams & Efficient Business Models',
    portfolio_pattern3_desc: 'We partner with top-tier founding teams and prioritize operationally efficient, scalable business models, targeting growth investments with a clear, time-bound path to profitability.',

    // Team
    team_label: 'Team',
    team_title: 'Team Track Record',

    // Insights
    insights_label: 'Market Insights',
    insights_title: 'A Decade of Technology Outperformance',
    insights_desc: 'Data-driven analysis supporting our thesis that technology investments deliver superior risk-adjusted returns.',
    insights_us_ipo: 'US IPO Market',
    insights_ipo_headline: 'H1 2026: 190 IPOs (+11% YoY Pace)',
    insights_ipo_desc: 'Deal count is running 11% ahead of 2025, and first-half proceeds set an all-time record — led by SpaceX’s $86B debut, the largest IPO in history.',
    insights_asset_returns: 'Asset Class Returns',
    insights_asset_title: 'Technology vs Traditional Assets',
    insights_asset_subtitle: 'Cumulative total returns, 2016–2025, dividends reinvested.',
    insights_tech_avg: 'Technology (Nasdaq-100)',
    insights_sp500_avg: 'S&P 500',
    insights_realestate_avg: 'US REITs (Nareit All Equity)',
    insights_bonds_avg: 'US Bonds (Bloomberg Aggregate)',
    insights_allocation: 'Target Allocation',
    insights_allocation_title: 'Sector Diversification',
    insights_cybersecurity: 'Cybersecurity',
    insights_enterprise_software: 'Enterprise Software',
    insights_datacenters: 'Data Centers',
    insights_fintech: 'FinTech',
    insights_ai_ml: 'AI / ML',
    insights_other: 'Other',
    insights_quote: 'Technology has outperformed every major asset class over the past decade',
    insights_quote_desc: 'From 2016 to 2025 the Nasdaq-100 returned +504% versus +298% for the S&P 500 — and with 190 listings and record proceeds in the first half, the 2026 IPO market points to the strongest exit environment since 2021.',
    insights_risk_note: 'Past performance is not indicative of future results. Technology valuations remain elevated by historical standards, and concentrated sector exposure can amplify drawdowns — as in 2022, when the Nasdaq-100 fell 33%.',
    insights_source: 'Sources: StockAnalysis.com, Nasdaq, S&P DJI, Nareit, Bloomberg · July 2026',

    // For Investors
    investors_label: 'For Investors',
    investors_title: 'Investor Portal',
    investors_desc: 'Everything you need to evaluate and join the Simplex Capital Major International Fund.',

    // Contact
    contact_label: 'Contact',
    contact_title: 'Get In Touch',
    contact_desc: 'Reach out to our investor relations team to learn more about investing with Simplex Capital.',
    contact_name: 'Full Name',
    contact_email: 'Email Address',
    contact_phone: 'Phone Number',
    contact_type: 'Investor Type',
    contact_message: 'Message',
    contact_submit: 'Submit Inquiry',
    contact_success: 'Thank you for your inquiry. We will be in touch shortly.',

    // Footer
    footer_disclaimer: 'Past performance is not indicative of future results. Investments in private equity funds involve significant risk, including possible loss of principal. This website is for informational purposes only and does not constitute an offer to sell or solicitation of an offer to buy any securities.',
    footer_investors: 'Investors',
    footer_rights: 'All rights reserved.',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] || translations['en'][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}