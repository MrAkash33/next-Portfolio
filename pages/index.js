import { Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <>  
      <Container>
      <Grid container spacing={2}>
      <Grid item xs={6}>
        <div className="title">
          <h1>Hy! I Am <br></br>Akash</h1>
        </div>
      </Grid>
      <Grid item xs={6}>
      <h2>Hii</h2>
      </Grid>
      </Grid>
      </Container>
    </>
  )
}
