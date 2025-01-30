import type {
	INodeProperties,
} from 'n8n-workflow';

export const workflowRunOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'workflowRun',
				],
			},
		},
		options: [
			{
				name: 'Create Many Workflow Runs',
				value: 'createManyWorkflowRuns',
				action: 'Create many workflow runs',
			},
			{
				name: 'Create One Workflow Run',
				value: 'createOneWorkflowRun',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowRuns**',
				action: 'Create one workflow run',
			},
			{
				name: 'Delete One Workflow Run',
				value: 'deleteOneWorkflowRun',
				description: '**depth** can be provided to request your **workflowRun**',
				action: 'Delete one workflow run',
			},
			{
				name: 'Find Many Workflow Runs',
				value: 'findManyWorkflowRuns',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **workflowRuns**',
				action: 'Find many workflow runs',
			},
			{
				name: 'Find One Workflow Run',
				value: 'findOneWorkflowRun',
				description: '**depth** can be provided to request your **workflowRun**',
				action: 'Find one workflow run',
			},
			{
				name: 'Find Workflow Run Duplicates',
				value: 'findWorkflowRunDuplicates',
				description: '**depth** can be provided to request your **workflowRun**',
				action: 'Find workflow run duplicates',
			},
			{
				name: 'Update One Workflow Run',
				value: 'updateOneWorkflowRun',
				description: '**depth** can be provided to request your **workflowRun**',
				action: 'Update one workflow run',
			},
		],
		default: 'createManyWorkflowRuns',
	},
];

