import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

    const HOT_URL = "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const Cold_URL = "https://images.unsplash.com/photo-1431036101494-66a36de47def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={ info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : Cold_URL }
                    title="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature : <b>{info.temp}&deg;C</b></div>
                        <div>Humidity : <b>{info.humidity}</b></div>
                        <div>Min Temp : <b>{info.tempMin}&deg;C</b></div>
                        <div>Max Temp : <b>{info.tempMax}&deg;C</b></div>
                        <div>The weather is described as <b><i>{info.weather}</i></b> and fells-like <b>{info.feelsLike}&deg;C</b></div>
                    </Typography>
                </CardContent>

            </Card>

        </div>
    )
}