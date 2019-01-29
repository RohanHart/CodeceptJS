// Type definitions for CodeceptJS 1.0.2
// Project: https://github.com/codeception/codeceptjs/
// Definitions by: Michael Bodnarchuk <http://github.com/DavertMik>, Drew Diamantoukos <https://github.com/KennyRules>

// these are used to check CodeceptJS itself
declare module NodeJS {
  interface Process {
    profile: string;
  }

  interface Global {
    codecept_actor: any;
    codecept_dir: string;
    codecept_helper: any;
    output_dir: string;

    actor: any;
    Helper: any;
    pause: any;
    within: any;
    session: any;
    DataTable: any;
    locate: Locator,
    by: any;

    // Used by Protractor helper
    By: any;
    ExpectedConditions: any;
    element: any;
    $: any;
    $$: any;
    browser: any;
  }
}

declare interface Window {
  codeceptjs: any;
}

declare var window: Window;

/**
 * Special Mocha definitions for reporter Base and Suite.
 * The mocha type definitions on DefinitelyTyped are for an older version of Mocha!
 */

declare module 'mocha/lib/reporters/base' {
  class base {
    constructor(runner: any);
    static cursor: any;
    static color: any;
    static list(items: any);
    static symbols: any;
    failures: any;
    stats: any;
  }

  export = base;
}

declare interface Suite {
  addTest: any;
  afterAll: any;
  afterEach: any;
  beforeAll: any;
  beforeEach: any;
  pending: any;
  on: any;
  timeout: any;
  title: any;

  create(suite: any, title: any): any;
}

declare module 'mocha/lib/suite' {
  export = Suite;
}

// ==================================================
// exported types
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare class FeatureConfig {
  retry(times: number): FeatureConfig;
  timeout(seconds: number): FeatureConfig;
  config(config: object): FeatureConfig;
  config(helperName: string, config: object): FeatureConfig;
}

declare class ScenarioConfig {
  throws(err: any): ScenarioConfig;
  fails(): ScenarioConfig;
  retry(times: number): ScenarioConfig;
  timeout(timeout: number): ScenarioConfig;
  inject(inject: object): ScenarioConfig;
  config(config: object): ScenarioConfig;
  config(helperName: string, config: object): ScenarioConfig;
}

interface ILocator {
  xpath?: string;
  css?: string;
  name?: string;
  value?: string;
  frame?: string;
  android?: string;
  ios?: string;
}

declare class Helper {
  /** Abstract method to provide required config options */
  static _config(): any;
  /** Abstract method to validate config */
  _validateConfig<T>(config: T): T;
  /** Sets config for current test */
  _setConfig(opts: any): void;
  /** Hook executed before all tests */
  _init(): void;
  /** Hook executed before each test. */
  _before(): void;
  /** Hook executed after each test */
  _after(): void;
  /**
   * Hook provides a test details
   * Executed in the very beginning of a test
   */
  _test(test: () => void): void;
  /** Hook executed after each passed test */
  _passed(test: () => void): void;
  /** Hook executed after each failed test */
  _failed(test: () => void): void;
  /** Hook executed before each step */
  _beforeStep(step: () => void): void;
  /** Hook executed after each step */
  _afterStep(step: () => void): void;
  /** Hook executed before each suite */
  _beforeSuite(suite: () => void): void;
  /** Hook executed after each suite */
  _afterSuite(suite: () => void): void;
  /** Hook executed after all tests are executed */
  _finishTest(suite: () => void): void;
  /**Access another configured helper: this.helpers['AnotherHelper'] */
  readonly helpers: any;
  /** Print debug message to console (outputs only in debug mode) */
  debug(msg: string): void;
  debugSection(section: string, msg: string): void;
}

declare class Locator implements ILocator {
  xpath?: string;
  css?: string;
  name?: string;
  value?: string;
  frame?: string;
  android?: string;
  ios?: string;

  or(locator: string): Locator;
  find(locator: string): Locator;
  withChild(locator: string): Locator;
  find(locator: string): Locator;
  at(position: number): Locator;
  first(): Locator;
  last(): Locator;
  inside(locator: string): Locator;
  before(locator: string): Locator;
  after(locator: string): Locator;
  withText(locator: string): Locator;
  withAttr(locator: object): Locator;
  as(locator: string): Locator;
}

declare function Feature(title: string, opts?: {}): FeatureConfig;
declare const Scenario: {
  (title: string, callback: ICodeceptCallback): ScenarioConfig;
  (title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, callback: ICodeceptCallback): ScenarioConfig;
  only(title: string, opts: {}, callback: ICodeceptCallback): ScenarioConfig;
};
declare function xScenario(
  title: string,
  callback: ICodeceptCallback
): ScenarioConfig;
declare function xScenario(
  title: string,
  opts: {},
  callback: ICodeceptCallback
): ScenarioConfig;
declare function Data(data: any): any;
declare function xData(data: any): any;
declare function Before(callback: ICodeceptCallback): void;
declare function BeforeSuite(callback: ICodeceptCallback): void;
declare function After(callback: ICodeceptCallback): void;
declare function AfterSuite(callback: ICodeceptCallback): void;

