import type {
	INodeProperties,
} from 'n8n-workflow';

export const workflowEventListenerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'workflowEventListener',
				],
			},
		},
		options: [
			{
				name: 'Create Many Workflow Event Listeners',
				value: 'createManyWorkflowEventListeners',
				action: 'Create Many workflowEventListeners',
			},
			{
				name: 'Create One Workflow Event Listener',
				value: 'createOneWorkflowEventListener',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowEventListeners**',
				action: 'Create One workflowEventListener',
			},
			{
				name: 'Delete One Workflow Event Listener',
				value: 'deleteOneWorkflowEventListener',
				description: '**depth** can be provided to request your **workflowEventListener**',
				action: 'Delete One workflowEventListener',
			},
			{
				name: 'Find Many Workflow Event Listeners',
				value: 'findManyWorkflowEventListeners',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowEventListeners**',
				action: 'Find Many workflowEventListeners',
			},
			{
				name: 'Find One Workflow Event Listener',
				value: 'findOneWorkflowEventListener',
				description: '**depth** can be provided to request your **workflowEventListener**',
				action: 'Find One workflowEventListener',
			},
			{
				name: 'Find Workflow Event Listener Duplicates',
				value: 'findWorkflowEventListenerDuplicates',
				description: '**depth** can be provided to request your **workflowEventListener**',
				action: 'Find workflowEventListener Duplicates',
			},
			{
				name: 'Update One Workflow Event Listener',
				value: 'updateOneWorkflowEventListener',
				description: '**depth** can be provided to request your **workflowEventListener**',
				action: 'Update One workflowEventListener',
			},
		],
		default: 'createManyWorkflowEventListeners',
	},
];

export const workflowEventListenerFields: INodeProperties[] = [
	// ----------------------------------------
	// workflowEventListener: createManyWorkflowEventListeners
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
					'workflowEventListener',
				],
				operation: [
					'createManyWorkflowEventListeners',
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
					'workflowEventListener',
				],
				operation: [
					'createManyWorkflowEventListeners',
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
						'workflowEventListener',
					],
					operation: [
						'createManyWorkflowEventListeners',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowEventListener: createOneWorkflowEventListener
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
					'workflowEventListener',
				],
				operation: [
					'createOneWorkflowEventListener',
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
					'workflowEventListener',
				],
				operation: [
					'createOneWorkflowEventListener',
				],
			},
		},
		options: [
			{
				displayName: 'Event Name',
				name: 'eventName',
				type: 'string',
				default: '',
				description: 'The workflow event listener name',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				default: '',
				description: 'WorkflowEventListener workflow id foreign key',
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
						'workflowEventListener',
					],
					operation: [
						'createOneWorkflowEventListener',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowEventListener: deleteOneWorkflowEventListener
	// ----------------------------------------
	{
		displayName: 'ID',
		name: 'id',
		description: 'Object id.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflowEventListener',
				],
				operation: [
					'deleteOneWorkflowEventListener',
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
						'workflowEventListener',
					],
					operation: [
						'deleteOneWorkflowEventListener',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowEventListener: findManyWorkflowEventListeners
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
					description: 'Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data',
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
					default: 0,
					description: 'Limits the number of objects returned.',
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
					description: 'Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data',
				},
		],
		default: {},
		displayOptions: {
			show: {
				resource: [
					'workflowEventListener',
				],
				operation: [
					'findManyWorkflowEventListeners',
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
						'workflowEventListener',
					],
					operation: [
						'findManyWorkflowEventListeners',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowEventListener: findOneWorkflowEventListener
	// ----------------------------------------
	{
		displayName: 'ID',
		name: 'id',
		description: 'Object id.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflowEventListener',
				],
				operation: [
					'findOneWorkflowEventListener',
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
					'workflowEventListener',
				],
				operation: [
					'findOneWorkflowEventListener',
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
						'workflowEventListener',
					],
					operation: [
						'findOneWorkflowEventListener',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowEventListener: findWorkflowEventListenerDuplicates
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
					'workflowEventListener',
				],
				operation: [
					'findWorkflowEventListenerDuplicates',
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
					'workflowEventListener',
				],
				operation: [
					'findWorkflowEventListenerDuplicates',
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
displayName: 'Event Name',
name: 'eventName',
type: 'string',
default: '',
description: 'The workflow event listener name',
},
{
displayName: 'Workflow ID',
name: 'workflowId',
type: 'string',
default: '',
description: 'WorkflowEventListener workflow id foreign key',
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
						'workflowEventListener',
					],
					operation: [
						'findWorkflowEventListenerDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// workflowEventListener: updateOneWorkflowEventListener
	// ----------------------------------------
	{
		displayName: 'ID',
		name: 'id',
		description: 'Object id.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflowEventListener',
				],
				operation: [
					'updateOneWorkflowEventListener',
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
					'workflowEventListener',
				],
				operation: [
					'updateOneWorkflowEventListener',
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
					'workflowEventListener',
				],
				operation: [
					'updateOneWorkflowEventListener',
				],
			},
		},
		options: [
			{
				displayName: 'Event Name',
				name: 'eventName',
				type: 'string',
				default: '',
				description: 'The workflow event listener name',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				default: '',
				description: 'WorkflowEventListener workflow id foreign key',
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
						'workflowEventListener',
					],
					operation: [
						'updateOneWorkflowEventListener',
					],
				},
			},
		},
];
