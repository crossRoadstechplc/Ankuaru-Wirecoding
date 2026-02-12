import { Link, useParams } from 'react-router';

type TradingModeContent = {
  title: string;
  subtitle: string;
  whatItIs: string;
  whenToUse: string[];
  howItWorks: string[];
  keyFeatures: string[];
  primaryActionLabel: string;
  primaryActionLink: string;
};

const modeContent: Record<string, TradingModeContent> = {
  rfq: {
    title: 'IOI / RFQ',
    subtitle: 'Request for Quotation with structured quote submission and award flow',
    whatItIs:
      'RFQ mode lets buyers publish requirements and receive multiple quotes from sellers before awarding a trade.',
    whenToUse: [
      'When you need competitive quotes from multiple suppliers.',
      'When quality, delivery terms, and payment conditions are part of selection.',
      'When auditability of quote-to-award decisions matters.',
    ],
    howItWorks: [
      'Buyer publishes RFQ with commodity, quantity, grade, and timeline.',
      'Sellers submit priced quotes with terms.',
      'Buyer compares and awards best-fit quote.',
    ],
    keyFeatures: ['Structured RFQs', 'Multi-seller quotes', 'Award-to-trade conversion'],
    primaryActionLabel: 'Open RFQ Workspace',
    primaryActionLink: '/rfq',
  },
  auctions: {
    title: 'Auctions',
    subtitle: 'Live and scheduled auctions with transparent price discovery',
    whatItIs:
      'Auction mode enables real-time bidding with configurable rules for English, reverse, and scheduled call auctions.',
    whenToUse: [
      'When market-driven price discovery is preferred.',
      'When timed competitive bidding is required.',
      'When reserve-price and extension rules are needed.',
    ],
    howItWorks: [
      'Auction is created with rules, reserve, and schedule.',
      'Participants place bids in real time.',
      'Auction closes and winner is determined by rules.',
    ],
    keyFeatures: ['Configurable rules', 'Reserve prices', 'Auto extensions'],
    primaryActionLabel: 'Open Auctions',
    primaryActionLink: '/auctions',
  },
  tenders: {
    title: 'Order Book',
    subtitle: 'Continuous matching for active market participants',
    whatItIs:
      'Order Book mode supports ongoing buy/sell activity where orders are matched continuously by matching rules.',
    whenToUse: [
      'When you need continuous intraday execution.',
      'When fast entry and exit are required.',
      'When visibility into market depth is important.',
    ],
    howItWorks: [
      'Participants place market or limit orders.',
      'Matching engine pairs compatible orders.',
      'Trades execute and update order book in real time.',
    ],
    keyFeatures: ['Live order book', 'Market & limit orders', 'Real-time execution'],
    primaryActionLabel: 'Open Order Book',
    primaryActionLink: '/tenders',
  },
};

export default function TradingModeLearnPage() {
  const { mode } = useParams();
  const content = mode ? modeContent[mode] : undefined;

  if (!content) {
    return (
      <div className="app-page">
        <div className="app-shell">
          <h1 className="app-page-title mb-2">Trading Mode Not Found</h1>
          <p className="app-page-subtitle mb-6">Choose a valid trading mode from the home page.</p>
          <Link
            to="/"
            className="inline-flex px-4 py-2 border-2 border-gray-800 text-gray-800 font-mono hover:bg-gray-100"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="app-page">
      <div className="app-shell">
        <div className="mb-8">
          <h1 className="app-page-title mb-2">{content.title}</h1>
          <p className="app-page-subtitle">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white border-2 border-gray-300 p-6">
            <h2 className="font-mono text-lg text-gray-900 mb-3">What It Is</h2>
            <p className="font-mono text-sm text-gray-700 mb-6">{content.whatItIs}</p>

            <h2 className="font-mono text-lg text-gray-900 mb-3">When To Use</h2>
            <ul className="space-y-2 mb-6">
              {content.whenToUse.map((item) => (
                <li key={item} className="font-mono text-sm text-gray-700 flex items-start">
                  <span className="mr-2">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-mono text-lg text-gray-900 mb-3">How It Works</h2>
            <ol className="space-y-2">
              {content.howItWorks.map((step, index) => (
                <li key={step} className="font-mono text-sm text-gray-700">
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </section>

          <aside className="bg-white border-2 border-gray-300 p-6 h-fit">
            <h2 className="font-mono text-lg text-gray-900 mb-3">Key Features</h2>
            <ul className="space-y-2 mb-6">
              {content.keyFeatures.map((feature) => (
                <li key={feature} className="font-mono text-sm text-gray-700 flex items-start">
                  <span className="mr-2">-</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <Link
                to={content.primaryActionLink}
                className="block w-full text-center px-4 py-2 border-2 border-gray-800 text-gray-800 font-mono hover:bg-gray-100"
              >
                {content.primaryActionLabel}
              </Link>
              <Link
                to="/"
                className="block w-full text-center px-4 py-2 border-2 border-gray-300 text-gray-700 font-mono hover:bg-gray-100"
              >
                Back to Home
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