declare function locate(selector: string): Locator;
declare function locate(selector: ILocator): Locator;
declare function within(selector: string, callback: Function): Promise<any>;
declare function within(selector: ILocator, callback: Function): Promise<any>;
declare function session(selector: string, callback: Function): Promise<any>;
declare function session(selector: ILocator, callback: Function): Promise<any>;
declare function session(
  selector: string,
  config: any,
  callback: Function
): Promise<any>;
declare function session(
  selector: ILocator,
  config: any,
  callback: Function
): Promise<any>;
declare function pause(): void;

declare namespace CodeceptJS {
  export function Given(given: string, action: (...data: string[]) => void): void;
  export function When(when: string, action: (...data: string[]) => void): void;
  export function Then(then: string, action: (...data: string[]) => void): void;

  export interface I {
    appendField(field: ILocator, value: string): void;
    appendField(field: string, value: string): void;
    attachFile(locator: ILocator, pathToFile: string): void;
    attachFile(locator: string, pathToFile: string): void;
    checkOption(field: ILocator, context?: ILocator): void;
    checkOption(field: ILocator, context?: string): void;
    checkOption(field: string, context?: ILocator): void;
    checkOption(field: string, context?: string): void;
    clearField(field: ILocator): void;
    clearField(field: string): void;
    click(locator: ILocator, context?: ILocator): void;
    click(locator: ILocator, context?: string): void;
    click(locator: string, context?: ILocator): void;
    click(locator: string, context?: string): void;
    debug(msg: string): void;
    debugSection(section: string, msg: string): void;
    dontSee(text: string, context?: ILocator): void;
    dontSee(text: string, context?: string): void;
    dontSeeCheckboxIsChecked(field: ILocator): void;
    dontSeeCheckboxIsChecked(field: string): void;
    dontSeeCookie(name: string): void;
    dontSeeCurrentUrlEquals(url: string): void;
    dontSeeElement(locator: ILocator): void;
    dontSeeElement(locator: string): void;
    dontSeeElementInDOM(locator: ILocator): void;
    dontSeeElementInDOM(locator: string): void;
    dontSeeInCurrentUrl(url: string): void;
    dontSeeInField(field: ILocator, value: string): void;
    dontSeeInField(field: string, value: string): void;
    dontSeeInSource(text: string): void;
    dontSeeInTitle(text: string): void;
    doubleClick(locator: ILocator, context?: ILocator): void;
    doubleClick(locator: ILocator, context?: string): void;
    doubleClick(locator: string, context?: ILocator): void;
    doubleClick(locator: string, context?: string): void;
    executeAsyncScript(fn: Function): void;
    executeScript(fn: Function): void;
    fillField(field: ILocator, value: string): void;
    fillField(field: string, value: string): void;
    grabAttributeFrom(locator: ILocator, attr: string): Promise<string>;
    grabAttributeFrom(locator: string, attr: string): Promise<string>;
    grabCookie(name: string): Promise<string>;
    grabCurrentUrl(): Promise<string>;
    grabNumberOfVisibleElements(locator: ILocator): Promise<string>;
    grabNumberOfVisibleElements(locator: string): Promise<string>;
    grabPageScrollPosition(): Promise<string>;
    grabTextFrom(locator: ILocator): Promise<string>;
    grabTextFrom(locator: string): Promise<string>;
    grabTitle(): Promise<string>;
    grabValueFrom(locator: ILocator): Promise<string>;
    grabValueFrom(locator: string): Promise<string>;
    moveCursorTo(locator: ILocator, offsetX?: number, offsetY?: number): void;
    moveCursorTo(locator: string, offsetX?: number, offsetY?: number): void;
    pressKey(key: string): void;
    refreshPage(): void;
    resizeWindow(width: number, height: number): void;
    retryStep(opts: string): void;
    say: () => any;
    scrollPageToBottom(): void;
    scrollPageToTop(): void;
    scrollTo(locator: ILocator, offsetX?: number, offsetY?: number): void;
    scrollTo(locator: string, offsetX?: number, offsetY?: number): void;
    see(text: string, context?: ILocator): void;
    see(text: string, context?: string): void;
    seeCheckboxIsChecked(field: ILocator): void;
    seeCheckboxIsChecked(field: string): void;
    seeCookie(name: string): void;
    seeCurrentUrlEquals(url: string): void;
    seeElement(locator: ILocator): void;
    seeElement(locator: string): void;
    seeElementInDOM(locator: ILocator): void;
    seeElementInDOM(locator: string): void;
    seeInCurrentUrl(url: string): void;
    seeInField(field: ILocator, value: string): void;
    seeInField(field: string, value: string): void;
    seeInSource(text: string): void;
    seeInTitle(text: string): void;
    seeNumberOfElements(selector: string, num: number): void;
    seeNumberOfVisibleElements(locator: ILocator, num: number): void;
    seeNumberOfVisibleElements(locator: string, num: number): void;
    selectOption(select: ILocator, option: string): void;
    selectOption(select: string, option: string): void;
    setCookie(cookie: string): void;
    wait(sec: number): void;
    waitForFunction(fn: Function, argsOrSec?: string, sec?: number): void;
  }
}

