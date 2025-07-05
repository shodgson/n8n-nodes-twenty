import type {
	INodeProperties,
} from 'n8n-workflow';

export const viewFilterGroupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'viewFilterGroup',
				],
			},
		},
		options: [
			{
				name: 'Create Many View Filter Groups',
				value: 'createManyViewFilterGroups',
				action: 'Create Many viewFilterGroups',
			},
			{
				name: 'Create One View Filter Group',
				value: 'createOneViewFilterGroup',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilterGroups**',
				action: 'Create One viewFilterGroup',
			},
			{
				name: 'Delete One View Filter Group',
				value: 'deleteOneViewFilterGroup',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Delete One viewFilterGroup',
			},
			{
				name: 'Find Many View Filter Groups',
				value: 'findManyViewFilterGroups',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilterGroups**',
				action: 'Find Many viewFilterGroups',
			},
			{
				name: 'Find One View Filter Group',
				value: 'findOneViewFilterGroup',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Find One viewFilterGroup',
			},
			{
				name: 'Find View Filter Group Duplicates',
				value: 'findViewFilterGroupDuplicates',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Find viewFilterGroup Duplicates',
			},
			{
				name: 'Update One View Filter Group',
				value: 'updateOneViewFilterGroup',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Update One viewFilterGroup',
			},
		],
		default: 'createManyViewFilterGroups',
	},
];

export const viewFilterGroupFields: INodeProperties[] = [
	// ----------------------------------------
	// viewFilterGroup: createManyViewFilterGroups
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
					'viewFilterGroup',
				],
				operation: [
					'createManyViewFilterGroups',
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
					'viewFilterGroup',
				],
				operation: [
					'createManyViewFilterGroups',
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
						'viewFilterGroup',
					],
					operation: [
						'createManyViewFilterGroups',
					],
				},
			},
		},
	
	// ----------------------------------------
	// viewFilterGroup: createOneViewFilterGroup
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
					'viewFilterGroup',
				],
				operation: [
					'createOneViewFilterGroup',
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
					'viewFilterGroup',
				],
				operation: [
					'createOneViewFilterGroup',
				],
			},
		},
		options: [
			{
				displayName: 'Logical Operator',
				name: 'logicalOperator',
				type: 'options',
				default: '',
				description: 'Logical operator for the filter group',
				options: [
					{
						name: 'And',
						value: 'AND',
					},
					{
						name: 'Not',
						value: 'NOT',
					},
					{
						name: 'Or',
						value: 'OR',
					},
				],
			},
			{
				displayName: 'Parent View Filter Group ID',
				name: 'parentViewFilterGroupId',
				type: 'string',
				default: '',
				description: 'Parent View Filter Group',
			},
			{
				displayName: 'Position In View Filter Group',
				name: 'positionInViewFilterGroup',
				type: 'number',
				default: 0,
				description: 'Position in the parent view filter group',
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
						'viewFilterGroup',
					],
					operation: [
						'createOneViewFilterGroup',
					],
				},
			},
		},
	
	// ----------------------------------------
	// viewFilterGroup: deleteOneViewFilterGroup
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
					'viewFilterGroup',
				],
				operation: [
					'deleteOneViewFilterGroup',
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
						'viewFilterGroup',
					],
					operation: [
						'deleteOneViewFilterGroup',
					],
				},
			},
		},
	
	// ----------------------------------------
	// viewFilterGroup: findManyViewFilterGroups
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
					'viewFilterGroup',
				],
				operation: [
					'findManyViewFilterGroups',
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
						'viewFilterGroup',
					],
					operation: [
						'findManyViewFilterGroups',
					],
				},
			},
		},
	
	// ----------------------------------------
	// viewFilterGroup: findOneViewFilterGroup
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
					'viewFilterGroup',
				],
				operation: [
					'findOneViewFilterGroup',
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
					'viewFilterGroup',
				],
				operation: [
					'findOneViewFilterGroup',
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
						'viewFilterGroup',
					],
					operation: [
						'findOneViewFilterGroup',
					],
				},
			},
		},
	
	// ----------------------------------------
	// viewFilterGroup: findViewFilterGroupDuplicates
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
					'viewFilterGroup',
				],
				operation: [
					'findViewFilterGroupDuplicates',
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
					'viewFilterGroup',
				],
				operation: [
					'findViewFilterGroupDuplicates',
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
						'viewFilterGroup',
					],
					operation: [
						'findViewFilterGroupDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// viewFilterGroup: updateOneViewFilterGroup
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
					'viewFilterGroup',
				],
				operation: [
					'updateOneViewFilterGroup',
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
					'viewFilterGroup',
				],
				operation: [
					'updateOneViewFilterGroup',
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
					'viewFilterGroup',
				],
				operation: [
					'updateOneViewFilterGroup',
				],
			},
		},
		options: [
			{
				displayName: 'Logical Operator',
				name: 'logicalOperator',
				type: 'options',
				default: '',
				description: 'Logical operator for the filter group',
				options: [
					{
						name: 'And',
						value: 'AND',
					},
					{
						name: 'Not',
						value: 'NOT',
					},
					{
						name: 'Or',
						value: 'OR',
					},
				],
			},
			{
				displayName: 'Parent View Filter Group ID',
				name: 'parentViewFilterGroupId',
				type: 'string',
				default: '',
				description: 'Parent View Filter Group',
			},
			{
				displayName: 'Position In View Filter Group',
				name: 'positionInViewFilterGroup',
				type: 'number',
				default: 0,
				description: 'Position in the parent view filter group',
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
						'viewFilterGroup',
					],
					operation: [
						'updateOneViewFilterGroup',
					],
				},
			},
		},
];
