import type {
	INodeProperties,
} from 'n8n-workflow';

export const calendarEventOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'calendarEvent',
				],
			},
		},
		options: [
			{
				name: 'Create Many Calendar Events',
				value: 'createManyCalendarEvents',
				action: 'Create Many calendarEvents',
			},
			{
				name: 'Create One Calendar Event',
				value: 'createOneCalendarEvent',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarEvents**',
				action: 'Create One calendarEvent',
			},
			{
				name: 'Delete One Calendar Event',
				value: 'deleteOneCalendarEvent',
				description: '**depth** can be provided to request your **calendarEvent**',
				action: 'Delete One calendarEvent',
			},
			{
				name: 'Find Calendar Event Duplicates',
				value: 'findCalendarEventDuplicates',
				description: '**depth** can be provided to request your **calendarEvent**',
				action: 'Find calendarEvent Duplicates',
			},
			{
				name: 'Find Many Calendar Events',
				value: 'findManyCalendarEvents',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **calendarEvents**',
				action: 'Find Many calendarEvents',
			},
			{
				name: 'Find One Calendar Event',
				value: 'findOneCalendarEvent',
				description: '**depth** can be provided to request your **calendarEvent**',
				action: 'Find One calendarEvent',
			},
			{
				name: 'Update One Calendar Event',
				value: 'updateOneCalendarEvent',
				description: '**depth** can be provided to request your **calendarEvent**',
				action: 'Update One calendarEvent',
			},
		],
		default: 'createManyCalendarEvents',
	},
];