/**
 * Unfortunately TS is not smart enough to infer the types correctly so this must be used like so:
 *
 * import 'codeceptjs';
 * import { I as BaseI } from 'codeceptjs/puppeteer';
 *
 * const loginAdmin = function(this: BaseI) {
 *   this.amOnPage('/login');
 *   // more code
 * };
 *
 * export const I = actor<BaseI, {
 *     loginAdmin: typeof loginAdmin;
 *   }>({
 *     // Define custom steps here, use 'this' to access default methods of I.
 *     loginAdmin,
 *   });
*/

type CustomAction<B extends CodeceptJS.I> = (this: B, ...args: any[]) => void;

declare function actor<
  B extends CodeceptJS.I,
  T extends {
    [action: string]: CustomAction<B>
  }
  >(customSteps?: T): B & T;

declare module 'codeceptjs' {
  export = CodeceptJS;
}

declare namespace CodeceptJSPuppeteer {
  export interface I extends CodeceptJS.I {
    acceptPopup(): void;
    amAcceptingPopups(): void;
    amCancellingPopups(): void;
    amOnPage(url: string): void;
    cancelPopup(): void;
    clearCookie(name: string): void;
    clickLink(locator: ILocator, context?: ILocator): void;
    clickLink(locator: ILocator, context?: string): void;
    clickLink(locator: string, context?: ILocator): void;
    clickLink(locator: string, context?: string): void;
    closeCurrentTab(): void;
    closeOtherTabs(): void;
    dragAndDrop(srcElement: string, destElement: string): void;
    dragSlider(locator: ILocator, offsetX?: number): void;
    dragSlider(locator: string, offsetX?: number): void;
    grabBrowserLogs(): Promise<string>;
    grabCssPropertyFrom(
      locator: ILocator,
      cssProperty: string
    ): Promise<string>;
    grabCssPropertyFrom(locator: string, cssProperty: string): Promise<string>;
    grabHTMLFrom(locator: ILocator): Promise<string>;
    grabHTMLFrom(locator: string): Promise<string>;
    grabNumberOfOpenTabs(): Promise<string>;
    grabPopupText(): Promise<string>;
    grabSource(): Promise<string>;
    haveRequestHeaders(customHeaders: string): void;
    openNewTab(): void;
    rightClick(locator: ILocator, context?: ILocator): void;
    rightClick(locator: ILocator, context?: string): void;
    rightClick(locator: string, context?: ILocator): void;
    rightClick(locator: string, context?: string): void;
    saveScreenshot(fileName: string, fullPage: string): void;
    seeAttributesOnElements(locator: ILocator, attributes: string): void;
    seeAttributesOnElements(locator: string, attributes: string): void;
    seeCssPropertiesOnElements(locator: ILocator, cssProperties: string): void;
    seeCssPropertiesOnElements(locator: string, cssProperties: string): void;
    seeInPopup(text: string): void;
    seeTextEquals(text: string, context?: ILocator): void;
    seeTextEquals(text: string, context?: string): void;
    seeTitleEquals(text: string): void;
    switchTo(locator: ILocator): void;
    switchTo(locator: string): void;
    switchToNextTab(num?: number): void;
    switchToPreviousTab(num?: number): void;
    waitForDetached(locator: ILocator, sec: number): void;
    waitForDetached(locator: string, sec: number): void;
    waitForElement(locator: ILocator, sec?: number): void;
    waitForElement(locator: string, sec?: number): void;
    waitForEnabled(locator: ILocator, sec: number): void;
    waitForEnabled(locator: string, sec: number): void;
    waitForInvisible(locator: ILocator, sec: number): void;
    waitForInvisible(locator: string, sec: number): void;
    waitForNavigation(opts?: string): void;
    waitForRequest(urlOrPredicate: string, sec?: number): void;
    waitForResponse(urlOrPredicate: string, sec?: number): void;
    waitForText(text: string, sec?: number, context?: ILocator): void;
    waitForText(text: string, sec?: number, context?: string): void;
    waitForValue(field: ILocator, value: string, sec: number): void;
    waitForValue(field: string, value: string, sec: number): void;
    waitForVisible(locator: ILocator, sec: number): void;
    waitForVisible(locator: string, sec: number): void;
    waitInUrl(urlPart: string, sec?: number): void;
    waitNumberOfVisibleElements(
      locator: string,
      num: number,
      sec: number
    ): void;
    waitNumberOfVisibleElements(
      locator: ILocator,
      num: number,
      sec: number
    ): void;
    waitToHide(locator: ILocator, sec: number): void;
    waitToHide(locator: string, sec: number): void;
    waitUntil(fn: Function, sec?: number): void;
    waitUntilExists(locator: ILocator, sec: number): void;
    waitUntilExists(locator: string, sec: number): void;
    waitUrlEquals(urlPart: string, sec?: number): void;
  }

}

declare module 'codeceptjs/puppeteer' {
  export = CodeceptJSPuppeteer;
}
