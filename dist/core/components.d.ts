import React, { ReactElement } from "react";
import { InteractionEvent, MultiSelectOptionEvent, SearchOptionsEvent, SelectDateEvent, SelectOptionEvent, SubmitEvent } from "./interfaces";
declare type PheliaChild = false | null | undefined | ReactElement | ReactElement[];
declare type PheliaChildren = PheliaChild | PheliaChild[];
interface TextProps {
    /** The content of the text component */
    children: React.ReactText | React.ReactText[];
    /**
     * Indicates whether emojis in a text field should be escaped into the colon emoji format.
     * This field is only usable when type is plain_text.
     */
    emoji?: boolean;
    /** The formatting to use for this text object.  */
    type: "plain_text" | "mrkdwn";
    /**
     * When set to false (as is default) URLs will be auto-converted into links,
     * conversation names will be link-ified, and certain mentions will be automatically
     * parsed. Using a value of true will skip any preprocessing of this nature, although
     * you can still include manual parsing strings. This field is only usable when type is
     * mrkdwn.
     */
    verbatim?: boolean;
}
/**
 * An component containing some text, formatted either as plain_text or using mrkdwn,
 * our proprietary textual markup that's just different enough from Markdown to frustrate you.
 */
export declare const Text: {
    (props: TextProps): JSX.Element;
    defaultProps: {
        type: string;
    };
};
interface ButtonBase {
    /** The text inside the button. */
    children: string;
    /**
     * A Confirm component that defines an optional confirmation dialog
     * after the button is clicked.
     */
    confirm?: ReactElement;
    /**
     * Indicates whether emojis in the button should be escaped into the colon emoji format.
     */
    emoji?: boolean;
    /** Decorates buttons with alternative visual color schemes. Use this option with restraint. */
    style?: undefined | "danger" | "primary";
    /**
     * A URL to load in the user's browser when the button is clicked.
     * Maximum length for this field is 3000 characters. If you're using
     * url, you'll still receive an interaction payload and will need to
     * send an acknowledgement response.
     */
    url?: string;
}
declare type ButtonWithOnClick = ButtonBase & ({
    /** A callback ran when the button is clicked */
    onClick: (event: InteractionEvent) => void | Promise<void>;
    /**
     * An identifier for this action. You can use this when you receive an
     * interaction payload to identify the source of the action. Should be
     * unique among all other action_ids used elsewhere by your app. Maximum
     * length for this field is 255 characters.
     */
    action: string;
    url?: never;
} | {
    onClick?: never;
    action?: never;
    url: string;
});
/**
 * An interactive component that inserts a button. The button can be a trigger for
 * anything from opening a simple link to starting a complex workflow.
 *
 * Works with block types: Section, Actions
 */
export declare const Button: (props: (import("ts-xor/dist/types/Without.type").Without<ButtonWithOnClick, ButtonBase> & ButtonBase) | (import("ts-xor/dist/types/Without.type").Without<ButtonBase, ButtonWithOnClick> & ButtonBase & {
    /** A callback ran when the button is clicked */
    onClick: (event: InteractionEvent) => void | Promise<void>;
    /**
     * An identifier for this action. You can use this when you receive an
     * interaction payload to identify the source of the action. Should be
     * unique among all other action_ids used elsewhere by your app. Maximum
     * length for this field is 255 characters.
     */
    action: string;
    url?: never;
}) | (import("ts-xor/dist/types/Without.type").Without<ButtonBase, ButtonWithOnClick> & ButtonBase & {
    onClick?: never;
    action?: never;
    url: string;
})) => JSX.Element;
declare type SectionProps = {
    /** One of the available components. */
    accessory?: ReactElement;
    /** The head/title text component */
    text: ReactElement | string;
    /** Up to 10 child components */
    children?: PheliaChildren;
} | {
    /** One of the available components. */
    accessory?: ReactElement;
    /** The head/title text component */
    text?: ReactElement | string;
    /** Up to 10 child components */
    children: PheliaChildren;
};
/**
 * A section is one of the most flexible components available - it can be used as a
 * simple text block, in combination with text fields, or side-by-side with any
 * of the available block elements.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
export declare const Section: (props: SectionProps) => JSX.Element;
interface ActionsProps {
    /**
     * An array of interactive element objects - buttons, select menus,
     * overflow menus, or date pickers. There is a maximum of 5 elements
     * in each action block.
     */
    children: PheliaChildren;
}
/**
 * A block that is used to hold interactive elements.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
export declare const Actions: (props: ActionsProps) => JSX.Element;
interface ImageProps {
    /** The URL of the image to be displayed. Maximum length for this field is 3000 characters. */
    imageUrl: string;
    /**
     * A plain-text summary of the image. This should not contain any markup. Maximum length for
     * this field is 2000 characters.
     */
    alt: string;
}
/**
 * A simple image block, designed to make those cat photos really pop.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
export declare const Image: (props: ImageProps) => JSX.Element;
interface ImageBlockProps {
    /** The URL of the image to be displayed. Maximum length for this field is 3000 characters. */
    imageUrl: string;
    /**
     * A plain-text summary of the image. This should not contain any markup. Maximum length for
     * this field is 2000 characters.
     */
    alt: string;
    /** Whether to enable the emoji prop on the title Text component */
    emoji?: boolean;
    /** A title for the image block */
    title?: string;
}
/**
 * An component to insert an image as part of a larger block of content. If you
 * want a block with only an image in it, you're looking for the Image component.
 *
 * Works with block types: Section, Context
 */
