# n8n-nodes-twenty

This is an n8n community node. It lets you use **Twenty CRM** in your n8n workflows.

[Twenty CRM](https://twenty.com/) is an open-source CRM (customer relationship management) tool that is under rapid development. Please consider this as a **Beta** release that is likely to break with future changes in the Twenty API.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)  
[Credit](#credit)  
[Version history](#version-history)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations
	- General
	- Api Keys
	- Attachments
	- Blocklists
	- Calendar Channel Event Associations
	- Calendar Channels
	- Calendar Event Participants
	- Calendar Events
	- Companies
	- Connected Accounts
	- Favorite Folders
	- Favorites
	- Message Channel Message Associations
	- Message Channels
	- Message Folders
	- Message Participants
	- Messages
	- Message Threads
	- Notes
	- Note Targets
	- Opportunities
	- People
	- Tasks
	- Task Targets
	- Timeline Activities
	- View Fields
	- View Filter Groups
	- View Filters
	- View Groups
	- Views
	- View Sorts
	- Webhooks
	- Workflow Automated Triggers
	- Workflow Runs
	- Workflows
	- Workflow Versions
	- Workspace Members

## Credentials

Generate an API key in Twenty by following the [Twenty docs](https://twenty.com/user-guide/section/functions/api-webhooks). In summary, create an API key in the Settings -> Developers section.

Copy the API key. Click 'Add Credential' in n8n and search for 'Twenty API'. Provide the API key and your Twenty domain (e.g. http://localhost:5020, https://n8n.example.org). Do _not_ use the 'API Base URL', e.g. https://n8n.example.org/rest/.

## Compatibility

Compatible and tested with Twenty v1.0.3 and n8n v1.91.3.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Twenty developer documentation](https://twenty.com/developers/)

## Version history

#### v0.0.5
Simplified to build on n8n-openapi-node

#### v0.0.4
Compatible with Twenty's updated API in v0.40.7

#### v0.0.3
Compatible with Twenty's updated API in v0.33.4

#### v0.0.1
Initial release

## Credit

Almost all credit goes to [devlikeapro](https://github.com/devlikeapro/n8n-openapi-node) for the work on generic n8n nodebuilders for OpenAPI specs. Previous versions relied on similar tools from [ivov](https://github.com/ivov) and [feelgood-interface](https://github.com/feelgood-interface).

