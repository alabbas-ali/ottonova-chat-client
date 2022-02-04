import { makeStyles } from '@material-ui/core'

export const sharedStyle = makeStyles((theme) => ({
	message: {
		position: 'relative',
		display: 'inline-block',
		margin: '1.5rem 0 0 0',
		transition: '0.5s all',
		listStyle: 'none',
		width: '100%',
	},
	resivedMessage: {
		float: 'right',
		backgroundColor: '#ECEFF1',
		padding: '0.5rem 1rem',
		color: '#607D8B',
		borderRadius: '1rem',
		borderBottomRightRadius: '0.125rem',
	},
	sendMessage: {
		float: 'left',
		backgroundColor: '#E91E63',
		padding: '0.5rem 1rem',
		color: '#fff',
		borderRadius: '1rem',
		borderBottomLeftRadius: '0.125rem',
	},
	messageAuthor: {
		position: 'absolute',
		color: '#B0BEC5',
		fontSize: '0.675rem',
		top: '0',
		marginTop: '-1rem',
	},
	messageDate: {
		color: '#CFD8DC',
		fontSize: '0.5rem',
		bottom: '-0.35rem',
		display: 'none',
	},
	smallButton: {
		margin: theme.spacing(0.2),
		textTransform: 'none',
		padding: theme.spacing(0.4),
	},
}))