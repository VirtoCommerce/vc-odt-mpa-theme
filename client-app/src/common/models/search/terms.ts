import { TermsItems } from './terms-items';

export class Terms {
    items: TermsItems = {};

    toggle(key: string, value: string) {
      if (this.isKeyValueExists(key, value)){
        this.removeValue(key, value);
        if (this.hasAnyValue(key)){
          this.removeKey(key);
        }
      } else {
        if (!this.isKeyExists(key)){
          this.items[key] = [];
        }
        this.addValue(key, value);
      }
    }

    serialize(): string {
      return Object.entries(this.items).map(([key, values]) => `${key}:${values.join(',')}`).join(';')
    }

    deserialize(value?: string): Terms {
      this.items = value?.split(';').reduce((result, term) => {
        const [key, values] = term.split(':');
        result[key] = values.split(',');
        return result;
      }, {} as TermsItems) || {};
      return this;
    }

    private isKeyValueExists(key: string, value: string): boolean {
      return this.items[key]?.includes(value);
    }

    private isKeyExists(key: string){
      return key in this.items;
    }

    private hasAnyValue(key: string): boolean {
      return this.items[key].length == 0;
    }

    private addValue(key: string, value: string){
      return this.items[key].push(value);
    }

    private removeKey(key: string) {
      delete this.items[key];
    }

    private removeValue(key: string, value: string) {
      this.items[key].splice(this.items[key].indexOf(value), 1);
    }
}
