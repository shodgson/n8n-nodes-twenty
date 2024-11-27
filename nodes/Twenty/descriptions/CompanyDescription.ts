import type { INodeProperties } from 'n8n-workflow';

export const companyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['company'],
			},
		},
		options: [
			{
				name: 'Create Many Companies',
				value: 'createManyCompanies',
				action: 'Create many companies',
			},
			{
				name: 'Create One Company',
				value: 'createOneCompany',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **companies**',
				action: 'Create one company',
			},
			{
				name: 'Delete One Company',
				value: 'deleteOneCompany',
				description: '**depth** can be provided to request your **company**',
				action: 'Delete one company',
			},
			{
				name: 'Find Company Duplicates',
				value: 'findCompanyDuplicates',
				description: '**depth** can be provided to request your **company**',
				action: 'Find company duplicates',
			},
			{
				name: 'Find Many Companies',
				value: 'findManyCompanies',
				description:
					'**order_by**, **filter**, **limit**, **depth**, **starting_after** or **ending_before** can be provided to request your **companies**',
				action: 'Find many companies',
			},
			{
				name: 'Find One Company',
				value: 'findOneCompany',
				description: '**depth** can be provided to request your **company**',
				action: 'Find one company',
			},
			{
				name: 'Update One Company',
				value: 'updateOneCompany',
				description: '**depth** can be provided to request your **company**',
				action: 'Update one company',
			},
		],
		default: 'createManyCompanies',
	},
];

