import {
	IDataObject,
	IExecuteFunctions,
	IRequestOptions,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

export async function twentyApiRequest(
	this: IExecuteFunctions,
	method: string,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
) {
	const options: IRequestOptions = {
		headers: {},
		body,
		qs,
		uri: uri ?? `https://twenty.onemri.novamps.com/rest${endpoint}`,
		json: true,
	};

	const credentials = await this.getCredentials('TwentyApi');

	if (credentials === undefined) {
		throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
	}

	if (!Object.keys(body).length) {
		delete options.body;
	}

	if (!Object.keys(qs).length) {
		delete options.qs;
	}

	try {
		// return await this.helpers.requestOAuth2.call(this, 'twentyOAuth2Api', options);
		return await this.helpers.requestWithAuthentication.call(this, 'TwentyApi', options)
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export async function twentyApiRequestAllItems(
	this: IExecuteFunctions,
	method: string,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
) {
	const returnData: IDataObject[] = [];
	let responseData: any;

	do {
		responseData = await twentyApiRequest.call(this, method, endpoint, body, qs);
		// USERTASK: Get next page
		returnData.push(...responseData);
	} while (
		true // USERTASK: Add condition for total not yet reached
	);

	return returnData;
}

export async function handleListing(
	this: IExecuteFunctions,
	method: string,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
) {
	const returnAll = this.getNodeParameter('returnAll', 0) as boolean;

	if (returnAll) {
		return await twentyApiRequestAllItems.call(this, method, endpoint, body, qs);
	}

	const responseData = await twentyApiRequestAllItems.call(this, method, endpoint, body, qs);
	const limit = this.getNodeParameter('limit', 0) as number;

	return responseData.slice(0, limit);
}