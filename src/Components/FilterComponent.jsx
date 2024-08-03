import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, Card, CardContent, Typography,Paper } from '@mui/material';
import AndroidCard from './SouceComponents/Android';
import AppleCard from './SouceComponents/Apple';
import GoogleMapsCard from './SouceComponents/GoogleMaps';
import DubaiCard from './CityComponents/DubaiCard';
import AbuDhabiCard from './CityComponents/AbuDhabi';
import SharjahCard from './CityComponents/Sharjah';
import NegativeCard from './SentimentComponents/Negative';
import NeutralCard from './SentimentComponents/Neutral';
import PositiveCard from './SentimentComponents/Positive';

import TaxonomyCard from './Taxonomy/TaxonomyCard';

const FilterComponent = () => {
  const [sourceFilter, setSourceFilter] = useState([]);
  const [cityFilter, setCityFilter] = useState([]);
  const [sentimentFilter, setSentimentFilter] = useState([]);
  
  const [showTaxonomyCard,setShowTaxonomyCard]=useState(false);
  const [taxonomyTitle, setTaxonomyTitle] = useState('');
  
  const handleCardClick = (title) => {
    setTaxonomyTitle(title);
    setShowTaxonomyCard(true);
  };

  const handleSourceChange = (e) => {
    setSourceFilter(e.target.value);
  };

  const handleCityChange = (e) => {
    setCityFilter(e.target.value);
  };

  const handleSentimentChange = (e) => {
    setSentimentFilter(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} className="p-6 mt-8 border-2 border-blue-700">
        <Typography variant="h5" className="text-blue-600 border-b-2 border-indigo-200 ">
          Filter
        </Typography>
        <div className='flex flex-wrap justify-between gap-4 mt-4'>
        <FormControl variant="outlined" className="w-full sm:w-[30%]">
            <InputLabel id="source-label" className='font-bold text-3xl'>Source</InputLabel>
            <Select
              labelId="source-label"
              multiple
              value={sourceFilter}
              onChange={handleSourceChange}
              label="Source"
              renderValue={(selected)=>selected.join(',')}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Android">Android</MenuItem>
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Google Maps">Google Maps</MenuItem>
            </Select>
          </FormControl>

          {/* City Filter */}
          
          <FormControl variant="outlined" className="w-full sm:w-[30%]">
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              multiple
              value={cityFilter}
              onChange={handleCityChange}
              label="City"
              renderValue={(selected)=>selected.join(',')}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Dubai">Dubai</MenuItem>
              <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
              <MenuItem value="Sharjah">Sharjah</MenuItem>
            </Select>
          </FormControl>

          {/* Sentiment Filter */}
          <FormControl variant="outlined" className="w-full sm:w-[30%]">
            <InputLabel id="sentiment-label">Sentiment</InputLabel>
            <Select
              labelId="sentiment-label"
              multiple
              value={sentimentFilter}
              onChange={handleSentimentChange}
              label="Sentiment"
              renderValue={(selected)=>selected.join(',')}  
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="Negative">Negative</MenuItem>
              <MenuItem value="Neutral">Neutral</MenuItem>
              <MenuItem value="Positive">Positive</MenuItem>
            </Select>
          </FormControl>
          </div>
         </Paper> 

      {/* Conditional Rendering of Cards and Taxonomies */}
      <div className="flex flex-wrap justify-between mt-8 gap-8">
        <div className={`flex-grow ${showTaxonomyCard ? 'sm:w-[70%]' : 'w-full'}`}>
          {sourceFilter.includes('Android') && cityFilter.includes('Dubai') && sentimentFilter.includes('Positive') && (
             <div className="space-y-4">
               <SourceCard />
               <DubaiCard />
               <PositiveCard />
             </div>
        )}

      {sourceFilter.includes('Android') && cityFilter.includes('Dubai') && (
          <div className="space-y-4">
            <AndroidCard />
            <DubaiCard />
          </div>
        )}

       {sourceFilter.includes('Android') && (
          <div>
            <AndroidCard onClick={() => handleCardClick('AndroidCard')} />
          </div>
        )}

        {sourceFilter.includes('Apple') && (
          <div>
            <AppleCard onClick={() => handleCardClick('AppleCard')}/>
          </div>
        )}

        {sourceFilter.includes('Google Maps') && (
          <div>
            <GoogleMapsCard />
          </div>
        )}

        {cityFilter.includes('Dubai') && (
          <div>
            <DubaiCard />
          </div>
        )}

        {cityFilter.includes('Abu Dhabi') && (
          <div>
            <AbuDhabiCard />
          </div>
        )}

        {cityFilter.includes('Sharjah') && (
          <div>
            <SharjahCard/>
          </div>
        )}

        {sentimentFilter.includes('Positive') && (
          <div>
            <PositiveCard />
          </div>
        )}

        {sentimentFilter.includes('Negative') && (
          <div>
            <NegativeCard />
          </div>
        )}

       {sentimentFilter.includes('Neutral') && (
          <div>
            <NeutralCard />
          </div>
        )}

        {/* Add more combinations based on your needs */}
      </div>

      {showTaxonomyCard && (
        <div className="w-full sm:w-[25%]">
          <TaxonomyCard title={taxonomyTitle} />
        </div>
      )}
      </div>
    </Container>
  );
};

// Example card components
const SourceCard = () => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardContent 
  sx={{
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      border:'2px solid #1e40af'
    }
  }}
>
  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#1a237e' }}>
    Overcharge Billing and Money on Hold
  </Typography>
  
  <Typography variant="body1" sx={{ mb:2, lineHeight: 1.6, color: '#37474f' }}>
    I have been charged for cars that were not filled and overcharged for cars 
    that were filled. The money on hold was never returned to my bank. They are 
    robbers — please don't use Cafu.
  </Typography>
  <div className='flex justify-between'>
  <Typography variant="caption" sx={{ color: '#78909c', fontStyle: 'italic' }}>
    16 Feb 2024
  </Typography>

  <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.5rem' }} />
  </div>
  
</CardContent>
  </Card>
);

const CityCard = () => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h6">City Card</Typography>
      <Typography>Details about the city...</Typography>
    </CardContent>
  </Card>
);

const SentimentCard = () => (
  <Card variant="outlined" sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h6">Sentiment Card</Typography>
      <Typography>Details about the sentiment...</Typography>
    </CardContent>
  </Card>
);

export default FilterComponent;