export const calendarEventFields: INodeProperties[] = [
	// ----------------------------------------
	// calendarEvent: createManyCalendarEvents
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
					'calendarEvent',
				],
				operation: [
					'createManyCalendarEvents',
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
					'calendarEvent',
				],
				operation: [
					'createManyCalendarEvents',
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
						'calendarEvent',
					],
					operation: [
						'createManyCalendarEvents',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  calendarEvent: createOneCalendarEvent
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
					'calendarEvent',
				],
				operation: [
					'createOneCalendarEvent',
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
					'calendarEvent',
				],
				operation: [
					'createOneCalendarEvent',
				],
			},
		},
		options: [
				{
displayName: 'Conference Link',
name: 'conferenceLink',
placeholder: 'Add Conference Link Field',
type: 'fixedCollection',
default: {},
description: 'Meet Link',
options: [{
displayName: 'Conference Link Fields',
name: 'conferenceLinkFields',
values: [
{
displayName: 'Primary Link Label',
name: 'primaryLinkLabel',
type: 'string',
default: '',
},
{
displayName: 'Primary Link Url',
name: 'primaryLinkUrl',
type: 'string',
default: '',
},
{
displayName: 'Secondary Links',
name: 'secondaryLinks',
placeholder: 'Add Secondary Links Field',
type: 'fixedCollection',
default: {},
options: [{
displayName: 'Secondary Links Fields',
name: 'secondaryLinksFields',
values: [
{
displayName: 'Url',
name: 'url',
type: 'string',
default: '',
},
{
displayName: 'Label',
name: 'label',
type: 'string',
default: '',
},
]}],
},
]}],
},
			{
				displayName: 'Conference Solution',
				name: 'conferenceSolution',
				type: 'string',
				default: '',
				description: 'Conference Solution',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description',
			},
			{
				displayName: 'Ends At',
				name: 'endsAt',
				type: 'dateTime',
				default: '',
				description: 'End Date',
			},
			{
				displayName: 'External Created At',
				name: 'externalCreatedAt',
				type: 'dateTime',
				default: '',
				description: 'Creation DateTime',
			},
			{
				displayName: 'External Updated At',
				name: 'externalUpdatedAt',
				type: 'dateTime',
				default: '',
				description: 'Update DateTime',
			},
			{
				displayName: 'I Cal Uid',
				name: 'iCalUid',
				type: 'string',
				default: '',
				description: 'iCal UID',
			},
			{
				displayName: 'Is Canceled',
				name: 'isCanceled',
				type: 'boolean',
				default: false,
				description: 'Is canceled',
			},
			{
				displayName: 'Is Full Day',
				name: 'isFullDay',
				type: 'boolean',
				default: false,
				description: 'Is Full Day',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Location',
			},
			{
				displayName: 'Starts At',
				name: 'startsAt',
				type: 'dateTime',
				default: '',
				description: 'Start Date',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title',
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
						'calendarEvent',
					],
					operation: [
						'createOneCalendarEvent',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  calendarEvent: deleteOneCalendarEvent
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
					'calendarEvent',
				],
				operation: [
					'deleteOneCalendarEvent',
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
						'calendarEvent',
					],
					operation: [
						'deleteOneCalendarEvent',
					],
				},
			},
		},
	
	// ----------------------------------------
	// calendarEvent: findCalendarEventDuplicates
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
					'calendarEvent',
				],
				operation: [
					'findCalendarEventDuplicates',
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
					'calendarEvent',
				],
				operation: [
					'findCalendarEventDuplicates',
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
						'calendarEvent',
					],
					operation: [
						'findCalendarEventDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  calendarEvent: findManyCalendarEvents
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
					'calendarEvent',
				],
				operation: [
					'findManyCalendarEvents',
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
						'calendarEvent',
					],
					operation: [
						'findManyCalendarEvents',
					],
				},
			},
		},
	
	// ----------------------------------------
	//   calendarEvent: findOneCalendarEvent
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
					'calendarEvent',
				],
				operation: [
					'findOneCalendarEvent',
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
					'calendarEvent',
				],
				operation: [
					'findOneCalendarEvent',
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
						'calendarEvent',
					],
					operation: [
						'findOneCalendarEvent',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  calendarEvent: updateOneCalendarEvent
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
					'calendarEvent',
				],
				operation: [
					'updateOneCalendarEvent',
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
					'calendarEvent',
				],
				operation: [
					'updateOneCalendarEvent',
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
					'calendarEvent',
				],
				operation: [
					'updateOneCalendarEvent',
				],
			},
		},
		options: [
				{
displayName: 'Conference Link',
name: 'conferenceLink',
placeholder: 'Add Conference Link Field',
type: 'fixedCollection',
default: {},
description: 'Meet Link',
options: [{
displayName: 'Conference Link Fields',
name: 'conferenceLinkFields',
values: [
{
displayName: 'Primary Link Label',
name: 'primaryLinkLabel',
type: 'string',
default: '',
},
{
displayName: 'Primary Link Url',
name: 'primaryLinkUrl',
type: 'string',
default: '',
},
{
displayName: 'Secondary Links',
name: 'secondaryLinks',
placeholder: 'Add Secondary Links Field',
type: 'fixedCollection',
default: {},
options: [{
displayName: 'Secondary Links Fields',
name: 'secondaryLinksFields',
values: [
{
displayName: 'Url',
name: 'url',
type: 'string',
default: '',
},
{
displayName: 'Label',
name: 'label',
type: 'string',
default: '',
},
]}],
},
]}],
},
			{
				displayName: 'Conference Solution',
				name: 'conferenceSolution',
				type: 'string',
				default: '',
				description: 'Conference Solution',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Description',
			},
			{
				displayName: 'Ends At',
				name: 'endsAt',
				type: 'dateTime',
				default: '',
				description: 'End Date',
			},
			{
				displayName: 'External Created At',
				name: 'externalCreatedAt',
				type: 'dateTime',
				default: '',
				description: 'Creation DateTime',
			},
			{
				displayName: 'External Updated At',
				name: 'externalUpdatedAt',
				type: 'dateTime',
				default: '',
				description: 'Update DateTime',
			},
			{
				displayName: 'I Cal Uid',
				name: 'iCalUid',
				type: 'string',
				default: '',
				description: 'iCal UID',
			},
			{
				displayName: 'Is Canceled',
				name: 'isCanceled',
				type: 'boolean',
				default: false,
				description: 'Is canceled',
			},
			{
				displayName: 'Is Full Day',
				name: 'isFullDay',
				type: 'boolean',
				default: false,
				description: 'Is Full Day',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				default: '',
				description: 'Location',
			},
			{
				displayName: 'Starts At',
				name: 'startsAt',
				type: 'dateTime',
				default: '',
				description: 'Start Date',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title',
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
						'calendarEvent',
					],
					operation: [
						'updateOneCalendarEvent',
					],
				},
			},
		},
];
