import { Product } from '@/types/marketplace';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'iphone-17',
    name: 'Apple iPhone 17',
    brand: 'Apple',
    category: 'smartphones',
    categoryName: 'Smartphones',
    tagline: 'Supercharged with A19 chip and ProMotion display.',
    description: 'iPhone 17 features an aerospace-grade aluminum enclosure, Ceramic Shield front, and the powerful A19 Bionic chip. Experience unmatched battery life and professional photography without dipping into your savings.',
    rating: 4.9,
    reviewCount: 1420,
    primaryImageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 79999,
    startingEmiAmount: 3333,
    minTenureMonths: 3,
    maxTenureMonths: 36,
    features: [
      'A19 Bionic powerhouse chip',
      'Super Retina XDR with ProMotion 120Hz',
      'Advanced 48MP Fusion camera system',
      'All-day battery life with USB-C fast charging',
      'Emergency SOS via satellite & Crash Detection'
    ],
    specs: {
      'Display': '6.3-inch Super Retina XDR OLED',
      'Processor': 'A19 Bionic (3nm architecture)',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP 2x Telephoto',
      'Battery': 'Up to 27 hours video playback',
      'Build': 'Aerospace-grade Aluminum, Ceramic Shield',
      'OS': 'iOS 18'
    },
    variants: [
      {
        id: 'iphone-17-128-black',
        variantName: '128 GB · Space Black',
        attributes: {
          color: 'Space Black',
          storage: '128 GB',
        },
        mrp: 84999,
        sellingPrice: 79999,
        discountPercentage: 6,
        inStock: true,
      },
      {
        id: 'iphone-17-256-black',
        variantName: '256 GB · Space Black',
        attributes: {
          color: 'Space Black',
          storage: '256 GB',
        },
        mrp: 94999,
        sellingPrice: 89999,
        discountPercentage: 5,
        inStock: true,
      },
      {
        id: 'iphone-17-128-white',
        variantName: '128 GB · Silver Pearl',
        attributes: {
          color: 'Silver Pearl',
          storage: '128 GB',
        },
        mrp: 84999,
        sellingPrice: 79999,
        discountPercentage: 6,
        inStock: true,
      },
      {
        id: 'iphone-17-256-white',
        variantName: '256 GB · Silver Pearl',
        attributes: {
          color: 'Silver Pearl',
          storage: '256 GB',
        },
        mrp: 94999,
        sellingPrice: 89999,
        discountPercentage: 5,
        inStock: true,
      },
      {
        id: 'iphone-17-512-blue',
        variantName: '512 GB · Deep Ultramarine',
        attributes: {
          color: 'Deep Ultramarine',
          storage: '512 GB',
        },
        mrp: 114999,
        sellingPrice: 109999,
        discountPercentage: 4,
        inStock: true,
      }
    ],
    availableEmiTenures: [3, 6, 9, 12, 24, 36],
    badges: ['0% No-Cost EMI', 'Zero Downpayment', 'Mutual Fund Backed']
  },
  {
    id: 'pixel-10-pro',
    name: 'Google Pixel 10 Pro',
    brand: 'Google',
    category: 'smartphones',
    categoryName: 'Smartphones',
    tagline: 'Gemini Pro built-in with next-gen computational photography.',
    description: 'Engineered by Google, Pixel 10 Pro features the Tensor G5 chip, pro triple-lens system with 30x Super Res Zoom, and on-device multimodal AI capabilities. Backed by your mutual fund portfolio for zero upfront cost.',
    rating: 4.8,
    reviewCount: 980,
    primaryImageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 106999,
    startingEmiAmount: 4458,
    minTenureMonths: 6,
    maxTenureMonths: 36,
    features: [
      'Google Tensor G5 AI Processor',
      'Triple pro rear cameras with 5x telephoto',
      'Super Actua LTPO OLED (up to 3000 nits peak)',
      'Gemini Advanced bundled for 1 year',
      '7 years of guaranteed OS & security updates'
    ],
    specs: {
      'Display': '6.7-inch Super Actua LTPO OLED, 1-120Hz',
      'Processor': 'Google Tensor G5 + Titan M2 security',
      'Camera': '50MP Wide + 48MP Quad PD Telephoto + 48MP Ultra-wide',
      'Battery': '5050 mAh with 35W Fast Charging',
      'Build': 'Polished Aluminum frame with Matte glass back',
      'OS': 'Android 15'
    },
    variants: [
      {
        id: 'pixel-10-pro-128-obsidian',
        variantName: '128 GB · Obsidian',
        attributes: {
          color: 'Obsidian Black',
          storage: '128 GB',
        },
        mrp: 114999,
        sellingPrice: 106999,
        discountPercentage: 7,
        inStock: true,
      },
      {
        id: 'pixel-10-pro-256-porcelain',
        variantName: '256 GB · Porcelain',
        attributes: {
          color: 'Porcelain White',
          storage: '256 GB',
        },
        mrp: 124999,
        sellingPrice: 116999,
        discountPercentage: 6,
        inStock: true,
      },
      {
        id: 'pixel-10-pro-512-hazel',
        variantName: '512 GB · Hazel Green',
        attributes: {
          color: 'Hazel Green',
          storage: '512 GB',
        },
        mrp: 139999,
        sellingPrice: 129999,
        discountPercentage: 7,
        inStock: true,
      }
    ],
    availableEmiTenures: [6, 12, 18, 24, 36],
    badges: ['0% Interest', 'Zero Foreclosure', 'Keep MF Returns']
  },
  {
    id: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    categoryName: 'Smartphones',
    tagline: 'Titanium durability with integrated S Pen and Galaxy AI.',
    description: 'The definitive Android flagship. Equipped with Snapdragon 8 Elite, a groundbreaking 200MP camera system, anti-reflective Gorilla Armor glass, and seamless multi-tasking.',
    rating: 4.9,
    reviewCount: 1840,
    primaryImageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 129999,
    startingEmiAmount: 5416,
    minTenureMonths: 6,
    maxTenureMonths: 36,
    features: [
      'Snapdragon 8 Elite for Galaxy',
      'Built-in S Pen with air gestures',
      '200MP Quad Telephoto with 100x Space Zoom',
      'Corning Gorilla Armor anti-reflective glass',
      'Full Galaxy AI suite with live translation'
    ],
    specs: {
      'Display': '6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz',
      'Processor': 'Snapdragon 8 Elite (3nm)',
      'Camera': '200MP Main + 50MP 5x Periscope + 10MP 3x + 50MP Ultrawide',
      'Battery': '5000 mAh with 45W Super Fast Charging',
      'Build': 'Grade 5 Titanium frame',
      'OS': 'One UI 7 on Android 15'
    },
    variants: [
      {
        id: 's25-ultra-256-gray',
        variantName: '256 GB · Titanium Gray',
        attributes: {
          color: 'Titanium Gray',
          storage: '256 GB',
          ram: '12 GB',
        },
        mrp: 139999,
        sellingPrice: 129999,
        discountPercentage: 7,
        inStock: true,
      },
      {
        id: 's25-ultra-512-black',
        variantName: '512 GB · Titanium Black',
        attributes: {
          color: 'Titanium Black',
          storage: '512 GB',
          ram: '12 GB',
        },
        mrp: 154999,
        sellingPrice: 144999,
        discountPercentage: 6,
        inStock: true,
      },
      {
        id: 's25-ultra-1tb-silver',
        variantName: '1 TB · Titanium Silver',
        attributes: {
          color: 'Titanium Silver',
          storage: '1 TB',
          ram: '16 GB',
        },
        mrp: 179999,
        sellingPrice: 169999,
        discountPercentage: 6,
        inStock: true,
      }
    ],
    availableEmiTenures: [6, 12, 18, 24, 36],
    badges: ['0% No-Cost EMI', 'Zero Downpayment', 'Instant Approval']
  },
  {
    id: 'macbook-pro-m3',
    name: 'Apple MacBook Pro 14" (M3 Pro)',
    brand: 'Apple',
    category: 'laptops',
    categoryName: 'Laptops',
    tagline: 'Mind-blowing performance with Liquid Retina XDR.',
    description: 'Designed for coders, designers, and creators. The M3 Pro chip delivers extreme efficiency and up to 22 hours of battery life. Keep your capital invested in high-yield mutual funds while getting your dream machine today.',
    rating: 4.9,
    reviewCount: 820,
    primaryImageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 169900,
    startingEmiAmount: 7079,
    minTenureMonths: 6,
    maxTenureMonths: 36,
    features: [
      'Apple M3 Pro 11-core CPU, 14-core GPU',
      '14.2-inch Liquid Retina XDR with 1000 nits sustained brightness',
      'Hardware-accelerated ray tracing and mesh shading',
      'Six-speaker sound system with force-cancelling woofers',
      'Up to 22 hours battery life'
    ],
    specs: {
      'Display': '14.2-inch Liquid Retina XDR (3024x1964), 120Hz ProMotion',
      'Processor': 'Apple M3 Pro chip',
      'Memory': '18 GB Unified Memory',
      'Storage': '512 GB / 1 TB SSD',
      'Ports': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, Headphone jack',
      'Weight': '1.61 kg'
    },
    variants: [
      {
        id: 'mbp-14-m3pro-512-black',
        variantName: '18GB RAM · 512GB SSD · Space Black',
        attributes: {
          color: 'Space Black',
          storage: '512 GB SSD',
          ram: '18 GB Unified',
        },
        mrp: 189900,
        sellingPrice: 169900,
        discountPercentage: 11,
        inStock: true,
      },
      {
        id: 'mbp-14-m3pro-1tb-silver',
        variantName: '18GB RAM · 1TB SSD · Silver',
        attributes: {
          color: 'Silver',
          storage: '1 TB SSD',
          ram: '18 GB Unified',
        },
        mrp: 209900,
        sellingPrice: 194900,
        discountPercentage: 7,
        inStock: true,
      }
    ],
    availableEmiTenures: [6, 12, 18, 24, 36],
    badges: ['0% Interest', 'Tax Deductible', 'Pledge & Shop']
  },
  {
    id: 'oneplus-15',
    name: 'OnePlus 15 Flagship',
    brand: 'OnePlus',
    category: 'smartphones',
    categoryName: 'Smartphones',
    tagline: 'Extreme speed meets 4th Gen Hasselblad Camera.',
    description: 'Fast, smooth, and tuned for peak performance. Features 100W SUPERVOOC charging, Sony LYT-900 flagship sensor, and 120Hz ProXDR display with Aqua Touch.',
    rating: 4.7,
    reviewCount: 650,
    primaryImageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 64999,
    startingEmiAmount: 2708,
    minTenureMonths: 3,
    maxTenureMonths: 24,
    features: [
      'Snapdragon 8 Gen 4 with Trinity Engine',
      '4th Gen Hasselblad Camera for Mobile',
      '100W SUPERVOOC + 50W AIRVOOC wireless',
      'Dual Cryo-velocity VC cooling chamber',
      'OxygenOS 15 with fluid animations'
    ],
    specs: {
      'Display': '6.82-inch 2K 120Hz ProXDR AMOLED',
      'Processor': 'Snapdragon 8 Gen 4',
      'Camera': '50MP LYT-900 + 64MP 3x Periscope + 48MP Ultra-wide',
      'Battery': '5400 mAh Dual-cell battery',
      'Charging': '100W Wired (0-100% in 26 mins)',
      'OS': 'OxygenOS 15'
    },
    variants: [
      {
        id: 'op-15-256-green',
        variantName: '12GB RAM · 256GB · Emerald Green',
        attributes: {
          color: 'Emerald Green',
          storage: '256 GB',
          ram: '12 GB',
        },
        mrp: 69999,
        sellingPrice: 64999,
        discountPercentage: 7,
        inStock: true,
      },
      {
        id: 'op-15-512-black',
        variantName: '16GB RAM · 512GB · Silky Black',
        attributes: {
          color: 'Silky Black',
          storage: '512 GB',
          ram: '16 GB',
        },
        mrp: 76999,
        sellingPrice: 71999,
        discountPercentage: 6,
        inStock: true,
      }
    ],
    availableEmiTenures: [3, 6, 9, 12, 18, 24],
    badges: ['0% No-Cost EMI', 'Instant Approval', 'Mutual Fund Backed']
  },
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Noise Cancelling',
    brand: 'Sony',
    category: 'audio',
    categoryName: 'Audio & Wearables',
    tagline: 'Industry-leading noise cancellation with two processors and 8 mics.',
    description: 'Immerse yourself in pure studio acoustics. Auto NC Optimizer, crystal clear hands-free calls, and up to 30 hours battery life. The benchmark in premium wireless audio.',
    rating: 4.8,
    reviewCount: 2150,
    primaryImageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 28990,
    startingEmiAmount: 2415,
    minTenureMonths: 3,
    maxTenureMonths: 12,
    features: [
      'Integrated Processor V1 + HD Noise Cancelling Processor QN1',
      'Specially designed 30mm carbon fiber driver unit',
      'Speak-to-Chat & Multipoint connection (2 devices)',
      '30-hour battery life with 3-minute quick charge',
      'Ultra-comfortable lightweight soft fit leather'
    ],
    specs: {
      'Driver Unit': '30mm, Dome type (CCAW Voice coil)',
      'Noise Cancellation': 'Dual processor, 8 microphones',
      'Battery': '30 hours (NC ON), 40 hours (NC OFF)',
      'Bluetooth': 'Version 5.2 (LDAC, AAC, SBC)',
      'Weight': '250 grams'
    },
    variants: [
      {
        id: 'sony-xm5-black',
        variantName: 'Matte Black',
        attributes: {
          color: 'Matte Black',
        },
        mrp: 34990,
        sellingPrice: 28990,
        discountPercentage: 17,
        inStock: true,
      },
      {
        id: 'sony-xm5-silver',
        variantName: 'Platinum Silver',
        attributes: {
          color: 'Platinum Silver',
        },
        mrp: 34990,
        sellingPrice: 28990,
        discountPercentage: 17,
        inStock: true,
      },
      {
        id: 'sony-xm5-blue',
        variantName: 'Midnight Blue',
        attributes: {
          color: 'Midnight Blue',
        },
        mrp: 34990,
        sellingPrice: 29990,
        discountPercentage: 14,
        inStock: true,
      }
    ],
    availableEmiTenures: [3, 6, 9, 12],
    badges: ['0% Interest', 'Zero Downpayment', 'Instant Approval']
  },
  {
    id: 'apple-watch-s10',
    name: 'Apple Watch Series 10',
    brand: 'Apple',
    category: 'wearables',
    categoryName: 'Audio & Wearables',
    tagline: 'Thinnest Apple Watch ever with our biggest display.',
    description: 'Faster charging, water temperature sensor for snorkeling, and advanced sleep apnea detection. Stay connected, active, and healthy with convenient monthly micro-installments.',
    rating: 4.8,
    reviewCount: 430,
    primaryImageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 46900,
    startingEmiAmount: 3908,
    minTenureMonths: 3,
    maxTenureMonths: 12,
    features: [
      'Thinnest design with wide-angle OLED display',
      'Sleep apnea notifications & depth gauge',
      'S10 SiP with 4-core Neural Engine',
      'Fast charge to 80% in about 30 minutes',
      '50m water resistant and swim-proof'
    ],
    specs: {
      'Case Size': '46mm / 42mm',
      'Display': 'Wide-angle OLED, up to 2000 nits',
      'Sensors': 'Electrical heart sensor, ECG, SpO2, Temperature',
      'Battery': 'Up to 18 hours normal use, 36 hours low power',
      'Water Resistance': '50 meters'
    },
    variants: [
      {
        id: 'aw-s10-46-jetblack',
        variantName: '46mm GPS · Jet Black Aluminum',
        attributes: {
          color: 'Jet Black Aluminum',
          size: '46mm',
        },
        mrp: 49900,
        sellingPrice: 46900,
        discountPercentage: 6,
        inStock: true,
      },
      {
        id: 'aw-s10-46-rosegold',
        variantName: '46mm GPS · Rose Gold Aluminum',
        attributes: {
          color: 'Rose Gold Aluminum',
          size: '46mm',
        },
        mrp: 49900,
        sellingPrice: 46900,
        discountPercentage: 6,
        inStock: true,
      }
    ],
    availableEmiTenures: [3, 6, 9, 12],
    badges: ['0% No-Cost EMI', 'Zero Downpayment', 'Mutual Fund Backed']
  },
  {
    id: 'ipad-air-m2',
    name: 'Apple iPad Air 11" (M2)',
    brand: 'Apple',
    category: 'tablets',
    categoryName: 'Tablets',
    tagline: 'Fresh Air. Supercharged by the Apple M2 chip.',
    description: 'Incredible speed for creative work, studying, or entertainment. Features landscape front camera, Apple Pencil Pro support, and blazing Wi-Fi 6E.',
    rating: 4.9,
    reviewCount: 520,
    primaryImageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
    ],
    startingPrice: 59900,
    startingEmiAmount: 2495,
    minTenureMonths: 6,
    maxTenureMonths: 24,
    features: [
      'Apple M2 chip with 8-core CPU and 10-core GPU',
      '11-inch Liquid Retina display with P3 wide color and True Tone',
      'Landscape 12MP Center Stage front camera',
      'Works with Apple Pencil Pro and Magic Keyboard',
      'All-day battery life with USB-C connector'
    ],
    specs: {
      'Display': '11-inch Liquid Retina LED-backlit Multi-Touch',
      'Processor': 'Apple M2 chip, 16-core Neural Engine',
      'Storage': '128 GB / 256 GB',
      'Cameras': '12MP Wide back camera, 12MP Ultra Wide front camera',
      'Audio': 'Landscape stereo speakers'
    },
    variants: [
      {
        id: 'ipad-air-11-128-spacegray',
        variantName: '128 GB · Space Gray',
        attributes: {
          color: 'Space Gray',
          storage: '128 GB',
        },
        mrp: 64900,
        sellingPrice: 59900,
        discountPercentage: 8,
        inStock: true,
      },
      {
        id: 'ipad-air-11-256-blue',
        variantName: '256 GB · Starlight Blue',
        attributes: {
          color: 'Starlight Blue',
          storage: '256 GB',
        },
        mrp: 74900,
        sellingPrice: 69900,
        discountPercentage: 7,
        inStock: true,
      }
    ],
    availableEmiTenures: [6, 12, 18, 24],
    badges: ['0% Interest', 'Instant Approval', 'Mutual Fund Backed']
  }
];
