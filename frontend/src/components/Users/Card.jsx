import { Avatar, CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";

export default function Cards({user},{key}) {
  const theme = useTheme();
  return (
    <Card key={key}
      sx={{ display: "flex", width: 300, boxShadow: "1px 0 white", margin: 2, transition: 'all 0.3s',
        '&:hover': {
        transform: 'translateY(-5px)',
        cursor: 'pointer',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.19)' }, }}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`public/images/${user.picture}`}
        alt={user.picture}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", padding: 1 }}>
          <Typography component="div" variant="h6">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            user {user.id}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {user.age} ans
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
