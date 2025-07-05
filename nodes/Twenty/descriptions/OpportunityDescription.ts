import type {
	INodeProperties,
} from 'n8n-workflow';

export const opportunityOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'opportunity',
				],
			},
		},
		options: [
			{
				name: 'Create Many Opportunities',
				value: 'createManyOpportunities',
				action: 'Create Many opportunities',
			},
			{
				name: 'Create One Opportunity',
				value: 'createOneOpportunity',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **opportunities**',
				action: 'Create One opportunity',
			},
			{
				name: 'Delete One Opportunity',
				value: 'deleteOneOpportunity',
				description: '**depth** can be provided to request your **opportunity**',
				action: 'Delete One opportunity',
			},
			{
				name: 'Find Many Opportunities',
				value: 'findManyOpportunities',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **opportunities**',
				action: 'Find Many opportunities',
			},
			{
				name: 'Find One Opportunity',
				value: 'findOneOpportunity',
				description: '**depth** can be provided to request your **opportunity**',
				action: 'Find One opportunity',
			},
			{
				name: 'Find Opportunity Duplicates',
				value: 'findOpportunityDuplicates',
				description: '**depth** can be provided to request your **opportunity**',
				action: 'Find opportunity Duplicates',
			},
			{
				name: 'Update One Opportunity',
				value: 'updateOneOpportunity',
				description: '**depth** can be provided to request your **opportunity**',
				action: 'Update One opportunity',
			},
		],
		default: 'createManyOpportunities',
	},
];

export const opportunityFields: INodeProperties[] = [
	// ----------------------------------------
	//   opportunity: createManyOpportunities
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
					'opportunity',
				],
				operation: [
					'createManyOpportunities',
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
					'opportunity',
				],
				operation: [
					'createManyOpportunities',
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
						'opportunity',
					],
					operation: [
						'createManyOpportunities',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    opportunity: createOneOpportunity
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
					'opportunity',
				],
				operation: [
					'createOneOpportunity',
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
					'opportunity',
				],
				operation: [
					'createOneOpportunity',
				],
			},
		},
		options: [
				{
displayName: 'Amount',
name: 'amount',
placeholder: 'Add Amount Field',
type: 'fixedCollection',
default: {},
description: 'Opportunity amount',
options: [{
displayName: 'Amount Fields',
name: 'amountFields',
values: [
{
displayName: 'Amount Micros',
name: 'amountMicros',
type: 'number',
default: 0,
},
{
displayName: 'Currency Code',
name: 'currencyCode',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Close Date',
				name: 'closeDate',
				type: 'dateTime',
				default: '',
				description: 'Opportunity close date',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
			},
				{
displayName: 'Created By',
name: 'createdBy',
placeholder: 'Add Created By Field',
type: 'fixedCollection',
default: {},
description: 'The creator of the record',
options: [{
displayName: 'Created By Fields',
name: 'createdByFields',
values: [
{
displayName: 'Source',
name: 'source',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The opportunity name',
			},
			{
				displayName: 'Point Of Contact ID',
				name: 'pointOfContactId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Opportunity record position',
			},
			{
				displayName: 'Stage',
				name: 'stage',
				type: 'options',
				default: '',
				description: 'Opportunity stage',
				options: [
					{
						name: 'Customer',
						value: 'CUSTOMER',
					},
					{
						name: 'Meeting',
						value: 'MEETING',
					},
					{
						name: 'New',
						value: 'NEW',
					},
					{
						name: 'Proposal',
						value: 'PROPOSAL',
					},
					{
						name: 'Screening',
						value: 'SCREENING',
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
						'opportunity',
					],
					operation: [
						'createOneOpportunity',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    opportunity: deleteOneOpportunity
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
					'opportunity',
				],
				operation: [
					'deleteOneOpportunity',
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
						'opportunity',
					],
					operation: [
						'deleteOneOpportunity',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    opportunity: findManyOpportunities
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
					'opportunity',
				],
				operation: [
					'findManyOpportunities',
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
						'opportunity',
					],
					operation: [
						'findManyOpportunities',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     opportunity: findOneOpportunity
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
					'opportunity',
				],
				operation: [
					'findOneOpportunity',
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
					'opportunity',
				],
				operation: [
					'findOneOpportunity',
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
						'opportunity',
					],
					operation: [
						'findOneOpportunity',
					],
				},
			},
		},
	
	// ----------------------------------------
	//  opportunity: findOpportunityDuplicates
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
					'opportunity',
				],
				operation: [
					'findOpportunityDuplicates',
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
					'opportunity',
				],
				operation: [
					'findOpportunityDuplicates',
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
						'opportunity',
					],
					operation: [
						'findOpportunityDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//    opportunity: updateOneOpportunity
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
					'opportunity',
				],
				operation: [
					'updateOneOpportunity',
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
					'opportunity',
				],
				operation: [
					'updateOneOpportunity',
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
					'opportunity',
				],
				operation: [
					'updateOneOpportunity',
				],
			},
		},
		options: [
				{
displayName: 'Amount',
name: 'amount',
placeholder: 'Add Amount Field',
type: 'fixedCollection',
default: {},
description: 'Opportunity amount',
options: [{
displayName: 'Amount Fields',
name: 'amountFields',
values: [
{
displayName: 'Amount Micros',
name: 'amountMicros',
type: 'number',
default: 0,
},
{
displayName: 'Currency Code',
name: 'currencyCode',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Close Date',
				name: 'closeDate',
				type: 'dateTime',
				default: '',
				description: 'Opportunity close date',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
			},
				{
displayName: 'Created By',
name: 'createdBy',
placeholder: 'Add Created By Field',
type: 'fixedCollection',
default: {},
description: 'The creator of the record',
options: [{
displayName: 'Created By Fields',
name: 'createdByFields',
values: [
{
displayName: 'Source',
name: 'source',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The opportunity name',
			},
			{
				displayName: 'Point Of Contact ID',
				name: 'pointOfContactId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Opportunity record position',
			},
			{
				displayName: 'Stage',
				name: 'stage',
				type: 'options',
				default: '',
				description: 'Opportunity stage',
				options: [
					{
						name: 'Customer',
						value: 'CUSTOMER',
					},
					{
						name: 'Meeting',
						value: 'MEETING',
					},
					{
						name: 'New',
						value: 'NEW',
					},
					{
						name: 'Proposal',
						value: 'PROPOSAL',
					},
					{
						name: 'Screening',
						value: 'SCREENING',
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
						'opportunity',
					],
					operation: [
						'updateOneOpportunity',
					],
				},
			},
		},
];
