'use client';

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { FormEvent, useRef } from 'react';

import { SearchBoxPropsType } from '@/features/users/types';

// Methods
const _normalizeInput = (value: string) => value.trim().replace(/\s+/g, ' ');

export const SearchBox = ({ filterDataBySearch }: SearchBoxPropsType) => {
  const formRef = useRef<HTMLFormElement>(null);
  const searchIdInputRef = useRef<HTMLInputElement>(null);
  const searchWordsInputRef = useRef<HTMLInputElement>(null);

  const handleClickClean = () => {
    filterDataBySearch({ filterId: '', filterWords: '' }); // Clean filters
    formRef.current?.reset(); // Reset form
  };

  const handleSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent submit action

    // Get inputs
    const { current: currentId } = searchIdInputRef;
    const { current: currentWords } = searchWordsInputRef;
    let filterId = '';
    let filterWords = '';

    // Normalize filter id
    if (currentId) {
      currentId.value = _normalizeInput(currentId.value);
      filterId = currentId.value;
    }

    // Normalize filter words
    if (currentWords) {
      currentWords.value = _normalizeInput(currentWords.value);
      filterWords = currentWords.value;
    }

    // Apply filters or reset search
    filterDataBySearch({ filterId, filterWords });
  };

  return (
    <Paper
      sx={{ display: 'flex', gap: 1, p: 2 }}
      component="form"
      ref={formRef}
      onSubmit={handleSubmitSearch}
    >
      <TextField
        name="search_id"
        label="Id"
        variant="outlined"
        inputProps={{ maxLength: 15 }}
        inputRef={searchIdInputRef}
      />

      <TextField
        name="search_words"
        label="Palabras"
        variant="outlined"
        inputProps={{ maxLength: 50 }}
        inputRef={searchWordsInputRef}
      />

      <Button type="submit" variant="outlined">
        <SearchIcon />
      </Button>

      <Button type="button" variant="outlined" onClick={handleClickClean}>
        <CleaningServicesIcon />
      </Button>
    </Paper>
  );
};
