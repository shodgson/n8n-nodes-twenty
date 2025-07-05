import type {
	INodeProperties,
} from 'n8n-workflow';

export const calendarChannelEventAssociationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'calendarChannelEventAssociation',
				],
			},
		},
		options: [
			{
				name: 'Create Many Calendar Channel Event Associations',
				value: 'createManyCalendarChannelEventAssociations',
				action: 'Create Many calendarChannelEventAssociations',
			},
			{
				name: 'Create One Calendar Channel Event Association',
				value: 'createOneCalendarChannelEventAssociation',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarChannelEventAssociations**',
				action: 'Create One calendarChannelEventAssociation',
			},
			{
				name: 'Delete One Calendar Channel Event Association',
				value: 'deleteOneCalendarChannelEventAssociation',
				description: '**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Delete One calendarChannelEventAssociation',
			},
			{
				name: 'Find Calendar Channel Event Association Duplicates',
				value: 'findCalendarChannelEventAssociationDuplicates',
				description: '**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Find calendarChannelEventAssociation Duplicates',
			},
			{
				name: 'Find Many Calendar Channel Event Associations',
				value: 'findManyCalendarChannelEventAssociations',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarChannelEventAssociations**',
				action: 'Find Many calendarChannelEventAssociations',
			},
			{
				name: 'Find One Calendar Channel Event Association',
				value: 'findOneCalendarChannelEventAssociation',
				description: '**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Find One calendarChannelEventAssociation',
			},
			{
				name: 'Update One Calendar Channel Event Association',
				value: 'updateOneCalendarChannelEventAssociation',
				description: '**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Update One calendarChannelEventAssociation',
			},
		],
		default: 'createManyCalendarChannelEventAssociations',
	},
];

export const calendarChannelEventAssociationFields: INodeProperties[] = [
	// ----------------------------------------
	// calendarChannelEventAssociation: createManyCalendarChannelEventAssociations
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'createManyCalendarChannelEventAssociations',
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'createManyCalendarChannelEventAssociations',
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
						'calendarChannelEventAssociation',
					],
					operation: [
						'createManyCalendarChannelEventAssociations',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannelEventAssociation: createOneCalendarChannelEventAssociation
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'createOneCalendarChannelEventAssociation',
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'createOneCalendarChannelEventAssociation',
				],
			},
		},
		options: [
			{
				displayName: 'Calendar Channel ID',
				name: 'calendarChannelId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Calendar Event ID',
				name: 'calendarEventId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Event External ID',
				name: 'eventExternalId',
				type: 'string',
				default: '',
				description: 'Event external ID',
			},
			{
				displayName: 'Recurring Event External ID',
				name: 'recurringEventExternalId',
				type: 'string',
				default: '',
				description: 'Recurring Event ID',
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
						'calendarChannelEventAssociation',
					],
					operation: [
						'createOneCalendarChannelEventAssociation',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannelEventAssociation: deleteOneCalendarChannelEventAssociation
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'deleteOneCalendarChannelEventAssociation',
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
						'calendarChannelEventAssociation',
					],
					operation: [
						'deleteOneCalendarChannelEventAssociation',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannelEventAssociation: findCalendarChannelEventAssociationDuplicates
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'findCalendarChannelEventAssociationDuplicates',
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'findCalendarChannelEventAssociationDuplicates',
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
						'calendarChannelEventAssociation',
					],
					operation: [
						'findCalendarChannelEventAssociationDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannelEventAssociation: findManyCalendarChannelEventAssociations
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'findManyCalendarChannelEventAssociations',
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
						'calendarChannelEventAssociation',
					],
					operation: [
						'findManyCalendarChannelEventAssociations',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannelEventAssociation: findOneCalendarChannelEventAssociation
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'findOneCalendarChannelEventAssociation',
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'findOneCalendarChannelEventAssociation',
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
						'calendarChannelEventAssociation',
					],
					operation: [
						'findOneCalendarChannelEventAssociation',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarChannelEventAssociation: updateOneCalendarChannelEventAssociation
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'updateOneCalendarChannelEventAssociation',
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'updateOneCalendarChannelEventAssociation',
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
					'calendarChannelEventAssociation',
				],
				operation: [
					'updateOneCalendarChannelEventAssociation',
				],
			},
		},
		options: [
			{
				displayName: 'Calendar Channel ID',
				name: 'calendarChannelId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Calendar Event ID',
				name: 'calendarEventId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Event External ID',
				name: 'eventExternalId',
				type: 'string',
				default: '',
				description: 'Event external ID',
			},
			{
				displayName: 'Recurring Event External ID',
				name: 'recurringEventExternalId',
				type: 'string',
				default: '',
				description: 'Recurring Event ID',
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
						'calendarChannelEventAssociation',
					],
					operation: [
						'updateOneCalendarChannelEventAssociation',
					],
				},
			},
		},
];
