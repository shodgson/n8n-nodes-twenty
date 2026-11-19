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

Core:

	- Access Groups
	- Agent Chat Thread Participants
	- Agent Chat Thread Targets
	- Agent Chat Threads
	- Agent Message Parts
	- Agent Message Reactions
	- Agent Messages
	- Agent Turns
	- Attachments
	- Blocklists
	- Calendar Channel Event Associations
	- Calendar Event Participants
	- Calendar Event Targets
	- Calendar Events
	- Call Recordings
	- Campaign Deliveries
	- Companies
	- Dashboards
	- Message Campaigns
	- Message Channel Message Association Message Folders
	- Message Channel Message Associations
	- Message List Members
	- Message Lists
	- Message Participants
	- Message Suppressions
	- Message Thread Targets
	- Message Threads
	- Messages
	- Note Targets
	- Notes
	- Opportunities
	- People
	- Record Shares
	- Short Links
	- Task Targets
	- Tasks
	- Timeline Activities
	- Workflow Runs
	- Workflow Versions
	- Workspace Members

Metadata:

	- Api Keys
	- Fields
	- Objects
	- Page Layout Tabs
	- Page Layout Widgets
	- Page Layouts
	- View Fields
	- View Filter Groups
	- View Filters
	- View Groups
	- View Sorts
	- Views
	- Webhooks

## Credentials

Generate an API key in Twenty by following the [Twenty docs](https://docs.twenty.com/developers/extend/api). In summary, create an API key in Settings → Developers → API.

Copy the API key. Click 'Add Credential' in n8n and search for 'Twenty API'. Provide the API key and your Twenty domain (e.g. http://localhost:3000, https://crm.example.org). Do _not_ use the 'API Base URL', e.g. https://crm.example.org/rest/.

## Compatibility

Compatible and tested with Twenty v2.59.3 (OpenAPI from `/rest/open-api/core` and `/rest/open-api/metadata`).

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Twenty developer documentation](https://docs.twenty.com/developers/extend/api)
* Per-workspace OpenAPI: `GET {domain}/rest/open-api/core` and `GET {domain}/rest/open-api/metadata` (Bearer API key)

## Version history

#### v0.0.6
Updated OpenAPI to Twenty v2.59.3 (core + metadata)

#### v0.0.5
Simplified to build on n8n-openapi-node

#### v0.0.4
Compatible with Twenty's updated API in v0.40.7

#### v0.0.3
Compatible with Twenty's updated API in v0.33.4

#### v0.0.1
Initial release

## Credit

- Almost all credit goes to [devlikeapro](https://github.com/devlikeapro/n8n-openapi-node) for the work on generic n8n nodebuilders for OpenAPI specs. Previous versions relied on similar tools from [ivov](https://github.com/ivov) and [feelgood-interface](https://github.com/feelgood-interface).
- Julius Haring for v0.0.6

