import type { INodeProperties } from 'n8n-workflow';

export const attachmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['attachment'],
			},
		},
		options: [
			{
				name: 'Create Many Attachments',
				value: 'createManyAttachments',
				action: 'Create many attachments',
			},
			{
				name: 'Create One Attachment',
				value: 'createOneAttachment',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **attachments**',
				action: 'Create one attachment',
			},
			{
				name: 'Delete One Attachment',
				value: 'deleteOneAttachment',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Delete one attachment',
			},
			{
				name: 'Find Attachment Duplicates',
				value: 'findAttachmentDuplicates',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Find attachment duplicates',
			},
			{
				name: 'Find Many Attachments',
				value: 'findManyAttachments',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **attachments**',
				action: 'Find many attachments',
			},
			{
				name: 'Find One Attachment',
				value: 'findOneAttachment',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Find one attachment',
			},
			{
				name: 'Update One Attachment',
				value: 'updateOneAttachment',
				description: '**depth** can be provided to request your **attachment**',
				action: 'Update one attachment',
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
				resource: ['attachment'],
				operation: ['createManyAttachments'],
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
				resource: ['attachment'],
				operation: ['createManyAttachments'],
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
				resource: ['attachment'],
				operation: ['createManyAttachments'],
			},
		},
	},

	// ----------------------------------------
	//     attachment: createOneAttachment
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
				resource: ['attachment'],
				operation: ['createOneAttachment'],
			},
		},
	},
	{
		displayName: 'Author ID',
		name: 'authorId',
		description: 'Attachment author ID foreign key',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['attachment'],
				operation: ['createOneAttachment'],
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
				resource: ['attachment'],
				operation: ['createOneAttachment'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Attachment company ID foreign key',
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
				description: 'Attachment note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'Attachment opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Attachment person ID foreign key',
			},
			{
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
				description: 'Attachment task ID foreign key',
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
				resource: ['attachment'],
				operation: ['createOneAttachment'],
			},
		},
	},

	// ----------------------------------------
	//     attachment: deleteOneAttachment
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
				resource: ['attachment'],
				operation: ['deleteOneAttachment'],
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
				resource: ['attachment'],
				operation: ['deleteOneAttachment'],
			},
		},
	},

	// ----------------------------------------
	//   attachment: findAttachmentDuplicates
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
				resource: ['attachment'],
				operation: ['findAttachmentDuplicates'],
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
				resource: ['attachment'],
				operation: ['findAttachmentDuplicates'],
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
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
								description: 'Attachment name',
							},
							{
								displayName: 'Full Path',
								name: 'fullPath',
								type: 'string',
								default: '',
								description: 'Attachment full path',
							},
							{
								displayName: 'Type',
								name: 'type',
								type: 'string',
								default: '',
								description: 'Attachment type',
							},
							{
								displayName: 'Author ID',
								name: 'authorId',
								type: 'string',
								default: '',
								description: 'Attachment author ID foreign key',
							},
							{
								displayName: 'Task ID',
								name: 'taskId',
								type: 'string',
								default: '',
								description: 'Attachment task ID foreign key',
							},
							{
								displayName: 'Note ID',
								name: 'noteId',
								type: 'string',
								default: '',
								description: 'Attachment note ID foreign key',
							},
							{
								displayName: 'Person ID',
								name: 'personId',
								type: 'string',
								default: '',
								description: 'Attachment person ID foreign key',
							},
							{
								displayName: 'Company ID',
								name: 'companyId',
								type: 'string',
								default: '',
								description: 'Attachment company ID foreign key',
							},
							{
								displayName: 'Opportunity ID',
								name: 'opportunityId',
								type: 'string',
								default: '',
								description: 'Attachment opportunity ID foreign key',
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
				resource: ['attachment'],
				operation: ['findAttachmentDuplicates'],
			},
		},
	},

	// ----------------------------------------
	//     attachment: findManyAttachments
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
				resource: ['attachment'],
				operation: ['findManyAttachments'],
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
				resource: ['attachment'],
				operation: ['findManyAttachments'],
			},
		},
	},

	// ----------------------------------------
	//      attachment: findOneAttachment
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
				resource: ['attachment'],
				operation: ['findOneAttachment'],
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
				resource: ['attachment'],
				operation: ['findOneAttachment'],
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
				resource: ['attachment'],
				operation: ['findOneAttachment'],
			},
		},
	},

	// ----------------------------------------
	//     attachment: updateOneAttachment
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
				resource: ['attachment'],
				operation: ['updateOneAttachment'],
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
				resource: ['attachment'],
				operation: ['updateOneAttachment'],
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
				resource: ['attachment'],
				operation: ['updateOneAttachment'],
			},
		},
		options: [
			{
				displayName: 'Author ID',
				name: 'authorId',
				type: 'string',
				default: '',
				description: 'Attachment author ID foreign key',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Attachment company ID foreign key',
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
				description: 'Attachment note ID foreign key',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opportunityId',
				type: 'string',
				default: '',
				description: 'Attachment opportunity ID foreign key',
			},
			{
				displayName: 'Person ID',
				name: 'personId',
				type: 'string',
				default: '',
				description: 'Attachment person ID foreign key',
			},
			{
				displayName: 'Task ID',
				name: 'taskId',
				type: 'string',
				default: '',
				description: 'Attachment task ID foreign key',
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
				resource: ['attachment'],
				operation: ['updateOneAttachment'],
			},
		},
	},
];
