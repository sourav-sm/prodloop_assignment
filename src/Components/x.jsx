import React, { useState } from 'react';

const FilterComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState(''); // State to track selected filter

  // Function to handle filter change
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="mr-2">Filter by:</label>
        <select 
          value={selectedFilter}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Select</option>
          <option value="source">Source</option>
          <option value="city">City</option>
          <option value="sentiment">Sentiment</option>
        </select>
      </div>

      {/* Conditionally render cards and taxonomies */}
      {selectedFilter === 'source' && (
        <div>
          <SourceCard />
          <SourceTaxonomy />
        </div>
      )}

      {selectedFilter === 'city' && (
        <div>
          <CityCard />
          <CityTaxonomy />
        </div>
      )}

      {selectedFilter === 'sentiment' && (
        <div>
          <SentimentCard />
          <SentimentTaxonomy />
        </div>
      )}
    </div>
  );
};

// Example card components
const SourceCard = () => (
  <div className="p-4 border rounded shadow mb-4">
    <h3 className="text-lg font-bold">Source Card</h3>
    <p>Details about the source...</p>
  </div>
);

const CityCard = () => (
  <div className="p-4 border rounded shadow mb-4">
    <h3 className="text-lg font-bold">City Card</h3>
    <p>Details about the city...</p>
  </div>
);

const SentimentCard = () => (
  <div className="p-4 border rounded shadow mb-4">
    <h3 className="text-lg font-bold">Sentiment Card</h3>
    <p>Details about the sentiment...</p>
  </div>
);

// Example taxonomy components
const SourceTaxonomy = () => (
  <div className="p-4 border rounded shadow">
    <h3 className="text-lg font-bold">Source Taxonomy</h3>
    <p>Taxonomy related to the source...</p>
  </div>
);

const CityTaxonomy = () => (
  <div className="p-4 border rounded shadow">
    <h3 className="text-lg font-bold">City Taxonomy</h3>
    <p>Taxonomy related to the city...</p>
  </div>
);

const SentimentTaxonomy = () => (
  <div className="p-4 border rounded shadow">
    <h3 className="text-lg font-bold">Sentiment Taxonomy</h3>
    <p>Taxonomy related to the sentiment...</p>
  </div>
);

export default FilterComponent;
