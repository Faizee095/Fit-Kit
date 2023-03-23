import { Stack } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Premium = () => {
  return (
    <Stack
      // direction="row"
      sx={{
        mt: { lg: "96px", xs: "60px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:{lg :'row' ,md:'row' , sm:'column'}
      }}
    >
      <Card
        sx={{
          minWidth: 320,
          height: 400,
          mr: "70px",
          mt:'40px',
          backgroundColor: "#FFA500",
          borderRadius:'20px',
          boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            List of Exercises
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            Body Mass Index
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mb: "8px", textDecoration: "line-through" }}
          >
            Calory Calculator
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mb: "8px", textDecoration: "line-through" }}
          >
            Diet Plan
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mb: "8px", textDecoration: "line-through" }}
          >
            Workout Plan
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mb: "8px", textDecoration: "line-through" }}
          >
            Personal Trainer
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mb: "8px", textDecoration: "line-through" }}
          >
            Custom Exercises
          </Typography>
        </CardContent>
        <Button sx={{position:'relative',left:'70px',fontSize:'20px',borderRadius:'10px',color:'white',border:'5px' ,backgroundColor:' brown'}}>0$ per month</Button>
      </Card>

      <Card
        sx={{
          minWidth: 320,
          height: 400,
          mr: "70px",
          mt:'40px',
          backgroundColor: "#FFA500",
          borderRadius:'20px',
          boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px'
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            List of Exercises
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            Body Mass Index
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            Calory Calculator
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            Diet Plan
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            Workout Plan
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            Personal Trainer
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
            Custom Exercises
          </Typography>
        </CardContent>
        <Button sx={{position:'relative',left:'70px',fontSize:'20px',borderRadius:'10px',color:'white',border:'5px' ,backgroundColor:' brown'}}>10$ per month</Button>
      </Card>
    </Stack>
  );
};

export default Premium;
