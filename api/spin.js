const promos = [
    { promo: "$500 Off", code: "SAVE500" },
    { promo: "Free Upgrade", code: "UPGRADEFREE" },
    { promo: "Free Roof Inspection", code: "ROOFME" },
    { promo: "Free Smart Thermostat", code: "COOLTECH" },
    { promo: "10% Off Add-ons", code: "ADD10" },
  ];
  
  let usedCustomers = {}; // In-memory store (swap with real DB later)
  
  module.exports = (req, res) => {
    const { name, address } = req.query;
  
    if (!name || !address) {
      res.status(400).json({ error: "Missing name or address." });
      return;
    }
  
    const customerKey = `${name.toLowerCase()}-${address.toLowerCase()}`;
  
    if (usedCustomers[customerKey]) {
      res.status(400).json({ error: "Customer has already spun!" });
      return;
    }
  
    const selectedPromo = promos[Math.floor(Math.random() * promos.length)];
    usedCustomers[customerKey] = selectedPromo;
  
    res.status(200).json({ promo: selectedPromo });
  };
  