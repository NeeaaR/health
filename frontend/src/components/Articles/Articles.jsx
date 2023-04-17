import { Container, Typography, Box, CircularProgress, Divider, Avatar } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getArticle } from '../../actions/articles';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


export default function Article() {
  const { id } = useParams();

  const {
    articles: { article, loading }
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle(id));
  }, [dispatch], id);

  console.log(article)

  if (loading || article === null) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  const TitleStyle = {
    color: '#fff',
    fontFamily: ["Plus Jakarta Sans"],
    fontWeight: 'bold',
    fontSize: '2.5rem',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    textTransform: 'uppercase',
    textAlign: 'center',
    margin: '2rem 0',
  }

  const TextStyle = {
    color: '#fff',
    fontFamily: ["Plus Jakarta Sans"],
    fontSize: '1.2rem',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    width: '100%',
    textAlign: 'justify',
  }

  const avatarStyles = {
    width: '3rem',
    height: '3rem',
    marginRight: '1rem',
    borderRadius: '0.2rem',
  };

  const userStyles = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem',
    };
    
    const textStyles = {
    color: '#fff',
    fontFamily: ["Plus Jakarta Sans"],
    lineHeight: 1.5,
    marginBottom: '1rem',
    };
    
    const customBackgroundStyles = {
    backgroundImage: `url(/images/background/${article.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '25vh',
    width: '100%',
    };
    
    return (
    <Box sx={{ backgroundColor: ' #001E3C', minHeight: '100vh', position: 'relative' }}>
    <Navbar />
    <Container sx={{ py: 8 }}>
    <div style={customBackgroundStyles} />
    <Typography variant="h3" component="h1" gutterBottom sx={TitleStyle}>
    {article.title}
    </Typography>
    <Box sx={userStyles}>
    <Avatar src={`/images/${article.author.picture}`} alt={article.author.avatar} sx={avatarStyles} />
<Typography variant="body1" sx={textStyles}>
  <Link to={`/profil/doctor/${article.author.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    {article.author.first_name} {article.author.last_name}
  </Link>
</Typography>
    </Box>
    <Divider sx={{ marginTop: '1rem', marginBottom: '2rem', backgroundColor: 'white' }} />
    <Typography gutterBottom sx={TextStyle}>
    {article.content.split("\n").map((paragraph, index) => (
    <span key={index}>
    {paragraph}
    <br />
    </span>
    ))}
    </Typography>
    </Container>
    </Box>
    );
    }
