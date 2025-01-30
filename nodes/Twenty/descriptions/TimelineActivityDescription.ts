import type {
	INodeProperties,
} from 'n8n-workflow';

export const timelineActivityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'timelineActivity',
				],
			},
		},
		options: [
			{
				name: 'Create Many Timeline Activities',
				value: 'createManyTimelineActivities',
				action: 'Create many timeline activities',
			},
			{
				name: 'Create One Timeline Activity',
				value: 'createOneTimelineActivity',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **timelineActivities**',
				action: 'Create one timeline activity',
			},
			{
				name: 'Delete One Timeline Activity',
				value: 'deleteOneTimelineActivity',
				description: '**depth** can be provided to request your **timelineActivity**',
				action: 'Delete one timeline activity',
			},
			{
				name: 'Find Many Timeline Activities',
				value: 'findManyTimelineActivities',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **timelineActivities**',
				action: 'Find many timeline activities',
			},
			{
				name: 'Find One Timeline Activity',
				value: 'findOneTimelineActivity',
				description: '**depth** can be provided to request your **timelineActivity**',
				action: 'Find one timeline activity',
			},
			{
				name: 'Find Timeline Activity Duplicates',
				value: 'findTimelineActivityDuplicates',
				description: '**depth** can be provided to request your **timelineActivity**',
				action: 'Find timeline activity duplicates',
			},
			{
				name: 'Update One Timeline Activity',
				value: 'updateOneTimelineActivity',
				description: '**depth** can be provided to request your **timelineActivity**',
				action: 'Update one timeline activity',
			},
		],
		default: 'createManyTimelineActivities',
	},
];

