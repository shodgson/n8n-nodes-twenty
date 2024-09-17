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
				action: 'Create many calendar event participants',
			},
			{
				name: 'Create One Calendar Event Participant',
				value: 'createOneCalendarEventParticipant',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarEventParticipants**',
				action: 'Create one calendar event participant',
			},
			{
				name: 'Delete One Calendar Event Participant',
				value: 'deleteOneCalendarEventParticipant',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Delete one calendar event participant',
			},
			{
				name: 'Find Calendar Event Participant Duplicates',
				value: 'findCalendarEventParticipantDuplicates',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Find calendar event participant duplicates',
			},
			{
				name: 'Find Many Calendar Event Participants',
				value: 'findManyCalendarEventParticipants',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarEventParticipants**',
				action: 'Find many calendar event participants',
			},
			{
				name: 'Find One Calendar Event Participant',
				value: 'findOneCalendarEventParticipant',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Find one calendar event participant',
			},
			{
				name: 'Update One Calendar Event Participant',
				value: 'updateOneCalendarEventParticipant',
				description: '**depth** can be provided to request your **calendarEventParticipant**',
				action: 'Update one calendar event participant',
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
					description: 'Limits the depth objects returned',
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
					description: 'Limits the depth objects returned',
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
		displayName: 'Calendar Event ID',
		name: 'calendarEventId',
		description: 'Event ID foreign key',
		type: 'string',
		required: true,
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
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',

			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Is Organizer',
				name: 'isOrganizer',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Person ID foreign key',
			},
			{
				displayName: 'Response Status',
				name: 'responseStatus',
				type: 'options',
				default: 'NEEDS_ACTION',

				options: [
					{
						name: 'Needs Action',
						value: 'NEEDS_ACTION',
					},
					{
						name: 'Declined',
						value: 'DECLINED',
					},
					{
						name: 'Tentative',
						value: 'TENTATIVE',
					},
					{
						name: 'Accepted',
						value: 'ACCEPTED',
					},
				],
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Workspace Member ID foreign key',
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
		description: 'Object ID',
		type: 'string',
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
					description: 'Limits the depth objects returned',
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
displayName: 'Handle',
name: 'handle',
type: 'string',
default: '',
},
{
displayName: 'Display Name',
name: 'displayName',
type: 'string',
default: '',
},
{
displayName: 'Is Organizer',
name: 'isOrganizer',
type: 'boolean',
default: false,
},
{
displayName: 'Response Status',
name: 'responseStatus',
type: 'string',
default: '',
},
{
displayName: 'ID',
name: 'id',
type: 'string',
default: '',
},
{
displayName: 'Created At',
name: 'createdAt',
type: 'string',
default: '',
description: 'Creation date',
},
{
displayName: 'Updated At',
name: 'updatedAt',
type: 'dateTime',
default: '',
description: 'Last time the record was changed',
},
{
displayName: 'Calendar Event ID',
name: 'calendarEventId',
type: 'string',
default: '',
description: 'Event ID foreign key',
},
{
displayName: 'Person ID',
name: 'personId',
type: 'string',
default: '',
description: 'Person ID foreign key',
},
{
displayName: 'Workspace Member ID',
name: 'workspaceMemberId',
type: 'string',
default: '',
description: 'Workspace Member ID foreign key',
},
]}],
},
			{
				displayName: 'IDs',
				name: 'ids',
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
					description: 'Limits the depth objects returned',
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
					description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2,...** Available comparators are **eq**, **neq**, **in**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
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
		description: 'Object ID',
		type: 'string',
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
					description: 'Limits the depth objects returned',
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
		description: 'Object ID',
		type: 'string',
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
					description: 'Limits the depth objects returned',
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
		displayName: 'Calendar Event ID',
		name: 'calendarEventId',
		description: 'Event ID foreign key',
		type: 'string',
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
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
			},
			{
				displayName: 'Display Name',
				name: 'displayName',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',

			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Is Organizer',
				name: 'isOrganizer',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Person ID foreign key',
			},
			{
				displayName: 'Response Status',
				name: 'responseStatus',
				type: 'options',
				default: 'NEEDS_ACTION',

				options: [
					{
						name: 'Needs Action',
						value: 'NEEDS_ACTION',
					},
					{
						name: 'Declined',
						value: 'DECLINED',
					},
					{
						name: 'Tentative',
						value: 'TENTATIVE',
					},
					{
						name: 'Accepted',
						value: 'ACCEPTED',
					},
				],
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Workspace Member ID foreign key',
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
