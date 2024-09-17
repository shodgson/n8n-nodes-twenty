import type {
	INodeProperties,
} from 'n8n-workflow';

export const commentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
			},
		},
		options: [
			{
				name: 'Create Many Comments',
				value: 'createManyComments',
				action: 'Create many comments',
			},
			{
				name: 'Create One Comment',
				value: 'createOneComment',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **comments**',
				action: 'Create one comment',
			},
			{
				name: 'Delete One Comment',
				value: 'deleteOneComment',
				description: '**depth** can be provided to request your **comment**',
				action: 'Delete one comment',
			},
			{
				name: 'Find Comment Duplicates',
				value: 'findCommentDuplicates',
				description: '**depth** can be provided to request your **comment**',
				action: 'Find comment duplicates',
			},
			{
				name: 'Find Many Comments',
				value: 'findManyComments',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **comments**',
				action: 'Find many comments',
			},
			{
				name: 'Find One Comment',
				value: 'findOneComment',
				description: '**depth** can be provided to request your **comment**',
				action: 'Find one comment',
			},
			{
				name: 'Update One Comment',
				value: 'updateOneComment',
				description: '**depth** can be provided to request your **comment**',
				action: 'Update one comment',
			},
		],
		default: 'createManyComments',
	},
];

export const commentFields: INodeProperties[] = [
	// ----------------------------------------
	//       comment: createManyComments
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
					'comment',
				],
				operation: [
					'createManyComments',
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
					'comment',
				],
				operation: [
					'createManyComments',
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
						'comment',
					],
					operation: [
						'createManyComments',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        comment: createOneComment
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
					'comment',
				],
				operation: [
					'createOneComment',
				],
			},
		},
	},
	{
		displayName: 'Activity ID',
		name: 'activityId',
		description: 'Comment activity ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'createOneComment',
				],
			},
		},
	},
	{
		displayName: 'Author ID',
		name: 'authorId',
		description: 'Comment author ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'createOneComment',
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
					'comment',
				],
				operation: [
					'createOneComment',
				],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				description: 'Comment body',
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
						'comment',
					],
					operation: [
						'createOneComment',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        comment: deleteOneComment
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
					'comment',
				],
				operation: [
					'deleteOneComment',
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
						'comment',
					],
					operation: [
						'deleteOneComment',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      comment: findCommentDuplicates
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
					'comment',
				],
				operation: [
					'findCommentDuplicates',
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
					'comment',
				],
				operation: [
					'findCommentDuplicates',
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
displayName: 'Body',
name: 'body',
type: 'string',
default: '',
description: 'Comment body',
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
description: 'Comment author ID foreign key',
},
{
displayName: 'Activity ID',
name: 'activityId',
type: 'string',
default: '',
description: 'Comment activity ID foreign key',
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
						'comment',
					],
					operation: [
						'findCommentDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        comment: findManyComments
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
					'comment',
				],
				operation: [
					'findManyComments',
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
						'comment',
					],
					operation: [
						'findManyComments',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         comment: findOneComment
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
					'comment',
				],
				operation: [
					'findOneComment',
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
					'comment',
				],
				operation: [
					'findOneComment',
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
						'comment',
					],
					operation: [
						'findOneComment',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        comment: updateOneComment
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
					'comment',
				],
				operation: [
					'updateOneComment',
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
					'comment',
				],
				operation: [
					'updateOneComment',
				],
			},
		},
	},
	{
		displayName: 'Activity ID',
		name: 'activityId',
		description: 'Comment activity ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'updateOneComment',
				],
			},
		},
	},
	{
		displayName: 'Author ID',
		name: 'authorId',
		description: 'Comment author ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'comment',
				],
				operation: [
					'updateOneComment',
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
					'comment',
				],
				operation: [
					'updateOneComment',
				],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				description: 'Comment body',
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
						'comment',
					],
					operation: [
						'updateOneComment',
					],
				},
			},
		},
];
