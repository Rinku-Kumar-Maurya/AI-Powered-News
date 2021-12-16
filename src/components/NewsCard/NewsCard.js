import React, {useState, useEffect, createRef} from 'react'
import {Card, CardActions, CardActionArea, CardMedia, CardContent, Button, Typography} from '@material-ui/core'
import classNames from 'classnames'
import useStyles from './styles.js'

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i, activeArticle}) => {
    const classes = useStyles();
    const [refs, setRefs] = useState([]);

    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 30);

    useEffect(() => {
        setRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if(i === activeArticle && refs[activeArticle]){
            scrollToRef(refs[activeArticle]);
        }
    }, [i, activeArticle, refs]);

    return (
        <Card ref={refs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image={urlToImage || 'https://w7.pngwing.com/pngs/615/25/png-transparent-computer-icons-google-news-newspaper-source-others-miscellaneous-text-news.png'} />
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
