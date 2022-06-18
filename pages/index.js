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
                <h1>Hy! I Am <br></br> <span style={{ color: '#fca61f' }}>Akash</span></h1>
                <h3 style={{ textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
              </Container>
            </div>
          </Grid>
          <Grid item xs={4} className="mypic">
            <div className="mypic4">
              <div className="mypic3">
                <div className="mypic2">
                  <Image src={MyImage} layout="responsive" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      <section>

      </section>
    </>
  )
}
