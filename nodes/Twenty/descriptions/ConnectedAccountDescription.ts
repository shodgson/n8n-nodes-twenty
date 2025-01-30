import type {
	INodeProperties,
} from 'n8n-workflow';

export const connectedAccountOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'connectedAccount',
				],
			},
		},
		options: [
			{
				name: 'Create Many Connected Accounts',
				value: 'createManyConnectedAccounts',
				action: 'Create many connected accounts',
			},
			{
				name: 'Create One Connected Account',
				value: 'createOneConnectedAccount',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **connectedAccounts**',
				action: 'Create one connected account',
			},
			{
				name: 'Delete One Connected Account',
				value: 'deleteOneConnectedAccount',
				description: '**depth** can be provided to request your **connectedAccount**',
				action: 'Delete one connected account',
			},
			{
				name: 'Find Connected Account Duplicates',
				value: 'findConnectedAccountDuplicates',
				description: '**depth** can be provided to request your **connectedAccount**',
				action: 'Find connected account duplicates',
			},
			{
				name: 'Find Many Connected Accounts',
				value: 'findManyConnectedAccounts',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **connectedAccounts**',
				action: 'Find many connected accounts',
			},
			{
				name: 'Find One Connected Account',
				value: 'findOneConnectedAccount',
				description: '**depth** can be provided to request your **connectedAccount**',
				action: 'Find one connected account',
			},
			{
				name: 'Update One Connected Account',
				value: 'updateOneConnectedAccount',
				description: '**depth** can be provided to request your **connectedAccount**',
				action: 'Update one connected account',
			},
		],
		default: 'createManyConnectedAccounts',
	},
];

export const connectedAccountFields: INodeProperties[] = [
	// ----------------------------------------
	// connectedAccount: createManyConnectedAccounts
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
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connectedAccount',
				],
				operation: [
					'createManyConnectedAccounts',
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
					'connectedAccount',
				],
				operation: [
					'createManyConnectedAccounts',
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
						'connectedAccount',
					],
					operation: [
						'createManyConnectedAccounts',
					],
				},
			},
		},
	
	// ----------------------------------------
	// connectedAccount: createOneConnectedAccount
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
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connectedAccount',
				],
				operation: [
					'createOneConnectedAccount',
				],
			},
		},
	},
	{
		displayName: 'Account Owner ID',
		name: 'accountOwnerId',
		description: 'Account Owner ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'connectedAccount',
				],
				operation: [
					'createOneConnectedAccount',
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
					'connectedAccount',
				],
				operation: [
					'createOneConnectedAccount',
				],
			},
		},
		options: [
			{
				displayName: 'Access Token',
				name: 'accessToken',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Messaging provider access token',
			},
			{
				displayName: 'Auth Failed At',
				name: 'authFailedAt',
				type: 'dateTime',
				default: '',

			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',
				description: 'The account handle (email, username, phone number, etc.)',
			},
			{
				displayName: 'Handle Aliases',
				name: 'handleAliases',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Last Sync History ID',
				name: 'lastSyncHistoryId',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Provider',
				name: 'provider',
				type: 'string',
				default: '',
				description: 'The account provider',
			},
			{
				displayName: 'Refresh Token',
				name: 'refreshToken',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Messaging provider refresh token',
			},
			{
				displayName: 'Scopes',
				name: 'scopes',
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
						'connectedAccount',
					],
					operation: [
						'createOneConnectedAccount',
					],
				},
			},
		},
	
	// ----------------------------------------
	// connectedAccount: deleteOneConnectedAccount
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
					'connectedAccount',
				],
				operation: [
					'deleteOneConnectedAccount',
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
						'connectedAccount',
					],
					operation: [
						'deleteOneConnectedAccount',
					],
				},
			},
		},
	
	// ----------------------------------------
	// connectedAccount: findConnectedAccountDuplicates
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
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connectedAccount',
				],
				operation: [
					'findConnectedAccountDuplicates',
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
					'connectedAccount',
				],
				operation: [
					'findConnectedAccountDuplicates',
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
displayName: 'Handle',
name: 'handle',
type: 'string',
default: '',
description: 'The account handle (email, username, phone number, etc.)',
},
{
displayName: 'Provider',
name: 'provider',
type: 'string',
default: '',
description: 'The account provider',
},
{
displayName: 'Access Token',
name: 'accessToken',
type: 'string',
typeOptions: { password: true },
default: '',
description: 'Messaging provider access token',
},
{
displayName: 'Refresh Token',
name: 'refreshToken',
type: 'string',
typeOptions: { password: true },
default: '',
description: 'Messaging provider refresh token',
},
{
displayName: 'Last Sync History ID',
name: 'lastSyncHistoryId',
type: 'string',
default: '',
},
{
displayName: 'Auth Failed At',
name: 'authFailedAt',
type: 'dateTime',
default: '',
},
{
displayName: 'Handle Aliases',
name: 'handleAliases',
type: 'string',
default: '',
},
{
displayName: 'Scopes',
name: 'scopes',
type: 'string',
typeOptions: {
multipleValues: true,
},
default: [],
},
{
displayName: 'Account Owner ID',
name: 'accountOwnerId',
type: 'string',
default: '',
description: 'Account Owner ID foreign key',
},
]}],
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
						'connectedAccount',
					],
					operation: [
						'findConnectedAccountDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// connectedAccount: findManyConnectedAccounts
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
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
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
					description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **containsAny**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
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
					'connectedAccount',
				],
				operation: [
					'findManyConnectedAccounts',
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
						'connectedAccount',
					],
					operation: [
						'findManyConnectedAccounts',
					],
				},
			},
		},
	
	// ----------------------------------------
	// connectedAccount: findOneConnectedAccount
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
					'connectedAccount',
				],
				operation: [
					'findOneConnectedAccount',
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
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connectedAccount',
				],
				operation: [
					'findOneConnectedAccount',
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
						'connectedAccount',
					],
					operation: [
						'findOneConnectedAccount',
					],
				},
			},
		},
	
	// ----------------------------------------
	// connectedAccount: updateOneConnectedAccount
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
					'connectedAccount',
				],
				operation: [
					'updateOneConnectedAccount',
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
					description: 'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object\’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'connectedAccount',
				],
				operation: [
					'updateOneConnectedAccount',
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
					'connectedAccount',
				],
				operation: [
					'updateOneConnectedAccount',
				],
			},
		},
		options: [
			{
				displayName: 'Access Token',
				name: 'accessToken',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Messaging provider access token',
			},
			{
				displayName: 'Account Owner ID',
				name: 'accountOwnerId',
				type: 'string',
				default: '',
				description: 'Account Owner ID foreign key',
			},
			{
				displayName: 'Auth Failed At',
				name: 'authFailedAt',
				type: 'dateTime',
				default: '',

			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',
				description: 'The account handle (email, username, phone number, etc.)',
			},
			{
				displayName: 'Handle Aliases',
				name: 'handleAliases',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Last Sync History ID',
				name: 'lastSyncHistoryId',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Provider',
				name: 'provider',
				type: 'string',
				default: '',
				description: 'The account provider',
			},
			{
				displayName: 'Refresh Token',
				name: 'refreshToken',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Messaging provider refresh token',
			},
			{
				displayName: 'Scopes',
				name: 'scopes',
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
						'connectedAccount',
					],
					operation: [
						'updateOneConnectedAccount',
					],
				},
			},
		},
];
