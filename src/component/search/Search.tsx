import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './search.scss';

export function Search() {
  const [value, setValue] = useState('');
  const handleSearch = (term: string) => {
    setValue(term);
  };

  return (
    <div className="contact_search">
      <TextField
        className="contact_search_input"
        id="outlined-basic"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        label="Search..."
        variant="outlined"
      />
    </div>
  );
}
