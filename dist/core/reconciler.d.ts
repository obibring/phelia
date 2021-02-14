/// <reference types="react" />
import { Action } from "./interfaces";
import { SearchOptions } from "./components";
/** Render the reaction components */
export declare function render(element: React.FunctionComponentElement<any> | React.ComponentElement<any, any>, action?: Action): Promise<any>;
/** Search filter options */
export declare function getOnSearchOptions(element: React.FunctionComponentElement<any> | React.ComponentElement<any, any>, action: Action): Promise<SearchOptions>;
