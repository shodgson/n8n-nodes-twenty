import type {
	INodeProperties,
} from 'n8n-workflow';

export const viewOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'view',
				],
			},
		},
		options: [
			{
				name: 'Create Many Views',
				value: 'createManyViews',
				action: 'Create Many views',
			},
			{
				name: 'Create One View',
				value: 'createOneView',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **views**',
				action: 'Create One view',
			},
			{
				name: 'Delete One View',
				value: 'deleteOneView',
				description: '**depth** can be provided to request your **view**',
				action: 'Delete One view',
			},
			{
				name: 'Find Many Views',
				value: 'findManyViews',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **views**',
				action: 'Find Many views',
			},
			{
				name: 'Find One View',
				value: 'findOneView',
				description: '**depth** can be provided to request your **view**',
				action: 'Find One view',
			},
			{
				name: 'Find View Duplicates',
				value: 'findViewDuplicates',
				description: '**depth** can be provided to request your **view**',
				action: 'Find view Duplicates',
			},
			{
				name: 'Update One View',
				value: 'updateOneView',
				description: '**depth** can be provided to request your **view**',
				action: 'Update One view',
			},
		],
		default: 'createManyViews',
	},
];

export const viewFields: INodeProperties[] = [
	// ----------------------------------------
	//          view: createManyViews
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
					'view',
				],
				operation: [
					'createManyViews',
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
					'view',
				],
				operation: [
					'createManyViews',
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
						'view',
					],
					operation: [
						'createManyViews',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           view: createOneView
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
					'view',
				],
				operation: [
					'createOneView',
				],
			},
		},
	},
	{
		displayName: 'Object Metadata ID',
		name: 'objectMetadataId',
		description: 'View target object',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'view',
				],
				operation: [
					'createOneView',
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
					'view',
				],
				operation: [
					'createOneView',
				],
			},
		},
		options: [
			{
				displayName: 'Icon',
				name: 'icon',
				type: 'string',
				default: '',
				description: 'View icon',
			},
			{
				displayName: 'Is Compact',
				name: 'isCompact',
				type: 'boolean',
				default: false,
				description: 'Describes if the view is in compact mode',
			},
			{
				displayName: 'Kanban Aggregate Operation',
				name: 'kanbanAggregateOperation',
				type: 'options',
				default: '',
				description: 'Optional aggregate operation',
				options: [
					{
						name: 'Avg',
						value: 'AVG',
					},
					{
						name: 'Count',
						value: 'COUNT',
					},
					{
						name: 'Count Empty',
						value: 'COUNT_EMPTY',
					},
					{
						name: 'Count False',
						value: 'COUNT_FALSE',
					},
					{
						name: 'Count Not Empty',
						value: 'COUNT_NOT_EMPTY',
					},
					{
						name: 'Count True',
						value: 'COUNT_TRUE',
					},
					{
						name: 'Count Unique Values',
						value: 'COUNT_UNIQUE_VALUES',
					},
					{
						name: 'Max',
						value: 'MAX',
					},
					{
						name: 'Min',
						value: 'MIN',
					},
					{
						name: 'Percentage Empty',
						value: 'PERCENTAGE_EMPTY',
					},
					{
						name: 'Percentage Not Empty',
						value: 'PERCENTAGE_NOT_EMPTY',
					},
					{
						name: 'Sum',
						value: 'SUM',
					},
				],
			},
			{
				displayName: 'Kanban Aggregate Operation Field Metadata ID',
				name: 'kanbanAggregateOperationFieldMetadataId',
				type: 'string',
				default: '',
				description: 'Field metadata used for aggregate operation',
			},
			{
				displayName: 'Kanban Field Metadata ID',
				name: 'kanbanFieldMetadataId',
				type: 'string',
				default: '',
				description: 'View Kanban column field',
			},
			{
				displayName: 'Key',
				name: 'key',
				type: 'options',
				default: '',
				description: 'View key',
				options: [
					{
						name: 'Index',
						value: 'INDEX',
					},
				],
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'View name',
			},
			{
				displayName: 'Open Record In',
				name: 'openRecordIn',
				type: 'options',
				default: '',
				description: 'Display the records in a side panel or in a record page',
				options: [
					{
						name: 'Record Page',
						value: 'RECORD_PAGE',
					},
					{
						name: 'Side Panel',
						value: 'SIDE_PANEL',
					},
				],
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'View position',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'View type',
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
						'view',
					],
					operation: [
						'createOneView',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           view: deleteOneView
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
					'view',
				],
				operation: [
					'deleteOneView',
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
						'view',
					],
					operation: [
						'deleteOneView',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           view: findManyViews
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
					'view',
				],
				operation: [
					'findManyViews',
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
						'view',
					],
					operation: [
						'findManyViews',
					],
				},
			},
		},
	
	// ----------------------------------------
	//            view: findOneView
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
					'view',
				],
				operation: [
					'findOneView',
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
					'view',
				],
				operation: [
					'findOneView',
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
						'view',
					],
					operation: [
						'findOneView',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         view: findViewDuplicates
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
					'view',
				],
				operation: [
					'findViewDuplicates',
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
					'view',
				],
				operation: [
					'findViewDuplicates',
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
						'view',
					],
					operation: [
						'findViewDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//           view: updateOneView
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
					'view',
				],
				operation: [
					'updateOneView',
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
					'view',
				],
				operation: [
					'updateOneView',
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
					'view',
				],
				operation: [
					'updateOneView',
				],
			},
		},
		options: [
			{
				displayName: 'Icon',
				name: 'icon',
				type: 'string',
				default: '',
				description: 'View icon',
			},
			{
				displayName: 'Is Compact',
				name: 'isCompact',
				type: 'boolean',
				default: false,
				description: 'Describes if the view is in compact mode',
			},
			{
				displayName: 'Kanban Aggregate Operation',
				name: 'kanbanAggregateOperation',
				type: 'options',
				default: '',
				description: 'Optional aggregate operation',
				options: [
					{
						name: 'Avg',
						value: 'AVG',
					},
					{
						name: 'Count',
						value: 'COUNT',
					},
					{
						name: 'Count Empty',
						value: 'COUNT_EMPTY',
					},
					{
						name: 'Count False',
						value: 'COUNT_FALSE',
					},
					{
						name: 'Count Not Empty',
						value: 'COUNT_NOT_EMPTY',
					},
					{
						name: 'Count True',
						value: 'COUNT_TRUE',
					},
					{
						name: 'Count Unique Values',
						value: 'COUNT_UNIQUE_VALUES',
					},
					{
						name: 'Max',
						value: 'MAX',
					},
					{
						name: 'Min',
						value: 'MIN',
					},
					{
						name: 'Percentage Empty',
						value: 'PERCENTAGE_EMPTY',
					},
					{
						name: 'Percentage Not Empty',
						value: 'PERCENTAGE_NOT_EMPTY',
					},
					{
						name: 'Sum',
						value: 'SUM',
					},
				],
			},
			{
				displayName: 'Kanban Aggregate Operation Field Metadata ID',
				name: 'kanbanAggregateOperationFieldMetadataId',
				type: 'string',
				default: '',
				description: 'Field metadata used for aggregate operation',
			},
			{
				displayName: 'Kanban Field Metadata ID',
				name: 'kanbanFieldMetadataId',
				type: 'string',
				default: '',
				description: 'View Kanban column field',
			},
			{
				displayName: 'Key',
				name: 'key',
				type: 'options',
				default: '',
				description: 'View key',
				options: [
					{
						name: 'Index',
						value: 'INDEX',
					},
				],
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'View name',
			},
			{
				displayName: 'Object Metadata ID',
				name: 'objectMetadataId',
				type: 'string',
				default: '',
				description: 'View target object',
			},
			{
				displayName: 'Open Record In',
				name: 'openRecordIn',
				type: 'options',
				default: '',
				description: 'Display the records in a side panel or in a record page',
				options: [
					{
						name: 'Record Page',
						value: 'RECORD_PAGE',
					},
					{
						name: 'Side Panel',
						value: 'SIDE_PANEL',
					},
				],
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'View position',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'View type',
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
						'view',
					],
					operation: [
						'updateOneView',
					],
				},
			},
		},
];
