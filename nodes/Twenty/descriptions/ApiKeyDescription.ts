import type {
	INodeProperties,
} from 'n8n-workflow';

export const apiKeyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'apiKey',
				],
			},
		},
		options: [
			{
				name: 'Create Many Api Keys',
				value: 'createManyApiKeys',
				action: 'Create many api keys',
			},
			{
				name: 'Create One Api Key',
				value: 'createOneApiKey',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **apiKeys**',
				action: 'Create one api key',
			},
			{
				name: 'Delete One Api Key',
				value: 'deleteOneApiKey',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Delete one api key',
			},
			{
				name: 'Find Api Key Duplicates',
				value: 'findApiKeyDuplicates',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Find api key duplicates',
			},
			{
				name: 'Find Many Api Keys',
				value: 'findManyApiKeys',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **apiKeys**',
				action: 'Find many api keys',
			},
			{
				name: 'Find One Api Key',
				value: 'findOneApiKey',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Find one api key',
			},
			{
				name: 'Update One Api Key',
				value: 'updateOneApiKey',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Update one api key',
			},
		],
		default: 'createManyApiKeys',
	},
];

export const apiKeyFields: INodeProperties[] = [
	// ----------------------------------------
	//        apiKey: createManyApiKeys
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
					'apiKey',
				],
				operation: [
					'createManyApiKeys',
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
					'apiKey',
				],
				operation: [
					'createManyApiKeys',
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
						'apiKey',
					],
					operation: [
						'createManyApiKeys',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         apiKey: createOneApiKey
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
					'apiKey',
				],
				operation: [
					'createOneApiKey',
				],
			},
		},
	},
	{
		displayName: 'Expires At',
		name: 'expiresAt',
		description: 'ApiKey expiration date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'apiKey',
				],
				operation: [
					'createOneApiKey',
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
					'apiKey',
				],
				operation: [
					'createOneApiKey',
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
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'ApiKey name',
			},
			{
				displayName: 'Revoked At',
				name: 'revokedAt',
				type: 'string',
				default: '',
				description: 'ApiKey revocation date',
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
						'apiKey',
					],
					operation: [
						'createOneApiKey',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         apiKey: deleteOneApiKey
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
					'apiKey',
				],
				operation: [
					'deleteOneApiKey',
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
						'apiKey',
					],
					operation: [
						'deleteOneApiKey',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       apiKey: findApiKeyDuplicates
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
					'apiKey',
				],
				operation: [
					'findApiKeyDuplicates',
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
					'apiKey',
				],
				operation: [
					'findApiKeyDuplicates',
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
displayName: 'Name',
name: 'name',
type: 'string',
default: '',
description: 'ApiKey name',
},
{
displayName: 'Expires At',
name: 'expiresAt',
type: 'string',
default: '',
description: 'ApiKey expiration date',
},
{
displayName: 'Revoked At',
name: 'revokedAt',
type: 'string',
default: '',
description: 'ApiKey revocation date',
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
						'apiKey',
					],
					operation: [
						'findApiKeyDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         apiKey: findManyApiKeys
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
					'apiKey',
				],
				operation: [
					'findManyApiKeys',
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
						'apiKey',
					],
					operation: [
						'findManyApiKeys',
					],
				},
			},
		},
	
	// ----------------------------------------
	//          apiKey: findOneApiKey
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
					'apiKey',
				],
				operation: [
					'findOneApiKey',
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
					'apiKey',
				],
				operation: [
					'findOneApiKey',
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
						'apiKey',
					],
					operation: [
						'findOneApiKey',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         apiKey: updateOneApiKey
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
					'apiKey',
				],
				operation: [
					'updateOneApiKey',
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
					'apiKey',
				],
				operation: [
					'updateOneApiKey',
				],
			},
		},
	},
	{
		displayName: 'Expires At',
		name: 'expiresAt',
		description: 'ApiKey expiration date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'apiKey',
				],
				operation: [
					'updateOneApiKey',
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
					'apiKey',
				],
				operation: [
					'updateOneApiKey',
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
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'ApiKey name',
			},
			{
				displayName: 'Revoked At',
				name: 'revokedAt',
				type: 'string',
				default: '',
				description: 'ApiKey revocation date',
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
						'apiKey',
					],
					operation: [
						'updateOneApiKey',
					],
				},
			},
		},
];
