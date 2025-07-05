import type {
	INodeProperties,
} from 'n8n-workflow';

export const noteTargetOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'noteTarget',
				],
			},
		},
		options: [
			{
				name: 'Create Many Note Targets',
				value: 'createManyNoteTargets',
				action: 'Create Many noteTargets',
			},
			{
				name: 'Create One Note Target',
				value: 'createOneNoteTarget',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **noteTargets**',
				action: 'Create One noteTarget',
			},
			{
				name: 'Delete One Note Target',
				value: 'deleteOneNoteTarget',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Delete One noteTarget',
			},
			{
				name: 'Find Many Note Targets',
				value: 'findManyNoteTargets',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **noteTargets**',
				action: 'Find Many noteTargets',
			},
			{
				name: 'Find Note Target Duplicates',
				value: 'findNoteTargetDuplicates',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Find noteTarget Duplicates',
			},
			{
				name: 'Find One Note Target',
				value: 'findOneNoteTarget',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Find One noteTarget',
			},
			{
				name: 'Update One Note Target',
				value: 'updateOneNoteTarget',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Update One noteTarget',
			},
		],
		default: 'createManyNoteTargets',
	},
];

export const noteTargetFields: INodeProperties[] = [
	// ----------------------------------------
	//    noteTarget: createManyNoteTargets
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
					'noteTarget',
				],
				operation: [
					'createManyNoteTargets',
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
					'noteTarget',
				],
				operation: [
					'createManyNoteTargets',
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
						'noteTarget',
					],
					operation: [
						'createManyNoteTargets',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     noteTarget: createOneNoteTarget
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
					'noteTarget',
				],
				operation: [
					'createOneNoteTarget',
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
					'noteTarget',
				],
				operation: [
					'createOneNoteTarget',
				],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
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
						'noteTarget',
					],
					operation: [
						'createOneNoteTarget',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     noteTarget: deleteOneNoteTarget
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
					'noteTarget',
				],
				operation: [
					'deleteOneNoteTarget',
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
						'noteTarget',
					],
					operation: [
						'deleteOneNoteTarget',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     noteTarget: findManyNoteTargets
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
					'noteTarget',
				],
				operation: [
					'findManyNoteTargets',
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
						'noteTarget',
					],
					operation: [
						'findManyNoteTargets',
					],
				},
			},
		},
	
	// ----------------------------------------
	//   noteTarget: findNoteTargetDuplicates
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
					'noteTarget',
				],
				operation: [
					'findNoteTargetDuplicates',
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
					'noteTarget',
				],
				operation: [
					'findNoteTargetDuplicates',
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
						'noteTarget',
					],
					operation: [
						'findNoteTargetDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      noteTarget: findOneNoteTarget
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
					'noteTarget',
				],
				operation: [
					'findOneNoteTarget',
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
					'noteTarget',
				],
				operation: [
					'findOneNoteTarget',
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
						'noteTarget',
					],
					operation: [
						'findOneNoteTarget',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     noteTarget: updateOneNoteTarget
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
					'noteTarget',
				],
				operation: [
					'updateOneNoteTarget',
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
					'noteTarget',
				],
				operation: [
					'updateOneNoteTarget',
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
					'noteTarget',
				],
				operation: [
					'updateOneNoteTarget',
				],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
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
						'noteTarget',
					],
					operation: [
						'updateOneNoteTarget',
					],
				},
			},
		},
];
