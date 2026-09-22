// Canonical map from the original canvas artboard filenames to app routes.
// Every internal link in the source .dc.html files (e.g. href="Members.dc.html")
// must become <Link to={ROUTES['Members.dc.html']}> in the converted React page.
export const ROUTES = {
  'Hero.dc.html': '/',
  'SignIn.dc.html': '/sign-in',
  'CreateAccount.dc.html': '/create-account',
  'Main.dc.html': '/dashboard',
  'Artboard-kjhi.dc.html': '/resources',
  'NetworkLearningCenter.dc.html': '/network-learning-center',
  'PerformanceTracker.dc.html': '/performance-tracker',
  'ReferNewClient.dc.html': '/refer-client',
  'AffiliateLinkWorkflow.dc.html': '/affiliate-link',
  'MemberIncentives.dc.html': '/member-incentives',
  'Members.dc.html': '/members',
  'ClientDetail.dc.html': '/client-detail',
  'ListingWorkflow.dc.html': '/listing-workflow',
  'BuyingWorkflow.dc.html': '/buying-workflow',
  'LendingWorkflow.dc.html': '/lending-workflow',
  'MemberProfile.dc.html': '/member-profile',
  'Profile.dc.html': '/profile',
};

export const ACCENT = '#2F5FE9';
