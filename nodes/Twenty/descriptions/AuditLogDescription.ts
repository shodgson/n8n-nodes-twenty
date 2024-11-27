import type { INodeProperties } from 'n8n-workflow';

export const auditLogOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['auditLog'],
			},
		},
		options: [
			{
				name: 'Create Many Audit Logs',
				value: 'createManyAuditLogs',
				action: 'Create many audit logs',
			},
			{
				name: 'Create One Audit Log',
				value: 'createOneAuditLog',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **auditLogs**',
				action: 'Create one audit log',
			},
			{
				name: 'Delete One Audit Log',
				value: 'deleteOneAuditLog',
				description: '**depth** can be provided to request your **auditLog**',
				action: 'Delete one audit log',
			},
			{
				name: 'Find Audit Log Duplicates',
				value: 'findAuditLogDuplicates',
				description: '**depth** can be provided to request your **auditLog**',
				action: 'Find audit log duplicates',
			},
			{
				name: 'Find Many Audit Logs',
				value: 'findManyAuditLogs',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **auditLogs**',
				action: 'Find many audit logs',
			},
			{
				name: 'Find One Audit Log',
				value: 'findOneAuditLog',
				description: '**depth** can be provided to request your **auditLog**',
				action: 'Find one audit log',
			},
			{
				name: 'Update One Audit Log',
				value: 'updateOneAuditLog',
				description: '**depth** can be provided to request your **auditLog**',
				action: 'Update one audit log',
			},
		],
		default: 'createManyAuditLogs',
	},
];

export const auditLogFields: INodeProperties[] = [
	// ----------------------------------------
	//      auditLog: createManyAuditLogs
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
				resource: ['auditLog'],
				operation: ['createManyAuditLogs'],
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
				resource: ['auditLog'],
				operation: ['createManyAuditLogs'],
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
				resource: ['auditLog'],
				operation: ['createManyAuditLogs'],
			},
		},
	},

	// ----------------------------------------
	//       auditLog: createOneAuditLog
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
				resource: ['auditLog'],
				operation: ['createOneAuditLog'],
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
				resource: ['auditLog'],
				operation: ['createOneAuditLog'],
			},
		},
		options: [
			{
				displayName: 'Context',
				name: 'context',
				type: 'json',
				default: '',
				description: 'JSON object to provide context (user, device, workspace, etc.)',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Event name/type',
			},
			{
				displayName: 'Object Metadata ID',
				name: 'objectMetadataId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Object Name',
				name: 'objectName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Properties',
				name: 'properties',
				type: 'json',
				default: '',
				description: 'JSON value for event details',
			},
			{
				displayName: 'Record ID',
				name: 'recordId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Event workspace member ID foreign key',
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
				resource: ['auditLog'],
				operation: ['createOneAuditLog'],
			},
		},
	},

	// ----------------------------------------
	//       auditLog: deleteOneAuditLog
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
				resource: ['auditLog'],
				operation: ['deleteOneAuditLog'],
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
				resource: ['auditLog'],
				operation: ['deleteOneAuditLog'],
			},
		},
	},

	// ----------------------------------------
	//     auditLog: findAuditLogDuplicates
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
				resource: ['auditLog'],
				operation: ['findAuditLogDuplicates'],
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
				resource: ['auditLog'],
				operation: ['findAuditLogDuplicates'],
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
								description: 'Event name/type',
							},
							{
								displayName: 'Properties',
								name: 'properties',
								type: 'json',
								default: '',
								description: 'JSON value for event details',
							},
							{
								displayName: 'Context',
								name: 'context',
								type: 'json',
								default: '',
								description: 'JSON object to provide context (user, device, workspace, etc.)',
							},
							{
								displayName: 'Object Name',
								name: 'objectName',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Object Metadata ID',
								name: 'objectMetadataId',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Record ID',
								name: 'recordId',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Workspace Member ID',
								name: 'workspaceMemberId',
								type: 'string',
								default: '',
								description: 'Event workspace member ID foreign key',
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
				resource: ['auditLog'],
				operation: ['findAuditLogDuplicates'],
			},
		},
	},

	// ----------------------------------------
	//       auditLog: findManyAuditLogs
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
				resource: ['auditLog'],
				operation: ['findManyAuditLogs'],
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
				resource: ['auditLog'],
				operation: ['findManyAuditLogs'],
			},
		},
	},

	// ----------------------------------------
	//        auditLog: findOneAuditLog
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
				resource: ['auditLog'],
				operation: ['findOneAuditLog'],
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
				resource: ['auditLog'],
				operation: ['findOneAuditLog'],
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
				resource: ['auditLog'],
				operation: ['findOneAuditLog'],
			},
		},
	},

	// ----------------------------------------
	//       auditLog: updateOneAuditLog
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
				resource: ['auditLog'],
				operation: ['updateOneAuditLog'],
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
				resource: ['auditLog'],
				operation: ['updateOneAuditLog'],
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
				resource: ['auditLog'],
				operation: ['updateOneAuditLog'],
			},
		},
		options: [
			{
				displayName: 'Context',
				name: 'context',
				type: 'json',
				default: '',
				description: 'JSON object to provide context (user, device, workspace, etc.)',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Event name/type',
			},
			{
				displayName: 'Object Metadata ID',
				name: 'objectMetadataId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Object Name',
				name: 'objectName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Properties',
				name: 'properties',
				type: 'json',
				default: '',
				description: 'JSON value for event details',
			},
			{
				displayName: 'Record ID',
				name: 'recordId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Workspace Member ID',
				name: 'workspaceMemberId',
				type: 'string',
				default: '',
				description: 'Event workspace member ID foreign key',
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
				resource: ['auditLog'],
				operation: ['updateOneAuditLog'],
			},
		},
	},
];
