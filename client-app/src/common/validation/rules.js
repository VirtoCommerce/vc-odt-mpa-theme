import { extend } from 'vee-validate';

extend('before', {
  params: ['target'],
  validate(value, { target }) {
    console.log('before');
    console.log('target: ', target);
    if (value && target) {
       console.log('Результат сравнения: ', value <= target)
      return value <= target;
    } else {
      return true
    }
  }
});

extend('after', {
  params: ['target'],
  validate(value, { target }) {
    console.log('after')
    console.log('target: ', target);
    if (value && target) {
      console.log('Результат сравнения: ', value >= target)
      return value >= target;
    } else {
      return true
    }
  }
});

