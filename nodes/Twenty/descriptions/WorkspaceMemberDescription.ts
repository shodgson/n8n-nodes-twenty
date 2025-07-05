import type {
	INodeProperties,
} from 'n8n-workflow';

export const workspaceMemberOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'workspaceMember',
				],
			},
		},
		options: [
			{
				name: 'Create Many Workspace Members',
				value: 'createManyWorkspaceMembers',
				action: 'Create Many workspaceMembers',
			},
			{
				name: 'Create One Workspace Member',
				value: 'createOneWorkspaceMember',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workspaceMembers**',
				action: 'Create One workspaceMember',
			},
			{
				name: 'Delete One Workspace Member',
				value: 'deleteOneWorkspaceMember',
				description: '**depth** can be provided to request your **workspaceMember**',
				action: 'Delete One workspaceMember',
			},
			{
				name: 'Find Many Workspace Members',
				value: 'findManyWorkspaceMembers',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workspaceMembers**',
				action: 'Find Many workspaceMembers',
			},
			{
				name: 'Find One Workspace Member',
				value: 'findOneWorkspaceMember',
				description: '**depth** can be provided to request your **workspaceMember**',
				action: 'Find One workspaceMember',
			},
			{
				name: 'Find Workspace Member Duplicates',
				value: 'findWorkspaceMemberDuplicates',
				description: '**depth** can be provided to request your **workspaceMember**',
				action: 'Find workspaceMember Duplicates',
			},
			{
				name: 'Update One Workspace Member',
				value: 'updateOneWorkspaceMember',
				description: '**depth** can be provided to request your **workspaceMember**',
				action: 'Update One workspaceMember',
			},
		],
		default: 'createManyWorkspaceMembers',
	},
];

