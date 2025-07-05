import type {
	INodeProperties,
} from 'n8n-workflow';

export const attachmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'attachment',
				],
			},
		},
		options: [
			{
				name: 'Create Many Attachments',
				value: 'createManyAttachments',
				action: 'Create Many attachments',
			},
			{
				name: 'Create One Attachment',
				value: 'createOneAttachment',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **attachments**',
				action: 'Create One attachment',
			},
			{
				name: 'Delete One Attachment',
				value: 'deleteOneAttachment',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Delete One attachment',
			},
			{
				name: 'Find Attachment Duplicates',
				value: 'findAttachmentDuplicates',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Find attachment Duplicates',
			},
			{
				name: 'Find Many Attachments',
				value: 'findManyAttachments',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **attachments**',
				action: 'Find Many attachments',
			},
			{
				name: 'Find One Attachment',
				value: 'findOneAttachment',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Find One attachment',
			},
			{
				name: 'Update One Attachment',
				value: 'updateOneAttachment',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Update One attachment',
			},
		],
		default: 'createManyAttachments',
	},
];

export const attachmentFields: INodeProperties[] = [
	// ----------------------------------------
	//    attachment: createManyAttachments
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
					'attachment',
				],
				operation: [
					'createManyAttachments',
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
					'attachment',
				],
				operation: [
					'createManyAttachments',
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
						'attachment',
					],
					operation: [
						'createManyAttachments',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     attachment: createOneAttachment
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
					'attachment',
				],
				operation: [
					'createOneAttachment',
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
					'attachment',
				],
				operation: [
					'createOneAttachment',
				],
			},
		},
		options: [
			{
				displayName: 'Author ID',
				name: 'authorId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Path',
				name: 'fullPath',
				type: 'string',
				default: '',
				description: 'Attachment full path',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Attachment name',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
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
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'Attachment type',
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
						'attachment',
					],
					operation: [
						'createOneAttachment',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     attachment: deleteOneAttachment
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
					'attachment',
				],
				operation: [
					'deleteOneAttachment',
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
						'attachment',
					],
					operation: [
						'deleteOneAttachment',
					],
				},
			},
		},
	
	// ----------------------------------------
	//   attachment: findAttachmentDuplicates
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
					'attachment',
				],
				operation: [
					'findAttachmentDuplicates',
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
					'attachment',
				],
				operation: [
					'findAttachmentDuplicates',
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
						'attachment',
					],
					operation: [
						'findAttachmentDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     attachment: findManyAttachments
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
					'attachment',
				],
				operation: [
					'findManyAttachments',
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
						'attachment',
					],
					operation: [
						'findManyAttachments',
					],
				},
			},
		},
	
	// ----------------------------------------
	//      attachment: findOneAttachment
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
					'attachment',
				],
				operation: [
					'findOneAttachment',
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
					'attachment',
				],
				operation: [
					'findOneAttachment',
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
						'attachment',
					],
					operation: [
						'findOneAttachment',
					],
				},
			},
		},
	
	// ----------------------------------------
	//     attachment: updateOneAttachment
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
					'attachment',
				],
				operation: [
					'updateOneAttachment',
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
					'attachment',
				],
				operation: [
					'updateOneAttachment',
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
					'attachment',
				],
				operation: [
					'updateOneAttachment',
				],
			},
		},
		options: [
			{
				displayName: 'Author ID',
				name: 'authorId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Full Path',
				name: 'fullPath',
				type: 'string',
				default: '',
				description: 'Attachment full path',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Attachment name',
			},
			{
				displayName: 'Note ID',
				name: 'noteId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
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
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'Attachment type',
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
						'attachment',
					],
					operation: [
						'updateOneAttachment',
					],
				},
			},
		},
];
