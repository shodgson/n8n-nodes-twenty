import type { INodeProperties } from 'n8n-workflow';

export const viewGroupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['viewGroup'],
			},
		},
		options: [
			{
				name: 'Create Many View Groups',
				value: 'createManyViewGroups',
				action: 'Create many view groups',
			},
			{
				name: 'Create One View Group',
				value: 'createOneViewGroup',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewGroups**',
				action: 'Create one view group',
			},
			{
				name: 'Delete One View Group',
				value: 'deleteOneViewGroup',
				description: '**depth** can be provided to request your **viewGroup**',
				action: 'Delete one view group',
			},
			{
				name: 'Find Many View Groups',
				value: 'findManyViewGroups',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **viewGroups**',
				action: 'Find many view groups',
			},
			{
				name: 'Find One View Group',
				value: 'findOneViewGroup',
				description: '**depth** can be provided to request your **viewGroup**',
				action: 'Find one view group',
			},
			{
				name: 'Find View Group Duplicates',
				value: 'findViewGroupDuplicates',
				description: '**depth** can be provided to request your **viewGroup**',
				action: 'Find view group duplicates',
			},
			{
				name: 'Update One View Group',
				value: 'updateOneViewGroup',
				description: '**depth** can be provided to request your **viewGroup**',
				action: 'Update one view group',
			},
		],
		default: 'createManyViewGroups',
	},
];

export const viewGroupFields: INodeProperties[] = [
	// ----------------------------------------
	//     viewGroup: createManyViewGroups
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
				resource: ['viewGroup'],
				operation: ['createManyViewGroups'],
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
				resource: ['viewGroup'],
				operation: ['createManyViewGroups'],
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
				resource: ['viewGroup'],
				operation: ['createManyViewGroups'],
			},
		},
	},

	// ----------------------------------------
	//      viewGroup: createOneViewGroup
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
				resource: ['viewGroup'],
				operation: ['createOneViewGroup'],
			},
		},
	},
	{
		displayName: 'Field Metadata ID',
		name: 'fieldMetadataId',
		description: 'View Group target field',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['viewGroup'],
				operation: ['createOneViewGroup'],
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
				resource: ['viewGroup'],
				operation: ['createOneViewGroup'],
			},
		},
		options: [
			{
				displayName: 'Field Value',
				name: 'fieldValue',
				type: 'string',
				default: '',
				description: 'Group by this field value',
			},
			{
				displayName: 'Is Visible',
				name: 'isVisible',
				type: 'boolean',
				default: false,
				description: 'Whether Group is visible',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'View Field position',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
				type: 'string',
				default: '',
				description: 'View Group related view ID foreign key',
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
				resource: ['viewGroup'],
				operation: ['createOneViewGroup'],
			},
		},
	},

	// ----------------------------------------
	//      viewGroup: deleteOneViewGroup
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
				resource: ['viewGroup'],
				operation: ['deleteOneViewGroup'],
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
				resource: ['viewGroup'],
				operation: ['deleteOneViewGroup'],
			},
		},
	},

	// ----------------------------------------
	//      viewGroup: findManyViewGroups
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
				resource: ['viewGroup'],
				operation: ['findManyViewGroups'],
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
				resource: ['viewGroup'],
				operation: ['findManyViewGroups'],
			},
		},
	},

	// ----------------------------------------
	//       viewGroup: findOneViewGroup
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
				resource: ['viewGroup'],
				operation: ['findOneViewGroup'],
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
				resource: ['viewGroup'],
				operation: ['findOneViewGroup'],
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
				resource: ['viewGroup'],
				operation: ['findOneViewGroup'],
			},
		},
	},

	// ----------------------------------------
	//    viewGroup: findViewGroupDuplicates
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
				resource: ['viewGroup'],
				operation: ['findViewGroupDuplicates'],
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
				resource: ['viewGroup'],
				operation: ['findViewGroupDuplicates'],
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
								displayName: 'Field Metadata ID',
								name: 'fieldMetadataId',
								type: 'string',
								default: '',
								description: 'View Group target field',
							},
							{
								displayName: 'Is Visible',
								name: 'isVisible',
								type: 'boolean',
								default: false,
								description: 'Whether Group is visible',
							},
							{
								displayName: 'Field Value',
								name: 'fieldValue',
								type: 'string',
								default: '',
								description: 'Group by this field value',
							},
							{
								displayName: 'Position',
								name: 'position',
								type: 'number',
								default: 0,
								description: 'View Field position',
							},
							{
								displayName: 'View ID',
								name: 'viewId',
								type: 'string',
								default: '',
								description: 'View Group related view ID foreign key',
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
				resource: ['viewGroup'],
				operation: ['findViewGroupDuplicates'],
			},
		},
	},

	// ----------------------------------------
	//      viewGroup: updateOneViewGroup
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
				resource: ['viewGroup'],
				operation: ['updateOneViewGroup'],
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
				resource: ['viewGroup'],
				operation: ['updateOneViewGroup'],
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
				resource: ['viewGroup'],
				operation: ['updateOneViewGroup'],
			},
		},
		options: [
			{
				displayName: 'Field Metadata ID',
				name: 'fieldMetadataId',
				type: 'string',
				default: '',
				description: 'View Group target field',
			},
			{
				displayName: 'Field Value',
				name: 'fieldValue',
				type: 'string',
				default: '',
				description: 'Group by this field value',
			},
			{
				displayName: 'Is Visible',
				name: 'isVisible',
				type: 'boolean',
				default: false,
				description: 'Whether Group is visible',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'View Field position',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
				type: 'string',
				default: '',
				description: 'View Group related view ID foreign key',
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
				resource: ['viewGroup'],
				operation: ['updateOneViewGroup'],
			},
		},
	},
];
