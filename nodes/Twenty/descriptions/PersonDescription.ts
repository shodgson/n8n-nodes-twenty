import type {
	INodeProperties,
} from 'n8n-workflow';

export const personOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'person',
				],
			},
		},
		options: [
			{
				name: 'Create Many People',
				value: 'createManyPeople',
				action: 'Create many people',
			},
			{
				name: 'Create One Person',
				value: 'createOnePerson',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **people**',
				action: 'Create one person',
			},
			{
				name: 'Delete One Person',
				value: 'deleteOnePerson',
				description: '**depth** can be provided to request your **person**',
				action: 'Delete one person',
			},
			{
				name: 'Find Many People',
				value: 'findManyPeople',
				description: '**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **people**',
				action: 'Find many people',
			},
			{
				name: 'Find One Person',
				value: 'findOnePerson',
				description: '**depth** can be provided to request your **person**',
				action: 'Find one person',
			},
			{
				name: 'Find Person Duplicates',
				value: 'findPersonDuplicates',
				description: '**depth** can be provided to request your **person**',
				action: 'Find person duplicates',
			},
			{
				name: 'Update One Person',
				value: 'updateOnePerson',
				description: '**depth** can be provided to request your **person**',
				action: 'Update one person',
			},
		],
		default: 'createManyPeople',
	},
];

