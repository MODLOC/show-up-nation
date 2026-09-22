import { Routes, Route } from 'react-router-dom';

import Hero from './pages/Hero.jsx';
import SignIn from './pages/SignIn.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Resources from './pages/Resources.jsx';
import NetworkLearningCenter from './pages/NetworkLearningCenter.jsx';
import PerformanceTracker from './pages/PerformanceTracker.jsx';
import ReferNewClient from './pages/ReferNewClient.jsx';
import AffiliateLinkWorkflow from './pages/AffiliateLinkWorkflow.jsx';
import MemberIncentives from './pages/MemberIncentives.jsx';
import Members from './pages/Members.jsx';
import ClientDetail from './pages/ClientDetail.jsx';
import ListingWorkflow from './pages/ListingWorkflow.jsx';
import BuyingWorkflow from './pages/BuyingWorkflow.jsx';
import LendingWorkflow from './pages/LendingWorkflow.jsx';
import MemberProfile from './pages/MemberProfile.jsx';
import Profile from './pages/Profile.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/network-learning-center" element={<NetworkLearningCenter />} />
      <Route path="/performance-tracker" element={<PerformanceTracker />} />
      <Route path="/refer-client" element={<ReferNewClient />} />
      <Route path="/affiliate-link" element={<AffiliateLinkWorkflow />} />
      <Route path="/member-incentives" element={<MemberIncentives />} />
      <Route path="/members" element={<Members />} />
      <Route path="/client-detail" element={<ClientDetail />} />
      <Route path="/listing-workflow" element={<ListingWorkflow />} />
      <Route path="/buying-workflow" element={<BuyingWorkflow />} />
      <Route path="/lending-workflow" element={<LendingWorkflow />} />
      <Route path="/member-profile" element={<MemberProfile />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
