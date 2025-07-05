import type { INodeProperties } from 'n8n-workflow';

export const apiKeyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['apiKey'],
			},
		},
		options: [
			{
				name: 'Create Many Api Keys',
				value: 'createManyApiKeys',
				action: 'Create Many apiKeys',
			},
			{
				name: 'Create One Api Key',
				value: 'createOneApiKey',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **apiKeys**',
				action: 'Create One apiKey',
			},
			{
				name: 'Delete One Api Key',
				value: 'deleteOneApiKey',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Delete One apiKey',
			},
			{
				name: 'Find Api Key Duplicates',
				value: 'findApiKeyDuplicates',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Find apiKey Duplicates',
			},
			{
				name: 'Find Many Api Keys',
				value: 'findManyApiKeys',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **apiKeys**',
				action: 'Find Many apiKeys',
			},
			{
				name: 'Find One Api Key',
				value: 'findOneApiKey',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Find One apiKey',
			},
			{
				name: 'Update One Api Key',
				value: 'updateOneApiKey',
				description: '**depth** can be provided to request your **apiKey**',
				action: 'Update One apiKey',
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
		description: '',
		type: 'collection',
		placeholder: 'Add Query',
		options: [
			{
				displayName: 'Depth',
				name: 'depth',
				type: '',
				default: '',
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['createManyApiKeys'],
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
				resource: ['apiKey'],
				operation: ['createManyApiKeys'],
			},
		},
		options: [],
	},
	{
		displayName: 'Scope',
		name: 'scope',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['createManyApiKeys'],
			},
		},
	},

	// ----------------------------------------
	//         apiKey: createOneApiKey
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['createOneApiKey'],
			},
		},
	},
	{
		displayName: 'Expires At',
		name: 'expiresAt',
		description: 'ApiKey expiration date',
		type: 'dateTime',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['createOneApiKey'],
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
				resource: ['apiKey'],
				operation: ['createOneApiKey'],
			},
		},
		options: [
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
				type: 'dateTime',
				default: '',
				description: 'ApiKey revocation date',
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
				resource: ['apiKey'],
				operation: ['createOneApiKey'],
			},
		},
	},

	// ----------------------------------------
	//         apiKey: deleteOneApiKey
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
				resource: ['apiKey'],
				operation: ['deleteOneApiKey'],
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
				resource: ['apiKey'],
				operation: ['deleteOneApiKey'],
			},
		},
	},

	// ----------------------------------------
	//       apiKey: findApiKeyDuplicates
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['findApiKeyDuplicates'],
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
				resource: ['apiKey'],
				operation: ['findApiKeyDuplicates'],
			},
		},
		options: [
			{
				displayName: 'Data',
				name: 'data',
				placeholder: 'Add Data Field',
				type: 'fixedCollection',
				default: {},
				options: [
					{
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
						],
					},
				],
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
				resource: ['apiKey'],
				operation: ['findApiKeyDuplicates'],
			},
		},
	},

	// ----------------------------------------
	//         apiKey: findManyApiKeys
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
			{
				displayName: 'Ending Before',
				name: 'ending_before',
				type: 'string',
				default: '',
				description:
					'Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				description:
					'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **containsAny**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 0,
				description: 'Limits the number of objects returned.',
			},
			{
				displayName: 'Order By',
				name: 'order_by',
				type: 'string',
				default: '',
				description:
					'Sorts objects returned. Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...** Available directions are **AscNullsFirst**, **AscNullsLast**, **DescNullsFirst**, **DescNullsLast**. Default direction is **AscNullsFirst**',
			},
			{
				displayName: 'Starting After',
				name: 'starting_after',
				type: 'string',
				default: '',
				description:
					'Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['findManyApiKeys'],
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
				resource: ['apiKey'],
				operation: ['findManyApiKeys'],
			},
		},
	},

	// ----------------------------------------
	//          apiKey: findOneApiKey
	// ----------------------------------------
	{
		displayName: 'ID',
		name: 'id',
		description: 'Object id.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['findOneApiKey'],
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['findOneApiKey'],
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
				resource: ['apiKey'],
				operation: ['findOneApiKey'],
			},
		},
	},

	// ----------------------------------------
	//         apiKey: updateOneApiKey
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
				resource: ['apiKey'],
				operation: ['updateOneApiKey'],
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['apiKey'],
				operation: ['updateOneApiKey'],
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
				resource: ['apiKey'],
				operation: ['updateOneApiKey'],
			},
		},
		options: [
			{
				displayName: 'Expires At',
				name: 'expiresAt',
				type: 'dateTime',
				default: '',
				description: 'ApiKey expiration date',
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
				type: 'dateTime',
				default: '',
				description: 'ApiKey revocation date',
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
				resource: ['apiKey'],
				operation: ['updateOneApiKey'],
			},
		},
	},
];