export const personFields: INodeProperties[] = [
	// ----------------------------------------
	//         person: createManyPeople
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
					'person',
				],
				operation: [
					'createManyPeople',
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
					'person',
				],
				operation: [
					'createManyPeople',
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
						'person',
					],
					operation: [
						'createManyPeople',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         person: createOnePerson
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
					'person',
				],
				operation: [
					'createOnePerson',
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
					'person',
				],
				operation: [
					'createOnePerson',
				],
			},
		},
		options: [
			{
				displayName: 'Avatar Url',
				name: 'avatarUrl',
				type: 'string',
				default: '',
				description: 'Contact’s avatar',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'Contact’s city',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Contact’s company ID foreign key',
			},
			{
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
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
{
displayName: 'Workspace Member ID',
name: 'workspaceMemberId',
type: 'string',
default: '',
},
{
displayName: 'Name',
name: 'name',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Deleted At',
				name: 'deletedAt',
				type: 'string',
				default: '',
				description: 'Date when the record was deleted',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Contact’s Email',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
				description: 'Contact’s job title',
			},
				{
displayName: 'Linkedin Link',
name: 'linkedinLink',
placeholder: 'Add Linkedin Link Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s Linkedin account',
options: [{
displayName: 'Linkedin Link Fields',
name: 'linkedinLinkFields',
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
type: 'json',
default: '',
},
]}],
},
				{
displayName: 'Name',
name: 'name',
placeholder: 'Add Name Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s name',
options: [{
displayName: 'Name Fields',
name: 'nameFields',
values: [
{
displayName: 'First Name',
name: 'firstName',
type: 'string',
default: '',
},
{
displayName: 'Last Name',
name: 'lastName',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Contact’s phone number',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Person record Position',
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
				{
displayName: 'X Link',
name: 'xLink',
placeholder: 'Add X Link Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s X/Twitter account',
options: [{
displayName: 'X Link Fields',
name: 'xLinkFields',
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
type: 'json',
default: '',
},
]}],
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
						'person',
					],
					operation: [
						'createOnePerson',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         person: deleteOnePerson
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
					'person',
				],
				operation: [
					'deleteOnePerson',
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
						'person',
					],
					operation: [
						'deleteOnePerson',
					],
				},
			},
		},
	
	// ----------------------------------------
	//          person: findManyPeople
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
					'person',
				],
				operation: [
					'findManyPeople',
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
						'person',
					],
					operation: [
						'findManyPeople',
					],
				},
			},
		},
	
	// ----------------------------------------
	//          person: findOnePerson
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
					'person',
				],
				operation: [
					'findOnePerson',
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
					'person',
				],
				operation: [
					'findOnePerson',
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
						'person',
					],
					operation: [
						'findOnePerson',
					],
				},
			},
		},
	
	// ----------------------------------------
	//       person: findPersonDuplicates
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
					'person',
				],
				operation: [
					'findPersonDuplicates',
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
					'person',
				],
				operation: [
					'findPersonDuplicates',
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
displayName: 'Name',
name: 'name',
placeholder: 'Add Name Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s name',
options: [{
displayName: 'Name Fields',
name: 'nameFields',
values: [
{
displayName: 'First Name',
name: 'firstName',
type: 'string',
default: '',
},
{
displayName: 'Last Name',
name: 'lastName',
type: 'string',
default: '',
},
]}],
},
{
displayName: 'Email',
name: 'email',
type: 'string',
placeholder: 'name@email.com',
default: '',
description: 'Contact’s Email',
},
{
displayName: 'Linkedin Link',
name: 'linkedinLink',
placeholder: 'Add Linkedin Link Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s Linkedin account',
options: [{
displayName: 'Linkedin Link Fields',
name: 'linkedinLinkFields',
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
type: 'json',
default: '',
},
]}],
},
{
displayName: 'X Link',
name: 'xLink',
placeholder: 'Add X Link Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s X/Twitter account',
options: [{
displayName: 'X Link Fields',
name: 'xLinkFields',
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
type: 'json',
default: '',
},
]}],
},
{
displayName: 'Job Title',
name: 'jobTitle',
type: 'string',
default: '',
description: 'Contact’s job title',
},
{
displayName: 'Phone',
name: 'phone',
type: 'string',
default: '',
description: 'Contact’s phone number',
},
{
displayName: 'City',
name: 'city',
type: 'string',
default: '',
description: 'Contact’s city',
},
{
displayName: 'Avatar Url',
name: 'avatarUrl',
type: 'string',
default: '',
description: 'Contact’s avatar',
},
{
displayName: 'Position',
name: 'position',
type: 'number',
default: 0,
description: 'Person record Position',
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
{
displayName: 'Workspace Member ID',
name: 'workspaceMemberId',
type: 'string',
default: '',
},
{
displayName: 'Name',
name: 'name',
type: 'string',
default: '',
},
]}],
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
displayName: 'Deleted At',
name: 'deletedAt',
type: 'string',
default: '',
description: 'Date when the record was deleted',
},
{
displayName: 'Company ID',
name: 'companyId',
type: 'string',
default: '',
description: 'Contact’s company ID foreign key',
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
						'person',
					],
					operation: [
						'findPersonDuplicates',
					],
				},
			},
		},
	
	// ----------------------------------------
	//         person: updateOnePerson
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
					'person',
				],
				operation: [
					'updateOnePerson',
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
					'person',
				],
				operation: [
					'updateOnePerson',
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
					'person',
				],
				operation: [
					'updateOnePerson',
				],
			},
		},
		options: [
			{
				displayName: 'Avatar Url',
				name: 'avatarUrl',
				type: 'string',
				default: '',
				description: 'Contact’s avatar',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
				description: 'Contact’s city',
			},
			{
				displayName: 'Company ID',
				name: 'companyId',
				type: 'string',
				default: '',
				description: 'Contact’s company ID foreign key',
			},
			{
				displayName: 'Created At',
				name: 'createdAt',
				type: 'string',
				default: '',
				description: 'Creation date',
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
{
displayName: 'Workspace Member ID',
name: 'workspaceMemberId',
type: 'string',
default: '',
},
{
displayName: 'Name',
name: 'name',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Deleted At',
				name: 'deletedAt',
				type: 'string',
				default: '',
				description: 'Date when the record was deleted',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Contact’s Email',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',

			},
			{
				displayName: 'Job Title',
				name: 'jobTitle',
				type: 'string',
				default: '',
				description: 'Contact’s job title',
			},
				{
displayName: 'Linkedin Link',
name: 'linkedinLink',
placeholder: 'Add Linkedin Link Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s Linkedin account',
options: [{
displayName: 'Linkedin Link Fields',
name: 'linkedinLinkFields',
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
type: 'json',
default: '',
},
]}],
},
				{
displayName: 'Name',
name: 'name',
placeholder: 'Add Name Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s name',
options: [{
displayName: 'Name Fields',
name: 'nameFields',
values: [
{
displayName: 'First Name',
name: 'firstName',
type: 'string',
default: '',
},
{
displayName: 'Last Name',
name: 'lastName',
type: 'string',
default: '',
},
]}],
},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Contact’s phone number',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Person record Position',
			},
			{
				displayName: 'Updated At',
				name: 'updatedAt',
				type: 'dateTime',
				default: '',
				description: 'Last time the record was changed',
			},
				{
displayName: 'X Link',
name: 'xLink',
placeholder: 'Add X Link Field',
type: 'fixedCollection',
default: {},
description: 'Contact’s X/Twitter account',
options: [{
displayName: 'X Link Fields',
name: 'xLinkFields',
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
type: 'json',
default: '',
},
]}],
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
						'person',
					],
					operation: [
						'updateOnePerson',
					],
				},
			},
		},
];
