import type {
	INodeProperties,
} from 'n8n-workflow';

export const messageChannelOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'messageChannel',
				],
			},
		},
		options: [
			{
				name: 'Create Many Message Channels',
				value: 'createManyMessageChannels',
				action: 'Create Many messageChannels',
			},
			{
				name: 'Create One Message Channel',
				value: 'createOneMessageChannel',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannels**',
				action: 'Create One messageChannel',
			},
			{
				name: 'Delete One Message Channel',
				value: 'deleteOneMessageChannel',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Delete One messageChannel',
			},
			{
				name: 'Find Many Message Channels',
				value: 'findManyMessageChannels',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannels**',
				action: 'Find Many messageChannels',
			},
			{
				name: 'Find Message Channel Duplicates',
				value: 'findMessageChannelDuplicates',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Find messageChannel Duplicates',
			},
			{
				name: 'Find One Message Channel',
				value: 'findOneMessageChannel',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Find One messageChannel',
			},
			{
				name: 'Update One Message Channel',
				value: 'updateOneMessageChannel',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Update One messageChannel',
			},
		],
		default: 'createManyMessageChannels',
	},
];

export const messageChannelFields: INodeProperties[] = [
	// ----------------------------------------
	// messageChannel: createManyMessageChannels
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
					'messageChannel',
				],
				operation: [
					'createManyMessageChannels',
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
					'messageChannel',
				],
				operation: [
					'createManyMessageChannels',
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
						'messageChannel',
					],
					operation: [
						'createManyMessageChannels',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannel: createOneMessageChannel
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
					'messageChannel',
				],
				operation: [
					'createOneMessageChannel',
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
					'messageChannel',
				],
				operation: [
					'createOneMessageChannel',
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
				description: 'Automatically create People records when receiving or sending emails',
				options: [
					{
						name: 'None',
						value: 'NONE',
					},
					{
						name: 'Sent',
						value: 'SENT',
					},
					{
						name: 'Sent And Received',
						value: 'SENT_AND_RECEIVED',
					},
				],
			},
			{
				displayName: 'Exclude Group Emails',
				name: 'excludeGroupEmails',
				type: 'boolean',
				default: false,
				description: 'Exclude group emails',
			},
			{
				displayName: 'Exclude Non Professional Emails',
				name: 'excludeNonProfessionalEmails',
				type: 'boolean',
				default: false,
				description: 'Exclude non professional emails',
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
				description: 'Last sync cursor',
			},
			{
				displayName: 'Sync Stage',
				name: 'syncStage',
				type: 'options',
				default: '',
				description: 'Sync stage',
				options: [
					{
						name: 'Failed',
						value: 'FAILED',
					},
					{
						name: 'Full Message List Fetch Pending',
						value: 'FULL_MESSAGE_LIST_FETCH_PENDING',
					},
					{
						name: 'Messages Import Ongoing',
						value: 'MESSAGES_IMPORT_ONGOING',
					},
					{
						name: 'Messages Import Pending',
						value: 'MESSAGES_IMPORT_PENDING',
					},
					{
						name: 'Message List Fetch Ongoing',
						value: 'MESSAGE_LIST_FETCH_ONGOING',
					},
					{
						name: 'Partial Message List Fetch Pending',
						value: 'PARTIAL_MESSAGE_LIST_FETCH_PENDING',
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
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'Channel Type',
				options: [
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Sms',
						value: 'sms',
					},
				],
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
					{
						name: 'Subject',
						value: 'SUBJECT',
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
						'messageChannel',
					],
					operation: [
						'createOneMessageChannel',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannel: deleteOneMessageChannel
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
					'messageChannel',
				],
				operation: [
					'deleteOneMessageChannel',
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
						'messageChannel',
					],
					operation: [
						'deleteOneMessageChannel',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannel: findManyMessageChannels
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
					'messageChannel',
				],
				operation: [
					'findManyMessageChannels',
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
						'messageChannel',
					],
					operation: [
						'findManyMessageChannels',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannel: findMessageChannelDuplicates
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
					'messageChannel',
				],
				operation: [
					'findMessageChannelDuplicates',
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
					'messageChannel',
				],
				operation: [
					'findMessageChannelDuplicates',
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
						'messageChannel',
					],
					operation: [
						'findMessageChannelDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  messageChannel: findOneMessageChannel
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
					'messageChannel',
				],
				operation: [
					'findOneMessageChannel',
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
					'messageChannel',
				],
				operation: [
					'findOneMessageChannel',
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
						'messageChannel',
					],
					operation: [
						'findOneMessageChannel',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannel: updateOneMessageChannel
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
					'messageChannel',
				],
				operation: [
					'updateOneMessageChannel',
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
					'messageChannel',
				],
				operation: [
					'updateOneMessageChannel',
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
					'messageChannel',
				],
				operation: [
					'updateOneMessageChannel',
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
				description: 'Automatically create People records when receiving or sending emails',
				options: [
					{
						name: 'None',
						value: 'NONE',
					},
					{
						name: 'Sent',
						value: 'SENT',
					},
					{
						name: 'Sent And Received',
						value: 'SENT_AND_RECEIVED',
					},
				],
			},
			{
				displayName: 'Exclude Group Emails',
				name: 'excludeGroupEmails',
				type: 'boolean',
				default: false,
				description: 'Exclude group emails',
			},
			{
				displayName: 'Exclude Non Professional Emails',
				name: 'excludeNonProfessionalEmails',
				type: 'boolean',
				default: false,
				description: 'Exclude non professional emails',
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
				description: 'Last sync cursor',
			},
			{
				displayName: 'Sync Stage',
				name: 'syncStage',
				type: 'options',
				default: '',
				description: 'Sync stage',
				options: [
					{
						name: 'Failed',
						value: 'FAILED',
					},
					{
						name: 'Full Message List Fetch Pending',
						value: 'FULL_MESSAGE_LIST_FETCH_PENDING',
					},
					{
						name: 'Messages Import Ongoing',
						value: 'MESSAGES_IMPORT_ONGOING',
					},
					{
						name: 'Messages Import Pending',
						value: 'MESSAGES_IMPORT_PENDING',
					},
					{
						name: 'Message List Fetch Ongoing',
						value: 'MESSAGE_LIST_FETCH_ONGOING',
					},
					{
						name: 'Partial Message List Fetch Pending',
						value: 'PARTIAL_MESSAGE_LIST_FETCH_PENDING',
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
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				description: 'Channel Type',
				options: [
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Sms',
						value: 'sms',
					},
				],
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
					{
						name: 'Subject',
						value: 'SUBJECT',
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
						'messageChannel',
					],
					operation: [
						'updateOneMessageChannel',
					],
				},
			},
		},
];
