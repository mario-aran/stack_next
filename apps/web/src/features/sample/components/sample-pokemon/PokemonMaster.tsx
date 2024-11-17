import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface DataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

export const PokemonMaster = async () => {
  const data = (await fetch(ENDPOINT).then((res) => res.json())) as DataType;
  const { results } = data;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map(({ name, url }) => (
            <TableRow key={url}>
              <TableCell>{name}</TableCell>
              <TableCell>{url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
