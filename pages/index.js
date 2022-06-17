import { Container, Grid } from "@mui/material";
import Image from 'next/image'
import MyImage from '../public/mrpatsy1.png'
export default function Home() {
  return (
    <>  
      <div>
      <Grid container spacing={2}>
      <Grid item xs={7}>
        <div className="title">
          <h1>Hy! I Am <br></br>Akash</h1>
        </div>
      </Grid>
      <Grid item xs={5}>
      <Image src={MyImage}   layout="responsive" />
      </Grid>
      </Grid>
      </div>
    </>
  )
}