export declare const ImageBlock: (props: ImageBlockProps) => JSX.Element;
/**
 * A content divider, like an <hr>, to split up different blocks inside of a
 * message. The divider block is nice and neat.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
export declare const Divider: () => JSX.Element;
interface ContextProps {
    /** Child components to display within the Context */
    children: PheliaChildren;
}
/**
 * Displays message context, which can include both images and text.
 *
 * Available in surfaces: Modals, Messages, Home tabs
 */
export declare const Context: (props: ContextProps) => JSX.Element;
interface ConfirmProps {
    /** Components to display within the confirm dialog. */
    children: ReactElement | string;
    /**
     * A plain_text-only Text component to define the text of the button that confirms the
     * action. Maximum length for the text in this field is 30 characters.
     */
    confirm: ReactElement | string;
    /**
     * A plain_text-only Text component to define the text of the button that cancels the
     * action. Maximum length for the text in this field is 30 characters.
     */
    deny: ReactElement | string;
    /** Defines the color scheme applied to the confirm button. A value of danger will display
     * the button with a red background on desktop, or red text on mobile. A value of primary
     * will display the button with a green background on desktop, or blue text on mobile.
     * If this field is not provided, the default value will be primary.
     */
    style?: "danger" | "primary";
    /**
     * A plain_text-only Text component that defines the dialog's title. Maximum length for this
     * field is 100 characters.
     */
    title: ReactElement | string;
}
/**
 * A component that defines a dialog that provides a confirmation step to any interactive
 * component. This dialog will ask the user to confirm their action by offering a confirm
 * and deny buttons.
 */
export declare const Confirm: (props: ConfirmProps) => JSX.Element;
interface OptionProps {
    /**
     * A Text component that defines the text shown in the option on the menu. Overflow, select,
     * and multi-select menus can only use plain_text objects, while radio buttons and checkboxes
     * can use mrkdwn text objects. Maximum length for the text in this field is 75 characters.
     */
    children: ReactElement | string;
    /**
     * The string value that will be passed to your app when this option is chosen. Maximum
     * length for this field is 75 characters.
     */
    value: string;
    /**
     * A plain_text only Text component that defines a line of descriptive text shown below
     * the text field beside the radio button. Maximum length for the text object within this
     * field is 75 characters.
     */
    description?: ReactElement | string;
    /**
     * A URL to load in the user's browser when the option is clicked. The url attribute is only
     * available in overflow menus. Maximum length for this field is 3000 characters. If you're
     * using url, you'll still receive an interaction payload and will need to send an acknowledgement
     * response.
     */
    url?: string;
    /** Whether the Option is selected. */
    selected?: boolean;
}
/**
 * A component that represents a single selectable item in a select menu, multi-select menu,
 * checkbox group, radio button group, or overflow menu.
 */
