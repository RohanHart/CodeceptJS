// Type definitions for CodeceptJS 2.0.5
// Project: https://github.com/codeception/codeceptjs/
// Definitions by: Michael Bodnarchuk <http://github.com/DavertMik>, Drew Diamantoukos <https://github.com/KennyRules>

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
type LocatorDef = ILocator | string;

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

declare function Given(given: string, action: (...data: string[]) => void): void;
declare function When(when: string, action: (...data: string[]) => void): void;
declare function Then(then: string, action: (...data: string[]) => void): void;

declare namespace CodeceptJS {
  export interface I {
    appendField(field: LocatorDef, value: string): void;
    attachFile(locator: LocatorDef, pathToFile: string): void;
    checkOption(field: LocatorDef, context?: LocatorDef): void;
    clearField(field: LocatorDef): void;
    click(locator: LocatorDef, context?: LocatorDef): void;
    debug(msg: string): void;
    debugSection(section: string, msg: string): void;
    dontSee(text: string, context?: LocatorDef): void;
    dontSeeCheckboxIsChecked(field: LocatorDef): void;
    dontSeeCookie(name: string): void;
    dontSeeCurrentUrlEquals(url: string): void;
    dontSeeElement(locator: LocatorDef): void;
    dontSeeElementInDOM(locator: LocatorDef): void;
    dontSeeInCurrentUrl(url: string): void;
    dontSeeInField(field: LocatorDef, value: string): void;
    dontSeeInSource(text: string): void;
    dontSeeInTitle(text: string): void;
    doubleClick(locator: LocatorDef, context?: LocatorDef): void;
    executeAsyncScript(fn: Function): void;
    executeScript(fn: Function): void;
    fillField(field: LocatorDef, value: string): void;
    grabAttributeFrom(locator: LocatorDef, attr: string): Promise<string>;
    grabCookie(name: string): Promise<string>;
    grabCurrentUrl(): Promise<string>;
    grabNumberOfVisibleElements(locator: LocatorDef): Promise<string>;
    grabPageScrollPosition(): Promise<string>;
    grabTextFrom(locator: LocatorDef): Promise<string>;
    grabTitle(): Promise<string>;
    grabValueFrom(locator: LocatorDef): Promise<string>;
    moveCursorTo(locator: LocatorDef, offsetX?: number, offsetY?: number): void;
    pressKey(key: string): void;
    refreshPage(): void;
    resizeWindow(width: number, height: number): void;
    scrollPageToBottom(): void;
    scrollPageToTop(): void;
    scrollTo(locator: LocatorDef, offsetX?: number, offsetY?: number): void;
    see(text: string, context?: LocatorDef): void;
    seeCheckboxIsChecked(field: LocatorDef): void;
    seeCookie(name: string): void;
    seeCurrentUrlEquals(url: string): void;
    seeElement(locator: LocatorDef): void;
    seeElementInDOM(locator: LocatorDef): void;
    seeInCurrentUrl(url: string): void;
    seeInField(field: LocatorDef, value: string): void;
    seeInSource(text: string): void;
    seeInTitle(text: string): void;
    seeNumberOfElements(selector: string, num: number): void;
    seeNumberOfVisibleElements(locator: LocatorDef, num: number): void;
    selectOption(select: LocatorDef, option: string): void;
    setCookie(cookie: string): void;
    wait(sec: number): void;
    waitForFunction(fn: Function, argsOrSec?: string, sec?: number): void;
  }

  interface ActorAdditional {
    retryStep(opts: string): void;
    say: () => any;
  }

  export interface PuppeteerI extends I {
    acceptPopup(): void;
    amAcceptingPopups(): void;
    amCancellingPopups(): void;
    amOnPage(url: string): void;
    cancelPopup(): void;
    clearCookie(name: string): void;
    clickLink(locator: LocatorDef, context?: LocatorDef): void;
    closeCurrentTab(): void;
    closeOtherTabs(): void;
    dragAndDrop(srcElement: string, destElement: string): void;
    dragSlider(locator: LocatorDef, offsetX?: number): void;
    grabBrowserLogs(): Promise<string>;
    grabCssPropertyFrom(locator: LocatorDef, cssProperty: string): Promise<string>;
    grabHTMLFrom(locator: LocatorDef): Promise<string>;
    grabNumberOfOpenTabs(): Promise<string>;
    grabPopupText(): Promise<string>;
    grabSource(): Promise<string>;
    haveRequestHeaders(customHeaders: string): void;
    openNewTab(): void;
    rightClick(locator: LocatorDef, context?: LocatorDef): void;
    saveScreenshot(fileName: string, fullPage: string): void;
    seeAttributesOnElements(locator: LocatorDef, attributes: string): void;
    seeCssPropertiesOnElements(locator: LocatorDef, cssProperties: string): void;
    seeInPopup(text: string): void;
    seeTextEquals(text: string, context?: LocatorDef): void;
    seeTitleEquals(text: string): void;
    switchTo(locator: LocatorDef): void;
    switchToNextTab(num?: number): void;
    switchToPreviousTab(num?: number): void;
    waitForDetached(locator: LocatorDef, sec: number): void;
    waitForElement(locator: LocatorDef, sec?: number): void;
    waitForEnabled(locator: LocatorDef, sec: number): void;
    waitForInvisible(locator: LocatorDef, sec: number): void;
    waitForNavigation(opts?: string): void;
    waitForRequest(urlOrPredicate: string, sec?: number): void;
    waitForResponse(urlOrPredicate: string, sec?: number): void;
    waitForText(text: string, sec?: number, context?: LocatorDef): void;
    waitForValue(field: LocatorDef, value: string, sec: number): void;
    waitForVisible(locator: LocatorDef, sec: number): void;
    waitInUrl(urlPart: string, sec?: number): void;
    waitNumberOfVisibleElements(locator: LocatorDef, num: number, sec: number): void;
    waitToHide(locator: LocatorDef, sec: number): void;
    waitUntil(fn: Function, sec?: number): void;
    waitUntilExists(locator: LocatorDef, sec: number): void;
    waitUrlEquals(urlPart: string, sec?: number): void;
  }

