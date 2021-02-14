import { InteractionEvent, MultiSelectOptionEvent, PheliaMessage, PheliaMessageMetadata, SelectDateEvent, SelectOptionEvent, SlackUser } from "./interfaces";
/** Convert an action to an event. */
export declare function generateEvent(action: any, user: SlackUser): SelectDateEvent | InteractionEvent | MultiSelectOptionEvent | SelectOptionEvent;
/** Get a unique key from a message payload */
export declare function parseMessageKey(payload: any): any;
/** Transform a message into message metadata */
export declare function loadMessagesFromArray(messages: PheliaMessage[]): PheliaMessageMetadata[];
/** Read messages from a directory */
export declare function loadMessagesFromDirectory(dir: string): PheliaMessageMetadata[];
