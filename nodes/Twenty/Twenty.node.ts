import type {
	IDataObject,
	INodeExecutionData,
	IExecuteFunctions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { twentyApiRequest } from './GenericFunctions';

import {
	generalFields,
	generalOperations,
	apiKeyFields,
	apiKeyOperations,
	attachmentFields,
	attachmentOperations,
	auditLogFields,
	auditLogOperations,
	blocklistFields,
	blocklistOperations,
	calendarChannelFields,
	calendarChannelOperations,
	calendarChannelEventAssociationFields,
	calendarChannelEventAssociationOperations,
	calendarEventFields,
	calendarEventOperations,
	calendarEventParticipantFields,
	calendarEventParticipantOperations,
	companyFields,
	companyOperations,
	connectedAccountFields,
	connectedAccountOperations,
	favoriteFields,
	favoriteOperations,
	favoriteFolderFields,
	favoriteFolderOperations,
	messageFields,
	messageOperations,
	messageChannelFields,
	messageChannelOperations,
	messageChannelMessageAssociationFields,
	messageChannelMessageAssociationOperations,
	messageParticipantFields,
	messageParticipantOperations,
	messageThreadFields,
	messageThreadOperations,
	noteFields,
	noteOperations,
	noteTargetFields,
	noteTargetOperations,
	opportunityFields,
	opportunityOperations,
	personFields,
	personOperations,
	taskFields,
	taskOperations,
	taskTargetFields,
	taskTargetOperations,
	timelineActivityFields,
	timelineActivityOperations,
	viewFields,
	viewOperations,
	viewFieldFields,
	viewFieldOperations,
	viewFilterFields,
	viewFilterOperations,
	viewFilterGroupFields,
	viewFilterGroupOperations,
	viewGroupFields,
	viewGroupOperations,
	viewSortFields,
	viewSortOperations,
	webhookFields,
	webhookOperations,
	workflowFields,
	workflowOperations,
	workflowEventListenerFields,
	workflowEventListenerOperations,
	workflowRunFields,
	workflowRunOperations,
	workflowVersionFields,
	workflowVersionOperations,
	workspaceMemberFields,
	workspaceMemberOperations,
} from './descriptions';

export class Twenty implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Twenty',
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
				name: 'twentyApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Api Key',
						value: 'apiKey',
					},
					{
						name: 'Attachment',
						value: 'attachment',
					},
					{
						name: 'Audit Log',
						value: 'auditLog',
					},
					{
						name: 'Blocklist',
						value: 'blocklist',
					},
					{
						name: 'Calendar Channel',
						value: 'calendarChannel',
					},
					{
						name: 'Calendar Channel Event Association',
						value: 'calendarChannelEventAssociation',
					},
					{
						name: 'Calendar Event',
						value: 'calendarEvent',
					},
					{
						name: 'Calendar Event Participant',
						value: 'calendarEventParticipant',
					},
					{
						name: 'Company',
						value: 'company',
					},
					{
						name: 'Connected Account',
						value: 'connectedAccount',
					},
					{
						name: 'Favorite',
						value: 'favorite',
					},
					{
						name: 'General',
						value: 'general',
					},
					{
						name: 'Message',
						value: 'message',
					},
					{
						name: 'Message Channel',
						value: 'messageChannel',
					},
					{
						name: 'Message Channel Message Association',
						value: 'messageChannelMessageAssociation',
					},
					{
						name: 'Message Participant',
						value: 'messageParticipant',
					},
					{
						name: 'Message Thread',
						value: 'messageThread',
					},
					{
						name: 'Note',
						value: 'note',
					},
					{
						name: 'Note Target',
						value: 'noteTarget',
					},
					{
						name: 'Opportunity',
						value: 'opportunity',
					},
					{
						name: 'Person',
						value: 'person',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Task Target',
						value: 'taskTarget',
					},
					{
						name: 'Timeline Activity',
						value: 'timelineActivity',
					},
					{
						name: 'View',
						value: 'view',
					},
					{
						name: 'View Field',
						value: 'viewField',
					},
					{
						name: 'View Filter',
						value: 'viewFilter',
					},
					{
						name: 'View Filter Group',
						value: 'viewFilterGroup',
					},
					{
						name: 'View Group',
						value: 'viewGroup',
					},
					{
						name: 'View Sort',
						value: 'viewSort',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
					{
						name: 'Workspace Member',
						value: 'workspaceMember',
					},
				],
				default: 'general',
			},
						...generalOperations,
			...generalFields,
			...apiKeyOperations,
			...apiKeyFields,
			...attachmentOperations,
			...attachmentFields,
			...auditLogOperations,
			...auditLogFields,
			...blocklistOperations,
			...blocklistFields,
			...calendarChannelOperations,
			...calendarChannelFields,
			...calendarChannelEventAssociationOperations,
			...calendarChannelEventAssociationFields,
			...calendarEventOperations,
			...calendarEventFields,
			...calendarEventParticipantOperations,
			...calendarEventParticipantFields,
			...companyOperations,
			...companyFields,
			...connectedAccountOperations,
			...connectedAccountFields,
			...favoriteOperations,
			...favoriteFields,
			...favoriteFolderOperations,
			...favoriteFolderFields,
			...messageOperations,
			...messageFields,
			...messageChannelOperations,
			...messageChannelFields,
			...messageChannelMessageAssociationOperations,
			...messageChannelMessageAssociationFields,
			...messageParticipantOperations,
			...messageParticipantFields,
			...messageThreadOperations,
			...messageThreadFields,
			...noteOperations,
			...noteFields,
			...noteTargetOperations,
			...noteTargetFields,
			...opportunityOperations,
			...opportunityFields,
			...personOperations,
			...personFields,
			...taskOperations,
			...taskFields,
			...taskTargetOperations,
			...taskTargetFields,
			...timelineActivityOperations,
			...timelineActivityFields,
			...viewOperations,
			...viewFields,
			...viewFieldOperations,
			...viewFieldFields,
			...viewFilterOperations,
			...viewFilterFields,
			...viewFilterGroupOperations,
			...viewFilterGroupFields,
			...viewGroupOperations,
			...viewGroupFields,
			...viewSortOperations,
			...viewSortFields,
			...webhookOperations,
			...webhookFields,
			...workflowOperations,
			...workflowFields,
			...workflowEventListenerOperations,
			...workflowEventListenerFields,
			...workflowRunOperations,
			...workflowRunFields,
			...workflowVersionOperations,
			...workflowVersionFields,
			...workspaceMemberOperations,
			...workspaceMemberFields,
		],
	};


	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		let responseData;

		for (let i = 0; i < items.length; i++) {
			try {

				if (resource === 'general') {

					// **********************************************************************
				//                                general
				// **********************************************************************

					if (operation === 'getOpenApiSchema') {

						// ----------------------------------------
					//        general: getOpenApiSchema
					// ----------------------------------------

						responseData = await twentyApiRequest.call(this, 'GET', '/open-api/core', undefined, undefined, "");
					
					}

				} else if (resource === 'apiKey') {

					// **********************************************************************
				//                                 apiKey
				// **********************************************************************

					if (operation === 'createManyApiKeys') {

						// ----------------------------------------
					//        apiKey: createManyApiKeys
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/apiKeys', body, qs);
					
					} else if (operation === 'createOneApiKey') {

						// ----------------------------------------
					//         apiKey: createOneApiKey
					// ----------------------------------------

						const body = {
						expiresAt: this.getNodeParameter('expiresAt', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/apiKeys', body, qs);
					
					} else if (operation === 'deleteOneApiKey') {

						// ----------------------------------------
					//         apiKey: deleteOneApiKey
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/apiKeys/${id}`);
					
					} else if (operation === 'findApiKeyDuplicates') {

						// ----------------------------------------
					//       apiKey: findApiKeyDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/apiKeys/duplicates', body, qs);
					
					} else if (operation === 'findManyApiKeys') {

						// ----------------------------------------
					//         apiKey: findManyApiKeys
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/apiKeys', {}, qs);
					
					} else if (operation === 'findOneApiKey') {

						// ----------------------------------------
					//          apiKey: findOneApiKey
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/apiKeys/${id}`, {}, qs);
					
					} else if (operation === 'updateOneApiKey') {

						// ----------------------------------------
					//         apiKey: updateOneApiKey
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/apiKeys/${id}`, body, qs);
					
					}

				} else if (resource === 'attachment') {

					// **********************************************************************
				//                               attachment
				// **********************************************************************

					if (operation === 'createManyAttachments') {

						// ----------------------------------------
					//    attachment: createManyAttachments
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/attachments', body, qs);
					
					} else if (operation === 'createOneAttachment') {

						// ----------------------------------------
					//     attachment: createOneAttachment
					// ----------------------------------------

						const body = {
						authorId: this.getNodeParameter('authorId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/attachments', body, qs);
					
					} else if (operation === 'deleteOneAttachment') {

						// ----------------------------------------
					//     attachment: deleteOneAttachment
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/attachments/${id}`);
					
					} else if (operation === 'findAttachmentDuplicates') {

						// ----------------------------------------
					//   attachment: findAttachmentDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/attachments/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyAttachments') {

						// ----------------------------------------
					//     attachment: findManyAttachments
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/attachments', {}, qs);
					
					} else if (operation === 'findOneAttachment') {

						// ----------------------------------------
					//      attachment: findOneAttachment
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/attachments/${id}`, {}, qs);
					
					} else if (operation === 'updateOneAttachment') {

						// ----------------------------------------
					//     attachment: updateOneAttachment
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/attachments/${id}`, body, qs);
					
					}

				} else if (resource === 'auditLog') {

					// **********************************************************************
				//                                auditLog
				// **********************************************************************

					if (operation === 'createManyAuditLogs') {

						// ----------------------------------------
					//      auditLog: createManyAuditLogs
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/auditLogs', body, qs);
					
					} else if (operation === 'createOneAuditLog') {

						// ----------------------------------------
					//       auditLog: createOneAuditLog
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/auditLogs', body, qs);
					
					} else if (operation === 'deleteOneAuditLog') {

						// ----------------------------------------
					//       auditLog: deleteOneAuditLog
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/auditLogs/${id}`);
					
					} else if (operation === 'findAuditLogDuplicates') {

						// ----------------------------------------
					//     auditLog: findAuditLogDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/auditLogs/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyAuditLogs') {

						// ----------------------------------------
					//       auditLog: findManyAuditLogs
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/auditLogs', {}, qs);
					
					} else if (operation === 'findOneAuditLog') {

						// ----------------------------------------
					//        auditLog: findOneAuditLog
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/auditLogs/${id}`, {}, qs);
					
					} else if (operation === 'updateOneAuditLog') {

						// ----------------------------------------
					//       auditLog: updateOneAuditLog
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/auditLogs/${id}`, body, qs);
					
					}

				} else if (resource === 'blocklist') {

					// **********************************************************************
				//                               blocklist
				// **********************************************************************

					if (operation === 'createManyBlocklists') {

						// ----------------------------------------
					//     blocklist: createManyBlocklists
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/blocklists', body, qs);
					
					} else if (operation === 'createOneBlocklist') {

						// ----------------------------------------
					//      blocklist: createOneBlocklist
					// ----------------------------------------

						const body = {
						workspaceMemberId: this.getNodeParameter('workspaceMemberId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/blocklists', body, qs);
					
					} else if (operation === 'deleteOneBlocklist') {

						// ----------------------------------------
					//      blocklist: deleteOneBlocklist
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/blocklists/${id}`);
					
					} else if (operation === 'findBlocklistDuplicates') {

						// ----------------------------------------
					//    blocklist: findBlocklistDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/blocklists/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyBlocklists') {

						// ----------------------------------------
					//      blocklist: findManyBlocklists
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/blocklists', {}, qs);
					
					} else if (operation === 'findOneBlocklist') {

						// ----------------------------------------
					//       blocklist: findOneBlocklist
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/blocklists/${id}`, {}, qs);
					
					} else if (operation === 'updateOneBlocklist') {

						// ----------------------------------------
					//      blocklist: updateOneBlocklist
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/blocklists/${id}`, body, qs);
					
					}

				} else if (resource === 'calendarChannel') {

					// **********************************************************************
				//                            calendarChannel
				// **********************************************************************

					if (operation === 'createManyCalendarChannels') {

						// ----------------------------------------
					// calendarChannel: createManyCalendarChannels
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/calendarChannels';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneCalendarChannel') {

						// ----------------------------------------
					// calendarChannel: createOneCalendarChannel
					// ----------------------------------------

						const body = {
						connectedAccountId: this.getNodeParameter('connectedAccountId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/calendarChannels', body, qs);
					
					} else if (operation === 'deleteOneCalendarChannel') {

						// ----------------------------------------
					// calendarChannel: deleteOneCalendarChannel
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/calendarChannels/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findCalendarChannelDuplicates') {

						// ----------------------------------------
					// calendarChannel: findCalendarChannelDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarChannels/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyCalendarChannels') {

						// ----------------------------------------
					// calendarChannel: findManyCalendarChannels
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/calendarChannels', {}, qs);
					
					} else if (operation === 'findOneCalendarChannel') {

						// ----------------------------------------
					// calendarChannel: findOneCalendarChannel
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/calendarChannels/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneCalendarChannel') {

						// ----------------------------------------
					// calendarChannel: updateOneCalendarChannel
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/calendarChannels/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'calendarChannelEventAssociation') {

					// **********************************************************************
				//                    calendarChannelEventAssociation
				// **********************************************************************

					if (operation === 'createManyCalendarChannelEventAssociations') {

						// ----------------------------------------
					// calendarChannelEventAssociation: createManyCalendarChannelEventAssociations
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/calendarChannelEventAssociations';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneCalendarChannelEventAssociation') {

						// ----------------------------------------
					// calendarChannelEventAssociation: createOneCalendarChannelEventAssociation
					// ----------------------------------------

						const body = {
						calendarChannelId: this.getNodeParameter('calendarChannelId', i),
						calendarEventId: this.getNodeParameter('calendarEventId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarChannelEventAssociations';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'deleteOneCalendarChannelEventAssociation') {

						// ----------------------------------------
					// calendarChannelEventAssociation: deleteOneCalendarChannelEventAssociation
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/calendarChannelEventAssociations/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findCalendarChannelEventAssociationDuplicates') {

						// ----------------------------------------
					// calendarChannelEventAssociation: findCalendarChannelEventAssociationDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarChannelEventAssociations/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyCalendarChannelEventAssociations') {

						// ----------------------------------------
					// calendarChannelEventAssociation: findManyCalendarChannelEventAssociations
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarChannelEventAssociations';
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findOneCalendarChannelEventAssociation') {

						// ----------------------------------------
					// calendarChannelEventAssociation: findOneCalendarChannelEventAssociation
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/calendarChannelEventAssociations/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneCalendarChannelEventAssociation') {

						// ----------------------------------------
					// calendarChannelEventAssociation: updateOneCalendarChannelEventAssociation
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/calendarChannelEventAssociations/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'calendarEvent') {

					// **********************************************************************
				//                             calendarEvent
				// **********************************************************************

					if (operation === 'createManyCalendarEvents') {

						// ----------------------------------------
					// calendarEvent: createManyCalendarEvents
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/calendarEvents';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneCalendarEvent') {

						// ----------------------------------------
					//  calendarEvent: createOneCalendarEvent
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/calendarEvents', body, qs);
					
					} else if (operation === 'deleteOneCalendarEvent') {

						// ----------------------------------------
					//  calendarEvent: deleteOneCalendarEvent
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/calendarEvents/${id}`);
					
					} else if (operation === 'findCalendarEventDuplicates') {

						// ----------------------------------------
					// calendarEvent: findCalendarEventDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarEvents/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyCalendarEvents') {

						// ----------------------------------------
					//  calendarEvent: findManyCalendarEvents
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/calendarEvents', {}, qs);
					
					} else if (operation === 'findOneCalendarEvent') {

						// ----------------------------------------
					//   calendarEvent: findOneCalendarEvent
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/calendarEvents/${id}`, {}, qs);
					
					} else if (operation === 'updateOneCalendarEvent') {

						// ----------------------------------------
					//  calendarEvent: updateOneCalendarEvent
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/calendarEvents/${id}`, body, qs);
					
					}

				} else if (resource === 'calendarEventParticipant') {

					// **********************************************************************
				//                        calendarEventParticipant
				// **********************************************************************

					if (operation === 'createManyCalendarEventParticipants') {

						// ----------------------------------------
					// calendarEventParticipant: createManyCalendarEventParticipants
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/calendarEventParticipants';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneCalendarEventParticipant') {

						// ----------------------------------------
					// calendarEventParticipant: createOneCalendarEventParticipant
					// ----------------------------------------

						const body = {
						calendarEventId: this.getNodeParameter('calendarEventId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarEventParticipants';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'deleteOneCalendarEventParticipant') {

						// ----------------------------------------
					// calendarEventParticipant: deleteOneCalendarEventParticipant
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/calendarEventParticipants/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findCalendarEventParticipantDuplicates') {

						// ----------------------------------------
					// calendarEventParticipant: findCalendarEventParticipantDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarEventParticipants/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyCalendarEventParticipants') {

						// ----------------------------------------
					// calendarEventParticipant: findManyCalendarEventParticipants
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/calendarEventParticipants';
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findOneCalendarEventParticipant') {

						// ----------------------------------------
					// calendarEventParticipant: findOneCalendarEventParticipant
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/calendarEventParticipants/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneCalendarEventParticipant') {

						// ----------------------------------------
					// calendarEventParticipant: updateOneCalendarEventParticipant
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/calendarEventParticipants/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'company') {

					// **********************************************************************
				//                                company
				// **********************************************************************

					if (operation === 'createManyCompanies') {

						// ----------------------------------------
					//       company: createManyCompanies
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/companies', body, qs);
					
					} else if (operation === 'createOneCompany') {

						// ----------------------------------------
					//        company: createOneCompany
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/companies', body, qs);
					
					} else if (operation === 'deleteOneCompany') {

						// ----------------------------------------
					//        company: deleteOneCompany
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/companies/${id}`);
					
					} else if (operation === 'findCompanyDuplicates') {

						// ----------------------------------------
					//      company: findCompanyDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/companies/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyCompanies') {

						// ----------------------------------------
					//        company: findManyCompanies
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/companies', {}, qs);
					
					} else if (operation === 'findOneCompany') {

						// ----------------------------------------
					//         company: findOneCompany
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/companies/${id}`, {}, qs);
					
					} else if (operation === 'updateOneCompany') {

						// ----------------------------------------
					//        company: updateOneCompany
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/companies/${id}`, body, qs);
					
					}

				} else if (resource === 'connectedAccount') {

					// **********************************************************************
				//                            connectedAccount
				// **********************************************************************

					if (operation === 'createManyConnectedAccounts') {

						// ----------------------------------------
					// connectedAccount: createManyConnectedAccounts
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/connectedAccounts';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneConnectedAccount') {

						// ----------------------------------------
					// connectedAccount: createOneConnectedAccount
					// ----------------------------------------

						const body = {
						accountOwnerId: this.getNodeParameter('accountOwnerId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/connectedAccounts', body, qs);
					
					} else if (operation === 'deleteOneConnectedAccount') {

						// ----------------------------------------
					// connectedAccount: deleteOneConnectedAccount
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/connectedAccounts/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findConnectedAccountDuplicates') {

						// ----------------------------------------
					// connectedAccount: findConnectedAccountDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/connectedAccounts/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyConnectedAccounts') {

						// ----------------------------------------
					// connectedAccount: findManyConnectedAccounts
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/connectedAccounts', {}, qs);
					
					} else if (operation === 'findOneConnectedAccount') {

						// ----------------------------------------
					// connectedAccount: findOneConnectedAccount
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/connectedAccounts/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneConnectedAccount') {

						// ----------------------------------------
					// connectedAccount: updateOneConnectedAccount
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/connectedAccounts/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'favorite') {

					// **********************************************************************
				//                                favorite
				// **********************************************************************

					if (operation === 'createManyFavorites') {

						// ----------------------------------------
					//      favorite: createManyFavorites
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/favorites', body, qs);
					
					} else if (operation === 'createOneFavorite') {

						// ----------------------------------------
					//       favorite: createOneFavorite
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/favorites', body, qs);
					
					} else if (operation === 'deleteOneFavorite') {

						// ----------------------------------------
					//       favorite: deleteOneFavorite
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/favorites/${id}`);
					
					} else if (operation === 'findFavoriteDuplicates') {

						// ----------------------------------------
					//     favorite: findFavoriteDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/favorites/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyFavorites') {

						// ----------------------------------------
					//       favorite: findManyFavorites
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/favorites', {}, qs);
					
					} else if (operation === 'findOneFavorite') {

						// ----------------------------------------
					//        favorite: findOneFavorite
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/favorites/${id}`, {}, qs);
					
					} else if (operation === 'updateOneFavorite') {

						// ----------------------------------------
					//       favorite: updateOneFavorite
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/favorites/${id}`, body, qs);
					
					}

				} else if (resource === 'favoriteFolder') {

					// **********************************************************************
				//                             favoriteFolder
				// **********************************************************************

					if (operation === 'createManyFavoriteFolders') {

						// ----------------------------------------
					// favoriteFolder: createManyFavoriteFolders
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/favoriteFolders';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneFavoriteFolder') {

						// ----------------------------------------
					// favoriteFolder: createOneFavoriteFolder
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/favoriteFolders', body, qs);
					
					} else if (operation === 'deleteOneFavoriteFolder') {

						// ----------------------------------------
					// favoriteFolder: deleteOneFavoriteFolder
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/favoriteFolders/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findFavoriteFolderDuplicates') {

						// ----------------------------------------
					// favoriteFolder: findFavoriteFolderDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/favoriteFolders/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findManyFavoriteFolders') {

						// ----------------------------------------
					// favoriteFolder: findManyFavoriteFolders
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/favoriteFolders', {}, qs);
					
					} else if (operation === 'findOneFavoriteFolder') {

						// ----------------------------------------
					//  favoriteFolder: findOneFavoriteFolder
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/favoriteFolders/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneFavoriteFolder') {

						// ----------------------------------------
					// favoriteFolder: updateOneFavoriteFolder
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/favoriteFolders/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'message') {

					// **********************************************************************
				//                                message
				// **********************************************************************

					if (operation === 'createManyMessages') {

						// ----------------------------------------
					//       message: createManyMessages
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/messages', body, qs);
					
					} else if (operation === 'createOneMessage') {

						// ----------------------------------------
					//        message: createOneMessage
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/messages', body, qs);
					
					} else if (operation === 'deleteOneMessage') {

						// ----------------------------------------
					//        message: deleteOneMessage
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/messages/${id}`);
					
					} else if (operation === 'findManyMessages') {

						// ----------------------------------------
					//        message: findManyMessages
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/messages', {}, qs);
					
					} else if (operation === 'findMessageDuplicates') {

						// ----------------------------------------
					//      message: findMessageDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/messages/duplicates', body, qs);
					
					} else if (operation === 'findOneMessage') {

						// ----------------------------------------
					//         message: findOneMessage
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/messages/${id}`, {}, qs);
					
					} else if (operation === 'updateOneMessage') {

						// ----------------------------------------
					//        message: updateOneMessage
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/messages/${id}`, body, qs);
					
					}

				} else if (resource === 'messageChannel') {

					// **********************************************************************
				//                             messageChannel
				// **********************************************************************

					if (operation === 'createManyMessageChannels') {

						// ----------------------------------------
					// messageChannel: createManyMessageChannels
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/messageChannels';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneMessageChannel') {

						// ----------------------------------------
					// messageChannel: createOneMessageChannel
					// ----------------------------------------

						const body = {
						connectedAccountId: this.getNodeParameter('connectedAccountId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/messageChannels', body, qs);
					
					} else if (operation === 'deleteOneMessageChannel') {

						// ----------------------------------------
					// messageChannel: deleteOneMessageChannel
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/messageChannels/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyMessageChannels') {

						// ----------------------------------------
					// messageChannel: findManyMessageChannels
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/messageChannels', {}, qs);
					
					} else if (operation === 'findMessageChannelDuplicates') {

						// ----------------------------------------
					// messageChannel: findMessageChannelDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/messageChannels/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findOneMessageChannel') {

						// ----------------------------------------
					//  messageChannel: findOneMessageChannel
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/messageChannels/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneMessageChannel') {

						// ----------------------------------------
					// messageChannel: updateOneMessageChannel
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/messageChannels/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'messageChannelMessageAssociation') {

					// **********************************************************************
				//                    messageChannelMessageAssociation
				// **********************************************************************

					if (operation === 'createManyMessageChannelMessageAssociations') {

						// ----------------------------------------
					// messageChannelMessageAssociation: createManyMessageChannelMessageAssociations
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/messageChannelMessageAssociations';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneMessageChannelMessageAssociation') {

						// ----------------------------------------
					// messageChannelMessageAssociation: createOneMessageChannelMessageAssociation
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/messageChannelMessageAssociations';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'deleteOneMessageChannelMessageAssociation') {

						// ----------------------------------------
					// messageChannelMessageAssociation: deleteOneMessageChannelMessageAssociation
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/messageChannelMessageAssociations/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyMessageChannelMessageAssociations') {

						// ----------------------------------------
					// messageChannelMessageAssociation: findManyMessageChannelMessageAssociations
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/messageChannelMessageAssociations';
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findMessageChannelMessageAssociationDuplicates') {

						// ----------------------------------------
					// messageChannelMessageAssociation: findMessageChannelMessageAssociationDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/messageChannelMessageAssociations/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findOneMessageChannelMessageAssociation') {

						// ----------------------------------------
					// messageChannelMessageAssociation: findOneMessageChannelMessageAssociation
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/messageChannelMessageAssociations/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneMessageChannelMessageAssociation') {

						// ----------------------------------------
					// messageChannelMessageAssociation: updateOneMessageChannelMessageAssociation
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/messageChannelMessageAssociations/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'messageParticipant') {

					// **********************************************************************
				//                           messageParticipant
				// **********************************************************************

					if (operation === 'createManyMessageParticipants') {

						// ----------------------------------------
					// messageParticipant: createManyMessageParticipants
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/messageParticipants';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneMessageParticipant') {

						// ----------------------------------------
					// messageParticipant: createOneMessageParticipant
					// ----------------------------------------

						const body = {
						messageId: this.getNodeParameter('messageId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/messageParticipants', body, qs);
					
					} else if (operation === 'deleteOneMessageParticipant') {

						// ----------------------------------------
					// messageParticipant: deleteOneMessageParticipant
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/messageParticipants/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyMessageParticipants') {

						// ----------------------------------------
					// messageParticipant: findManyMessageParticipants
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/messageParticipants', {}, qs);
					
					} else if (operation === 'findMessageParticipantDuplicates') {

						// ----------------------------------------
					// messageParticipant: findMessageParticipantDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/messageParticipants/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findOneMessageParticipant') {

						// ----------------------------------------
					// messageParticipant: findOneMessageParticipant
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/messageParticipants/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'updateOneMessageParticipant') {

						// ----------------------------------------
					// messageParticipant: updateOneMessageParticipant
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/messageParticipants/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'messageThread') {

					// **********************************************************************
				//                             messageThread
				// **********************************************************************

					if (operation === 'createManyMessageThreads') {

						// ----------------------------------------
					// messageThread: createManyMessageThreads
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/messageThreads';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneMessageThread') {

						// ----------------------------------------
					//  messageThread: createOneMessageThread
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/messageThreads', body, qs);
					
					} else if (operation === 'deleteOneMessageThread') {

						// ----------------------------------------
					//  messageThread: deleteOneMessageThread
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/messageThreads/${id}`);
					
					} else if (operation === 'findManyMessageThreads') {

						// ----------------------------------------
					//  messageThread: findManyMessageThreads
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/messageThreads', {}, qs);
					
					} else if (operation === 'findMessageThreadDuplicates') {

						// ----------------------------------------
					// messageThread: findMessageThreadDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/messageThreads/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findOneMessageThread') {

						// ----------------------------------------
					//   messageThread: findOneMessageThread
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/messageThreads/${id}`, {}, qs);
					
					} else if (operation === 'updateOneMessageThread') {

						// ----------------------------------------
					//  messageThread: updateOneMessageThread
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/messageThreads/${id}`, body, qs);
					
					}

				} else if (resource === 'note') {

					// **********************************************************************
				//                                  note
				// **********************************************************************

					if (operation === 'createManyNotes') {

						// ----------------------------------------
					//          note: createManyNotes
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/notes', body, qs);
					
					} else if (operation === 'createOneNote') {

						// ----------------------------------------
					//           note: createOneNote
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/notes', body, qs);
					
					} else if (operation === 'deleteOneNote') {

						// ----------------------------------------
					//           note: deleteOneNote
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/notes/${id}`);
					
					} else if (operation === 'findManyNotes') {

						// ----------------------------------------
					//           note: findManyNotes
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/notes', {}, qs);
					
					} else if (operation === 'findNoteDuplicates') {

						// ----------------------------------------
					//         note: findNoteDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/notes/duplicates', body, qs);
					
					} else if (operation === 'findOneNote') {

						// ----------------------------------------
					//            note: findOneNote
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/notes/${id}`, {}, qs);
					
					} else if (operation === 'updateOneNote') {

						// ----------------------------------------
					//           note: updateOneNote
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/notes/${id}`, body, qs);
					
					}

				} else if (resource === 'noteTarget') {

					// **********************************************************************
				//                               noteTarget
				// **********************************************************************

					if (operation === 'createManyNoteTargets') {

						// ----------------------------------------
					//    noteTarget: createManyNoteTargets
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/noteTargets', body, qs);
					
					} else if (operation === 'createOneNoteTarget') {

						// ----------------------------------------
					//     noteTarget: createOneNoteTarget
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/noteTargets', body, qs);
					
					} else if (operation === 'deleteOneNoteTarget') {

						// ----------------------------------------
					//     noteTarget: deleteOneNoteTarget
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/noteTargets/${id}`);
					
					} else if (operation === 'findManyNoteTargets') {

						// ----------------------------------------
					//     noteTarget: findManyNoteTargets
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/noteTargets', {}, qs);
					
					} else if (operation === 'findNoteTargetDuplicates') {

						// ----------------------------------------
					//   noteTarget: findNoteTargetDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/noteTargets/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'findOneNoteTarget') {

						// ----------------------------------------
					//      noteTarget: findOneNoteTarget
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/noteTargets/${id}`, {}, qs);
					
					} else if (operation === 'updateOneNoteTarget') {

						// ----------------------------------------
					//     noteTarget: updateOneNoteTarget
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/noteTargets/${id}`, body, qs);
					
					}

				} else if (resource === 'opportunity') {

					// **********************************************************************
				//                              opportunity
				// **********************************************************************

					if (operation === 'createManyOpportunities') {

						// ----------------------------------------
					//   opportunity: createManyOpportunities
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/opportunities', body, qs);
					
					} else if (operation === 'createOneOpportunity') {

						// ----------------------------------------
					//    opportunity: createOneOpportunity
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/opportunities', body, qs);
					
					} else if (operation === 'deleteOneOpportunity') {

						// ----------------------------------------
					//    opportunity: deleteOneOpportunity
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/opportunities/${id}`);
					
					} else if (operation === 'findManyOpportunities') {

						// ----------------------------------------
					//    opportunity: findManyOpportunities
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/opportunities', {}, qs);
					
					} else if (operation === 'findOneOpportunity') {

						// ----------------------------------------
					//     opportunity: findOneOpportunity
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/opportunities/${id}`, {}, qs);
					
					} else if (operation === 'findOpportunityDuplicates') {

						// ----------------------------------------
					//  opportunity: findOpportunityDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/opportunities/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneOpportunity') {

						// ----------------------------------------
					//    opportunity: updateOneOpportunity
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/opportunities/${id}`, body, qs);
					
					}

				} else if (resource === 'person') {

					// **********************************************************************
				//                                 person
				// **********************************************************************

					if (operation === 'createManyPeople') {

						// ----------------------------------------
					//         person: createManyPeople
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/people', body, qs);
					
					} else if (operation === 'createOnePerson') {

						// ----------------------------------------
					//         person: createOnePerson
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/people', body, qs);
					
					} else if (operation === 'deleteOnePerson') {

						// ----------------------------------------
					//         person: deleteOnePerson
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/people/${id}`);
					
					} else if (operation === 'findManyPeople') {

						// ----------------------------------------
					//          person: findManyPeople
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/people', {}, qs);
					
					} else if (operation === 'findOnePerson') {

						// ----------------------------------------
					//          person: findOnePerson
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/people/${id}`, {}, qs);
					
					} else if (operation === 'findPersonDuplicates') {

						// ----------------------------------------
					//       person: findPersonDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/people/duplicates', body, qs);
					
					} else if (operation === 'updateOnePerson') {

						// ----------------------------------------
					//         person: updateOnePerson
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/people/${id}`, body, qs);
					
					}

				} else if (resource === 'task') {

					// **********************************************************************
				//                                  task
				// **********************************************************************

					if (operation === 'createManyTasks') {

						// ----------------------------------------
					//          task: createManyTasks
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/tasks', body, qs);
					
					} else if (operation === 'createOneTask') {

						// ----------------------------------------
					//           task: createOneTask
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/tasks', body, qs);
					
					} else if (operation === 'deleteOneTask') {

						// ----------------------------------------
					//           task: deleteOneTask
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/tasks/${id}`);
					
					} else if (operation === 'findManyTasks') {

						// ----------------------------------------
					//           task: findManyTasks
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/tasks', {}, qs);
					
					} else if (operation === 'findOneTask') {

						// ----------------------------------------
					//            task: findOneTask
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/tasks/${id}`, {}, qs);
					
					} else if (operation === 'findTaskDuplicates') {

						// ----------------------------------------
					//         task: findTaskDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/tasks/duplicates', body, qs);
					
					} else if (operation === 'updateOneTask') {

						// ----------------------------------------
					//           task: updateOneTask
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/tasks/${id}`, body, qs);
					
					}

				} else if (resource === 'taskTarget') {

					// **********************************************************************
				//                               taskTarget
				// **********************************************************************

					if (operation === 'createManyTaskTargets') {

						// ----------------------------------------
					//    taskTarget: createManyTaskTargets
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/taskTargets', body, qs);
					
					} else if (operation === 'createOneTaskTarget') {

						// ----------------------------------------
					//     taskTarget: createOneTaskTarget
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/taskTargets', body, qs);
					
					} else if (operation === 'deleteOneTaskTarget') {

						// ----------------------------------------
					//     taskTarget: deleteOneTaskTarget
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/taskTargets/${id}`);
					
					} else if (operation === 'findManyTaskTargets') {

						// ----------------------------------------
					//     taskTarget: findManyTaskTargets
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/taskTargets', {}, qs);
					
					} else if (operation === 'findOneTaskTarget') {

						// ----------------------------------------
					//      taskTarget: findOneTaskTarget
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/taskTargets/${id}`, {}, qs);
					
					} else if (operation === 'findTaskTargetDuplicates') {

						// ----------------------------------------
					//   taskTarget: findTaskTargetDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/taskTargets/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneTaskTarget') {

						// ----------------------------------------
					//     taskTarget: updateOneTaskTarget
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/taskTargets/${id}`, body, qs);
					
					}

				} else if (resource === 'timelineActivity') {

					// **********************************************************************
				//                            timelineActivity
				// **********************************************************************

					if (operation === 'createManyTimelineActivities') {

						// ----------------------------------------
					// timelineActivity: createManyTimelineActivities
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/timelineActivities';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneTimelineActivity') {

						// ----------------------------------------
					// timelineActivity: createOneTimelineActivity
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/timelineActivities', body, qs);
					
					} else if (operation === 'deleteOneTimelineActivity') {

						// ----------------------------------------
					// timelineActivity: deleteOneTimelineActivity
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/timelineActivities/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyTimelineActivities') {

						// ----------------------------------------
					// timelineActivity: findManyTimelineActivities
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/timelineActivities', {}, qs);
					
					} else if (operation === 'findOneTimelineActivity') {

						// ----------------------------------------
					// timelineActivity: findOneTimelineActivity
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/timelineActivities/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findTimelineActivityDuplicates') {

						// ----------------------------------------
					// timelineActivity: findTimelineActivityDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/timelineActivities/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneTimelineActivity') {

						// ----------------------------------------
					// timelineActivity: updateOneTimelineActivity
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/timelineActivities/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'view') {

					// **********************************************************************
				//                                  view
				// **********************************************************************

					if (operation === 'createManyViews') {

						// ----------------------------------------
					//          view: createManyViews
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/views', body, qs);
					
					} else if (operation === 'createOneView') {

						// ----------------------------------------
					//           view: createOneView
					// ----------------------------------------

						const body = {
						objectMetadataId: this.getNodeParameter('objectMetadataId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/views', body, qs);
					
					} else if (operation === 'deleteOneView') {

						// ----------------------------------------
					//           view: deleteOneView
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/views/${id}`);
					
					} else if (operation === 'findManyViews') {

						// ----------------------------------------
					//           view: findManyViews
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/views', {}, qs);
					
					} else if (operation === 'findOneView') {

						// ----------------------------------------
					//            view: findOneView
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/views/${id}`, {}, qs);
					
					} else if (operation === 'findViewDuplicates') {

						// ----------------------------------------
					//         view: findViewDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/views/duplicates', body, qs);
					
					} else if (operation === 'updateOneView') {

						// ----------------------------------------
					//           view: updateOneView
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/views/${id}`, body, qs);
					
					}

				} else if (resource === 'viewField') {

					// **********************************************************************
				//                               viewField
				// **********************************************************************

					if (operation === 'createManyViewFields') {

						// ----------------------------------------
					//     viewField: createManyViewFields
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/viewFields', body, qs);
					
					} else if (operation === 'createOneViewField') {

						// ----------------------------------------
					//      viewField: createOneViewField
					// ----------------------------------------

						const body = {
						fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
						viewId: this.getNodeParameter('viewId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/viewFields', body, qs);
					
					} else if (operation === 'deleteOneViewField') {

						// ----------------------------------------
					//      viewField: deleteOneViewField
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/viewFields/${id}`);
					
					} else if (operation === 'findManyViewFields') {

						// ----------------------------------------
					//      viewField: findManyViewFields
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/viewFields', {}, qs);
					
					} else if (operation === 'findOneViewField') {

						// ----------------------------------------
					//       viewField: findOneViewField
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/viewFields/${id}`, {}, qs);
					
					} else if (operation === 'findViewFieldDuplicates') {

						// ----------------------------------------
					//    viewField: findViewFieldDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/viewFields/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneViewField') {

						// ----------------------------------------
					//      viewField: updateOneViewField
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/viewFields/${id}`, body, qs);
					
					}

				} else if (resource === 'viewFilter') {

					// **********************************************************************
				//                               viewFilter
				// **********************************************************************

					if (operation === 'createManyViewFilters') {

						// ----------------------------------------
					//    viewFilter: createManyViewFilters
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/viewFilters', body, qs);
					
					} else if (operation === 'createOneViewFilter') {

						// ----------------------------------------
					//     viewFilter: createOneViewFilter
					// ----------------------------------------

						const body = {
						fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/viewFilters', body, qs);
					
					} else if (operation === 'deleteOneViewFilter') {

						// ----------------------------------------
					//     viewFilter: deleteOneViewFilter
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/viewFilters/${id}`);
					
					} else if (operation === 'findManyViewFilters') {

						// ----------------------------------------
					//     viewFilter: findManyViewFilters
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/viewFilters', {}, qs);
					
					} else if (operation === 'findOneViewFilter') {

						// ----------------------------------------
					//      viewFilter: findOneViewFilter
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/viewFilters/${id}`, {}, qs);
					
					} else if (operation === 'findViewFilterDuplicates') {

						// ----------------------------------------
					//   viewFilter: findViewFilterDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/viewFilters/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneViewFilter') {

						// ----------------------------------------
					//     viewFilter: updateOneViewFilter
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/viewFilters/${id}`, body, qs);
					
					}

				} else if (resource === 'viewFilterGroup') {

					// **********************************************************************
				//                            viewFilterGroup
				// **********************************************************************

					if (operation === 'createManyViewFilterGroups') {

						// ----------------------------------------
					// viewFilterGroup: createManyViewFilterGroups
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/viewFilterGroups';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneViewFilterGroup') {

						// ----------------------------------------
					// viewFilterGroup: createOneViewFilterGroup
					// ----------------------------------------

						const body = {
						viewId: this.getNodeParameter('viewId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/viewFilterGroups', body, qs);
					
					} else if (operation === 'deleteOneViewFilterGroup') {

						// ----------------------------------------
					// viewFilterGroup: deleteOneViewFilterGroup
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/viewFilterGroups/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyViewFilterGroups') {

						// ----------------------------------------
					// viewFilterGroup: findManyViewFilterGroups
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/viewFilterGroups', {}, qs);
					
					} else if (operation === 'findOneViewFilterGroup') {

						// ----------------------------------------
					// viewFilterGroup: findOneViewFilterGroup
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/viewFilterGroups/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findViewFilterGroupDuplicates') {

						// ----------------------------------------
					// viewFilterGroup: findViewFilterGroupDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/viewFilterGroups/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneViewFilterGroup') {

						// ----------------------------------------
					// viewFilterGroup: updateOneViewFilterGroup
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/viewFilterGroups/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'viewGroup') {

					// **********************************************************************
				//                               viewGroup
				// **********************************************************************

					if (operation === 'createManyViewGroups') {

						// ----------------------------------------
					//     viewGroup: createManyViewGroups
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/viewGroups', body, qs);
					
					} else if (operation === 'createOneViewGroup') {

						// ----------------------------------------
					//      viewGroup: createOneViewGroup
					// ----------------------------------------

						const body = {
						fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/viewGroups', body, qs);
					
					} else if (operation === 'deleteOneViewGroup') {

						// ----------------------------------------
					//      viewGroup: deleteOneViewGroup
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/viewGroups/${id}`);
					
					} else if (operation === 'findManyViewGroups') {

						// ----------------------------------------
					//      viewGroup: findManyViewGroups
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/viewGroups', {}, qs);
					
					} else if (operation === 'findOneViewGroup') {

						// ----------------------------------------
					//       viewGroup: findOneViewGroup
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/viewGroups/${id}`, {}, qs);
					
					} else if (operation === 'findViewGroupDuplicates') {

						// ----------------------------------------
					//    viewGroup: findViewGroupDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/viewGroups/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneViewGroup') {

						// ----------------------------------------
					//      viewGroup: updateOneViewGroup
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/viewGroups/${id}`, body, qs);
					
					}

				} else if (resource === 'viewSort') {

					// **********************************************************************
				//                                viewSort
				// **********************************************************************

					if (operation === 'createManyViewSorts') {

						// ----------------------------------------
					//      viewSort: createManyViewSorts
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/viewSorts', body, qs);
					
					} else if (operation === 'createOneViewSort') {

						// ----------------------------------------
					//       viewSort: createOneViewSort
					// ----------------------------------------

						const body = {
						fieldMetadataId: this.getNodeParameter('fieldMetadataId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/viewSorts', body, qs);
					
					} else if (operation === 'deleteOneViewSort') {

						// ----------------------------------------
					//       viewSort: deleteOneViewSort
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/viewSorts/${id}`);
					
					} else if (operation === 'findManyViewSorts') {

						// ----------------------------------------
					//       viewSort: findManyViewSorts
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/viewSorts', {}, qs);
					
					} else if (operation === 'findOneViewSort') {

						// ----------------------------------------
					//        viewSort: findOneViewSort
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/viewSorts/${id}`, {}, qs);
					
					} else if (operation === 'findViewSortDuplicates') {

						// ----------------------------------------
					//     viewSort: findViewSortDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/viewSorts/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneViewSort') {

						// ----------------------------------------
					//       viewSort: updateOneViewSort
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/viewSorts/${id}`, body, qs);
					
					}

				} else if (resource === 'webhook') {

					// **********************************************************************
				//                                webhook
				// **********************************************************************

					if (operation === 'createManyWebhooks') {

						// ----------------------------------------
					//       webhook: createManyWebhooks
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/webhooks', body, qs);
					
					} else if (operation === 'createOneWebhook') {

						// ----------------------------------------
					//        webhook: createOneWebhook
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/webhooks', body, qs);
					
					} else if (operation === 'deleteOneWebhook') {

						// ----------------------------------------
					//        webhook: deleteOneWebhook
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/webhooks/${id}`);
					
					} else if (operation === 'findManyWebhooks') {

						// ----------------------------------------
					//        webhook: findManyWebhooks
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/webhooks', {}, qs);
					
					} else if (operation === 'findOneWebhook') {

						// ----------------------------------------
					//         webhook: findOneWebhook
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/webhooks/${id}`, {}, qs);
					
					} else if (operation === 'findWebhookDuplicates') {

						// ----------------------------------------
					//      webhook: findWebhookDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/webhooks/duplicates', body, qs);
					
					} else if (operation === 'updateOneWebhook') {

						// ----------------------------------------
					//        webhook: updateOneWebhook
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/webhooks/${id}`, body, qs);
					
					}

				} else if (resource === 'workflow') {

					// **********************************************************************
				//                                workflow
				// **********************************************************************

					if (operation === 'createManyWorkflows') {

						// ----------------------------------------
					//      workflow: createManyWorkflows
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/workflows', body, qs);
					
					} else if (operation === 'createOneWorkflow') {

						// ----------------------------------------
					//       workflow: createOneWorkflow
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/workflows', body, qs);
					
					} else if (operation === 'deleteOneWorkflow') {

						// ----------------------------------------
					//       workflow: deleteOneWorkflow
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/workflows/${id}`);
					
					} else if (operation === 'findManyWorkflows') {

						// ----------------------------------------
					//       workflow: findManyWorkflows
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/workflows', {}, qs);
					
					} else if (operation === 'findOneWorkflow') {

						// ----------------------------------------
					//        workflow: findOneWorkflow
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/workflows/${id}`, {}, qs);
					
					} else if (operation === 'findWorkflowDuplicates') {

						// ----------------------------------------
					//     workflow: findWorkflowDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/workflows/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneWorkflow') {

						// ----------------------------------------
					//       workflow: updateOneWorkflow
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/workflows/${id}`, body, qs);
					
					}

				} else if (resource === 'workflowEventListener') {

					// **********************************************************************
				//                         workflowEventListener
				// **********************************************************************

					if (operation === 'createManyWorkflowEventListeners') {

						// ----------------------------------------
					// workflowEventListener: createManyWorkflowEventListeners
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/workflowEventListeners';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneWorkflowEventListener') {

						// ----------------------------------------
					// workflowEventListener: createOneWorkflowEventListener
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/workflowEventListeners';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'deleteOneWorkflowEventListener') {

						// ----------------------------------------
					// workflowEventListener: deleteOneWorkflowEventListener
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/workflowEventListeners/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyWorkflowEventListeners') {

						// ----------------------------------------
					// workflowEventListener: findManyWorkflowEventListeners
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/workflowEventListeners';
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findOneWorkflowEventListener') {

						// ----------------------------------------
					// workflowEventListener: findOneWorkflowEventListener
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/workflowEventListeners/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findWorkflowEventListenerDuplicates') {

						// ----------------------------------------
					// workflowEventListener: findWorkflowEventListenerDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/workflowEventListeners/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneWorkflowEventListener') {

						// ----------------------------------------
					// workflowEventListener: updateOneWorkflowEventListener
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/workflowEventListeners/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'workflowRun') {

					// **********************************************************************
				//                              workflowRun
				// **********************************************************************

					if (operation === 'createManyWorkflowRuns') {

						// ----------------------------------------
					//   workflowRun: createManyWorkflowRuns
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/batch/workflowRuns', body, qs);
					
					} else if (operation === 'createOneWorkflowRun') {

						// ----------------------------------------
					//    workflowRun: createOneWorkflowRun
					// ----------------------------------------

						const body = {
						workflowId: this.getNodeParameter('workflowId', i),
						workflowVersionId: this.getNodeParameter('workflowVersionId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/workflowRuns', body, qs);
					
					} else if (operation === 'deleteOneWorkflowRun') {

						// ----------------------------------------
					//    workflowRun: deleteOneWorkflowRun
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					responseData = await twentyApiRequest.call(this, 'DELETE', `/workflowRuns/${id}`);
					
					} else if (operation === 'findManyWorkflowRuns') {

						// ----------------------------------------
					//    workflowRun: findManyWorkflowRuns
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/workflowRuns', {}, qs);
					
					} else if (operation === 'findOneWorkflowRun') {

						// ----------------------------------------
					//     workflowRun: findOneWorkflowRun
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', `/workflowRuns/${id}`, {}, qs);
					
					} else if (operation === 'findWorkflowRunDuplicates') {

						// ----------------------------------------
					//  workflowRun: findWorkflowRunDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/workflowRuns/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneWorkflowRun') {

						// ----------------------------------------
					//    workflowRun: updateOneWorkflowRun
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'PATCH', `/workflowRuns/${id}`, body, qs);
					
					}

				} else if (resource === 'workflowVersion') {

					// **********************************************************************
				//                            workflowVersion
				// **********************************************************************

					if (operation === 'createManyWorkflowVersions') {

						// ----------------------------------------
					// workflowVersion: createManyWorkflowVersions
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/workflowVersions';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneWorkflowVersion') {

						// ----------------------------------------
					// workflowVersion: createOneWorkflowVersion
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/workflowVersions', body, qs);
					
					} else if (operation === 'deleteOneWorkflowVersion') {

						// ----------------------------------------
					// workflowVersion: deleteOneWorkflowVersion
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/workflowVersions/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyWorkflowVersions') {

						// ----------------------------------------
					// workflowVersion: findManyWorkflowVersions
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/workflowVersions', {}, qs);
					
					} else if (operation === 'findOneWorkflowVersion') {

						// ----------------------------------------
					// workflowVersion: findOneWorkflowVersion
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/workflowVersions/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findWorkflowVersionDuplicates') {

						// ----------------------------------------
					// workflowVersion: findWorkflowVersionDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/workflowVersions/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneWorkflowVersion') {

						// ----------------------------------------
					// workflowVersion: updateOneWorkflowVersion
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/workflowVersions/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

				} else if (resource === 'workspaceMember') {

					// **********************************************************************
				//                            workspaceMember
				// **********************************************************************

					if (operation === 'createManyWorkspaceMembers') {

						// ----------------------------------------
					// workspaceMember: createManyWorkspaceMembers
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/batch/workspaceMembers';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'createOneWorkspaceMember') {

						// ----------------------------------------
					// workspaceMember: createOneWorkspaceMember
					// ----------------------------------------

						const body = {
						userId: this.getNodeParameter('userId', i),
					} as IDataObject;

					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'POST', '/workspaceMembers', body, qs);
					
					} else if (operation === 'deleteOneWorkspaceMember') {

						// ----------------------------------------
					// workspaceMember: deleteOneWorkspaceMember
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const endpoint = `/workspaceMembers/${id}`;
					responseData = await twentyApiRequest.call(this, 'DELETE', endpoint);
					
					} else if (operation === 'findManyWorkspaceMembers') {

						// ----------------------------------------
					// workspaceMember: findManyWorkspaceMembers
					// ----------------------------------------

						const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					responseData = await twentyApiRequest.call(this, 'GET', '/workspaceMembers', {}, qs);
					
					} else if (operation === 'findOneWorkspaceMember') {

						// ----------------------------------------
					// workspaceMember: findOneWorkspaceMember
					// ----------------------------------------

						const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/workspaceMembers/${id}`;
					responseData = await twentyApiRequest.call(this, 'GET', endpoint, {}, qs);
					
					} else if (operation === 'findWorkspaceMemberDuplicates') {

						// ----------------------------------------
					// workspaceMember: findWorkspaceMemberDuplicates
					// ----------------------------------------

						const body = {} as IDataObject;
					const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;

					if (Object.keys(additionalFields).length) {
						Object.assign(body, additionalFields);
					}

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = '/workspaceMembers/duplicates';
					responseData = await twentyApiRequest.call(this, 'POST', endpoint, body, qs);
					
					} else if (operation === 'updateOneWorkspaceMember') {

						// ----------------------------------------
					// workspaceMember: updateOneWorkspaceMember
					// ----------------------------------------

						const body = {} as IDataObject;
					const updateFields = this.getNodeParameter('updateFields', i) as IDataObject;

					if (Object.keys(updateFields).length) {
						Object.assign(body, updateFields);
					}

					const id = this.getNodeParameter('id', i);

					const qs = {} as IDataObject;
					const query = this.getNodeParameter('query', i) as IDataObject;

					if (Object.keys(query).length) {
						Object.assign(qs, query);
					}

					const endpoint = `/workspaceMembers/${id}`;
					responseData = await twentyApiRequest.call(this, 'PATCH', endpoint, body, qs);
					
					}

			}
				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject),
					{ itemData: { item: i } },
				);
				returnData.push(...executionData);
			} catch(error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionErrorData);
					continue;
				}
				throw error;
			}
		}

		return this.prepareOutputData(returnData);
	}
} 
