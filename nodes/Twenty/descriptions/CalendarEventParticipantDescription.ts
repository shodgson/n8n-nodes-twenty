import type {
	INodeProperties,
} from 'n8n-workflow';

export const calendarEventParticipantOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'calendarEventParticipant',
				],
			},
		},
		options: [
			{
				name: 'Create Many Calendar Event Participants',
				value: 'createManyCalendarEventParticipants',
				action: 'Create Many calendarEventParticipants',
			},
			{
				name: 'Create One Calendar Event Participant',
				value: 'createOneCalendarEventParticipant',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarEventParticipants**',
				action: 'Create One calendarEventParticipant',
			},
			{
				name: 'Delete One Calendar Event Participant',
				value: 'deleteOneCalendarEventParticipant',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Delete One calendarEventParticipant',
			},
			{
				name: 'Find Calendar Event Participant Duplicates',
				value: 'findCalendarEventParticipantDuplicates',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Find calendarEventParticipant Duplicates',
			},
			{
				name: 'Find Many Calendar Event Participants',
				value: 'findManyCalendarEventParticipants',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarEventParticipants**',
				action: 'Find Many calendarEventParticipants',
			},
			{
				name: 'Find One Calendar Event Participant',
				value: 'findOneCalendarEventParticipant',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Find One calendarEventParticipant',
			},
			{
				name: 'Update One Calendar Event Participant',
				value: 'updateOneCalendarEventParticipant',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Update One calendarEventParticipant',
			},
		],
		default: 'createManyCalendarEventParticipants',
	},
];

export const calendarEventParticipantFields: INodeProperties[] = [
	// ----------------------------------------
	// calendarEventParticipant: createManyCalendarEventParticipants
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
					'calendarEventParticipant',
				],
				operation: [
					'createManyCalendarEventParticipants',
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
					'calendarEventParticipant',
				],
				operation: [
					'createManyCalendarEventParticipants',
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
						'calendarEventParticipant',
					],
					operation: [
						'createManyCalendarEventParticipants',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarEventParticipant: createOneCalendarEventParticipant
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
					'calendarEventParticipant',
				],
				operation: [
					'createOneCalendarEventParticipant',
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
					'calendarEventParticipant',
				],
				operation: [
					'createOneCalendarEventParticipant',
				],
			},
		},
		options: [
			{
				displayName: 'Calendar Event ID',
				name: 'calendarEventId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',
				description: 'Display Name',
			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',
				description: 'Handle',
			},
			{
				displayName: 'Is Organizer',
				name: 'isOrganizer',
				type: 'boolean',
				default: false,
				description: 'Is Organizer',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Response Status',
				name: 'responseStatus',
				type: 'options',
				default: '',
				description: 'Response Status',
				options: [
					{
						name: 'Accepted',
						value: 'ACCEPTED',
					},
					{
						name: 'Declined',
						value: 'DECLINED',
					},
					{
						name: 'Needs Action',
						value: 'NEEDS_ACTION',
					},
					{
						name: 'Tentative',
						value: 'TENTATIVE',
					},
				],
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
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
						'calendarEventParticipant',
					],
					operation: [
						'createOneCalendarEventParticipant',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarEventParticipant: deleteOneCalendarEventParticipant
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
					'calendarEventParticipant',
				],
				operation: [
					'deleteOneCalendarEventParticipant',
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
						'calendarEventParticipant',
					],
					operation: [
						'deleteOneCalendarEventParticipant',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarEventParticipant: findCalendarEventParticipantDuplicates
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
					'calendarEventParticipant',
				],
				operation: [
					'findCalendarEventParticipantDuplicates',
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
					'calendarEventParticipant',
				],
				operation: [
					'findCalendarEventParticipantDuplicates',
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
						'calendarEventParticipant',
					],
					operation: [
						'findCalendarEventParticipantDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarEventParticipant: findManyCalendarEventParticipants
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
					'calendarEventParticipant',
				],
				operation: [
					'findManyCalendarEventParticipants',
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
						'calendarEventParticipant',
					],
					operation: [
						'findManyCalendarEventParticipants',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarEventParticipant: findOneCalendarEventParticipant
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
					'calendarEventParticipant',
				],
				operation: [
					'findOneCalendarEventParticipant',
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
					'calendarEventParticipant',
				],
				operation: [
					'findOneCalendarEventParticipant',
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
						'calendarEventParticipant',
					],
					operation: [
						'findOneCalendarEventParticipant',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarEventParticipant: updateOneCalendarEventParticipant
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
					'calendarEventParticipant',
				],
				operation: [
					'updateOneCalendarEventParticipant',
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
					'calendarEventParticipant',
				],
				operation: [
					'updateOneCalendarEventParticipant',
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
					'calendarEventParticipant',
				],
				operation: [
					'updateOneCalendarEventParticipant',
				],
			},
		},
		options: [
			{
				displayName: 'Calendar Event ID',
				name: 'calendarEventId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',
				description: 'Display Name',
			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',
				description: 'Handle',
			},
			{
				displayName: 'Is Organizer',
				name: 'isOrganizer',
				type: 'boolean',
				default: false,
				description: 'Is Organizer',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Response Status',
				name: 'responseStatus',
				type: 'options',
				default: '',
				description: 'Response Status',
				options: [
					{
						name: 'Accepted',
						value: 'ACCEPTED',
					},
					{
						name: 'Declined',
						value: 'DECLINED',
					},
					{
						name: 'Needs Action',
						value: 'NEEDS_ACTION',
					},
					{
						name: 'Tentative',
						value: 'TENTATIVE',
					},
				],
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
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
						'calendarEventParticipant',
					],
					operation: [
						'updateOneCalendarEventParticipant',
					],
				},
			},
		},
];
