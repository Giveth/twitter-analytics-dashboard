import {
	Box,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	Tooltip,
	Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import { Help } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { FlexCenter } from '../../styled-components/flex';
import { fetchSocialNetwork } from '../../../api/apiRequests';
import { ISocialNetwork } from '../../../types/api/socialNetwork';
import { EReferencedTweetsType } from '../../../types/referencedTweetsType';
import { ITimeRangeProps } from '../../../types/timeRange';

function SocialNetwork(props: ITimeRangeProps) {
	const { timeRange } = props;
	const [socialNetwork, setSocialNetwork] = useState<ISocialNetwork[]>();
	const [type, setType] = useState(EReferencedTweetsType.retweeted);

	useEffect(() => {
		fetchSocialNetwork({ timeRange, type }).then(setSocialNetwork);
	}, [type, timeRange]);

	return (
		<Wrapper>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Social Network Analysis
				</Typography>
				<Tooltip
					placement='top'
					title='Most influential tweets in the DB excluding retweets'
				>
					<IconButton>
						<Help />
					</IconButton>
				</Tooltip>
			</FlexCenter>
			<Box sx={{ width: 220, mx: 'auto', mt: 5 }}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={type}
						label='Select Type'
						onChange={e => setType(e.target.value as EReferencedTweetsType)}
					>
						<MenuItem value={EReferencedTweetsType.retweeted}>
							Retweeted
						</MenuItem>
						<MenuItem value={EReferencedTweetsType.quoted}>Quoted</MenuItem>
						<MenuItem value={EReferencedTweetsType.replied_to}>
							Replied to
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<TagsContainer>
				{socialNetwork?.map(i => (
					<div key={i.username}>
						<Typography variant='h6'>{i.username}</Typography>
						<Typography
							sx={{ mt: 1, fontWeight: 'bold' }}
							variant='h5'
							color='text.secondary'
						>
							{i.count}
						</Typography>
					</div>
				))}
			</TagsContainer>
		</Wrapper>
	);
}

const TagsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	text-align: center;
	margin-top: 20px;
`;

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default SocialNetwork;