export const timelineActivityFields: INodeProperties[] = [
	// ----------------------------------------
	// timelineActivity: createManyTimelineActivities
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
					'timelineActivity',
				],
				operation: [
					'createManyTimelineActivities',
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
					'timelineActivity',
				],
				operation: [
					'createManyTimelineActivities',
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
						'timelineActivity',
					],
					operation: [
						'createManyTimelineActivities',
					],
				},
			},
		},
	
	// ----------------------------------------
	// timelineActivity: createOneTimelineActivity
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
					'timelineActivity',
				],
				operation: [
					'createOneTimelineActivity',
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
					'timelineActivity',
				],
				operation: [
					'createOneTimelineActivity',
				],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Event company ID foreign key',
			},
			{
				displayName: 'Happens At',
				name: 'happensAt',
				type: 'dateTime',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Linked Object Metadata ID',
				name: 'linkedObjectMetadataId',
				type: 'string',
				default: '',
				description: 'Inked Object Metadata ID',
			},
			{
				displayName: 'Linked Record Cached Name',
				name: 'linkedRecordCachedName',
				type: 'string',
				default: '',
				description: 'Cached record name',
			},
			{
				displayName: 'Linked Record ID',
				name: 'linkedRecordId',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Event name',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
				description: 'Event note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'Event opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Event person ID foreign key',
			},
			{
				displayName: 'Properties',
				name: 'properties',
				type: 'json',
				default: '',
				description: 'JSON value for event details',
			},
			{
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
				description: 'Event task ID foreign key',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				default: '',
				description: 'Event workflow ID foreign key',
			},
			{
				displayName: 'Workflow Run ID',
				name: 'workflowRunId',
				type: 'string',
				default: '',
				description: 'Event workflow run ID foreign key',
			},
			{
				displayName: 'Workflow Version ID',
				name: 'workflowVersionId',
				type: 'string',
				default: '',
				description: 'Event workflow version ID foreign key',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Event workspace member ID foreign key',
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
						'timelineActivity',
					],
					operation: [
						'createOneTimelineActivity',
					],
				},
			},
		},
	
	// ----------------------------------------
	// timelineActivity: deleteOneTimelineActivity
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
					'timelineActivity',
				],
				operation: [
					'deleteOneTimelineActivity',
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
						'timelineActivity',
					],
					operation: [
						'deleteOneTimelineActivity',
					],
				},
			},
		},
	
	// ----------------------------------------
	// timelineActivity: findManyTimelineActivities
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
					'timelineActivity',
				],
				operation: [
					'findManyTimelineActivities',
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
						'timelineActivity',
					],
					operation: [
						'findManyTimelineActivities',
					],
				},
			},
		},
	
	// ----------------------------------------
	// timelineActivity: findOneTimelineActivity
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
					'timelineActivity',
				],
				operation: [
					'findOneTimelineActivity',
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
					'timelineActivity',
				],
				operation: [
					'findOneTimelineActivity',
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
						'timelineActivity',
					],
					operation: [
						'findOneTimelineActivity',
					],
				},
			},
		},
	
	// ----------------------------------------
	// timelineActivity: findTimelineActivityDuplicates
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
					'timelineActivity',
				],
				operation: [
					'findTimelineActivityDuplicates',
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
					'timelineActivity',
				],
				operation: [
					'findTimelineActivityDuplicates',
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
displayName: 'Happens At',
name: 'happensAt',
type: 'dateTime',
default: '',
description: 'Creation date',
},
{
displayName: 'Name',
name: 'name',
type: 'string',
default: '',
description: 'Event name',
},
{
displayName: 'Properties',
name: 'properties',
type: 'json',
default: '',
description: 'JSON value for event details',
},
{
displayName: 'Linked Record Cached Name',
name: 'linkedRecordCachedName',
type: 'string',
default: '',
description: 'Cached record name',
},
{
displayName: 'Linked Record ID',
name: 'linkedRecordId',
type: 'string',
default: '',
},
{
displayName: 'Linked Object Metadata ID',
name: 'linkedObjectMetadataId',
type: 'string',
default: '',
description: 'Inked Object Metadata ID',
},
{
displayName: 'Workspace Member ID',
name: 'workspaceMemberId',
type: 'string',
default: '',
description: 'Event workspace member ID foreign key',
},
{
displayName: 'Person ID',
name: 'personId',
type: 'string',
default: '',
description: 'Event person ID foreign key',
},
{
displayName: 'Company ID',
name: 'companyId',
type: 'string',
default: '',
description: 'Event company ID foreign key',
},
{
displayName: 'Opportunity ID',
name: 'opportunityId',
type: 'string',
default: '',
description: 'Event opportunity ID foreign key',
},
{
displayName: 'Note ID',
name: 'noteId',
type: 'string',
default: '',
description: 'Event note ID foreign key',
},
{
displayName: 'Task ID',
name: 'taskId',
type: 'string',
default: '',
description: 'Event task ID foreign key',
},
{
displayName: 'Workflow ID',
name: 'workflowId',
type: 'string',
default: '',
description: 'Event workflow ID foreign key',
},
{
displayName: 'Workflow Version ID',
name: 'workflowVersionId',
type: 'string',
default: '',
description: 'Event workflow version ID foreign key',
},
{
displayName: 'Workflow Run ID',
name: 'workflowRunId',
type: 'string',
default: '',
description: 'Event workflow run ID foreign key',
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
						'timelineActivity',
					],
					operation: [
						'findTimelineActivityDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// timelineActivity: updateOneTimelineActivity
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
					'timelineActivity',
				],
				operation: [
					'updateOneTimelineActivity',
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
					'timelineActivity',
				],
				operation: [
					'updateOneTimelineActivity',
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
					'timelineActivity',
				],
				operation: [
					'updateOneTimelineActivity',
				],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Event company ID foreign key',
			},
			{
				displayName: 'Happens At',
				name: 'happensAt',
				type: 'dateTime',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Linked Object Metadata ID',
				name: 'linkedObjectMetadataId',
				type: 'string',
				default: '',
				description: 'Inked Object Metadata ID',
			},
			{
				displayName: 'Linked Record Cached Name',
				name: 'linkedRecordCachedName',
				type: 'string',
				default: '',
				description: 'Cached record name',
			},
			{
				displayName: 'Linked Record ID',
				name: 'linkedRecordId',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Event name',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
				description: 'Event note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'Event opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Event person ID foreign key',
			},
			{
				displayName: 'Properties',
				name: 'properties',
				type: 'json',
				default: '',
				description: 'JSON value for event details',
			},
			{
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
				description: 'Event task ID foreign key',
			},
			{
				displayName: 'Workflow ID',
				name: 'workflowId',
				type: 'string',
				default: '',
				description: 'Event workflow ID foreign key',
			},
			{
				displayName: 'Workflow Run ID',
				name: 'workflowRunId',
				type: 'string',
				default: '',
				description: 'Event workflow run ID foreign key',
			},
			{
				displayName: 'Workflow Version ID',
				name: 'workflowVersionId',
				type: 'string',
				default: '',
				description: 'Event workflow version ID foreign key',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Event workspace member ID foreign key',
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
						'timelineActivity',
					],
					operation: [
						'updateOneTimelineActivity',
					],
				},
			},
		},
];
