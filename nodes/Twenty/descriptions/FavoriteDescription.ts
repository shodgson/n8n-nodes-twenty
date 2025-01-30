import type {
	INodeProperties,
} from 'n8n-workflow';

export const favoriteOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'favorite',
				],
			},
		},
		options: [
			{
				name: 'Create Many Favorites',
				value: 'createManyFavorites',
				action: 'Create many favorites',
			},
			{
				name: 'Create One Favorite',
				value: 'createOneFavorite',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **favorites**',
				action: 'Create one favorite',
			},
			{
				name: 'Delete One Favorite',
				value: 'deleteOneFavorite',
				description: '**depth** can be provided to request your **favorite**',
				action: 'Delete one favorite',
			},
			{
				name: 'Find Favorite Duplicates',
				value: 'findFavoriteDuplicates',
				description: '**depth** can be provided to request your **favorite**',
				action: 'Find favorite duplicates',
			},
			{
				name: 'Find Many Favorites',
				value: 'findManyFavorites',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **favorites**',
				action: 'Find many favorites',
			},
			{
				name: 'Find One Favorite',
				value: 'findOneFavorite',
				description: '**depth** can be provided to request your **favorite**',
				action: 'Find one favorite',
			},
			{
				name: 'Update One Favorite',
				value: 'updateOneFavorite',
				description: '**depth** can be provided to request your **favorite**',
				action: 'Update one favorite',
			},
		],
		default: 'createManyFavorites',
	},
];

export const favoriteFields: INodeProperties[] = [
	// ----------------------------------------
	//      favorite: createManyFavorites
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
					'favorite',
				],
				operation: [
					'createManyFavorites',
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
					'favorite',
				],
				operation: [
					'createManyFavorites',
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
						'favorite',
					],
					operation: [
						'createManyFavorites',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       favorite: createOneFavorite
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
					'favorite',
				],
				operation: [
					'createOneFavorite',
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
					'favorite',
				],
				operation: [
					'createOneFavorite',
				],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Favorite company ID foreign key',
			},
			{
				displayName: 'Favorite Folder ID',
				name: 'favoriteFolderId',
				type: 'string',
				default: '',
				description: 'The folder this favorite belongs to ID foreign key',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
				description: 'Favorite note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'Favorite opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Favorite person ID foreign key',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Favorite position',
			},
			{
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
				description: 'Favorite task ID foreign key',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
				type: 'string',
				default: '',
				description: 'Favorite view ID foreign key',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				default: '',
				description: 'Favorite workflow ID foreign key',
			},
			{
				displayName: 'Workflow Run ID',
				name: 'workflowRunId',
				type: 'string',
				default: '',
				description: 'Favorite workflow run ID foreign key',
			},
			{
				displayName: 'Workflow Version ID',
				name: 'workflowVersionId',
				type: 'string',
				default: '',
				description: 'Favorite workflow version ID foreign key',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Favorite workspace member ID foreign key',
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
						'favorite',
					],
					operation: [
						'createOneFavorite',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       favorite: deleteOneFavorite
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
					'favorite',
				],
				operation: [
					'deleteOneFavorite',
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
						'favorite',
					],
					operation: [
						'deleteOneFavorite',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     favorite: findFavoriteDuplicates
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
					'favorite',
				],
				operation: [
					'findFavoriteDuplicates',
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
					'favorite',
				],
				operation: [
					'findFavoriteDuplicates',
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
displayName: 'Position',
name: 'position',
type: 'number',
default: 0,
description: 'Favorite position',
},
{
displayName: 'Workspace Member ID',
name: 'workspaceMemberId',
type: 'string',
default: '',
description: 'Favorite workspace member ID foreign key',
},
{
displayName: 'Person ID',
name: 'personId',
type: 'string',
default: '',
description: 'Favorite person ID foreign key',
},
{
displayName: 'Company ID',
name: 'companyId',
type: 'string',
default: '',
description: 'Favorite company ID foreign key',
},
{
displayName: 'Favorite Folder ID',
name: 'favoriteFolderId',
type: 'string',
default: '',
description: 'The folder this favorite belongs to ID foreign key',
},
{
displayName: 'Opportunity ID',
name: 'opportunityId',
type: 'string',
default: '',
description: 'Favorite opportunity ID foreign key',
},
{
displayName: 'Workflow ID',
name: 'workflowId',
type: 'string',
default: '',
description: 'Favorite workflow ID foreign key',
},
{
displayName: 'Workflow Version ID',
name: 'workflowVersionId',
type: 'string',
default: '',
description: 'Favorite workflow version ID foreign key',
},
{
displayName: 'Workflow Run ID',
name: 'workflowRunId',
type: 'string',
default: '',
description: 'Favorite workflow run ID foreign key',
},
{
displayName: 'Task ID',
name: 'taskId',
type: 'string',
default: '',
description: 'Favorite task ID foreign key',
},
{
displayName: 'Note ID',
name: 'noteId',
type: 'string',
default: '',
description: 'Favorite note ID foreign key',
},
{
displayName: 'View ID',
name: 'viewId',
type: 'string',
default: '',
description: 'Favorite view ID foreign key',
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
						'favorite',
					],
					operation: [
						'findFavoriteDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       favorite: findManyFavorites
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
					description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **containsAny**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
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
					'favorite',
				],
				operation: [
					'findManyFavorites',
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
						'favorite',
					],
					operation: [
						'findManyFavorites',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        favorite: findOneFavorite
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
					'favorite',
				],
				operation: [
					'findOneFavorite',
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
					'favorite',
				],
				operation: [
					'findOneFavorite',
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
						'favorite',
					],
					operation: [
						'findOneFavorite',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       favorite: updateOneFavorite
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
					'favorite',
				],
				operation: [
					'updateOneFavorite',
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
					'favorite',
				],
				operation: [
					'updateOneFavorite',
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
					'favorite',
				],
				operation: [
					'updateOneFavorite',
				],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Favorite company ID foreign key',
			},
			{
				displayName: 'Favorite Folder ID',
				name: 'favoriteFolderId',
				type: 'string',
				default: '',
				description: 'The folder this favorite belongs to ID foreign key',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
				description: 'Favorite note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'Favorite opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Favorite person ID foreign key',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Favorite position',
			},
			{
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
				description: 'Favorite task ID foreign key',
			},
			{
				displayName: 'View ID',
				name: 'viewId',
				type: 'string',
				default: '',
				description: 'Favorite view ID foreign key',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				default: '',
				description: 'Favorite workflow ID foreign key',
			},
			{
				displayName: 'Workflow Run ID',
				name: 'workflowRunId',
				type: 'string',
				default: '',
				description: 'Favorite workflow run ID foreign key',
			},
			{
				displayName: 'Workflow Version ID',
				name: 'workflowVersionId',
				type: 'string',
				default: '',
				description: 'Favorite workflow version ID foreign key',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Favorite workspace member ID foreign key',
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
						'favorite',
					],
					operation: [
						'updateOneFavorite',
					],
				},
			},
		},
];
