import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Section from './Section';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../actions/articles';
import { useEffect } from 'react';


export default function Cards() {
  const {
    articles: { articles, loading }
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <Box elevation={2} sx={{ minWidth: 275 , marginLeft: '45px', marginRight: '45px', position: 'relative', top: '-50px'}}>
      <Card variant="outlined" sx={{ borderRadius: '10px'}}>
        {articles.map((article, index) => (
          <div key={index} data-aos="fade-up">
            <Section articles={article}/>
          </div>
        ))}
      </Card>
    </Box>
  );
}