export const companyFields: INodeProperties[] = [
	// ----------------------------------------
	//       company: createManyCompanies
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
				resource: ['company'],
				operation: ['createManyCompanies'],
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
				resource: ['company'],
				operation: ['createManyCompanies'],
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
				resource: ['company'],
				operation: ['createManyCompanies'],
			},
		},
	},

	// ----------------------------------------
	//        company: createOneCompany
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
				resource: ['company'],
				operation: ['createOneCompany'],
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
				resource: ['company'],
				operation: ['createOneCompany'],
			},
		},
		options: [
			{
				displayName: 'Account Owner ID',
				name: 'accountOwnerId',
				type: 'string',
				default: '',
				description: 'Your team member responsible for managing the company account ID foreign key',
			},
			{
				displayName: 'Address',
				name: 'address',
				placeholder: 'Add Address Field',
				type: 'fixedCollection',
				default: {},
				description: 'Address of the company',
				options: [
					{
						displayName: 'Address Fields',
						name: 'addressFields',
						values: [
							{
								displayName: 'Address Street1',
								name: 'addressStreet1',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Street2',
								name: 'addressStreet2',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address City',
								name: 'addressCity',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Postcode',
								name: 'addressPostcode',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address State',
								name: 'addressState',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Country',
								name: 'addressCountry',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Lat',
								name: 'addressLat',
								type: 'number',
								default: 0,
							},
							{
								displayName: 'Address Lng',
								name: 'addressLng',
								type: 'number',
								default: 0,
							},
						],
					},
				],
			},
			{
				displayName: 'Annual Recurring Revenue',
				name: 'annualRecurringRevenue',
				placeholder: 'Add Annual Recurring Revenue Field',
				type: 'fixedCollection',
				default: {},
				description:
					'Annual Recurring Revenue: The actual or estimated annual revenue of the company',
				options: [
					{
						displayName: 'Annual Recurring Revenue Fields',
						name: 'annualRecurringRevenueFields',
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
						],
					},
				],
			},
			{
				displayName: 'Created By',
				name: 'createdBy',
				placeholder: 'Add Created By Field',
				type: 'fixedCollection',
				default: {},
				description: 'The creator of the record',
				options: [
					{
						displayName: 'Created By Fields',
						name: 'createdByFields',
						values: [
							{
								displayName: 'Source',
								name: 'source',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Domain Name',
				name: 'domainName',
				placeholder: 'Add Domain Name Field',
				type: 'fixedCollection',
				default: {},
				description: 'The company website URL. We use this URL to fetch the company icon.',
				options: [
					{
						displayName: 'Domain Name Fields',
						name: 'domainNameFields',
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
								options: [
									{
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
										],
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'Employees',
				name: 'employees',
				type: 'number',
				default: 0,
				description: 'Number of employees in the company',
			},
			{
				displayName: 'IDeal Customer Profile',
				name: 'idealCustomerProfile',
				type: 'boolean',
				default: false,
				description:
					'Ideal Customer Profile: Indicates whether the company is the most suitable and valuable customer for you',
			},
			{
				displayName: 'Linkedin Link',
				name: 'linkedinLink',
				placeholder: 'Add Linkedin Link Field',
				type: 'fixedCollection',
				default: {},
				description: 'The company Linkedin account',
				options: [
					{
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
								placeholder: 'Add Secondary Links Field',
								type: 'fixedCollection',
								default: {},
								options: [
									{
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
										],
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The company name',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Company record position',
			},
			{
				displayName: 'X Link',
				name: 'xLink',
				placeholder: 'Add X Link Field',
				type: 'fixedCollection',
				default: {},
				description: 'The company Twitter/X account',
				options: [
					{
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
								placeholder: 'Add Secondary Links Field',
								type: 'fixedCollection',
								default: {},
								options: [
									{
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
										],
									},
								],
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
				resource: ['company'],
				operation: ['createOneCompany'],
			},
		},
	},

	// ----------------------------------------
	//        company: deleteOneCompany
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
				resource: ['company'],
				operation: ['deleteOneCompany'],
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
				resource: ['company'],
				operation: ['deleteOneCompany'],
			},
		},
	},

	// ----------------------------------------
	//      company: findCompanyDuplicates
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
				resource: ['company'],
				operation: ['findCompanyDuplicates'],
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
				resource: ['company'],
				operation: ['findCompanyDuplicates'],
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
								description: 'The company name',
							},
							{
								displayName: 'Domain Name',
								name: 'domainName',
								placeholder: 'Add Domain Name Field',
								type: 'fixedCollection',
								default: {},
								description: 'The company website URL. We use this URL to fetch the company icon.',
								options: [
									{
										displayName: 'Domain Name Fields',
										name: 'domainNameFields',
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
												options: [
													{
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
														],
													},
												],
											},
										],
									},
								],
							},
							{
								displayName: 'Employees',
								name: 'employees',
								type: 'number',
								default: 0,
								description: 'Number of employees in the company',
							},
							{
								displayName: 'Linkedin Link',
								name: 'linkedinLink',
								placeholder: 'Add Linkedin Link Field',
								type: 'fixedCollection',
								default: {},
								description: 'The company Linkedin account',
								options: [
									{
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
												placeholder: 'Add Secondary Links Field',
												type: 'fixedCollection',
												default: {},
												options: [
													{
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
														],
													},
												],
											},
										],
									},
								],
							},
							{
								displayName: 'X Link',
								name: 'xLink',
								placeholder: 'Add X Link Field',
								type: 'fixedCollection',
								default: {},
								description: 'The company Twitter/X account',
								options: [
									{
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
												placeholder: 'Add Secondary Links Field',
												type: 'fixedCollection',
												default: {},
												options: [
													{
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
														],
													},
												],
											},
										],
									},
								],
							},
							{
								displayName: 'Annual Recurring Revenue',
								name: 'annualRecurringRevenue',
								placeholder: 'Add Annual Recurring Revenue Field',
								type: 'fixedCollection',
								default: {},
								description:
									'Annual Recurring Revenue: The actual or estimated annual revenue of the company',
								options: [
									{
										displayName: 'Annual Recurring Revenue Fields',
										name: 'annualRecurringRevenueFields',
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
										],
									},
								],
							},
							{
								displayName: 'Address',
								name: 'address',
								placeholder: 'Add Address Field',
								type: 'fixedCollection',
								default: {},
								description: 'Address of the company',
								options: [
									{
										displayName: 'Address Fields',
										name: 'addressFields',
										values: [
											{
												displayName: 'Address Street1',
												name: 'addressStreet1',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Address Street2',
												name: 'addressStreet2',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Address City',
												name: 'addressCity',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Address Postcode',
												name: 'addressPostcode',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Address State',
												name: 'addressState',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Address Country',
												name: 'addressCountry',
												type: 'string',
												default: '',
											},
											{
												displayName: 'Address Lat',
												name: 'addressLat',
												type: 'number',
												default: 0,
											},
											{
												displayName: 'Address Lng',
												name: 'addressLng',
												type: 'number',
												default: 0,
											},
										],
									},
								],
							},
							{
								displayName: 'IDeal Customer Profile',
								name: 'idealCustomerProfile',
								type: 'boolean',
								default: false,
								description:
									'Ideal Customer Profile: Indicates whether the company is the most suitable and valuable customer for you',
							},
							{
								displayName: 'Position',
								name: 'position',
								type: 'number',
								default: 0,
								description: 'Company record position',
							},
							{
								displayName: 'Created By',
								name: 'createdBy',
								placeholder: 'Add Created By Field',
								type: 'fixedCollection',
								default: {},
								description: 'The creator of the record',
								options: [
									{
										displayName: 'Created By Fields',
										name: 'createdByFields',
										values: [
											{
												displayName: 'Source',
												name: 'source',
												type: 'string',
												default: '',
											},
										],
									},
								],
							},
							{
								displayName: 'Account Owner ID',
								name: 'accountOwnerId',
								type: 'string',
								default: '',
								description:
									'Your team member responsible for managing the company account ID foreign key',
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
				resource: ['company'],
				operation: ['findCompanyDuplicates'],
			},
		},
	},

	// ----------------------------------------
	//        company: findManyCompanies
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
				resource: ['company'],
				operation: ['findManyCompanies'],
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
				resource: ['company'],
				operation: ['findManyCompanies'],
			},
		},
	},

	// ----------------------------------------
	//         company: findOneCompany
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
				resource: ['company'],
				operation: ['findOneCompany'],
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
				resource: ['company'],
				operation: ['findOneCompany'],
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
				resource: ['company'],
				operation: ['findOneCompany'],
			},
		},
	},

	// ----------------------------------------
	//        company: updateOneCompany
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
				resource: ['company'],
				operation: ['updateOneCompany'],
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
				resource: ['company'],
				operation: ['updateOneCompany'],
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
				resource: ['company'],
				operation: ['updateOneCompany'],
			},
		},
		options: [
			{
				displayName: 'Account Owner ID',
				name: 'accountOwnerId',
				type: 'string',
				default: '',
				description: 'Your team member responsible for managing the company account ID foreign key',
			},
			{
				displayName: 'Address',
				name: 'address',
				placeholder: 'Add Address Field',
				type: 'fixedCollection',
				default: {},
				description: 'Address of the company',
				options: [
					{
						displayName: 'Address Fields',
						name: 'addressFields',
						values: [
							{
								displayName: 'Address Street1',
								name: 'addressStreet1',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Street2',
								name: 'addressStreet2',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address City',
								name: 'addressCity',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Postcode',
								name: 'addressPostcode',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address State',
								name: 'addressState',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Country',
								name: 'addressCountry',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Address Lat',
								name: 'addressLat',
								type: 'number',
								default: 0,
							},
							{
								displayName: 'Address Lng',
								name: 'addressLng',
								type: 'number',
								default: 0,
							},
						],
					},
				],
			},
			{
				displayName: 'Annual Recurring Revenue',
				name: 'annualRecurringRevenue',
				placeholder: 'Add Annual Recurring Revenue Field',
				type: 'fixedCollection',
				default: {},
				description:
					'Annual Recurring Revenue: The actual or estimated annual revenue of the company',
				options: [
					{
						displayName: 'Annual Recurring Revenue Fields',
						name: 'annualRecurringRevenueFields',
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
						],
					},
				],
			},
			{
				displayName: 'Created By',
				name: 'createdBy',
				placeholder: 'Add Created By Field',
				type: 'fixedCollection',
				default: {},
				description: 'The creator of the record',
				options: [
					{
						displayName: 'Created By Fields',
						name: 'createdByFields',
						values: [
							{
								displayName: 'Source',
								name: 'source',
								type: 'string',
								default: '',
							},
						],
					},
				],
			},
			{
				displayName: 'Domain Name',
				name: 'domainName',
				placeholder: 'Add Domain Name Field',
				type: 'fixedCollection',
				default: {},
				description: 'The company website URL. We use this URL to fetch the company icon.',
				options: [
					{
						displayName: 'Domain Name Fields',
						name: 'domainNameFields',
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
								options: [
									{
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
										],
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'Employees',
				name: 'employees',
				type: 'number',
				default: 0,
				description: 'Number of employees in the company',
			},
			{
				displayName: 'IDeal Customer Profile',
				name: 'idealCustomerProfile',
				type: 'boolean',
				default: false,
				description:
					'Ideal Customer Profile: Indicates whether the company is the most suitable and valuable customer for you',
			},
			{
				displayName: 'Linkedin Link',
				name: 'linkedinLink',
				placeholder: 'Add Linkedin Link Field',
				type: 'fixedCollection',
				default: {},
				description: 'The company Linkedin account',
				options: [
					{
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
								placeholder: 'Add Secondary Links Field',
								type: 'fixedCollection',
								default: {},
								options: [
									{
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
										],
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The company name',
			},
			{
				displayName: 'Position',
				name: 'position',
				type: 'number',
				default: 0,
				description: 'Company record position',
			},
			{
				displayName: 'X Link',
				name: 'xLink',
				placeholder: 'Add X Link Field',
				type: 'fixedCollection',
				default: {},
				description: 'The company Twitter/X account',
				options: [
					{
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
								placeholder: 'Add Secondary Links Field',
								type: 'fixedCollection',
								default: {},
								options: [
									{
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
										],
									},
								],
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
				resource: ['company'],
				operation: ['updateOneCompany'],
			},
		},
	},
];
