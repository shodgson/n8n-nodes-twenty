import type {
	INodeProperties,
} from 'n8n-workflow';

export const activityTargetOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'activityTarget',
				],
			},
		},
		options: [
			{
				name: 'Create Many Activity Targets',
				value: 'createManyActivityTargets',
				action: 'Create many activity targets',
			},
			{
				name: 'Create One Activity Target',
				value: 'createOneActivityTarget',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **activityTargets**',
				action: 'Create one activity target',
			},
			{
				name: 'Delete One Activity Target',
				value: 'deleteOneActivityTarget',
				description: '**depth** can be provided to request your **activityTarget**',
				action: 'Delete one activity target',
			},
			{
				name: 'Find Activity Target Duplicates',
				value: 'findActivityTargetDuplicates',
				description: '**depth** can be provided to request your **activityTarget**',
				action: 'Find activity target duplicates',
			},
			{
				name: 'Find Many Activity Targets',
				value: 'findManyActivityTargets',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **activityTargets**',
				action: 'Find many activity targets',
			},
			{
				name: 'Find One Activity Target',
				value: 'findOneActivityTarget',
				description: '**depth** can be provided to request your **activityTarget**',
				action: 'Find one activity target',
			},
			{
				name: 'Update One Activity Target',
				value: 'updateOneActivityTarget',
				description: '**depth** can be provided to request your **activityTarget**',
				action: 'Update one activity target',
			},
		],
		default: 'createManyActivityTargets',
	},
];

export const activityTargetFields: INodeProperties[] = [
	// ----------------------------------------
	// activityTarget: createManyActivityTargets
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
					'activityTarget',
				],
				operation: [
					'createManyActivityTargets',
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
					'activityTarget',
				],
				operation: [
					'createManyActivityTargets',
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
						'activityTarget',
					],
					operation: [
						'createManyActivityTargets',
					],
				},
			},
		},
	
	// ----------------------------------------
	// activityTarget: createOneActivityTarget
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
					'activityTarget',
				],
				operation: [
					'createOneActivityTarget',
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
					'activityTarget',
				],
				operation: [
					'createOneActivityTarget',
				],
			},
		},
		options: [
			{
				displayName: 'Activity ID',
				name: 'activityId',
				type: 'string',
				default: '',
				description: 'ActivityTarget activity ID foreign key',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'ActivityTarget company ID foreign key',
			},
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
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'ActivityTarget opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'ActivityTarget person ID foreign key',
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
						'activityTarget',
					],
					operation: [
						'createOneActivityTarget',
					],
				},
			},
		},
	
	// ----------------------------------------
	// activityTarget: deleteOneActivityTarget
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
					'activityTarget',
				],
				operation: [
					'deleteOneActivityTarget',
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
						'activityTarget',
					],
					operation: [
						'deleteOneActivityTarget',
					],
				},
			},
		},
	
	// ----------------------------------------
	// activityTarget: findActivityTargetDuplicates
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
					'activityTarget',
				],
				operation: [
					'findActivityTargetDuplicates',
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
					'activityTarget',
				],
				operation: [
					'findActivityTargetDuplicates',
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
displayName: 'Activity ID',
name: 'activityId',
type: 'string',
default: '',
description: 'ActivityTarget activity ID foreign key',
},
{
displayName: 'Person ID',
name: 'personId',
type: 'string',
default: '',
description: 'ActivityTarget person ID foreign key',
},
{
displayName: 'Company ID',
name: 'companyId',
type: 'string',
default: '',
description: 'ActivityTarget company ID foreign key',
},
{
displayName: 'Opportunity ID',
name: 'opportunityId',
type: 'string',
default: '',
description: 'ActivityTarget opportunity ID foreign key',
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
						'activityTarget',
					],
					operation: [
						'findActivityTargetDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// activityTarget: findManyActivityTargets
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
					'activityTarget',
				],
				operation: [
					'findManyActivityTargets',
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
						'activityTarget',
					],
					operation: [
						'findManyActivityTargets',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  activityTarget: findOneActivityTarget
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
					'activityTarget',
				],
				operation: [
					'findOneActivityTarget',
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
					'activityTarget',
				],
				operation: [
					'findOneActivityTarget',
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
						'activityTarget',
					],
					operation: [
						'findOneActivityTarget',
					],
				},
			},
		},
	
	// ----------------------------------------
	// activityTarget: updateOneActivityTarget
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
					'activityTarget',
				],
				operation: [
					'updateOneActivityTarget',
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
					'activityTarget',
				],
				operation: [
					'updateOneActivityTarget',
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
					'activityTarget',
				],
				operation: [
					'updateOneActivityTarget',
				],
			},
		},
		options: [
			{
				displayName: 'Activity ID',
				name: 'activityId',
				type: 'string',
				default: '',
				description: 'ActivityTarget activity ID foreign key',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'ActivityTarget company ID foreign key',
			},
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
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'ActivityTarget opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'ActivityTarget person ID foreign key',
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
						'activityTarget',
					],
					operation: [
						'updateOneActivityTarget',
					],
				},
			},
		},
];