export const workflowRunFields: INodeProperties[] = [
	// ----------------------------------------
	//   workflowRun: createManyWorkflowRuns
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
					'workflowRun',
				],
				operation: [
					'createManyWorkflowRuns',
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
					'workflowRun',
				],
				operation: [
					'createManyWorkflowRuns',
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
						'workflowRun',
					],
					operation: [
						'createManyWorkflowRuns',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    workflowRun: createOneWorkflowRun
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
					'workflowRun',
				],
				operation: [
					'createOneWorkflowRun',
				],
			},
		},
	},
	{
		displayName: 'Workflow ID',
		name: 'workflowId',
		description: 'Workflow linked to the run. ID foreign key.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflowRun',
				],
				operation: [
					'createOneWorkflowRun',
				],
			},
		},
	},
	{
		displayName: 'Workflow Version ID',
		name: 'workflowVersionId',
		description: 'Workflow version linked to the run. ID foreign key.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'workflowRun',
				],
				operation: [
					'createOneWorkflowRun',
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
					'workflowRun',
				],
				operation: [
					'createOneWorkflowRun',
				],
			},
		},
		options: [
				{
displayName: 'Created By',
name: 'createdBy',
placeholder: 'Add Created By Field',
type: 'fixedCollection',
default: {},
description: 'The executor of the workflow',
options: [{
displayName: 'Created By Fields',
name: 'createdByFields',
values: [
{
displayName: 'Source',
name: 'source',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Ended At',
				name: 'endedAt',
				type: 'dateTime',
				default: '',
				description: 'Workflow run ended at',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the workflow run',
			},
			{
				displayName: 'Output',
				name: 'output',
				type: 'json',
				default: '',
				description: 'JSON object to provide output of the workflow run',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Workflow run position',
			},
			{
				displayName: 'Started At',
				name: 'startedAt',
				type: 'dateTime',
				default: '',
				description: 'Workflow run started at',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'COMPLETED',
				description: 'Workflow run status',
				options: [
					{
						name: 'Completed',
						value: 'COMPLETED',
					},
					{
						name: 'Failed',
						value: 'FAILED',
					},
					{
						name: 'Not Started',
						value: 'NOT_STARTED',
					},
					{
						name: 'Running',
						value: 'RUNNING',
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
					resource: [
						'workflowRun',
					],
					operation: [
						'createOneWorkflowRun',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    workflowRun: deleteOneWorkflowRun
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
					'workflowRun',
				],
				operation: [
					'deleteOneWorkflowRun',
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
						'workflowRun',
					],
					operation: [
						'deleteOneWorkflowRun',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    workflowRun: findManyWorkflowRuns
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
					'workflowRun',
				],
				operation: [
					'findManyWorkflowRuns',
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
						'workflowRun',
					],
					operation: [
						'findManyWorkflowRuns',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     workflowRun: findOneWorkflowRun
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
					'workflowRun',
				],
				operation: [
					'findOneWorkflowRun',
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
					'workflowRun',
				],
				operation: [
					'findOneWorkflowRun',
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
						'workflowRun',
					],
					operation: [
						'findOneWorkflowRun',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  workflowRun: findWorkflowRunDuplicates
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
					'workflowRun',
				],
				operation: [
					'findWorkflowRunDuplicates',
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
					'workflowRun',
				],
				operation: [
					'findWorkflowRunDuplicates',
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
displayName: 'Name',
name: 'name',
type: 'string',
default: '',
description: 'Name of the workflow run',
},
{
displayName: 'Started At',
name: 'startedAt',
type: 'dateTime',
default: '',
description: 'Workflow run started at',
},
{
displayName: 'Ended At',
name: 'endedAt',
type: 'dateTime',
default: '',
description: 'Workflow run ended at',
},
{
displayName: 'Status',
name: 'status',
type: 'options',
options: [
{
name: 'Completed',
value: 'COMPLETED',
},
{
name: 'Failed',
value: 'FAILED',
},
{
name: 'Not Started',
value: 'NOT_STARTED',
},
{
name: 'Running',
value: 'RUNNING',
},
],
default: 'COMPLETED',
description: 'Workflow run status',
},
{
displayName: 'Created By',
name: 'createdBy',
placeholder: 'Add Created By Field',
type: 'fixedCollection',
default: {},
description: 'The executor of the workflow',
options: [{
displayName: 'Created By Fields',
name: 'createdByFields',
values: [
{
displayName: 'Source',
name: 'source',
type: 'string',
default: '',
},
]}],
},
{
displayName: 'Output',
name: 'output',
type: 'json',
default: '',
description: 'JSON object to provide output of the workflow run',
},
{
displayName: 'Position',
name: 'position',
type: 'number',
default: 0,
description: 'Workflow run position',
},
{
displayName: 'Workflow Version ID',
name: 'workflowVersionId',
type: 'string',
default: '',
description: 'Workflow version linked to the run. ID foreign key.',
},
{
displayName: 'Workflow ID',
name: 'workflowId',
type: 'string',
default: '',
description: 'Workflow linked to the run. ID foreign key.',
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
						'workflowRun',
					],
					operation: [
						'findWorkflowRunDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    workflowRun: updateOneWorkflowRun
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
					'workflowRun',
				],
				operation: [
					'updateOneWorkflowRun',
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
					'workflowRun',
				],
				operation: [
					'updateOneWorkflowRun',
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
					'workflowRun',
				],
				operation: [
					'updateOneWorkflowRun',
				],
			},
		},
		options: [
				{
displayName: 'Created By',
name: 'createdBy',
placeholder: 'Add Created By Field',
type: 'fixedCollection',
default: {},
description: 'The executor of the workflow',
options: [{
displayName: 'Created By Fields',
name: 'createdByFields',
values: [
{
displayName: 'Source',
name: 'source',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Ended At',
				name: 'endedAt',
				type: 'dateTime',
				default: '',
				description: 'Workflow run ended at',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the workflow run',
			},
			{
				displayName: 'Output',
				name: 'output',
				type: 'json',
				default: '',
				description: 'JSON object to provide output of the workflow run',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Workflow run position',
			},
			{
				displayName: 'Started At',
				name: 'startedAt',
				type: 'dateTime',
				default: '',
				description: 'Workflow run started at',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: 'COMPLETED',
				description: 'Workflow run status',
				options: [
					{
						name: 'Completed',
						value: 'COMPLETED',
					},
					{
						name: 'Failed',
						value: 'FAILED',
					},
					{
						name: 'Not Started',
						value: 'NOT_STARTED',
					},
					{
						name: 'Running',
						value: 'RUNNING',
					},
				],
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				default: '',
				description: 'Workflow linked to the run. ID foreign key.',
			},
			{
				displayName: 'Workflow Version ID',
				name: 'workflowVersionId',
				type: 'string',
				default: '',
				description: 'Workflow version linked to the run. ID foreign key.',
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
						'workflowRun',
					],
					operation: [
						'updateOneWorkflowRun',
					],
				},
			},
		},
];
