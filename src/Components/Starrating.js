import React, {useState} from 'react'
import { Stack,Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'



function Starrating() {
const [value,setValue]=useState(0);
console.log({value})
  
  return <>
<Stack spacing={1}>
    <Rating
    value={value}
    onChange={(e,val)=>setValue(val)}
    icon={<FavoriteIcon fontSize='inherit' color='error'/>}
    emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
    />

</Stack>
  </>
}

export default Starrating