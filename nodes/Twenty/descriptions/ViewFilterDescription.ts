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
				action: 'Create many view filters',
			},
			{
				name: 'Create One View Filter',
				value: 'createOneViewFilter',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilters**',
				action: 'Create one view filter',
			},
			{
				name: 'Delete One View Filter',
				value: 'deleteOneViewFilter',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Delete one view filter',
			},
			{
				name: 'Find Many View Filters',
				value: 'findManyViewFilters',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilters**',
				action: 'Find many view filters',
			},
			{
				name: 'Find One View Filter',
				value: 'findOneViewFilter',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Find one view filter',
			},
			{
				name: 'Find View Filter Duplicates',
				value: 'findViewFilterDuplicates',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Find view filter duplicates',
			},
			{
				name: 'Update One View Filter',
				value: 'updateOneViewFilter',
				description: '**depth** can be provided to request your **viewFilter**',
				action: 'Update one view filter',
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
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Display Value',
				name: 'displayValue',
				type: 'string',
				default: '',
				description: 'View Filter Display Value',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Operand',
				name: 'operand',
				type: 'string',
				default: '',
				description: 'View Filter operand',
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				description: 'View Filter value',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
				type: 'string',
				default: '',
				description: 'View Filter related view ID foreign key',
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
		description: 'Object ID',
		type: 'string',
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
		description: 'Object ID',
		type: 'string',
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
displayName: 'Value',
name: 'value',
type: 'string',
default: '',
description: 'View Filter value',
},
{
displayName: 'Display Value',
name: 'displayValue',
type: 'string',
default: '',
description: 'View Filter Display Value',
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
displayName: 'View ID',
name: 'viewId',
type: 'string',
default: '',
description: 'View Filter related view ID foreign key',
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
		description: 'Object ID',
		type: 'string',
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
					'viewFilter',
				],
				operation: [
					'updateOneViewFilter',
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
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Display Value',
				name: 'displayValue',
				type: 'string',
				default: '',
				description: 'View Filter Display Value',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Operand',
				name: 'operand',
				type: 'string',
				default: '',
				description: 'View Filter operand',
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				description: 'View Filter value',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
				type: 'string',
				default: '',
				description: 'View Filter related view ID foreign key',
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
