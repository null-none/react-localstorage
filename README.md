# reactLocalStorage
Easy use localstorage in Reactjs


## Installation

```bash
npm install reactjs-localstorage
```
or
```bash
yarn add reactjs-localstorage
```

## Examples

```javascript
import {reactLocalStorage} from 'reactjs-localstorage';

reactLocalStorage.set('var', true);
reactLocalStorage.get('var', true);
reactLocalStorage.setObject('var', {'test': 'test'});
reactLocalStorage.getObject('var');
reactLocalStorage.remove('var');
reactLocalStorage.clear();
```

## API Guide
- `reactLocalStorage.set(key, value)`
- `reactLocalStorage.get(key, deafultValue=undefined, silent=true)`
- `reactLocalStorage.setObject(key, object)`
- `reactLoacStorage.getObject(key, defaultValue={}, silent=true)`
- `reactLocalStorage.remove(key)`
- `reactLocalStorage.clear()`

**silent**:
- `true`: Will not throw exception instead will return defaultValue
- `false`: Will throw exception

## License
MIT

## Donation Button

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YYZQ6ZRZ3EW5C)
