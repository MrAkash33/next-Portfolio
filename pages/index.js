import { Container, Grid, Card } from "@mui/material";
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
                <div className="" style={{ textAlign: 'center' }}>
                  <li>
                    <div class="wrapper">
                      <a href="#" class="fancy-button1 bg-gradient2"><span><i class="fa fa-wheelchair-alt"></i>Hire me</span></a>
                    </div>
                  </li>
                </div>
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
        <Container>
          <Grid container style={{ marginTop: '50px' }}>
            <Grid item xs={5} style={{margin:'auto',position:'relative'}}>
              <div className="myawesomeBx">
                <h2>My awesome</h2>
                <h1>services</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </Grid>
            <Grid item xs={7}>
              <Container>
                <Grid container>
                  <Grid item xs={6} className="DesignBx1" >
                    <div className="DesignBx">
                      <h1>Design</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <button>Learn More1</button>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="DesignBx">
                      <h1>Design</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <button>Learn More2</button>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="DesignBx">
                      <h1>Design</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <button>Learn More3</button>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}