export declare const Option: (props: OptionProps) => JSX.Element;
interface DatePickerProps {
    /**
     * 	An identifier for the action triggered when a menu option is selected. You can use
     * this when you receive an interaction payload to identify the source of the action.
     * Should be unique among all other action_ids used elsewhere by your app. Maximum length
     * for this field is 255 characters.
     */
    action: string;
    /**
     * A Confirm component that defines an optional confirmation dialog that appears after a
     * date is selected.
     */
    confirm?: ReactElement;
    /**
     * The initial date that is selected when the element is loaded. This should be in the
     * format YYYY-MM-DD.
     */
    initialDate?: string;
    /** A callback for when a date is selected */
    onSelect?: (event: SelectDateEvent) => void | Promise<void>;
    /**
     * A plain_text only Text component that defines the placeholder text shown on the datepicker.
     * Maximum length for the text in this field is 150 characters.
     */
    placeholder?: ReactElement | string;
}
/**
 * An element which lets users easily select a date from a calendar style UI.
 *
 * Works with block types: Section, Actions, Input
 */
export declare const DatePicker: (props: DatePickerProps) => JSX.Element;
interface MessageProps {
    /** Array of Actions, Context, Divider, ImageBlock, or Section components.	 */
    children: PheliaChildren;
    /** The head/title text message. */
    text?: string;
}
/**
 * App-published messages are dynamic yet transient spaces. They allow users to
 * complete workflows among their Slack conversations.
 */
export declare const Message: (props: MessageProps) => JSX.Element;
interface BaseModalProps {
    /** Array of Actions, Context, Divider, ImageBlock, Input, or Section components	 */
    children: PheliaChildren;
    /** The title of the modal. */
    title: ReactElement | string;
    /**
     * An optional plain_text Text component that defines the text displayed in the submit button
     * at the bottom-right of the view. submit is required when an input block is within the
     * blocks array. Max length of 24 characters.
     */
    submit?: ReactElement | string;
    /**
     * An optional plain_text Text component that defines the text displayed in the close button
     * at the bottom-right of the view. Max length of 24 characters.
     */
    close?: ReactElement | string;
    /**
     * An optional callback that executes when the modal is submitted.
     */
    onSubmit?: (event: SubmitEvent) => Promise<void>;
    /**
     * An optional callback that executes when the modal is canceled.
     */
    onCancel?: (event: InteractionEvent) => Promise<void>;
}
declare type RootModalProps = BaseModalProps & {
    /** A modal subtype indicating this modal was opened by a shortcut or command. */
    type: "root";
    /**
     * An optional callback that executes when the modal is submitted.
     */
    onSubmit?: (event: SubmitEvent) => Promise<void>;
    /**
     * An optional callback that executes when the modal is canceled.
     */
    onCancel?: (event: InteractionEvent) => Promise<void>;
};
declare type InlineModalProps = BaseModalProps & {
    /** A modal subtype indicating this modal was opened by another component. */
    type?: "inline";
};
declare type ModalProps = RootModalProps | InlineModalProps;
/**
 * Modals provide focused spaces ideal for requesting and collecting data from users,
 * or temporarily displaying dynamic and interactive information.
 */
export declare const Modal: (props: ModalProps) => JSX.Element;
interface InputProps {
    /**
     * A label that appears above an input component in the form of a text component that must
     * have type of plain_text. Maximum length for the text in this field is 2000 characters.
     */
    label: string | ReactElement;
    /**
     * A plain-text input element, a select menu element, a multi-select menu element, or a datepicker.
     */
    children: ReactElement;
    /**
     * An optional hint that appears below an input element in a lighter grey. It must be a a text
     * component with a type of plain_text. Maximum length for the text in this field is 2000 characters.
     */
    hint?: string | ReactElement;
    /**
     * A boolean that indicates whether the input element may be empty when a user submits the modal.
     *
     * @default false
     */
    optional?: boolean;
}
/**
 * A block that collects information from users - it can hold a plain-text input element, a
 * select menu element, a multi-select menu element, or a datepicker.
 *
 * Read our guide to using modals to learn how input blocks pass information to your app.
 *
 * Available in surfaces: Modals
 */
