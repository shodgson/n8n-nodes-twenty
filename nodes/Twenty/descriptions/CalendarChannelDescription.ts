import type {
	INodeProperties,
} from 'n8n-workflow';

export const calendarChannelOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'calendarChannel',
				],
			},
		},
		options: [
			{
				name: 'Create Many Calendar Channels',
				value: 'createManyCalendarChannels',
				action: 'Create Many calendarChannels',
			},
			{
				name: 'Create One Calendar Channel',
				value: 'createOneCalendarChannel',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarChannels**',
				action: 'Create One calendarChannel',
			},
			{
				name: 'Delete One Calendar Channel',
				value: 'deleteOneCalendarChannel',
				description: '**depth** can be provided to request your **calendarChannel**',
				action: 'Delete One calendarChannel',
			},
			{
				name: 'Find Calendar Channel Duplicates',
				value: 'findCalendarChannelDuplicates',
				description: '**depth** can be provided to request your **calendarChannel**',
				action: 'Find calendarChannel Duplicates',
			},
			{
				name: 'Find Many Calendar Channels',
				value: 'findManyCalendarChannels',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarChannels**',
				action: 'Find Many calendarChannels',
			},
			{
				name: 'Find One Calendar Channel',
				value: 'findOneCalendarChannel',
				description: '**depth** can be provided to request your **calendarChannel**',
				action: 'Find One calendarChannel',
			},
			{
				name: 'Update One Calendar Channel',
				value: 'updateOneCalendarChannel',
				description: '**depth** can be provided to request your **calendarChannel**',
				action: 'Update One calendarChannel',
			},
		],
		default: 'createManyCalendarChannels',
	},
];

