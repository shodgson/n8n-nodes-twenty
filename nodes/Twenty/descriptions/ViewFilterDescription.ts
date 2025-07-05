import type {
	INodeProperties,
} from 'n8n-workflow';

export const viewFilterOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'viewFilter',
				],
			},
		},
		options: [
			{
				name: 'Create Many View Filters',
				value: 'createManyViewFilters',
				action: 'Create Many viewFilters',
			},
			{
				name: 'Create One View Filter',
				value: 'createOneViewFilter',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilters**',
				action: 'Create One viewFilter',
			},
			{
				name: 'Delete One View Filter',
				value: 'deleteOneViewFilter',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Delete One viewFilter',
			},
			{
				name: 'Find Many View Filters',
				value: 'findManyViewFilters',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilters**',
				action: 'Find Many viewFilters',
			},
			{
				name: 'Find One View Filter',
				value: 'findOneViewFilter',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Find One viewFilter',
			},
			{
				name: 'Find View Filter Duplicates',
				value: 'findViewFilterDuplicates',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Find viewFilter Duplicates',
			},
			{
				name: 'Update One View Filter',
				value: 'updateOneViewFilter',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Update One viewFilter',
			},
		],
		default: 'createManyViewFilters',
	},
];

export const viewFilterFields: INodeProperties[] = [
	// ----------------------------------------
	//    viewFilter: createManyViewFilters
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
					'viewFilter',
				],
				operation: [
					'createManyViewFilters',
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
					'viewFilter',
				],
				operation: [
					'createManyViewFilters',
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
						'viewFilter',
					],
					operation: [
						'createManyViewFilters',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     viewFilter: createOneViewFilter
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
					'viewFilter',
				],
				operation: [
					'createOneViewFilter',
				],
			},
		},
	},
	{
		displayName: 'Field Metadata ID',
		name: 'fieldMetadataId',
		description: 'View Filter target field',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'viewFilter',
				],
				operation: [
					'createOneViewFilter',
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
					'viewFilter',
				],
				operation: [
					'createOneViewFilter',
				],
			},
		},
		options: [
			{
				displayName: 'Display Value',
				name: 'displayValue',
				type: 'string',
				default: '',
				description: 'View Filter Display Value',
			},
			{
				displayName: 'Operand',
				name: 'operand',
				type: 'string',
				default: '',
				description: 'View Filter operand',
			},
			{
				displayName: 'Position In View Filter Group',
				name: 'positionInViewFilterGroup',
				type: 'number',
				default: 0,
				description: 'Position in the view filter group',
			},
			{
				displayName: 'Sub Field Name',
				name: 'subFieldName',
				type: 'string',
				default: '',
				description: 'Sub field name',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				description: 'View Filter value',
			},
			{
				displayName: 'View Filter Group ID',
				name: 'viewFilterGroupId',
				type: 'string',
				default: '',
				description: 'View Filter Group',
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
						'viewFilter',
					],
					operation: [
						'createOneViewFilter',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     viewFilter: deleteOneViewFilter
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
					'viewFilter',
				],
				operation: [
					'deleteOneViewFilter',
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
						'viewFilter',
					],
					operation: [
						'deleteOneViewFilter',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     viewFilter: findManyViewFilters
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
					'viewFilter',
				],
				operation: [
					'findManyViewFilters',
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
						'viewFilter',
					],
					operation: [
						'findManyViewFilters',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      viewFilter: findOneViewFilter
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
					'viewFilter',
				],
				operation: [
					'findOneViewFilter',
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
					'viewFilter',
				],
				operation: [
					'findOneViewFilter',
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
						'viewFilter',
					],
					operation: [
						'findOneViewFilter',
					],
				},
			},
		},
	
	// ----------------------------------------
	//   viewFilter: findViewFilterDuplicates
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
					'viewFilter',
				],
				operation: [
					'findViewFilterDuplicates',
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
					'viewFilter',
				],
				operation: [
					'findViewFilterDuplicates',
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
						'viewFilter',
					],
					operation: [
						'findViewFilterDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     viewFilter: updateOneViewFilter
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
					'viewFilter',
				],
				operation: [
					'updateOneViewFilter',
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
					'viewFilter',
				],
				operation: [
					'updateOneViewFilter',
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
					'viewFilter',
				],
				operation: [
					'updateOneViewFilter',
				],
			},
		},
		options: [
			{
				displayName: 'Display Value',
				name: 'displayValue',
				type: 'string',
				default: '',
				description: 'View Filter Display Value',
			},
			{
				displayName: 'Field Metadata ID',
				name: 'fieldMetadataId',
				type: 'string',
				default: '',
				description: 'View Filter target field',
			},
			{
				displayName: 'Operand',
				name: 'operand',
				type: 'string',
				default: '',
				description: 'View Filter operand',
			},
			{
				displayName: 'Position In View Filter Group',
				name: 'positionInViewFilterGroup',
				type: 'number',
				default: 0,
				description: 'Position in the view filter group',
			},
			{
				displayName: 'Sub Field Name',
				name: 'subFieldName',
				type: 'string',
				default: '',
				description: 'Sub field name',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				description: 'View Filter value',
			},
			{
				displayName: 'View Filter Group ID',
				name: 'viewFilterGroupId',
				type: 'string',
				default: '',
				description: 'View Filter Group',
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
						'viewFilter',
					],
					operation: [
						'updateOneViewFilter',
					],
				},
			},
		},
];
