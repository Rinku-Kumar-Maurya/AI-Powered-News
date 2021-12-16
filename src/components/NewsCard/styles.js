import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    media: {
        height: 200,
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        boxShadow: '3px 3px 5px',
        transition: 'transform .2s ease-out',
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
        color: '#22289a',
        transform: 'scale(1.05)'
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});

export default styles;