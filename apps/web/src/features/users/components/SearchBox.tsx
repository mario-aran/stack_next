'use client';

import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import { useSearchBox } from '@/features/users/hooks';

export const SearchBox = () => {
  const {
    formRef,
    searchIdInputRef,
    searchWordsInputRef,
    handleSubmitSearch,
    handleClickClean,
  } = useSearchBox();

  return (
    <Paper
      sx={{ display: 'flex', gap: 1, p: 3 }}
      component="form"
      ref={formRef}
      onSubmit={handleSubmitSearch}
    >
      <TextField
        name="search_id"
        label="Id"
        variant="outlined"
        inputProps={{ maxLength: 50 }}
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
