import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import StatCard from '../../StatCard';
import TwitterIcon from '../../../assets/images/twitter-stat-card.png';
import PeopleIcon from '../../../assets/images/people-team.svg';
import HashtagIcon from '../../../assets/images/hashtag.png';
import { IGeneralStats } from './General.index';

interface IProps {
	generalStats?: IGeneralStats;
}

function GeneralStats(props: IProps) {
	const { tweetCount, uniqueUsers, uniqueHashtags } = props.generalStats || {};
	return (
		<Wrapper>
			<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
				General Statistics
			</Typography>
			<GeneralCards>
				<StatCard title='Tweets' value={tweetCount} icon={TwitterIcon} />
				<StatCard title='Unique Accounts' value={uniqueUsers} icon={PeopleIcon} />
				<StatCard
					title='Unique Hashtags'
					value={uniqueHashtags}
					icon={HashtagIcon}
				/>
			</GeneralCards>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

const GeneralCards = styled.div`
	margin-top: 70px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 70px 30px;
`;

export default GeneralStats;
