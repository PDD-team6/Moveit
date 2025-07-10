const express = require('express');
const path = require('path');
const cors = require('cors'); // ✅ ADD THIS
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3000;

// ✅ Enable CORS (allow all origins for now)
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ✅ Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ✅ Booking endpoint
app.post('/api/book', async (req, res) => {
  console.log('📥 Received form data:', req.body);

  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert([{
        pickup: req.body.pickup,
        delivery: req.body.delivery,
        date: req.body.date,
        time: req.body.time,
        distance: req.body.distance,
        cargo_type: req.body.cargoType,
        weight: req.body.weight,
        length: req.body.length,
        width: req.body.width,
        height: req.body.height,
        requirements: req.body.requirements,
        truck_selection: req.body.truckSelection,
        special_features: req.body.specialFeatures,
        price_min: req.body.priceMin,
        price_max: req.body.priceMax,
        bidding_duration: req.body.biddingDuration,
        allow_counter_offers: req.body.allowCounterOffers
      }]);

    if (error) {
      console.error('❌ Supabase insert error:', error);
      return res.status(500).json({ message: 'Error saving booking' });
    }

    console.log('✅ Supabase insert success:', data);
    res.json({ message: 'Booking saved successfully!' });
  } catch (err) {
    console.error('❌ Server crash:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
