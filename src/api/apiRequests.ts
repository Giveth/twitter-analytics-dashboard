import { apiDashboardRoutes, apiRoutes } from './apiRoutes';
import { getRequest, postRequest } from '../lib/requests';

interface IApiSignIn {
	username: string;
	password: string;
}

export function apiSignIn(body: IApiSignIn) {
	return postRequest(apiRoutes.login, body);
}

export function apiCheckSignIn() {
	return getRequest(apiRoutes.isSignedIn);
}

export function apiSignOut() {
	return getRequest(apiRoutes.logout);
}

export function apiDashboardGeneral(query?: {}) {
	return getRequest(apiDashboardRoutes.general, query);
}

export function apiDashboardMostInfluentialTweets(query?: {}) {
	return getRequest(apiDashboardRoutes.mostInfluentialTweets, query);
}
