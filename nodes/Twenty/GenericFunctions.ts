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
	path: string = "rest",
) {
	const credentials = await this.getCredentials('twentyApi');

	if (credentials === undefined) {
		throw new NodeOperationError(this.getNode(), 'No credentials returned!');
	}

	const options: IRequestOptions = {
		method,
		body,
		qs,
		uri: `${credentials.domain}/${path}${endpoint}`,
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
