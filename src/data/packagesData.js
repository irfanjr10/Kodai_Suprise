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
      tagline: 'A heartfelt proposal moment framed by a beautiful Kodaikanal view.',
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
  ]),
  'wedding-decorations': makePricedTiers([
    {
      tagline: 'A considered ceremony setup that celebrates the natural hill setting.',
      inclusions: ['Outdoor mandap styling concept', 'Eco-friendly hill decor options', 'Ceremony color direction']
    },
    {
      tagline: 'A more complete ceremony setting with a welcoming entrance.',
      inclusions: ['Pine forest mandap styling', 'Grand entrance walkway accents', 'Eco-friendly decor options']
    },
    {
      tagline: 'A coordinated ceremony look with a floral focal point.',
      inclusions: ['Outdoor mandap styling', 'Floral stage design', 'Entrance walkway styling', 'Guest seating floral accents']
    },
    {
      tagline: 'An elevated destination wedding look across the main guest moments.',
      inclusions: ['Pine forest mandap styling', 'Grand entrance treatment', 'Lush floral stage concept', 'Guest seating decor accents', 'Eco-friendly hill decor options']
    },
    {
      tagline: 'A bespoke wedding design concept tailored to your venue and celebration.',
      inclusions: ['Signature mandap and stage styling', 'Grand entrance walkway design', 'Coordinated guest seating florals', 'Venue-wide decor direction', 'Eco-conscious styling options']
    }
  ]),
  'reception-decorations': makePricedTiers([
    {
      tagline: 'A polished reception focal point with warm evening ambience.',
      inclusions: ['Illuminated stage backdrop', 'Ambient lighting direction', 'Reception color styling']
    },
    {
      tagline: 'A more luminous reception with elegant overhead details.',
      inclusions: ['Styled stage backdrop', 'Fairy light ceiling concept', 'Ambient hill lighting']
    },
    {
      tagline: 'A coordinated evening look with statement lighting and florals.',
      inclusions: ['Illuminated stage styling', 'Crystal chandelier ceiling concept', 'Stage floral accents', 'Cocktail area styling']
    },
    {
      tagline: 'A grander celebration atmosphere with layered guest experiences.',
      inclusions: ['Statement reception stage', 'Chandelier and ceiling lighting concept', 'Mirror dance floor styling', 'Cocktail area styling', 'Ambient venue lighting']
    },
    {
      tagline: 'A bespoke reception design that brings the full evening together.',
      inclusions: ['Signature stage and backdrop concept', 'Layered chandelier and ambient lighting', 'Mirror dance floor styling', 'Cocktail area design', 'Coordinated venue-wide visual direction']
    }
  ]),
  'pre-wedding-photoshoots': makePricedTiers([
    {
      tagline: 'A relaxed couple session among Kodaikanal’s scenic locations.',
      inclusions: ['Scenic location guidance', 'Candid couple portraits', 'High-resolution color-graded photos']
    },
    {
      tagline: 'A more styled shoot with a little extra cinematic atmosphere.',
      inclusions: ['Scenic location guidance', 'Props or smoke-bomb setup concept', 'High-resolution color-graded photos', 'Cinematic video capture']
    },
    {
      tagline: 'A signature story session shaped around your locations and style.',
      inclusions: ['Location and timing guidance', 'Styled props or smoke-bomb concept', 'Color-graded photo collection', 'Cinematic video capture']
    },
    {
      tagline: 'An elevated photo and film experience across scenic backdrops.',
      inclusions: ['Guided scenic shoot plan', 'Drone cinematography where permitted', 'Styled visual concepts', 'Color-graded photos', 'Cinematic video capture']
    },
    {
      tagline: 'A bespoke editorial-style story of your relationship in the hills.',
      inclusions: ['Tailored location and shoot plan', 'Drone cinematography where permitted', 'Multiple visual concepts', 'High-resolution color-graded photos', 'Cinematic photo and video coverage']
    }
  ]),
  'post-wedding-photoshoots': makePricedTiers([
    {
      tagline: 'A relaxed newlywed portrait session in a beautiful hill setting.',
      inclusions: ['Scenic hill resort shoot', 'Candid couple portraits', 'Sunset or misty morning session direction']
    },
    {
      tagline: 'A more editorial session with time for changing scenery and mood.',
      inclusions: ['Scenic shoot guidance', 'Candid and posed portraits', 'Sunset or misty morning timing', 'Photo album curation']
    },
    {
      tagline: 'A thoughtfully styled newlywed story across the hills.',
      inclusions: ['Scenic location direction', 'Editorial couple portraits', 'Misty morning or sunset styling', 'Curated photo album concept']
    },
    {
      tagline: 'A richer portrait experience with a refined keepsake collection.',
      inclusions: ['Tailored hill shoot plan', 'Candid and editorial portraits', 'Scenic resort locations', 'Curated album design direction']
    },
    {
      tagline: 'A bespoke honeymoon story, captured in a relaxed editorial style.',
      inclusions: ['Personalized scenic shoot plan', 'Newlywed portrait session', 'Sunset and misty morning styling options', 'Premium photo album curation', 'Custom visual direction']
    }
  ]),
  'custom-event-decorations': makePricedTiers([
    {
      tagline: 'A simple, thoughtful setup shaped around your occasion.',
      inclusions: ['Event concept direction', 'Customized prop accents', 'Tailored styling for your occasion']
    },
    {
      tagline: 'A more styled event with a clear visual theme.',
      inclusions: ['Concept mood board', 'Customized props and staging', 'Boho picnic styling option', 'Venue styling direction']
    },
    {
      tagline: 'A coordinated setup with thoughtful details across the event.',
      inclusions: ['Custom event concept', 'Themed staging and props', 'Boho picnic setup option', 'Vendor coordination']
    },
    {
      tagline: 'A more complete event design, from first concept to guest experience.',
      inclusions: ['Personalized mood board', 'Expanded staging and decor styling', 'Vendor coordination', 'Guest-area styling direction']
    },
    {
      tagline: 'A fully bespoke event concept designed around your vision and venue.',
      inclusions: ['Signature event mood board', 'Custom props and staging concept', 'Full vendor coordination', 'Venue-wide styling direction', 'Tailored guest experience details']
    }
  ])
};
