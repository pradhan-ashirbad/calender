export const SITE = {
  name: 'Geomysore Services India Pvt Ltd',
  shortName: 'Geomysore',
  url: 'https://www.geomysore.com',
  email: 'reception@geomysore.com',
  address: ['#187/1E, Pagidirai Village,', 'Tuggali Mandal, Kurnool District,', 'Andhra Pradesh — 518390'],
  logo: 'https://www.geomysore.com/wp-content/assets/images/new-logo.png',
  description:
    "India's premier gold exploration and development company. Operating across India since 1994 — 35,000+ sq.km explored, multiple precious metal discoveries, and India's first large greenfield integrated gold mining and processing facility under development.",
};

const ASSETS = 'https://www.geomysore.com/wp-content/assets/images';

export const IMG = {
  heroTeam: 'https://res.cloudinary.com/dypszkyst/image/upload/v1744975633/geo_team_qkwwce.avif',
  banner1: `${ASSETS}/banner/banner1.webp`,
  banner2: `${ASSETS}/banner/banner2.webp`,
  banner3: `${ASSETS}/banner/banner3.webp`,
  banner4: `${ASSETS}/banner/banner4.webp`,
  treeStep1: `${ASSETS}/strength/tree_step-1.webp`,
  treeStep2: `${ASSETS}/strength/tree_step-2.webp`,
  treeStep3: `${ASSETS}/strength/tree_step-3.webp`,
  csrEducation: `${ASSETS}/edu.png`,
  csrHealth: `${ASSETS}/csr/blood_donet2.webp`,
  csrPlantation: `${ASSETS}/plant.jpeg`,
  csrWater: `${ASSETS}/csr/water4.webp`,
  csrVillage: `${ASSETS}/csr/village6.webp`,
};

// Placeholder photography from Unsplash — swap these for real Geomysore
// photography later. Centralised here so they are easy to find and replace.
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const STOCK = {
  minePit: u('photo-1547234935-80c7145ec969'),
  machinery: u('photo-1574607383476-f517f260d30b'),
  plant: u('photo-1581093458791-9f3c3900df4b'),
  mountains: u('photo-1464822759023-fed622ff2c3b'),
  landscape: u('photo-1469474968028-56623f02e42e'),
  field: u('photo-1500382017468-9049fed747ef'),
  aerial: u('photo-1470770841072-f978cf4d019e'),
};

export const PARTNERS = [
  'Australian Indian Resources',
  'Sun Mining Corporation',
  'Deccan Gold Mines',
  'Thriveni Earthmovers',
  'NI 43-101 Compliant',
  'JORC Reporting',
];

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Project',
    href: '/project',
    children: [
      { label: 'Executive Summary', href: '/project/executive-summary' },
      { label: 'Background History', href: '/project/background-history' },
      { label: 'Statutory Clearances', href: '/project/statutory-clearances' },
      { label: 'Exploration', href: '/project/exploration' },
      { label: 'Resources & Geology', href: '/project/resources-geology' },
      { label: 'Mining', href: '/project/mining' },
      { label: 'Processing', href: '/project/processing' },
    ],
  },
  {
    label: 'Sustainability',
    href: '/sustainability',
    children: [
      { label: 'Sustainability', href: '/sustainability/overview' },
      { label: 'Green Initiatives', href: '/sustainability/green-initiatives' },
      { label: 'Integration With Society', href: '/sustainability/community-integration' },
      { label: 'Waste Management', href: '/sustainability/waste-management' },
      { label: 'Innovations', href: '/sustainability/innovations' },
      { label: 'Net Zero', href: '/sustainability/net-zero' },
      { label: 'Recycle & Rebuild', href: '/sustainability/recycle-rebuild' },
    ],
  },
  { label: 'CSR', href: '/csr' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_QUICK_LINKS: NavChild[] = [
  { label: 'About', href: '/about' },
  { label: 'Project', href: '/project' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'CSR', href: '/csr' },
  { label: 'Gallery', href: '/gallery' },
];

export const FOOTER_COMPANY_LINKS: NavChild[] = [
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Board of Directors', href: '/about/board' },
  { label: 'Site Team', href: '/about/team' },
];
