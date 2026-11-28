// ============================================================================
// Package tiers and pricing - Kodai Surprise Events
// Event-specific inclusions with a shared five-tier price ladder.
// Ready for future Cloud Firestore integration!
// ============================================================================

export const packagesData = [
  {
    id: 'silver',
    name: 'Silver',
    price: 5999,
    priceFormatted: '₹5,999',
    badge: null,
    highlight: false,
    tagline: 'Delightful & elegant setup for intimate birthday surprises',
    inclusions: [
      '0.5 kg cake',
      'Backdrop',
      'Poppers',
      'Bouquet',
      'Balloon decoration'
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 7999,
    priceFormatted: '₹7,999',
    badge: null,
    highlight: false,
    tagline: 'Upgraded celebration with floral touches & memorable photos',
    inclusions: [
      '0.5 kg cake',
      'Backdrop with artificial flowers',
      'Poppers',
      'Bouquet',
      'Photo frame decorations',
      'Umbrella flowers',
      '15 photos'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 11999,
    priceFormatted: '₹11,999',
    badge: 'Most Popular',
    highlight: true,
    tagline: 'Our best-selling romantic heart-arch setup with live photoshoot',
    inclusions: [
      '1 kg customizable cake',
      'Heart-arch backdrop',
      'Hanging photo decoration',
      'Photoshoot',
      'Popper',
      'Bouquet',
      '30 photos',
      'Umbrella flower'
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 24999,
    priceFormatted: '₹24,999',
    badge: 'Luxury VIP',
    highlight: false,
    tagline: 'Grand celebration with dual arches, red carpet & drone aerials',
    inclusions: [
      '1 kg customizable cake',
      'Heart arch',
      'Square arch photo hanging',
      'Photoshoot',
      'Popper',
      'Bouquet',
      '40 photos',
      'Umbrella flower',
      'Red carpet experience',
      'Drone shot'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 34999,
    priceFormatted: '₹34,999',
    badge: 'Ultimate Royal',
    highlight: false,
    tagline: 'The ultimate royal experience with luxury florals & extensive captures',
    inclusions: [
      '1 kg customizable cake',
      'Square arch with artificial flower backdrop',
      'Heart arch photo hanging',
      'Photoshoot',
      'Popper',
      'Bouquet',
      '50 photos',
      'Red carpet experience',
      'Drone shot'
    ]
  }
];

export const packageEventIds = [
  'birthday-celebrations',
  'anniversary-decorations',
  'proposal-decorations',
  'bride-groom-decorations'
];

const makePricedTiers = (tiers) => tiers.map((tier, index) => {
  const priceTier = packagesData[index];
  return {
    id: priceTier.id,
    name: priceTier.name,
    price: priceTier.price,
    priceFormatted: priceTier.priceFormatted,
    tagline: tier.tagline,
    inclusions: tier.inclusions
  };
});

export const eventPackagesData = {
  'anniversary-decorations': makePricedTiers([
    {
      tagline: 'An intimate candlelit table for a celebration made for two.',
      inclusions: ['Candlelight table styling', 'Rose petal accents', 'Personalized celebration setup']
    },
    {
      tagline: 'A warmer, more romantic setting with soft lights and shared memories.',
      inclusions: ['Fairy light canopy', 'Rose petal pathway accents', 'Memory photo string']
    },
    {
      tagline: 'A beautifully layered private dinner with a romantic floral touch.',
      inclusions: ['Private dinner cabana styling', 'Candlelight and fairy light canopy', 'Rose petal decor', 'Memory photo display']
    },
    {
      tagline: 'An elevated anniversary scene with thoughtful styling throughout.',
      inclusions: ['Styled private dinner cabana', 'Layered fairy light canopy', 'Rose petal pathway', 'Curated memory photo display']
    },
    {
      tagline: 'A fully tailored romantic setting for a milestone anniversary.',
      inclusions: ['Signature cabana transformation', 'Candlelight and floral styling', 'Rose petal pathway accents', 'Personalized memory display', 'Custom anniversary details']
    }
  ]),
  'proposal-decorations': makePricedTiers([
    {
      tagline: 'A heartfelt proposal moment framed by a beautiful view.',
      inclusions: ['Scenic viewpoint coordination', 'Romantic proposal styling', 'Illuminated MARRY ME letters']
    },
    {
      tagline: 'A more dramatic reveal with a grand entrance to the question.',
      inclusions: ['Illuminated MARRY ME letters', 'Red carpet aisle styling', 'Scenic viewpoint coordination']
    },
    {
      tagline: 'A floral proposal setting with a memorable aisle and reveal.',
      inclusions: ['Botanical floral arch styling', 'Red carpet hill aisle', 'Illuminated MARRY ME letters', 'Scenic viewpoint coordination']
    },
    {
      tagline: 'A striking proposal scene with layered decor and a dramatic reveal.',
      inclusions: ['Luxury botanical floral arch', 'Red carpet aisle styling', 'Cold fire fountain effects', 'Illuminated MARRY ME letters']
    },
    {
      tagline: 'A fully styled proposal experience designed around your moment.',
      inclusions: ['Signature scenic reveal concept', 'Luxury botanical floral styling', 'Red carpet hill aisle', 'Cold fire fountain effects', 'Illuminated MARRY ME letters']
    }
  ]),
  'bride-groom-decorations': makePricedTiers([
    {
      tagline: 'A graceful welcome that makes the couple’s room feel special.',
      inclusions: ['Bridal suite welcome decor', 'Personalized room details', 'Traditional or modern styling direction']
    },
    {
      tagline: 'A coordinated suite welcome with thoughtful keepsake touches.',
      inclusions: ['Styled bridal suite welcome', 'Custom luggage tags', 'Welcome hamper styling', 'Traditional or modern styling direction']
    },
    {
      tagline: 'A polished room transformation with a dedicated floral moment.',
      inclusions: ['Bridal suite decor', 'Haldi or Mehendi floral corner', 'Custom luggage tags and hamper styling', 'Coordinated couple welcome details']
    },
    {
      tagline: 'A richer multi-moment welcome for the couple and their celebrations.',
      inclusions: ['Enhanced bridal suite styling', 'Haldi and Mehendi floral corner concept', 'Personalized welcome hampers', 'Coordinated traditional or bohemian details']
    },
    {
      tagline: 'A bespoke welcome experience styled across the couple’s key moments.',
      inclusions: ['Signature bridal suite transformation', 'Tailored Haldi and Mehendi floral styling', 'Personalized luggage tags and hampers', 'Unified welcome decor concept', 'Custom finishing details']
    }
  ])
};
