import type { INodeProperties } from 'n8n-workflow';

export const viewFilterGroupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
			},
		},
		options: [
			{
				name: 'Create Many View Filter Groups',
				value: 'createManyViewFilterGroups',
				action: 'Create many view filter groups',
			},
			{
				name: 'Create One View Filter Group',
				value: 'createOneViewFilterGroup',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilterGroups**',
				action: 'Create one view filter group',
			},
			{
				name: 'Delete One View Filter Group',
				value: 'deleteOneViewFilterGroup',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Delete one view filter group',
			},
			{
				name: 'Find Many View Filter Groups',
				value: 'findManyViewFilterGroups',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewFilterGroups**',
				action: 'Find many view filter groups',
			},
			{
				name: 'Find One View Filter Group',
				value: 'findOneViewFilterGroup',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Find one view filter group',
			},
			{
				name: 'Find View Filter Group Duplicates',
				value: 'findViewFilterGroupDuplicates',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Find view filter group duplicates',
			},
			{
				name: 'Update One View Filter Group',
				value: 'updateOneViewFilterGroup',
				description: '**depth** can be provided to request your **viewFilterGroup**',
				action: 'Update one view filter group',
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['createManyViewFilterGroups'],
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
				resource: ['viewFilterGroup'],
				operation: ['createManyViewFilterGroups'],
			},
		},
		options: [],
	},
	{
		displayName: 'Scope',
		name: 'scope',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['createManyViewFilterGroups'],
			},
		},
	},

	// ----------------------------------------
	// viewFilterGroup: createOneViewFilterGroup
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['createOneViewFilterGroup'],
			},
		},
	},
	{
		displayName: 'View ID',
		name: 'viewId',
		description: 'View ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['createOneViewFilterGroup'],
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
				resource: ['viewFilterGroup'],
				operation: ['createOneViewFilterGroup'],
			},
		},
		options: [
			{
				displayName: 'Logical Operator',
				name: 'logicalOperator',
				type: 'options',
				default: 'AND',
				description: 'Logical operator for the filter group',
				options: [
					{
						name: 'And',
						value: 'AND',
					},
					{
						name: 'Or',
						value: 'OR',
					},
					{
						name: 'Not',
						value: 'NOT',
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
		],
	},
	{
		displayName: 'Scope',
		name: 'scope',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['createOneViewFilterGroup'],
			},
		},
	},

	// ----------------------------------------
	// viewFilterGroup: deleteOneViewFilterGroup
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
				resource: ['viewFilterGroup'],
				operation: ['deleteOneViewFilterGroup'],
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
				resource: ['viewFilterGroup'],
				operation: ['deleteOneViewFilterGroup'],
			},
		},
	},

	// ----------------------------------------
	// viewFilterGroup: findManyViewFilterGroups
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
			{
				displayName: 'Ending Before',
				name: 'ending_before',
				type: 'string',
				default: '',
				description:
					'Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				description:
					'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
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
				description:
					'Sorts objects returned. Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...** Available directions are **AscNullsFirst**, **AscNullsLast**, **DescNullsFirst**, **DescNullsLast**. Default direction is **AscNullsFirst**',
			},
			{
				displayName: 'Starting After',
				name: 'starting_after',
				type: 'string',
				default: '',
				description:
					'Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['findManyViewFilterGroups'],
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
				resource: ['viewFilterGroup'],
				operation: ['findManyViewFilterGroups'],
			},
		},
	},

	// ----------------------------------------
	// viewFilterGroup: findOneViewFilterGroup
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
				resource: ['viewFilterGroup'],
				operation: ['findOneViewFilterGroup'],
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['findOneViewFilterGroup'],
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
				resource: ['viewFilterGroup'],
				operation: ['findOneViewFilterGroup'],
			},
		},
	},

	// ----------------------------------------
	// viewFilterGroup: findViewFilterGroupDuplicates
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['findViewFilterGroupDuplicates'],
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
				resource: ['viewFilterGroup'],
				operation: ['findViewFilterGroupDuplicates'],
			},
		},
		options: [
			{
				displayName: 'Data',
				name: 'data',
				placeholder: 'Add Data Field',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						displayName: 'Data Fields',
						name: 'dataFields',
						values: [
							{
								displayName: 'Parent View Filter Group ID',
								name: 'parentViewFilterGroupId',
								type: 'string',
								default: '',
								description: 'Parent View Filter Group',
							},
							{
								displayName: 'Logical Operator',
								name: 'logicalOperator',
								type: 'string',
								default: '',
								description: 'Logical operator for the filter group',
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
								description: 'View ID foreign key',
							},
						],
					},
				],
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
				resource: ['viewFilterGroup'],
				operation: ['findViewFilterGroupDuplicates'],
			},
		},
	},

	// ----------------------------------------
	// viewFilterGroup: updateOneViewFilterGroup
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
				resource: ['viewFilterGroup'],
				operation: ['updateOneViewFilterGroup'],
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['viewFilterGroup'],
				operation: ['updateOneViewFilterGroup'],
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
				resource: ['viewFilterGroup'],
				operation: ['updateOneViewFilterGroup'],
			},
		},
		options: [
			{
				displayName: 'Logical Operator',
				name: 'logicalOperator',
				type: 'options',
				default: 'AND',
				description: 'Logical operator for the filter group',
				options: [
					{
						name: 'And',
						value: 'AND',
					},
					{
						name: 'Or',
						value: 'OR',
					},
					{
						name: 'Not',
						value: 'NOT',
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
				description: 'View ID foreign key',
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
				resource: ['viewFilterGroup'],
				operation: ['updateOneViewFilterGroup'],
			},
		},
	},
];
