import type {
	INodeProperties,
} from 'n8n-workflow';

export const viewSortOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'viewSort',
				],
			},
		},
		options: [
			{
				name: 'Create Many View Sorts',
				value: 'createManyViewSorts',
				action: 'Create Many viewSorts',
			},
			{
				name: 'Create One View Sort',
				value: 'createOneViewSort',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewSorts**',
				action: 'Create One viewSort',
			},
			{
				name: 'Delete One View Sort',
				value: 'deleteOneViewSort',
				description: '**depth** can be provided to request your **viewSort**',
				action: 'Delete One viewSort',
			},
			{
				name: 'Find Many View Sorts',
				value: 'findManyViewSorts',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewSorts**',
				action: 'Find Many viewSorts',
			},
			{
				name: 'Find One View Sort',
				value: 'findOneViewSort',
				description: '**depth** can be provided to request your **viewSort**',
				action: 'Find One viewSort',
			},
			{
				name: 'Find View Sort Duplicates',
				value: 'findViewSortDuplicates',
				description: '**depth** can be provided to request your **viewSort**',
				action: 'Find viewSort Duplicates',
			},
			{
				name: 'Update One View Sort',
				value: 'updateOneViewSort',
				description: '**depth** can be provided to request your **viewSort**',
				action: 'Update One viewSort',
			},
		],
		default: 'createManyViewSorts',
	},
];

export const viewSortFields: INodeProperties[] = [
	// ----------------------------------------
	//      viewSort: createManyViewSorts
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
					'viewSort',
				],
				operation: [
					'createManyViewSorts',
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
					'viewSort',
				],
				operation: [
					'createManyViewSorts',
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
						'viewSort',
					],
					operation: [
						'createManyViewSorts',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       viewSort: createOneViewSort
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
					'viewSort',
				],
				operation: [
					'createOneViewSort',
				],
			},
		},
	},
	{
		displayName: 'Field Metadata ID',
		name: 'fieldMetadataId',
		description: 'View Sort target field',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'viewSort',
				],
				operation: [
					'createOneViewSort',
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
					'viewSort',
				],
				operation: [
					'createOneViewSort',
				],
			},
		},
		options: [
			{
				displayName: 'Direction',
				name: 'direction',
				type: 'string',
				default: '',
				description: 'View Sort direction',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
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
						'viewSort',
					],
					operation: [
						'createOneViewSort',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       viewSort: deleteOneViewSort
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
					'viewSort',
				],
				operation: [
					'deleteOneViewSort',
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
						'viewSort',
					],
					operation: [
						'deleteOneViewSort',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       viewSort: findManyViewSorts
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
					'viewSort',
				],
				operation: [
					'findManyViewSorts',
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
						'viewSort',
					],
					operation: [
						'findManyViewSorts',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        viewSort: findOneViewSort
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
					'viewSort',
				],
				operation: [
					'findOneViewSort',
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
					'viewSort',
				],
				operation: [
					'findOneViewSort',
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
						'viewSort',
					],
					operation: [
						'findOneViewSort',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     viewSort: findViewSortDuplicates
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
					'viewSort',
				],
				operation: [
					'findViewSortDuplicates',
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
					'viewSort',
				],
				operation: [
					'findViewSortDuplicates',
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
						'viewSort',
					],
					operation: [
						'findViewSortDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       viewSort: updateOneViewSort
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
					'viewSort',
				],
				operation: [
					'updateOneViewSort',
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
					'viewSort',
				],
				operation: [
					'updateOneViewSort',
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
					'viewSort',
				],
				operation: [
					'updateOneViewSort',
				],
			},
		},
		options: [
			{
				displayName: 'Direction',
				name: 'direction',
				type: 'string',
				default: '',
				description: 'View Sort direction',
			},
			{
				displayName: 'Field Metadata ID',
				name: 'fieldMetadataId',
				type: 'string',
				default: '',
				description: 'View Sort target field',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
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
						'viewSort',
					],
					operation: [
						'updateOneViewSort',
					],
				},
			},
		},
];
