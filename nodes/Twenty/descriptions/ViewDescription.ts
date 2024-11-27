import type { INodeProperties } from 'n8n-workflow';

export const viewOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['view'],
			},
		},
		options: [
			{
				name: 'Create Many Views',
				value: 'createManyViews',
				action: 'Create many views',
			},
			{
				name: 'Create One View',
				value: 'createOneView',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **views**',
				action: 'Create one view',
			},
			{
				name: 'Delete One View',
				value: 'deleteOneView',
				description: '**depth** can be provided to request your **view**',
				action: 'Delete one view',
			},
			{
				name: 'Find Many Views',
				value: 'findManyViews',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **views**',
				action: 'Find many views',
			},
			{
				name: 'Find One View',
				value: 'findOneView',
				description: '**depth** can be provided to request your **view**',
				action: 'Find one view',
			},
			{
				name: 'Find View Duplicates',
				value: 'findViewDuplicates',
				description: '**depth** can be provided to request your **view**',
				action: 'Find view duplicates',
			},
			{
				name: 'Update One View',
				value: 'updateOneView',
				description: '**depth** can be provided to request your **view**',
				action: 'Update one view',
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
				resource: ['view'],
				operation: ['createManyViews'],
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
				resource: ['view'],
				operation: ['createManyViews'],
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
				resource: ['view'],
				operation: ['createManyViews'],
			},
		},
	},

	// ----------------------------------------
	//           view: createOneView
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
				resource: ['view'],
				operation: ['createOneView'],
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
				resource: ['view'],
				operation: ['createOneView'],
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
				resource: ['view'],
				operation: ['createOneView'],
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
				default: 'INDEX',
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
				resource: ['view'],
				operation: ['createOneView'],
			},
		},
	},

	// ----------------------------------------
	//           view: deleteOneView
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
				resource: ['view'],
				operation: ['deleteOneView'],
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
				resource: ['view'],
				operation: ['deleteOneView'],
			},
		},
	},

	// ----------------------------------------
	//           view: findManyViews
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
				resource: ['view'],
				operation: ['findManyViews'],
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
				resource: ['view'],
				operation: ['findManyViews'],
			},
		},
	},

	// ----------------------------------------
	//            view: findOneView
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
				resource: ['view'],
				operation: ['findOneView'],
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
				resource: ['view'],
				operation: ['findOneView'],
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
				resource: ['view'],
				operation: ['findOneView'],
			},
		},
	},

	// ----------------------------------------
	//         view: findViewDuplicates
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
				resource: ['view'],
				operation: ['findViewDuplicates'],
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
				resource: ['view'],
				operation: ['findViewDuplicates'],
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
								displayName: 'Type',
								name: 'type',
								type: 'string',
								default: '',
								description: 'View type',
							},
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								default: '',
								description: 'View key',
							},
							{
								displayName: 'Icon',
								name: 'icon',
								type: 'string',
								default: '',
								description: 'View icon',
							},
							{
								displayName: 'Kanban Field Metadata ID',
								name: 'kanbanFieldMetadataId',
								type: 'string',
								default: '',
								description: 'View Kanban column field',
							},
							{
								displayName: 'Position',
								name: 'position',
								type: 'number',
								default: 0,
								description: 'View position',
							},
							{
								displayName: 'Is Compact',
								name: 'isCompact',
								type: 'boolean',
								default: false,
								description: 'Describes if the view is in compact mode',
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
				resource: ['view'],
				operation: ['findViewDuplicates'],
			},
		},
	},

	// ----------------------------------------
	//           view: updateOneView
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
				resource: ['view'],
				operation: ['updateOneView'],
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
				resource: ['view'],
				operation: ['updateOneView'],
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
				resource: ['view'],
				operation: ['updateOneView'],
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
				default: 'INDEX',
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
				resource: ['view'],
				operation: ['updateOneView'],
			},
		},
	},
];
