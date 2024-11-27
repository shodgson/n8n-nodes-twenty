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
				action: 'Create many note targets',
			},
			{
				name: 'Create One Note Target',
				value: 'createOneNoteTarget',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **noteTargets**',
				action: 'Create one note target',
			},
			{
				name: 'Delete One Note Target',
				value: 'deleteOneNoteTarget',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Delete one note target',
			},
			{
				name: 'Find Many Note Targets',
				value: 'findManyNoteTargets',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **noteTargets**',
				action: 'Find many note targets',
			},
			{
				name: 'Find Note Target Duplicates',
				value: 'findNoteTargetDuplicates',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Find note target duplicates',
			},
			{
				name: 'Find One Note Target',
				value: 'findOneNoteTarget',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Find one note target',
			},
			{
				name: 'Update One Note Target',
				value: 'updateOneNoteTarget',
				description: '**depth** can be provided to request your **noteTarget**',
				action: 'Update one note target',
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
				description: 'NoteTarget company ID foreign key',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
				description: 'NoteTarget note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'NoteTarget opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'NoteTarget person ID foreign key',
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
		description: 'Object ID',
		type: 'string',
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
					description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
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
displayName: 'Note ID',
name: 'noteId',
type: 'string',
default: '',
description: 'NoteTarget note ID foreign key',
},
{
displayName: 'Person ID',
name: 'personId',
type: 'string',
default: '',
description: 'NoteTarget person ID foreign key',
},
{
displayName: 'Company ID',
name: 'companyId',
type: 'string',
default: '',
description: 'NoteTarget company ID foreign key',
},
{
displayName: 'Opportunity ID',
name: 'opportunityId',
type: 'string',
default: '',
description: 'NoteTarget opportunity ID foreign key',
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
		description: 'Object ID',
		type: 'string',
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
		description: 'Object ID',
		type: 'string',
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
				description: 'NoteTarget company ID foreign key',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
				description: 'NoteTarget note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'NoteTarget opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'NoteTarget person ID foreign key',
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
