import type { INodeProperties } from 'n8n-workflow';

export const calendarChannelEventAssociationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
			},
		},
		options: [
			{
				name: 'Create Many Calendar Channel Event Associations',
				value: 'createManyCalendarChannelEventAssociations',
				action: 'Create many calendar channel event associations',
			},
			{
				name: 'Create One Calendar Channel Event Association',
				value: 'createOneCalendarChannelEventAssociation',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarChannelEventAssociations**',
				action: 'Create one calendar channel event association',
			},
			{
				name: 'Delete One Calendar Channel Event Association',
				value: 'deleteOneCalendarChannelEventAssociation',
				description:
					'**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Delete one calendar channel event association',
			},
			{
				name: 'Find Calendar Channel Event Association Duplicates',
				value: 'findCalendarChannelEventAssociationDuplicates',
				description:
					'**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Find calendar channel event association duplicates',
			},
			{
				name: 'Find Many Calendar Channel Event Associations',
				value: 'findManyCalendarChannelEventAssociations',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarChannelEventAssociations**',
				action: 'Find many calendar channel event associations',
			},
			{
				name: 'Find One Calendar Channel Event Association',
				value: 'findOneCalendarChannelEventAssociation',
				description:
					'**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Find one calendar channel event association',
			},
			{
				name: 'Update One Calendar Channel Event Association',
				value: 'updateOneCalendarChannelEventAssociation',
				description:
					'**depth** can be provided to request your **calendarChannelEventAssociation**',
				action: 'Update one calendar channel event association',
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['createManyCalendarChannelEventAssociations'],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['createManyCalendarChannelEventAssociations'],
			},
		},
		options: [],
	},
	{
		displayName: 'Scope',
		name: 'scope',
		type: 'hidden',
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['createManyCalendarChannelEventAssociations'],
			},
		},
	},

	// ----------------------------------------
	// calendarChannelEventAssociation: createOneCalendarChannelEventAssociation
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['createOneCalendarChannelEventAssociation'],
			},
		},
	},
	{
		displayName: 'Calendar Channel ID',
		name: 'calendarChannelId',
		description: 'Channel ID id foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['createOneCalendarChannelEventAssociation'],
			},
		},
	},
	{
		displayName: 'Calendar Event ID',
		name: 'calendarEventId',
		description: 'Event ID id foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['createOneCalendarChannelEventAssociation'],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['createOneCalendarChannelEventAssociation'],
			},
		},
		options: [
			{
				displayName: 'Event External ID',
				name: 'eventExternalId',
				type: 'string',
				default: '',
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['createOneCalendarChannelEventAssociation'],
			},
		},
	},

	// ----------------------------------------
	// calendarChannelEventAssociation: deleteOneCalendarChannelEventAssociation
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['deleteOneCalendarChannelEventAssociation'],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['deleteOneCalendarChannelEventAssociation'],
			},
		},
	},

	// ----------------------------------------
	// calendarChannelEventAssociation: findCalendarChannelEventAssociationDuplicates
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['findCalendarChannelEventAssociationDuplicates'],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['findCalendarChannelEventAssociationDuplicates'],
			},
		},
		options: [
			{
				displayName: 'Data',
				name: 'data',
				placeholder: 'Add Data Field',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						displayName: 'Data Fields',
						name: 'dataFields',
						values: [
							{
								displayName: 'Event External ID',
								name: 'eventExternalId',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Recurring Event External ID',
								name: 'recurringEventExternalId',
								type: 'string',
								default: '',
								description: 'Recurring Event ID',
							},
							{
								displayName: 'Calendar Channel ID',
								name: 'calendarChannelId',
								type: 'string',
								default: '',
								description: 'Channel ID id foreign key',
							},
							{
								displayName: 'Calendar Event ID',
								name: 'calendarEventId',
								type: 'string',
								default: '',
								description: 'Event ID id foreign key',
							},
						],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['findCalendarChannelEventAssociationDuplicates'],
			},
		},
	},

	// ----------------------------------------
	// calendarChannelEventAssociation: findManyCalendarChannelEventAssociations
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
			{
				displayName: 'Ending Before',
				name: 'ending_before',
				type: 'string',
				default: '',
				description:
					'Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
			},
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				description:
					'Filters objects returned. Should have the following shape: **field_1[COMPARATOR]:value_1,field_2[COMPARATOR]:value_2... To filter on composite type fields use **field.subField[COMPARATOR]:value_1 ** Available comparators are **eq**, **neq**, **in**, **is**, **gt**, **gte**, **lt**, **lte**, **startsWith**, **like**, **ilike**. You can create more complex filters using conjunctions **or**, **and**, **not**. Default root conjunction is **and**. To filter **null** values use **field[is]:NULL** or **field[is]:NOT_NULL** To filter using **boolean** values use **field[eq]:true** or **field[eq]:false**',
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
				description:
					'Sorts objects returned. Should have the following shape: **field_name_1,field_name_2[DIRECTION_2],...** Available directions are **AscNullsFirst**, **AscNullsLast**, **DescNullsFirst**, **DescNullsLast**. Default direction is **AscNullsFirst**',
			},
			{
				displayName: 'Starting After',
				name: 'starting_after',
				type: 'string',
				default: '',
				description:
					'Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['findManyCalendarChannelEventAssociations'],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['findManyCalendarChannelEventAssociations'],
			},
		},
	},

	// ----------------------------------------
	// calendarChannelEventAssociation: findOneCalendarChannelEventAssociation
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['findOneCalendarChannelEventAssociation'],
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['findOneCalendarChannelEventAssociation'],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['findOneCalendarChannelEventAssociation'],
			},
		},
	},

	// ----------------------------------------
	// calendarChannelEventAssociation: updateOneCalendarChannelEventAssociation
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['updateOneCalendarChannelEventAssociation'],
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
				description:
					'Determines the level of nested related objects to include in the response. - 0: Returns only the primary object’s information. - 1: Returns the primary object along with its directly related objects (with no additional nesting for related objects). - 2: Returns the primary object, its directly related objects, and the related objects of those related objects.',
			},
		],
		default: {},
		displayOptions: {
			show: {
				resource: ['calendarChannelEventAssociation'],
				operation: ['updateOneCalendarChannelEventAssociation'],
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['updateOneCalendarChannelEventAssociation'],
			},
		},
		options: [
			{
				displayName: 'Calendar Channel ID',
				name: 'calendarChannelId',
				type: 'string',
				default: '',
				description: 'Channel ID id foreign key',
			},
			{
				displayName: 'Calendar Event ID',
				name: 'calendarEventId',
				type: 'string',
				default: '',
				description: 'Event ID id foreign key',
			},
			{
				displayName: 'Event External ID',
				name: 'eventExternalId',
				type: 'string',
				default: '',
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
				resource: ['calendarChannelEventAssociation'],
				operation: ['updateOneCalendarChannelEventAssociation'],
			},
		},
	},
];
