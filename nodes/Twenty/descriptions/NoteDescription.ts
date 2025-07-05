import type {
	INodeProperties,
} from 'n8n-workflow';

export const noteOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'note',
				],
			},
		},
		options: [
			{
				name: 'Create Many Notes',
				value: 'createManyNotes',
				action: 'Create Many notes',
			},
			{
				name: 'Create One Note',
				value: 'createOneNote',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **notes**',
				action: 'Create One note',
			},
			{
				name: 'Delete One Note',
				value: 'deleteOneNote',
				description: '**depth** can be provided to request your **note**',
				action: 'Delete One note',
			},
			{
				name: 'Find Many Notes',
				value: 'findManyNotes',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **notes**',
				action: 'Find Many notes',
			},
			{
				name: 'Find Note Duplicates',
				value: 'findNoteDuplicates',
				description: '**depth** can be provided to request your **note**',
				action: 'Find note Duplicates',
			},
			{
				name: 'Find One Note',
				value: 'findOneNote',
				description: '**depth** can be provided to request your **note**',
				action: 'Find One note',
			},
			{
				name: 'Update One Note',
				value: 'updateOneNote',
				description: '**depth** can be provided to request your **note**',
				action: 'Update One note',
			},
		],
		default: 'createManyNotes',
	},
];

export const noteFields: INodeProperties[] = [
	// ----------------------------------------
	//          note: createManyNotes
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
					'note',
				],
				operation: [
					'createManyNotes',
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
					'note',
				],
				operation: [
					'createManyNotes',
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
						'note',
					],
					operation: [
						'createManyNotes',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           note: createOneNote
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
					'note',
				],
				operation: [
					'createOneNote',
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
					'note',
				],
				operation: [
					'createOneNote',
				],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				description: 'Note body',
			},
				{
displayName: 'Body V2',
name: 'bodyV2',
placeholder: 'Add Body V2 Field',
type: 'fixedCollection',
default: {},
description: 'Note body',
options: [{
displayName: 'Body V2 Fields',
name: 'bodyV2Fields',
values: [
{
displayName: 'Blocknote',
name: 'blocknote',
type: 'string',
default: '',
},
{
displayName: 'Markdown',
name: 'markdown',
type: 'string',
default: '',
},
]}],
},
				{
displayName: 'Created By',
name: 'createdBy',
placeholder: 'Add Created By Field',
type: 'fixedCollection',
default: {},
description: 'The creator of the record',
options: [{
displayName: 'Created By Fields',
name: 'createdByFields',
values: [
{
displayName: 'Source',
name: 'source',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Note record position',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Note title',
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
						'note',
					],
					operation: [
						'createOneNote',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           note: deleteOneNote
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
					'note',
				],
				operation: [
					'deleteOneNote',
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
						'note',
					],
					operation: [
						'deleteOneNote',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           note: findManyNotes
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
					'note',
				],
				operation: [
					'findManyNotes',
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
						'note',
					],
					operation: [
						'findManyNotes',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         note: findNoteDuplicates
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
					'note',
				],
				operation: [
					'findNoteDuplicates',
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
					'note',
				],
				operation: [
					'findNoteDuplicates',
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
						'note',
					],
					operation: [
						'findNoteDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//            note: findOneNote
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
					'note',
				],
				operation: [
					'findOneNote',
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
					'note',
				],
				operation: [
					'findOneNote',
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
						'note',
					],
					operation: [
						'findOneNote',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           note: updateOneNote
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
					'note',
				],
				operation: [
					'updateOneNote',
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
					'note',
				],
				operation: [
					'updateOneNote',
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
					'note',
				],
				operation: [
					'updateOneNote',
				],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				description: 'Note body',
			},
				{
displayName: 'Body V2',
name: 'bodyV2',
placeholder: 'Add Body V2 Field',
type: 'fixedCollection',
default: {},
description: 'Note body',
options: [{
displayName: 'Body V2 Fields',
name: 'bodyV2Fields',
values: [
{
displayName: 'Blocknote',
name: 'blocknote',
type: 'string',
default: '',
},
{
displayName: 'Markdown',
name: 'markdown',
type: 'string',
default: '',
},
]}],
},
				{
displayName: 'Created By',
name: 'createdBy',
placeholder: 'Add Created By Field',
type: 'fixedCollection',
default: {},
description: 'The creator of the record',
options: [{
displayName: 'Created By Fields',
name: 'createdByFields',
values: [
{
displayName: 'Source',
name: 'source',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Note record position',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Note title',
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
						'note',
					],
					operation: [
						'updateOneNote',
					],
				},
			},
		},
];