export declare const Input: (props: InputProps) => JSX.Element;
interface TextFieldProps {
    /**
     * 	An identifier for the input value when the parent modal is submitted. You can use
     * this when you receive a view_submission payload to identify the value of the input
     * element. Should be unique among all other action_ids used elsewhere by your app. Maximum
     * length for this field is 255 characters.
     */
    action: string;
    /**	The initial value in the plain-text input when it is loaded. */
    initialValue?: string;
    /**
     * The maximum length of input that the user can provide. If the user provides more, they
     * will receive an error.
     */
    maxLength?: number;
    /**
     * The minimum length of input that the user must provide. If the user provides less,
     * they will receive an error. Maximum value is 3000.
     */
    minLength?: number;
    /**
     * Indicates whether the input will be a single line (false) or a larger textarea (true).
     *
     * @default false
     */
    multiline?: boolean;
    /**
     * A plain_text only Text component that defines the placeholder text shown in the plain-text
     * input. Maximum length for the text in this field is 150 characters.
     */
    placeholder?: ReactElement | string;
}
/**
 * A plain-text input, similar to the HTML <input> tag, creates a field where a user can
 * enter freeform data. It can appear as a single-line field or a larger textarea using
 * the multiline flag.
 *
 * Plain-text input elements are currently only available in modals. To use them, you will
 * need to make some changes to prepare your app. Read about preparing your app for modals.
 *
 * Works with block types: Section, Actions, Input
 */
export declare const TextField: (props: TextFieldProps) => JSX.Element;
interface CheckboxesProps {
    /**
     * 	An identifier for the action triggered when the checkbox group is changed. You can use
     * this when you receive an interaction payload to identify the source of the action. Should
     * be unique among all other action_ids used elsewhere by your app. Maximum length for this
     * field is 255 characters.
     */
    action: string;
    /** An array of Option components */
    children: PheliaChildren;
    /**
     * A Confirm component that defines an optional confirmation dialog that appears after clicking
     * one of the checkboxes in this element.
     */
    confirm?: ReactElement;
    /** A callback for when a user selects a checkbox */
    onSelect?: (event: MultiSelectOptionEvent) => void | Promise<void>;
}
/**
 * A checkbox group that allows a user to choose multiple items from a list of possible options.
 *
 * Checkboxes are only supported in the following app surfaces: Home tabs Modals
 *
 * Works with block types: Section, Actions, Input
 */
export declare const Checkboxes: (props: CheckboxesProps) => JSX.Element;
interface OverflowMenuProps {
    /**
     * 	An identifier for the action triggered when a menu option is selected. You can
     * use this when you receive an interaction payload to identify the source of the
     * action. Should be unique among all other action_ids used elsewhere by your app.
     * Maximum length for this field is 255 characters.
     */
    action: string;
    /**
     * An array of Option components to display in the menu. Maximum number of options
     * is 5, minimum is 2.
     */
    children: PheliaChildren;
    /**
     * A confirm object that defines an optional confirmation dialog that appears after a
     * menu item is selected.
     */
    confirm?: ReactElement;
    /** A callback called once an Option is selected */
    onSelect?: (event: SelectOptionEvent) => void | Promise<void>;
}
/**
 * This is like a cross between a button and a select menu - when a user clicks on
 * this overflow button, they will be presented with a list of options to choose from.
 * Unlike the select menu, there is no typeahead field, and the button always appears
 * with an ellipsis ("…") rather than customisable text.
 *
 * As such, it is usually used if you want a more compact layout than a select menu,
 * or to supply a list of less visually important actions after a row of buttons. You
 * can also specify simple URL links as overflow menu options, instead of actions.
 *
 * Works with block types: Section, Actions
 */
export declare const OverflowMenu: (props: OverflowMenuProps) => JSX.Element;
interface RadioButtonsProps {
    /**
     * 	An identifier for the action triggered when the radio button group is changed. You can
     * use this when you receive an interaction payload to identify the source of the action.
     * Should be unique among all other action_ids used elsewhere by your app. Maximum length
     * for this field is 255 characters.
     */
    action: string;
    /** Option component(s) */
    children: PheliaChildren;
    /**
     * A Confirm component that defines an optional confirmation dialog that appears after clicking
     * one of the radio buttons in this element.
     */
    confirm?: ReactElement;
    /** A callback called once an Option is selected */
    onSelect?: (event: SelectOptionEvent) => void | Promise<void>;
}
/**
 * Radio buttons are only supported in the following app surfaces: Home tabs Modals
 *
 * A radio button group that allows a user to choose one item from a list of possible options.
 *
 * Works with block types: Section, Actions, Input
 */
