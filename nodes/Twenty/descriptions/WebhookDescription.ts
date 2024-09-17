import type {
	INodeProperties,
} from 'n8n-workflow';

export const webhookOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
			},
		},
		options: [
			{
				name: 'Create Many Webhooks',
				value: 'createManyWebhooks',
				action: 'Create many webhooks',
			},
			{
				name: 'Create One Webhook',
				value: 'createOneWebhook',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **webhooks**',
				action: 'Create one webhook',
			},
			{
				name: 'Delete One Webhook',
				value: 'deleteOneWebhook',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Delete one webhook',
			},
			{
				name: 'Find Many Webhooks',
				value: 'findManyWebhooks',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **webhooks**',
				action: 'Find many webhooks',
			},
			{
				name: 'Find One Webhook',
				value: 'findOneWebhook',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Find one webhook',
			},
			{
				name: 'Find Webhook Duplicates',
				value: 'findWebhookDuplicates',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Find webhook duplicates',
			},
			{
				name: 'Update One Webhook',
				value: 'updateOneWebhook',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Update one webhook',
			},
		],
		default: 'createManyWebhooks',
	},
];

export const webhookFields: INodeProperties[] = [
	// ----------------------------------------
	//       webhook: createManyWebhooks
	// ----------------------------------------
	{
		displayName: 'Query',
		name: 'query',

		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: 'options',
					options: [
						{
							name: '0',
							value: '0',
						},
						{
							name: '1',
							value: '1',
						},
						{
							name: '2',
							value: '2',
						},
					],
					default: '1',
					description: 'Limits the depth objects returned',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'createManyWebhooks',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'createManyWebhooks',
				],
			},
		},
		options: [
		],
	},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'webhook',
					],
					operation: [
						'createManyWebhooks',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        webhook: createOneWebhook
	// ----------------------------------------
	{
		displayName: 'Query',
		name: 'query',

		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: 'options',
					options: [
						{
							name: '0',
							value: '0',
						},
						{
							name: '1',
							value: '1',
						},
						{
							name: '2',
							value: '2',
						},
					],
					default: '1',
					description: 'Limits the depth objects returned',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'createOneWebhook',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'createOneWebhook',
				],
			},
		},
		options: [
			{
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'string',
				default: '',
				description: 'Webhook operation',
			},
			{
				displayName: 'Target Url',
				name: 'targetUrl',
				type: 'string',
				default: '',
				description: 'Webhook target URL',
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
		],
	},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'webhook',
					],
					operation: [
						'createOneWebhook',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        webhook: deleteOneWebhook
	// ----------------------------------------
	{
		displayName: 'ID',
		name: 'id',
		description: 'Object ID',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'deleteOneWebhook',
				],
			},
		},
	},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'webhook',
					],
					operation: [
						'deleteOneWebhook',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        webhook: findManyWebhooks
	// ----------------------------------------
	{
		displayName: 'Query',
		name: 'query',

		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: 'options',
					options: [
						{
							name: '0',
							value: '0',
						},
						{
							name: '1',
							value: '1',
						},
						{
							name: '2',
							value: '2',
						},
					],
					default: '1',
					description: 'Limits the depth objects returned',
				},
				{
					displayName: 'Ending Before',
					name: 'ending_before',
					type: 'string',
					default: '',
					description: 'Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
				},
				{
					displayName: 'Filter',
					name: 'filter',
					type: 'string',
					default: '',
					description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2,...** Available comparators are **eq**, **neq**, **in**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
				},
				{
					displayName: 'Limit',
					name: 'limit',
					type: 'number',
					typeOptions: {
						minValue: 1,
					},
					default: 50,
					description: 'Max number of results to return',
				},
				{
					displayName: 'Order By',
					name: 'order_by',
					type: 'string',
					default: '',
					description: 'Sorts objects returned. Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...** Available directions are **AscNullsFirst**, **AscNullsLast**, **DescNullsFirst**, **DescNullsLast**. Default direction is **AscNullsFirst**',
				},
				{
					displayName: 'Starting After',
					name: 'starting_after',
					type: 'string',
					default: '',
					description: 'Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'findManyWebhooks',
				],
			},
		},
	},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'webhook',
					],
					operation: [
						'findManyWebhooks',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         webhook: findOneWebhook
	// ----------------------------------------
	{
		displayName: 'ID',
		name: 'id',
		description: 'Object ID',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'findOneWebhook',
				],
			},
		},
	},
	{
		displayName: 'Query',
		name: 'query',

		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: 'options',
					options: [
						{
							name: '0',
							value: '0',
						},
						{
							name: '1',
							value: '1',
						},
						{
							name: '2',
							value: '2',
						},
					],
					default: '1',
					description: 'Limits the depth objects returned',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'findOneWebhook',
				],
			},
		},
	},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'webhook',
					],
					operation: [
						'findOneWebhook',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      webhook: findWebhookDuplicates
	// ----------------------------------------
	{
		displayName: 'Query',
		name: 'query',

		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: 'options',
					options: [
						{
							name: '0',
							value: '0',
						},
						{
							name: '1',
							value: '1',
						},
						{
							name: '2',
							value: '2',
						},
					],
					default: '1',
					description: 'Limits the depth objects returned',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'findWebhookDuplicates',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'findWebhookDuplicates',
				],
			},
		},
		options: [
				{
displayName: 'Data',
name: 'data',
placeholder: 'Add Data Field',
type: 'fixedCollection',
default: {},
options: [{
displayName: 'Data Fields',
name: 'dataFields',
values: [
{
displayName: 'Target Url',
name: 'targetUrl',
type: 'string',
default: '',
description: 'Webhook target URL',
},
{
displayName: 'Operation',
name: 'operation',
type: 'string',
default: '',
description: 'Webhook operation',
},
{
displayName: 'Description',
name: 'description',
type: 'string',
default: '',
},
{
displayName: 'ID',
name: 'id',
type: 'string',
default: '',
},
{
displayName: 'Created At',
name: 'createdAt',
type: 'string',
default: '',
description: 'Creation date',
},
{
displayName: 'Updated At',
name: 'updatedAt',
type: 'dateTime',
default: '',
description: 'Last time the record was changed',
},
]}],
},
			{
				displayName: 'IDs',
				name: 'ids',
				type: 'string',
				default: '',
			},
		],
	},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'webhook',
					],
					operation: [
						'findWebhookDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        webhook: updateOneWebhook
	// ----------------------------------------
	{
		displayName: 'ID',
		name: 'id',
		description: 'Object ID',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'updateOneWebhook',
				],
			},
		},
	},
	{
		displayName: 'Query',
		name: 'query',

		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: 'options',
					options: [
						{
							name: '0',
							value: '0',
						},
						{
							name: '1',
							value: '1',
						},
						{
							name: '2',
							value: '2',
						},
					],
					default: '1',
					description: 'Limits the depth objects returned',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'updateOneWebhook',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'webhook',
				],
				operation: [
					'updateOneWebhook',
				],
			},
		},
		options: [
			{
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'string',
				default: '',
				description: 'Webhook operation',
			},
			{
				displayName: 'Target Url',
				name: 'targetUrl',
				type: 'string',
				default: '',
				description: 'Webhook target URL',
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
		],
	},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
			displayOptions: {
				show: {
					resource: [
						'webhook',
					],
					operation: [
						'updateOneWebhook',
					],
				},
			},
		},
];
