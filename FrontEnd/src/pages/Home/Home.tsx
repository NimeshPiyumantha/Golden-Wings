import Header from "../../components/Header";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import background1Image from "../../assets/img/seaHotels.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <Card sx={{ mt: 1 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{ height: 380 }}
          image={background1Image}
        />
      </Card>
    </>
  );
}
