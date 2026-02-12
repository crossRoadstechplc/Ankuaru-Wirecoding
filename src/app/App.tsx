import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './components/HomePage';
import MarketplacePage from './components/MarketplacePage';
import CommodityDetailPage from './components/CommodityDetailPage';
import DashboardPage from './components/DashboardPage';
import TendersPage from './components/TendersPage';
import RFQPage from './components/RFQPage';
import AuctionsPage from './components/AuctionsPage';
import TradingModeLearnPage from './components/TradingModeLearnPage';
import DocumentationPage from './components/DocumentationPage';
import RegisterBuyerPage from './components/RegisterBuyerPage';
import RegisterSellerPage from './components/RegisterSellerPage';
import BankIntegrationPage from './components/BankIntegrationPage';
import CreateRFQPage from './components/CreateRFQPage';
import CreateAuctionPage from './components/CreateAuctionPage';
import KYCRegistrationPage from './components/KYCRegistrationPage';
import BuyPage from './components/BuyPage';
import SellPage from './components/SellPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Banks_Verfications from './components/Banks_Verfications';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/rfq" element={<RFQPage />} />
            <Route path="/auctions" element={<AuctionsPage />} />
            <Route path="/trading-modes/:mode" element={<TradingModeLearnPage />} />
            <Route path="/commodity/:id" element={<CommodityDetailPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/tenders" element={<TendersPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/register/buyer" element={<RegisterBuyerPage />} />
            <Route path="/register/seller" element={<RegisterSellerPage />} />
            <Route path="/bank-integration" element={<BankIntegrationPage />} />
            <Route path="/rfq/create" element={<CreateRFQPage />} />
            <Route path="/auctions/create" element={<CreateAuctionPage />} />
            <Route path="/kyc-registration" element={<KYCRegistrationPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/banks" element={<Banks_Verfications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
