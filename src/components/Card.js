import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard(info) {
    const [data, setData] = useState({});
    useEffect(() => {
        const clean = new DOMParser().parseFromString(info.info.selftext_html, 'text/html').body.textContent;
        setData({title: info.info.title, score: info.info.score, url: info.info.url, selftext: clean})
    }, [info.info.title, info.info.score, info.info.url, info.info.selftext_html])
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Score: {data.score}
      </Typography>
    </CardContent>
    <div>
        <div dangerouslySetInnerHTML={{ __html: data.selftext }} />
    </div>
    <CardActions>
      <a href={data.url}>
        <Button size="small">Learn More</Button>
      </a>
    </CardActions>
  </>
      </Card>
    </Box>
  );
}