export declare const RadioButtons: (props: RadioButtonsProps) => JSX.Element;
interface OptionGroupProps {
    /**
     * A plain_text only Text component that defines the label shown above this
     * group of options. Maximum length for the text in this field is 75 characters.
     */
    label: ReactElement | string;
    /**
     * An array of Option components that belong to this specific group. Maximum of 100 items.
     */
    children: PheliaChildren;
}
/** Provides a way to group options in a select menu or multi-select menu. */
export declare const OptionGroup: (props: OptionGroupProps) => JSX.Element;
interface SelectMenuBase {
    /**
     * An identifier for the action triggered when a menu option is selected. You can
     * use this when you receive an interaction payload to identify the source of the
     * action. Should be unique among all other action_ids used elsewhere by your app.
     * Maximum length for this field is 255 characters.
     */
    action: string;
    /**
     * A plain_text only Text component that defines the placeholder text shown on
     * the menu. Maximum length for the text in this field is 150 characters.
     */
    placeholder: ReactElement | string;
    /**
     * A Confirm component that defines an optional confirmation dialog that
     * appears after a menu item is selected.
     */
    confirm?: ReactElement;
    /** Callback for when an option is selected */
    onSelect?: (event: SelectOptionEvent) => void | Promise<void>;
}
interface StaticSelectMenu extends SelectMenuBase {
    /** The type of the select */
    type: "static";
    /** An array of Option components. Maximum number of options is 100. */
    children: PheliaChildren;
}
interface UserSelectMenu extends SelectMenuBase {
    /** The type of the select */
    type: "users";
    /** The user ID of any valid user to be pre-selected when the menu loads. */
    initialUser?: string;
}
interface ChannelSelectMenu extends SelectMenuBase {
    /** The type of the select */
    type: "channels";
    /**	The ID of any valid public channel to be pre-selected when the menu loads. */
    initialChannel?: string;
}
export declare type SearchOptions = (event: SearchOptionsEvent) => ReactElement[] | Promise<ReactElement[]>;
interface ExternalSelectMenu extends SelectMenuBase {
    /** The type of the select */
    type: "external";
    /**
     * A single option that exactly matches one of the options within the options
     * or option_groups loaded from the external data source. This option will
     * be selected when the menu initially loads.
     */
    initialOption?: ReactElement;
    /** Called when a user is search the menu options. Should return result options */
    onSearchOptions: SearchOptions;
    /**
     * 	When the typeahead field is used, a request will be sent on every character
     * change. If you prefer fewer requests or more fully ideated queries, use the
     * min_query_length attribute to tell Slack the fewest number of typed characters
     * required before dispatch.
     *
     * @default 3
     */
    minQueryLength?: number;
}
interface FilterOptions {
    /**
     * Indicates which type of conversations should be included in the list. When
     * this field is provided, any conversations that do not match will be excluded
     */
    include?: ("im" | "mpim" | "private" | "public")[];
    /**
     * Indicates whether to exclude external shared channels from conversation lists
     *
     * @default false
     */
    excludeExternalSharedChannels?: boolean;
    /**
     * Indicates whether to exclude bot users from conversation lists.
     *
     * @default false
     */
    excludeBotUsers?: boolean;
}
interface ConversationSelectMenu extends SelectMenuBase {
    /** The type of the select */
    type: "conversations";
    /** The ID of any valid conversation to be pre-selected when the menu loads. */
    initialConversation?: string;
    /**
     * A filter object that reduces the list of available conversations using the
     * specified criteria.
     */
    filter?: FilterOptions;
}
declare type SelectMenuProps = ChannelSelectMenu | ConversationSelectMenu | ExternalSelectMenu | StaticSelectMenu | UserSelectMenu;
/**
 * A select menu, just as with a standard HTML <select> tag, creates a drop down menu
 * with a list of options for a user to choose. The select menu also includes type-ahead
 * functionality, where a user can type a part or all of an option string to filter the list.
 *
 * There are different types of select menu that depend on different data sources for their lists of options:
 *
 * - Menu with static options
 * - Menu with external data source
 * - Menu with user list
 * - Menu with conversations list
 * - Menu with channels list
 *
 * Works with block types: Section, Actions, Input
 */
