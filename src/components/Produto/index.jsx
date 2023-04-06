import {  Container, IconButton, Typography } from '@mui/material';
import {Add, Remove} from '@mui/icons-material'


function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {
  return (
      <Container sx={{
        bgcolor:'red'
      }}>
        <div>
          
          <p>
            {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
          </p>
        </div>
        <div>
          <IconButton
            color="secondary"
          >
            <Remove />
          </IconButton>
          <IconButton>
            <Add />
          </IconButton>
        </div>
      </Container>
  )
}

export default Produto