import { TermsItems } from './terms-items';

export class Terms {
    items: TermsItems = {};

    toggle(key: string, value: string) {
      // if key & value exists
      if (this.items[key]?.includes(value)){
        // remove value
        this.items[key].splice(this.items[key].indexOf(value), 1);
        // if no more values
        if (this.items[key].length == 0){
          // remove key
          delete this.items[key];
        }
      } else {
        // create array of values if wasn't exist
        if (!this.items[key]){
          this.items[key] = [];
        }
        // add value
        this.items[key].push(value);
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
}