export const workspaceMemberFields: INodeProperties[] = [
	// ----------------------------------------
	// workspaceMember: createManyWorkspaceMembers
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
					'workspaceMember',
				],
				operation: [
					'createManyWorkspaceMembers',
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
					'workspaceMember',
				],
				operation: [
					'createManyWorkspaceMembers',
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
						'workspaceMember',
					],
					operation: [
						'createManyWorkspaceMembers',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workspaceMember: createOneWorkspaceMember
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
					'workspaceMember',
				],
				operation: [
					'createOneWorkspaceMember',
				],
			},
		},
	},
	{
		displayName: 'User ID',
		name: 'userId',
		description: 'Associated User Id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workspaceMember',
				],
				operation: [
					'createOneWorkspaceMember',
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
					'workspaceMember',
				],
				operation: [
					'createOneWorkspaceMember',
				],
			},
		},
		options: [
			{
				displayName: 'Avatar Url',
				name: 'avatarUrl',
				type: 'string',
				default: '',
				description: 'Workspace member avatar',
			},
			{
				displayName: 'Color Scheme',
				name: 'colorScheme',
				type: 'string',
				default: '',
				description: 'Preferred color scheme',
			},
			{
				displayName: 'Date Format',
				name: 'dateFormat',
				type: 'dateTime',
				default: 'DAY_FIRST',
				description: 'User’s preferred date format',
			},
			{
				displayName: 'Locale',
				name: 'locale',
				type: 'string',
				default: '',
				description: 'Preferred language',
			},
				{
displayName: 'Name',
name: 'name',
placeholder: 'Add Name Field',
type: 'fixedCollection',
default: {},
description: 'Workspace member name',
options: [{
displayName: 'Name Fields',
name: 'nameFields',
values: [
{
displayName: 'First Name',
name: 'firstName',
type: 'string',
default: '',
},
{
displayName: 'Last Name',
name: 'lastName',
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
				description: 'Workspace member position',
			},
			{
				displayName: 'Time Format',
				name: 'timeFormat',
				type: 'options',
				default: '',
				description: 'User’s preferred time format',
				options: [
					{
						name: 'Hour 12',
						value: 'HOUR_12',
					},
					{
						name: 'Hour 24',
						value: 'HOUR_24',
					},
					{
						name: 'System',
						value: 'SYSTEM',
					},
				],
			},
			{
				displayName: 'Time Zone',
				name: 'timeZone',
				type: 'string',
				default: '',
				description: 'User time zone',
			},
			{
				displayName: 'User Email',
				name: 'userEmail',
				type: 'string',
				default: '',
				description: 'Related user email address',
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
						'workspaceMember',
					],
					operation: [
						'createOneWorkspaceMember',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workspaceMember: deleteOneWorkspaceMember
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
					'workspaceMember',
				],
				operation: [
					'deleteOneWorkspaceMember',
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
						'workspaceMember',
					],
					operation: [
						'deleteOneWorkspaceMember',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workspaceMember: findManyWorkspaceMembers
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
					'workspaceMember',
				],
				operation: [
					'findManyWorkspaceMembers',
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
						'workspaceMember',
					],
					operation: [
						'findManyWorkspaceMembers',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workspaceMember: findOneWorkspaceMember
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
					'workspaceMember',
				],
				operation: [
					'findOneWorkspaceMember',
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
					'workspaceMember',
				],
				operation: [
					'findOneWorkspaceMember',
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
						'workspaceMember',
					],
					operation: [
						'findOneWorkspaceMember',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workspaceMember: findWorkspaceMemberDuplicates
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
					'workspaceMember',
				],
				operation: [
					'findWorkspaceMemberDuplicates',
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
					'workspaceMember',
				],
				operation: [
					'findWorkspaceMemberDuplicates',
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
						'workspaceMember',
					],
					operation: [
						'findWorkspaceMemberDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workspaceMember: updateOneWorkspaceMember
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
					'workspaceMember',
				],
				operation: [
					'updateOneWorkspaceMember',
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
					'workspaceMember',
				],
				operation: [
					'updateOneWorkspaceMember',
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
					'workspaceMember',
				],
				operation: [
					'updateOneWorkspaceMember',
				],
			},
		},
		options: [
			{
				displayName: 'Avatar Url',
				name: 'avatarUrl',
				type: 'string',
				default: '',
				description: 'Workspace member avatar',
			},
			{
				displayName: 'Color Scheme',
				name: 'colorScheme',
				type: 'string',
				default: '',
				description: 'Preferred color scheme',
			},
			{
				displayName: 'Date Format',
				name: 'dateFormat',
				type: 'dateTime',
				default: 'DAY_FIRST',
				description: 'User’s preferred date format',
			},
			{
				displayName: 'Locale',
				name: 'locale',
				type: 'string',
				default: '',
				description: 'Preferred language',
			},
				{
displayName: 'Name',
name: 'name',
placeholder: 'Add Name Field',
type: 'fixedCollection',
default: {},
description: 'Workspace member name',
options: [{
displayName: 'Name Fields',
name: 'nameFields',
values: [
{
displayName: 'First Name',
name: 'firstName',
type: 'string',
default: '',
},
{
displayName: 'Last Name',
name: 'lastName',
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
				description: 'Workspace member position',
			},
			{
				displayName: 'Time Format',
				name: 'timeFormat',
				type: 'options',
				default: '',
				description: 'User’s preferred time format',
				options: [
					{
						name: 'Hour 12',
						value: 'HOUR_12',
					},
					{
						name: 'Hour 24',
						value: 'HOUR_24',
					},
					{
						name: 'System',
						value: 'SYSTEM',
					},
				],
			},
			{
				displayName: 'Time Zone',
				name: 'timeZone',
				type: 'string',
				default: '',
				description: 'User time zone',
			},
			{
				displayName: 'User Email',
				name: 'userEmail',
				type: 'string',
				default: '',
				description: 'Related user email address',
			},
			{
				displayName: 'User ID',
				name: 'userId',
				type: 'string',
				default: '',
				description: 'Associated User Id',
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
						'workspaceMember',
					],
					operation: [
						'updateOneWorkspaceMember',
					],
				},
			},
		},
];
