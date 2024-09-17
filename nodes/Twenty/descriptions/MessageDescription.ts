import type {
	INodeProperties,
} from 'n8n-workflow';

export const messageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'message',
				],
			},
		},
		options: [
			{
				name: 'Create Many Messages',
				value: 'createManyMessages',
				action: 'Create many messages',
			},
			{
				name: 'Create One Message',
				value: 'createOneMessage',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messages**',
				action: 'Create one message',
			},
			{
				name: 'Delete One Message',
				value: 'deleteOneMessage',
				description: '**depth** can be provided to request your **message**',
				action: 'Delete one message',
			},
			{
				name: 'Find Many Messages',
				value: 'findManyMessages',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messages**',
				action: 'Find many messages',
			},
			{
				name: 'Find Message Duplicates',
				value: 'findMessageDuplicates',
				description: '**depth** can be provided to request your **message**',
				action: 'Find message duplicates',
			},
			{
				name: 'Find One Message',
				value: 'findOneMessage',
				description: '**depth** can be provided to request your **message**',
				action: 'Find one message',
			},
			{
				name: 'Update One Message',
				value: 'updateOneMessage',
				description: '**depth** can be provided to request your **message**',
				action: 'Update one message',
			},
		],
		default: 'createManyMessages',
	},
];

export const messageFields: INodeProperties[] = [
	// ----------------------------------------
	//       message: createManyMessages
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
					'message',
				],
				operation: [
					'createManyMessages',
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
					'message',
				],
				operation: [
					'createManyMessages',
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
						'message',
					],
					operation: [
						'createManyMessages',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        message: createOneMessage
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
					'message',
				],
				operation: [
					'createOneMessage',
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
					'message',
				],
				operation: [
					'createOneMessage',
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
				displayName: 'Header Message ID',
				name: 'headerMessageId',
				type: 'string',
				default: '',
				description: 'Message ID from the message header',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Message Thread ID',
				name: 'messageThreadId',
				type: 'string',
				default: '',
				description: 'Message Thread ID foreign key',
			},
			{
				displayName: 'Received At',
				name: 'receivedAt',
				type: 'string',
				default: '',
				description: 'The date the message was received',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
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
						'message',
					],
					operation: [
						'createOneMessage',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        message: deleteOneMessage
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
					'message',
				],
				operation: [
					'deleteOneMessage',
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
						'message',
					],
					operation: [
						'deleteOneMessage',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        message: findManyMessages
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
					'message',
				],
				operation: [
					'findManyMessages',
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
						'message',
					],
					operation: [
						'findManyMessages',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      message: findMessageDuplicates
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
					'message',
				],
				operation: [
					'findMessageDuplicates',
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
					'message',
				],
				operation: [
					'findMessageDuplicates',
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
displayName: 'Header Message ID',
name: 'headerMessageId',
type: 'string',
default: '',
description: 'Message ID from the message header',
},
{
displayName: 'Subject',
name: 'subject',
type: 'string',
default: '',
},
{
displayName: 'Text',
name: 'text',
type: 'string',
default: '',
},
{
displayName: 'Received At',
name: 'receivedAt',
type: 'string',
default: '',
description: 'The date the message was received',
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
displayName: 'Message Thread ID',
name: 'messageThreadId',
type: 'string',
default: '',
description: 'Message Thread ID foreign key',
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
						'message',
					],
					operation: [
						'findMessageDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         message: findOneMessage
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
					'message',
				],
				operation: [
					'findOneMessage',
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
					'message',
				],
				operation: [
					'findOneMessage',
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
						'message',
					],
					operation: [
						'findOneMessage',
					],
				},
			},
		},
	
	// ----------------------------------------
	//        message: updateOneMessage
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
					'message',
				],
				operation: [
					'updateOneMessage',
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
					'message',
				],
				operation: [
					'updateOneMessage',
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
					'message',
				],
				operation: [
					'updateOneMessage',
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
				displayName: 'Header Message ID',
				name: 'headerMessageId',
				type: 'string',
				default: '',
				description: 'Message ID from the message header',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Message Thread ID',
				name: 'messageThreadId',
				type: 'string',
				default: '',
				description: 'Message Thread ID foreign key',
			},
			{
				displayName: 'Received At',
				name: 'receivedAt',
				type: 'string',
				default: '',
				description: 'The date the message was received',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
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
						'message',
					],
					operation: [
						'updateOneMessage',
					],
				},
			},
		},
];
