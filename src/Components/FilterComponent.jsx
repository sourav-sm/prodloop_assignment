import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select,Typography,Paper } from '@mui/material';
import AndroidCard from './SouceComponents/Android';
import AppleCard from './SouceComponents/Apple';
import GoogleMapsCard from './SouceComponents/GoogleMaps';
import DubaiCard from './CityComponents/DubaiCard';
import AbuDhabiCard from './CityComponents/AbuDhabi';
import SharjahCard from './CityComponents/Sharjah';
import NegativeCard from './SentimentComponents/Negative';
import NeutralCard from './SentimentComponents/Neutral';
import PositiveCard from './SentimentComponents/Positive';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
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
        <div className='flex justify-between border-b-2 border-indigo-200'>
            <Typography variant="h5" className="text-blue-600">
              Filter
            </Typography>
            <ExpandCircleDownIcon className="text-blue-500" fontSize="medium" />
        </div>
        
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
  {/* Render cards only if all filters are selected */}
  {sourceFilter.includes('Android') && cityFilter.includes('Dubai') && sentimentFilter.includes('Positive') ? (
    <div className="space-y-4">
      <AndroidCard onClick={() => handleCardClick('AndroidCard')}/>
      <DubaiCard onClick={() => handleCardClick('DubaiCard')}/>
      <PositiveCard onClick={() => handleCardClick('PositiveCard')}/>
    </div>
  ) : sourceFilter.includes('Android') && cityFilter.includes('Dubai') ? (
    <div className="space-y-4">
      <AndroidCard onClick={() => handleCardClick('AndroidCard')}/>
      <DubaiCard onClick={() => handleCardClick('DubaiCard')}/>
    </div>
  ) : sourceFilter.includes('Android') ? (
    <div>
      <AndroidCard onClick={() => handleCardClick('AndroidCard')} />
    </div>
  ) : null}

  {/* Other independent conditions */}
  {sourceFilter.includes('Apple') && (
    <div>
      <AppleCard onClick={() => handleCardClick('AppleCard')}/>
    </div>
  )}

  {sourceFilter.includes('Google Maps') && (
    <div>
      <GoogleMapsCard onClick={() => handleCardClick('GoogleMapsCard')}/>
    </div>
  )}

  {cityFilter.includes('Dubai') && !sourceFilter.includes('Android') && (
    <div>
      <DubaiCard onClick={() => handleCardClick('DubaiCard')}/>
    </div>
  )}

  {cityFilter.includes('Abu Dhabi') && (
    <div>
      <AbuDhabiCard onClick={() => handleCardClick('AbuDhabiCard')}/>
    </div>
  )}

  {cityFilter.includes('Sharjah') && (
    <div>
      <SharjahCard onClick={() => handleCardClick('SharjahCard')}/>
    </div>
  )}

  {sentimentFilter.includes('Positive') && !sourceFilter.includes('Android') && (
    <div>
      <PositiveCard onClick={() => handleCardClick('PositiveCard')}/>
    </div>
  )}

  {sentimentFilter.includes('Negative') && (
    <div>
      <NegativeCard onClick={() => handleCardClick('NegativeCard')}/>
    </div>
  )}

  {sentimentFilter.includes('Neutral') && (
    <div>
      <NeutralCard onClick={() => handleCardClick('NeutralCard')}/>
    </div>
  )}
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

export default FilterComponent;

