import type {
	INodeProperties,
} from 'n8n-workflow';

export const messageChannelMessageAssociationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'messageChannelMessageAssociation',
				],
			},
		},
		options: [
			{
				name: 'Create Many Message Channel Message Associations',
				value: 'createManyMessageChannelMessageAssociations',
				action: 'Create Many messageChannelMessageAssociations',
			},
			{
				name: 'Create One Message Channel Message Association',
				value: 'createOneMessageChannelMessageAssociation',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannelMessageAssociations**',
				action: 'Create One messageChannelMessageAssociation',
			},
			{
				name: 'Delete One Message Channel Message Association',
				value: 'deleteOneMessageChannelMessageAssociation',
				description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
				action: 'Delete One messageChannelMessageAssociation',
			},
			{
				name: 'Find Many Message Channel Message Associations',
				value: 'findManyMessageChannelMessageAssociations',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **messageChannelMessageAssociations**',
				action: 'Find Many messageChannelMessageAssociations',
			},
			{
				name: 'Find Message Channel Message Association Duplicates',
				value: 'findMessageChannelMessageAssociationDuplicates',
				description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
				action: 'Find messageChannelMessageAssociation Duplicates',
			},
			{
				name: 'Find One Message Channel Message Association',
				value: 'findOneMessageChannelMessageAssociation',
				description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
				action: 'Find One messageChannelMessageAssociation',
			},
			{
				name: 'Update One Message Channel Message Association',
				value: 'updateOneMessageChannelMessageAssociation',
				description: '**depth** can be provided to request your **messageChannelMessageAssociation**',
				action: 'Update One messageChannelMessageAssociation',
			},
		],
		default: 'createManyMessageChannelMessageAssociations',
	},
];

export const messageChannelMessageAssociationFields: INodeProperties[] = [
	// ----------------------------------------
	// messageChannelMessageAssociation: createManyMessageChannelMessageAssociations
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'createManyMessageChannelMessageAssociations',
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'createManyMessageChannelMessageAssociations',
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
						'messageChannelMessageAssociation',
					],
					operation: [
						'createManyMessageChannelMessageAssociations',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannelMessageAssociation: createOneMessageChannelMessageAssociation
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'createOneMessageChannelMessageAssociation',
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'createOneMessageChannelMessageAssociation',
				],
			},
		},
		options: [
			{
				displayName: 'Direction',
				name: 'direction',
				type: 'options',
				default: '',
				description: 'Message Direction',
				options: [
					{
						name: 'Incoming',
						value: 'INCOMING',
					},
					{
						name: 'Outgoing',
						value: 'OUTGOING',
					},
				],
			},
			{
				displayName: 'Message Channel ID',
				name: 'messageChannelId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Message External ID',
				name: 'messageExternalId',
				type: 'string',
				default: '',
				description: 'Message id from the messaging provider',
			},
			{
				displayName: 'Message ID',
				name: 'messageId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Message Thread External ID',
				name: 'messageThreadExternalId',
				type: 'string',
				default: '',
				description: 'Thread id from the messaging provider',
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
						'messageChannelMessageAssociation',
					],
					operation: [
						'createOneMessageChannelMessageAssociation',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannelMessageAssociation: deleteOneMessageChannelMessageAssociation
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'deleteOneMessageChannelMessageAssociation',
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
						'messageChannelMessageAssociation',
					],
					operation: [
						'deleteOneMessageChannelMessageAssociation',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannelMessageAssociation: findManyMessageChannelMessageAssociations
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'findManyMessageChannelMessageAssociations',
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
						'messageChannelMessageAssociation',
					],
					operation: [
						'findManyMessageChannelMessageAssociations',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannelMessageAssociation: findMessageChannelMessageAssociationDuplicates
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'findMessageChannelMessageAssociationDuplicates',
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'findMessageChannelMessageAssociationDuplicates',
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
						'messageChannelMessageAssociation',
					],
					operation: [
						'findMessageChannelMessageAssociationDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannelMessageAssociation: findOneMessageChannelMessageAssociation
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'findOneMessageChannelMessageAssociation',
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'findOneMessageChannelMessageAssociation',
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
						'messageChannelMessageAssociation',
					],
					operation: [
						'findOneMessageChannelMessageAssociation',
					],
				},
			},
		},
	
	// ----------------------------------------
	// messageChannelMessageAssociation: updateOneMessageChannelMessageAssociation
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'updateOneMessageChannelMessageAssociation',
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'updateOneMessageChannelMessageAssociation',
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
					'messageChannelMessageAssociation',
				],
				operation: [
					'updateOneMessageChannelMessageAssociation',
				],
			},
		},
		options: [
			{
				displayName: 'Direction',
				name: 'direction',
				type: 'options',
				default: '',
				description: 'Message Direction',
				options: [
					{
						name: 'Incoming',
						value: 'INCOMING',
					},
					{
						name: 'Outgoing',
						value: 'OUTGOING',
					},
				],
			},
			{
				displayName: 'Message Channel ID',
				name: 'messageChannelId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Message External ID',
				name: 'messageExternalId',
				type: 'string',
				default: '',
				description: 'Message id from the messaging provider',
			},
			{
				displayName: 'Message ID',
				name: 'messageId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Message Thread External ID',
				name: 'messageThreadExternalId',
				type: 'string',
				default: '',
				description: 'Thread id from the messaging provider',
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
						'messageChannelMessageAssociation',
					],
					operation: [
						'updateOneMessageChannelMessageAssociation',
					],
				},
			},
		},
];
