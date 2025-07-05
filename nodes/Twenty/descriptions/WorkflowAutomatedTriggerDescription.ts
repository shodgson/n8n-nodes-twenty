import type {
	INodeProperties,
} from 'n8n-workflow';

export const workflowAutomatedTriggerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'workflowAutomatedTrigger',
				],
			},
		},
		options: [
			{
				name: 'Create Many Workflow Automated Triggers',
				value: 'createManyWorkflowAutomatedTriggers',
				action: 'Create Many workflowAutomatedTriggers',
			},
			{
				name: 'Create One Workflow Automated Trigger',
				value: 'createOneWorkflowAutomatedTrigger',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowAutomatedTriggers**',
				action: 'Create One workflowAutomatedTrigger',
			},
			{
				name: 'Delete One Workflow Automated Trigger',
				value: 'deleteOneWorkflowAutomatedTrigger',
				description: '**depth** can be provided to request your **workflowAutomatedTrigger**',
				action: 'Delete One workflowAutomatedTrigger',
			},
			{
				name: 'Find Many Workflow Automated Triggers',
				value: 'findManyWorkflowAutomatedTriggers',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowAutomatedTriggers**',
				action: 'Find Many workflowAutomatedTriggers',
			},
			{
				name: 'Find One Workflow Automated Trigger',
				value: 'findOneWorkflowAutomatedTrigger',
				description: '**depth** can be provided to request your **workflowAutomatedTrigger**',
				action: 'Find One workflowAutomatedTrigger',
			},
			{
				name: 'Find Workflow Automated Trigger Duplicates',
				value: 'findWorkflowAutomatedTriggerDuplicates',
				description: '**depth** can be provided to request your **workflowAutomatedTrigger**',
				action: 'Find workflowAutomatedTrigger Duplicates',
			},
			{
				name: 'Update One Workflow Automated Trigger',
				value: 'updateOneWorkflowAutomatedTrigger',
				description: '**depth** can be provided to request your **workflowAutomatedTrigger**',
				action: 'Update One workflowAutomatedTrigger',
			},
		],
		default: 'createManyWorkflowAutomatedTriggers',
	},
];

export const workflowAutomatedTriggerFields: INodeProperties[] = [
	// ----------------------------------------
	// workflowAutomatedTrigger: createManyWorkflowAutomatedTriggers
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'createManyWorkflowAutomatedTriggers',
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'createManyWorkflowAutomatedTriggers',
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
						'workflowAutomatedTrigger',
					],
					operation: [
						'createManyWorkflowAutomatedTriggers',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowAutomatedTrigger: createOneWorkflowAutomatedTrigger
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'createOneWorkflowAutomatedTrigger',
				],
			},
		},
	},
	{
		displayName: 'Settings',
		name: 'settings',
		description: 'The workflow automated trigger settings',
		type: 'json',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflowAutomatedTrigger',
				],
				operation: [
					'createOneWorkflowAutomatedTrigger',
				],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'The workflow automated trigger type',
		type: 'options',
		required: true,
		default: 'CRON',
		options: [
			{
				name: 'Cron',
				value: 'CRON',
			},
			{
				name: 'Database Event',
				value: 'DATABASE_EVENT',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'workflowAutomatedTrigger',
				],
				operation: [
					'createOneWorkflowAutomatedTrigger',
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'createOneWorkflowAutomatedTrigger',
				],
			},
		},
		options: [
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
						'workflowAutomatedTrigger',
					],
					operation: [
						'createOneWorkflowAutomatedTrigger',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowAutomatedTrigger: deleteOneWorkflowAutomatedTrigger
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'deleteOneWorkflowAutomatedTrigger',
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
						'workflowAutomatedTrigger',
					],
					operation: [
						'deleteOneWorkflowAutomatedTrigger',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowAutomatedTrigger: findManyWorkflowAutomatedTriggers
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'findManyWorkflowAutomatedTriggers',
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
						'workflowAutomatedTrigger',
					],
					operation: [
						'findManyWorkflowAutomatedTriggers',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowAutomatedTrigger: findOneWorkflowAutomatedTrigger
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'findOneWorkflowAutomatedTrigger',
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'findOneWorkflowAutomatedTrigger',
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
						'workflowAutomatedTrigger',
					],
					operation: [
						'findOneWorkflowAutomatedTrigger',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowAutomatedTrigger: findWorkflowAutomatedTriggerDuplicates
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'findWorkflowAutomatedTriggerDuplicates',
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'findWorkflowAutomatedTriggerDuplicates',
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
						'workflowAutomatedTrigger',
					],
					operation: [
						'findWorkflowAutomatedTriggerDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowAutomatedTrigger: updateOneWorkflowAutomatedTrigger
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'updateOneWorkflowAutomatedTrigger',
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'updateOneWorkflowAutomatedTrigger',
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
					'workflowAutomatedTrigger',
				],
				operation: [
					'updateOneWorkflowAutomatedTrigger',
				],
			},
		},
		options: [
			{
				displayName: 'Settings',
				name: 'settings',
				type: 'json',
				default: '',
				description: 'The workflow automated trigger settings',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'The workflow automated trigger type',
				options: [
					{
						name: 'Cron',
						value: 'CRON',
					},
					{
						name: 'Database Event',
						value: 'DATABASE_EVENT',
					},
				],
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
						'workflowAutomatedTrigger',
					],
					operation: [
						'updateOneWorkflowAutomatedTrigger',
					],
				},
			},
		},
];
