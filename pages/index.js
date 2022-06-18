import { Container, Grid } from "@mui/material";
import Image from 'next/image'
import MyImage from '../public/mrpatsy1.png'
export default function Home() {
  return (
    <>
      <section>
        <Grid container spacing={2}>
          <Grid item xs={8} style={{ margin: 'auto' }} className="sideWrapper">
            <div className="title">
              <Container>
                <h1>Hy ! I Am <br></br> <span style={{color:'#fca61f'}}>Akash</span></h1>
                <h3 style={{ textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br> when an unknown printer took a galley of type and scrambled it to make a <br></br> type specimen book.  It has survived not only five centuries.</h3>
              </Container>
            </div>
          </Grid>
          <Grid item xs={4} className="mypic">
            <Image src={MyImage} layout="responsive" />
          </Grid>
        </Grid>
      </section>
      <section>

      </section>
    </>
  )
}