export const calendarChannelFields: INodeProperties[] = [
	// ----------------------------------------
	// calendarChannel: createManyCalendarChannels
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
					'calendarChannel',
				],
				operation: [
					'createManyCalendarChannels',
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
					'calendarChannel',
				],
				operation: [
					'createManyCalendarChannels',
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
						'calendarChannel',
					],
					operation: [
						'createManyCalendarChannels',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannel: createOneCalendarChannel
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
					'calendarChannel',
				],
				operation: [
					'createOneCalendarChannel',
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
					'calendarChannel',
				],
				operation: [
					'createOneCalendarChannel',
				],
			},
		},
		options: [
			{
				displayName: 'Connected Account ID',
				name: 'connectedAccountId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Contact Auto Creation Policy',
				name: 'contactAutoCreationPolicy',
				type: 'options',
				default: '',
				description: 'Automatically create records for people you participated with in an event.',
				options: [
					{
						name: 'As Organizer',
						value: 'AS_ORGANIZER',
					},
					{
						name: 'As Participant',
						value: 'AS_PARTICIPANT',
					},
					{
						name: 'As Participant And Organizer',
						value: 'AS_PARTICIPANT_AND_ORGANIZER',
					},
					{
						name: 'None',
						value: 'NONE',
					},
				],
			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',
				description: 'Handle',
			},
			{
				displayName: 'Is Contact Auto Creation Enabled',
				name: 'isContactAutoCreationEnabled',
				type: 'boolean',
				default: false,
				description: 'Is Contact Auto Creation Enabled',
			},
			{
				displayName: 'Is Sync Enabled',
				name: 'isSyncEnabled',
				type: 'boolean',
				default: false,
				description: 'Is Sync Enabled',
			},
			{
				displayName: 'Sync Cursor',
				name: 'syncCursor',
				type: 'string',
				default: '',
				description: 'Sync Cursor. Used for syncing events from the calendar provider',
			},
			{
				displayName: 'Sync Stage',
				name: 'syncStage',
				type: 'options',
				default: '',
				description: 'Sync stage',
				options: [
					{
						name: 'Calendar Events Import Ongoing',
						value: 'CALENDAR_EVENTS_IMPORT_ONGOING',
					},
					{
						name: 'Calendar Events Import Pending',
						value: 'CALENDAR_EVENTS_IMPORT_PENDING',
					},
					{
						name: 'Calendar Event List Fetch Ongoing',
						value: 'CALENDAR_EVENT_LIST_FETCH_ONGOING',
					},
					{
						name: 'Failed',
						value: 'FAILED',
					},
					{
						name: 'Full Calendar Event List Fetch Pending',
						value: 'FULL_CALENDAR_EVENT_LIST_FETCH_PENDING',
					},
					{
						name: 'Partial Calendar Event List Fetch Pending',
						value: 'PARTIAL_CALENDAR_EVENT_LIST_FETCH_PENDING',
					},
				],
			},
			{
				displayName: 'Sync Stage Started At',
				name: 'syncStageStartedAt',
				type: 'dateTime',
				default: '',
				description: 'Sync stage started at',
			},
			{
				displayName: 'Sync Status',
				name: 'syncStatus',
				type: 'options',
				default: '',
				description: 'Sync status',
				options: [
					{
						name: 'Active',
						value: 'ACTIVE',
					},
					{
						name: 'Failed Insufficient Permissions',
						value: 'FAILED_INSUFFICIENT_PERMISSIONS',
					},
					{
						name: 'Failed Unknown',
						value: 'FAILED_UNKNOWN',
					},
					{
						name: 'Not Synced',
						value: 'NOT_SYNCED',
					},
					{
						name: 'Ongoing',
						value: 'ONGOING',
					},
				],
			},
			{
				displayName: 'Synced At',
				name: 'syncedAt',
				type: 'dateTime',
				default: '',
				description: 'Last sync date',
			},
			{
				displayName: 'Throttle Failure Count',
				name: 'throttleFailureCount',
				type: 'number',
				default: 0,
				description: 'Throttle Failure Count',
			},
			{
				displayName: 'Visibility',
				name: 'visibility',
				type: 'options',
				default: '',
				description: 'Visibility',
				options: [
					{
						name: 'Metadata',
						value: 'METADATA',
					},
					{
						name: 'Share Everything',
						value: 'SHARE_EVERYTHING',
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
						'calendarChannel',
					],
					operation: [
						'createOneCalendarChannel',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannel: deleteOneCalendarChannel
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
					'calendarChannel',
				],
				operation: [
					'deleteOneCalendarChannel',
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
						'calendarChannel',
					],
					operation: [
						'deleteOneCalendarChannel',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannel: findCalendarChannelDuplicates
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
					'calendarChannel',
				],
				operation: [
					'findCalendarChannelDuplicates',
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
					'calendarChannel',
				],
				operation: [
					'findCalendarChannelDuplicates',
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
						'calendarChannel',
					],
					operation: [
						'findCalendarChannelDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannel: findManyCalendarChannels
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
					'calendarChannel',
				],
				operation: [
					'findManyCalendarChannels',
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
						'calendarChannel',
					],
					operation: [
						'findManyCalendarChannels',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannel: findOneCalendarChannel
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
					'calendarChannel',
				],
				operation: [
					'findOneCalendarChannel',
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
					'calendarChannel',
				],
				operation: [
					'findOneCalendarChannel',
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
						'calendarChannel',
					],
					operation: [
						'findOneCalendarChannel',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannel: updateOneCalendarChannel
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
					'calendarChannel',
				],
				operation: [
					'updateOneCalendarChannel',
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
					'calendarChannel',
				],
				operation: [
					'updateOneCalendarChannel',
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
					'calendarChannel',
				],
				operation: [
					'updateOneCalendarChannel',
				],
			},
		},
		options: [
			{
				displayName: 'Connected Account ID',
				name: 'connectedAccountId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Contact Auto Creation Policy',
				name: 'contactAutoCreationPolicy',
				type: 'options',
				default: '',
				description: 'Automatically create records for people you participated with in an event.',
				options: [
					{
						name: 'As Organizer',
						value: 'AS_ORGANIZER',
					},
					{
						name: 'As Participant',
						value: 'AS_PARTICIPANT',
					},
					{
						name: 'As Participant And Organizer',
						value: 'AS_PARTICIPANT_AND_ORGANIZER',
					},
					{
						name: 'None',
						value: 'NONE',
					},
				],
			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',
				description: 'Handle',
			},
			{
				displayName: 'Is Contact Auto Creation Enabled',
				name: 'isContactAutoCreationEnabled',
				type: 'boolean',
				default: false,
				description: 'Is Contact Auto Creation Enabled',
			},
			{
				displayName: 'Is Sync Enabled',
				name: 'isSyncEnabled',
				type: 'boolean',
				default: false,
				description: 'Is Sync Enabled',
			},
			{
				displayName: 'Sync Cursor',
				name: 'syncCursor',
				type: 'string',
				default: '',
				description: 'Sync Cursor. Used for syncing events from the calendar provider',
			},
			{
				displayName: 'Sync Stage',
				name: 'syncStage',
				type: 'options',
				default: '',
				description: 'Sync stage',
				options: [
					{
						name: 'Calendar Events Import Ongoing',
						value: 'CALENDAR_EVENTS_IMPORT_ONGOING',
					},
					{
						name: 'Calendar Events Import Pending',
						value: 'CALENDAR_EVENTS_IMPORT_PENDING',
					},
					{
						name: 'Calendar Event List Fetch Ongoing',
						value: 'CALENDAR_EVENT_LIST_FETCH_ONGOING',
					},
					{
						name: 'Failed',
						value: 'FAILED',
					},
					{
						name: 'Full Calendar Event List Fetch Pending',
						value: 'FULL_CALENDAR_EVENT_LIST_FETCH_PENDING',
					},
					{
						name: 'Partial Calendar Event List Fetch Pending',
						value: 'PARTIAL_CALENDAR_EVENT_LIST_FETCH_PENDING',
					},
				],
			},
			{
				displayName: 'Sync Stage Started At',
				name: 'syncStageStartedAt',
				type: 'dateTime',
				default: '',
				description: 'Sync stage started at',
			},
			{
				displayName: 'Sync Status',
				name: 'syncStatus',
				type: 'options',
				default: '',
				description: 'Sync status',
				options: [
					{
						name: 'Active',
						value: 'ACTIVE',
					},
					{
						name: 'Failed Insufficient Permissions',
						value: 'FAILED_INSUFFICIENT_PERMISSIONS',
					},
					{
						name: 'Failed Unknown',
						value: 'FAILED_UNKNOWN',
					},
					{
						name: 'Not Synced',
						value: 'NOT_SYNCED',
					},
					{
						name: 'Ongoing',
						value: 'ONGOING',
					},
				],
			},
			{
				displayName: 'Synced At',
				name: 'syncedAt',
				type: 'dateTime',
				default: '',
				description: 'Last sync date',
			},
			{
				displayName: 'Throttle Failure Count',
				name: 'throttleFailureCount',
				type: 'number',
				default: 0,
				description: 'Throttle Failure Count',
			},
			{
				displayName: 'Visibility',
				name: 'visibility',
				type: 'options',
				default: '',
				description: 'Visibility',
				options: [
					{
						name: 'Metadata',
						value: 'METADATA',
					},
					{
						name: 'Share Everything',
						value: 'SHARE_EVERYTHING',
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
						'calendarChannel',
					],
					operation: [
						'updateOneCalendarChannel',
					],
				},
			},
		},
];
