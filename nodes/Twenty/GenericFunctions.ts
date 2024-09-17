import {
	IDataObject,
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

export async function twentyApiRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
) {
	const credentials = await this.getCredentials('twentyApi');

	if (credentials === undefined) {
		throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
	}

	const options: IRequestOptions = {
		method,
		body,
		qs,
		uri: `${credentials.domain}/rest${endpoint}`,
		json: true,
	};


	if (!Object.keys(body).length) {
		delete options.body;
	}

	if (!Object.keys(qs).length) {
		delete options.qs;
	}

	try {
		return await this.helpers.requestWithAuthentication.call(this, 'twentyApi', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export async function twentyApiRequestAllItems(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
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
	method: IHttpRequestMethods,
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
