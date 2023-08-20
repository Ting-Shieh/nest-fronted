export interface FormItem {
  /** label */
  field: string;
  /** 限定以下三種類型才可選擇 */
  type: 'input' | 'checkbox' | 'radio';
  /** v-model */
  prop: string;
  /**  */
  attr?: {
    placeholder: string;
  };
  /**  */
  value?: string | number | Record<string, any>[] | { [key: string]: any };
  /** 'checkbox' | 'radio' 會有選單 */
  children?: Array<any>;
}
