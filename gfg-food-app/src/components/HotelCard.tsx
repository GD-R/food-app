import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

import { IHotel } from './HotelReducer'

const HotelCard = (props:IHotel) => {
  return (
    <div className='relative my-16' key={props.id}>
      <Card className='w-[80%] my-2 static'>
          <CardActionArea>
              <CardMedia component="img" image={props.featured_image} 
                className=""
              />
              <CardContent>
                  <Typography>{props.name}</Typography>
                  <Typography>{props.cuisines}</Typography>
              </CardContent>
          </CardActionArea>
      </Card>
    </div>
  )
}

export default HotelCard
