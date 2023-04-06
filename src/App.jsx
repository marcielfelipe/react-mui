import { Button, Stack } from '@mui/material';
import Produto from './components/Produto';

export default function App() {

  return (
    <Stack>
      <Produto nome={'teste'}id={'1'}unidade={'un'}valor={400} foto={'https://github.com/marcielfelipe.png'}/>
    </Stack>
  )
}
