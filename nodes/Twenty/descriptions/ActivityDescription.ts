import type {
	INodeProperties,
} from 'n8n-workflow';

export const activityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'activity',
				],
			},
		},
		options: [
			{
				name: 'Create Many Activities',
				value: 'createManyActivities',
				action: 'Create many activities',
			},
			{
				name: 'Create One Activity',
				value: 'createOneActivity',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **activities**',
				action: 'Create one activity',
			},
			{
				name: 'Delete One Activity',
				value: 'deleteOneActivity',
				description: '**depth** can be provided to request your **activity**',
				action: 'Delete one activity',
			},
			{
				name: 'Find Activity Duplicates',
				value: 'findActivityDuplicates',
				description: '**depth** can be provided to request your **activity**',
				action: 'Find activity duplicates',
			},
			{
				name: 'Find Many Activities',
				value: 'findManyActivities',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **activities**',
				action: 'Find many activities',
			},
			{
				name: 'Find One Activity',
				value: 'findOneActivity',
				description: '**depth** can be provided to request your **activity**',
				action: 'Find one activity',
			},
			{
				name: 'Update One Activity',
				value: 'updateOneActivity',
				description: '**depth** can be provided to request your **activity**',
				action: 'Update one activity',
			},
		],
		default: 'createManyActivities',
	},
];

export const activityFields: INodeProperties[] = [
	// ----------------------------------------
	//      activity: createManyActivities
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
					'activity',
				],
				operation: [
					'createManyActivities',
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
					'activity',
				],
				operation: [
					'createManyActivities',
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
						'activity',
					],
					operation: [
						'createManyActivities',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       activity: createOneActivity
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
					'activity',
				],
				operation: [
					'createOneActivity',
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
					'activity',
				],
				operation: [
					'createOneActivity',
				],
			},
		},
		options: [
			{
				displayName: 'Assignee ID',
				name: 'assigneeId',
				type: 'string',
				default: '',
				description: 'Activity assignee ID foreign key',
			},
			{
				displayName: 'Author ID',
				name: 'authorId',
				type: 'string',
				default: '',
				description: 'Activity author ID foreign key',
			},
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				description: 'Activity body',
			},
			{
				displayName: 'Completed At',
				name: 'completedAt',
				type: 'string',
				default: '',
				description: 'Activity completion date',
			},
			{
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Due At',
				name: 'dueAt',
				type: 'string',
				default: '',
				description: 'Activity due date',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Reminder At',
				name: 'reminderAt',
				type: 'string',
				default: '',
				description: 'Activity reminder date',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Activity title',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'Activity type',
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
						'activity',
					],
					operation: [
						'createOneActivity',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       activity: deleteOneActivity
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
					'activity',
				],
				operation: [
					'deleteOneActivity',
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
						'activity',
					],
					operation: [
						'deleteOneActivity',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     activity: findActivityDuplicates
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
					'activity',
				],
				operation: [
					'findActivityDuplicates',
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
					'activity',
				],
				operation: [
					'findActivityDuplicates',
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
displayName: 'Title',
name: 'title',
type: 'string',
default: '',
description: 'Activity title',
},
{
displayName: 'Body',
name: 'body',
type: 'string',
default: '',
description: 'Activity body',
},
{
displayName: 'Type',
name: 'type',
type: 'string',
default: '',
description: 'Activity type',
},
{
displayName: 'Reminder At',
name: 'reminderAt',
type: 'string',
default: '',
description: 'Activity reminder date',
},
{
displayName: 'Due At',
name: 'dueAt',
type: 'string',
default: '',
description: 'Activity due date',
},
{
displayName: 'Completed At',
name: 'completedAt',
type: 'string',
default: '',
description: 'Activity completion date',
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
displayName: 'Author ID',
name: 'authorId',
type: 'string',
default: '',
description: 'Activity author ID foreign key',
},
{
displayName: 'Assignee ID',
name: 'assigneeId',
type: 'string',
default: '',
description: 'Activity assignee ID foreign key',
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
						'activity',
					],
					operation: [
						'findActivityDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       activity: findManyActivities
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
					'activity',
				],
				operation: [
					'findManyActivities',
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
						'activity',
					],
					operation: [
						'findManyActivities',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        activity: findOneActivity
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
					'activity',
				],
				operation: [
					'findOneActivity',
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
					'activity',
				],
				operation: [
					'findOneActivity',
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
						'activity',
					],
					operation: [
						'findOneActivity',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       activity: updateOneActivity
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
					'activity',
				],
				operation: [
					'updateOneActivity',
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
					'activity',
				],
				operation: [
					'updateOneActivity',
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
					'activity',
				],
				operation: [
					'updateOneActivity',
				],
			},
		},
		options: [
			{
				displayName: 'Assignee ID',
				name: 'assigneeId',
				type: 'string',
				default: '',
				description: 'Activity assignee ID foreign key',
			},
			{
				displayName: 'Author ID',
				name: 'authorId',
				type: 'string',
				default: '',
				description: 'Activity author ID foreign key',
			},
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				description: 'Activity body',
			},
			{
				displayName: 'Completed At',
				name: 'completedAt',
				type: 'string',
				default: '',
				description: 'Activity completion date',
			},
			{
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Due At',
				name: 'dueAt',
				type: 'string',
				default: '',
				description: 'Activity due date',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Reminder At',
				name: 'reminderAt',
				type: 'string',
				default: '',
				description: 'Activity reminder date',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Activity title',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'Activity type',
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
						'activity',
					],
					operation: [
						'updateOneActivity',
					],
				},
			},
		},
];
