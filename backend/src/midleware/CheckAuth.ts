import { verifyJwtToken } from '../utils/TokenGeneration';

export function ValidateAuthToken(token: string) : { userId: number }
{
	const result = verifyJwtToken(token);

	if('error' in result)
	{	
		console.log(result.error);
		return { userId: -1 };
	}

	const decoded = {userId: Number(result.userId)};
	return decoded;
}