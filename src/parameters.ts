import { Events } from './events' 
import { extractContactSourceAddress, extractContactSourceName, extractUserNameLink, extractUserName } from './extractor'

function isContact(event: Events) {
  return event == Events.Contact;
}

function isRegisterOrCancel(event: Events) {
  return event == Events.Register || event == Events.Cancel;
}

export function buildFields(event: Events, messageHTMLBody: string) {
  if (isContact(event)) {
    return [
      {
        "title": "Contact Source Address",
        "value": extractContactSourceAddress(messageHTMLBody),
      },
      {
        "title": "Contact Source Name",
        "value": extractContactSourceName(messageHTMLBody)
      }
    ]
  }
  if (isRegisterOrCancel(event)) {
    return [
      {
        "title": "User Link",
        "value": extractUserNameLink(messageHTMLBody),
      },
      {
        "title": "User Name",
        "value": extractUserName(messageHTMLBody)
      }
    ]
  }
}