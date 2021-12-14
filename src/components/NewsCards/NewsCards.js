import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'
import useStyles from './styles.js'

import NewsCard from '../NewsCard/NewsCard'

const infoCards = [
    { color1: '#0eb986', color2: '#0dac52', title: 'Latest News', text: 'Give me the latest news' },
    { color1: '#0f77d5', color2: '#0deccf', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color1: '#8d1fd5', color2: '#f920d0',  title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color1: '#71ded5', color2: '#87f380',  title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {

    const classes = useStyles();

    if (!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ background: `linear-gradient(45deg, ${infoCard.color1} 30%, ${infoCard.color2} 80%)` }}>
                                <Typography variant='h5'>{infoCard.title}</Typography>
                                {infoCard.info ? (
                                    <Typography variant='body1'>
                                        <strong>{infoCard.title.split(' ')[2]}</strong>
                                        <br />
                                        {infoCard.info}
                                    </Typography>
                                ) : null}
                                <Typography variant='body1'>Try saying <br /> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    console.log(articles);

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard i={i} article={article} activeArticle={activeArticle} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