  export interface ProtractorI extends I {
    amInsideAngularApp(): void;
    amOnPage(url: string): void;
    amOutsideAngularApp(): void;
    clearCookie(cookie?: string): void;
    closeCurrentTab(): void;
    closeOtherTabs(): void;
    dragAndDrop(srcElement: string, destElement: string): void;
    grabBrowserLogs(): Promise<string>;
    grabCssPropertyFrom(locator: ILocator, cssProperty: string): Promise<string>;
    grabCssPropertyFrom(locator: string, cssProperty: string): Promise<string>;
    grabHTMLFrom(locator: ILocator): Promise<string>;
    grabHTMLFrom(locator: string): Promise<string>;
    grabNumberOfOpenTabs(): Promise<string>;
    grabSource(): Promise<string>;
    haveModule(modName: string, fn: Function): void;
    moveTo(path: string): void;
    refresh(): void;
    refreshPage(): void;
    resetModule(modName: string): void;
    resizeWindow(width: number, height: number): void;
    rightClick(locator: ILocator, context?: ILocator): void;
    rightClick(locator: ILocator, context?: string): void;
    rightClick(locator: string, context?: ILocator): void;
    rightClick(locator: string, context?: string): void;
    saveScreenshot(fileName: string, fullPage?: string): void;
    seeAttributesOnElements(locator: ILocator, attributes: string): void;
    seeAttributesOnElements(locator: string, attributes: string): void;
    seeCssPropertiesOnElements(locator: ILocator, cssProperties: string): void;
    seeCssPropertiesOnElements(locator: string, cssProperties: string): void;
    seeInCurrentUrl(url: string): void;
    seeInPopup(text: string): void;
    seeTextEquals(text: string, context?: ILocator): void;
    seeTextEquals(text: string, context?: string): void;
    seeTitleEquals(text: string): void;
    setCookie(cookie: string): void;
    switchTo(locator: ILocator): void;
    switchTo(locator: string): void;
    waitForClickable(locator: ILocator, sec?: number): void;
    waitForClickable(locator: string, sec?: number): void;
    waitForDetached(locator: ILocator, sec?: number): void;
    waitForDetached(locator: string, sec?: number): void;
    waitForEnabled(locator: ILocator, sec?: number): void;
    waitForEnabled(locator: string, sec?: number): void;
    waitForInvisible(locator: ILocator, sec?: number): void;
    waitForInvisible(locator: string, sec?: number): void;
    waitForStalenessOf(locator: ILocator, sec?: number): void;
    waitForStalenessOf(locator: string, sec?: number): void;
    waitForText(text: string, sec?: number, context?: ILocator): void;
    waitForText(text: string, sec?: number, context?: string): void;
    waitForVisible(locator: ILocator, sec?: number): void;
    waitForVisible(locator: string, sec?: number): void;
    waitNumberOfVisibleElements(locator: ILocator, num: number, sec?: number): void;
    waitNumberOfVisibleElements(locator: string, num: number, sec?: number): void;
    waitToHide(locator: ILocator, sec?: number): void;
    waitToHide(locator: string, sec?: number): void;
    waitUntil(fn: Function, sec?: number, timeoutMsg?: string): void;
    waitUntilExists(locator: ILocator, sec?: number): void;
    waitUntilExists(locator: string, sec?: number): void;
  }
}

/**
 * Unfortunately TS is not smart enough to infer the types correctly so this must be used like so:
 *
 * import 'codeceptjs';
 * import { PuppeteerI as BaseI } from 'codeceptjs';
 *
 * // Define custom steps using 'this' to access default methods of I.
 * const loginAdmin = function(this: BaseI) {
 *   this.amOnPage('/login');
 *   // more code
 * };
 *
 * export const I = actor<BaseI, {
 *     // one line for each custom step's type
 *     loginAdmin: typeof loginAdmin;
 *   }>({
 *     // one line for each custom step
 *     loginAdmin,
 *   });
*/
declare function actor<
    B extends CodeceptJS.I,
    T extends { [action: string]: CustomAction<B> }
  >
  (customSteps?: T): B & T & CodeceptJS.ActorAdditional;

type CustomAction<B extends CodeceptJS.I> = (this: B, ...args: any[]) => void;

declare module 'codeceptjs' {
  export = CodeceptJS;
}
