# n8n-nodes-twenty

This is an n8n community node. It lets you use **Twenty CRM** in your n8n workflows.

[Twenty CRM](https://twenty.com/) is an open-source CRM (customer relationship management) tool that is under rapid development. Please consider this as a **Beta** release that is likely to break with future changes in the Twenty API.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Resources](#resources)  
<!-- [Version history](#version-history)  delete if not using this section   -->
[Credit](#credit)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

	- General
	- Activity
	- ActivityTarget
	- ApiKey
	- Attachment
	- AuditLog
	- Blocklist
	- CalendarChannel
	- CalendarChannelEventAssociation
	- CalendarEvent
	- CalendarEventParticipant
	- Comment
	- Company
	- ConnectedAccount
	- Favorite
	- Message
	- MessageChannel
	- MessageChannelMessageAssociation
	- MessageParticipant
	- MessageThread
	- Note
	- NoteTarget
	- Opportunity
	- Person
	- Task
	- TaskTarget
	- TimelineActivity
	- View
	- ViewField
	- ViewFilter
	- ViewSort
	- Webhook
	- WorkspaceMember

## Credentials

Generate an API key in Twenty by following the [Twenty docs](https://twenty.com/user-guide/section/functions/api-webhooks). In summary, create an API key in the Settings -> Developers section.

Copy the API key. Click 'Add Credential' in n8n and search for 'Twenty API'. Provide the API key and your Twenty domain (e.g. http://localhost:5020, https://n8n.example.org). Do _not_ use the 'API Base URL', e.g. https://n8n.example.org/rest/.

## Compatibility

Compatible and tested with Twenty v0.24.1 and n8n v1.9.3.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Twenty developer documentation](https://twenty.com/developers/)

<!-- ## Version history -->

<!-- #### v0.0.1 -->

## Credit

Special thanks to [ivov](https://github.com/ivov) and [feelgood-interface](https://github.com/feelgood-interface) for the work on generic n8n nodebuilders for OpenAPI specs.

