import type {
	INodeProperties,
} from 'n8n-workflow';

export const blocklistOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'blocklist',
				],
			},
		},
		options: [
			{
				name: 'Create Many Blocklists',
				value: 'createManyBlocklists',
				action: 'Create many blocklists',
			},
			{
				name: 'Create One Blocklist',
				value: 'createOneBlocklist',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **blocklists**',
				action: 'Create one blocklist',
			},
			{
				name: 'Delete One Blocklist',
				value: 'deleteOneBlocklist',
				description: '**depth** can be provided to request your **blocklist**',
				action: 'Delete one blocklist',
			},
			{
				name: 'Find Blocklist Duplicates',
				value: 'findBlocklistDuplicates',
				description: '**depth** can be provided to request your **blocklist**',
				action: 'Find blocklist duplicates',
			},
			{
				name: 'Find Many Blocklists',
				value: 'findManyBlocklists',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **blocklists**',
				action: 'Find many blocklists',
			},
			{
				name: 'Find One Blocklist',
				value: 'findOneBlocklist',
				description: '**depth** can be provided to request your **blocklist**',
				action: 'Find one blocklist',
			},
			{
				name: 'Update One Blocklist',
				value: 'updateOneBlocklist',
				description: '**depth** can be provided to request your **blocklist**',
				action: 'Update one blocklist',
			},
		],
		default: 'createManyBlocklists',
	},
];

export const blocklistFields: INodeProperties[] = [
	// ----------------------------------------
	//     blocklist: createManyBlocklists
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
					'blocklist',
				],
				operation: [
					'createManyBlocklists',
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
					'blocklist',
				],
				operation: [
					'createManyBlocklists',
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
						'blocklist',
					],
					operation: [
						'createManyBlocklists',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      blocklist: createOneBlocklist
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
					'blocklist',
				],
				operation: [
					'createOneBlocklist',
				],
			},
		},
	},
	{
		displayName: 'Workspace Member ID',
		name: 'workspaceMemberId',
		description: 'WorkspaceMember ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'blocklist',
				],
				operation: [
					'createOneBlocklist',
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
					'blocklist',
				],
				operation: [
					'createOneBlocklist',
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
				displayName: 'Handle',
				name: 'handle',
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
						'blocklist',
					],
					operation: [
						'createOneBlocklist',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      blocklist: deleteOneBlocklist
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
					'blocklist',
				],
				operation: [
					'deleteOneBlocklist',
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
						'blocklist',
					],
					operation: [
						'deleteOneBlocklist',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    blocklist: findBlocklistDuplicates
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
					'blocklist',
				],
				operation: [
					'findBlocklistDuplicates',
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
					'blocklist',
				],
				operation: [
					'findBlocklistDuplicates',
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
{
displayName: 'Workspace Member ID',
name: 'workspaceMemberId',
type: 'string',
default: '',
description: 'WorkspaceMember ID foreign key',
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
						'blocklist',
					],
					operation: [
						'findBlocklistDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      blocklist: findManyBlocklists
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
					'blocklist',
				],
				operation: [
					'findManyBlocklists',
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
						'blocklist',
					],
					operation: [
						'findManyBlocklists',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       blocklist: findOneBlocklist
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
					'blocklist',
				],
				operation: [
					'findOneBlocklist',
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
					'blocklist',
				],
				operation: [
					'findOneBlocklist',
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
						'blocklist',
					],
					operation: [
						'findOneBlocklist',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      blocklist: updateOneBlocklist
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
					'blocklist',
				],
				operation: [
					'updateOneBlocklist',
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
					'blocklist',
				],
				operation: [
					'updateOneBlocklist',
				],
			},
		},
	},
	{
		displayName: 'Workspace Member ID',
		name: 'workspaceMemberId',
		description: 'WorkspaceMember ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'blocklist',
				],
				operation: [
					'updateOneBlocklist',
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
					'blocklist',
				],
				operation: [
					'updateOneBlocklist',
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
				displayName: 'Handle',
				name: 'handle',
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
						'blocklist',
					],
					operation: [
						'updateOneBlocklist',
					],
				},
			},
		},
];
