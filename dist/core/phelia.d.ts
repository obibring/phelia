/// <reference types="node" />
import { MessageAdapterOptions } from "@slack/interactive-messages/dist/adapter";
import { WebClient, ChatPostMessageArguments, ChatPostEphemeralArguments } from "@slack/web-api";
import { MessageCallback, PheliaMessage, PheliaModal, PheliaStorage, PheliaHome, SlackUser } from "./interfaces";
/** The main phelia client. Handles sending messages with phelia components */
export declare class Phelia {
    private client;
    private static Storage;
    private messageCache;
    private homeComponent;
    setStorage(storage: PheliaStorage): void;
    constructor(client: WebClient);
    openModal<p>(modal: PheliaModal<p>, triggerID: string, props?: p): Promise<void>;
    postMessage<p>(message: PheliaMessage<p>, channel: string, props?: p, slackOptions?: ChatPostMessageArguments): Promise<string>;
    render_message<p>(message: PheliaMessage<p>, props: p): Promise<[any, (sent_message_data: {
        user_id: string;
        timestamp: any;
        channel_id: string;
    }) => any]>;
    postEphemeral<p>(message: PheliaMessage<p>, channel: string, userId: string, props?: p, slackOptions?: ChatPostEphemeralArguments): Promise<string>;
    updateMessage<p>(key: string, props: p): Promise<void>;
    registerComponents(components: (PheliaMessage | PheliaModal)[]): void;
    registerHome(home: PheliaHome): void;
    updateHome(key: string): Promise<void>;
    enrichUser(id: string): Promise<SlackUser>;
    appHomeHandler(home: PheliaHome, onHomeOpened?: (key: string, user?: SlackUser) => void | Promise<void>): (payload: any) => Promise<void>;
    processAction(payload: any): Promise<void>;
    processSubmission(payload: any): Promise<void>;
    processOption(payload: any): Promise<{
        options: any;
        option_groups?: undefined;
    } | {
        option_groups: any;
        options?: undefined;
    }>;
    messageHandler(signingSecret: string, messages?: string | (PheliaModal | PheliaMessage)[] | MessageCallback, home?: PheliaMessage, slackOptions?: MessageAdapterOptions): import("http").RequestListener;
}
