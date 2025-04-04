'use server';

import { sendApiRequest } from '../../utils/api';

const AUTH_URL = 'api/v1/user';

export const getUserDashboard = async (token: string) => {    
    if (!token) {
        throw new Error("No access token found.");
    }

    return await sendApiRequest(
        'get',
        `${process.env.NEXT_PUBLIC_PAYFLEX_API_URL}/${AUTH_URL}/fetch-user-dashboard`,
        undefined,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true },
    );
};
