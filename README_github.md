# EmailLabs Package
The highest deliverability and detailed analytics of the e-mail messages sent from your system or application.
* Domain: emaillabs.io
* Credentials: appKey, secretKey

## How to get credentials: 
0. Item one 
1. Item two

## TOC: 
* [addEmailTemplate](#addEmailTemplate)
* [sendMail](#sendMail)
* [sendMailTemplate](#sendMailTemplate)
* [getAggregatedData](#getAggregatedData)
* [getAggregatedDataTags](#getAggregatedDataTags)
* [getOpenedEmails](#getOpenedEmails)
* [getAllEmailsSendBySMTP](#getAllEmailsSendBySMTP)
* [getSendEmailsByEvent](#getSendEmailsByEvent)
* [getBlacklistedAddresses](#getBlacklistedAddresses)
* [getBlacklistedAddresses](#getBlacklistedAddresses)
* [addSingleAddressIntoBlacklist](#addSingleAddressIntoBlacklist)
* [deleteSingleAddressFromBlacklist](#deleteSingleAddressFromBlacklist)
* [getAllBlacklistingReasons](#getAllBlacklistingReasons)
* [checkSingleBlacklistedAddress](#checkSingleBlacklistedAddress)
* [checkEmailTemporary](#checkEmailTemporary)
* [getSmtpAccounts](#getSmtpAccounts)
* [getAllClicks](#getAllClicks)
 
<a name="addEmailTemplate"/>
## EmailLabs.addEmailTemplate
This function lets you add a message template.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| html     | String     | HTML Message in HTML format. `html` of `text` is required.
| text     | String     | Message in text format. `html` of `text` is required.

<a name="sendMail"/>
## EmailLabs.sendMail
This function allows you to send messages.

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| to         | JSON       | Required: JSON Array of Strings. E-mail address of the recipient. See README for more info.
| smtpAccount| String     | Required: SMTP account through which you want to send a message.
| subject    | String     | Required: Subject of the message (max. 128 characters).
| html       | String     | HTML Message in HTML format.
| text       | String     | Message in text format.
| from       | String     | E-mail address of the sender.
| fromName   | String     | The displayed name of the sender (max. 128 characters).
| headers    | JSON       | JSON Object. Additional headers in an array as key => value.
| cc         | String     | E-mail address to which a copy of the message will be sent.
| ccName     | String     | Name of the recipient (max. 128 characters).
| bcc        | String     | E-mail address to which a copy of the message will be sent (hidden address).
| bccName    | String     | Name of the recipient (max. 128 characters).
| replyTo    | String     | E-mail address of `reply to`
| tags       | JSON       | JSON Array of Strings. Tags of messages in the an array (together max. 128 characters).
| files      | JSON       | JSON Object. File attachments. See README for more info.

<a name="sendMailTemplate"/>
## EmailLabs.sendMailTemplate
This function allows you to send messages using a previously loaded template or an individually sent template without an entry.

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| to         | JSON       | JSON Object. E-mail address of the recipient. See README for more info.
| templateId | String     | Template messages Id.
| smtpAccount| String     | Required: SMTP account through which you want to send a message.
| subject    | String     | Required: Subject of the message (max. 128 characters).
| html       | String     | HTML Message in HTML format.
| text       | String     | Message in text format.
| from       | String     | E-mail address of the sender.
| fromName   | String     | The displayed name of the sender (max. 128 characters).
| headers    | JSON       | JSON Object. Additional headers in an array as key => value.
| cc         | String     | E-mail address to which a copy of the message will be sent.
| ccName     | String     | Name of the recipient (max. 128 characters).
| bcc        | String     | E-mail address to which a copy of the message will be sent (hidden address).
| bccName    | String     | Name of the recipient (max. 128 characters).
| replyTo    | String     | E-mail address of `reply to`
| files      | JSON       | JSON Object. File attachments. See README for more info.

<a name="getAggregatedData"/>
## EmailLabs.getAggregatedData
This function allows you to send messages using a previously loaded template or an individually sent template without an entry.

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| smtpAccount| String     | SMTP account name
| dateFrom   | String     | SMTP account name
| dateTo     | String     | Data to in the form of a timestamp. `The difference between date_from and date_to can not be greater than 62 days`.

<a name="getAggregatedDataTags"/>
## EmailLabs.getAggregatedDataTags
This function allows you to download aggregated data with a division into tags

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| smtpAccount| String     | SMTP account name
| dateFrom   | String     | SMTP account name
| dateTo     | String     | Data to in the form of a timestamp. `The difference between date_from and date_to can not be greater than 62 days`.

<a name="getOpenedEmails"/>
## EmailLabs.getOpenedEmails
This function allows to download the users e-mail openings, it accepts additional parameters. Queries must be sent using the GET method to the address indicated below.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| offset   | Number     | Page number
| limit    | Number     | Number of results per page
| sort     | String     | Field after which it will be sorted, it is possible to sort by fields: msgid, date, to, processed, created_at, updated_at
| filter   | JSON       | Additional filtering by fields: to, msgid and created_at

<a name="getAllEmailsSendBySMTP"/>
## EmailLabs.getAllEmailsSendBySMTP
This function allows you to download e-mail messages sent by SMTP server. This option allows you to determine on which fields the search will take place, allowing you to precisely match the result. Queries must be sent using the GET method to the address indicated below.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| offset   | Number     | Page number
| limit    | Number     | Number of results per page
| sort     | String     | Field after which it will be sorted, it is possible to sort by fields: msgid, date, to, processed, created_at, updated_at
| filter   | JSON       | Additional filtering by fields: `account`, `injected_time`, `message_id`. See README for more info.

<a name="getSendEmailsByEvent"/>
## EmailLabs.getSendEmailsByEvent
This function lets you download e-mail messages based on the status, which it ultimately received. This allows to monitor the addresses to which the correspondence does not reach.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| status   | String     | Required: Mail status. Valid values: `ok`, `softbounce`, `hardbounce`, `spambounce`, `dropped`, `feedback`.
| offset   | Number     | Page number
| limit    | Number     | Number of results per page
| sort     | String     | Field after which it will be sorted, it is possible to sort by fields: `message_id`, `account`, `to`. See README for more info.
| toTime   | Number     | Date to in the form of a timestamp.
| filter   | JSON       | Additional filtering by fields: to, account and to. See README for more info.

<a name="getBlacklistedAddresses"/>
## EmailLabs.getBlacklistedAddresses
This function allows you to download a list of blocked addresses (blacklist), to which e-mails will not be sent. This function accepts additional parameters. Queries should be directed to the address below via a GET method.

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| smtpAccount| String     | SMTP account name
| dateFrom   | String     | SMTP account name
| dateTo     | String     | Data to in the form of a timestamp. `The difference between date_from and date_to can not be greater than 62 days`.
| filter     | JSON       | Additional filtering by fields: to, account and to. See README for more info.

<a name="getBlacklistedAddresses"/>
## EmailLabs.getBlacklistedAddresses
This function allows you to download a list of blocked addresses (blacklist), to which e-mails will not be sent. This function accepts additional parameters. Queries should be directed to the address below via a GET method.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| offset   | Number     | Page number
| limit    | Number     | Number of results per page
| sort     | String     | Field after which it will be sorted, it is possible to sort by fields: msgid, date, to, processed, created_at, updated_at
| filter   | JSON       | Additional filtering by fields: account, email, source. See README for more info.

<a name="addSingleAddressIntoBlacklist"/>
## EmailLabs.addSingleAddressIntoBlacklist
This function allows you to add an email address to the blacklist, which means it will exclude this address for each subsequent transmission. This function accepts additional parameters. Queries should be sent to the address provided in the documentation via the POST method.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| account  | String     | Smtp account
| email    | String     | E-mail address that will be added
| reason   | String     | Reason for adding to the blacklist

<a name="deleteSingleAddressFromBlacklist"/>
## EmailLabs.deleteSingleAddressFromBlacklist
This function allows you to remove an email address from the blacklist, it accepts one additional parameter. Query should be directed to the url below via the DELETE method.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| email    | String     | Transfered directly as a component of the url

<a name="getAllBlacklistingReasons"/>
## EmailLabs.getAllBlacklistingReasons
This function allows you to download a list of reasons for rejections of e-mail addresses on to the black list. This function does not accept additional parameters

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.

<a name="checkSingleBlacklistedAddress"/>
## EmailLabs.checkSingleBlacklistedAddress
This function allows you to check whether an email address is on the blacklist, and for what reason.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| email    | String     | Email to check.

<a name="checkEmailTemporary"/>
## EmailLabs.checkEmailTemporary
This feature allows you to determine if a e-mail address is registered in one of the sites that provide temporary email addresses (ie. YopMail)

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| email    | String     | Email to check.

<a name="getSmtpAccounts"/>
## EmailLabs.getSmtpAccounts
Get all SMTP accounts

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.

<a name="getAllClicks"/>
## EmailLabs.getAllClicks
Get all clicks

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| offset   | Number     | Page number
| limit    | Number     | Number of results per page
| filter   | JSON       | Additional filtering by fields: `to`, `msgid`, `filter`, `created_at`. See README for more info.

