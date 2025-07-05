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
				action: 'Create Many webhooks',
			},
			{
				name: 'Create One Webhook',
				value: 'createOneWebhook',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **webhooks**',
				action: 'Create One webhook',
			},
			{
				name: 'Delete One Webhook',
				value: 'deleteOneWebhook',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Delete One webhook',
			},
			{
				name: 'Find Many Webhooks',
				value: 'findManyWebhooks',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **webhooks**',
				action: 'Find Many webhooks',
			},
			{
				name: 'Find One Webhook',
				value: 'findOneWebhook',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Find One webhook',
			},
			{
				name: 'Find Webhook Duplicates',
				value: 'findWebhookDuplicates',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Find webhook Duplicates',
			},
			{
				name: 'Update One Webhook',
				value: 'updateOneWebhook',
				description: '**depth** can be provided to request your **webhook**',
				action: 'Update One webhook',
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
		description: '',
		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: '',
					default: '',
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
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
		description: '',
		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: '',
					default: '',
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
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
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Operations',
				name: 'operations',
				type: 'string',
				default: [],
				description: 'Webhook operations',
			},
			{
				displayName: 'Secret',
				name: 'secret',
				type: 'string',
				default: '',
				description: 'Optional secret used to compute the HMAC signature for webhook payloads. This secret is shared between Twenty and the webhook consumer to authenticate webhook requests.',
			},
			{
				displayName: 'Target Url',
				name: 'targetUrl',
				type: 'string',
				default: '',
				description: 'Webhook target url',
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
		description: 'Object id.',
		type: '',
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
		description: '',
		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: '',
					default: '',
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
				},
				{
					displayName: 'Ending Before',
					name: 'ending_before',
					type: '',
					default: '',
					description: 'Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data',
				},
				{
					displayName: 'Filter',
					name: 'filter',
					type: '',
					default: '',
					description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **containsAny**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
				},
				{
					displayName: 'Limit',
					name: 'limit',
					type: '',
					default: '',
					description: 'Limits the number of objects returned.',
				},
				{
					displayName: 'Order By',
					name: 'order_by',
					type: '',
					default: '',
					description: 'Sorts objects returned. Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...** Available directions are **AscNullsFirst**, **AscNullsLast**, **DescNullsFirst**, **DescNullsLast**. Default direction is **AscNullsFirst**',
				},
				{
					displayName: 'Starting After',
					name: 'starting_after',
					type: '',
					default: '',
					description: 'Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data',
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
		description: 'Object id.',
		type: '',
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
		description: '',
		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: '',
					default: '',
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
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
		description: '',
		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: '',
					default: '',
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
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
displayName: '0',
name: '0',
type: 'undefined',
default: '',
},
{
displayName: '1',
name: '1',
type: 'undefined',
default: '',
},
{
displayName: '2',
name: '2',
type: 'undefined',
default: '',
},
{
displayName: '3',
name: '3',
type: 'undefined',
default: '',
},
{
displayName: '4',
name: '4',
type: 'undefined',
default: '',
},
{
displayName: '5',
name: '5',
type: 'undefined',
default: '',
},
{
displayName: '6',
name: '6',
type: 'undefined',
default: '',
},
{
displayName: '7',
name: '7',
type: 'undefined',
default: '',
},
{
displayName: '8',
name: '8',
type: 'undefined',
default: '',
},
{
displayName: '9',
name: '9',
type: 'undefined',
default: '',
},
]}],
},
			{
				displayName: 'IDs',
				name: 'ids',
				type: 'string',
				default: [],
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
		description: 'Object id.',
		type: '',
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
		description: '',
		type: 'collection',
		placeholder: 'Add Query',
		options: [
				{
					displayName: 'Depth',
					name: 'depth',
					type: '',
					default: '',
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
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
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Operations',
				name: 'operations',
				type: 'string',
				default: [],
				description: 'Webhook operations',
			},
			{
				displayName: 'Secret',
				name: 'secret',
				type: 'string',
				default: '',
				description: 'Optional secret used to compute the HMAC signature for webhook payloads. This secret is shared between Twenty and the webhook consumer to authenticate webhook requests.',
			},
			{
				displayName: 'Target Url',
				name: 'targetUrl',
				type: 'string',
				default: '',
				description: 'Webhook target url',
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
