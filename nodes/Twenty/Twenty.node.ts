import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { N8NPropertiesBuilder, N8NPropertiesBuilderConfig } from '@devlikeapro/n8n-openapi-node';
import * as doc from './twenty-v1.0.3-openapi.json';

const config: N8NPropertiesBuilderConfig = {};
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build();
const credentialName = 'twentyApi';

export class Twenty implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TwentyDEV',
		name: 'twenty',
		icon: 'file:twenty.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Twenty API',
		defaults: {
			name: 'Twenty',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: credentialName,
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			baseURL: '={{$credentials.domain}}',
		},

		properties: properties,
	};
}
