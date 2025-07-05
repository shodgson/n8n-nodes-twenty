import type {
	INodeProperties,
} from 'n8n-workflow';

export const messageParticipantOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'messageParticipant',
				],
			},
		},
		options: [
			{
				name: 'Create Many Message Participants',
				value: 'createManyMessageParticipants',
				action: 'Create Many messageParticipants',
			},
			{
				name: 'Create One Message Participant',
				value: 'createOneMessageParticipant',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageParticipants**',
				action: 'Create One messageParticipant',
			},
			{
				name: 'Delete One Message Participant',
				value: 'deleteOneMessageParticipant',
				description: '**depth** can be provided to request your **messageParticipant**',
				action: 'Delete One messageParticipant',
			},
			{
				name: 'Find Many Message Participants',
				value: 'findManyMessageParticipants',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageParticipants**',
				action: 'Find Many messageParticipants',
			},
			{
				name: 'Find Message Participant Duplicates',
				value: 'findMessageParticipantDuplicates',
				description: '**depth** can be provided to request your **messageParticipant**',
				action: 'Find messageParticipant Duplicates',
			},
			{
				name: 'Find One Message Participant',
				value: 'findOneMessageParticipant',
				description: '**depth** can be provided to request your **messageParticipant**',
				action: 'Find One messageParticipant',
			},
			{
				name: 'Update One Message Participant',
				value: 'updateOneMessageParticipant',
				description: '**depth** can be provided to request your **messageParticipant**',
				action: 'Update One messageParticipant',
			},
		],
		default: 'createManyMessageParticipants',
	},
];

export const messageParticipantFields: INodeProperties[] = [
	// ----------------------------------------
	// messageParticipant: createManyMessageParticipants
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
					'messageParticipant',
				],
				operation: [
					'createManyMessageParticipants',
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
					'messageParticipant',
				],
				operation: [
					'createManyMessageParticipants',
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
						'messageParticipant',
					],
					operation: [
						'createManyMessageParticipants',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageParticipant: createOneMessageParticipant
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
					'messageParticipant',
				],
				operation: [
					'createOneMessageParticipant',
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
					'messageParticipant',
				],
				operation: [
					'createOneMessageParticipant',
				],
			},
		},
		options: [
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
				displayName: 'Message ID',
				name: 'messageId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Role',
				name: 'role',
				type: 'options',
				default: '',
				description: 'Role',
				options: [
					{
						name: 'Bcc',
						value: 'bcc',
					},
					{
						name: 'Cc',
						value: 'cc',
					},
					{
						name: 'From',
						value: 'from',
					},
					{
						name: 'To',
						value: 'to',
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
						'messageParticipant',
					],
					operation: [
						'createOneMessageParticipant',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageParticipant: deleteOneMessageParticipant
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
					'messageParticipant',
				],
				operation: [
					'deleteOneMessageParticipant',
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
						'messageParticipant',
					],
					operation: [
						'deleteOneMessageParticipant',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageParticipant: findManyMessageParticipants
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
					'messageParticipant',
				],
				operation: [
					'findManyMessageParticipants',
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
						'messageParticipant',
					],
					operation: [
						'findManyMessageParticipants',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageParticipant: findMessageParticipantDuplicates
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
					'messageParticipant',
				],
				operation: [
					'findMessageParticipantDuplicates',
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
					'messageParticipant',
				],
				operation: [
					'findMessageParticipantDuplicates',
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
						'messageParticipant',
					],
					operation: [
						'findMessageParticipantDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageParticipant: findOneMessageParticipant
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
					'messageParticipant',
				],
				operation: [
					'findOneMessageParticipant',
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
					'messageParticipant',
				],
				operation: [
					'findOneMessageParticipant',
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
						'messageParticipant',
					],
					operation: [
						'findOneMessageParticipant',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageParticipant: updateOneMessageParticipant
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
					'messageParticipant',
				],
				operation: [
					'updateOneMessageParticipant',
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
					'messageParticipant',
				],
				operation: [
					'updateOneMessageParticipant',
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
					'messageParticipant',
				],
				operation: [
					'updateOneMessageParticipant',
				],
			},
		},
		options: [
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
				displayName: 'Message ID',
				name: 'messageId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Role',
				name: 'role',
				type: 'options',
				default: '',
				description: 'Role',
				options: [
					{
						name: 'Bcc',
						value: 'bcc',
					},
					{
						name: 'Cc',
						value: 'cc',
					},
					{
						name: 'From',
						value: 'from',
					},
					{
						name: 'To',
						value: 'to',
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
						'messageParticipant',
					],
					operation: [
						'updateOneMessageParticipant',
					],
				},
			},
		},
];
