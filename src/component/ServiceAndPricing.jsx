// ServiceAndPricing.jsx

import React from "react";

const ServiceAndPricing = ({
  bridalMakeup,
  airbrush,
  engagementMakeup,
  priceBridalMakeup,
  priceEngagementMakeup,
  setBridalMakeup,
  setAirbrush,
  setPriceBridalMakeup,
  setEngagementMakeup,
  setPriceEngagementMakeup,
  nextStep,
}) => {
  return (
    <div>
      <h2>Student Sign Up - Step 2</h2>
      <h2>Service & Pricing</h2>
      <h3>Bridal Makeup</h3>
      <label>
        Bridal Makeup
        <input type="checkbox" checked={bridalMakeup} onChange={() => setBridalMakeup(!bridalMakeup)} />
      </label>
      {bridalMakeup && (
        <>
        <div>
          <label>
            Airbrush
            <input type="checkbox" checked={airbrush} onChange={() => setAirbrush(!airbrush)} />
          </label>
          <input value={priceBridalMakeup} onChange={(e) => setPriceBridalMakeup(e.target.value)} type="text" placeholder="Price for Bridal Makeup" />
        </div>
          <div>
          <label>
          bridal HD
            <input type="checkbox" checked={bridalHD} onChange={() => setBridalHD(!bridalHD)} />
          </label>
          <input value={priceBridalMakeup} onChange={(e) => setPriceBridalMakeup(e.target.value)} type="text" placeholder="Price for Bridal Makeup" />
        </div>
          <div>
          <label>
            Airbrush
            <input type="checkbox" checked={bridalAirbrush} onChange={() => setBridalAirbrush(!bridalAirbrush)} />
          </label>
          <input value={priceBridalMakeup} onChange={(e) => setPriceBridalMakeup(e.target.value)} type="text" placeholder="Price for Bridal Makeup" />
        </div>  <div>
          <label>
          bridalCelebrity
            <input type="checkbox" checked={bridalCelebrity} onChange={() => setBridalCelebrity(!bridalCelebrity)} />
          </label>
          <input value={priceBridalMakeup} onChange={(e) => setPriceBridalMakeup(e.target.value)} type="text" placeholder="Price for Bridal Makeup" />
        </div>
          <div>
          <label>
          bridalSignature
            <input type="checkbox" checked={bridalSignature} onChange={() => setBridalSignature(!bridalSignature)} />
          </label>
          <input value={priceBridalMakeup} onChange={(e) => setPriceBridalMakeup(e.target.value)} type="text" placeholder="Price for Bridal Makeup" />
        </div>
        </>
      )}

      <h3>Engagement Makeup</h3>
      <label>
        Engagement Makeup
        <input type="checkbox" checked={engagementMakeup} onChange={() => setEngagementMakeup(!engagementMakeup)} />
      </label>
      {engagementMakeup && (
        <><div>
          <label>
          engagementHD
            <input type="checkbox" checked={engagementHD} onChange={() => setEngagementHD(!engagementHD)} />
          </label>
          <input value={priceEngagementMakeup} onChange={(e) => setPriceEngagementMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          engagementAirbrush
            <input type="checkbox" checked={engagementAirbrush} onChange={() => setEngagementAirbrush(!engagementAirbrush)} />
          </label>
          <input value={priceEngagementMakeup} onChange={(e) => setPriceEngagementMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          engagementCelebrity
            <input type="checkbox" checked={engagementCelebrity} onChange={() => setEngagementCelebrity(!engagementCelebrity)} />
          </label>
          <input value={priceEngagementMakeup} onChange={(e) => setPriceEngagementMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          engagementSignature
            <input type="checkbox" checked={engagementSignature} onChange={() => setEngagementSignature(!engagementSignature)} />
          </label>
          <input value={priceEngagementMakeup} onChange={(e) => setPriceEngagementMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
        </>
      )}
   <h3>Groom Makeup:</h3>
      <label>
        Engagement Makeup
        <input type="checkbox" checked={groomMakeups} onChange={() => setGroomMakeups(!groomMakeups)} />
      </label>
      {groomMakeups && (
        <>
        <div>
          <label>
          groomMakeup
            <input type="checkbox" checked={groomMakeup} onChange={() => setGroomMakeup(!groomMakeup)} />
          </label>
          <input value={priceGroomMakeup} onChange={(e) => setPriceGroomMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          groomBasic
            <input type="checkbox" checked={groomMakeup} onChange={() => setGroomMakeup(!groomMakeup)} />
          </label>
          <input value={priceGroomMakeup} onChange={(e) => setPriceGroomMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          groomHD
            <input type="checkbox" checked={groomHD} onChange={() => setGroomHD(!groomHD)} />
          </label>
          <input value={priceGroomMakeup} onChange={(e) => setPriceGroomMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>

        </>
      )}
<h3>family Makeup:</h3>
      <label>
      family Makeup
        <input type="checkbox" checked={familyMakeups} onChange={() => setFamilyMakeups(!familyMakeups)} />
      </label>
      {familyMakeups && (
        <>
        <div>
          <label>
          familyMakeup
            <input type="checkbox" checked={familyMakeup} onChange={() => setFamilyMakeup(!familyMakeup)} />
          </label>
          <input value={priceFamilyMakeup} onChange={(e) => setPriceFamilyMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          family Makeup Airbrush
            <input type="checkbox" checked={familyMakeupAirbrush} onChange={() => setFamilyMakeupAirbrush(!familyMakeupAirbrush)} />
          </label>
          <input value={priceFamilyMakeup} onChange={(e) => setPriceFamilyMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          familyMakeupHD
            <input type="checkbox" checked={familyMakeupHD} onChange={() => setFamilyMakeupHD(!familyMakeupHD)} />
          </label>
          <input value={priceFamilyMakeup} onChange={(e) => setPriceFamilyMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>

        </>
      )}
      <h3>Basic Makeup::</h3>
      <label>
      Basic Makeup
        <input type="checkbox" checked={familyMakeups} onChange={() => setFamilyMakeups(!familyMakeups)} />
      </label>
      {familyMakeups && (
        <>
        <div>
          <label>
          familyMakeup
            <input type="checkbox" checked={familyMakeup} onChange={() => setFamilyMakeup(!familyMakeup)} />
          </label>
          <input value={priceFamilyMakeup} onChange={(e) => setPriceFamilyMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          family Makeup Airbrush
            <input type="checkbox" checked={familyMakeupAirbrush} onChange={() => setFamilyMakeupAirbrush(!familyMakeupAirbrush)} />
          </label>
          <input value={priceFamilyMakeup} onChange={(e) => setPriceFamilyMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>
          <div>
          <label>
          familyMakeupHD
            <input type="checkbox" checked={familyMakeupHD} onChange={() => setFamilyMakeupHD(!familyMakeupHD)} />
          </label>
          <input value={priceFamilyMakeup} onChange={(e) => setPriceFamilyMakeup(e.target.value)} type="text" placeholder="Price for Engagement Makeup" />
          </div>

        </>
      )}
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default ServiceAndPricing;