export declare const SelectMenu: {
    (props: SelectMenuProps): JSX.Element;
    defaultProps: SelectMenuProps;
};
interface MultiSelectMenuBase {
    /**
     * 	An identifier for the action triggered when a menu option is selected.
     * You can use this when you receive an interaction payload to identify the
     * source of the action. Should be unique among all other action_ids used
     * elsewhere by your app. Maximum length for this field is 255 characters.
     */
    action: string;
    /**
     * A plain_text only Text component that defines the placeholder text shown on
     * the menu. Maximum length for the text in this field is 150 characters.
     */
    placeholder: ReactElement | string;
    /**
     * A Confirm component that defines an optional confirmation dialog that appears
     * before the multi-select choices are submitted.
     */
    confirm?: ReactElement;
    /** Callback for when a menu item is selected */
    onSelect?: (event: MultiSelectOptionEvent) => void | Promise<void>;
    /**
     * Specifies the maximum number of items that can be selected in the menu.
     * Minimum number is 1.
     */
    maxSelectedItems?: number;
}
interface MultiStaticSelectMenu extends MultiSelectMenuBase {
    /** The type of the multi select. */
    type: "static";
    /** An array of Option components. Maximum number of options is 100. */
    children: PheliaChildren;
}
interface MultiUserSelectMenu extends MultiSelectMenuBase {
    /** The type of the multi select. */
    type: "users";
    /** An array of user IDs of any valid users to be pre-selected when the menu loads. */
    initialUsers?: string[];
}
interface MultiChannelSelectMenu extends MultiSelectMenuBase {
    /** The type of the multi select. */
    type: "channels";
    /**
     * An array of one or more IDs of any valid public channel to be pre-selected
     * when the menu loads.
     v*/
    initialChannels?: string[];
}
interface MultiExternalSelectMenu extends MultiSelectMenuBase {
    /** The type of the multi select. */
    type: "external";
    /**
     * An array of Option component that exactly match one or more of the
     * options within options or option_groups. These options will be
     * selected when the menu initially loads.
     */
    initialOptions?: ReactElement[];
    /** Called when a user is search the select options. Should return result options */
    onSearchOptions: SearchOptions;
    /**
     * When the typeahead field is used, a request will be sent on every character change.
     * If you prefer fewer requests or more fully ideated queries, use the min_query_length
     * attribute to tell Slack the fewest number of typed characters required before dispatch
     *
     * @default 3
     */
    minQueryLength?: number;
}
interface MultiConversationSelectMenu extends MultiSelectMenuBase {
    /** The type of the multi select. */
    type: "conversations";
    /**
     * An array of one or more IDs of any valid conversations to be
     * pre-selected when the menu loads.
     */
    initialConversations?: string[];
    /**
     * A filter object that reduces the list of available conversations using the
     * specified criteria.
     */
    filter?: FilterOptions;
}
declare type MultiSelectMenuProps = MultiChannelSelectMenu | MultiConversationSelectMenu | MultiExternalSelectMenu | MultiStaticSelectMenu | MultiUserSelectMenu;
/**
 * A multi-select menu allows a user to select multiple items from a list of options.
 * Just like regular select menus, multi-select menus also include type-ahead
 * functionality, where a user can type a part or all of an option string to filter the list.
 *
 * There are different types of multi-select menu that depend on different data sources for their lists of options:
 *
 * - Menu with static options
 * - Menu with external data source
 * - Menu with user list
 * - Menu with conversations list
 * - Menu with channels list
 *
 * Works with block types: Section, Input
 */
export declare const MultiSelectMenu: {
    (props: MultiSelectMenuProps): JSX.Element;
    defaultProps: MultiSelectMenuProps;
};
interface HomeProps {
    /** An array of Actions, Context, Divider, ImageBlock, or Section components	 */
    children: PheliaChildren;
    /** A callback ran when home app is loaded. */
    onLoad?: (event: InteractionEvent) => Promise<void> | void;
    /** A callback ran when home app is updated. */
    onUpdate?: (event: InteractionEvent) => Promise<void> | void;
}
/**
 * The Home tab is a persistent, yet dynamic interface for apps that lives within the App Home.
 */
export declare const Home: (props: HomeProps) => JSX.Element;
export {};
