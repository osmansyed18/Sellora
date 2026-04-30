const sampleListings = [
  // Cars
  {
    title: "2018 Honda Civic - Well Maintained",
    description:
      "Single owner, regular service history. 45,000 km driven. Excellent condition with new tires and battery installed last month.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1605816988064-bb8b5b3c3c3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 850000,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
  {
    title: "2020 Maruti Swift - Petrol",
    description:
      "Top model with all features. 25,000 km only. Insurance valid till 2026. Well maintained with service records.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 620000,
    location: "Bangalore, Karnataka",
    country: "India",
  },
  {
    title: "2019 Hyundai Creta - Diesel",
    description:
      "SX model with sunroof. 60,000 km. Company maintained. All original paint. Price slightly negotiable.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1150000,
    location: "Delhi, NCR",
    country: "India",
  },
  // Bikes
  {
    title: "2022 Royal Enfield Classic 350",
    description:
      "Gunmetal grey color. 8,000 km only. Single owner. Recently serviced. All documents clear.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 185000,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "2021 Yamaha R15 V4",
    description:
      "Racing blue color. 12,000 km. Well maintained with TCS and quickshifter. First owner.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 165000,
    location: "Chennai, Tamil Nadu",
    country: "India",
  },
  // Electronics - Laptops
  {
    title: "MacBook Pro 14-inch M2 Pro",
    description:
      "16GB RAM, 512GB SSD. 6 months old. Apple warranty till March 2026. Excellent condition with original box.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 165000,
    location: "Hyderabad, Telangana",
    country: "India",
  },
  {
    title: "Dell XPS 15 - Intel i7, RTX 3050",
    description:
      "32GB RAM, 1TB SSD. 1 year old. Under warranty. Perfect for gaming and video editing. Minor scratches on lid.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 95000,
    location: "Kolkata, West Bengal",
    country: "India",
  },
  // Mobiles
  {
    title: "iPhone 15 Pro 256GB - Natural Titanium",
    description:
      "2 months old. Bill and box available. Apple warranty intact. Screen protector applied since day one.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 122000,
    location: "Ahmedabad, Gujarat",
    country: "India",
  },
  {
    title: "Samsung S24 Ultra 512GB - Titanium Gray",
    description:
      "3 months old. S Pen included. Under Samsung warranty. With original accessories and box.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 108000,
    location: "Jaipur, Rajasthan",
    country: "India",
  },
  // Home Items - Furniture
  {
    title: "Solid Wood 6-Seater Dining Table",
    description:
      "Sheesham wood, 1 year old. Excellent condition. Moving sale. Includes 6 chairs with cushion seats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 28000,
    location: "Noida, Uttar Pradesh",
    country: "India",
  },
  {
    title: "LG 55-inch 4K Smart TV - OLED",
    description:
      "2023 model. Perfect display quality. Under warranty. Selling due to upgrade to 65-inch. Wall mount included.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 85000,
    location: "Gurgaon, Haryana",
    country: "India",
  },
  {
    title: "Samsung 656L Double Door Refrigerator",
    description:
      "Convertible 5-in-1. 2 years old. Working perfectly. Digital inverter technology. Frost free.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 45000,
    location: "Lucknow, Uttar Pradesh",
    country: "India",
  },
  // Fashion
  {
    title: "Michael Kors Handbag - Original",
    description:
      "Genuine leather, black color. Bought from US. Used twice. Comes with dust bag and authenticity card.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 18000,
    location: "Chandigarh",
    country: "India",
  },
  {
    title: "Nike Air Jordan 1 - Size UK 9",
    description:
      "Chicago colorway. Deadstock, never worn. Original box and receipt available. 100% authentic.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 22000,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
  // Books
  {
    title: "Complete Harry Potter Hardcover Set",
    description:
      "All 7 books in hardcover. Bloomsbury edition. Excellent condition. Minor shelf wear on box set.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Bangalore, Karnataka",
    country: "India",
  },
  {
    title: "CA Final Study Material - Full Set",
    description:
      "All subjects covered. Latest edition. Underlined important points. Includes practice manuals and revision notes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 8500,
    location: "Delhi, NCR",
    country: "India",
  },
  // Sports
  {
    title: "Yonex Astrox 99 Pro Badminton Racket",
    description:
      "4U weight, strung with BG80. Used for 3 months. Excellent condition. Original grip still on.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 12000,
    location: "Kochi, Kerala",
    country: "India",
  },
  {
    title: "Stryder Mountain Bike - 21 Speed",
    description:
      "29-inch wheels. 6 months old. Serviced regularly. Front suspension. Selling with helmet and lock.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 15000,
    location: "Pune, Maharashtra",
    country: "India",
  },
  {
    title: "Canon EOS 200D DSLR Camera",
    description:
      "With 18-55mm and 55-250mm lenses. 2 years old. Shutter count 8,000. With bag and memory card.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 42000,
    location: "Chennai, Tamil Nadu",
    country: "India",
  },
  // More Electronics
  {
    title: "Sony WH-1000XM5 Headphones",
    description:
      "6 months old. Under warranty. Excellent noise cancellation. With original case and cables. Silver color.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 22000,
    location: "Hyderabad, Telangana",
    country: "India",
  },
  {
    title: "iPad Air 5th Gen 256GB WiFi - Purple",
    description:
      "M1 chip. 8 months old. With Apple Pencil 2nd gen. Original box and charger included. No scratches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 58000,
    location: "Mumbai, Maharashtra",
    country: "India",
  },
];

module.exports = { data: sampleListings };
