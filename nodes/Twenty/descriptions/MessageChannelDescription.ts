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
				action: 'Create many message channels',
			},
			{
				name: 'Create One Message Channel',
				value: 'createOneMessageChannel',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannels**',
				action: 'Create one message channel',
			},
			{
				name: 'Delete One Message Channel',
				value: 'deleteOneMessageChannel',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Delete one message channel',
			},
			{
				name: 'Find Many Message Channels',
				value: 'findManyMessageChannels',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannels**',
				action: 'Find many message channels',
			},
			{
				name: 'Find Message Channel Duplicates',
				value: 'findMessageChannelDuplicates',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Find message channel duplicates',
			},
			{
				name: 'Find One Message Channel',
				value: 'findOneMessageChannel',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Find one message channel',
			},
			{
				name: 'Update One Message Channel',
				value: 'updateOneMessageChannel',
				description: '**depth** can be provided to request your **messageChannel**',
				action: 'Update one message channel',
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
					'messageChannel',
				],
				operation: [
					'createOneMessageChannel',
				],
			},
		},
	},
	{
		displayName: 'Connected Account ID',
		name: 'connectedAccountId',
		description: 'Connected Account ID foreign key',
		type: 'string',
		required: true,
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
				displayName: 'Contact Auto Creation Policy',
				name: 'contactAutoCreationPolicy',
				type: 'options',
				default: 'SENT_AND_RECEIVED',
				description: 'Automatically create People records when receiving or sending emails',
				options: [
					{
						name: 'Sent And Received',
						value: 'SENT_AND_RECEIVED',
					},
					{
						name: 'Sent',
						value: 'SENT',
					},
					{
						name: 'None',
						value: 'NONE',
					},
				],
			},
			{
				displayName: 'Exclude Group Emails',
				name: 'excludeGroupEmails',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Exclude Non Professional Emails',
				name: 'excludeNonProfessionalEmails',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Is Contact Auto Creation Enabled',
				name: 'isContactAutoCreationEnabled',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Is Sync Enabled',
				name: 'isSyncEnabled',
				type: 'boolean',
				default: false,

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
				default: 'FULL_MESSAGE_LIST_FETCH_PENDING',

				options: [
					{
						name: 'Full Message List Fetch Pending',
						value: 'FULL_MESSAGE_LIST_FETCH_PENDING',
					},
					{
						name: 'Partial Message List Fetch Pending',
						value: 'PARTIAL_MESSAGE_LIST_FETCH_PENDING',
					},
					{
						name: 'Message List Fetch Ongoing',
						value: 'MESSAGE_LIST_FETCH_ONGOING',
					},
					{
						name: 'Messages Import Pending',
						value: 'MESSAGES_IMPORT_PENDING',
					},
					{
						name: 'Messages Import Ongoing',
						value: 'MESSAGES_IMPORT_ONGOING',
					},
					{
						name: 'Failed',
						value: 'FAILED',
					},
				],
			},
			{
				displayName: 'Sync Stage Started At',
				name: 'syncStageStartedAt',
				type: 'dateTime',
				default: '',

			},
			{
				displayName: 'Sync Status',
				name: 'syncStatus',
				type: 'options',
				default: 'ONGOING',

				options: [
					{
						name: 'Ongoing',
						value: 'ONGOING',
					},
					{
						name: 'Not Synced',
						value: 'NOT_SYNCED',
					},
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

			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'email',
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
				default: 'METADATA',

				options: [
					{
						name: 'Metadata',
						value: 'METADATA',
					},
					{
						name: 'Subject',
						value: 'SUBJECT',
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
		description: 'Object ID',
		type: 'string',
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
					description: 'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
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
displayName: 'Visibility',
name: 'visibility',
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
displayName: 'Type',
name: 'type',
type: 'string',
default: '',
description: 'Channel Type',
},
{
displayName: 'Is Contact Auto Creation Enabled',
name: 'isContactAutoCreationEnabled',
type: 'boolean',
default: false,
},
{
displayName: 'Contact Auto Creation Policy',
name: 'contactAutoCreationPolicy',
type: 'string',
default: '',
description: 'Automatically create People records when receiving or sending emails',
},
{
displayName: 'Exclude Non Professional Emails',
name: 'excludeNonProfessionalEmails',
type: 'boolean',
default: false,
},
{
displayName: 'Exclude Group Emails',
name: 'excludeGroupEmails',
type: 'boolean',
default: false,
},
{
displayName: 'Is Sync Enabled',
name: 'isSyncEnabled',
type: 'boolean',
default: false,
},
{
displayName: 'Sync Cursor',
name: 'syncCursor',
type: 'string',
default: '',
description: 'Last sync cursor',
},
{
displayName: 'Synced At',
name: 'syncedAt',
type: 'dateTime',
default: '',
description: 'Last sync date',
},
{
displayName: 'Sync Status',
name: 'syncStatus',
type: 'string',
default: '',
},
{
displayName: 'Sync Stage',
name: 'syncStage',
type: 'string',
default: '',
},
{
displayName: 'Sync Stage Started At',
name: 'syncStageStartedAt',
type: 'dateTime',
default: '',
},
{
displayName: 'Throttle Failure Count',
name: 'throttleFailureCount',
type: 'number',
default: 0,
},
{
displayName: 'Connected Account ID',
name: 'connectedAccountId',
type: 'string',
default: '',
description: 'Connected Account ID foreign key',
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
		description: 'Object ID',
		type: 'string',
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
		description: 'Object ID',
		type: 'string',
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
				description: 'Connected Account ID foreign key',
			},
			{
				displayName: 'Contact Auto Creation Policy',
				name: 'contactAutoCreationPolicy',
				type: 'options',
				default: 'SENT_AND_RECEIVED',
				description: 'Automatically create People records when receiving or sending emails',
				options: [
					{
						name: 'Sent And Received',
						value: 'SENT_AND_RECEIVED',
					},
					{
						name: 'Sent',
						value: 'SENT',
					},
					{
						name: 'None',
						value: 'NONE',
					},
				],
			},
			{
				displayName: 'Exclude Group Emails',
				name: 'excludeGroupEmails',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Exclude Non Professional Emails',
				name: 'excludeNonProfessionalEmails',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Handle',
				name: 'handle',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Is Contact Auto Creation Enabled',
				name: 'isContactAutoCreationEnabled',
				type: 'boolean',
				default: false,

			},
			{
				displayName: 'Is Sync Enabled',
				name: 'isSyncEnabled',
				type: 'boolean',
				default: false,

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
				default: 'FULL_MESSAGE_LIST_FETCH_PENDING',

				options: [
					{
						name: 'Full Message List Fetch Pending',
						value: 'FULL_MESSAGE_LIST_FETCH_PENDING',
					},
					{
						name: 'Partial Message List Fetch Pending',
						value: 'PARTIAL_MESSAGE_LIST_FETCH_PENDING',
					},
					{
						name: 'Message List Fetch Ongoing',
						value: 'MESSAGE_LIST_FETCH_ONGOING',
					},
					{
						name: 'Messages Import Pending',
						value: 'MESSAGES_IMPORT_PENDING',
					},
					{
						name: 'Messages Import Ongoing',
						value: 'MESSAGES_IMPORT_ONGOING',
					},
					{
						name: 'Failed',
						value: 'FAILED',
					},
				],
			},
			{
				displayName: 'Sync Stage Started At',
				name: 'syncStageStartedAt',
				type: 'dateTime',
				default: '',

			},
			{
				displayName: 'Sync Status',
				name: 'syncStatus',
				type: 'options',
				default: 'ONGOING',

				options: [
					{
						name: 'Ongoing',
						value: 'ONGOING',
					},
					{
						name: 'Not Synced',
						value: 'NOT_SYNCED',
					},
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

			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'email',
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
				default: 'METADATA',

				options: [
					{
						name: 'Metadata',
						value: 'METADATA',
					},
					{
						name: 'Subject',
						value: 'SUBJECT',
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
						'messageChannel',
					],
					operation: [
						'updateOneMessageChannel',
					],
				},
			},
		},
];
