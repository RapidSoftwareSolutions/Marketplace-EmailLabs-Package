# EmailLabs Package
The highest deliverability and detailed analytics of the e-mail messages sent from your system or application.
* Domain: emaillabs.io
* Credentials: appKey, secretKey

## How to get credentials: 
0. Login into your [EmailLab Panel](#https://panel.emaillabs.co/en/login)
1. Go to `Administrator` -> `API` section
2. Click on `Show keys` and enter the password
3. Copy and save your `App Key` & `Secret Key`.

### How to build a parameter filter?

#### Filter format:
```json
{
	"field_1": "string_to_find_1",
	"field_2": "string_to_find_2"
}
```

There is also the possibility of using keywords such as from and to eg.

#### Example:
```json
{
	"created_at.from": "2014-01-01 00:00",
	"created_at.to": "2014-09-01 00:00"
}
```

#### Another examples:

Message id filter:
```json
{
	"msgid": "1404397451.53b5678b5ec06@swift.generated"
}
```

Email filter
```json
{
	"to": "test@niedomena.pl"
}
```

## EmailLabs.addEmailTemplate
This function lets you add a message template.
In html and txt templates, as well as some of the fields in the message dispatch with template, it is possible to place variables that are replaced by the values indicated in the e-mail dispatch

#### `{{ firstName }}`

In the above example the variable "firstName" was added. During the dispatch of your message the parser will encounter this variable and it will be defined for given address, it will swap the value for the one provided by the user.


| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| html     | String     | HTML Message in HTML format. `html` of `text` is required.
| text     | String     | Message in text format. `html` of `text` is required.

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

### Request example
```json
{
    "to": {
        "test01@domein.pl": {
            "message_id": "test001@domain.com",
            "reciver_name": "Jan Kowalski"
        },
        "test02@domein.pl": {
            "message_id": "test002@domain.com",
            "reciver_name": "Janusz Nowak"
        }
    },
    "smtp_account": "1.smtpaccount.smtp",
    "subject": "Message subject",
    "html": "<p>Some Html</p> <img src='cid:image_2.jpg'/>",
    "text": "Some Text",
    "template_id":  "Use template_id instead html and text",
    "from": "from_address@domain.com",
    "from_name": "Office",
    "headers": {
        "x-header-1": "test-1",
        "x-header-2": "test-2"
    },
    "cc": "cc_address@domain.com",
    "cc_name": "Wojciech Kowalski",
    "bcc": "bcc_address@domain.com",
    "bcc_name": "Adam Nowak",
    "reply_to": "reply@domain.com",
    "tags": [
        "tag_1", "tag_2"
    ],
    "files": [
        {
            "name": "image_1.jpg",
            "mime": "image/jpeg",
            "content": "some_file_content_in_base_64"
        },
        {
            "name": "image_2.jpg",
            "mime":  "image/jpeg",
            "content": "some_file_content_in_base_64",
            "inline": 1
        },
    ]
}
```

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

### Request example: 
```json
{
"to": {
    "kapral.wojtek@comain": {
        "vars": {
            "firstName": "Wojtek",
            "lastName": "Bear",
            "account": "mis.wojtek",
            "since": "2016-02-15 12:00:00",
            "clickTest": "Test",
            "news": "Replace in subject"
        },
    },
    {...}
},
"smtp_account": "1.your_smtp_account.smtp",
"subject": "Subject:: {{ news }}",
"template_id": "template_id",
"html": "or you can use HTML insted tamplate_id",
"txt": "you can also add TXT part",
"from": "from@domain",
"from_name": "My Company Name"
}
```

## EmailLabs.getAggregatedData
This function allows you to send messages using a previously loaded template or an individually sent template without an entry.

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| smtpAccount| String     | SMTP account name
| dateFrom   | String     | Data from in the form of a timestamp.
| dateTo     | String     | Data to in the form of a timestamp. `The difference between date_from and date_to can not be greater than 62 days`.

## EmailLabs.getAggregatedDataTags
This function allows you to download aggregated data with a division into tags

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| smtpAccount| String     | SMTP account name
| dateFrom   | String     | Data from in the form of a timestamp.
| dateTo     | String     | Data to in the form of a timestamp. `The difference between date_from and date_to can not be greater than 62 days`.

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

## EmailLabs.getBlacklistedAddresses
This function allows you to download a list of blocked addresses (blacklist), to which e-mails will not be sent. This function accepts additional parameters. Queries should be directed to the address below via a GET method.

| Field      | Type       | Description
|------------|------------|----------
| appKey     | credentials| Required: App Key obtained from EmailLabs.
| secretKey  | credentials| Required: Secret Key obtained from EmailLabs.
| smtpAccount| String     | SMTP account name
| dateFrom   | String     | Data from in the form of a timestamp.
| dateTo     | String     | Data to in the form of a timestamp. `The difference between date_from and date_to can not be greater than 62 days`.
| filter     | JSON       | Additional filtering by fields: to, account and to. See README for more info.

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

## EmailLabs.addSingleAddressIntoBlacklist
This function allows you to add an email address to the blacklist, which means it will exclude this address for each subsequent transmission. This function accepts additional parameters. Queries should be sent to the address provided in the documentation via the POST method.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| account  | String     | Smtp account
| email    | String     | E-mail address that will be added
| reason   | String     | Reason for adding to the blacklist

## EmailLabs.deleteSingleAddressFromBlacklist
This function allows you to remove an email address from the blacklist, it accepts one additional parameter. Query should be directed to the url below via the DELETE method.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| email    | String     | Transfered directly as a component of the url

## EmailLabs.getAllBlacklistingReasons
This function allows you to download a list of reasons for rejections of e-mail addresses on to the black list. This function does not accept additional parameters

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.

## EmailLabs.checkSingleBlacklistedAddress
This function allows you to check whether an email address is on the blacklist, and for what reason.

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| email    | String     | Email to check.

## EmailLabs.checkEmailTemporary
This feature allows you to determine if a e-mail address is registered in one of the sites that provide temporary email addresses (ie. YopMail)

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| email    | String     | Email to check.

## EmailLabs.getSmtpAccounts
Get all SMTP accounts

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.

## EmailLabs.getAllClicks
Get all clicks

| Field    | Type       | Description
|----------|------------|----------
| appKey   | credentials| Required: App Key obtained from EmailLabs.
| secretKey| credentials| Required: Secret Key obtained from EmailLabs.
| offset   | Number     | Page number
| limit    | Number     | Number of results per page
| filter   | JSON       | Additional filtering by fields: `to`, `msgid`, `filter`, `created_at`. See README for more info.

