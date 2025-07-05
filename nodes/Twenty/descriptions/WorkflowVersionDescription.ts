import type {
	INodeProperties,
} from 'n8n-workflow';

export const workflowVersionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'workflowVersion',
				],
			},
		},
		options: [
			{
				name: 'Create Many Workflow Versions',
				value: 'createManyWorkflowVersions',
				action: 'Create Many workflowVersions',
			},
			{
				name: 'Create One Workflow Version',
				value: 'createOneWorkflowVersion',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowVersions**',
				action: 'Create One workflowVersion',
			},
			{
				name: 'Delete One Workflow Version',
				value: 'deleteOneWorkflowVersion',
				description: '**depth** can be provided to request your **workflowVersion**',
				action: 'Delete One workflowVersion',
			},
			{
				name: 'Find Many Workflow Versions',
				value: 'findManyWorkflowVersions',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowVersions**',
				action: 'Find Many workflowVersions',
			},
			{
				name: 'Find One Workflow Version',
				value: 'findOneWorkflowVersion',
				description: '**depth** can be provided to request your **workflowVersion**',
				action: 'Find One workflowVersion',
			},
			{
				name: 'Find Workflow Version Duplicates',
				value: 'findWorkflowVersionDuplicates',
				description: '**depth** can be provided to request your **workflowVersion**',
				action: 'Find workflowVersion Duplicates',
			},
			{
				name: 'Update One Workflow Version',
				value: 'updateOneWorkflowVersion',
				description: '**depth** can be provided to request your **workflowVersion**',
				action: 'Update One workflowVersion',
			},
		],
		default: 'createManyWorkflowVersions',
	},
];

export const workflowVersionFields: INodeProperties[] = [
	// ----------------------------------------
	// workflowVersion: createManyWorkflowVersions
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
					'workflowVersion',
				],
				operation: [
					'createManyWorkflowVersions',
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
					'workflowVersion',
				],
				operation: [
					'createManyWorkflowVersions',
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
						'workflowVersion',
					],
					operation: [
						'createManyWorkflowVersions',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowVersion: createOneWorkflowVersion
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
					'workflowVersion',
				],
				operation: [
					'createOneWorkflowVersion',
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
					'workflowVersion',
				],
				operation: [
					'createOneWorkflowVersion',
				],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The workflow version name',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Workflow version position',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: '',
				description: 'The workflow version status',
				options: [
					{
						name: 'Active',
						value: 'ACTIVE',
					},
					{
						name: 'Archived',
						value: 'ARCHIVED',
					},
					{
						name: 'Deactivated',
						value: 'DEACTIVATED',
					},
					{
						name: 'Draft',
						value: 'DRAFT',
					},
				],
			},
			{
				displayName: 'Steps',
				name: 'steps',
				type: 'json',
				default: '',
				description: 'Json object to provide steps',
			},
			{
				displayName: 'Trigger',
				name: 'trigger',
				type: 'json',
				default: '',
				description: 'Json object to provide trigger',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
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
						'workflowVersion',
					],
					operation: [
						'createOneWorkflowVersion',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowVersion: deleteOneWorkflowVersion
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
					'workflowVersion',
				],
				operation: [
					'deleteOneWorkflowVersion',
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
						'workflowVersion',
					],
					operation: [
						'deleteOneWorkflowVersion',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowVersion: findManyWorkflowVersions
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
					'workflowVersion',
				],
				operation: [
					'findManyWorkflowVersions',
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
						'workflowVersion',
					],
					operation: [
						'findManyWorkflowVersions',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowVersion: findOneWorkflowVersion
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
					'workflowVersion',
				],
				operation: [
					'findOneWorkflowVersion',
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
					'workflowVersion',
				],
				operation: [
					'findOneWorkflowVersion',
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
						'workflowVersion',
					],
					operation: [
						'findOneWorkflowVersion',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowVersion: findWorkflowVersionDuplicates
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
					'workflowVersion',
				],
				operation: [
					'findWorkflowVersionDuplicates',
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
					'workflowVersion',
				],
				operation: [
					'findWorkflowVersionDuplicates',
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
						'workflowVersion',
					],
					operation: [
						'findWorkflowVersionDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowVersion: updateOneWorkflowVersion
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
					'workflowVersion',
				],
				operation: [
					'updateOneWorkflowVersion',
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
					'workflowVersion',
				],
				operation: [
					'updateOneWorkflowVersion',
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
					'workflowVersion',
				],
				operation: [
					'updateOneWorkflowVersion',
				],
			},
		},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The workflow version name',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Workflow version position',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: '',
				description: 'The workflow version status',
				options: [
					{
						name: 'Active',
						value: 'ACTIVE',
					},
					{
						name: 'Archived',
						value: 'ARCHIVED',
					},
					{
						name: 'Deactivated',
						value: 'DEACTIVATED',
					},
					{
						name: 'Draft',
						value: 'DRAFT',
					},
				],
			},
			{
				displayName: 'Steps',
				name: 'steps',
				type: 'json',
				default: '',
				description: 'Json object to provide steps',
			},
			{
				displayName: 'Trigger',
				name: 'trigger',
				type: 'json',
				default: '',
				description: 'Json object to provide trigger',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
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
						'workflowVersion',
					],
					operation: [
						'updateOneWorkflowVersion',
					],
				},
			},
		},
];
